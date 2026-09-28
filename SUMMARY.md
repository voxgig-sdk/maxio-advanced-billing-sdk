# Maxio Advanced Billing

Maxio Advanced Billing (formerly Chargify) provides an HTTP-based API that conforms to the principles of REST. One of the many reasons to use Advanced Billing is the immense feature set and [client libraries](page:development-tools/client-libraries). The Maxio API returns JSON responses as the primary and recommended format, but XML is also provided as a backwards compatible option for merchants who require it. ## Steps to make your first Maxio Advanced Billing API call 1. [Sign-up](https://app.chargify.com/signup/maxio-billing-sandbox) or [log-in](https://app.chargify.com/login.html) to your [test site](https://maxio.zendesk.com/hc/en-us/articles/24250712113165-Testing-Overview) account. 2. [Setup authentication](https://maxio.zendesk.com/hc/en-us/articles/24294819360525-API-Keys) credentials. 3. [Submit an API request and verify the response](page:development-tools/client-libraries#make-your-first-maxio-advanced-billing-api-request). 5. Test the Advanced Billing [integrations](https://www.maxio.com/integrations). Next, you can explore [authentication methods](page:introduction/authentication), [basic concepts](page:introduction/basic-concepts/connected-sites) for interacting with Advanced Billing via the API, and the entire set of [application-based documentation](https://docs.maxio.com/hc/en-us) to aid in your discovery of the product. ### Request Example The following example uses the curl command-line tool to make an API request. **Request** curl -u &lt;api_key&gt;:x -H Accept:application/json -H Content-Type:application/json https://acme.chargify.com/subscriptions.json

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 57 entities and 268 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AccountBalance](docs/api/account_balance.html)

Results: OK.

SDK operations: `load`.

### [Allocation](docs/api/allocation.html)

Results: OK.

SDK operations: `create`, `list`.

### [BatchJob](docs/api/batch_job.html)

Results: Created; OK.

SDK operations: `create`, `load`.

### [BillingPortal](docs/api/billing_portal.html)

Results: OK.

SDK operations: `create`, `load`, `remove`.

### [Component](docs/api/component.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [ComponentFeature](docs/api/component_feature.html)

Results: No Content.

SDK operations: `remove`.

### [ComponentPricePoint](docs/api/component_price_point.html)

Results: Created; OK.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `archived_at`: Timestamp indicating when this component was archived
- `created_at`: Timestamp indicating when this component was created
- `currency_prices`: An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. The clone endpoint always returns currency prices if they are present.
- `default`: Note: Refer to type attribute instead.
- `expiration_interval`: Applicable only to prepaid usage components where rollover_prepaid_remainder is true. The number of `expiration_interval_unit`s after which rollover amounts should expire.

### [ComponentPricePointCurrencyOverage](docs/api/component_price_point_currency_overage.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `currency_overage_prices`: Applicable only to prepaid usage components. An array of currency pricing data for overage prices.
- `currency_prices`: An array of currency pricing data is available when multiple currencies are defined for the site. It varies based on the use_site_exchange_rate setting for the price point. This parameter is present only in the response of read endpoints, after including the appropriate query parameter. The clone endpoint always returns currency prices if they are present.
- `default`: Note: Refer to type attribute instead.
- `expiration_interval`: Applicable only to prepaid usage components where rollover_prepaid_remainder is true. The number of `expiration_interval_unit`s after which rollover amounts should expire.
- `interval`: The numerical interval. for example, an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled.

### [Coupon](docs/api/coupon.html)

