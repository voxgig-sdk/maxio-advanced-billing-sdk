# MaxioAdvancedBilling TypeScript SDK



The TypeScript SDK for the MaxioAdvancedBilling API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AccountBalance()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/maxio-advanced-billing-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/maxio-advanced-billing-sdk
npm install ./maxio-advanced-billing-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { MaxioAdvancedBillingSDK } from '@voxgig-sdk/maxio-advanced-billing-sdk'

const client = new MaxioAdvancedBillingSDK({
  apikey: process.env.MAXIO_ADVANCED_BILLING_APIKEY,
  secret: process.env.MAXIO_ADVANCED_BILLING_SECRET,
  // Required: this API's server URL is templated on these.
  server: {
    site: '<site>',
  },
})
```

### 3. Load an accountbalance

AccountBalance is nested under subscription, so provide the `subscription_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const accountbalance = await client.AccountBalance().load({
    subscription_id: 1,
  })
  console.log(accountbalance)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const customfields = await client.CustomField().list()
  console.log(customfields)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = MaxioAdvancedBillingSDK.test()

const customfield = await client.CustomField().list()
// customfield is the entity, populated with mock response data
// — call customfield.data() for the record itself
console.log(customfield)
```

You can also use the instance method:

```ts
const client = new MaxioAdvancedBillingSDK({ apikey: '...', secret: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.CustomField()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new MaxioAdvancedBillingSDK({
  apikey: '...',
  secret: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE
MAXIO_ADVANCED_BILLING_APIKEY=<your-key>
MAXIO_ADVANCED_BILLING_SECRET=<your-secret>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### MaxioAdvancedBillingSDK

#### Constructor

```ts
new MaxioAdvancedBillingSDK(options?: {
  apikey?: string
  secret?: string
  server?: { site: string }
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `server` | `object` | **Required.** Values for the server-URL variables: `site`. The API base URL is a template over them. |
| `apikey` | `string` | API key for authentication. |
| `secret` | `string` | API secret for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AccountBalance(data?)` | `AccountBalanceEntity` | Create an AccountBalance entity instance. |
| `Allocation(data?)` | `AllocationEntity` | Create an Allocation entity instance. |
| `BatchJob(data?)` | `BatchJobEntity` | Create a BatchJob entity instance. |
| `BillingPortal(data?)` | `BillingPortalEntity` | Create a BillingPortal entity instance. |
| `Component(data?)` | `ComponentEntity` | Create a Component entity instance. |
| `ComponentFeature(data?)` | `ComponentFeatureEntity` | Create a ComponentFeature entity instance. |
| `ComponentPricePoint(data?)` | `ComponentPricePointEntity` | Create a ComponentPricePoint entity instance. |
| `ComponentPricePointCurrencyOverage(data?)` | `ComponentPricePointCurrencyOverageEntity` | Create a ComponentPricePointCurrencyOverage entity instance. |
| `Coupon(data?)` | `CouponEntity` | Create a Coupon entity instance. |
| `CouponCurrency(data?)` | `CouponCurrencyEntity` | Create a CouponCurrency entity instance. |
| `CouponSubcode(data?)` | `CouponSubcodeEntity` | Create a CouponSubcode entity instance. |
| `CouponUsage(data?)` | `CouponUsageEntity` | Create a CouponUsage entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `Customer(data?)` | `CustomerEntity` | Create a Customer entity instance. |
| `DelayedCancel(data?)` | `DelayedCancelEntity` | Create a DelayedCancel entity instance. |
| `Endpoint(data?)` | `EndpointEntity` | Create an Endpoint entity instance. |
| `Entitlement(data?)` | `EntitlementEntity` | Create an Entitlement entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `EventsBasedBillingSegment(data?)` | `EventsBasedBillingSegmentEntity` | Create an EventsBasedBillingSegment entity instance. |
| `Feature(data?)` | `FeatureEntity` | Create a Feature entity instance. |
| `FeatureCatalogItem(data?)` | `FeatureCatalogItemEntity` | Create a FeatureCatalogItem entity instance. |
| `FeatureTemplate(data?)` | `FeatureTemplateEntity` | Create a FeatureTemplate entity instance. |
| `Insight(data?)` | `InsightEntity` | Create an Insight entity instance. |
| `Invoice(data?)` | `InvoiceEntity` | Create an Invoice entity instance. |
| `ListSaleRepItem(data?)` | `ListSaleRepItemEntity` | Create a ListSaleRepItem entity instance. |
| `ListSegment(data?)` | `ListSegmentEntity` | Create a ListSegment entity instance. |
| `Offer(data?)` | `OfferEntity` | Create an Offer entity instance. |
| `OneTimeToken(data?)` | `OneTimeTokenEntity` | Create an OneTimeToken entity instance. |
| `PaymentProfile(data?)` | `PaymentProfileEntity` | Create a PaymentProfile entity instance. |
| `Prepayment(data?)` | `PrepaymentEntity` | Create a Prepayment entity instance. |
| `Product(data?)` | `ProductEntity` | Create a Product entity instance. |
| `ProductFamily(data?)` | `ProductFamilyEntity` | Create a ProductFamily entity instance. |
| `ProductFeature(data?)` | `ProductFeatureEntity` | Create a ProductFeature entity instance. |
| `ProductPricePoint(data?)` | `ProductPricePointEntity` | Create a ProductPricePoint entity instance. |
| `ProformaInvoice(data?)` | `ProformaInvoiceEntity` | Create a ProformaInvoice entity instance. |
| `ReasonCode(data?)` | `ReasonCodeEntity` | Create a ReasonCode entity instance. |
| `ReferralCode(data?)` | `ReferralCodeEntity` | Create a ReferralCode entity instance. |
| `SaleRepSetting(data?)` | `SaleRepSettingEntity` | Create a SaleRepSetting entity instance. |
| `SalesCommission(data?)` | `SalesCommissionEntity` | Create a SalesCommission entity instance. |
| `Segment(data?)` | `SegmentEntity` | Create a Segment entity instance. |
| `SignupProformaPreview(data?)` | `SignupProformaPreviewEntity` | Create a SignupProformaPreview entity instance. |
| `Site(data?)` | `SiteEntity` | Create a Site entity instance. |
| `Subscription(data?)` | `SubscriptionEntity` | Create a Subscription entity instance. |
| `SubscriptionComponent(data?)` | `SubscriptionComponentEntity` | Create a SubscriptionComponent entity instance. |
| `SubscriptionGroup(data?)` | `SubscriptionGroupEntity` | Create a SubscriptionGroup entity instance. |
| `SubscriptionGroupInvoiceAccount(data?)` | `SubscriptionGroupInvoiceAccountEntity` | Create a SubscriptionGroupInvoiceAccount entity instance. |
| `SubscriptionGroupSignup(data?)` | `SubscriptionGroupSignupEntity` | Create a SubscriptionGroupSignup entity instance. |
| `SubscriptionGroupStatus(data?)` | `SubscriptionGroupStatusEntity` | Create a SubscriptionGroupStatus entity instance. |
| `SubscriptionInvoiceAccount(data?)` | `SubscriptionInvoiceAccountEntity` | Create a SubscriptionInvoiceAccount entity instance. |
| `SubscriptionMrr(data?)` | `SubscriptionMrrEntity` | Create a SubscriptionMrr entity instance. |
| `SubscriptionNote(data?)` | `SubscriptionNoteEntity` | Create a SubscriptionNote entity instance. |
| `SubscriptionProduct(data?)` | `SubscriptionProductEntity` | Create a SubscriptionProduct entity instance. |
| `SubscriptionRenewal(data?)` | `SubscriptionRenewalEntity` | Create a SubscriptionRenewal entity instance. |
| `SubscriptionStatus(data?)` | `SubscriptionStatusEntity` | Create a SubscriptionStatus entity instance. |
| `Usage(data?)` | `UsageEntity` | Create an Usage entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `MaxioAdvancedBillingSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `MaxioAdvancedBillingSDK.test(testopts?, sdkopts?)` | `MaxioAdvancedBillingSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): MaxioAdvancedBillingSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AccountBalance

| Field | Description |
| --- | --- |
| `open_invoices` |  |
| `pending_discounts` |  |
| `pending_invoices` |  |
| `prepayments` |  |
| `service_credits` |  |

Operations: load.

API path: `/subscriptions/{subscription_id}/account_balances.json`

#### Allocation

| Field | Description |
| --- | --- |
| `allocation` |  |

Operations: create, list.

API path: `/subscriptions/{subscription_id}/allocations.json`

#### BatchJob

| Field | Description |
| --- | --- |
| `completed` |  |
| `created_at` |  |
| `finished_at` |  |
| `id` |  |
| `row_count` |  |

Operations: create, load.

API path: `/api_exports/invoices.json`

#### BillingPortal

| Field | Description |
| --- | --- |
| `created_at` |  |
| `expires_at` |  |
| `fetch_count` |  |
| `last_accepted_at` |  |
| `last_invite_accepted_at` |  |
| `last_invite_sent_at` |  |
| `last_sent_at` |  |
| `new_link_available_at` |  |
| `send_invite_link_text` |  |
| `uninvited_count` |  |
| `url` |  |

Operations: create, load, remove.

API path: `/portal/customers/{customer_id}/invitations/invite.json`

#### Component

| Field | Description |
| --- | --- |
| `accounting_code` | E.g. |
| `allow_fractional_quantities` |  |
| `archived` | Boolean flag describing whether a component is archived or not. |
| `archived_at` | Timestamp indicating when this component was archived |
| `component` |  |
| `created_at` | Timestamp indicating when this component was created |
| `default_price_point_id` |  |
| `default_price_point_name` |  |
| `description` | The description of the component. |
| `downgrade_credit` |  |
| `event_based_billing_metric_id` | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `features` | The active feature catalog items attached to this component. |
| `handle` | The component API handle |
| `hide_date_range_on_invoice` | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | The unique ID assigned to the component by Chargify. |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `item_category` |  |
| `kind` |  |
| `name` | The name of the Component, suitable for display on statements. |
| `overage_prices` | Applicable only to prepaid usage components. |
| `price_per_unit_in_cents` | deprecated - use unit_price instead. |
| `price_point_count` | Count for the number of price points associated with the component |
| `price_points_url` | URL that points to the location to read the existing price points via GET request |
| `prices` | An array of price brackets. |
| `pricing_scheme` |  |
| `product_family_handle` | The handle of the Product Family to which the Component belongs |
| `product_family_id` | The id of the Product Family to which the Component belongs |
| `product_family_name` | The name of the Product Family to which the Component belongs |
| `recurring` |  |
| `tax_code` | A string representing the tax code related to the component type. |
| `taxable` | Boolean flag describing whether a component is taxable or not. |
| `unit_name` | The name of the unit that the component’s usage is measured in. |
| `unit_price` | The amount the customer will be charged per unit. |
| `unspsc_code` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | Timestamp indicating when this component was updated |
| `upgrade_charge` |  |
| `use_site_exchange_rate` |  |

Operations: create, list, load, remove, update.

API path: `/product_families/{product_family_id}/event_based_components.json`

#### ComponentFeature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/components/{component_id}/features/{id}.json`

#### ComponentPricePoint

| Field | Description |
| --- | --- |
| `accounting_code` | E.g. |
| `allow_fractional_quantities` |  |
| `archived` | Boolean flag describing whether a component is archived or not. |
| `archived_at` | Timestamp indicating when this component was archived |
| `component_id` |  |
| `created_at` | Timestamp indicating when this component was created |
| `currency_prices` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | Note: Refer to type attribute instead. |
| `default_price_point_id` |  |
| `default_price_point_name` |  |
| `description` | The description of the component. |
| `downgrade_credit` |  |
| `event_based_billing_metric_id` | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `expiration_interval` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` |  |
| `features` | The active feature catalog items attached to this component. |
| `handle` | The component API handle |
| `hide_date_range_on_invoice` | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | The unique ID assigned to the component by Chargify. |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `item_category` |  |
| `kind` |  |
| `name` | The name of the Component, suitable for display on statements. |
| `overage_prices` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` |  |
| `price_per_unit_in_cents` | deprecated - use unit_price instead. |
| `price_point` |  |
| `price_point_count` | Count for the number of price points associated with the component |
| `price_points` |  |
| `price_points_url` | URL that points to the location to read the existing price points via GET request |
| `prices` | An array of price brackets. |
| `pricing_scheme` |  |
| `product_family_handle` | The handle of the Product Family to which the Component belongs |
| `product_family_id` | The id of the Product Family to which the Component belongs |
| `product_family_name` | The name of the Product Family to which the Component belongs |
| `recurring` |  |
| `renew_prepaid_allocation` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | Applicable only to prepaid usage components. |
| `subscription_id` | (only used for Custom Pricing - ie. |
| `tax_code` | A string representing the tax code related to the component type. |
| `tax_included` |  |
| `taxable` | Boolean flag describing whether a component is taxable or not. |
| `type` |  |
| `unit_name` | The name of the unit that the component’s usage is measured in. |
| `unit_price` | The amount the customer will be charged per unit. |
| `unspsc_code` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | Timestamp indicating when this component was updated |
| `upgrade_charge` |  |
| `use_site_exchange_rate` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

Operations: create, list, remove, update.

API path: `/components/{component_id}/price_points/{price_point_id}/clone.json`

#### ComponentPricePointCurrencyOverage

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `component_id` |  |
| `created_at` |  |
| `currency_overage_prices` | Applicable only to prepaid usage components. |
| `currency_prices` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | Note: Refer to type attribute instead. |
| `expiration_interval` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` |  |
| `handle` |  |
| `id` |  |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `name` |  |
| `overage_prices` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` |  |
| `prices` |  |
| `pricing_scheme` |  |
| `renew_prepaid_allocation` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | Applicable only to prepaid usage components. |
| `subscription_id` | (only used for Custom Pricing - ie. |
| `tax_included` |  |
| `type` |  |
| `updated_at` |  |
| `use_site_exchange_rate` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

Operations: load.

API path: `/components/{component_id}/price_points/{price_point_id}.json`

#### Coupon

| Field | Description |
| --- | --- |
| `allow_negative_balance` | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` |  |
| `amount_in_cents` |  |
| `apply_on_cancel_at_end_of_period` |  |
| `apply_on_subscription_expiration` |  |
| `archived_at` |  |
| `code` |  |
| `compounding_strategy` |  |
| `conversion_limit` |  |
| `coupon` |  |
| `coupon_restrictions` |  |
| `created_at` |  |
| `currency_prices` | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` |  |
| `discount_type` |  |
| `duration_interval` |  |
| `duration_interval_span` |  |
| `duration_interval_unit` |  |
| `duration_period_count` |  |
| `end_date` | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` |  |
| `id` |  |
| `name` |  |
| `percentage` |  |
| `product_family_id` |  |
| `product_family_name` |  |
| `recurring` |  |
| `recurring_scheme` |  |
| `stackable` | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` |  |
| `updated_at` |  |
| `use_site_exchange_rate` |  |

Operations: create, list, load, remove, update.

API path: `/coupons/{coupon_id}/codes.json`

#### CouponCurrency

| Field | Description |
| --- | --- |
| `id` |  |

Operations: update.

API path: `/coupons/{coupon_id}/currency_prices.json`

#### CouponSubcode

| Field | Description |
| --- | --- |
| `created_codes` |  |
| `duplicate_codes` |  |
| `id` |  |
| `invalid_codes` |  |

Operations: update.

API path: `/coupons/{coupon_id}/codes.json`

#### CouponUsage

| Field | Description |
| --- | --- |
| `id` | The Chargify id of the product |
| `name` | Name of the product |
| `revenue` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | Dollar amount of customer savings as a result of the coupon. |
| `signups` | Number of times the coupon has been applied |

Operations: list.

API path: `/product_families/{product_family_id}/coupons/{coupon_id}/usage.json`

#### CustomField

| Field | Description |
| --- | --- |
| `data_count` | The amount of subscriptions this metafield has been applied to in Advanced Billing. |
| `deleted_at` |  |
| `enum` |  |
| `id` |  |
| `input_type` |  |
| `metadata` |  |
| `metafield_id` |  |
| `metafields` |  |
| `name` |  |
| `resource_id` |  |
| `scope` |  |
| `value` |  |

Operations: create, list, remove, update.

API path: `/{resource_type}/{resource_id}/metadata.json`

#### Customer

| Field | Description |
| --- | --- |
| `address` | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | The customer’s shipping address city (e.g., “Boston”) |
| `country` | The customer shipping address country |
| `country_name` | The customer's full name of country |
| `created_at` | The timestamp in which the customer object was created in Chargify |
| `customer` |  |
| `default_auto_renewal_profile_id` | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` |  |
| `email` | The email address of the customer |
| `entity_identifier_kind` |  |
| `entity_identifier_value` | The value of the customer's tax or business identifier. |
| `first_name` | The first name of the customer |
| `id` | The customer ID in Chargify |
| `last_name` | The last name of the customer |
| `locale` | The locale for the customer to identify language-region |
| `maxioid` | The Maxio-generated unique identifier for the customer. |
| `organization` | The organization of the customer. |
| `parent_id` | The parent ID in Chargify if applicable. |
| `phone` | The phone number of the customer |
| `portal_customer_created_at` | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | The unique identifier used within your own application for this customer |
| `salesforce_id` | The Salesforce ID for the customer |
| `state` | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | The customer's full name of state |
| `surcharging` | Whether surcharging is enabled for the customer. |
| `tax_exempt` | The tax exempt status for the customer. |
| `tax_exempt_reason` | The Tax Exemption Reason Code for the customer |
| `updated_at` | The timestamp in which the customer object was last edited |
| `vat_country` | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | The VAT business identification number for the customer. |
| `verified` | Is the customer verified to use ACH as a payment method. |
| `zip` | The customer’s shipping address zip code (e.g., “12345”) |

Operations: create, list, load, remove, update.

API path: `/portal/customers/{customer_id}/enable.json`

#### DelayedCancel

| Field | Description |
| --- | --- |
| `message` |  |
| `subscription` |  |

Operations: create.

API path: `/subscriptions/{subscription_id}/delayed_cancel.json`

#### Endpoint

| Field | Description |
| --- | --- |
| `id` |  |
| `site_id` |  |
| `status` |  |
| `url` |  |
| `webhook_subscriptions` |  |

Operations: list, update.

API path: `/endpoints.json`

#### Entitlement

| Field | Description |
| --- | --- |
| `customer_id` |  |
| `entitlements` |  |
| `status` | The subscription's current state, e.g. |
| `subscription_id` |  |

Operations: list.

API path: `/subscriptions/{subscription_id}/entitlements.json`

#### Event

| Field | Description |
| --- | --- |
| `event` |  |

Operations: list, load.

API path: `/events.json`

#### EventsBasedBillingSegment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/components/{component_id}/price_points/{price_point_id}/segments/{id}.json`

#### Feature

| Field | Description |
| --- | --- |
| `archived_at` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` |  |
| `default_periodicity_interval` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` |  |
| `default_value` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` |  |
| `feature` |  |
| `feature_key` | The `key` of the parent feature template. |
| `feature_kind` |  |
| `feature_name` | The `name` of the parent feature template. |
| `feature_template_id` | The id of the feature template this item was created from. |
| `id` | The Advanced Billing id of the feature template. |
| `key` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` |  |
| `name` | The display name of the feature. |
| `periodicity_interval` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` |  |
| `plans_count` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `price_point_id` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` |  |
| `products_count` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` |  |
| `value` | The value granted by this feature catalog item. |
| `value_type` |  |

Operations: create, list.

API path: `/components/{component_id}/features.json`

#### FeatureCatalogItem

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `created_at` |  |
| `feature` |  |
| `feature_key` | The `key` of the parent feature template. |
| `feature_kind` |  |
| `feature_name` | The `name` of the parent feature template. |
| `feature_template_id` | The id of the feature template this item was created from. |
| `id` |  |
| `periodicity_interval` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` |  |
| `price_point_id` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` |  |
| `updated_at` |  |
| `value` | The value granted by this feature catalog item. |

Operations: create, load, update.

API path: `/components/{component_id}/features/{id}/restore.json`

#### FeatureTemplate

| Field | Description |
| --- | --- |
| `archived_at` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` |  |
| `default_periodicity_interval` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` |  |
| `default_value` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` |  |
| `feature` |  |
| `id` | The Advanced Billing id of the feature template. |
| `key` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` |  |
| `name` | The display name of the feature. |
| `plans_count` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` |  |
| `value_type` |  |

Operations: create, load, remove, update.

API path: `/features/{id}/restore.json`

#### Insight

| Field | Description |
| --- | --- |
| `amount_formatted` |  |
| `amount_in_cents` |  |
| `at_time` | ISO8601 timestamp |
| `breakouts` |  |
| `currency` |  |
| `currency_symbol` |  |
| `movements` |  |
| `page` |  |
| `per_page` |  |
| `seller_name` |  |
| `site_currency` |  |
| `site_id` |  |
| `site_name` |  |
| `stats` |  |
| `total_entries` |  |
| `total_pages` |  |

Operations: load.

API path: `/mrr_movements.json`

#### Invoice

| Field | Description |
| --- | --- |
| `applications` |  |
| `applied_amount` | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` |  |
| `billing_address` |  |
| `branding_theme_id` | The ID of the Branding Theme associated with this invoice. |
| `collection_method` |  |
| `consolidation_level` |  |
| `created_at` |  |
| `credit_amount` | The amount of credit (from credit notes) applied to this invoice. |
| `credits` |  |
| `currency` | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` |  |
| `customer` |  |
| `customer_id` | ID of the customer to which the invoice belongs. |
| `debit_amount` |  |
| `debits` |  |
| `discount_amount` | Total discount applied to the invoice. |
| `discounts` |  |
| `display_settings` |  |
| `due_amount` | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | Date the invoice is due. |
| `group_primary_subscription_id` | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` |  |
| `issue_date` | Date the invoice was issued to the customer. |
| `line_items` | Line items on the invoice. |
| `memo` | The memo printed on invoices of any collection type. |
| `net_terms` |  |
| `number` | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | An array of origin invoices for the credit note. |
| `paid_amount` | The amount paid on the invoice by the customer. |
| `paid_date` | Date the invoice became fully paid. |
| `paid_invoices` |  |
| `parent_invoice_id` |  |
| `parent_invoice_number` | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` |  |
| `payment_instructions` | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` |  |
| `prepayment` |  |
| `previous_balance_data` |  |
| `product_family_name` | The name of the product family subscribed when the invoice was generated. |
| `product_name` | The name of the product subscribed when the invoice was generated. |
| `public_url` | The public URL of the invoice |
| `public_url_expires_on` | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` |  |
| `refund_amount` |  |
| `refunds` |  |
| `remaining_amount` | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` |  |
| `seller` |  |
| `sequence_number` | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` |  |
| `site_id` | ID of the site to which the invoice belongs. |
| `status` |  |
| `subscription_group_id` |  |
| `subscription_id` | ID of the subscription that generated the invoice. |
| `subtotal_amount` | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | Total tax on the invoice. |
| `taxes` |  |
| `total_amount` | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` |  |
| `uid` | Unique identifier for the invoice. |
| `updated_at` |  |
| `void` |  |

Operations: create, list, remove, update.

API path: `/invoices/{uid}/customer_information/preview.json`

#### ListSaleRepItem

| Field | Description |
| --- | --- |
| `full_name` |  |
| `id` |  |
| `mrr_data` |  |
| `subscriptions_count` |  |
| `test_mode` |  |

Operations: list.

API path: `/sellers/{seller_id}/sales_reps.json`

#### ListSegment

| Field | Description |
| --- | --- |
| `component_id` |  |
| `created_at` |  |
| `event_based_billing_metric_id` |  |
| `id` |  |
| `price_point_id` |  |
| `prices` |  |
| `pricing_scheme` |  |
| `segment_property_1_value` |  |
| `segment_property_2_value` |  |
| `segment_property_3_value` |  |
| `segment_property_4_value` |  |
| `segments` |  |
| `updated_at` |  |

Operations: create, list, update.

API path: `/components/{component_id}/price_points/{price_point_id}/segments/bulk.json`

#### Offer

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `created_at` |  |
| `description` |  |
| `handle` |  |
| `id` |  |
| `name` |  |
| `offer` |  |
| `offer_discounts` |  |
| `offer_items` |  |
| `offer_signup_pages` |  |
| `product_family_id` |  |
| `product_family_name` |  |
| `product_id` |  |
| `product_name` |  |
| `product_price_in_cents` |  |
| `product_price_point_id` |  |
| `product_price_point_name` |  |
| `product_revisable_number` |  |
| `site_id` |  |
| `updated_at` |  |

Operations: create, list, load, update.

API path: `/offers.json`

#### OneTimeToken

| Field | Description |
| --- | --- |

Operations: load.

API path: `/one_time_tokens/{chargify_token}.json`

#### PaymentProfile

| Field | Description |
| --- | --- |
| `bank_account_holder_type` |  |
| `bank_account_type` |  |
| `bank_name` | The bank where the account resides |
| `billing_address` | The current billing street address for the bank account |
| `billing_address_2` | The current billing street address, second line, for the bank account |
| `billing_city` | The current billing address city for the bank account |
| `billing_country` | The current billing address country for the bank account |
| `billing_state` | The current billing address state for the bank account |
| `billing_zip` | The current billing address zip code for the bank account |
| `card_type` |  |
| `created_at` | A timestamp indicating when this payment profile was created |
| `current_vault` |  |
| `customer_id` | The Chargify-assigned ID for the customer record to which the bank account belongs |
| `customer_vault_token` | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `disabled` |  |
| `expiration_month` |  |
| `expiration_year` |  |
| `first_name` | The first name of the bank account holder |
| `gateway_handle` |  |
| `id` | The Chargify-assigned ID of the stored bank account. |
| `last_name` | The last name of the bank account holder |
| `masked_bank_account_number` | A string representation of the stored bank account number with all but the last 4 digits marked with X's (i.e. |
| `masked_bank_routing_number` | A string representation of the stored bank routing number with all but the last 4 digits marked with X's (i.e. |
| `masked_card_number` |  |
| `payment_profile` |  |
| `payment_type` |  |
| `site_gateway_setting_id` |  |
| `updated_at` | A timestamp indicating when this payment profile was last updated |
| `vault_token` | The "token" provided by your vault storage for an already stored payment profile |
| `verified` | Denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account. |

Operations: create, list, load, remove, update.

API path: `/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json`

#### Prepayment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json`

#### Product

| Field | Description |
| --- | --- |
| `accounting_code` | E.g., Internal ID or SKU Number |
| `archived_at` | Timestamp indicating when this product was archived |
| `created_at` | Timestamp indicating when this product was created |
| `default_product_price_point_id` |  |
| `description` | The product description |
| `expiration_interval` | A numerical interval for the length a subscription to this product will run before it expires. |
| `expiration_interval_unit` |  |
| `features` | The active feature catalog items attached to this product. |
| `handle` | The product API handle |
| `id` |  |
| `initial_charge_after_trial` |  |
| `initial_charge_in_cents` | The up front charge you have specified. |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `item_category` | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | The product name |
| `price_in_cents` | The product price, in integer cents |
| `product` |  |
| `product_family` |  |
| `product_price_point_handle` |  |
| `product_price_point_id` |  |
| `product_price_point_name` |  |
| `public_signup_pages` |  |
| `request_billing_address` | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` |  |
| `tax_code` | A string representing the tax code related to the product type. |
| `taxable` |  |
| `trial_interval` | A numerical interval for the length of the trial period of a subscription to this product. |
| `trial_interval_unit` |  |
| `trial_price_in_cents` | The price of the trial period for a subscription to this product, in integer cents. |
| `unspsc_code` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | The parameters will append to the url after a successful account update. |
| `update_return_url` | The url to which a customer will be returned after a successful account update |
| `updated_at` | Timestamp indicating when this product was last updated |
| `use_site_exchange_rate` |  |
| `version_number` | The version of the product |

Operations: create, list, load, remove, update.

API path: `/product_families/{product_family_id}/products.json`

#### ProductFamily

| Field | Description |
| --- | --- |
| `accounting_code` |  |
| `archived_at` | Timestamp indicating when this product family was archived. |
| `created_at` |  |
| `description` |  |
| `handle` |  |
| `id` |  |
| `name` |  |
| `product_family` |  |
| `surcharging` | Whether surcharging applies to this product family. |
| `updated_at` |  |

Operations: create, list, load.

API path: `/product_families.json`

#### ProductFeature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/products/{product_id}/features/{id}.json`

#### ProductPricePoint

| Field | Description |
| --- | --- |
| `accounting_code` | E.g., Internal ID or SKU Number |
| `archived_at` | Timestamp indicating when this price point was archived |
| `created_at` | Timestamp indicating when this price point was created |
| `currency_prices` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default_product_price_point_id` |  |
| `description` | The product description |
| `expiration_interval` | The numerical expiration interval. |
| `expiration_interval_unit` |  |
| `features` | The active feature catalog items attached to this product. |
| `handle` | The product price point API handle |
| `id` |  |
| `initial_charge_after_trial` |  |
| `initial_charge_in_cents` | The product price point initial charge, in integer cents |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `introductory_offer` | reserved for future use |
| `item_category` | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | The product price point name |
| `price_in_cents` | The product price point price, in integer cents |
| `price_point` |  |
| `price_points` |  |
| `product_family` |  |
| `product_id` | The product id this price point belongs to |
| `product_price_point_handle` |  |
| `product_price_point_id` |  |
| `product_price_point_name` |  |
| `public_signup_pages` |  |
| `request_billing_address` | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` |  |
| `subscription_id` | The subscription id this price point belongs to |
| `tax_code` | A string representing the tax code related to the product type. |
| `tax_included` | Whether or not the price point includes tax |
| `taxable` |  |
| `trial_interval` | The numerical trial interval. |
| `trial_interval_unit` |  |
| `trial_price_in_cents` | The product price point trial price, in integer cents |
| `trial_type` |  |
| `type` |  |
| `unspsc_code` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | The parameters will append to the url after a successful account update. |
| `update_return_url` | The url to which a customer will be returned after a successful account update |
| `updated_at` | Timestamp indicating when this price point was last updated |
| `use_site_exchange_rate` | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `version_number` | The version of the product |

Operations: create, list, load, patch, remove, update.

API path: `/product_price_points/{product_price_point_id}/currency_prices.json`

#### ProformaInvoice

| Field | Description |
| --- | --- |
| `available_actions` |  |
| `billing_address` |  |
| `collection_method` |  |
| `consolidation_level` |  |
| `created_at` |  |
| `credit_amount` |  |
| `credits` |  |
| `currency` |  |
| `custom_fields` |  |
| `customer` |  |
| `customer_id` |  |
| `delivery_date` |  |
| `discount_amount` |  |
| `discounts` |  |
| `due_amount` |  |
| `id` |  |
| `line_items` |  |
| `memo` |  |
| `number` |  |
| `paid_amount` |  |
| `payment_instructions` |  |
| `payments` |  |
| `product_family_name` |  |
| `product_name` |  |
| `public_url` |  |
| `refund_amount` |  |
| `role` |  |
| `seller` |  |
| `sequence_number` |  |
| `shipping_address` |  |
| `site_id` |  |
| `status` |  |
| `subscription_id` |  |
| `subtotal_amount` |  |
| `tax_amount` |  |
| `taxes` |  |
| `total_amount` |  |
| `uid` |  |

Operations: create, list.

API path: `/proforma_invoices/{proforma_invoice_uid}/deliveries.json`

#### ReasonCode

| Field | Description |
| --- | --- |
| `code` |  |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `position` |  |
| `reason_code` |  |
| `site_id` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/reason_codes.json`

#### ReferralCode

| Field | Description |
| --- | --- |
| `code` |  |
| `id` |  |
| `site_id` |  |
| `subscription_id` |  |

Operations: load.

API path: `/referral_codes/validate.json`

#### SaleRepSetting

| Field | Description |
| --- | --- |
| `customer_name` |  |
| `sales_rep_id` |  |
| `sales_rep_name` |  |
| `site_link` |  |
| `site_name` |  |
| `subscription_id` |  |
| `subscription_mrr` |  |

Operations: list.

API path: `/sellers/{seller_id}/sales_commission_settings.json`

#### SalesCommission

| Field | Description |
| --- | --- |
| `full_name` |  |
| `id` |  |
| `subscriptions` |  |
| `subscriptions_count` |  |
| `test_mode` |  |

Operations: list.

API path: `/sellers/{seller_id}/sales_reps/{sales_rep_id}.json`

#### Segment

| Field | Description |
| --- | --- |
| `component_id` |  |
| `created_at` |  |
| `event_based_billing_metric_id` |  |
| `id` |  |
| `price_point_id` |  |
| `prices` |  |
| `pricing_scheme` |  |
| `segment_property_1_value` |  |
| `segment_property_2_value` |  |
| `segment_property_3_value` |  |
| `segment_property_4_value` |  |
| `updated_at` |  |

Operations: create, update.

API path: `/components/{component_id}/price_points/{price_point_id}/segments.json`

#### SignupProformaPreview

| Field | Description |
| --- | --- |

Operations: create.

API path: `/subscriptions/proforma_invoices/preview.json`

#### Site

| Field | Description |
| --- | --- |
| `allocation_settings` |  |
| `auto_renewals_enabled` | Whether the auto-renewals feature is enabled for this site. |
| `created_at` |  |
| `currency` |  |
| `customer_hierarchy_enabled` |  |
| `default_payment_collection_method` |  |
| `id` |  |
| `multi_frequency_enabled` | Whether the site has the multi-frequency billing feature enabled. |
| `name` |  |
| `net_terms` |  |
| `non_primary_currencies` |  |
| `organization_address` |  |
| `portal_enabled` | Whether the Billing Portal is enabled for this site. |
| `public_key` |  |
| `relationship_invoicing_enabled` |  |
| `requires_security_token` |  |
| `schedule_subscription_cancellation_enabled` |  |
| `seller_id` |  |
| `subdomain` |  |
| `tax_configuration` |  |
| `test` |  |
| `whopays_default_payer` |  |
| `whopays_enabled` |  |

Operations: create, list, load.

API path: `/sites/clear_data.json`

#### Subscription

| Field | Description |
| --- | --- |
| `activated_at` | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` |  |
| `cancel_at_end_of_period` | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | The timestamp of the most recent cancellation |
| `cancellation_message` | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` |  |
| `coupon_code` | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | Additional coupon data. |
| `created_at` | The creation date for this subscription |
| `credit_balance_in_cents` |  |
| `credit_card` |  |
| `currency` |  |
| `current_billing_amount_in_cents` | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | Timestamp relating to the start of the current (recurring) period |
| `customer` |  |
| `delayed_cancel_at` | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | Timestamp giving the expiration date of this subscription (if any) |
| `group` |  |
| `id` | The subscription unique id within Chargify. |
| `locale` |  |
| `net_terms` | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | The ID of the offer associated with the subscription. |
| `on_hold_at` | The timestamp of the most recent on hold action. |
| `payer_id` | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` |  |
| `payment_type` | The payment profile type for the active profile on file. |
| `prepaid_configuration` |  |
| `prepaid_dunning` | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` |  |
| `previous_state` |  |
| `product` |  |
| `product_price_in_cents` | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | The product price point currently subscribed to. |
| `product_price_point_type` |  |
| `product_version_number` | The version of the product for the subscription. |
| `reason_code` | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` |  |
| `reference` | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` |  |
| `self_service_page_token` | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | The ID of the transaction that generated the revenue |
| `signup_revenue` | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | A day of month that subscription will be processed on. |
| `state` |  |
| `stored_credential_transaction_id` | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` |  |
| `total_revenue_in_cents` | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | Timestamp for when the trial period (if any) began |
| `updated_at` | The date of last update for this subscription |

Operations: create, list, load, remove, update.

API path: `/subscriptions/{subscription_id}/purge.json`

#### SubscriptionComponent

| Field | Description |
| --- | --- |
| `accrue_charge` | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `allocated_quantity` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation_id` | The allocation unique ID |
| `allocations` |  |
| `allow_fractional_quantities` |  |
| `archived_at` |  |
| `charge_id` |  |
| `component` |  |
| `component_handle` | The handle of the component. |
| `component_id` | The integer component ID for the allocation. |
| `created_at` | Timestamp indicating when this allocation was created |
| `currency` |  |
| `description` |  |
| `direction` |  |
| `display_on_hosted_page` |  |
| `downgrade_credit` |  |
| `enabled` | (for on/off components) indicates if the component is enabled for the subscription. |
| `end_date` |  |
| `existing_balance_in_cents` | An integer representing the amount of the subscription's current balance |
| `expires_at` |  |
| `historic_usages` |  |
| `id` |  |
| `initiate_dunning` | If true, if the immediate component payment fails, initiate dunning for the subscription. |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `kind` |  |
| `line_items` |  |
| `memo` | The memo passed when the allocation was created |
| `name` |  |
| `overage_quantity` |  |
| `payment` |  |
| `period_type` |  |
| `previous_price_point_id` |  |
| `previous_quantity` | The allocated quantity that was in effect before this allocation was created. |
| `price_point_handle` |  |
| `price_point_id` |  |
| `price_point_name` |  |
| `price_point_type` |  |
| `pricing_scheme` |  |
| `product_family_handle` |  |
| `product_family_id` |  |
| `proration_downgrade_scheme` | The scheme used if the proration was a downgrade. |
| `proration_scheme` |  |
| `proration_upgrade_scheme` | The scheme used if the proration was an upgrade. |
| `quantity` | The allocated quantity set into effect by the allocation. |
| `recurring` |  |
| `start_date` |  |
| `subscription` |  |
| `subscription_id` | The integer subscription ID for the allocation. |
| `subtotal_in_cents` |  |
| `timestamp` | The time that the allocation was recorded, in ISO 8601 format and UTC timezone, e.g., 2012-11-20T22:00:37Z |
| `total_discount_in_cents` |  |
| `total_in_cents` |  |
| `total_tax_in_cents` |  |
| `unit_balance` |  |
| `unit_name` |  |
| `updated_at` |  |
| `upgrade_charge` |  |
| `use_site_exchange_rate` |  |
| `used_quantity` |  |

Operations: create, list, load, remove, update.

API path: `/events/{api_handle}.json`

#### SubscriptionGroup

| Field | Description |
| --- | --- |
| `account_balances` |  |
| `cancel_at_end_of_period` |  |
| `created_at` |  |
| `customer_id` |  |
| `group_type` |  |
| `id` |  |
| `next_assessment_at` |  |
| `payment_collection_method` |  |
| `payment_profile` |  |
| `payment_profile_id` |  |
| `primary_subscription_id` |  |
| `scheme` |  |
| `state` |  |
| `subscription_ids` |  |
| `uid` |  |

Operations: create, list, remove, update.

API path: `/subscriptions/{subscription_id}/group.json`

#### SubscriptionGroupInvoiceAccount

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list.

API path: `/subscription_groups/{uid}/prepayments.json`

#### SubscriptionGroupSignup

| Field | Description |
| --- | --- |

Operations: create.

API path: `/subscription_groups/signup.json`

#### SubscriptionGroupStatus

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, remove.

API path: `/subscription_groups/{uid}/cancel.json`

#### SubscriptionInvoiceAccount

| Field | Description |
| --- | --- |
| `amount_in_cents` | The amount in cents of the entry |
| `created_at` | The date and time the entry was created |
| `ending_balance_in_cents` | The new balance for the credit account |
| `entry_type` |  |
| `id` |  |
| `invoice_uid` | The invoice uid associated with the entry. |
| `memo` | The memo attached to the entry |
| `remaining_balance_in_cents` | The remaining balance for the entry |

Operations: create, list.

API path: `/subscriptions/{subscription_id}/prepayments.json`

#### SubscriptionMrr

| Field | Description |
| --- | --- |
| `breakouts` |  |
| `mrr_amount_in_cents` |  |
| `subscription_id` |  |

Operations: list.

API path: `/subscriptions_mrr.json`

#### SubscriptionNote

| Field | Description |
| --- | --- |
| `body` |  |
| `created_at` |  |
| `id` |  |
| `note` |  |
| `sticky` |  |
| `subscription_id` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/subscriptions/{subscription_id}/notes.json`

#### SubscriptionProduct

| Field | Description |
| --- | --- |
| `charge_in_cents` | The amount of the charge that would be created for the new product. |
| `credit_applied_in_cents` | Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. |
| `id` |  |
| `migration` |  |
| `payment_due_in_cents` | The amount of the payment due in the case of an upgrade. |
| `prorated_adjustment_in_cents` | The amount of the prorated adjustment that would be issued for the current subscription. |

Operations: create.

API path: `/subscriptions/{subscription_id}/migrations.json`

#### SubscriptionRenewal

| Field | Description |
| --- | --- |
| `contract` |  |
| `created_at` |  |
| `decimal_quantity` |  |
| `ends_at` |  |
| `id` | ID of the renewal. |
| `item_id` |  |
| `item_subclass` |  |
| `item_type` |  |
| `lock_in_at` |  |
| `price_point_id` |  |
| `price_point_type` |  |
| `quantity` |  |
| `scheduled_renewal_configuration_item` |  |
| `scheduled_renewal_configuration_items` |  |
| `site_id` | ID of the site to which the renewal belongs. |
| `starts_at` |  |
| `status` |  |
| `subscription_id` | The id of the subscription. |
| `subscription_renewal_configuration_id` |  |

Operations: create, list, load, remove, update.

API path: `/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json`

#### SubscriptionStatus

| Field | Description |
| --- | --- |
| `existing_balance_in_cents` | An integer representing the amount of the subscription’s current balance |
| `id` |  |
| `line_items` | An array of objects representing the individual transactions that will be created at the next renewal |
| `next_assessment_at` | The timestamp for the subscription’s next renewal |
| `subtotal_in_cents` | An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal |
| `total_amount_due_in_cents` | An integer representing the existing_balance_in_cents plus the total_in_cents |
| `total_discount_in_cents` | An integer representing the amount of the coupon discounts that will be applied to the next renewal |
| `total_in_cents` | An integer representing the total amount owed, less any discounts, that will be assessed at the next renewal |
| `total_tax_in_cents` | An integer representing the total tax charges that will be assessed at the next renewal |
| `uncalculated_taxes` | A boolean indicating whether or not additional taxes will be calculated at the time of renewal. |

Operations: create, remove, update.

API path: `/subscriptions/{subscription_id}/resume.json`

#### Usage

| Field | Description |
| --- | --- |
| `usage` |  |

Operations: list.

API path: `/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json`

#### Webhook

| Field | Description |
| --- | --- |
| `id` |  |
| `site_id` |  |
| `status` |  |
| `url` |  |
| `webhook` |  |
| `webhook_subscriptions` |  |

Operations: create, list, update.

API path: `/endpoints.json`



## Entities


### AccountBalance

Create an instance: `const account_balance = client.AccountBalance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `open_invoices` | `any` |  |
| `pending_discounts` | `any` |  |
| `pending_invoices` | `any` |  |
| `prepayments` | `any` |  |
| `service_credits` | `any` |  |

#### Example: Load

```ts
const account_balance = await client.AccountBalance().load({ subscription_id: 1 })
```


### Allocation

Create an instance: `const allocation = client.Allocation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allocation` | `Record<string, any>` |  |

#### Example: List

```ts
const allocations = await client.Allocation().list({ component_id: 1, subscription_id: 1 })
```

#### Example: Create

```ts
const allocation = await client.Allocation().create({
  subscription_id: 1,
})
```


### BatchJob

Create an instance: `const batch_job = client.BatchJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `string` |  |
| `created_at` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `number` |  |
| `row_count` | `number` |  |

#### Example: Load

```ts
const batch_job = await client.BatchJob().load({ batch_id: 'batch_id' })
```

#### Example: Create

```ts
const batch_job = await client.BatchJob().create({
})
```


### BillingPortal

Create an instance: `const billing_portal = client.BillingPortal()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fetch_count` | `number` |  |
| `last_accepted_at` | `string` |  |
| `last_invite_accepted_at` | `string` |  |
| `last_invite_sent_at` | `string` |  |
| `last_sent_at` | `string` |  |
| `new_link_available_at` | `string` |  |
| `send_invite_link_text` | `string` |  |
| `uninvited_count` | `number` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const billing_portal = await client.BillingPortal().load({ customer_id: 1 })
```

#### Example: Create

```ts
const billing_portal = await client.BillingPortal().create({
  customer_id: 1,
})
```


### Component

Create an instance: `const component = client.Component()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounting_code` | `string` | E.g. |
| `allow_fractional_quantities` | `boolean` |  |
| `archived` | `boolean` | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `string` | Timestamp indicating when this component was archived |
| `component` | `Record<string, any>` |  |
| `created_at` | `string` | Timestamp indicating when this component was created |
| `default_price_point_id` | `number` |  |
| `default_price_point_name` | `string` |  |
| `description` | `string` | The description of the component. |
| `downgrade_credit` | `any` |  |
| `event_based_billing_metric_id` | `number` | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `features` | `any[]` | The active feature catalog items attached to this component. |
| `handle` | `string` | The component API handle |
| `hide_date_range_on_invoice` | `boolean` | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `number` | The unique ID assigned to the component by Chargify. |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `item_category` | `any` |  |
| `kind` | `any` |  |
| `name` | `string` | The name of the Component, suitable for display on statements. |
| `overage_prices` | `any[]` | Applicable only to prepaid usage components. |
| `price_per_unit_in_cents` | `number` | deprecated - use unit_price instead. |
| `price_point_count` | `number` | Count for the number of price points associated with the component |
| `price_points_url` | `string` | URL that points to the location to read the existing price points via GET request |
| `prices` | `any[]` | An array of price brackets. |
| `pricing_scheme` | `any` |  |
| `product_family_handle` | `string` | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `number` | The id of the Product Family to which the Component belongs |
| `product_family_name` | `string` | The name of the Product Family to which the Component belongs |
| `recurring` | `boolean` |  |
| `tax_code` | `string` | A string representing the tax code related to the component type. |
| `taxable` | `boolean` | Boolean flag describing whether a component is taxable or not. |
| `unit_name` | `string` | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `string` | The amount the customer will be charged per unit. |
| `unspsc_code` | `string` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `string` | Timestamp indicating when this component was updated |
| `upgrade_charge` | `any` |  |
| `use_site_exchange_rate` | `boolean` |  |

#### Example: Load

```ts
const component = await client.Component().load({ component_id: 'component_id', product_family_id: 1 })
```

#### Example: List

```ts
const components = await client.Component().list()
```

#### Example: Create

```ts
const component = await client.Component().create({
  product_family_id: 'example_product_family_id',
})
```


### ComponentFeature

Create an instance: `const component_feature = client.ComponentFeature()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ComponentPricePoint

Create an instance: `const component_price_point = client.ComponentPricePoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounting_code` | `string` | E.g. |
| `allow_fractional_quantities` | `boolean` |  |
| `archived` | `boolean` | Boolean flag describing whether a component is archived or not. |
| `archived_at` | `string` | Timestamp indicating when this component was archived |
| `component_id` | `number` |  |
| `created_at` | `string` | Timestamp indicating when this component was created |
| `currency_prices` | `any[]` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | Note: Refer to type attribute instead. |
| `default_price_point_id` | `number` |  |
| `default_price_point_name` | `string` |  |
| `description` | `string` | The description of the component. |
| `downgrade_credit` | `any` |  |
| `event_based_billing_metric_id` | `number` | (Only for Event Based Components) This is an ID of a metric attached to the component. |
| `expiration_interval` | `number` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` |  |
| `features` | `any[]` | The active feature catalog items attached to this component. |
| `handle` | `string` | The component API handle |
| `hide_date_range_on_invoice` | `boolean` | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `id` | `number` | The unique ID assigned to the component by Chargify. |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `item_category` | `any` |  |
| `kind` | `any` |  |
| `name` | `string` | The name of the Component, suitable for display on statements. |
| `overage_prices` | `any[]` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` |  |
| `price_per_unit_in_cents` | `number` | deprecated - use unit_price instead. |
| `price_point` | `Record<string, any>` |  |
| `price_point_count` | `number` | Count for the number of price points associated with the component |
| `price_points` | `any[]` |  |
| `price_points_url` | `string` | URL that points to the location to read the existing price points via GET request |
| `prices` | `any[]` | An array of price brackets. |
| `pricing_scheme` | `any` |  |
| `product_family_handle` | `string` | The handle of the Product Family to which the Component belongs |
| `product_family_id` | `number` | The id of the Product Family to which the Component belongs |
| `product_family_name` | `string` | The name of the Product Family to which the Component belongs |
| `recurring` | `boolean` |  |
| `renew_prepaid_allocation` | `boolean` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `boolean` | Applicable only to prepaid usage components. |
| `subscription_id` | `number` | (only used for Custom Pricing - ie. |
| `tax_code` | `string` | A string representing the tax code related to the component type. |
| `tax_included` | `boolean` |  |
| `taxable` | `boolean` | Boolean flag describing whether a component is taxable or not. |
| `type` | `any` |  |
| `unit_name` | `string` | The name of the unit that the component’s usage is measured in. |
| `unit_price` | `string` | The amount the customer will be charged per unit. |
| `unspsc_code` | `string` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `updated_at` | `string` | Timestamp indicating when this component was updated |
| `upgrade_charge` | `any` |  |
| `use_site_exchange_rate` | `boolean` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: List

```ts
const component_price_points = await client.ComponentPricePoint().list()
```

#### Example: Create

```ts
const component_price_point = await client.ComponentPricePoint().create({
  id: 1,
})
```


### ComponentPricePointCurrencyOverage

Create an instance: `const component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `component_id` | `number` |  |
| `created_at` | `string` |  |
| `currency_overage_prices` | `any[]` | Applicable only to prepaid usage components. |
| `currency_prices` | `any[]` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `boolean` | Note: Refer to type attribute instead. |
| `expiration_interval` | `number` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` |  |
| `handle` | `string` |  |
| `id` | `number` |  |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `name` | `string` |  |
| `overage_prices` | `any[]` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` |  |
| `prices` | `any[]` |  |
| `pricing_scheme` | `any` |  |
| `renew_prepaid_allocation` | `boolean` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `boolean` | Applicable only to prepaid usage components. |
| `subscription_id` | `number` | (only used for Custom Pricing - ie. |
| `tax_included` | `boolean` |  |
| `type` | `any` |  |
| `updated_at` | `string` |  |
| `use_site_exchange_rate` | `boolean` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: Load

```ts
const component_price_point_currency_overage = await client.ComponentPricePointCurrencyOverage().load({ component_id: 'component_id', price_point_id: 'price_point_id' })
```


### Coupon

Create an instance: `const coupon = client.Coupon()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_negative_balance` | `boolean` | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `number` |  |
| `amount_in_cents` | `number` |  |
| `apply_on_cancel_at_end_of_period` | `boolean` |  |
| `apply_on_subscription_expiration` | `boolean` |  |
| `archived_at` | `string` |  |
| `code` | `string` |  |
| `compounding_strategy` | `any` |  |
| `conversion_limit` | `string` |  |
| `coupon` | `Record<string, any>` |  |
| `coupon_restrictions` | `any[]` |  |
| `created_at` | `string` |  |
| `currency_prices` | `any[]` | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `string` |  |
| `discount_type` | `string` |  |
| `duration_interval` | `number` |  |
| `duration_interval_span` | `string` |  |
| `duration_interval_unit` | `string` |  |
| `duration_period_count` | `number` |  |
| `end_date` | `string` | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `boolean` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `percentage` | `string` |  |
| `product_family_id` | `number` |  |
| `product_family_name` | `string` |  |
| `recurring` | `boolean` |  |
| `recurring_scheme` | `string` |  |
| `stackable` | `boolean` | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `string` |  |
| `updated_at` | `string` |  |
| `use_site_exchange_rate` | `boolean` |  |

#### Example: Load

```ts
const coupon = await client.Coupon().load({ coupon_id: 1, product_family_id: 1 })
```

#### Example: List

```ts
const coupons = await client.Coupon().list()
```

#### Example: Create

```ts
const coupon = await client.Coupon().create({
  product_family_id: 1,
})
```


### CouponCurrency

Create an instance: `const coupon_currency = client.CouponCurrency()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CouponSubcode

Create an instance: `const coupon_subcode = client.CouponSubcode()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_codes` | `any[]` |  |
| `duplicate_codes` | `any[]` |  |
| `id` | `string` |  |
| `invalid_codes` | `any[]` |  |


### CouponUsage

Create an instance: `const coupon_usage = client.CouponUsage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | The Chargify id of the product |
| `name` | `string` | Name of the product |
| `revenue` | `number` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `number` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `number` | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `number` | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `number` | Number of times the coupon has been applied |

#### Example: List

```ts
const coupon_usages = await client.CouponUsage().list({ id: 1, product_family_id: 1 })
```


### CustomField

Create an instance: `const custom_field = client.CustomField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_count` | `number` | The amount of subscriptions this metafield has been applied to in Advanced Billing. |
| `deleted_at` | `string` |  |
| `enum` | `string` |  |
| `id` | `number` |  |
| `input_type` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `metafield_id` | `number` |  |
| `metafields` | `any` |  |
| `name` | `string` |  |
| `resource_id` | `number` |  |
| `scope` | `Record<string, any>` |  |
| `value` | `string` |  |

#### Example: List

```ts
const custom_fields = await client.CustomField().list({ resource_type: "example" })
```

#### Example: Create

```ts
const custom_field = await client.CustomField().create({
  resource_type: 'example_resource_type',
})
```


### Customer

Create an instance: `const customer = client.Customer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `string` | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `number` | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `string` | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `string` | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `string` | The customer shipping address country |
| `country_name` | `string` | The customer's full name of country |
| `created_at` | `string` | The timestamp in which the customer object was created in Chargify |
| `customer` | `Record<string, any>` |  |
| `default_auto_renewal_profile_id` | `number` | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `string` |  |
| `email` | `string` | The email address of the customer |
| `entity_identifier_kind` | `any` |  |
| `entity_identifier_value` | `string` | The value of the customer's tax or business identifier. |
| `first_name` | `string` | The first name of the customer |
| `id` | `number` | The customer ID in Chargify |
| `last_name` | `string` | The last name of the customer |
| `locale` | `string` | The locale for the customer to identify language-region |
| `maxioid` | `string` | The Maxio-generated unique identifier for the customer. |
| `organization` | `string` | The organization of the customer. |
| `parent_id` | `number` | The parent ID in Chargify if applicable. |
| `phone` | `string` | The phone number of the customer |
| `portal_customer_created_at` | `string` | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `string` | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `string` | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `string` | The unique identifier used within your own application for this customer |
| `salesforce_id` | `string` | The Salesforce ID for the customer |
| `state` | `string` | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `string` | The customer's full name of state |
| `surcharging` | `boolean` | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `boolean` | The tax exempt status for the customer. |
| `tax_exempt_reason` | `string` | The Tax Exemption Reason Code for the customer |
| `updated_at` | `string` | The timestamp in which the customer object was last edited |
| `vat_country` | `string` | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `string` | The VAT business identification number for the customer. |
| `verified` | `boolean` | Is the customer verified to use ACH as a payment method. |
| `zip` | `string` | The customer’s shipping address zip code (e.g., “12345”) |

#### Example: Load

```ts
const customer = await client.Customer().load({ id: 1 })
```

#### Example: List

```ts
const customers = await client.Customer().list()
```

#### Example: Create

```ts
const customer = await client.Customer().create({
  customer: {},
})
```


### DelayedCancel

Create an instance: `const delayed_cancel = client.DelayedCancel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `subscription` | `Record<string, any>` |  |

#### Example: Create

```ts
const delayed_cancel = await client.DelayedCancel().create({
  subscription_id: 1,
  subscription: {},
})
```


### Endpoint

Create an instance: `const endpoint = client.Endpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `site_id` | `number` |  |
| `status` | `string` |  |
| `url` | `string` |  |
| `webhook_subscriptions` | `any[]` |  |

#### Example: List

```ts
const endpoints = await client.Endpoint().list()
```


### Entitlement

Create an instance: `const entitlement = client.Entitlement()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_id` | `number` |  |
| `entitlements` | `any[]` |  |
| `status` | `string` | The subscription's current state, e.g. |
| `subscription_id` | `number` |  |

#### Example: List

```ts
const entitlements = await client.Entitlement().list({ subscription_id: 1 })
```


### Event

Create an instance: `const event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event` | `Record<string, any>` |  |

#### Example: Load

```ts
const event = await client.Event().load()
```

#### Example: List

```ts
const events = await client.Event().list()
```


### EventsBasedBillingSegment

Create an instance: `const events_based_billing_segment = client.EventsBasedBillingSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Feature

Create an instance: `const feature = client.Feature()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` |  |
| `default_periodicity_interval` | `number` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` |  |
| `default_value` | `string` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` |  |
| `feature` | `Record<string, any>` |  |
| `feature_key` | `string` | The `key` of the parent feature template. |
| `feature_kind` | `any` |  |
| `feature_name` | `string` | The `name` of the parent feature template. |
| `feature_template_id` | `number` | The id of the feature template this item was created from. |
| `id` | `number` | The Advanced Billing id of the feature template. |
| `key` | `string` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` |  |
| `name` | `string` | The display name of the feature. |
| `periodicity_interval` | `number` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` |  |
| `plans_count` | `number` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `price_point_id` | `number` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` |  |
| `products_count` | `number` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` |  |
| `value` | `string` | The value granted by this feature catalog item. |
| `value_type` | `any` |  |

#### Example: List

```ts
const features = await client.Feature().list()
```

#### Example: Create

```ts
const feature = await client.Feature().create({
  feature: {},
})
```


### FeatureCatalogItem

Create an instance: `const feature_catalog_item = client.FeatureCatalogItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `feature` | `Record<string, any>` |  |
| `feature_key` | `string` | The `key` of the parent feature template. |
| `feature_kind` | `any` |  |
| `feature_name` | `string` | The `name` of the parent feature template. |
| `feature_template_id` | `number` | The id of the feature template this item was created from. |
| `id` | `number` |  |
| `periodicity_interval` | `number` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` |  |
| `price_point_id` | `number` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` |  |
| `updated_at` | `string` |  |
| `value` | `string` | The value granted by this feature catalog item. |

#### Example: Load

```ts
const feature_catalog_item = await client.FeatureCatalogItem().load({ id: 1 })
```

#### Example: Create

```ts
const feature_catalog_item = await client.FeatureCatalogItem().create({
  id: 1,
  feature: {},
})
```


### FeatureTemplate

Create an instance: `const feature_template = client.FeatureTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` |  |
| `default_periodicity_interval` | `number` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` |  |
| `default_value` | `string` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` |  |
| `feature` | `any` |  |
| `id` | `number` | The Advanced Billing id of the feature template. |
| `key` | `string` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` |  |
| `name` | `string` | The display name of the feature. |
| `plans_count` | `number` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `number` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` |  |
| `value_type` | `any` |  |

#### Example: Load

```ts
const feature_template = await client.FeatureTemplate().load({ id: 1 })
```

#### Example: Create

```ts
const feature_template = await client.FeatureTemplate().create({
  id: 1,
  feature: 'example_feature',
})
```


### Insight

Create an instance: `const insight = client.Insight()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_formatted` | `string` |  |
| `amount_in_cents` | `number` |  |
| `at_time` | `string` | ISO8601 timestamp |
| `breakouts` | `Record<string, any>` |  |
| `currency` | `string` |  |
| `currency_symbol` | `string` |  |
| `movements` | `any[]` |  |
| `page` | `number` |  |
| `per_page` | `number` |  |
| `seller_name` | `string` |  |
| `site_currency` | `string` |  |
| `site_id` | `number` |  |
| `site_name` | `string` |  |
| `stats` | `Record<string, any>` |  |
| `total_entries` | `number` |  |
| `total_pages` | `number` |  |

#### Example: Load

```ts
const insight = await client.Insight().load()
```


### Invoice

Create an instance: `const invoice = client.Invoice()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applications` | `any[]` |  |
| `applied_amount` | `string` | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `Record<string, any>` |  |
| `billing_address` | `any` |  |
| `branding_theme_id` | `number` | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `any` |  |
| `consolidation_level` | `any` |  |
| `created_at` | `string` |  |
| `credit_amount` | `string` | The amount of credit (from credit notes) applied to this invoice. |
| `credits` | `any[]` |  |
| `currency` | `string` | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `any[]` |  |
| `customer` | `any` |  |
| `customer_id` | `number` | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` |  |
| `debits` | `any[]` |  |
| `discount_amount` | `string` | Total discount applied to the invoice. |
| `discounts` | `any[]` |  |
| `display_settings` | `Record<string, any>` |  |
| `due_amount` | `string` | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | Date the invoice is due. |
| `group_primary_subscription_id` | `number` | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `number` |  |
| `issue_date` | `string` | Date the invoice was issued to the customer. |
| `line_items` | `any[]` | Line items on the invoice. |
| `memo` | `string` | The memo printed on invoices of any collection type. |
| `net_terms` | `number` |  |
| `number` | `string` | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `any[]` | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | Date the invoice became fully paid. |
| `paid_invoices` | `any[]` |  |
| `parent_invoice_id` | `number` |  |
| `parent_invoice_number` | `number` | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `Record<string, any>` |  |
| `payment_instructions` | `string` | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `any[]` |  |
| `prepayment` | `string` |  |
| `previous_balance_data` | `Record<string, any>` |  |
| `product_family_name` | `string` | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | The public URL of the invoice |
| `public_url_expires_on` | `string` | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `any[]` |  |
| `refund_amount` | `string` |  |
| `refunds` | `any[]` |  |
| `remaining_amount` | `string` | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `string` |  |
| `seller` | `any` |  |
| `sequence_number` | `number` | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `any` |  |
| `site_id` | `number` | ID of the site to which the invoice belongs. |
| `status` | `any` |  |
| `subscription_group_id` | `number` |  |
| `subscription_id` | `number` | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `string` | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `string` | Total tax on the invoice. |
| `taxes` | `any[]` |  |
| `total_amount` | `string` | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` |  |
| `uid` | `string` | Unique identifier for the invoice. |
| `updated_at` | `string` |  |
| `void` | `Record<string, any>` |  |

#### Example: List

```ts
const invoices = await client.Invoice().list({ uid: "example" })
```

#### Example: Create

```ts
const invoice = await client.Invoice().create({
  subscription_id: 1,
  void: {},
})
```


### ListSaleRepItem

Create an instance: `const list_sale_rep_item = client.ListSaleRepItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `string` |  |
| `id` | `number` |  |
| `mrr_data` | `Record<string, any>` |  |
| `subscriptions_count` | `number` |  |
| `test_mode` | `boolean` |  |

#### Example: List

```ts
const list_sale_rep_items = await client.ListSaleRepItem().list({ seller_id: "example" })
```


### ListSegment

Create an instance: `const list_segment = client.ListSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `number` |  |
| `created_at` | `string` |  |
| `event_based_billing_metric_id` | `number` |  |
| `id` | `number` |  |
| `price_point_id` | `number` |  |
| `prices` | `any[]` |  |
| `pricing_scheme` | `any` |  |
| `segment_property_1_value` | `any` |  |
| `segment_property_2_value` | `any` |  |
| `segment_property_3_value` | `any` |  |
| `segment_property_4_value` | `any` |  |
| `segments` | `any[]` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const list_segments = await client.ListSegment().list({ component_id: "example", price_point_id: "example" })
```

#### Example: Create

```ts
const list_segment = await client.ListSegment().create({
  component_id: 'example_component_id',
  price_point_id: 'example_price_point_id',
})
```


### Offer

Create an instance: `const offer = client.Offer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `handle` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `offer` | `Record<string, any>` |  |
| `offer_discounts` | `any[]` |  |
| `offer_items` | `any[]` |  |
| `offer_signup_pages` | `any[]` |  |
| `product_family_id` | `number` |  |
| `product_family_name` | `string` |  |
| `product_id` | `number` |  |
| `product_name` | `string` |  |
| `product_price_in_cents` | `number` |  |
| `product_price_point_id` | `number` |  |
| `product_price_point_name` | `string` |  |
| `product_revisable_number` | `number` |  |
| `site_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const offer = await client.Offer().load({ offer_id: 1 })
```

#### Example: List

```ts
const offers = await client.Offer().list()
```

#### Example: Create

```ts
const offer = await client.Offer().create({
})
```


### OneTimeToken

Create an instance: `const one_time_token = client.OneTimeToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const one_time_token = await client.OneTimeToken().load({ chargify_token: 'chargify_token' })
```


### PaymentProfile

Create an instance: `const payment_profile = client.PaymentProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account_holder_type` | `any` |  |
| `bank_account_type` | `any` |  |
| `bank_name` | `string` | The bank where the account resides |
| `billing_address` | `string` | The current billing street address for the bank account |
| `billing_address_2` | `string` | The current billing street address, second line, for the bank account |
| `billing_city` | `string` | The current billing address city for the bank account |
| `billing_country` | `string` | The current billing address country for the bank account |
| `billing_state` | `string` | The current billing address state for the bank account |
| `billing_zip` | `string` | The current billing address zip code for the bank account |
| `card_type` | `string` |  |
| `created_at` | `string` | A timestamp indicating when this payment profile was created |
| `current_vault` | `string` |  |
| `customer_id` | `number` | The Chargify-assigned ID for the customer record to which the bank account belongs |
| `customer_vault_token` | `string` | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `disabled` | `boolean` |  |
| `expiration_month` | `number` |  |
| `expiration_year` | `number` |  |
| `first_name` | `string` | The first name of the bank account holder |
| `gateway_handle` | `string` |  |
| `id` | `number` | The Chargify-assigned ID of the stored bank account. |
| `last_name` | `string` | The last name of the bank account holder |
| `masked_bank_account_number` | `string` | A string representation of the stored bank account number with all but the last 4 digits marked with X's (i.e. |
| `masked_bank_routing_number` | `string` | A string representation of the stored bank routing number with all but the last 4 digits marked with X's (i.e. |
| `masked_card_number` | `string` |  |
| `payment_profile` | `any` |  |
| `payment_type` | `string` |  |
| `site_gateway_setting_id` | `number` |  |
| `updated_at` | `string` | A timestamp indicating when this payment profile was last updated |
| `vault_token` | `string` | The "token" provided by your vault storage for an already stored payment profile |
| `verified` | `boolean` | Denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account. |

#### Example: Load

```ts
const payment_profile = await client.PaymentProfile().load({ payment_profile_id: 1 })
```

#### Example: List

```ts
const payment_profiles = await client.PaymentProfile().list()
```

#### Example: Create

```ts
const payment_profile = await client.PaymentProfile().create({
  payment_profile: 'example_payment_profile',
})
```


### Prepayment

Create an instance: `const prepayment = client.Prepayment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const prepayment = await client.Prepayment().create({
  id: 1,
  subscription_id: 1,
})
```


### Product

Create an instance: `const product = client.Product()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounting_code` | `string` | E.g., Internal ID or SKU Number |
| `archived_at` | `string` | Timestamp indicating when this product was archived |
| `created_at` | `string` | Timestamp indicating when this product was created |
| `default_product_price_point_id` | `number` |  |
| `description` | `string` | The product description |
| `expiration_interval` | `number` | A numerical interval for the length a subscription to this product will run before it expires. |
| `expiration_interval_unit` | `any` |  |
| `features` | `any[]` | The active feature catalog items attached to this product. |
| `handle` | `string` | The product API handle |
| `id` | `number` |  |
| `initial_charge_after_trial` | `boolean` |  |
| `initial_charge_in_cents` | `number` | The up front charge you have specified. |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `item_category` | `string` | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `string` | The product name |
| `price_in_cents` | `number` | The product price, in integer cents |
| `product` | `Record<string, any>` |  |
| `product_family` | `Record<string, any>` |  |
| `product_price_point_handle` | `string` |  |
| `product_price_point_id` | `number` |  |
| `product_price_point_name` | `string` |  |
| `public_signup_pages` | `any[]` |  |
| `request_billing_address` | `boolean` | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `boolean` | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `boolean` | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `boolean` | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `boolean` | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `string` |  |
| `tax_code` | `string` | A string representing the tax code related to the product type. |
| `taxable` | `boolean` |  |
| `trial_interval` | `number` | A numerical interval for the length of the trial period of a subscription to this product. |
| `trial_interval_unit` | `any` |  |
| `trial_price_in_cents` | `number` | The price of the trial period for a subscription to this product, in integer cents. |
| `unspsc_code` | `string` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `string` | The parameters will append to the url after a successful account update. |
| `update_return_url` | `string` | The url to which a customer will be returned after a successful account update |
| `updated_at` | `string` | Timestamp indicating when this product was last updated |
| `use_site_exchange_rate` | `boolean` |  |
| `version_number` | `number` | The version of the product |

#### Example: Load

```ts
const product = await client.Product().load({ api_handle: 'api_handle' })
```

#### Example: List

```ts
const products = await client.Product().list()
```

#### Example: Create

```ts
const product = await client.Product().create({
  product_family_id: 'example_product_family_id',
})
```


### ProductFamily

Create an instance: `const product_family = client.ProductFamily()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounting_code` | `string` |  |
| `archived_at` | `string` | Timestamp indicating when this product family was archived. |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `handle` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `product_family` | `Record<string, any>` |  |
| `surcharging` | `boolean` | Whether surcharging applies to this product family. |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const product_family = await client.ProductFamily().load({ id: 1 })
```

#### Example: List

```ts
const product_familys = await client.ProductFamily().list()
```

#### Example: Create

```ts
const product_family = await client.ProductFamily().create({
})
```


### ProductFeature

Create an instance: `const product_feature = client.ProductFeature()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ProductPricePoint

Create an instance: `const product_price_point = client.ProductPricePoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accounting_code` | `string` | E.g., Internal ID or SKU Number |
| `archived_at` | `string` | Timestamp indicating when this price point was archived |
| `created_at` | `string` | Timestamp indicating when this price point was created |
| `currency_prices` | `any[]` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default_product_price_point_id` | `number` |  |
| `description` | `string` | The product description |
| `expiration_interval` | `number` | The numerical expiration interval. |
| `expiration_interval_unit` | `any` |  |
| `features` | `any[]` | The active feature catalog items attached to this product. |
| `handle` | `string` | The product price point API handle |
| `id` | `number` |  |
| `initial_charge_after_trial` | `boolean` |  |
| `initial_charge_in_cents` | `number` | The product price point initial charge, in integer cents |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `introductory_offer` | `boolean` | reserved for future use |
| `item_category` | `string` | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `name` | `string` | The product price point name |
| `price_in_cents` | `number` | The product price point price, in integer cents |
| `price_point` | `Record<string, any>` |  |
| `price_points` | `any[]` |  |
| `product_family` | `Record<string, any>` |  |
| `product_id` | `number` | The product id this price point belongs to |
| `product_price_point_handle` | `string` |  |
| `product_price_point_id` | `number` |  |
| `product_price_point_name` | `string` |  |
| `public_signup_pages` | `any[]` |  |
| `request_billing_address` | `boolean` | A boolean indicating whether to request a billing address on any Self-Service Pages that are used by subscribers of this product. |
| `request_credit_card` | `boolean` | Deprecated value that can be ignored unless you have legacy hosted pages. |
| `require_billing_address` | `boolean` | A boolean indicating whether a billing address is required to add a payment profile, especially at signup. |
| `require_credit_card` | `boolean` | Boolean that controls whether a payment profile is required to be entered for customers wishing to sign up on this product. |
| `require_shipping_address` | `boolean` | A boolean indicating whether a shipping address is required for the customer, especially at signup. |
| `return_params` | `string` |  |
| `subscription_id` | `number` | The subscription id this price point belongs to |
| `tax_code` | `string` | A string representing the tax code related to the product type. |
| `tax_included` | `boolean` | Whether or not the price point includes tax |
| `taxable` | `boolean` |  |
| `trial_interval` | `number` | The numerical trial interval. |
| `trial_interval_unit` | `any` |  |
| `trial_price_in_cents` | `number` | The product price point trial price, in integer cents |
| `trial_type` | `any` |  |
| `type` | `any` |  |
| `unspsc_code` | `string` | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. |
| `update_return_params` | `string` | The parameters will append to the url after a successful account update. |
| `update_return_url` | `string` | The url to which a customer will be returned after a successful account update |
| `updated_at` | `string` | Timestamp indicating when this price point was last updated |
| `use_site_exchange_rate` | `boolean` | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `version_number` | `number` | The version of the product |

#### Example: Load

```ts
const product_price_point = await client.ProductPricePoint().load({ price_point_id: 'price_point_id', product_id: 'product_id' })
```

#### Example: List

```ts
const product_price_points = await client.ProductPricePoint().list()
```

#### Example: Create

```ts
const product_price_point = await client.ProductPricePoint().create({
  id: 'example_id',
})
```


### ProformaInvoice

Create an instance: `const proforma_invoice = client.ProformaInvoice()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_actions` | `Record<string, any>` |  |
| `billing_address` | `Record<string, any>` |  |
| `collection_method` | `any` |  |
| `consolidation_level` | `any` |  |
| `created_at` | `string` |  |
| `credit_amount` | `string` |  |
| `credits` | `any[]` |  |
| `currency` | `string` |  |
| `custom_fields` | `any[]` |  |
| `customer` | `any` |  |
| `customer_id` | `number` |  |
| `delivery_date` | `string` |  |
| `discount_amount` | `string` |  |
| `discounts` | `any[]` |  |
| `due_amount` | `string` |  |
| `id` | `string` |  |
| `line_items` | `any[]` |  |
| `memo` | `string` |  |
| `number` | `number` |  |
| `paid_amount` | `string` |  |
| `payment_instructions` | `string` |  |
| `payments` | `any[]` |  |
| `product_family_name` | `string` |  |
| `product_name` | `string` |  |
| `public_url` | `string` |  |
| `refund_amount` | `string` |  |
| `role` | `any` |  |
| `seller` | `any` |  |
| `sequence_number` | `number` |  |
| `shipping_address` | `Record<string, any>` |  |
| `site_id` | `number` |  |
| `status` | `string` |  |
| `subscription_id` | `number` |  |
| `subtotal_amount` | `string` |  |
| `tax_amount` | `string` |  |
| `taxes` | `any[]` |  |
| `total_amount` | `string` |  |
| `uid` | `string` |  |

#### Example: List

```ts
const proforma_invoices = await client.ProformaInvoice().list({ subscription_id: 1 })
```

#### Example: Create

```ts
const proforma_invoice = await client.ProformaInvoice().create({
})
```


### ReasonCode

Create an instance: `const reason_code = client.ReasonCode()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `position` | `number` |  |
| `reason_code` | `Record<string, any>` |  |
| `site_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const reason_code = await client.ReasonCode().load({ reason_code_id: 1 })
```

#### Example: List

```ts
const reason_codes = await client.ReasonCode().list()
```

#### Example: Create

```ts
const reason_code = await client.ReasonCode().create({
  reason_code: {},
})
```


### ReferralCode

Create an instance: `const referral_code = client.ReferralCode()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `id` | `number` |  |
| `site_id` | `number` |  |
| `subscription_id` | `number` |  |

#### Example: Load

```ts
const referral_code = await client.ReferralCode().load({ code: 'code' })
```


### SaleRepSetting

Create an instance: `const sale_rep_setting = client.SaleRepSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_name` | `string` |  |
| `sales_rep_id` | `number` |  |
| `sales_rep_name` | `string` |  |
| `site_link` | `string` |  |
| `site_name` | `string` |  |
| `subscription_id` | `number` |  |
| `subscription_mrr` | `string` |  |

#### Example: List

```ts
const sale_rep_settings = await client.SaleRepSetting().list({ seller_id: "example" })
```


### SalesCommission

Create an instance: `const sales_commission = client.SalesCommission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `string` |  |
| `id` | `number` |  |
| `subscriptions` | `any[]` |  |
| `subscriptions_count` | `number` |  |
| `test_mode` | `boolean` |  |

#### Example: List

```ts
const sales_commissions = await client.SalesCommission().list({ sales_rep_id: "example", seller_id: "example" })
```


### Segment

Create an instance: `const segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `number` |  |
| `created_at` | `string` |  |
| `event_based_billing_metric_id` | `number` |  |
| `id` | `number` |  |
| `price_point_id` | `number` |  |
| `prices` | `any[]` |  |
| `pricing_scheme` | `any` |  |
| `segment_property_1_value` | `any` |  |
| `segment_property_2_value` | `any` |  |
| `segment_property_3_value` | `any` |  |
| `segment_property_4_value` | `any` |  |
| `updated_at` | `string` |  |

#### Example: Create

```ts
const segment = await client.Segment().create({
  component_id: 'example_component_id',
  price_point_id: 'example_price_point_id',
})
```


### SignupProformaPreview

Create an instance: `const signup_proforma_preview = client.SignupProformaPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const signup_proforma_preview = await client.SignupProformaPreview().create({
})
```


### Site

Create an instance: `const site = client.Site()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allocation_settings` | `Record<string, any>` |  |
| `auto_renewals_enabled` | `boolean` | Whether the auto-renewals feature is enabled for this site. |
| `created_at` | `string` |  |
| `currency` | `string` |  |
| `customer_hierarchy_enabled` | `boolean` |  |
| `default_payment_collection_method` | `string` |  |
| `id` | `number` |  |
| `multi_frequency_enabled` | `boolean` | Whether the site has the multi-frequency billing feature enabled. |
| `name` | `string` |  |
| `net_terms` | `Record<string, any>` |  |
| `non_primary_currencies` | `any[]` |  |
| `organization_address` | `Record<string, any>` |  |
| `portal_enabled` | `boolean` | Whether the Billing Portal is enabled for this site. |
| `public_key` | `string` |  |
| `relationship_invoicing_enabled` | `boolean` |  |
| `requires_security_token` | `boolean` |  |
| `schedule_subscription_cancellation_enabled` | `boolean` |  |
| `seller_id` | `number` |  |
| `subdomain` | `string` |  |
| `tax_configuration` | `Record<string, any>` |  |
| `test` | `boolean` |  |
| `whopays_default_payer` | `string` |  |
| `whopays_enabled` | `boolean` |  |

#### Example: Load

```ts
const site = await client.Site().load({ id: 1 })
```

#### Example: List

```ts
const sites = await client.Site().list()
```

#### Example: Create

```ts
const site = await client.Site().create({
})
```


### Subscription

Create an instance: `const subscription = client.Subscription()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `string` | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `number` | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `Record<string, any>` |  |
| `cancel_at_end_of_period` | `boolean` | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `any` |  |
| `coupon_code` | `string` | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `any[]` | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `number` | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `number` | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `any[]` | Additional coupon data. |
| `created_at` | `string` | The creation date for this subscription |
| `credit_balance_in_cents` | `number` |  |
| `credit_card` | `any` |  |
| `currency` | `string` |  |
| `current_billing_amount_in_cents` | `number` | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | Timestamp relating to the start of the current (recurring) period |
| `customer` | `Record<string, any>` |  |
| `delayed_cancel_at` | `string` | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `boolean` | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `string` | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `string` | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `any` |  |
| `id` | `number` | The subscription unique id within Chargify. |
| `locale` | `string` |  |
| `net_terms` | `number` | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `string` | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `string` | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `number` | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `number` | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `number` | The ID of the offer associated with the subscription. |
| `on_hold_at` | `string` | The timestamp of the most recent on hold action. |
| `payer_id` | `number` | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `any` |  |
| `payment_type` | `string` | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `any` |  |
| `prepaid_dunning` | `boolean` | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `number` |  |
| `previous_state` | `any` |  |
| `product` | `Record<string, any>` |  |
| `product_price_in_cents` | `number` | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `number` | The product price point currently subscribed to. |
| `product_price_point_type` | `any` |  |
| `product_version_number` | `number` | The version of the product for the subscription. |
| `reason_code` | `string` | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `boolean` |  |
| `reference` | `string` | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `string` | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `string` |  |
| `self_service_page_token` | `string` | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `number` | The ID of the transaction that generated the revenue |
| `signup_revenue` | `string` | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `string` | A day of month that subscription will be processed on. |
| `state` | `any` |  |
| `stored_credential_transaction_id` | `number` | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `Record<string, any>` |  |
| `total_revenue_in_cents` | `number` | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | The date of last update for this subscription |

#### Example: Load

```ts
const subscription = await client.Subscription().load({ subscription_id: 1 })
```

#### Example: List

```ts
const subscriptions = await client.Subscription().list()
```

#### Example: Create

```ts
const subscription = await client.Subscription().create({
  bank_account: {},
})
```


### SubscriptionComponent

Create an instance: `const subscription_component = client.SubscriptionComponent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accrue_charge` | `boolean` | If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately. |
| `allocated_quantity` | `any` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation_id` | `number` | The allocation unique ID |
| `allocations` | `any[]` |  |
| `allow_fractional_quantities` | `boolean` |  |
| `archived_at` | `string` |  |
| `charge_id` | `number` |  |
| `component` | `Record<string, any>` |  |
| `component_handle` | `string` | The handle of the component. |
| `component_id` | `number` | The integer component ID for the allocation. |
| `created_at` | `string` | Timestamp indicating when this allocation was created |
| `currency` | `string` |  |
| `description` | `string` |  |
| `direction` | `string` |  |
| `display_on_hosted_page` | `boolean` |  |
| `downgrade_credit` | `any` |  |
| `enabled` | `boolean` | (for on/off components) indicates if the component is enabled for the subscription. |
| `end_date` | `string` |  |
| `existing_balance_in_cents` | `number` | An integer representing the amount of the subscription's current balance |
| `expires_at` | `string` |  |
| `historic_usages` | `any[]` |  |
| `id` | `number` |  |
| `initiate_dunning` | `boolean` | If true, if the immediate component payment fails, initiate dunning for the subscription. |
| `interval` | `number` | The numerical interval. |
| `interval_unit` | `any` |  |
| `kind` | `any` |  |
| `line_items` | `any[]` |  |
| `memo` | `string` | The memo passed when the allocation was created |
| `name` | `string` |  |
| `overage_quantity` | `number` |  |
| `payment` | `any` |  |
| `period_type` | `string` |  |
| `previous_price_point_id` | `number` |  |
| `previous_quantity` | `any` | The allocated quantity that was in effect before this allocation was created. |
| `price_point_handle` | `string` |  |
| `price_point_id` | `number` |  |
| `price_point_name` | `string` |  |
| `price_point_type` | `any` |  |
| `pricing_scheme` | `any` |  |
| `product_family_handle` | `string` |  |
| `product_family_id` | `number` |  |
| `proration_downgrade_scheme` | `string` | The scheme used if the proration was a downgrade. |
| `proration_scheme` | `string` |  |
| `proration_upgrade_scheme` | `string` | The scheme used if the proration was an upgrade. |
| `quantity` | `any` | The allocated quantity set into effect by the allocation. |
| `recurring` | `boolean` |  |
| `start_date` | `string` |  |
| `subscription` | `any` |  |
| `subscription_id` | `number` | The integer subscription ID for the allocation. |
| `subtotal_in_cents` | `number` |  |
| `timestamp` | `string` | The time that the allocation was recorded, in ISO 8601 format and UTC timezone, e.g., 2012-11-20T22:00:37Z |
| `total_discount_in_cents` | `number` |  |
| `total_in_cents` | `number` |  |
| `total_tax_in_cents` | `number` |  |
| `unit_balance` | `any` |  |
| `unit_name` | `string` |  |
| `updated_at` | `string` |  |
| `upgrade_charge` | `any` |  |
| `use_site_exchange_rate` | `boolean` |  |
| `used_quantity` | `number` |  |

#### Example: Load

```ts
const subscription_component = await client.SubscriptionComponent().load({ component_id: 1, subscription_id: 1 })
```

#### Example: List

```ts
const subscription_components = await client.SubscriptionComponent().list()
```

#### Example: Create

```ts
const subscription_component = await client.SubscriptionComponent().create({
  api_handle: 'example_api_handle',
})
```


### SubscriptionGroup

Create an instance: `const subscription_group = client.SubscriptionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_balances` | `Record<string, any>` |  |
| `cancel_at_end_of_period` | `boolean` |  |
| `created_at` | `string` |  |
| `customer_id` | `number` |  |
| `group_type` | `string` |  |
| `id` | `string` |  |
| `next_assessment_at` | `string` |  |
| `payment_collection_method` | `any` |  |
| `payment_profile` | `Record<string, any>` |  |
| `payment_profile_id` | `number` |  |
| `primary_subscription_id` | `number` |  |
| `scheme` | `number` |  |
| `state` | `string` |  |
| `subscription_ids` | `any[]` |  |
| `uid` | `string` |  |

#### Example: List

```ts
const subscription_groups = await client.SubscriptionGroup().list()
```

#### Example: Create

```ts
const subscription_group = await client.SubscriptionGroup().create({
})
```


### SubscriptionGroupInvoiceAccount

Create an instance: `const subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const subscription_group_invoice_accounts = await client.SubscriptionGroupInvoiceAccount().list({ id: "example" })
```

#### Example: Create

```ts
const subscription_group_invoice_account = await client.SubscriptionGroupInvoiceAccount().create({
  id: 'example_id',
})
```


### SubscriptionGroupSignup

Create an instance: `const subscription_group_signup = client.SubscriptionGroupSignup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const subscription_group_signup = await client.SubscriptionGroupSignup().create({
})
```


### SubscriptionGroupStatus

Create an instance: `const subscription_group_status = client.SubscriptionGroupStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const subscription_group_status = await client.SubscriptionGroupStatus().create({
  id: 'example_id',
})
```


### SubscriptionInvoiceAccount

Create an instance: `const subscription_invoice_account = client.SubscriptionInvoiceAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount_in_cents` | `number` | The amount in cents of the entry |
| `created_at` | `string` | The date and time the entry was created |
| `ending_balance_in_cents` | `number` | The new balance for the credit account |
| `entry_type` | `any` |  |
| `id` | `number` |  |
| `invoice_uid` | `string` | The invoice uid associated with the entry. |
| `memo` | `string` | The memo attached to the entry |
| `remaining_balance_in_cents` | `number` | The remaining balance for the entry |

#### Example: List

```ts
const subscription_invoice_accounts = await client.SubscriptionInvoiceAccount().list({ subscription_id: 1 })
```

#### Example: Create

```ts
const subscription_invoice_account = await client.SubscriptionInvoiceAccount().create({
  id: 1,
})
```


### SubscriptionMrr

Create an instance: `const subscription_mrr = client.SubscriptionMrr()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakouts` | `Record<string, any>` |  |
| `mrr_amount_in_cents` | `number` |  |
| `subscription_id` | `number` |  |

#### Example: List

```ts
const subscription_mrrs = await client.SubscriptionMrr().list()
```


### SubscriptionNote

Create an instance: `const subscription_note = client.SubscriptionNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `created_at` | `string` |  |
| `id` | `number` |  |
| `note` | `Record<string, any>` |  |
| `sticky` | `boolean` |  |
| `subscription_id` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const subscription_note = await client.SubscriptionNote().load({ note_id: 1, subscription_id: 1 })
```

#### Example: List

```ts
const subscription_notes = await client.SubscriptionNote().list({ id: 1 })
```

#### Example: Create

```ts
const subscription_note = await client.SubscriptionNote().create({
  id: 1,
  note: {},
})
```


### SubscriptionProduct

Create an instance: `const subscription_product = client.SubscriptionProduct()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `charge_in_cents` | `number` | The amount of the charge that would be created for the new product. |
| `credit_applied_in_cents` | `number` | Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription. |
| `id` | `string` |  |
| `migration` | `Record<string, any>` |  |
| `payment_due_in_cents` | `number` | The amount of the payment due in the case of an upgrade. |
| `prorated_adjustment_in_cents` | `number` | The amount of the prorated adjustment that would be issued for the current subscription. |

#### Example: Create

```ts
const subscription_product = await client.SubscriptionProduct().create({
  subscription_id: 1,
  migration: {},
})
```


### SubscriptionRenewal

Create an instance: `const subscription_renewal = client.SubscriptionRenewal()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contract` | `any` |  |
| `created_at` | `string` |  |
| `decimal_quantity` | `string` |  |
| `ends_at` | `string` |  |
| `id` | `number` | ID of the renewal. |
| `item_id` | `number` |  |
| `item_subclass` | `string` |  |
| `item_type` | `string` |  |
| `lock_in_at` | `string` |  |
| `price_point_id` | `number` |  |
| `price_point_type` | `string` |  |
| `quantity` | `number` |  |
| `scheduled_renewal_configuration_item` | `Record<string, any>` |  |
| `scheduled_renewal_configuration_items` | `any[]` |  |
| `site_id` | `number` | ID of the site to which the renewal belongs. |
| `starts_at` | `string` |  |
| `status` | `string` |  |
| `subscription_id` | `number` | The id of the subscription. |
| `subscription_renewal_configuration_id` | `number` |  |

#### Example: Load

```ts
const subscription_renewal = await client.SubscriptionRenewal().load({ id: 1, subscription_id: 1 })
```

#### Example: List

```ts
const subscription_renewals = await client.SubscriptionRenewal().list({ id: 1 })
```

#### Example: Create

```ts
const subscription_renewal = await client.SubscriptionRenewal().create({
  scheduled_renewal_id: 1,
  subscription_id: 1,
})
```


### SubscriptionStatus

Create an instance: `const subscription_status = client.SubscriptionStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `existing_balance_in_cents` | `number` | An integer representing the amount of the subscription’s current balance |
| `id` | `string` |  |
| `line_items` | `any[]` | An array of objects representing the individual transactions that will be created at the next renewal |
| `next_assessment_at` | `string` | The timestamp for the subscription’s next renewal |
| `subtotal_in_cents` | `number` | An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal |
| `total_amount_due_in_cents` | `number` | An integer representing the existing_balance_in_cents plus the total_in_cents |
| `total_discount_in_cents` | `number` | An integer representing the amount of the coupon discounts that will be applied to the next renewal |
| `total_in_cents` | `number` | An integer representing the total amount owed, less any discounts, that will be assessed at the next renewal |
| `total_tax_in_cents` | `number` | An integer representing the total tax charges that will be assessed at the next renewal |
| `uncalculated_taxes` | `boolean` | A boolean indicating whether or not additional taxes will be calculated at the time of renewal. |

#### Example: Create

```ts
const subscription_status = await client.SubscriptionStatus().create({
  subscription_id: 1,
})
```


### Usage

Create an instance: `const usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usage` | `Record<string, any>` |  |

#### Example: List

```ts
const usages = await client.Usage().list({ component_id: "example", subscription_id_or_reference: "example" })
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `site_id` | `number` |  |
| `status` | `string` |  |
| `url` | `string` |  |
| `webhook` | `Record<string, any>` |  |
| `webhook_subscriptions` | `any[]` |  |

#### Example: List

```ts
const webhooks = await client.Webhook().list()
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

11 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `event` | `event` | 21 | 23 levels |
| `list_segment` | `segment_property_1_value` | 4 | 0 levels |
| `list_segment` | `segment_property_2_value` | 4 | 0 levels |
| `list_segment` | `segment_property_3_value` | 4 | 0 levels |
| `list_segment` | `segment_property_4_value` | 4 | 0 levels |
| `list_segment` | `segments` | 4 | 6 levels |
| `segment` | `segment_property_1_value` | 4 | 0 levels |
| `segment` | `segment_property_2_value` | 4 | 0 levels |
| `segment` | `segment_property_3_value` | 4 | 0 levels |
| `segment` | `segment_property_4_value` | 4 | 0 levels |
| `entitlement` | `entitlements` | 3 | 5 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
maxio-advanced-billing/
├── src/
│   ├── MaxioAdvancedBillingSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { MaxioAdvancedBillingSDK } from '@voxgig-sdk/maxio-advanced-billing-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const customfield = client.CustomField()
await customfield.list()

// customfield.data() now returns the customfield data from the last `list`
// customfield.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
