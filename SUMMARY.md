# Maxio Advanced Billing

Maxio Advanced Billing (formerly Chargify) provides an HTTP-based API that conforms to the principles of REST. One of the many reasons to use Advanced Billing is the immense feature set and [client libraries](page:development-tools/client-libraries). The Maxio API returns JSON responses as the primary and recommended format, but XML is also provided as a backwards compatible option for merchants who require it. ## Steps to make your first Maxio Advanced Billing API call 1. [Sign-up](https://app.chargify.com/signup/maxio-billing-sandbox) or [log-in](https://app.chargify.com/login.html) to your [test site](https://maxio.zendesk.com/hc/en-us/articles/24250712113165-Testing-Overview) account. 2. [Setup authentication](https://maxio.zendesk.com/hc/en-us/articles/24294819360525-API-Keys) credentials. 3. [Submit an API request and verify the response](page:development-tools/client-libraries#make-your-first-maxio-advanced-billing-api-request). 5. Test the Advanced Billing [integrations](https://www.maxio.com/integrations). Next, you can explore [authentication methods](page:introduction/authentication), [basic concepts](page:introduction/basic-concepts/connected-sites) for interacting with Advanced Billing via the API, and the entire set of [application-based documentation](https://docs.maxio.com/hc/en-us) to aid in your discovery of the product. ### Request Example The following example uses the curl command-line tool to make an API request. **Request** curl -u &lt;api_key&gt;:x -H Accept:application/json -H Content-Type:application/json https://acme.chargify.com/subscriptions.json

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 56 entities and 268 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AccountBalance

Results: OK.

SDK operations: `load`.

### Allocation

Results: OK.

SDK operations: `create`, `list`.

### BatchJob

Results: Created; OK.

SDK operations: `create`, `load`.

### BillingPortal

Results: OK.

SDK operations: `create`, `load`, `remove`.

### Component

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `accounting_code`: for example Internal ID or SKU Number
- `archived`: Boolean flag describing whether a component is archived or not.
- `archived_at`: Timestamp indicating when this component was archived
- `created_at`: Timestamp indicating when this component was created
- `description`: The description of the component.

### ComponentFeature

Results: No Content.

SDK operations: `remove`.

### ComponentPricePoint

Results: Created; OK.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `accounting_code`: for example Internal ID or SKU Number
- `archived`: Boolean flag describing whether a component is archived or not.
- `archived_at`: Timestamp indicating when this component was archived
- `created_at`: Timestamp indicating when this component was created
- `currency_prices`: An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. The clone endpoint always returns currency prices if they are present.

### ComponentPricePointCurrencyOverage

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `currency_overage_prices`: Applicable only to prepaid usage components. An array of currency pricing data for overage prices.
- `currency_prices`: An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. The clone endpoint always returns currency prices if they are present.
- `default`: Note: Refer to type attribute instead.
- `expiration_interval`: Applicable only to prepaid usage components where rollover_prepaid_remainder is true. The number of `expiration_interval_unit`s after which rollover amounts should expire.
- `interval`: The numerical interval. for example, an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled.

### Coupon

Results: OK; Created.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allow_negative_balance`: If set to true, discount is not limited (credits will carry forward to next billing).
- `currency_prices`: Returned in read, find, and list endpoints if the query parameter is provided.
- `end_date`: After the given time, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date.
- `stackable`: A stackable coupon can be combined with other coupons on a Subscription.

### CouponCurrency

Results: OK.

SDK operations: `update`.

### CouponSubcode

Results: OK.

SDK operations: `update`.

### CouponUsage

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: The Chargify id of the product
- `name`: Name of the product
- `revenue`: Total revenue of all subscriptions that have received a discount from this coupon.
- `revenue_in_cents`: Total revenue of all subscriptions that have received a discount from this coupon.
- `savings`: Dollar amount of customer savings as a result of the coupon.

### CustomField

Results: OK.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `data_count`: The amount of subscriptions this metafield has been applied to in Advanced Billing.

### Customer

Results: OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The customer’s shipping street address (for example, “123 Main St.”)
- `address_2`: Second line of the customer’s shipping address for example, “Apt. 100”
- `branding_theme_id`: The ID of the Branding Theme assigned to this customer as the customer&#39;s default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme. Available only when Branding Themes are enabled for the site.
- `cc_emails`: “A comma-separated list of emails that should be cc’d on all customer communications (for example, “joe@example.com, sue@example.com”)”
- `city`: The customer’s shipping address city (for example, “Boston”)

### DelayedCancel

Results: OK.

SDK operations: `create`.

### Endpoint

Results: OK.

SDK operations: `list`, `update`.

### Entitlement

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `status`: The subscription&#39;s current state, for example `active`, `trialing`, `canceled`.

### Event

Results: OK.

SDK operations: `list`, `load`.

### EventsBasedBillingSegment

Results: No Content.

SDK operations: `remove`.

### Feature

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `archived_at`: The date and time the feature template was archived, or `null` if it is active.
- `default_periodicity_interval`: For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. Always `null` for other kinds.
- `default_value`: A default value used to pre-populate new feature catalog items created from this template.
- `feature_key`: The `key` of the parent feature template.
- `feature_name`: The `name` of the parent feature template.

### FeatureCatalogItem

Results: OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `feature_key`: The `key` of the parent feature template.
- `feature_name`: The `name` of the parent feature template.
- `feature_template_id`: The id of the feature template this item was created from.
- `periodicity_interval`: Set when `feature_kind` is `usage_limit`; `null` otherwise.
- `price_point_id`: Set together with `price_point_type` for price-point-specific overrides.

### FeatureTemplate

Results: OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archived_at`: The date and time the feature template was archived, or `null` if it is active.
- `default_periodicity_interval`: For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. Always `null` for other kinds.
- `default_value`: A default value used to pre-populate new feature catalog items created from this template.
- `id`: The Advanced Billing id of the feature template.
- `key`: A unique, lowercase, underscore-separated identifier for the feature. Immutable once set.

