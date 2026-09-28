<?php
declare(strict_types=1);

// ReasonCode entity test

require_once __DIR__ . '/../maxioadvancedbilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ReasonCodeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MaxioAdvancedBillingSDK::test(null, null);
        $ent = $testsdk->ReasonCode(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "reason_code" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = MaxioAdvancedBillingSDK::test($seed, null);
        $seen = iterator_to_array($base->ReasonCode(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = MaxioAdvancedBillingConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = MaxioAdvancedBillingSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->ReasonCode(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = reason_code_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "reason_code." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $reason_code_ref01_ent = $client->ReasonCode(null);
        $reason_code_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.reason_code"), "reason_code_ref01"));
        $reason_code_ref01_data["reason_code_id"] = $setup["idmap"]["reason_code01"];

        $reason_code_ref01_data_result = $reason_code_ref01_ent->create($reason_code_ref01_data, null);
        $reason_code_ref01_data = Helpers::to_map(is_object($reason_code_ref01_data_result) && method_exists($reason_code_ref01_data_result, 'data_get') ? $reason_code_ref01_data_result->data_get() : $reason_code_ref01_data_result);
        $this->assertNotNull($reason_code_ref01_data);
        $this->assertNotNull($reason_code_ref01_data["id"]);

        // LIST
        $reason_code_ref01_match = [];

        $reason_code_ref01_list_result = $reason_code_ref01_ent->list($reason_code_ref01_match, null);
        $this->assertIsArray($reason_code_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($reason_code_ref01_list_result),
            ["id" => $reason_code_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $reason_code_ref01_data_up0_up = [
            "id" => $reason_code_ref01_data["id"],
            "reason_code_id" => $setup["idmap"]["reason_code_id"],
        ];

        $reason_code_ref01_markdef_up0_name = "code";
        $reason_code_ref01_markdef_up0_value = "Mark01-reason_code_ref01_" . $setup["now"];
        $reason_code_ref01_data_up0_up[$reason_code_ref01_markdef_up0_name] = $reason_code_ref01_markdef_up0_value;

        $reason_code_ref01_resdata_up0_result = $reason_code_ref01_ent->update($reason_code_ref01_data_up0_up, null);
        $reason_code_ref01_resdata_up0 = Helpers::to_map(is_object($reason_code_ref01_resdata_up0_result) && method_exists($reason_code_ref01_resdata_up0_result, 'data_get') ? $reason_code_ref01_resdata_up0_result->data_get() : $reason_code_ref01_resdata_up0_result);
        $this->assertNotNull($reason_code_ref01_resdata_up0);
        $this->assertEquals($reason_code_ref01_resdata_up0["id"], $reason_code_ref01_data_up0_up["id"]);
        $this->assertEquals($reason_code_ref01_resdata_up0[$reason_code_ref01_markdef_up0_name], $reason_code_ref01_markdef_up0_value);

        // LOAD
        $reason_code_ref01_match_dt0 = [
            "id" => $reason_code_ref01_data["id"],
        ];
        $reason_code_ref01_data_dt0_loaded = $reason_code_ref01_ent->load($reason_code_ref01_match_dt0, null);
        $reason_code_ref01_data_dt0_load_result = Helpers::to_map(is_object($reason_code_ref01_data_dt0_loaded) && method_exists($reason_code_ref01_data_dt0_loaded, 'data_get') ? $reason_code_ref01_data_dt0_loaded->data_get() : $reason_code_ref01_data_dt0_loaded);
        $this->assertNotNull($reason_code_ref01_data_dt0_load_result);
        $this->assertEquals($reason_code_ref01_data_dt0_load_result["id"], $reason_code_ref01_data["id"]);

        // REMOVE
        $reason_code_ref01_match_rm0 = [
            "id" => $reason_code_ref01_data["id"],
        ];
        $reason_code_ref01_ent->remove($reason_code_ref01_match_rm0, null);

        // LIST
        $reason_code_ref01_match_rt0 = [];

        $reason_code_ref01_list_rt0_result = $reason_code_ref01_ent->list($reason_code_ref01_match_rt0, null);
        $this->assertIsArray($reason_code_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($reason_code_ref01_list_rt0_result),
            ["id" => $reason_code_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function reason_code_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/reason_code/ReasonCodeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MaxioAdvancedBillingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["reason_code01", "reason_code02", "reason_code03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID" => $idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY" => "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE" => 'subdomain',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["reason_code_id"])) {
        $idmap_resolved["reason_code_id"] = $idmap_resolved["reason_code01"];
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
