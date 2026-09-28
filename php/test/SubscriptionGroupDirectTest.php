<?php
declare(strict_types=1);

// SubscriptionGroup direct test

require_once __DIR__ . '/../maxioadvancedbilling_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class SubscriptionGroupDirectTest extends TestCase
{
    public function test_direct_list_subscription_group(): void
    {
        $setup = subscription_group_direct_setup([
            ["id" => "direct01"],
            ["id" => "direct02"],
        ]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-list-subscription_group", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        $client = $setup["client"];


        $result = $client->direct([
            "path" => "subscription_groups.json",
            "method" => "GET",
            "params" => [],
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx and the
            // list-response shape varies wildly across public APIs. Skip
            // rather than fail when the call doesn't return a usable list.
            if (!empty($result["err"])) {
                $this->markTestSkipped("list call failed (likely synthetic IDs against live API): " . (string)$result["err"]);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("list call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertIsArray($result["data"]);
            $this->assertCount(2, $result["data"]);
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function subscription_group_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_ENTID" => [],
        "MAXIO_ADVANCED_BILLING_TEST_LIVE" => "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY" => "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE" => 'subdomain',
    ]);

    $live = $env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["MAXIO_ADVANCED_BILLING_APIKEY"],
            "server" => [
                "site" => $env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
            ],
        ]);
        $client = new MaxioAdvancedBillingSDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new MaxioAdvancedBillingSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
