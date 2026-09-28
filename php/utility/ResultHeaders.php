<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK utility: result_headers

class MaxioAdvancedBillingResultHeaders
{
    public static function call(MaxioAdvancedBillingContext $ctx): ?MaxioAdvancedBillingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
