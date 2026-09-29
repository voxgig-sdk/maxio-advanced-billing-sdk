<?php
declare(strict_types=1);

// Typed models for the MaxioAdvancedBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AccountBalance entity data model. */
class AccountBalance
{
    public mixed $open_invoices = null;
    public mixed $pending_discounts = null;
    public mixed $pending_invoices = null;
    public mixed $prepayments = null;
    public mixed $service_credits = null;
}

/** Request payload for AccountBalance#load. */
class AccountBalanceLoadMatch
{
    public int $subscription_id;
}

/** Allocation entity data model. */
class Allocation
{
    public ?array $allocation = null;
}

/** Request payload for Allocation#list. */
class AllocationListMatch
{
    public int $component_id;
    public int $subscription_id;
    public ?int $page = null;
}

/** Request payload for Allocation#create. */
class AllocationCreateData
{
    public int $subscription_id;
    public ?array $allocation = null;
}

/** BatchJob entity data model. */
class BatchJob
{
    public ?string $completed = null;
    public ?string $created_at = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?int $row_count = null;
}

/** Request payload for BatchJob#load. */
class BatchJobLoadMatch
{
    public string $batch_id;
}

/** Request payload for BatchJob#create. */
class BatchJobCreateData
{
    public ?string $completed = null;
    public ?string $created_at = null;
    public ?string $finished_at = null;
    public ?int $id = null;
    public ?int $row_count = null;
}

/** BillingPortal entity data model. */
class BillingPortal
{
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?int $fetch_count = null;
    public ?string $last_accepted_at = null;
    public ?string $last_invite_accepted_at = null;
    public ?string $last_invite_sent_at = null;
    public ?string $last_sent_at = null;
    public ?string $new_link_available_at = null;
    public ?string $send_invite_link_text = null;
    public ?int $uninvited_count = null;
    public ?string $url = null;
}

/** Request payload for BillingPortal#load. */
class BillingPortalLoadMatch
{
    public int $customer_id;
}

/** Request payload for BillingPortal#create. */
class BillingPortalCreateData
{
    public int $customer_id;
    public ?string $created_at = null;
    public ?string $expires_at = null;
    public ?int $fetch_count = null;
    public ?string $last_accepted_at = null;
    public ?string $last_invite_accepted_at = null;
    public ?string $last_invite_sent_at = null;
    public ?string $last_sent_at = null;
    public ?string $new_link_available_at = null;
    public ?string $send_invite_link_text = null;
    public ?int $uninvited_count = null;
    public ?string $url = null;
}

/** Request payload for BillingPortal#remove. */
class BillingPortalRemoveMatch
{
    public int $customer_id;
}