### Insight

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `at_time`: ISO8601 timestamp

### Invoice

Results: OK; No Content; Created.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `applied_amount`: Dollar amount of the paid invoice.
- `applied_date`: Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. This field is the date the credit note became fully applied to invoices. If the credit note has been partially applied, this field will not have a value until it has been fully applied. The format is `&quot;YYYY-MM-DD&quot;`.
- `branding_theme_id`: The ID of the Branding Theme associated with this invoice. This value represents the Branding Theme used for invoice theming, such as themed invoice rendering. Available only when Branding Themes are enabled for the site.
- `consolidation_level`: Consolidation level of the invoice, which is applicable to invoice consolidation. It will hold one of the following values: * &quot;none&quot;: A normal invoice with no consolidation. * &quot;child&quot;: An invoice segment which has been combined into a consolidated invoice. * &quot;parent&quot;: A consolidated invoice, whose contents are composed of invoice segments. &quot;Parent&quot; invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments. See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation).
- `credit_amount`: The amount of credit (from credit notes) applied to this invoice. Credits offset the amount due from the customer.

### ListSaleRepItem

Results: OK.

SDK operations: `list`.

### ListSegment

Results: Created; OK.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `segments`: The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key.

### Offer

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

### OneTimeToken

Results: OK.

SDK operations: `load`.

### PaymentProfile

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `bank_name`: The bank where the account resides
- `billing_address`: The current billing street address for the Apple Pay account
- `billing_address_2`: The current billing street address, second line, for the Apple Pay account
- `billing_city`: The current billing address city for the Apple Pay account
- `billing_country`: The current billing address country for the Apple Pay account

### Prepayment

Results: Created.

SDK operations: `create`.

### Product

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `accounting_code`: for example, Internal ID or SKU Number
- `archived_at`: Timestamp indicating when this product was archived
- `created_at`: Timestamp indicating when this product was created
- `description`: The product description
- `expiration_interval`: A numerical interval for the length a subscription to this product will run before it expires. See the description of interval for a description of how this value is coupled with an interval unit to calculate the full interval.

### ProductFamily

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `archived_at`: Timestamp indicating when this product family was archived. `null` if the product family is not archived.
- `surcharging`: Whether surcharging applies to this product family. Only included on sites where surcharging is enabled.

### ProductFeature

Results: No Content.

SDK operations: `remove`.

### ProductPricePoint

Results: OK; Created.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `accounting_code`: for example, Internal ID or SKU Number
- `archived_at`: Timestamp indicating when this price point was archived
- `created_at`: Timestamp indicating when this price point was created
- `currency_prices`: An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter.
- `description`: The product description

### ProformaInvoice

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `discount_amount`: The approximate discount applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total discount among many lines. Several lines may have been summed prior to applying the discount to arrive at `discount_amount` for the invoice - backing that out to the discount on a single line may introduce rounding or precision errors.
- `subtotal_amount`: The line subtotal, generally calculated as `quantity * unit_price`. This is the canonical amount of record for the line - when rounding differences are in play, `subtotal_amount` takes precedence over the value derived from `quantity * unit_price` (which may not have the proper precision to exactly equal this amount).
- `tax_amount`: The approximate tax applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total tax among many lines. Several lines may have been summed prior to applying the tax rate to arrive at `tax_amount` for the invoice - backing that out to the tax on a single line may introduce rounding or precision errors.
- `total_amount`: The non-canonical total amount for the line. `subtotal_amount` is the canonical amount for a line. The invoice `total_amount` is derived from the sum of the line `subtotal_amount`s and discounts or taxes applied thereafter. Therefore, due to rounding or precision errors, the sum of line `total_amount`s may not equal the invoice `total_amount`.
- `uid`: Unique identifier for the line item. Useful when cross-referencing the line against individual discounts in the `discounts` or `taxes` lists.

### ReasonCode

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### ReferralCode

Results: OK.

SDK operations: `load`.

