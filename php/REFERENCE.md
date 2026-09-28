# MaxioAdvancedBilling PHP SDK Reference

Complete API reference for the MaxioAdvancedBilling PHP SDK.


## MaxioAdvancedBillingSDK

### Constructor

```php
require_once __DIR__ . '/maxioadvancedbilling_sdk.php';

$client = new MaxioAdvancedBillingSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MaxioAdvancedBillingSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = MaxioAdvancedBillingSDK::test();
```


### Instance Methods

#### `AccountBalance($data = null)`

Create a new `AccountBalanceEntity` instance. Pass `null` for no initial data.

#### `Allocation($data = null)`

Create a new `AllocationEntity` instance. Pass `null` for no initial data.

#### `BatchJob($data = null)`

Create a new `BatchJobEntity` instance. Pass `null` for no initial data.

#### `BillingPortal($data = null)`

Create a new `BillingPortalEntity` instance. Pass `null` for no initial data.

#### `Component($data = null)`

Create a new `ComponentEntity` instance. Pass `null` for no initial data.

#### `ComponentFeature($data = null)`

Create a new `ComponentFeatureEntity` instance. Pass `null` for no initial data.

#### `ComponentPricePoint($data = null)`

Create a new `ComponentPricePointEntity` instance. Pass `null` for no initial data.

#### `ComponentPricePointCurrencyOverage($data = null)`

Create a new `ComponentPricePointCurrencyOverageEntity` instance. Pass `null` for no initial data.

#### `Coupon($data = null)`

Create a new `CouponEntity` instance. Pass `null` for no initial data.

#### `CouponCurrency($data = null)`

Create a new `CouponCurrencyEntity` instance. Pass `null` for no initial data.

#### `CouponSubcode($data = null)`

Create a new `CouponSubcodeEntity` instance. Pass `null` for no initial data.

#### `CouponUsage($data = null)`

Create a new `CouponUsageEntity` instance. Pass `null` for no initial data.

#### `CustomField($data = null)`

Create a new `CustomFieldEntity` instance. Pass `null` for no initial data.

#### `Customer($data = null)`

Create a new `CustomerEntity` instance. Pass `null` for no initial data.

#### `DelayedCancel($data = null)`

Create a new `DelayedCancelEntity` instance. Pass `null` for no initial data.

#### `Endpoint($data = null)`

Create a new `EndpointEntity` instance. Pass `null` for no initial data.

#### `Entitlement($data = null)`

Create a new `EntitlementEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `EventsBasedBillingSegment($data = null)`

Create a new `EventsBasedBillingSegmentEntity` instance. Pass `null` for no initial data.

#### `Feature($data = null)`

Create a new `FeatureEntity` instance. Pass `null` for no initial data.

#### `FeatureCatalogItem($data = null)`

Create a new `FeatureCatalogItemEntity` instance. Pass `null` for no initial data.

#### `FeatureTemplate($data = null)`

Create a new `FeatureTemplateEntity` instance. Pass `null` for no initial data.

#### `Insight($data = null)`

Create a new `InsightEntity` instance. Pass `null` for no initial data.

#### `Invoice($data = null)`

Create a new `InvoiceEntity` instance. Pass `null` for no initial data.

#### `ListProformaInvoice($data = null)`

Create a new `ListProformaInvoiceEntity` instance. Pass `null` for no initial data.

#### `ListSaleRepItem($data = null)`

Create a new `ListSaleRepItemEntity` instance. Pass `null` for no initial data.

#### `ListSegment($data = null)`

Create a new `ListSegmentEntity` instance. Pass `null` for no initial data.

#### `Offer($data = null)`

Create a new `OfferEntity` instance. Pass `null` for no initial data.

#### `OneTimeToken($data = null)`

Create a new `OneTimeTokenEntity` instance. Pass `null` for no initial data.

#### `PaymentProfile($data = null)`

Create a new `PaymentProfileEntity` instance. Pass `null` for no initial data.

#### `Prepayment($data = null)`

Create a new `PrepaymentEntity` instance. Pass `null` for no initial data.

#### `Product($data = null)`

Create a new `ProductEntity` instance. Pass `null` for no initial data.

#### `ProductFamily($data = null)`

Create a new `ProductFamilyEntity` instance. Pass `null` for no initial data.

#### `ProductFeature($data = null)`

Create a new `ProductFeatureEntity` instance. Pass `null` for no initial data.

#### `ProductPricePoint($data = null)`

Create a new `ProductPricePointEntity` instance. Pass `null` for no initial data.

#### `ProformaInvoice($data = null)`

Create a new `ProformaInvoiceEntity` instance. Pass `null` for no initial data.

#### `ReasonCode($data = null)`

Create a new `ReasonCodeEntity` instance. Pass `null` for no initial data.

#### `ReferralCode($data = null)`

Create a new `ReferralCodeEntity` instance. Pass `null` for no initial data.

#### `SaleRepSetting($data = null)`

Create a new `SaleRepSettingEntity` instance. Pass `null` for no initial data.

#### `SalesCommission($data = null)`

Create a new `SalesCommissionEntity` instance. Pass `null` for no initial data.

#### `Segment($data = null)`

Create a new `SegmentEntity` instance. Pass `null` for no initial data.

#### `SignupProformaPreview($data = null)`

Create a new `SignupProformaPreviewEntity` instance. Pass `null` for no initial data.

#### `Site($data = null)`

Create a new `SiteEntity` instance. Pass `null` for no initial data.

#### `Subscription($data = null)`

Create a new `SubscriptionEntity` instance. Pass `null` for no initial data.

#### `SubscriptionComponent($data = null)`

Create a new `SubscriptionComponentEntity` instance. Pass `null` for no initial data.

#### `SubscriptionGroup($data = null)`

Create a new `SubscriptionGroupEntity` instance. Pass `null` for no initial data.

#### `SubscriptionGroupInvoiceAccount($data = null)`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance. Pass `null` for no initial data.

#### `SubscriptionGroupSignup($data = null)`

Create a new `SubscriptionGroupSignupEntity` instance. Pass `null` for no initial data.

#### `SubscriptionGroupStatus($data = null)`

Create a new `SubscriptionGroupStatusEntity` instance. Pass `null` for no initial data.

#### `SubscriptionInvoiceAccount($data = null)`

Create a new `SubscriptionInvoiceAccountEntity` instance. Pass `null` for no initial data.

#### `SubscriptionMrr($data = null)`

Create a new `SubscriptionMrrEntity` instance. Pass `null` for no initial data.

#### `SubscriptionNote($data = null)`

Create a new `SubscriptionNoteEntity` instance. Pass `null` for no initial data.

#### `SubscriptionProduct($data = null)`

Create a new `SubscriptionProductEntity` instance. Pass `null` for no initial data.

#### `SubscriptionRenewal($data = null)`

Create a new `SubscriptionRenewalEntity` instance. Pass `null` for no initial data.

#### `SubscriptionStatus($data = null)`

Create a new `SubscriptionStatusEntity` instance. Pass `null` for no initial data.

#### `Usage($data = null)`

Create a new `UsageEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): MaxioAdvancedBillingUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AccountBalanceEntity

