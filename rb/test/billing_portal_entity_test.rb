# BillingPortal entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class BillingPortalEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.BillingPortal(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = billing_portal_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "billing_portal." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    billing_portal_ref01_ent = client.BillingPortal(nil)
    billing_portal_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.billing_portal"), "billing_portal_ref01"))
    billing_portal_ref01_data["customer_id"] = setup[:idmap]["customer01"]

    billing_portal_ref01_data_result = billing_portal_ref01_ent.create(billing_portal_ref01_data, nil)
    billing_portal_ref01_data = Helpers.to_map(billing_portal_ref01_data_result.respond_to?(:data_get) ? billing_portal_ref01_data_result.data_get : billing_portal_ref01_data_result)
    assert !billing_portal_ref01_data.nil?

    # LOAD
    billing_portal_ref01_match_dt0 = {}
    billing_portal_ref01_data_dt0_loaded = billing_portal_ref01_ent.load(billing_portal_ref01_match_dt0, nil)
    assert !billing_portal_ref01_data_dt0_loaded.nil?


  end
end

def billing_portal_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "billing_portal", "BillingPortalTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["billing_portal01", "billing_portal02", "billing_portal03", "customer01", "customer02", "customer03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID"])
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
