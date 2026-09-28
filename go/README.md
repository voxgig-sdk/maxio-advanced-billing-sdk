# MaxioAdvancedBilling Golang SDK



The Golang SDK for the MaxioAdvancedBilling API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AccountBalance(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/maxio-advanced-billing-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/maxio-advanced-billing-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/maxio-advanced-billing-sdk/go=../maxio-advanced-billing-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go"
)

func main() {
    client := sdk.NewMaxioAdvancedBillingSDK(map[string]any{
        "apikey": os.Getenv("MAXIO_ADVANCED_BILLING_APIKEY"),
    "server": map[string]any{
        "site": "<site>",
    },
    })

    // Load a single accountBalance — the value is the loaded record.
    accountBalance, err := client.AccountBalance(nil).Load(map[string]any{"subscription_id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(accountBalance)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
accountbalance, err := client.AccountBalance(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    // handle err
    return
}
_ = accountbalance
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

accountBalance, err := client.AccountBalance(nil).Load(
    map[string]any{"subscription_id": 1}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(accountBalance) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewMaxioAdvancedBillingSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewMaxioAdvancedBillingSDK

```go
func NewMaxioAdvancedBillingSDK(options map[string]any) *MaxioAdvancedBillingSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *MaxioAdvancedBillingSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### MaxioAdvancedBillingSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AccountBalance` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an AccountBalance entity instance. |
| `Allocation` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Allocation entity instance. |
| `BatchJob` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a BatchJob entity instance. |
| `BillingPortal` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a BillingPortal entity instance. |
| `Component` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Component entity instance. |
| `ComponentFeature` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ComponentFeature entity instance. |
| `ComponentPricePoint` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ComponentPricePoint entity instance. |
| `ComponentPricePointCurrencyOverage` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ComponentPricePointCurrencyOverage entity instance. |
| `Coupon` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Coupon entity instance. |
| `CouponCurrency` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a CouponCurrency entity instance. |
| `CouponSubcode` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a CouponSubcode entity instance. |
| `CouponUsage` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a CouponUsage entity instance. |
| `CustomField` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a CustomField entity instance. |
| `Customer` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Customer entity instance. |
| `DelayedCancel` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a DelayedCancel entity instance. |
| `Endpoint` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Endpoint entity instance. |
| `Entitlement` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Entitlement entity instance. |
| `Event` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Event entity instance. |
| `EventsBasedBillingSegment` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an EventsBasedBillingSegment entity instance. |
| `Feature` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Feature entity instance. |
| `FeatureCatalogItem` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a FeatureCatalogItem entity instance. |
| `FeatureTemplate` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a FeatureTemplate entity instance. |
| `Insight` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Insight entity instance. |
| `Invoice` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Invoice entity instance. |
| `ListProformaInvoice` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ListProformaInvoice entity instance. |
| `ListSaleRepItem` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ListSaleRepItem entity instance. |
| `ListSegment` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ListSegment entity instance. |
| `Offer` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Offer entity instance. |
| `OneTimeToken` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an OneTimeToken entity instance. |
| `PaymentProfile` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a PaymentProfile entity instance. |
| `Prepayment` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Prepayment entity instance. |
| `Product` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Product entity instance. |
| `ProductFamily` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ProductFamily entity instance. |
| `ProductFeature` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ProductFeature entity instance. |
| `ProductPricePoint` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ProductPricePoint entity instance. |
| `ProformaInvoice` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ProformaInvoice entity instance. |
| `ReasonCode` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ReasonCode entity instance. |
| `ReferralCode` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a ReferralCode entity instance. |
| `SaleRepSetting` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SaleRepSetting entity instance. |
| `SalesCommission` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SalesCommission entity instance. |
| `Segment` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Segment entity instance. |
| `SignupProformaPreview` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SignupProformaPreview entity instance. |
| `Site` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Site entity instance. |
| `Subscription` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Subscription entity instance. |
| `SubscriptionComponent` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionComponent entity instance. |
| `SubscriptionGroup` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionGroup entity instance. |
| `SubscriptionGroupInvoiceAccount` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionGroupInvoiceAccount entity instance. |
| `SubscriptionGroupSignup` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionGroupSignup entity instance. |
| `SubscriptionGroupStatus` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionGroupStatus entity instance. |
| `SubscriptionInvoiceAccount` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionInvoiceAccount entity instance. |
| `SubscriptionMrr` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionMrr entity instance. |
| `SubscriptionNote` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionNote entity instance. |
| `SubscriptionProduct` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionProduct entity instance. |
| `SubscriptionRenewal` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionRenewal entity instance. |
| `SubscriptionStatus` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a SubscriptionStatus entity instance. |
| `Usage` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create an Usage entity instance. |
| `Webhook` | `(data map[string]any) MaxioAdvancedBillingEntity` | Create a Webhook entity instance. |

### Entity interface (MaxioAdvancedBillingEntity)

All entities implement the `MaxioAdvancedBillingEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    accountBalance, err := client.AccountBalance(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // accountBalance is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AccountBalance

| Field | Description |
| --- | --- |
| `"open_invoices"` |  |
| `"pending_discounts"` |  |
| `"pending_invoices"` |  |
| `"prepayments"` |  |
| `"service_credits"` |  |

Operations: Load.

API path: `/subscriptions/{subscription_id}/account_balances.json`

#### Allocation

| Field | Description |
| --- | --- |
| `"allocation"` |  |

Operations: Create, List.

API path: `/subscriptions/{subscription_id}/allocations.json`

#### BatchJob

| Field | Description |
| --- | --- |
| `"completed"` |  |
| `"created_at"` |  |
| `"finished_at"` |  |
| `"id"` |  |
| `"row_count"` |  |

Operations: Create, Load.

API path: `/api_exports/invoices.json`

#### BillingPortal

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"expires_at"` |  |
| `"fetch_count"` |  |
| `"last_accepted_at"` |  |
| `"last_invite_accepted_at"` |  |
| `"last_invite_sent_at"` |  |
| `"last_sent_at"` |  |
| `"new_link_available_at"` |  |
| `"send_invite_link_text"` |  |
| `"uninvited_count"` |  |
| `"url"` |  |

Operations: Create, Load, Remove.

API path: `/portal/customers/{customer_id}/invitations/invite.json`

#### Component

| Field | Description |
| --- | --- |
| `"component"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/product_families/{product_family_id}/event_based_components.json`

#### ComponentFeature

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/components/{component_id}/features/{id}.json`

#### ComponentPricePoint

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"component"` |  |
| `"component_id"` |  |
| `"created_at"` |  |
| `"currency_prices"` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `"default"` | Note: Refer to type attribute instead. |
| `"expiration_interval"` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `"expiration_interval_unit"` |  |
| `"handle"` |  |
| `"id"` |  |
| `"interval"` | The numerical interval. |
| `"interval_unit"` |  |
| `"name"` |  |
| `"overage_prices"` | Applicable only to prepaid usage components. |
| `"overage_pricing_scheme"` |  |
| `"price_point"` |  |
| `"price_points"` |  |
| `"prices"` |  |
| `"pricing_scheme"` |  |
| `"renew_prepaid_allocation"` | Applicable only to prepaid usage components. |
| `"rollover_prepaid_remainder"` | Applicable only to prepaid usage components. |
| `"subscription_id"` | (only used for Custom Pricing - ie. |
| `"tax_included"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"use_site_exchange_rate"` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

Operations: Create, List, Remove, Update.

API path: `/components/{component_id}/price_points/{price_point_id}/clone.json`

#### ComponentPricePointCurrencyOverage

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"component_id"` |  |
| `"created_at"` |  |
| `"currency_overage_prices"` | Applicable only to prepaid usage components. |
| `"currency_prices"` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `"default"` | Note: Refer to type attribute instead. |
| `"expiration_interval"` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `"expiration_interval_unit"` |  |
| `"handle"` |  |
| `"id"` |  |
| `"interval"` | The numerical interval. |
| `"interval_unit"` |  |
| `"name"` |  |
| `"overage_prices"` | Applicable only to prepaid usage components. |
| `"overage_pricing_scheme"` |  |
| `"prices"` |  |
| `"pricing_scheme"` |  |
| `"renew_prepaid_allocation"` | Applicable only to prepaid usage components. |
| `"rollover_prepaid_remainder"` | Applicable only to prepaid usage components. |
| `"subscription_id"` | (only used for Custom Pricing - ie. |
| `"tax_included"` |  |
| `"type"` |  |
| `"updated_at"` |  |
| `"use_site_exchange_rate"` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

Operations: Load.

API path: `/components/{component_id}/price_points/{price_point_id}.json`

#### Coupon

| Field | Description |
| --- | --- |
| `"allow_negative_balance"` | If set to true, discount is not limited (credits will carry forward to next billing). |
| `"amount"` |  |
| `"amount_in_cents"` |  |
| `"apply_on_cancel_at_end_of_period"` |  |
| `"apply_on_subscription_expiration"` |  |
| `"archived_at"` |  |
| `"code"` |  |
| `"compounding_strategy"` |  |
| `"conversion_limit"` |  |
| `"coupon"` |  |
| `"coupon_restrictions"` |  |
| `"created_at"` |  |
| `"currency_prices"` | Returned in read, find, and list endpoints if the query parameter is provided. |
| `"description"` |  |
| `"discount_type"` |  |
| `"duration_interval"` |  |
| `"duration_interval_span"` |  |
| `"duration_interval_unit"` |  |
| `"duration_period_count"` |  |
| `"end_date"` | After the given time, this coupon code will be invalid for new signups. |
| `"exclude_mid_period_allocations"` |  |
| `"id"` |  |
| `"name"` |  |
| `"percentage"` |  |
| `"product_family_id"` |  |
| `"product_family_name"` |  |
| `"recurring"` |  |
| `"recurring_scheme"` |  |
| `"stackable"` | A stackable coupon can be combined with other coupons on a Subscription. |
| `"start_date"` |  |
| `"updated_at"` |  |
| `"use_site_exchange_rate"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/coupons/{coupon_id}/codes.json`

#### CouponCurrency

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Update.

API path: `/coupons/{coupon_id}/currency_prices.json`

#### CouponSubcode

| Field | Description |
| --- | --- |
| `"created_codes"` |  |
| `"duplicate_codes"` |  |
| `"id"` |  |
| `"invalid_codes"` |  |

Operations: Update.

API path: `/coupons/{coupon_id}/codes.json`

#### CouponUsage

| Field | Description |
| --- | --- |
| `"id"` | The Chargify id of the product |
| `"name"` | Name of the product |
| `"revenue"` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `"revenue_in_cents"` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `"savings"` | Dollar amount of customer savings as a result of the coupon. |
| `"savings_in_cents"` | Dollar amount of customer savings as a result of the coupon. |
| `"signups"` | Number of times the coupon has been applied |

Operations: List.

API path: `/product_families/{product_family_id}/coupons/{coupon_id}/usage.json`

#### CustomField

| Field | Description |
| --- | --- |
| `"current_page"` |  |
| `"data_count"` |  |
| `"deleted_at"` |  |
| `"enum"` |  |
| `"id"` |  |
| `"input_type"` |  |
| `"metadata"` |  |
| `"metafield_id"` |  |
| `"metafields"` |  |
| `"name"` |  |
| `"per_page"` |  |
| `"resource_id"` |  |
| `"scope"` |  |
| `"total_count"` |  |
| `"total_pages"` |  |
| `"value"` |  |

Operations: Create, List, Remove, Update.

API path: `/{resource_type}/{resource_id}/metadata.json`

#### Customer

| Field | Description |
| --- | --- |
| `"address"` | The customer’s shipping street address (e.g., “123 Main St.”) |
| `"address_2"` | Second line of the customer’s shipping address e.g., “Apt. |
| `"branding_theme_id"` | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `"cc_emails"` | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `"city"` | The customer’s shipping address city (e.g., “Boston”) |
| `"country"` | The customer shipping address country |
| `"country_name"` | The customer's full name of country |
| `"created_at"` | The timestamp in which the customer object was created in Chargify |
| `"customer"` |  |
| `"default_auto_renewal_profile_id"` | The default auto-renewal profile ID for the customer |
| `"default_subscription_group_uid"` |  |
| `"email"` | The email address of the customer |
| `"entity_identifier_kind"` |  |
| `"entity_identifier_value"` | The value of the customer's tax or business identifier. |
| `"first_name"` | The first name of the customer |
| `"id"` | The customer ID in Chargify |
| `"last_name"` | The last name of the customer |
| `"locale"` | The locale for the customer to identify language-region |
| `"maxioid"` | The Maxio-generated unique identifier for the customer. |
| `"organization"` | The organization of the customer. |
| `"parent_id"` | The parent ID in Chargify if applicable. |
| `"phone"` | The phone number of the customer |
| `"portal_customer_created_at"` | The timestamp of when the Billing Portal entry was created at for the customer |
| `"portal_invite_last_accepted_at"` | The timestamp of when the Billing Portal invite was last accepted |
| `"portal_invite_last_sent_at"` | The timestamp of when the Billing Portal invite was last sent at |
| `"reference"` | The unique identifier used within your own application for this customer |
| `"salesforce_id"` | The Salesforce ID for the customer |
| `"state"` | The customer’s shipping address state (e.g., “MA”) |
| `"state_name"` | The customer's full name of state |
| `"surcharging"` | Whether surcharging is enabled for the customer. |
| `"tax_exempt"` | The tax exempt status for the customer. |
| `"tax_exempt_reason"` | The Tax Exemption Reason Code for the customer |
| `"updated_at"` | The timestamp in which the customer object was last edited |
| `"vat_country"` | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `"vat_number"` | The VAT business identification number for the customer. |
| `"verified"` | Is the customer verified to use ACH as a payment method. |
| `"zip"` | The customer’s shipping address zip code (e.g., “12345”) |

Operations: Create, List, Load, Remove, Update.

API path: `/portal/customers/{customer_id}/enable.json`

#### DelayedCancel

| Field | Description |
| --- | --- |
| `"message"` |  |
| `"subscription"` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/delayed_cancel.json`

#### Endpoint

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"site_id"` |  |
| `"status"` |  |
| `"url"` |  |
| `"webhook_subscriptions"` |  |

Operations: List, Update.

API path: `/endpoints.json`

#### Entitlement

| Field | Description |
| --- | --- |
| `"customer_id"` |  |
| `"entitlements"` |  |
| `"status"` | The subscription's current state, e.g. |
| `"subscription_id"` |  |

Operations: List.

API path: `/subscriptions/{subscription_id}/entitlements.json`

#### Event

| Field | Description |
| --- | --- |
| `"event"` |  |

Operations: List, Load.

API path: `/events.json`

#### EventsBasedBillingSegment

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/components/{component_id}/price_points/{price_point_id}/segments/{id}.json`

#### Feature

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"archived_count"` | Number of archived feature templates matching the filters. |
| `"created_at"` |  |
| `"feature"` |  |
| `"feature_key"` | The `key` of the parent feature template. |
| `"feature_kind"` |  |
| `"feature_name"` | The `name` of the parent feature template. |
| `"feature_template_id"` | The id of the feature template this item was created from. |
| `"id"` |  |
| `"items"` |  |
| `"periodicity_interval"` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `"periodicity_unit"` |  |
| `"price_point_id"` | Set together with `price_point_type` for price-point-specific overrides. |
| `"price_point_type"` |  |
| `"total_count"` | Total number of feature templates matching the filters, across all pages. |
| `"updated_at"` |  |
| `"value"` | The value granted by this feature catalog item. |

Operations: Create, List.

API path: `/components/{component_id}/features.json`

#### FeatureCatalogItem

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"created_at"` |  |
| `"feature"` |  |
| `"feature_key"` | The `key` of the parent feature template. |
| `"feature_kind"` |  |
| `"feature_name"` | The `name` of the parent feature template. |
| `"feature_template_id"` | The id of the feature template this item was created from. |
| `"id"` |  |
| `"periodicity_interval"` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `"periodicity_unit"` |  |
| `"price_point_id"` | Set together with `price_point_type` for price-point-specific overrides. |
| `"price_point_type"` |  |
| `"updated_at"` |  |
| `"value"` | The value granted by this feature catalog item. |

Operations: Create, Load, Update.

API path: `/components/{component_id}/features/{id}/restore.json`

#### FeatureTemplate

| Field | Description |
| --- | --- |
| `"archived_at"` | The date and time the feature template was archived, or `null` if it is active. |
| `"created_at"` |  |
| `"default_periodicity_interval"` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `"default_periodicity_unit"` |  |
| `"default_value"` | A default value used to pre-populate new feature catalog items created from this template. |
| `"description"` |  |
| `"feature"` |  |
| `"id"` | The Advanced Billing id of the feature template. |
| `"key"` | A unique, lowercase, underscore-separated identifier for the feature. |
| `"kind"` |  |
| `"name"` | The display name of the feature. |
| `"plans_count"` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `"products_count"` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `"unit"` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `"updated_at"` |  |
| `"value_type"` |  |

Operations: Create, Load, Remove, Update.

API path: `/features/{id}/restore.json`

#### Insight

| Field | Description |
| --- | --- |
| `"mrr"` |  |
| `"seller_name"` |  |
| `"site_currency"` |  |
| `"site_id"` |  |
| `"site_name"` |  |
| `"stats"` |  |

Operations: Load.

API path: `/mrr_movements.json`

#### Invoice

| Field | Description |
| --- | --- |
| `"applications"` |  |
| `"applied_amount"` | The amount of the credit note that has already been applied to invoices. |
| `"applied_date"` | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `"avatax_details"` |  |
| `"billing_address"` |  |
| `"branding_theme_id"` | The ID of the Branding Theme associated with this invoice. |
| `"collection_method"` |  |
| `"consolidation_level"` |  |
| `"created_at"` |  |
| `"credit_amount"` | The amount of credit (from credit notes) applied to this invoice. |
| `"credit_notes"` |  |
| `"credits"` |  |
| `"currency"` | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `"custom_fields"` |  |
| `"customer"` |  |
| `"customer_id"` | ID of the customer to which the invoice belongs. |
| `"debit_amount"` |  |
| `"debits"` |  |
| `"discount_amount"` | Total discount applied to the invoice. |
| `"discounts"` |  |
| `"display_settings"` |  |
| `"due_amount"` | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `"due_date"` | Date the invoice is due. |
| `"group_primary_subscription_id"` | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `"id"` |  |
| `"invoice"` |  |
| `"invoices"` |  |
| `"issue_date"` | Date the invoice was issued to the customer. |
| `"line_items"` | Line items on the invoice. |
| `"memo"` | The memo printed on invoices of any collection type. |
| `"net_terms"` |  |
| `"number"` | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `"origin_invoices"` | An array of origin invoices for the credit note. |
| `"paid_amount"` | The amount paid on the invoice by the customer. |
| `"paid_date"` | Date the invoice became fully paid. |
| `"paid_invoices"` |  |
| `"parent_invoice_id"` |  |
| `"parent_invoice_number"` | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `"parent_invoice_uid"` | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `"payer"` |  |
| `"payment_instructions"` | A message that is printed on the invoice when it is marked for remittance collection. |
| `"payments"` |  |
| `"prepayment"` |  |
| `"previous_balance_data"` |  |
| `"product_family_name"` | The name of the product family subscribed when the invoice was generated. |
| `"product_name"` | The name of the product subscribed when the invoice was generated. |
| `"public_url"` | The public URL of the invoice |
| `"public_url_expires_on"` | The format is `"YYYY-MM-DD"`. |
| `"recipient_emails"` |  |
| `"refund_amount"` |  |
| `"refunds"` |  |
| `"remaining_amount"` | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `"role"` |  |
| `"seller"` |  |
| `"sequence_number"` | A monotonically increasing number assigned to invoices as they are created. |
| `"shipping_address"` |  |
| `"site_id"` | ID of the site to which the invoice belongs. |
| `"status"` |  |
| `"subscription_group_id"` |  |
| `"subscription_id"` | ID of the subscription that generated the invoice. |
| `"subtotal_amount"` | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `"tax_amount"` | Total tax on the invoice. |
| `"taxes"` |  |
| `"total_amount"` | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `"transaction_time"` |  |
| `"uid"` | Unique identifier for the invoice. |
| `"updated_at"` |  |
| `"void"` |  |

Operations: Create, List, Remove, Update.

API path: `/invoices/{uid}/customer_information/preview.json`

#### ListProformaInvoice

| Field | Description |
| --- | --- |
| `"available_actions"` |  |
| `"billing_address"` |  |
| `"collection_method"` |  |
| `"consolidation_level"` |  |
| `"created_at"` |  |
| `"credit_amount"` |  |
| `"credits"` |  |
| `"currency"` |  |
| `"custom_fields"` |  |
| `"customer"` |  |
| `"customer_id"` |  |
| `"delivery_date"` |  |
| `"discount_amount"` |  |
| `"discounts"` |  |
| `"due_amount"` |  |
| `"line_items"` |  |
| `"memo"` |  |
| `"number"` |  |
| `"paid_amount"` |  |
| `"payment_instructions"` |  |
| `"payments"` |  |
| `"product_family_name"` |  |
| `"product_name"` |  |
| `"public_url"` |  |
| `"refund_amount"` |  |
| `"role"` |  |
| `"seller"` |  |
| `"sequence_number"` |  |
| `"shipping_address"` |  |
| `"site_id"` |  |
| `"status"` |  |
| `"subscription_id"` |  |
| `"subtotal_amount"` |  |
| `"tax_amount"` |  |
| `"taxes"` |  |
| `"total_amount"` |  |
| `"uid"` |  |

Operations: List.

API path: `/subscriptions/{subscription_id}/proforma_invoices.json`

#### ListSaleRepItem

| Field | Description |
| --- | --- |
| `"full_name"` |  |
| `"id"` |  |
| `"mrr_data"` |  |
| `"subscriptions_count"` |  |
| `"test_mode"` |  |

Operations: List.

API path: `/sellers/{seller_id}/sales_reps.json`

#### ListSegment

| Field | Description |
| --- | --- |
| `"component_id"` |  |
| `"created_at"` |  |
| `"event_based_billing_metric_id"` |  |
| `"id"` |  |
| `"price_point_id"` |  |
| `"prices"` |  |
| `"pricing_scheme"` |  |
| `"segment_property_1_value"` |  |
| `"segment_property_2_value"` |  |
| `"segment_property_3_value"` |  |
| `"segment_property_4_value"` |  |
| `"segments"` |  |
| `"updated_at"` |  |

Operations: Create, List, Update.

API path: `/components/{component_id}/price_points/{price_point_id}/segments/bulk.json`

#### Offer

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"handle"` |  |
| `"id"` |  |
| `"name"` |  |
| `"offer"` |  |
| `"offer_discounts"` |  |
| `"offer_items"` |  |
| `"offer_signup_pages"` |  |
| `"offers"` |  |
| `"product_family_id"` |  |
| `"product_family_name"` |  |
| `"product_id"` |  |
| `"product_name"` |  |
| `"product_price_in_cents"` |  |
| `"product_price_point_id"` |  |
| `"product_price_point_name"` |  |
| `"product_revisable_number"` |  |
| `"site_id"` |  |
| `"updated_at"` |  |

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
| `"id"` |  |
| `"payment_profile"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json`

#### Prepayment

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json`

#### Product

| Field | Description |
| --- | --- |
| `"product"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/product_families/{product_family_id}/products.json`

#### ProductFamily

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"product_family"` |  |

Operations: Create, List, Load.

API path: `/product_families.json`

#### ProductFeature

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/products/{product_id}/features/{id}.json`

#### ProductPricePoint

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"price_point"` |  |
| `"price_points"` |  |
| `"product"` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/product_price_points/{product_price_point_id}/currency_prices.json`

#### ProformaInvoice

| Field | Description |
| --- | --- |
| `"available_actions"` |  |
| `"billing_address"` |  |
| `"collection_method"` |  |
| `"consolidation_level"` |  |
| `"created_at"` |  |
| `"credit_amount"` |  |
| `"credits"` |  |
| `"currency"` |  |
| `"custom_fields"` |  |
| `"customer"` |  |
| `"customer_id"` |  |
| `"delivery_date"` |  |
| `"discount_amount"` |  |
| `"discounts"` |  |
| `"due_amount"` |  |
| `"id"` |  |
| `"line_items"` |  |
| `"memo"` |  |
| `"number"` |  |
| `"paid_amount"` |  |
| `"payment_instructions"` |  |
| `"payments"` |  |
| `"product_family_name"` |  |
| `"product_name"` |  |
| `"public_url"` |  |
| `"refund_amount"` |  |
| `"role"` |  |
| `"seller"` |  |
| `"sequence_number"` |  |
| `"shipping_address"` |  |
| `"site_id"` |  |
| `"status"` |  |
| `"subscription_id"` |  |
| `"subtotal_amount"` |  |
| `"tax_amount"` |  |
| `"taxes"` |  |
| `"total_amount"` |  |
| `"uid"` |  |

Operations: Create, List.

API path: `/proforma_invoices/{proforma_invoice_uid}/deliveries.json`

#### ReasonCode

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"position"` |  |
| `"reason_code"` |  |
| `"site_id"` |  |
| `"updated_at"` |  |

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
| `"customer_name"` |  |
| `"sales_rep_id"` |  |
| `"sales_rep_name"` |  |
| `"site_link"` |  |
| `"site_name"` |  |
| `"subscription_id"` |  |
| `"subscription_mrr"` |  |

Operations: List.

API path: `/sellers/{seller_id}/sales_commission_settings.json`

#### SalesCommission

| Field | Description |
| --- | --- |
| `"full_name"` |  |
| `"id"` |  |
| `"subscriptions"` |  |
| `"subscriptions_count"` |  |
| `"test_mode"` |  |

Operations: List.

API path: `/sellers/{seller_id}/sales_reps/{sales_rep_id}.json`

#### Segment

| Field | Description |
| --- | --- |
| `"component_id"` |  |
| `"created_at"` |  |
| `"event_based_billing_metric_id"` |  |
| `"id"` |  |
| `"price_point_id"` |  |
| `"prices"` |  |
| `"pricing_scheme"` |  |
| `"segment_property_1_value"` |  |
| `"segment_property_2_value"` |  |
| `"segment_property_3_value"` |  |
| `"segment_property_4_value"` |  |
| `"updated_at"` |  |

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
| `"chargify_js_keys"` |  |
| `"meta"` |  |
| `"site"` |  |

Operations: Create, List, Load.

API path: `/sites/clear_data.json`

#### Subscription

| Field | Description |
| --- | --- |
| `"activated_at"` | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `"automatically_resume_at"` | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `"balance_in_cents"` | Gives the current outstanding subscription balance in the number of cents. |
| `"bank_account"` |  |
| `"cancel_at_end_of_period"` | Whether or not the subscription will (or has) canceled at the end of the period. |
| `"canceled_at"` | The timestamp of the most recent cancellation |
| `"cancellation_message"` | Seller-provided reason for, or note about, the cancellation. |
| `"cancellation_method"` |  |
| `"coupon_code"` | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `"coupon_codes"` | An array for all the coupons attached to the subscription. |
| `"coupon_use_count"` | (deprecated) How many times the subscription's single coupon has been used. |
| `"coupon_uses_allowed"` | (deprecated) How many times the subscription's single coupon may be used. |
| `"coupons"` | Additional coupon data. |
| `"created_at"` | The creation date for this subscription |
| `"credit_balance_in_cents"` |  |
| `"credit_card"` |  |
| `"currency"` |  |
| `"current_billing_amount_in_cents"` | The balance in cents plus the estimated renewal amount in cents. |
| `"current_period_ends_at"` | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `"current_period_started_at"` | Timestamp relating to the start of the current (recurring) period |
| `"customer"` |  |
| `"delayed_cancel_at"` | Timestamp for when the subscription is currently set to cancel. |
| `"dunning_communication_delay_enabled"` | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `"dunning_communication_delay_time_zone"` | Time zone for the Dunning Communication Delay feature. |
| `"expires_at"` | Timestamp giving the expiration date of this subscription (if any) |
| `"group"` |  |
| `"id"` | The subscription unique id within Chargify. |
| `"locale"` |  |
| `"net_terms"` | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `"next_assessment_at"` | Timestamp that indicates when capture of payment will be tried or retried. |
| `"next_product_handle"` | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `"next_product_id"` | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `"next_product_price_point_id"` | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `"offer_id"` | The ID of the offer associated with the subscription. |
| `"on_hold_at"` | The timestamp of the most recent on hold action. |
| `"payer_id"` | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `"payment_collection_method"` |  |
| `"payment_type"` | The payment profile type for the active profile on file. |
| `"prepaid_configuration"` |  |
| `"prepaid_dunning"` | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `"prepayment_balance_in_cents"` |  |
| `"previous_state"` |  |
| `"product"` |  |
| `"product_price_in_cents"` | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `"product_price_point_id"` | The product price point currently subscribed to. |
| `"product_price_point_type"` |  |
| `"product_version_number"` | The version of the product for the subscription. |
| `"reason_code"` | The churn reason code associated to a canceled subscription. |
| `"receives_invoice_emails"` |  |
| `"reference"` | The reference value (provided by your app) for the subscription itself. |
| `"referral_code"` | The subscription's unique code that can be given to referrals. |
| `"scheduled_cancellation_at"` |  |
| `"self_service_page_token"` | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `"signup_payment_id"` | The ID of the transaction that generated the revenue |
| `"signup_revenue"` | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `"snap_day"` | A day of month that subscription will be processed on. |
| `"state"` |  |
| `"stored_credential_transaction_id"` | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `"subscription"` |  |
| `"total_revenue_in_cents"` | Gives the total revenue from the subscription in the number of cents. |
| `"trial_ended_at"` | Timestamp for when the trial period (if any) ended |
| `"trial_started_at"` | Timestamp for when the trial period (if any) began |
| `"updated_at"` | The date of last update for this subscription |

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/purge.json`

#### SubscriptionComponent

| Field | Description |
| --- | --- |
| `"allocated_quantity"` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `"allocation"` |  |
| `"allocation_preview"` |  |
| `"allow_fractional_quantities"` |  |
| `"archived_at"` |  |
| `"component"` |  |
| `"component_handle"` |  |
| `"component_id"` |  |
| `"created_at"` |  |
| `"currency"` |  |
| `"description"` |  |
| `"display_on_hosted_page"` |  |
| `"downgrade_credit"` |  |
| `"enabled"` | (for on/off components) indicates if the component is enabled for the subscription. |
| `"historic_usages"` |  |
| `"id"` |  |
| `"interval"` | The numerical interval. |
| `"interval_unit"` |  |
| `"kind"` |  |
| `"name"` |  |
| `"price_point_handle"` |  |
| `"price_point_id"` |  |
| `"price_point_name"` |  |
| `"price_point_type"` |  |
| `"pricing_scheme"` |  |
| `"product_family_handle"` |  |
| `"product_family_id"` |  |
| `"recurring"` |  |
| `"subscription"` |  |
| `"subscription_id"` |  |
| `"unit_balance"` |  |
| `"unit_name"` |  |
| `"updated_at"` |  |
| `"upgrade_charge"` |  |
| `"usage"` |  |
| `"use_site_exchange_rate"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/events/{api_handle}.json`

#### SubscriptionGroup

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"meta"` |  |
| `"subscription_group"` |  |
| `"subscription_groups"` |  |

Operations: Create, List, Remove, Update.

API path: `/subscriptions/{subscription_id}/group.json`

#### SubscriptionGroupInvoiceAccount

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"id"` |  |

Operations: Create, Remove.

API path: `/subscription_groups/{uid}/cancel.json`

#### SubscriptionInvoiceAccount

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"service_credits"` |  |

Operations: Create, List.

API path: `/subscriptions/{subscription_id}/prepayments.json`

#### SubscriptionMrr

| Field | Description |
| --- | --- |
| `"breakouts"` |  |
| `"mrr_amount_in_cents"` |  |
| `"subscription_id"` |  |

Operations: List.

API path: `/subscriptions_mrr.json`

#### SubscriptionNote

| Field | Description |
| --- | --- |
| `"body"` |  |
| `"created_at"` |  |
| `"id"` |  |
| `"note"` |  |
| `"sticky"` |  |
| `"subscription_id"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/notes.json`

#### SubscriptionProduct

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"migration"` |  |

Operations: Create.

API path: `/subscriptions/{subscription_id}/migrations.json`

#### SubscriptionRenewal

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"scheduled_renewal_configuration"` |  |
| `"scheduled_renewal_configuration_item"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json`

#### SubscriptionStatus

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"renewal_preview"` |  |

Operations: Create, Remove, Update.

API path: `/subscriptions/{subscription_id}/resume.json`

#### Usage

| Field | Description |
| --- | --- |
| `"usage"` |  |

Operations: List.

API path: `/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json`

#### Webhook

| Field | Description |
| --- | --- |
| `"endpoint"` |  |
| `"webhook"` |  |

Operations: Create, List, Update.

API path: `/endpoints.json`



## Entities


### AccountBalance

Create an instance: `accountBalance := client.AccountBalance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `open_invoices` | `any` |  |
| `pending_discounts` | `any` |  |
| `pending_invoices` | `any` |  |
| `prepayments` | `any` |  |
| `service_credits` | `any` |  |

#### Example: Load

```go
accountBalance, err := client.AccountBalance(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountBalance) // the loaded record
```


### Allocation

Create an instance: `allocation := client.Allocation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allocation` | `map[string]any` |  |

#### Example: List

```go
allocations, err := client.Allocation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(allocations) // the array of records
```

#### Example: Create

```go
result, err := client.Allocation(nil).Create(map[string]any{
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BatchJob

Create an instance: `batchJob := client.BatchJob(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed` | `string` |  |
| `created_at` | `string` |  |
| `finished_at` | `string` |  |
| `id` | `int` |  |
| `row_count` | `int` |  |

#### Example: Load

```go
batchJob, err := client.BatchJob(nil).Load(map[string]any{"batch_id": "batch_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(batchJob) // the loaded record
```

#### Example: Create

```go
result, err := client.BatchJob(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillingPortal

Create an instance: `billingPortal := client.BillingPortal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `expires_at` | `string` |  |
| `fetch_count` | `int` |  |
| `last_accepted_at` | `string` |  |
| `last_invite_accepted_at` | `string` |  |
| `last_invite_sent_at` | `string` |  |
| `last_sent_at` | `string` |  |
| `new_link_available_at` | `string` |  |
| `send_invite_link_text` | `string` |  |
| `uninvited_count` | `int` |  |
| `url` | `string` |  |

#### Example: Load

```go
billingPortal, err := client.BillingPortal(nil).Load(map[string]any{"customer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(billingPortal) // the loaded record
```

#### Example: Create

```go
result, err := client.BillingPortal(nil).Create(map[string]any{
    "customer_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Component

Create an instance: `component := client.Component(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component` | `map[string]any` |  |

#### Example: Load

```go
component, err := client.Component(nil).Load(map[string]any{"component_id": "component_id", "product_family_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(component) // the loaded record
```

#### Example: List

```go
components, err := client.Component(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(components) // the array of records
```

#### Example: Create

```go
result, err := client.Component(nil).Create(map[string]any{
    "product_family_id": "example_product_family_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ComponentFeature

Create an instance: `componentFeature := client.ComponentFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ComponentPricePoint

Create an instance: `componentPricePoint := client.ComponentPricePoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `component` | `map[string]any` |  |
| `component_id` | `int` |  |
| `created_at` | `string` |  |
| `currency_prices` | `[]any` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` |  |
| `handle` | `string` |  |
| `id` | `int` |  |
| `interval` | `int` | The numerical interval. |
| `interval_unit` | `any` |  |
| `name` | `string` |  |
| `overage_prices` | `[]any` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` |  |
| `price_point` | `map[string]any` |  |
| `price_points` | `[]any` |  |
| `prices` | `[]any` |  |
| `pricing_scheme` | `any` |  |
| `renew_prepaid_allocation` | `bool` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` |  |
| `type` | `any` |  |
| `updated_at` | `string` |  |
| `use_site_exchange_rate` | `bool` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: List

```go
componentPricePoints, err := client.ComponentPricePoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(componentPricePoints) // the array of records
```

#### Example: Create

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


### ComponentPricePointCurrencyOverage

Create an instance: `componentPricePointCurrencyOverage := client.ComponentPricePointCurrencyOverage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `component_id` | `int` |  |
| `created_at` | `string` |  |
| `currency_overage_prices` | `[]any` | Applicable only to prepaid usage components. |
| `currency_prices` | `[]any` | An array of currency pricing data is available when multiple currencies are defined for the site. |
| `default` | `bool` | Note: Refer to type attribute instead. |
| `expiration_interval` | `int` | Applicable only to prepaid usage components where rollover_prepaid_remainder is true. |
| `expiration_interval_unit` | `any` |  |
| `handle` | `string` |  |
| `id` | `int` |  |
| `interval` | `int` | The numerical interval. |
| `interval_unit` | `any` |  |
| `name` | `string` |  |
| `overage_prices` | `[]any` | Applicable only to prepaid usage components. |
| `overage_pricing_scheme` | `any` |  |
| `prices` | `[]any` |  |
| `pricing_scheme` | `any` |  |
| `renew_prepaid_allocation` | `bool` | Applicable only to prepaid usage components. |
| `rollover_prepaid_remainder` | `bool` | Applicable only to prepaid usage components. |
| `subscription_id` | `int` | (only used for Custom Pricing - ie. |
| `tax_included` | `bool` |  |
| `type` | `any` |  |
| `updated_at` | `string` |  |
| `use_site_exchange_rate` | `bool` | Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. |

#### Example: Load

```go
componentPricePointCurrencyOverage, err := client.ComponentPricePointCurrencyOverage(nil).Load(map[string]any{"component_id": "component_id", "price_point_id": "price_point_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(componentPricePointCurrencyOverage) // the loaded record
```


### Coupon

Create an instance: `coupon := client.Coupon(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_negative_balance` | `bool` | If set to true, discount is not limited (credits will carry forward to next billing). |
| `amount` | `float64` |  |
| `amount_in_cents` | `int` |  |
| `apply_on_cancel_at_end_of_period` | `bool` |  |
| `apply_on_subscription_expiration` | `bool` |  |
| `archived_at` | `string` |  |
| `code` | `string` |  |
| `compounding_strategy` | `any` |  |
| `conversion_limit` | `string` |  |
| `coupon` | `map[string]any` |  |
| `coupon_restrictions` | `[]any` |  |
| `created_at` | `string` |  |
| `currency_prices` | `[]any` | Returned in read, find, and list endpoints if the query parameter is provided. |
| `description` | `string` |  |
| `discount_type` | `string` |  |
| `duration_interval` | `int` |  |
| `duration_interval_span` | `string` |  |
| `duration_interval_unit` | `string` |  |
| `duration_period_count` | `int` |  |
| `end_date` | `string` | After the given time, this coupon code will be invalid for new signups. |
| `exclude_mid_period_allocations` | `bool` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `percentage` | `string` |  |
| `product_family_id` | `int` |  |
| `product_family_name` | `string` |  |
| `recurring` | `bool` |  |
| `recurring_scheme` | `string` |  |
| `stackable` | `bool` | A stackable coupon can be combined with other coupons on a Subscription. |
| `start_date` | `string` |  |
| `updated_at` | `string` |  |
| `use_site_exchange_rate` | `bool` |  |

#### Example: Load

```go
coupon, err := client.Coupon(nil).Load(map[string]any{"coupon_id": 1, "product_family_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(coupon) // the loaded record
```

#### Example: List

```go
coupons, err := client.Coupon(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(coupons) // the array of records
```

#### Example: Create

```go
result, err := client.Coupon(nil).Create(map[string]any{
    "product_family_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CouponCurrency

Create an instance: `couponCurrency := client.CouponCurrency(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CouponSubcode

Create an instance: `couponSubcode := client.CouponSubcode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_codes` | `[]any` |  |
| `duplicate_codes` | `[]any` |  |
| `id` | `string` |  |
| `invalid_codes` | `[]any` |  |


### CouponUsage

Create an instance: `couponUsage := client.CouponUsage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` | The Chargify id of the product |
| `name` | `string` | Name of the product |
| `revenue` | `int` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `revenue_in_cents` | `int` | Total revenue of all subscriptions that have received a discount from this coupon. |
| `savings` | `int` | Dollar amount of customer savings as a result of the coupon. |
| `savings_in_cents` | `int` | Dollar amount of customer savings as a result of the coupon. |
| `signups` | `int` | Number of times the coupon has been applied |

#### Example: List

```go
couponUsages, err := client.CouponUsage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(couponUsages) // the array of records
```


### CustomField

Create an instance: `customField := client.CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_page` | `int` |  |
| `data_count` | `int` |  |
| `deleted_at` | `string` |  |
| `enum` | `string` |  |
| `id` | `int` |  |
| `input_type` | `string` |  |
| `metadata` | `map[string]any` |  |
| `metafield_id` | `int` |  |
| `metafields` | `any` |  |
| `name` | `string` |  |
| `per_page` | `int` |  |
| `resource_id` | `int` |  |
| `scope` | `map[string]any` |  |
| `total_count` | `int` |  |
| `total_pages` | `int` |  |
| `value` | `string` |  |

#### Example: List

```go
customFields, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFields) // the array of records
```

#### Example: Create

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "resource_type": "example_resource_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The customer’s shipping street address (e.g., “123 Main St.”) |
| `address_2` | `string` | Second line of the customer’s shipping address e.g., “Apt. |
| `branding_theme_id` | `int` | The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. |
| `cc_emails` | `string` | “A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)” |
| `city` | `string` | The customer’s shipping address city (e.g., “Boston”) |
| `country` | `string` | The customer shipping address country |
| `country_name` | `string` | The customer's full name of country |
| `created_at` | `string` | The timestamp in which the customer object was created in Chargify |
| `customer` | `map[string]any` |  |
| `default_auto_renewal_profile_id` | `int` | The default auto-renewal profile ID for the customer |
| `default_subscription_group_uid` | `string` |  |
| `email` | `string` | The email address of the customer |
| `entity_identifier_kind` | `any` |  |
| `entity_identifier_value` | `string` | The value of the customer's tax or business identifier. |
| `first_name` | `string` | The first name of the customer |
| `id` | `int` | The customer ID in Chargify |
| `last_name` | `string` | The last name of the customer |
| `locale` | `string` | The locale for the customer to identify language-region |
| `maxioid` | `string` | The Maxio-generated unique identifier for the customer. |
| `organization` | `string` | The organization of the customer. |
| `parent_id` | `int` | The parent ID in Chargify if applicable. |
| `phone` | `string` | The phone number of the customer |
| `portal_customer_created_at` | `string` | The timestamp of when the Billing Portal entry was created at for the customer |
| `portal_invite_last_accepted_at` | `string` | The timestamp of when the Billing Portal invite was last accepted |
| `portal_invite_last_sent_at` | `string` | The timestamp of when the Billing Portal invite was last sent at |
| `reference` | `string` | The unique identifier used within your own application for this customer |
| `salesforce_id` | `string` | The Salesforce ID for the customer |
| `state` | `string` | The customer’s shipping address state (e.g., “MA”) |
| `state_name` | `string` | The customer's full name of state |
| `surcharging` | `bool` | Whether surcharging is enabled for the customer. |
| `tax_exempt` | `bool` | The tax exempt status for the customer. |
| `tax_exempt_reason` | `string` | The Tax Exemption Reason Code for the customer |
| `updated_at` | `string` | The timestamp in which the customer object was last edited |
| `vat_country` | `string` | The two-letter ISO 3166-1 country code that qualifies the customer's VAT number. |
| `vat_number` | `string` | The VAT business identification number for the customer. |
| `verified` | `bool` | Is the customer verified to use ACH as a payment method. |
| `zip` | `string` | The customer’s shipping address zip code (e.g., “12345”) |

#### Example: Load

```go
customer, err := client.Customer(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customer) // the loaded record
```

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customers) // the array of records
```

#### Example: Create

```go
result, err := client.Customer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DelayedCancel

Create an instance: `delayedCancel := client.DelayedCancel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `subscription` | `map[string]any` |  |

#### Example: Create

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


### Endpoint

Create an instance: `endpoint := client.Endpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `int` |  |
| `site_id` | `int` |  |
| `status` | `string` |  |
| `url` | `string` |  |
| `webhook_subscriptions` | `[]any` |  |

#### Example: List

```go
endpoints, err := client.Endpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(endpoints) // the array of records
```


### Entitlement

Create an instance: `entitlement := client.Entitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_id` | `int` |  |
| `entitlements` | `[]any` |  |
| `status` | `string` | The subscription's current state, e.g. |
| `subscription_id` | `int` |  |

#### Example: List

```go
entitlements, err := client.Entitlement(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(entitlements) // the array of records
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event` | `map[string]any` |  |

#### Example: Load

```go
event, err := client.Event(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(event) // the loaded record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(events) // the array of records
```


### EventsBasedBillingSegment

Create an instance: `eventsBasedBillingSegment := client.EventsBasedBillingSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Feature

Create an instance: `feature := client.Feature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `archived_count` | `int` | Number of archived feature templates matching the filters. |
| `created_at` | `string` |  |
| `feature` | `map[string]any` |  |
| `feature_key` | `string` | The `key` of the parent feature template. |
| `feature_kind` | `any` |  |
| `feature_name` | `string` | The `name` of the parent feature template. |
| `feature_template_id` | `int` | The id of the feature template this item was created from. |
| `id` | `int` |  |
| `items` | `[]any` |  |
| `periodicity_interval` | `int` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` |  |
| `price_point_id` | `int` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` |  |
| `total_count` | `int` | Total number of feature templates matching the filters, across all pages. |
| `updated_at` | `string` |  |
| `value` | `string` | The value granted by this feature catalog item. |

#### Example: List

```go
features, err := client.Feature(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(features) // the array of records
```

#### Example: Create

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


### FeatureCatalogItem

Create an instance: `featureCatalogItem := client.FeatureCatalogItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `feature` | `map[string]any` |  |
| `feature_key` | `string` | The `key` of the parent feature template. |
| `feature_kind` | `any` |  |
| `feature_name` | `string` | The `name` of the parent feature template. |
| `feature_template_id` | `int` | The id of the feature template this item was created from. |
| `id` | `int` |  |
| `periodicity_interval` | `int` | Set when `feature_kind` is `usage_limit`; `null` otherwise. |
| `periodicity_unit` | `any` |  |
| `price_point_id` | `int` | Set together with `price_point_type` for price-point-specific overrides. |
| `price_point_type` | `any` |  |
| `updated_at` | `string` |  |
| `value` | `string` | The value granted by this feature catalog item. |

#### Example: Load

```go
featureCatalogItem, err := client.FeatureCatalogItem(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(featureCatalogItem) // the loaded record
```

#### Example: Create

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


### FeatureTemplate

Create an instance: `featureTemplate := client.FeatureTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | The date and time the feature template was archived, or `null` if it is active. |
| `created_at` | `string` |  |
| `default_periodicity_interval` | `int` | For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. |
| `default_periodicity_unit` | `any` |  |
| `default_value` | `string` | A default value used to pre-populate new feature catalog items created from this template. |
| `description` | `string` |  |
| `feature` | `any` |  |
| `id` | `int` | The Advanced Billing id of the feature template. |
| `key` | `string` | A unique, lowercase, underscore-separated identifier for the feature. |
| `kind` | `any` |  |
| `name` | `string` | The display name of the feature. |
| `plans_count` | `int` | The number of **products** this feature template is currently attached to via an active feature catalog item. |
| `products_count` | `int` | The number of **components** this feature template is currently attached to via an active feature catalog item. |
| `unit` | `string` | The unit the feature is measured in (for example, `requests` or `GB`). |
| `updated_at` | `string` |  |
| `value_type` | `any` |  |

#### Example: Load

```go
featureTemplate, err := client.FeatureTemplate(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(featureTemplate) // the loaded record
```

#### Example: Create

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


### Insight

Create an instance: `insight := client.Insight(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `mrr` | `map[string]any` |  |
| `seller_name` | `string` |  |
| `site_currency` | `string` |  |
| `site_id` | `int` |  |
| `site_name` | `string` |  |
| `stats` | `map[string]any` |  |

#### Example: Load

```go
insight, err := client.Insight(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(insight) // the loaded record
```


### Invoice

Create an instance: `invoice := client.Invoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applications` | `[]any` |  |
| `applied_amount` | `string` | The amount of the credit note that has already been applied to invoices. |
| `applied_date` | `string` | Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. |
| `avatax_details` | `map[string]any` |  |
| `billing_address` | `any` |  |
| `branding_theme_id` | `int` | The ID of the Branding Theme associated with this invoice. |
| `collection_method` | `any` |  |
| `consolidation_level` | `any` |  |
| `created_at` | `string` |  |
| `credit_amount` | `string` | The amount of credit (from credit notes) applied to this invoice. |
| `credit_notes` | `[]any` |  |
| `credits` | `[]any` |  |
| `currency` | `string` | The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. |
| `custom_fields` | `[]any` |  |
| `customer` | `any` |  |
| `customer_id` | `int` | ID of the customer to which the invoice belongs. |
| `debit_amount` | `string` |  |
| `debits` | `[]any` |  |
| `discount_amount` | `string` | Total discount applied to the invoice. |
| `discounts` | `[]any` |  |
| `display_settings` | `map[string]any` |  |
| `due_amount` | `string` | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `due_date` | `string` | Date the invoice is due. |
| `group_primary_subscription_id` | `int` | For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice. |
| `id` | `int` |  |
| `invoice` | `map[string]any` |  |
| `invoices` | `[]any` |  |
| `issue_date` | `string` | Date the invoice was issued to the customer. |
| `line_items` | `[]any` | Line items on the invoice. |
| `memo` | `string` | The memo printed on invoices of any collection type. |
| `net_terms` | `int` |  |
| `number` | `string` | A unique, identifying string that appears on the invoice and in places the invoice is referenced. |
| `origin_invoices` | `[]any` | An array of origin invoices for the credit note. |
| `paid_amount` | `string` | The amount paid on the invoice by the customer. |
| `paid_date` | `string` | Date the invoice became fully paid. |
| `paid_invoices` | `[]any` |  |
| `parent_invoice_id` | `int` |  |
| `parent_invoice_number` | `int` | For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice. |
| `parent_invoice_uid` | `string` | For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice. |
| `payer` | `map[string]any` |  |
| `payment_instructions` | `string` | A message that is printed on the invoice when it is marked for remittance collection. |
| `payments` | `[]any` |  |
| `prepayment` | `string` |  |
| `previous_balance_data` | `map[string]any` |  |
| `product_family_name` | `string` | The name of the product family subscribed when the invoice was generated. |
| `product_name` | `string` | The name of the product subscribed when the invoice was generated. |
| `public_url` | `string` | The public URL of the invoice |
| `public_url_expires_on` | `string` | The format is `"YYYY-MM-DD"`. |
| `recipient_emails` | `[]any` |  |
| `refund_amount` | `string` |  |
| `refunds` | `[]any` |  |
| `remaining_amount` | `string` | The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`. |
| `role` | `string` |  |
| `seller` | `any` |  |
| `sequence_number` | `int` | A monotonically increasing number assigned to invoices as they are created. |
| `shipping_address` | `any` |  |
| `site_id` | `int` | ID of the site to which the invoice belongs. |
| `status` | `any` |  |
| `subscription_group_id` | `int` |  |
| `subscription_id` | `int` | ID of the subscription that generated the invoice. |
| `subtotal_amount` | `string` | Subtotal of the invoice, which is the sum of all line items before discounts or taxes. |
| `tax_amount` | `string` | Total tax on the invoice. |
| `taxes` | `[]any` |  |
| `total_amount` | `string` | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`. |
| `transaction_time` | `string` |  |
| `uid` | `string` | Unique identifier for the invoice. |
| `updated_at` | `string` |  |
| `void` | `map[string]any` |  |

#### Example: List

```go
invoices, err := client.Invoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(invoices) // the array of records
```

#### Example: Create

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


### ListProformaInvoice

Create an instance: `listProformaInvoice := client.ListProformaInvoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_actions` | `map[string]any` |  |
| `billing_address` | `map[string]any` |  |
| `collection_method` | `any` |  |
| `consolidation_level` | `any` |  |
| `created_at` | `string` |  |
| `credit_amount` | `string` |  |
| `credits` | `[]any` |  |
| `currency` | `string` |  |
| `custom_fields` | `[]any` |  |
| `customer` | `any` |  |
| `customer_id` | `int` |  |
| `delivery_date` | `string` |  |
| `discount_amount` | `string` |  |
| `discounts` | `[]any` |  |
| `due_amount` | `string` |  |
| `line_items` | `[]any` |  |
| `memo` | `string` |  |
| `number` | `int` |  |
| `paid_amount` | `string` |  |
| `payment_instructions` | `string` |  |
| `payments` | `[]any` |  |
| `product_family_name` | `string` |  |
| `product_name` | `string` |  |
| `public_url` | `string` |  |
| `refund_amount` | `string` |  |
| `role` | `any` |  |
| `seller` | `any` |  |
| `sequence_number` | `int` |  |
| `shipping_address` | `map[string]any` |  |
| `site_id` | `int` |  |
| `status` | `string` |  |
| `subscription_id` | `int` |  |
| `subtotal_amount` | `string` |  |
| `tax_amount` | `string` |  |
| `taxes` | `[]any` |  |
| `total_amount` | `string` |  |
| `uid` | `string` |  |

#### Example: List

```go
listProformaInvoices, err := client.ListProformaInvoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listProformaInvoices) // the array of records
```


### ListSaleRepItem

Create an instance: `listSaleRepItem := client.ListSaleRepItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `string` |  |
| `id` | `int` |  |
| `mrr_data` | `map[string]any` |  |
| `subscriptions_count` | `int` |  |
| `test_mode` | `bool` |  |

#### Example: List

```go
listSaleRepItems, err := client.ListSaleRepItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSaleRepItems) // the array of records
```


### ListSegment

Create an instance: `listSegment := client.ListSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `int` |  |
| `created_at` | `string` |  |
| `event_based_billing_metric_id` | `int` |  |
| `id` | `int` |  |
| `price_point_id` | `int` |  |
| `prices` | `[]any` |  |
| `pricing_scheme` | `any` |  |
| `segment_property_1_value` | `any` |  |
| `segment_property_2_value` | `any` |  |
| `segment_property_3_value` | `any` |  |
| `segment_property_4_value` | `any` |  |
| `segments` | `[]any` |  |
| `updated_at` | `string` |  |

#### Example: List

```go
listSegments, err := client.ListSegment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(listSegments) // the array of records
```

#### Example: Create

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


### Offer

Create an instance: `offer := client.Offer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `handle` | `string` |  |
| `id` | `int` |  |
| `name` | `string` |  |
| `offer` | `map[string]any` |  |
| `offer_discounts` | `[]any` |  |
| `offer_items` | `[]any` |  |
| `offer_signup_pages` | `[]any` |  |
| `offers` | `[]any` |  |
| `product_family_id` | `int` |  |
| `product_family_name` | `string` |  |
| `product_id` | `int` |  |
| `product_name` | `string` |  |
| `product_price_in_cents` | `int` |  |
| `product_price_point_id` | `int` |  |
| `product_price_point_name` | `string` |  |
| `product_revisable_number` | `int` |  |
| `site_id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
offer, err := client.Offer(nil).Load(map[string]any{"offer_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(offer) // the loaded record
```

#### Example: List

```go
offers, err := client.Offer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(offers) // the array of records
```

#### Example: Create

```go
result, err := client.Offer(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OneTimeToken

Create an instance: `oneTimeToken := client.OneTimeToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
oneTimeToken, err := client.OneTimeToken(nil).Load(map[string]any{"chargify_token": "chargify_token"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(oneTimeToken) // the loaded record
```


### PaymentProfile

Create an instance: `paymentProfile := client.PaymentProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `payment_profile` | `map[string]any` |  |

#### Example: Load

```go
paymentProfile, err := client.PaymentProfile(nil).Load(map[string]any{"payment_profile_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentProfile) // the loaded record
```

#### Example: List

```go
paymentProfiles, err := client.PaymentProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(paymentProfiles) // the array of records
```

#### Example: Create

```go
result, err := client.PaymentProfile(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Prepayment

Create an instance: `prepayment := client.Prepayment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

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


### Product

Create an instance: `product := client.Product(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `product` | `map[string]any` |  |

#### Example: Load

```go
product, err := client.Product(nil).Load(map[string]any{"api_handle": "api_handle"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(product) // the loaded record
```

#### Example: List

```go
products, err := client.Product(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(products) // the array of records
```

#### Example: Create

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


### ProductFamily

Create an instance: `productFamily := client.ProductFamily(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `product_family` | `map[string]any` |  |

#### Example: Load

```go
productFamily, err := client.ProductFamily(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(productFamily) // the loaded record
```

#### Example: List

```go
productFamilys, err := client.ProductFamily(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(productFamilys) // the array of records
```

#### Example: Create

```go
result, err := client.ProductFamily(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ProductFeature

Create an instance: `productFeature := client.ProductFeature(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ProductPricePoint

Create an instance: `productPricePoint := client.ProductPricePoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `price_point` | `map[string]any` |  |
| `price_points` | `[]any` |  |
| `product` | `map[string]any` |  |

#### Example: Load

```go
productPricePoint, err := client.ProductPricePoint(nil).Load(map[string]any{"price_point_id": "price_point_id", "product_id": "product_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(productPricePoint) // the loaded record
```

#### Example: List

```go
productPricePoints, err := client.ProductPricePoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(productPricePoints) // the array of records
```

#### Example: Create

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


### ProformaInvoice

Create an instance: `proformaInvoice := client.ProformaInvoice(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_actions` | `map[string]any` |  |
| `billing_address` | `map[string]any` |  |
| `collection_method` | `any` |  |
| `consolidation_level` | `any` |  |
| `created_at` | `string` |  |
| `credit_amount` | `string` |  |
| `credits` | `[]any` |  |
| `currency` | `string` |  |
| `custom_fields` | `[]any` |  |
| `customer` | `any` |  |
| `customer_id` | `int` |  |
| `delivery_date` | `string` |  |
| `discount_amount` | `string` |  |
| `discounts` | `[]any` |  |
| `due_amount` | `string` |  |
| `id` | `string` |  |
| `line_items` | `[]any` |  |
| `memo` | `string` |  |
| `number` | `int` |  |
| `paid_amount` | `string` |  |
| `payment_instructions` | `string` |  |
| `payments` | `[]any` |  |
| `product_family_name` | `string` |  |
| `product_name` | `string` |  |
| `public_url` | `string` |  |
| `refund_amount` | `string` |  |
| `role` | `any` |  |
| `seller` | `any` |  |
| `sequence_number` | `int` |  |
| `shipping_address` | `map[string]any` |  |
| `site_id` | `int` |  |
| `status` | `string` |  |
| `subscription_id` | `int` |  |
| `subtotal_amount` | `string` |  |
| `tax_amount` | `string` |  |
| `taxes` | `[]any` |  |
| `total_amount` | `string` |  |
| `uid` | `string` |  |

#### Example: List

```go
proformaInvoices, err := client.ProformaInvoice(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(proformaInvoices) // the array of records
```

#### Example: Create

```go
result, err := client.ProformaInvoice(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReasonCode

Create an instance: `reasonCode := client.ReasonCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `int` |  |
| `position` | `int` |  |
| `reason_code` | `map[string]any` |  |
| `site_id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
reasonCode, err := client.ReasonCode(nil).Load(map[string]any{"reason_code_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reasonCode) // the loaded record
```

#### Example: List

```go
reasonCodes, err := client.ReasonCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reasonCodes) // the array of records
```

#### Example: Create

```go
result, err := client.ReasonCode(nil).Create(map[string]any{
    "reason_code": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ReferralCode

Create an instance: `referralCode := client.ReferralCode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
referralCode, err := client.ReferralCode(nil).Load(map[string]any{"code": "code"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(referralCode) // the loaded record
```


### SaleRepSetting

Create an instance: `saleRepSetting := client.SaleRepSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_name` | `string` |  |
| `sales_rep_id` | `int` |  |
| `sales_rep_name` | `string` |  |
| `site_link` | `string` |  |
| `site_name` | `string` |  |
| `subscription_id` | `int` |  |
| `subscription_mrr` | `string` |  |

#### Example: List

```go
saleRepSettings, err := client.SaleRepSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(saleRepSettings) // the array of records
```


### SalesCommission

Create an instance: `salesCommission := client.SalesCommission(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `full_name` | `string` |  |
| `id` | `int` |  |
| `subscriptions` | `[]any` |  |
| `subscriptions_count` | `int` |  |
| `test_mode` | `bool` |  |

#### Example: List

```go
salesCommissions, err := client.SalesCommission(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(salesCommissions) // the array of records
```


### Segment

Create an instance: `segment := client.Segment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_id` | `int` |  |
| `created_at` | `string` |  |
| `event_based_billing_metric_id` | `int` |  |
| `id` | `int` |  |
| `price_point_id` | `int` |  |
| `prices` | `[]any` |  |
| `pricing_scheme` | `any` |  |
| `segment_property_1_value` | `any` |  |
| `segment_property_2_value` | `any` |  |
| `segment_property_3_value` | `any` |  |
| `segment_property_4_value` | `any` |  |
| `updated_at` | `string` |  |

#### Example: Create

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


### SignupProformaPreview

Create an instance: `signupProformaPreview := client.SignupProformaPreview(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.SignupProformaPreview(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Site

Create an instance: `site := client.Site(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `chargify_js_keys` | `[]any` |  |
| `meta` | `map[string]any` |  |
| `site` | `map[string]any` |  |

#### Example: Load

```go
site, err := client.Site(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(site) // the loaded record
```

#### Example: List

```go
sites, err := client.Site(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sites) // the array of records
```

#### Example: Create

```go
result, err := client.Site(nil).Create(map[string]any{
    "site": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Subscription

Create an instance: `subscription := client.Subscription(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activated_at` | `string` | Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial) |
| `automatically_resume_at` | `string` | The date the subscription is scheduled to automatically resume from the on_hold state. |
| `balance_in_cents` | `int` | Gives the current outstanding subscription balance in the number of cents. |
| `bank_account` | `map[string]any` |  |
| `cancel_at_end_of_period` | `bool` | Whether or not the subscription will (or has) canceled at the end of the period. |
| `canceled_at` | `string` | The timestamp of the most recent cancellation |
| `cancellation_message` | `string` | Seller-provided reason for, or note about, the cancellation. |
| `cancellation_method` | `any` |  |
| `coupon_code` | `string` | (deprecated) The coupon code of the single coupon currently applied to the subscription. |
| `coupon_codes` | `[]any` | An array for all the coupons attached to the subscription. |
| `coupon_use_count` | `int` | (deprecated) How many times the subscription's single coupon has been used. |
| `coupon_uses_allowed` | `int` | (deprecated) How many times the subscription's single coupon may be used. |
| `coupons` | `[]any` | Additional coupon data. |
| `created_at` | `string` | The creation date for this subscription |
| `credit_balance_in_cents` | `int` |  |
| `credit_card` | `any` |  |
| `currency` | `string` |  |
| `current_billing_amount_in_cents` | `int` | The balance in cents plus the estimated renewal amount in cents. |
| `current_period_ends_at` | `string` | Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur) |
| `current_period_started_at` | `string` | Timestamp relating to the start of the current (recurring) period |
| `customer` | `map[string]any` |  |
| `delayed_cancel_at` | `string` | Timestamp for when the subscription is currently set to cancel. |
| `dunning_communication_delay_enabled` | `bool` | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute. |
| `dunning_communication_delay_time_zone` | `string` | Time zone for the Dunning Communication Delay feature. |
| `expires_at` | `string` | Timestamp giving the expiration date of this subscription (if any) |
| `group` | `any` |  |
| `id` | `int` | The subscription unique id within Chargify. |
| `locale` | `string` |  |
| `net_terms` | `int` | On Relationship Invoicing, the number of days before a renewal invoice is due. |
| `next_assessment_at` | `string` | Timestamp that indicates when capture of payment will be tried or retried. |
| `next_product_handle` | `string` | If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal. |
| `next_product_id` | `int` | If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal. |
| `next_product_price_point_id` | `int` | If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal. |
| `offer_id` | `int` | The ID of the offer associated with the subscription. |
| `on_hold_at` | `string` | The timestamp of the most recent on hold action. |
| `payer_id` | `int` | On Relationship Invoicing, the ID of the individual paying for the subscription. |
| `payment_collection_method` | `any` |  |
| `payment_type` | `string` | The payment profile type for the active profile on file. |
| `prepaid_configuration` | `any` |  |
| `prepaid_dunning` | `bool` | Boolean representing whether the subscription is prepaid and currently in dunning. |
| `prepayment_balance_in_cents` | `int` |  |
| `previous_state` | `any` |  |
| `product` | `map[string]any` |  |
| `product_price_in_cents` | `int` | (Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed. |
| `product_price_point_id` | `int` | The product price point currently subscribed to. |
| `product_price_point_type` | `any` |  |
| `product_version_number` | `int` | The version of the product for the subscription. |
| `reason_code` | `string` | The churn reason code associated to a canceled subscription. |
| `receives_invoice_emails` | `bool` |  |
| `reference` | `string` | The reference value (provided by your app) for the subscription itself. |
| `referral_code` | `string` | The subscription's unique code that can be given to referrals. |
| `scheduled_cancellation_at` | `string` |  |
| `self_service_page_token` | `string` | Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided. |
| `signup_payment_id` | `int` | The ID of the transaction that generated the revenue |
| `signup_revenue` | `string` | The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00) |
| `snap_day` | `string` | A day of month that subscription will be processed on. |
| `state` | `any` |  |
| `stored_credential_transaction_id` | `int` | For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer. |
| `subscription` | `map[string]any` |  |
| `total_revenue_in_cents` | `int` | Gives the total revenue from the subscription in the number of cents. |
| `trial_ended_at` | `string` | Timestamp for when the trial period (if any) ended |
| `trial_started_at` | `string` | Timestamp for when the trial period (if any) began |
| `updated_at` | `string` | The date of last update for this subscription |

#### Example: Load

```go
subscription, err := client.Subscription(nil).Load(map[string]any{"subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscription) // the loaded record
```

#### Example: List

```go
subscriptions, err := client.Subscription(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptions) // the array of records
```

#### Example: Create

```go
result, err := client.Subscription(nil).Create(map[string]any{
    "bank_account": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionComponent

Create an instance: `subscriptionComponent := client.SubscriptionComponent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allocated_quantity` | `any` | For Quantity-based components: The current allocation for the component on the given subscription. |
| `allocation` | `map[string]any` |  |
| `allocation_preview` | `map[string]any` |  |
| `allow_fractional_quantities` | `bool` |  |
| `archived_at` | `string` |  |
| `component` | `map[string]any` |  |
| `component_handle` | `string` |  |
| `component_id` | `int` |  |
| `created_at` | `string` |  |
| `currency` | `string` |  |
| `description` | `string` |  |
| `display_on_hosted_page` | `bool` |  |
| `downgrade_credit` | `any` |  |
| `enabled` | `bool` | (for on/off components) indicates if the component is enabled for the subscription. |
| `historic_usages` | `[]any` |  |
| `id` | `int` |  |
| `interval` | `int` | The numerical interval. |
| `interval_unit` | `any` |  |
| `kind` | `any` |  |
| `name` | `string` |  |
| `price_point_handle` | `string` |  |
| `price_point_id` | `int` |  |
| `price_point_name` | `string` |  |
| `price_point_type` | `any` |  |
| `pricing_scheme` | `any` |  |
| `product_family_handle` | `string` |  |
| `product_family_id` | `int` |  |
| `recurring` | `bool` |  |
| `subscription` | `map[string]any` |  |
| `subscription_id` | `int` |  |
| `unit_balance` | `any` |  |
| `unit_name` | `string` |  |
| `updated_at` | `string` |  |
| `upgrade_charge` | `any` |  |
| `usage` | `map[string]any` |  |
| `use_site_exchange_rate` | `bool` |  |

#### Example: Load

```go
subscriptionComponent, err := client.SubscriptionComponent(nil).Load(map[string]any{"component_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionComponent) // the loaded record
```

#### Example: List

```go
subscriptionComponents, err := client.SubscriptionComponent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionComponents) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionComponent(nil).Create(map[string]any{
    "api_handle": "example_api_handle",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionGroup

Create an instance: `subscriptionGroup := client.SubscriptionGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `meta` | `map[string]any` |  |
| `subscription_group` | `map[string]any` |  |
| `subscription_groups` | `[]any` |  |

#### Example: List

```go
subscriptionGroups, err := client.SubscriptionGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionGroups) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionGroup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionGroupInvoiceAccount

Create an instance: `subscriptionGroupInvoiceAccount := client.SubscriptionGroupInvoiceAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
subscriptionGroupInvoiceAccounts, err := client.SubscriptionGroupInvoiceAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionGroupInvoiceAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionGroupInvoiceAccount(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionGroupSignup

Create an instance: `subscriptionGroupSignup := client.SubscriptionGroupSignup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.SubscriptionGroupSignup(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionGroupStatus

Create an instance: `subscriptionGroupStatus := client.SubscriptionGroupStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```go
result, err := client.SubscriptionGroupStatus(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionInvoiceAccount

Create an instance: `subscriptionInvoiceAccount := client.SubscriptionInvoiceAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `service_credits` | `[]any` |  |

#### Example: List

```go
subscriptionInvoiceAccounts, err := client.SubscriptionInvoiceAccount(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionInvoiceAccounts) // the array of records
```

#### Example: Create

```go
result, err := client.SubscriptionInvoiceAccount(nil).Create(map[string]any{
    "id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SubscriptionMrr

Create an instance: `subscriptionMrr := client.SubscriptionMrr(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakouts` | `map[string]any` |  |
| `mrr_amount_in_cents` | `int` |  |
| `subscription_id` | `int` |  |

#### Example: List

```go
subscriptionMrrs, err := client.SubscriptionMrr(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionMrrs) // the array of records
```


### SubscriptionNote

Create an instance: `subscriptionNote := client.SubscriptionNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `created_at` | `string` |  |
| `id` | `int` |  |
| `note` | `map[string]any` |  |
| `sticky` | `bool` |  |
| `subscription_id` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
subscriptionNote, err := client.SubscriptionNote(nil).Load(map[string]any{"note_id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionNote) // the loaded record
```

#### Example: List

```go
subscriptionNotes, err := client.SubscriptionNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionNotes) // the array of records
```

#### Example: Create

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


### SubscriptionProduct

Create an instance: `subscriptionProduct := client.SubscriptionProduct(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `migration` | `map[string]any` |  |

#### Example: Create

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


### SubscriptionRenewal

Create an instance: `subscriptionRenewal := client.SubscriptionRenewal(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `scheduled_renewal_configuration` | `map[string]any` |  |
| `scheduled_renewal_configuration_item` | `map[string]any` |  |

#### Example: Load

```go
subscriptionRenewal, err := client.SubscriptionRenewal(nil).Load(map[string]any{"id": 1, "subscription_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionRenewal) // the loaded record
```

#### Example: List

```go
subscriptionRenewals, err := client.SubscriptionRenewal(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionRenewals) // the array of records
```

#### Example: Create

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


### SubscriptionStatus

Create an instance: `subscriptionStatus := client.SubscriptionStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `renewal_preview` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.SubscriptionStatus(nil).Create(map[string]any{
    "subscription_id": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Usage

Create an instance: `usage := client.Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `usage` | `map[string]any` |  |

#### Example: List

```go
usages, err := client.Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usages) // the array of records
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `endpoint` | `map[string]any` |  |
| `webhook` | `map[string]any` |  |

#### Example: List

```go
webhooks, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooks) // the array of records
```

#### Example: Create

```go
result, err := client.Webhook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/
├── maxio-advanced-billing.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/maxio-advanced-billing-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
accountbalance := client.AccountBalance(nil)
accountbalance.Load(map[string]any{"subscription_id": 1}, nil)

// accountbalance.Data() now returns the accountbalance data from the last load
// accountbalance.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
