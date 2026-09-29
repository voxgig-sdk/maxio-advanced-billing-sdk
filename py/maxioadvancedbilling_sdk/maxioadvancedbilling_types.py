# Typed models for the MaxioAdvancedBilling SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AccountBalance(TypedDict, total=False):
    open_invoices: Any
    pending_discounts: Any
    pending_invoices: Any
    prepayments: Any
    service_credits: Any


class AccountBalanceLoadMatch(TypedDict):
    subscription_id: int


class Allocation(TypedDict, total=False):
    allocation: dict


class AllocationListMatchRequired(TypedDict):
    component_id: int
    subscription_id: int


class AllocationListMatch(AllocationListMatchRequired, total=False):
    page: int


class AllocationCreateDataRequired(TypedDict):
    subscription_id: int


class AllocationCreateData(AllocationCreateDataRequired, total=False):
    allocation: dict


class BatchJob(TypedDict, total=False):
    completed: str
    created_at: str
    finished_at: str
    id: int
    row_count: int


class BatchJobLoadMatch(TypedDict):
    batch_id: str


class BatchJobCreateData(TypedDict, total=False):
    completed: str
    created_at: str
    finished_at: str
    id: int
    row_count: int


class BillingPortal(TypedDict, total=False):
    created_at: str
    expires_at: str
    fetch_count: int
    last_accepted_at: str
    last_invite_accepted_at: str
    last_invite_sent_at: str
    last_sent_at: str
    new_link_available_at: str
    send_invite_link_text: str
    uninvited_count: int
    url: str


class BillingPortalLoadMatch(TypedDict):
    customer_id: int


class BillingPortalCreateDataRequired(TypedDict):
    customer_id: int


class BillingPortalCreateData(BillingPortalCreateDataRequired, total=False):
    created_at: str
    expires_at: str
    fetch_count: int
    last_accepted_at: str
    last_invite_accepted_at: str
    last_invite_sent_at: str
    last_sent_at: str
    new_link_available_at: str
    send_invite_link_text: str
    uninvited_count: int
    url: str


class BillingPortalRemoveMatch(TypedDict):
    customer_id: int


class Component(TypedDict, total=False):
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    component: dict
    created_at: str
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    id: int
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    price_per_unit_in_cents: int
    price_point_count: int
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    product_family_name: str
    recurring: bool
    tax_code: str
    taxable: bool
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentLoadMatchRequired(TypedDict):
    component_id: str
    product_family_id: int


class ComponentLoadMatch(ComponentLoadMatchRequired, total=False):
    include_feature: bool


class ComponentListMatch(TypedDict, total=False):
    date_field: Any
    end_date: str
    end_datetime: str
    filter: Any
    include_archived: bool
    page: int
    per_page: int
    start_date: str
    start_datetime: str


class ComponentCreateDataRequired(TypedDict):
    product_family_id: str


class ComponentCreateData(ComponentCreateDataRequired, total=False):
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    component: dict
    created_at: str
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    id: int
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    price_per_unit_in_cents: int
    price_point_count: int
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_name: str
    recurring: bool
    tax_code: str
    taxable: bool
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentUpdateDataRequired(TypedDict):
    component_id: str


class ComponentUpdateData(ComponentUpdateDataRequired, total=False):
    product_family_id: int
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    component: dict
    created_at: str
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    id: int
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    price_per_unit_in_cents: int
    price_point_count: int
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_name: str
    recurring: bool
    tax_code: str
    taxable: bool
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentRemoveMatch(TypedDict):
    component_id: str
    product_family_id: int


class ComponentFeature(TypedDict, total=False):
    id: str


class ComponentFeatureRemoveMatchRequired(TypedDict):
    component_id: int
    id: int


class ComponentFeatureRemoveMatch(ComponentFeatureRemoveMatchRequired, total=False):
    destroy_entitlement: bool


class ComponentPricePoint(TypedDict, total=False):
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    component_id: int
    created_at: str
    currency_prices: list
    default: bool
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    id: int
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    overage_pricing_scheme: Any
    price_per_unit_in_cents: int
    price_point: dict
    price_point_count: int
    price_points: list
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    product_family_name: str
    recurring: bool
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    type: Any
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentPricePointListMatch(TypedDict, total=False):
    direction: Any
    filter: Any
    include: Any
    page: int
    per_page: int


class ComponentPricePointCreateDataRequired(TypedDict):
    id: int


class ComponentPricePointCreateData(ComponentPricePointCreateDataRequired, total=False):
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    component_id: int
    created_at: str
    currency_prices: list
    default: bool
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    overage_pricing_scheme: Any
    price_per_unit_in_cents: int
    price_point: dict
    price_point_count: int
    price_points: list
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    product_family_name: str
    recurring: bool
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    type: Any
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentPricePointUpdateDataRequired(TypedDict):
    price_point_id: str


class ComponentPricePointUpdateData(ComponentPricePointUpdateDataRequired, total=False):
    component_id: str
    accounting_code: str
    allow_fractional_quantities: bool
    archived: bool
    archived_at: str
    created_at: str
    currency_prices: list
    default: bool
    default_price_point_id: int
    default_price_point_name: str
    description: str
    downgrade_credit: Any
    event_based_billing_metric_id: int
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    hide_date_range_on_invoice: bool
    id: int
    interval: int
    interval_unit: Any
    item_category: Any
    kind: Any
    name: str
    overage_prices: list
    overage_pricing_scheme: Any
    price_per_unit_in_cents: int
    price_point: dict
    price_point_count: int
    price_points: list
    price_points_url: str
    prices: list
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    product_family_name: str
    recurring: bool
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    type: Any
    unit_name: str
    unit_price: str
    unspsc_code: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool


class ComponentPricePointRemoveMatch(TypedDict):
    component_id: str
    price_point_id: str


class ComponentPricePointCurrencyOverage(TypedDict, total=False):
    archived_at: str
    component_id: int
    created_at: str
    currency_overage_prices: list
    currency_prices: list
    default: bool
    expiration_interval: int
    expiration_interval_unit: Any
    handle: str
    id: int
    interval: int
    interval_unit: Any
    name: str
    overage_prices: list
    overage_pricing_scheme: Any
    prices: list
    pricing_scheme: Any
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_included: bool
    type: Any
    updated_at: str
    use_site_exchange_rate: bool


class ComponentPricePointCurrencyOverageLoadMatchRequired(TypedDict):
    component_id: str
    price_point_id: str


class ComponentPricePointCurrencyOverageLoadMatch(ComponentPricePointCurrencyOverageLoadMatchRequired, total=False):
    currency_price: bool


class Coupon(TypedDict, total=False):
    allow_negative_balance: bool
    amount: float
    amount_in_cents: int
    apply_on_cancel_at_end_of_period: bool
    apply_on_subscription_expiration: bool
    archived_at: str
    code: str
    compounding_strategy: Any
    conversion_limit: str
    coupon: dict
    coupon_restrictions: list
    created_at: str
    currency_prices: list
    description: str
    discount_type: str
    duration_interval: int
    duration_interval_span: str
    duration_interval_unit: str
    duration_period_count: int
    end_date: str
    exclude_mid_period_allocations: bool
    id: int
    name: str
    percentage: str
    product_family_id: int
    product_family_name: str
    recurring: bool
    recurring_scheme: str
    stackable: bool
    start_date: str
    updated_at: str
    use_site_exchange_rate: bool


class CouponLoadMatchRequired(TypedDict):
    coupon_id: int
    product_family_id: int


class CouponLoadMatch(CouponLoadMatchRequired, total=False):
    currency_price: bool


class CouponListMatch(TypedDict, total=False):
    currency_price: bool
    filter: Any
    page: int
    per_page: int


class CouponCreateDataRequired(TypedDict):
    product_family_id: int


