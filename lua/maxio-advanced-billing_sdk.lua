-- MaxioAdvancedBilling SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("maxio-advanced-billing_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local MaxioAdvancedBillingSDK = {}
MaxioAdvancedBillingSDK.__index = MaxioAdvancedBillingSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

MaxioAdvancedBillingSDK._make_feature = _make_feature


function MaxioAdvancedBillingSDK.new(options)
  local self = setmetatable({}, MaxioAdvancedBillingSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function MaxioAdvancedBillingSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function MaxioAdvancedBillingSDK:get_utility()
  return Utility.copy(self._utility)
end


function MaxioAdvancedBillingSDK:get_root_ctx()
  return self._rootctx
end


function MaxioAdvancedBillingSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function MaxioAdvancedBillingSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function MaxioAdvancedBillingSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function MaxioAdvancedBillingSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "MaxioAdvancedBillingSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function MaxioAdvancedBillingSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function MaxioAdvancedBillingSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "MaxioAdvancedBillingSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AccountBalance():list() / client:AccountBalance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:AccountBalance(data)
  local EntityMod = require("entity.account_balance_entity")
  if data == nil then
    if self._account_balance == nil then
      self._account_balance = EntityMod.new(self, nil)
    end
    return self._account_balance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Allocation():list() / client:Allocation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Allocation(data)
  local EntityMod = require("entity.allocation_entity")
  if data == nil then
    if self._allocation == nil then
      self._allocation = EntityMod.new(self, nil)
    end
    return self._allocation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BatchJob():list() / client:BatchJob():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:BatchJob(data)
  local EntityMod = require("entity.batch_job_entity")
  if data == nil then
    if self._batch_job == nil then
      self._batch_job = EntityMod.new(self, nil)
    end
    return self._batch_job
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillingPortal():list() / client:BillingPortal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:BillingPortal(data)
  local EntityMod = require("entity.billing_portal_entity")
  if data == nil then
    if self._billing_portal == nil then
      self._billing_portal = EntityMod.new(self, nil)
    end
    return self._billing_portal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Component():list() / client:Component():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Component(data)
  local EntityMod = require("entity.component_entity")
  if data == nil then
    if self._component == nil then
      self._component = EntityMod.new(self, nil)
    end
    return self._component
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ComponentFeature():list() / client:ComponentFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ComponentFeature(data)
  local EntityMod = require("entity.component_feature_entity")
  if data == nil then
    if self._component_feature == nil then
      self._component_feature = EntityMod.new(self, nil)
    end
    return self._component_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ComponentPricePoint():list() / client:ComponentPricePoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ComponentPricePoint(data)
  local EntityMod = require("entity.component_price_point_entity")
  if data == nil then
    if self._component_price_point == nil then
      self._component_price_point = EntityMod.new(self, nil)
    end
    return self._component_price_point
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ComponentPricePointCurrencyOverage():list() / client:ComponentPricePointCurrencyOverage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ComponentPricePointCurrencyOverage(data)
  local EntityMod = require("entity.component_price_point_currency_overage_entity")
  if data == nil then
    if self._component_price_point_currency_overage == nil then
      self._component_price_point_currency_overage = EntityMod.new(self, nil)
    end
    return self._component_price_point_currency_overage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Coupon():list() / client:Coupon():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Coupon(data)
  local EntityMod = require("entity.coupon_entity")
  if data == nil then
    if self._coupon == nil then
      self._coupon = EntityMod.new(self, nil)
    end
    return self._coupon
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CouponCurrency():list() / client:CouponCurrency():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:CouponCurrency(data)
  local EntityMod = require("entity.coupon_currency_entity")
  if data == nil then
    if self._coupon_currency == nil then
      self._coupon_currency = EntityMod.new(self, nil)
    end
    return self._coupon_currency
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CouponSubcode():list() / client:CouponSubcode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:CouponSubcode(data)
  local EntityMod = require("entity.coupon_subcode_entity")
  if data == nil then
    if self._coupon_subcode == nil then
      self._coupon_subcode = EntityMod.new(self, nil)
    end
    return self._coupon_subcode
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CouponUsage():list() / client:CouponUsage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:CouponUsage(data)
  local EntityMod = require("entity.coupon_usage_entity")
  if data == nil then
    if self._coupon_usage == nil then
      self._coupon_usage = EntityMod.new(self, nil)
    end
    return self._coupon_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomField():list() / client:CustomField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:CustomField(data)
  local EntityMod = require("entity.custom_field_entity")
  if data == nil then
    if self._custom_field == nil then
      self._custom_field = EntityMod.new(self, nil)
    end
    return self._custom_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DelayedCancel():list() / client:DelayedCancel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:DelayedCancel(data)
  local EntityMod = require("entity.delayed_cancel_entity")
  if data == nil then
    if self._delayed_cancel == nil then
      self._delayed_cancel = EntityMod.new(self, nil)
    end
    return self._delayed_cancel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Endpoint():list() / client:Endpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Endpoint(data)
  local EntityMod = require("entity.endpoint_entity")
  if data == nil then
    if self._endpoint == nil then
      self._endpoint = EntityMod.new(self, nil)
    end
    return self._endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Entitlement():list() / client:Entitlement():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Entitlement(data)
  local EntityMod = require("entity.entitlement_entity")
  if data == nil then
    if self._entitlement == nil then
      self._entitlement = EntityMod.new(self, nil)
    end
    return self._entitlement
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EventsBasedBillingSegment():list() / client:EventsBasedBillingSegment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:EventsBasedBillingSegment(data)
  local EntityMod = require("entity.events_based_billing_segment_entity")
  if data == nil then
    if self._events_based_billing_segment == nil then
      self._events_based_billing_segment = EntityMod.new(self, nil)
    end
    return self._events_based_billing_segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Feature():list() / client:Feature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Feature(data)
  local EntityMod = require("entity.feature_entity")
  if data == nil then
    if self._feature == nil then
      self._feature = EntityMod.new(self, nil)
    end
    return self._feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeatureCatalogItem():list() / client:FeatureCatalogItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:FeatureCatalogItem(data)
  local EntityMod = require("entity.feature_catalog_item_entity")
  if data == nil then
    if self._feature_catalog_item == nil then
      self._feature_catalog_item = EntityMod.new(self, nil)
    end
    return self._feature_catalog_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FeatureTemplate():list() / client:FeatureTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:FeatureTemplate(data)
  local EntityMod = require("entity.feature_template_entity")
  if data == nil then
    if self._feature_template == nil then
      self._feature_template = EntityMod.new(self, nil)
    end
    return self._feature_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Insight():list() / client:Insight():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Insight(data)
  local EntityMod = require("entity.insight_entity")
  if data == nil then
    if self._insight == nil then
      self._insight = EntityMod.new(self, nil)
    end
    return self._insight
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Invoice():list() / client:Invoice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Invoice(data)
  local EntityMod = require("entity.invoice_entity")
  if data == nil then
    if self._invoice == nil then
      self._invoice = EntityMod.new(self, nil)
    end
    return self._invoice
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSaleRepItem():list() / client:ListSaleRepItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ListSaleRepItem(data)
  local EntityMod = require("entity.list_sale_rep_item_entity")
  if data == nil then
    if self._list_sale_rep_item == nil then
      self._list_sale_rep_item = EntityMod.new(self, nil)
    end
    return self._list_sale_rep_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ListSegment():list() / client:ListSegment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ListSegment(data)
  local EntityMod = require("entity.list_segment_entity")
  if data == nil then
    if self._list_segment == nil then
      self._list_segment = EntityMod.new(self, nil)
    end
    return self._list_segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Offer():list() / client:Offer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Offer(data)
  local EntityMod = require("entity.offer_entity")
  if data == nil then
    if self._offer == nil then
      self._offer = EntityMod.new(self, nil)
    end
    return self._offer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OneTimeToken():list() / client:OneTimeToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:OneTimeToken(data)
  local EntityMod = require("entity.one_time_token_entity")
  if data == nil then
    if self._one_time_token == nil then
      self._one_time_token = EntityMod.new(self, nil)
    end
    return self._one_time_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PaymentProfile():list() / client:PaymentProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:PaymentProfile(data)
  local EntityMod = require("entity.payment_profile_entity")
  if data == nil then
    if self._payment_profile == nil then
      self._payment_profile = EntityMod.new(self, nil)
    end
    return self._payment_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Prepayment():list() / client:Prepayment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Prepayment(data)
  local EntityMod = require("entity.prepayment_entity")
  if data == nil then
    if self._prepayment == nil then
      self._prepayment = EntityMod.new(self, nil)
    end
    return self._prepayment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Product():list() / client:Product():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Product(data)
  local EntityMod = require("entity.product_entity")
  if data == nil then
    if self._product == nil then
      self._product = EntityMod.new(self, nil)
    end
    return self._product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductFamily():list() / client:ProductFamily():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ProductFamily(data)
  local EntityMod = require("entity.product_family_entity")
  if data == nil then
    if self._product_family == nil then
      self._product_family = EntityMod.new(self, nil)
    end
    return self._product_family
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductFeature():list() / client:ProductFeature():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ProductFeature(data)
  local EntityMod = require("entity.product_feature_entity")
  if data == nil then
    if self._product_feature == nil then
      self._product_feature = EntityMod.new(self, nil)
    end
    return self._product_feature
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProductPricePoint():list() / client:ProductPricePoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ProductPricePoint(data)
  local EntityMod = require("entity.product_price_point_entity")
  if data == nil then
    if self._product_price_point == nil then
      self._product_price_point = EntityMod.new(self, nil)
    end
    return self._product_price_point
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ProformaInvoice():list() / client:ProformaInvoice():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ProformaInvoice(data)
  local EntityMod = require("entity.proforma_invoice_entity")
  if data == nil then
    if self._proforma_invoice == nil then
      self._proforma_invoice = EntityMod.new(self, nil)
    end
    return self._proforma_invoice
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReasonCode():list() / client:ReasonCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ReasonCode(data)
  local EntityMod = require("entity.reason_code_entity")
  if data == nil then
    if self._reason_code == nil then
      self._reason_code = EntityMod.new(self, nil)
    end
    return self._reason_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReferralCode():list() / client:ReferralCode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:ReferralCode(data)
  local EntityMod = require("entity.referral_code_entity")
  if data == nil then
    if self._referral_code == nil then
      self._referral_code = EntityMod.new(self, nil)
    end
    return self._referral_code
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SaleRepSetting():list() / client:SaleRepSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SaleRepSetting(data)
  local EntityMod = require("entity.sale_rep_setting_entity")
  if data == nil then
    if self._sale_rep_setting == nil then
      self._sale_rep_setting = EntityMod.new(self, nil)
    end
    return self._sale_rep_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SalesCommission():list() / client:SalesCommission():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SalesCommission(data)
  local EntityMod = require("entity.sales_commission_entity")
  if data == nil then
    if self._sales_commission == nil then
      self._sales_commission = EntityMod.new(self, nil)
    end
    return self._sales_commission
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Segment():list() / client:Segment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Segment(data)
  local EntityMod = require("entity.segment_entity")
  if data == nil then
    if self._segment == nil then
      self._segment = EntityMod.new(self, nil)
    end
    return self._segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SignupProformaPreview():list() / client:SignupProformaPreview():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SignupProformaPreview(data)
  local EntityMod = require("entity.signup_proforma_preview_entity")
  if data == nil then
    if self._signup_proforma_preview == nil then
      self._signup_proforma_preview = EntityMod.new(self, nil)
    end
    return self._signup_proforma_preview
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Site():list() / client:Site():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Site(data)
  local EntityMod = require("entity.site_entity")
  if data == nil then
    if self._site == nil then
      self._site = EntityMod.new(self, nil)
    end
    return self._site
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Subscription():list() / client:Subscription():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Subscription(data)
  local EntityMod = require("entity.subscription_entity")
  if data == nil then
    if self._subscription == nil then
      self._subscription = EntityMod.new(self, nil)
    end
    return self._subscription
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionComponent():list() / client:SubscriptionComponent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionComponent(data)
  local EntityMod = require("entity.subscription_component_entity")
  if data == nil then
    if self._subscription_component == nil then
      self._subscription_component = EntityMod.new(self, nil)
    end
    return self._subscription_component
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionGroup():list() / client:SubscriptionGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionGroup(data)
  local EntityMod = require("entity.subscription_group_entity")
  if data == nil then
    if self._subscription_group == nil then
      self._subscription_group = EntityMod.new(self, nil)
    end
    return self._subscription_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionGroupInvoiceAccount():list() / client:SubscriptionGroupInvoiceAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionGroupInvoiceAccount(data)
  local EntityMod = require("entity.subscription_group_invoice_account_entity")
  if data == nil then
    if self._subscription_group_invoice_account == nil then
      self._subscription_group_invoice_account = EntityMod.new(self, nil)
    end
    return self._subscription_group_invoice_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionGroupSignup():list() / client:SubscriptionGroupSignup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionGroupSignup(data)
  local EntityMod = require("entity.subscription_group_signup_entity")
  if data == nil then
    if self._subscription_group_signup == nil then
      self._subscription_group_signup = EntityMod.new(self, nil)
    end
    return self._subscription_group_signup
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionGroupStatus():list() / client:SubscriptionGroupStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionGroupStatus(data)
  local EntityMod = require("entity.subscription_group_status_entity")
  if data == nil then
    if self._subscription_group_status == nil then
      self._subscription_group_status = EntityMod.new(self, nil)
    end
    return self._subscription_group_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionInvoiceAccount():list() / client:SubscriptionInvoiceAccount():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionInvoiceAccount(data)
  local EntityMod = require("entity.subscription_invoice_account_entity")
  if data == nil then
    if self._subscription_invoice_account == nil then
      self._subscription_invoice_account = EntityMod.new(self, nil)
    end
    return self._subscription_invoice_account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionMrr():list() / client:SubscriptionMrr():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionMrr(data)
  local EntityMod = require("entity.subscription_mrr_entity")
  if data == nil then
    if self._subscription_mrr == nil then
      self._subscription_mrr = EntityMod.new(self, nil)
    end
    return self._subscription_mrr
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionNote():list() / client:SubscriptionNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionNote(data)
  local EntityMod = require("entity.subscription_note_entity")
  if data == nil then
    if self._subscription_note == nil then
      self._subscription_note = EntityMod.new(self, nil)
    end
    return self._subscription_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionProduct():list() / client:SubscriptionProduct():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionProduct(data)
  local EntityMod = require("entity.subscription_product_entity")
  if data == nil then
    if self._subscription_product == nil then
      self._subscription_product = EntityMod.new(self, nil)
    end
    return self._subscription_product
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionRenewal():list() / client:SubscriptionRenewal():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionRenewal(data)
  local EntityMod = require("entity.subscription_renewal_entity")
  if data == nil then
    if self._subscription_renewal == nil then
      self._subscription_renewal = EntityMod.new(self, nil)
    end
    return self._subscription_renewal
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionStatus():list() / client:SubscriptionStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:SubscriptionStatus(data)
  local EntityMod = require("entity.subscription_status_entity")
  if data == nil then
    if self._subscription_status == nil then
      self._subscription_status = EntityMod.new(self, nil)
    end
    return self._subscription_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Usage():list() / client:Usage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Usage(data)
  local EntityMod = require("entity.usage_entity")
  if data == nil then
    if self._usage == nil then
      self._usage = EntityMod.new(self, nil)
    end
    return self._usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function MaxioAdvancedBillingSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function MaxioAdvancedBillingSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = MaxioAdvancedBillingSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return MaxioAdvancedBillingSDK
