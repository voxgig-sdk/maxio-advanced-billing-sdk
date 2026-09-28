# ReferralCode entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class ReferralCodeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.ReferralCode(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = referral_code_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "referral_code." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    referral_code_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.referral_code")))
    referral_code_ref01_data = nil
    if referral_code_ref01_data_raw.length > 0
      referral_code_ref01_data = Helpers.to_map(referral_code_ref01_data_raw[0][1])
    end

    # LOAD
    referral_code_ref01_ent = client.ReferralCode(nil)
    referral_code_ref01_match_dt0 = {}
    referral_code_ref01_data_dt0_loaded = referral_code_ref01_ent.load(referral_code_ref01_match_dt0, nil)
    assert !referral_code_ref01_data_dt0_loaded.nil?

  end
end

def referral_code_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "referral_code", "ReferralCodeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["referral_code01", "referral_code02", "referral_code03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID"])
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
