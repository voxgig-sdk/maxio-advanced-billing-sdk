# MaxioAdvancedBilling Ruby SDK



The Ruby SDK for the MaxioAdvancedBilling API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AccountBalance` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/maxio-advanced-billing-sdk/releases](https://github.com/voxgig-sdk/maxio-advanced-billing-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "MaxioAdvancedBilling_sdk"

client = MaxioAdvancedBillingSDK.new({
  "apikey" => ENV["MAXIO_ADVANCED_BILLING_APIKEY"],
})
```

### 3. Load an accountbalance

AccountBalance is nested under subscription, so provide the `subscription_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the AccountBalance record (raises on error).
  accountbalance = client.AccountBalance.load({ "subscription_id" => 1 })
  puts accountbalance
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  accountbalance = client.AccountBalance.load({ "subscription_id" => 1 })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = MaxioAdvancedBillingSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
accountbalance = client.AccountBalance.load({ "subscription_id" => 1 })
puts accountbalance
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = MaxioAdvancedBillingSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE
MAXIO_ADVANCED_BILLING_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### MaxioAdvancedBillingSDK

```ruby
require_relative "MaxioAdvancedBilling_sdk"
client = MaxioAdvancedBillingSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = MaxioAdvancedBillingSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MaxioAdvancedBillingSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `AccountBalance` | `(data) -> AccountBalanceEntity` | Create an AccountBalance entity instance. |
| `Allocation` | `(data) -> AllocationEntity` | Create an Allocation entity instance. |
| `BatchJob` | `(data) -> BatchJobEntity` | Create a BatchJob entity instance. |
| `BillingPortal` | `(data) -> BillingPortalEntity` | Create a BillingPortal entity instance. |
| `Component` | `(data) -> ComponentEntity` | Create a Component entity instance. |
| `ComponentFeature` | `(data) -> ComponentFeatureEntity` | Create a ComponentFeature entity instance. |
| `ComponentPricePoint` | `(data) -> ComponentPricePointEntity` | Create a ComponentPricePoint entity instance. |
| `ComponentPricePointCurrencyOverage` | `(data) -> ComponentPricePointCurrencyOverageEntity` | Create a ComponentPricePointCurrencyOverage entity instance. |
| `Coupon` | `(data) -> CouponEntity` | Create a Coupon entity instance. |
| `CouponCurrency` | `(data) -> CouponCurrencyEntity` | Create a CouponCurrency entity instance. |
| `CouponSubcode` | `(data) -> CouponSubcodeEntity` | Create a CouponSubcode entity instance. |
| `CouponUsage` | `(data) -> CouponUsageEntity` | Create a CouponUsage entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `Customer` | `(data) -> CustomerEntity` | Create a Customer entity instance. |
| `DelayedCancel` | `(data) -> DelayedCancelEntity` | Create a DelayedCancel entity instance. |
| `Endpoint` | `(data) -> EndpointEntity` | Create an Endpoint entity instance. |
| `Entitlement` | `(data) -> EntitlementEntity` | Create an Entitlement entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `EventsBasedBillingSegment` | `(data) -> EventsBasedBillingSegmentEntity` | Create an EventsBasedBillingSegment entity instance. |
| `Feature` | `(data) -> FeatureEntity` | Create a Feature entity instance. |
| `FeatureCatalogItem` | `(data) -> FeatureCatalogItemEntity` | Create a FeatureCatalogItem entity instance. |
| `FeatureTemplate` | `(data) -> FeatureTemplateEntity` | Create a FeatureTemplate entity instance. |
| `Insight` | `(data) -> InsightEntity` | Create an Insight entity instance. |
| `Invoice` | `(data) -> InvoiceEntity` | Create an Invoice entity instance. |
| `ListProformaInvoice` | `(data) -> ListProformaInvoiceEntity` | Create a ListProformaInvoice entity instance. |
| `ListSaleRepItem` | `(data) -> ListSaleRepItemEntity` | Create a ListSaleRepItem entity instance. |
| `ListSegment` | `(data) -> ListSegmentEntity` | Create a ListSegment entity instance. |
| `Offer` | `(data) -> OfferEntity` | Create an Offer entity instance. |
| `OneTimeToken` | `(data) -> OneTimeTokenEntity` | Create an OneTimeToken entity instance. |
| `PaymentProfile` | `(data) -> PaymentProfileEntity` | Create a PaymentProfile entity instance. |
| `Prepayment` | `(data) -> PrepaymentEntity` | Create a Prepayment entity instance. |
| `Product` | `(data) -> ProductEntity` | Create a Product entity instance. |
| `ProductFamily` | `(data) -> ProductFamilyEntity` | Create a ProductFamily entity instance. |
| `ProductFeature` | `(data) -> ProductFeatureEntity` | Create a ProductFeature entity instance. |
| `ProductPricePoint` | `(data) -> ProductPricePointEntity` | Create a ProductPricePoint entity instance. |
| `ProformaInvoice` | `(data) -> ProformaInvoiceEntity` | Create a ProformaInvoice entity instance. |
| `ReasonCode` | `(data) -> ReasonCodeEntity` | Create a ReasonCode entity instance. |
| `ReferralCode` | `(data) -> ReferralCodeEntity` | Create a ReferralCode entity instance. |
| `SaleRepSetting` | `(data) -> SaleRepSettingEntity` | Create a SaleRepSetting entity instance. |
| `SalesCommission` | `(data) -> SalesCommissionEntity` | Create a SalesCommission entity instance. |
| `Segment` | `(data) -> SegmentEntity` | Create a Segment entity instance. |
| `SignupProformaPreview` | `(data) -> SignupProformaPreviewEntity` | Create a SignupProformaPreview entity instance. |
| `Site` | `(data) -> SiteEntity` | Create a Site entity instance. |
| `Subscription` | `(data) -> SubscriptionEntity` | Create a Subscription entity instance. |
| `SubscriptionComponent` | `(data) -> SubscriptionComponentEntity` | Create a SubscriptionComponent entity instance. |
| `SubscriptionGroup` | `(data) -> SubscriptionGroupEntity` | Create a SubscriptionGroup entity instance. |
| `SubscriptionGroupInvoiceAccount` | `(data) -> SubscriptionGroupInvoiceAccountEntity` | Create a SubscriptionGroupInvoiceAccount entity instance. |
| `SubscriptionGroupSignup` | `(data) -> SubscriptionGroupSignupEntity` | Create a SubscriptionGroupSignup entity instance. |
| `SubscriptionGroupStatus` | `(data) -> SubscriptionGroupStatusEntity` | Create a SubscriptionGroupStatus entity instance. |
| `SubscriptionInvoiceAccount` | `(data) -> SubscriptionInvoiceAccountEntity` | Create a SubscriptionInvoiceAccount entity instance. |
| `SubscriptionMrr` | `(data) -> SubscriptionMrrEntity` | Create a SubscriptionMrr entity instance. |
| `SubscriptionNote` | `(data) -> SubscriptionNoteEntity` | Create a SubscriptionNote entity instance. |
| `SubscriptionProduct` | `(data) -> SubscriptionProductEntity` | Create a SubscriptionProduct entity instance. |
| `SubscriptionRenewal` | `(data) -> SubscriptionRenewalEntity` | Create a SubscriptionRenewal entity instance. |
| `SubscriptionStatus` | `(data) -> SubscriptionStatusEntity` | Create a SubscriptionStatus entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `MaxioAdvancedBillingError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### AccountBalance

| Field | Description |
| --- | --- |
| `open_invoices` |  |
| `pending_discounts` |  |
| `pending_invoices` |  |
| `prepayments` |  |
| `service_credits` |  |

Operations: Load.

API path: `/subscriptions/{subscription_id}/account_balances.json`

#### Allocation

| Field | Description |
| --- | --- |
| `allocation` |  |

Operations: Create, List.

API path: `/subscriptions/{subscription_id}/allocations.json`

#### BatchJob

| Field | Description |
| --- | --- |
| `completed` |  |
| `created_at` |  |
| `finished_at` |  |
| `id` |  |
| `row_count` |  |

Operations: Create, Load.

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

Operations: Create, Load, Remove.

API path: `/portal/customers/{customer_id}/invitations/invite.json`

#### Component

| Field | Description |
| --- | --- |
| `component` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/product_families/{product_family_id}/event_based_components.json`

