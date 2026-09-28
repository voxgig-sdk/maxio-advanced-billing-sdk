<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK utility: feature_hook

class MaxioAdvancedBillingFeatureHook
{
    public static function call(MaxioAdvancedBillingContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