/** Component entity data model. */
class Component
{
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?array $component = null;
    public ?string $created_at = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public ?int $price_per_unit_in_cents = null;
    public ?int $price_point_count = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Component#load. */
class ComponentLoadMatch
{
    public string $component_id;
    public int $product_family_id;
    public ?bool $include_feature = null;
}

/** Request payload for Component#list. */
class ComponentListMatch
{
    public mixed $date_field = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public mixed $filter = null;
    public ?bool $include_archived = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
}

/** Request payload for Component#create. */
class ComponentCreateData
{
    public string $product_family_id;
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?array $component = null;
    public ?string $created_at = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public ?int $price_per_unit_in_cents = null;
    public ?int $price_point_count = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Component#update. */
class ComponentUpdateData
{
    public string $component_id;
    public ?int $product_family_id = null;
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?array $component = null;
    public ?string $created_at = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public ?int $price_per_unit_in_cents = null;
    public ?int $price_point_count = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Component#remove. */
class ComponentRemoveMatch
{
    public string $component_id;
    public int $product_family_id;
}

/** ComponentFeature entity data model. */
class ComponentFeature
{
    public ?string $id = null;
}

/** Request payload for ComponentFeature#remove. */
class ComponentFeatureRemoveMatch
{
    public int $component_id;
    public int $id;
    public ?bool $destroy_entitlement = null;
}

/** ComponentPricePoint entity data model. */
class ComponentPricePoint
{
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?bool $default = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public mixed $overage_pricing_scheme = null;
    public ?int $price_per_unit_in_cents = null;
    public ?array $price_point = null;
    public ?int $price_point_count = null;
    public ?array $price_points = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?bool $renew_prepaid_allocation = null;
    public ?bool $rollover_prepaid_remainder = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public mixed $type = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for ComponentPricePoint#list. */
class ComponentPricePointListMatch
{
    public mixed $direction = null;
    public mixed $filter = null;
    public mixed $include = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ComponentPricePoint#create. */
class ComponentPricePointCreateData
{
    public int $id;
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?bool $default = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public mixed $overage_pricing_scheme = null;
    public ?int $price_per_unit_in_cents = null;
    public ?array $price_point = null;
    public ?int $price_point_count = null;
    public ?array $price_points = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?bool $renew_prepaid_allocation = null;
    public ?bool $rollover_prepaid_remainder = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public mixed $type = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for ComponentPricePoint#update. */
class ComponentPricePointUpdateData
{
    public ?string $component_id = null;
    public string $price_point_id;
    public ?string $accounting_code = null;
    public ?bool $allow_fractional_quantities = null;
    public ?bool $archived = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?bool $default = null;
    public ?int $default_price_point_id = null;
    public ?string $default_price_point_name = null;
    public ?string $description = null;
    public mixed $downgrade_credit = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $hide_date_range_on_invoice = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $item_category = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public mixed $overage_pricing_scheme = null;
    public ?int $price_per_unit_in_cents = null;
    public ?array $price_point = null;
    public ?int $price_point_count = null;
    public ?array $price_points = null;
    public ?string $price_points_url = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?bool $renew_prepaid_allocation = null;
    public ?bool $rollover_prepaid_remainder = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public mixed $type = null;
    public ?string $unit_name = null;
    public ?string $unit_price = null;
    public ?string $unspsc_code = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for ComponentPricePoint#remove. */
class ComponentPricePointRemoveMatch
{
    public string $component_id;
    public string $price_point_id;
}

/** ComponentPricePointCurrencyOverage entity data model. */
class ComponentPricePointCurrencyOverage
{
    public ?string $archived_at = null;
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?array $currency_overage_prices = null;
    public ?array $currency_prices = null;
    public ?bool $default = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?string $name = null;
    public ?array $overage_prices = null;
    public mixed $overage_pricing_scheme = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public ?bool $renew_prepaid_allocation = null;
    public ?bool $rollover_prepaid_remainder = null;
    public ?int $subscription_id = null;
    public ?bool $tax_included = null;
    public mixed $type = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for ComponentPricePointCurrencyOverage#load. */
class ComponentPricePointCurrencyOverageLoadMatch
{
    public string $component_id;
    public string $price_point_id;
    public ?bool $currency_price = null;
}

/** Coupon entity data model. */
class Coupon
{
    public ?bool $allow_negative_balance = null;
    public ?float $amount = null;
    public ?int $amount_in_cents = null;
    public ?bool $apply_on_cancel_at_end_of_period = null;
    public ?bool $apply_on_subscription_expiration = null;
    public ?string $archived_at = null;
    public ?string $code = null;
    public mixed $compounding_strategy = null;
    public ?string $conversion_limit = null;
    public ?array $coupon = null;
    public ?array $coupon_restrictions = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?string $description = null;
    public ?string $discount_type = null;
    public ?int $duration_interval = null;
    public ?string $duration_interval_span = null;
    public ?string $duration_interval_unit = null;
    public ?int $duration_period_count = null;
    public ?string $end_date = null;
    public ?bool $exclude_mid_period_allocations = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $percentage = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $recurring_scheme = null;
    public ?bool $stackable = null;
    public ?string $start_date = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Coupon#load. */
class CouponLoadMatch
{
    public int $coupon_id;
    public int $product_family_id;
    public ?bool $currency_price = null;
}

/** Request payload for Coupon#list. */
class CouponListMatch
{
    public ?bool $currency_price = null;
    public mixed $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Coupon#create. */
class CouponCreateData
{
    public int $product_family_id;
    public ?bool $allow_negative_balance = null;
    public ?float $amount = null;
    public ?int $amount_in_cents = null;
    public ?bool $apply_on_cancel_at_end_of_period = null;
    public ?bool $apply_on_subscription_expiration = null;
    public ?string $archived_at = null;
    public ?string $code = null;
    public mixed $compounding_strategy = null;
    public ?string $conversion_limit = null;
    public ?array $coupon = null;
    public ?array $coupon_restrictions = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?string $description = null;
    public ?string $discount_type = null;
    public ?int $duration_interval = null;
    public ?string $duration_interval_span = null;
    public ?string $duration_interval_unit = null;
    public ?int $duration_period_count = null;
    public ?string $end_date = null;
    public ?bool $exclude_mid_period_allocations = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $percentage = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $recurring_scheme = null;
    public ?bool $stackable = null;
    public ?string $start_date = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Coupon#update. */
class CouponUpdateData
{
    public int $coupon_id;
    public int $product_family_id;
    public ?bool $allow_negative_balance = null;
    public ?float $amount = null;
    public ?int $amount_in_cents = null;
    public ?bool $apply_on_cancel_at_end_of_period = null;
    public ?bool $apply_on_subscription_expiration = null;
    public ?string $archived_at = null;
    public ?string $code = null;
    public mixed $compounding_strategy = null;
    public ?string $conversion_limit = null;
    public ?array $coupon = null;
    public ?array $coupon_restrictions = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?string $description = null;
    public ?string $discount_type = null;
    public ?int $duration_interval = null;
    public ?string $duration_interval_span = null;
    public ?string $duration_interval_unit = null;
    public ?int $duration_period_count = null;
    public ?string $end_date = null;
    public ?bool $exclude_mid_period_allocations = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $percentage = null;
    public ?string $product_family_name = null;
    public ?bool $recurring = null;
    public ?string $recurring_scheme = null;
    public ?bool $stackable = null;
    public ?string $start_date = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
}

/** Request payload for Coupon#remove. */
class CouponRemoveMatch
{
    public int $id;
    public string $subcode;
}

/** CouponCurrency entity data model. */
class CouponCurrency
{
    public ?string $id = null;
}

/** Request payload for CouponCurrency#update. */
class CouponCurrencyUpdateData
{
    public int $id;
}

/** CouponSubcode entity data model. */
class CouponSubcode
{
    public ?array $created_codes = null;
    public ?array $duplicate_codes = null;
    public ?string $id = null;
    public ?array $invalid_codes = null;
}

/** Request payload for CouponSubcode#update. */
class CouponSubcodeUpdateData
{
    public int $id;
    public ?array $created_codes = null;
    public ?array $duplicate_codes = null;
    public ?array $invalid_codes = null;
}

/** CouponUsage entity data model. */
class CouponUsage
{
    public ?int $id = null;
    public ?string $name = null;
    public ?int $revenue = null;
    public ?int $revenue_in_cents = null;
    public ?int $savings = null;
    public ?int $savings_in_cents = null;
    public ?int $signups = null;
}

/** Request payload for CouponUsage#list. */
class CouponUsageListMatch
{
    public int $id;
    public int $product_family_id;
}

/** CustomField entity data model. */
class CustomField
{
    public ?int $data_count = null;
    public ?string $deleted_at = null;
    public ?string $enum = null;
    public ?int $id = null;
    public ?string $input_type = null;
    public ?array $metadata = null;
    public ?int $metafield_id = null;
    public mixed $metafields = null;
    public ?string $name = null;
    public ?int $resource_id = null;
    public ?array $scope = null;
    public ?string $value = null;
}

/** Request payload for CustomField#list. */
class CustomFieldListMatch
{
    public mixed $resource_type;
    public mixed $date_field = null;
    public mixed $direction = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $resource_id = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
    public ?bool $with_deleted = null;
    public ?string $name = null;
}

/** Request payload for CustomField#create. */
class CustomFieldCreateData
{
    public ?int $resource_id = null;
    public mixed $resource_type;
    public ?int $data_count = null;
    public ?string $deleted_at = null;
    public ?string $enum = null;
    public ?int $id = null;
    public ?string $input_type = null;
    public ?array $metadata = null;
    public ?int $metafield_id = null;
    public mixed $metafields = null;
    public ?string $name = null;
    public ?array $scope = null;
    public ?string $value = null;
}

/** Request payload for CustomField#update. */
class CustomFieldUpdateData
{
    public ?int $resource_id = null;
    public mixed $resource_type;
    public ?int $data_count = null;
    public ?string $deleted_at = null;
    public ?string $enum = null;
    public ?int $id = null;
    public ?string $input_type = null;
    public ?array $metadata = null;
    public ?int $metafield_id = null;
    public mixed $metafields = null;
    public ?string $name = null;
    public ?array $scope = null;
    public ?string $value = null;
}

/** Request payload for CustomField#remove. */
class CustomFieldRemoveMatch
{
    public ?int $resource_id = null;
    public mixed $resource_type;
    public ?string $name = null;
}

/** Customer entity data model. */
class Customer
{
    public ?string $address = null;
    public ?string $address_2 = null;
    public ?int $branding_theme_id = null;
    public ?string $cc_emails = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $country_name = null;
    public ?string $created_at = null;
    public array $customer;
    public ?int $default_auto_renewal_profile_id = null;
    public ?string $default_subscription_group_uid = null;
    public ?string $email = null;
    public mixed $entity_identifier_kind = null;
    public ?string $entity_identifier_value = null;
    public ?string $first_name = null;
    public ?int $id = null;
    public ?string $last_name = null;
    public ?string $locale = null;
    public ?string $maxioid = null;
    public ?string $organization = null;
    public ?int $parent_id = null;
    public ?string $phone = null;
    public ?string $portal_customer_created_at = null;
    public ?string $portal_invite_last_accepted_at = null;
    public ?string $portal_invite_last_sent_at = null;
    public ?string $reference = null;
    public ?string $salesforce_id = null;
    public ?string $state = null;
    public ?string $state_name = null;
    public ?bool $surcharging = null;
    public ?bool $tax_exempt = null;
    public ?string $tax_exempt_reason = null;
    public ?string $updated_at = null;
    public ?string $vat_country = null;
    public ?string $vat_number = null;
    public ?bool $verified = null;
    public ?string $zip = null;
}

/** Request payload for Customer#load. */
class CustomerLoadMatch
{
    public int $id;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public mixed $date_field = null;
    public mixed $direction = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $q = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public ?string $address = null;
    public ?string $address_2 = null;
    public ?int $branding_theme_id = null;
    public ?string $cc_emails = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $country_name = null;
    public ?string $created_at = null;
    public array $customer;
    public ?int $default_auto_renewal_profile_id = null;
    public ?string $default_subscription_group_uid = null;
    public ?string $email = null;
    public mixed $entity_identifier_kind = null;
    public ?string $entity_identifier_value = null;
    public ?string $first_name = null;
    public ?int $id = null;
    public ?string $last_name = null;
    public ?string $locale = null;
    public ?string $maxioid = null;
    public ?string $organization = null;
    public ?int $parent_id = null;
    public ?string $phone = null;
    public ?string $portal_customer_created_at = null;
    public ?string $portal_invite_last_accepted_at = null;
    public ?string $portal_invite_last_sent_at = null;
    public ?string $reference = null;
    public ?string $salesforce_id = null;
    public ?string $state = null;
    public ?string $state_name = null;
    public ?bool $surcharging = null;
    public ?bool $tax_exempt = null;
    public ?string $tax_exempt_reason = null;
    public ?string $updated_at = null;
    public ?string $vat_country = null;
    public ?string $vat_number = null;
    public ?bool $verified = null;
    public ?string $zip = null;
}

/** Request payload for Customer#update. */
class CustomerUpdateData
{
    public int $id;
    public ?string $address = null;
    public ?string $address_2 = null;
    public ?int $branding_theme_id = null;
    public ?string $cc_emails = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $country_name = null;
    public ?string $created_at = null;
    public ?array $customer = null;
    public ?int $default_auto_renewal_profile_id = null;
    public ?string $default_subscription_group_uid = null;
    public ?string $email = null;
    public mixed $entity_identifier_kind = null;
    public ?string $entity_identifier_value = null;
    public ?string $first_name = null;
    public ?string $last_name = null;
    public ?string $locale = null;
    public ?string $maxioid = null;
    public ?string $organization = null;
    public ?int $parent_id = null;
    public ?string $phone = null;
    public ?string $portal_customer_created_at = null;
    public ?string $portal_invite_last_accepted_at = null;
    public ?string $portal_invite_last_sent_at = null;
    public ?string $reference = null;
    public ?string $salesforce_id = null;
    public ?string $state = null;
    public ?string $state_name = null;
    public ?bool $surcharging = null;
    public ?bool $tax_exempt = null;
    public ?string $tax_exempt_reason = null;
    public ?string $updated_at = null;
    public ?string $vat_country = null;
    public ?string $vat_number = null;
    public ?bool $verified = null;
    public ?string $zip = null;
}

/** Request payload for Customer#remove. */
class CustomerRemoveMatch
{
    public int $id;
}

/** DelayedCancel entity data model. */
class DelayedCancel
{
    public ?string $message = null;
    public array $subscription;
}

/** Request payload for DelayedCancel#create. */
class DelayedCancelCreateData
{
    public int $subscription_id;
    public ?string $message = null;
    public array $subscription;
}

/** Endpoint entity data model. */
class Endpoint
{
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook_subscriptions = null;
}

/** Request payload for Endpoint#list. */
class EndpointListMatch
{
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook_subscriptions = null;
}

/** Request payload for Endpoint#update. */
class EndpointUpdateData
{
    public int $endpoint_id;
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook_subscriptions = null;
}

/** Entitlement entity data model. */
class Entitlement
{
    public int $customer_id;
    public array $entitlements;
    public string $status;
    public int $subscription_id;
}

/** Request payload for Entitlement#list. */
class EntitlementListMatch
{
    public int $subscription_id;
}

/** Event entity data model. */
class Event
{
    public array $event;
}

/** Request payload for Event#load. */
class EventLoadMatch
{
    public mixed $direction = null;
    public ?array $filter = null;
    public ?int $max_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $since_id = null;
}

/** Request payload for Event#list. */
class EventListMatch
{
    public mixed $date_field = null;
    public mixed $direction = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public ?array $filter = null;
    public ?int $max_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $since_id = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
}

/** EventsBasedBillingSegment entity data model. */
class EventsBasedBillingSegment
{
    public ?string $id = null;
}

/** Request payload for EventsBasedBillingSegment#remove. */
class EventsBasedBillingSegmentRemoveMatch
{
    public string $component_id;
    public float $id;
    public string $price_point_id;
}

/** Feature entity data model. */
class Feature
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_periodicity_interval = null;
    public mixed $default_periodicity_unit = null;
    public ?string $default_value = null;
    public ?string $description = null;
    public array $feature;
    public ?string $feature_key = null;
    public mixed $feature_kind = null;
    public ?string $feature_name = null;
    public ?int $feature_template_id = null;
    public ?int $id = null;
    public ?string $key = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?int $periodicity_interval = null;
    public mixed $periodicity_unit = null;
    public ?int $plans_count = null;
    public ?int $price_point_id = null;
    public mixed $price_point_type = null;
    public ?int $products_count = null;
    public ?string $unit = null;
    public ?string $updated_at = null;
    public ?string $value = null;
    public mixed $value_type = null;
}

/** Request payload for Feature#list. */
class FeatureListMatch
{
    public mixed $kind = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $q = null;
    public mixed $sort_by = null;
    public mixed $sort_direction = null;
    public mixed $status = null;
    public ?string $updated_from = null;
    public ?string $updated_to = null;
}

/** Request payload for Feature#create. */
class FeatureCreateData
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_periodicity_interval = null;
    public mixed $default_periodicity_unit = null;
    public ?string $default_value = null;
    public ?string $description = null;
    public array $feature;
    public ?string $feature_key = null;
    public mixed $feature_kind = null;
    public ?string $feature_name = null;
    public ?int $feature_template_id = null;
    public ?int $id = null;
    public ?string $key = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?int $periodicity_interval = null;
    public mixed $periodicity_unit = null;
    public ?int $plans_count = null;
    public ?int $price_point_id = null;
    public mixed $price_point_type = null;
    public ?int $products_count = null;
    public ?string $unit = null;
    public ?string $updated_at = null;
    public ?string $value = null;
    public mixed $value_type = null;
}

/** FeatureCatalogItem entity data model. */
class FeatureCatalogItem
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public array $feature;
    public ?string $feature_key = null;
    public mixed $feature_kind = null;
    public ?string $feature_name = null;
    public ?int $feature_template_id = null;
    public ?int $id = null;
    public ?int $periodicity_interval = null;
    public mixed $periodicity_unit = null;
    public ?int $price_point_id = null;
    public mixed $price_point_type = null;
    public ?string $updated_at = null;
    public ?string $value = null;
}

/** Request payload for FeatureCatalogItem#load. */
class FeatureCatalogItemLoadMatch
{
    public ?int $component_id = null;
    public int $id;
    public ?int $product_id = null;
}

/** Request payload for FeatureCatalogItem#create. */
class FeatureCatalogItemCreateData
{
    public ?int $component_id = null;
    public int $id;
    public ?int $product_id = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public array $feature;
    public ?string $feature_key = null;
    public mixed $feature_kind = null;
    public ?string $feature_name = null;
    public ?int $feature_template_id = null;
    public ?int $periodicity_interval = null;
    public mixed $periodicity_unit = null;
    public ?int $price_point_id = null;
    public mixed $price_point_type = null;
    public ?string $updated_at = null;
    public ?string $value = null;
}

/** Request payload for FeatureCatalogItem#update. */
class FeatureCatalogItemUpdateData
{
    public ?int $component_id = null;
    public int $id;
    public ?int $product_id = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?array $feature = null;
    public ?string $feature_key = null;
    public mixed $feature_kind = null;
    public ?string $feature_name = null;
    public ?int $feature_template_id = null;
    public ?int $periodicity_interval = null;
    public mixed $periodicity_unit = null;
    public ?int $price_point_id = null;
    public mixed $price_point_type = null;
    public ?string $updated_at = null;
    public ?string $value = null;
}

/** FeatureTemplate entity data model. */
class FeatureTemplate
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_periodicity_interval = null;
    public mixed $default_periodicity_unit = null;
    public ?string $default_value = null;
    public ?string $description = null;
    public mixed $feature;
    public ?int $id = null;
    public ?string $key = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?int $plans_count = null;
    public ?int $products_count = null;
    public ?string $unit = null;
    public ?string $updated_at = null;
    public mixed $value_type = null;
}

/** Request payload for FeatureTemplate#load. */
class FeatureTemplateLoadMatch
{
    public int $id;
}

/** Request payload for FeatureTemplate#create. */
class FeatureTemplateCreateData
{
    public int $id;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_periodicity_interval = null;
    public mixed $default_periodicity_unit = null;
    public ?string $default_value = null;
    public ?string $description = null;
    public mixed $feature;
    public ?string $key = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?int $plans_count = null;
    public ?int $products_count = null;
    public ?string $unit = null;
    public ?string $updated_at = null;
    public mixed $value_type = null;
}

/** Request payload for FeatureTemplate#update. */
class FeatureTemplateUpdateData
{
    public int $id;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_periodicity_interval = null;
    public mixed $default_periodicity_unit = null;
    public ?string $default_value = null;
    public ?string $description = null;
    public mixed $feature = null;
    public ?string $key = null;
    public mixed $kind = null;
    public ?string $name = null;
    public ?int $plans_count = null;
    public ?int $products_count = null;
    public ?string $unit = null;
    public ?string $updated_at = null;
    public mixed $value_type = null;
}

/** Request payload for FeatureTemplate#remove. */
class FeatureTemplateRemoveMatch
{
    public int $id;
    public ?bool $remove_from_catalog = null;
}

/** Insight entity data model. */
class Insight
{
    public ?string $amount_formatted = null;
    public ?int $amount_in_cents = null;
    public ?string $at_time = null;
    public ?array $breakouts = null;
    public ?string $currency = null;
    public ?string $currency_symbol = null;
    public ?array $movements = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $seller_name = null;
    public ?string $site_currency = null;
    public ?int $site_id = null;
    public ?string $site_name = null;
    public ?array $stats = null;
    public ?int $total_entries = null;
    public ?int $total_pages = null;
}

/** Request payload for Insight#load. */
class InsightLoadMatch
{
    public mixed $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?int $subscription_id = null;
}

/** Invoice entity data model. */
class Invoice
{
    public ?array $applications = null;
    public ?string $applied_amount = null;
    public ?string $applied_date = null;
    public ?array $avatax_details = null;
    public mixed $billing_address = null;
    public ?int $branding_theme_id = null;
    public mixed $collection_method = null;
    public mixed $consolidation_level = null;
    public ?string $created_at = null;
    public ?string $credit_amount = null;
    public ?array $credits = null;
    public ?string $currency = null;
    public ?array $custom_fields = null;
    public mixed $customer = null;
    public ?int $customer_id = null;
    public ?string $debit_amount = null;
    public ?array $debits = null;
    public ?string $discount_amount = null;
    public ?array $discounts = null;
    public ?array $display_settings = null;
    public ?string $due_amount = null;
    public ?string $due_date = null;
    public ?int $group_primary_subscription_id = null;
    public ?int $id = null;
    public ?string $issue_date = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?int $net_terms = null;
    public ?string $number = null;
    public ?array $origin_invoices = null;
    public ?string $paid_amount = null;
    public ?string $paid_date = null;
    public ?array $paid_invoices = null;
    public ?int $parent_invoice_id = null;
    public ?int $parent_invoice_number = null;
    public ?string $parent_invoice_uid = null;
    public ?array $payer = null;
    public ?string $payment_instructions = null;
    public ?array $payments = null;
    public ?string $prepayment = null;
    public ?array $previous_balance_data = null;
    public ?string $product_family_name = null;
    public ?string $product_name = null;
    public ?string $public_url = null;
    public ?string $public_url_expires_on = null;
    public ?array $recipient_emails = null;
    public ?string $refund_amount = null;
    public ?array $refunds = null;
    public ?string $remaining_amount = null;
    public ?string $role = null;
    public mixed $seller = null;
    public ?int $sequence_number = null;
    public mixed $shipping_address = null;
    public ?int $site_id = null;
    public mixed $status = null;
    public ?int $subscription_group_id = null;
    public ?int $subscription_id = null;
    public ?string $subtotal_amount = null;
    public ?string $tax_amount = null;
    public ?array $taxes = null;
    public ?string $total_amount = null;
    public ?string $transaction_time = null;
    public ?string $uid = null;
    public ?string $updated_at = null;
    public array $void;
}

/** Request payload for Invoice#list. */
class InvoiceListMatch
{
    public string $uid;
}

/** Request payload for Invoice#create. */
class InvoiceCreateData
{
    public int $subscription_id;
    public ?array $applications = null;
    public ?string $applied_amount = null;
    public ?string $applied_date = null;
    public ?array $avatax_details = null;
    public mixed $billing_address = null;
    public ?int $branding_theme_id = null;
    public mixed $collection_method = null;
    public mixed $consolidation_level = null;
    public ?string $created_at = null;
    public ?string $credit_amount = null;
    public ?array $credits = null;
    public ?string $currency = null;
    public ?array $custom_fields = null;
    public mixed $customer = null;
    public ?int $customer_id = null;
    public ?string $debit_amount = null;
    public ?array $debits = null;
    public ?string $discount_amount = null;
    public ?array $discounts = null;
    public ?array $display_settings = null;
    public ?string $due_amount = null;
    public ?string $due_date = null;
    public ?int $group_primary_subscription_id = null;
    public ?int $id = null;
    public ?string $issue_date = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?int $net_terms = null;
    public ?string $number = null;
    public ?array $origin_invoices = null;
    public ?string $paid_amount = null;
    public ?string $paid_date = null;
    public ?array $paid_invoices = null;
    public ?int $parent_invoice_id = null;
    public ?int $parent_invoice_number = null;
    public ?string $parent_invoice_uid = null;
    public ?array $payer = null;
    public ?string $payment_instructions = null;
    public ?array $payments = null;
    public ?string $prepayment = null;
    public ?array $previous_balance_data = null;
    public ?string $product_family_name = null;
    public ?string $product_name = null;
    public ?string $public_url = null;
    public ?string $public_url_expires_on = null;
    public ?array $recipient_emails = null;
    public ?string $refund_amount = null;
    public ?array $refunds = null;
    public ?string $remaining_amount = null;
    public ?string $role = null;
    public mixed $seller = null;
    public ?int $sequence_number = null;
    public mixed $shipping_address = null;
    public ?int $site_id = null;
    public mixed $status = null;
    public ?int $subscription_group_id = null;
    public ?string $subtotal_amount = null;
    public ?string $tax_amount = null;
    public ?array $taxes = null;
    public ?string $total_amount = null;
    public ?string $transaction_time = null;
    public ?string $uid = null;
    public ?string $updated_at = null;
    public array $void;
}

/** Request payload for Invoice#update. */
class InvoiceUpdateData
{
    public int $subscription_id;
    public string $uid;
    public ?array $applications = null;
    public ?string $applied_amount = null;
    public ?string $applied_date = null;
    public ?array $avatax_details = null;
    public mixed $billing_address = null;
    public ?int $branding_theme_id = null;
    public mixed $collection_method = null;
    public mixed $consolidation_level = null;
    public ?string $created_at = null;
    public ?string $credit_amount = null;
    public ?array $credits = null;
    public ?string $currency = null;
    public ?array $custom_fields = null;
    public mixed $customer = null;
    public ?int $customer_id = null;
    public ?string $debit_amount = null;
    public ?array $debits = null;
    public ?string $discount_amount = null;
    public ?array $discounts = null;
    public ?array $display_settings = null;
    public ?string $due_amount = null;
    public ?string $due_date = null;
    public ?int $group_primary_subscription_id = null;
    public ?int $id = null;
    public ?string $issue_date = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?int $net_terms = null;
    public ?string $number = null;
    public ?array $origin_invoices = null;
    public ?string $paid_amount = null;
    public ?string $paid_date = null;
    public ?array $paid_invoices = null;
    public ?int $parent_invoice_id = null;
    public ?int $parent_invoice_number = null;
    public ?string $parent_invoice_uid = null;
    public ?array $payer = null;
    public ?string $payment_instructions = null;
    public ?array $payments = null;
    public ?string $prepayment = null;
    public ?array $previous_balance_data = null;
    public ?string $product_family_name = null;
    public ?string $product_name = null;
    public ?string $public_url = null;
    public ?string $public_url_expires_on = null;
    public ?array $recipient_emails = null;
    public ?string $refund_amount = null;
    public ?array $refunds = null;
    public ?string $remaining_amount = null;
    public ?string $role = null;
    public mixed $seller = null;
    public ?int $sequence_number = null;
    public mixed $shipping_address = null;
    public ?int $site_id = null;
    public mixed $status = null;
    public ?int $subscription_group_id = null;
    public ?string $subtotal_amount = null;
    public ?string $tax_amount = null;
    public ?array $taxes = null;
    public ?string $total_amount = null;
    public ?string $transaction_time = null;
    public ?string $updated_at = null;
    public ?array $void = null;
}

/** Request payload for Invoice#remove. */
class InvoiceRemoveMatch
{
    public int $subscription_id;
    public string $uid;
}

/** ListSaleRepItem entity data model. */
class ListSaleRepItem
{
    public ?string $full_name = null;
    public ?int $id = null;
    public ?array $mrr_data = null;
    public ?int $subscriptions_count = null;
    public ?bool $test_mode = null;
}

/** Request payload for ListSaleRepItem#list. */
class ListSaleRepItemListMatch
{
    public string $seller_id;
    public ?bool $live_mode = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ListSegment entity data model. */
class ListSegment
{
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $id = null;
    public ?int $price_point_id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?array $segments = null;
    public ?string $updated_at = null;
}

/** Request payload for ListSegment#list. */
class ListSegmentListMatch
{
    public string $component_id;
    public string $price_point_id;
    public mixed $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ListSegment#create. */
class ListSegmentCreateData
{
    public string $component_id;
    public string $price_point_id;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?array $segments = null;
    public ?string $updated_at = null;
}

/** Request payload for ListSegment#update. */
class ListSegmentUpdateData
{
    public string $component_id;
    public string $price_point_id;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?array $segments = null;
    public ?string $updated_at = null;
}

/** Offer entity data model. */
class Offer
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $offer = null;
    public ?array $offer_discounts = null;
    public ?array $offer_items = null;
    public ?array $offer_signup_pages = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?int $product_revisable_number = null;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** Request payload for Offer#load. */
class OfferLoadMatch
{
    public int $offer_id;
}

/** Request payload for Offer#list. */
class OfferListMatch
{
    public ?bool $include_archived = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Offer#create. */
class OfferCreateData
{
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $offer = null;
    public ?array $offer_discounts = null;
    public ?array $offer_items = null;
    public ?array $offer_signup_pages = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?int $product_revisable_number = null;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** Request payload for Offer#update. */
class OfferUpdateData
{
    public int $id;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $handle = null;
    public ?string $name = null;
    public ?array $offer = null;
    public ?array $offer_discounts = null;
    public ?array $offer_items = null;
    public ?array $offer_signup_pages = null;
    public ?int $product_family_id = null;
    public ?string $product_family_name = null;
    public ?int $product_id = null;
    public ?string $product_name = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?int $product_revisable_number = null;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** OneTimeToken entity data model. */
class OneTimeToken
{
}

/** Request payload for OneTimeToken#load. */
class OneTimeTokenLoadMatch
{
    public string $chargify_token;
}

/** PaymentProfile entity data model. */
class PaymentProfile
{
    public mixed $bank_account_holder_type = null;
    public mixed $bank_account_type = null;
    public ?string $bank_name = null;
    public ?string $billing_address = null;
    public ?string $billing_address_2 = null;
    public ?string $billing_city = null;
    public ?string $billing_country = null;
    public ?string $billing_state = null;
    public ?string $billing_zip = null;
    public ?string $card_type = null;
    public ?string $created_at = null;
    public ?string $current_vault = null;
    public ?int $customer_id = null;
    public ?string $customer_vault_token = null;
    public ?bool $disabled = null;
    public ?int $expiration_month = null;
    public ?int $expiration_year = null;
    public ?string $first_name = null;
    public ?string $gateway_handle = null;
    public ?int $id = null;
    public ?string $last_name = null;
    public ?string $masked_bank_account_number = null;
    public ?string $masked_bank_routing_number = null;
    public ?string $masked_card_number = null;
    public mixed $payment_profile;
    public ?string $payment_type = null;
    public ?int $site_gateway_setting_id = null;
    public ?string $updated_at = null;
    public ?string $vault_token = null;
    public ?bool $verified = null;
}

/** Request payload for PaymentProfile#load. */
class PaymentProfileLoadMatch
{
    public int $payment_profile_id;
}

/** Request payload for PaymentProfile#list. */
class PaymentProfileListMatch
{
    public ?int $customer_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for PaymentProfile#create. */
class PaymentProfileCreateData
{
    public mixed $bank_account_holder_type = null;
    public mixed $bank_account_type = null;
    public ?string $bank_name = null;
    public ?string $billing_address = null;
    public ?string $billing_address_2 = null;
    public ?string $billing_city = null;
    public ?string $billing_country = null;
    public ?string $billing_state = null;
    public ?string $billing_zip = null;
    public ?string $card_type = null;
    public ?string $created_at = null;
    public ?string $current_vault = null;
    public ?int $customer_id = null;
    public ?string $customer_vault_token = null;
    public ?bool $disabled = null;
    public ?int $expiration_month = null;
    public ?int $expiration_year = null;
    public ?string $first_name = null;
    public ?string $gateway_handle = null;
    public ?int $id = null;
    public ?string $last_name = null;
    public ?string $masked_bank_account_number = null;
    public ?string $masked_bank_routing_number = null;
    public ?string $masked_card_number = null;
    public mixed $payment_profile;
    public ?string $payment_type = null;
    public ?int $site_gateway_setting_id = null;
    public ?string $updated_at = null;
    public ?string $vault_token = null;
    public ?bool $verified = null;
}

/** Request payload for PaymentProfile#update. */
class PaymentProfileUpdateData
{
    public int $bank_account_id;
    public mixed $bank_account_holder_type = null;
    public mixed $bank_account_type = null;
    public ?string $bank_name = null;
    public ?string $billing_address = null;
    public ?string $billing_address_2 = null;
    public ?string $billing_city = null;
    public ?string $billing_country = null;
    public ?string $billing_state = null;
    public ?string $billing_zip = null;
    public ?string $card_type = null;
    public ?string $created_at = null;
    public ?string $current_vault = null;
    public ?int $customer_id = null;
    public ?string $customer_vault_token = null;
    public ?bool $disabled = null;
    public ?int $expiration_month = null;
    public ?int $expiration_year = null;
    public ?string $first_name = null;
    public ?string $gateway_handle = null;
    public ?int $id = null;
    public ?string $last_name = null;
    public ?string $masked_bank_account_number = null;
    public ?string $masked_bank_routing_number = null;
    public ?string $masked_card_number = null;
    public mixed $payment_profile = null;
    public ?string $payment_type = null;
    public ?int $site_gateway_setting_id = null;
    public ?string $updated_at = null;
    public ?string $vault_token = null;
    public ?bool $verified = null;
}

/** Request payload for PaymentProfile#remove. */
class PaymentProfileRemoveMatch
{
    public int $payment_profile_id;
    public ?string $subscription_group_id = null;
    public ?int $subscription_id = null;
}

/** Prepayment entity data model. */
class Prepayment
{
    public ?string $id = null;
}

/** Request payload for Prepayment#create. */
class PrepaymentCreateData
{
    public int $id;
    public int $subscription_id;
}

/** Product entity data model. */
class Product
{
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $product = null;
    public ?array $product_family = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for Product#load. */
class ProductLoadMatch
{
    public string $api_handle;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public mixed $date_field = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public mixed $filter = null;
    public mixed $include = null;
    public ?bool $include_archived = null;
    public ?bool $include_feature = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
}

/** Request payload for Product#create. */
class ProductCreateData
{
    public string $product_family_id;
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $product = null;
    public ?array $product_family = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for Product#update. */
class ProductUpdateData
{
    public int $product_id;
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $product = null;
    public ?array $product_family = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?string $tax_code = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for Product#remove. */
class ProductRemoveMatch
{
    public int $product_id;
}

/** ProductFamily entity data model. */
class ProductFamily
{
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $product_family = null;
    public ?bool $surcharging = null;
    public ?string $updated_at = null;
}

/** Request payload for ProductFamily#load. */
class ProductFamilyLoadMatch
{
    public int $id;
}

/** Request payload for ProductFamily#list. */
class ProductFamilyListMatch
{
    public mixed $date_field = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
}

/** Request payload for ProductFamily#create. */
class ProductFamilyCreateData
{
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $product_family = null;
    public ?bool $surcharging = null;
    public ?string $updated_at = null;
}

/** ProductFeature entity data model. */
class ProductFeature
{
    public ?string $id = null;
}

/** Request payload for ProductFeature#remove. */
class ProductFeatureRemoveMatch
{
    public int $id;
    public int $product_id;
    public ?bool $destroy_entitlement = null;
}

/** ProductPricePoint entity data model. */
class ProductPricePoint
{
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?bool $introductory_offer = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $price_point = null;
    public ?array $price_points = null;
    public ?array $product_family = null;
    public ?int $product_id = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public mixed $trial_type = null;
    public mixed $type = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for ProductPricePoint#load. */
class ProductPricePointLoadMatch
{
    public string $price_point_id;
    public string $product_id;
    public ?bool $currency_price = null;
}

/** Request payload for ProductPricePoint#list. */
class ProductPricePointListMatch
{
    public mixed $direction = null;
    public mixed $filter = null;
    public mixed $include = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ProductPricePoint#create. */
class ProductPricePointCreateData
{
    public string $id;
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?bool $introductory_offer = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $price_point = null;
    public ?array $price_points = null;
    public ?array $product_family = null;
    public ?int $product_id = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public mixed $trial_type = null;
    public mixed $type = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for ProductPricePoint#update. */
class ProductPricePointUpdateData
{
    public string $price_point_id;
    public string $product_id;
    public ?string $accounting_code = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?array $currency_prices = null;
    public ?int $default_product_price_point_id = null;
    public ?string $description = null;
    public ?int $expiration_interval = null;
    public mixed $expiration_interval_unit = null;
    public ?array $features = null;
    public ?string $handle = null;
    public ?int $id = null;
    public ?bool $initial_charge_after_trial = null;
    public ?int $initial_charge_in_cents = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public ?bool $introductory_offer = null;
    public ?string $item_category = null;
    public ?string $name = null;
    public ?int $price_in_cents = null;
    public ?array $price_point = null;
    public ?array $price_points = null;
    public ?array $product_family = null;
    public ?string $product_price_point_handle = null;
    public ?int $product_price_point_id = null;
    public ?string $product_price_point_name = null;
    public ?array $public_signup_pages = null;
    public ?bool $request_billing_address = null;
    public ?bool $request_credit_card = null;
    public ?bool $require_billing_address = null;
    public ?bool $require_credit_card = null;
    public ?bool $require_shipping_address = null;
    public ?string $return_params = null;
    public ?int $subscription_id = null;
    public ?string $tax_code = null;
    public ?bool $tax_included = null;
    public ?bool $taxable = null;
    public ?int $trial_interval = null;
    public mixed $trial_interval_unit = null;
    public ?int $trial_price_in_cents = null;
    public mixed $trial_type = null;
    public mixed $type = null;
    public ?string $unspsc_code = null;
    public ?string $update_return_params = null;
    public ?string $update_return_url = null;
    public ?string $updated_at = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $version_number = null;
}

/** Request payload for ProductPricePoint#remove. */
class ProductPricePointRemoveMatch
{
    public string $price_point_id;
    public string $product_id;
}

/** ProformaInvoice entity data model. */
class ProformaInvoice
{
    public ?array $available_actions = null;
    public ?array $billing_address = null;
    public mixed $collection_method = null;
    public mixed $consolidation_level = null;
    public ?string $created_at = null;
    public ?string $credit_amount = null;
    public ?array $credits = null;
    public ?string $currency = null;
    public ?array $custom_fields = null;
    public mixed $customer = null;
    public ?int $customer_id = null;
    public ?string $delivery_date = null;
    public ?string $discount_amount = null;
    public ?array $discounts = null;
    public ?string $due_amount = null;
    public ?string $id = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?int $number = null;
    public ?string $paid_amount = null;
    public ?string $payment_instructions = null;
    public ?array $payments = null;
    public ?string $product_family_name = null;
    public ?string $product_name = null;
    public ?string $public_url = null;
    public ?string $refund_amount = null;
    public mixed $role = null;
    public mixed $seller = null;
    public ?int $sequence_number = null;
    public ?array $shipping_address = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?int $subscription_id = null;
    public ?string $subtotal_amount = null;
    public ?string $tax_amount = null;
    public ?array $taxes = null;
    public ?string $total_amount = null;
    public ?string $uid = null;
}

/** Request payload for ProformaInvoice#list. */
class ProformaInvoiceListMatch
{
    public int $subscription_id;
    public ?bool $credit = null;
    public ?bool $custom_field = null;
    public mixed $direction = null;
    public ?bool $discount = null;
    public ?string $end_date = null;
    public ?bool $line_item = null;
    public ?int $page = null;
    public ?bool $payment = null;
    public ?int $per_page = null;
    public ?string $start_date = null;
    public mixed $status = null;
    public ?bool $taxis = null;
}

/** Request payload for ProformaInvoice#create. */
class ProformaInvoiceCreateData
{
    public ?array $available_actions = null;
    public ?array $billing_address = null;
    public mixed $collection_method = null;
    public mixed $consolidation_level = null;
    public ?string $created_at = null;
    public ?string $credit_amount = null;
    public ?array $credits = null;
    public ?string $currency = null;
    public ?array $custom_fields = null;
    public mixed $customer = null;
    public ?int $customer_id = null;
    public ?string $delivery_date = null;
    public ?string $discount_amount = null;
    public ?array $discounts = null;
    public ?string $due_amount = null;
    public ?string $id = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?int $number = null;
    public ?string $paid_amount = null;
    public ?string $payment_instructions = null;
    public ?array $payments = null;
    public ?string $product_family_name = null;
    public ?string $product_name = null;
    public ?string $public_url = null;
    public ?string $refund_amount = null;
    public mixed $role = null;
    public mixed $seller = null;
    public ?int $sequence_number = null;
    public ?array $shipping_address = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?int $subscription_id = null;
    public ?string $subtotal_amount = null;
    public ?string $tax_amount = null;
    public ?array $taxes = null;
    public ?string $total_amount = null;
    public ?string $uid = null;
}

/** ReasonCode entity data model. */
class ReasonCode
{
    public ?string $code = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?int $position = null;
    public array $reason_code;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** Request payload for ReasonCode#load. */
class ReasonCodeLoadMatch
{
    public int $reason_code_id;
}

/** Request payload for ReasonCode#list. */
class ReasonCodeListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for ReasonCode#create. */
class ReasonCodeCreateData
{
    public ?string $code = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?int $position = null;
    public array $reason_code;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** Request payload for ReasonCode#update. */
class ReasonCodeUpdateData
{
    public int $reason_code_id;
    public ?string $code = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?int $position = null;
    public ?array $reason_code = null;
    public ?int $site_id = null;
    public ?string $updated_at = null;
}

/** Request payload for ReasonCode#remove. */
class ReasonCodeRemoveMatch
{
    public int $reason_code_id;
}

/** ReferralCode entity data model. */
class ReferralCode
{
    public ?string $code = null;
    public ?int $id = null;
    public ?int $site_id = null;
    public ?int $subscription_id = null;
}

/** Request payload for ReferralCode#load. */
class ReferralCodeLoadMatch
{
    public string $code;
}

/** SaleRepSetting entity data model. */
class SaleRepSetting
{
    public ?string $customer_name = null;
    public ?int $sales_rep_id = null;
    public ?string $sales_rep_name = null;
    public ?string $site_link = null;
    public ?string $site_name = null;
    public ?int $subscription_id = null;
    public ?string $subscription_mrr = null;
}

/** Request payload for SaleRepSetting#list. */
class SaleRepSettingListMatch
{
    public string $seller_id;
    public ?bool $live_mode = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** SalesCommission entity data model. */
class SalesCommission
{
    public ?string $full_name = null;
    public ?int $id = null;
    public ?array $subscriptions = null;
    public ?int $subscriptions_count = null;
    public ?bool $test_mode = null;
}

/** Request payload for SalesCommission#list. */
class SalesCommissionListMatch
{
    public string $sales_rep_id;
    public string $seller_id;
    public ?bool $live_mode = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Segment entity data model. */
class Segment
{
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $id = null;
    public ?int $price_point_id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?string $updated_at = null;
}

/** Request payload for Segment#create. */
class SegmentCreateData
{
    public string $component_id;
    public string $price_point_id;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?int $id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?string $updated_at = null;
}

/** Request payload for Segment#update. */
class SegmentUpdateData
{
    public string $component_id;
    public float $id;
    public string $price_point_id;
    public ?string $created_at = null;
    public ?int $event_based_billing_metric_id = null;
    public ?array $prices = null;
    public mixed $pricing_scheme = null;
    public mixed $segment_property_1_value = null;
    public mixed $segment_property_2_value = null;
    public mixed $segment_property_3_value = null;
    public mixed $segment_property_4_value = null;
    public ?string $updated_at = null;
}

/** SignupProformaPreview entity data model. */
class SignupProformaPreview
{
}

/** Request payload for SignupProformaPreview#create. */
class SignupProformaPreviewCreateData
{
    public mixed $include = null;
}

/** Site entity data model. */
class Site
{
    public ?array $allocation_settings = null;
    public ?bool $auto_renewals_enabled = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?bool $customer_hierarchy_enabled = null;
    public ?string $default_payment_collection_method = null;
    public ?int $id = null;
    public ?bool $multi_frequency_enabled = null;
    public ?string $name = null;
    public ?array $net_terms = null;
    public ?array $non_primary_currencies = null;
    public ?array $organization_address = null;
    public ?bool $portal_enabled = null;
    public ?string $public_key = null;
    public ?bool $relationship_invoicing_enabled = null;
    public ?bool $requires_security_token = null;
    public ?bool $schedule_subscription_cancellation_enabled = null;
    public ?int $seller_id = null;
    public ?string $subdomain = null;
    public ?array $tax_configuration = null;
    public ?bool $test = null;
    public ?string $whopays_default_payer = null;
    public ?bool $whopays_enabled = null;
}

/** Request payload for Site#load. */
class SiteLoadMatch
{
    public ?array $allocation_settings = null;
    public ?bool $auto_renewals_enabled = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?bool $customer_hierarchy_enabled = null;
    public ?string $default_payment_collection_method = null;
    public int $id;
    public ?bool $multi_frequency_enabled = null;
    public ?string $name = null;
    public ?array $net_terms = null;
    public ?array $non_primary_currencies = null;
    public ?array $organization_address = null;
    public ?bool $portal_enabled = null;
    public ?string $public_key = null;
    public ?bool $relationship_invoicing_enabled = null;
    public ?bool $requires_security_token = null;
    public ?bool $schedule_subscription_cancellation_enabled = null;
    public ?int $seller_id = null;
    public ?string $subdomain = null;
    public ?array $tax_configuration = null;
    public ?bool $test = null;
    public ?string $whopays_default_payer = null;
    public ?bool $whopays_enabled = null;
}

/** Request payload for Site#list. */
class SiteListMatch
{
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for Site#create. */
class SiteCreateData
{
    public mixed $cleanup_scope = null;
    public ?array $allocation_settings = null;
    public ?bool $auto_renewals_enabled = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?bool $customer_hierarchy_enabled = null;
    public ?string $default_payment_collection_method = null;
    public ?int $id = null;
    public ?bool $multi_frequency_enabled = null;
    public ?string $name = null;
    public ?array $net_terms = null;
    public ?array $non_primary_currencies = null;
    public ?array $organization_address = null;
    public ?bool $portal_enabled = null;
    public ?string $public_key = null;
    public ?bool $relationship_invoicing_enabled = null;
    public ?bool $requires_security_token = null;
    public ?bool $schedule_subscription_cancellation_enabled = null;
    public ?int $seller_id = null;
    public ?string $subdomain = null;
    public ?array $tax_configuration = null;
    public ?bool $test = null;
    public ?string $whopays_default_payer = null;
    public ?bool $whopays_enabled = null;
}

/** Subscription entity data model. */
class Subscription
{
    public ?string $activated_at = null;
    public ?string $automatically_resume_at = null;
    public ?int $balance_in_cents = null;
    public array $bank_account;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $canceled_at = null;
    public ?string $cancellation_message = null;
    public mixed $cancellation_method = null;
    public ?string $coupon_code = null;
    public ?array $coupon_codes = null;
    public ?int $coupon_use_count = null;
    public ?int $coupon_uses_allowed = null;
    public ?array $coupons = null;
    public ?string $created_at = null;
    public ?int $credit_balance_in_cents = null;
    public mixed $credit_card = null;
    public ?string $currency = null;
    public ?int $current_billing_amount_in_cents = null;
    public ?string $current_period_ends_at = null;
    public ?string $current_period_started_at = null;
    public ?array $customer = null;
    public ?string $delayed_cancel_at = null;
    public ?bool $dunning_communication_delay_enabled = null;
    public ?string $dunning_communication_delay_time_zone = null;
    public ?string $expires_at = null;
    public mixed $group = null;
    public ?int $id = null;
    public ?string $locale = null;
    public ?int $net_terms = null;
    public ?string $next_assessment_at = null;
    public ?string $next_product_handle = null;
    public ?int $next_product_id = null;
    public ?int $next_product_price_point_id = null;
    public ?int $offer_id = null;
    public ?string $on_hold_at = null;
    public ?int $payer_id = null;
    public mixed $payment_collection_method = null;
    public ?string $payment_type = null;
    public mixed $prepaid_configuration = null;
    public ?bool $prepaid_dunning = null;
    public ?int $prepayment_balance_in_cents = null;
    public mixed $previous_state = null;
    public ?array $product = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public mixed $product_price_point_type = null;
    public ?int $product_version_number = null;
    public ?string $reason_code = null;
    public ?bool $receives_invoice_emails = null;
    public ?string $reference = null;
    public ?string $referral_code = null;
    public ?string $scheduled_cancellation_at = null;
    public ?string $self_service_page_token = null;
    public ?int $signup_payment_id = null;
    public ?string $signup_revenue = null;
    public ?string $snap_day = null;
    public mixed $state = null;
    public ?int $stored_credential_transaction_id = null;
    public ?array $subscription = null;
    public ?int $total_revenue_in_cents = null;
    public ?string $trial_ended_at = null;
    public ?string $trial_started_at = null;
    public ?string $updated_at = null;
}

/** Request payload for Subscription#load. */
class SubscriptionLoadMatch
{
    public int $subscription_id;
    public ?array $include = null;
}

/** Request payload for Subscription#list. */
class SubscriptionListMatch
{
    public ?int $branding_theme_id = null;
    public mixed $collection_method = null;
    public ?int $coupon = null;
    public ?string $coupon_code = null;
    public ?string $currency = null;
    public ?int $customer_id = null;
    public mixed $date_field = null;
    public mixed $direction = null;
    public ?bool $dunning_exemption = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public mixed $group_status = null;
    public ?array $include = null;
    public ?array $metadata = null;
    public ?int $page = null;
    public ?string $payment_gateway = null;
    public ?int $per_page = null;
    public mixed $product = null;
    public ?int $product_price_point_id = null;
    public ?string $q = null;
    public mixed $q_scope = null;
    public mixed $sort = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
    public mixed $state = null;
}

/** Request payload for Subscription#create. */
class SubscriptionCreateData
{
    public ?string $activated_at = null;
    public ?string $automatically_resume_at = null;
    public ?int $balance_in_cents = null;
    public array $bank_account;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $canceled_at = null;
    public ?string $cancellation_message = null;
    public mixed $cancellation_method = null;
    public ?string $coupon_code = null;
    public ?array $coupon_codes = null;
    public ?int $coupon_use_count = null;
    public ?int $coupon_uses_allowed = null;
    public ?array $coupons = null;
    public ?string $created_at = null;
    public ?int $credit_balance_in_cents = null;
    public mixed $credit_card = null;
    public ?string $currency = null;
    public ?int $current_billing_amount_in_cents = null;
    public ?string $current_period_ends_at = null;
    public ?string $current_period_started_at = null;
    public ?array $customer = null;
    public ?string $delayed_cancel_at = null;
    public ?bool $dunning_communication_delay_enabled = null;
    public ?string $dunning_communication_delay_time_zone = null;
    public ?string $expires_at = null;
    public mixed $group = null;
    public ?int $id = null;
    public ?string $locale = null;
    public ?int $net_terms = null;
    public ?string $next_assessment_at = null;
    public ?string $next_product_handle = null;
    public ?int $next_product_id = null;
    public ?int $next_product_price_point_id = null;
    public ?int $offer_id = null;
    public ?string $on_hold_at = null;
    public ?int $payer_id = null;
    public mixed $payment_collection_method = null;
    public ?string $payment_type = null;
    public mixed $prepaid_configuration = null;
    public ?bool $prepaid_dunning = null;
    public ?int $prepayment_balance_in_cents = null;
    public mixed $previous_state = null;
    public ?array $product = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public mixed $product_price_point_type = null;
    public ?int $product_version_number = null;
    public ?string $reason_code = null;
    public ?bool $receives_invoice_emails = null;
    public ?string $reference = null;
    public ?string $referral_code = null;
    public ?string $scheduled_cancellation_at = null;
    public ?string $self_service_page_token = null;
    public ?int $signup_payment_id = null;
    public ?string $signup_revenue = null;
    public ?string $snap_day = null;
    public mixed $state = null;
    public ?int $stored_credential_transaction_id = null;
    public ?array $subscription = null;
    public ?int $total_revenue_in_cents = null;
    public ?string $trial_ended_at = null;
    public ?string $trial_started_at = null;
    public ?string $updated_at = null;
}

/** Request payload for Subscription#update. */
class SubscriptionUpdateData
{
    public int $subscription_id;
    public ?string $activated_at = null;
    public ?string $automatically_resume_at = null;
    public ?int $balance_in_cents = null;
    public ?array $bank_account = null;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $canceled_at = null;
    public ?string $cancellation_message = null;
    public mixed $cancellation_method = null;
    public ?string $coupon_code = null;
    public ?array $coupon_codes = null;
    public ?int $coupon_use_count = null;
    public ?int $coupon_uses_allowed = null;
    public ?array $coupons = null;
    public ?string $created_at = null;
    public ?int $credit_balance_in_cents = null;
    public mixed $credit_card = null;
    public ?string $currency = null;
    public ?int $current_billing_amount_in_cents = null;
    public ?string $current_period_ends_at = null;
    public ?string $current_period_started_at = null;
    public ?array $customer = null;
    public ?string $delayed_cancel_at = null;
    public ?bool $dunning_communication_delay_enabled = null;
    public ?string $dunning_communication_delay_time_zone = null;
    public ?string $expires_at = null;
    public mixed $group = null;
    public ?int $id = null;
    public ?string $locale = null;
    public ?int $net_terms = null;
    public ?string $next_assessment_at = null;
    public ?string $next_product_handle = null;
    public ?int $next_product_id = null;
    public ?int $next_product_price_point_id = null;
    public ?int $offer_id = null;
    public ?string $on_hold_at = null;
    public ?int $payer_id = null;
    public mixed $payment_collection_method = null;
    public ?string $payment_type = null;
    public mixed $prepaid_configuration = null;
    public ?bool $prepaid_dunning = null;
    public ?int $prepayment_balance_in_cents = null;
    public mixed $previous_state = null;
    public ?array $product = null;
    public ?int $product_price_in_cents = null;
    public ?int $product_price_point_id = null;
    public mixed $product_price_point_type = null;
    public ?int $product_version_number = null;
    public ?string $reason_code = null;
    public ?bool $receives_invoice_emails = null;
    public ?string $reference = null;
    public ?string $referral_code = null;
    public ?string $scheduled_cancellation_at = null;
    public ?string $self_service_page_token = null;
    public ?int $signup_payment_id = null;
    public ?string $signup_revenue = null;
    public ?string $snap_day = null;
    public mixed $state = null;
    public ?int $stored_credential_transaction_id = null;
    public ?array $subscription = null;
    public ?int $total_revenue_in_cents = null;
    public ?string $trial_ended_at = null;
    public ?string $trial_started_at = null;
    public ?string $updated_at = null;
}

/** Request payload for Subscription#remove. */
class SubscriptionRemoveMatch
{
    public int $id;
    public ?string $coupon_code = null;
}

/** SubscriptionComponent entity data model. */
class SubscriptionComponent
{
    public ?bool $accrue_charge = null;
    public mixed $allocated_quantity = null;
    public ?int $allocation_id = null;
    public ?array $allocations = null;
    public ?bool $allow_fractional_quantities = null;
    public ?string $archived_at = null;
    public ?int $charge_id = null;
    public ?array $component = null;
    public ?string $component_handle = null;
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $direction = null;
    public ?bool $display_on_hosted_page = null;
    public mixed $downgrade_credit = null;
    public ?bool $enabled = null;
    public ?string $end_date = null;
    public ?int $existing_balance_in_cents = null;
    public ?string $expires_at = null;
    public ?array $historic_usages = null;
    public ?int $id = null;
    public ?bool $initiate_dunning = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $kind = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?string $name = null;
    public ?int $overage_quantity = null;
    public mixed $payment = null;
    public ?string $period_type = null;
    public ?int $previous_price_point_id = null;
    public mixed $previous_quantity = null;
    public ?string $price_point_handle = null;
    public ?int $price_point_id = null;
    public ?string $price_point_name = null;
    public mixed $price_point_type = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $proration_downgrade_scheme = null;
    public ?string $proration_scheme = null;
    public ?string $proration_upgrade_scheme = null;
    public mixed $quantity = null;
    public ?bool $recurring = null;
    public ?string $start_date = null;
    public mixed $subscription = null;
    public ?int $subscription_id = null;
    public ?int $subtotal_in_cents = null;
    public ?string $timestamp = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public mixed $unit_balance = null;
    public ?string $unit_name = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $used_quantity = null;
}

/** Request payload for SubscriptionComponent#load. */
class SubscriptionComponentLoadMatch
{
    public int $component_id;
    public int $subscription_id;
}

/** Request payload for SubscriptionComponent#list. */
class SubscriptionComponentListMatch
{
    public mixed $date_field = null;
    public mixed $direction = null;
    public ?string $end_date = null;
    public ?string $end_datetime = null;
    public mixed $filter = null;
    public mixed $include = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $price_point_id = null;
    public ?array $product_family_id = null;
    public mixed $sort = null;
    public ?string $start_date = null;
    public ?string $start_datetime = null;
    public ?array $subscription_id = null;
}

/** Request payload for SubscriptionComponent#create. */
class SubscriptionComponentCreateData
{
    public string $api_handle;
    public ?string $store_uid = null;
    public ?bool $accrue_charge = null;
    public mixed $allocated_quantity = null;
    public ?int $allocation_id = null;
    public ?array $allocations = null;
    public ?bool $allow_fractional_quantities = null;
    public ?string $archived_at = null;
    public ?int $charge_id = null;
    public ?array $component = null;
    public ?string $component_handle = null;
    public ?int $component_id = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $direction = null;
    public ?bool $display_on_hosted_page = null;
    public mixed $downgrade_credit = null;
    public ?bool $enabled = null;
    public ?string $end_date = null;
    public ?int $existing_balance_in_cents = null;
    public ?string $expires_at = null;
    public ?array $historic_usages = null;
    public ?int $id = null;
    public ?bool $initiate_dunning = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $kind = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?string $name = null;
    public ?int $overage_quantity = null;
    public mixed $payment = null;
    public ?string $period_type = null;
    public ?int $previous_price_point_id = null;
    public mixed $previous_quantity = null;
    public ?string $price_point_handle = null;
    public ?int $price_point_id = null;
    public ?string $price_point_name = null;
    public mixed $price_point_type = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $proration_downgrade_scheme = null;
    public ?string $proration_scheme = null;
    public ?string $proration_upgrade_scheme = null;
    public mixed $quantity = null;
    public ?bool $recurring = null;
    public ?string $start_date = null;
    public mixed $subscription = null;
    public ?int $subscription_id = null;
    public ?int $subtotal_in_cents = null;
    public ?string $timestamp = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public mixed $unit_balance = null;
    public ?string $unit_name = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $used_quantity = null;
}

/** Request payload for SubscriptionComponent#update. */
class SubscriptionComponentUpdateData
{
    public int $allocation_id;
    public int $component_id;
    public int $subscription_id;
    public ?bool $accrue_charge = null;
    public mixed $allocated_quantity = null;
    public ?array $allocations = null;
    public ?bool $allow_fractional_quantities = null;
    public ?string $archived_at = null;
    public ?int $charge_id = null;
    public ?array $component = null;
    public ?string $component_handle = null;
    public ?string $created_at = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $direction = null;
    public ?bool $display_on_hosted_page = null;
    public mixed $downgrade_credit = null;
    public ?bool $enabled = null;
    public ?string $end_date = null;
    public ?int $existing_balance_in_cents = null;
    public ?string $expires_at = null;
    public ?array $historic_usages = null;
    public ?int $id = null;
    public ?bool $initiate_dunning = null;
    public ?int $interval = null;
    public mixed $interval_unit = null;
    public mixed $kind = null;
    public ?array $line_items = null;
    public ?string $memo = null;
    public ?string $name = null;
    public ?int $overage_quantity = null;
    public mixed $payment = null;
    public ?string $period_type = null;
    public ?int $previous_price_point_id = null;
    public mixed $previous_quantity = null;
    public ?string $price_point_handle = null;
    public ?int $price_point_id = null;
    public ?string $price_point_name = null;
    public mixed $price_point_type = null;
    public mixed $pricing_scheme = null;
    public ?string $product_family_handle = null;
    public ?int $product_family_id = null;
    public ?string $proration_downgrade_scheme = null;
    public ?string $proration_scheme = null;
    public ?string $proration_upgrade_scheme = null;
    public mixed $quantity = null;
    public ?bool $recurring = null;
    public ?string $start_date = null;
    public mixed $subscription = null;
    public ?int $subtotal_in_cents = null;
    public ?string $timestamp = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public mixed $unit_balance = null;
    public ?string $unit_name = null;
    public ?string $updated_at = null;
    public mixed $upgrade_charge = null;
    public ?bool $use_site_exchange_rate = null;
    public ?int $used_quantity = null;
}

/** Request payload for SubscriptionComponent#remove. */
class SubscriptionComponentRemoveMatch
{
    public int $allocation_id;
    public int $component_id;
    public int $subscription_id;
}

/** SubscriptionGroup entity data model. */
class SubscriptionGroup
{
    public ?array $account_balances = null;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $created_at = null;
    public ?int $customer_id = null;
    public ?string $group_type = null;
    public ?string $id = null;
    public ?string $next_assessment_at = null;
    public mixed $payment_collection_method = null;
    public ?array $payment_profile = null;
    public ?int $payment_profile_id = null;
    public ?int $primary_subscription_id = null;
    public ?int $scheme = null;
    public ?string $state = null;
    public ?array $subscription_ids = null;
    public ?string $uid = null;
}

/** Request payload for SubscriptionGroup#list. */
class SubscriptionGroupListMatch
{
    public ?array $include = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SubscriptionGroup#create. */
class SubscriptionGroupCreateData
{
    public ?array $account_balances = null;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $created_at = null;
    public ?int $customer_id = null;
    public ?string $group_type = null;
    public ?string $id = null;
    public ?string $next_assessment_at = null;
    public mixed $payment_collection_method = null;
    public ?array $payment_profile = null;
    public ?int $payment_profile_id = null;
    public ?int $primary_subscription_id = null;
    public ?int $scheme = null;
    public ?string $state = null;
    public ?array $subscription_ids = null;
    public ?string $uid = null;
}

/** Request payload for SubscriptionGroup#update. */
class SubscriptionGroupUpdateData
{
    public string $uid;
    public ?array $account_balances = null;
    public ?bool $cancel_at_end_of_period = null;
    public ?string $created_at = null;
    public ?int $customer_id = null;
    public ?string $group_type = null;
    public ?string $id = null;
    public ?string $next_assessment_at = null;
    public mixed $payment_collection_method = null;
    public ?array $payment_profile = null;
    public ?int $payment_profile_id = null;
    public ?int $primary_subscription_id = null;
    public ?int $scheme = null;
    public ?string $state = null;
    public ?array $subscription_ids = null;
}

/** Request payload for SubscriptionGroup#remove. */
class SubscriptionGroupRemoveMatch
{
    public int $id;
}

/** SubscriptionGroupInvoiceAccount entity data model. */
class SubscriptionGroupInvoiceAccount
{
    public ?string $id = null;
}

/** Request payload for SubscriptionGroupInvoiceAccount#list. */
class SubscriptionGroupInvoiceAccountListMatch
{
    public string $id;
    public mixed $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SubscriptionGroupInvoiceAccount#create. */
class SubscriptionGroupInvoiceAccountCreateData
{
    public string $id;
}

/** SubscriptionGroupSignup entity data model. */
class SubscriptionGroupSignup
{
}

/** Request payload for SubscriptionGroupSignup#create. */
class SubscriptionGroupSignupCreateData
{
}

/** SubscriptionGroupStatus entity data model. */
class SubscriptionGroupStatus
{
    public ?string $id = null;
}

/** Request payload for SubscriptionGroupStatus#create. */
class SubscriptionGroupStatusCreateData
{
    public string $id;
}

/** Request payload for SubscriptionGroupStatus#remove. */
class SubscriptionGroupStatusRemoveMatch
{
    public string $id;
}

/** SubscriptionInvoiceAccount entity data model. */
class SubscriptionInvoiceAccount
{
    public ?int $amount_in_cents = null;
    public ?string $created_at = null;
    public ?int $ending_balance_in_cents = null;
    public mixed $entry_type = null;
    public ?int $id = null;
    public ?string $invoice_uid = null;
    public ?string $memo = null;
    public ?int $remaining_balance_in_cents = null;
}

/** Request payload for SubscriptionInvoiceAccount#list. */
class SubscriptionInvoiceAccountListMatch
{
    public int $subscription_id;
    public mixed $direction = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SubscriptionInvoiceAccount#create. */
class SubscriptionInvoiceAccountCreateData
{
    public int $id;
    public ?int $amount_in_cents = null;
    public ?string $created_at = null;
    public ?int $ending_balance_in_cents = null;
    public mixed $entry_type = null;
    public ?string $invoice_uid = null;
    public ?string $memo = null;
    public ?int $remaining_balance_in_cents = null;
}

/** SubscriptionMrr entity data model. */
class SubscriptionMrr
{
    public array $breakouts;
    public int $mrr_amount_in_cents;
    public int $subscription_id;
}

/** Request payload for SubscriptionMrr#list. */
class SubscriptionMrrListMatch
{
    public ?string $at_time = null;
    public mixed $direction = null;
    public mixed $filter = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** SubscriptionNote entity data model. */
class SubscriptionNote
{
    public ?string $body = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public array $note;
    public ?bool $sticky = null;
    public ?int $subscription_id = null;
    public ?string $updated_at = null;
}

/** Request payload for SubscriptionNote#load. */
class SubscriptionNoteLoadMatch
{
    public int $note_id;
    public int $subscription_id;
}

/** Request payload for SubscriptionNote#list. */
class SubscriptionNoteListMatch
{
    public int $id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for SubscriptionNote#create. */
class SubscriptionNoteCreateData
{
    public int $id;
    public ?string $body = null;
    public ?string $created_at = null;
    public array $note;
    public ?bool $sticky = null;
    public ?int $subscription_id = null;
    public ?string $updated_at = null;
}

/** Request payload for SubscriptionNote#update. */
class SubscriptionNoteUpdateData
{
    public int $note_id;
    public int $subscription_id;
    public ?string $body = null;
    public ?string $created_at = null;
    public ?int $id = null;
    public ?array $note = null;
    public ?bool $sticky = null;
    public ?string $updated_at = null;
}

/** Request payload for SubscriptionNote#remove. */
class SubscriptionNoteRemoveMatch
{
    public int $note_id;
    public int $subscription_id;
}

/** SubscriptionProduct entity data model. */
class SubscriptionProduct
{
    public ?int $charge_in_cents = null;
    public ?int $credit_applied_in_cents = null;
    public ?string $id = null;
    public array $migration;
    public ?int $payment_due_in_cents = null;
    public ?int $prorated_adjustment_in_cents = null;
}

/** Request payload for SubscriptionProduct#create. */
class SubscriptionProductCreateData
{
    public int $subscription_id;
    public ?int $charge_in_cents = null;
    public ?int $credit_applied_in_cents = null;
    public ?string $id = null;
    public array $migration;
    public ?int $payment_due_in_cents = null;
    public ?int $prorated_adjustment_in_cents = null;
}

/** SubscriptionRenewal entity data model. */
class SubscriptionRenewal
{
    public mixed $contract = null;
    public ?string $created_at = null;
    public ?string $decimal_quantity = null;
    public ?string $ends_at = null;
    public ?int $id = null;
    public ?int $item_id = null;
    public ?string $item_subclass = null;
    public ?string $item_type = null;
    public ?string $lock_in_at = null;
    public ?int $price_point_id = null;
    public ?string $price_point_type = null;
    public ?int $quantity = null;
    public ?array $scheduled_renewal_configuration_item = null;
    public ?array $scheduled_renewal_configuration_items = null;
    public ?int $site_id = null;
    public ?string $starts_at = null;
    public ?string $status = null;
    public ?int $subscription_id = null;
    public ?int $subscription_renewal_configuration_id = null;
}

/** Request payload for SubscriptionRenewal#load. */
class SubscriptionRenewalLoadMatch
{
    public int $id;
    public int $subscription_id;
}

/** Request payload for SubscriptionRenewal#list. */
class SubscriptionRenewalListMatch
{
    public int $id;
    public mixed $status = null;
}

/** Request payload for SubscriptionRenewal#create. */
class SubscriptionRenewalCreateData
{
    public int $scheduled_renewal_id;
    public int $subscription_id;
    public mixed $contract = null;
    public ?string $created_at = null;
    public ?string $decimal_quantity = null;
    public ?string $ends_at = null;
    public ?int $id = null;
    public ?int $item_id = null;
    public ?string $item_subclass = null;
    public ?string $item_type = null;
    public ?string $lock_in_at = null;
    public ?int $price_point_id = null;
    public ?string $price_point_type = null;
    public ?int $quantity = null;
    public ?array $scheduled_renewal_configuration_item = null;
    public ?array $scheduled_renewal_configuration_items = null;
    public ?int $site_id = null;
    public ?string $starts_at = null;
    public ?string $status = null;
    public ?int $subscription_renewal_configuration_id = null;
}

/** Request payload for SubscriptionRenewal#update. */
class SubscriptionRenewalUpdateData
{
    public ?int $id = null;
    public ?int $scheduled_renewal_id = null;
    public int $subscription_id;
    public mixed $contract = null;
    public ?string $created_at = null;
    public ?string $decimal_quantity = null;
    public ?string $ends_at = null;
    public ?int $item_id = null;
    public ?string $item_subclass = null;
    public ?string $item_type = null;
    public ?string $lock_in_at = null;
    public ?int $price_point_id = null;
    public ?string $price_point_type = null;
    public ?int $quantity = null;
    public ?array $scheduled_renewal_configuration_item = null;
    public ?array $scheduled_renewal_configuration_items = null;
    public ?int $site_id = null;
    public ?string $starts_at = null;
    public ?string $status = null;
    public ?int $subscription_renewal_configuration_id = null;
}

/** Request payload for SubscriptionRenewal#remove. */
class SubscriptionRenewalRemoveMatch
{
    public int $id;
    public int $scheduled_renewal_id;
    public int $subscription_id;
}

/** SubscriptionStatus entity data model. */
class SubscriptionStatus
{
    public ?int $existing_balance_in_cents = null;
    public ?string $id = null;
    public ?array $line_items = null;
    public ?string $next_assessment_at = null;
    public ?int $subtotal_in_cents = null;
    public ?int $total_amount_due_in_cents = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public ?bool $uncalculated_taxes = null;
}

/** Request payload for SubscriptionStatus#create. */
class SubscriptionStatusCreateData
{
    public int $subscription_id;
    public ?int $existing_balance_in_cents = null;
    public ?string $id = null;
    public ?array $line_items = null;
    public ?string $next_assessment_at = null;
    public ?int $subtotal_in_cents = null;
    public ?int $total_amount_due_in_cents = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public ?bool $uncalculated_taxes = null;
}

/** Request payload for SubscriptionStatus#update. */
class SubscriptionStatusUpdateData
{
    public int $id;
    public ?int $existing_balance_in_cents = null;
    public ?array $line_items = null;
    public ?string $next_assessment_at = null;
    public ?int $subtotal_in_cents = null;
    public ?int $total_amount_due_in_cents = null;
    public ?int $total_discount_in_cents = null;
    public ?int $total_in_cents = null;
    public ?int $total_tax_in_cents = null;
    public ?bool $uncalculated_taxes = null;
}

/** Request payload for SubscriptionStatus#remove. */
class SubscriptionStatusRemoveMatch
{
    public int $subscription_id;
}

/** Usage entity data model. */
class Usage
{
    public array $usage;
}

/** Request payload for Usage#list. */
class UsageListMatch
{
    public string $component_id;
    public mixed $subscription_id_or_reference;
    public ?int $max_id = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since_date = null;
    public ?int $since_id = null;
    public ?string $until_date = null;
}

/** Webhook entity data model. */
class Webhook
{
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook = null;
    public ?array $webhook_subscriptions = null;
}

/** Request payload for Webhook#list. */
class WebhookListMatch
{
    public mixed $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $since_date = null;
    public mixed $status = null;
    public ?int $subscription = null;
    public ?string $until_date = null;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook = null;
    public ?array $webhook_subscriptions = null;
}

/** Request payload for Webhook#update. */
class WebhookUpdateData
{
    public ?int $id = null;
    public ?int $site_id = null;
    public ?string $status = null;
    public ?string $url = null;
    public ?array $webhook = null;
    public ?array $webhook_subscriptions = null;
}