### SaleRepSetting

Results: OK.

SDK operations: `list`.

### SalesCommission

Results: OK.

SDK operations: `list`.

### Segment

Results: Created; OK.

SDK operations: `create`, `update`.

### SignupProformaPreview

Results: Created.

SDK operations: `create`.

### Site

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `auto_renewals_enabled`: Whether the auto-renewals feature is enabled for this site.
- `multi_frequency_enabled`: Whether the site has the multi-frequency billing feature enabled. Only present when relationship invoicing is active.
- `portal_enabled`: Whether the Billing Portal is enabled for this site.

### Subscription

Results: OK; Created; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activated_at`: Timestamp for when the subscription began (that is, when it came out of trial, or when it began in the case of no trial)
- `automatically_resume_at`: The date the subscription is scheduled to automatically resume from the on_hold state.
- `balance_in_cents`: Gives the current outstanding subscription balance in the number of cents.
- `cancel_at_end_of_period`: Whether or not the subscription will (or has) canceled at the end of the period.
- `canceled_at`: The timestamp of the most recent cancellation

### SubscriptionComponent

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `accrue_charge`: If the change in cost is an upgrade, this determines if the charge should accrue to the next renewal or if capture should be attempted immediately.
- `allocated_quantity`: For Quantity-based components: The current allocation for the component on the given subscription. For On/Off components: Use 1 for on. Use 0 for off.
- `allocation_id`: The allocation unique ID
- `archived_at`: Timestamp indicating when this product was archived
- `component_handle`: The handle of the component. This references a component that you have created in your Product setup.

### SubscriptionGroup

Results: OK; No Content.

SDK operations: `create`, `list`, `remove`, `update`.

### SubscriptionGroupInvoiceAccount

Results: OK; Created.

SDK operations: `create`, `list`.

### SubscriptionGroupSignup

Results: Created.

SDK operations: `create`.

### SubscriptionGroupStatus

Results: OK.

SDK operations: `create`, `remove`.

### SubscriptionInvoiceAccount

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `amount_in_cents`: The amount in cents of the entry
- `created_at`: The date and time the entry was created
- `ending_balance_in_cents`: The new balance for the credit account
- `invoice_uid`: The invoice uid associated with the entry. Only present for debit entries.
- `memo`: The memo attached to the entry

### SubscriptionMrr

Results: OK.

SDK operations: `list`.

### SubscriptionNote

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### SubscriptionProduct

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `charge_in_cents`: The amount of the charge that would be created for the new product.
- `credit_applied_in_cents`: Represents a credit in cents that is applied to your subscription as part of a migration process for a specific product, which reduces the amount owed for the subscription.
- `id`: The subscription unique id within Chargify.
- `payment_due_in_cents`: The amount of the payment due in the case of an upgrade.
- `prorated_adjustment_in_cents`: The amount of the prorated adjustment that would be issued for the current subscription.

### SubscriptionRenewal

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: ID of the renewal.
- `site_id`: ID of the site to which the renewal belongs.
- `subscription_id`: The id of the subscription.

### SubscriptionStatus

Results: OK.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `existing_balance_in_cents`: An integer representing the amount of the subscription’s current balance
- `id`: The subscription unique id within Chargify.
- `line_items`: An array of objects representing the individual transactions that will be created at the next renewal
- `next_assessment_at`: Timestamp that indicates when capture of payment will be tried or retried. This value will usually track the current_period_ends_at, but will diverge if a renewal payment fails and must be retried. In that case, the current_period_ends_at will advance to the end of the next period (time doesn’t stop because a payment was missed) but the next_assessment_at will be scheduled for the auto-retry time (for example, 24 hours in the future, in some cases).
- `subtotal_in_cents`: An integer representing the amount of the total pre-tax, pre-discount charges that will be assessed at the next renewal

### Usage

Results: OK.

SDK operations: `list`.

### Webhook

Results: OK.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `id`: The unique identifier for the webhook (unique across all of Chargify). This is not changed on a retry/replay of the same webhook, so it may be used to avoid duplicate action for the same event.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AccountBalance | `load` | `GET /subscriptions/{subscription_id}/account_balances.json` | Required |
| Allocation | `create` | `POST /subscriptions/{subscription_id}/allocations.json` | Required |
| Allocation | `list` | `GET /subscriptions/{subscription_id}/components/{component_id}/allocations.json` | Required |
| BatchJob | `create` | `POST /api_exports/invoices.json` | Required |
| BatchJob | `create` | `POST /api_exports/proforma_invoices.json` | Required |
| BatchJob | `create` | `POST /api_exports/subscriptions.json` | Required |
| BatchJob | `load` | `GET /api_exports/invoices/{batch_id}.json` | Required |
| BatchJob | `load` | `GET /api_exports/proforma_invoices/{batch_id}.json` | Required |
| BatchJob | `load` | `GET /api_exports/subscriptions/{batch_id}.json` | Required |
| BillingPortal | `create` | `POST /portal/customers/{customer_id}/invitations/invite.json` | Required |
| BillingPortal | `load` | `GET /portal/customers/{customer_id}/management_link.json` | Required |
| BillingPortal | `remove` | `DELETE /portal/customers/{customer_id}/invitations/revoke.json` | Required |
| Component | `create` | `POST /product_families/{product_family_id}/event_based_components.json` | Required |
| Component | `create` | `POST /product_families/{product_family_id}/metered_components.json` | Required |
| Component | `create` | `POST /product_families/{product_family_id}/on_off_components.json` | Required |
| Component | `create` | `POST /product_families/{product_family_id}/prepaid_usage_components.json` | Required |
| Component | `create` | `POST /product_families/{product_family_id}/quantity_based_components.json` | Required |
| Component | `list` | `GET /product_families/{product_family_id}/components.json` | Required |
| Component | `list` | `GET /components.json` | Required |
| Component | `load` | `GET /product_families/{product_family_id}/components/{component_id}.json` | Required |
| Component | `load` | `GET /components/lookup.json` | Required |
| Component | `remove` | `DELETE /product_families/{product_family_id}/components/{component_id}.json` | Required |
| Component | `update` | `PUT /product_families/{product_family_id}/components/{component_id}.json` | Required |
| Component | `update` | `PUT /components/{component_id}.json` | Required |
| ComponentFeature | `remove` | `DELETE /components/{component_id}/features/{id}.json` | Required |
| ComponentPricePoint | `create` | `POST /components/{component_id}/price_points/{price_point_id}/clone.json` | Required |
| ComponentPricePoint | `create` | `POST /components/{component_id}/price_points/bulk.json` | Required |
| ComponentPricePoint | `create` | `POST /components/{component_id}/price_points.json` | Required |
| ComponentPricePoint | `create` | `POST /price_points/{price_point_id}/currency_prices.json` | Required |
| ComponentPricePoint | `list` | `GET /components/{component_id}/price_points.json` | Required |
| ComponentPricePoint | `list` | `GET /components_price_points.json` | Required |
| ComponentPricePoint | `remove` | `DELETE /components/{component_id}/price_points/{price_point_id}.json` | Required |
| ComponentPricePoint | `update` | `PUT /components/{component_id}/price_points/{price_point_id}.json` | Required |
| ComponentPricePoint | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/default.json` | Required |
| ComponentPricePoint | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/unarchive.json` | Required |
| ComponentPricePoint | `update` | `PUT /price_points/{price_point_id}/currency_prices.json` | Required |
| ComponentPricePointCurrencyOverage | `load` | `GET /components/{component_id}/price_points/{price_point_id}.json` | Required |
| Coupon | `create` | `POST /coupons/{coupon_id}/codes.json` | Required |
| Coupon | `create` | `POST /product_families/{product_family_id}/coupons.json` | Required |
| Coupon | `list` | `GET /product_families/{product_family_id}/coupons.json` | Required |
| Coupon | `list` | `GET /coupons.json` | Required |
| Coupon | `list` | `GET /coupons/{coupon_id}/codes.json` | Required |
| Coupon | `load` | `GET /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| Coupon | `load` | `GET /coupons/find.json` | Required |
| Coupon | `load` | `GET /coupons/validate.json` | Required |
| Coupon | `remove` | `DELETE /coupons/{coupon_id}/codes/{subcode}.json` | Required |
| Coupon | `remove` | `DELETE /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| Coupon | `update` | `PUT /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| CouponCurrency | `update` | `PUT /coupons/{coupon_id}/currency_prices.json` | Required |
| CouponSubcode | `update` | `PUT /coupons/{coupon_id}/codes.json` | Required |
| CouponUsage | `list` | `GET /product_families/{product_family_id}/coupons/{coupon_id}/usage.json` | Required |
| CustomField | `create` | `POST /{resource_type}/{resource_id}/metadata.json` | Required |
| CustomField | `create` | `POST /{resource_type}/metafields.json` | Required |
| CustomField | `list` | `GET /{resource_type}/metadata.json` | Required |
| CustomField | `list` | `GET /{resource_type}/metafields.json` | Required |
| CustomField | `list` | `GET /{resource_type}/{resource_id}/metadata.json` | Required |
| CustomField | `remove` | `DELETE /{resource_type}/{resource_id}/metadata.json` | Required |
| CustomField | `remove` | `DELETE /{resource_type}/metafields.json` | Required |
| CustomField | `update` | `PUT /{resource_type}/{resource_id}/metadata.json` | Required |
| CustomField | `update` | `PUT /{resource_type}/metafields.json` | Required |
| Customer | `create` | `POST /portal/customers/{customer_id}/enable.json` | Required |
| Customer | `create` | `POST /customers.json` | Required |
| Customer | `list` | `GET /customers.json` | Required |
| Customer | `load` | `GET /customers/{id}.json` | Required |
| Customer | `load` | `GET /customers/lookup.json` | Required |
| Customer | `remove` | `DELETE /customers/{id}.json` | Required |
| Customer | `update` | `PUT /customers/{id}.json` | Required |
| DelayedCancel | `create` | `POST /subscriptions/{subscription_id}/delayed_cancel.json` | Required |
| Endpoint | `list` | `GET /endpoints.json` | Required |
| Endpoint | `update` | `PUT /endpoints/{endpoint_id}.json` | Required |
| Entitlement | `list` | `GET /subscriptions/{subscription_id}/entitlements.json` | Required |
| Event | `list` | `GET /events.json` | Required |
| Event | `list` | `GET /subscriptions/{subscription_id}/events.json` | Required |
| Event | `load` | `GET /events/count.json` | Required |
| EventsBasedBillingSegment | `remove` | `DELETE /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` | Required |
| Feature | `create` | `POST /components/{component_id}/features.json` | Required |
| Feature | `create` | `POST /products/{product_id}/features.json` | Required |
| Feature | `create` | `POST /features.json` | Required |
| Feature | `list` | `GET /features.json` | Required |
| Feature | `list` | `GET /components/{component_id}/features.json` | Required |
| Feature | `list` | `GET /products/{product_id}/features.json` | Required |
| FeatureCatalogItem | `create` | `POST /components/{component_id}/features/{id}/restore.json` | Required |
| FeatureCatalogItem | `create` | `POST /products/{product_id}/features/{id}/restore.json` | Required |
| FeatureCatalogItem | `load` | `GET /components/{component_id}/features/{id}.json` | Required |
| FeatureCatalogItem | `load` | `GET /products/{product_id}/features/{id}.json` | Required |
| FeatureCatalogItem | `update` | `PUT /components/{component_id}/features/{id}.json` | Required |
| FeatureCatalogItem | `update` | `PUT /products/{product_id}/features/{id}.json` | Required |
| FeatureTemplate | `create` | `POST /features/{id}/restore.json` | Required |
| FeatureTemplate | `load` | `GET /features/{id}.json` | Required |
| FeatureTemplate | `remove` | `DELETE /features/{id}.json` | Required |
| FeatureTemplate | `update` | `PUT /features/{id}.json` | Required |
| Insight | `load` | `GET /mrr_movements.json` | Required |
| Insight | `load` | `GET /mrr.json` | Required |
| Insight | `load` | `GET /stats.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/customer_information/preview.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/deliveries.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/issue.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/payments.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/refunds.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/reopen.json` | Required |
| Invoice | `create` | `POST /invoices/{uid}/void.json` | Required |
| Invoice | `create` | `POST /subscriptions/{subscription_id}/advance_invoice/issue.json` | Required |
| Invoice | `create` | `POST /subscriptions/{subscription_id}/advance_invoice/void.json` | Required |
| Invoice | `create` | `POST /subscriptions/{subscription_id}/invoices.json` | Required |
| Invoice | `create` | `POST /subscriptions/{subscription_id}/payments.json` | Required |
| Invoice | `create` | `POST /invoices/payments.json` | Required |
| Invoice | `list` | `GET /invoices.json` | Required |
| Invoice | `list` | `GET /credit_notes.json` | Required |
| Invoice | `list` | `GET /invoices/events.json` | Required |
| Invoice | `list` | `GET /invoices/{invoice_uid}/segments.json` | Required |
| Invoice | `list` | `GET /api_exports/invoices/{batch_id}/rows.json` | Required |
| Invoice | `list` | `GET /subscriptions/{subscription_id}/advance_invoice.json` | Required |
| Invoice | `list` | `GET /credit_notes/{uid}.json` | Required |
| Invoice | `list` | `GET /invoices/{uid}.json` | Required |
| Invoice | `remove` | `DELETE /subscriptions/{subscription_id}/invoices/{uid}.json` | Required |
| Invoice | `update` | `PUT /subscriptions/{subscription_id}/invoices/{uid}.json` | Required |
| Invoice | `update` | `PUT /invoices/{uid}/customer_information.json` | Required |
| ListSaleRepItem | `list` | `GET /sellers/{seller_id}/sales_reps.json` | Required |
| ListSegment | `create` | `POST /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` | Required |
| ListSegment | `list` | `GET /components/{component_id}/price_points/{price_point_id}/segments.json` | Required |
| ListSegment | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` | Required |
| Offer | `create` | `POST /offers.json` | Required |
| Offer | `list` | `GET /offers.json` | Required |
| Offer | `load` | `GET /offers/{offer_id}.json` | Required |
| Offer | `update` | `PUT /offers/{offer_id}/archive.json` | Required |
| Offer | `update` | `PUT /offers/{offer_id}/unarchive.json` | Required |
| OneTimeToken | `load` | `GET /one_time_tokens/{chargify_token}.json` | Required |
| PaymentProfile | `create` | `POST /subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | Required |
| PaymentProfile | `create` | `POST /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | Required |
| PaymentProfile | `create` | `POST /subscriptions/{subscription_id}/request_payment_profiles_update.json` | Required |
| PaymentProfile | `create` | `POST /payment_profiles.json` | Required |
| PaymentProfile | `list` | `GET /payment_profiles.json` | Required |
| PaymentProfile | `load` | `GET /payment_profiles/{payment_profile_id}.json` | Required |
| PaymentProfile | `remove` | `DELETE /subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json` | Required |
| PaymentProfile | `remove` | `DELETE /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json` | Required |
| PaymentProfile | `remove` | `DELETE /payment_profiles/{payment_profile_id}.json` | Required |
| PaymentProfile | `update` | `PUT /bank_accounts/{bank_account_id}/verification.json` | Required |
| PaymentProfile | `update` | `PUT /payment_profiles/{payment_profile_id}.json` | Required |
| Prepayment | `create` | `POST /subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json` | Required |
| Product | `create` | `POST /product_families/{product_family_id}/products.json` | Required |
| Product | `list` | `GET /products.json` | Required |
| Product | `list` | `GET /product_families/{product_family_id}/products.json` | Required |
| Product | `load` | `GET /products/{product_id}.json` | Required |
| Product | `load` | `GET /products/handle/{api_handle}.json` | Required |
| Product | `remove` | `DELETE /products/{product_id}.json` | Required |
| Product | `update` | `PUT /products/{product_id}.json` | Required |
| ProductFamily | `create` | `POST /product_families.json` | Required |
| ProductFamily | `list` | `GET /product_families.json` | Required |
| ProductFamily | `load` | `GET /product_families/{id}.json` | Required |
| ProductFeature | `remove` | `DELETE /products/{product_id}/features/{id}.json` | Required |
| ProductPricePoint | `create` | `POST /product_price_points/{product_price_point_id}/currency_prices.json` | Required |
| ProductPricePoint | `create` | `POST /products/{product_id}/price_points.json` | Required |
| ProductPricePoint | `create` | `POST /products/{product_id}/price_points/bulk.json` | Required |
| ProductPricePoint | `list` | `GET /products/{product_id}/price_points.json` | Required |
| ProductPricePoint | `list` | `GET /products_price_points.json` | Required |
| ProductPricePoint | `load` | `GET /products/{product_id}/price_points/{price_point_id}.json` | Required |
| ProductPricePoint | `patch` | `PATCH /products/{product_id}/price_points/{price_point_id}/default.json` | Required |
| ProductPricePoint | `patch` | `PATCH /products/{product_id}/price_points/{price_point_id}/unarchive.json` | Required |
| ProductPricePoint | `remove` | `DELETE /products/{product_id}/price_points/{price_point_id}.json` | Required |
| ProductPricePoint | `update` | `PUT /products/{product_id}/price_points/{price_point_id}.json` | Required |
| ProductPricePoint | `update` | `PUT /product_price_points/{product_price_point_id}/currency_prices.json` | Required |
| ProformaInvoice | `create` | `POST /proforma_invoices/{proforma_invoice_uid}/deliveries.json` | Required |
| ProformaInvoice | `create` | `POST /proforma_invoices/{proforma_invoice_uid}/void.json` | Required |
| ProformaInvoice | `create` | `POST /subscription_groups/{uid}/proforma_invoices.json` | Required |
| ProformaInvoice | `create` | `POST /subscriptions/{subscription_id}/proforma_invoices.json` | Required |
| ProformaInvoice | `create` | `POST /subscriptions/{subscription_id}/proforma_invoices/preview.json` | Required |
| ProformaInvoice | `create` | `POST /subscriptions/proforma_invoices.json` | Required |
| ProformaInvoice | `list` | `GET /subscriptions/{subscription_id}/proforma_invoices.json` | Required |
| ProformaInvoice | `list` | `GET /subscription_groups/{uid}/proforma_invoices.json` | Required |
| ProformaInvoice | `list` | `GET /api_exports/proforma_invoices/{batch_id}/rows.json` | Required |
| ProformaInvoice | `list` | `GET /proforma_invoices/{proforma_invoice_uid}.json` | Required |
| ReasonCode | `create` | `POST /reason_codes.json` | Required |
| ReasonCode | `list` | `GET /reason_codes.json` | Required |
| ReasonCode | `load` | `GET /reason_codes/{reason_code_id}.json` | Required |
| ReasonCode | `remove` | `DELETE /reason_codes/{reason_code_id}.json` | Required |
| ReasonCode | `update` | `PUT /reason_codes/{reason_code_id}.json` | Required |
| ReferralCode | `load` | `GET /referral_codes/validate.json` | Required |
| SaleRepSetting | `list` | `GET /sellers/{seller_id}/sales_commission_settings.json` | Required |
| SalesCommission | `list` | `GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json` | Required |
| Segment | `create` | `POST /components/{component_id}/price_points/{price_point_id}/segments.json` | Required |
| Segment | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` | Required |
| SignupProformaPreview | `create` | `POST /subscriptions/proforma_invoices/preview.json` | Required |
| Site | `create` | `POST /sites/clear_data.json` | Required |
| Site | `list` | `GET /chargify_js_keys.json` | Required |
| Site | `load` | `GET /site.json` | Required |
| Subscription | `create` | `POST /subscriptions/{subscription_id}/purge.json` | Required |
| Subscription | `create` | `POST /subscriptions/{subscription_id}/add_coupon.json` | Required |
| Subscription | `create` | `POST /subscriptions/{subscription_id}/cancel_dunning.json` | Required |
| Subscription | `create` | `POST /subscriptions/{subscription_id}/prepaid_configurations.json` | Required |
| Subscription | `create` | `POST /subscriptions.json` | Required |
| Subscription | `create` | `POST /subscriptions/preview.json` | Required |
| Subscription | `list` | `GET /subscriptions.json` | Required |
| Subscription | `list` | `GET /api_exports/subscriptions/{batch_id}/rows.json` | Required |
| Subscription | `list` | `GET /customers/{customer_id}/subscriptions.json` | Required |
| Subscription | `load` | `GET /subscriptions/{subscription_id}.json` | Required |
| Subscription | `load` | `GET /subscriptions/lookup.json` | Required |
| Subscription | `remove` | `DELETE /subscriptions/{subscription_id}/remove_coupon.json` | Required |
| Subscription | `update` | `PUT /subscriptions/{subscription_id}/activate.json` | Required |
| Subscription | `update` | `PUT /subscriptions/{subscription_id}/override.json` | Required |
| Subscription | `update` | `PUT /subscriptions/{subscription_id}.json` | Required |
| SubscriptionComponent | `create` | `POST /events/{api_handle}.json` | Required |
| SubscriptionComponent | `create` | `POST /events/{api_handle}/bulk.json` | Required |
| SubscriptionComponent | `create` | `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json` | Required |
| SubscriptionComponent | `create` | `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json` | Required |
| SubscriptionComponent | `create` | `POST /subscriptions/{subscription_id}/components/{component_id}/allocations.json` | Required |
| SubscriptionComponent | `create` | `POST /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` | Required |
| SubscriptionComponent | `create` | `POST /subscriptions/{subscription_id}/price_points.json` | Required |
| SubscriptionComponent | `create` | `POST /subscriptions/{subscription_id}/allocations/preview.json` | Required |
| SubscriptionComponent | `create` | `POST /subscriptions/{subscription_id}/price_points/reset.json` | Required |
| SubscriptionComponent | `list` | `GET /subscriptions_components.json` | Required |
| SubscriptionComponent | `list` | `GET /subscriptions/{subscription_id}/components.json` | Required |
| SubscriptionComponent | `load` | `GET /subscriptions/{subscription_id}/components/{component_id}.json` | Required |
| SubscriptionComponent | `remove` | `DELETE /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` | Required |
| SubscriptionComponent | `update` | `PUT /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` | Required |
| SubscriptionGroup | `create` | `POST /subscriptions/{subscription_id}/group.json` | Required |
| SubscriptionGroup | `create` | `POST /subscription_groups.json` | Required |
| SubscriptionGroup | `list` | `GET /subscription_groups.json` | Required |
| SubscriptionGroup | `list` | `GET /subscription_groups/{uid}.json` | Required |
| SubscriptionGroup | `list` | `GET /subscription_groups/lookup.json` | Required |
| SubscriptionGroup | `remove` | `DELETE /subscriptions/{subscription_id}/group.json` | Required |
| SubscriptionGroup | `remove` | `DELETE /subscription_groups/{uid}.json` | Required |
| SubscriptionGroup | `update` | `PUT /subscription_groups/{uid}.json` | Required |
| SubscriptionGroupInvoiceAccount | `create` | `POST /subscription_groups/{uid}/prepayments.json` | Required |
| SubscriptionGroupInvoiceAccount | `create` | `POST /subscription_groups/{uid}/service_credit_deductions.json` | Required |
| SubscriptionGroupInvoiceAccount | `create` | `POST /subscription_groups/{uid}/service_credits.json` | Required |
| SubscriptionGroupInvoiceAccount | `list` | `GET /subscription_groups/{uid}/prepayments.json` | Required |
| SubscriptionGroupSignup | `create` | `POST /subscription_groups/signup.json` | Required |
| SubscriptionGroupStatus | `create` | `POST /subscription_groups/{uid}/cancel.json` | Required |
| SubscriptionGroupStatus | `create` | `POST /subscription_groups/{uid}/delayed_cancel.json` | Required |
| SubscriptionGroupStatus | `create` | `POST /subscription_groups/{uid}/reactivate.json` | Required |
| SubscriptionGroupStatus | `remove` | `DELETE /subscription_groups/{uid}/delayed_cancel.json` | Required |
| SubscriptionInvoiceAccount | `create` | `POST /subscriptions/{subscription_id}/prepayments.json` | Required |
| SubscriptionInvoiceAccount | `create` | `POST /subscriptions/{subscription_id}/service_credit_deductions.json` | Required |
| SubscriptionInvoiceAccount | `create` | `POST /subscriptions/{subscription_id}/service_credits.json` | Required |
| SubscriptionInvoiceAccount | `list` | `GET /subscriptions/{subscription_id}/service_credits/list.json` | Required |
| SubscriptionInvoiceAccount | `list` | `GET /subscriptions/{subscription_id}/prepayments.json` | Required |
| SubscriptionMrr | `list` | `GET /subscriptions_mrr.json` | Required |
| SubscriptionNote | `create` | `POST /subscriptions/{subscription_id}/notes.json` | Required |
| SubscriptionNote | `list` | `GET /subscriptions/{subscription_id}/notes.json` | Required |
| SubscriptionNote | `load` | `GET /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| SubscriptionNote | `remove` | `DELETE /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| SubscriptionNote | `update` | `PUT /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| SubscriptionProduct | `create` | `POST /subscriptions/{subscription_id}/migrations.json` | Required |
| SubscriptionProduct | `create` | `POST /subscriptions/{subscription_id}/migrations/preview.json` | Required |
| SubscriptionRenewal | `create` | `POST /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json` | Required |
| SubscriptionRenewal | `create` | `POST /subscriptions/{subscription_id}/scheduled_renewals.json` | Required |
| SubscriptionRenewal | `list` | `GET /subscriptions/{subscription_id}/scheduled_renewals.json` | Required |
| SubscriptionRenewal | `load` | `GET /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` | Required |
| SubscriptionRenewal | `remove` | `DELETE /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json` | Required |
| SubscriptionRenewal | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json` | Required |
| SubscriptionStatus | `create` | `POST /subscriptions/{subscription_id}/resume.json` | Required |
| SubscriptionStatus | `create` | `POST /subscriptions/{subscription_id}/hold.json` | Required |
| SubscriptionStatus | `create` | `POST /subscriptions/{subscription_id}/renewals/preview.json` | Required |
| SubscriptionStatus | `remove` | `DELETE /subscriptions/{subscription_id}.json` | Required |
| SubscriptionStatus | `remove` | `DELETE /subscriptions/{subscription_id}/delayed_cancel.json` | Required |
| SubscriptionStatus | `update` | `PUT /subscriptions/{subscription_id}/hold.json` | Required |
| SubscriptionStatus | `update` | `PUT /subscriptions/{subscription_id}/reactivate.json` | Required |
| SubscriptionStatus | `update` | `PUT /subscriptions/{subscription_id}/retry.json` | Required |
| Usage | `list` | `GET /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` | Required |
| Webhook | `create` | `POST /endpoints.json` | Required |
| Webhook | `create` | `POST /webhooks/replay.json` | Required |
| Webhook | `list` | `GET /webhooks.json` | Required |
| Webhook | `update` | `PUT /webhooks/settings.json` | Required |

