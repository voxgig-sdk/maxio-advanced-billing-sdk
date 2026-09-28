# MaxioAdvancedBilling SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'MaxioAdvancedBilling_types'


class MaxioAdvancedBillingSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = MaxioAdvancedBillingUtility.new
    @_utility = utility

    config = MaxioAdvancedBillingConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = MaxioAdvancedBillingHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = MaxioAdvancedBillingHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, MaxioAdvancedBillingFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    MaxioAdvancedBillingUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = MaxioAdvancedBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = MaxioAdvancedBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = MaxioAdvancedBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = MaxioAdvancedBillingSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => MaxioAdvancedBillingError.new(
        "#{op}_allow",
        "MaxioAdvancedBillingSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue MaxioAdvancedBillingError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = MaxioAdvancedBillingHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = MaxioAdvancedBillingHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = MaxioAdvancedBillingError.new(
        "graphql_error", "MaxioAdvancedBillingSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AccountBalance.list / client.AccountBalance.load({ "id" => ... })
  def AccountBalance(data = nil)
    require_relative 'entity/account_balance_entity'
    AccountBalanceEntity.new(self, data)
  end


  # Canonical facade: client.Allocation.list / client.Allocation.load({ "id" => ... })
  def Allocation(data = nil)
    require_relative 'entity/allocation_entity'
    AllocationEntity.new(self, data)
  end


  # Canonical facade: client.BatchJob.list / client.BatchJob.load({ "id" => ... })
  def BatchJob(data = nil)
    require_relative 'entity/batch_job_entity'
    BatchJobEntity.new(self, data)
  end


  # Canonical facade: client.BillingPortal.list / client.BillingPortal.load({ "id" => ... })
  def BillingPortal(data = nil)
    require_relative 'entity/billing_portal_entity'
    BillingPortalEntity.new(self, data)
  end


  # Canonical facade: client.Component.list / client.Component.load({ "id" => ... })
  def Component(data = nil)
    require_relative 'entity/component_entity'
    ComponentEntity.new(self, data)
  end


  # Canonical facade: client.ComponentFeature.list / client.ComponentFeature.load({ "id" => ... })
  def ComponentFeature(data = nil)
    require_relative 'entity/component_feature_entity'
    ComponentFeatureEntity.new(self, data)
  end


  # Canonical facade: client.ComponentPricePoint.list / client.ComponentPricePoint.load({ "id" => ... })
  def ComponentPricePoint(data = nil)
    require_relative 'entity/component_price_point_entity'
    ComponentPricePointEntity.new(self, data)
  end


  # Canonical facade: client.ComponentPricePointCurrencyOverage.list / client.ComponentPricePointCurrencyOverage.load({ "id" => ... })
  def ComponentPricePointCurrencyOverage(data = nil)
    require_relative 'entity/component_price_point_currency_overage_entity'
    ComponentPricePointCurrencyOverageEntity.new(self, data)
  end


  # Canonical facade: client.Coupon.list / client.Coupon.load({ "id" => ... })
  def Coupon(data = nil)
    require_relative 'entity/coupon_entity'
    CouponEntity.new(self, data)
  end


  # Canonical facade: client.CouponCurrency.list / client.CouponCurrency.load({ "id" => ... })
  def CouponCurrency(data = nil)
    require_relative 'entity/coupon_currency_entity'
    CouponCurrencyEntity.new(self, data)
  end


  # Canonical facade: client.CouponSubcode.list / client.CouponSubcode.load({ "id" => ... })
  def CouponSubcode(data = nil)
    require_relative 'entity/coupon_subcode_entity'
    CouponSubcodeEntity.new(self, data)
  end


  # Canonical facade: client.CouponUsage.list / client.CouponUsage.load({ "id" => ... })
  def CouponUsage(data = nil)
    require_relative 'entity/coupon_usage_entity'
    CouponUsageEntity.new(self, data)
  end


  # Canonical facade: client.CustomField.list / client.CustomField.load({ "id" => ... })
  def CustomField(data = nil)
    require_relative 'entity/custom_field_entity'
    CustomFieldEntity.new(self, data)
  end


  # Canonical facade: client.Customer.list / client.Customer.load({ "id" => ... })
  def Customer(data = nil)
    require_relative 'entity/customer_entity'
    CustomerEntity.new(self, data)
  end


  # Canonical facade: client.DelayedCancel.list / client.DelayedCancel.load({ "id" => ... })
  def DelayedCancel(data = nil)
    require_relative 'entity/delayed_cancel_entity'
    DelayedCancelEntity.new(self, data)
  end


  # Canonical facade: client.Endpoint.list / client.Endpoint.load({ "id" => ... })
  def Endpoint(data = nil)
    require_relative 'entity/endpoint_entity'
    EndpointEntity.new(self, data)
  end


  # Canonical facade: client.Entitlement.list / client.Entitlement.load({ "id" => ... })
  def Entitlement(data = nil)
    require_relative 'entity/entitlement_entity'
    EntitlementEntity.new(self, data)
  end


  # Canonical facade: client.Event.list / client.Event.load({ "id" => ... })
  def Event(data = nil)
    require_relative 'entity/event_entity'
    EventEntity.new(self, data)
  end


  # Canonical facade: client.EventsBasedBillingSegment.list / client.EventsBasedBillingSegment.load({ "id" => ... })
  def EventsBasedBillingSegment(data = nil)
    require_relative 'entity/events_based_billing_segment_entity'
    EventsBasedBillingSegmentEntity.new(self, data)
  end


  # Canonical facade: client.Feature.list / client.Feature.load({ "id" => ... })
  def Feature(data = nil)
    require_relative 'entity/feature_entity'
    FeatureEntity.new(self, data)
  end


  # Canonical facade: client.FeatureCatalogItem.list / client.FeatureCatalogItem.load({ "id" => ... })
  def FeatureCatalogItem(data = nil)
    require_relative 'entity/feature_catalog_item_entity'
    FeatureCatalogItemEntity.new(self, data)
  end


  # Canonical facade: client.FeatureTemplate.list / client.FeatureTemplate.load({ "id" => ... })
  def FeatureTemplate(data = nil)
    require_relative 'entity/feature_template_entity'
    FeatureTemplateEntity.new(self, data)
  end


  # Canonical facade: client.Insight.list / client.Insight.load({ "id" => ... })
  def Insight(data = nil)
    require_relative 'entity/insight_entity'
    InsightEntity.new(self, data)
  end


  # Canonical facade: client.Invoice.list / client.Invoice.load({ "id" => ... })
  def Invoice(data = nil)
    require_relative 'entity/invoice_entity'
    InvoiceEntity.new(self, data)
  end


  # Canonical facade: client.ListProformaInvoice.list / client.ListProformaInvoice.load({ "id" => ... })
  def ListProformaInvoice(data = nil)
    require_relative 'entity/list_proforma_invoice_entity'
    ListProformaInvoiceEntity.new(self, data)
  end


  # Canonical facade: client.ListSaleRepItem.list / client.ListSaleRepItem.load({ "id" => ... })
  def ListSaleRepItem(data = nil)
    require_relative 'entity/list_sale_rep_item_entity'
    ListSaleRepItemEntity.new(self, data)
  end


  # Canonical facade: client.ListSegment.list / client.ListSegment.load({ "id" => ... })
  def ListSegment(data = nil)
    require_relative 'entity/list_segment_entity'
    ListSegmentEntity.new(self, data)
  end


  # Canonical facade: client.Offer.list / client.Offer.load({ "id" => ... })
  def Offer(data = nil)
    require_relative 'entity/offer_entity'
    OfferEntity.new(self, data)
  end


  # Canonical facade: client.OneTimeToken.list / client.OneTimeToken.load({ "id" => ... })
  def OneTimeToken(data = nil)
    require_relative 'entity/one_time_token_entity'
    OneTimeTokenEntity.new(self, data)
  end


  # Canonical facade: client.PaymentProfile.list / client.PaymentProfile.load({ "id" => ... })
  def PaymentProfile(data = nil)
    require_relative 'entity/payment_profile_entity'
    PaymentProfileEntity.new(self, data)
  end


  # Canonical facade: client.Prepayment.list / client.Prepayment.load({ "id" => ... })
  def Prepayment(data = nil)
    require_relative 'entity/prepayment_entity'
    PrepaymentEntity.new(self, data)
  end


  # Canonical facade: client.Product.list / client.Product.load({ "id" => ... })
  def Product(data = nil)
    require_relative 'entity/product_entity'
    ProductEntity.new(self, data)
  end


  # Canonical facade: client.ProductFamily.list / client.ProductFamily.load({ "id" => ... })
  def ProductFamily(data = nil)
    require_relative 'entity/product_family_entity'
    ProductFamilyEntity.new(self, data)
  end


  # Canonical facade: client.ProductFeature.list / client.ProductFeature.load({ "id" => ... })
  def ProductFeature(data = nil)
    require_relative 'entity/product_feature_entity'
    ProductFeatureEntity.new(self, data)
  end


  # Canonical facade: client.ProductPricePoint.list / client.ProductPricePoint.load({ "id" => ... })
  def ProductPricePoint(data = nil)
    require_relative 'entity/product_price_point_entity'
    ProductPricePointEntity.new(self, data)
  end


  # Canonical facade: client.ProformaInvoice.list / client.ProformaInvoice.load({ "id" => ... })
  def ProformaInvoice(data = nil)
    require_relative 'entity/proforma_invoice_entity'
    ProformaInvoiceEntity.new(self, data)
  end


  # Canonical facade: client.ReasonCode.list / client.ReasonCode.load({ "id" => ... })
  def ReasonCode(data = nil)
    require_relative 'entity/reason_code_entity'
    ReasonCodeEntity.new(self, data)
  end


  # Canonical facade: client.ReferralCode.list / client.ReferralCode.load({ "id" => ... })
  def ReferralCode(data = nil)
    require_relative 'entity/referral_code_entity'
    ReferralCodeEntity.new(self, data)
  end


  # Canonical facade: client.SaleRepSetting.list / client.SaleRepSetting.load({ "id" => ... })
  def SaleRepSetting(data = nil)
    require_relative 'entity/sale_rep_setting_entity'
    SaleRepSettingEntity.new(self, data)
  end


  # Canonical facade: client.SalesCommission.list / client.SalesCommission.load({ "id" => ... })
  def SalesCommission(data = nil)
    require_relative 'entity/sales_commission_entity'
    SalesCommissionEntity.new(self, data)
  end


  # Canonical facade: client.Segment.list / client.Segment.load({ "id" => ... })
  def Segment(data = nil)
    require_relative 'entity/segment_entity'
    SegmentEntity.new(self, data)
  end


  # Canonical facade: client.SignupProformaPreview.list / client.SignupProformaPreview.load({ "id" => ... })
  def SignupProformaPreview(data = nil)
    require_relative 'entity/signup_proforma_preview_entity'
    SignupProformaPreviewEntity.new(self, data)
  end


  # Canonical facade: client.Site.list / client.Site.load({ "id" => ... })
  def Site(data = nil)
    require_relative 'entity/site_entity'
    SiteEntity.new(self, data)
  end


  # Canonical facade: client.Subscription.list / client.Subscription.load({ "id" => ... })
  def Subscription(data = nil)
    require_relative 'entity/subscription_entity'
    SubscriptionEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionComponent.list / client.SubscriptionComponent.load({ "id" => ... })
  def SubscriptionComponent(data = nil)
    require_relative 'entity/subscription_component_entity'
    SubscriptionComponentEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionGroup.list / client.SubscriptionGroup.load({ "id" => ... })
  def SubscriptionGroup(data = nil)
    require_relative 'entity/subscription_group_entity'
    SubscriptionGroupEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionGroupInvoiceAccount.list / client.SubscriptionGroupInvoiceAccount.load({ "id" => ... })
  def SubscriptionGroupInvoiceAccount(data = nil)
    require_relative 'entity/subscription_group_invoice_account_entity'
    SubscriptionGroupInvoiceAccountEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionGroupSignup.list / client.SubscriptionGroupSignup.load({ "id" => ... })
  def SubscriptionGroupSignup(data = nil)
    require_relative 'entity/subscription_group_signup_entity'
    SubscriptionGroupSignupEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionGroupStatus.list / client.SubscriptionGroupStatus.load({ "id" => ... })
  def SubscriptionGroupStatus(data = nil)
    require_relative 'entity/subscription_group_status_entity'
    SubscriptionGroupStatusEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionInvoiceAccount.list / client.SubscriptionInvoiceAccount.load({ "id" => ... })
  def SubscriptionInvoiceAccount(data = nil)
    require_relative 'entity/subscription_invoice_account_entity'
    SubscriptionInvoiceAccountEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionMrr.list / client.SubscriptionMrr.load({ "id" => ... })
  def SubscriptionMrr(data = nil)
    require_relative 'entity/subscription_mrr_entity'
    SubscriptionMrrEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionNote.list / client.SubscriptionNote.load({ "id" => ... })
  def SubscriptionNote(data = nil)
    require_relative 'entity/subscription_note_entity'
    SubscriptionNoteEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionProduct.list / client.SubscriptionProduct.load({ "id" => ... })
  def SubscriptionProduct(data = nil)
    require_relative 'entity/subscription_product_entity'
    SubscriptionProductEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionRenewal.list / client.SubscriptionRenewal.load({ "id" => ... })
  def SubscriptionRenewal(data = nil)
    require_relative 'entity/subscription_renewal_entity'
    SubscriptionRenewalEntity.new(self, data)
  end


  # Canonical facade: client.SubscriptionStatus.list / client.SubscriptionStatus.load({ "id" => ... })
  def SubscriptionStatus(data = nil)
    require_relative 'entity/subscription_status_entity'
    SubscriptionStatusEntity.new(self, data)
  end


  # Canonical facade: client.Usage.list / client.Usage.load({ "id" => ... })
  def Usage(data = nil)
    require_relative 'entity/usage_entity'
    UsageEntity.new(self, data)
  end


  # Canonical facade: client.Webhook.list / client.Webhook.load({ "id" => ... })
  def Webhook(data = nil)
    require_relative 'entity/webhook_entity'
    WebhookEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = MaxioAdvancedBillingSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
