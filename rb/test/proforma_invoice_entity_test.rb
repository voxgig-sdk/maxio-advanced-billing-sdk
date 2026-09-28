# ProformaInvoice entity test

require "minitest/autorun"
require "json"
require_relative "../MaxioAdvancedBilling_sdk"
require_relative "runner"

class ProformaInvoiceEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    ent = testsdk.ProformaInvoice(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "proforma_invoice" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = MaxioAdvancedBillingSDK.test(seed, nil)
    seen = base.ProformaInvoice(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = MaxioAdvancedBillingConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = MaxioAdvancedBillingSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.ProformaInvoice(nil).stream("list", nil, nil).each do |item|
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
    setup = proforma_invoice_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "proforma_invoice." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    proforma_invoice_ref01_ent = client.ProformaInvoice(nil)
    proforma_invoice_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.proforma_invoice"), "proforma_invoice_ref01"))
    proforma_invoice_ref01_data["proforma_invoice_uid"] = setup[:idmap]["proforma_invoice_uid01"]

    proforma_invoice_ref01_data_result = proforma_invoice_ref01_ent.create(proforma_invoice_ref01_data, nil)
    proforma_invoice_ref01_data = Helpers.to_map(proforma_invoice_ref01_data_result.respond_to?(:data_get) ? proforma_invoice_ref01_data_result.data_get : proforma_invoice_ref01_data_result)
    assert !proforma_invoice_ref01_data.nil?
    assert !proforma_invoice_ref01_data["id"].nil?

    # LIST
    proforma_invoice_ref01_match = {
      "proforma_invoice_uid" => setup[:idmap]["proforma_invoice_uid01"],
    }

    proforma_invoice_ref01_list_result = proforma_invoice_ref01_ent.list(proforma_invoice_ref01_match, nil)
    assert proforma_invoice_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(proforma_invoice_ref01_list_result),
      { "id" => proforma_invoice_ref01_data["id"] })
    assert !Vs.isempty(found_item)

  end
end

def proforma_invoice_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "proforma_invoice", "ProformaInvoiceTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MaxioAdvancedBillingSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["proforma_invoice01", "proforma_invoice02", "proforma_invoice03", "subscription_group01", "subscription_group02", "subscription_group03", "subscription01", "subscription02", "subscription03", "proforma_invoice_uid01"],
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
  entid_env_raw = ENV["MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID" => idmap,
    "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
    "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
    "MAXIO_ADVANCED_BILLING_APIKEY" => "",
    "MAXIO_ADVANCED_BILLING_SERVER_SITE" => "subdomain",
  })

  idmap_resolved = Helpers.to_map(
    env["MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID"])
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
