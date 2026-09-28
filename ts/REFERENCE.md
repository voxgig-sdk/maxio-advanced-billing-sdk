# MaxioAdvancedBilling TypeScript SDK Reference

Complete API reference for the MaxioAdvancedBilling TypeScript SDK.


## MaxioAdvancedBillingSDK

### Constructor

```ts
new MaxioAdvancedBillingSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.secret` | `string` | API secret for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `MaxioAdvancedBillingSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = MaxioAdvancedBillingSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `MaxioAdvancedBillingSDK` instance in test mode.


### Instance Methods

#### `AccountBalance(data?: object)`

Create a new `AccountBalance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountBalanceEntity` instance.

#### `Allocation(data?: object)`

Create a new `Allocation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AllocationEntity` instance.

#### `BatchJob(data?: object)`

Create a new `BatchJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchJobEntity` instance.

#### `BillingPortal(data?: object)`

Create a new `BillingPortal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingPortalEntity` instance.

#### `Component(data?: object)`

Create a new `Component` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComponentEntity` instance.

#### `ComponentFeature(data?: object)`

Create a new `ComponentFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComponentFeatureEntity` instance.

#### `ComponentPricePoint(data?: object)`

Create a new `ComponentPricePoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComponentPricePointEntity` instance.

#### `ComponentPricePointCurrencyOverage(data?: object)`

Create a new `ComponentPricePointCurrencyOverage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ComponentPricePointCurrencyOverageEntity` instance.

#### `Coupon(data?: object)`

Create a new `Coupon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponEntity` instance.

#### `CouponCurrency(data?: object)`

Create a new `CouponCurrency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponCurrencyEntity` instance.

#### `CouponSubcode(data?: object)`

Create a new `CouponSubcode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponSubcodeEntity` instance.

#### `CouponUsage(data?: object)`

Create a new `CouponUsage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CouponUsageEntity` instance.

#### `CustomField(data?: object)`

Create a new `CustomField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `DelayedCancel(data?: object)`

Create a new `DelayedCancel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DelayedCancelEntity` instance.

#### `Endpoint(data?: object)`

Create a new `Endpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndpointEntity` instance.

#### `Entitlement(data?: object)`

Create a new `Entitlement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntitlementEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `EventsBasedBillingSegment(data?: object)`

Create a new `EventsBasedBillingSegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventsBasedBillingSegmentEntity` instance.

#### `Feature(data?: object)`

Create a new `Feature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureEntity` instance.

#### `FeatureCatalogItem(data?: object)`

Create a new `FeatureCatalogItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureCatalogItemEntity` instance.

#### `FeatureTemplate(data?: object)`

Create a new `FeatureTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeatureTemplateEntity` instance.

#### `Insight(data?: object)`

Create a new `Insight` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InsightEntity` instance.

#### `Invoice(data?: object)`

Create a new `Invoice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvoiceEntity` instance.

#### `ListProformaInvoice(data?: object)`

Create a new `ListProformaInvoice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListProformaInvoiceEntity` instance.

#### `ListSaleRepItem(data?: object)`

Create a new `ListSaleRepItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSaleRepItemEntity` instance.

#### `ListSegment(data?: object)`

Create a new `ListSegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListSegmentEntity` instance.

#### `Offer(data?: object)`

Create a new `Offer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OfferEntity` instance.

#### `OneTimeToken(data?: object)`

Create a new `OneTimeToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OneTimeTokenEntity` instance.

#### `PaymentProfile(data?: object)`

Create a new `PaymentProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaymentProfileEntity` instance.

#### `Prepayment(data?: object)`

Create a new `Prepayment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PrepaymentEntity` instance.

#### `Product(data?: object)`

Create a new `Product` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductEntity` instance.

#### `ProductFamily(data?: object)`

Create a new `ProductFamily` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductFamilyEntity` instance.

#### `ProductFeature(data?: object)`

Create a new `ProductFeature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductFeatureEntity` instance.

#### `ProductPricePoint(data?: object)`

Create a new `ProductPricePoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProductPricePointEntity` instance.

#### `ProformaInvoice(data?: object)`

Create a new `ProformaInvoice` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProformaInvoiceEntity` instance.

#### `ReasonCode(data?: object)`

Create a new `ReasonCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReasonCodeEntity` instance.

#### `ReferralCode(data?: object)`

Create a new `ReferralCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReferralCodeEntity` instance.

#### `SaleRepSetting(data?: object)`

Create a new `SaleRepSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SaleRepSettingEntity` instance.

#### `SalesCommission(data?: object)`

Create a new `SalesCommission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SalesCommissionEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `SignupProformaPreview(data?: object)`

Create a new `SignupProformaPreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SignupProformaPreviewEntity` instance.

#### `Site(data?: object)`

Create a new `Site` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SiteEntity` instance.

#### `Subscription(data?: object)`

Create a new `Subscription` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionEntity` instance.

#### `SubscriptionComponent(data?: object)`

Create a new `SubscriptionComponent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionComponentEntity` instance.

#### `SubscriptionGroup(data?: object)`

Create a new `SubscriptionGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionGroupEntity` instance.

#### `SubscriptionGroupInvoiceAccount(data?: object)`

Create a new `SubscriptionGroupInvoiceAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionGroupInvoiceAccountEntity` instance.

#### `SubscriptionGroupSignup(data?: object)`

Create a new `SubscriptionGroupSignup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionGroupSignupEntity` instance.

#### `SubscriptionGroupStatus(data?: object)`

Create a new `SubscriptionGroupStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionGroupStatusEntity` instance.

#### `SubscriptionInvoiceAccount(data?: object)`

Create a new `SubscriptionInvoiceAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionInvoiceAccountEntity` instance.

#### `SubscriptionMrr(data?: object)`

Create a new `SubscriptionMrr` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionMrrEntity` instance.

#### `SubscriptionNote(data?: object)`

Create a new `SubscriptionNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionNoteEntity` instance.

#### `SubscriptionProduct(data?: object)`

