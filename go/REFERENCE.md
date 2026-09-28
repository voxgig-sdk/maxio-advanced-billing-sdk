# MaxioAdvancedBilling Golang SDK Reference

Complete API reference for the MaxioAdvancedBilling Golang SDK.


## MaxioAdvancedBillingSDK

### Constructor

```go
func NewMaxioAdvancedBillingSDK(options map[string]any) *MaxioAdvancedBillingSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *MaxioAdvancedBillingSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *MaxioAdvancedBillingSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AccountBalance(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `AccountBalance` entity instance. Pass `nil` for no initial data.

#### `Allocation(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Allocation` entity instance. Pass `nil` for no initial data.

#### `BatchJob(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `BatchJob` entity instance. Pass `nil` for no initial data.

#### `BillingPortal(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `BillingPortal` entity instance. Pass `nil` for no initial data.

#### `Component(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Component` entity instance. Pass `nil` for no initial data.

#### `ComponentFeature(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ComponentFeature` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePoint(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ComponentPricePoint` entity instance. Pass `nil` for no initial data.

#### `ComponentPricePointCurrencyOverage(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ComponentPricePointCurrencyOverage` entity instance. Pass `nil` for no initial data.

#### `Coupon(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Coupon` entity instance. Pass `nil` for no initial data.

#### `CouponCurrency(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `CouponCurrency` entity instance. Pass `nil` for no initial data.

#### `CouponSubcode(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `CouponSubcode` entity instance. Pass `nil` for no initial data.

#### `CouponUsage(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `CouponUsage` entity instance. Pass `nil` for no initial data.

#### `CustomField(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `DelayedCancel(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `DelayedCancel` entity instance. Pass `nil` for no initial data.

#### `Endpoint(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Endpoint` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `EventsBasedBillingSegment(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `EventsBasedBillingSegment` entity instance. Pass `nil` for no initial data.

#### `Feature(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Feature` entity instance. Pass `nil` for no initial data.

#### `FeatureCatalogItem(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `FeatureCatalogItem` entity instance. Pass `nil` for no initial data.

#### `FeatureTemplate(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `FeatureTemplate` entity instance. Pass `nil` for no initial data.

#### `Insight(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Insight` entity instance. Pass `nil` for no initial data.

#### `Invoice(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Invoice` entity instance. Pass `nil` for no initial data.

#### `ListProformaInvoice(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ListProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ListSaleRepItem(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ListSaleRepItem` entity instance. Pass `nil` for no initial data.

#### `ListSegment(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ListSegment` entity instance. Pass `nil` for no initial data.

#### `Offer(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Offer` entity instance. Pass `nil` for no initial data.

#### `OneTimeToken(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `OneTimeToken` entity instance. Pass `nil` for no initial data.

#### `PaymentProfile(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `PaymentProfile` entity instance. Pass `nil` for no initial data.

#### `Prepayment(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Prepayment` entity instance. Pass `nil` for no initial data.

#### `Product(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Product` entity instance. Pass `nil` for no initial data.

#### `ProductFamily(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ProductFamily` entity instance. Pass `nil` for no initial data.

#### `ProductFeature(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ProductFeature` entity instance. Pass `nil` for no initial data.

#### `ProductPricePoint(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ProductPricePoint` entity instance. Pass `nil` for no initial data.

#### `ProformaInvoice(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ProformaInvoice` entity instance. Pass `nil` for no initial data.

#### `ReasonCode(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ReasonCode` entity instance. Pass `nil` for no initial data.

#### `ReferralCode(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `ReferralCode` entity instance. Pass `nil` for no initial data.

#### `SaleRepSetting(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SaleRepSetting` entity instance. Pass `nil` for no initial data.

#### `SalesCommission(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SalesCommission` entity instance. Pass `nil` for no initial data.

#### `Segment(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SignupProformaPreview(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SignupProformaPreview` entity instance. Pass `nil` for no initial data.

#### `Site(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Site` entity instance. Pass `nil` for no initial data.

#### `Subscription(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Subscription` entity instance. Pass `nil` for no initial data.

#### `SubscriptionComponent(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionComponent` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroup(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionGroup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupInvoiceAccount(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionGroupInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupSignup(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionGroupSignup` entity instance. Pass `nil` for no initial data.

#### `SubscriptionGroupStatus(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionGroupStatus` entity instance. Pass `nil` for no initial data.

#### `SubscriptionInvoiceAccount(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionInvoiceAccount` entity instance. Pass `nil` for no initial data.

#### `SubscriptionMrr(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionMrr` entity instance. Pass `nil` for no initial data.

#### `SubscriptionNote(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionNote` entity instance. Pass `nil` for no initial data.

#### `SubscriptionProduct(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionProduct` entity instance. Pass `nil` for no initial data.

#### `SubscriptionRenewal(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionRenewal` entity instance. Pass `nil` for no initial data.

#### `SubscriptionStatus(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `SubscriptionStatus` entity instance. Pass `nil` for no initial data.

#### `Usage(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) MaxioAdvancedBillingEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AccountBalanceEntity

```go
accountBalance := client.AccountBalance(nil)
fmt.Println(accountBalance.GetName()) // "account_balance"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountBalance(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountBalanceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AllocationEntity

```go
allocation := client.Allocation(nil)
fmt.Println(allocation.GetName()) // "allocation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Allocation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Allocation(nil).Create(map[string]any{
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AllocationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BatchJobEntity

```go
batchJob := client.BatchJob(nil)
fmt.Println(batchJob.GetName()) // "batch_job"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BatchJob(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BatchJob(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BatchJobEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillingPortalEntity

```go
billingPortal := client.BillingPortal(nil)
fmt.Println(billingPortal.GetName()) // "billing_portal"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BillingPortal(nil).Load(map[string]any{"customer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillingPortal(nil).Create(map[string]any{
    "customer_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BillingPortal(nil).Remove(map[string]any{"customer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillingPortalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComponentEntity

```go
component := client.Component(nil)
fmt.Println(component.GetName()) // "component"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component` | `map[string]any` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `component` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Component(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Component(nil).Load(map[string]any{"component_id": "component_id", "product_family_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Component(nil).Create(map[string]any{
    "product_family_id": "example_product_family_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Component(nil).Update(map[string]any{
    "component_id": "component_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Component(nil).Remove(map[string]any{"component_id": "component_id", "product_family_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComponentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComponentFeatureEntity

```go
componentFeature := client.ComponentFeature(nil)
fmt.Println(componentFeature.GetName()) // "component_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ComponentFeature(nil).Remove(map[string]any{"component_id": 1, "id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComponentFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComponentPricePointEntity

```go
componentPricePoint := client.ComponentPricePoint(nil)
fmt.Println(componentPricePoint.GetName()) // "component_price_point"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component` | `map[string]any` | Yes |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `[]any` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `[]any` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `price_point` | `map[string]any` | No |  |
| `price_points` | `[]any` | No |  |
| `prices` | `[]any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` | No |  |
| `type` | `any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ComponentPricePoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ComponentPricePoint(nil).Create(map[string]any{
    "id": 1,
    "component": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ComponentPricePoint(nil).Update(map[string]any{
    "price_point_id": "price_point_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ComponentPricePoint(nil).Remove(map[string]any{"component_id": "component_id", "price_point_id": "price_point_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComponentPricePointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ComponentPricePointCurrencyOverageEntity

```go
componentPricePointCurrencyOverage := client.ComponentPricePointCurrencyOverage(nil)
fmt.Println(componentPricePointCurrencyOverage.GetName()) // "component_price_point_currency_overage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency_overage_prices` | `[]any` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `[]any` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `[]any` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `prices` | `[]any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` | No |  |
| `type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ComponentPricePointCurrencyOverage(nil).Load(map[string]any{"component_id": "component_id", "price_point_id": "price_point_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CouponEntity

```go
coupon := client.Coupon(nil)
fmt.Println(coupon.GetName()) // "coupon"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_negative_balance` | `bool` | No | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `float64` | No |  |
| `amount_in_cents` | `int` | No |  |
| `apply_on_cancel_at_end_of_period` | `bool` | No |  |
| `apply_on_subscription_expiration` | `bool` | No |  |
| `archived_at` | `string` | No |  |
| `code` | `string` | No |  |
| `compounding_strategy` | `any` | No |  |
| `conversion_limit` | `string` | No |  |
| `coupon` | `map[string]any` | No |  |
| `coupon_restrictions` | `[]any` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `[]any` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Coupon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Coupon(nil).Load(map[string]any{"coupon_id": 1, "product_family_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Coupon(nil).Create(map[string]any{
    "product_family_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Coupon(nil).Update(map[string]any{
    "coupon_id": 1,
    "product_family_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Coupon(nil).Remove(map[string]any{"id": 1, "subcode": "subcode"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CouponEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CouponCurrencyEntity

```go
couponCurrency := client.CouponCurrency(nil)
fmt.Println(couponCurrency.GetName()) // "coupon_currency"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CouponCurrency(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CouponCurrencyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CouponSubcodeEntity

```go
couponSubcode := client.CouponSubcode(nil)
fmt.Println(couponSubcode.GetName()) // "coupon_subcode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `[]any` | No |  |
| `duplicate_codes` | `[]any` | No |  |
| `id` | `string` | No |  |
| `invalid_codes` | `[]any` | No |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CouponSubcode(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CouponSubcodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CouponUsageEntity

```go
couponUsage := client.CouponUsage(nil)
fmt.Println(couponUsage.GetName()) // "coupon_usage"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CouponUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomFieldEntity

```go
customField := client.CustomField(nil)
fmt.Println(customField.GetName()) // "custom_field"
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
| `metadata` | `map[string]any` | No |  |
| `metafield_id` | `int` | No |  |
| `metafields` | `any` | No |  |
| `name` | `string` | No |  |
| `per_page` | `int` | No |  |
| `resource_id` | `int` | No |  |
| `scope` | `map[string]any` | No |  |
| `total_count` | `int` | No |  |
| `total_pages` | `int` | No |  |
| `value` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "resource_type": "example_resource_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomField(nil).Update(map[string]any{
    "resource_type": "resource_type",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomField(nil).Remove(map[string]any{"resource_type": "resource_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
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
| `customer` | `map[string]any` | No |  |
| `default_auto_renewal_profile_id` | `int` | No | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `string` | No |  |
| `email` | `string` | No | The email address of the customer |
| `entity_identifier_kind` | `any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Customer(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Customer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Customer(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Customer(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DelayedCancelEntity

```go
delayedCancel := client.DelayedCancel(nil)
fmt.Println(delayedCancel.GetName()) // "delayed_cancel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No |  |
| `subscription` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DelayedCancel(nil).Create(map[string]any{
    "subscription_id": 1,
    "subscription": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DelayedCancelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EndpointEntity

```go
endpoint := client.Endpoint(nil)
fmt.Println(endpoint.GetName()) // "endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `url` | `string` | No |  |
| `webhook_subscriptions` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Endpoint(nil).Update(map[string]any{
    "endpoint_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntitlementEntity

```go
entitlement := client.Entitlement(nil)
fmt.Println(entitlement.GetName()) // "entitlement"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `int` | Yes |  |
| `entitlements` | `[]any` | Yes |  |
| `status` | `string` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Entitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Event(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventsBasedBillingSegmentEntity

```go
eventsBasedBillingSegment := client.EventsBasedBillingSegment(nil)
fmt.Println(eventsBasedBillingSegment.GetName()) // "events_based_billing_segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EventsBasedBillingSegment(nil).Remove(map[string]any{"component_id": "component_id", "id": 1, "price_point_id": "price_point_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventsBasedBillingSegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureEntity

```go
feature := client.Feature(nil)
fmt.Println(feature.GetName()) // "feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `archived_count` | `int` | Yes | Number of archived feature templates matching the filters. |
| `created_at` | `string` | No |  |
| `feature` | `map[string]any` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No |  |
| `items` | `[]any` | Yes |  |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` | No |  |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Feature(nil).Create(map[string]any{
    "archived_count": 1,
    "feature": map[string]any{},
    "items": []any{},
    "total_count": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureCatalogItemEntity

```go
featureCatalogItem := client.FeatureCatalogItem(nil)
fmt.Println(featureCatalogItem.GetName()) // "feature_catalog_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `feature` | `map[string]any` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No |  |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` | No |  |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `value` | `string` | No | The value granted by this feature catalog item. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FeatureCatalogItem(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FeatureCatalogItem(nil).Create(map[string]any{
    "id": 1,
    "feature": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FeatureCatalogItem(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureCatalogItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeatureTemplateEntity

```go
featureTemplate := client.FeatureTemplate(nil)
fmt.Println(featureTemplate.GetName()) // "feature_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` | No |  |
| `default_periodicity_interval` | `int` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` | No |  |
| `default_value` | `string` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` | No |  |
| `feature` | `any` | Yes |  |
| `id` | `int` | No | The Advanced Billing id of the feature template. |
| `key` | `string` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` | No |  |
| `name` | `string` | No | The display name of the feature. |
| `plans_count` | `int` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `int` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` | No |  |
| `value_type` | `any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FeatureTemplate(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.FeatureTemplate(nil).Create(map[string]any{
    "id": 1,
    "feature": "example_feature",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FeatureTemplate(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FeatureTemplate(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeatureTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InsightEntity

```go
insight := client.Insight(nil)
fmt.Println(insight.GetName()) // "insight"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mrr` | `map[string]any` | Yes |  |
| `seller_name` | `string` | No |  |
| `site_currency` | `string` | No |  |
| `site_id` | `int` | No |  |
| `site_name` | `string` | No |  |
| `stats` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Insight(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InsightEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InvoiceEntity

```go
invoice := client.Invoice(nil)
fmt.Println(invoice.GetName()) // "invoice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `[]any` | No |  |
| `applied_amount` | `string` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `map[string]any` | No |  |
| `billing_address` | `any` | No |  |
| `branding_theme_id` | `int` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `[]any` | Yes |  |
| `credits` | `[]any` | No |  |
| `currency` | `string` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `[]any` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `int` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` | No |  |
| `debits` | `[]any` | No |  |
| `discount_amount` | `string` | No | Total discount applied to the invoice. |
| `discounts` | `[]any` | No |  |
| `display_settings` | `map[string]any` | No |  |
| `due_amount` | `string` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `int` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `int` | No |  |
| `invoice` | `map[string]any` | No |  |
| `invoices` | `[]any` | Yes |  |
| `issue_date` | `string` | No | Date the invoice was issued to the customer. |
| `line_items` | `[]any` | No | Line items on the invoice. |
| `memo` | `string` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `int` | No |  |
| `number` | `string` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `[]any` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | No | Date the invoice became fully paid. |
| `paid_invoices` | `[]any` | No |  |
| `parent_invoice_id` | `int` | No |  |
| `parent_invoice_number` | `int` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `map[string]any` | No |  |
| `payment_instructions` | `string` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `[]any` | No |  |
| `prepayment` | `string` | No |  |
| `previous_balance_data` | `map[string]any` | No |  |
| `product_family_name` | `string` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | No | The public URL of the invoice |
| `public_url_expires_on` | `string` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `[]any` | No |  |
| `refund_amount` | `string` | No |  |
| `refunds` | `[]any` | No |  |
| `remaining_amount` | `string` | No | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `string` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `int` | No | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `any` | No |  |
| `site_id` | `int` | No | ID of the site to which the invoice belongs. |
| `status` | `any` | No |  |
| `subscription_group_id` | `int` | No |  |
| `subscription_id` | `int` | No | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `string` | No | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `string` | No | Total tax on the invoice. |
| `taxes` | `[]any` | No |  |
| `total_amount` | `string` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` | No |  |
| `uid` | `string` | No | Unique identifier for the invoice. |
| `updated_at` | `string` | No |  |
| `void` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Invoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Invoice(nil).Create(map[string]any{
    "subscription_id": 1,
    "credit_notes": []any{},
    "invoices": []any{},
    "void": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Invoice(nil).Update(map[string]any{
    "subscription_id": 1,
    "uid": "uid",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Invoice(nil).Remove(map[string]any{"subscription_id": 1, "uid": "uid"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListProformaInvoiceEntity

```go
listProformaInvoice := client.ListProformaInvoice(nil)
fmt.Println(listProformaInvoice.GetName()) // "list_proforma_invoice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `map[string]any` | No |  |
| `billing_address` | `map[string]any` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `[]any` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `[]any` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `int` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `[]any` | No |  |
| `due_amount` | `string` | No |  |
| `line_items` | `[]any` | No |  |
| `memo` | `string` | No |  |
| `number` | `int` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `[]any` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `int` | No |  |
| `shipping_address` | `map[string]any` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `int` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `[]any` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListProformaInvoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListProformaInvoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSaleRepItemEntity

```go
listSaleRepItem := client.ListSaleRepItem(nil)
fmt.Println(listSaleRepItem.GetName()) // "list_sale_rep_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `int` | No |  |
| `mrr_data` | `map[string]any` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListSaleRepItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSaleRepItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListSegmentEntity

```go
listSegment := client.ListSegment(nil)
fmt.Println(listSegment.GetName()) // "list_segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `[]any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `segments` | `[]any` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ListSegment(nil).Create(map[string]any{
    "component_id": "example_component_id",
    "price_point_id": "example_price_point_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ListSegment(nil).Update(map[string]any{
    "component_id": "component_id",
    "price_point_id": "price_point_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListSegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OfferEntity

```go
offer := client.Offer(nil)
fmt.Println(offer.GetName()) // "offer"
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
| `offer` | `map[string]any` | No |  |
| `offer_discounts` | `[]any` | No |  |
| `offer_items` | `[]any` | No |  |
| `offer_signup_pages` | `[]any` | No |  |
| `offers` | `[]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Offer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Offer(nil).Load(map[string]any{"offer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Offer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Offer(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OfferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OneTimeTokenEntity

```go
oneTimeToken := client.OneTimeToken(nil)
fmt.Println(oneTimeToken.GetName()) // "one_time_token"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OneTimeToken(nil).Load(map[string]any{"chargify_token": "chargify_token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OneTimeTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PaymentProfileEntity

```go
paymentProfile := client.PaymentProfile(nil)
fmt.Println(paymentProfile.GetName()) // "payment_profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `payment_profile` | `map[string]any` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `payment_profile` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PaymentProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PaymentProfile(nil).Load(map[string]any{"payment_profile_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PaymentProfile(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PaymentProfile(nil).Update(map[string]any{
    "bank_account_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.PaymentProfile(nil).Remove(map[string]any{"payment_profile_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PaymentProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PrepaymentEntity

```go
prepayment := client.Prepayment(nil)
fmt.Println(prepayment.GetName()) // "prepayment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Prepayment(nil).Create(map[string]any{
    "id": 1,
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PrepaymentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductEntity

```go
product := client.Product(nil)
fmt.Println(product.GetName()) // "product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `product` | - | - | Yes | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Product(nil).Load(map[string]any{"api_handle": "api_handle"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Product(nil).Create(map[string]any{
    "product_family_id": "example_product_family_id",
    "product": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Product(nil).Update(map[string]any{
    "product_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Product(nil).Remove(map[string]any{"product_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductFamilyEntity

```go
productFamily := client.ProductFamily(nil)
fmt.Println(productFamily.GetName()) // "product_family"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `product_family` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProductFamily(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProductFamily(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProductFamily(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductFamilyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductFeatureEntity

```go
productFeature := client.ProductFeature(nil)
fmt.Println(productFeature.GetName()) // "product_feature"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProductFeature(nil).Remove(map[string]any{"id": 1, "product_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProductPricePointEntity

```go
productPricePoint := client.ProductPricePoint(nil)
fmt.Println(productPricePoint.GetName()) // "product_price_point"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `price_point` | `map[string]any` | Yes |  |
| `price_points` | `[]any` | No |  |
| `product` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `price_point` | - | - | Yes | Yes | - |
| `price_points` | - | Yes | - | - | - |
| `product` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProductPricePoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ProductPricePoint(nil).Load(map[string]any{"price_point_id": "price_point_id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProductPricePoint(nil).Create(map[string]any{
    "id": "example_id",
    "price_point": map[string]any{},
    "product": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ProductPricePoint(nil).Update(map[string]any{
    "price_point_id": "price_point_id",
    "product_id": "product_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ProductPricePoint(nil).Remove(map[string]any{"price_point_id": "price_point_id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProductPricePointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProformaInvoiceEntity

```go
proformaInvoice := client.ProformaInvoice(nil)
fmt.Println(proformaInvoice.GetName()) // "proforma_invoice"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `map[string]any` | No |  |
| `billing_address` | `map[string]any` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `[]any` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `[]any` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `int` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `[]any` | No |  |
| `due_amount` | `string` | No |  |
| `id` | `string` | No |  |
| `line_items` | `[]any` | No |  |
| `memo` | `string` | No |  |
| `number` | `int` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `[]any` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `int` | No |  |
| `shipping_address` | `map[string]any` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `int` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `[]any` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProformaInvoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ProformaInvoice(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProformaInvoiceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReasonCodeEntity

```go
reasonCode := client.ReasonCode(nil)
fmt.Println(reasonCode.GetName()) // "reason_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `int` | No |  |
| `position` | `int` | No |  |
| `reason_code` | `map[string]any` | Yes |  |
| `site_id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReasonCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReasonCode(nil).Load(map[string]any{"reason_code_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReasonCode(nil).Create(map[string]any{
    "reason_code": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReasonCode(nil).Update(map[string]any{
    "reason_code_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ReasonCode(nil).Remove(map[string]any{"reason_code_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReasonCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReferralCodeEntity

```go
referralCode := client.ReferralCode(nil)
fmt.Println(referralCode.GetName()) // "referral_code"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReferralCode(nil).Load(map[string]any{"code": "code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReferralCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SaleRepSettingEntity

```go
saleRepSetting := client.SaleRepSetting(nil)
fmt.Println(saleRepSetting.GetName()) // "sale_rep_setting"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SaleRepSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SaleRepSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SalesCommissionEntity

```go
salesCommission := client.SalesCommission(nil)
fmt.Println(salesCommission.GetName()) // "sales_commission"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `int` | No |  |
| `subscriptions` | `[]any` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SalesCommission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SalesCommissionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SegmentEntity

```go
segment := client.Segment(nil)
fmt.Println(segment.GetName()) // "segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `[]any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Segment(nil).Create(map[string]any{
    "component_id": "example_component_id",
    "price_point_id": "example_price_point_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Segment(nil).Update(map[string]any{
    "component_id": "component_id",
    "id": 1,
    "price_point_id": "price_point_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SignupProformaPreviewEntity

```go
signupProformaPreview := client.SignupProformaPreview(nil)
fmt.Println(signupProformaPreview.GetName()) // "signup_proforma_preview"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SignupProformaPreview(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SignupProformaPreviewEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SiteEntity

```go
site := client.Site(nil)
fmt.Println(site.GetName()) // "site"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chargify_js_keys` | `[]any` | No |  |
| `meta` | `map[string]any` | No |  |
| `site` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Site(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Site(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Site(nil).Create(map[string]any{
    "site": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionEntity

```go
subscription := client.Subscription(nil)
fmt.Println(subscription.GetName()) // "subscription"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `string` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `int` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `map[string]any` | Yes |  |
| `cancel_at_end_of_period` | `bool` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `any` | No |  |
| `coupon_code` | `string` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `[]any` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `int` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `int` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `[]any` | No | Additional coupon data. |
| `created_at` | `string` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `int` | No |  |
| `credit_card` | `any` | No |  |
| `currency` | `string` | No |  |
| `current_billing_amount_in_cents` | `int` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `map[string]any` | No |  |
| `delayed_cancel_at` | `string` | No | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `bool` | No | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `string` | No | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `string` | No | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `any` | No |  |
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
| `payment_collection_method` | `any` | No |  |
| `payment_type` | `string` | No | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `any` | No |  |
| `prepaid_dunning` | `bool` | No | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `int` | No |  |
| `previous_state` | `any` | No |  |
| `product` | `map[string]any` | No |  |
| `product_price_in_cents` | `int` | No | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `int` | No | The product price point currently subscribed to. |
| `product_price_point_type` | `any` | No |  |
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
| `state` | `any` | No |  |
| `stored_credential_transaction_id` | `int` | No | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `map[string]any` | No |  |
| `total_revenue_in_cents` | `int` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | No | The date of last update for this subscription |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Subscription(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Subscription(nil).Create(map[string]any{
    "bank_account": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Subscription(nil).Update(map[string]any{
    "subscription_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Subscription(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionComponentEntity

```go
subscriptionComponent := client.SubscriptionComponent(nil)
fmt.Println(subscriptionComponent.GetName()) // "subscription_component"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | `any` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `map[string]any` | No |  |
| `allocation_preview` | `map[string]any` | No |  |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived_at` | `string` | No |  |
| `component` | `map[string]any` | No |  |
| `component_handle` | `string` | No |  |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No |  |
| `currency` | `string` | No |  |
| `description` | `string` | No |  |
| `display_on_hosted_page` | `bool` | No |  |
| `downgrade_credit` | `any` | No |  |
| `enabled` | `bool` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `[]any` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `kind` | `any` | No |  |
| `name` | `string` | No |  |
| `price_point_handle` | `string` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_name` | `string` | No |  |
| `price_point_type` | `any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `product_family_handle` | `string` | No |  |
| `product_family_id` | `int` | No |  |
| `recurring` | `bool` | No |  |
| `subscription` | `map[string]any` | No |  |
| `subscription_id` | `int` | No |  |
| `unit_balance` | `any` | No |  |
| `unit_name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upgrade_charge` | `any` | No |  |
| `usage` | `map[string]any` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionComponent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionComponent(nil).Load(map[string]any{"component_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionComponent(nil).Create(map[string]any{
    "api_handle": "example_api_handle",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriptionComponent(nil).Update(map[string]any{
    "allocation_id": 1,
    "component_id": 1,
    "subscription_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionComponent(nil).Remove(map[string]any{"allocation_id": 1, "component_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionComponentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionGroupEntity

```go
subscriptionGroup := client.SubscriptionGroup(nil)
fmt.Println(subscriptionGroup.GetName()) // "subscription_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `meta` | `map[string]any` | No |  |
| `subscription_group` | `map[string]any` | No |  |
| `subscription_groups` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionGroup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriptionGroup(nil).Update(map[string]any{
    "uid": "uid",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionGroup(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionGroupInvoiceAccountEntity

```go
subscriptionGroupInvoiceAccount := client.SubscriptionGroupInvoiceAccount(nil)
fmt.Println(subscriptionGroupInvoiceAccount.GetName()) // "subscription_group_invoice_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionGroupInvoiceAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionGroupInvoiceAccount(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionGroupSignupEntity

```go
subscriptionGroupSignup := client.SubscriptionGroupSignup(nil)
fmt.Println(subscriptionGroupSignup.GetName()) // "subscription_group_signup"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionGroupSignup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionGroupSignupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionGroupStatusEntity

```go
subscriptionGroupStatus := client.SubscriptionGroupStatus(nil)
fmt.Println(subscriptionGroupStatus.GetName()) // "subscription_group_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionGroupStatus(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionGroupStatus(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionGroupStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionInvoiceAccountEntity

```go
subscriptionInvoiceAccount := client.SubscriptionInvoiceAccount(nil)
fmt.Println(subscriptionInvoiceAccount.GetName()) // "subscription_invoice_account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `service_credits` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionInvoiceAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionInvoiceAccount(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionMrrEntity

```go
subscriptionMrr := client.SubscriptionMrr(nil)
fmt.Println(subscriptionMrr.GetName()) // "subscription_mrr"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `map[string]any` | Yes |  |
| `mrr_amount_in_cents` | `int` | Yes |  |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionMrr(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionMrrEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionNoteEntity

```go
subscriptionNote := client.SubscriptionNote(nil)
fmt.Println(subscriptionNote.GetName()) // "subscription_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `int` | No |  |
| `note` | `map[string]any` | Yes |  |
| `sticky` | `bool` | No |  |
| `subscription_id` | `int` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionNote(nil).Load(map[string]any{"note_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionNote(nil).Create(map[string]any{
    "id": 1,
    "note": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriptionNote(nil).Update(map[string]any{
    "note_id": 1,
    "subscription_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionNote(nil).Remove(map[string]any{"note_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionNoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionProductEntity

```go
subscriptionProduct := client.SubscriptionProduct(nil)
fmt.Println(subscriptionProduct.GetName()) // "subscription_product"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `migration` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionProduct(nil).Create(map[string]any{
    "subscription_id": 1,
    "migration": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionProductEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionRenewalEntity

```go
subscriptionRenewal := client.SubscriptionRenewal(nil)
fmt.Println(subscriptionRenewal.GetName()) // "subscription_renewal"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scheduled_renewal_configuration` | `map[string]any` | No |  |
| `scheduled_renewal_configuration_item` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionRenewal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionRenewal(nil).Load(map[string]any{"id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionRenewal(nil).Create(map[string]any{
    "scheduled_renewal_id": 1,
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriptionRenewal(nil).Update(map[string]any{
    "id": 1,
    "subscription_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionRenewal(nil).Remove(map[string]any{"id": 1, "scheduled_renewal_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionRenewalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionStatusEntity

```go
subscriptionStatus := client.SubscriptionStatus(nil)
fmt.Println(subscriptionStatus.GetName()) // "subscription_status"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `renewal_preview` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SubscriptionStatus(nil).Create(map[string]any{
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SubscriptionStatus(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SubscriptionStatus(nil).Remove(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionStatusEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageEntity

```go
usage := client.Usage(nil)
fmt.Println(usage.GetName()) // "usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `map[string]any` | No |  |
| `webhook` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Webhook(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewMaxioAdvancedBillingSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