```php
$account_balance = $client->AccountBalance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `open_invoices` | `mixed` | No |  |
| `pending_discounts` | `mixed` | No |  |
| `pending_invoices` | `mixed` | No |  |
| `prepayments` | `mixed` | No |  |
| `service_credits` | `mixed` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccountBalance()->load(["subscription_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountBalanceEntity`

Create a new `AccountBalanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AllocationEntity

```php
$allocation = $client->Allocation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Allocation()->create([
  "subscription_id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Allocation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AllocationEntity`

Create a new `AllocationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BatchJobEntity

```php
$batch_job = $client->BatchJob();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `string` | No |  |
| `created_at` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `int` | No |  |
| `row_count` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BatchJob()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BatchJob()->load(["batch_id" => "batch_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BatchJobEntity`

Create a new `BatchJobEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillingPortalEntity

```php
$billing_portal = $client->BillingPortal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fetch_count` | `int` | No |  |
| `last_accepted_at` | `string` | No |  |
| `last_invite_accepted_at` | `string` | No |  |
| `last_invite_sent_at` | `string` | No |  |
| `last_sent_at` | `string` | No |  |
| `new_link_available_at` | `string` | No |  |
| `send_invite_link_text` | `string` | No |  |
| `uninvited_count` | `int` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillingPortal()->create([
  "customer_id" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BillingPortal()->load(["customer_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BillingPortal()->remove(["customer_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillingPortalEntity`

Create a new `BillingPortalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComponentEntity

```php
$component = $client->Component();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component` | `array` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `component` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Component()->create([
  "product_family_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Component()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Component()->load(["component_id" => "component_id", "product_family_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Component()->remove(["component_id" => "component_id", "product_family_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Component()->update([
  "component_id" => "component_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComponentEntity`

Create a new `ComponentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComponentFeatureEntity

```php
$component_feature = $client->ComponentFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ComponentFeature()->remove(["component_id" => 1, "id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComponentFeatureEntity`

Create a new `ComponentFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComponentPricePointEntity

```php
$component_price_point = $client->ComponentPricePoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component` | `array` | Yes |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `array` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `mixed` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `mixed` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `array` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `mixed` | No |  |
| `price_point` | `array` | No |  |
| `price_points` | `array` | No |  |
| `prices` | `array` | No |  |
| `pricing_scheme` | `mixed` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` | No |  |
| `type` | `mixed` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Field Usage by Operation

| Field | list | create | update | remove |
| --- | --- | --- | --- | --- |
| `archived_at` | - | - | - | - |
| `component` | - | - | - | - |
| `component_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `currency_prices` | - | - | - | - |
| `default` | - | - | - | - |
| `expiration_interval` | - | - | - | - |
| `expiration_interval_unit` | - | - | - | - |
| `handle` | - | - | - | - |
| `id` | - | - | - | - |
| `interval` | - | - | - | - |
| `interval_unit` | - | - | - | - |
| `name` | - | - | - | - |
| `overage_prices` | - | - | - | - |
| `overage_pricing_scheme` | - | - | - | - |
| `price_point` | - | - | Yes | - |
| `price_points` | Yes | - | - | - |
| `prices` | - | - | - | - |
| `pricing_scheme` | - | - | - | - |
| `renew_prepaid_allocation` | - | - | - | - |
| `rollover_prepaid_remainder` | - | - | - | - |
| `subscription_id` | - | - | - | - |
| `tax_included` | - | - | - | - |
| `type` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `use_site_exchange_rate` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ComponentPricePoint()->create([
  "id" => null, // int
  "component" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ComponentPricePoint()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ComponentPricePoint()->remove(["component_id" => "component_id", "price_point_id" => "price_point_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ComponentPricePoint()->update([
  "price_point_id" => "price_point_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComponentPricePointEntity`

Create a new `ComponentPricePointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComponentPricePointCurrencyOverageEntity

```php
$component_price_point_currency_overage = $client->ComponentPricePointCurrencyOverage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency_overage_prices` | `array` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `array` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `mixed` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `mixed` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `array` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `mixed` | No |  |
| `prices` | `array` | No |  |
| `pricing_scheme` | `mixed` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` | No |  |
| `type` | `mixed` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ComponentPricePointCurrencyOverage()->load(["component_id" => "component_id", "price_point_id" => "price_point_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComponentPricePointCurrencyOverageEntity`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CouponEntity

```php
$coupon = $client->Coupon();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_negative_balance` | `bool` | No | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `float` | No |  |
| `amount_in_cents` | `int` | No |  |
| `apply_on_cancel_at_end_of_period` | `bool` | No |  |
| `apply_on_subscription_expiration` | `bool` | No |  |
| `archived_at` | `string` | No |  |
| `code` | `string` | No |  |
| `compounding_strategy` | `mixed` | No |  |
| `conversion_limit` | `string` | No |  |
| `coupon` | `array` | No |  |
| `coupon_restrictions` | `array` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `array` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `string` | No |  |
| `discount_type` | `string` | No |  |
| `duration_interval` | `int` | No |  |
| `duration_interval_span` | `string` | No |  |
| `duration_interval_unit` | `string` | No |  |
| `duration_period_count` | `int` | No |  |
| `end_date` | `string` | No | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `bool` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `percentage` | `string` | No |  |
| `product_family_id` | `int` | No |  |
| `product_family_name` | `string` | No |  |
| `recurring` | `bool` | No |  |
| `recurring_scheme` | `string` | No |  |
| `stackable` | `bool` | No | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Coupon()->create([
  "product_family_id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Coupon()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Coupon()->load(["coupon_id" => 1, "product_family_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Coupon()->remove(["id" => 1, "subcode" => "subcode"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Coupon()->update([
  "coupon_id" => 1,
  "product_family_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CouponEntity`

Create a new `CouponEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CouponCurrencyEntity

```php
$coupon_currency = $client->CouponCurrency();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CouponCurrency()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CouponCurrencyEntity`

Create a new `CouponCurrencyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CouponSubcodeEntity

```php
$coupon_subcode = $client->CouponSubcode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `array` | No |  |
| `duplicate_codes` | `array` | No |  |
| `id` | `string` | No |  |
| `invalid_codes` | `array` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CouponSubcode()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CouponSubcodeEntity`

Create a new `CouponSubcodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CouponUsageEntity

```php
$coupon_usage = $client->CouponUsage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | The Chargify id of the product |
| `name` | `string` | No | Name of the product |
| `revenue` | `int` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `int` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `int` | No | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `int` | No | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `int` | No | Number of times the coupon has been applied |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CouponUsage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CouponUsageEntity`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldEntity

```php
$custom_field = $client->CustomField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_page` | `int` | No |  |
| `data_count` | `int` | No |  |
| `deleted_at` | `string` | No |  |
| `enum` | `string` | No |  |
| `id` | `int` | No |  |
| `input_type` | `string` | No |  |
| `metadata` | `array` | No |  |
| `metafield_id` | `int` | No |  |
| `metafields` | `mixed` | No |  |
| `name` | `string` | No |  |
| `per_page` | `int` | No |  |
| `resource_id` | `int` | No |  |
| `scope` | `array` | No |  |
| `total_count` | `int` | No |  |
| `total_pages` | `int` | No |  |
| `value` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomField()->create([
  "resource_type" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomField()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->remove(["resource_type" => "resource_type"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomField()->update([
  "resource_type" => "resource_type",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldEntity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomerEntity

```php
$customer = $client->Customer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `string` | No | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `int` | No | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `string` | No | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `string` | No | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `string` | No | The customer shipping address country |
| `country_name` | `string` | No | The customer's full name of country |
| `created_at` | `string` | No | The timestamp in which the customer object was created in Chargify |
| `customer` | `array` | No |  |
| `default_auto_renewal_profile_id` | `int` | No | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `string` | No |  |
| `email` | `string` | No | The email address of the customer |
| `entity_identifier_kind` | `mixed` | No |  |
| `entity_identifier_value` | `string` | No | The value of the customer's tax or business identifier. |
| `first_name` | `string` | No | The first name of the customer |
| `id` | `int` | No | The customer ID in Chargify |
| `last_name` | `string` | No | The last name of the customer |
| `locale` | `string` | No | The locale for the customer to identify language-region |
| `maxioid` | `string` | No | The Maxio-generated unique identifier for the customer. |
| `organization` | `string` | No | The organization of the customer. |
| `parent_id` | `int` | No | The parent ID in Chargify if applicable. |
| `phone` | `string` | No | The phone number of the customer |
| `portal_customer_created_at` | `string` | No | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `string` | No | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `string` | No | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `string` | No | The unique identifier used within your own application for this customer |
| `salesforce_id` | `string` | No | The Salesforce ID for the customer |
| `state` | `string` | No | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `string` | No | The customer's full name of state |
| `surcharging` | `bool` | No | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `bool` | No | The tax exempt status for the customer. |
| `tax_exempt_reason` | `string` | No | The Tax Exemption Reason Code for the customer |
| `updated_at` | `string` | No | The timestamp in which the customer object was last edited |
| `vat_country` | `string` | No | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `string` | No | The VAT business identification number for the customer. |
| `verified` | `bool` | No | Is the customer verified to use ACH as a payment method. |
| `zip` | `string` | No | The customer’s shipping address zip code (e.g., “12345”) |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `address` | - | - | - | - | - |
| `address_2` | - | - | - | - | - |
| `branding_theme_id` | - | - | - | - | - |
| `cc_emails` | - | - | - | - | - |
| `city` | - | - | - | - | - |
| `country` | - | - | - | - | - |
| `country_name` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `customer` | - | Yes | - | - | - |
| `default_auto_renewal_profile_id` | - | - | - | - | - |
| `default_subscription_group_uid` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `entity_identifier_kind` | - | - | - | - | - |
| `entity_identifier_value` | - | - | - | - | - |
| `first_name` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_name` | - | - | - | - | - |
| `locale` | - | - | - | - | - |
| `maxioid` | - | - | - | - | - |
| `organization` | - | - | - | - | - |
| `parent_id` | - | - | - | - | - |
| `phone` | - | - | - | - | - |
| `portal_customer_created_at` | - | - | - | - | - |
| `portal_invite_last_accepted_at` | - | - | - | - | - |
| `portal_invite_last_sent_at` | - | - | - | - | - |
| `reference` | - | - | - | - | - |
| `salesforce_id` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `state_name` | - | - | - | - | - |
| `surcharging` | - | - | - | - | - |
| `tax_exempt` | - | - | - | - | - |
| `tax_exempt_reason` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `vat_country` | - | - | - | - | - |
| `vat_number` | - | - | - | - | - |
| `verified` | - | - | - | - | - |
| `zip` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Customer()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Customer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Customer()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Customer()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomerEntity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DelayedCancelEntity

```php
$delayed_cancel = $client->DelayedCancel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No |  |
| `subscription` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DelayedCancel()->create([
  "subscription_id" => null, // int
  "subscription" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DelayedCancelEntity`

Create a new `DelayedCancelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EndpointEntity

```php
$endpoint = $client->Endpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `url` | `string` | No |  |
| `webhook_subscriptions` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Endpoint()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Endpoint()->update([
  "endpoint_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EndpointEntity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntitlementEntity

```php
$entitlement = $client->Entitlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `int` | Yes |  |
| `entitlements` | `array` | Yes |  |
| `status` | `string` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Entitlement()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntitlementEntity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Event()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventsBasedBillingSegmentEntity

```php
$events_based_billing_segment = $client->EventsBasedBillingSegment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->EventsBasedBillingSegment()->remove(["component_id" => "component_id", "id" => 1, "price_point_id" => "price_point_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventsBasedBillingSegmentEntity`

Create a new `EventsBasedBillingSegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureEntity

```php
$feature = $client->Feature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `archived_count` | `int` | Yes | Number of archived feature templates matching the filters. |
| `created_at` | `string` | No |  |
| `feature` | `array` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `mixed` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No |  |
| `items` | `array` | Yes |  |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `mixed` | No |  |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `mixed` | No |  |
| `total_count` | `int` | Yes | Total number of feature templates matching the filters, across all pages. |
| `updated_at` | `string` | No |  |
| `value` | `string` | No | The value granted by this feature catalog item. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `archived_at` | - | - |
| `archived_count` | - | - |
| `created_at` | - | - |
| `feature` | - | Yes |
| `feature_key` | - | - |
| `feature_kind` | - | - |
| `feature_name` | - | - |
| `feature_template_id` | - | - |
| `id` | - | - |
| `items` | - | - |
| `periodicity_interval` | - | - |
| `periodicity_unit` | - | - |
| `price_point_id` | - | - |
| `price_point_type` | - | - |
| `total_count` | - | - |
| `updated_at` | - | - |
| `value` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Feature()->create([
  "archived_count" => null, // int
  "feature" => null, // array
  "items" => null, // array
  "total_count" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Feature()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureEntity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureCatalogItemEntity

```php
$feature_catalog_item = $client->FeatureCatalogItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `feature` | `array` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `mixed` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No |  |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `mixed` | No |  |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `mixed` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `string` | No | The value granted by this feature catalog item. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FeatureCatalogItem()->create([
  "id" => null, // int
  "feature" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureCatalogItem()->load(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FeatureCatalogItem()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureCatalogItemEntity`

Create a new `FeatureCatalogItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeatureTemplateEntity

```php
$feature_template = $client->FeatureTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` | No |  |
| `default_periodicity_interval` | `int` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `mixed` | No |  |
| `default_value` | `string` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` | No |  |
| `feature` | `mixed` | Yes |  |
| `id` | `int` | No | The Advanced Billing id of the feature template. |
| `key` | `string` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `mixed` | No |  |
| `name` | `string` | No | The display name of the feature. |
| `plans_count` | `int` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `int` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` | No |  |
| `value_type` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FeatureTemplate()->create([
  "id" => null, // int
  "feature" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureTemplate()->load(["id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FeatureTemplate()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FeatureTemplate()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeatureTemplateEntity`

Create a new `FeatureTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InsightEntity

```php
$insight = $client->Insight();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mrr` | `array` | Yes |  |
| `seller_name` | `string` | No |  |
| `site_currency` | `string` | No |  |
| `site_id` | `int` | No |  |
| `site_name` | `string` | No |  |
| `stats` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Insight()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InsightEntity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InvoiceEntity

```php
$invoice = $client->Invoice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `array` | No |  |
| `applied_amount` | `string` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `array` | No |  |
| `billing_address` | `mixed` | No |  |
| `branding_theme_id` | `int` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `mixed` | No |  |
| `consolidation_level` | `mixed` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `array` | Yes |  |
| `credits` | `array` | No |  |
| `currency` | `string` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `array` | No |  |
| `customer` | `mixed` | No |  |
| `customer_id` | `int` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` | No |  |
| `debits` | `array` | No |  |
| `discount_amount` | `string` | No | Total discount applied to the invoice. |
| `discounts` | `array` | No |  |
| `display_settings` | `array` | No |  |
| `due_amount` | `string` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `int` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `int` | No |  |
| `invoice` | `array` | No |  |
| `invoices` | `array` | Yes |  |
| `issue_date` | `string` | No | Date the invoice was issued to the customer. |
| `line_items` | `array` | No | Line items on the invoice. |
| `memo` | `string` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `int` | No |  |
| `number` | `string` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `array` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | No | Date the invoice became fully paid. |
| `paid_invoices` | `array` | No |  |
| `parent_invoice_id` | `int` | No |  |
| `parent_invoice_number` | `int` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `array` | No |  |
| `payment_instructions` | `string` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `array` | No |  |
| `prepayment` | `string` | No |  |
| `previous_balance_data` | `array` | No |  |
| `product_family_name` | `string` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | No | The public URL of the invoice |
| `public_url_expires_on` | `string` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `array` | No |  |
| `refund_amount` | `string` | No |  |
| `refunds` | `array` | No |  |
| `remaining_amount` | `string` | No | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `string` | No |  |
| `seller` | `mixed` | No |  |
| `sequence_number` | `int` | No | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `mixed` | No |  |
| `site_id` | `int` | No | ID of the site to which the invoice belongs. |
| `status` | `mixed` | No |  |
| `subscription_group_id` | `int` | No |  |
| `subscription_id` | `int` | No | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `string` | No | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `string` | No | Total tax on the invoice. |
| `taxes` | `array` | No |  |
| `total_amount` | `string` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` | No |  |
| `uid` | `string` | No | Unique identifier for the invoice. |
| `updated_at` | `string` | No |  |
| `void` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Invoice()->create([
  "subscription_id" => null, // int
  "credit_notes" => null, // array
  "invoices" => null, // array
  "void" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Invoice()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Invoice()->remove(["subscription_id" => 1, "uid" => "uid"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Invoice()->update([
  "subscription_id" => 1,
  "uid" => "uid",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InvoiceEntity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListProformaInvoiceEntity

```php
$list_proforma_invoice = $client->ListProformaInvoice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `array` | No |  |
| `billing_address` | `array` | No |  |
| `collection_method` | `mixed` | No |  |
| `consolidation_level` | `mixed` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `array` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `array` | No |  |
| `customer` | `mixed` | No |  |
| `customer_id` | `int` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `array` | No |  |
| `due_amount` | `string` | No |  |
| `line_items` | `array` | No |  |
| `memo` | `string` | No |  |
| `number` | `int` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `array` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `mixed` | No |  |
| `seller` | `mixed` | No |  |
| `sequence_number` | `int` | No |  |
| `shipping_address` | `array` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `int` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `array` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListProformaInvoice()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListProformaInvoiceEntity`

Create a new `ListProformaInvoiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSaleRepItemEntity

```php
$list_sale_rep_item = $client->ListSaleRepItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `int` | No |  |
| `mrr_data` | `array` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListSaleRepItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSaleRepItemEntity`

Create a new `ListSaleRepItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListSegmentEntity

```php
$list_segment = $client->ListSegment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `array` | No |  |
| `pricing_scheme` | `mixed` | No |  |
| `segment_property_1_value` | `mixed` | No |  |
| `segment_property_2_value` | `mixed` | No |  |
| `segment_property_3_value` | `mixed` | No |  |
| `segment_property_4_value` | `mixed` | No |  |
| `segments` | `array` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ListSegment()->create([
  "component_id" => null, // string
  "price_point_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListSegment()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ListSegment()->update([
  "component_id" => "component_id",
  "price_point_id" => "price_point_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListSegmentEntity`

Create a new `ListSegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OfferEntity

```php
$offer = $client->Offer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `offer` | `array` | No |  |
| `offer_discounts` | `array` | No |  |
| `offer_items` | `array` | No |  |
| `offer_signup_pages` | `array` | No |  |
| `offers` | `array` | No |  |
| `product_family_id` | `int` | No |  |
| `product_family_name` | `string` | No |  |
| `product_id` | `int` | No |  |
| `product_name` | `string` | No |  |
| `product_price_in_cents` | `int` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `string` | No |  |
| `product_revisable_number` | `int` | No |  |
| `site_id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Offer()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Offer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Offer()->load(["offer_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Offer()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OfferEntity`

Create a new `OfferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OneTimeTokenEntity

```php
$one_time_token = $client->OneTimeToken();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OneTimeToken()->load(["chargify_token" => "chargify_token"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OneTimeTokenEntity`

Create a new `OneTimeTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PaymentProfileEntity

```php
$payment_profile = $client->PaymentProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `payment_profile` | `array` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `payment_profile` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PaymentProfile()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PaymentProfile()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentProfile()->load(["payment_profile_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->PaymentProfile()->remove(["payment_profile_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PaymentProfile()->update([
  "bank_account_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PaymentProfileEntity`

Create a new `PaymentProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrepaymentEntity

```php
$prepayment = $client->Prepayment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Prepayment()->create([
  "id" => null, // int
  "subscription_id" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrepaymentEntity`

Create a new `PrepaymentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductEntity

```php
$product = $client->Product();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `product` | - | - | Yes | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Product()->create([
  "product_family_id" => null, // string
  "product" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Product()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->load(["api_handle" => "api_handle"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Product()->remove(["product_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Product()->update([
  "product_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductEntity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductFamilyEntity

```php
$product_family = $client->ProductFamily();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `product_family` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProductFamily()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProductFamily()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProductFamily()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductFamilyEntity`

Create a new `ProductFamilyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductFeatureEntity

```php
$product_feature = $client->ProductFeature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProductFeature()->remove(["id" => 1, "product_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductFeatureEntity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProductPricePointEntity

```php
$product_price_point = $client->ProductPricePoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `price_point` | `array` | Yes |  |
| `price_points` | `array` | No |  |
| `product` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `price_point` | - | - | Yes | Yes | - |
| `price_points` | - | Yes | - | - | - |
| `product` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProductPricePoint()->create([
  "id" => null, // string
  "price_point" => null, // array
  "product" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProductPricePoint()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProductPricePoint()->load(["price_point_id" => "price_point_id", "product_id" => "product_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ProductPricePoint()->remove(["price_point_id" => "price_point_id", "product_id" => "product_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProductPricePoint()->update([
  "price_point_id" => "price_point_id",
  "product_id" => "product_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProductPricePointEntity`

Create a new `ProductPricePointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProformaInvoiceEntity

```php
$proforma_invoice = $client->ProformaInvoice();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `array` | No |  |
| `billing_address` | `array` | No |  |
| `collection_method` | `mixed` | No |  |
| `consolidation_level` | `mixed` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `array` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `array` | No |  |
| `customer` | `mixed` | No |  |
| `customer_id` | `int` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `array` | No |  |
| `due_amount` | `string` | No |  |
| `id` | `string` | No |  |
| `line_items` | `array` | No |  |
| `memo` | `string` | No |  |
| `number` | `int` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `array` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `mixed` | No |  |
| `seller` | `mixed` | No |  |
| `sequence_number` | `int` | No |  |
| `shipping_address` | `array` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `int` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `array` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProformaInvoice()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProformaInvoice()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProformaInvoiceEntity`

Create a new `ProformaInvoiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReasonCodeEntity

```php
$reason_code = $client->ReasonCode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `position` | `int` | No |  |
| `reason_code` | `array` | Yes |  |
| `site_id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ReasonCode()->create([
  "reason_code" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ReasonCode()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReasonCode()->load(["reason_code_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ReasonCode()->remove(["reason_code_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ReasonCode()->update([
  "reason_code_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReasonCodeEntity`

Create a new `ReasonCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReferralCodeEntity

```php
$referral_code = $client->ReferralCode();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ReferralCode()->load(["code" => "code"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReferralCodeEntity`

Create a new `ReferralCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SaleRepSettingEntity

```php
$sale_rep_setting = $client->SaleRepSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_name` | `string` | No |  |
| `sales_rep_id` | `int` | No |  |
| `sales_rep_name` | `string` | No |  |
| `site_link` | `string` | No |  |
| `site_name` | `string` | No |  |
| `subscription_id` | `int` | No |  |
| `subscription_mrr` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SaleRepSetting()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SaleRepSettingEntity`

Create a new `SaleRepSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SalesCommissionEntity

```php
$sales_commission = $client->SalesCommission();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `int` | No |  |
| `subscriptions` | `array` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SalesCommission()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SalesCommissionEntity`

Create a new `SalesCommissionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SegmentEntity

```php
$segment = $client->Segment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `array` | No |  |
| `pricing_scheme` | `mixed` | No |  |
| `segment_property_1_value` | `mixed` | No |  |
| `segment_property_2_value` | `mixed` | No |  |
| `segment_property_3_value` | `mixed` | No |  |
| `segment_property_4_value` | `mixed` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Segment()->create([
  "component_id" => null, // string
  "price_point_id" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Segment()->update([
  "component_id" => "component_id",
  "id" => 1,
  "price_point_id" => "price_point_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SegmentEntity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SignupProformaPreviewEntity

```php
$signup_proforma_preview = $client->SignupProformaPreview();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SignupProformaPreview()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SignupProformaPreviewEntity`

Create a new `SignupProformaPreviewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SiteEntity

```php
$site = $client->Site();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chargify_js_keys` | `array` | No |  |
| `meta` | `array` | No |  |
| `site` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Site()->create([
  "site" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Site()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Site()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SiteEntity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionEntity

```php
$subscription = $client->Subscription();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `string` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `int` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `array` | Yes |  |
| `cancel_at_end_of_period` | `bool` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `mixed` | No |  |
| `coupon_code` | `string` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `array` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `int` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `int` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `array` | No | Additional coupon data. |
| `created_at` | `string` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `int` | No |  |
| `credit_card` | `mixed` | No |  |
| `currency` | `string` | No |  |
| `current_billing_amount_in_cents` | `int` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `array` | No |  |
| `delayed_cancel_at` | `string` | No | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `bool` | No | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `string` | No | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `string` | No | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `mixed` | No |  |
| `id` | `int` | No | The subscription unique id within Chargify. |
| `locale` | `string` | No |  |
| `net_terms` | `int` | No | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `string` | No | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `string` | No | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `int` | No | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `int` | No | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `int` | No | The ID of the offer associated with the subscription. |
| `on_hold_at` | `string` | No | The timestamp of the most recent on hold action. |
| `payer_id` | `int` | No | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `mixed` | No |  |
| `payment_type` | `string` | No | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `mixed` | No |  |
| `prepaid_dunning` | `bool` | No | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `int` | No |  |
| `previous_state` | `mixed` | No |  |
| `product` | `array` | No |  |
| `product_price_in_cents` | `int` | No | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `int` | No | The product price point currently subscribed to. |
| `product_price_point_type` | `mixed` | No |  |
| `product_version_number` | `int` | No | The version of the product for the subscription. |
| `reason_code` | `string` | No | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `bool` | No |  |
| `reference` | `string` | No | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `string` | No | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `string` | No |  |
| `self_service_page_token` | `string` | No | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `int` | No | The ID of the transaction that generated the revenue |
| `signup_revenue` | `string` | No | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `string` | No | A day of month that subscription will be processed on. |
| `state` | `mixed` | No |  |
| `stored_credential_transaction_id` | `int` | No | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `array` | No |  |
| `total_revenue_in_cents` | `int` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | No | The date of last update for this subscription |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Subscription()->create([
  "bank_account" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Subscription()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->load(["subscription_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Subscription()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Subscription()->update([
  "subscription_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionEntity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionComponentEntity

```php
$subscription_component = $client->SubscriptionComponent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | `mixed` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `array` | No |  |
| `allocation_preview` | `array` | No |  |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived_at` | `string` | No |  |
| `component` | `array` | No |  |
| `component_handle` | `string` | No |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency` | `string` | No |  |
| `description` | `string` | No |  |
| `display_on_hosted_page` | `bool` | No |  |
| `downgrade_credit` | `mixed` | No |  |
| `enabled` | `bool` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `array` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `mixed` | No |  |
| `kind` | `mixed` | No |  |
| `name` | `string` | No |  |
| `price_point_handle` | `string` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_name` | `string` | No |  |
| `price_point_type` | `mixed` | No |  |
| `pricing_scheme` | `mixed` | No |  |
| `product_family_handle` | `string` | No |  |
| `product_family_id` | `int` | No |  |
| `recurring` | `bool` | No |  |
| `subscription` | `array` | No |  |
| `subscription_id` | `int` | No |  |
| `unit_balance` | `mixed` | No |  |
| `unit_name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upgrade_charge` | `mixed` | No |  |
| `usage` | `array` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionComponent()->create([
  "api_handle" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionComponent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionComponent()->load(["component_id" => 1, "subscription_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionComponent()->remove(["allocation_id" => 1, "component_id" => 1, "subscription_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriptionComponent()->update([
  "allocation_id" => 1,
  "component_id" => 1,
  "subscription_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionComponentEntity`

Create a new `SubscriptionComponentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionGroupEntity

```php
$subscription_group = $client->SubscriptionGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `meta` | `array` | No |  |
| `subscription_group` | `array` | No |  |
| `subscription_groups` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionGroup()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionGroup()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionGroup()->remove(["id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriptionGroup()->update([
  "uid" => "uid",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionGroupEntity`

Create a new `SubscriptionGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionGroupInvoiceAccountEntity

```php
$subscription_group_invoice_account = $client->SubscriptionGroupInvoiceAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionGroupInvoiceAccount()->create([
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionGroupInvoiceAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionGroupInvoiceAccountEntity`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionGroupSignupEntity

```php
$subscription_group_signup = $client->SubscriptionGroupSignup();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionGroupSignup()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionGroupSignupEntity`

Create a new `SubscriptionGroupSignupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionGroupStatusEntity

```php
$subscription_group_status = $client->SubscriptionGroupStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionGroupStatus()->create([
  "id" => null, // string
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionGroupStatus()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionGroupStatusEntity`

Create a new `SubscriptionGroupStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionInvoiceAccountEntity

```php
$subscription_invoice_account = $client->SubscriptionInvoiceAccount();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `service_credits` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionInvoiceAccount()->create([
  "id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionInvoiceAccount()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionInvoiceAccountEntity`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionMrrEntity

```php
$subscription_mrr = $client->SubscriptionMrr();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `array` | Yes |  |
| `mrr_amount_in_cents` | `int` | Yes |  |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionMrr()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionMrrEntity`

Create a new `SubscriptionMrrEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionNoteEntity

```php
$subscription_note = $client->SubscriptionNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `note` | `array` | Yes |  |
| `sticky` | `bool` | No |  |
| `subscription_id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionNote()->create([
  "id" => null, // int
  "note" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionNote()->load(["note_id" => 1, "subscription_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionNote()->remove(["note_id" => 1, "subscription_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriptionNote()->update([
  "note_id" => 1,
  "subscription_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionNoteEntity`

Create a new `SubscriptionNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionProductEntity

```php
$subscription_product = $client->SubscriptionProduct();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `migration` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionProduct()->create([
  "subscription_id" => null, // int
  "migration" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionProductEntity`

Create a new `SubscriptionProductEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionRenewalEntity

```php
$subscription_renewal = $client->SubscriptionRenewal();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scheduled_renewal_configuration` | `array` | No |  |
| `scheduled_renewal_configuration_item` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionRenewal()->create([
  "scheduled_renewal_id" => null, // int
  "subscription_id" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SubscriptionRenewal()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionRenewal()->load(["id" => 1, "subscription_id" => 1]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionRenewal()->remove(["id" => 1, "scheduled_renewal_id" => 1, "subscription_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriptionRenewal()->update([
  "id" => 1,
  "subscription_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionRenewalEntity`

Create a new `SubscriptionRenewalEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SubscriptionStatusEntity

```php
$subscription_status = $client->SubscriptionStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `renewal_preview` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SubscriptionStatus()->create([
  "subscription_id" => null, // int
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SubscriptionStatus()->remove(["subscription_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SubscriptionStatus()->update([
  "id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SubscriptionStatusEntity`

Create a new `SubscriptionStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageEntity

```php
$usage = $client->Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Usage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageEntity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `array` | No |  |
| `webhook` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Webhook()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```php
$client = new MaxioAdvancedBillingSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

