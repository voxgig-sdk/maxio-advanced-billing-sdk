-- ListSegment entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("maxio-advanced-billing_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ListSegmentEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ListSegment(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["list_segment"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:ListSegment(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:ListSegment(nil):stream("list", nil, nil) do
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
    local setup = list_segment_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "list_segment." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local list_segment_ref01_ent = client:ListSegment(nil)
    local list_segment_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.list_segment"), "list_segment_ref01"))
    list_segment_ref01_data["component_id"] = setup.idmap["component01"]
    list_segment_ref01_data["price_point_id"] = setup.idmap["price_point01"]

    local list_segment_ref01_data_result, err = list_segment_ref01_ent:create(list_segment_ref01_data, nil)
    assert.is_nil(err)
    list_segment_ref01_data = helpers.to_map(type(list_segment_ref01_data_result) == 'table' and list_segment_ref01_data_result.data_get and list_segment_ref01_data_result:data_get() or list_segment_ref01_data_result)
    assert.is_not_nil(list_segment_ref01_data)
    assert.is_not_nil(list_segment_ref01_data["id"])

    -- LIST
    local list_segment_ref01_match = {
      ["component_id"] = setup.idmap["component01"],
      ["price_point_id"] = setup.idmap["price_point01"],
    }

    local list_segment_ref01_list_result, err = list_segment_ref01_ent:list(list_segment_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(list_segment_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(list_segment_ref01_list_result),
      { id = list_segment_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local list_segment_ref01_data_up0_up = {
      id = list_segment_ref01_data["id"],
      ["component_id"] = setup.idmap["component_id"],
    }

    local list_segment_ref01_markdef_up0_name = "created_at"
    local list_segment_ref01_markdef_up0_value = "Mark01-list_segment_ref01_" .. tostring(setup.now)
    list_segment_ref01_data_up0_up[list_segment_ref01_markdef_up0_name] = list_segment_ref01_markdef_up0_value

    local list_segment_ref01_resdata_up0_result, err = list_segment_ref01_ent:update(list_segment_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local list_segment_ref01_resdata_up0 = helpers.to_map(type(list_segment_ref01_resdata_up0_result) == 'table' and list_segment_ref01_resdata_up0_result.data_get and list_segment_ref01_resdata_up0_result:data_get() or list_segment_ref01_resdata_up0_result)
    assert.is_not_nil(list_segment_ref01_resdata_up0)
    assert.are.equal(list_segment_ref01_resdata_up0["id"], list_segment_ref01_data_up0_up["id"])
    assert.are.equal(list_segment_ref01_resdata_up0[list_segment_ref01_markdef_up0_name], list_segment_ref01_markdef_up0_value)

  end)
end)

function list_segment_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/list_segment/ListSegmentTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read list_segment test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "list_segment01", "list_segment02", "list_segment03", "component01", "component02", "component03", "price_point01" },
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
  local entid_env_raw = os.getenv("MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID"] = idmap,
    ["MAXIO_ADVANCED_BILLING_TEST_LIVE"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] = "FALSE",
    ["MAXIO_ADVANCED_BILLING_APIKEY"] = "",
    ["MAXIO_ADVANCED_BILLING_SERVER_SITE"] = "subdomain",
  })

  local idmap_resolved = helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["component_id"] == nil then
    idmap_resolved["component_id"] = idmap_resolved["component01"]
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
