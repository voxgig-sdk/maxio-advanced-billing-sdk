# CouponSubcode entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class CouponSubcodeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.CouponSubcode(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = coupon_subcode_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "coupon_subcode." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    coupon_subcode_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.coupon_subcode")))
    coupon_subcode_ref01_data = nil
    if coupon_subcode_ref01_data_raw.length > 0
      coupon_subcode_ref01_data = Helpers.to_map(coupon_subcode_ref01_data_raw[0][1])
    end

    # UPDATE
    coupon_subcode_ref01_ent = client.CouponSubcode(nil)
    coupon_subcode_ref01_data_up0_up = {
      "id" => coupon_subcode_ref01_data["id"],
    }

    coupon_subcode_ref01_resdata_up0_result = coupon_subcode_ref01_ent.update(coupon_subcode_ref01_data_up0_up, nil)
    coupon_subcode_ref01_resdata_up0 = Helpers.to_map(coupon_subcode_ref01_resdata_up0_result.respond_to?(:data_get) ? coupon_subcode_ref01_resdata_up0_result.data_get : coupon_subcode_ref01_resdata_up0_result)
    assert !coupon_subcode_ref01_resdata_up0.nil?
    assert_equal coupon_subcode_ref01_resdata_up0["id"], coupon_subcode_ref01_data_up0_up["id"]

  end
end

def coupon_subcode_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "coupon_subcode", "CouponSubcodeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["coupon_subcode01", "coupon_subcode02", "coupon_subcode03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