Create a new `SubscriptionProduct` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionProductEntity` instance.

#### `SubscriptionRenewal(data?: object)`

Create a new `SubscriptionRenewal` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionRenewalEntity` instance.

#### `SubscriptionStatus(data?: object)`

Create a new `SubscriptionStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionStatusEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `MaxioAdvancedBillingSDK.test()`.

**Returns:** `MaxioAdvancedBillingSDK` instance in test mode.


---

## AccountBalanceEntity

```ts
const account_balance = client.AccountBalance()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountBalance().load({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountBalanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AllocationEntity

```ts
const allocation = client.Allocation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocation` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Allocation().create({
  subscription_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Allocation().list({ component_id: 1, subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AllocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchJobEntity

```ts
const batch_job = client.BatchJob()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BatchJob().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BatchJob().load({ batch_id: 'batch_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingPortalEntity

```ts
const billing_portal = client.BillingPortal()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillingPortal().create({
  customer_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BillingPortal().load({ customer_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BillingPortal().remove({ customer_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingPortalEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComponentEntity

```ts
const component = client.Component()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `component` | - | Yes | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `component_id` | `/product_families/{product_family_id}/components/{component_id}.json` | `client.Component().load({ $action: 'component_id', ... })` |
| `lookup` | `/components/lookup.json` | `client.Component().load({ $action: 'lookup', ... })` |
| `component_id` | `/product_families/{product_family_id}/components/{component_id}.json` | `client.Component().remove({ $action: 'component_id', ... })` |
| `component_id` | `/product_families/{product_family_id}/components/{component_id}.json` | `client.Component().update({ $action: 'component_id', ... })` |
| `component_id` | `/components/{component_id}.json` | `client.Component().update({ $action: 'component_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Component record — check the API definition for its shape.

```ts
const result = await client.Component().load({
  $action: 'component_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Component().create({
  product_family_id: 'example_product_family_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Component().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Component().load({ component_id: 'component_id', product_family_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Component().remove({ component_id: 'component_id', product_family_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Component().update({
  component_id: 'component_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComponentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComponentFeatureEntity

```ts
const component_feature = client.ComponentFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ComponentFeature().remove({ component_id: 1, id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComponentFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComponentPricePointEntity

```ts
const component_price_point = client.ComponentPricePoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component` | `Record<string, any>` | Yes |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `any[]` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `number` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `number` | No |  |
| `interval` | `number` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `any[]` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `price_point` | `Record<string, any>` | No |  |
| `price_points` | `any[]` | No |  |
| `prices` | `any[]` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ComponentPricePoint().create({
  id: 1,
  component: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ComponentPricePoint().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ComponentPricePoint().remove({ component_id: 'component_id', price_point_id: 'price_point_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ComponentPricePoint().update({
  price_point_id: 'price_point_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComponentPricePointEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ComponentPricePointCurrencyOverageEntity

```ts
const component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency_overage_prices` | `any[]` | No | Applicable only to prepaid usage components. |
| `currency_prices` | `any[]` | No | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | No | Note: Refer to type attribute instead. |
| `expiration_interval` | `number` | No | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` | No |  |
| `handle` | `string` | No |  |
| `id` | `number` | No |  |
| `interval` | `number` | No | The numerical interval. |
| `interval_unit` | `any` | No |  |
| `name` | `string` | No |  |
| `overage_prices` | `any[]` | No | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` | No |  |
| `prices` | `any[]` | No |  |
| `pricing_scheme` | `any` | No |  |
| `renew_prepaid_allocation` | `boolean` | No | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `boolean` | No | Applicable only to prepaid usage components. |
| `subscription_id` | `number` | No | (only used for Custom Pricing - ie. |
| `tax_included` | `boolean` | No |  |
| `type` | `any` | No |  |
| `updated_at` | `string` | No |  |
| `use_site_exchange_rate` | `boolean` | No | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ComponentPricePointCurrencyOverage().load({ component_id: 'component_id', price_point_id: 'price_point_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ComponentPricePointCurrencyOverageEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponEntity

```ts
const coupon = client.Coupon()
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
| `coupon` | `Record<string, any>` | No |  |
| `coupon_restrictions` | `any[]` | No |  |
| `created_at` | `string` | No |  |
| `currency_prices` | `any[]` | No | Returned in read, find, and list endpoints if the query parameter is provided. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `code` | `/coupons/{coupon_id}/codes.json` | `client.Coupon().create({ $action: 'code', ... })` |
| `code` | `/coupons/{coupon_id}/codes.json` | `client.Coupon().list({ $action: 'code', ... })` |
| `coupon_id` | `/product_families/{product_family_id}/coupons/{coupon_id}.json` | `client.Coupon().load({ $action: 'coupon_id', ... })` |
| `find` | `/coupons/find.json` | `client.Coupon().load({ $action: 'find', ... })` |
| `validate` | `/coupons/validate.json` | `client.Coupon().load({ $action: 'validate', ... })` |
| `code_subcode` | `/coupons/{coupon_id}/codes/{subcode}.json` | `client.Coupon().remove({ $action: 'code_subcode', ... })` |
| `coupon_id` | `/product_families/{product_family_id}/coupons/{coupon_id}.json` | `client.Coupon().remove({ $action: 'coupon_id', ... })` |
| `coupon_id` | `/product_families/{product_family_id}/coupons/{coupon_id}.json` | `client.Coupon().update({ $action: 'coupon_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Coupon record — check the API definition for its shape.

```ts
const result = await client.Coupon().create({
  $action: 'code',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Coupon().create({
  product_family_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Coupon().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Coupon().load({ coupon_id: 1, product_family_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Coupon().remove({ id: 1, subcode: 'subcode' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Coupon().update({
  coupon_id: 1,
  product_family_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponCurrencyEntity

```ts
const coupon_currency = client.CouponCurrency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `currency_prices.json` | `/coupons/{coupon_id}/currency_prices.json` | `client.CouponCurrency().update({ $action: 'currency_prices.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
CouponCurrency record — check the API definition for its shape.

```ts
const result = await client.CouponCurrency().update({
  $action: 'currency_prices.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CouponCurrency().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponCurrencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponSubcodeEntity

```ts
const coupon_subcode = client.CouponSubcode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_codes` | `any[]` | No |  |
| `duplicate_codes` | `any[]` | No |  |
| `id` | `string` | No |  |
| `invalid_codes` | `any[]` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CouponSubcode().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponSubcodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CouponUsageEntity

```ts
const coupon_usage = client.CouponUsage()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CouponUsage().list({ id: 1, product_family_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CouponUsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldEntity

```ts
const custom_field = client.CustomField()
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
| `metadata` | `Record<string, any>` | No |  |
| `metafield_id` | `number` | No |  |
| `metafields` | `any` | No |  |
| `name` | `string` | No |  |
| `per_page` | `number` | No |  |
| `resource_id` | `number` | No |  |
| `scope` | `Record<string, any>` | No |  |
| `total_count` | `number` | No |  |
| `total_pages` | `number` | No |  |
| `value` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomField().create({
  resource_type: 'example_resource_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomField().list({ resource_type: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomField().remove({ resource_type: 'resource_type' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomField().update({
  resource_type: 'resource_type',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
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
| `customer` | `Record<string, any>` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `enable` | `/portal/customers/{customer_id}/enable.json` | `client.Customer().create({ $action: 'enable', ... })` |
| `id` | `/customers/{id}.json` | `client.Customer().load({ $action: 'id', ... })` |
| `lookup` | `/customers/lookup.json` | `client.Customer().load({ $action: 'lookup', ... })` |
| `id` | `/customers/{id}.json` | `client.Customer().remove({ $action: 'id', ... })` |
| `id` | `/customers/{id}.json` | `client.Customer().update({ $action: 'id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Customer record — check the API definition for its shape.

```ts
const result = await client.Customer().create({
  $action: 'enable',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Customer().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Customer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Customer().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Customer().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Customer().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DelayedCancelEntity

```ts
const delayed_cancel = client.DelayedCancel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | No |  |
| `subscription` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DelayedCancel().create({
  subscription_id: 1,
  subscription: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DelayedCancelEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndpointEntity

```ts
const endpoint = client.Endpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `url` | `string` | No |  |
| `webhook_subscriptions` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `endpoint_id` | `/endpoints/{endpoint_id}.json` | `client.Endpoint().update({ $action: 'endpoint_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Endpoint record — check the API definition for its shape.

```ts
const result = await client.Endpoint().update({
  $action: 'endpoint_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Endpoint().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Endpoint().update({
  endpoint_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntitlementEntity

```ts
const entitlement = client.Entitlement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `number` | Yes |  |
| `entitlements` | `any[]` | Yes |  |
| `status` | `string` | Yes | The subscription's current state, e.g. |
| `subscription_id` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Entitlement().list({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `count` | `/events/count.json` | `client.Event().load({ $action: 'count', ... })` |

An action returns that action's OWN response, which is not necessarily a
Event record — check the API definition for its shape.

```ts
const result = await client.Event().load({
  $action: 'count',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventsBasedBillingSegmentEntity

```ts
const events_based_billing_segment = client.EventsBasedBillingSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EventsBasedBillingSegment().remove({ component_id: 'component_id', id: 1, price_point_id: 'price_point_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventsBasedBillingSegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureEntity

```ts
const feature = client.Feature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `archived_count` | `number` | Yes | Number of archived feature templates matching the filters. |
| `created_at` | `string` | No |  |
| `feature` | `Record<string, any>` | Yes |  |
| `feature_key` | `string` | No | The `key` of the parent feature template. |
| `feature_kind` | `any` | No |  |
| `feature_name` | `string` | No | The `name` of the parent feature template. |
| `feature_template_id` | `number` | No | The id of the feature template this item was created from. |
| `id` | `number` | No |  |
| `items` | `any[]` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Feature().create({
  archived_count: 1,
  feature: {},
  items: [],
  total_count: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Feature().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureCatalogItemEntity

```ts
const feature_catalog_item = client.FeatureCatalogItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | No |  |
| `feature` | `Record<string, any>` | Yes |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore.json` | `/components/{component_id}/features/{id}/restore.json` | `client.FeatureCatalogItem().create({ $action: 'restore.json', ... })` |
| `restore.json` | `/products/{product_id}/features/{id}/restore.json` | `client.FeatureCatalogItem().create({ $action: 'restore.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
FeatureCatalogItem record — check the API definition for its shape.

```ts
const result = await client.FeatureCatalogItem().create({
  $action: 'restore.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FeatureCatalogItem().create({
  id: 1,
  feature: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FeatureCatalogItem().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FeatureCatalogItem().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureCatalogItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeatureTemplateEntity

```ts
const feature_template = client.FeatureTemplate()
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore.json` | `/features/{id}/restore.json` | `client.FeatureTemplate().create({ $action: 'restore.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
FeatureTemplate record — check the API definition for its shape.

```ts
const result = await client.FeatureTemplate().create({
  $action: 'restore.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FeatureTemplate().create({
  id: 1,
  feature: 'example_feature',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FeatureTemplate().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FeatureTemplate().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FeatureTemplate().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeatureTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InsightEntity

```ts
const insight = client.Insight()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mrr` | `Record<string, any>` | Yes |  |
| `seller_name` | `string` | No |  |
| `site_currency` | `string` | No |  |
| `site_id` | `number` | No |  |
| `site_name` | `string` | No |  |
| `stats` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Insight().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InsightEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvoiceEntity

```ts
const invoice = client.Invoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `any[]` | No |  |
| `applied_amount` | `string` | No | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | No | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `Record<string, any>` | No |  |
| `billing_address` | `any` | No |  |
| `branding_theme_id` | `number` | No | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `any[]` | Yes |  |
| `credits` | `any[]` | No |  |
| `currency` | `string` | No | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `any[]` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` | No |  |
| `debits` | `any[]` | No |  |
| `discount_amount` | `string` | No | Total discount applied to the invoice. |
| `discounts` | `any[]` | No |  |
| `display_settings` | `Record<string, any>` | No |  |
| `due_amount` | `string` | No | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | No | Date the invoice is due. |
| `group_primary_subscription_id` | `number` | No | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `number` | No |  |
| `invoice` | `Record<string, any>` | No |  |
| `invoices` | `any[]` | Yes |  |
| `issue_date` | `string` | No | Date the invoice was issued to the customer. |
| `line_items` | `any[]` | No | Line items on the invoice. |
| `memo` | `string` | No | The memo printed on invoices of any collection type. |
| `net_terms` | `number` | No |  |
| `number` | `string` | No | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `any[]` | No | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | No | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | No | Date the invoice became fully paid. |
| `paid_invoices` | `any[]` | No |  |
| `parent_invoice_id` | `number` | No |  |
| `parent_invoice_number` | `number` | No | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | No | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `Record<string, any>` | No |  |
| `payment_instructions` | `string` | No | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `any[]` | No |  |
| `prepayment` | `string` | No |  |
| `previous_balance_data` | `Record<string, any>` | No |  |
| `product_family_name` | `string` | No | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | No | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | No | The public URL of the invoice |
| `public_url_expires_on` | `string` | No | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `any[]` | No |  |
| `refund_amount` | `string` | No |  |
| `refunds` | `any[]` | No |  |
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
| `taxes` | `any[]` | No |  |
| `total_amount` | `string` | No | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` | No |  |
| `uid` | `string` | No | Unique identifier for the invoice. |
| `updated_at` | `string` | No |  |
| `void` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `customer_information_preview` | `/invoices/{uid}/customer_information/preview.json` | `client.Invoice().create({ $action: 'customer_information_preview', ... })` |
| `delivery` | `/invoices/{uid}/deliveries.json` | `client.Invoice().create({ $action: 'delivery', ... })` |
| `issue` | `/invoices/{uid}/issue.json` | `client.Invoice().create({ $action: 'issue', ... })` |
| `payment` | `/invoices/{uid}/payments.json` | `client.Invoice().create({ $action: 'payment', ... })` |
| `payment` | `/invoices/payments.json` | `client.Invoice().create({ $action: 'payment', ... })` |
| `refund` | `/invoices/{uid}/refunds.json` | `client.Invoice().create({ $action: 'refund', ... })` |
| `reopen` | `/invoices/{uid}/reopen.json` | `client.Invoice().create({ $action: 'reopen', ... })` |
| `void` | `/invoices/{uid}/void.json` | `client.Invoice().create({ $action: 'void', ... })` |
| `event` | `/invoices/events.json` | `client.Invoice().list({ $action: 'event', ... })` |
| `row` | `/api_exports/invoices/{batch_id}/rows.json` | `client.Invoice().list({ $action: 'row', ... })` |
| `segment` | `/invoices/{invoice_uid}/segments.json` | `client.Invoice().list({ $action: 'segment', ... })` |
| `uid` | `/invoices/{uid}.json` | `client.Invoice().list({ $action: 'uid', ... })` |
| `uid` | `/subscriptions/{subscription_id}/invoices/{uid}.json` | `client.Invoice().remove({ $action: 'uid', ... })` |
| `customer_information` | `/invoices/{uid}/customer_information.json` | `client.Invoice().update({ $action: 'customer_information', ... })` |
| `uid` | `/subscriptions/{subscription_id}/invoices/{uid}.json` | `client.Invoice().update({ $action: 'uid', ... })` |

An action returns that action's OWN response, which is not necessarily a
Invoice record — check the API definition for its shape.

```ts
const result = await client.Invoice().create({
  $action: 'customer_information_preview',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Invoice().create({
  subscription_id: 1,
  credit_notes: [],
  invoices: [],
  void: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Invoice().list({ uid: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Invoice().remove({ subscription_id: 1, uid: 'uid' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Invoice().update({
  subscription_id: 1,
  uid: 'uid',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListProformaInvoiceEntity

```ts
const list_proforma_invoice = client.ListProformaInvoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `Record<string, any>` | No |  |
| `billing_address` | `Record<string, any>` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `any[]` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `any[]` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `any[]` | No |  |
| `due_amount` | `string` | No |  |
| `line_items` | `any[]` | No |  |
| `memo` | `string` | No |  |
| `number` | `number` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `any[]` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `number` | No |  |
| `shipping_address` | `Record<string, any>` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `number` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `any[]` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListProformaInvoice().list({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListProformaInvoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSaleRepItemEntity

```ts
const list_sale_rep_item = client.ListSaleRepItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `number` | No |  |
| `mrr_data` | `Record<string, any>` | No |  |
| `subscriptions_count` | `number` | No |  |
| `test_mode` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListSaleRepItem().list({ seller_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSaleRepItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListSegmentEntity

```ts
const list_segment = client.ListSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `number` | No |  |
| `id` | `number` | No |  |
| `price_point_id` | `number` | No |  |
| `prices` | `any[]` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `segments` | `any[]` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ListSegment().create({
  component_id: 'example_component_id',
  price_point_id: 'example_price_point_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListSegment().list({ component_id: "example", price_point_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ListSegment().update({
  component_id: 'component_id',
  price_point_id: 'price_point_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListSegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OfferEntity

```ts
const offer = client.Offer()
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
| `offer` | `Record<string, any>` | No |  |
| `offer_discounts` | `any[]` | No |  |
| `offer_items` | `any[]` | No |  |
| `offer_signup_pages` | `any[]` | No |  |
| `offers` | `any[]` | No |  |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `offer_id` | `/offers/{offer_id}.json` | `client.Offer().load({ $action: 'offer_id', ... })` |
| `archive` | `/offers/{offer_id}/archive.json` | `client.Offer().update({ $action: 'archive', ... })` |
| `unarchive` | `/offers/{offer_id}/unarchive.json` | `client.Offer().update({ $action: 'unarchive', ... })` |

An action returns that action's OWN response, which is not necessarily a
Offer record — check the API definition for its shape.

```ts
const result = await client.Offer().load({
  $action: 'offer_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Offer().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Offer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Offer().load({ offer_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Offer().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OfferEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OneTimeTokenEntity

```ts
const one_time_token = client.OneTimeToken()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `chargify_token` | `/one_time_tokens/{chargify_token}.json` | `client.OneTimeToken().load({ $action: 'chargify_token', ... })` |

An action returns that action's OWN response, which is not necessarily a
OneTimeToken record — check the API definition for its shape.

```ts
const result = await client.OneTimeToken().load({
  $action: 'chargify_token',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OneTimeToken().load({ chargify_token: 'chargify_token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OneTimeTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaymentProfileEntity

```ts
const payment_profile = client.PaymentProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `payment_profile` | `Record<string, any>` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `payment_profile` | - | Yes | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `change_payment_profile` | `/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | `client.PaymentProfile().create({ $action: 'change_payment_profile', ... })` |
| `change_payment_profile` | `/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | `client.PaymentProfile().create({ $action: 'change_payment_profile', ... })` |
| `payment_profile_id` | `/payment_profiles/{payment_profile_id}.json` | `client.PaymentProfile().load({ $action: 'payment_profile_id', ... })` |
| `payment_profile_id` | `/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json` | `client.PaymentProfile().remove({ $action: 'payment_profile_id', ... })` |
| `payment_profile_id` | `/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json` | `client.PaymentProfile().remove({ $action: 'payment_profile_id', ... })` |
| `payment_profile_id` | `/payment_profiles/{payment_profile_id}.json` | `client.PaymentProfile().remove({ $action: 'payment_profile_id', ... })` |
| `payment_profile_id` | `/payment_profiles/{payment_profile_id}.json` | `client.PaymentProfile().update({ $action: 'payment_profile_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
PaymentProfile record — check the API definition for its shape.

```ts
const result = await client.PaymentProfile().create({
  $action: 'change_payment_profile',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PaymentProfile().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PaymentProfile().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PaymentProfile().load({ payment_profile_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.PaymentProfile().remove({ payment_profile_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PaymentProfile().update({
  bank_account_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaymentProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PrepaymentEntity

```ts
const prepayment = client.Prepayment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `refund` | `/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json` | `client.Prepayment().create({ $action: 'refund', ... })` |

An action returns that action's OWN response, which is not necessarily a
Prepayment record — check the API definition for its shape.

```ts
const result = await client.Prepayment().create({
  $action: 'refund',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Prepayment().create({
  id: 1,
  subscription_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PrepaymentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductEntity

```ts
const product = client.Product()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `product` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `product` | - | - | Yes | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `product_id` | `/products/{product_id}.json` | `client.Product().load({ $action: 'product_id', ... })` |
| `product_id` | `/products/{product_id}.json` | `client.Product().remove({ $action: 'product_id', ... })` |
| `product_id` | `/products/{product_id}.json` | `client.Product().update({ $action: 'product_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Product record — check the API definition for its shape.

```ts
const result = await client.Product().load({
  $action: 'product_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Product().create({
  product_family_id: 'example_product_family_id',
  product: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Product().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Product().load({ api_handle: 'api_handle' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Product().remove({ product_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Product().update({
  product_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductFamilyEntity

```ts
const product_family = client.ProductFamily()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `product_family` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `id` | `/product_families/{id}.json` | `client.ProductFamily().load({ $action: 'id', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProductFamily record — check the API definition for its shape.

```ts
const result = await client.ProductFamily().load({
  $action: 'id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProductFamily().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProductFamily().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProductFamily().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductFamilyEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductFeatureEntity

```ts
const product_feature = client.ProductFeature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProductFeature().remove({ id: 1, product_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductFeatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProductPricePointEntity

```ts
const product_price_point = client.ProductPricePoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `price_point` | `Record<string, any>` | Yes |  |
| `price_points` | `any[]` | No |  |
| `product` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `price_point` | - | - | Yes | Yes | - |
| `price_points` | - | Yes | - | - | - |
| `product` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `currency_price` | `/product_price_points/{product_price_point_id}/currency_prices.json` | `client.ProductPricePoint().create({ $action: 'currency_price', ... })` |
| `currency_price` | `/product_price_points/{product_price_point_id}/currency_prices.json` | `client.ProductPricePoint().update({ $action: 'currency_price', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProductPricePoint record — check the API definition for its shape.

```ts
const result = await client.ProductPricePoint().create({
  $action: 'currency_price',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProductPricePoint().create({
  id: 'example_id',
  price_point: {},
  product: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProductPricePoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProductPricePoint().load({ price_point_id: 'price_point_id', product_id: 'product_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ProductPricePoint().remove({ price_point_id: 'price_point_id', product_id: 'product_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ProductPricePoint().update({
  price_point_id: 'price_point_id',
  product_id: 'product_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProductPricePointEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProformaInvoiceEntity

```ts
const proforma_invoice = client.ProformaInvoice()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_actions` | `Record<string, any>` | No |  |
| `billing_address` | `Record<string, any>` | No |  |
| `collection_method` | `any` | No |  |
| `consolidation_level` | `any` | No |  |
| `created_at` | `string` | No |  |
| `credit_amount` | `string` | No |  |
| `credits` | `any[]` | No |  |
| `currency` | `string` | No |  |
| `custom_fields` | `any[]` | No |  |
| `customer` | `any` | No |  |
| `customer_id` | `number` | No |  |
| `delivery_date` | `string` | No |  |
| `discount_amount` | `string` | No |  |
| `discounts` | `any[]` | No |  |
| `due_amount` | `string` | No |  |
| `id` | `string` | No |  |
| `line_items` | `any[]` | No |  |
| `memo` | `string` | No |  |
| `number` | `number` | No |  |
| `paid_amount` | `string` | No |  |
| `payment_instructions` | `string` | No |  |
| `payments` | `any[]` | No |  |
| `product_family_name` | `string` | No |  |
| `product_name` | `string` | No |  |
| `public_url` | `string` | No |  |
| `refund_amount` | `string` | No |  |
| `role` | `any` | No |  |
| `seller` | `any` | No |  |
| `sequence_number` | `number` | No |  |
| `shipping_address` | `Record<string, any>` | No |  |
| `site_id` | `number` | No |  |
| `status` | `string` | No |  |
| `subscription_id` | `number` | No |  |
| `subtotal_amount` | `string` | No |  |
| `tax_amount` | `string` | No |  |
| `taxes` | `any[]` | No |  |
| `total_amount` | `string` | No |  |
| `uid` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `delivery` | `/proforma_invoices/{proforma_invoice_uid}/deliveries.json` | `client.ProformaInvoice().create({ $action: 'delivery', ... })` |
| `preview` | `/subscriptions/{subscription_id}/proforma_invoices/preview.json` | `client.ProformaInvoice().create({ $action: 'preview', ... })` |
| `void` | `/proforma_invoices/{proforma_invoice_uid}/void.json` | `client.ProformaInvoice().create({ $action: 'void', ... })` |
| `proforma_invoice_uid` | `/proforma_invoices/{proforma_invoice_uid}.json` | `client.ProformaInvoice().list({ $action: 'proforma_invoice_uid', ... })` |
| `row` | `/api_exports/proforma_invoices/{batch_id}/rows.json` | `client.ProformaInvoice().list({ $action: 'row', ... })` |

An action returns that action's OWN response, which is not necessarily a
ProformaInvoice record — check the API definition for its shape.

```ts
const result = await client.ProformaInvoice().create({
  $action: 'delivery',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProformaInvoice().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProformaInvoice().list({ proforma_invoice_uid: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProformaInvoiceEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReasonCodeEntity

```ts
const reason_code = client.ReasonCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `position` | `number` | No |  |
| `reason_code` | `Record<string, any>` | Yes |  |
| `site_id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reason_code_id` | `/reason_codes/{reason_code_id}.json` | `client.ReasonCode().load({ $action: 'reason_code_id', ... })` |
| `reason_code_id` | `/reason_codes/{reason_code_id}.json` | `client.ReasonCode().remove({ $action: 'reason_code_id', ... })` |
| `reason_code_id` | `/reason_codes/{reason_code_id}.json` | `client.ReasonCode().update({ $action: 'reason_code_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
ReasonCode record — check the API definition for its shape.

```ts
const result = await client.ReasonCode().load({
  $action: 'reason_code_id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReasonCode().create({
  reason_code: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReasonCode().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReasonCode().load({ reason_code_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ReasonCode().remove({ reason_code_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReasonCode().update({
  reason_code_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReasonCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReferralCodeEntity

```ts
const referral_code = client.ReferralCode()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `validate` | `/referral_codes/validate.json` | `client.ReferralCode().load({ $action: 'validate', ... })` |

An action returns that action's OWN response, which is not necessarily a
ReferralCode record — check the API definition for its shape.

```ts
const result = await client.ReferralCode().load({
  $action: 'validate',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReferralCode().load({ code: 'code' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReferralCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SaleRepSettingEntity

```ts
const sale_rep_setting = client.SaleRepSetting()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SaleRepSetting().list({ seller_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SaleRepSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SalesCommissionEntity

```ts
const sales_commission = client.SalesCommission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `full_name` | `string` | No |  |
| `id` | `number` | No |  |
| `subscriptions` | `any[]` | No |  |
| `subscriptions_count` | `number` | No |  |
| `test_mode` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SalesCommission().list({ sales_rep_id: "example", seller_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SalesCommissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `event_based_billing_metric_id` | `number` | No |  |
| `id` | `number` | No |  |
| `price_point_id` | `number` | No |  |
| `prices` | `any[]` | No |  |
| `pricing_scheme` | `any` | No |  |
| `segment_property_1_value` | `any` | No |  |
| `segment_property_2_value` | `any` | No |  |
| `segment_property_3_value` | `any` | No |  |
| `segment_property_4_value` | `any` | No |  |
| `updated_at` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `id` | `/components/{component_id}/price_points/{price_point_id}/segments/{id}.json` | `client.Segment().update({ $action: 'id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Segment record — check the API definition for its shape.

```ts
const result = await client.Segment().update({
  $action: 'id',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Segment().create({
  component_id: 'example_component_id',
  price_point_id: 'example_price_point_id',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Segment().update({
  component_id: 'component_id',
  id: 1,
  price_point_id: 'price_point_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SignupProformaPreviewEntity

```ts
const signup_proforma_preview = client.SignupProformaPreview()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SignupProformaPreview().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SignupProformaPreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SiteEntity

```ts
const site = client.Site()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chargify_js_keys` | `any[]` | No |  |
| `meta` | `Record<string, any>` | No |  |
| `site` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `clear_data` | `/sites/clear_data.json` | `client.Site().create({ $action: 'clear_data', ... })` |

An action returns that action's OWN response, which is not necessarily a
Site record — check the API definition for its shape.

```ts
const result = await client.Site().create({
  $action: 'clear_data',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Site().create({
  site: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Site().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Site().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionEntity

```ts
const subscription = client.Subscription()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activated_at` | `string` | No | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | No | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `number` | No | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `Record<string, any>` | Yes |  |
| `cancel_at_end_of_period` | `boolean` | No | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | No | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | No | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `any` | No |  |
| `coupon_code` | `string` | No | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `any[]` | No | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `number` | No | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `number` | No | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `any[]` | No | Additional coupon data. |
| `created_at` | `string` | No | The creation date for this subscription |
| `credit_balance_in_cents` | `number` | No |  |
| `credit_card` | `any` | No |  |
| `currency` | `string` | No |  |
| `current_billing_amount_in_cents` | `number` | No | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | No | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | No | Timestamp relating to the start of the current (recurring) period |
| `customer` | `Record<string, any>` | No |  |
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
| `product` | `Record<string, any>` | No |  |
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
| `subscription` | `Record<string, any>` | No |  |
| `total_revenue_in_cents` | `number` | No | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | No | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | No | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | No | The date of last update for this subscription |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `add_coupon` | `/subscriptions/{subscription_id}/add_coupon.json` | `client.Subscription().create({ $action: 'add_coupon', ... })` |
| `cancel_dunning` | `/subscriptions/{subscription_id}/cancel_dunning.json` | `client.Subscription().create({ $action: 'cancel_dunning', ... })` |
| `prepaid_configuration` | `/subscriptions/{subscription_id}/prepaid_configurations.json` | `client.Subscription().create({ $action: 'prepaid_configuration', ... })` |
| `preview` | `/subscriptions/preview.json` | `client.Subscription().create({ $action: 'preview', ... })` |
| `purge` | `/subscriptions/{subscription_id}/purge.json` | `client.Subscription().create({ $action: 'purge', ... })` |
| `row` | `/api_exports/subscriptions/{batch_id}/rows.json` | `client.Subscription().list({ $action: 'row', ... })` |
| `lookup` | `/subscriptions/lookup.json` | `client.Subscription().load({ $action: 'lookup', ... })` |
| `subscription_id` | `/subscriptions/{subscription_id}.json` | `client.Subscription().load({ $action: 'subscription_id', ... })` |
| `remove_coupon` | `/subscriptions/{subscription_id}/remove_coupon.json` | `client.Subscription().remove({ $action: 'remove_coupon', ... })` |
| `activate` | `/subscriptions/{subscription_id}/activate.json` | `client.Subscription().update({ $action: 'activate', ... })` |
| `override` | `/subscriptions/{subscription_id}/override.json` | `client.Subscription().update({ $action: 'override', ... })` |
| `subscription_id` | `/subscriptions/{subscription_id}.json` | `client.Subscription().update({ $action: 'subscription_id', ... })` |

An action returns that action's OWN response, which is not necessarily a
Subscription record — check the API definition for its shape.

```ts
const result = await client.Subscription().create({
  $action: 'add_coupon',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Subscription().create({
  bank_account: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Subscription().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Subscription().load({ subscription_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Subscription().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Subscription().update({
  subscription_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionComponentEntity

```ts
const subscription_component = client.SubscriptionComponent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | `any` | No | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `Record<string, any>` | No |  |
| `allocation_preview` | `Record<string, any>` | No |  |
| `allow_fractional_quantities` | `boolean` | No |  |
| `archived_at` | `string` | No |  |
| `component` | `Record<string, any>` | No |  |
| `component_handle` | `string` | No |  |
| `component_id` | `number` | No |  |
| `created_at` | `string` | No |  |
| `currency` | `string` | No |  |
| `description` | `string` | No |  |
| `display_on_hosted_page` | `boolean` | No |  |
| `downgrade_credit` | `any` | No |  |
| `enabled` | `boolean` | No | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `any[]` | No |  |
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
| `subscription` | `Record<string, any>` | No |  |
| `subscription_id` | `number` | No |  |
| `unit_balance` | `any` | No |  |
| `unit_name` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upgrade_charge` | `any` | No |  |
| `usage` | `Record<string, any>` | No |  |
| `use_site_exchange_rate` | `boolean` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `price_points.json` | `/subscriptions/{subscription_id}/price_points.json` | `client.SubscriptionComponent().create({ $action: 'price_points.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionComponent record — check the API definition for its shape.

```ts
const result = await client.SubscriptionComponent().create({
  $action: 'price_points.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionComponent().create({
  api_handle: 'example_api_handle',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionComponent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionComponent().load({ component_id: 1, subscription_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionComponent().remove({ allocation_id: 1, component_id: 1, subscription_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriptionComponent().update({
  allocation_id: 1,
  component_id: 1,
  subscription_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionComponentEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionGroupEntity

```ts
const subscription_group = client.SubscriptionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `meta` | `Record<string, any>` | No |  |
| `subscription_group` | `Record<string, any>` | No |  |
| `subscription_groups` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `lookup` | `/subscription_groups/lookup.json` | `client.SubscriptionGroup().list({ $action: 'lookup', ... })` |
| `uid` | `/subscription_groups/{uid}.json` | `client.SubscriptionGroup().list({ $action: 'uid', ... })` |
| `uid` | `/subscription_groups/{uid}.json` | `client.SubscriptionGroup().remove({ $action: 'uid', ... })` |
| `uid` | `/subscription_groups/{uid}.json` | `client.SubscriptionGroup().update({ $action: 'uid', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionGroup record — check the API definition for its shape.

```ts
const result = await client.SubscriptionGroup().list({
  $action: 'lookup',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionGroup().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionGroup().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionGroup().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriptionGroup().update({
  uid: 'uid',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionGroupInvoiceAccountEntity

```ts
const subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `prepayments.json` | `/subscription_groups/{uid}/prepayments.json` | `client.SubscriptionGroupInvoiceAccount().create({ $action: 'prepayments.json', ... })` |
| `service_credit_deductions.json` | `/subscription_groups/{uid}/service_credit_deductions.json` | `client.SubscriptionGroupInvoiceAccount().create({ $action: 'service_credit_deductions.json', ... })` |
| `service_credits.json` | `/subscription_groups/{uid}/service_credits.json` | `client.SubscriptionGroupInvoiceAccount().create({ $action: 'service_credits.json', ... })` |
| `prepayments.json` | `/subscription_groups/{uid}/prepayments.json` | `client.SubscriptionGroupInvoiceAccount().list({ $action: 'prepayments.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionGroupInvoiceAccount record — check the API definition for its shape.

```ts
const result = await client.SubscriptionGroupInvoiceAccount().create({
  $action: 'prepayments.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionGroupInvoiceAccount().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionGroupInvoiceAccount().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionGroupInvoiceAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionGroupSignupEntity

```ts
const subscription_group_signup = client.SubscriptionGroupSignup()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionGroupSignup().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionGroupSignupEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionGroupStatusEntity

```ts
const subscription_group_status = client.SubscriptionGroupStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel.json` | `/subscription_groups/{uid}/cancel.json` | `client.SubscriptionGroupStatus().create({ $action: 'cancel.json', ... })` |
| `delayed_cancel.json` | `/subscription_groups/{uid}/delayed_cancel.json` | `client.SubscriptionGroupStatus().create({ $action: 'delayed_cancel.json', ... })` |
| `reactivate.json` | `/subscription_groups/{uid}/reactivate.json` | `client.SubscriptionGroupStatus().create({ $action: 'reactivate.json', ... })` |
| `delayed_cancel.json` | `/subscription_groups/{uid}/delayed_cancel.json` | `client.SubscriptionGroupStatus().remove({ $action: 'delayed_cancel.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionGroupStatus record — check the API definition for its shape.

```ts
const result = await client.SubscriptionGroupStatus().create({
  $action: 'cancel.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionGroupStatus().create({
  id: 'example_id',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionGroupStatus().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionGroupStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionInvoiceAccountEntity

```ts
const subscription_invoice_account = client.SubscriptionInvoiceAccount()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `service_credits` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `prepayments.json` | `/subscriptions/{subscription_id}/prepayments.json` | `client.SubscriptionInvoiceAccount().create({ $action: 'prepayments.json', ... })` |
| `service_credit_deductions.json` | `/subscriptions/{subscription_id}/service_credit_deductions.json` | `client.SubscriptionInvoiceAccount().create({ $action: 'service_credit_deductions.json', ... })` |
| `service_credits.json` | `/subscriptions/{subscription_id}/service_credits.json` | `client.SubscriptionInvoiceAccount().create({ $action: 'service_credits.json', ... })` |
| `prepayments.json` | `/subscriptions/{subscription_id}/prepayments.json` | `client.SubscriptionInvoiceAccount().list({ $action: 'prepayments.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionInvoiceAccount record — check the API definition for its shape.

```ts
const result = await client.SubscriptionInvoiceAccount().create({
  $action: 'prepayments.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionInvoiceAccount().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionInvoiceAccount().list({ subscription_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionInvoiceAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionMrrEntity

```ts
const subscription_mrr = client.SubscriptionMrr()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakouts` | `Record<string, any>` | Yes |  |
| `mrr_amount_in_cents` | `number` | Yes |  |
| `subscription_id` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionMrr().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionMrrEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionNoteEntity

```ts
const subscription_note = client.SubscriptionNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No |  |
| `created_at` | `string` | No |  |
| `id` | `number` | No |  |
| `note` | `Record<string, any>` | Yes |  |
| `sticky` | `boolean` | No |  |
| `subscription_id` | `number` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionNote().create({
  id: 1,
  note: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionNote().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionNote().load({ note_id: 1, subscription_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionNote().remove({ note_id: 1, subscription_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriptionNote().update({
  note_id: 1,
  subscription_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionProductEntity

```ts
const subscription_product = client.SubscriptionProduct()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `migration` | `Record<string, any>` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `migrations.json` | `/subscriptions/{subscription_id}/migrations.json` | `client.SubscriptionProduct().create({ $action: 'migrations.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionProduct record — check the API definition for its shape.

```ts
const result = await client.SubscriptionProduct().create({
  $action: 'migrations.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionProduct().create({
  subscription_id: 1,
  migration: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionProductEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionRenewalEntity

```ts
const subscription_renewal = client.SubscriptionRenewal()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scheduled_renewal_configuration` | `Record<string, any>` | No |  |
| `scheduled_renewal_configuration_item` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `scheduled_renewals.json` | `/subscriptions/{subscription_id}/scheduled_renewals.json` | `client.SubscriptionRenewal().create({ $action: 'scheduled_renewals.json', ... })` |
| `scheduled_renewals.json` | `/subscriptions/{subscription_id}/scheduled_renewals.json` | `client.SubscriptionRenewal().list({ $action: 'scheduled_renewals.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionRenewal record — check the API definition for its shape.

```ts
const result = await client.SubscriptionRenewal().create({
  $action: 'scheduled_renewals.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionRenewal().create({
  scheduled_renewal_id: 1,
  subscription_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionRenewal().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionRenewal().load({ id: 1, subscription_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionRenewal().remove({ id: 1, scheduled_renewal_id: 1, subscription_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriptionRenewal().update({
  id: 1,
  subscription_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionRenewalEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionStatusEntity

```ts
const subscription_status = client.SubscriptionStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `renewal_preview` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `hold.json` | `/subscriptions/{subscription_id}/hold.json` | `client.SubscriptionStatus().create({ $action: 'hold.json', ... })` |
| `resume.json` | `/subscriptions/{subscription_id}/resume.json` | `client.SubscriptionStatus().create({ $action: 'resume.json', ... })` |
| `delayed_cancel.json` | `/subscriptions/{subscription_id}/delayed_cancel.json` | `client.SubscriptionStatus().remove({ $action: 'delayed_cancel.json', ... })` |
| `hold.json` | `/subscriptions/{subscription_id}/hold.json` | `client.SubscriptionStatus().update({ $action: 'hold.json', ... })` |
| `reactivate.json` | `/subscriptions/{subscription_id}/reactivate.json` | `client.SubscriptionStatus().update({ $action: 'reactivate.json', ... })` |
| `retry.json` | `/subscriptions/{subscription_id}/retry.json` | `client.SubscriptionStatus().update({ $action: 'retry.json', ... })` |

An action returns that action's OWN response, which is not necessarily a
SubscriptionStatus record — check the API definition for its shape.

```ts
const result = await client.SubscriptionStatus().create({
  $action: 'hold.json',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubscriptionStatus().create({
  subscription_id: 1,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SubscriptionStatus().remove({ subscription_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SubscriptionStatus().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usage` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Usage().list({ component_id: "example", subscription_id_or_reference: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `endpoint` | `Record<string, any>` | No |  |
| `webhook` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `replay` | `/webhooks/replay.json` | `client.Webhook().create({ $action: 'replay', ... })` |
| `setting` | `/webhooks/settings.json` | `client.Webhook().update({ $action: 'setting', ... })` |

An action returns that action's OWN response, which is not necessarily a
Webhook record — check the API definition for its shape.

```ts
const result = await client.Webhook().create({
  $action: 'replay',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Webhook().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `MaxioAdvancedBillingSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new MaxioAdvancedBillingSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

