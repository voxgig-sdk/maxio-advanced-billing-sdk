# MaxioAdvancedBilling Ruby SDK Reference

Complete API reference for the MaxioAdvancedBilling Ruby SDK.


## MaxioAdvancedBillingSDK

### Constructor

```ruby
require_relative 'MaxioAdvancedBilling_sdk'

client = MaxioAdvancedBillingSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MaxioAdvancedBillingSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = MaxioAdvancedBillingSDK.test
```


### Instance Methods

#### `AccountBalance(data = nil)`

Create a new `AccountBalance` entity instance. Pass `nil` for no initial data.

#### `Allocation(data = nil)`

Create a new `Allocation` entity instance. Pass `nil` for no initial data.

#### `BatchJob(data = nil)`

Create a new `BatchJob` entity instance. Pass `nil` for no initial data.

#### `BillingPortal(data = nil)`

Create a new `BillingPortal` entity instance. Pass `nil` for no initial data.

#### `Component(data = nil)`

Create a new `Component` entity instance. Pass `nil` for no initial data.

#### `ComponentFeature(data = nil)`

Create a new `ComponentFeature` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePoint(data = nil)`

Create a new `ComponentPricePoint` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePointCurrencyOverage(data = nil)`

Create a new `ComponentPricePointCurrencyOverage` entity instance. Pass `nil` for no initial data.

#### `Coupon(data = nil)`

Create a new `Coupon` entity instance. Pass `nil` for no initial data.

#### `CouponCurrency(data = nil)`

Create a new `CouponCurrency` entity instance. Pass `nil` for no initial data.

#### `CouponSubcode(data = nil)`

Create a new `CouponSubcode` entity instance. Pass `nil` for no initial data.

#### `CouponUsage(data = nil)`

Create a new `CouponUsage` entity instance. Pass `nil` for no initial data.

#### `CustomField(data = nil)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Customer(data = nil)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `DelayedCancel(data = nil)`

Create a new `DelayedCancel` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data = nil)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data = nil)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Event(data = nil)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `EventsBasedBillingSegment(data = nil)`

Create a new `EventsBasedBillingSegment` entity instance. Pass `nil` for no initial data.

#### `Feature(data = nil)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureCatalogItem(data = nil)`

Create a new `FeatureCatalogItem` entity instance. Pass `nil` for no initial data.

#### `FeatureTemplate(data = nil)`

Create a new `FeatureTemplate` entity instance. Pass `nil` for no initial data.

#### `Insight(data = nil)`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `Invoice(data = nil)`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `ListProformaInvoice(data = nil)`

Create a new `ListProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ListSaleRepItem(data = nil)`

Create a new `ListSaleRepItem` entity instance. Pass `nil` for no initial data.

#### `ListSegment(data = nil)`

Create a new `ListSegment` entity instance. Pass `nil` for no initial data.

#### `Offer(data = nil)`

Create a new `Offer` entity instance. Pass `nil` for no initial data.

#### `OneTimeToken(data = nil)`

Create a new `OneTimeToken` entity instance. Pass `nil` for no initial data.

#### `PaymentProfile(data = nil)`

Create a new `PaymentProfile` entity instance. Pass `nil` for no initial data.

#### `Prepayment(data = nil)`

Create a new `Prepayment` entity instance. Pass `nil` for no initial data.

#### `Product(data = nil)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductFamily(data = nil)`

Create a new `ProductFamily` entity instance. Pass `nil` for no initial data.

#### `ProductFeature(data = nil)`

Create a new `ProductFeature` entity instance. Pass `nil` for no initial data.

#### `ProductPricePoint(data = nil)`

Create a new `ProductPricePoint` entity instance. Pass `nil` for no initial data.

#### `ProformaInvoice(data = nil)`

Create a new `ProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ReasonCode(data = nil)`

Create a new `ReasonCode` entity instance. Pass `nil` for no initial data.

#### `ReferralCode(data = nil)`

Create a new `ReferralCode` entity instance. Pass `nil` for no initial data.

#### `SaleRepSetting(data = nil)`

Create a new `SaleRepSetting` entity instance. Pass `nil` for no initial data.

#### `SalesCommission(data = nil)`

Create a new `SalesCommission` entity instance. Pass `nil` for no initial data.

#### `Segment(data = nil)`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SignupProformaPreview(data = nil)`

Create a new `SignupProformaPreview` entity instance. Pass `nil` for no initial data.

#### `Site(data = nil)`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Subscription(data = nil)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionComponent(data = nil)`