Results: OK; Created.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allow_negative_balance`: If set to true, discount is not limited (credits will carry forward to next billing).
- `currency_prices`: Returned in read, find, and list endpoints if the query parameter is provided.
- `end_date`: After the given time, this coupon code will be invalid for new signups. Recurring discounts started before this date will continue to recur even after this date.
- `stackable`: A stackable coupon can be combined with other coupons on a Subscription.

### [CouponCurrency](docs/api/coupon_currency.html)

Results: OK.

SDK operations: `update`.

### [CouponSubcode](docs/api/coupon_subcode.html)

Results: OK.

SDK operations: `update`.

### [CouponUsage](docs/api/coupon_usage.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: The Chargify id of the product
- `name`: Name of the product
- `revenue`: Total revenue of all subscriptions that have received a discount from this coupon.
- `revenue_in_cents`: Total revenue of all subscriptions that have received a discount from this coupon.
- `savings`: Dollar amount of customer savings as a result of the coupon.

### [CustomField](docs/api/custom_field.html)

Results: OK.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `data_count`: The amount of subscriptions this metafield has been applied to in Advanced Billing.

### [Customer](docs/api/customer.html)

Results: OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `address`: The customer’s shipping street address (for example, “123 Main St.”)
- `address_2`: Second line of the customer’s shipping address for example, “Apt. 100”
- `branding_theme_id`: The ID of the Branding Theme assigned to this customer as the customer&#39;s default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme. Available only when Branding Themes are enabled for the site.
- `cc_emails`: “A comma-separated list of emails that should be cc’d on all customer communications (for example, “joe@example.com, sue@example.com”)”
- `city`: The customer’s shipping address city (for example, “Boston”)

### [DelayedCancel](docs/api/delayed_cancel.html)

Results: OK.

SDK operations: `create`.

### [Endpoint](docs/api/endpoint.html)

Results: OK.

SDK operations: `list`, `update`.

### [Entitlement](docs/api/entitlement.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `status`: The subscription&#39;s current state, for example `active`, `trialing`, `canceled`.

### [Event](docs/api/event.html)

Results: OK.

SDK operations: `list`, `load`.

### [EventsBasedBillingSegment](docs/api/events_based_billing_segment.html)

Results: No Content.

SDK operations: `remove`.

### [Feature](docs/api/feature.html)

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `archived_at`: The date and time the feature template was archived, or `null` if it is active.
- `archived_count`: Number of archived feature templates matching the filters. Returned as `0` unless the active result set is empty or `status=archived` was requested.
- `feature_key`: The `key` of the parent feature template.
- `feature_name`: The `name` of the parent feature template.
- `feature_template_id`: The id of the feature template this item was created from.

### [FeatureCatalogItem](docs/api/feature_catalog_item.html)

Results: OK.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `feature_key`: The `key` of the parent feature template.
- `feature_name`: The `name` of the parent feature template.
- `feature_template_id`: The id of the feature template this item was created from.
- `periodicity_interval`: Set when `feature_kind` is `usage_limit`; `null` otherwise.
- `price_point_id`: Set together with `price_point_type` for price-point-specific overrides.

### [FeatureTemplate](docs/api/feature_template.html)

Results: OK; No Content.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `archived_at`: The date and time the feature template was archived, or `null` if it is active.
- `default_periodicity_interval`: For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items. Always `null` for other kinds.
- `default_value`: A default value used to pre-populate new feature catalog items created from this template.
- `id`: The Advanced Billing id of the feature template.
- `key`: A unique, lowercase, underscore-separated identifier for the feature. Immutable once set.

### [Insight](docs/api/insight.html)

Results: OK.

SDK operations: `load`.

### [Invoice](docs/api/invoice.html)

Results: OK; No Content; Created.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `applied_amount`: Dollar amount of the paid invoice.
- `applied_date`: Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due. This field is the date the credit note became fully applied to invoices. If the credit note has been partially applied, this field will not have a value until it has been fully applied. The format is `&quot;YYYY-MM-DD&quot;`.
- `branding_theme_id`: The ID of the Branding Theme associated with this invoice. This value represents the Branding Theme used for invoice theming, such as themed invoice rendering. Available only when Branding Themes are enabled for the site.
- `consolidation_level`: Consolidation level of the invoice, which is applicable to invoice consolidation. It will hold one of the following values: * &quot;none&quot;: A normal invoice with no consolidation. * &quot;child&quot;: An invoice segment which has been combined into a consolidated invoice. * &quot;parent&quot;: A consolidated invoice, whose contents are composed of invoice segments. &quot;Parent&quot; invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments. See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation).
- `credit_amount`: The amount of credit (from credit notes) applied to this invoice. Credits offset the amount due from the customer.

### [ListProformaInvoice](docs/api/list_proforma_invoice.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `discount_amount`: The approximate discount applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total discount among many lines. Several lines may have been summed prior to applying the discount to arrive at `discount_amount` for the invoice - backing that out to the discount on a single line may introduce rounding or precision errors.
- `subtotal_amount`: The line subtotal, generally calculated as `quantity * unit_price`. This is the canonical amount of record for the line - when rounding differences are in play, `subtotal_amount` takes precedence over the value derived from `quantity * unit_price` (which may not have the proper precision to exactly equal this amount).
- `tax_amount`: The approximate tax applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total tax among many lines. Several lines may have been summed prior to applying the tax rate to arrive at `tax_amount` for the invoice - backing that out to the tax on a single line may introduce rounding or precision errors.
- `total_amount`: The non-canonical total amount for the line. `subtotal_amount` is the canonical amount for a line. The invoice `total_amount` is derived from the sum of the line `subtotal_amount`s and discounts or taxes applied thereafter. Therefore, due to rounding or precision errors, the sum of line `total_amount`s may not equal the invoice `total_amount`.
- `uid`: Unique identifier for the line item. Useful when cross-referencing the line against individual discounts in the `discounts` or `taxes` lists.

### [ListSaleRepItem](docs/api/list_sale_rep_item.html)

Results: OK.

SDK operations: `list`.

### [ListSegment](docs/api/list_segment.html)

Results: Created; OK.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `segments`: The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key.

### [Offer](docs/api/offer.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `update`.

### [OneTimeToken](docs/api/one_time_token.html)

Results: OK.

SDK operations: `load`.

### [PaymentProfile](docs/api/payment_profile.html)

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: The Chargify-assigned ID of the Apple Pay payment profile.

### [Prepayment](docs/api/prepayment.html)

Results: Created.

SDK operations: `create`.

### [Product](docs/api/product.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [ProductFamily](docs/api/product_family.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`.

