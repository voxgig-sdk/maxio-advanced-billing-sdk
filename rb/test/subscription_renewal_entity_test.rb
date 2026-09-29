# SubscriptionRenewal entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class SubscriptionRenewalEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.SubscriptionRenewal(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "subscription_renewal" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = MaxioAdvancedBillingSDK.test(seed, nil)
    seen = base.SubscriptionRenewal(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = MaxioAdvancedBillingConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = MaxioAdvancedBillingSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.SubscriptionRenewal(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = subscription_renewal_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "subscription_renewal." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    subscription_renewal_ref01_ent = client.SubscriptionRenewal(nil)
    subscription_renewal_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.subscription_renewal"), "subscription_renewal_ref01"))
    subscription_renewal_ref01_data["subscription_id"] = setup[:idmap]["subscription01"]

    subscription_renewal_ref01_data_result = subscription_renewal_ref01_ent.create(subscription_renewal_ref01_data, nil)
    subscription_renewal_ref01_data = Helpers.to_map(subscription_renewal_ref01_data_result.respond_to?(:data_get) ? subscription_renewal_ref01_data_result.data_get : subscription_renewal_ref01_data_result)
    assert !subscription_renewal_ref01_data.nil?
    assert !subscription_renewal_ref01_data["id"].nil?

    # LIST
    subscription_renewal_ref01_match = {
      "subscription_id" => setup[:idmap]["subscription01"],
    }

    subscription_renewal_ref01_list_result = subscription_renewal_ref01_ent.list(subscription_renewal_ref01_match, nil)
    assert subscription_renewal_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(subscription_renewal_ref01_list_result),
      { "id" => subscription_renewal_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    subscription_renewal_ref01_data_up0_up = {
      "id" => subscription_renewal_ref01_data["id"],
      "subscription_id" => setup[:idmap]["subscription_id"],
    }

    subscription_renewal_ref01_markdef_up0_name = "created_at"
    subscription_renewal_ref01_markdef_up0_value = "Mark01-subscription_renewal_ref01_#{setup[:now]}"
    subscription_renewal_ref01_data_up0_up[subscription_renewal_ref01_markdef_up0_name] = subscription_renewal_ref01_markdef_up0_value

    subscription_renewal_ref01_resdata_up0_result = subscription_renewal_ref01_ent.update(subscription_renewal_ref01_data_up0_up, nil)
    subscription_renewal_ref01_resdata_up0 = Helpers.to_map(subscription_renewal_ref01_resdata_up0_result.respond_to?(:data_get) ? subscription_renewal_ref01_resdata_up0_result.data_get : subscription_renewal_ref01_resdata_up0_result)
    assert !subscription_renewal_ref01_resdata_up0.nil?
    assert_equal subscription_renewal_ref01_resdata_up0["id"], subscription_renewal_ref01_data_up0_up["id"]
    assert_equal subscription_renewal_ref01_resdata_up0[subscription_renewal_ref01_markdef_up0_name], subscription_renewal_ref01_markdef_up0_value

    # LOAD
    subscription_renewal_ref01_match_dt0 = {
      "id" => subscription_renewal_ref01_data["id"],
    }
    subscription_renewal_ref01_data_dt0_loaded = subscription_renewal_ref01_ent.load(subscription_renewal_ref01_match_dt0, nil)
    subscription_renewal_ref01_data_dt0_load_result = Helpers.to_map(subscription_renewal_ref01_data_dt0_loaded.respond_to?(:data_get) ? subscription_renewal_ref01_data_dt0_loaded.data_get : subscription_renewal_ref01_data_dt0_loaded)
    assert !subscription_renewal_ref01_data_dt0_load_result.nil?
    assert_equal subscription_renewal_ref01_data_dt0_load_result["id"], subscription_renewal_ref01_data["id"]

    # REMOVE
    subscription_renewal_ref01_match_rm0 = {
      "id" => subscription_renewal_ref01_data["id"],
    }
    subscription_renewal_ref01_ent.remove(subscription_renewal_ref01_match_rm0, nil)

    # LIST
    subscription_renewal_ref01_match_rt0 = {
      "subscription_id" => setup[:idmap]["subscription01"],
    }

    subscription_renewal_ref01_list_rt0_result = subscription_renewal_ref01_ent.list(subscription_renewal_ref01_match_rt0, nil)
    assert subscription_renewal_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(subscription_renewal_ref01_list_rt0_result),
      { "id" => subscription_renewal_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def subscription_renewal_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "subscription_renewal", "SubscriptionRenewalTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["subscription_renewal01", "subscription_renewal02", "subscription_renewal03", "subscription01", "subscription02", "subscription03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["subscription_id"].nil?
    idmap_resolved["subscription_id"] = idmap_resolved["subscription01"]
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
