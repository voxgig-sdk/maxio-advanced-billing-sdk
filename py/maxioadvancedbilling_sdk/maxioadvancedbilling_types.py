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
    component: dict


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
    component: dict


class ComponentUpdateDataRequired(TypedDict):
    component_id: str


class ComponentUpdateData(ComponentUpdateDataRequired, total=False):
    product_family_id: int
    component: dict


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


class ComponentPricePointRequired(TypedDict):
    component: dict


class ComponentPricePoint(ComponentPricePointRequired, total=False):
    archived_at: str
    component_id: int
    created_at: str
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
    price_point: dict
    price_points: list
    prices: list
    pricing_scheme: Any
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_included: bool
    type: Any
    updated_at: str
    use_site_exchange_rate: bool


class ComponentPricePointListMatch(TypedDict, total=False):
    direction: Any
    filter: Any
    include: Any
    page: int
    per_page: int


class ComponentPricePointCreateDataRequired(TypedDict):
    id: int
    component: dict


class ComponentPricePointCreateData(ComponentPricePointCreateDataRequired, total=False):
    archived_at: str
    component_id: int
    created_at: str
    currency_prices: list
    default: bool
    expiration_interval: int
    expiration_interval_unit: Any
    handle: str
    interval: int
    interval_unit: Any
    name: str
    overage_prices: list
    overage_pricing_scheme: Any
    price_point: dict
    price_points: list
    prices: list
    pricing_scheme: Any
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_included: bool
    type: Any
    updated_at: str
    use_site_exchange_rate: bool


class ComponentPricePointUpdateDataRequired(TypedDict):
    price_point_id: str


class ComponentPricePointUpdateData(ComponentPricePointUpdateDataRequired, total=False):
    component_id: str
    archived_at: str
    component: dict
    created_at: str
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
    price_point: dict
    price_points: list
    prices: list
    pricing_scheme: Any
    renew_prepaid_allocation: bool
    rollover_prepaid_remainder: bool
    subscription_id: int
    tax_included: bool
    type: Any
    updated_at: str
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
    current_page: int
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    per_page: int
    resource_id: int
    scope: dict
    total_count: int
    total_pages: int
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
    current_page: int
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    per_page: int
    scope: dict
    total_count: int
    total_pages: int
    value: str


class CustomFieldUpdateDataRequired(TypedDict):
    resource_type: Any


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    resource_id: int
    current_page: int
    data_count: int
    deleted_at: str
    enum: str
    id: int
    input_type: str
    metadata: dict
    metafield_id: int
    metafields: Any
    name: str
    per_page: int
    scope: dict
    total_count: int
    total_pages: int
    value: str


class CustomFieldRemoveMatchRequired(TypedDict):
    resource_type: Any


class CustomFieldRemoveMatch(CustomFieldRemoveMatchRequired, total=False):
    resource_id: int
    name: str


class Customer(TypedDict, total=False):
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


class CustomerCreateData(TypedDict, total=False):
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
    archived_count: int
    feature: dict
    items: list
    total_count: int


class Feature(FeatureRequired, total=False):
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
    archived_count: int
    feature: dict
    items: list
    total_count: int


class FeatureCreateData(FeatureCreateDataRequired, total=False):
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


class InsightRequired(TypedDict):
    mrr: dict


class Insight(InsightRequired, total=False):
    seller_name: str
    site_currency: str
    site_id: int
    site_name: str
    stats: dict


class InsightLoadMatch(TypedDict, total=False):
    direction: Any
    page: int
    per_page: int
    subscription_id: int


class InvoiceRequired(TypedDict):
    credit_notes: list
    invoices: list
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
    invoice: dict
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
    credit_notes: list
    invoices: list
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
    invoice: dict
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
    credit_notes: list
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
    invoice: dict
    invoices: list
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


class ListProformaInvoice(TypedDict, total=False):
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


class ListProformaInvoiceListMatchRequired(TypedDict):
    subscription_id: int


class ListProformaInvoiceListMatch(ListProformaInvoiceListMatchRequired, total=False):
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
    offers: list
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
    offers: list
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
    offers: list
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


