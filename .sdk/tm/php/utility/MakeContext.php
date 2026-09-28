<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MaxioAdvancedBillingMakeContext
{
    public static function call(array $ctxmap, ?MaxioAdvancedBillingContext $basectx): MaxioAdvancedBillingContext
    {
        return new MaxioAdvancedBillingContext($ctxmap, $basectx);
    }
}