class CouponCreateData(CouponCreateDataRequired, total=False):
    allow_negative_balance: bool
    amount: float
    amount_in_cents: int
    apply_on_cancel_at_end_of_period: bool
    apply_on_subscription_expiration: bool
    archived_at: str
    code: str
    compounding_strategy: Any
    conversion_limit: str
    coupon: dict
    coupon_restrictions: list
    created_at: str
    currency_prices: list
    description: str
    discount_type: str
    duration_interval: int
    duration_interval_span: str
    duration_interval_unit: str
    duration_period_count: int
    end_date: str
    exclude_mid_period_allocations: bool
    id: int
    name: str
    percentage: str
    product_family_name: str
    recurring: bool
    recurring_scheme: str
    stackable: bool
    start_date: str
    updated_at: str
    use_site_exchange_rate: bool


class CouponUpdateDataRequired(TypedDict):
    coupon_id: int
    product_family_id: int


class CouponUpdateData(CouponUpdateDataRequired, total=False):
    allow_negative_balance: bool
    amount: float
    amount_in_cents: int
    apply_on_cancel_at_end_of_period: bool
    apply_on_subscription_expiration: bool
    archived_at: str
    code: str
    compounding_strategy: Any
    conversion_limit: str
    coupon: dict
    coupon_restrictions: list
    created_at: str
    currency_prices: list
    description: str
    discount_type: str
    duration_interval: int
    duration_interval_span: str
    duration_interval_unit: str
    duration_period_count: int
    end_date: str
    exclude_mid_period_allocations: bool
    id: int
    name: str
    percentage: str
    product_family_name: str
    recurring: bool
    recurring_scheme: str
    stackable: bool
    start_date: str
    updated_at: str
    use_site_exchange_rate: bool


class CouponRemoveMatch(TypedDict):
    id: int
    subcode: str


class CouponCurrency(TypedDict, total=False):
    id: str


class CouponCurrencyUpdateData(TypedDict):
    id: int


class CouponSubcode(TypedDict, total=False):
    created_codes: list
    duplicate_codes: list
    id: str
    invalid_codes: list


class CouponSubcodeUpdateDataRequired(TypedDict):
    id: int


class CouponSubcodeUpdateData(CouponSubcodeUpdateDataRequired, total=False):
    created_codes: list
    duplicate_codes: list
    invalid_codes: list


class CouponUsage(TypedDict, total=False):
    id: int
    name: str
    revenue: int
    revenue_in_cents: int
    savings: int
    savings_in_cents: int
    signups: int


class CouponUsageListMatch(TypedDict):
    id: int
    product_family_id: int


class CustomField(TypedDict, total=False):
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    resource_id: int
    scope: dict
    value: str


class CustomFieldListMatchRequired(TypedDict):
    resource_type: Any


class CustomFieldListMatch(CustomFieldListMatchRequired, total=False):
    date_field: Any
    direction: Any
    end_date: str
    end_datetime: str
    page: int
    per_page: int
    resource_id: list
    start_date: str
    start_datetime: str
    with_deleted: bool
    name: str


class CustomFieldCreateDataRequired(TypedDict):
    resource_type: Any


class CustomFieldCreateData(CustomFieldCreateDataRequired, total=False):
    resource_id: int
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    scope: dict
    value: str


class CustomFieldUpdateDataRequired(TypedDict):
    resource_type: Any


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    resource_id: int
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    scope: dict
    value: str


class CustomFieldRemoveMatchRequired(TypedDict):
    resource_type: Any


class CustomFieldRemoveMatch(CustomFieldRemoveMatchRequired, total=False):
    resource_id: int
    name: str


class CustomerRequired(TypedDict):
    customer: dict


class Customer(CustomerRequired, total=False):
    address: str
    address_2: str
    branding_theme_id: int
    cc_emails: str
    city: str
    country: str
    country_name: str
    created_at: str
    default_auto_renewal_profile_id: int
    default_subscription_group_uid: str
    email: str
    entity_identifier_kind: Any
    entity_identifier_value: str
    first_name: str
    id: int
    last_name: str
    locale: str
    maxioid: str
    organization: str
    parent_id: int
    phone: str
    portal_customer_created_at: str
    portal_invite_last_accepted_at: str
    portal_invite_last_sent_at: str
    reference: str
    salesforce_id: str
    state: str
    state_name: str
    surcharging: bool
    tax_exempt: bool
    tax_exempt_reason: str
    updated_at: str
    vat_country: str
    vat_number: str
    verified: bool
    zip: str


class CustomerLoadMatch(TypedDict):
    id: int


class CustomerListMatch(TypedDict, total=False):
    date_field: Any
    direction: Any
    end_date: str
    end_datetime: str
    page: int
    per_page: int
    q: str
    start_date: str
    start_datetime: str


class CustomerCreateDataRequired(TypedDict):
    customer: dict


class CustomerCreateData(CustomerCreateDataRequired, total=False):
    address: str
    address_2: str
    branding_theme_id: int
    cc_emails: str
    city: str
    country: str
    country_name: str
    created_at: str
    default_auto_renewal_profile_id: int
    default_subscription_group_uid: str
    email: str
    entity_identifier_kind: Any
    entity_identifier_value: str
    first_name: str
    id: int
    last_name: str
    locale: str
    maxioid: str
    organization: str
    parent_id: int
    phone: str
    portal_customer_created_at: str
    portal_invite_last_accepted_at: str
    portal_invite_last_sent_at: str
    reference: str
    salesforce_id: str
    state: str
    state_name: str
    surcharging: bool
    tax_exempt: bool
    tax_exempt_reason: str
    updated_at: str
    vat_country: str
    vat_number: str
    verified: bool
    zip: str


class CustomerUpdateDataRequired(TypedDict):
    id: int


class CustomerUpdateData(CustomerUpdateDataRequired, total=False):
    address: str
    address_2: str
    branding_theme_id: int
    cc_emails: str
    city: str
    country: str
    country_name: str
    created_at: str
    customer: dict
    default_auto_renewal_profile_id: int
    default_subscription_group_uid: str
    email: str
    entity_identifier_kind: Any
    entity_identifier_value: str
    first_name: str
    last_name: str
    locale: str
    maxioid: str
    organization: str
    parent_id: int
    phone: str
    portal_customer_created_at: str
    portal_invite_last_accepted_at: str
    portal_invite_last_sent_at: str
    reference: str
    salesforce_id: str
    state: str
    state_name: str
    surcharging: bool
    tax_exempt: bool
    tax_exempt_reason: str
    updated_at: str
    vat_country: str
    vat_number: str
    verified: bool
    zip: str


class CustomerRemoveMatch(TypedDict):
    id: int


class DelayedCancelRequired(TypedDict):
    subscription: dict


class DelayedCancel(DelayedCancelRequired, total=False):
    message: str


class DelayedCancelCreateDataRequired(TypedDict):
    subscription_id: int
    subscription: dict


class DelayedCancelCreateData(DelayedCancelCreateDataRequired, total=False):
    message: str


