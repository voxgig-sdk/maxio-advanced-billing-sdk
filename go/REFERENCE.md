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
| `accounting_code` | `string` | No | E.g. |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived` | `bool` | No | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `string` | No | Timestamp indicating when this component was archived |
| `component` | `map[string]any` | No |  |
| `created_at` | `string` | No | Timestamp indicating when this component was created |
| `default_price_point_id` | `int` | No |  |
| `default_price_point_name` | `string` | No |  |
| `description` | `string` | No | The description of the component. |
| `downgrade_credit` | `any` | No |  |
| `event_based_billing_metric_id` | `int` | No | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `features` | `[]any` | No | The active feature catalog items attached to this component. |
| `handle` | `string` | No | The component API handle |
| `hide_date_range_on_invoice` | `bool` | No | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `int` | No | The unique ID assigned to the component by Chargify. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `item_category` | `any` | No |  |
| `kind` | `any` | No |  |
| `name` | `string` | No | The name of the Component, suitable for display on statements. |
| `overage_prices` | `[]any` | No | Applicable only to prepaid usage components. |
| `price_per_unit_in_cents` | `int` | No | deprecated - use unit_price instead. |
| `price_point_count` | `int` | No | Count for the number of price points associated with the component |
| `price_points_url` | `string` | No | URL that points to the location to read the existing price points via GET request |
| `prices` | `[]any` | No | An array of price brackets. |
| `pricing_scheme` | `any` | No |  |
| `product_family_handle` | `string` | No | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `int` | No | The id of the Product Family to which the Component belongs |
| `product_family_name` | `string` | No | The name of the Product Family to which the Component belongs |
| `recurring` | `bool` | No |  |
| `tax_code` | `string` | No | A string representing the tax code related to the component type. |
| `taxable` | `bool` | No | Boolean flag describing whether a component is taxable or not. |
| `unit_name` | `string` | No | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `string` | No | The amount the customer will be charged per unit. |
| `unspsc_code` | `string` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `string` | No | Timestamp indicating when this component was updated |
| `upgrade_charge` | `any` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accounting_code` | - | - | - | - | - |
| `allow_fractional_quantities` | - | - | - | - | - |
| `archived` | - | - | - | - | - |
| `archived_at` | - | - | - | - | - |
| `component` | - | Yes | - | - | - |
| `created_at` | - | - | - | - | - |
| `default_price_point_id` | - | - | - | - | - |
| `default_price_point_name` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `downgrade_credit` | - | - | - | - | - |
| `event_based_billing_metric_id` | - | - | - | - | - |
| `features` | - | - | - | - | - |
| `handle` | - | - | - | - | - |
| `hide_date_range_on_invoice` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `interval` | - | - | - | - | - |
| `interval_unit` | - | - | - | - | - |
| `item_category` | - | - | - | - | - |
| `kind` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `overage_prices` | - | - | - | - | - |
| `price_per_unit_in_cents` | - | - | - | - | - |
| `price_point_count` | - | - | - | - | - |
| `price_points_url` | - | - | - | - | - |
| `prices` | - | - | - | - | - |
| `pricing_scheme` | - | - | - | - | - |
| `product_family_handle` | - | - | - | - | - |
| `product_family_id` | - | - | - | - | - |
| `product_family_name` | - | - | - | - | - |
| `recurring` | - | - | - | - | - |
| `tax_code` | - | - | - | - | - |
| `taxable` | - | - | - | - | - |
| `unit_name` | - | - | - | - | - |
| `unit_price` | - | - | - | - | - |
| `unspsc_code` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `upgrade_charge` | - | - | - | - | - |
| `use_site_exchange_rate` | - | - | - | - | - |

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
| `accounting_code` | `string` | No | E.g. |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived` | `bool` | No | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `string` | No | Timestamp indicating when this component was archived |
| `component_id` | `int` | No |  |
| `created_at` | `string` | No | Timestamp indicating when this component was created |
| `currency_prices` | `[]any` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `default_price_point_id` | `int` | No |  |
| `default_price_point_name` | `string` | No |  |
| `description` | `string` | No | The description of the component. |
| `downgrade_credit` | `any` | No |  |
| `event_based_billing_metric_id` | `int` | No | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `features` | `[]any` | No | The active feature catalog items attached to this component. |
| `handle` | `string` | No | The component API handle |
| `hide_date_range_on_invoice` | `bool` | No | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `int` | No | The unique ID assigned to the component by Chargify. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `item_category` | `any` | No |  |
| `kind` | `any` | No |  |
| `name` | `string` | No | The name of the Component, suitable for display on statements. |
| `overage_prices` | `[]any` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `price_per_unit_in_cents` | `int` | No | deprecated - use unit_price instead. |
| `price_point` | `map[string]any` | No |  |
| `price_point_count` | `int` | No | Count for the number of price points associated with the component |
| `price_points` | `[]any` | No |  |
| `price_points_url` | `string` | No | URL that points to the location to read the existing price points via GET request |
| `prices` | `[]any` | No | An array of price brackets. |
| `pricing_scheme` | `any` | No |  |
| `product_family_handle` | `string` | No | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `int` | No | The id of the Product Family to which the Component belongs |
| `product_family_name` | `string` | No | The name of the Product Family to which the Component belongs |
| `recurring` | `bool` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_code` | `string` | No | A string representing the tax code related to the component type. |
| `tax_included` | `bool` | No |  |
| `taxable` | `bool` | No | Boolean flag describing whether a component is taxable or not. |
| `type` | `any` | No |  |
| `unit_name` | `string` | No | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `string` | No | The amount the customer will be charged per unit. |
| `unspsc_code` | `string` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `string` | No | Timestamp indicating when this component was updated |
| `upgrade_charge` | `any` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

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
| `data_count` | `int` | No | The amount of subscriptions this metafield has been applied to in Advanced Billing. |
| `deleted_at` | `string` | No |  |
| `enum` | `string` | No |  |
| `id` | `int` | No |  |
| `input_type` | `string` | No |  |
| `metadata` | `map[string]any` | No |  |
| `metafield_id` | `int` | No |  |
| `metafields` | `any` | No |  |
| `name` | `string` | No |  |
| `resource_id` | `int` | No |  |
| `scope` | `map[string]any` | No |  |
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
| `customer` | `map[string]any` | Yes |  |
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
    "customer": map[string]any{},
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
| `archived_at` | `string` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` | No |  |
| `default_periodicity_interval` | `int` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` | No |  |
| `default_value` | `string` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` | No |  |
| `feature` | `map[string]any` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No | The Advanced Billing id of the feature template. |
| `key` | `string` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` | No |  |
| `name` | `string` | No | The display name of the feature. |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` | No |  |
| `plans_count` | `int` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` | No |  |
| `products_count` | `int` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` | No |  |
| `value` | `string` | No | The value granted by this feature catalog item. |
| `value_type` | `any` | No |  |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `archived_at` | - | - |
| `created_at` | - | - |
| `default_periodicity_interval` | - | - |
| `default_periodicity_unit` | - | - |
| `default_value` | - | - |
| `description` | - | - |
| `feature` | - | Yes |
| `feature_key` | - | - |
| `feature_kind` | - | - |
| `feature_name` | - | - |
| `feature_template_id` | - | - |
| `id` | - | - |
| `key` | - | - |
| `kind` | - | - |
| `name` | - | - |
| `periodicity_interval` | - | - |
| `periodicity_unit` | - | - |
| `plans_count` | - | - |
| `price_point_id` | - | - |
| `price_point_type` | - | - |
| `products_count` | - | - |
| `unit` | - | - |
| `updated_at` | - | - |
| `value` | - | - |
| `value_type` | - | - |

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
    "feature": map[string]any{},
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
| `amount_formatted` | `string` | No |  |
| `amount_in_cents` | `int` | No |  |
| `at_time` | `string` | No | ISO8601 timestamp |
| `breakouts` | `map[string]any` | No |  |
| `currency` | `string` | No |  |
| `currency_symbol` | `string` | No |  |
| `movements` | `[]any` | No |  |
| `page` | `int` | No |  |
| `per_page` | `int` | No |  |
| `seller_name` | `string` | No |  |
| `site_currency` | `string` | No |  |
| `site_id` | `int` | No |  |
| `site_name` | `string` | No |  |
| `stats` | `map[string]any` | No |  |
| `total_entries` | `int` | No |  |
| `total_pages` | `int` | No |  |

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
| `bank_account_holder_type` | `any` | No |  |
| `bank_account_type` | `any` | No |  |
| `bank_name` | `string` | No | The bank where the account resides |
| `billing_address` | `string` | No | The current billing street address for the bank account |
| `billing_address_2` | `string` | No | The current billing street address, second line, for the bank account |
| `billing_city` | `string` | No | The current billing address city for the bank account |
| `billing_country` | `string` | No | The current billing address country for the bank account |
| `billing_state` | `string` | No | The current billing address state for the bank account |
| `billing_zip` | `string` | No | The current billing address zip code for the bank account |
| `card_type` | `string` | No |  |
| `created_at` | `string` | No | A timestamp indicating when this payment profile was created |
| `current_vault` | `string` | No |  |
| `customer_id` | `int` | No | The Chargify-assigned ID for the customer record to which the bank account belongs |
| `customer_vault_token` | `string` | No | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `disabled` | `bool` | No |  |
| `expiration_month` | `int` | No |  |
| `expiration_year` | `int` | No |  |
| `first_name` | `string` | No | The first name of the bank account holder |
| `gateway_handle` | `string` | No |  |
| `id` | `int` | No | The Chargify-assigned ID of the stored bank account. |
| `last_name` | `string` | No | The last name of the bank account holder |
| `masked_bank_account_number` | `string` | No | A string representation of the stored bank account number with all but the last 4 digits marked with X's (i.e. |
| `masked_bank_routing_number` | `string` | No | A string representation of the stored bank routing number with all but the last 4 digits marked with X's (i.e. |
| `masked_card_number` | `string` | No |  |
| `payment_profile` | `any` | Yes |  |
| `payment_type` | `string` | No |  |
| `site_gateway_setting_id` | `int` | No |  |
| `updated_at` | `string` | No | A timestamp indicating when this payment profile was last updated |
| `vault_token` | `string` | No | The "token" provided by your vault storage for an already stored payment profile |
| `verified` | `bool` | No | Denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `bank_account_holder_type` | - | - | - | - | - |
| `bank_account_type` | - | - | - | - | - |
| `bank_name` | - | - | - | - | - |
| `billing_address` | - | - | - | - | - |
| `billing_address_2` | - | - | - | - | - |
| `billing_city` | - | - | - | - | - |
| `billing_country` | - | - | - | - | - |
| `billing_state` | - | - | - | - | - |
| `billing_zip` | - | - | - | - | - |
| `card_type` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `current_vault` | - | - | - | - | - |
| `customer_id` | - | - | - | - | - |
| `customer_vault_token` | - | - | - | - | - |
| `disabled` | - | - | - | - | - |
| `expiration_month` | - | - | - | - | - |
| `expiration_year` | - | - | - | - | - |
| `first_name` | - | - | - | - | - |
| `gateway_handle` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_name` | - | - | - | - | - |
| `masked_bank_account_number` | - | - | - | - | - |
| `masked_bank_routing_number` | - | - | - | - | - |
| `masked_card_number` | - | - | - | - | - |
| `payment_profile` | - | - | - | - | - |
| `payment_type` | - | - | - | Yes | - |
| `site_gateway_setting_id` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `vault_token` | - | - | - | - | - |
| `verified` | - | - | - | - | - |

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
    "payment_profile": "example_payment_profile",
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
| `accounting_code` | `string` | No | E.g., Internal ID or SKU Number |
| `archived_at` | `string` | No | Timestamp indicating when this product was archived |
| `created_at` | `string` | No | Timestamp indicating when this product was created |
| `default_product_price_point_id` | `int` | No |  |
| `description` | `string` | No | The product description |
| `expiration_interval` | `int` | No | A numerical interval for the length a subscription to this product will run before it expires. |
| `expiration_interval_unit` | `any` | No |  |
| `features` | `[]any` | No | The active feature catalog items attached to this product. |
| `handle` | `string` | No | The product API handle |
| `id` | `int` | No |  |
| `initial_charge_after_trial` | `bool` | No |  |
| `initial_charge_in_cents` | `int` | No | The up front charge you have specified. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `item_category` | `string` | No | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `string` | No | The product name |
| `price_in_cents` | `int` | No | The product price, in integer cents |
| `product` | `map[string]any` | No |  |
| `product_family` | `map[string]any` | No |  |
| `product_price_point_handle` | `string` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `string` | No |  |
| `public_signup_pages` | `[]any` | No |  |
| `request_billing_address` | `bool` | No | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `bool` | No | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `bool` | No | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `bool` | No | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `bool` | No | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `string` | No |  |
| `tax_code` | `string` | No | A string representing the tax code related to the product type. |
| `taxable` | `bool` | No |  |
| `trial_interval` | `int` | No | A numerical interval for the length of the trial period of a subscription to this product. |
| `trial_interval_unit` | `any` | No |  |
| `trial_price_in_cents` | `int` | No | The price of the trial period for a subscription to this product, in integer cents. |
| `unspsc_code` | `string` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `string` | No | The parameters will append to the url after a successful account update. |
| `update_return_url` | `string` | No | The url to which a customer will be returned after a successful account update |
| `updated_at` | `string` | No | Timestamp indicating when this product was last updated |
| `use_site_exchange_rate` | `bool` | No |  |
| `version_number` | `int` | No | The version of the product |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `accounting_code` | - | - | - | - | - |
| `archived_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `default_product_price_point_id` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `expiration_interval` | - | - | - | - | - |
| `expiration_interval_unit` | - | - | - | - | - |
| `features` | - | - | - | - | - |
| `handle` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `initial_charge_after_trial` | - | - | - | - | - |
| `initial_charge_in_cents` | - | - | - | - | - |
| `interval` | - | - | - | - | - |
| `interval_unit` | - | - | - | - | - |
| `item_category` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `price_in_cents` | - | - | - | - | - |
| `product` | - | Yes | - | - | - |
| `product_family` | - | - | - | - | - |
| `product_price_point_handle` | - | - | - | - | - |
| `product_price_point_id` | - | - | - | - | - |
| `product_price_point_name` | - | - | - | - | - |
| `public_signup_pages` | - | - | - | - | - |
| `request_billing_address` | - | - | - | - | - |
| `request_credit_card` | - | - | - | - | - |
| `require_billing_address` | - | - | - | - | - |
| `require_credit_card` | - | - | - | - | - |
| `require_shipping_address` | - | - | - | - | - |
| `return_params` | - | - | - | - | - |
| `tax_code` | - | - | - | - | - |
| `taxable` | - | - | - | - | - |
| `trial_interval` | - | - | - | - | - |
| `trial_interval_unit` | - | - | - | - | - |
| `trial_price_in_cents` | - | - | - | - | - |
| `unspsc_code` | - | - | - | - | - |
| `update_return_params` | - | - | - | - | - |
| `update_return_url` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `use_site_exchange_rate` | - | - | - | - | - |
| `version_number` | - | - | - | - | - |

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
| `accounting_code` | `string` | No |  |
| `archived_at` | `string` | No | Timestamp indicating when this product family was archived. |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `handle` | `string` | No |  |
| `id` | `int` | No |  |
| `name` | `string` | No |  |
| `product_family` | `map[string]any` | No |  |
| `surcharging` | `bool` | No | Whether surcharging applies to this product family. |
| `updated_at` | `string` | No |  |

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
| `accounting_code` | `string` | No | E.g., Internal ID or SKU Number |
| `archived_at` | `string` | No | Timestamp indicating when this price point was archived |
| `created_at` | `string` | No | Timestamp indicating when this price point was created |
| `currency_prices` | `[]any` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default_product_price_point_id` | `int` | No |  |
| `description` | `string` | No | The product description |
| `expiration_interval` | `int` | No | The numerical expiration interval. |
| `expiration_interval_unit` | `any` | No |  |
| `features` | `[]any` | No | The active feature catalog items attached to this product. |
| `handle` | `string` | No | The product price point API handle |
| `id` | `int` | No |  |
| `initial_charge_after_trial` | `bool` | No |  |
| `initial_charge_in_cents` | `int` | No | The product price point initial charge, in integer cents |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `introductory_offer` | `bool` | No | reserved for future use |
| `item_category` | `string` | No | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `string` | No | The product price point name |
| `price_in_cents` | `int` | No | The product price point price, in integer cents |
| `price_point` | `map[string]any` | No |  |
| `price_points` | `[]any` | No |  |
| `product_family` | `map[string]any` | No |  |
| `product_id` | `int` | No | The product id this price point belongs to |
| `product_price_point_handle` | `string` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `string` | No |  |
| `public_signup_pages` | `[]any` | No |  |
| `request_billing_address` | `bool` | No | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `bool` | No | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `bool` | No | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `bool` | No | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `bool` | No | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `string` | No |  |
| `subscription_id` | `int` | No | The subscription id this price point belongs to |
| `tax_code` | `string` | No | A string representing the tax code related to the product type. |
| `tax_included` | `bool` | No | Whether or not the price point includes tax |
| `taxable` | `bool` | No |  |
| `trial_interval` | `int` | No | The numerical trial interval. |
| `trial_interval_unit` | `any` | No |  |
| `trial_price_in_cents` | `int` | No | The product price point trial price, in integer cents |
| `trial_type` | `any` | No |  |
| `type` | `any` | No |  |
| `unspsc_code` | `string` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `string` | No | The parameters will append to the url after a successful account update. |
| `update_return_url` | `string` | No | The url to which a customer will be returned after a successful account update |
| `updated_at` | `string` | No | Timestamp indicating when this price point was last updated |
| `use_site_exchange_rate` | `bool` | No | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `version_number` | `int` | No | The version of the product |

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

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `subscription_id` | `int` | No |  |

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
| `allocation_settings` | `map[string]any` | No |  |
| `auto_renewals_enabled` | `bool` | No | Whether the auto-renewals feature is enabled for this site. |
| `created_at` | `string` | No |  |
| `currency` | `string` | No |  |
| `customer_hierarchy_enabled` | `bool` | No |  |
| `default_payment_collection_method` | `string` | No |  |
| `id` | `int` | No |  |
| `multi_frequency_enabled` | `bool` | No | Whether the site has the multi-frequency billing feature enabled. |
| `name` | `string` | No |  |
| `net_terms` | `map[string]any` | No |  |
| `non_primary_currencies` | `[]any` | No |  |
| `organization_address` | `map[string]any` | No |  |
| `portal_enabled` | `bool` | No | Whether the Billing Portal is enabled for this site. |
| `public_key` | `string` | No |  |
| `relationship_invoicing_enabled` | `bool` | No |  |
| `requires_security_token` | `bool` | No |  |
| `schedule_subscription_cancellation_enabled` | `bool` | No |  |
| `seller_id` | `int` | No |  |
| `subdomain` | `string` | No |  |
| `tax_configuration` | `map[string]any` | No |  |
| `test` | `bool` | No |  |
| `whopays_default_payer` | `string` | No |  |
| `whopays_enabled` | `bool` | No |  |

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
result, err := client.Site(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Site(nil).Create(map[string]any{
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
| `accrue_charge` | `bool` | No | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `allocated_quantity` | `any` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation_id` | `int` | No | The allocation unique ID |
| `allocations` | `[]any` | No |  |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived_at` | `string` | No |  |
| `charge_id` | `int` | No |  |
| `component` | `map[string]any` | No |  |
| `component_handle` | `string` | No | The handle of the component. |
| `component_id` | `int` | No | The integer component ID for the allocation. |
| `created_at` | `string` | No | Timestamp indicating when this allocation was created |
| `currency` | `string` | No |  |
| `description` | `string` | No |  |
| `direction` | `string` | No |  |
| `display_on_hosted_page` | `bool` | No |  |
| `downgrade_credit` | `any` | No |  |
| `enabled` | `bool` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `end_date` | `string` | No |  |
| `existing_balance_in_cents` | `int` | No | An integer representing the amount of the subscription's current balance |
| `expires_at` | `string` | No |  |
| `historic_usages` | `[]any` | No |  |
| `id` | `int` | No |  |
| `initiate_dunning` | `bool` | No | If true, if the immediate component payment fails, initiate dunning for the subscription. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `kind` | `any` | No |  |
| `line_items` | `[]any` | No |  |
| `memo` | `string` | No | The memo passed when the allocation was created |
| `name` | `string` | No |  |
| `overage_quantity` | `int` | No |  |
| `payment` | `any` | No |  |
| `period_type` | `string` | No |  |
| `previous_price_point_id` | `int` | No |  |
| `previous_quantity` | `any` | No | The allocated quantity that was in effect before this allocation was created. |
| `price_point_handle` | `string` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_name` | `string` | No |  |
| `price_point_type` | `any` | No |  |
| `pricing_scheme` | `any` | No |  |
| `product_family_handle` | `string` | No |  |
| `product_family_id` | `int` | No |  |
| `proration_downgrade_scheme` | `string` | No | The scheme used if the proration was a downgrade. |
| `proration_scheme` | `string` | No |  |
| `proration_upgrade_scheme` | `string` | No | The scheme used if the proration was an upgrade. |
| `quantity` | `any` | No | The allocated quantity set into effect by the allocation. |
| `recurring` | `bool` | No |  |
| `start_date` | `string` | No |  |
| `subscription` | `any` | No |  |
| `subscription_id` | `int` | No | The integer subscription ID for the allocation. |
| `subtotal_in_cents` | `int` | No |  |
| `timestamp` | `string` | No | The time that the allocation was recorded, in ISO 8601 format and UTC timezone, e.g., 2012-11-20T22:00:37Z |
| `total_discount_in_cents` | `int` | No |  |
| `total_in_cents` | `int` | No |  |
| `total_tax_in_cents` | `int` | No |  |
| `unit_balance` | `any` | No |  |
| `unit_name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upgrade_charge` | `any` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |
| `used_quantity` | `int` | No |  |

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
| `account_balances` | `map[string]any` | No |  |
| `cancel_at_end_of_period` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `customer_id` | `int` | No |  |
| `group_type` | `string` | No |  |
| `id` | `string` | No |  |
| `next_assessment_at` | `string` | No |  |
| `payment_collection_method` | `any` | No |  |
| `payment_profile` | `map[string]any` | No |  |
| `payment_profile_id` | `int` | No |  |
| `primary_subscription_id` | `int` | No |  |
| `scheme` | `int` | No |  |
| `state` | `string` | No |  |
| `subscription_ids` | `[]any` | No |  |
| `uid` | `string` | No |  |

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
| `amount_in_cents` | `int` | No | The amount in cents of the entry |
| `created_at` | `string` | No | The date and time the entry was created |
| `ending_balance_in_cents` | `int` | No | The new balance for the credit account |
| `entry_type` | `any` | No |  |
| `id` | `int` | No |  |
| `invoice_uid` | `string` | No | The invoice uid associated with the entry. |
| `memo` | `string` | No | The memo attached to the entry |
| `remaining_balance_in_cents` | `int` | No | The remaining balance for the entry |

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
| `charge_in_cents` | `int` | No | The amount of the charge that would be created for the new product. |
| `credit_applied_in_cents` | `int` | No | Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. |
| `id` | `string` | No |  |
| `migration` | `map[string]any` | Yes |  |
| `payment_due_in_cents` | `int` | No | The amount of the payment due in the case of an upgrade. |
| `prorated_adjustment_in_cents` | `int` | No | The amount of the prorated adjustment that would be issued for the current subscription. |

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
| `contract` | `any` | No |  |
| `created_at` | `string` | No |  |
| `decimal_quantity` | `string` | No |  |
| `ends_at` | `string` | No |  |
| `id` | `int` | No | ID of the renewal. |
| `item_id` | `int` | No |  |
| `item_subclass` | `string` | No |  |
| `item_type` | `string` | No |  |
| `lock_in_at` | `string` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_type` | `string` | No |  |
| `quantity` | `int` | No |  |
| `scheduled_renewal_configuration_item` | `map[string]any` | No |  |
| `scheduled_renewal_configuration_items` | `[]any` | No |  |
| `site_id` | `int` | No | ID of the site to which the renewal belongs. |
| `starts_at` | `string` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `int` | No | The id of the subscription. |
| `subscription_renewal_configuration_id` | `int` | No |  |

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
| `existing_balance_in_cents` | `int` | No | An integer representing the amount of the subscription’s current balance |
| `id` | `string` | No |  |
| `line_items` | `[]any` | No | An array of objects representing the individual transactions that will be created at the next renewal |
| `next_assessment_at` | `string` | No | The timestamp for the subscription’s next renewal |
| `subtotal_in_cents` | `int` | No | An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal |
| `total_amount_due_in_cents` | `int` | No | An integer representing the existing_balance_in_cents plus the total_in_cents |
| `total_discount_in_cents` | `int` | No | An integer representing the amount of the coupon discounts that will be applied to the next renewal |
| `total_in_cents` | `int` | No | An integer representing the total amount owed, less any discounts, that will be assessed at the next renewal |
| `total_tax_in_cents` | `int` | No | An integer representing the total tax charges that will be assessed at the next renewal |
| `uncalculated_taxes` | `bool` | No | A boolean indicating whether or not additional taxes will be calculated at the time of renewal. |

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
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `status` | `string` | No |  |
| `url` | `string` | No |  |
| `webhook` | `map[string]any` | No |  |
| `webhook_subscriptions` | `[]any` | No |  |

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