class PaymentProfile(TypedDict, total=False):
    id: str
    payment_profile: dict


class PaymentProfileLoadMatch(TypedDict):
    payment_profile_id: int


class PaymentProfileListMatch(TypedDict, total=False):
    customer_id: int
    page: int
    per_page: int


class PaymentProfileCreateData(TypedDict, total=False):
    id: str
    payment_profile: dict


class PaymentProfileUpdateDataRequired(TypedDict):
    bank_account_id: int


class PaymentProfileUpdateData(PaymentProfileUpdateDataRequired, total=False):
    id: str
    payment_profile: dict


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


class Product(TypedDict):
    product: dict


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


class ProductCreateData(TypedDict):
    product_family_id: str
    product: dict


class ProductUpdateDataRequired(TypedDict):
    product_id: int


class ProductUpdateData(ProductUpdateDataRequired, total=False):
    product: dict


class ProductRemoveMatch(TypedDict):
    product_id: int


class ProductFamily(TypedDict, total=False):
    id: str
    product_family: dict


class ProductFamilyLoadMatch(TypedDict):
    id: int


class ProductFamilyListMatch(TypedDict, total=False):
    date_field: Any
    end_date: str
    end_datetime: str
    start_date: str
    start_datetime: str


class ProductFamilyCreateData(TypedDict, total=False):
    id: str
    product_family: dict


class ProductFeature(TypedDict, total=False):
    id: str


class ProductFeatureRemoveMatchRequired(TypedDict):
    id: int
    product_id: int


class ProductFeatureRemoveMatch(ProductFeatureRemoveMatchRequired, total=False):
    destroy_entitlement: bool


class ProductPricePointRequired(TypedDict):
    price_point: dict
    product: dict


class ProductPricePoint(ProductPricePointRequired, total=False):
    id: str
    price_points: list


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
    price_point: dict
    product: dict


class ProductPricePointCreateData(ProductPricePointCreateDataRequired, total=False):
    price_points: list


class ProductPricePointUpdateDataRequired(TypedDict):
    price_point_id: str
    product_id: str


class ProductPricePointUpdateData(ProductPricePointUpdateDataRequired, total=False):
    id: str
    price_point: dict
    price_points: list
    product: dict


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


class ProformaInvoiceListMatch(TypedDict):
    proforma_invoice_uid: str


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


class ReferralCode(TypedDict):
    pass


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


class SiteRequired(TypedDict):
    site: dict


class Site(SiteRequired, total=False):
    chargify_js_keys: list
    meta: dict


class SiteLoadMatch(TypedDict, total=False):
    chargify_js_keys: list
    meta: dict
    site: dict


class SiteListMatch(TypedDict, total=False):
    page: int
    per_page: int


class SiteCreateDataRequired(TypedDict):
    site: dict


class SiteCreateData(SiteCreateDataRequired, total=False):
    cleanup_scope: Any
    chargify_js_keys: list
    meta: dict


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
    allocated_quantity: Any
    allocation: dict
    allocation_preview: dict
    allow_fractional_quantities: bool
    archived_at: str
    component: dict
    component_handle: str
    component_id: int
    created_at: str
    currency: str
    description: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    historic_usages: list
    id: int
    interval: int
    interval_unit: Any
    kind: Any
    name: str
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    recurring: bool
    subscription: dict
    subscription_id: int
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    usage: dict
    use_site_exchange_rate: bool


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
    allocated_quantity: Any
    allocation: dict
    allocation_preview: dict
    allow_fractional_quantities: bool
    archived_at: str
    component: dict
    component_handle: str
    component_id: int
    created_at: str
    currency: str
    description: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    historic_usages: list
    id: int
    interval: int
    interval_unit: Any
    kind: Any
    name: str
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    recurring: bool
    subscription: dict
    subscription_id: int
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    usage: dict
    use_site_exchange_rate: bool


class SubscriptionComponentUpdateDataRequired(TypedDict):
    allocation_id: int
    component_id: int
    subscription_id: int


