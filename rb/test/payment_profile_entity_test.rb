# PaymentProfile entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class PaymentProfileEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.PaymentProfile(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "payment_profile" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = MaxioAdvancedBillingSDK.test(seed, nil)
    seen = base.PaymentProfile(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = MaxioAdvancedBillingConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = MaxioAdvancedBillingSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.PaymentProfile(nil).stream("list", nil, nil).each do |item|
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
    setup = payment_profile_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "payment_profile." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    payment_profile_ref01_ent = client.PaymentProfile(nil)
    payment_profile_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.payment_profile"), "payment_profile_ref01"))
    payment_profile_ref01_data["payment_profile_id"] = setup[:idmap]["payment_profile01"]

    payment_profile_ref01_data_result = payment_profile_ref01_ent.create(payment_profile_ref01_data, nil)
    payment_profile_ref01_data = Helpers.to_map(payment_profile_ref01_data_result.respond_to?(:data_get) ? payment_profile_ref01_data_result.data_get : payment_profile_ref01_data_result)
    assert !payment_profile_ref01_data.nil?
    assert !payment_profile_ref01_data["id"].nil?

    # LIST
    payment_profile_ref01_match = {}

    payment_profile_ref01_list_result = payment_profile_ref01_ent.list(payment_profile_ref01_match, nil)
    assert payment_profile_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(payment_profile_ref01_list_result),
      { "id" => payment_profile_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    payment_profile_ref01_data_up0_up = {
      "id" => payment_profile_ref01_data["id"],
      "payment_profile_id" => setup[:idmap]["payment_profile_id"],
    }

    payment_profile_ref01_markdef_up0_name = "bank_name"
    payment_profile_ref01_markdef_up0_value = "Mark01-payment_profile_ref01_#{setup[:now]}"
    payment_profile_ref01_data_up0_up[payment_profile_ref01_markdef_up0_name] = payment_profile_ref01_markdef_up0_value

    payment_profile_ref01_resdata_up0_result = payment_profile_ref01_ent.update(payment_profile_ref01_data_up0_up, nil)
    payment_profile_ref01_resdata_up0 = Helpers.to_map(payment_profile_ref01_resdata_up0_result.respond_to?(:data_get) ? payment_profile_ref01_resdata_up0_result.data_get : payment_profile_ref01_resdata_up0_result)
    assert !payment_profile_ref01_resdata_up0.nil?
    assert_equal payment_profile_ref01_resdata_up0["id"], payment_profile_ref01_data_up0_up["id"]
    assert_equal payment_profile_ref01_resdata_up0[payment_profile_ref01_markdef_up0_name], payment_profile_ref01_markdef_up0_value

    # LOAD
    payment_profile_ref01_match_dt0 = {
      "id" => payment_profile_ref01_data["id"],
    }
    payment_profile_ref01_data_dt0_loaded = payment_profile_ref01_ent.load(payment_profile_ref01_match_dt0, nil)
    payment_profile_ref01_data_dt0_load_result = Helpers.to_map(payment_profile_ref01_data_dt0_loaded.respond_to?(:data_get) ? payment_profile_ref01_data_dt0_loaded.data_get : payment_profile_ref01_data_dt0_loaded)
    assert !payment_profile_ref01_data_dt0_load_result.nil?
    assert_equal payment_profile_ref01_data_dt0_load_result["id"], payment_profile_ref01_data["id"]

    # REMOVE
    payment_profile_ref01_match_rm0 = {
      "id" => payment_profile_ref01_data["id"],
    }
    payment_profile_ref01_ent.remove(payment_profile_ref01_match_rm0, nil)

    # LIST
    payment_profile_ref01_match_rt0 = {}

    payment_profile_ref01_list_rt0_result = payment_profile_ref01_ent.list(payment_profile_ref01_match_rt0, nil)
    assert payment_profile_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(payment_profile_ref01_list_rt0_result),
      { "id" => payment_profile_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def payment_profile_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "payment_profile", "PaymentProfileTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["payment_profile01", "payment_profile02", "payment_profile03", "subscription_group01", "subscription_group02", "subscription_group03", "subscription01", "subscription02", "subscription03"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["payment_profile_id"].nil?
    idmap_resolved["payment_profile_id"] = idmap_resolved["payment_profile01"]
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
