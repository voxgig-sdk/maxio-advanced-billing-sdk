# MaxioAdvancedBilling Python SDK Reference

Complete API reference for the MaxioAdvancedBilling Python SDK.


## MaxioAdvancedBillingSDK

### Constructor

```python
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK

client = MaxioAdvancedBillingSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MaxioAdvancedBillingSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = MaxioAdvancedBillingSDK.test()
```


### Instance Methods

#### `AccountBalance(data=None)`

Create a new `AccountBalanceEntity` instance. Pass `None` for no initial data.

#### `Allocation(data=None)`

Create a new `AllocationEntity` instance. Pass `None` for no initial data.

#### `BatchJob(data=None)`

Create a new `BatchJobEntity` instance. Pass `None` for no initial data.

#### `BillingPortal(data=None)`

Create a new `BillingPortalEntity` instance. Pass `None` for no initial data.

#### `Component(data=None)`

Create a new `ComponentEntity` instance. Pass `None` for no initial data.

#### `ComponentFeature(data=None)`

Create a new `ComponentFeatureEntity` instance. Pass `None` for no initial data.

#### `ComponentPricePoint(data=None)`

Create a new `ComponentPricePointEntity` instance. Pass `None` for no initial data.

#### `ComponentPricePointCurrencyOverage(data=None)`

Create a new `ComponentPricePointCurrencyOverageEntity` instance. Pass `None` for no initial data.

#### `Coupon(data=None)`

Create a new `CouponEntity` instance. Pass `None` for no initial data.

#### `CouponCurrency(data=None)`

Create a new `CouponCurrencyEntity` instance. Pass `None` for no initial data.

#### `CouponSubcode(data=None)`

Create a new `CouponSubcodeEntity` instance. Pass `None` for no initial data.

#### `CouponUsage(data=None)`

Create a new `CouponUsageEntity` instance. Pass `None` for no initial data.

#### `CustomField(data=None)`

Create a new `CustomFieldEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `DelayedCancel(data=None)`

Create a new `DelayedCancelEntity` instance. Pass `None` for no initial data.

#### `Endpoint(data=None)`

Create a new `EndpointEntity` instance. Pass `None` for no initial data.

#### `Entitlement(data=None)`

Create a new `EntitlementEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `EventsBasedBillingSegment(data=None)`

Create a new `EventsBasedBillingSegmentEntity` instance. Pass `None` for no initial data.

#### `Feature(data=None)`

Create a new `FeatureEntity` instance. Pass `None` for no initial data.

#### `FeatureCatalogItem(data=None)`

Create a new `FeatureCatalogItemEntity` instance. Pass `None` for no initial data.

#### `FeatureTemplate(data=None)`

Create a new `FeatureTemplateEntity` instance. Pass `None` for no initial data.

#### `Insight(data=None)`

Create a new `InsightEntity` instance. Pass `None` for no initial data.

#### `Invoice(data=None)`

Create a new `InvoiceEntity` instance. Pass `None` for no initial data.

#### `ListSaleRepItem(data=None)`

Create a new `ListSaleRepItemEntity` instance. Pass `None` for no initial data.

#### `ListSegment(data=None)`

Create a new `ListSegmentEntity` instance. Pass `None` for no initial data.

#### `Offer(data=None)`

Create a new `OfferEntity` instance. Pass `None` for no initial data.

#### `OneTimeToken(data=None)`

Create a new `OneTimeTokenEntity` instance. Pass `None` for no initial data.

#### `PaymentProfile(data=None)`

Create a new `PaymentProfileEntity` instance. Pass `None` for no initial data.

#### `Prepayment(data=None)`

Create a new `PrepaymentEntity` instance. Pass `None` for no initial data.

#### `Product(data=None)`

Create a new `ProductEntity` instance. Pass `None` for no initial data.

#### `ProductFamily(data=None)`

Create a new `ProductFamilyEntity` instance. Pass `None` for no initial data.

#### `ProductFeature(data=None)`

Create a new `ProductFeatureEntity` instance. Pass `None` for no initial data.

#### `ProductPricePoint(data=None)`

Create a new `ProductPricePointEntity` instance. Pass `None` for no initial data.

#### `ProformaInvoice(data=None)`

Create a new `ProformaInvoiceEntity` instance. Pass `None` for no initial data.

#### `ReasonCode(data=None)`

Create a new `ReasonCodeEntity` instance. Pass `None` for no initial data.

#### `ReferralCode(data=None)`

Create a new `ReferralCodeEntity` instance. Pass `None` for no initial data.

#### `SaleRepSetting(data=None)`

Create a new `SaleRepSettingEntity` instance. Pass `None` for no initial data.

#### `SalesCommission(data=None)`

Create a new `SalesCommissionEntity` instance. Pass `None` for no initial data.

#### `Segment(data=None)`

Create a new `SegmentEntity` instance. Pass `None` for no initial data.

#### `SignupProformaPreview(data=None)`

Create a new `SignupProformaPreviewEntity` instance. Pass `None` for no initial data.

#### `Site(data=None)`

Create a new `SiteEntity` instance. Pass `None` for no initial data.

#### `Subscription(data=None)`

Create a new `SubscriptionEntity` instance. Pass `None` for no initial data.

#### `SubscriptionComponent(data=None)`

Create a new `SubscriptionComponentEntity` instance. Pass `None` for no initial data.

#### `SubscriptionGroup(data=None)`

Create a new `SubscriptionGroupEntity` instance. Pass `None` for no initial data.

#### `SubscriptionGroupInvoiceAccount(data=None)`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance. Pass `None` for no initial data.

#### `SubscriptionGroupSignup(data=None)`

Create a new `SubscriptionGroupSignupEntity` instance. Pass `None` for no initial data.

#### `SubscriptionGroupStatus(data=None)`

Create a new `SubscriptionGroupStatusEntity` instance. Pass `None` for no initial data.

#### `SubscriptionInvoiceAccount(data=None)`

Create a new `SubscriptionInvoiceAccountEntity` instance. Pass `None` for no initial data.

#### `SubscriptionMrr(data=None)`

Create a new `SubscriptionMrrEntity` instance. Pass `None` for no initial data.

#### `SubscriptionNote(data=None)`

Create a new `SubscriptionNoteEntity` instance. Pass `None` for no initial data.

#### `SubscriptionProduct(data=None)`

Create a new `SubscriptionProductEntity` instance. Pass `None` for no initial data.

#### `SubscriptionRenewal(data=None)`

Create a new `SubscriptionRenewalEntity` instance. Pass `None` for no initial data.

#### `SubscriptionStatus(data=None)`

Create a new `SubscriptionStatusEntity` instance. Pass `None` for no initial data.

#### `Usage(data=None)`

