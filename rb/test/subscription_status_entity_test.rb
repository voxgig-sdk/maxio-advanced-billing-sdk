# SubscriptionStatus entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class SubscriptionStatusEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.SubscriptionStatus(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = subscription_status_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "subscription_status." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    subscription_status_ref01_ent = client.SubscriptionStatus(nil)
    subscription_status_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.subscription_status"), "subscription_status_ref01"))
    subscription_status_ref01_data["subscription_id"] = setup[:idmap]["subscription01"]

    subscription_status_ref01_data_result = subscription_status_ref01_ent.create(subscription_status_ref01_data, nil)
    subscription_status_ref01_data = Helpers.to_map(subscription_status_ref01_data_result.respond_to?(:data_get) ? subscription_status_ref01_data_result.data_get : subscription_status_ref01_data_result)
    assert !subscription_status_ref01_data.nil?
    assert !subscription_status_ref01_data["id"].nil?

    # UPDATE
    subscription_status_ref01_data_up0_up = {
      "id" => subscription_status_ref01_data["id"],
    }

    subscription_status_ref01_markdef_up0_name = "next_assessment_at"
    subscription_status_ref01_markdef_up0_value = "Mark01-subscription_status_ref01_#{setup[:now]}"
    subscription_status_ref01_data_up0_up[subscription_status_ref01_markdef_up0_name] = subscription_status_ref01_markdef_up0_value

    subscription_status_ref01_resdata_up0_result = subscription_status_ref01_ent.update(subscription_status_ref01_data_up0_up, nil)
    subscription_status_ref01_resdata_up0 = Helpers.to_map(subscription_status_ref01_resdata_up0_result.respond_to?(:data_get) ? subscription_status_ref01_resdata_up0_result.data_get : subscription_status_ref01_resdata_up0_result)
    assert !subscription_status_ref01_resdata_up0.nil?
    assert_equal subscription_status_ref01_resdata_up0["id"], subscription_status_ref01_data_up0_up["id"]
    assert_equal subscription_status_ref01_resdata_up0[subscription_status_ref01_markdef_up0_name], subscription_status_ref01_markdef_up0_value

    # REMOVE
    subscription_status_ref01_match_rm0 = {
      "id" => subscription_status_ref01_data["id"],
    }
    subscription_status_ref01_ent.remove(subscription_status_ref01_match_rm0, nil)

  end
end

def subscription_status_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "subscription_status", "SubscriptionStatusTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["subscription_status01", "subscription_status02", "subscription_status03", "subscription01", "subscription02", "subscription03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID"])
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
