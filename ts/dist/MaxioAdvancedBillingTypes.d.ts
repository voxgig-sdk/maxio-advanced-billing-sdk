export interface AccountBalance {
    open_invoices?: any;
    pending_discounts?: any;
    pending_invoices?: any;
    prepayments?: any;
    service_credits?: any;
}
export interface AccountBalanceLoadMatch {
    subscription_id: number;
}
export interface Allocation {
    allocation?: Record<string, any>;
}
export interface AllocationListMatch {
    component_id: number;
    subscription_id: number;
    page?: number;
}
export interface AllocationCreateData {
    subscription_id: number;
    allocation?: Record<string, any>;
}
export interface BatchJob {
    completed?: string;
    created_at?: string;
    finished_at?: string;
    id?: number;
    row_count?: number;
}
export interface BatchJobLoadMatch {
    batch_id: string;
}
export interface BatchJobCreateData {
    completed?: string;
    created_at?: string;
    finished_at?: string;
    id?: number;
    row_count?: number;
}
export interface BillingPortal {
    created_at?: string;
    expires_at?: string;
    fetch_count?: number;
    last_accepted_at?: string;
    last_invite_accepted_at?: string;
    last_invite_sent_at?: string;
    last_sent_at?: string;
    new_link_available_at?: string;
    send_invite_link_text?: string;
    uninvited_count?: number;
    url?: string;
}
export interface BillingPortalLoadMatch {
    customer_id: number;
}
export interface BillingPortalCreateData {
    customer_id: number;
    created_at?: string;
    expires_at?: string;
    fetch_count?: number;
    last_accepted_at?: string;
    last_invite_accepted_at?: string;
    last_invite_sent_at?: string;
    last_sent_at?: string;
    new_link_available_at?: string;
    send_invite_link_text?: string;
    uninvited_count?: number;
    url?: string;
}
export interface BillingPortalRemoveMatch {
    customer_id: number;
}
export interface Component {
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    component?: Record<string, any>;
    created_at?: string;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    id?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    price_per_unit_in_cents?: number;
    price_point_count?: number;
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    product_family_name?: string;
    recurring?: boolean;
    tax_code?: string;
    taxable?: boolean;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
}
export interface ComponentLoadMatch {
    component_id: string;
    product_family_id: number;
    include_feature?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ComponentListMatch {
    date_field?: any;
    end_date?: string;
    end_datetime?: string;
    filter?: any;
    include_archived?: boolean;
    page?: number;
    per_page?: number;
    start_date?: string;
    start_datetime?: string;
}
export interface ComponentCreateData {
    product_family_id: string;
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    component?: Record<string, any>;
    created_at?: string;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    id?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    price_per_unit_in_cents?: number;
    price_point_count?: number;
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_name?: string;
    recurring?: boolean;
    tax_code?: string;
    taxable?: boolean;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
}
export interface ComponentUpdateData {
    component_id: string;
    product_family_id?: number;
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    component?: Record<string, any>;
    created_at?: string;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    id?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    price_per_unit_in_cents?: number;
    price_point_count?: number;
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_name?: string;
    recurring?: boolean;
    tax_code?: string;
    taxable?: boolean;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ComponentRemoveMatch {
    component_id: string;
    product_family_id: number;
    $action?: string;
    [action: string]: any;
}
export interface ComponentFeature {
    id?: string;
}
export interface ComponentFeatureRemoveMatch {
    component_id: number;
    id: number;
    destroy_entitlement?: boolean;
}
export interface ComponentPricePoint {
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    component_id?: number;
    created_at?: string;
    currency_prices?: any[];
    default?: boolean;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    id?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    overage_pricing_scheme?: any;
    price_per_unit_in_cents?: number;
    price_point?: Record<string, any>;
    price_point_count?: number;
    price_points?: any[];
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    product_family_name?: string;
    recurring?: boolean;
    renew_prepaid_allocation?: boolean;
    rollover_prepaid_remainder?: boolean;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    type?: any;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
}
export interface ComponentPricePointListMatch {
    direction?: any;
    filter?: any;
    include?: any;
    page?: number;
    per_page?: number;
}
export interface ComponentPricePointCreateData {
    id: number;
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    component_id?: number;
    created_at?: string;
    currency_prices?: any[];
    default?: boolean;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    overage_pricing_scheme?: any;
    price_per_unit_in_cents?: number;
    price_point?: Record<string, any>;
    price_point_count?: number;
    price_points?: any[];
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    product_family_name?: string;
    recurring?: boolean;
    renew_prepaid_allocation?: boolean;
    rollover_prepaid_remainder?: boolean;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    type?: any;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
}
export interface ComponentPricePointUpdateData {
    component_id?: string;
    price_point_id: string;
    accounting_code?: string;
    allow_fractional_quantities?: boolean;
    archived?: boolean;
    archived_at?: string;
    created_at?: string;
    currency_prices?: any[];
    default?: boolean;
    default_price_point_id?: number;
    default_price_point_name?: string;
    description?: string;
    downgrade_credit?: any;
    event_based_billing_metric_id?: number;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    hide_date_range_on_invoice?: boolean;
    id?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: any;
    kind?: any;
    name?: string;
    overage_prices?: any[];
    overage_pricing_scheme?: any;
    price_per_unit_in_cents?: number;
    price_point?: Record<string, any>;
    price_point_count?: number;
    price_points?: any[];
    price_points_url?: string;
    prices?: any[];
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    product_family_name?: string;
    recurring?: boolean;
    renew_prepaid_allocation?: boolean;
    rollover_prepaid_remainder?: boolean;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    type?: any;
    unit_name?: string;
    unit_price?: string;
    unspsc_code?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
}
export interface ComponentPricePointRemoveMatch {
    component_id: string;
    price_point_id: string;
}
export interface ComponentPricePointCurrencyOverage {
    archived_at?: string;
    component_id?: number;
    created_at?: string;
    currency_overage_prices?: any[];
    currency_prices?: any[];
    default?: boolean;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    handle?: string;
    id?: number;
    interval?: number;
    interval_unit?: any;
    name?: string;
    overage_prices?: any[];
    overage_pricing_scheme?: any;
    prices?: any[];
    pricing_scheme?: any;
    renew_prepaid_allocation?: boolean;
    rollover_prepaid_remainder?: boolean;
    subscription_id?: number;
    tax_included?: boolean;
    type?: any;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
}
export interface ComponentPricePointCurrencyOverageLoadMatch {
    component_id: string;
    price_point_id: string;
    currency_price?: boolean;
}
export interface Coupon {
    allow_negative_balance?: boolean;
    amount?: number;
    amount_in_cents?: number;
    apply_on_cancel_at_end_of_period?: boolean;
    apply_on_subscription_expiration?: boolean;
    archived_at?: string;
    code?: string;
    compounding_strategy?: any;
    conversion_limit?: string;
    coupon?: Record<string, any>;
    coupon_restrictions?: any[];
    created_at?: string;
    currency_prices?: any[];
    description?: string;
    discount_type?: string;
    duration_interval?: number;
    duration_interval_span?: string;
    duration_interval_unit?: string;
    duration_period_count?: number;
    end_date?: string;
    exclude_mid_period_allocations?: boolean;
    id?: number;
    name?: string;
    percentage?: string;
    product_family_id?: number;
    product_family_name?: string;
    recurring?: boolean;
    recurring_scheme?: string;
    stackable?: boolean;
    start_date?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
}
export interface CouponLoadMatch {
    coupon_id: number;
    product_family_id: number;
    currency_price?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CouponListMatch {
    currency_price?: boolean;
    filter?: any;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface CouponCreateData {
    product_family_id: number;
    allow_negative_balance?: boolean;
    amount?: number;
    amount_in_cents?: number;
    apply_on_cancel_at_end_of_period?: boolean;
    apply_on_subscription_expiration?: boolean;
    archived_at?: string;
    code?: string;
    compounding_strategy?: any;
    conversion_limit?: string;
    coupon?: Record<string, any>;
    coupon_restrictions?: any[];
    created_at?: string;
    currency_prices?: any[];
    description?: string;
    discount_type?: string;
    duration_interval?: number;
    duration_interval_span?: string;
    duration_interval_unit?: string;
    duration_period_count?: number;
    end_date?: string;
    exclude_mid_period_allocations?: boolean;
    id?: number;
    name?: string;
    percentage?: string;
    product_family_name?: string;
    recurring?: boolean;
    recurring_scheme?: string;
    stackable?: boolean;
    start_date?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CouponUpdateData {
    coupon_id: number;
    product_family_id: number;
    allow_negative_balance?: boolean;
    amount?: number;
    amount_in_cents?: number;
    apply_on_cancel_at_end_of_period?: boolean;
    apply_on_subscription_expiration?: boolean;
    archived_at?: string;
    code?: string;
    compounding_strategy?: any;
    conversion_limit?: string;
    coupon?: Record<string, any>;
    coupon_restrictions?: any[];
    created_at?: string;
    currency_prices?: any[];
    description?: string;
    discount_type?: string;
    duration_interval?: number;
    duration_interval_span?: string;
    duration_interval_unit?: string;
    duration_period_count?: number;
    end_date?: string;
    exclude_mid_period_allocations?: boolean;
    id?: number;
    name?: string;
    percentage?: string;
    product_family_name?: string;
    recurring?: boolean;
    recurring_scheme?: string;
    stackable?: boolean;
    start_date?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CouponRemoveMatch {
    id: number;
    subcode: string;
    $action?: string;
    [action: string]: any;
}
export interface CouponCurrency {
    id?: string;
}
export interface CouponCurrencyUpdateData {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface CouponSubcode {
    created_codes?: any[];
    duplicate_codes?: any[];
    id?: string;
    invalid_codes?: any[];
}
export interface CouponSubcodeUpdateData {
    id: number;
    created_codes?: any[];
    duplicate_codes?: any[];
    invalid_codes?: any[];
}
export interface CouponUsage {
    id?: number;
    name?: string;
    revenue?: number;
    revenue_in_cents?: number;
    savings?: number;
    savings_in_cents?: number;
    signups?: number;
}
export interface CouponUsageListMatch {
    id: number;
    product_family_id: number;
}
export interface CustomField {
    data_count?: number;
    deleted_at?: string;
    enum?: string;
    id?: number;
    input_type?: string;
    metadata?: Record<string, any>;
    metafield_id?: number;
    metafields?: any;
    name?: string;
    resource_id?: number;
    scope?: Record<string, any>;
    value?: string;
}
export interface CustomFieldListMatch {
    resource_type: any;
    date_field?: any;
    direction?: any;
    end_date?: string;
    end_datetime?: string;
    page?: number;
    per_page?: number;
    resource_id?: any[];
    start_date?: string;
    start_datetime?: string;
    with_deleted?: boolean;
    name?: string;
}
export interface CustomFieldCreateData {
    resource_id?: number;
    resource_type: any;
    data_count?: number;
    deleted_at?: string;
    enum?: string;
    id?: number;
    input_type?: string;
    metadata?: Record<string, any>;
    metafield_id?: number;
    metafields?: any;
    name?: string;
    scope?: Record<string, any>;
    value?: string;
}
export interface CustomFieldUpdateData {
    resource_id?: number;
    resource_type: any;
    data_count?: number;
    deleted_at?: string;
    enum?: string;
    id?: number;
    input_type?: string;
    metadata?: Record<string, any>;
    metafield_id?: number;
    metafields?: any;
    name?: string;
    scope?: Record<string, any>;
    value?: string;
}
export interface CustomFieldRemoveMatch {
    resource_id?: number;
    resource_type: any;
    name?: string;
}
export interface Customer {
    address?: string;
    address_2?: string;
    branding_theme_id?: number;
    cc_emails?: string;
    city?: string;
    country?: string;
    country_name?: string;
    created_at?: string;
    customer: Record<string, any>;
    default_auto_renewal_profile_id?: number;
    default_subscription_group_uid?: string;
    email?: string;
    entity_identifier_kind?: any;
    entity_identifier_value?: string;
    first_name?: string;
    id?: number;
    last_name?: string;
    locale?: string;
    maxioid?: string;
    organization?: string;
    parent_id?: number;
    phone?: string;
    portal_customer_created_at?: string;
    portal_invite_last_accepted_at?: string;
    portal_invite_last_sent_at?: string;
    reference?: string;
    salesforce_id?: string;
    state?: string;
    state_name?: string;
    surcharging?: boolean;
    tax_exempt?: boolean;
    tax_exempt_reason?: string;
    updated_at?: string;
    vat_country?: string;
    vat_number?: string;
    verified?: boolean;
    zip?: string;
}
export interface CustomerLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface CustomerListMatch {
    date_field?: any;
    direction?: any;
    end_date?: string;
    end_datetime?: string;
    page?: number;
    per_page?: number;
    q?: string;
    start_date?: string;
    start_datetime?: string;
}
export interface CustomerCreateData {
    address?: string;
    address_2?: string;
    branding_theme_id?: number;
    cc_emails?: string;
    city?: string;
    country?: string;
    country_name?: string;
    created_at?: string;
    customer: Record<string, any>;
    default_auto_renewal_profile_id?: number;
    default_subscription_group_uid?: string;
    email?: string;
    entity_identifier_kind?: any;
    entity_identifier_value?: string;
    first_name?: string;
    id?: number;
    last_name?: string;
    locale?: string;
    maxioid?: string;
    organization?: string;
    parent_id?: number;
    phone?: string;
    portal_customer_created_at?: string;
    portal_invite_last_accepted_at?: string;
    portal_invite_last_sent_at?: string;
    reference?: string;
    salesforce_id?: string;
    state?: string;
    state_name?: string;
    surcharging?: boolean;
    tax_exempt?: boolean;
    tax_exempt_reason?: string;
    updated_at?: string;
    vat_country?: string;
    vat_number?: string;
    verified?: boolean;
    zip?: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomerUpdateData {
    id: number;
    address?: string;
    address_2?: string;
    branding_theme_id?: number;
    cc_emails?: string;
    city?: string;
    country?: string;
    country_name?: string;
    created_at?: string;
    customer?: Record<string, any>;
    default_auto_renewal_profile_id?: number;
    default_subscription_group_uid?: string;
    email?: string;
    entity_identifier_kind?: any;
    entity_identifier_value?: string;
    first_name?: string;
    last_name?: string;
    locale?: string;
    maxioid?: string;
    organization?: string;
    parent_id?: number;
    phone?: string;
    portal_customer_created_at?: string;
    portal_invite_last_accepted_at?: string;
    portal_invite_last_sent_at?: string;
    reference?: string;
    salesforce_id?: string;
    state?: string;
    state_name?: string;
    surcharging?: boolean;
    tax_exempt?: boolean;
    tax_exempt_reason?: string;
    updated_at?: string;
    vat_country?: string;
    vat_number?: string;
    verified?: boolean;
    zip?: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomerRemoveMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface DelayedCancel {
    message?: string;
    subscription: Record<string, any>;
}
export interface DelayedCancelCreateData {
    subscription_id: number;
    message?: string;
    subscription: Record<string, any>;
}
export interface Endpoint {
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook_subscriptions?: any[];
}
export interface EndpointListMatch {
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook_subscriptions?: any[];
}
export interface EndpointUpdateData {
    endpoint_id: number;
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook_subscriptions?: any[];
    $action?: string;
    [action: string]: any;
}
export interface Entitlement {
    customer_id: number;
    entitlements: any[];
    status: string;
    subscription_id: number;
}
export interface EntitlementListMatch {
    subscription_id: number;
}
export interface Event {
    event: Record<string, any>;
}
export interface EventLoadMatch {
    direction?: any;
    filter?: any[];
    max_id?: number;
    page?: number;
    per_page?: number;
    since_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface EventListMatch {
    date_field?: any;
    direction?: any;
    end_date?: string;
    end_datetime?: string;
    filter?: any[];
    max_id?: number;
    page?: number;
    per_page?: number;
    since_id?: number;
    start_date?: string;
    start_datetime?: string;
}
export interface EventsBasedBillingSegment {
    id?: string;
}
export interface EventsBasedBillingSegmentRemoveMatch {
    component_id: string;
    id: number;
    price_point_id: string;
}
export interface Feature {
    archived_at?: string;
    created_at?: string;
    default_periodicity_interval?: number;
    default_periodicity_unit?: any;
    default_value?: string;
    description?: string;
    feature: Record<string, any>;
    feature_key?: string;
    feature_kind?: any;
    feature_name?: string;
    feature_template_id?: number;
    id?: number;
    key?: string;
    kind?: any;
    name?: string;
    periodicity_interval?: number;
    periodicity_unit?: any;
    plans_count?: number;
    price_point_id?: number;
    price_point_type?: any;
    products_count?: number;
    unit?: string;
    updated_at?: string;
    value?: string;
    value_type?: any;
}
export interface FeatureListMatch {
    kind?: any;
    page?: number;
    per_page?: number;
    q?: string;
    sort_by?: any;
    sort_direction?: any;
    status?: any;
    updated_from?: string;
    updated_to?: string;
}
export interface FeatureCreateData {
    archived_at?: string;
    created_at?: string;
    default_periodicity_interval?: number;
    default_periodicity_unit?: any;
    default_value?: string;
    description?: string;
    feature: Record<string, any>;
    feature_key?: string;
    feature_kind?: any;
    feature_name?: string;
    feature_template_id?: number;
    id?: number;
    key?: string;
    kind?: any;
    name?: string;
    periodicity_interval?: number;
    periodicity_unit?: any;
    plans_count?: number;
    price_point_id?: number;
    price_point_type?: any;
    products_count?: number;
    unit?: string;
    updated_at?: string;
    value?: string;
    value_type?: any;
}
export interface FeatureCatalogItem {
    archived_at?: string;
    created_at?: string;
    feature: Record<string, any>;
    feature_key?: string;
    feature_kind?: any;
    feature_name?: string;
    feature_template_id?: number;
    id?: number;
    periodicity_interval?: number;
    periodicity_unit?: any;
    price_point_id?: number;
    price_point_type?: any;
    updated_at?: string;
    value?: string;
}
export interface FeatureCatalogItemLoadMatch {
    component_id?: number;
    id: number;
    product_id?: number;
}
export interface FeatureCatalogItemCreateData {
    component_id?: number;
    id: number;
    product_id?: number;
    archived_at?: string;
    created_at?: string;
    feature: Record<string, any>;
    feature_key?: string;
    feature_kind?: any;
    feature_name?: string;
    feature_template_id?: number;
    periodicity_interval?: number;
    periodicity_unit?: any;
    price_point_id?: number;
    price_point_type?: any;
    updated_at?: string;
    value?: string;
    $action?: string;
    [action: string]: any;
}
export interface FeatureCatalogItemUpdateData {
    component_id?: number;
    id: number;
    product_id?: number;
    archived_at?: string;
    created_at?: string;
    feature?: Record<string, any>;
    feature_key?: string;
    feature_kind?: any;
    feature_name?: string;
    feature_template_id?: number;
    periodicity_interval?: number;
    periodicity_unit?: any;
    price_point_id?: number;
    price_point_type?: any;
    updated_at?: string;
    value?: string;
}
export interface FeatureTemplate {
    archived_at?: string;
    created_at?: string;
    default_periodicity_interval?: number;
    default_periodicity_unit?: any;
    default_value?: string;
    description?: string;
    feature: any;
    id?: number;
    key?: string;
    kind?: any;
    name?: string;
    plans_count?: number;
    products_count?: number;
    unit?: string;
    updated_at?: string;
    value_type?: any;
}
export interface FeatureTemplateLoadMatch {
    id: number;
}
export interface FeatureTemplateCreateData {
    id: number;
    archived_at?: string;
    created_at?: string;
    default_periodicity_interval?: number;
    default_periodicity_unit?: any;
    default_value?: string;
    description?: string;
    feature: any;
    key?: string;
    kind?: any;
    name?: string;
    plans_count?: number;
    products_count?: number;
    unit?: string;
    updated_at?: string;
    value_type?: any;
    $action?: string;
    [action: string]: any;
}
export interface FeatureTemplateUpdateData {
    id: number;
    archived_at?: string;
    created_at?: string;
    default_periodicity_interval?: number;
    default_periodicity_unit?: any;
    default_value?: string;
    description?: string;
    feature?: any;
    key?: string;
    kind?: any;
    name?: string;
    plans_count?: number;
    products_count?: number;
    unit?: string;
    updated_at?: string;
    value_type?: any;
}
export interface FeatureTemplateRemoveMatch {
    id: number;
    remove_from_catalog?: boolean;
}
export interface Insight {
    amount_formatted?: string;
    amount_in_cents?: number;
    at_time?: string;
    breakouts?: Record<string, any>;
    currency?: string;
    currency_symbol?: string;
    movements?: any[];
    page?: number;
    per_page?: number;
    seller_name?: string;
    site_currency?: string;
    site_id?: number;
    site_name?: string;
    stats?: Record<string, any>;
    total_entries?: number;
    total_pages?: number;
}
export interface InsightLoadMatch {
    direction?: any;
    page?: number;
    per_page?: number;
    subscription_id?: number;
}
export interface Invoice {
    applications?: any[];
    applied_amount?: string;
    applied_date?: string;
    avatax_details?: Record<string, any>;
    billing_address?: any;
    branding_theme_id?: number;
    collection_method?: any;
    consolidation_level?: any;
    created_at?: string;
    credit_amount?: string;
    credits?: any[];
    currency?: string;
    custom_fields?: any[];
    customer?: any;
    customer_id?: number;
    debit_amount?: string;
    debits?: any[];
    discount_amount?: string;
    discounts?: any[];
    display_settings?: Record<string, any>;
    due_amount?: string;
    due_date?: string;
    group_primary_subscription_id?: number;
    id?: number;
    issue_date?: string;
    line_items?: any[];
    memo?: string;
    net_terms?: number;
    number?: string;
    origin_invoices?: any[];
    paid_amount?: string;
    paid_date?: string;
    paid_invoices?: any[];
    parent_invoice_id?: number;
    parent_invoice_number?: number;
    parent_invoice_uid?: string;
    payer?: Record<string, any>;
    payment_instructions?: string;
    payments?: any[];
    prepayment?: string;
    previous_balance_data?: Record<string, any>;
    product_family_name?: string;
    product_name?: string;
    public_url?: string;
    public_url_expires_on?: string;
    recipient_emails?: any[];
    refund_amount?: string;
    refunds?: any[];
    remaining_amount?: string;
    role?: string;
    seller?: any;
    sequence_number?: number;
    shipping_address?: any;
    site_id?: number;
    status?: any;
    subscription_group_id?: number;
    subscription_id?: number;
    subtotal_amount?: string;
    tax_amount?: string;
    taxes?: any[];
    total_amount?: string;
    transaction_time?: string;
    uid?: string;
    updated_at?: string;
    void: Record<string, any>;
}
export interface InvoiceListMatch {
    uid: string;
    $action?: string;
    [action: string]: any;
}
export interface InvoiceCreateData {
    subscription_id: number;
    applications?: any[];
    applied_amount?: string;
    applied_date?: string;
    avatax_details?: Record<string, any>;
    billing_address?: any;
    branding_theme_id?: number;
    collection_method?: any;
    consolidation_level?: any;
    created_at?: string;
    credit_amount?: string;
    credits?: any[];
    currency?: string;
    custom_fields?: any[];
    customer?: any;
    customer_id?: number;
    debit_amount?: string;
    debits?: any[];
    discount_amount?: string;
    discounts?: any[];
    display_settings?: Record<string, any>;
    due_amount?: string;
    due_date?: string;
    group_primary_subscription_id?: number;
    id?: number;
    issue_date?: string;
    line_items?: any[];
    memo?: string;
    net_terms?: number;
    number?: string;
    origin_invoices?: any[];
    paid_amount?: string;
    paid_date?: string;
    paid_invoices?: any[];
    parent_invoice_id?: number;
    parent_invoice_number?: number;
    parent_invoice_uid?: string;
    payer?: Record<string, any>;
    payment_instructions?: string;
    payments?: any[];
    prepayment?: string;
    previous_balance_data?: Record<string, any>;
    product_family_name?: string;
    product_name?: string;
    public_url?: string;
    public_url_expires_on?: string;
    recipient_emails?: any[];
    refund_amount?: string;
    refunds?: any[];
    remaining_amount?: string;
    role?: string;
    seller?: any;
    sequence_number?: number;
    shipping_address?: any;
    site_id?: number;
    status?: any;
    subscription_group_id?: number;
    subtotal_amount?: string;
    tax_amount?: string;
    taxes?: any[];
    total_amount?: string;
    transaction_time?: string;
    uid?: string;
    updated_at?: string;
    void: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface InvoiceUpdateData {
    subscription_id: number;
    uid: string;
    applications?: any[];
    applied_amount?: string;
    applied_date?: string;
    avatax_details?: Record<string, any>;
    billing_address?: any;
    branding_theme_id?: number;
    collection_method?: any;
    consolidation_level?: any;
    created_at?: string;
    credit_amount?: string;
    credits?: any[];
    currency?: string;
    custom_fields?: any[];
    customer?: any;
    customer_id?: number;
    debit_amount?: string;
    debits?: any[];
    discount_amount?: string;
    discounts?: any[];
    display_settings?: Record<string, any>;
    due_amount?: string;
    due_date?: string;
    group_primary_subscription_id?: number;
    id?: number;
    issue_date?: string;
    line_items?: any[];
    memo?: string;
    net_terms?: number;
    number?: string;
    origin_invoices?: any[];
    paid_amount?: string;
    paid_date?: string;
    paid_invoices?: any[];
    parent_invoice_id?: number;
    parent_invoice_number?: number;
    parent_invoice_uid?: string;
    payer?: Record<string, any>;
    payment_instructions?: string;
    payments?: any[];
    prepayment?: string;
    previous_balance_data?: Record<string, any>;
    product_family_name?: string;
    product_name?: string;
    public_url?: string;
    public_url_expires_on?: string;
    recipient_emails?: any[];
    refund_amount?: string;
    refunds?: any[];
    remaining_amount?: string;
    role?: string;
    seller?: any;
    sequence_number?: number;
    shipping_address?: any;
    site_id?: number;
    status?: any;
    subscription_group_id?: number;
    subtotal_amount?: string;
    tax_amount?: string;
    taxes?: any[];
    total_amount?: string;
    transaction_time?: string;
    updated_at?: string;
    void?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface InvoiceRemoveMatch {
    subscription_id: number;
    uid: string;
    $action?: string;
    [action: string]: any;
}
export interface ListSaleRepItem {
    full_name?: string;
    id?: number;
    mrr_data?: Record<string, any>;
    subscriptions_count?: number;
    test_mode?: boolean;
}
export interface ListSaleRepItemListMatch {
    seller_id: string;
    live_mode?: boolean;
    page?: number;
    per_page?: number;
}
export interface ListSegment {
    component_id?: number;
    created_at?: string;
    event_based_billing_metric_id?: number;
    id?: number;
    price_point_id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    segments?: any[];
    updated_at?: string;
}
export interface ListSegmentListMatch {
    component_id: string;
    price_point_id: string;
    filter?: any;
    page?: number;
    per_page?: number;
}
export interface ListSegmentCreateData {
    component_id: string;
    price_point_id: string;
    created_at?: string;
    event_based_billing_metric_id?: number;
    id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    segments?: any[];
    updated_at?: string;
}
export interface ListSegmentUpdateData {
    component_id: string;
    price_point_id: string;
    created_at?: string;
    event_based_billing_metric_id?: number;
    id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    segments?: any[];
    updated_at?: string;
}
export interface Offer {
    archived_at?: string;
    created_at?: string;
    description?: string;
    handle?: string;
    id?: number;
    name?: string;
    offer?: Record<string, any>;
    offer_discounts?: any[];
    offer_items?: any[];
    offer_signup_pages?: any[];
    product_family_id?: number;
    product_family_name?: string;
    product_id?: number;
    product_name?: string;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_name?: string;
    product_revisable_number?: number;
    site_id?: number;
    updated_at?: string;
}
export interface OfferLoadMatch {
    offer_id: number;
    $action?: string;
    [action: string]: any;
}
export interface OfferListMatch {
    include_archived?: boolean;
    page?: number;
    per_page?: number;
}
export interface OfferCreateData {
    archived_at?: string;
    created_at?: string;
    description?: string;
    handle?: string;
    id?: number;
    name?: string;
    offer?: Record<string, any>;
    offer_discounts?: any[];
    offer_items?: any[];
    offer_signup_pages?: any[];
    product_family_id?: number;
    product_family_name?: string;
    product_id?: number;
    product_name?: string;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_name?: string;
    product_revisable_number?: number;
    site_id?: number;
    updated_at?: string;
}
export interface OfferUpdateData {
    id: number;
    archived_at?: string;
    created_at?: string;
    description?: string;
    handle?: string;
    name?: string;
    offer?: Record<string, any>;
    offer_discounts?: any[];
    offer_items?: any[];
    offer_signup_pages?: any[];
    product_family_id?: number;
    product_family_name?: string;
    product_id?: number;
    product_name?: string;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_name?: string;
    product_revisable_number?: number;
    site_id?: number;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface OneTimeToken {
}
export interface OneTimeTokenLoadMatch {
    chargify_token: string;
    $action?: string;
    [action: string]: any;
}
export interface PaymentProfile {
    bank_account_holder_type?: any;
    bank_account_type?: any;
    bank_name?: string;
    billing_address?: string;
    billing_address_2?: string;
    billing_city?: string;
    billing_country?: string;
    billing_state?: string;
    billing_zip?: string;
    card_type?: string;
    created_at?: string;
    current_vault?: string;
    customer_id?: number;
    customer_vault_token?: string;
    disabled?: boolean;
    expiration_month?: number;
    expiration_year?: number;
    first_name?: string;
    gateway_handle?: string;
    id?: number;
    last_name?: string;
    masked_bank_account_number?: string;
    masked_bank_routing_number?: string;
    masked_card_number?: string;
    payment_profile: any;
    payment_type?: string;
    site_gateway_setting_id?: number;
    updated_at?: string;
    vault_token?: string;
    verified?: boolean;
}
export interface PaymentProfileLoadMatch {
    payment_profile_id: number;
    $action?: string;
    [action: string]: any;
}
export interface PaymentProfileListMatch {
    customer_id?: number;
    page?: number;
    per_page?: number;
}
export interface PaymentProfileCreateData {
    bank_account_holder_type?: any;
    bank_account_type?: any;
    bank_name?: string;
    billing_address?: string;
    billing_address_2?: string;
    billing_city?: string;
    billing_country?: string;
    billing_state?: string;
    billing_zip?: string;
    card_type?: string;
    created_at?: string;
    current_vault?: string;
    customer_id?: number;
    customer_vault_token?: string;
    disabled?: boolean;
    expiration_month?: number;
    expiration_year?: number;
    first_name?: string;
    gateway_handle?: string;
    id?: number;
    last_name?: string;
    masked_bank_account_number?: string;
    masked_bank_routing_number?: string;
    masked_card_number?: string;
    payment_profile: any;
    payment_type?: string;
    site_gateway_setting_id?: number;
    updated_at?: string;
    vault_token?: string;
    verified?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface PaymentProfileUpdateData {
    bank_account_id: number;
    bank_account_holder_type?: any;
    bank_account_type?: any;
    bank_name?: string;
    billing_address?: string;
    billing_address_2?: string;
    billing_city?: string;
    billing_country?: string;
    billing_state?: string;
    billing_zip?: string;
    card_type?: string;
    created_at?: string;
    current_vault?: string;
    customer_id?: number;
    customer_vault_token?: string;
    disabled?: boolean;
    expiration_month?: number;
    expiration_year?: number;
    first_name?: string;
    gateway_handle?: string;
    id?: number;
    last_name?: string;
    masked_bank_account_number?: string;
    masked_bank_routing_number?: string;
    masked_card_number?: string;
    payment_profile?: any;
    payment_type?: string;
    site_gateway_setting_id?: number;
    updated_at?: string;
    vault_token?: string;
    verified?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface PaymentProfileRemoveMatch {
    payment_profile_id: number;
    subscription_group_id?: string;
    subscription_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface Prepayment {
    id?: string;
}
export interface PrepaymentCreateData {
    id: number;
    subscription_id: number;
    $action?: string;
    [action: string]: any;
}
export interface Product {
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    id?: number;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    product?: Record<string, any>;
    product_family?: Record<string, any>;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    tax_code?: string;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
}
export interface ProductLoadMatch {
    api_handle: string;
    $action?: string;
    [action: string]: any;
}
export interface ProductListMatch {
    date_field?: any;
    end_date?: string;
    end_datetime?: string;
    filter?: any;
    include?: any;
    include_archived?: boolean;
    include_feature?: boolean;
    page?: number;
    per_page?: number;
    start_date?: string;
    start_datetime?: string;
}
export interface ProductCreateData {
    product_family_id: string;
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    id?: number;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    product?: Record<string, any>;
    product_family?: Record<string, any>;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    tax_code?: string;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
}
export interface ProductUpdateData {
    product_id: number;
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    id?: number;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    product?: Record<string, any>;
    product_family?: Record<string, any>;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    tax_code?: string;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductRemoveMatch {
    product_id: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductFamily {
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    description?: string;
    handle?: string;
    id?: number;
    name?: string;
    product_family?: Record<string, any>;
    surcharging?: boolean;
    updated_at?: string;
}
export interface ProductFamilyLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductFamilyListMatch {
    date_field?: any;
    end_date?: string;
    end_datetime?: string;
    start_date?: string;
    start_datetime?: string;
}
export interface ProductFamilyCreateData {
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    description?: string;
    handle?: string;
    id?: number;
    name?: string;
    product_family?: Record<string, any>;
    surcharging?: boolean;
    updated_at?: string;
}
export interface ProductFeature {
    id?: string;
}
export interface ProductFeatureRemoveMatch {
    id: number;
    product_id: number;
    destroy_entitlement?: boolean;
}
export interface ProductPricePoint {
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    currency_prices?: any[];
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    id?: number;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    introductory_offer?: boolean;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    price_point?: Record<string, any>;
    price_points?: any[];
    product_family?: Record<string, any>;
    product_id?: number;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    trial_type?: any;
    type?: any;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
}
export interface ProductPricePointLoadMatch {
    price_point_id: string;
    product_id: string;
    currency_price?: boolean;
}
export interface ProductPricePointListMatch {
    direction?: any;
    filter?: any;
    include?: any;
    page?: number;
    per_page?: number;
}
export interface ProductPricePointCreateData {
    id: string;
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    currency_prices?: any[];
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    introductory_offer?: boolean;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    price_point?: Record<string, any>;
    price_points?: any[];
    product_family?: Record<string, any>;
    product_id?: number;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    trial_type?: any;
    type?: any;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductPricePointUpdateData {
    price_point_id: string;
    product_id: string;
    accounting_code?: string;
    archived_at?: string;
    created_at?: string;
    currency_prices?: any[];
    default_product_price_point_id?: number;
    description?: string;
    expiration_interval?: number;
    expiration_interval_unit?: any;
    features?: any[];
    handle?: string;
    id?: number;
    initial_charge_after_trial?: boolean;
    initial_charge_in_cents?: number;
    interval?: number;
    interval_unit?: any;
    introductory_offer?: boolean;
    item_category?: string;
    name?: string;
    price_in_cents?: number;
    price_point?: Record<string, any>;
    price_points?: any[];
    product_family?: Record<string, any>;
    product_price_point_handle?: string;
    product_price_point_id?: number;
    product_price_point_name?: string;
    public_signup_pages?: any[];
    request_billing_address?: boolean;
    request_credit_card?: boolean;
    require_billing_address?: boolean;
    require_credit_card?: boolean;
    require_shipping_address?: boolean;
    return_params?: string;
    subscription_id?: number;
    tax_code?: string;
    tax_included?: boolean;
    taxable?: boolean;
    trial_interval?: number;
    trial_interval_unit?: any;
    trial_price_in_cents?: number;
    trial_type?: any;
    type?: any;
    unspsc_code?: string;
    update_return_params?: string;
    update_return_url?: string;
    updated_at?: string;
    use_site_exchange_rate?: boolean;
    version_number?: number;
    $action?: string;
    [action: string]: any;
}
export interface ProductPricePointRemoveMatch {
    price_point_id: string;
    product_id: string;
}
export interface ProformaInvoice {
    available_actions?: Record<string, any>;
    billing_address?: Record<string, any>;
    collection_method?: any;
    consolidation_level?: any;
    created_at?: string;
    credit_amount?: string;
    credits?: any[];
    currency?: string;
    custom_fields?: any[];
    customer?: any;
    customer_id?: number;
    delivery_date?: string;
    discount_amount?: string;
    discounts?: any[];
    due_amount?: string;
    id?: string;
    line_items?: any[];
    memo?: string;
    number?: number;
    paid_amount?: string;
    payment_instructions?: string;
    payments?: any[];
    product_family_name?: string;
    product_name?: string;
    public_url?: string;
    refund_amount?: string;
    role?: any;
    seller?: any;
    sequence_number?: number;
    shipping_address?: Record<string, any>;
    site_id?: number;
    status?: string;
    subscription_id?: number;
    subtotal_amount?: string;
    tax_amount?: string;
    taxes?: any[];
    total_amount?: string;
    uid?: string;
}
export interface ProformaInvoiceListMatch {
    subscription_id: number;
    credit?: boolean;
    custom_field?: boolean;
    direction?: any;
    discount?: boolean;
    end_date?: string;
    line_item?: boolean;
    page?: number;
    payment?: boolean;
    per_page?: number;
    start_date?: string;
    status?: any;
    taxis?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface ProformaInvoiceCreateData {
    available_actions?: Record<string, any>;
    billing_address?: Record<string, any>;
    collection_method?: any;
    consolidation_level?: any;
    created_at?: string;
    credit_amount?: string;
    credits?: any[];
    currency?: string;
    custom_fields?: any[];
    customer?: any;
    customer_id?: number;
    delivery_date?: string;
    discount_amount?: string;
    discounts?: any[];
    due_amount?: string;
    id?: string;
    line_items?: any[];
    memo?: string;
    number?: number;
    paid_amount?: string;
    payment_instructions?: string;
    payments?: any[];
    product_family_name?: string;
    product_name?: string;
    public_url?: string;
    refund_amount?: string;
    role?: any;
    seller?: any;
    sequence_number?: number;
    shipping_address?: Record<string, any>;
    site_id?: number;
    status?: string;
    subscription_id?: number;
    subtotal_amount?: string;
    tax_amount?: string;
    taxes?: any[];
    total_amount?: string;
    uid?: string;
    $action?: string;
    [action: string]: any;
}
export interface ReasonCode {
    code?: string;
    created_at?: string;
    description?: string;
    id?: number;
    position?: number;
    reason_code: Record<string, any>;
    site_id?: number;
    updated_at?: string;
}
export interface ReasonCodeLoadMatch {
    reason_code_id: number;
    $action?: string;
    [action: string]: any;
}
export interface ReasonCodeListMatch {
    page?: number;
    per_page?: number;
}
export interface ReasonCodeCreateData {
    code?: string;
    created_at?: string;
    description?: string;
    id?: number;
    position?: number;
    reason_code: Record<string, any>;
    site_id?: number;
    updated_at?: string;
}
export interface ReasonCodeUpdateData {
    reason_code_id: number;
    code?: string;
    created_at?: string;
    description?: string;
    id?: number;
    position?: number;
    reason_code?: Record<string, any>;
    site_id?: number;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface ReasonCodeRemoveMatch {
    reason_code_id: number;
    $action?: string;
    [action: string]: any;
}
export interface ReferralCode {
    code?: string;
    id?: number;
    site_id?: number;
    subscription_id?: number;
}
export interface ReferralCodeLoadMatch {
    code: string;
    $action?: string;
    [action: string]: any;
}
export interface SaleRepSetting {
    customer_name?: string;
    sales_rep_id?: number;
    sales_rep_name?: string;
    site_link?: string;
    site_name?: string;
    subscription_id?: number;
    subscription_mrr?: string;
}
export interface SaleRepSettingListMatch {
    seller_id: string;
    live_mode?: boolean;
    page?: number;
    per_page?: number;
}
export interface SalesCommission {
    full_name?: string;
    id?: number;
    subscriptions?: any[];
    subscriptions_count?: number;
    test_mode?: boolean;
}
export interface SalesCommissionListMatch {
    sales_rep_id: string;
    seller_id: string;
    live_mode?: boolean;
    page?: number;
    per_page?: number;
}
export interface Segment {
    component_id?: number;
    created_at?: string;
    event_based_billing_metric_id?: number;
    id?: number;
    price_point_id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    updated_at?: string;
}
export interface SegmentCreateData {
    component_id: string;
    price_point_id: string;
    created_at?: string;
    event_based_billing_metric_id?: number;
    id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    updated_at?: string;
}
export interface SegmentUpdateData {
    component_id: string;
    id: number;
    price_point_id: string;
    created_at?: string;
    event_based_billing_metric_id?: number;
    prices?: any[];
    pricing_scheme?: any;
    segment_property_1_value?: any;
    segment_property_2_value?: any;
    segment_property_3_value?: any;
    segment_property_4_value?: any;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface SignupProformaPreview {
}
export interface SignupProformaPreviewCreateData {
    include?: any;
}
export interface Site {
    allocation_settings?: Record<string, any>;
    auto_renewals_enabled?: boolean;
    created_at?: string;
    currency?: string;
    customer_hierarchy_enabled?: boolean;
    default_payment_collection_method?: string;
    id?: number;
    multi_frequency_enabled?: boolean;
    name?: string;
    net_terms?: Record<string, any>;
    non_primary_currencies?: any[];
    organization_address?: Record<string, any>;
    portal_enabled?: boolean;
    public_key?: string;
    relationship_invoicing_enabled?: boolean;
    requires_security_token?: boolean;
    schedule_subscription_cancellation_enabled?: boolean;
    seller_id?: number;
    subdomain?: string;
    tax_configuration?: Record<string, any>;
    test?: boolean;
    whopays_default_payer?: string;
    whopays_enabled?: boolean;
}
export interface SiteLoadMatch {
    allocation_settings?: Record<string, any>;
    auto_renewals_enabled?: boolean;
    created_at?: string;
    currency?: string;
    customer_hierarchy_enabled?: boolean;
    default_payment_collection_method?: string;
    id: number;
    multi_frequency_enabled?: boolean;
    name?: string;
    net_terms?: Record<string, any>;
    non_primary_currencies?: any[];
    organization_address?: Record<string, any>;
    portal_enabled?: boolean;
    public_key?: string;
    relationship_invoicing_enabled?: boolean;
    requires_security_token?: boolean;
    schedule_subscription_cancellation_enabled?: boolean;
    seller_id?: number;
    subdomain?: string;
    tax_configuration?: Record<string, any>;
    test?: boolean;
    whopays_default_payer?: string;
    whopays_enabled?: boolean;
}
export interface SiteListMatch {
    page?: number;
    per_page?: number;
}
export interface SiteCreateData {
    cleanup_scope?: any;
    allocation_settings?: Record<string, any>;
    auto_renewals_enabled?: boolean;
    created_at?: string;
    currency?: string;
    customer_hierarchy_enabled?: boolean;
    default_payment_collection_method?: string;
    id?: number;
    multi_frequency_enabled?: boolean;
    name?: string;
    net_terms?: Record<string, any>;
    non_primary_currencies?: any[];
    organization_address?: Record<string, any>;
    portal_enabled?: boolean;
    public_key?: string;
    relationship_invoicing_enabled?: boolean;
    requires_security_token?: boolean;
    schedule_subscription_cancellation_enabled?: boolean;
    seller_id?: number;
    subdomain?: string;
    tax_configuration?: Record<string, any>;
    test?: boolean;
    whopays_default_payer?: string;
    whopays_enabled?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface Subscription {
    activated_at?: string;
    automatically_resume_at?: string;
    balance_in_cents?: number;
    bank_account: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    canceled_at?: string;
    cancellation_message?: string;
    cancellation_method?: any;
    coupon_code?: string;
    coupon_codes?: any[];
    coupon_use_count?: number;
    coupon_uses_allowed?: number;
    coupons?: any[];
    created_at?: string;
    credit_balance_in_cents?: number;
    credit_card?: any;
    currency?: string;
    current_billing_amount_in_cents?: number;
    current_period_ends_at?: string;
    current_period_started_at?: string;
    customer?: Record<string, any>;
    delayed_cancel_at?: string;
    dunning_communication_delay_enabled?: boolean;
    dunning_communication_delay_time_zone?: string;
    expires_at?: string;
    group?: any;
    id?: number;
    locale?: string;
    net_terms?: number;
    next_assessment_at?: string;
    next_product_handle?: string;
    next_product_id?: number;
    next_product_price_point_id?: number;
    offer_id?: number;
    on_hold_at?: string;
    payer_id?: number;
    payment_collection_method?: any;
    payment_type?: string;
    prepaid_configuration?: any;
    prepaid_dunning?: boolean;
    prepayment_balance_in_cents?: number;
    previous_state?: any;
    product?: Record<string, any>;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_type?: any;
    product_version_number?: number;
    reason_code?: string;
    receives_invoice_emails?: boolean;
    reference?: string;
    referral_code?: string;
    scheduled_cancellation_at?: string;
    self_service_page_token?: string;
    signup_payment_id?: number;
    signup_revenue?: string;
    snap_day?: string;
    state?: any;
    stored_credential_transaction_id?: number;
    subscription?: Record<string, any>;
    total_revenue_in_cents?: number;
    trial_ended_at?: string;
    trial_started_at?: string;
    updated_at?: string;
}
export interface SubscriptionLoadMatch {
    subscription_id: number;
    include?: any[];
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionListMatch {
    branding_theme_id?: number;
    collection_method?: any;
    coupon?: number;
    coupon_code?: string;
    currency?: string;
    customer_id?: number;
    date_field?: any;
    direction?: any;
    dunning_exemption?: boolean;
    end_date?: string;
    end_datetime?: string;
    group_status?: any;
    include?: any[];
    metadata?: Record<string, any>;
    page?: number;
    payment_gateway?: string;
    per_page?: number;
    product?: any;
    product_price_point_id?: number;
    q?: string;
    q_scope?: any;
    sort?: any;
    start_date?: string;
    start_datetime?: string;
    state?: any;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionCreateData {
    activated_at?: string;
    automatically_resume_at?: string;
    balance_in_cents?: number;
    bank_account: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    canceled_at?: string;
    cancellation_message?: string;
    cancellation_method?: any;
    coupon_code?: string;
    coupon_codes?: any[];
    coupon_use_count?: number;
    coupon_uses_allowed?: number;
    coupons?: any[];
    created_at?: string;
    credit_balance_in_cents?: number;
    credit_card?: any;
    currency?: string;
    current_billing_amount_in_cents?: number;
    current_period_ends_at?: string;
    current_period_started_at?: string;
    customer?: Record<string, any>;
    delayed_cancel_at?: string;
    dunning_communication_delay_enabled?: boolean;
    dunning_communication_delay_time_zone?: string;
    expires_at?: string;
    group?: any;
    id?: number;
    locale?: string;
    net_terms?: number;
    next_assessment_at?: string;
    next_product_handle?: string;
    next_product_id?: number;
    next_product_price_point_id?: number;
    offer_id?: number;
    on_hold_at?: string;
    payer_id?: number;
    payment_collection_method?: any;
    payment_type?: string;
    prepaid_configuration?: any;
    prepaid_dunning?: boolean;
    prepayment_balance_in_cents?: number;
    previous_state?: any;
    product?: Record<string, any>;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_type?: any;
    product_version_number?: number;
    reason_code?: string;
    receives_invoice_emails?: boolean;
    reference?: string;
    referral_code?: string;
    scheduled_cancellation_at?: string;
    self_service_page_token?: string;
    signup_payment_id?: number;
    signup_revenue?: string;
    snap_day?: string;
    state?: any;
    stored_credential_transaction_id?: number;
    subscription?: Record<string, any>;
    total_revenue_in_cents?: number;
    trial_ended_at?: string;
    trial_started_at?: string;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionUpdateData {
    subscription_id: number;
    activated_at?: string;
    automatically_resume_at?: string;
    balance_in_cents?: number;
    bank_account?: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    canceled_at?: string;
    cancellation_message?: string;
    cancellation_method?: any;
    coupon_code?: string;
    coupon_codes?: any[];
    coupon_use_count?: number;
    coupon_uses_allowed?: number;
    coupons?: any[];
    created_at?: string;
    credit_balance_in_cents?: number;
    credit_card?: any;
    currency?: string;
    current_billing_amount_in_cents?: number;
    current_period_ends_at?: string;
    current_period_started_at?: string;
    customer?: Record<string, any>;
    delayed_cancel_at?: string;
    dunning_communication_delay_enabled?: boolean;
    dunning_communication_delay_time_zone?: string;
    expires_at?: string;
    group?: any;
    id?: number;
    locale?: string;
    net_terms?: number;
    next_assessment_at?: string;
    next_product_handle?: string;
    next_product_id?: number;
    next_product_price_point_id?: number;
    offer_id?: number;
    on_hold_at?: string;
    payer_id?: number;
    payment_collection_method?: any;
    payment_type?: string;
    prepaid_configuration?: any;
    prepaid_dunning?: boolean;
    prepayment_balance_in_cents?: number;
    previous_state?: any;
    product?: Record<string, any>;
    product_price_in_cents?: number;
    product_price_point_id?: number;
    product_price_point_type?: any;
    product_version_number?: number;
    reason_code?: string;
    receives_invoice_emails?: boolean;
    reference?: string;
    referral_code?: string;
    scheduled_cancellation_at?: string;
    self_service_page_token?: string;
    signup_payment_id?: number;
    signup_revenue?: string;
    snap_day?: string;
    state?: any;
    stored_credential_transaction_id?: number;
    subscription?: Record<string, any>;
    total_revenue_in_cents?: number;
    trial_ended_at?: string;
    trial_started_at?: string;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionRemoveMatch {
    id: number;
    coupon_code?: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionComponent {
    accrue_charge?: boolean;
    allocated_quantity?: any;
    allocation_id?: number;
    allocations?: any[];
    allow_fractional_quantities?: boolean;
    archived_at?: string;
    charge_id?: number;
    component?: Record<string, any>;
    component_handle?: string;
    component_id?: number;
    created_at?: string;
    currency?: string;
    description?: string;
    direction?: string;
    display_on_hosted_page?: boolean;
    downgrade_credit?: any;
    enabled?: boolean;
    end_date?: string;
    existing_balance_in_cents?: number;
    expires_at?: string;
    historic_usages?: any[];
    id?: number;
    initiate_dunning?: boolean;
    interval?: number;
    interval_unit?: any;
    kind?: any;
    line_items?: any[];
    memo?: string;
    name?: string;
    overage_quantity?: number;
    payment?: any;
    period_type?: string;
    previous_price_point_id?: number;
    previous_quantity?: any;
    price_point_handle?: string;
    price_point_id?: number;
    price_point_name?: string;
    price_point_type?: any;
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    proration_downgrade_scheme?: string;
    proration_scheme?: string;
    proration_upgrade_scheme?: string;
    quantity?: any;
    recurring?: boolean;
    start_date?: string;
    subscription?: any;
    subscription_id?: number;
    subtotal_in_cents?: number;
    timestamp?: string;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    unit_balance?: any;
    unit_name?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
    used_quantity?: number;
}
export interface SubscriptionComponentLoadMatch {
    component_id: number;
    subscription_id: number;
}
export interface SubscriptionComponentListMatch {
    date_field?: any;
    direction?: any;
    end_date?: string;
    end_datetime?: string;
    filter?: any;
    include?: any;
    page?: number;
    per_page?: number;
    price_point_id?: string;
    product_family_id?: any[];
    sort?: any;
    start_date?: string;
    start_datetime?: string;
    subscription_id?: any[];
}
export interface SubscriptionComponentCreateData {
    api_handle: string;
    store_uid?: string;
    accrue_charge?: boolean;
    allocated_quantity?: any;
    allocation_id?: number;
    allocations?: any[];
    allow_fractional_quantities?: boolean;
    archived_at?: string;
    charge_id?: number;
    component?: Record<string, any>;
    component_handle?: string;
    component_id?: number;
    created_at?: string;
    currency?: string;
    description?: string;
    direction?: string;
    display_on_hosted_page?: boolean;
    downgrade_credit?: any;
    enabled?: boolean;
    end_date?: string;
    existing_balance_in_cents?: number;
    expires_at?: string;
    historic_usages?: any[];
    id?: number;
    initiate_dunning?: boolean;
    interval?: number;
    interval_unit?: any;
    kind?: any;
    line_items?: any[];
    memo?: string;
    name?: string;
    overage_quantity?: number;
    payment?: any;
    period_type?: string;
    previous_price_point_id?: number;
    previous_quantity?: any;
    price_point_handle?: string;
    price_point_id?: number;
    price_point_name?: string;
    price_point_type?: any;
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    proration_downgrade_scheme?: string;
    proration_scheme?: string;
    proration_upgrade_scheme?: string;
    quantity?: any;
    recurring?: boolean;
    start_date?: string;
    subscription?: any;
    subscription_id?: number;
    subtotal_in_cents?: number;
    timestamp?: string;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    unit_balance?: any;
    unit_name?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
    used_quantity?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionComponentUpdateData {
    allocation_id: number;
    component_id: number;
    subscription_id: number;
    accrue_charge?: boolean;
    allocated_quantity?: any;
    allocations?: any[];
    allow_fractional_quantities?: boolean;
    archived_at?: string;
    charge_id?: number;
    component?: Record<string, any>;
    component_handle?: string;
    created_at?: string;
    currency?: string;
    description?: string;
    direction?: string;
    display_on_hosted_page?: boolean;
    downgrade_credit?: any;
    enabled?: boolean;
    end_date?: string;
    existing_balance_in_cents?: number;
    expires_at?: string;
    historic_usages?: any[];
    id?: number;
    initiate_dunning?: boolean;
    interval?: number;
    interval_unit?: any;
    kind?: any;
    line_items?: any[];
    memo?: string;
    name?: string;
    overage_quantity?: number;
    payment?: any;
    period_type?: string;
    previous_price_point_id?: number;
    previous_quantity?: any;
    price_point_handle?: string;
    price_point_id?: number;
    price_point_name?: string;
    price_point_type?: any;
    pricing_scheme?: any;
    product_family_handle?: string;
    product_family_id?: number;
    proration_downgrade_scheme?: string;
    proration_scheme?: string;
    proration_upgrade_scheme?: string;
    quantity?: any;
    recurring?: boolean;
    start_date?: string;
    subscription?: any;
    subtotal_in_cents?: number;
    timestamp?: string;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    unit_balance?: any;
    unit_name?: string;
    updated_at?: string;
    upgrade_charge?: any;
    use_site_exchange_rate?: boolean;
    used_quantity?: number;
}
export interface SubscriptionComponentRemoveMatch {
    allocation_id: number;
    component_id: number;
    subscription_id: number;
}
export interface SubscriptionGroup {
    account_balances?: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    created_at?: string;
    customer_id?: number;
    group_type?: string;
    id?: string;
    next_assessment_at?: string;
    payment_collection_method?: any;
    payment_profile?: Record<string, any>;
    payment_profile_id?: number;
    primary_subscription_id?: number;
    scheme?: number;
    state?: string;
    subscription_ids?: any[];
    uid?: string;
}
export interface SubscriptionGroupListMatch {
    include?: any[];
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupCreateData {
    account_balances?: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    created_at?: string;
    customer_id?: number;
    group_type?: string;
    id?: string;
    next_assessment_at?: string;
    payment_collection_method?: any;
    payment_profile?: Record<string, any>;
    payment_profile_id?: number;
    primary_subscription_id?: number;
    scheme?: number;
    state?: string;
    subscription_ids?: any[];
    uid?: string;
}
export interface SubscriptionGroupUpdateData {
    uid: string;
    account_balances?: Record<string, any>;
    cancel_at_end_of_period?: boolean;
    created_at?: string;
    customer_id?: number;
    group_type?: string;
    id?: string;
    next_assessment_at?: string;
    payment_collection_method?: any;
    payment_profile?: Record<string, any>;
    payment_profile_id?: number;
    primary_subscription_id?: number;
    scheme?: number;
    state?: string;
    subscription_ids?: any[];
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupRemoveMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupInvoiceAccount {
    id?: string;
}
export interface SubscriptionGroupInvoiceAccountListMatch {
    id: string;
    filter?: any;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupInvoiceAccountCreateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupSignup {
}
export interface SubscriptionGroupSignupCreateData {
}
export interface SubscriptionGroupStatus {
    id?: string;
}
export interface SubscriptionGroupStatusCreateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionGroupStatusRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionInvoiceAccount {
    amount_in_cents?: number;
    created_at?: string;
    ending_balance_in_cents?: number;
    entry_type?: any;
    id?: number;
    invoice_uid?: string;
    memo?: string;
    remaining_balance_in_cents?: number;
}
export interface SubscriptionInvoiceAccountListMatch {
    subscription_id: number;
    direction?: any;
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionInvoiceAccountCreateData {
    id: number;
    amount_in_cents?: number;
    created_at?: string;
    ending_balance_in_cents?: number;
    entry_type?: any;
    invoice_uid?: string;
    memo?: string;
    remaining_balance_in_cents?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionMrr {
    breakouts: Record<string, any>;
    mrr_amount_in_cents: number;
    subscription_id: number;
}
export interface SubscriptionMrrListMatch {
    at_time?: string;
    direction?: any;
    filter?: any;
    page?: number;
    per_page?: number;
}
export interface SubscriptionNote {
    body?: string;
    created_at?: string;
    id?: number;
    note: Record<string, any>;
    sticky?: boolean;
    subscription_id?: number;
    updated_at?: string;
}
export interface SubscriptionNoteLoadMatch {
    note_id: number;
    subscription_id: number;
}
export interface SubscriptionNoteListMatch {
    id: number;
    page?: number;
    per_page?: number;
}
export interface SubscriptionNoteCreateData {
    id: number;
    body?: string;
    created_at?: string;
    note: Record<string, any>;
    sticky?: boolean;
    subscription_id?: number;
    updated_at?: string;
}
export interface SubscriptionNoteUpdateData {
    note_id: number;
    subscription_id: number;
    body?: string;
    created_at?: string;
    id?: number;
    note?: Record<string, any>;
    sticky?: boolean;
    updated_at?: string;
}
export interface SubscriptionNoteRemoveMatch {
    note_id: number;
    subscription_id: number;
}
export interface SubscriptionProduct {
    charge_in_cents?: number;
    credit_applied_in_cents?: number;
    id?: string;
    migration: Record<string, any>;
    payment_due_in_cents?: number;
    prorated_adjustment_in_cents?: number;
}
export interface SubscriptionProductCreateData {
    subscription_id: number;
    charge_in_cents?: number;
    credit_applied_in_cents?: number;
    id?: string;
    migration: Record<string, any>;
    payment_due_in_cents?: number;
    prorated_adjustment_in_cents?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionRenewal {
    contract?: any;
    created_at?: string;
    decimal_quantity?: string;
    ends_at?: string;
    id?: number;
    item_id?: number;
    item_subclass?: string;
    item_type?: string;
    lock_in_at?: string;
    price_point_id?: number;
    price_point_type?: string;
    quantity?: number;
    scheduled_renewal_configuration_item?: Record<string, any>;
    scheduled_renewal_configuration_items?: any[];
    site_id?: number;
    starts_at?: string;
    status?: string;
    subscription_id?: number;
    subscription_renewal_configuration_id?: number;
}
export interface SubscriptionRenewalLoadMatch {
    id: number;
    subscription_id: number;
}
export interface SubscriptionRenewalListMatch {
    id: number;
    status?: any;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionRenewalCreateData {
    scheduled_renewal_id: number;
    subscription_id: number;
    contract?: any;
    created_at?: string;
    decimal_quantity?: string;
    ends_at?: string;
    id?: number;
    item_id?: number;
    item_subclass?: string;
    item_type?: string;
    lock_in_at?: string;
    price_point_id?: number;
    price_point_type?: string;
    quantity?: number;
    scheduled_renewal_configuration_item?: Record<string, any>;
    scheduled_renewal_configuration_items?: any[];
    site_id?: number;
    starts_at?: string;
    status?: string;
    subscription_renewal_configuration_id?: number;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionRenewalUpdateData {
    id?: number;
    scheduled_renewal_id?: number;
    subscription_id: number;
    contract?: any;
    created_at?: string;
    decimal_quantity?: string;
    ends_at?: string;
    item_id?: number;
    item_subclass?: string;
    item_type?: string;
    lock_in_at?: string;
    price_point_id?: number;
    price_point_type?: string;
    quantity?: number;
    scheduled_renewal_configuration_item?: Record<string, any>;
    scheduled_renewal_configuration_items?: any[];
    site_id?: number;
    starts_at?: string;
    status?: string;
    subscription_renewal_configuration_id?: number;
}
export interface SubscriptionRenewalRemoveMatch {
    id: number;
    scheduled_renewal_id: number;
    subscription_id: number;
}
export interface SubscriptionStatus {
    existing_balance_in_cents?: number;
    id?: string;
    line_items?: any[];
    next_assessment_at?: string;
    subtotal_in_cents?: number;
    total_amount_due_in_cents?: number;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    uncalculated_taxes?: boolean;
}
export interface SubscriptionStatusCreateData {
    subscription_id: number;
    existing_balance_in_cents?: number;
    id?: string;
    line_items?: any[];
    next_assessment_at?: string;
    subtotal_in_cents?: number;
    total_amount_due_in_cents?: number;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    uncalculated_taxes?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionStatusUpdateData {
    id: number;
    existing_balance_in_cents?: number;
    line_items?: any[];
    next_assessment_at?: string;
    subtotal_in_cents?: number;
    total_amount_due_in_cents?: number;
    total_discount_in_cents?: number;
    total_in_cents?: number;
    total_tax_in_cents?: number;
    uncalculated_taxes?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface SubscriptionStatusRemoveMatch {
    subscription_id: number;
    $action?: string;
    [action: string]: any;
}
export interface Usage {
    usage: Record<string, any>;
}
export interface UsageListMatch {
    component_id: string;
    subscription_id_or_reference: any;
    max_id?: number;
    page?: number;
    per_page?: number;
    since_date?: string;
    since_id?: number;
    until_date?: string;
}
export interface Webhook {
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook?: Record<string, any>;
    webhook_subscriptions?: any[];
}
export interface WebhookListMatch {
    order?: any;
    page?: number;
    per_page?: number;
    since_date?: string;
    status?: any;
    subscription?: number;
    until_date?: string;
}
export interface WebhookCreateData {
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook?: Record<string, any>;
    webhook_subscriptions?: any[];
    $action?: string;
    [action: string]: any;
}
export interface WebhookUpdateData {
    id?: number;
    site_id?: number;
    status?: string;
    url?: string;
    webhook?: Record<string, any>;
    webhook_subscriptions?: any[];
    $action?: string;
    [action: string]: any;
}
