<?php
declare(strict_types=1);

// FeatureCatalogItem entity test

require_once __DIR__ . '/../maxioadvancedbilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FeatureCatalogItemEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MaxioAdvancedBillingSDK::test(null, null);
        $ent = $testsdk->FeatureCatalogItem(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = feature_catalog_item_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "feature_catalog_item." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $feature_catalog_item_ref01_ent = $client->FeatureCatalogItem(null);
        $feature_catalog_item_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.feature_catalog_item"), "feature_catalog_item_ref01"));
        $feature_catalog_item_ref01_data["product_id"] = $setup["idmap"]["product01"];

        $feature_catalog_item_ref01_data_result = $feature_catalog_item_ref01_ent->create($feature_catalog_item_ref01_data, null);
        $feature_catalog_item_ref01_data = Helpers::to_map(is_object($feature_catalog_item_ref01_data_result) && method_exists($feature_catalog_item_ref01_data_result, 'data_get') ? $feature_catalog_item_ref01_data_result->data_get() : $feature_catalog_item_ref01_data_result);
        $this->assertNotNull($feature_catalog_item_ref01_data);
        $this->assertNotNull($feature_catalog_item_ref01_data["id"]);

        // UPDATE
        $feature_catalog_item_ref01_data_up0_up = [
            "id" => $feature_catalog_item_ref01_data["id"],
        ];

        $feature_catalog_item_ref01_markdef_up0_name = "archived_at";
        $feature_catalog_item_ref01_markdef_up0_value = "Mark01-feature_catalog_item_ref01_" . $setup["now"];
        $feature_catalog_item_ref01_data_up0_up[$feature_catalog_item_ref01_markdef_up0_name] = $feature_catalog_item_ref01_markdef_up0_value;

        $feature_catalog_item_ref01_resdata_up0_result = $feature_catalog_item_ref01_ent->update($feature_catalog_item_ref01_data_up0_up, null);
        $feature_catalog_item_ref01_resdata_up0 = Helpers::to_map(is_object($feature_catalog_item_ref01_resdata_up0_result) && method_exists($feature_catalog_item_ref01_resdata_up0_result, 'data_get') ? $feature_catalog_item_ref01_resdata_up0_result->data_get() : $feature_catalog_item_ref01_resdata_up0_result);
        $this->assertNotNull($feature_catalog_item_ref01_resdata_up0);
        $this->assertEquals($feature_catalog_item_ref01_resdata_up0["id"], $feature_catalog_item_ref01_data_up0_up["id"]);
        $this->assertEquals($feature_catalog_item_ref01_resdata_up0[$feature_catalog_item_ref01_markdef_up0_name], $feature_catalog_item_ref01_markdef_up0_value);

        // LOAD
        $feature_catalog_item_ref01_match_dt0 = [
            "id" => $feature_catalog_item_ref01_data["id"],
        ];
        $feature_catalog_item_ref01_data_dt0_loaded = $feature_catalog_item_ref01_ent->load($feature_catalog_item_ref01_match_dt0, null);
        $feature_catalog_item_ref01_data_dt0_load_result = Helpers::to_map(is_object($feature_catalog_item_ref01_data_dt0_loaded) && method_exists($feature_catalog_item_ref01_data_dt0_loaded, 'data_get') ? $feature_catalog_item_ref01_data_dt0_loaded->data_get() : $feature_catalog_item_ref01_data_dt0_loaded);
        $this->assertNotNull($feature_catalog_item_ref01_data_dt0_load_result);
        $this->assertEquals($feature_catalog_item_ref01_data_dt0_load_result["id"], $feature_catalog_item_ref01_data["id"]);

    }
}

function feature_catalog_item_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/feature_catalog_item/FeatureCatalogItemTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MaxioAdvancedBillingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["feature_catalog_item01", "feature_catalog_item02", "feature_catalog_item03", "component01", "component02", "component03", "product01", "product02", "product03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID" => $idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY" => "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE" => 'subdomain',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["MAXIO_ADVANCED_BILLING_APIKEY"],
                "server" => [
                    "site" => $env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
                ],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new MaxioAdvancedBillingSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
