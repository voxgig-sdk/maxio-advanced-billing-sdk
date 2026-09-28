<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK exists test

require_once __DIR__ . '/../maxioadvancedbilling_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MaxioAdvancedBillingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