#### ComponentFeature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/components/{component_id}/features/{id}.json`

#### ComponentPricePoint

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `component` |  |
| `component_id` |  |
| `created_at` |  |
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
| `price_point` |  |
| `price_points` |  |
| `prices` |  |
| `pricing_scheme` |  |
| `renew_prepaid_allocation` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | Applicable only to prepaid usage components. |
| `subscription_id` | (only used for Custom Pricing - ie. |
| `tax_included` |  |
| `type` |  |
| `updated_at` |  |
| `use_site_exchange_rate` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

Operations: Create, List, Remove, Update.

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

Operations: Load.

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

Operations: Create, List, Load, Remove, Update.

API path: `/coupons/{coupon_id}/codes.json`

#### CouponCurrency

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Update.

API path: `/coupons/{coupon_id}/currency_prices.json`

#### CouponSubcode

| Field | Description |
| --- | --- |
| `created_codes` |  |
| `duplicate_codes` |  |
| `id` |  |
| `invalid_codes` |  |

Operations: Update.

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

Operations: List.

API path: `/product_families/{product_family_id}/coupons/{coupon_id}/usage.json`

#### CustomField

| Field | Description |
| --- | --- |
| `current_page` |  |
| `data_count` |  |
| `deleted_at` |  |
| `enum` |  |
| `id` |  |
| `input_type` |  |
| `metadata` |  |
| `metafield_id` |  |
| `metafields` |  |
| `name` |  |
| `per_page` |  |
| `resource_id` |  |
| `scope` |  |
| `total_count` |  |
| `total_pages` |  |
| `value` |  |

Operations: Create, List, Remove, Update.

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

Operations: Create, List, Load, Remove, Update.

API path: `/portal/customers/{customer_id}/enable.json`

#### DelayedCancel

| Field | Description |
| --- | --- |
| `message` |  |
| `subscription` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/delayed_cancel.json`

#### Endpoint

| Field | Description |
| --- | --- |
| `id` |  |
| `site_id` |  |
| `status` |  |
| `url` |  |
| `webhook_subscriptions` |  |

Operations: List, Update.

API path: `/endpoints.json`

#### Entitlement

| Field | Description |
| --- | --- |
| `customer_id` |  |
| `entitlements` |  |
| `status` | The subscription's current state, e.g. |
| `subscription_id` |  |

Operations: List.

API path: `/subscriptions/{subscription_id}/entitlements.json`

#### Event

| Field | Description |
| --- | --- |
| `event` |  |

Operations: List, Load.

API path: `/events.json`

#### EventsBasedBillingSegment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/components/{component_id}/price_points/{price_point_id}/segments/{id}.json`

#### Feature

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `archived_count` | Number of archived feature templates matching the filters. |
| `created_at` |  |
| `feature` |  |
| `feature_key` | The `key` of the parent feature template. |
| `feature_kind` |  |
| `feature_name` | The `name` of the parent feature template. |
| `feature_template_id` | The id of the feature template this item was created from. |
| `id` |  |
| `items` |  |
| `periodicity_interval` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` |  |
| `price_point_id` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` |  |
| `total_count` | Total number of feature templates matching the filters, across all pages. |
| `updated_at` |  |
| `value` | The value granted by this feature catalog item. |

Operations: Create, List.

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

Operations: Create, Load, Update.

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

Operations: Create, Load, Remove, Update.

API path: `/features/{id}/restore.json`

#### Insight

| Field | Description |
| --- | --- |
| `mrr` |  |
| `seller_name` |  |
| `site_currency` |  |
| `site_id` |  |
| `site_name` |  |
| `stats` |  |

Operations: Load.

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
| `credit_notes` |  |
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
| `invoice` |  |
| `invoices` |  |
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

Operations: Create, List, Remove, Update.

API path: `/invoices/{uid}/customer_information/preview.json`

#### ListProformaInvoice

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

Operations: List.

API path: `/subscriptions/{subscription_id}/proforma_invoices.json`

#### ListSaleRepItem

| Field | Description |
| --- | --- |
| `full_name` |  |
| `id` |  |
| `mrr_data` |  |
| `subscriptions_count` |  |
| `test_mode` |  |

Operations: List.

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

Operations: Create, List, Update.

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
| `offers` |  |
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

Operations: Create, List, Load, Update.

API path: `/offers.json`

#### OneTimeToken

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/one_time_tokens/{chargify_token}.json`

#### PaymentProfile

| Field | Description |
| --- | --- |
| `id` |  |
| `payment_profile` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json`

#### Prepayment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json`

#### Product

| Field | Description |
| --- | --- |
| `product` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/product_families/{product_family_id}/products.json`

#### ProductFamily

| Field | Description |
| --- | --- |
| `id` |  |
| `product_family` |  |

Operations: Create, List, Load.

API path: `/product_families.json`

#### ProductFeature

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/products/{product_id}/features/{id}.json`

#### ProductPricePoint

| Field | Description |
| --- | --- |
| `id` |  |
| `price_point` |  |
| `price_points` |  |
| `product` |  |

Operations: Create, List, Load, Patch, Remove, Update.

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

Operations: Create, List.

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

Operations: Create, List, Load, Remove, Update.

API path: `/reason_codes.json`

#### ReferralCode

| Field | Description |
| --- | --- |

Operations: Load.

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

Operations: List.

API path: `/sellers/{seller_id}/sales_commission_settings.json`

#### SalesCommission

| Field | Description |
| --- | --- |
| `full_name` |  |
| `id` |  |
| `subscriptions` |  |
| `subscriptions_count` |  |
| `test_mode` |  |

Operations: List.

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

Operations: Create, Update.

API path: `/components/{component_id}/price_points/{price_point_id}/segments.json`

#### SignupProformaPreview

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/subscriptions/proforma_invoices/preview.json`

#### Site

| Field | Description |
| --- | --- |
| `chargify_js_keys` |  |
| `meta` |  |
| `site` |  |

Operations: Create, List, Load.

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

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/purge.json`

#### SubscriptionComponent

| Field | Description |
| --- | --- |
| `allocated_quantity` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` |  |
| `allocation_preview` |  |
| `allow_fractional_quantities` |  |
| `archived_at` |  |
| `component` |  |
| `component_handle` |  |
| `component_id` |  |
| `created_at` |  |
| `currency` |  |
| `description` |  |
| `display_on_hosted_page` |  |
| `downgrade_credit` |  |
| `enabled` | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` |  |
| `id` |  |
| `interval` | The numerical interval. |
| `interval_unit` |  |
| `kind` |  |
| `name` |  |
| `price_point_handle` |  |
| `price_point_id` |  |
| `price_point_name` |  |
| `price_point_type` |  |
| `pricing_scheme` |  |
| `product_family_handle` |  |
| `product_family_id` |  |
| `recurring` |  |
| `subscription` |  |
| `subscription_id` |  |
| `unit_balance` |  |
| `unit_name` |  |
| `updated_at` |  |
| `upgrade_charge` |  |
| `usage` |  |
| `use_site_exchange_rate` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/events/{api_handle}.json`

#### SubscriptionGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `meta` |  |
| `subscription_group` |  |
| `subscription_groups` |  |

Operations: Create, List, Remove, Update.

API path: `/subscriptions/{subscription_id}/group.json`

#### SubscriptionGroupInvoiceAccount

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List.

API path: `/subscription_groups/{uid}/prepayments.json`

#### SubscriptionGroupSignup

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/subscription_groups/signup.json`

#### SubscriptionGroupStatus

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Remove.

API path: `/subscription_groups/{uid}/cancel.json`

#### SubscriptionInvoiceAccount

| Field | Description |
| --- | --- |
| `id` |  |
| `service_credits` |  |

Operations: Create, List.

API path: `/subscriptions/{subscription_id}/prepayments.json`

#### SubscriptionMrr

| Field | Description |
| --- | --- |
| `breakouts` |  |
| `mrr_amount_in_cents` |  |
| `subscription_id` |  |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/notes.json`

#### SubscriptionProduct

| Field | Description |
| --- | --- |
| `id` |  |
| `migration` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/migrations.json`

#### SubscriptionRenewal

| Field | Description |
| --- | --- |
| `id` |  |
| `scheduled_renewal_configuration` |  |
| `scheduled_renewal_configuration_item` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json`

#### SubscriptionStatus

| Field | Description |
| --- | --- |
| `id` |  |
| `renewal_preview` |  |

Operations: Create, Remove, Update.

API path: `/subscriptions/{subscription_id}/resume.json`

#### Usage

| Field | Description |
| --- | --- |
| `usage` |  |

Operations: List.

API path: `/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json`

#### Webhook

| Field | Description |
| --- | --- |
| `endpoint` |  |
| `webhook` |  |

Operations: Create, List, Update.

API path: `/endpoints.json`



## Entities


### AccountBalance

Create an instance: `account_balance = client.AccountBalance`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `open_invoices` | `Object` |  |
| `pending_discounts` | `Object` |  |
| `pending_invoices` | `Object` |  |
| `prepayments` | `Object` |  |
| `service_credits` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AccountBalance record (raises on error).
account_balance = client.AccountBalance.load({ "subscription_id" => 1 })
```


### Allocation

Create an instance: `allocation = client.Allocation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allocation` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Allocation records (raises on error).
allocations = client.Allocation.list
```

#### Example: Create

```ruby
allocation = client.Allocation.create({
  "subscription_id" => 1, # Integer
})
```


### BatchJob

Create an instance: `batch_job = client.BatchJob`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `String` |  |
| `created_at` | `String` |  |
| `finished_at` | `String` |  |
| `id` | `Integer` |  |
| `row_count` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BatchJob record (raises on error).
batch_job = client.BatchJob.load({ "batch_id" => "batch_id" })
```

#### Example: Create

```ruby
batch_job = client.BatchJob.create({
})
```


### BillingPortal

Create an instance: `billing_portal = client.BillingPortal`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `expires_at` | `String` |  |
| `fetch_count` | `Integer` |  |
| `last_accepted_at` | `String` |  |
| `last_invite_accepted_at` | `String` |  |
| `last_invite_sent_at` | `String` |  |
| `last_sent_at` | `String` |  |
| `new_link_available_at` | `String` |  |
| `send_invite_link_text` | `String` |  |
| `uninvited_count` | `Integer` |  |
| `url` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the BillingPortal record (raises on error).
billing_portal = client.BillingPortal.load({ "customer_id" => 1 })
```

#### Example: Create

```ruby
billing_portal = client.BillingPortal.create({
  "customer_id" => 1, # Integer
})
```


### Component

Create an instance: `component = client.Component`

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
| `component` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Component record (raises on error).
component = client.Component.load({ "component_id" => "component_id", "product_family_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Component records (raises on error).
components = client.Component.list
```

#### Example: Create

```ruby
component = client.Component.create({
  "product_family_id" => "example_product_family_id", # String
})
```


### ComponentFeature

Create an instance: `component_feature = client.ComponentFeature`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### ComponentPricePoint

Create an instance: `component_price_point = client.ComponentPricePoint`

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
| `archived_at` | `String` |  |
| `component` | `Hash` |  |
| `component_id` | `Integer` |  |
| `created_at` | `String` |  |
| `currency_prices` | `Array` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `Boolean` | Note: Refer to type attribute instead. |
| `expiration_interval` | `Integer` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Object` |  |
| `handle` | `String` |  |
| `id` | `Integer` |  |
| `interval` | `Integer` | The numerical interval. |
| `interval_unit` | `Object` |  |
| `name` | `String` |  |
| `overage_prices` | `Array` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Object` |  |
| `price_point` | `Hash` |  |
| `price_points` | `Array` |  |
| `prices` | `Array` |  |
| `pricing_scheme` | `Object` |  |
| `renew_prepaid_allocation` | `Boolean` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `Boolean` | Applicable only to prepaid usage components. |
| `subscription_id` | `Integer` | (only used for Custom Pricing - ie. |
| `tax_included` | `Boolean` |  |
| `type` | `Object` |  |
| `updated_at` | `String` |  |
| `use_site_exchange_rate` | `Boolean` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: List

```ruby
# list returns an Array of ComponentPricePoint records (raises on error).
component_price_points = client.ComponentPricePoint.list
```

#### Example: Create

```ruby
component_price_point = client.ComponentPricePoint.create({
  "id" => 1, # Integer
  "component" => {}, # Hash
})
```


### ComponentPricePointCurrencyOverage

Create an instance: `component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `String` |  |
| `component_id` | `Integer` |  |
| `created_at` | `String` |  |
| `currency_overage_prices` | `Array` | Applicable only to prepaid usage components. |
| `currency_prices` | `Array` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `Boolean` | Note: Refer to type attribute instead. |
| `expiration_interval` | `Integer` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `Object` |  |
| `handle` | `String` |  |
| `id` | `Integer` |  |
| `interval` | `Integer` | The numerical interval. |
| `interval_unit` | `Object` |  |
| `name` | `String` |  |
| `overage_prices` | `Array` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `Object` |  |
| `prices` | `Array` |  |
| `pricing_scheme` | `Object` |  |
| `renew_prepaid_allocation` | `Boolean` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `Boolean` | Applicable only to prepaid usage components. |
| `subscription_id` | `Integer` | (only used for Custom Pricing - ie. |
| `tax_included` | `Boolean` |  |
| `type` | `Object` |  |
| `updated_at` | `String` |  |
| `use_site_exchange_rate` | `Boolean` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ComponentPricePointCurrencyOverage record (raises on error).
component_price_point_currency_overage = client.ComponentPricePointCurrencyOverage.load({ "component_id" => "component_id", "price_point_id" => "price_point_id" })
```


### Coupon

Create an instance: `coupon = client.Coupon`

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
| `allow_negative_balance` | `Boolean` | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `Float` |  |
| `amount_in_cents` | `Integer` |  |
| `apply_on_cancel_at_end_of_period` | `Boolean` |  |
| `apply_on_subscription_expiration` | `Boolean` |  |
| `archived_at` | `String` |  |
| `code` | `String` |  |
| `compounding_strategy` | `Object` |  |
| `conversion_limit` | `String` |  |
| `coupon` | `Hash` |  |
| `coupon_restrictions` | `Array` |  |
| `created_at` | `String` |  |
| `currency_prices` | `Array` | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `String` |  |
| `discount_type` | `String` |  |
| `duration_interval` | `Integer` |  |
| `duration_interval_span` | `String` |  |
| `duration_interval_unit` | `String` |  |
| `duration_period_count` | `Integer` |  |
| `end_date` | `String` | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `Boolean` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `percentage` | `String` |  |
| `product_family_id` | `Integer` |  |
| `product_family_name` | `String` |  |
| `recurring` | `Boolean` |  |
| `recurring_scheme` | `String` |  |
| `stackable` | `Boolean` | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `String` |  |
| `updated_at` | `String` |  |
| `use_site_exchange_rate` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Coupon record (raises on error).
coupon = client.Coupon.load({ "coupon_id" => 1, "product_family_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Coupon records (raises on error).
coupons = client.Coupon.list
```

#### Example: Create

```ruby
coupon = client.Coupon.create({
  "product_family_id" => 1, # Integer
})
```


### CouponCurrency

Create an instance: `coupon_currency = client.CouponCurrency`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### CouponSubcode

Create an instance: `coupon_subcode = client.CouponSubcode`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_codes` | `Array` |  |
| `duplicate_codes` | `Array` |  |
| `id` | `String` |  |
| `invalid_codes` | `Array` |  |


### CouponUsage

Create an instance: `coupon_usage = client.CouponUsage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` | The Chargify id of the product |
| `name` | `String` | Name of the product |
| `revenue` | `Integer` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `Integer` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `Integer` | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `Integer` | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `Integer` | Number of times the coupon has been applied |

#### Example: List

```ruby
# list returns an Array of CouponUsage records (raises on error).
coupon_usages = client.CouponUsage.list
```


### CustomField

Create an instance: `custom_field = client.CustomField`

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
| `current_page` | `Integer` |  |
| `data_count` | `Integer` |  |
| `deleted_at` | `String` |  |
| `enum` | `String` |  |
| `id` | `Integer` |  |
| `input_type` | `String` |  |
| `metadata` | `Hash` |  |
| `metafield_id` | `Integer` |  |
| `metafields` | `Object` |  |
| `name` | `String` |  |
| `per_page` | `Integer` |  |
| `resource_id` | `Integer` |  |
| `scope` | `Hash` |  |
| `total_count` | `Integer` |  |
| `total_pages` | `Integer` |  |
| `value` | `String` |  |

#### Example: List

```ruby
# list returns an Array of CustomField records (raises on error).
custom_fields = client.CustomField.list
```

#### Example: Create

```ruby
custom_field = client.CustomField.create({
  "resource_type" => "example_resource_type", # Object
})
```


### Customer

Create an instance: `customer = client.Customer`

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
| `address` | `String` | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `String` | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `Integer` | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `String` | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `String` | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `String` | The customer shipping address country |
| `country_name` | `String` | The customer's full name of country |
| `created_at` | `String` | The timestamp in which the customer object was created in Chargify |
| `customer` | `Hash` |  |
| `default_auto_renewal_profile_id` | `Integer` | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `String` |  |
| `email` | `String` | The email address of the customer |
| `entity_identifier_kind` | `Object` |  |
| `entity_identifier_value` | `String` | The value of the customer's tax or business identifier. |
| `first_name` | `String` | The first name of the customer |
| `id` | `Integer` | The customer ID in Chargify |
| `last_name` | `String` | The last name of the customer |
| `locale` | `String` | The locale for the customer to identify language-region |
| `maxioid` | `String` | The Maxio-generated unique identifier for the customer. |
| `organization` | `String` | The organization of the customer. |
| `parent_id` | `Integer` | The parent ID in Chargify if applicable. |
| `phone` | `String` | The phone number of the customer |
| `portal_customer_created_at` | `String` | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `String` | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `String` | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `String` | The unique identifier used within your own application for this customer |
| `salesforce_id` | `String` | The Salesforce ID for the customer |
| `state` | `String` | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `String` | The customer's full name of state |
| `surcharging` | `Boolean` | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `Boolean` | The tax exempt status for the customer. |
| `tax_exempt_reason` | `String` | The Tax Exemption Reason Code for the customer |
| `updated_at` | `String` | The timestamp in which the customer object was last edited |
| `vat_country` | `String` | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `String` | The VAT business identification number for the customer. |
| `verified` | `Boolean` | Is the customer verified to use ACH as a payment method. |
| `zip` | `String` | The customer’s shipping address zip code (e.g., “12345”) |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Customer record (raises on error).
customer = client.Customer.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Customer records (raises on error).
customers = client.Customer.list
```

#### Example: Create

```ruby
customer = client.Customer.create({
})
```


### DelayedCancel

Create an instance: `delayed_cancel = client.DelayedCancel`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `String` |  |
| `subscription` | `Hash` |  |

#### Example: Create

```ruby
delayed_cancel = client.DelayedCancel.create({
  "subscription_id" => 1, # Integer
  "subscription" => {}, # Hash
})
```


### Endpoint

Create an instance: `endpoint = client.Endpoint`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `Integer` |  |
| `site_id` | `Integer` |  |
| `status` | `String` |  |
| `url` | `String` |  |
| `webhook_subscriptions` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of Endpoint records (raises on error).
endpoints = client.Endpoint.list
```


### Entitlement

Create an instance: `entitlement = client.Entitlement`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_id` | `Integer` |  |
| `entitlements` | `Array` |  |
| `status` | `String` | The subscription's current state, e.g. |
| `subscription_id` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of Entitlement records (raises on error).
entitlements = client.Entitlement.list
```


### Event

Create an instance: `event = client.Event`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Event record (raises on error).
event = client.Event.load()
```

#### Example: List

```ruby
# list returns an Array of Event records (raises on error).
events = client.Event.list
```


### EventsBasedBillingSegment

Create an instance: `events_based_billing_segment = client.EventsBasedBillingSegment`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### Feature

Create an instance: `feature = client.Feature`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `String` |  |
| `archived_count` | `Integer` | Number of archived feature templates matching the filters. |
| `created_at` | `String` |  |
| `feature` | `Hash` |  |
| `feature_key` | `String` | The `key` of the parent feature template. |
| `feature_kind` | `Object` |  |
| `feature_name` | `String` | The `name` of the parent feature template. |
| `feature_template_id` | `Integer` | The id of the feature template this item was created from. |
| `id` | `Integer` |  |
| `items` | `Array` |  |
| `periodicity_interval` | `Integer` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Object` |  |
| `price_point_id` | `Integer` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Object` |  |
| `total_count` | `Integer` | Total number of feature templates matching the filters, across all pages. |
| `updated_at` | `String` |  |
| `value` | `String` | The value granted by this feature catalog item. |

#### Example: List

```ruby
# list returns an Array of Feature records (raises on error).
features = client.Feature.list
```

#### Example: Create

```ruby
feature = client.Feature.create({
  "archived_count" => 1, # Integer
  "feature" => {}, # Hash
  "items" => [], # Array
  "total_count" => 1, # Integer
})
```


### FeatureCatalogItem

Create an instance: `feature_catalog_item = client.FeatureCatalogItem`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `String` |  |
| `created_at` | `String` |  |
| `feature` | `Hash` |  |
| `feature_key` | `String` | The `key` of the parent feature template. |
| `feature_kind` | `Object` |  |
| `feature_name` | `String` | The `name` of the parent feature template. |
| `feature_template_id` | `Integer` | The id of the feature template this item was created from. |
| `id` | `Integer` |  |
| `periodicity_interval` | `Integer` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `Object` |  |
| `price_point_id` | `Integer` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `Object` |  |
| `updated_at` | `String` |  |
| `value` | `String` | The value granted by this feature catalog item. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FeatureCatalogItem record (raises on error).
feature_catalog_item = client.FeatureCatalogItem.load({ "id" => 1 })
```

#### Example: Create

```ruby
feature_catalog_item = client.FeatureCatalogItem.create({
  "id" => 1, # Integer
  "feature" => {}, # Hash
})
```


### FeatureTemplate

Create an instance: `feature_template = client.FeatureTemplate`

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
| `archived_at` | `String` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `String` |  |
| `default_periodicity_interval` | `Integer` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `Object` |  |
| `default_value` | `String` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `String` |  |
| `feature` | `Object` |  |
| `id` | `Integer` | The Advanced Billing id of the feature template. |
| `key` | `String` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `Object` |  |
| `name` | `String` | The display name of the feature. |
| `plans_count` | `Integer` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `Integer` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `String` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `String` |  |
| `value_type` | `Object` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FeatureTemplate record (raises on error).
feature_template = client.FeatureTemplate.load({ "id" => 1 })
```

#### Example: Create

```ruby
feature_template = client.FeatureTemplate.create({
  "id" => 1, # Integer
  "feature" => "example_feature", # Object
})
```


### Insight

Create an instance: `insight = client.Insight`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `mrr` | `Hash` |  |
| `seller_name` | `String` |  |
| `site_currency` | `String` |  |
| `site_id` | `Integer` |  |
| `site_name` | `String` |  |
| `stats` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Insight record (raises on error).
insight = client.Insight.load()
```


### Invoice

Create an instance: `invoice = client.Invoice`

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
| `applications` | `Array` |  |
| `applied_amount` | `String` | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `String` | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `Hash` |  |
| `billing_address` | `Object` |  |
| `branding_theme_id` | `Integer` | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `Object` |  |
| `consolidation_level` | `Object` |  |
| `created_at` | `String` |  |
| `credit_amount` | `String` | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `Array` |  |
| `credits` | `Array` |  |
| `currency` | `String` | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `Array` |  |
| `customer` | `Object` |  |
| `customer_id` | `Integer` | ID of the customer to which the invoice belongs. |
| `debit_amount` | `String` |  |
| `debits` | `Array` |  |
| `discount_amount` | `String` | Total discount applied to the invoice. |
| `discounts` | `Array` |  |
| `display_settings` | `Hash` |  |
| `due_amount` | `String` | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `String` | Date the invoice is due. |
| `group_primary_subscription_id` | `Integer` | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `Integer` |  |
| `invoice` | `Hash` |  |
| `invoices` | `Array` |  |
| `issue_date` | `String` | Date the invoice was issued to the customer. |
| `line_items` | `Array` | Line items on the invoice. |
| `memo` | `String` | The memo printed on invoices of any collection type. |
| `net_terms` | `Integer` |  |
| `number` | `String` | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `Array` | An array of origin invoices for the credit note. |
| `paid_amount` | `String` | The amount paid on the invoice by the customer. |
| `paid_date` | `String` | Date the invoice became fully paid. |
| `paid_invoices` | `Array` |  |
| `parent_invoice_id` | `Integer` |  |
| `parent_invoice_number` | `Integer` | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `String` | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `Hash` |  |
| `payment_instructions` | `String` | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `Array` |  |
| `prepayment` | `String` |  |
| `previous_balance_data` | `Hash` |  |
| `product_family_name` | `String` | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `String` | The name of the product subscribed when the invoice was generated. |
| `public_url` | `String` | The public URL of the invoice |
| `public_url_expires_on` | `String` | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `Array` |  |
| `refund_amount` | `String` |  |
| `refunds` | `Array` |  |
| `remaining_amount` | `String` | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `String` |  |
| `seller` | `Object` |  |
| `sequence_number` | `Integer` | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `Object` |  |
| `site_id` | `Integer` | ID of the site to which the invoice belongs. |
| `status` | `Object` |  |
| `subscription_group_id` | `Integer` |  |
| `subscription_id` | `Integer` | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `String` | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `String` | Total tax on the invoice. |
| `taxes` | `Array` |  |
| `total_amount` | `String` | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `String` |  |
| `uid` | `String` | Unique identifier for the invoice. |
| `updated_at` | `String` |  |
| `void` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Invoice records (raises on error).
invoices = client.Invoice.list
```

#### Example: Create

```ruby
invoice = client.Invoice.create({
  "subscription_id" => 1, # Integer
  "credit_notes" => [], # Array
  "invoices" => [], # Array
  "void" => {}, # Hash
})
```


### ListProformaInvoice

Create an instance: `list_proforma_invoice = client.ListProformaInvoice`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_actions` | `Hash` |  |
| `billing_address` | `Hash` |  |
| `collection_method` | `Object` |  |
| `consolidation_level` | `Object` |  |
| `created_at` | `String` |  |
| `credit_amount` | `String` |  |
| `credits` | `Array` |  |
| `currency` | `String` |  |
| `custom_fields` | `Array` |  |
| `customer` | `Object` |  |
| `customer_id` | `Integer` |  |
| `delivery_date` | `String` |  |
| `discount_amount` | `String` |  |
| `discounts` | `Array` |  |
| `due_amount` | `String` |  |
| `line_items` | `Array` |  |
| `memo` | `String` |  |
| `number` | `Integer` |  |
| `paid_amount` | `String` |  |
| `payment_instructions` | `String` |  |
| `payments` | `Array` |  |
| `product_family_name` | `String` |  |
| `product_name` | `String` |  |
| `public_url` | `String` |  |
| `refund_amount` | `String` |  |
| `role` | `Object` |  |
| `seller` | `Object` |  |
| `sequence_number` | `Integer` |  |
| `shipping_address` | `Hash` |  |
| `site_id` | `Integer` |  |
| `status` | `String` |  |
| `subscription_id` | `Integer` |  |
| `subtotal_amount` | `String` |  |
| `tax_amount` | `String` |  |
| `taxes` | `Array` |  |
| `total_amount` | `String` |  |
| `uid` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListProformaInvoice records (raises on error).
list_proforma_invoices = client.ListProformaInvoice.list
```


### ListSaleRepItem

Create an instance: `list_sale_rep_item = client.ListSaleRepItem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `String` |  |
| `id` | `Integer` |  |
| `mrr_data` | `Hash` |  |
| `subscriptions_count` | `Integer` |  |
| `test_mode` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of ListSaleRepItem records (raises on error).
list_sale_rep_items = client.ListSaleRepItem.list
```


### ListSegment

Create an instance: `list_segment = client.ListSegment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `Integer` |  |
| `created_at` | `String` |  |
| `event_based_billing_metric_id` | `Integer` |  |
| `id` | `Integer` |  |
| `price_point_id` | `Integer` |  |
| `prices` | `Array` |  |
| `pricing_scheme` | `Object` |  |
| `segment_property_1_value` | `Object` |  |
| `segment_property_2_value` | `Object` |  |
| `segment_property_3_value` | `Object` |  |
| `segment_property_4_value` | `Object` |  |
| `segments` | `Array` |  |
| `updated_at` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ListSegment records (raises on error).
list_segments = client.ListSegment.list
```

#### Example: Create

```ruby
list_segment = client.ListSegment.create({
  "component_id" => "example_component_id", # String
  "price_point_id" => "example_price_point_id", # String
})
```


### Offer

Create an instance: `offer = client.Offer`

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
| `archived_at` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `handle` | `String` |  |
| `id` | `Integer` |  |
| `name` | `String` |  |
| `offer` | `Hash` |  |
| `offer_discounts` | `Array` |  |
| `offer_items` | `Array` |  |
| `offer_signup_pages` | `Array` |  |
| `offers` | `Array` |  |
| `product_family_id` | `Integer` |  |
| `product_family_name` | `String` |  |
| `product_id` | `Integer` |  |
| `product_name` | `String` |  |
| `product_price_in_cents` | `Integer` |  |
| `product_price_point_id` | `Integer` |  |
| `product_price_point_name` | `String` |  |
| `product_revisable_number` | `Integer` |  |
| `site_id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Offer record (raises on error).
offer = client.Offer.load({ "offer_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Offer records (raises on error).
offers = client.Offer.list
```

#### Example: Create

```ruby
offer = client.Offer.create({
})
```


### OneTimeToken

Create an instance: `one_time_token = client.OneTimeToken`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OneTimeToken record (raises on error).
one_time_token = client.OneTimeToken.load({ "chargify_token" => "chargify_token" })
```


### PaymentProfile

Create an instance: `payment_profile = client.PaymentProfile`

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
| `id` | `String` |  |
| `payment_profile` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PaymentProfile record (raises on error).
payment_profile = client.PaymentProfile.load({ "payment_profile_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of PaymentProfile records (raises on error).
payment_profiles = client.PaymentProfile.list
```

#### Example: Create

```ruby
payment_profile = client.PaymentProfile.create({
})
```


### Prepayment

Create an instance: `prepayment = client.Prepayment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Create

```ruby
prepayment = client.Prepayment.create({
  "id" => 1, # Integer
  "subscription_id" => 1, # Integer
})
```


### Product

Create an instance: `product = client.Product`

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
| `product` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Product record (raises on error).
product = client.Product.load({ "api_handle" => "api_handle" })
```

#### Example: List

```ruby
# list returns an Array of Product records (raises on error).
products = client.Product.list
```

#### Example: Create

```ruby
product = client.Product.create({
  "product_family_id" => "example_product_family_id", # String
  "product" => {}, # Hash
})
```


### ProductFamily

Create an instance: `product_family = client.ProductFamily`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `product_family` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProductFamily record (raises on error).
product_family = client.ProductFamily.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of ProductFamily records (raises on error).
product_familys = client.ProductFamily.list
```

#### Example: Create

```ruby
product_family = client.ProductFamily.create({
})
```


### ProductFeature

Create an instance: `product_feature = client.ProductFeature`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### ProductPricePoint

Create an instance: `product_price_point = client.ProductPricePoint`

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
| `id` | `String` |  |
| `price_point` | `Hash` |  |
| `price_points` | `Array` |  |
| `product` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ProductPricePoint record (raises on error).
product_price_point = client.ProductPricePoint.load({ "price_point_id" => "price_point_id", "product_id" => "product_id" })
```

#### Example: List

```ruby
# list returns an Array of ProductPricePoint records (raises on error).
product_price_points = client.ProductPricePoint.list
```

#### Example: Create

```ruby
product_price_point = client.ProductPricePoint.create({
  "id" => "example_id", # String
  "price_point" => {}, # Hash
  "product" => {}, # Hash
})
```


### ProformaInvoice

Create an instance: `proforma_invoice = client.ProformaInvoice`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_actions` | `Hash` |  |
| `billing_address` | `Hash` |  |
| `collection_method` | `Object` |  |
| `consolidation_level` | `Object` |  |
| `created_at` | `String` |  |
| `credit_amount` | `String` |  |
| `credits` | `Array` |  |
| `currency` | `String` |  |
| `custom_fields` | `Array` |  |
| `customer` | `Object` |  |
| `customer_id` | `Integer` |  |
| `delivery_date` | `String` |  |
| `discount_amount` | `String` |  |
| `discounts` | `Array` |  |
| `due_amount` | `String` |  |
| `id` | `String` |  |
| `line_items` | `Array` |  |
| `memo` | `String` |  |
| `number` | `Integer` |  |
| `paid_amount` | `String` |  |
| `payment_instructions` | `String` |  |
| `payments` | `Array` |  |
| `product_family_name` | `String` |  |
| `product_name` | `String` |  |
| `public_url` | `String` |  |
| `refund_amount` | `String` |  |
| `role` | `Object` |  |
| `seller` | `Object` |  |
| `sequence_number` | `Integer` |  |
| `shipping_address` | `Hash` |  |
| `site_id` | `Integer` |  |
| `status` | `String` |  |
| `subscription_id` | `Integer` |  |
| `subtotal_amount` | `String` |  |
| `tax_amount` | `String` |  |
| `taxes` | `Array` |  |
| `total_amount` | `String` |  |
| `uid` | `String` |  |

#### Example: List

```ruby
# list returns an Array of ProformaInvoice records (raises on error).
proforma_invoices = client.ProformaInvoice.list
```

#### Example: Create

```ruby
proforma_invoice = client.ProformaInvoice.create({
})
```


### ReasonCode

Create an instance: `reason_code = client.ReasonCode`

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
| `code` | `String` |  |
| `created_at` | `String` |  |
| `description` | `String` |  |
| `id` | `Integer` |  |
| `position` | `Integer` |  |
| `reason_code` | `Hash` |  |
| `site_id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReasonCode record (raises on error).
reason_code = client.ReasonCode.load({ "reason_code_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of ReasonCode records (raises on error).
reason_codes = client.ReasonCode.list
```

#### Example: Create

```ruby
reason_code = client.ReasonCode.create({
  "reason_code" => {}, # Hash
})
```


### ReferralCode

Create an instance: `referral_code = client.ReferralCode`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ReferralCode record (raises on error).
referral_code = client.ReferralCode.load({ "code" => "code" })
```


### SaleRepSetting

Create an instance: `sale_rep_setting = client.SaleRepSetting`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_name` | `String` |  |
| `sales_rep_id` | `Integer` |  |
| `sales_rep_name` | `String` |  |
| `site_link` | `String` |  |
| `site_name` | `String` |  |
| `subscription_id` | `Integer` |  |
| `subscription_mrr` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SaleRepSetting records (raises on error).
sale_rep_settings = client.SaleRepSetting.list
```


### SalesCommission

Create an instance: `sales_commission = client.SalesCommission`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `String` |  |
| `id` | `Integer` |  |
| `subscriptions` | `Array` |  |
| `subscriptions_count` | `Integer` |  |
| `test_mode` | `Boolean` |  |

#### Example: List

```ruby
# list returns an Array of SalesCommission records (raises on error).
sales_commissions = client.SalesCommission.list
```


### Segment

Create an instance: `segment = client.Segment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `Integer` |  |
| `created_at` | `String` |  |
| `event_based_billing_metric_id` | `Integer` |  |
| `id` | `Integer` |  |
| `price_point_id` | `Integer` |  |
| `prices` | `Array` |  |
| `pricing_scheme` | `Object` |  |
| `segment_property_1_value` | `Object` |  |
| `segment_property_2_value` | `Object` |  |
| `segment_property_3_value` | `Object` |  |
| `segment_property_4_value` | `Object` |  |
| `updated_at` | `String` |  |

#### Example: Create

```ruby
segment = client.Segment.create({
  "component_id" => "example_component_id", # String
  "price_point_id" => "example_price_point_id", # String
})
```


### SignupProformaPreview

Create an instance: `signup_proforma_preview = client.SignupProformaPreview`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
signup_proforma_preview = client.SignupProformaPreview.create({
})
```


### Site

Create an instance: `site = client.Site`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chargify_js_keys` | `Array` |  |
| `meta` | `Hash` |  |
| `site` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Site record (raises on error).
site = client.Site.load()
```

#### Example: List

```ruby
# list returns an Array of Site records (raises on error).
sites = client.Site.list
```

#### Example: Create

```ruby
site = client.Site.create({
  "site" => {}, # Hash
})
```


### Subscription

Create an instance: `subscription = client.Subscription`

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
| `activated_at` | `String` | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `String` | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `Integer` | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `Hash` |  |
| `cancel_at_end_of_period` | `Boolean` | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `String` | The timestamp of the most recent cancellation |
| `cancellation_message` | `String` | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `Object` |  |
| `coupon_code` | `String` | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `Array` | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `Integer` | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `Integer` | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `Array` | Additional coupon data. |
| `created_at` | `String` | The creation date for this subscription |
| `credit_balance_in_cents` | `Integer` |  |
| `credit_card` | `Object` |  |
| `currency` | `String` |  |
| `current_billing_amount_in_cents` | `Integer` | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `String` | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `String` | Timestamp relating to the start of the current (recurring) period |
| `customer` | `Hash` |  |
| `delayed_cancel_at` | `String` | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `Boolean` | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `String` | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `String` | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `Object` |  |
| `id` | `Integer` | The subscription unique id within Chargify. |
| `locale` | `String` |  |
| `net_terms` | `Integer` | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `String` | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `String` | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `Integer` | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `Integer` | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `Integer` | The ID of the offer associated with the subscription. |
| `on_hold_at` | `String` | The timestamp of the most recent on hold action. |
| `payer_id` | `Integer` | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `Object` |  |
| `payment_type` | `String` | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `Object` |  |
| `prepaid_dunning` | `Boolean` | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `Integer` |  |
| `previous_state` | `Object` |  |
| `product` | `Hash` |  |
| `product_price_in_cents` | `Integer` | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `Integer` | The product price point currently subscribed to. |
| `product_price_point_type` | `Object` |  |
| `product_version_number` | `Integer` | The version of the product for the subscription. |
| `reason_code` | `String` | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `Boolean` |  |
| `reference` | `String` | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `String` | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `String` |  |
| `self_service_page_token` | `String` | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `Integer` | The ID of the transaction that generated the revenue |
| `signup_revenue` | `String` | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `String` | A day of month that subscription will be processed on. |
| `state` | `Object` |  |
| `stored_credential_transaction_id` | `Integer` | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `Hash` |  |
| `total_revenue_in_cents` | `Integer` | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `String` | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `String` | Timestamp for when the trial period (if any) began |
| `updated_at` | `String` | The date of last update for this subscription |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Subscription record (raises on error).
subscription = client.Subscription.load({ "subscription_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Subscription records (raises on error).
subscriptions = client.Subscription.list
```

#### Example: Create

```ruby
subscription = client.Subscription.create({
  "bank_account" => {}, # Hash
})
```


### SubscriptionComponent

Create an instance: `subscription_component = client.SubscriptionComponent`

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
| `allocated_quantity` | `Object` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `Hash` |  |
| `allocation_preview` | `Hash` |  |
| `allow_fractional_quantities` | `Boolean` |  |
| `archived_at` | `String` |  |
| `component` | `Hash` |  |
| `component_handle` | `String` |  |
| `component_id` | `Integer` |  |
| `created_at` | `String` |  |
| `currency` | `String` |  |
| `description` | `String` |  |
| `display_on_hosted_page` | `Boolean` |  |
| `downgrade_credit` | `Object` |  |
| `enabled` | `Boolean` | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `Array` |  |
| `id` | `Integer` |  |
| `interval` | `Integer` | The numerical interval. |
| `interval_unit` | `Object` |  |
| `kind` | `Object` |  |
| `name` | `String` |  |
| `price_point_handle` | `String` |  |
| `price_point_id` | `Integer` |  |
| `price_point_name` | `String` |  |
| `price_point_type` | `Object` |  |
| `pricing_scheme` | `Object` |  |
| `product_family_handle` | `String` |  |
| `product_family_id` | `Integer` |  |
| `recurring` | `Boolean` |  |
| `subscription` | `Hash` |  |
| `subscription_id` | `Integer` |  |
| `unit_balance` | `Object` |  |
| `unit_name` | `String` |  |
| `updated_at` | `String` |  |
| `upgrade_charge` | `Object` |  |
| `usage` | `Hash` |  |
| `use_site_exchange_rate` | `Boolean` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SubscriptionComponent record (raises on error).
subscription_component = client.SubscriptionComponent.load({ "component_id" => 1, "subscription_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of SubscriptionComponent records (raises on error).
subscription_components = client.SubscriptionComponent.list
```

#### Example: Create

```ruby
subscription_component = client.SubscriptionComponent.create({
  "api_handle" => "example_api_handle", # String
})
```


### SubscriptionGroup

Create an instance: `subscription_group = client.SubscriptionGroup`

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
| `id` | `String` |  |
| `meta` | `Hash` |  |
| `subscription_group` | `Hash` |  |
| `subscription_groups` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of SubscriptionGroup records (raises on error).
subscription_groups = client.SubscriptionGroup.list
```

#### Example: Create

```ruby
subscription_group = client.SubscriptionGroup.create({
})
```


### SubscriptionGroupInvoiceAccount

Create an instance: `subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: List

```ruby
# list returns an Array of SubscriptionGroupInvoiceAccount records (raises on error).
subscription_group_invoice_accounts = client.SubscriptionGroupInvoiceAccount.list
```

#### Example: Create

```ruby
subscription_group_invoice_account = client.SubscriptionGroupInvoiceAccount.create({
  "id" => "example_id", # String
})
```


### SubscriptionGroupSignup

Create an instance: `subscription_group_signup = client.SubscriptionGroupSignup`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ruby
subscription_group_signup = client.SubscriptionGroupSignup.create({
})
```


### SubscriptionGroupStatus

Create an instance: `subscription_group_status = client.SubscriptionGroupStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Create

```ruby
subscription_group_status = client.SubscriptionGroupStatus.create({
  "id" => "example_id", # String
})
```


### SubscriptionInvoiceAccount

Create an instance: `subscription_invoice_account = client.SubscriptionInvoiceAccount`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `service_credits` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of SubscriptionInvoiceAccount records (raises on error).
subscription_invoice_accounts = client.SubscriptionInvoiceAccount.list
```

#### Example: Create

```ruby
subscription_invoice_account = client.SubscriptionInvoiceAccount.create({
  "id" => 1, # Integer
})
```


### SubscriptionMrr

Create an instance: `subscription_mrr = client.SubscriptionMrr`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakouts` | `Hash` |  |
| `mrr_amount_in_cents` | `Integer` |  |
| `subscription_id` | `Integer` |  |

#### Example: List

```ruby
# list returns an Array of SubscriptionMrr records (raises on error).
subscription_mrrs = client.SubscriptionMrr.list
```


### SubscriptionNote

Create an instance: `subscription_note = client.SubscriptionNote`

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
| `body` | `String` |  |
| `created_at` | `String` |  |
| `id` | `Integer` |  |
| `note` | `Hash` |  |
| `sticky` | `Boolean` |  |
| `subscription_id` | `Integer` |  |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SubscriptionNote record (raises on error).
subscription_note = client.SubscriptionNote.load({ "note_id" => 1, "subscription_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of SubscriptionNote records (raises on error).
subscription_notes = client.SubscriptionNote.list
```

#### Example: Create

```ruby
subscription_note = client.SubscriptionNote.create({
  "id" => 1, # Integer
  "note" => {}, # Hash
})
```


### SubscriptionProduct

Create an instance: `subscription_product = client.SubscriptionProduct`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `migration` | `Hash` |  |

#### Example: Create

```ruby
subscription_product = client.SubscriptionProduct.create({
  "subscription_id" => 1, # Integer
  "migration" => {}, # Hash
})
```


### SubscriptionRenewal

Create an instance: `subscription_renewal = client.SubscriptionRenewal`

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
| `id` | `String` |  |
| `scheduled_renewal_configuration` | `Hash` |  |
| `scheduled_renewal_configuration_item` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SubscriptionRenewal record (raises on error).
subscription_renewal = client.SubscriptionRenewal.load({ "id" => 1, "subscription_id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of SubscriptionRenewal records (raises on error).
subscription_renewals = client.SubscriptionRenewal.list
```

#### Example: Create

```ruby
subscription_renewal = client.SubscriptionRenewal.create({
  "scheduled_renewal_id" => 1, # Integer
  "subscription_id" => 1, # Integer
})
```


### SubscriptionStatus

Create an instance: `subscription_status = client.SubscriptionStatus`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `renewal_preview` | `Hash` |  |

#### Example: Create

```ruby
subscription_status = client.SubscriptionStatus.create({
  "subscription_id" => 1, # Integer
})
```


### Usage

Create an instance: `usage = client.Usage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usage` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Usage records (raises on error).
usages = client.Usage.list
```


### Webhook

Create an instance: `webhook = client.Webhook`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `Hash` |  |
| `webhook` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of Webhook records (raises on error).
webhooks = client.Webhook.list
```

#### Example: Create

```ruby
webhook = client.Webhook.create({
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

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

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── MaxioAdvancedBilling_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`MaxioAdvancedBilling_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
accountbalance = client.AccountBalance
accountbalance.load({ "subscription_id" => 1 })

# accountbalance.data_get now returns the accountbalance data from the last load
# accountbalance.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