### [ProductFeature](docs/api/product_feature.html)

Results: No Content.

SDK operations: `remove`.

### [ProductPricePoint](docs/api/product_price_point.html)

Results: OK; Created.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: The id of the signup page (public_signup_pages only)

### [ProformaInvoice](docs/api/proforma_invoice.html)

Results: Created; OK.

SDK operations: `create`, `list`.

Key fields to recognise:

- `discount_amount`: The approximate discount applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total discount among many lines. Several lines may have been summed prior to applying the discount to arrive at `discount_amount` for the invoice - backing that out to the discount on a single line may introduce rounding or precision errors.
- `subtotal_amount`: The line subtotal, generally calculated as `quantity * unit_price`. This is the canonical amount of record for the line - when rounding differences are in play, `subtotal_amount` takes precedence over the value derived from `quantity * unit_price` (which may not have the proper precision to exactly equal this amount).
- `tax_amount`: The approximate tax applied to just this line. The value is approximated in cases where rounding errors make it difficult to apportion exactly a total tax among many lines. Several lines may have been summed prior to applying the tax rate to arrive at `tax_amount` for the invoice - backing that out to the tax on a single line may introduce rounding or precision errors.
- `total_amount`: The non-canonical total amount for the line. `subtotal_amount` is the canonical amount for a line. The invoice `total_amount` is derived from the sum of the line `subtotal_amount`s and discounts or taxes applied thereafter. Therefore, due to rounding or precision errors, the sum of line `total_amount`s may not equal the invoice `total_amount`.
- `uid`: Unique identifier for the line item. Useful when cross-referencing the line against individual discounts in the `discounts` or `taxes` lists.

### [ReasonCode](docs/api/reason_code.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [ReferralCode](docs/api/referral_code.html)

Results: OK.

SDK operations: `load`.

### [SaleRepSetting](docs/api/sale_rep_setting.html)

Results: OK.

SDK operations: `list`.

### [SalesCommission](docs/api/sales_commission.html)

Results: OK.

SDK operations: `list`.

### [Segment](docs/api/segment.html)

Results: Created; OK.

SDK operations: `create`, `update`.

### [SignupProformaPreview](docs/api/signup_proforma_preview.html)

Results: Created.

SDK operations: `create`.

### [Site](docs/api/site.html)

Results: OK.

SDK operations: `create`, `list`, `load`.

### [Subscription](docs/api/subscription.html)

Results: OK; Created; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `activated_at`: Timestamp for when the subscription began (that is, when it came out of trial, or when it began in the case of no trial)
- `automatically_resume_at`: The date the subscription is scheduled to automatically resume from the on_hold state.
- `balance_in_cents`: Gives the current outstanding subscription balance in the number of cents.
- `cancel_at_end_of_period`: Whether or not the subscription will (or has) canceled at the end of the period.
- `canceled_at`: The timestamp of the most recent cancellation

### [SubscriptionComponent](docs/api/subscription_component.html)

Results: Created; OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `allocated_quantity`: For Quantity-based components: The current allocation for the component on the given subscription. For On/Off components: Use 1 for on. Use 0 for off.
- `archived_at`: Timestamp indicating when this product was archived
- `component_handle`: The handle of the component. This references a component that you have created in your Product setup.
- `component_id`: The integer component ID for the allocation. This references a component that you have created in your Product setup.
- `created_at`: Timestamp indicating when this allocation was created

### [SubscriptionGroup](docs/api/subscription_group.html)

Results: OK; No Content.

SDK operations: `create`, `list`, `remove`, `update`.

### [SubscriptionGroupInvoiceAccount](docs/api/subscription_group_invoice_account.html)

Results: OK; Created.

SDK operations: `create`, `list`.

### [SubscriptionGroupSignup](docs/api/subscription_group_signup.html)

Results: Created.

SDK operations: `create`.

### [SubscriptionGroupStatus](docs/api/subscription_group_status.html)

Results: OK.

SDK operations: `create`, `remove`.

### [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html)

Results: Created; OK.

SDK operations: `create`, `list`.

### [SubscriptionMrr](docs/api/subscription_mrr.html)

Results: OK.

SDK operations: `list`.

### [SubscriptionNote](docs/api/subscription_note.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [SubscriptionProduct](docs/api/subscription_product.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `id`: The subscription unique id within Chargify.

### [SubscriptionRenewal](docs/api/subscription_renewal.html)

Results: Created; OK; No Content.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: ID of the renewal.

### [SubscriptionStatus](docs/api/subscription_status.html)

Results: OK.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `id`: The subscription unique id within Chargify.

### [Usage](docs/api/usage.html)

Results: OK.

SDK operations: `list`.

### [Webhook](docs/api/webhook.html)

Results: OK.

