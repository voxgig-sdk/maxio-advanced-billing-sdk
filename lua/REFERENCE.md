# MaxioAdvancedBilling Lua SDK Reference

Complete API reference for the MaxioAdvancedBilling Lua SDK.


## MaxioAdvancedBillingSDK

### Constructor

```lua
local sdk = require("maxio-advanced-billing_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AccountBalance(data)`

Create a new `AccountBalance` entity instance. Pass `nil` for no initial data.

#### `Allocation(data)`

Create a new `Allocation` entity instance. Pass `nil` for no initial data.

#### `BatchJob(data)`

Create a new `BatchJob` entity instance. Pass `nil` for no initial data.

#### `BillingPortal(data)`

Create a new `BillingPortal` entity instance. Pass `nil` for no initial data.

#### `Component(data)`

Create a new `Component` entity instance. Pass `nil` for no initial data.

#### `ComponentFeature(data)`

Create a new `ComponentFeature` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePoint(data)`

Create a new `ComponentPricePoint` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePointCurrencyOverage(data)`

Create a new `ComponentPricePointCurrencyOverage` entity instance. Pass `nil` for no initial data.

#### `Coupon(data)`

Create a new `Coupon` entity instance. Pass `nil` for no initial data.

#### `CouponCurrency(data)`

Create a new `CouponCurrency` entity instance. Pass `nil` for no initial data.

#### `CouponSubcode(data)`

Create a new `CouponSubcode` entity instance. Pass `nil` for no initial data.

#### `CouponUsage(data)`

Create a new `CouponUsage` entity instance. Pass `nil` for no initial data.

#### `CustomField(data)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `DelayedCancel(data)`

Create a new `DelayedCancel` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data)`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `EventsBasedBillingSegment(data)`

Create a new `EventsBasedBillingSegment` entity instance. Pass `nil` for no initial data.

#### `Feature(data)`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureCatalogItem(data)`

Create a new `FeatureCatalogItem` entity instance. Pass `nil` for no initial data.

#### `FeatureTemplate(data)`

Create a new `FeatureTemplate` entity instance. Pass `nil` for no initial data.

#### `Insight(data)`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `Invoice(data)`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `ListProformaInvoice(data)`

Create a new `ListProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ListSaleRepItem(data)`

Create a new `ListSaleRepItem` entity instance. Pass `nil` for no initial data.

#### `ListSegment(data)`

Create a new `ListSegment` entity instance. Pass `nil` for no initial data.

#### `Offer(data)`

Create a new `Offer` entity instance. Pass `nil` for no initial data.

#### `OneTimeToken(data)`

Create a new `OneTimeToken` entity instance. Pass `nil` for no initial data.

#### `PaymentProfile(data)`

Create a new `PaymentProfile` entity instance. Pass `nil` for no initial data.

#### `Prepayment(data)`

Create a new `Prepayment` entity instance. Pass `nil` for no initial data.

#### `Product(data)`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductFamily(data)`

Create a new `ProductFamily` entity instance. Pass `nil` for no initial data.

#### `ProductFeature(data)`

Create a new `ProductFeature` entity instance. Pass `nil` for no initial data.

#### `ProductPricePoint(data)`

Create a new `ProductPricePoint` entity instance. Pass `nil` for no initial data.

#### `ProformaInvoice(data)`

Create a new `ProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ReasonCode(data)`

Create a new `ReasonCode` entity instance. Pass `nil` for no initial data.

#### `ReferralCode(data)`

Create a new `ReferralCode` entity instance. Pass `nil` for no initial data.

#### `SaleRepSetting(data)`

Create a new `SaleRepSetting` entity instance. Pass `nil` for no initial data.

#### `SalesCommission(data)`

Create a new `SalesCommission` entity instance. Pass `nil` for no initial data.

#### `Segment(data)`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SignupProformaPreview(data)`

Create a new `SignupProformaPreview` entity instance. Pass `nil` for no initial data.

#### `Site(data)`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Subscription(data)`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionComponent(data)`

