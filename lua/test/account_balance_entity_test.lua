-- AccountBalance entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("maxio-advanced-billing_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AccountBalanceEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AccountBalance(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = account_balance_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "account_balance." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local account_balance_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.account_balance")))
    local account_balance_ref01_data = nil
    if #account_balance_ref01_data_raw > 0 then
      account_balance_ref01_data = helpers.to_map(account_balance_ref01_data_raw[1][2])
    end

    -- LOAD
    local account_balance_ref01_ent = client:AccountBalance(nil)
    local account_balance_ref01_match_dt0 = {}
    local account_balance_ref01_data_dt0_loaded, err = account_balance_ref01_ent:load(account_balance_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(account_balance_ref01_data_dt0_loaded)

  end)
end)

function account_balance_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/account_balance/AccountBalanceTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read account_balance test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "account_balance01", "account_balance02", "account_balance03", "subscription01", "subscription02", "subscription03" },
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
  local entid_env_raw = os.getenv("MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID"] = idmap,
    ["MAXIO_ADVANCED_BILLING_TEST_LIVE"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_APIKEY"] = "",
    ["MAXIO_ADVANCED_BILLING_SERVER_SITE"] = "subdomain",
  })

  local idmap_resolved = helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID"])
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
