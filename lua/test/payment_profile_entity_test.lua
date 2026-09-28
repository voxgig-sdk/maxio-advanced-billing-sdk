-- PaymentProfile entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("maxio-advanced-billing_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PaymentProfileEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PaymentProfile(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["payment_profile"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:PaymentProfile(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:PaymentProfile(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = payment_profile_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "payment_profile." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local payment_profile_ref01_ent = client:PaymentProfile(nil)
    local payment_profile_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.payment_profile"), "payment_profile_ref01"))
    payment_profile_ref01_data["payment_profile_id"] = setup.idmap["payment_profile01"]

    local payment_profile_ref01_data_result, err = payment_profile_ref01_ent:create(payment_profile_ref01_data, nil)
    assert.is_nil(err)
    payment_profile_ref01_data = helpers.to_map(type(payment_profile_ref01_data_result) == 'table' and payment_profile_ref01_data_result.data_get and payment_profile_ref01_data_result:data_get() or payment_profile_ref01_data_result)
    assert.is_not_nil(payment_profile_ref01_data)
    assert.is_not_nil(payment_profile_ref01_data["id"])

    -- LIST
    local payment_profile_ref01_match = {}

    local payment_profile_ref01_list_result, err = payment_profile_ref01_ent:list(payment_profile_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(payment_profile_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(payment_profile_ref01_list_result),
      { id = payment_profile_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local payment_profile_ref01_data_up0_up = {
      id = payment_profile_ref01_data["id"],
      ["payment_profile_id"] = setup.idmap["payment_profile_id"],
    }

    local payment_profile_ref01_resdata_up0_result, err = payment_profile_ref01_ent:update(payment_profile_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local payment_profile_ref01_resdata_up0 = helpers.to_map(type(payment_profile_ref01_resdata_up0_result) == 'table' and payment_profile_ref01_resdata_up0_result.data_get and payment_profile_ref01_resdata_up0_result:data_get() or payment_profile_ref01_resdata_up0_result)
    assert.is_not_nil(payment_profile_ref01_resdata_up0)
    assert.are.equal(payment_profile_ref01_resdata_up0["id"], payment_profile_ref01_data_up0_up["id"])

    -- LOAD
    local payment_profile_ref01_match_dt0 = {
      id = payment_profile_ref01_data["id"],
    }
    local payment_profile_ref01_data_dt0_loaded, err = payment_profile_ref01_ent:load(payment_profile_ref01_match_dt0, nil)
    assert.is_nil(err)
    local payment_profile_ref01_data_dt0_load_result = helpers.to_map(type(payment_profile_ref01_data_dt0_loaded) == 'table' and payment_profile_ref01_data_dt0_loaded.data_get and payment_profile_ref01_data_dt0_loaded:data_get() or payment_profile_ref01_data_dt0_loaded)
    assert.is_not_nil(payment_profile_ref01_data_dt0_load_result)
    assert.are.equal(payment_profile_ref01_data_dt0_load_result["id"], payment_profile_ref01_data["id"])

    -- REMOVE
    local payment_profile_ref01_match_rm0 = {
      id = payment_profile_ref01_data["id"],
    }
    local _, err = payment_profile_ref01_ent:remove(payment_profile_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local payment_profile_ref01_match_rt0 = {}

    local payment_profile_ref01_list_rt0_result, err = payment_profile_ref01_ent:list(payment_profile_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(payment_profile_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(payment_profile_ref01_list_rt0_result),
      { id = payment_profile_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function payment_profile_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/payment_profile/PaymentProfileTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read payment_profile test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "payment_profile01", "payment_profile02", "payment_profile03", "subscription_group01", "subscription_group02", "subscription_group03", "subscription01", "subscription02", "subscription03" },
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
  local entid_env_raw = os.getenv("MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID"] = idmap,
    ["MAXIO_ADVANCED_BILLING_TEST_LIVE"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_APIKEY"] = "",
    ["MAXIO_ADVANCED_BILLING_SERVER_SITE"] = "subdomain",
  })

  local idmap_resolved = helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["payment_profile_id"] == nil then
    idmap_resolved["payment_profile_id"] = idmap_resolved["payment_profile01"]
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
