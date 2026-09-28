-- BillingPortal entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("maxio-advanced-billing_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("BillingPortalEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:BillingPortal(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = billing_portal_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "billing_portal." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local billing_portal_ref01_ent = client:BillingPortal(nil)
    local billing_portal_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.billing_portal"), "billing_portal_ref01"))
    billing_portal_ref01_data["customer_id"] = setup.idmap["customer01"]

    local billing_portal_ref01_data_result, err = billing_portal_ref01_ent:create(billing_portal_ref01_data, nil)
    assert.is_nil(err)
    billing_portal_ref01_data = helpers.to_map(type(billing_portal_ref01_data_result) == 'table' and billing_portal_ref01_data_result.data_get and billing_portal_ref01_data_result:data_get() or billing_portal_ref01_data_result)
    assert.is_not_nil(billing_portal_ref01_data)

    -- LOAD
    local billing_portal_ref01_match_dt0 = {}
    local billing_portal_ref01_data_dt0_loaded, err = billing_portal_ref01_ent:load(billing_portal_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(billing_portal_ref01_data_dt0_loaded)


  end)
end)

function billing_portal_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/billing_portal/BillingPortalTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read billing_portal test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "billing_portal01", "billing_portal02", "billing_portal03", "customer01", "customer02", "customer03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID"] = idmap,
    ["MAXIO_ADVANCED_BILLING_TEST_LIVE"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_APIKEY"] = "",
    ["MAXIO_ADVANCED_BILLING_SERVER_SITE"] = "subdomain",
  })

  local idmap_resolved = helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["MAXIO_ADVANCED_BILLING_APIKEY"],
        server = {
          ["site"] = env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
        },
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