Create a new `SubscriptionComponent` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroup(data)`

Create a new `SubscriptionGroup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupInvoiceAccount(data)`

Create a new `SubscriptionGroupInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupSignup(data)`

Create a new `SubscriptionGroupSignup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupStatus(data)`

Create a new `SubscriptionGroupStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionInvoiceAccount(data)`

Create a new `SubscriptionInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionMrr(data)`

Create a new `SubscriptionMrr` entity instance. Pass `nil` for no initial data.

#### `SubscriptionNote(data)`

Create a new `SubscriptionNote` entity instance. Pass `nil` for no initial data.

#### `SubscriptionProduct(data)`

Create a new `SubscriptionProduct` entity instance. Pass `nil` for no initial data.

#### `SubscriptionRenewal(data)`

Create a new `SubscriptionRenewal` entity instance. Pass `nil` for no initial data.

#### `SubscriptionStatus(data)`

Create a new `SubscriptionStatus` entity instance. Pass `nil` for no initial data.

#### `Usage(data)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AccountBalanceEntity

```lua
local account_balance = client:AccountBalance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `open_invoices` | `any` | No |  |
| `pending_discounts` | `any` | No |  |
| `pending_invoices` | `any` | No |  |
| `prepayments` | `any` | No |  |
| `service_credits` | `any` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccountBalance():load({ subscription_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBalanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AllocationEntity

```lua
local allocation = client:Allocation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Allocation():create({
  subscription_id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Allocation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllocationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BatchJobEntity

```lua
local batch_job = client:BatchJob(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `string` | No |  |
| `created_at` | `string` | No |  |
| `finished_at` | `string` | No |  |
| `id` | `number` | No |  |
| `row_count` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BatchJob():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BatchJob():load({ batch_id = "batch_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchJobEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillingPortalEntity

```lua
local billing_portal = client:BillingPortal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `fetch_count` | `number` | No |  |
| `last_accepted_at` | `string` | No |  |
| `last_invite_accepted_at` | `string` | No |  |
| `last_invite_sent_at` | `string` | No |  |
| `last_sent_at` | `string` | No |  |
| `new_link_available_at` | `string` | No |  |
| `send_invite_link_text` | `string` | No |  |
| `uninvited_count` | `number` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillingPortal():create({
  customer_id = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BillingPortal():load({ customer_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BillingPortal():remove({ customer_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingPortalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComponentEntity

```lua
local component = client:Component(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component` | `table` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `component` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Component():create({
  product_family_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Component():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Component():load({ component_id = "component_id", product_family_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Component():remove({ component_id = "component_id", product_family_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Component():update({
  component_id = "component_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComponentFeatureEntity

```lua
local component_feature = client:ComponentFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ComponentFeature():remove({ component_id = 1, id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComponentPricePointEntity

```lua
local component_price_point = client:ComponentPricePoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component` | `table` | Yes |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `table` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `number` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `number` | No |  |
| `interval` | `number` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `table` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `price_point` | `table` | No |  |
| `price_points` | `table` | No |  |
| `prices` | `table` | No |  |
| `pricing_scheme` | `any` | No |  |
| `renew_prepaid_allocation` | `boolean` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `boolean` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `number` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `boolean` | No |  |
| `type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `boolean` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ComponentPricePoint():create({
  id = --[[ number ]],
  component = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ComponentPricePoint():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ComponentPricePoint():remove({ component_id = "component_id", price_point_id = "price_point_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ComponentPricePoint():update({
  price_point_id = "price_point_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentPricePointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComponentPricePointCurrencyOverageEntity

```lua
local component_price_point_currency_overage = client:ComponentPricePointCurrencyOverage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency_overage_prices` | `table` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `table` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `number` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `number` | No |  |
| `interval` | `number` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `table` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `prices` | `table` | No |  |
| `pricing_scheme` | `any` | No |  |
| `renew_prepaid_allocation` | `boolean` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `boolean` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `number` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `boolean` | No |  |
| `type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `boolean` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ComponentPricePointCurrencyOverage():load({ component_id = "component_id", price_point_id = "price_point_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CouponEntity

```lua
local coupon = client:Coupon(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_negative_balance` | `boolean` | No | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `number` | No |  |
| `amount_in_cents` | `number` | No |  |
| `apply_on_cancel_at_end_of_period` | `boolean` | No |  |
| `apply_on_subscription_expiration` | `boolean` | No |  |
| `archived_at` | `string` | No |  |
| `code` | `string` | No |  |
| `compounding_strategy` | `any` | No |  |
| `conversion_limit` | `string` | No |  |
| `coupon` | `table` | No |  |
| `coupon_restrictions` | `table` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `table` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `string` | No |  |
| `discount_type` | `string` | No |  |
| `duration_interval` | `number` | No |  |
| `duration_interval_span` | `string` | No |  |
| `duration_interval_unit` | `string` | No |  |
| `duration_period_count` | `number` | No |  |
| `end_date` | `string` | No | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `boolean` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `percentage` | `string` | No |  |
| `product_family_id` | `number` | No |  |
| `product_family_name` | `string` | No |  |
| `recurring` | `boolean` | No |  |
| `recurring_scheme` | `string` | No |  |
| `stackable` | `boolean` | No | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Coupon():create({
  product_family_id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Coupon():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Coupon():load({ coupon_id = 1, product_family_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Coupon():remove({ id = 1, subcode = "subcode" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Coupon():update({
  coupon_id = 1,
  product_family_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CouponCurrencyEntity

```lua
local coupon_currency = client:CouponCurrency(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CouponCurrency():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponCurrencyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CouponSubcodeEntity

```lua
local coupon_subcode = client:CouponSubcode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `table` | No |  |
| `duplicate_codes` | `table` | No |  |
| `id` | `string` | No |  |
| `invalid_codes` | `table` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CouponSubcode():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponSubcodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CouponUsageEntity

```lua
local coupon_usage = client:CouponUsage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No | The Chargify id of the product |
| `name` | `string` | No | Name of the product |
| `revenue` | `number` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `number` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `number` | No | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `number` | No | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `number` | No | Number of times the coupon has been applied |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CouponUsage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldEntity

```lua
local custom_field = client:CustomField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_page` | `number` | No |  |
| `data_count` | `number` | No |  |
| `deleted_at` | `string` | No |  |
| `enum` | `string` | No |  |
| `id` | `number` | No |  |
| `input_type` | `string` | No |  |
| `metadata` | `table` | No |  |
| `metafield_id` | `number` | No |  |
| `metafields` | `any` | No |  |
| `name` | `string` | No |  |
| `per_page` | `number` | No |  |
| `resource_id` | `number` | No |  |
| `scope` | `table` | No |  |
| `total_count` | `number` | No |  |
| `total_pages` | `number` | No |  |
| `value` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomField():create({
  resource_type = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomField():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomField():remove({ resource_type = "resource_type" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomField():update({
  resource_type = "resource_type",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `string` | No | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `number` | No | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `string` | No | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `string` | No | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `string` | No | The customer shipping address country |
| `country_name` | `string` | No | The customer's full name of country |
| `created_at` | `string` | No | The timestamp in which the customer object was created in Chargify |
| `customer` | `table` | No |  |
| `default_auto_renewal_profile_id` | `number` | No | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `string` | No |  |
| `email` | `string` | No | The email address of the customer |
| `entity_identifier_kind` | `any` | No |  |
| `entity_identifier_value` | `string` | No | The value of the customer's tax or business identifier. |
| `first_name` | `string` | No | The first name of the customer |
| `id` | `number` | No | The customer ID in Chargify |
| `last_name` | `string` | No | The last name of the customer |
| `locale` | `string` | No | The locale for the customer to identify language-region |
| `maxioid` | `string` | No | The Maxio-generated unique identifier for the customer. |
| `organization` | `string` | No | The organization of the customer. |
| `parent_id` | `number` | No | The parent ID in Chargify if applicable. |
| `phone` | `string` | No | The phone number of the customer |
| `portal_customer_created_at` | `string` | No | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `string` | No | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `string` | No | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `string` | No | The unique identifier used within your own application for this customer |
| `salesforce_id` | `string` | No | The Salesforce ID for the customer |
| `state` | `string` | No | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `string` | No | The customer's full name of state |
| `surcharging` | `boolean` | No | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `boolean` | No | The tax exempt status for the customer. |
| `tax_exempt_reason` | `string` | No | The Tax Exemption Reason Code for the customer |
| `updated_at` | `string` | No | The timestamp in which the customer object was last edited |
| `vat_country` | `string` | No | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `string` | No | The VAT business identification number for the customer. |
| `verified` | `boolean` | No | Is the customer verified to use ACH as a payment method. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Customer():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Customer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Customer():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Customer():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Customer():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DelayedCancelEntity

```lua
local delayed_cancel = client:DelayedCancel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No |  |
| `subscription` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DelayedCancel():create({
  subscription_id = --[[ number ]],
  subscription = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DelayedCancelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EndpointEntity

```lua
local endpoint = client:Endpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `url` | `string` | No |  |
| `webhook_subscriptions` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Endpoint():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Endpoint():update({
  endpoint_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntitlementEntity

```lua
local entitlement = client:Entitlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `number` | Yes |  |
| `entitlements` | `table` | Yes |  |
| `status` | `string` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Entitlement():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Event():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Event():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventsBasedBillingSegmentEntity

```lua
local events_based_billing_segment = client:EventsBasedBillingSegment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EventsBasedBillingSegment():remove({ component_id = "component_id", id = 1, price_point_id = "price_point_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventsBasedBillingSegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureEntity

```lua
local feature = client:Feature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `archived_count` | `number` | Yes | Number of archived feature templates matching the filters. |
| `created_at` | `string` | No |  |
| `feature` | `table` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `number` | No | The id of the feature template this item was created from. |
| `id` | `number` | No |  |
| `items` | `table` | Yes |  |
| `periodicity_interval` | `number` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` | No |  |
| `price_point_id` | `number` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` | No |  |
| `total_count` | `number` | Yes | Total number of feature templates matching the filters, across all pages. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Feature():create({
  archived_count = --[[ number ]],
  feature = --[[ table ]],
  items = --[[ table ]],
  total_count = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Feature():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureCatalogItemEntity

```lua
local feature_catalog_item = client:FeatureCatalogItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `feature` | `table` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `number` | No | The id of the feature template this item was created from. |
| `id` | `number` | No |  |
| `periodicity_interval` | `number` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` | No |  |
| `price_point_id` | `number` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `string` | No | The value granted by this feature catalog item. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FeatureCatalogItem():create({
  id = --[[ number ]],
  feature = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FeatureCatalogItem():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FeatureCatalogItem():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureCatalogItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeatureTemplateEntity

```lua
local feature_template = client:FeatureTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` | No |  |
| `default_periodicity_interval` | `number` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` | No |  |
| `default_value` | `string` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` | No |  |
| `feature` | `any` | Yes |  |
| `id` | `number` | No | The Advanced Billing id of the feature template. |
| `key` | `string` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` | No |  |
| `name` | `string` | No | The display name of the feature. |
| `plans_count` | `number` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `number` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` | No |  |
| `value_type` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FeatureTemplate():create({
  id = --[[ number ]],
  feature = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FeatureTemplate():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FeatureTemplate():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FeatureTemplate():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InsightEntity

```lua
local insight = client:Insight(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mrr` | `table` | Yes |  |
| `seller_name` | `string` | No |  |
| `site_currency` | `string` | No |  |
| `site_id` | `number` | No |  |
| `site_name` | `string` | No |  |
| `stats` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Insight():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InvoiceEntity

```lua
local invoice = client:Invoice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `table` | No |  |
| `applied_amount` | `string` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `table` | No |  |
| `billing_address` | `any` | No |  |
| `branding_theme_id` | `number` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `table` | Yes |  |
| `credits` | `table` | No |  |
| `currency` | `string` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `table` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` | No |  |
| `debits` | `table` | No |  |
| `discount_amount` | `string` | No | Total discount applied to the invoice. |
| `discounts` | `table` | No |  |
| `display_settings` | `table` | No |  |
| `due_amount` | `string` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `number` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `number` | No |  |
| `invoice` | `table` | No |  |
| `invoices` | `table` | Yes |  |
| `issue_date` | `string` | No | Date the invoice was issued to the customer. |
| `line_items` | `table` | No | Line items on the invoice. |
| `memo` | `string` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `number` | No |  |
| `number` | `string` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `table` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | No | Date the invoice became fully paid. |
| `paid_invoices` | `table` | No |  |
| `parent_invoice_id` | `number` | No |  |
| `parent_invoice_number` | `number` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `table` | No |  |
| `payment_instructions` | `string` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `table` | No |  |
| `prepayment` | `string` | No |  |
| `previous_balance_data` | `table` | No |  |
| `product_family_name` | `string` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | No | The public URL of the invoice |
| `public_url_expires_on` | `string` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `table` | No |  |
| `refund_amount` | `string` | No |  |
| `refunds` | `table` | No |  |
| `remaining_amount` | `string` | No | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `string` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `number` | No | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `any` | No |  |
| `site_id` | `number` | No | ID of the site to which the invoice belongs. |
| `status` | `any` | No |  |
| `subscription_group_id` | `number` | No |  |
| `subscription_id` | `number` | No | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `string` | No | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `string` | No | Total tax on the invoice. |
| `taxes` | `table` | No |  |
| `total_amount` | `string` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` | No |  |
| `uid` | `string` | No | Unique identifier for the invoice. |
| `updated_at` | `string` | No |  |
| `void` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Invoice():create({
  subscription_id = --[[ number ]],
  credit_notes = --[[ table ]],
  invoices = --[[ table ]],
  void = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Invoice():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Invoice():remove({ subscription_id = 1, uid = "uid" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Invoice():update({
  subscription_id = 1,
  uid = "uid",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListProformaInvoiceEntity

```lua
local list_proforma_invoice = client:ListProformaInvoice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `table` | No |  |
| `billing_address` | `table` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `table` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `table` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `table` | No |  |
| `due_amount` | `string` | No |  |
| `line_items` | `table` | No |  |
| `memo` | `string` | No |  |
| `number` | `number` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `table` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `number` | No |  |
| `shipping_address` | `table` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `number` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `table` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListProformaInvoice():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListProformaInvoiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSaleRepItemEntity

```lua
local list_sale_rep_item = client:ListSaleRepItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `number` | No |  |
| `mrr_data` | `table` | No |  |
| `subscriptions_count` | `number` | No |  |
| `test_mode` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListSaleRepItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSaleRepItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListSegmentEntity

```lua
local list_segment = client:ListSegment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `number` | No |  |
| `id` | `number` | No |  |
| `price_point_id` | `number` | No |  |
| `prices` | `table` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `segments` | `table` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ListSegment():create({
  component_id = --[[ string ]],
  price_point_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListSegment():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ListSegment():update({
  component_id = "component_id",
  price_point_id = "price_point_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OfferEntity

```lua
local offer = client:Offer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `handle` | `string` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `offer` | `table` | No |  |
| `offer_discounts` | `table` | No |  |
| `offer_items` | `table` | No |  |
| `offer_signup_pages` | `table` | No |  |
| `offers` | `table` | No |  |
| `product_family_id` | `number` | No |  |
| `product_family_name` | `string` | No |  |
| `product_id` | `number` | No |  |
| `product_name` | `string` | No |  |
| `product_price_in_cents` | `number` | No |  |
| `product_price_point_id` | `number` | No |  |
| `product_price_point_name` | `string` | No |  |
| `product_revisable_number` | `number` | No |  |
| `site_id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Offer():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Offer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Offer():load({ offer_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Offer():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OneTimeTokenEntity

```lua
local one_time_token = client:OneTimeToken(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OneTimeToken():load({ chargify_token = "chargify_token" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OneTimeTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PaymentProfileEntity

```lua
local payment_profile = client:PaymentProfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `payment_profile` | `table` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `payment_profile` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PaymentProfile():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PaymentProfile():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PaymentProfile():load({ payment_profile_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:PaymentProfile():remove({ payment_profile_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PaymentProfile():update({
  bank_account_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrepaymentEntity

```lua
local prepayment = client:Prepayment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Prepayment():create({
  id = --[[ number ]],
  subscription_id = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaymentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductEntity

```lua
local product = client:Product(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `product` | - | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Product():create({
  product_family_id = --[[ string ]],
  product = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Product():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Product():load({ api_handle = "api_handle" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Product():remove({ product_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Product():update({
  product_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductFamilyEntity

```lua
local product_family = client:ProductFamily(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `product_family` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProductFamily():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProductFamily():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProductFamily():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFamilyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductFeatureEntity

```lua
local product_feature = client:ProductFeature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProductFeature():remove({ id = 1, product_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProductPricePointEntity

```lua
local product_price_point = client:ProductPricePoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `price_point` | `table` | Yes |  |
| `price_points` | `table` | No |  |
| `product` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `price_point` | - | - | Yes | Yes | - |
| `price_points` | - | Yes | - | - | - |
| `product` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProductPricePoint():create({
  id = --[[ string ]],
  price_point = --[[ table ]],
  product = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProductPricePoint():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProductPricePoint():load({ price_point_id = "price_point_id", product_id = "product_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ProductPricePoint():remove({ price_point_id = "price_point_id", product_id = "product_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProductPricePoint():update({
  price_point_id = "price_point_id",
  product_id = "product_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductPricePointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProformaInvoiceEntity

```lua
local proforma_invoice = client:ProformaInvoice(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `table` | No |  |
| `billing_address` | `table` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `table` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `table` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `table` | No |  |
| `due_amount` | `string` | No |  |
| `id` | `string` | No |  |
| `line_items` | `table` | No |  |
| `memo` | `string` | No |  |
| `number` | `number` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `table` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `number` | No |  |
| `shipping_address` | `table` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `number` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `table` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProformaInvoice():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProformaInvoice():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProformaInvoiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReasonCodeEntity

```lua
local reason_code = client:ReasonCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `position` | `number` | No |  |
| `reason_code` | `table` | Yes |  |
| `site_id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReasonCode():create({
  reason_code = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReasonCode():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReasonCode():load({ reason_code_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ReasonCode():remove({ reason_code_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReasonCode():update({
  reason_code_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReasonCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReferralCodeEntity

```lua
local referral_code = client:ReferralCode(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReferralCode():load({ code = "code" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReferralCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SaleRepSettingEntity

```lua
local sale_rep_setting = client:SaleRepSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_name` | `string` | No |  |
| `sales_rep_id` | `number` | No |  |
| `sales_rep_name` | `string` | No |  |
| `site_link` | `string` | No |  |
| `site_name` | `string` | No |  |
| `subscription_id` | `number` | No |  |
| `subscription_mrr` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SaleRepSetting():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaleRepSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SalesCommissionEntity

```lua
local sales_commission = client:SalesCommission(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `number` | No |  |
| `subscriptions` | `table` | No |  |
| `subscriptions_count` | `number` | No |  |
| `test_mode` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SalesCommission():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SalesCommissionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SegmentEntity

```lua
local segment = client:Segment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `number` | No |  |
| `id` | `number` | No |  |
| `price_point_id` | `number` | No |  |
| `prices` | `table` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Segment():create({
  component_id = --[[ string ]],
  price_point_id = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Segment():update({
  component_id = "component_id",
  id = 1,
  price_point_id = "price_point_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SignupProformaPreviewEntity

```lua
local signup_proforma_preview = client:SignupProformaPreview(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SignupProformaPreview():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SignupProformaPreviewEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SiteEntity

```lua
local site = client:Site(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chargify_js_keys` | `table` | No |  |
| `meta` | `table` | No |  |
| `site` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Site():create({
  site = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Site():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Site():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionEntity

```lua
local subscription = client:Subscription(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `string` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `number` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `table` | Yes |  |
| `cancel_at_end_of_period` | `boolean` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `any` | No |  |
| `coupon_code` | `string` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `table` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `number` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `number` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `table` | No | Additional coupon data. |
| `created_at` | `string` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `number` | No |  |
| `credit_card` | `any` | No |  |
| `currency` | `string` | No |  |
| `current_billing_amount_in_cents` | `number` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `table` | No |  |
| `delayed_cancel_at` | `string` | No | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `boolean` | No | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `string` | No | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `string` | No | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `any` | No |  |
| `id` | `number` | No | The subscription unique id within Chargify. |
| `locale` | `string` | No |  |
| `net_terms` | `number` | No | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `string` | No | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `string` | No | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `number` | No | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `number` | No | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `number` | No | The ID of the offer associated with the subscription. |
| `on_hold_at` | `string` | No | The timestamp of the most recent on hold action. |
| `payer_id` | `number` | No | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `any` | No |  |
| `payment_type` | `string` | No | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `any` | No |  |
| `prepaid_dunning` | `boolean` | No | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `number` | No |  |
| `previous_state` | `any` | No |  |
| `product` | `table` | No |  |
| `product_price_in_cents` | `number` | No | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `number` | No | The product price point currently subscribed to. |
| `product_price_point_type` | `any` | No |  |
| `product_version_number` | `number` | No | The version of the product for the subscription. |
| `reason_code` | `string` | No | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `boolean` | No |  |
| `reference` | `string` | No | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `string` | No | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `string` | No |  |
| `self_service_page_token` | `string` | No | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `number` | No | The ID of the transaction that generated the revenue |
| `signup_revenue` | `string` | No | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `string` | No | A day of month that subscription will be processed on. |
| `state` | `any` | No |  |
| `stored_credential_transaction_id` | `number` | No | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `table` | No |  |
| `total_revenue_in_cents` | `number` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | No | The date of last update for this subscription |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Subscription():create({
  bank_account = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Subscription():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Subscription():load({ subscription_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Subscription():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Subscription():update({
  subscription_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionComponentEntity

```lua
local subscription_component = client:SubscriptionComponent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | `any` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `table` | No |  |
| `allocation_preview` | `table` | No |  |
| `allow_fractional_quantities` | `boolean` | No |  |
| `archived_at` | `string` | No |  |
| `component` | `table` | No |  |
| `component_handle` | `string` | No |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency` | `string` | No |  |
| `description` | `string` | No |  |
| `display_on_hosted_page` | `boolean` | No |  |
| `downgrade_credit` | `any` | No |  |
| `enabled` | `boolean` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `table` | No |  |
| `id` | `number` | No |  |
| `interval` | `number` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `kind` | `any` | No |  |
| `name` | `string` | No |  |
| `price_point_handle` | `string` | No |  |
| `price_point_id` | `number` | No |  |
| `price_point_name` | `string` | No |  |
| `price_point_type` | `any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `product_family_handle` | `string` | No |  |
| `product_family_id` | `number` | No |  |
| `recurring` | `boolean` | No |  |
| `subscription` | `table` | No |  |
| `subscription_id` | `number` | No |  |
| `unit_balance` | `any` | No |  |
| `unit_name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upgrade_charge` | `any` | No |  |
| `usage` | `table` | No |  |
| `use_site_exchange_rate` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionComponent():create({
  api_handle = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionComponent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionComponent():load({ component_id = 1, subscription_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionComponent():remove({ allocation_id = 1, component_id = 1, subscription_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriptionComponent():update({
  allocation_id = 1,
  component_id = 1,
  subscription_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionComponentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionGroupEntity

```lua
local subscription_group = client:SubscriptionGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `meta` | `table` | No |  |
| `subscription_group` | `table` | No |  |
| `subscription_groups` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionGroup():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionGroup():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionGroup():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriptionGroup():update({
  uid = "uid",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionGroupInvoiceAccountEntity

```lua
local subscription_group_invoice_account = client:SubscriptionGroupInvoiceAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionGroupInvoiceAccount():create({
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionGroupInvoiceAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionGroupSignupEntity

```lua
local subscription_group_signup = client:SubscriptionGroupSignup(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionGroupSignup():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupSignupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionGroupStatusEntity

```lua
local subscription_group_status = client:SubscriptionGroupStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionGroupStatus():create({
  id = --[[ string ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionGroupStatus():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionInvoiceAccountEntity

```lua
local subscription_invoice_account = client:SubscriptionInvoiceAccount(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `service_credits` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionInvoiceAccount():create({
  id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionInvoiceAccount():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionMrrEntity

```lua
local subscription_mrr = client:SubscriptionMrr(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `table` | Yes |  |
| `mrr_amount_in_cents` | `number` | Yes |  |
| `subscription_id` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionMrr():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionMrrEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionNoteEntity

```lua
local subscription_note = client:SubscriptionNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `note` | `table` | Yes |  |
| `sticky` | `boolean` | No |  |
| `subscription_id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionNote():create({
  id = --[[ number ]],
  note = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionNote():load({ note_id = 1, subscription_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionNote():remove({ note_id = 1, subscription_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriptionNote():update({
  note_id = 1,
  subscription_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionProductEntity

```lua
local subscription_product = client:SubscriptionProduct(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `migration` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionProduct():create({
  subscription_id = --[[ number ]],
  migration = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionProductEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionRenewalEntity

```lua
local subscription_renewal = client:SubscriptionRenewal(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scheduled_renewal_configuration` | `table` | No |  |
| `scheduled_renewal_configuration_item` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionRenewal():create({
  scheduled_renewal_id = --[[ number ]],
  subscription_id = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionRenewal():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionRenewal():load({ id = 1, subscription_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionRenewal():remove({ id = 1, scheduled_renewal_id = 1, subscription_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriptionRenewal():update({
  id = 1,
  subscription_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionRenewalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionStatusEntity

```lua
local subscription_status = client:SubscriptionStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `renewal_preview` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SubscriptionStatus():create({
  subscription_id = --[[ number ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SubscriptionStatus():remove({ subscription_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SubscriptionStatus():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageEntity

```lua
local usage = client:Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Usage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `table` | No |  |
| `webhook` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Webhook():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

