<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class MaxioAdvancedBillingSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new MaxioAdvancedBillingUtility();
        $this->_utility = $utility;

        $config = MaxioAdvancedBillingConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = MaxioAdvancedBillingHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = MaxioAdvancedBillingHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!MaxioAdvancedBillingFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, MaxioAdvancedBillingFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return MaxioAdvancedBillingUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = MaxioAdvancedBillingHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = MaxioAdvancedBillingHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = MaxioAdvancedBillingHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new MaxioAdvancedBillingSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new MaxioAdvancedBillingError($op . "_allow",
                "MaxioAdvancedBillingSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = MaxioAdvancedBillingHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = MaxioAdvancedBillingHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new MaxioAdvancedBillingError("graphql_error",
                "MaxioAdvancedBillingSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_account_balance = null;

    // Canonical facade: $client->AccountBalance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_balance()
    // resolves here too.
    public function AccountBalance($data = null)
    {
        require_once __DIR__ . '/entity/account_balance_entity.php';
        if ($data === null) {
            if ($this->_account_balance === null) {
                $this->_account_balance = new AccountBalanceEntity($this, null);
            }
            return $this->_account_balance;
        }
        return new AccountBalanceEntity($this, $data);
    }


    private $_allocation = null;

    // Canonical facade: $client->Allocation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->allocation()
    // resolves here too.
    public function Allocation($data = null)
    {
        require_once __DIR__ . '/entity/allocation_entity.php';
        if ($data === null) {
            if ($this->_allocation === null) {
                $this->_allocation = new AllocationEntity($this, null);
            }
            return $this->_allocation;
        }
        return new AllocationEntity($this, $data);
    }


    private $_batch_job = null;

    // Canonical facade: $client->BatchJob()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->batch_job()
    // resolves here too.
    public function BatchJob($data = null)
    {
        require_once __DIR__ . '/entity/batch_job_entity.php';
        if ($data === null) {
            if ($this->_batch_job === null) {
                $this->_batch_job = new BatchJobEntity($this, null);
            }
            return $this->_batch_job;
        }
        return new BatchJobEntity($this, $data);
    }


    private $_billing_portal = null;

    // Canonical facade: $client->BillingPortal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billing_portal()
    // resolves here too.
    public function BillingPortal($data = null)
    {
        require_once __DIR__ . '/entity/billing_portal_entity.php';
        if ($data === null) {
            if ($this->_billing_portal === null) {
                $this->_billing_portal = new BillingPortalEntity($this, null);
            }
            return $this->_billing_portal;
        }
        return new BillingPortalEntity($this, $data);
    }


    private $_component = null;

    // Canonical facade: $client->Component()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->component()
    // resolves here too.
    public function Component($data = null)
    {
        require_once __DIR__ . '/entity/component_entity.php';
        if ($data === null) {
            if ($this->_component === null) {
                $this->_component = new ComponentEntity($this, null);
            }
            return $this->_component;
        }
        return new ComponentEntity($this, $data);
    }


    private $_component_feature = null;

    // Canonical facade: $client->ComponentFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->component_feature()
    // resolves here too.
    public function ComponentFeature($data = null)
    {
        require_once __DIR__ . '/entity/component_feature_entity.php';
        if ($data === null) {
            if ($this->_component_feature === null) {
                $this->_component_feature = new ComponentFeatureEntity($this, null);
            }
            return $this->_component_feature;
        }
        return new ComponentFeatureEntity($this, $data);
    }


    private $_component_price_point = null;

    // Canonical facade: $client->ComponentPricePoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->component_price_point()
    // resolves here too.
    public function ComponentPricePoint($data = null)
    {
        require_once __DIR__ . '/entity/component_price_point_entity.php';
        if ($data === null) {
            if ($this->_component_price_point === null) {
                $this->_component_price_point = new ComponentPricePointEntity($this, null);
            }
            return $this->_component_price_point;
        }
        return new ComponentPricePointEntity($this, $data);
    }


    private $_component_price_point_currency_overage = null;

    // Canonical facade: $client->ComponentPricePointCurrencyOverage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->component_price_point_currency_overage()
    // resolves here too.
    public function ComponentPricePointCurrencyOverage($data = null)
    {
        require_once __DIR__ . '/entity/component_price_point_currency_overage_entity.php';
        if ($data === null) {
            if ($this->_component_price_point_currency_overage === null) {
                $this->_component_price_point_currency_overage = new ComponentPricePointCurrencyOverageEntity($this, null);
            }
            return $this->_component_price_point_currency_overage;
        }
        return new ComponentPricePointCurrencyOverageEntity($this, $data);
    }


    private $_coupon = null;

    // Canonical facade: $client->Coupon()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coupon()
    // resolves here too.
    public function Coupon($data = null)
    {
        require_once __DIR__ . '/entity/coupon_entity.php';
        if ($data === null) {
            if ($this->_coupon === null) {
                $this->_coupon = new CouponEntity($this, null);
            }
            return $this->_coupon;
        }
        return new CouponEntity($this, $data);
    }


    private $_coupon_currency = null;

    // Canonical facade: $client->CouponCurrency()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coupon_currency()
    // resolves here too.
    public function CouponCurrency($data = null)
    {
        require_once __DIR__ . '/entity/coupon_currency_entity.php';
        if ($data === null) {
            if ($this->_coupon_currency === null) {
                $this->_coupon_currency = new CouponCurrencyEntity($this, null);
            }
            return $this->_coupon_currency;
        }
        return new CouponCurrencyEntity($this, $data);
    }


    private $_coupon_subcode = null;

    // Canonical facade: $client->CouponSubcode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coupon_subcode()
    // resolves here too.
    public function CouponSubcode($data = null)
    {
        require_once __DIR__ . '/entity/coupon_subcode_entity.php';
        if ($data === null) {
            if ($this->_coupon_subcode === null) {
                $this->_coupon_subcode = new CouponSubcodeEntity($this, null);
            }
            return $this->_coupon_subcode;
        }
        return new CouponSubcodeEntity($this, $data);
    }


    private $_coupon_usage = null;

    // Canonical facade: $client->CouponUsage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->coupon_usage()
    // resolves here too.
    public function CouponUsage($data = null)
    {
        require_once __DIR__ . '/entity/coupon_usage_entity.php';
        if ($data === null) {
            if ($this->_coupon_usage === null) {
                $this->_coupon_usage = new CouponUsageEntity($this, null);
            }
            return $this->_coupon_usage;
        }
        return new CouponUsageEntity($this, $data);
    }


    private $_custom_field = null;

    // Canonical facade: $client->CustomField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field()
    // resolves here too.
    public function CustomField($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_entity.php';
        if ($data === null) {
            if ($this->_custom_field === null) {
                $this->_custom_field = new CustomFieldEntity($this, null);
            }
            return $this->_custom_field;
        }
        return new CustomFieldEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_delayed_cancel = null;

    // Canonical facade: $client->DelayedCancel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->delayed_cancel()
    // resolves here too.
    public function DelayedCancel($data = null)
    {
        require_once __DIR__ . '/entity/delayed_cancel_entity.php';
        if ($data === null) {
            if ($this->_delayed_cancel === null) {
                $this->_delayed_cancel = new DelayedCancelEntity($this, null);
            }
            return $this->_delayed_cancel;
        }
        return new DelayedCancelEntity($this, $data);
    }


    private $_endpoint = null;

    // Canonical facade: $client->Endpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->endpoint()
    // resolves here too.
    public function Endpoint($data = null)
    {
        require_once __DIR__ . '/entity/endpoint_entity.php';
        if ($data === null) {
            if ($this->_endpoint === null) {
                $this->_endpoint = new EndpointEntity($this, null);
            }
            return $this->_endpoint;
        }
        return new EndpointEntity($this, $data);
    }


    private $_entitlement = null;

    // Canonical facade: $client->Entitlement()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entitlement()
    // resolves here too.
    public function Entitlement($data = null)
    {
        require_once __DIR__ . '/entity/entitlement_entity.php';
        if ($data === null) {
            if ($this->_entitlement === null) {
                $this->_entitlement = new EntitlementEntity($this, null);
            }
            return $this->_entitlement;
        }
        return new EntitlementEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_events_based_billing_segment = null;

    // Canonical facade: $client->EventsBasedBillingSegment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->events_based_billing_segment()
    // resolves here too.
    public function EventsBasedBillingSegment($data = null)
    {
        require_once __DIR__ . '/entity/events_based_billing_segment_entity.php';
        if ($data === null) {
            if ($this->_events_based_billing_segment === null) {
                $this->_events_based_billing_segment = new EventsBasedBillingSegmentEntity($this, null);
            }
            return $this->_events_based_billing_segment;
        }
        return new EventsBasedBillingSegmentEntity($this, $data);
    }


    private $_feature = null;

    // Canonical facade: $client->Feature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature()
    // resolves here too.
    public function Feature($data = null)
    {
        require_once __DIR__ . '/entity/feature_entity.php';
        if ($data === null) {
            if ($this->_feature === null) {
                $this->_feature = new FeatureEntity($this, null);
            }
            return $this->_feature;
        }
        return new FeatureEntity($this, $data);
    }


    private $_feature_catalog_item = null;

    // Canonical facade: $client->FeatureCatalogItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature_catalog_item()
    // resolves here too.
    public function FeatureCatalogItem($data = null)
    {
        require_once __DIR__ . '/entity/feature_catalog_item_entity.php';
        if ($data === null) {
            if ($this->_feature_catalog_item === null) {
                $this->_feature_catalog_item = new FeatureCatalogItemEntity($this, null);
            }
            return $this->_feature_catalog_item;
        }
        return new FeatureCatalogItemEntity($this, $data);
    }


    private $_feature_template = null;

    // Canonical facade: $client->FeatureTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feature_template()
    // resolves here too.
    public function FeatureTemplate($data = null)
    {
        require_once __DIR__ . '/entity/feature_template_entity.php';
        if ($data === null) {
            if ($this->_feature_template === null) {
                $this->_feature_template = new FeatureTemplateEntity($this, null);
            }
            return $this->_feature_template;
        }
        return new FeatureTemplateEntity($this, $data);
    }


    private $_insight = null;

    // Canonical facade: $client->Insight()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->insight()
    // resolves here too.
    public function Insight($data = null)
    {
        require_once __DIR__ . '/entity/insight_entity.php';
        if ($data === null) {
            if ($this->_insight === null) {
                $this->_insight = new InsightEntity($this, null);
            }
            return $this->_insight;
        }
        return new InsightEntity($this, $data);
    }


    private $_invoice = null;

    // Canonical facade: $client->Invoice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->invoice()
    // resolves here too.
    public function Invoice($data = null)
    {
        require_once __DIR__ . '/entity/invoice_entity.php';
        if ($data === null) {
            if ($this->_invoice === null) {
                $this->_invoice = new InvoiceEntity($this, null);
            }
            return $this->_invoice;
        }
        return new InvoiceEntity($this, $data);
    }


    private $_list_proforma_invoice = null;

    // Canonical facade: $client->ListProformaInvoice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_proforma_invoice()
    // resolves here too.
    public function ListProformaInvoice($data = null)
    {
        require_once __DIR__ . '/entity/list_proforma_invoice_entity.php';
        if ($data === null) {
            if ($this->_list_proforma_invoice === null) {
                $this->_list_proforma_invoice = new ListProformaInvoiceEntity($this, null);
            }
            return $this->_list_proforma_invoice;
        }
        return new ListProformaInvoiceEntity($this, $data);
    }


    private $_list_sale_rep_item = null;

    // Canonical facade: $client->ListSaleRepItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_sale_rep_item()
    // resolves here too.
    public function ListSaleRepItem($data = null)
    {
        require_once __DIR__ . '/entity/list_sale_rep_item_entity.php';
        if ($data === null) {
            if ($this->_list_sale_rep_item === null) {
                $this->_list_sale_rep_item = new ListSaleRepItemEntity($this, null);
            }
            return $this->_list_sale_rep_item;
        }
        return new ListSaleRepItemEntity($this, $data);
    }


    private $_list_segment = null;

    // Canonical facade: $client->ListSegment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list_segment()
    // resolves here too.
    public function ListSegment($data = null)
    {
        require_once __DIR__ . '/entity/list_segment_entity.php';
        if ($data === null) {
            if ($this->_list_segment === null) {
                $this->_list_segment = new ListSegmentEntity($this, null);
            }
            return $this->_list_segment;
        }
        return new ListSegmentEntity($this, $data);
    }


    private $_offer = null;

    // Canonical facade: $client->Offer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->offer()
    // resolves here too.
    public function Offer($data = null)
    {
        require_once __DIR__ . '/entity/offer_entity.php';
        if ($data === null) {
            if ($this->_offer === null) {
                $this->_offer = new OfferEntity($this, null);
            }
            return $this->_offer;
        }
        return new OfferEntity($this, $data);
    }


    private $_one_time_token = null;

    // Canonical facade: $client->OneTimeToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->one_time_token()
    // resolves here too.
    public function OneTimeToken($data = null)
    {
        require_once __DIR__ . '/entity/one_time_token_entity.php';
        if ($data === null) {
            if ($this->_one_time_token === null) {
                $this->_one_time_token = new OneTimeTokenEntity($this, null);
            }
            return $this->_one_time_token;
        }
        return new OneTimeTokenEntity($this, $data);
    }


    private $_payment_profile = null;

    // Canonical facade: $client->PaymentProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->payment_profile()
    // resolves here too.
    public function PaymentProfile($data = null)
    {
        require_once __DIR__ . '/entity/payment_profile_entity.php';
        if ($data === null) {
            if ($this->_payment_profile === null) {
                $this->_payment_profile = new PaymentProfileEntity($this, null);
            }
            return $this->_payment_profile;
        }
        return new PaymentProfileEntity($this, $data);
    }


    private $_prepayment = null;

    // Canonical facade: $client->Prepayment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->prepayment()
    // resolves here too.
    public function Prepayment($data = null)
    {
        require_once __DIR__ . '/entity/prepayment_entity.php';
        if ($data === null) {
            if ($this->_prepayment === null) {
                $this->_prepayment = new PrepaymentEntity($this, null);
            }
            return $this->_prepayment;
        }
        return new PrepaymentEntity($this, $data);
    }


    private $_product = null;

    // Canonical facade: $client->Product()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product()
    // resolves here too.
    public function Product($data = null)
    {
        require_once __DIR__ . '/entity/product_entity.php';
        if ($data === null) {
            if ($this->_product === null) {
                $this->_product = new ProductEntity($this, null);
            }
            return $this->_product;
        }
        return new ProductEntity($this, $data);
    }


    private $_product_family = null;

    // Canonical facade: $client->ProductFamily()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_family()
    // resolves here too.
    public function ProductFamily($data = null)
    {
        require_once __DIR__ . '/entity/product_family_entity.php';
        if ($data === null) {
            if ($this->_product_family === null) {
                $this->_product_family = new ProductFamilyEntity($this, null);
            }
            return $this->_product_family;
        }
        return new ProductFamilyEntity($this, $data);
    }


    private $_product_feature = null;

    // Canonical facade: $client->ProductFeature()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_feature()
    // resolves here too.
    public function ProductFeature($data = null)
    {
        require_once __DIR__ . '/entity/product_feature_entity.php';
        if ($data === null) {
            if ($this->_product_feature === null) {
                $this->_product_feature = new ProductFeatureEntity($this, null);
            }
            return $this->_product_feature;
        }
        return new ProductFeatureEntity($this, $data);
    }


    private $_product_price_point = null;

    // Canonical facade: $client->ProductPricePoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->product_price_point()
    // resolves here too.
    public function ProductPricePoint($data = null)
    {
        require_once __DIR__ . '/entity/product_price_point_entity.php';
        if ($data === null) {
            if ($this->_product_price_point === null) {
                $this->_product_price_point = new ProductPricePointEntity($this, null);
            }
            return $this->_product_price_point;
        }
        return new ProductPricePointEntity($this, $data);
    }


    private $_proforma_invoice = null;

    // Canonical facade: $client->ProformaInvoice()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->proforma_invoice()
    // resolves here too.
    public function ProformaInvoice($data = null)
    {
        require_once __DIR__ . '/entity/proforma_invoice_entity.php';
        if ($data === null) {
            if ($this->_proforma_invoice === null) {
                $this->_proforma_invoice = new ProformaInvoiceEntity($this, null);
            }
            return $this->_proforma_invoice;
        }
        return new ProformaInvoiceEntity($this, $data);
    }


    private $_reason_code = null;

    // Canonical facade: $client->ReasonCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reason_code()
    // resolves here too.
    public function ReasonCode($data = null)
    {
        require_once __DIR__ . '/entity/reason_code_entity.php';
        if ($data === null) {
            if ($this->_reason_code === null) {
                $this->_reason_code = new ReasonCodeEntity($this, null);
            }
            return $this->_reason_code;
        }
        return new ReasonCodeEntity($this, $data);
    }


    private $_referral_code = null;

    // Canonical facade: $client->ReferralCode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->referral_code()
    // resolves here too.
    public function ReferralCode($data = null)
    {
        require_once __DIR__ . '/entity/referral_code_entity.php';
        if ($data === null) {
            if ($this->_referral_code === null) {
                $this->_referral_code = new ReferralCodeEntity($this, null);
            }
            return $this->_referral_code;
        }
        return new ReferralCodeEntity($this, $data);
    }


    private $_sale_rep_setting = null;

    // Canonical facade: $client->SaleRepSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sale_rep_setting()
    // resolves here too.
    public function SaleRepSetting($data = null)
    {
        require_once __DIR__ . '/entity/sale_rep_setting_entity.php';
        if ($data === null) {
            if ($this->_sale_rep_setting === null) {
                $this->_sale_rep_setting = new SaleRepSettingEntity($this, null);
            }
            return $this->_sale_rep_setting;
        }
        return new SaleRepSettingEntity($this, $data);
    }


    private $_sales_commission = null;

    // Canonical facade: $client->SalesCommission()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sales_commission()
    // resolves here too.
    public function SalesCommission($data = null)
    {
        require_once __DIR__ . '/entity/sales_commission_entity.php';
        if ($data === null) {
            if ($this->_sales_commission === null) {
                $this->_sales_commission = new SalesCommissionEntity($this, null);
            }
            return $this->_sales_commission;
        }
        return new SalesCommissionEntity($this, $data);
    }


    private $_segment = null;

    // Canonical facade: $client->Segment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->segment()
    // resolves here too.
    public function Segment($data = null)
    {
        require_once __DIR__ . '/entity/segment_entity.php';
        if ($data === null) {
            if ($this->_segment === null) {
                $this->_segment = new SegmentEntity($this, null);
            }
            return $this->_segment;
        }
        return new SegmentEntity($this, $data);
    }


    private $_signup_proforma_preview = null;

    // Canonical facade: $client->SignupProformaPreview()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->signup_proforma_preview()
    // resolves here too.
    public function SignupProformaPreview($data = null)
    {
        require_once __DIR__ . '/entity/signup_proforma_preview_entity.php';
        if ($data === null) {
            if ($this->_signup_proforma_preview === null) {
                $this->_signup_proforma_preview = new SignupProformaPreviewEntity($this, null);
            }
            return $this->_signup_proforma_preview;
        }
        return new SignupProformaPreviewEntity($this, $data);
    }


    private $_site = null;

    // Canonical facade: $client->Site()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->site()
    // resolves here too.
    public function Site($data = null)
    {
        require_once __DIR__ . '/entity/site_entity.php';
        if ($data === null) {
            if ($this->_site === null) {
                $this->_site = new SiteEntity($this, null);
            }
            return $this->_site;
        }
        return new SiteEntity($this, $data);
    }


    private $_subscription = null;

    // Canonical facade: $client->Subscription()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription()
    // resolves here too.
    public function Subscription($data = null)
    {
        require_once __DIR__ . '/entity/subscription_entity.php';
        if ($data === null) {
            if ($this->_subscription === null) {
                $this->_subscription = new SubscriptionEntity($this, null);
            }
            return $this->_subscription;
        }
        return new SubscriptionEntity($this, $data);
    }


    private $_subscription_component = null;

    // Canonical facade: $client->SubscriptionComponent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_component()
    // resolves here too.
    public function SubscriptionComponent($data = null)
    {
        require_once __DIR__ . '/entity/subscription_component_entity.php';
        if ($data === null) {
            if ($this->_subscription_component === null) {
                $this->_subscription_component = new SubscriptionComponentEntity($this, null);
            }
            return $this->_subscription_component;
        }
        return new SubscriptionComponentEntity($this, $data);
    }


    private $_subscription_group = null;

    // Canonical facade: $client->SubscriptionGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_group()
    // resolves here too.
    public function SubscriptionGroup($data = null)
    {
        require_once __DIR__ . '/entity/subscription_group_entity.php';
        if ($data === null) {
            if ($this->_subscription_group === null) {
                $this->_subscription_group = new SubscriptionGroupEntity($this, null);
            }
            return $this->_subscription_group;
        }
        return new SubscriptionGroupEntity($this, $data);
    }


    private $_subscription_group_invoice_account = null;

    // Canonical facade: $client->SubscriptionGroupInvoiceAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_group_invoice_account()
    // resolves here too.
    public function SubscriptionGroupInvoiceAccount($data = null)
    {
        require_once __DIR__ . '/entity/subscription_group_invoice_account_entity.php';
        if ($data === null) {
            if ($this->_subscription_group_invoice_account === null) {
                $this->_subscription_group_invoice_account = new SubscriptionGroupInvoiceAccountEntity($this, null);
            }
            return $this->_subscription_group_invoice_account;
        }
        return new SubscriptionGroupInvoiceAccountEntity($this, $data);
    }


    private $_subscription_group_signup = null;

    // Canonical facade: $client->SubscriptionGroupSignup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_group_signup()
    // resolves here too.
    public function SubscriptionGroupSignup($data = null)
    {
        require_once __DIR__ . '/entity/subscription_group_signup_entity.php';
        if ($data === null) {
            if ($this->_subscription_group_signup === null) {
                $this->_subscription_group_signup = new SubscriptionGroupSignupEntity($this, null);
            }
            return $this->_subscription_group_signup;
        }
        return new SubscriptionGroupSignupEntity($this, $data);
    }


    private $_subscription_group_status = null;

    // Canonical facade: $client->SubscriptionGroupStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_group_status()
    // resolves here too.
    public function SubscriptionGroupStatus($data = null)
    {
        require_once __DIR__ . '/entity/subscription_group_status_entity.php';
        if ($data === null) {
            if ($this->_subscription_group_status === null) {
                $this->_subscription_group_status = new SubscriptionGroupStatusEntity($this, null);
            }
            return $this->_subscription_group_status;
        }
        return new SubscriptionGroupStatusEntity($this, $data);
    }


    private $_subscription_invoice_account = null;

    // Canonical facade: $client->SubscriptionInvoiceAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_invoice_account()
    // resolves here too.
    public function SubscriptionInvoiceAccount($data = null)
    {
        require_once __DIR__ . '/entity/subscription_invoice_account_entity.php';
        if ($data === null) {
            if ($this->_subscription_invoice_account === null) {
                $this->_subscription_invoice_account = new SubscriptionInvoiceAccountEntity($this, null);
            }
            return $this->_subscription_invoice_account;
        }
        return new SubscriptionInvoiceAccountEntity($this, $data);
    }


    private $_subscription_mrr = null;

    // Canonical facade: $client->SubscriptionMrr()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_mrr()
    // resolves here too.
    public function SubscriptionMrr($data = null)
    {
        require_once __DIR__ . '/entity/subscription_mrr_entity.php';
        if ($data === null) {
            if ($this->_subscription_mrr === null) {
                $this->_subscription_mrr = new SubscriptionMrrEntity($this, null);
            }
            return $this->_subscription_mrr;
        }
        return new SubscriptionMrrEntity($this, $data);
    }


    private $_subscription_note = null;

    // Canonical facade: $client->SubscriptionNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_note()
    // resolves here too.
    public function SubscriptionNote($data = null)
    {
        require_once __DIR__ . '/entity/subscription_note_entity.php';
        if ($data === null) {
            if ($this->_subscription_note === null) {
                $this->_subscription_note = new SubscriptionNoteEntity($this, null);
            }
            return $this->_subscription_note;
        }
        return new SubscriptionNoteEntity($this, $data);
    }


    private $_subscription_product = null;

    // Canonical facade: $client->SubscriptionProduct()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_product()
    // resolves here too.
    public function SubscriptionProduct($data = null)
    {
        require_once __DIR__ . '/entity/subscription_product_entity.php';
        if ($data === null) {
            if ($this->_subscription_product === null) {
                $this->_subscription_product = new SubscriptionProductEntity($this, null);
            }
            return $this->_subscription_product;
        }
        return new SubscriptionProductEntity($this, $data);
    }


    private $_subscription_renewal = null;

    // Canonical facade: $client->SubscriptionRenewal()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_renewal()
    // resolves here too.
    public function SubscriptionRenewal($data = null)
    {
        require_once __DIR__ . '/entity/subscription_renewal_entity.php';
        if ($data === null) {
            if ($this->_subscription_renewal === null) {
                $this->_subscription_renewal = new SubscriptionRenewalEntity($this, null);
            }
            return $this->_subscription_renewal;
        }
        return new SubscriptionRenewalEntity($this, $data);
    }


    private $_subscription_status = null;

    // Canonical facade: $client->SubscriptionStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_status()
    // resolves here too.
    public function SubscriptionStatus($data = null)
    {
        require_once __DIR__ . '/entity/subscription_status_entity.php';
        if ($data === null) {
            if ($this->_subscription_status === null) {
                $this->_subscription_status = new SubscriptionStatusEntity($this, null);
            }
            return $this->_subscription_status;
        }
        return new SubscriptionStatusEntity($this, $data);
    }


    private $_usage = null;

    // Canonical facade: $client->Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage()
    // resolves here too.
    public function Usage($data = null)
    {
        require_once __DIR__ . '/entity/usage_entity.php';
        if ($data === null) {
            if ($this->_usage === null) {
                $this->_usage = new UsageEntity($this, null);
            }
            return $this->_usage;
        }
        return new UsageEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new MaxioAdvancedBillingSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