class Endpoint(TypedDict, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook_subscriptions: list


class EndpointListMatch(TypedDict, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook_subscriptions: list


class EndpointUpdateDataRequired(TypedDict):
    endpoint_id: int


class EndpointUpdateData(EndpointUpdateDataRequired, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook_subscriptions: list


class Entitlement(TypedDict):
    customer_id: int
    entitlements: list
    status: str
    subscription_id: int


class EntitlementListMatch(TypedDict):
    subscription_id: int


class Event(TypedDict):
    event: dict


class EventLoadMatch(TypedDict, total=False):
    direction: Any
    filter: list
    max_id: int
    page: int
    per_page: int
    since_id: int


class EventListMatch(TypedDict, total=False):
    date_field: Any
    direction: Any
    end_date: str
    end_datetime: str
    filter: list
    max_id: int
    page: int
    per_page: int
    since_id: int
    start_date: str
    start_datetime: str


class EventsBasedBillingSegment(TypedDict, total=False):
    id: str


class EventsBasedBillingSegmentRemoveMatch(TypedDict):
    component_id: str
    id: float
    price_point_id: str


class FeatureRequired(TypedDict):
    feature: dict


class Feature(FeatureRequired, total=False):
    archived_at: str
    created_at: str
    default_periodicity_interval: int
    default_periodicity_unit: Any
    default_value: str
    description: str
    feature_key: str
    feature_kind: Any
    feature_name: str
    feature_template_id: int
    id: int
    key: str
    kind: Any
    name: str
    periodicity_interval: int
    periodicity_unit: Any
    plans_count: int
    price_point_id: int
    price_point_type: Any
    products_count: int
    unit: str
    updated_at: str
    value: str
    value_type: Any


class FeatureListMatch(TypedDict, total=False):
    kind: Any
    page: int
    per_page: int
    q: str
    sort_by: Any
    sort_direction: Any
    status: Any
    updated_from: str
    updated_to: str


class FeatureCreateDataRequired(TypedDict):
    feature: dict


class FeatureCreateData(FeatureCreateDataRequired, total=False):
    archived_at: str
    created_at: str
    default_periodicity_interval: int
    default_periodicity_unit: Any
    default_value: str
    description: str
    feature_key: str
    feature_kind: Any
    feature_name: str
    feature_template_id: int
    id: int
    key: str
    kind: Any
    name: str
    periodicity_interval: int
    periodicity_unit: Any
    plans_count: int
    price_point_id: int
    price_point_type: Any
    products_count: int
    unit: str
    updated_at: str
    value: str
    value_type: Any


class FeatureCatalogItemRequired(TypedDict):
    feature: dict


class FeatureCatalogItem(FeatureCatalogItemRequired, total=False):
    archived_at: str
    created_at: str
    feature_key: str
    feature_kind: Any
    feature_name: str
    feature_template_id: int
    id: int
    periodicity_interval: int
    periodicity_unit: Any
    price_point_id: int
    price_point_type: Any
    updated_at: str
    value: str


class FeatureCatalogItemLoadMatchRequired(TypedDict):
    id: int


class FeatureCatalogItemLoadMatch(FeatureCatalogItemLoadMatchRequired, total=False):
    component_id: int
    product_id: int


class FeatureCatalogItemCreateDataRequired(TypedDict):
    id: int
    feature: dict


class FeatureCatalogItemCreateData(FeatureCatalogItemCreateDataRequired, total=False):
    component_id: int
    product_id: int
    archived_at: str
    created_at: str
    feature_key: str
    feature_kind: Any
    feature_name: str
    feature_template_id: int
    periodicity_interval: int
    periodicity_unit: Any
    price_point_id: int
    price_point_type: Any
    updated_at: str
    value: str


class FeatureCatalogItemUpdateDataRequired(TypedDict):
    id: int


class FeatureCatalogItemUpdateData(FeatureCatalogItemUpdateDataRequired, total=False):
    component_id: int
    product_id: int
    archived_at: str
    created_at: str
    feature: dict
    feature_key: str
    feature_kind: Any
    feature_name: str
    feature_template_id: int
    periodicity_interval: int
    periodicity_unit: Any
    price_point_id: int
    price_point_type: Any
    updated_at: str
    value: str


class FeatureTemplateRequired(TypedDict):
    feature: Any


class FeatureTemplate(FeatureTemplateRequired, total=False):
    archived_at: str
    created_at: str
    default_periodicity_interval: int
    default_periodicity_unit: Any
    default_value: str
    description: str
    id: int
    key: str
    kind: Any
    name: str
    plans_count: int
    products_count: int
    unit: str
    updated_at: str
    value_type: Any


class FeatureTemplateLoadMatch(TypedDict):
    id: int


class FeatureTemplateCreateDataRequired(TypedDict):
    id: int
    feature: Any


class FeatureTemplateCreateData(FeatureTemplateCreateDataRequired, total=False):
    archived_at: str
    created_at: str
    default_periodicity_interval: int
    default_periodicity_unit: Any
    default_value: str
    description: str
    key: str
    kind: Any
    name: str
    plans_count: int
    products_count: int
    unit: str
    updated_at: str
    value_type: Any


class FeatureTemplateUpdateDataRequired(TypedDict):
    id: int


class FeatureTemplateUpdateData(FeatureTemplateUpdateDataRequired, total=False):
    archived_at: str
    created_at: str
    default_periodicity_interval: int
    default_periodicity_unit: Any
    default_value: str
    description: str
    feature: Any
    key: str
    kind: Any
    name: str
    plans_count: int
    products_count: int
    unit: str
    updated_at: str
    value_type: Any


class FeatureTemplateRemoveMatchRequired(TypedDict):
    id: int


class FeatureTemplateRemoveMatch(FeatureTemplateRemoveMatchRequired, total=False):
    remove_from_catalog: bool


class Insight(TypedDict, total=False):
    amount_formatted: str
    amount_in_cents: int
    at_time: str
    breakouts: dict
    currency: str
    currency_symbol: str
    movements: list
    page: int
    per_page: int
    seller_name: str
    site_currency: str
    site_id: int
    site_name: str
    stats: dict
    total_entries: int
    total_pages: int


class InsightLoadMatch(TypedDict, total=False):
    direction: Any
    page: int
    per_page: int
    subscription_id: int


class InvoiceRequired(TypedDict):
    void: dict


class Invoice(InvoiceRequired, total=False):
    applications: list
    applied_amount: str
    applied_date: str
    avatax_details: dict
    billing_address: Any
    branding_theme_id: int
    collection_method: Any
    consolidation_level: Any
    created_at: str
    credit_amount: str
    credits: list
    currency: str
    custom_fields: list
    customer: Any
    customer_id: int
    debit_amount: str
    debits: list
    discount_amount: str
    discounts: list
    display_settings: dict
    due_amount: str
    due_date: str
    group_primary_subscription_id: int
    id: int
    issue_date: str
    line_items: list
    memo: str
    net_terms: int
    number: str
    origin_invoices: list
    paid_amount: str
    paid_date: str
    paid_invoices: list
    parent_invoice_id: int
    parent_invoice_number: int
    parent_invoice_uid: str
    payer: dict
    payment_instructions: str
    payments: list
    prepayment: str
    previous_balance_data: dict
    product_family_name: str
    product_name: str
    public_url: str
    public_url_expires_on: str
    recipient_emails: list
    refund_amount: str
    refunds: list
    remaining_amount: str
    role: str
    seller: Any
    sequence_number: int
    shipping_address: Any
    site_id: int
    status: Any
    subscription_group_id: int
    subscription_id: int
    subtotal_amount: str
    tax_amount: str
    taxes: list
    total_amount: str
    transaction_time: str
    uid: str
    updated_at: str


class InvoiceListMatch(TypedDict):
    uid: str


class InvoiceCreateDataRequired(TypedDict):
    subscription_id: int
    void: dict


class InvoiceCreateData(InvoiceCreateDataRequired, total=False):
    applications: list
    applied_amount: str
    applied_date: str
    avatax_details: dict
    billing_address: Any
    branding_theme_id: int
    collection_method: Any
    consolidation_level: Any
    created_at: str
    credit_amount: str
    credits: list
    currency: str
    custom_fields: list
    customer: Any
    customer_id: int
    debit_amount: str
    debits: list
    discount_amount: str
    discounts: list
    display_settings: dict
    due_amount: str
    due_date: str
    group_primary_subscription_id: int
    id: int
    issue_date: str
    line_items: list
    memo: str
    net_terms: int
    number: str
    origin_invoices: list
    paid_amount: str
    paid_date: str
    paid_invoices: list
    parent_invoice_id: int
    parent_invoice_number: int
    parent_invoice_uid: str
    payer: dict
    payment_instructions: str
    payments: list
    prepayment: str
    previous_balance_data: dict
    product_family_name: str
    product_name: str
    public_url: str
    public_url_expires_on: str
    recipient_emails: list
    refund_amount: str
    refunds: list
    remaining_amount: str
    role: str
    seller: Any
    sequence_number: int
    shipping_address: Any
    site_id: int
    status: Any
    subscription_group_id: int
    subtotal_amount: str
    tax_amount: str
    taxes: list
    total_amount: str
    transaction_time: str
    uid: str
    updated_at: str


class InvoiceUpdateDataRequired(TypedDict):
    subscription_id: int
    uid: str


class InvoiceUpdateData(InvoiceUpdateDataRequired, total=False):
    applications: list
    applied_amount: str
    applied_date: str
    avatax_details: dict
    billing_address: Any
    branding_theme_id: int
    collection_method: Any
    consolidation_level: Any
    created_at: str
    credit_amount: str
    credits: list
    currency: str
    custom_fields: list
    customer: Any
    customer_id: int
    debit_amount: str
    debits: list
    discount_amount: str
    discounts: list
    display_settings: dict
    due_amount: str
    due_date: str
    group_primary_subscription_id: int
    id: int
    issue_date: str
    line_items: list
    memo: str
    net_terms: int
    number: str
    origin_invoices: list
    paid_amount: str
    paid_date: str
    paid_invoices: list
    parent_invoice_id: int
    parent_invoice_number: int
    parent_invoice_uid: str
    payer: dict
    payment_instructions: str
    payments: list
    prepayment: str
    previous_balance_data: dict
    product_family_name: str
    product_name: str
    public_url: str
    public_url_expires_on: str
    recipient_emails: list
    refund_amount: str
    refunds: list
    remaining_amount: str
    role: str
    seller: Any
    sequence_number: int
    shipping_address: Any
    site_id: int
    status: Any
    subscription_group_id: int
    subtotal_amount: str
    tax_amount: str
    taxes: list
    total_amount: str
    transaction_time: str
    updated_at: str
    void: dict


class InvoiceRemoveMatch(TypedDict):
    subscription_id: int
    uid: str


class ListSaleRepItem(TypedDict, total=False):
    full_name: str
    id: int
    mrr_data: dict
    subscriptions_count: int
    test_mode: bool


class ListSaleRepItemListMatchRequired(TypedDict):
    seller_id: str


class ListSaleRepItemListMatch(ListSaleRepItemListMatchRequired, total=False):
    live_mode: bool
    page: int
    per_page: int


class ListSegment(TypedDict, total=False):
    component_id: int
    created_at: str
    event_based_billing_metric_id: int
    id: int
    price_point_id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    segments: list
    updated_at: str


class ListSegmentListMatchRequired(TypedDict):
    component_id: str
    price_point_id: str


class ListSegmentListMatch(ListSegmentListMatchRequired, total=False):
    filter: Any
    page: int
    per_page: int


class ListSegmentCreateDataRequired(TypedDict):
    component_id: str
    price_point_id: str


class ListSegmentCreateData(ListSegmentCreateDataRequired, total=False):
    created_at: str
    event_based_billing_metric_id: int
    id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    segments: list
    updated_at: str


class ListSegmentUpdateDataRequired(TypedDict):
    component_id: str
    price_point_id: str


class ListSegmentUpdateData(ListSegmentUpdateDataRequired, total=False):
    created_at: str
    event_based_billing_metric_id: int
    id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    segments: list
    updated_at: str


class Offer(TypedDict, total=False):
    archived_at: str
    created_at: str
    description: str
    handle: str
    id: int
    name: str
    offer: dict
    offer_discounts: list
    offer_items: list
    offer_signup_pages: list
    product_family_id: int
    product_family_name: str
    product_id: int
    product_name: str
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_name: str
    product_revisable_number: int
    site_id: int
    updated_at: str


class OfferLoadMatch(TypedDict):
    offer_id: int


class OfferListMatch(TypedDict, total=False):
    include_archived: bool
    page: int
    per_page: int


class OfferCreateData(TypedDict, total=False):
    archived_at: str
    created_at: str
    description: str
    handle: str
    id: int
    name: str
    offer: dict
    offer_discounts: list
    offer_items: list
    offer_signup_pages: list
    product_family_id: int
    product_family_name: str
    product_id: int
    product_name: str
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_name: str
    product_revisable_number: int
    site_id: int
    updated_at: str


class OfferUpdateDataRequired(TypedDict):
    id: int


class OfferUpdateData(OfferUpdateDataRequired, total=False):
    archived_at: str
    created_at: str
    description: str
    handle: str
    name: str
    offer: dict
    offer_discounts: list
    offer_items: list
    offer_signup_pages: list
    product_family_id: int
    product_family_name: str
    product_id: int
    product_name: str
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_name: str
    product_revisable_number: int
    site_id: int
    updated_at: str


class OneTimeToken(TypedDict):
    pass


class OneTimeTokenLoadMatch(TypedDict):
    chargify_token: str


class PaymentProfileRequired(TypedDict):
    payment_profile: Any


class PaymentProfile(PaymentProfileRequired, total=False):
    bank_account_holder_type: Any
    bank_account_type: Any
    bank_name: str
    billing_address: str
    billing_address_2: str
    billing_city: str
    billing_country: str
    billing_state: str
    billing_zip: str
    card_type: str
    created_at: str
    current_vault: str
    customer_id: int
    customer_vault_token: str
    disabled: bool
    expiration_month: int
    expiration_year: int
    first_name: str
    gateway_handle: str
    id: int
    last_name: str
    masked_bank_account_number: str
    masked_bank_routing_number: str
    masked_card_number: str
    payment_type: str
    site_gateway_setting_id: int
    updated_at: str
    vault_token: str
    verified: bool


class PaymentProfileLoadMatch(TypedDict):
    payment_profile_id: int


class PaymentProfileListMatch(TypedDict, total=False):
    customer_id: int
    page: int
    per_page: int


class PaymentProfileCreateDataRequired(TypedDict):
    payment_profile: Any


class PaymentProfileCreateData(PaymentProfileCreateDataRequired, total=False):
    bank_account_holder_type: Any
    bank_account_type: Any
    bank_name: str
    billing_address: str
    billing_address_2: str
    billing_city: str
    billing_country: str
    billing_state: str
    billing_zip: str
    card_type: str
    created_at: str
    current_vault: str
    customer_id: int
    customer_vault_token: str
    disabled: bool
    expiration_month: int
    expiration_year: int
    first_name: str
    gateway_handle: str
    id: int
    last_name: str
    masked_bank_account_number: str
    masked_bank_routing_number: str
    masked_card_number: str
    payment_type: str
    site_gateway_setting_id: int
    updated_at: str
    vault_token: str
    verified: bool


class PaymentProfileUpdateDataRequired(TypedDict):
    bank_account_id: int


class PaymentProfileUpdateData(PaymentProfileUpdateDataRequired, total=False):
    bank_account_holder_type: Any
    bank_account_type: Any
    bank_name: str
    billing_address: str
    billing_address_2: str
    billing_city: str
    billing_country: str
    billing_state: str
    billing_zip: str
    card_type: str
    created_at: str
    current_vault: str
    customer_id: int
    customer_vault_token: str
    disabled: bool
    expiration_month: int
    expiration_year: int
    first_name: str
    gateway_handle: str
    id: int
    last_name: str
    masked_bank_account_number: str
    masked_bank_routing_number: str
    masked_card_number: str
    payment_profile: Any
    payment_type: str
    site_gateway_setting_id: int
    updated_at: str
    vault_token: str
    verified: bool


class PaymentProfileRemoveMatchRequired(TypedDict):
    payment_profile_id: int


class PaymentProfileRemoveMatch(PaymentProfileRemoveMatchRequired, total=False):
    subscription_group_id: str
    subscription_id: int


class Prepayment(TypedDict, total=False):
    id: str


class PrepaymentCreateData(TypedDict):
    id: int
    subscription_id: int


class Product(TypedDict, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    id: int
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    item_category: str
    name: str
    price_in_cents: int
    product: dict
    product_family: dict
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    tax_code: str
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductLoadMatch(TypedDict):
    api_handle: str


class ProductListMatch(TypedDict, total=False):
    date_field: Any
    end_date: str
    end_datetime: str
    filter: Any
    include: Any
    include_archived: bool
    include_feature: bool
    page: int
    per_page: int
    start_date: str
    start_datetime: str


class ProductCreateDataRequired(TypedDict):
    product_family_id: str


class ProductCreateData(ProductCreateDataRequired, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    id: int
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    item_category: str
    name: str
    price_in_cents: int
    product: dict
    product_family: dict
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    tax_code: str
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductUpdateDataRequired(TypedDict):
    product_id: int


class ProductUpdateData(ProductUpdateDataRequired, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    id: int
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    item_category: str
    name: str
    price_in_cents: int
    product: dict
    product_family: dict
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    tax_code: str
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductRemoveMatch(TypedDict):
    product_id: int


class ProductFamily(TypedDict, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    description: str
    handle: str
    id: int
    name: str
    product_family: dict
    surcharging: bool
    updated_at: str


class ProductFamilyLoadMatch(TypedDict):
    id: int


class ProductFamilyListMatch(TypedDict, total=False):
    date_field: Any
    end_date: str
    end_datetime: str
    start_date: str
    start_datetime: str


class ProductFamilyCreateData(TypedDict, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    description: str
    handle: str
    id: int
    name: str
    product_family: dict
    surcharging: bool
    updated_at: str


class ProductFeature(TypedDict, total=False):
    id: str


class ProductFeatureRemoveMatchRequired(TypedDict):
    id: int
    product_id: int


class ProductFeatureRemoveMatch(ProductFeatureRemoveMatchRequired, total=False):
    destroy_entitlement: bool


class ProductPricePoint(TypedDict, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    currency_prices: list
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    id: int
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    introductory_offer: bool
    item_category: str
    name: str
    price_in_cents: int
    price_point: dict
    price_points: list
    product_family: dict
    product_id: int
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    trial_type: Any
    type: Any
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductPricePointLoadMatchRequired(TypedDict):
    price_point_id: str
    product_id: str


class ProductPricePointLoadMatch(ProductPricePointLoadMatchRequired, total=False):
    currency_price: bool


class ProductPricePointListMatch(TypedDict, total=False):
    direction: Any
    filter: Any
    include: Any
    page: int
    per_page: int


class ProductPricePointCreateDataRequired(TypedDict):
    id: str


class ProductPricePointCreateData(ProductPricePointCreateDataRequired, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    currency_prices: list
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    introductory_offer: bool
    item_category: str
    name: str
    price_in_cents: int
    price_point: dict
    price_points: list
    product_family: dict
    product_id: int
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    trial_type: Any
    type: Any
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductPricePointUpdateDataRequired(TypedDict):
    price_point_id: str
    product_id: str


class ProductPricePointUpdateData(ProductPricePointUpdateDataRequired, total=False):
    accounting_code: str
    archived_at: str
    created_at: str
    currency_prices: list
    default_product_price_point_id: int
    description: str
    expiration_interval: int
    expiration_interval_unit: Any
    features: list
    handle: str
    id: int
    initial_charge_after_trial: bool
    initial_charge_in_cents: int
    interval: int
    interval_unit: Any
    introductory_offer: bool
    item_category: str
    name: str
    price_in_cents: int
    price_point: dict
    price_points: list
    product_family: dict
    product_price_point_handle: str
    product_price_point_id: int
    product_price_point_name: str
    public_signup_pages: list
    request_billing_address: bool
    request_credit_card: bool
    require_billing_address: bool
    require_credit_card: bool
    require_shipping_address: bool
    return_params: str
    subscription_id: int
    tax_code: str
    tax_included: bool
    taxable: bool
    trial_interval: int
    trial_interval_unit: Any
    trial_price_in_cents: int
    trial_type: Any
    type: Any
    unspsc_code: str
    update_return_params: str
    update_return_url: str
    updated_at: str
    use_site_exchange_rate: bool
    version_number: int


class ProductPricePointRemoveMatch(TypedDict):
    price_point_id: str
    product_id: str


class ProformaInvoice(TypedDict, total=False):
    available_actions: dict
    billing_address: dict
    collection_method: Any
    consolidation_level: Any
    created_at: str
    credit_amount: str
    credits: list
    currency: str
    custom_fields: list
    customer: Any
    customer_id: int
    delivery_date: str
    discount_amount: str
    discounts: list
    due_amount: str
    id: str
    line_items: list
    memo: str
    number: int
    paid_amount: str
    payment_instructions: str
    payments: list
    product_family_name: str
    product_name: str
    public_url: str
    refund_amount: str
    role: Any
    seller: Any
    sequence_number: int
    shipping_address: dict
    site_id: int
    status: str
    subscription_id: int
    subtotal_amount: str
    tax_amount: str
    taxes: list
    total_amount: str
    uid: str


class ProformaInvoiceListMatchRequired(TypedDict):
    subscription_id: int


class ProformaInvoiceListMatch(ProformaInvoiceListMatchRequired, total=False):
    credit: bool
    custom_field: bool
    direction: Any
    discount: bool
    end_date: str
    line_item: bool
    page: int
    payment: bool
    per_page: int
    start_date: str
    status: Any
    taxis: bool


class ProformaInvoiceCreateData(TypedDict, total=False):
    available_actions: dict
    billing_address: dict
    collection_method: Any
    consolidation_level: Any
    created_at: str
    credit_amount: str
    credits: list
    currency: str
    custom_fields: list
    customer: Any
    customer_id: int
    delivery_date: str
    discount_amount: str
    discounts: list
    due_amount: str
    id: str
    line_items: list
    memo: str
    number: int
    paid_amount: str
    payment_instructions: str
    payments: list
    product_family_name: str
    product_name: str
    public_url: str
    refund_amount: str
    role: Any
    seller: Any
    sequence_number: int
    shipping_address: dict
    site_id: int
    status: str
    subscription_id: int
    subtotal_amount: str
    tax_amount: str
    taxes: list
    total_amount: str
    uid: str


class ReasonCodeRequired(TypedDict):
    reason_code: dict


class ReasonCode(ReasonCodeRequired, total=False):
    code: str
    created_at: str
    description: str
    id: int
    position: int
    site_id: int
    updated_at: str


class ReasonCodeLoadMatch(TypedDict):
    reason_code_id: int


class ReasonCodeListMatch(TypedDict, total=False):
    page: int
    per_page: int


class ReasonCodeCreateDataRequired(TypedDict):
    reason_code: dict


class ReasonCodeCreateData(ReasonCodeCreateDataRequired, total=False):
    code: str
    created_at: str
    description: str
    id: int
    position: int
    site_id: int
    updated_at: str


class ReasonCodeUpdateDataRequired(TypedDict):
    reason_code_id: int


class ReasonCodeUpdateData(ReasonCodeUpdateDataRequired, total=False):
    code: str
    created_at: str
    description: str
    id: int
    position: int
    reason_code: dict
    site_id: int
    updated_at: str


class ReasonCodeRemoveMatch(TypedDict):
    reason_code_id: int


class ReferralCode(TypedDict, total=False):
    code: str
    id: int
    site_id: int
    subscription_id: int


class ReferralCodeLoadMatch(TypedDict):
    code: str


class SaleRepSetting(TypedDict, total=False):
    customer_name: str
    sales_rep_id: int
    sales_rep_name: str
    site_link: str
    site_name: str
    subscription_id: int
    subscription_mrr: str


class SaleRepSettingListMatchRequired(TypedDict):
    seller_id: str


class SaleRepSettingListMatch(SaleRepSettingListMatchRequired, total=False):
    live_mode: bool
    page: int
    per_page: int


class SalesCommission(TypedDict, total=False):
    full_name: str
    id: int
    subscriptions: list
    subscriptions_count: int
    test_mode: bool


class SalesCommissionListMatchRequired(TypedDict):
    sales_rep_id: str
    seller_id: str


class SalesCommissionListMatch(SalesCommissionListMatchRequired, total=False):
    live_mode: bool
    page: int
    per_page: int


class Segment(TypedDict, total=False):
    component_id: int
    created_at: str
    event_based_billing_metric_id: int
    id: int
    price_point_id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    updated_at: str


class SegmentCreateDataRequired(TypedDict):
    component_id: str
    price_point_id: str


class SegmentCreateData(SegmentCreateDataRequired, total=False):
    created_at: str
    event_based_billing_metric_id: int
    id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    updated_at: str


class SegmentUpdateDataRequired(TypedDict):
    component_id: str
    id: float
    price_point_id: str


class SegmentUpdateData(SegmentUpdateDataRequired, total=False):
    created_at: str
    event_based_billing_metric_id: int
    prices: list
    pricing_scheme: Any
    segment_property_1_value: Any
    segment_property_2_value: Any
    segment_property_3_value: Any
    segment_property_4_value: Any
    updated_at: str


class SignupProformaPreview(TypedDict):
    pass


class SignupProformaPreviewCreateData(TypedDict, total=False):
    include: Any


class Site(TypedDict, total=False):
    allocation_settings: dict
    auto_renewals_enabled: bool
    created_at: str
    currency: str
    customer_hierarchy_enabled: bool
    default_payment_collection_method: str
    id: int
    multi_frequency_enabled: bool
    name: str
    net_terms: dict
    non_primary_currencies: list
    organization_address: dict
    portal_enabled: bool
    public_key: str
    relationship_invoicing_enabled: bool
    requires_security_token: bool
    schedule_subscription_cancellation_enabled: bool
    seller_id: int
    subdomain: str
    tax_configuration: dict
    test: bool
    whopays_default_payer: str
    whopays_enabled: bool


class SiteLoadMatchRequired(TypedDict):
    id: int


class SiteLoadMatch(SiteLoadMatchRequired, total=False):
    allocation_settings: dict
    auto_renewals_enabled: bool
    created_at: str
    currency: str
    customer_hierarchy_enabled: bool
    default_payment_collection_method: str
    multi_frequency_enabled: bool
    name: str
    net_terms: dict
    non_primary_currencies: list
    organization_address: dict
    portal_enabled: bool
    public_key: str
    relationship_invoicing_enabled: bool
    requires_security_token: bool
    schedule_subscription_cancellation_enabled: bool
    seller_id: int
    subdomain: str
    tax_configuration: dict
    test: bool
    whopays_default_payer: str
    whopays_enabled: bool


class SiteListMatch(TypedDict, total=False):
    page: int
    per_page: int


class SiteCreateData(TypedDict, total=False):
    cleanup_scope: Any
    allocation_settings: dict
    auto_renewals_enabled: bool
    created_at: str
    currency: str
    customer_hierarchy_enabled: bool
    default_payment_collection_method: str
    id: int
    multi_frequency_enabled: bool
    name: str
    net_terms: dict
    non_primary_currencies: list
    organization_address: dict
    portal_enabled: bool
    public_key: str
    relationship_invoicing_enabled: bool
    requires_security_token: bool
    schedule_subscription_cancellation_enabled: bool
    seller_id: int
    subdomain: str
    tax_configuration: dict
    test: bool
    whopays_default_payer: str
    whopays_enabled: bool


class SubscriptionRequired(TypedDict):
    bank_account: dict


class Subscription(SubscriptionRequired, total=False):
    activated_at: str
    automatically_resume_at: str
    balance_in_cents: int
    cancel_at_end_of_period: bool
    canceled_at: str
    cancellation_message: str
    cancellation_method: Any
    coupon_code: str
    coupon_codes: list
    coupon_use_count: int
    coupon_uses_allowed: int
    coupons: list
    created_at: str
    credit_balance_in_cents: int
    credit_card: Any
    currency: str
    current_billing_amount_in_cents: int
    current_period_ends_at: str
    current_period_started_at: str
    customer: dict
    delayed_cancel_at: str
    dunning_communication_delay_enabled: bool
    dunning_communication_delay_time_zone: str
    expires_at: str
    group: Any
    id: int
    locale: str
    net_terms: int
    next_assessment_at: str
    next_product_handle: str
    next_product_id: int
    next_product_price_point_id: int
    offer_id: int
    on_hold_at: str
    payer_id: int
    payment_collection_method: Any
    payment_type: str
    prepaid_configuration: Any
    prepaid_dunning: bool
    prepayment_balance_in_cents: int
    previous_state: Any
    product: dict
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_type: Any
    product_version_number: int
    reason_code: str
    receives_invoice_emails: bool
    reference: str
    referral_code: str
    scheduled_cancellation_at: str
    self_service_page_token: str
    signup_payment_id: int
    signup_revenue: str
    snap_day: str
    state: Any
    stored_credential_transaction_id: int
    subscription: dict
    total_revenue_in_cents: int
    trial_ended_at: str
    trial_started_at: str
    updated_at: str


class SubscriptionLoadMatchRequired(TypedDict):
    subscription_id: int


class SubscriptionLoadMatch(SubscriptionLoadMatchRequired, total=False):
    include: list


class SubscriptionListMatch(TypedDict, total=False):
    branding_theme_id: int
    collection_method: Any
    coupon: int
    coupon_code: str
    currency: str
    customer_id: int
    date_field: Any
    direction: Any
    dunning_exemption: bool
    end_date: str
    end_datetime: str
    group_status: Any
    include: list
    metadata: dict
    page: int
    payment_gateway: str
    per_page: int
    product: Any
    product_price_point_id: int
    q: str
    q_scope: Any
    sort: Any
    start_date: str
    start_datetime: str
    state: Any


class SubscriptionCreateDataRequired(TypedDict):
    bank_account: dict


class SubscriptionCreateData(SubscriptionCreateDataRequired, total=False):
    activated_at: str
    automatically_resume_at: str
    balance_in_cents: int
    cancel_at_end_of_period: bool
    canceled_at: str
    cancellation_message: str
    cancellation_method: Any
    coupon_code: str
    coupon_codes: list
    coupon_use_count: int
    coupon_uses_allowed: int
    coupons: list
    created_at: str
    credit_balance_in_cents: int
    credit_card: Any
    currency: str
    current_billing_amount_in_cents: int
    current_period_ends_at: str
    current_period_started_at: str
    customer: dict
    delayed_cancel_at: str
    dunning_communication_delay_enabled: bool
    dunning_communication_delay_time_zone: str
    expires_at: str
    group: Any
    id: int
    locale: str
    net_terms: int
    next_assessment_at: str
    next_product_handle: str
    next_product_id: int
    next_product_price_point_id: int
    offer_id: int
    on_hold_at: str
    payer_id: int
    payment_collection_method: Any
    payment_type: str
    prepaid_configuration: Any
    prepaid_dunning: bool
    prepayment_balance_in_cents: int
    previous_state: Any
    product: dict
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_type: Any
    product_version_number: int
    reason_code: str
    receives_invoice_emails: bool
    reference: str
    referral_code: str
    scheduled_cancellation_at: str
    self_service_page_token: str
    signup_payment_id: int
    signup_revenue: str
    snap_day: str
    state: Any
    stored_credential_transaction_id: int
    subscription: dict
    total_revenue_in_cents: int
    trial_ended_at: str
    trial_started_at: str
    updated_at: str


class SubscriptionUpdateDataRequired(TypedDict):
    subscription_id: int


class SubscriptionUpdateData(SubscriptionUpdateDataRequired, total=False):
    activated_at: str
    automatically_resume_at: str
    balance_in_cents: int
    bank_account: dict
    cancel_at_end_of_period: bool
    canceled_at: str
    cancellation_message: str
    cancellation_method: Any
    coupon_code: str
    coupon_codes: list
    coupon_use_count: int
    coupon_uses_allowed: int
    coupons: list
    created_at: str
    credit_balance_in_cents: int
    credit_card: Any
    currency: str
    current_billing_amount_in_cents: int
    current_period_ends_at: str
    current_period_started_at: str
    customer: dict
    delayed_cancel_at: str
    dunning_communication_delay_enabled: bool
    dunning_communication_delay_time_zone: str
    expires_at: str
    group: Any
    id: int
    locale: str
    net_terms: int
    next_assessment_at: str
    next_product_handle: str
    next_product_id: int
    next_product_price_point_id: int
    offer_id: int
    on_hold_at: str
    payer_id: int
    payment_collection_method: Any
    payment_type: str
    prepaid_configuration: Any
    prepaid_dunning: bool
    prepayment_balance_in_cents: int
    previous_state: Any
    product: dict
    product_price_in_cents: int
    product_price_point_id: int
    product_price_point_type: Any
    product_version_number: int
    reason_code: str
    receives_invoice_emails: bool
    reference: str
    referral_code: str
    scheduled_cancellation_at: str
    self_service_page_token: str
    signup_payment_id: int
    signup_revenue: str
    snap_day: str
    state: Any
    stored_credential_transaction_id: int
    subscription: dict
    total_revenue_in_cents: int
    trial_ended_at: str
    trial_started_at: str
    updated_at: str


class SubscriptionRemoveMatchRequired(TypedDict):
    id: int


class SubscriptionRemoveMatch(SubscriptionRemoveMatchRequired, total=False):
    coupon_code: str


class SubscriptionComponent(TypedDict, total=False):
    accrue_charge: bool
    allocated_quantity: Any
    allocation_id: int
    allocations: list
    allow_fractional_quantities: bool
    archived_at: str
    charge_id: int
    component: dict
    component_handle: str
    component_id: int
    created_at: str
    currency: str
    description: str
    direction: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    end_date: str
    existing_balance_in_cents: int
    expires_at: str
    historic_usages: list
    id: int
    initiate_dunning: bool
    interval: int
    interval_unit: Any
    kind: Any
    line_items: list
    memo: str
    name: str
    overage_quantity: int
    payment: Any
    period_type: str
    previous_price_point_id: int
    previous_quantity: Any
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    proration_downgrade_scheme: str
    proration_scheme: str
    proration_upgrade_scheme: str
    quantity: Any
    recurring: bool
    start_date: str
    subscription: Any
    subscription_id: int
    subtotal_in_cents: int
    timestamp: str
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool
    used_quantity: int


class SubscriptionComponentLoadMatch(TypedDict):
    component_id: int
    subscription_id: int


class SubscriptionComponentListMatch(TypedDict, total=False):
    date_field: Any
    direction: Any
    end_date: str
    end_datetime: str
    filter: Any
    include: Any
    page: int
    per_page: int
    price_point_id: str
    product_family_id: list
    sort: Any
    start_date: str
    start_datetime: str
    subscription_id: list


class SubscriptionComponentCreateDataRequired(TypedDict):
    api_handle: str


class SubscriptionComponentCreateData(SubscriptionComponentCreateDataRequired, total=False):
    store_uid: str
    accrue_charge: bool
    allocated_quantity: Any
    allocation_id: int
    allocations: list
    allow_fractional_quantities: bool
    archived_at: str
    charge_id: int
    component: dict
    component_handle: str
    component_id: int
    created_at: str
    currency: str
    description: str
    direction: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    end_date: str
    existing_balance_in_cents: int
    expires_at: str
    historic_usages: list
    id: int
    initiate_dunning: bool
    interval: int
    interval_unit: Any
    kind: Any
    line_items: list
    memo: str
    name: str
    overage_quantity: int
    payment: Any
    period_type: str
    previous_price_point_id: int
    previous_quantity: Any
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    proration_downgrade_scheme: str
    proration_scheme: str
    proration_upgrade_scheme: str
    quantity: Any
    recurring: bool
    start_date: str
    subscription: Any
    subscription_id: int
    subtotal_in_cents: int
    timestamp: str
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool
    used_quantity: int


class SubscriptionComponentUpdateDataRequired(TypedDict):
    allocation_id: int
    component_id: int
    subscription_id: int


class SubscriptionComponentUpdateData(SubscriptionComponentUpdateDataRequired, total=False):
    accrue_charge: bool
    allocated_quantity: Any
    allocations: list
    allow_fractional_quantities: bool
    archived_at: str
    charge_id: int
    component: dict
    component_handle: str
    created_at: str
    currency: str
    description: str
    direction: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    end_date: str
    existing_balance_in_cents: int
    expires_at: str
    historic_usages: list
    id: int
    initiate_dunning: bool
    interval: int
    interval_unit: Any
    kind: Any
    line_items: list
    memo: str
    name: str
    overage_quantity: int
    payment: Any
    period_type: str
    previous_price_point_id: int
    previous_quantity: Any
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    proration_downgrade_scheme: str
    proration_scheme: str
    proration_upgrade_scheme: str
    quantity: Any
    recurring: bool
    start_date: str
    subscription: Any
    subtotal_in_cents: int
    timestamp: str
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    use_site_exchange_rate: bool
    used_quantity: int


class SubscriptionComponentRemoveMatch(TypedDict):
    allocation_id: int
    component_id: int
    subscription_id: int


class SubscriptionGroup(TypedDict, total=False):
    account_balances: dict
    cancel_at_end_of_period: bool
    created_at: str
    customer_id: int
    group_type: str
    id: str
    next_assessment_at: str
    payment_collection_method: Any
    payment_profile: dict
    payment_profile_id: int
    primary_subscription_id: int
    scheme: int
    state: str
    subscription_ids: list
    uid: str


class SubscriptionGroupListMatch(TypedDict, total=False):
    include: list
    page: int
    per_page: int


class SubscriptionGroupCreateData(TypedDict, total=False):
    account_balances: dict
    cancel_at_end_of_period: bool
    created_at: str
    customer_id: int
    group_type: str
    id: str
    next_assessment_at: str
    payment_collection_method: Any
    payment_profile: dict
    payment_profile_id: int
    primary_subscription_id: int
    scheme: int
    state: str
    subscription_ids: list
    uid: str


class SubscriptionGroupUpdateDataRequired(TypedDict):
    uid: str


class SubscriptionGroupUpdateData(SubscriptionGroupUpdateDataRequired, total=False):
    account_balances: dict
    cancel_at_end_of_period: bool
    created_at: str
    customer_id: int
    group_type: str
    id: str
    next_assessment_at: str
    payment_collection_method: Any
    payment_profile: dict
    payment_profile_id: int
    primary_subscription_id: int
    scheme: int
    state: str
    subscription_ids: list


class SubscriptionGroupRemoveMatch(TypedDict):
    id: int


class SubscriptionGroupInvoiceAccount(TypedDict, total=False):
    id: str


class SubscriptionGroupInvoiceAccountListMatchRequired(TypedDict):
    id: str


class SubscriptionGroupInvoiceAccountListMatch(SubscriptionGroupInvoiceAccountListMatchRequired, total=False):
    filter: Any
    page: int
    per_page: int


class SubscriptionGroupInvoiceAccountCreateData(TypedDict):
    id: str


class SubscriptionGroupSignup(TypedDict):
    pass


class SubscriptionGroupSignupCreateData(TypedDict):
    pass


class SubscriptionGroupStatus(TypedDict, total=False):
    id: str


class SubscriptionGroupStatusCreateData(TypedDict):
    id: str


class SubscriptionGroupStatusRemoveMatch(TypedDict):
    id: str


class SubscriptionInvoiceAccount(TypedDict, total=False):
    amount_in_cents: int
    created_at: str
    ending_balance_in_cents: int
    entry_type: Any
    id: int
    invoice_uid: str
    memo: str
    remaining_balance_in_cents: int


class SubscriptionInvoiceAccountListMatchRequired(TypedDict):
    subscription_id: int


class SubscriptionInvoiceAccountListMatch(SubscriptionInvoiceAccountListMatchRequired, total=False):
    direction: Any
    page: int
    per_page: int


class SubscriptionInvoiceAccountCreateDataRequired(TypedDict):
    id: int


class SubscriptionInvoiceAccountCreateData(SubscriptionInvoiceAccountCreateDataRequired, total=False):
    amount_in_cents: int
    created_at: str
    ending_balance_in_cents: int
    entry_type: Any
    invoice_uid: str
    memo: str
    remaining_balance_in_cents: int


class SubscriptionMrr(TypedDict):
    breakouts: dict
    mrr_amount_in_cents: int
    subscription_id: int


class SubscriptionMrrListMatch(TypedDict, total=False):
    at_time: str
    direction: Any
    filter: Any
    page: int
    per_page: int


class SubscriptionNoteRequired(TypedDict):
    note: dict


class SubscriptionNote(SubscriptionNoteRequired, total=False):
    body: str
    created_at: str
    id: int
    sticky: bool
    subscription_id: int
    updated_at: str


class SubscriptionNoteLoadMatch(TypedDict):
    note_id: int
    subscription_id: int


class SubscriptionNoteListMatchRequired(TypedDict):
    id: int


class SubscriptionNoteListMatch(SubscriptionNoteListMatchRequired, total=False):
    page: int
    per_page: int


class SubscriptionNoteCreateDataRequired(TypedDict):
    id: int
    note: dict


class SubscriptionNoteCreateData(SubscriptionNoteCreateDataRequired, total=False):
    body: str
    created_at: str
    sticky: bool
    subscription_id: int
    updated_at: str


class SubscriptionNoteUpdateDataRequired(TypedDict):
    note_id: int
    subscription_id: int


class SubscriptionNoteUpdateData(SubscriptionNoteUpdateDataRequired, total=False):
    body: str
    created_at: str
    id: int
    note: dict
    sticky: bool
    updated_at: str


class SubscriptionNoteRemoveMatch(TypedDict):
    note_id: int
    subscription_id: int


class SubscriptionProductRequired(TypedDict):
    migration: dict


class SubscriptionProduct(SubscriptionProductRequired, total=False):
    charge_in_cents: int
    credit_applied_in_cents: int
    id: str
    payment_due_in_cents: int
    prorated_adjustment_in_cents: int


class SubscriptionProductCreateDataRequired(TypedDict):
    subscription_id: int
    migration: dict


class SubscriptionProductCreateData(SubscriptionProductCreateDataRequired, total=False):
    charge_in_cents: int
    credit_applied_in_cents: int
    id: str
    payment_due_in_cents: int
    prorated_adjustment_in_cents: int


class SubscriptionRenewal(TypedDict, total=False):
    contract: Any
    created_at: str
    decimal_quantity: str
    ends_at: str
    id: int
    item_id: int
    item_subclass: str
    item_type: str
    lock_in_at: str
    price_point_id: int
    price_point_type: str
    quantity: int
    scheduled_renewal_configuration_item: dict
    scheduled_renewal_configuration_items: list
    site_id: int
    starts_at: str
    status: str
    subscription_id: int
    subscription_renewal_configuration_id: int


class SubscriptionRenewalLoadMatch(TypedDict):
    id: int
    subscription_id: int


class SubscriptionRenewalListMatchRequired(TypedDict):
    id: int


class SubscriptionRenewalListMatch(SubscriptionRenewalListMatchRequired, total=False):
    status: Any


class SubscriptionRenewalCreateDataRequired(TypedDict):
    scheduled_renewal_id: int
    subscription_id: int


class SubscriptionRenewalCreateData(SubscriptionRenewalCreateDataRequired, total=False):
    contract: Any
    created_at: str
    decimal_quantity: str
    ends_at: str
    id: int
    item_id: int
    item_subclass: str
    item_type: str
    lock_in_at: str
    price_point_id: int
    price_point_type: str
    quantity: int
    scheduled_renewal_configuration_item: dict
    scheduled_renewal_configuration_items: list
    site_id: int
    starts_at: str
    status: str
    subscription_renewal_configuration_id: int


class SubscriptionRenewalUpdateDataRequired(TypedDict):
    subscription_id: int


class SubscriptionRenewalUpdateData(SubscriptionRenewalUpdateDataRequired, total=False):
    id: int
    scheduled_renewal_id: int
    contract: Any
    created_at: str
    decimal_quantity: str
    ends_at: str
    item_id: int
    item_subclass: str
    item_type: str
    lock_in_at: str
    price_point_id: int
    price_point_type: str
    quantity: int
    scheduled_renewal_configuration_item: dict
    scheduled_renewal_configuration_items: list
    site_id: int
    starts_at: str
    status: str
    subscription_renewal_configuration_id: int


class SubscriptionRenewalRemoveMatch(TypedDict):
    id: int
    scheduled_renewal_id: int
    subscription_id: int


class SubscriptionStatus(TypedDict, total=False):
    existing_balance_in_cents: int
    id: str
    line_items: list
    next_assessment_at: str
    subtotal_in_cents: int
    total_amount_due_in_cents: int
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    uncalculated_taxes: bool


class SubscriptionStatusCreateDataRequired(TypedDict):
    subscription_id: int


class SubscriptionStatusCreateData(SubscriptionStatusCreateDataRequired, total=False):
    existing_balance_in_cents: int
    id: str
    line_items: list
    next_assessment_at: str
    subtotal_in_cents: int
    total_amount_due_in_cents: int
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    uncalculated_taxes: bool


class SubscriptionStatusUpdateDataRequired(TypedDict):
    id: int


class SubscriptionStatusUpdateData(SubscriptionStatusUpdateDataRequired, total=False):
    existing_balance_in_cents: int
    line_items: list
    next_assessment_at: str
    subtotal_in_cents: int
    total_amount_due_in_cents: int
    total_discount_in_cents: int
    total_in_cents: int
    total_tax_in_cents: int
    uncalculated_taxes: bool


class SubscriptionStatusRemoveMatch(TypedDict):
    subscription_id: int


class Usage(TypedDict):
    usage: dict


class UsageListMatchRequired(TypedDict):
    component_id: str
    subscription_id_or_reference: Any


class UsageListMatch(UsageListMatchRequired, total=False):
    max_id: int
    page: int
    per_page: int
    since_date: str
    since_id: int
    until_date: str


class Webhook(TypedDict, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook: dict
    webhook_subscriptions: list


class WebhookListMatch(TypedDict, total=False):
    order: Any
    page: int
    per_page: int
    since_date: str
    status: Any
    subscription: int
    until_date: str


class WebhookCreateData(TypedDict, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook: dict
    webhook_subscriptions: list


class WebhookUpdateData(TypedDict, total=False):
    id: int
    site_id: int
    status: str
    url: str
    webhook: dict
    webhook_subscriptions: list