Create a new `UsageEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AccountBalanceEntity

```python
account_balance = client.AccountBalance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `open_invoices` | `Any` | No |  |
| `pending_discounts` | `Any` | No |  |
| `pending_invoices` | `Any` | No |  |
| `prepayments` | `Any` | No |  |
| `service_credits` | `Any` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccountBalance().load({"subscription_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountBalanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AllocationEntity

```python
allocation = client.Allocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Allocation().create({
    "subscription_id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Allocation().list({"component_id": 1, "subscription_id": 1})
for allocation in results:
    print(allocation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AllocationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchJobEntity

```python
batch_job = client.BatchJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `str` | No |  |
| `created_at` | `str` | No |  |
| `finished_at` | `str` | No |  |
| `id` | `int` | No |  |
| `row_count` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BatchJob().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BatchJob().load({"batch_id": "batch_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchJobEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillingPortalEntity

```python
billing_portal = client.BillingPortal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No |  |
| `expires_at` | `str` | No |  |
| `fetch_count` | `int` | No |  |
| `last_accepted_at` | `str` | No |  |
| `last_invite_accepted_at` | `str` | No |  |
| `last_invite_sent_at` | `str` | No |  |
| `last_sent_at` | `str` | No |  |
| `new_link_available_at` | `str` | No |  |
| `send_invite_link_text` | `str` | No |  |
| `uninvited_count` | `int` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillingPortal().create({
    "customer_id": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BillingPortal().load({"customer_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BillingPortal().remove({"customer_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillingPortalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComponentEntity

```python
component = client.Component()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounting_code` | `str` | No | E.g. |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived` | `bool` | No | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `str` | No | Timestamp indicating when this component was archived |
| `component` | `dict` | No |  |
| `created_at` | `str` | No | Timestamp indicating when this component was created |
| `default_price_point_id` | `int` | No |  |
| `default_price_point_name` | `str` | No |  |
| `description` | `str` | No | The description of the component. |
| `downgrade_credit` | `Any` | No |  |
| `event_based_billing_metric_id` | `int` | No | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `features` | `list` | No | The active feature catalog items attached to this component. |
| `handle` | `str` | No | The component API handle |
| `hide_date_range_on_invoice` | `bool` | No | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `int` | No | The unique ID assigned to the component by Chargify. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `item_category` | `Any` | No |  |
| `kind` | `Any` | No |  |
| `name` | `str` | No | The name of the Component, suitable for display on statements. |
| `overage_prices` | `list` | No | Applicable only to prepaid usage components. |
| `price_per_unit_in_cents` | `int` | No | deprecated - use unit_price instead. |
| `price_point_count` | `int` | No | Count for the number of price points associated with the component |
| `price_points_url` | `str` | No | URL that points to the location to read the existing price points via GET request |
| `prices` | `list` | No | An array of price brackets. |
| `pricing_scheme` | `Any` | No |  |
| `product_family_handle` | `str` | No | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `int` | No | The id of the Product Family to which the Component belongs |
| `product_family_name` | `str` | No | The name of the Product Family to which the Component belongs |
| `recurring` | `bool` | No |  |
| `tax_code` | `str` | No | A string representing the tax code related to the component type. |
| `taxable` | `bool` | No | Boolean flag describing whether a component is taxable or not. |
| `unit_name` | `str` | No | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `str` | No | The amount the customer will be charged per unit. |
| `unspsc_code` | `str` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `str` | No | Timestamp indicating when this component was updated |
| `upgrade_charge` | `Any` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Component().create({
    "product_family_id": "example_product_family_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Component().list()
for component in results:
    print(component)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Component().load({"component_id": "component_id", "product_family_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Component().remove({"component_id": "component_id", "product_family_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Component().update({
    "component_id": "component_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComponentFeatureEntity

```python
component_feature = client.ComponentFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ComponentFeature().remove({"component_id": 1, "id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComponentPricePointEntity

```python
component_price_point = client.ComponentPricePoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounting_code` | `str` | No | E.g. |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived` | `bool` | No | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `str` | No | Timestamp indicating when this component was archived |
| `component_id` | `int` | No |  |
| `created_at` | `str` | No | Timestamp indicating when this component was created |
| `currency_prices` | `list` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `default_price_point_id` | `int` | No |  |
| `default_price_point_name` | `str` | No |  |
| `description` | `str` | No | The description of the component. |
| `downgrade_credit` | `Any` | No |  |
| `event_based_billing_metric_id` | `int` | No | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Any` | No |  |
| `features` | `list` | No | The active feature catalog items attached to this component. |
| `handle` | `str` | No | The component API handle |
| `hide_date_range_on_invoice` | `bool` | No | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `int` | No | The unique ID assigned to the component by Chargify. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `item_category` | `Any` | No |  |
| `kind` | `Any` | No |  |
| `name` | `str` | No | The name of the Component, suitable for display on statements. |
| `overage_prices` | `list` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Any` | No |  |
| `price_per_unit_in_cents` | `int` | No | deprecated - use unit_price instead. |
| `price_point` | `dict` | No |  |
| `price_point_count` | `int` | No | Count for the number of price points associated with the component |
| `price_points` | `list` | No |  |
| `price_points_url` | `str` | No | URL that points to the location to read the existing price points via GET request |
| `prices` | `list` | No | An array of price brackets. |
| `pricing_scheme` | `Any` | No |  |
| `product_family_handle` | `str` | No | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `int` | No | The id of the Product Family to which the Component belongs |
| `product_family_name` | `str` | No | The name of the Product Family to which the Component belongs |
| `recurring` | `bool` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_code` | `str` | No | A string representing the tax code related to the component type. |
| `tax_included` | `bool` | No |  |
| `taxable` | `bool` | No | Boolean flag describing whether a component is taxable or not. |
| `type` | `Any` | No |  |
| `unit_name` | `str` | No | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `str` | No | The amount the customer will be charged per unit. |
| `unspsc_code` | `str` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `str` | No | Timestamp indicating when this component was updated |
| `upgrade_charge` | `Any` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ComponentPricePoint().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ComponentPricePoint().list()
for component_price_point in results:
    print(component_price_point)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ComponentPricePoint().remove({"component_id": "component_id", "price_point_id": "price_point_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ComponentPricePoint().update({
    "price_point_id": "price_point_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentPricePointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ComponentPricePointCurrencyOverageEntity

```python
component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No |  |
| `component_id` | `int` | No |  |
| `created_at` | `str` | No |  |
| `currency_overage_prices` | `list` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `list` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Any` | No |  |
| `handle` | `str` | No |  |
| `id` | `int` | No |  |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `name` | `str` | No |  |
| `overage_prices` | `list` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Any` | No |  |
| `prices` | `list` | No |  |
| `pricing_scheme` | `Any` | No |  |
| `renew_prepaid_allocation` | `bool` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` | No |  |
| `type` | `Any` | No |  |
| `updated_at` | `str` | No |  |
| `use_site_exchange_rate` | `bool` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ComponentPricePointCurrencyOverage().load({"component_id": "component_id", "price_point_id": "price_point_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CouponEntity

```python
coupon = client.Coupon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_negative_balance` | `bool` | No | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `float` | No |  |
| `amount_in_cents` | `int` | No |  |
| `apply_on_cancel_at_end_of_period` | `bool` | No |  |
| `apply_on_subscription_expiration` | `bool` | No |  |
| `archived_at` | `str` | No |  |
| `code` | `str` | No |  |
| `compounding_strategy` | `Any` | No |  |
| `conversion_limit` | `str` | No |  |
| `coupon` | `dict` | No |  |
| `coupon_restrictions` | `list` | No |  |
| `created_at` | `str` | No |  |
| `currency_prices` | `list` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `str` | No |  |
| `discount_type` | `str` | No |  |
| `duration_interval` | `int` | No |  |
| `duration_interval_span` | `str` | No |  |
| `duration_interval_unit` | `str` | No |  |
| `duration_period_count` | `int` | No |  |
| `end_date` | `str` | No | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `bool` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `percentage` | `str` | No |  |
| `product_family_id` | `int` | No |  |
| `product_family_name` | `str` | No |  |
| `recurring` | `bool` | No |  |
| `recurring_scheme` | `str` | No |  |
| `stackable` | `bool` | No | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Coupon().create({
    "product_family_id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Coupon().list()
for coupon in results:
    print(coupon)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Coupon().load({"coupon_id": 1, "product_family_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Coupon().remove({"id": 1, "subcode": "subcode"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Coupon().update({
    "coupon_id": 1,
    "product_family_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CouponCurrencyEntity

```python
coupon_currency = client.CouponCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CouponCurrency().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponCurrencyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CouponSubcodeEntity

```python
coupon_subcode = client.CouponSubcode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `list` | No |  |
| `duplicate_codes` | `list` | No |  |
| `id` | `str` | No |  |
| `invalid_codes` | `list` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CouponSubcode().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponSubcodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CouponUsageEntity

```python
coupon_usage = client.CouponUsage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | The Chargify id of the product |
| `name` | `str` | No | Name of the product |
| `revenue` | `int` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `int` | No | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `int` | No | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `int` | No | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `int` | No | Number of times the coupon has been applied |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CouponUsage().list({"id": 1, "product_family_id": 1})
for coupon_usage in results:
    print(coupon_usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CouponUsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldEntity

```python
custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_count` | `int` | No | The amount of subscriptions this metafield has been applied to in Advanced Billing. |
| `deleted_at` | `str` | No |  |
| `enum` | `str` | No |  |
| `id` | `int` | No |  |
| `input_type` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `metafield_id` | `int` | No |  |
| `metafields` | `Any` | No |  |
| `name` | `str` | No |  |
| `resource_id` | `int` | No |  |
| `scope` | `dict` | No |  |
| `value` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomField().create({
    "resource_type": "example_resource_type",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomField().list({"resource_type": "example"})
for custom_field in results:
    print(custom_field)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomField().remove({"resource_type": "resource_type"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomField().update({
    "resource_type": "resource_type",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `str` | No | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `int` | No | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `str` | No | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `str` | No | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `str` | No | The customer shipping address country |
| `country_name` | `str` | No | The customer's full name of country |
| `created_at` | `str` | No | The timestamp in which the customer object was created in Chargify |
| `customer` | `dict` | Yes |  |
| `default_auto_renewal_profile_id` | `int` | No | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `str` | No |  |
| `email` | `str` | No | The email address of the customer |
| `entity_identifier_kind` | `Any` | No |  |
| `entity_identifier_value` | `str` | No | The value of the customer's tax or business identifier. |
| `first_name` | `str` | No | The first name of the customer |
| `id` | `int` | No | The customer ID in Chargify |
| `last_name` | `str` | No | The last name of the customer |
| `locale` | `str` | No | The locale for the customer to identify language-region |
| `maxioid` | `str` | No | The Maxio-generated unique identifier for the customer. |
| `organization` | `str` | No | The organization of the customer. |
| `parent_id` | `int` | No | The parent ID in Chargify if applicable. |
| `phone` | `str` | No | The phone number of the customer |
| `portal_customer_created_at` | `str` | No | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `str` | No | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `str` | No | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `str` | No | The unique identifier used within your own application for this customer |
| `salesforce_id` | `str` | No | The Salesforce ID for the customer |
| `state` | `str` | No | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `str` | No | The customer's full name of state |
| `surcharging` | `bool` | No | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `bool` | No | The tax exempt status for the customer. |
| `tax_exempt_reason` | `str` | No | The Tax Exemption Reason Code for the customer |
| `updated_at` | `str` | No | The timestamp in which the customer object was last edited |
| `vat_country` | `str` | No | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `str` | No | The VAT business identification number for the customer. |
| `verified` | `bool` | No | Is the customer verified to use ACH as a payment method. |
| `zip` | `str` | No | The customer’s shipping address zip code (e.g., “12345”) |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Customer().create({
    "customer": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Customer().list()
for customer in results:
    print(customer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Customer().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Customer().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Customer().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DelayedCancelEntity

```python
delayed_cancel = client.DelayedCancel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `str` | No |  |
| `subscription` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DelayedCancel().create({
    "subscription_id": 1,  # int
    "subscription": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DelayedCancelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EndpointEntity

```python
endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `status` | `str` | No |  |
| `url` | `str` | No |  |
| `webhook_subscriptions` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Endpoint().list()
for endpoint in results:
    print(endpoint)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Endpoint().update({
    "endpoint_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntitlementEntity

```python
entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `int` | Yes |  |
| `entitlements` | `list` | Yes |  |
| `status` | `str` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Entitlement().list({"subscription_id": 1})
for entitlement in results:
    print(entitlement)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list()
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventsBasedBillingSegmentEntity

```python
events_based_billing_segment = client.EventsBasedBillingSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EventsBasedBillingSegment().remove({"component_id": "component_id", "id": 1, "price_point_id": "price_point_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventsBasedBillingSegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureEntity

```python
feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `str` | No |  |
| `default_periodicity_interval` | `int` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `Any` | No |  |
| `default_value` | `str` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `str` | No |  |
| `feature` | `dict` | Yes |  |
| `feature_key` | `str` | No | The `key` of the parent feature template. |
| `feature_kind` | `Any` | No |  |
| `feature_name` | `str` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No | The Advanced Billing id of the feature template. |
| `key` | `str` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `Any` | No |  |
| `name` | `str` | No | The display name of the feature. |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Any` | No |  |
| `plans_count` | `int` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Any` | No |  |
| `products_count` | `int` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `str` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `str` | No |  |
| `value` | `str` | No | The value granted by this feature catalog item. |
| `value_type` | `Any` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Feature().create({
    "feature": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Feature().list()
for feature in results:
    print(feature)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureCatalogItemEntity

```python
feature_catalog_item = client.FeatureCatalogItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `feature` | `dict` | Yes |  |
| `feature_key` | `str` | No | The `key` of the parent feature template. |
| `feature_kind` | `Any` | No |  |
| `feature_name` | `str` | No | The `name` of the parent feature template. |
| `feature_template_id` | `int` | No | The id of the feature template this item was created from. |
| `id` | `int` | No |  |
| `periodicity_interval` | `int` | No | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Any` | No |  |
| `price_point_id` | `int` | No | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Any` | No |  |
| `updated_at` | `str` | No |  |
| `value` | `str` | No | The value granted by this feature catalog item. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FeatureCatalogItem().create({
    "id": 1,  # int
    "feature": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FeatureCatalogItem().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FeatureCatalogItem().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureCatalogItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeatureTemplateEntity

```python
feature_template = client.FeatureTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `str` | No |  |
| `default_periodicity_interval` | `int` | No | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `Any` | No |  |
| `default_value` | `str` | No | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `str` | No |  |
| `feature` | `Any` | Yes |  |
| `id` | `int` | No | The Advanced Billing id of the feature template. |
| `key` | `str` | No | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `Any` | No |  |
| `name` | `str` | No | The display name of the feature. |
| `plans_count` | `int` | No | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `int` | No | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `str` | No | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `str` | No |  |
| `value_type` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FeatureTemplate().create({
    "id": 1,  # int
    "feature": "example_feature",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FeatureTemplate().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FeatureTemplate().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.FeatureTemplate().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeatureTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InsightEntity

```python
insight = client.Insight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_formatted` | `str` | No |  |
| `amount_in_cents` | `int` | No |  |
| `at_time` | `str` | No | ISO8601 timestamp |
| `breakouts` | `dict` | No |  |
| `currency` | `str` | No |  |
| `currency_symbol` | `str` | No |  |
| `movements` | `list` | No |  |
| `page` | `int` | No |  |
| `per_page` | `int` | No |  |
| `seller_name` | `str` | No |  |
| `site_currency` | `str` | No |  |
| `site_id` | `int` | No |  |
| `site_name` | `str` | No |  |
| `stats` | `dict` | No |  |
| `total_entries` | `int` | No |  |
| `total_pages` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Insight().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InsightEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InvoiceEntity

```python
invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `list` | No |  |
| `applied_amount` | `str` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `str` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `dict` | No |  |
| `billing_address` | `Any` | No |  |
| `branding_theme_id` | `int` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `Any` | No |  |
| `consolidation_level` | `Any` | No |  |
| `created_at` | `str` | No |  |
| `credit_amount` | `str` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credits` | `list` | No |  |
| `currency` | `str` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `list` | No |  |
| `customer` | `Any` | No |  |
| `customer_id` | `int` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `str` | No |  |
| `debits` | `list` | No |  |
| `discount_amount` | `str` | No | Total discount applied to the invoice. |
| `discounts` | `list` | No |  |
| `display_settings` | `dict` | No |  |
| `due_amount` | `str` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `str` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `int` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `int` | No |  |
| `issue_date` | `str` | No | Date the invoice was issued to the customer. |
| `line_items` | `list` | No | Line items on the invoice. |
| `memo` | `str` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `int` | No |  |
| `number` | `str` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `list` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `str` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `str` | No | Date the invoice became fully paid. |
| `paid_invoices` | `list` | No |  |
| `parent_invoice_id` | `int` | No |  |
| `parent_invoice_number` | `int` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `str` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `dict` | No |  |
| `payment_instructions` | `str` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `list` | No |  |
| `prepayment` | `str` | No |  |
| `previous_balance_data` | `dict` | No |  |
| `product_family_name` | `str` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `str` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `str` | No | The public URL of the invoice |
| `public_url_expires_on` | `str` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `list` | No |  |
| `refund_amount` | `str` | No |  |
| `refunds` | `list` | No |  |
| `remaining_amount` | `str` | No | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `str` | No |  |
| `seller` | `Any` | No |  |
| `sequence_number` | `int` | No | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `Any` | No |  |
| `site_id` | `int` | No | ID of the site to which the invoice belongs. |
| `status` | `Any` | No |  |
| `subscription_group_id` | `int` | No |  |
| `subscription_id` | `int` | No | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `str` | No | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `str` | No | Total tax on the invoice. |
| `taxes` | `list` | No |  |
| `total_amount` | `str` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `str` | No |  |
| `uid` | `str` | No | Unique identifier for the invoice. |
| `updated_at` | `str` | No |  |
| `void` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Invoice().create({
    "subscription_id": 1,  # int
    "void": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Invoice().list({"uid": "example"})
for invoice in results:
    print(invoice)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Invoice().remove({"subscription_id": 1, "uid": "uid"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Invoice().update({
    "subscription_id": 1,
    "uid": "uid",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InvoiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSaleRepItemEntity

```python
list_sale_rep_item = client.ListSaleRepItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `str` | No |  |
| `id` | `int` | No |  |
| `mrr_data` | `dict` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListSaleRepItem().list({"seller_id": "example"})
for list_sale_rep_item in results:
    print(list_sale_rep_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSaleRepItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListSegmentEntity

```python
list_segment = client.ListSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `str` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `list` | No |  |
| `pricing_scheme` | `Any` | No |  |
| `segment_property_1_value` | `Any` | No |  |
| `segment_property_2_value` | `Any` | No |  |
| `segment_property_3_value` | `Any` | No |  |
| `segment_property_4_value` | `Any` | No |  |
| `segments` | `list` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ListSegment().create({
    "component_id": "example_component_id",  # str
    "price_point_id": "example_price_point_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListSegment().list({"component_id": "example", "price_point_id": "example"})
for list_segment in results:
    print(list_segment)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ListSegment().update({
    "component_id": "component_id",
    "price_point_id": "price_point_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListSegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OfferEntity

```python
offer = client.Offer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `handle` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `offer` | `dict` | No |  |
| `offer_discounts` | `list` | No |  |
| `offer_items` | `list` | No |  |
| `offer_signup_pages` | `list` | No |  |
| `product_family_id` | `int` | No |  |
| `product_family_name` | `str` | No |  |
| `product_id` | `int` | No |  |
| `product_name` | `str` | No |  |
| `product_price_in_cents` | `int` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `str` | No |  |
| `product_revisable_number` | `int` | No |  |
| `site_id` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Offer().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Offer().list()
for offer in results:
    print(offer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Offer().load({"offer_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Offer().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OfferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OneTimeTokenEntity

```python
one_time_token = client.OneTimeToken()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OneTimeToken().load({"chargify_token": "chargify_token"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OneTimeTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PaymentProfileEntity

```python
payment_profile = client.PaymentProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account_holder_type` | `Any` | No |  |
| `bank_account_type` | `Any` | No |  |
| `bank_name` | `str` | No | The bank where the account resides |
| `billing_address` | `str` | No | The current billing street address for the bank account |
| `billing_address_2` | `str` | No | The current billing street address, second line, for the bank account |
| `billing_city` | `str` | No | The current billing address city for the bank account |
| `billing_country` | `str` | No | The current billing address country for the bank account |
| `billing_state` | `str` | No | The current billing address state for the bank account |
| `billing_zip` | `str` | No | The current billing address zip code for the bank account |
| `card_type` | `str` | No |  |
| `created_at` | `str` | No | A timestamp indicating when this payment profile was created |
| `current_vault` | `str` | No |  |
| `customer_id` | `int` | No | The Chargify-assigned ID for the customer record to which the bank account belongs |
| `customer_vault_token` | `str` | No | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `disabled` | `bool` | No |  |
| `expiration_month` | `int` | No |  |
| `expiration_year` | `int` | No |  |
| `first_name` | `str` | No | The first name of the bank account holder |
| `gateway_handle` | `str` | No |  |
| `id` | `int` | No | The Chargify-assigned ID of the stored bank account. |
| `last_name` | `str` | No | The last name of the bank account holder |
| `masked_bank_account_number` | `str` | No | A string representation of the stored bank account number with all but the last 4 digits marked with X's (i.e. |
| `masked_bank_routing_number` | `str` | No | A string representation of the stored bank routing number with all but the last 4 digits marked with X's (i.e. |
| `masked_card_number` | `str` | No |  |
| `payment_profile` | `Any` | Yes |  |
| `payment_type` | `str` | No |  |
| `site_gateway_setting_id` | `int` | No |  |
| `updated_at` | `str` | No | A timestamp indicating when this payment profile was last updated |
| `vault_token` | `str` | No | The "token" provided by your vault storage for an already stored payment profile |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PaymentProfile().create({
    "payment_profile": "example_payment_profile",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PaymentProfile().list()
for payment_profile in results:
    print(payment_profile)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PaymentProfile().load({"payment_profile_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.PaymentProfile().remove({"payment_profile_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PaymentProfile().update({
    "bank_account_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PaymentProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PrepaymentEntity

```python
prepayment = client.Prepayment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Prepayment().create({
    "id": 1,  # int
    "subscription_id": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrepaymentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductEntity

```python
product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounting_code` | `str` | No | E.g., Internal ID or SKU Number |
| `archived_at` | `str` | No | Timestamp indicating when this product was archived |
| `created_at` | `str` | No | Timestamp indicating when this product was created |
| `default_product_price_point_id` | `int` | No |  |
| `description` | `str` | No | The product description |
| `expiration_interval` | `int` | No | A numerical interval for the length a subscription to this product will run before it expires. |
| `expiration_interval_unit` | `Any` | No |  |
| `features` | `list` | No | The active feature catalog items attached to this product. |
| `handle` | `str` | No | The product API handle |
| `id` | `int` | No |  |
| `initial_charge_after_trial` | `bool` | No |  |
| `initial_charge_in_cents` | `int` | No | The up front charge you have specified. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `item_category` | `str` | No | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `str` | No | The product name |
| `price_in_cents` | `int` | No | The product price, in integer cents |
| `product` | `dict` | No |  |
| `product_family` | `dict` | No |  |
| `product_price_point_handle` | `str` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `str` | No |  |
| `public_signup_pages` | `list` | No |  |
| `request_billing_address` | `bool` | No | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `bool` | No | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `bool` | No | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `bool` | No | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `bool` | No | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `str` | No |  |
| `tax_code` | `str` | No | A string representing the tax code related to the product type. |
| `taxable` | `bool` | No |  |
| `trial_interval` | `int` | No | A numerical interval for the length of the trial period of a subscription to this product. |
| `trial_interval_unit` | `Any` | No |  |
| `trial_price_in_cents` | `int` | No | The price of the trial period for a subscription to this product, in integer cents. |
| `unspsc_code` | `str` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `str` | No | The parameters will append to the url after a successful account update. |
| `update_return_url` | `str` | No | The url to which a customer will be returned after a successful account update |
| `updated_at` | `str` | No | Timestamp indicating when this product was last updated |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Product().create({
    "product_family_id": "example_product_family_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Product().list()
for product in results:
    print(product)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Product().load({"api_handle": "api_handle"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Product().remove({"product_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Product().update({
    "product_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductFamilyEntity

```python
product_family = client.ProductFamily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounting_code` | `str` | No |  |
| `archived_at` | `str` | No | Timestamp indicating when this product family was archived. |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `handle` | `str` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `product_family` | `dict` | No |  |
| `surcharging` | `bool` | No | Whether surcharging applies to this product family. |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProductFamily().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProductFamily().list()
for product_family in results:
    print(product_family)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProductFamily().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFamilyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductFeatureEntity

```python
product_feature = client.ProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProductFeature().remove({"id": 1, "product_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductFeatureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProductPricePointEntity

```python
product_price_point = client.ProductPricePoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accounting_code` | `str` | No | E.g., Internal ID or SKU Number |
| `archived_at` | `str` | No | Timestamp indicating when this price point was archived |
| `created_at` | `str` | No | Timestamp indicating when this price point was created |
| `currency_prices` | `list` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default_product_price_point_id` | `int` | No |  |
| `description` | `str` | No | The product description |
| `expiration_interval` | `int` | No | The numerical expiration interval. |
| `expiration_interval_unit` | `Any` | No |  |
| `features` | `list` | No | The active feature catalog items attached to this product. |
| `handle` | `str` | No | The product price point API handle |
| `id` | `int` | No |  |
| `initial_charge_after_trial` | `bool` | No |  |
| `initial_charge_in_cents` | `int` | No | The product price point initial charge, in integer cents |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `introductory_offer` | `bool` | No | reserved for future use |
| `item_category` | `str` | No | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `str` | No | The product price point name |
| `price_in_cents` | `int` | No | The product price point price, in integer cents |
| `price_point` | `dict` | No |  |
| `price_points` | `list` | No |  |
| `product_family` | `dict` | No |  |
| `product_id` | `int` | No | The product id this price point belongs to |
| `product_price_point_handle` | `str` | No |  |
| `product_price_point_id` | `int` | No |  |
| `product_price_point_name` | `str` | No |  |
| `public_signup_pages` | `list` | No |  |
| `request_billing_address` | `bool` | No | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `bool` | No | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `bool` | No | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `bool` | No | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `bool` | No | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `str` | No |  |
| `subscription_id` | `int` | No | The subscription id this price point belongs to |
| `tax_code` | `str` | No | A string representing the tax code related to the product type. |
| `tax_included` | `bool` | No | Whether or not the price point includes tax |
| `taxable` | `bool` | No |  |
| `trial_interval` | `int` | No | The numerical trial interval. |
| `trial_interval_unit` | `Any` | No |  |
| `trial_price_in_cents` | `int` | No | The product price point trial price, in integer cents |
| `trial_type` | `Any` | No |  |
| `type` | `Any` | No |  |
| `unspsc_code` | `str` | No | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `str` | No | The parameters will append to the url after a successful account update. |
| `update_return_url` | `str` | No | The url to which a customer will be returned after a successful account update |
| `updated_at` | `str` | No | Timestamp indicating when this price point was last updated |
| `use_site_exchange_rate` | `bool` | No | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `version_number` | `int` | No | The version of the product |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProductPricePoint().create({
    "id": "example_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProductPricePoint().list()
for product_price_point in results:
    print(product_price_point)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ProductPricePoint().load({"price_point_id": "price_point_id", "product_id": "product_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ProductPricePoint().remove({"price_point_id": "price_point_id", "product_id": "product_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ProductPricePoint().update({
    "price_point_id": "price_point_id",
    "product_id": "product_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProductPricePointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProformaInvoiceEntity

```python
proforma_invoice = client.ProformaInvoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `dict` | No |  |
| `billing_address` | `dict` | No |  |
| `collection_method` | `Any` | No |  |
| `consolidation_level` | `Any` | No |  |
| `created_at` | `str` | No |  |
| `credit_amount` | `str` | No |  |
| `credits` | `list` | No |  |
| `currency` | `str` | No |  |
| `custom_fields` | `list` | No |  |
| `customer` | `Any` | No |  |
| `customer_id` | `int` | No |  |
| `delivery_date` | `str` | No |  |
| `discount_amount` | `str` | No |  |
| `discounts` | `list` | No |  |
| `due_amount` | `str` | No |  |
| `id` | `str` | No |  |
| `line_items` | `list` | No |  |
| `memo` | `str` | No |  |
| `number` | `int` | No |  |
| `paid_amount` | `str` | No |  |
| `payment_instructions` | `str` | No |  |
| `payments` | `list` | No |  |
| `product_family_name` | `str` | No |  |
| `product_name` | `str` | No |  |
| `public_url` | `str` | No |  |
| `refund_amount` | `str` | No |  |
| `role` | `Any` | No |  |
| `seller` | `Any` | No |  |
| `sequence_number` | `int` | No |  |
| `shipping_address` | `dict` | No |  |
| `site_id` | `int` | No |  |
| `status` | `str` | No |  |
| `subscription_id` | `int` | No |  |
| `subtotal_amount` | `str` | No |  |
| `tax_amount` | `str` | No |  |
| `taxes` | `list` | No |  |
| `total_amount` | `str` | No |  |
| `uid` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ProformaInvoice().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProformaInvoice().list({"subscription_id": 1})
for proforma_invoice in results:
    print(proforma_invoice)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProformaInvoiceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReasonCodeEntity

```python
reason_code = client.ReasonCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `created_at` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `int` | No |  |
| `position` | `int` | No |  |
| `reason_code` | `dict` | Yes |  |
| `site_id` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReasonCode().create({
    "reason_code": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReasonCode().list()
for reason_code in results:
    print(reason_code)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReasonCode().load({"reason_code_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ReasonCode().remove({"reason_code_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReasonCode().update({
    "reason_code_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReasonCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReferralCodeEntity

```python
referral_code = client.ReferralCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `str` | No |  |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `subscription_id` | `int` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReferralCode().load({"code": "code"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReferralCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SaleRepSettingEntity

```python
sale_rep_setting = client.SaleRepSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_name` | `str` | No |  |
| `sales_rep_id` | `int` | No |  |
| `sales_rep_name` | `str` | No |  |
| `site_link` | `str` | No |  |
| `site_name` | `str` | No |  |
| `subscription_id` | `int` | No |  |
| `subscription_mrr` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SaleRepSetting().list({"seller_id": "example"})
for sale_rep_setting in results:
    print(sale_rep_setting)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SaleRepSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SalesCommissionEntity

```python
sales_commission = client.SalesCommission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `str` | No |  |
| `id` | `int` | No |  |
| `subscriptions` | `list` | No |  |
| `subscriptions_count` | `int` | No |  |
| `test_mode` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SalesCommission().list({"sales_rep_id": "example", "seller_id": "example"})
for sales_commission in results:
    print(sales_commission)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SalesCommissionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SegmentEntity

```python
segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `int` | No |  |
| `created_at` | `str` | No |  |
| `event_based_billing_metric_id` | `int` | No |  |
| `id` | `int` | No |  |
| `price_point_id` | `int` | No |  |
| `prices` | `list` | No |  |
| `pricing_scheme` | `Any` | No |  |
| `segment_property_1_value` | `Any` | No |  |
| `segment_property_2_value` | `Any` | No |  |
| `segment_property_3_value` | `Any` | No |  |
| `segment_property_4_value` | `Any` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Segment().create({
    "component_id": "example_component_id",  # str
    "price_point_id": "example_price_point_id",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Segment().update({
    "component_id": "component_id",
    "id": 1,
    "price_point_id": "price_point_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SignupProformaPreviewEntity

```python
signup_proforma_preview = client.SignupProformaPreview()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SignupProformaPreview().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SignupProformaPreviewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SiteEntity

```python
site = client.Site()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation_settings` | `dict` | No |  |
| `auto_renewals_enabled` | `bool` | No | Whether the auto-renewals feature is enabled for this site. |
| `created_at` | `str` | No |  |
| `currency` | `str` | No |  |
| `customer_hierarchy_enabled` | `bool` | No |  |
| `default_payment_collection_method` | `str` | No |  |
| `id` | `int` | No |  |
| `multi_frequency_enabled` | `bool` | No | Whether the site has the multi-frequency billing feature enabled. |
| `name` | `str` | No |  |
| `net_terms` | `dict` | No |  |
| `non_primary_currencies` | `list` | No |  |
| `organization_address` | `dict` | No |  |
| `portal_enabled` | `bool` | No | Whether the Billing Portal is enabled for this site. |
| `public_key` | `str` | No |  |
| `relationship_invoicing_enabled` | `bool` | No |  |
| `requires_security_token` | `bool` | No |  |
| `schedule_subscription_cancellation_enabled` | `bool` | No |  |
| `seller_id` | `int` | No |  |
| `subdomain` | `str` | No |  |
| `tax_configuration` | `dict` | No |  |
| `test` | `bool` | No |  |
| `whopays_default_payer` | `str` | No |  |
| `whopays_enabled` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Site().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Site().list()
for site in results:
    print(site)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Site().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionEntity

```python
subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `str` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `str` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `int` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `dict` | Yes |  |
| `cancel_at_end_of_period` | `bool` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `str` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `str` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `Any` | No |  |
| `coupon_code` | `str` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `list` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `int` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `int` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `list` | No | Additional coupon data. |
| `created_at` | `str` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `int` | No |  |
| `credit_card` | `Any` | No |  |
| `currency` | `str` | No |  |
| `current_billing_amount_in_cents` | `int` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `str` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `str` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `dict` | No |  |
| `delayed_cancel_at` | `str` | No | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `bool` | No | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `str` | No | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `str` | No | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `Any` | No |  |
| `id` | `int` | No | The subscription unique id within Chargify. |
| `locale` | `str` | No |  |
| `net_terms` | `int` | No | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `str` | No | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `str` | No | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `int` | No | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `int` | No | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `int` | No | The ID of the offer associated with the subscription. |
| `on_hold_at` | `str` | No | The timestamp of the most recent on hold action. |
| `payer_id` | `int` | No | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `Any` | No |  |
| `payment_type` | `str` | No | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `Any` | No |  |
| `prepaid_dunning` | `bool` | No | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `int` | No |  |
| `previous_state` | `Any` | No |  |
| `product` | `dict` | No |  |
| `product_price_in_cents` | `int` | No | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `int` | No | The product price point currently subscribed to. |
| `product_price_point_type` | `Any` | No |  |
| `product_version_number` | `int` | No | The version of the product for the subscription. |
| `reason_code` | `str` | No | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `bool` | No |  |
| `reference` | `str` | No | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `str` | No | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `str` | No |  |
| `self_service_page_token` | `str` | No | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `int` | No | The ID of the transaction that generated the revenue |
| `signup_revenue` | `str` | No | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `str` | No | A day of month that subscription will be processed on. |
| `state` | `Any` | No |  |
| `stored_credential_transaction_id` | `int` | No | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `dict` | No |  |
| `total_revenue_in_cents` | `int` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `str` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `str` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `str` | No | The date of last update for this subscription |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Subscription().create({
    "bank_account": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Subscription().list()
for subscription in results:
    print(subscription)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Subscription().load({"subscription_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Subscription().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Subscription().update({
    "subscription_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionComponentEntity

```python
subscription_component = client.SubscriptionComponent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accrue_charge` | `bool` | No | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `allocated_quantity` | `Any` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation_id` | `int` | No | The allocation unique ID |
| `allocations` | `list` | No |  |
| `allow_fractional_quantities` | `bool` | No |  |
| `archived_at` | `str` | No |  |
| `charge_id` | `int` | No |  |
| `component` | `dict` | No |  |
| `component_handle` | `str` | No | The handle of the component. |
| `component_id` | `int` | No | The integer component ID for the allocation. |
| `created_at` | `str` | No | Timestamp indicating when this allocation was created |
| `currency` | `str` | No |  |
| `description` | `str` | No |  |
| `direction` | `str` | No |  |
| `display_on_hosted_page` | `bool` | No |  |
| `downgrade_credit` | `Any` | No |  |
| `enabled` | `bool` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `end_date` | `str` | No |  |
| `existing_balance_in_cents` | `int` | No | An integer representing the amount of the subscription's current balance |
| `expires_at` | `str` | No |  |
| `historic_usages` | `list` | No |  |
| `id` | `int` | No |  |
| `initiate_dunning` | `bool` | No | If true, if the immediate component payment fails, initiate dunning for the subscription. |
| `interval` | `int` | No | The numerical interval. |
| `interval_unit` | `Any` | No |  |
| `kind` | `Any` | No |  |
| `line_items` | `list` | No |  |
| `memo` | `str` | No | The memo passed when the allocation was created |
| `name` | `str` | No |  |
| `overage_quantity` | `int` | No |  |
| `payment` | `Any` | No |  |
| `period_type` | `str` | No |  |
| `previous_price_point_id` | `int` | No |  |
| `previous_quantity` | `Any` | No | The allocated quantity that was in effect before this allocation was created. |
| `price_point_handle` | `str` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_name` | `str` | No |  |
| `price_point_type` | `Any` | No |  |
| `pricing_scheme` | `Any` | No |  |
| `product_family_handle` | `str` | No |  |
| `product_family_id` | `int` | No |  |
| `proration_downgrade_scheme` | `str` | No | The scheme used if the proration was a downgrade. |
| `proration_scheme` | `str` | No |  |
| `proration_upgrade_scheme` | `str` | No | The scheme used if the proration was an upgrade. |
| `quantity` | `Any` | No | The allocated quantity set into effect by the allocation. |
| `recurring` | `bool` | No |  |
| `start_date` | `str` | No |  |
| `subscription` | `Any` | No |  |
| `subscription_id` | `int` | No | The integer subscription ID for the allocation. |
| `subtotal_in_cents` | `int` | No |  |
| `timestamp` | `str` | No | The time that the allocation was recorded, in ISO 8601 format and UTC timezone, e.g., 2012-11-20T22:00:37Z |
| `total_discount_in_cents` | `int` | No |  |
| `total_in_cents` | `int` | No |  |
| `total_tax_in_cents` | `int` | No |  |
| `unit_balance` | `Any` | No |  |
| `unit_name` | `str` | No |  |
| `updated_at` | `str` | No |  |
| `upgrade_charge` | `Any` | No |  |
| `use_site_exchange_rate` | `bool` | No |  |
| `used_quantity` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionComponent().create({
    "api_handle": "example_api_handle",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionComponent().list()
for subscription_component in results:
    print(subscription_component)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionComponent().load({"component_id": 1, "subscription_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionComponent().remove({"allocation_id": 1, "component_id": 1, "subscription_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriptionComponent().update({
    "allocation_id": 1,
    "component_id": 1,
    "subscription_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionComponentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionGroupEntity

```python
subscription_group = client.SubscriptionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_balances` | `dict` | No |  |
| `cancel_at_end_of_period` | `bool` | No |  |
| `created_at` | `str` | No |  |
| `customer_id` | `int` | No |  |
| `group_type` | `str` | No |  |
| `id` | `str` | No |  |
| `next_assessment_at` | `str` | No |  |
| `payment_collection_method` | `Any` | No |  |
| `payment_profile` | `dict` | No |  |
| `payment_profile_id` | `int` | No |  |
| `primary_subscription_id` | `int` | No |  |
| `scheme` | `int` | No |  |
| `state` | `str` | No |  |
| `subscription_ids` | `list` | No |  |
| `uid` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionGroup().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionGroup().list()
for subscription_group in results:
    print(subscription_group)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionGroup().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriptionGroup().update({
    "uid": "uid",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionGroupInvoiceAccountEntity

```python
subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionGroupInvoiceAccount().create({
    "id": "example_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionGroupInvoiceAccount().list({"id": "example"})
for subscription_group_invoice_account in results:
    print(subscription_group_invoice_account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionGroupSignupEntity

```python
subscription_group_signup = client.SubscriptionGroupSignup()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionGroupSignup().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupSignupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionGroupStatusEntity

```python
subscription_group_status = client.SubscriptionGroupStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionGroupStatus().create({
    "id": "example_id",  # str
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionGroupStatus().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionGroupStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionInvoiceAccountEntity

```python
subscription_invoice_account = client.SubscriptionInvoiceAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_in_cents` | `int` | No | The amount in cents of the entry |
| `created_at` | `str` | No | The date and time the entry was created |
| `ending_balance_in_cents` | `int` | No | The new balance for the credit account |
| `entry_type` | `Any` | No |  |
| `id` | `int` | No |  |
| `invoice_uid` | `str` | No | The invoice uid associated with the entry. |
| `memo` | `str` | No | The memo attached to the entry |
| `remaining_balance_in_cents` | `int` | No | The remaining balance for the entry |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionInvoiceAccount().create({
    "id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionInvoiceAccount().list({"subscription_id": 1})
for subscription_invoice_account in results:
    print(subscription_invoice_account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionMrrEntity

```python
subscription_mrr = client.SubscriptionMrr()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `dict` | Yes |  |
| `mrr_amount_in_cents` | `int` | Yes |  |
| `subscription_id` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionMrr().list()
for subscription_mrr in results:
    print(subscription_mrr)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionMrrEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionNoteEntity

```python
subscription_note = client.SubscriptionNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | No |  |
| `created_at` | `str` | No |  |
| `id` | `int` | No |  |
| `note` | `dict` | Yes |  |
| `sticky` | `bool` | No |  |
| `subscription_id` | `int` | No |  |
| `updated_at` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionNote().create({
    "id": 1,  # int
    "note": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionNote().list({"id": 1})
for subscription_note in results:
    print(subscription_note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionNote().load({"note_id": 1, "subscription_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionNote().remove({"note_id": 1, "subscription_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriptionNote().update({
    "note_id": 1,
    "subscription_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionProductEntity

```python
subscription_product = client.SubscriptionProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `charge_in_cents` | `int` | No | The amount of the charge that would be created for the new product. |
| `credit_applied_in_cents` | `int` | No | Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. |
| `id` | `str` | No |  |
| `migration` | `dict` | Yes |  |
| `payment_due_in_cents` | `int` | No | The amount of the payment due in the case of an upgrade. |
| `prorated_adjustment_in_cents` | `int` | No | The amount of the prorated adjustment that would be issued for the current subscription. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionProduct().create({
    "subscription_id": 1,  # int
    "migration": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionProductEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionRenewalEntity

```python
subscription_renewal = client.SubscriptionRenewal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contract` | `Any` | No |  |
| `created_at` | `str` | No |  |
| `decimal_quantity` | `str` | No |  |
| `ends_at` | `str` | No |  |
| `id` | `int` | No | ID of the renewal. |
| `item_id` | `int` | No |  |
| `item_subclass` | `str` | No |  |
| `item_type` | `str` | No |  |
| `lock_in_at` | `str` | No |  |
| `price_point_id` | `int` | No |  |
| `price_point_type` | `str` | No |  |
| `quantity` | `int` | No |  |
| `scheduled_renewal_configuration_item` | `dict` | No |  |
| `scheduled_renewal_configuration_items` | `list` | No |  |
| `site_id` | `int` | No | ID of the site to which the renewal belongs. |
| `starts_at` | `str` | No |  |
| `status` | `str` | No |  |
| `subscription_id` | `int` | No | The id of the subscription. |
| `subscription_renewal_configuration_id` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionRenewal().create({
    "scheduled_renewal_id": 1,  # int
    "subscription_id": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionRenewal().list({"id": 1})
for subscription_renewal in results:
    print(subscription_renewal)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionRenewal().load({"id": 1, "subscription_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionRenewal().remove({"id": 1, "scheduled_renewal_id": 1, "subscription_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriptionRenewal().update({
    "id": 1,
    "subscription_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionRenewalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionStatusEntity

```python
subscription_status = client.SubscriptionStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `existing_balance_in_cents` | `int` | No | An integer representing the amount of the subscription’s current balance |
| `id` | `str` | No |  |
| `line_items` | `list` | No | An array of objects representing the individual transactions that will be created at the next renewal |
| `next_assessment_at` | `str` | No | The timestamp for the subscription’s next renewal |
| `subtotal_in_cents` | `int` | No | An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal |
| `total_amount_due_in_cents` | `int` | No | An integer representing the existing_balance_in_cents plus the total_in_cents |
| `total_discount_in_cents` | `int` | No | An integer representing the amount of the coupon discounts that will be applied to the next renewal |
| `total_in_cents` | `int` | No | An integer representing the total amount owed, less any discounts, that will be assessed at the next renewal |
| `total_tax_in_cents` | `int` | No | An integer representing the total tax charges that will be assessed at the next renewal |
| `uncalculated_taxes` | `bool` | No | A boolean indicating whether or not additional taxes will be calculated at the time of renewal. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SubscriptionStatus().create({
    "subscription_id": 1,  # int
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SubscriptionStatus().remove({"subscription_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SubscriptionStatus().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageEntity

```python
usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Usage().list({"component_id": "example", "subscription_id_or_reference": "example"})
for usage in results:
    print(usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `site_id` | `int` | No |  |
| `status` | `str` | No |  |
| `url` | `str` | No |  |
| `webhook` | `dict` | No |  |
| `webhook_subscriptions` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webhook().list()
for webhook in results:
    print(webhook)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Webhook().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = MaxioAdvancedBillingSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

