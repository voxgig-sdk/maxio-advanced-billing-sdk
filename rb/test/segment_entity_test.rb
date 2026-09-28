# Segment entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class SegmentEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.Segment(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = segment_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "segment." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    segment_ref01_ent = client.Segment(nil)
    segment_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.segment"), "segment_ref01"))
    segment_ref01_data["component_id"] = setup[:idmap]["component01"]
    segment_ref01_data["price_point_id"] = setup[:idmap]["price_point01"]

    segment_ref01_data_result = segment_ref01_ent.create(segment_ref01_data, nil)
    segment_ref01_data = Helpers.to_map(segment_ref01_data_result.respond_to?(:data_get) ? segment_ref01_data_result.data_get : segment_ref01_data_result)
    assert !segment_ref01_data.nil?
    assert !segment_ref01_data["id"].nil?

    # UPDATE
    segment_ref01_data_up0_up = {
      "id" => segment_ref01_data["id"],
      "component_id" => setup[:idmap]["component_id"],
    }

    segment_ref01_markdef_up0_name = "created_at"
    segment_ref01_markdef_up0_value = "Mark01-segment_ref01_#{setup[:now]}"
    segment_ref01_data_up0_up[segment_ref01_markdef_up0_name] = segment_ref01_markdef_up0_value

    segment_ref01_resdata_up0_result = segment_ref01_ent.update(segment_ref01_data_up0_up, nil)
    segment_ref01_resdata_up0 = Helpers.to_map(segment_ref01_resdata_up0_result.respond_to?(:data_get) ? segment_ref01_resdata_up0_result.data_get : segment_ref01_resdata_up0_result)
    assert !segment_ref01_resdata_up0.nil?
    assert_equal segment_ref01_resdata_up0["id"], segment_ref01_data_up0_up["id"]
    assert_equal segment_ref01_resdata_up0[segment_ref01_markdef_up0_name], segment_ref01_markdef_up0_value

  end
end

def segment_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "segment", "SegmentTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["segment01", "segment02", "segment03", "component01", "component02", "component03", "price_point01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["component_id"].nil?
    idmap_resolved["component_id"] = idmap_resolved["component01"]
  end

  if env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["MAXIO_ADVANCED_BILLING_APIKEY"],
        "server" => {
          "site" => env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
        },
      },
      extra || {},
    ])
    client = MaxioAdvancedBillingSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