class SubscriptionComponentUpdateData(SubscriptionComponentUpdateDataRequired, total=False):
    allocated_quantity: Any
    allocation: dict
    allocation_preview: dict
    allow_fractional_quantities: bool
    archived_at: str
    component: dict
    component_handle: str
    created_at: str
    currency: str
    description: str
    display_on_hosted_page: bool
    downgrade_credit: Any
    enabled: bool
    historic_usages: list
    id: int
    interval: int
    interval_unit: Any
    kind: Any
    name: str
    price_point_handle: str
    price_point_id: int
    price_point_name: str
    price_point_type: Any
    pricing_scheme: Any
    product_family_handle: str
    product_family_id: int
    recurring: bool
    subscription: dict
    unit_balance: Any
    unit_name: str
    updated_at: str
    upgrade_charge: Any
    usage: dict
    use_site_exchange_rate: bool


class SubscriptionComponentRemoveMatch(TypedDict):
    allocation_id: int
    component_id: int
    subscription_id: int


class SubscriptionGroup(TypedDict, total=False):
    id: str
    meta: dict
    subscription_group: dict
    subscription_groups: list


class SubscriptionGroupListMatch(TypedDict, total=False):
    include: list
    page: int
    per_page: int


class SubscriptionGroupCreateData(TypedDict, total=False):
    id: str
    meta: dict
    subscription_group: dict
    subscription_groups: list


class SubscriptionGroupUpdateDataRequired(TypedDict):
    uid: str


class SubscriptionGroupUpdateData(SubscriptionGroupUpdateDataRequired, total=False):
    id: str
    meta: dict
    subscription_group: dict
    subscription_groups: list


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
    id: str
    service_credits: list


class SubscriptionInvoiceAccountListMatchRequired(TypedDict):
    subscription_id: int


class SubscriptionInvoiceAccountListMatch(SubscriptionInvoiceAccountListMatchRequired, total=False):
    direction: Any
    page: int
    per_page: int


class SubscriptionInvoiceAccountCreateDataRequired(TypedDict):
    id: int


class SubscriptionInvoiceAccountCreateData(SubscriptionInvoiceAccountCreateDataRequired, total=False):
    service_credits: list


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
    id: str


class SubscriptionProductCreateDataRequired(TypedDict):
    subscription_id: int
    migration: dict


class SubscriptionProductCreateData(SubscriptionProductCreateDataRequired, total=False):
    id: str


class SubscriptionRenewal(TypedDict, total=False):
    id: str
    scheduled_renewal_configuration: dict
    scheduled_renewal_configuration_item: dict


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
    id: str
    scheduled_renewal_configuration: dict
    scheduled_renewal_configuration_item: dict


class SubscriptionRenewalUpdateDataRequired(TypedDict):
    subscription_id: int


class SubscriptionRenewalUpdateData(SubscriptionRenewalUpdateDataRequired, total=False):
    id: int
    scheduled_renewal_id: int
    scheduled_renewal_configuration: dict
    scheduled_renewal_configuration_item: dict


class SubscriptionRenewalRemoveMatch(TypedDict):
    id: int
    scheduled_renewal_id: int
    subscription_id: int


class SubscriptionStatus(TypedDict, total=False):
    id: str
    renewal_preview: dict


class SubscriptionStatusCreateDataRequired(TypedDict):
    subscription_id: int


class SubscriptionStatusCreateData(SubscriptionStatusCreateDataRequired, total=False):
    id: str
    renewal_preview: dict


class SubscriptionStatusUpdateDataRequired(TypedDict):
    id: int


class SubscriptionStatusUpdateData(SubscriptionStatusUpdateDataRequired, total=False):
    renewal_preview: dict


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
    endpoint: dict
    webhook: dict


class WebhookListMatch(TypedDict, total=False):
    order: Any
    page: int
    per_page: int
    since_date: str
    status: Any
    subscription: int
    until_date: str


class WebhookCreateData(TypedDict, total=False):
    endpoint: dict
    webhook: dict


class WebhookUpdateData(TypedDict, total=False):
    endpoint: dict
    webhook: dict
