<?php
declare(strict_types=1);

// CouponSubcode entity test

require_once __DIR__ . '/../maxioadvancedbilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CouponSubcodeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MaxioAdvancedBillingSDK::test(null, null);
        $ent = $testsdk->CouponSubcode(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = coupon_subcode_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "coupon_subcode." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $coupon_subcode_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.coupon_subcode")));
        $coupon_subcode_ref01_data = null;
        if (count($coupon_subcode_ref01_data_raw) > 0) {
            $coupon_subcode_ref01_data = Helpers::to_map($coupon_subcode_ref01_data_raw[0][1]);
        }

        // UPDATE
        $coupon_subcode_ref01_ent = $client->CouponSubcode(null);
        $coupon_subcode_ref01_data_up0_up = [
            "id" => $coupon_subcode_ref01_data["id"],
        ];

        $coupon_subcode_ref01_resdata_up0_result = $coupon_subcode_ref01_ent->update($coupon_subcode_ref01_data_up0_up, null);
        $coupon_subcode_ref01_resdata_up0 = Helpers::to_map(is_object($coupon_subcode_ref01_resdata_up0_result) && method_exists($coupon_subcode_ref01_resdata_up0_result, 'data_get') ? $coupon_subcode_ref01_resdata_up0_result->data_get() : $coupon_subcode_ref01_resdata_up0_result);
        $this->assertNotNull($coupon_subcode_ref01_resdata_up0);
        $this->assertEquals($coupon_subcode_ref01_resdata_up0["id"], $coupon_subcode_ref01_data_up0_up["id"]);

    }
}

function coupon_subcode_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/coupon_subcode/CouponSubcodeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MaxioAdvancedBillingSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["coupon_subcode01", "coupon_subcode02", "coupon_subcode03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID" => $idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN" => "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY" => "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE" => 'subdomain',
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID"]);
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