SDK operations: `create`, `list`, `update`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AccountBalance](docs/api/account_balance.html) | `load` | `GET /subscriptions/{subscription_id}/account_balances.json` | Required |
| [Allocation](docs/api/allocation.html) | `create` | `POST /subscriptions/{subscription_id}/allocations.json` | Required |
| [Allocation](docs/api/allocation.html) | `list` | `GET /subscriptions/{subscription_id}/components/{component_id}/allocations.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `create` | `POST /api_exports/invoices.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `create` | `POST /api_exports/proforma_invoices.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `create` | `POST /api_exports/subscriptions.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `load` | `GET /api_exports/invoices/{batch_id}.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `load` | `GET /api_exports/proforma_invoices/{batch_id}.json` | Required |
| [BatchJob](docs/api/batch_job.html) | `load` | `GET /api_exports/subscriptions/{batch_id}.json` | Required |
| [BillingPortal](docs/api/billing_portal.html) | `create` | `POST /portal/customers/{customer_id}/invitations/invite.json` | Required |
| [BillingPortal](docs/api/billing_portal.html) | `load` | `GET /portal/customers/{customer_id}/management_link.json` | Required |
| [BillingPortal](docs/api/billing_portal.html) | `remove` | `DELETE /portal/customers/{customer_id}/invitations/revoke.json` | Required |
| [Component](docs/api/component.html) | `create` | `POST /product_families/{product_family_id}/event_based_components.json` | Required |
| [Component](docs/api/component.html) | `create` | `POST /product_families/{product_family_id}/metered_components.json` | Required |
| [Component](docs/api/component.html) | `create` | `POST /product_families/{product_family_id}/on_off_components.json` | Required |
| [Component](docs/api/component.html) | `create` | `POST /product_families/{product_family_id}/prepaid_usage_components.json` | Required |
| [Component](docs/api/component.html) | `create` | `POST /product_families/{product_family_id}/quantity_based_components.json` | Required |
| [Component](docs/api/component.html) | `list` | `GET /product_families/{product_family_id}/components.json` | Required |
| [Component](docs/api/component.html) | `list` | `GET /components.json` | Required |
| [Component](docs/api/component.html) | `load` | `GET /product_families/{product_family_id}/components/{component_id}.json` | Required |
| [Component](docs/api/component.html) | `load` | `GET /components/lookup.json` | Required |
| [Component](docs/api/component.html) | `remove` | `DELETE /product_families/{product_family_id}/components/{component_id}.json` | Required |
| [Component](docs/api/component.html) | `update` | `PUT /product_families/{product_family_id}/components/{component_id}.json` | Required |
| [Component](docs/api/component.html) | `update` | `PUT /components/{component_id}.json` | Required |
| [ComponentFeature](docs/api/component_feature.html) | `remove` | `DELETE /components/{component_id}/features/{id}.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `create` | `POST /components/{component_id}/price_points/{price_point_id}/clone.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `create` | `POST /components/{component_id}/price_points/bulk.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `create` | `POST /components/{component_id}/price_points.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `create` | `POST /price_points/{price_point_id}/currency_prices.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `list` | `GET /components/{component_id}/price_points.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `list` | `GET /components_price_points.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `remove` | `DELETE /components/{component_id}/price_points/{price_point_id}.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `update` | `PUT /components/{component_id}/price_points/{price_point_id}.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/default.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/unarchive.json` | Required |
| [ComponentPricePoint](docs/api/component_price_point.html) | `update` | `PUT /price_points/{price_point_id}/currency_prices.json` | Required |
| [ComponentPricePointCurrencyOverage](docs/api/component_price_point_currency_overage.html) | `load` | `GET /components/{component_id}/price_points/{price_point_id}.json` | Required |
| [Coupon](docs/api/coupon.html) | `create` | `POST /coupons/{coupon_id}/codes.json` | Required |
| [Coupon](docs/api/coupon.html) | `create` | `POST /product_families/{product_family_id}/coupons.json` | Required |
| [Coupon](docs/api/coupon.html) | `list` | `GET /product_families/{product_family_id}/coupons.json` | Required |
| [Coupon](docs/api/coupon.html) | `list` | `GET /coupons.json` | Required |
| [Coupon](docs/api/coupon.html) | `list` | `GET /coupons/{coupon_id}/codes.json` | Required |
| [Coupon](docs/api/coupon.html) | `load` | `GET /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| [Coupon](docs/api/coupon.html) | `load` | `GET /coupons/find.json` | Required |
| [Coupon](docs/api/coupon.html) | `load` | `GET /coupons/validate.json` | Required |
| [Coupon](docs/api/coupon.html) | `remove` | `DELETE /coupons/{coupon_id}/codes/{subcode}.json` | Required |
| [Coupon](docs/api/coupon.html) | `remove` | `DELETE /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| [Coupon](docs/api/coupon.html) | `update` | `PUT /product_families/{product_family_id}/coupons/{coupon_id}.json` | Required |
| [CouponCurrency](docs/api/coupon_currency.html) | `update` | `PUT /coupons/{coupon_id}/currency_prices.json` | Required |
| [CouponSubcode](docs/api/coupon_subcode.html) | `update` | `PUT /coupons/{coupon_id}/codes.json` | Required |
| [CouponUsage](docs/api/coupon_usage.html) | `list` | `GET /product_families/{product_family_id}/coupons/{coupon_id}/usage.json` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /{resource_type}/{resource_id}/metadata.json` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /{resource_type}/metafields.json` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /{resource_type}/metadata.json` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /{resource_type}/metafields.json` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /{resource_type}/{resource_id}/metadata.json` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /{resource_type}/{resource_id}/metadata.json` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /{resource_type}/metafields.json` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /{resource_type}/{resource_id}/metadata.json` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /{resource_type}/metafields.json` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /portal/customers/{customer_id}/enable.json` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /customers.json` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /customers.json` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /customers/{id}.json` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /customers/lookup.json` | Required |
| [Customer](docs/api/customer.html) | `remove` | `DELETE /customers/{id}.json` | Required |
| [Customer](docs/api/customer.html) | `update` | `PUT /customers/{id}.json` | Required |
| [DelayedCancel](docs/api/delayed_cancel.html) | `create` | `POST /subscriptions/{subscription_id}/delayed_cancel.json` | Required |
| [Endpoint](docs/api/endpoint.html) | `list` | `GET /endpoints.json` | Required |
| [Endpoint](docs/api/endpoint.html) | `update` | `PUT /endpoints/{endpoint_id}.json` | Required |
| [Entitlement](docs/api/entitlement.html) | `list` | `GET /subscriptions/{subscription_id}/entitlements.json` | Required |
| [Event](docs/api/event.html) | `list` | `GET /events.json` | Required |
| [Event](docs/api/event.html) | `list` | `GET /subscriptions/{subscription_id}/events.json` | Required |
| [Event](docs/api/event.html) | `load` | `GET /events/count.json` | Required |
| [EventsBasedBillingSegment](docs/api/events_based_billing_segment.html) | `remove` | `DELETE /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` | Required |
| [Feature](docs/api/feature.html) | `create` | `POST /components/{component_id}/features.json` | Required |
| [Feature](docs/api/feature.html) | `create` | `POST /products/{product_id}/features.json` | Required |
| [Feature](docs/api/feature.html) | `create` | `POST /features.json` | Required |
| [Feature](docs/api/feature.html) | `list` | `GET /features.json` | Required |
| [Feature](docs/api/feature.html) | `list` | `GET /components/{component_id}/features.json` | Required |
| [Feature](docs/api/feature.html) | `list` | `GET /products/{product_id}/features.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `create` | `POST /components/{component_id}/features/{id}/restore.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `create` | `POST /products/{product_id}/features/{id}/restore.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `load` | `GET /components/{component_id}/features/{id}.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `load` | `GET /products/{product_id}/features/{id}.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `update` | `PUT /components/{component_id}/features/{id}.json` | Required |
| [FeatureCatalogItem](docs/api/feature_catalog_item.html) | `update` | `PUT /products/{product_id}/features/{id}.json` | Required |
| [FeatureTemplate](docs/api/feature_template.html) | `create` | `POST /features/{id}/restore.json` | Required |
| [FeatureTemplate](docs/api/feature_template.html) | `load` | `GET /features/{id}.json` | Required |
| [FeatureTemplate](docs/api/feature_template.html) | `remove` | `DELETE /features/{id}.json` | Required |
| [FeatureTemplate](docs/api/feature_template.html) | `update` | `PUT /features/{id}.json` | Required |
| [Insight](docs/api/insight.html) | `load` | `GET /mrr_movements.json` | Required |
| [Insight](docs/api/insight.html) | `load` | `GET /mrr.json` | Required |
| [Insight](docs/api/insight.html) | `load` | `GET /stats.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/customer_information/preview.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/deliveries.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/issue.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/payments.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/refunds.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/reopen.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/{uid}/void.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /subscriptions/{subscription_id}/advance_invoice/issue.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /subscriptions/{subscription_id}/advance_invoice/void.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /subscriptions/{subscription_id}/invoices.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /subscriptions/{subscription_id}/payments.json` | Required |
| [Invoice](docs/api/invoice.html) | `create` | `POST /invoices/payments.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /invoices.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /credit_notes.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /invoices/events.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /invoices/{invoice_uid}/segments.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /api_exports/invoices/{batch_id}/rows.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /subscriptions/{subscription_id}/advance_invoice.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /credit_notes/{uid}.json` | Required |
| [Invoice](docs/api/invoice.html) | `list` | `GET /invoices/{uid}.json` | Required |
| [Invoice](docs/api/invoice.html) | `remove` | `DELETE /subscriptions/{subscription_id}/invoices/{uid}.json` | Required |
| [Invoice](docs/api/invoice.html) | `update` | `PUT /subscriptions/{subscription_id}/invoices/{uid}.json` | Required |
| [Invoice](docs/api/invoice.html) | `update` | `PUT /invoices/{uid}/customer_information.json` | Required |
| [ListProformaInvoice](docs/api/list_proforma_invoice.html) | `list` | `GET /subscriptions/{subscription_id}/proforma_invoices.json` | Required |
| [ListProformaInvoice](docs/api/list_proforma_invoice.html) | `list` | `GET /subscription_groups/{uid}/proforma_invoices.json` | Required |
| [ListSaleRepItem](docs/api/list_sale_rep_item.html) | `list` | `GET /sellers/{seller_id}/sales_reps.json` | Required |
| [ListSegment](docs/api/list_segment.html) | `create` | `POST /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` | Required |
| [ListSegment](docs/api/list_segment.html) | `list` | `GET /components/{component_id}/price_points/{price_point_id}/segments.json` | Required |
| [ListSegment](docs/api/list_segment.html) | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/segments/bulk.json` | Required |
| [Offer](docs/api/offer.html) | `create` | `POST /offers.json` | Required |
| [Offer](docs/api/offer.html) | `list` | `GET /offers.json` | Required |
| [Offer](docs/api/offer.html) | `load` | `GET /offers/{offer_id}.json` | Required |
| [Offer](docs/api/offer.html) | `update` | `PUT /offers/{offer_id}/archive.json` | Required |
| [Offer](docs/api/offer.html) | `update` | `PUT /offers/{offer_id}/unarchive.json` | Required |
| [OneTimeToken](docs/api/one_time_token.html) | `load` | `GET /one_time_tokens/{chargify_token}.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `create` | `POST /subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `create` | `POST /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `create` | `POST /subscriptions/{subscription_id}/request_payment_profiles_update.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `create` | `POST /payment_profiles.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `list` | `GET /payment_profiles.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `load` | `GET /payment_profiles/{payment_profile_id}.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `remove` | `DELETE /subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `remove` | `DELETE /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `remove` | `DELETE /payment_profiles/{payment_profile_id}.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `update` | `PUT /bank_accounts/{bank_account_id}/verification.json` | Required |
| [PaymentProfile](docs/api/payment_profile.html) | `update` | `PUT /payment_profiles/{payment_profile_id}.json` | Required |
| [Prepayment](docs/api/prepayment.html) | `create` | `POST /subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json` | Required |
| [Product](docs/api/product.html) | `create` | `POST /product_families/{product_family_id}/products.json` | Required |
| [Product](docs/api/product.html) | `list` | `GET /products.json` | Required |
| [Product](docs/api/product.html) | `list` | `GET /product_families/{product_family_id}/products.json` | Required |
| [Product](docs/api/product.html) | `load` | `GET /products/{product_id}.json` | Required |
| [Product](docs/api/product.html) | `load` | `GET /products/handle/{api_handle}.json` | Required |
| [Product](docs/api/product.html) | `remove` | `DELETE /products/{product_id}.json` | Required |
| [Product](docs/api/product.html) | `update` | `PUT /products/{product_id}.json` | Required |
| [ProductFamily](docs/api/product_family.html) | `create` | `POST /product_families.json` | Required |
| [ProductFamily](docs/api/product_family.html) | `list` | `GET /product_families.json` | Required |
| [ProductFamily](docs/api/product_family.html) | `load` | `GET /product_families/{id}.json` | Required |
| [ProductFeature](docs/api/product_feature.html) | `remove` | `DELETE /products/{product_id}/features/{id}.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `create` | `POST /product_price_points/{product_price_point_id}/currency_prices.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `create` | `POST /products/{product_id}/price_points.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `create` | `POST /products/{product_id}/price_points/bulk.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `list` | `GET /products/{product_id}/price_points.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `list` | `GET /products_price_points.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `load` | `GET /products/{product_id}/price_points/{price_point_id}.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `patch` | `PATCH /products/{product_id}/price_points/{price_point_id}/default.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `patch` | `PATCH /products/{product_id}/price_points/{price_point_id}/unarchive.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `remove` | `DELETE /products/{product_id}/price_points/{price_point_id}.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `update` | `PUT /products/{product_id}/price_points/{price_point_id}.json` | Required |
| [ProductPricePoint](docs/api/product_price_point.html) | `update` | `PUT /product_price_points/{product_price_point_id}/currency_prices.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /proforma_invoices/{proforma_invoice_uid}/deliveries.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /proforma_invoices/{proforma_invoice_uid}/void.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /subscription_groups/{uid}/proforma_invoices.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /subscriptions/{subscription_id}/proforma_invoices.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /subscriptions/{subscription_id}/proforma_invoices/preview.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `create` | `POST /subscriptions/proforma_invoices.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `list` | `GET /api_exports/proforma_invoices/{batch_id}/rows.json` | Required |
| [ProformaInvoice](docs/api/proforma_invoice.html) | `list` | `GET /proforma_invoices/{proforma_invoice_uid}.json` | Required |
| [ReasonCode](docs/api/reason_code.html) | `create` | `POST /reason_codes.json` | Required |
| [ReasonCode](docs/api/reason_code.html) | `list` | `GET /reason_codes.json` | Required |
| [ReasonCode](docs/api/reason_code.html) | `load` | `GET /reason_codes/{reason_code_id}.json` | Required |
| [ReasonCode](docs/api/reason_code.html) | `remove` | `DELETE /reason_codes/{reason_code_id}.json` | Required |
| [ReasonCode](docs/api/reason_code.html) | `update` | `PUT /reason_codes/{reason_code_id}.json` | Required |
| [ReferralCode](docs/api/referral_code.html) | `load` | `GET /referral_codes/validate.json` | Required |
| [SaleRepSetting](docs/api/sale_rep_setting.html) | `list` | `GET /sellers/{seller_id}/sales_commission_settings.json` | Required |
| [SalesCommission](docs/api/sales_commission.html) | `list` | `GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json` | Required |
| [Segment](docs/api/segment.html) | `create` | `POST /components/{component_id}/price_points/{price_point_id}/segments.json` | Required |
| [Segment](docs/api/segment.html) | `update` | `PUT /components/{component_id}/price_points/{price_point_id}/segments/{id}.json` | Required |
| [SignupProformaPreview](docs/api/signup_proforma_preview.html) | `create` | `POST /subscriptions/proforma_invoices/preview.json` | Required |
| [Site](docs/api/site.html) | `create` | `POST /sites/clear_data.json` | Required |
| [Site](docs/api/site.html) | `list` | `GET /chargify_js_keys.json` | Required |
| [Site](docs/api/site.html) | `load` | `GET /site.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions/{subscription_id}/purge.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions/{subscription_id}/add_coupon.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions/{subscription_id}/cancel_dunning.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions/{subscription_id}/prepaid_configurations.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions.json` | Required |
| [Subscription](docs/api/subscription.html) | `create` | `POST /subscriptions/preview.json` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /subscriptions.json` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /api_exports/subscriptions/{batch_id}/rows.json` | Required |
| [Subscription](docs/api/subscription.html) | `list` | `GET /customers/{customer_id}/subscriptions.json` | Required |
| [Subscription](docs/api/subscription.html) | `load` | `GET /subscriptions/{subscription_id}.json` | Required |
| [Subscription](docs/api/subscription.html) | `load` | `GET /subscriptions/lookup.json` | Required |
| [Subscription](docs/api/subscription.html) | `remove` | `DELETE /subscriptions/{subscription_id}/remove_coupon.json` | Required |
| [Subscription](docs/api/subscription.html) | `update` | `PUT /subscriptions/{subscription_id}/activate.json` | Required |
| [Subscription](docs/api/subscription.html) | `update` | `PUT /subscriptions/{subscription_id}/override.json` | Required |
| [Subscription](docs/api/subscription.html) | `update` | `PUT /subscriptions/{subscription_id}.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /events/{api_handle}.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /events/{api_handle}/bulk.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /subscriptions/{subscription_id}/components/{component_id}/allocations.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /subscriptions/{subscription_id}/price_points.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /subscriptions/{subscription_id}/allocations/preview.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `create` | `POST /subscriptions/{subscription_id}/price_points/reset.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `list` | `GET /subscriptions_components.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `list` | `GET /subscriptions/{subscription_id}/components.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `load` | `GET /subscriptions/{subscription_id}/components/{component_id}.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `remove` | `DELETE /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` | Required |
| [SubscriptionComponent](docs/api/subscription_component.html) | `update` | `PUT /subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `create` | `POST /subscriptions/{subscription_id}/group.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `create` | `POST /subscription_groups.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `list` | `GET /subscription_groups.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `list` | `GET /subscription_groups/{uid}.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `list` | `GET /subscription_groups/lookup.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `remove` | `DELETE /subscriptions/{subscription_id}/group.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `remove` | `DELETE /subscription_groups/{uid}.json` | Required |
| [SubscriptionGroup](docs/api/subscription_group.html) | `update` | `PUT /subscription_groups/{uid}.json` | Required |
| [SubscriptionGroupInvoiceAccount](docs/api/subscription_group_invoice_account.html) | `create` | `POST /subscription_groups/{uid}/prepayments.json` | Required |
| [SubscriptionGroupInvoiceAccount](docs/api/subscription_group_invoice_account.html) | `create` | `POST /subscription_groups/{uid}/service_credit_deductions.json` | Required |
| [SubscriptionGroupInvoiceAccount](docs/api/subscription_group_invoice_account.html) | `create` | `POST /subscription_groups/{uid}/service_credits.json` | Required |
| [SubscriptionGroupInvoiceAccount](docs/api/subscription_group_invoice_account.html) | `list` | `GET /subscription_groups/{uid}/prepayments.json` | Required |
| [SubscriptionGroupSignup](docs/api/subscription_group_signup.html) | `create` | `POST /subscription_groups/signup.json` | Required |
| [SubscriptionGroupStatus](docs/api/subscription_group_status.html) | `create` | `POST /subscription_groups/{uid}/cancel.json` | Required |
| [SubscriptionGroupStatus](docs/api/subscription_group_status.html) | `create` | `POST /subscription_groups/{uid}/delayed_cancel.json` | Required |
| [SubscriptionGroupStatus](docs/api/subscription_group_status.html) | `create` | `POST /subscription_groups/{uid}/reactivate.json` | Required |
| [SubscriptionGroupStatus](docs/api/subscription_group_status.html) | `remove` | `DELETE /subscription_groups/{uid}/delayed_cancel.json` | Required |
| [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html) | `create` | `POST /subscriptions/{subscription_id}/prepayments.json` | Required |
| [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html) | `create` | `POST /subscriptions/{subscription_id}/service_credit_deductions.json` | Required |
| [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html) | `create` | `POST /subscriptions/{subscription_id}/service_credits.json` | Required |
| [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html) | `list` | `GET /subscriptions/{subscription_id}/service_credits/list.json` | Required |
| [SubscriptionInvoiceAccount](docs/api/subscription_invoice_account.html) | `list` | `GET /subscriptions/{subscription_id}/prepayments.json` | Required |
| [SubscriptionMrr](docs/api/subscription_mrr.html) | `list` | `GET /subscriptions_mrr.json` | Required |
| [SubscriptionNote](docs/api/subscription_note.html) | `create` | `POST /subscriptions/{subscription_id}/notes.json` | Required |
| [SubscriptionNote](docs/api/subscription_note.html) | `list` | `GET /subscriptions/{subscription_id}/notes.json` | Required |
| [SubscriptionNote](docs/api/subscription_note.html) | `load` | `GET /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| [SubscriptionNote](docs/api/subscription_note.html) | `remove` | `DELETE /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| [SubscriptionNote](docs/api/subscription_note.html) | `update` | `PUT /subscriptions/{subscription_id}/notes/{note_id}.json` | Required |
| [SubscriptionProduct](docs/api/subscription_product.html) | `create` | `POST /subscriptions/{subscription_id}/migrations.json` | Required |
| [SubscriptionProduct](docs/api/subscription_product.html) | `create` | `POST /subscriptions/{subscription_id}/migrations/preview.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `create` | `POST /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `create` | `POST /subscriptions/{subscription_id}/scheduled_renewals.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `list` | `GET /subscriptions/{subscription_id}/scheduled_renewals.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `load` | `GET /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `remove` | `DELETE /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json` | Required |
| [SubscriptionRenewal](docs/api/subscription_renewal.html) | `update` | `PUT /subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `create` | `POST /subscriptions/{subscription_id}/resume.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `create` | `POST /subscriptions/{subscription_id}/hold.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `create` | `POST /subscriptions/{subscription_id}/renewals/preview.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `remove` | `DELETE /subscriptions/{subscription_id}.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `remove` | `DELETE /subscriptions/{subscription_id}/delayed_cancel.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `update` | `PUT /subscriptions/{subscription_id}/hold.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `update` | `PUT /subscriptions/{subscription_id}/reactivate.json` | Required |
| [SubscriptionStatus](docs/api/subscription_status.html) | `update` | `PUT /subscriptions/{subscription_id}/retry.json` | Required |
| [Usage](docs/api/usage.html) | `list` | `GET /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /endpoints.json` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks/replay.json` | Required |
| [Webhook](docs/api/webhook.html) | `list` | `GET /webhooks.json` | Required |
| [Webhook](docs/api/webhook.html) | `update` | `PUT /webhooks/settings.json` | Required |

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
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `maxio-advanced-billing_list`: List records for an entity. Supported entities: `allocation`, `component`, `component_price_point`, `coupon`, `coupon_usage`, `custom_field`, `customer`, `endpoint`, `entitlement`, `event`, `feature`, `invoice`, `list_proforma_invoice`, `list_sale_rep_item`, `list_segment`, `offer`, `payment_profile`, `product`, `product_family`, `product_price_point`, `proforma_invoice`, `reason_code`, `sale_rep_setting`, `sales_commission`, `site`, `subscription`, `subscription_component`, `subscription_group`, `subscription_group_invoice_account`, `subscription_invoice_account`, `subscription_mrr`, `subscription_note`, `subscription_renewal`, `usage`, `webhook`.
- `maxio-advanced-billing_load`: Load one record for an entity. Supported entities: `account_balance`, `batch_job`, `billing_portal`, `component`, `component_price_point_currency_overage`, `coupon`, `customer`, `event`, `feature_catalog_item`, `feature_template`, `insight`, `offer`, `one_time_token`, `payment_profile`, `product`, `product_family`, `product_price_point`, `reason_code`, `referral_code`, `site`, `subscription`, `subscription_component`, `subscription_note`, `subscription_renewal`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