Create a new `SubscriptionComponent` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroup(data = nil)`

Create a new `SubscriptionGroup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupInvoiceAccount(data = nil)`

Create a new `SubscriptionGroupInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupSignup(data = nil)`

Create a new `SubscriptionGroupSignup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupStatus(data = nil)`

Create a new `SubscriptionGroupStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionInvoiceAccount(data = nil)`

Create a new `SubscriptionInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionMrr(data = nil)`

Create a new `SubscriptionMrr` entity instance. Pass `nil` for no initial data.

#### `SubscriptionNote(data = nil)`

Create a new `SubscriptionNote` entity instance. Pass `nil` for no initial data.

#### `SubscriptionProduct(data = nil)`

Create a new `SubscriptionProduct` entity instance. Pass `nil` for no initial data.

#### `SubscriptionRenewal(data = nil)`

Create a new `SubscriptionRenewal` entity instance. Pass `nil` for no initial data.

#### `SubscriptionStatus(data = nil)`

Create a new `SubscriptionStatus` entity instance. Pass `nil` for no initial data.

#### `Usage(data = nil)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AccountBalanceEntity

```ruby
account_balance = client.AccountBalance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `open_invoices` | `Object` | No |  |
| `pending_discounts` | `Object` | No |  |
| `pending_invoices` | `Object` | No |  |
| `prepayments` | `Object` | No |  |
| `service_credits` | `Object` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccountBalance.load({ "subscription_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountBalanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AllocationEntity

```ruby
allocation = client.Allocation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Allocation.create({
  "subscription_id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Allocation.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AllocationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BatchJobEntity

```ruby
batch_job = client.BatchJob
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `String` | No |  |
| `created_at` | `String` | No |  |
| `finished_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `row_count` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BatchJob.create({
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BatchJob.load({ "batch_id" => "batch_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BatchJobEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillingPortalEntity

```ruby
billing_portal = client.BillingPortal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `fetch_count` | `Integer` | No |  |
| `last_accepted_at` | `String` | No |  |
| `last_invite_accepted_at` | `String` | No |  |
| `last_invite_sent_at` | `String` | No |  |
| `last_sent_at` | `String` | No |  |
| `new_link_available_at` | `String` | No |  |
| `send_invite_link_text` | `String` | No |  |
| `uninvited_count` | `Integer` | No |  |
| `url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillingPortal.create({
  "customer_id" => 1, # Integer
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.BillingPortal.load({ "customer_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.BillingPortal.remove({ "customer_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillingPortalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComponentEntity

```ruby
component = client.Component
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component` | `Hash` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `component` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Component.create({
  "product_family_id" => "example_product_family_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Component.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Component.load({ "component_id" => "component_id", "product_family_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Component.remove({ "component_id" => "component_id", "product_family_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Component.update({
  "component_id" => "component_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComponentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComponentFeatureEntity

```ruby
component_feature = client.ComponentFeature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ComponentFeature.remove({ "component_id" => 1, "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComponentFeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComponentPricePointEntity

```ruby
component_price_point = client.ComponentPricePoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No |  |
| `component` | `Hash` | Yes |  |
| `component_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `currency_prices` | `Array` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `Boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `Integer` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Object` | No |  |
| `handle` | `String` | No |  |
| `id` | `Integer` | No |  |
| `interval` | `Integer` | No | The numerical interval. |
| `interval_unit` | `Object` | No |  |
| `name` | `String` | No |  |
| `overage_prices` | `Array` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Object` | No |  |
| `price_point` | `Hash` | No |  |
| `price_points` | `Array` | No |  |
| `prices` | `Array` | No |  |
| `pricing_scheme` | `Object` | No |  |
| `renew_prepaid_allocation` | `Boolean` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `Boolean` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `Integer` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `Boolean` | No |  |
| `type` | `Object` | No |  |
| `updated_at` | `String` | No |  |
| `use_site_exchange_rate` | `Boolean` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ComponentPricePoint.create({
  "id" => 1, # Integer
  "component" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ComponentPricePoint.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ComponentPricePoint.remove({ "component_id" => "component_id", "price_point_id" => "price_point_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ComponentPricePoint.update({
  "price_point_id" => "price_point_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComponentPricePointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComponentPricePointCurrencyOverageEntity

```ruby
component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No |  |
| `component_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `currency_overage_prices` | `Array` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `Array` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `Boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `Integer` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Object` | No |  |
| `handle` | `String` | No |  |
| `id` | `Integer` | No |  |
| `interval` | `Integer` | No | The numerical interval. |
| `interval_unit` | `Object` | No |  |
| `name` | `String` | No |  |
| `overage_prices` | `Array` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Object` | No |  |
| `prices` | `Array` | No |  |
| `pricing_scheme` | `Object` | No |  |
| `renew_prepaid_allocation` | `Boolean` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `Boolean` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `Integer` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `Boolean` | No |  |
| `type` | `Object` | No |  |
| `updated_at` | `String` | No |  |
| `use_site_exchange_rate` | `Boolean` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ComponentPricePointCurrencyOverage.load({ "component_id" => "component_id", "price_point_id" => "price_point_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CouponEntity

```ruby
coupon = client.Coupon
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_negative_balance` | `Boolean` | No | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `Float` | No |  |
| `amount_in_cents` | `Integer` | No |  |
| `apply_on_cancel_at_end_of_period` | `Boolean` | No |  |
| `apply_on_subscription_expiration` | `Boolean` | No |  |
| `archived_at` | `String` | No |  |
| `code` | `String` | No |  |
| `compounding_strategy` | `Object` | No |  |
| `conversion_limit` | `String` | No |  |
| `coupon` | `Hash` | No |  |
| `coupon_restrictions` | `Array` | No |  |
| `created_at` | `String` | No |  |
| `currency_prices` | `Array` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `String` | No |  |
| `discount_type` | `String` | No |  |
| `duration_interval` | `Integer` | No |  |
| `duration_interval_span` | `String` | No |  |
| `duration_interval_unit` | `String` | No |  |
| `duration_period_count` | `Integer` | No |  |
| `end_date` | `String` | No | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `Boolean` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `percentage` | `String` | No |  |
| `product_family_id` | `Integer` | No |  |
| `product_family_name` | `String` | No |  |
| `recurring` | `Boolean` | No |  |
| `recurring_scheme` | `String` | No |  |
| `stackable` | `Boolean` | No | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `use_site_exchange_rate` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Coupon.create({
  "product_family_id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Coupon.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Coupon.load({ "coupon_id" => 1, "product_family_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Coupon.remove({ "id" => 1, "subcode" => "subcode" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Coupon.update({
  "coupon_id" => 1,
  "product_family_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CouponEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CouponCurrencyEntity

```ruby
coupon_currency = client.CouponCurrency
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CouponCurrency.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CouponCurrencyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CouponSubcodeEntity

```ruby
coupon_subcode = client.CouponSubcode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `Array` | No |  |
| `duplicate_codes` | `Array` | No |  |
| `id` | `String` | No |  |
| `invalid_codes` | `Array` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CouponSubcode.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CouponSubcodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CouponUsageEntity

```ruby
coupon_usage = client.CouponUsage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No | The Chargify id of the product |
| `name` | `String` | No | Name of the product |
| `revenue` | `Integer` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `Integer` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `Integer` | No | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `Integer` | No | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `Integer` | No | Number of times the coupon has been applied |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CouponUsage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomFieldEntity

```ruby
custom_field = client.CustomField
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_page` | `Integer` | No |  |
| `data_count` | `Integer` | No |  |
| `deleted_at` | `String` | No |  |
| `enum` | `String` | No |  |
| `id` | `Integer` | No |  |
| `input_type` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `metafield_id` | `Integer` | No |  |
| `metafields` | `Object` | No |  |
| `name` | `String` | No |  |
| `per_page` | `Integer` | No |  |
| `resource_id` | `Integer` | No |  |
| `scope` | `Hash` | No |  |
| `total_count` | `Integer` | No |  |
| `total_pages` | `Integer` | No |  |
| `value` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomField.create({
  "resource_type" => "example_resource_type", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomField.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomField.remove({ "resource_type" => "resource_type" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomField.update({
  "resource_type" => "resource_type",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomerEntity

```ruby
customer = client.Customer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | No | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `String` | No | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `Integer` | No | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `String` | No | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `String` | No | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `String` | No | The customer shipping address country |
| `country_name` | `String` | No | The customer's full name of country |
| `created_at` | `String` | No | The timestamp in which the customer object was created in Chargify |
| `customer` | `Hash` | No |  |
| `default_auto_renewal_profile_id` | `Integer` | No | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `String` | No |  |
| `email` | `String` | No | The email address of the customer |
| `entity_identifier_kind` | `Object` | No |  |
| `entity_identifier_value` | `String` | No | The value of the customer's tax or business identifier. |
| `first_name` | `String` | No | The first name of the customer |
| `id` | `Integer` | No | The customer ID in Chargify |
| `last_name` | `String` | No | The last name of the customer |
| `locale` | `String` | No | The locale for the customer to identify language-region |
| `maxioid` | `String` | No | The Maxio-generated unique identifier for the customer. |
| `organization` | `String` | No | The organization of the customer. |
| `parent_id` | `Integer` | No | The parent ID in Chargify if applicable. |
| `phone` | `String` | No | The phone number of the customer |
| `portal_customer_created_at` | `String` | No | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `String` | No | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `String` | No | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `String` | No | The unique identifier used within your own application for this customer |
| `salesforce_id` | `String` | No | The Salesforce ID for the customer |
| `state` | `String` | No | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `String` | No | The customer's full name of state |
| `surcharging` | `Boolean` | No | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `Boolean` | No | The tax exempt status for the customer. |
| `tax_exempt_reason` | `String` | No | The Tax Exemption Reason Code for the customer |
| `updated_at` | `String` | No | The timestamp in which the customer object was last edited |
| `vat_country` | `String` | No | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `String` | No | The VAT business identification number for the customer. |
| `verified` | `Boolean` | No | Is the customer verified to use ACH as a payment method. |
| `zip` | `String` | No | The customer’s shipping address zip code (e.g., “12345”) |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Customer.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Customer.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Customer.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Customer.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Customer.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DelayedCancelEntity

```ruby
delayed_cancel = client.DelayedCancel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `String` | No |  |
| `subscription` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DelayedCancel.create({
  "subscription_id" => 1, # Integer
  "subscription" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DelayedCancelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EndpointEntity

```ruby
endpoint = client.Endpoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No |  |
| `site_id` | `Integer` | No |  |
| `status` | `String` | No |  |
| `url` | `String` | No |  |
| `webhook_subscriptions` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Endpoint.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Endpoint.update({
  "endpoint_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntitlementEntity

```ruby
entitlement = client.Entitlement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `Integer` | Yes |  |
| `entitlements` | `Array` | Yes |  |
| `status` | `String` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Entitlement.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EventEntity

```ruby
event = client.Event
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Event.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Event.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EventsBasedBillingSegmentEntity

```ruby
events_based_billing_segment = client.EventsBasedBillingSegment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.EventsBasedBillingSegment.remove({ "component_id" => "component_id", "id" => 1, "price_point_id" => "price_point_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EventsBasedBillingSegmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureEntity

```ruby
feature = client.Feature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No |  |
| `archived_count` | `Integer` | Yes | Number of archived feature templates matching the filters. |
| `created_at` | `String` | No |  |
| `feature` | `Hash` | Yes |  |
| `feature_key` | `String` | No | The `key` of the parent feature template. |
| `feature_kind` | `Object` | No |  |
| `feature_name` | `String` | No | The `name` of the parent feature template. |
| `feature_template_id` | `Integer` | No | The id of the feature template this item was created from. |
| `id` | `Integer` | No |  |
| `items` | `Array` | Yes |  |
| `periodicity_interval` | `Integer` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Object` | No |  |
| `price_point_id` | `Integer` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Object` | No |  |
| `total_count` | `Integer` | Yes | Total number of feature templates matching the filters, across all pages. |
| `updated_at` | `String` | No |  |
| `value` | `String` | No | The value granted by this feature catalog item. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Feature.create({
  "archived_count" => 1, # Integer
  "feature" => {}, # Hash
  "items" => [], # Array
  "total_count" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Feature.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureCatalogItemEntity

```ruby
feature_catalog_item = client.FeatureCatalogItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `feature` | `Hash` | Yes |  |
| `feature_key` | `String` | No | The `key` of the parent feature template. |
| `feature_kind` | `Object` | No |  |
| `feature_name` | `String` | No | The `name` of the parent feature template. |
| `feature_template_id` | `Integer` | No | The id of the feature template this item was created from. |
| `id` | `Integer` | No |  |
| `periodicity_interval` | `Integer` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Object` | No |  |
| `price_point_id` | `Integer` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Object` | No |  |
| `updated_at` | `String` | No |  |
| `value` | `String` | No | The value granted by this feature catalog item. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FeatureCatalogItem.create({
  "id" => 1, # Integer
  "feature" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureCatalogItem.load({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.FeatureCatalogItem.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureCatalogItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeatureTemplateEntity

```ruby
feature_template = client.FeatureTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `String` | No |  |
| `default_periodicity_interval` | `Integer` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `Object` | No |  |
| `default_value` | `String` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `String` | No |  |
| `feature` | `Object` | Yes |  |
| `id` | `Integer` | No | The Advanced Billing id of the feature template. |
| `key` | `String` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `Object` | No |  |
| `name` | `String` | No | The display name of the feature. |
| `plans_count` | `Integer` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `Integer` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `String` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `String` | No |  |
| `value_type` | `Object` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.FeatureTemplate.create({
  "id" => 1, # Integer
  "feature" => "example_feature", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureTemplate.load({ "id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.FeatureTemplate.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.FeatureTemplate.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeatureTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InsightEntity

```ruby
insight = client.Insight
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mrr` | `Hash` | Yes |  |
| `seller_name` | `String` | No |  |
| `site_currency` | `String` | No |  |
| `site_id` | `Integer` | No |  |
| `site_name` | `String` | No |  |
| `stats` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Insight.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InvoiceEntity

```ruby
invoice = client.Invoice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `Array` | No |  |
| `applied_amount` | `String` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `String` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `Hash` | No |  |
| `billing_address` | `Object` | No |  |
| `branding_theme_id` | `Integer` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `Object` | No |  |
| `consolidation_level` | `Object` | No |  |
| `created_at` | `String` | No |  |
| `credit_amount` | `String` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `Array` | Yes |  |
| `credits` | `Array` | No |  |
| `currency` | `String` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `Array` | No |  |
| `customer` | `Object` | No |  |
| `customer_id` | `Integer` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `String` | No |  |
| `debits` | `Array` | No |  |
| `discount_amount` | `String` | No | Total discount applied to the invoice. |
| `discounts` | `Array` | No |  |
| `display_settings` | `Hash` | No |  |
| `due_amount` | `String` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `String` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `Integer` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `Integer` | No |  |
| `invoice` | `Hash` | No |  |
| `invoices` | `Array` | Yes |  |
| `issue_date` | `String` | No | Date the invoice was issued to the customer. |
| `line_items` | `Array` | No | Line items on the invoice. |
| `memo` | `String` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `Integer` | No |  |
| `number` | `String` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `Array` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `String` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `String` | No | Date the invoice became fully paid. |
| `paid_invoices` | `Array` | No |  |
| `parent_invoice_id` | `Integer` | No |  |
| `parent_invoice_number` | `Integer` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `String` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `Hash` | No |  |
| `payment_instructions` | `String` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `Array` | No |  |
| `prepayment` | `String` | No |  |
| `previous_balance_data` | `Hash` | No |  |
| `product_family_name` | `String` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `String` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `String` | No | The public URL of the invoice |
| `public_url_expires_on` | `String` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `Array` | No |  |
| `refund_amount` | `String` | No |  |
| `refunds` | `Array` | No |  |
| `remaining_amount` | `String` | No | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `String` | No |  |
| `seller` | `Object` | No |  |
| `sequence_number` | `Integer` | No | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `Object` | No |  |
| `site_id` | `Integer` | No | ID of the site to which the invoice belongs. |
| `status` | `Object` | No |  |
| `subscription_group_id` | `Integer` | No |  |
| `subscription_id` | `Integer` | No | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `String` | No | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `String` | No | Total tax on the invoice. |
| `taxes` | `Array` | No |  |
| `total_amount` | `String` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `String` | No |  |
| `uid` | `String` | No | Unique identifier for the invoice. |
| `updated_at` | `String` | No |  |
| `void` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Invoice.create({
  "subscription_id" => 1, # Integer
  "credit_notes" => [], # Array
  "invoices" => [], # Array
  "void" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Invoice.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Invoice.remove({ "subscription_id" => 1, "uid" => "uid" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Invoice.update({
  "subscription_id" => 1,
  "uid" => "uid",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListProformaInvoiceEntity

```ruby
list_proforma_invoice = client.ListProformaInvoice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `Hash` | No |  |
| `billing_address` | `Hash` | No |  |
| `collection_method` | `Object` | No |  |
| `consolidation_level` | `Object` | No |  |
| `created_at` | `String` | No |  |
| `credit_amount` | `String` | No |  |
| `credits` | `Array` | No |  |
| `currency` | `String` | No |  |
| `custom_fields` | `Array` | No |  |
| `customer` | `Object` | No |  |
| `customer_id` | `Integer` | No |  |
| `delivery_date` | `String` | No |  |
| `discount_amount` | `String` | No |  |
| `discounts` | `Array` | No |  |
| `due_amount` | `String` | No |  |
| `line_items` | `Array` | No |  |
| `memo` | `String` | No |  |
| `number` | `Integer` | No |  |
| `paid_amount` | `String` | No |  |
| `payment_instructions` | `String` | No |  |
| `payments` | `Array` | No |  |
| `product_family_name` | `String` | No |  |
| `product_name` | `String` | No |  |
| `public_url` | `String` | No |  |
| `refund_amount` | `String` | No |  |
| `role` | `Object` | No |  |
| `seller` | `Object` | No |  |
| `sequence_number` | `Integer` | No |  |
| `shipping_address` | `Hash` | No |  |
| `site_id` | `Integer` | No |  |
| `status` | `String` | No |  |
| `subscription_id` | `Integer` | No |  |
| `subtotal_amount` | `String` | No |  |
| `tax_amount` | `String` | No |  |
| `taxes` | `Array` | No |  |
| `total_amount` | `String` | No |  |
| `uid` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListProformaInvoice.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListProformaInvoiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSaleRepItemEntity

```ruby
list_sale_rep_item = client.ListSaleRepItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `String` | No |  |
| `id` | `Integer` | No |  |
| `mrr_data` | `Hash` | No |  |
| `subscriptions_count` | `Integer` | No |  |
| `test_mode` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSaleRepItem.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSaleRepItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListSegmentEntity

```ruby
list_segment = client.ListSegment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `event_based_billing_metric_id` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `price_point_id` | `Integer` | No |  |
| `prices` | `Array` | No |  |
| `pricing_scheme` | `Object` | No |  |
| `segment_property_1_value` | `Object` | No |  |
| `segment_property_2_value` | `Object` | No |  |
| `segment_property_3_value` | `Object` | No |  |
| `segment_property_4_value` | `Object` | No |  |
| `segments` | `Array` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ListSegment.create({
  "component_id" => "example_component_id", # String
  "price_point_id" => "example_price_point_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ListSegment.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ListSegment.update({
  "component_id" => "component_id",
  "price_point_id" => "price_point_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListSegmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OfferEntity

```ruby
offer = client.Offer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `handle` | `String` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `offer` | `Hash` | No |  |
| `offer_discounts` | `Array` | No |  |
| `offer_items` | `Array` | No |  |
| `offer_signup_pages` | `Array` | No |  |
| `offers` | `Array` | No |  |
| `product_family_id` | `Integer` | No |  |
| `product_family_name` | `String` | No |  |
| `product_id` | `Integer` | No |  |
| `product_name` | `String` | No |  |
| `product_price_in_cents` | `Integer` | No |  |
| `product_price_point_id` | `Integer` | No |  |
| `product_price_point_name` | `String` | No |  |
| `product_revisable_number` | `Integer` | No |  |
| `site_id` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Offer.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Offer.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Offer.load({ "offer_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Offer.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OfferEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OneTimeTokenEntity

```ruby
one_time_token = client.OneTimeToken
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OneTimeToken.load({ "chargify_token" => "chargify_token" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OneTimeTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PaymentProfileEntity

```ruby
payment_profile = client.PaymentProfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `payment_profile` | `Hash` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `payment_profile` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PaymentProfile.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PaymentProfile.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PaymentProfile.load({ "payment_profile_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.PaymentProfile.remove({ "payment_profile_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PaymentProfile.update({
  "bank_account_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PaymentProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PrepaymentEntity

```ruby
prepayment = client.Prepayment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Prepayment.create({
  "id" => 1, # Integer
  "subscription_id" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PrepaymentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductEntity

```ruby
product = client.Product
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `product` | - | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Product.create({
  "product_family_id" => "example_product_family_id", # String
  "product" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Product.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Product.load({ "api_handle" => "api_handle" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Product.remove({ "product_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Product.update({
  "product_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductFamilyEntity

```ruby
product_family = client.ProductFamily
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `product_family` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProductFamily.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProductFamily.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProductFamily.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductFamilyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductFeatureEntity

```ruby
product_feature = client.ProductFeature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProductFeature.remove({ "id" => 1, "product_id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProductPricePointEntity

```ruby
product_price_point = client.ProductPricePoint
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `price_point` | `Hash` | Yes |  |
| `price_points` | `Array` | No |  |
| `product` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `price_point` | - | - | Yes | Yes | - |
| `price_points` | - | Yes | - | - | - |
| `product` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProductPricePoint.create({
  "id" => "example_id", # String
  "price_point" => {}, # Hash
  "product" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProductPricePoint.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProductPricePoint.load({ "price_point_id" => "price_point_id", "product_id" => "product_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ProductPricePoint.remove({ "price_point_id" => "price_point_id", "product_id" => "product_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProductPricePoint.update({
  "price_point_id" => "price_point_id",
  "product_id" => "product_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProductPricePointEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProformaInvoiceEntity

```ruby
proforma_invoice = client.ProformaInvoice
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `Hash` | No |  |
| `billing_address` | `Hash` | No |  |
| `collection_method` | `Object` | No |  |
| `consolidation_level` | `Object` | No |  |
| `created_at` | `String` | No |  |
| `credit_amount` | `String` | No |  |
| `credits` | `Array` | No |  |
| `currency` | `String` | No |  |
| `custom_fields` | `Array` | No |  |
| `customer` | `Object` | No |  |
| `customer_id` | `Integer` | No |  |
| `delivery_date` | `String` | No |  |
| `discount_amount` | `String` | No |  |
| `discounts` | `Array` | No |  |
| `due_amount` | `String` | No |  |
| `id` | `String` | No |  |
| `line_items` | `Array` | No |  |
| `memo` | `String` | No |  |
| `number` | `Integer` | No |  |
| `paid_amount` | `String` | No |  |
| `payment_instructions` | `String` | No |  |
| `payments` | `Array` | No |  |
| `product_family_name` | `String` | No |  |
| `product_name` | `String` | No |  |
| `public_url` | `String` | No |  |
| `refund_amount` | `String` | No |  |
| `role` | `Object` | No |  |
| `seller` | `Object` | No |  |
| `sequence_number` | `Integer` | No |  |
| `shipping_address` | `Hash` | No |  |
| `site_id` | `Integer` | No |  |
| `status` | `String` | No |  |
| `subscription_id` | `Integer` | No |  |
| `subtotal_amount` | `String` | No |  |
| `tax_amount` | `String` | No |  |
| `taxes` | `Array` | No |  |
| `total_amount` | `String` | No |  |
| `uid` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProformaInvoice.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProformaInvoice.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProformaInvoiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReasonCodeEntity

```ruby
reason_code = client.ReasonCode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `String` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `Integer` | No |  |
| `position` | `Integer` | No |  |
| `reason_code` | `Hash` | Yes |  |
| `site_id` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ReasonCode.create({
  "reason_code" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ReasonCode.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ReasonCode.load({ "reason_code_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ReasonCode.remove({ "reason_code_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ReasonCode.update({
  "reason_code_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReasonCodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ReferralCodeEntity

```ruby
referral_code = client.ReferralCode
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ReferralCode.load({ "code" => "code" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ReferralCodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SaleRepSettingEntity

```ruby
sale_rep_setting = client.SaleRepSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_name` | `String` | No |  |
| `sales_rep_id` | `Integer` | No |  |
| `sales_rep_name` | `String` | No |  |
| `site_link` | `String` | No |  |
| `site_name` | `String` | No |  |
| `subscription_id` | `Integer` | No |  |
| `subscription_mrr` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SaleRepSetting.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SaleRepSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SalesCommissionEntity

```ruby
sales_commission = client.SalesCommission
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `String` | No |  |
| `id` | `Integer` | No |  |
| `subscriptions` | `Array` | No |  |
| `subscriptions_count` | `Integer` | No |  |
| `test_mode` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SalesCommission.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SalesCommissionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SegmentEntity

```ruby
segment = client.Segment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `event_based_billing_metric_id` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `price_point_id` | `Integer` | No |  |
| `prices` | `Array` | No |  |
| `pricing_scheme` | `Object` | No |  |
| `segment_property_1_value` | `Object` | No |  |
| `segment_property_2_value` | `Object` | No |  |
| `segment_property_3_value` | `Object` | No |  |
| `segment_property_4_value` | `Object` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Segment.create({
  "component_id" => "example_component_id", # String
  "price_point_id" => "example_price_point_id", # String
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Segment.update({
  "component_id" => "component_id",
  "id" => 1,
  "price_point_id" => "price_point_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SignupProformaPreviewEntity

```ruby
signup_proforma_preview = client.SignupProformaPreview
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SignupProformaPreview.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SignupProformaPreviewEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SiteEntity

```ruby
site = client.Site
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chargify_js_keys` | `Array` | No |  |
| `meta` | `Hash` | No |  |
| `site` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Site.create({
  "site" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Site.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Site.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionEntity

```ruby
subscription = client.Subscription
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `String` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `String` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `Integer` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `Hash` | Yes |  |
| `cancel_at_end_of_period` | `Boolean` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `String` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `String` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `Object` | No |  |
| `coupon_code` | `String` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `Array` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `Integer` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `Integer` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `Array` | No | Additional coupon data. |
| `created_at` | `String` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `Integer` | No |  |
| `credit_card` | `Object` | No |  |
| `currency` | `String` | No |  |
| `current_billing_amount_in_cents` | `Integer` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `String` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `String` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `Hash` | No |  |
| `delayed_cancel_at` | `String` | No | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `Boolean` | No | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `String` | No | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `String` | No | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `Object` | No |  |
| `id` | `Integer` | No | The subscription unique id within Chargify. |
| `locale` | `String` | No |  |
| `net_terms` | `Integer` | No | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `String` | No | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `String` | No | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `Integer` | No | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `Integer` | No | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `Integer` | No | The ID of the offer associated with the subscription. |
| `on_hold_at` | `String` | No | The timestamp of the most recent on hold action. |
| `payer_id` | `Integer` | No | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `Object` | No |  |
| `payment_type` | `String` | No | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `Object` | No |  |
| `prepaid_dunning` | `Boolean` | No | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `Integer` | No |  |
| `previous_state` | `Object` | No |  |
| `product` | `Hash` | No |  |
| `product_price_in_cents` | `Integer` | No | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `Integer` | No | The product price point currently subscribed to. |
| `product_price_point_type` | `Object` | No |  |
| `product_version_number` | `Integer` | No | The version of the product for the subscription. |
| `reason_code` | `String` | No | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `Boolean` | No |  |
| `reference` | `String` | No | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `String` | No | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `String` | No |  |
| `self_service_page_token` | `String` | No | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `Integer` | No | The ID of the transaction that generated the revenue |
| `signup_revenue` | `String` | No | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `String` | No | A day of month that subscription will be processed on. |
| `state` | `Object` | No |  |
| `stored_credential_transaction_id` | `Integer` | No | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `Hash` | No |  |
| `total_revenue_in_cents` | `Integer` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `String` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `String` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `String` | No | The date of last update for this subscription |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Subscription.create({
  "bank_account" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Subscription.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Subscription.load({ "subscription_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Subscription.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Subscription.update({
  "subscription_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionComponentEntity

```ruby
subscription_component = client.SubscriptionComponent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | `Object` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `Hash` | No |  |
| `allocation_preview` | `Hash` | No |  |
| `allow_fractional_quantities` | `Boolean` | No |  |
| `archived_at` | `String` | No |  |
| `component` | `Hash` | No |  |
| `component_handle` | `String` | No |  |
| `component_id` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `currency` | `String` | No |  |
| `description` | `String` | No |  |
| `display_on_hosted_page` | `Boolean` | No |  |
| `downgrade_credit` | `Object` | No |  |
| `enabled` | `Boolean` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `Array` | No |  |
| `id` | `Integer` | No |  |
| `interval` | `Integer` | No | The numerical interval. |
| `interval_unit` | `Object` | No |  |
| `kind` | `Object` | No |  |
| `name` | `String` | No |  |
| `price_point_handle` | `String` | No |  |
| `price_point_id` | `Integer` | No |  |
| `price_point_name` | `String` | No |  |
| `price_point_type` | `Object` | No |  |
| `pricing_scheme` | `Object` | No |  |
| `product_family_handle` | `String` | No |  |
| `product_family_id` | `Integer` | No |  |
| `recurring` | `Boolean` | No |  |
| `subscription` | `Hash` | No |  |
| `subscription_id` | `Integer` | No |  |
| `unit_balance` | `Object` | No |  |
| `unit_name` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upgrade_charge` | `Object` | No |  |
| `usage` | `Hash` | No |  |
| `use_site_exchange_rate` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionComponent.create({
  "api_handle" => "example_api_handle", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionComponent.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionComponent.load({ "component_id" => 1, "subscription_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionComponent.remove({ "allocation_id" => 1, "component_id" => 1, "subscription_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriptionComponent.update({
  "allocation_id" => 1,
  "component_id" => 1,
  "subscription_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionComponentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionGroupEntity

```ruby
subscription_group = client.SubscriptionGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `meta` | `Hash` | No |  |
| `subscription_group` | `Hash` | No |  |
| `subscription_groups` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionGroup.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionGroup.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionGroup.remove({ "id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriptionGroup.update({
  "uid" => "uid",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionGroupInvoiceAccountEntity

```ruby
subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionGroupInvoiceAccount.create({
  "id" => "example_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionGroupInvoiceAccount.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionGroupSignupEntity

```ruby
subscription_group_signup = client.SubscriptionGroupSignup
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionGroupSignup.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionGroupSignupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionGroupStatusEntity

```ruby
subscription_group_status = client.SubscriptionGroupStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionGroupStatus.create({
  "id" => "example_id", # String
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionGroupStatus.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionGroupStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionInvoiceAccountEntity

```ruby
subscription_invoice_account = client.SubscriptionInvoiceAccount
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `service_credits` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionInvoiceAccount.create({
  "id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionInvoiceAccount.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionMrrEntity

```ruby
subscription_mrr = client.SubscriptionMrr
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `Hash` | Yes |  |
| `mrr_amount_in_cents` | `Integer` | Yes |  |
| `subscription_id` | `Integer` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionMrr.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionMrrEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionNoteEntity

```ruby
subscription_note = client.SubscriptionNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `String` | No |  |
| `created_at` | `String` | No |  |
| `id` | `Integer` | No |  |
| `note` | `Hash` | Yes |  |
| `sticky` | `Boolean` | No |  |
| `subscription_id` | `Integer` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionNote.create({
  "id" => 1, # Integer
  "note" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionNote.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionNote.load({ "note_id" => 1, "subscription_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionNote.remove({ "note_id" => 1, "subscription_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriptionNote.update({
  "note_id" => 1,
  "subscription_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionProductEntity

```ruby
subscription_product = client.SubscriptionProduct
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `migration` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionProduct.create({
  "subscription_id" => 1, # Integer
  "migration" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionProductEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionRenewalEntity

```ruby
subscription_renewal = client.SubscriptionRenewal
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `scheduled_renewal_configuration` | `Hash` | No |  |
| `scheduled_renewal_configuration_item` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionRenewal.create({
  "scheduled_renewal_id" => 1, # Integer
  "subscription_id" => 1, # Integer
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SubscriptionRenewal.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionRenewal.load({ "id" => 1, "subscription_id" => 1 })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionRenewal.remove({ "id" => 1, "scheduled_renewal_id" => 1, "subscription_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriptionRenewal.update({
  "id" => 1,
  "subscription_id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionRenewalEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SubscriptionStatusEntity

```ruby
subscription_status = client.SubscriptionStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `renewal_preview` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SubscriptionStatus.create({
  "subscription_id" => 1, # Integer
})
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SubscriptionStatus.remove({ "subscription_id" => 1 })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SubscriptionStatus.update({
  "id" => 1,
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SubscriptionStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageEntity

```ruby
usage = client.Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Usage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `Hash` | No |  |
| `webhook` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Webhook.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Webhook.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Webhook.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

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

```ruby
client = MaxioAdvancedBillingSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
  },
})
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

