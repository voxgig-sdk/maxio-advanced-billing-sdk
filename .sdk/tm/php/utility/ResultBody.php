<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK utility: result_body

class MaxioAdvancedBillingResultBody
{
    public static function call(MaxioAdvancedBillingContext $ctx): ?MaxioAdvancedBillingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