## Connect to the API

- Default Advanced Billing environment hosted in US. Valid for the majority of our customers.: `https://{site}.chargify.com`
- Default Advanced Billing environment hosted in US. Valid for the majority of our customers.: `https://events.chargify.com/{site}`
- Advanced Billing environment hosted in EU. Use only when you requested EU hosting for your AB account.: `https://{site}.ebilling.maxio.com`
- Advanced Billing environment hosted in EU. Use only when you requested EU hosting for your AB account.: `https://events.chargify.com/{site}`

The default credential is sent in the `Authorization` header with the `Basic` prefix.

The `username` is a Maxio Chargify API key. The `password` is `x`.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `maxio-advanced-billing_list`: List records for an entity. Supported entities: `allocation`, `component`, `component_price_point`, `coupon`, `coupon_usage`, `custom_field`, `customer`, `endpoint`, `entitlement`, `event`, `feature`, `invoice`, `list_sale_rep_item`, `list_segment`, `offer`, `payment_profile`, `product`, `product_family`, `product_price_point`, `proforma_invoice`, `reason_code`, `sale_rep_setting`, `sales_commission`, `site`, `subscription`, `subscription_component`, `subscription_group`, `subscription_group_invoice_account`, `subscription_invoice_account`, `subscription_mrr`, `subscription_note`, `subscription_renewal`, `usage`, `webhook`.
- `maxio-advanced-billing_load`: Load one record for an entity. Supported entities: `account_balance`, `batch_job`, `billing_portal`, `component`, `component_price_point_currency_overage`, `coupon`, `customer`, `event`, `feature_catalog_item`, `feature_template`, `insight`, `offer`, `one_time_token`, `payment_profile`, `product`, `product_family`, `product_price_point`, `reason_code`, `referral_code`, `site`, `subscription`, `subscription_component`, `subscription_note`, `subscription_renewal`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `debug`: Request/response capture ring buffer for debugging
- `idempotency`: Idempotency keys for safe retries of mutating operations
- `metrics`: Statistics capture: per-operation counters and latency
- `paging`: Pagination signals for list operations
- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

