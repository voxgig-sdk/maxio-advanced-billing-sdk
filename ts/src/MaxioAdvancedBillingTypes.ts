// Typed models for the MaxioAdvancedBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AccountBalance {
  open_invoices?: any
  pending_discounts?: any
  pending_invoices?: any
  prepayments?: any
  service_credits?: any
}

export interface AccountBalanceLoadMatch {
  subscription_id: number
}

export interface Allocation {
  allocation?: Record<string, any>
}

export interface AllocationListMatch {
  component_id: number
  subscription_id: number
  page?: number
}

export interface AllocationCreateData {
  subscription_id: number
  allocation?: Record<string, any>
}

export interface BatchJob {
  completed?: string
  created_at?: string
  finished_at?: string
  id?: number
  row_count?: number
}

export interface BatchJobLoadMatch {
  batch_id: string
}

export interface BatchJobCreateData {
  completed?: string
  created_at?: string
  finished_at?: string
  id?: number
  row_count?: number
}

export interface BillingPortal {
  created_at?: string
  expires_at?: string
  fetch_count?: number
  last_accepted_at?: string
  last_invite_accepted_at?: string
  last_invite_sent_at?: string
  last_sent_at?: string
  new_link_available_at?: string
  send_invite_link_text?: string
  uninvited_count?: number
  url?: string
}

export interface BillingPortalLoadMatch {
  customer_id: number
}

export interface BillingPortalCreateData {
  customer_id: number
  created_at?: string
  expires_at?: string
  fetch_count?: number
  last_accepted_at?: string
  last_invite_accepted_at?: string
  last_invite_sent_at?: string
  last_sent_at?: string
  new_link_available_at?: string
  send_invite_link_text?: string
  uninvited_count?: number
  url?: string
}

export interface BillingPortalRemoveMatch {
  customer_id: number
}

export interface Component {
  component?: Record<string, any>
}

export interface ComponentLoadMatch {
  component_id: string
  product_family_id: number
  include_feature?: boolean

  // Selects a custom action instead of the plain load:
  //   'component_id' | 'lookup'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ComponentListMatch {
  date_field?: any
  end_date?: string
  end_datetime?: string
  filter?: any
  include_archived?: boolean
  page?: number
  per_page?: number
  start_date?: string
  start_datetime?: string
}

export interface ComponentCreateData {
  product_family_id: string
  component?: Record<string, any>
}

export interface ComponentUpdateData {
  component_id: string
  product_family_id?: number
  component?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'component_id' | 'component_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ComponentRemoveMatch {
  component_id: string
  product_family_id: number

  // Selects a custom action instead of the plain remove:
  //   'component_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ComponentFeature {
  id?: string
}

export interface ComponentFeatureRemoveMatch {
  component_id: number
  id: number
  destroy_entitlement?: boolean
}

export interface ComponentPricePoint {
  archived_at?: string
  component: Record<string, any>
  component_id?: number
  created_at?: string
  currency_prices?: any[]
  default?: boolean
  expiration_interval?: number
  expiration_interval_unit?: any
  handle?: string
  id?: number
  interval?: number
  interval_unit?: any
  name?: string
  overage_prices?: any[]
  overage_pricing_scheme?: any
  price_point?: Record<string, any>
  price_points?: any[]
  prices?: any[]
  pricing_scheme?: any
  renew_prepaid_allocation?: boolean
  rollover_prepaid_remainder?: boolean
  subscription_id?: number
  tax_included?: boolean
  type?: any
  updated_at?: string
  use_site_exchange_rate?: boolean
}

export interface ComponentPricePointListMatch {
  direction?: any
  filter?: any
  include?: any
  page?: number
  per_page?: number
}

export interface ComponentPricePointCreateData {
  id: number
  archived_at?: string
  component: Record<string, any>
  component_id?: number
  created_at?: string
  currency_prices?: any[]
  default?: boolean
  expiration_interval?: number
  expiration_interval_unit?: any
  handle?: string
  interval?: number
  interval_unit?: any
  name?: string
  overage_prices?: any[]
  overage_pricing_scheme?: any
  price_point?: Record<string, any>
  price_points?: any[]
  prices?: any[]
  pricing_scheme?: any
  renew_prepaid_allocation?: boolean
  rollover_prepaid_remainder?: boolean
  subscription_id?: number
  tax_included?: boolean
  type?: any
  updated_at?: string
  use_site_exchange_rate?: boolean
}

export interface ComponentPricePointUpdateData {
  component_id?: string
  price_point_id: string
  archived_at?: string
  component?: Record<string, any>
  created_at?: string
  currency_prices?: any[]
  default?: boolean
  expiration_interval?: number
  expiration_interval_unit?: any
  handle?: string
  id?: number
  interval?: number
  interval_unit?: any
  name?: string
  overage_prices?: any[]
  overage_pricing_scheme?: any
  price_point?: Record<string, any>
  price_points?: any[]
  prices?: any[]
  pricing_scheme?: any
  renew_prepaid_allocation?: boolean
  rollover_prepaid_remainder?: boolean
  subscription_id?: number
  tax_included?: boolean
  type?: any
  updated_at?: string
  use_site_exchange_rate?: boolean
}

export interface ComponentPricePointRemoveMatch {
  component_id: string
  price_point_id: string
}

export interface ComponentPricePointCurrencyOverage {
  archived_at?: string
  component_id?: number
  created_at?: string
  currency_overage_prices?: any[]
  currency_prices?: any[]
  default?: boolean
  expiration_interval?: number
  expiration_interval_unit?: any
  handle?: string
  id?: number
  interval?: number
  interval_unit?: any
  name?: string
  overage_prices?: any[]
  overage_pricing_scheme?: any
  prices?: any[]
  pricing_scheme?: any
  renew_prepaid_allocation?: boolean
  rollover_prepaid_remainder?: boolean
  subscription_id?: number
  tax_included?: boolean
  type?: any
  updated_at?: string
  use_site_exchange_rate?: boolean
}

export interface ComponentPricePointCurrencyOverageLoadMatch {
  component_id: string
  price_point_id: string
  currency_price?: boolean
}

export interface Coupon {
  allow_negative_balance?: boolean
  amount?: number
  amount_in_cents?: number
  apply_on_cancel_at_end_of_period?: boolean
  apply_on_subscription_expiration?: boolean
  archived_at?: string
  code?: string
  compounding_strategy?: any
  conversion_limit?: string
  coupon?: Record<string, any>
  coupon_restrictions?: any[]
  created_at?: string
  currency_prices?: any[]
  description?: string
  discount_type?: string
  duration_interval?: number
  duration_interval_span?: string
  duration_interval_unit?: string
  duration_period_count?: number
  end_date?: string
  exclude_mid_period_allocations?: boolean
  id?: number
  name?: string
  percentage?: string
  product_family_id?: number
  product_family_name?: string
  recurring?: boolean
  recurring_scheme?: string
  stackable?: boolean
  start_date?: string
  updated_at?: string
  use_site_exchange_rate?: boolean
}

export interface CouponLoadMatch {
  coupon_id: number
  product_family_id: number
  currency_price?: boolean

  // Selects a custom action instead of the plain load:
  //   'coupon_id' | 'find' | 'validate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponListMatch {
  currency_price?: boolean
  filter?: any
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'code'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponCreateData {
  product_family_id: number
  allow_negative_balance?: boolean
  amount?: number
  amount_in_cents?: number
  apply_on_cancel_at_end_of_period?: boolean
  apply_on_subscription_expiration?: boolean
  archived_at?: string
  code?: string
  compounding_strategy?: any
  conversion_limit?: string
  coupon?: Record<string, any>
  coupon_restrictions?: any[]
  created_at?: string
  currency_prices?: any[]
  description?: string
  discount_type?: string
  duration_interval?: number
  duration_interval_span?: string
  duration_interval_unit?: string
  duration_period_count?: number
  end_date?: string
  exclude_mid_period_allocations?: boolean
  id?: number
  name?: string
  percentage?: string
  product_family_name?: string
  recurring?: boolean
  recurring_scheme?: string
  stackable?: boolean
  start_date?: string
  updated_at?: string
  use_site_exchange_rate?: boolean

  // Selects a custom action instead of the plain create:
  //   'code'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponUpdateData {
  coupon_id: number
  product_family_id: number
  allow_negative_balance?: boolean
  amount?: number
  amount_in_cents?: number
  apply_on_cancel_at_end_of_period?: boolean
  apply_on_subscription_expiration?: boolean
  archived_at?: string
  code?: string
  compounding_strategy?: any
  conversion_limit?: string
  coupon?: Record<string, any>
  coupon_restrictions?: any[]
  created_at?: string
  currency_prices?: any[]
  description?: string
  discount_type?: string
  duration_interval?: number
  duration_interval_span?: string
  duration_interval_unit?: string
  duration_period_count?: number
  end_date?: string
  exclude_mid_period_allocations?: boolean
  id?: number
  name?: string
  percentage?: string
  product_family_name?: string
  recurring?: boolean
  recurring_scheme?: string
  stackable?: boolean
  start_date?: string
  updated_at?: string
  use_site_exchange_rate?: boolean

  // Selects a custom action instead of the plain update:
  //   'coupon_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponRemoveMatch {
  id: number
  subcode: string

  // Selects a custom action instead of the plain remove:
  //   'code_subcode' | 'coupon_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponCurrency {
  id?: string
}

export interface CouponCurrencyUpdateData {
  id: number

  // Selects a custom action instead of the plain update:
  //   'currency_prices.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CouponSubcode {
  created_codes?: any[]
  duplicate_codes?: any[]
  id?: string
  invalid_codes?: any[]
}

export interface CouponSubcodeUpdateData {
  id: number
  created_codes?: any[]
  duplicate_codes?: any[]
  invalid_codes?: any[]
}

export interface CouponUsage {
  id?: number
  name?: string
  revenue?: number
  revenue_in_cents?: number
  savings?: number
  savings_in_cents?: number
  signups?: number
}

export interface CouponUsageListMatch {
  id: number
  product_family_id: number
}

export interface CustomField {
  current_page?: number
  data_count?: number
  deleted_at?: string
  enum?: string
  id?: number
  input_type?: string
  metadata?: Record<string, any>
  metafield_id?: number
  metafields?: any
  name?: string
  per_page?: number
  resource_id?: number
  scope?: Record<string, any>
  total_count?: number
  total_pages?: number
  value?: string
}

export interface CustomFieldListMatch {
  resource_type: any
  date_field?: any
  direction?: any
  end_date?: string
  end_datetime?: string
  page?: number
  per_page?: number
  resource_id?: any[]
  start_date?: string
  start_datetime?: string
  with_deleted?: boolean
  name?: string
}

export interface CustomFieldCreateData {
  resource_id?: number
  resource_type: any
  current_page?: number
  data_count?: number
  deleted_at?: string
  enum?: string
  id?: number
  input_type?: string
  metadata?: Record<string, any>
  metafield_id?: number
  metafields?: any
  name?: string
  per_page?: number
  scope?: Record<string, any>
  total_count?: number
  total_pages?: number
  value?: string
}

export interface CustomFieldUpdateData {
  resource_id?: number
  resource_type: any
  current_page?: number
  data_count?: number
  deleted_at?: string
  enum?: string
  id?: number
  input_type?: string
  metadata?: Record<string, any>
  metafield_id?: number
  metafields?: any
  name?: string
  per_page?: number
  scope?: Record<string, any>
  total_count?: number
  total_pages?: number
  value?: string
}

export interface CustomFieldRemoveMatch {
  resource_id?: number
  resource_type: any
  name?: string
}

export interface Customer {
  address?: string
  address_2?: string
  branding_theme_id?: number
  cc_emails?: string
  city?: string
  country?: string
  country_name?: string
  created_at?: string
  customer?: Record<string, any>
  default_auto_renewal_profile_id?: number
  default_subscription_group_uid?: string
  email?: string
  entity_identifier_kind?: any
  entity_identifier_value?: string
  first_name?: string
  id?: number
  last_name?: string
  locale?: string
  maxioid?: string
  organization?: string
  parent_id?: number
  phone?: string
  portal_customer_created_at?: string
  portal_invite_last_accepted_at?: string
  portal_invite_last_sent_at?: string
  reference?: string
  salesforce_id?: string
  state?: string
  state_name?: string
  surcharging?: boolean
  tax_exempt?: boolean
  tax_exempt_reason?: string
  updated_at?: string
  vat_country?: string
  vat_number?: string
  verified?: boolean
  zip?: string
}

export interface CustomerLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'id' | 'lookup'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerListMatch {
  date_field?: any
  direction?: any
  end_date?: string
  end_datetime?: string
  page?: number
  per_page?: number
  q?: string
  start_date?: string
  start_datetime?: string
}

export interface CustomerCreateData {
  address?: string
  address_2?: string
  branding_theme_id?: number
  cc_emails?: string
  city?: string
  country?: string
  country_name?: string
  created_at?: string
  customer?: Record<string, any>
  default_auto_renewal_profile_id?: number
  default_subscription_group_uid?: string
  email?: string
  entity_identifier_kind?: any
  entity_identifier_value?: string
  first_name?: string
  id?: number
  last_name?: string
  locale?: string
  maxioid?: string
  organization?: string
  parent_id?: number
  phone?: string
  portal_customer_created_at?: string
  portal_invite_last_accepted_at?: string
  portal_invite_last_sent_at?: string
  reference?: string
  salesforce_id?: string
  state?: string
  state_name?: string
  surcharging?: boolean
  tax_exempt?: boolean
  tax_exempt_reason?: string
  updated_at?: string
  vat_country?: string
  vat_number?: string
  verified?: boolean
  zip?: string

  // Selects a custom action instead of the plain create:
  //   'enable'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerUpdateData {
  id: number
  address?: string
  address_2?: string
  branding_theme_id?: number
  cc_emails?: string
  city?: string
  country?: string
  country_name?: string
  created_at?: string
  customer?: Record<string, any>
  default_auto_renewal_profile_id?: number
  default_subscription_group_uid?: string
  email?: string
  entity_identifier_kind?: any
  entity_identifier_value?: string
  first_name?: string
  last_name?: string
  locale?: string
  maxioid?: string
  organization?: string
  parent_id?: number
  phone?: string
  portal_customer_created_at?: string
  portal_invite_last_accepted_at?: string
  portal_invite_last_sent_at?: string
  reference?: string
  salesforce_id?: string
  state?: string
  state_name?: string
  surcharging?: boolean
  tax_exempt?: boolean
  tax_exempt_reason?: string
  updated_at?: string
  vat_country?: string
  vat_number?: string
  verified?: boolean
  zip?: string

  // Selects a custom action instead of the plain update:
  //   'id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerRemoveMatch {
  id: number

  // Selects a custom action instead of the plain remove:
  //   'id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DelayedCancel {
  message?: string
  subscription: Record<string, any>
}

export interface DelayedCancelCreateData {
  subscription_id: number
  message?: string
  subscription: Record<string, any>
}

export interface Endpoint {
  id?: number
  site_id?: number
  status?: string
  url?: string
  webhook_subscriptions?: any[]
}

export interface EndpointListMatch {
  id?: number
  site_id?: number
  status?: string
  url?: string
  webhook_subscriptions?: any[]
}

export interface EndpointUpdateData {
  endpoint_id: number
  id?: number
  site_id?: number
  status?: string
  url?: string
  webhook_subscriptions?: any[]

  // Selects a custom action instead of the plain update:
  //   'endpoint_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Entitlement {
  customer_id: number
  entitlements: any[]
  status: string
  subscription_id: number
}

export interface EntitlementListMatch {
  subscription_id: number
}

export interface Event {
  event: Record<string, any>
}

export interface EventLoadMatch {
  direction?: any
  filter?: any[]
  max_id?: number
  page?: number
  per_page?: number
  since_id?: number

  // Selects a custom action instead of the plain load:
  //   'count'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EventListMatch {
  date_field?: any
  direction?: any
  end_date?: string
  end_datetime?: string
  filter?: any[]
  max_id?: number
  page?: number
  per_page?: number
  since_id?: number
  start_date?: string
  start_datetime?: string
}

export interface EventsBasedBillingSegment {
  id?: string
}

export interface EventsBasedBillingSegmentRemoveMatch {
  component_id: string
  id: number
  price_point_id: string
}

export interface Feature {
  archived_at?: string
  archived_count: number
  created_at?: string
  feature: Record<string, any>
  feature_key?: string
  feature_kind?: any
  feature_name?: string
  feature_template_id?: number
  id?: number
  items: any[]
  periodicity_interval?: number
  periodicity_unit?: any
  price_point_id?: number
  price_point_type?: any
  total_count: number
  updated_at?: string
  value?: string
}

export interface FeatureListMatch {
  kind?: any
  page?: number
  per_page?: number
  q?: string
  sort_by?: any
  sort_direction?: any
  status?: any
  updated_from?: string
  updated_to?: string
}

export interface FeatureCreateData {
  archived_at?: string
  archived_count: number
  created_at?: string
  feature: Record<string, any>
  feature_key?: string
  feature_kind?: any
  feature_name?: string
  feature_template_id?: number
  id?: number
  items: any[]
  periodicity_interval?: number
  periodicity_unit?: any
  price_point_id?: number
  price_point_type?: any
  total_count: number
  updated_at?: string
  value?: string
}

export interface FeatureCatalogItem {
  archived_at?: string
  created_at?: string
  feature: Record<string, any>
  feature_key?: string
  feature_kind?: any
  feature_name?: string
  feature_template_id?: number
  id?: number
  periodicity_interval?: number
  periodicity_unit?: any
  price_point_id?: number
  price_point_type?: any
  updated_at?: string
  value?: string
}

export interface FeatureCatalogItemLoadMatch {
  component_id?: number
  id: number
  product_id?: number
}

export interface FeatureCatalogItemCreateData {
  component_id?: number
  id: number
  product_id?: number
  archived_at?: string
  created_at?: string
  feature: Record<string, any>
  feature_key?: string
  feature_kind?: any
  feature_name?: string
  feature_template_id?: number
  periodicity_interval?: number
  periodicity_unit?: any
  price_point_id?: number
  price_point_type?: any
  updated_at?: string
  value?: string

  // Selects a custom action instead of the plain create:
  //   'restore.json' | 'restore.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FeatureCatalogItemUpdateData {
  component_id?: number
  id: number
  product_id?: number
  archived_at?: string
  created_at?: string
  feature?: Record<string, any>
  feature_key?: string
  feature_kind?: any
  feature_name?: string
  feature_template_id?: number
  periodicity_interval?: number
  periodicity_unit?: any
  price_point_id?: number
  price_point_type?: any
  updated_at?: string
  value?: string
}

export interface FeatureTemplate {
  archived_at?: string
  created_at?: string
  default_periodicity_interval?: number
  default_periodicity_unit?: any
  default_value?: string
  description?: string
  feature: any
  id?: number
  key?: string
  kind?: any
  name?: string
  plans_count?: number
  products_count?: number
  unit?: string
  updated_at?: string
  value_type?: any
}

export interface FeatureTemplateLoadMatch {
  id: number
}

export interface FeatureTemplateCreateData {
  id: number
  archived_at?: string
  created_at?: string
  default_periodicity_interval?: number
  default_periodicity_unit?: any
  default_value?: string
  description?: string
  feature: any
  key?: string
  kind?: any
  name?: string
  plans_count?: number
  products_count?: number
  unit?: string
  updated_at?: string
  value_type?: any

  // Selects a custom action instead of the plain create:
  //   'restore.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FeatureTemplateUpdateData {
  id: number
  archived_at?: string
  created_at?: string
  default_periodicity_interval?: number
  default_periodicity_unit?: any
  default_value?: string
  description?: string
  feature?: any
  key?: string
  kind?: any
  name?: string
  plans_count?: number
  products_count?: number
  unit?: string
  updated_at?: string
  value_type?: any
}

export interface FeatureTemplateRemoveMatch {
  id: number
  remove_from_catalog?: boolean
}

export interface Insight {
  mrr: Record<string, any>
  seller_name?: string
  site_currency?: string
  site_id?: number
  site_name?: string
  stats?: Record<string, any>
}

export interface InsightLoadMatch {
  direction?: any
  page?: number
  per_page?: number
  subscription_id?: number
}

export interface Invoice {
  applications?: any[]
  applied_amount?: string
  applied_date?: string
  avatax_details?: Record<string, any>
  billing_address?: any
  branding_theme_id?: number
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credit_notes: any[]
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  debit_amount?: string
  debits?: any[]
  discount_amount?: string
  discounts?: any[]
  display_settings?: Record<string, any>
  due_amount?: string
  due_date?: string
  group_primary_subscription_id?: number
  id?: number
  invoice?: Record<string, any>
  invoices: any[]
  issue_date?: string
  line_items?: any[]
  memo?: string
  net_terms?: number
  number?: string
  origin_invoices?: any[]
  paid_amount?: string
  paid_date?: string
  paid_invoices?: any[]
  parent_invoice_id?: number
  parent_invoice_number?: number
  parent_invoice_uid?: string
  payer?: Record<string, any>
  payment_instructions?: string
  payments?: any[]
  prepayment?: string
  previous_balance_data?: Record<string, any>
  product_family_name?: string
  product_name?: string
  public_url?: string
  public_url_expires_on?: string
  recipient_emails?: any[]
  refund_amount?: string
  refunds?: any[]
  remaining_amount?: string
  role?: string
  seller?: any
  sequence_number?: number
  shipping_address?: any
  site_id?: number
  status?: any
  subscription_group_id?: number
  subscription_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  transaction_time?: string
  uid?: string
  updated_at?: string
  void: Record<string, any>
}

export interface InvoiceListMatch {
  uid: string

  // Selects a custom action instead of the plain list:
  //   'event' | 'row' | 'segment' | 'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InvoiceCreateData {
  subscription_id: number
  applications?: any[]
  applied_amount?: string
  applied_date?: string
  avatax_details?: Record<string, any>
  billing_address?: any
  branding_theme_id?: number
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credit_notes: any[]
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  debit_amount?: string
  debits?: any[]
  discount_amount?: string
  discounts?: any[]
  display_settings?: Record<string, any>
  due_amount?: string
  due_date?: string
  group_primary_subscription_id?: number
  id?: number
  invoice?: Record<string, any>
  invoices: any[]
  issue_date?: string
  line_items?: any[]
  memo?: string
  net_terms?: number
  number?: string
  origin_invoices?: any[]
  paid_amount?: string
  paid_date?: string
  paid_invoices?: any[]
  parent_invoice_id?: number
  parent_invoice_number?: number
  parent_invoice_uid?: string
  payer?: Record<string, any>
  payment_instructions?: string
  payments?: any[]
  prepayment?: string
  previous_balance_data?: Record<string, any>
  product_family_name?: string
  product_name?: string
  public_url?: string
  public_url_expires_on?: string
  recipient_emails?: any[]
  refund_amount?: string
  refunds?: any[]
  remaining_amount?: string
  role?: string
  seller?: any
  sequence_number?: number
  shipping_address?: any
  site_id?: number
  status?: any
  subscription_group_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  transaction_time?: string
  uid?: string
  updated_at?: string
  void: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'customer_information_preview' | 'delivery' | 'issue' | 'payment' | 'payment' | 'refund' | 'reopen' | 'void'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InvoiceUpdateData {
  subscription_id: number
  uid: string
  applications?: any[]
  applied_amount?: string
  applied_date?: string
  avatax_details?: Record<string, any>
  billing_address?: any
  branding_theme_id?: number
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credit_notes?: any[]
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  debit_amount?: string
  debits?: any[]
  discount_amount?: string
  discounts?: any[]
  display_settings?: Record<string, any>
  due_amount?: string
  due_date?: string
  group_primary_subscription_id?: number
  id?: number
  invoice?: Record<string, any>
  invoices?: any[]
  issue_date?: string
  line_items?: any[]
  memo?: string
  net_terms?: number
  number?: string
  origin_invoices?: any[]
  paid_amount?: string
  paid_date?: string
  paid_invoices?: any[]
  parent_invoice_id?: number
  parent_invoice_number?: number
  parent_invoice_uid?: string
  payer?: Record<string, any>
  payment_instructions?: string
  payments?: any[]
  prepayment?: string
  previous_balance_data?: Record<string, any>
  product_family_name?: string
  product_name?: string
  public_url?: string
  public_url_expires_on?: string
  recipient_emails?: any[]
  refund_amount?: string
  refunds?: any[]
  remaining_amount?: string
  role?: string
  seller?: any
  sequence_number?: number
  shipping_address?: any
  site_id?: number
  status?: any
  subscription_group_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  transaction_time?: string
  updated_at?: string
  void?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'customer_information' | 'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InvoiceRemoveMatch {
  subscription_id: number
  uid: string

  // Selects a custom action instead of the plain remove:
  //   'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ListProformaInvoice {
  available_actions?: Record<string, any>
  billing_address?: Record<string, any>
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  delivery_date?: string
  discount_amount?: string
  discounts?: any[]
  due_amount?: string
  line_items?: any[]
  memo?: string
  number?: number
  paid_amount?: string
  payment_instructions?: string
  payments?: any[]
  product_family_name?: string
  product_name?: string
  public_url?: string
  refund_amount?: string
  role?: any
  seller?: any
  sequence_number?: number
  shipping_address?: Record<string, any>
  site_id?: number
  status?: string
  subscription_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  uid?: string
}

export interface ListProformaInvoiceListMatch {
  subscription_id: number
  credit?: boolean
  custom_field?: boolean
  direction?: any
  discount?: boolean
  end_date?: string
  line_item?: boolean
  page?: number
  payment?: boolean
  per_page?: number
  start_date?: string
  status?: any
  taxis?: boolean
}

export interface ListSaleRepItem {
  full_name?: string
  id?: number
  mrr_data?: Record<string, any>
  subscriptions_count?: number
  test_mode?: boolean
}

export interface ListSaleRepItemListMatch {
  seller_id: string
  live_mode?: boolean
  page?: number
  per_page?: number
}

export interface ListSegment {
  component_id?: number
  created_at?: string
  event_based_billing_metric_id?: number
  id?: number
  price_point_id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  segments?: any[]
  updated_at?: string
}

export interface ListSegmentListMatch {
  component_id: string
  price_point_id: string
  filter?: any
  page?: number
  per_page?: number
}

export interface ListSegmentCreateData {
  component_id: string
  price_point_id: string
  created_at?: string
  event_based_billing_metric_id?: number
  id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  segments?: any[]
  updated_at?: string
}

export interface ListSegmentUpdateData {
  component_id: string
  price_point_id: string
  created_at?: string
  event_based_billing_metric_id?: number
  id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  segments?: any[]
  updated_at?: string
}

export interface Offer {
  archived_at?: string
  created_at?: string
  description?: string
  handle?: string
  id?: number
  name?: string
  offer?: Record<string, any>
  offer_discounts?: any[]
  offer_items?: any[]
  offer_signup_pages?: any[]
  offers?: any[]
  product_family_id?: number
  product_family_name?: string
  product_id?: number
  product_name?: string
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_name?: string
  product_revisable_number?: number
  site_id?: number
  updated_at?: string
}

export interface OfferLoadMatch {
  offer_id: number

  // Selects a custom action instead of the plain load:
  //   'offer_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OfferListMatch {
  include_archived?: boolean
  page?: number
  per_page?: number
}

export interface OfferCreateData {
  archived_at?: string
  created_at?: string
  description?: string
  handle?: string
  id?: number
  name?: string
  offer?: Record<string, any>
  offer_discounts?: any[]
  offer_items?: any[]
  offer_signup_pages?: any[]
  offers?: any[]
  product_family_id?: number
  product_family_name?: string
  product_id?: number
  product_name?: string
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_name?: string
  product_revisable_number?: number
  site_id?: number
  updated_at?: string
}

export interface OfferUpdateData {
  id: number
  archived_at?: string
  created_at?: string
  description?: string
  handle?: string
  name?: string
  offer?: Record<string, any>
  offer_discounts?: any[]
  offer_items?: any[]
  offer_signup_pages?: any[]
  offers?: any[]
  product_family_id?: number
  product_family_name?: string
  product_id?: number
  product_name?: string
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_name?: string
  product_revisable_number?: number
  site_id?: number
  updated_at?: string

  // Selects a custom action instead of the plain update:
  //   'archive' | 'unarchive'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OneTimeToken {
}

export interface OneTimeTokenLoadMatch {
  chargify_token: string

  // Selects a custom action instead of the plain load:
  //   'chargify_token'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PaymentProfile {
  id?: string
  payment_profile?: Record<string, any>
}

export interface PaymentProfileLoadMatch {
  payment_profile_id: number

  // Selects a custom action instead of the plain load:
  //   'payment_profile_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PaymentProfileListMatch {
  customer_id?: number
  page?: number
  per_page?: number
}

export interface PaymentProfileCreateData {
  id?: string
  payment_profile?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'change_payment_profile' | 'change_payment_profile'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PaymentProfileUpdateData {
  bank_account_id: number
  id?: string
  payment_profile?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'payment_profile_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface PaymentProfileRemoveMatch {
  payment_profile_id: number
  subscription_group_id?: string
  subscription_id?: number

  // Selects a custom action instead of the plain remove:
  //   'payment_profile_id' | 'payment_profile_id' | 'payment_profile_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Prepayment {
  id?: string
}

export interface PrepaymentCreateData {
  id: number
  subscription_id: number

  // Selects a custom action instead of the plain create:
  //   'refund'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Product {
  product: Record<string, any>
}

export interface ProductLoadMatch {
  api_handle: string

  // Selects a custom action instead of the plain load:
  //   'product_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductListMatch {
  date_field?: any
  end_date?: string
  end_datetime?: string
  filter?: any
  include?: any
  include_archived?: boolean
  include_feature?: boolean
  page?: number
  per_page?: number
  start_date?: string
  start_datetime?: string
}

export interface ProductCreateData {
  product_family_id: string
  product: Record<string, any>
}

export interface ProductUpdateData {
  product_id: number
  product?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'product_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductRemoveMatch {
  product_id: number

  // Selects a custom action instead of the plain remove:
  //   'product_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductFamily {
  id?: string
  product_family?: Record<string, any>
}

export interface ProductFamilyLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductFamilyListMatch {
  date_field?: any
  end_date?: string
  end_datetime?: string
  start_date?: string
  start_datetime?: string
}

export interface ProductFamilyCreateData {
  id?: string
  product_family?: Record<string, any>
}

export interface ProductFeature {
  id?: string
}

export interface ProductFeatureRemoveMatch {
  id: number
  product_id: number
  destroy_entitlement?: boolean
}

export interface ProductPricePoint {
  id?: string
  price_point: Record<string, any>
  price_points?: any[]
  product: Record<string, any>
}

export interface ProductPricePointLoadMatch {
  price_point_id: string
  product_id: string
  currency_price?: boolean
}

export interface ProductPricePointListMatch {
  direction?: any
  filter?: any
  include?: any
  page?: number
  per_page?: number
}

export interface ProductPricePointCreateData {
  id: string
  price_point: Record<string, any>
  price_points?: any[]
  product: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'currency_price'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductPricePointUpdateData {
  price_point_id: string
  product_id: string
  id?: string
  price_point?: Record<string, any>
  price_points?: any[]
  product?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'currency_price'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProductPricePointRemoveMatch {
  price_point_id: string
  product_id: string
}

export interface ProformaInvoice {
  available_actions?: Record<string, any>
  billing_address?: Record<string, any>
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  delivery_date?: string
  discount_amount?: string
  discounts?: any[]
  due_amount?: string
  id?: string
  line_items?: any[]
  memo?: string
  number?: number
  paid_amount?: string
  payment_instructions?: string
  payments?: any[]
  product_family_name?: string
  product_name?: string
  public_url?: string
  refund_amount?: string
  role?: any
  seller?: any
  sequence_number?: number
  shipping_address?: Record<string, any>
  site_id?: number
  status?: string
  subscription_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  uid?: string
}

export interface ProformaInvoiceListMatch {
  proforma_invoice_uid: string

  // Selects a custom action instead of the plain list:
  //   'proforma_invoice_uid' | 'row'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ProformaInvoiceCreateData {
  available_actions?: Record<string, any>
  billing_address?: Record<string, any>
  collection_method?: any
  consolidation_level?: any
  created_at?: string
  credit_amount?: string
  credits?: any[]
  currency?: string
  custom_fields?: any[]
  customer?: any
  customer_id?: number
  delivery_date?: string
  discount_amount?: string
  discounts?: any[]
  due_amount?: string
  id?: string
  line_items?: any[]
  memo?: string
  number?: number
  paid_amount?: string
  payment_instructions?: string
  payments?: any[]
  product_family_name?: string
  product_name?: string
  public_url?: string
  refund_amount?: string
  role?: any
  seller?: any
  sequence_number?: number
  shipping_address?: Record<string, any>
  site_id?: number
  status?: string
  subscription_id?: number
  subtotal_amount?: string
  tax_amount?: string
  taxes?: any[]
  total_amount?: string
  uid?: string

  // Selects a custom action instead of the plain create:
  //   'delivery' | 'preview' | 'void'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReasonCode {
  code?: string
  created_at?: string
  description?: string
  id?: number
  position?: number
  reason_code: Record<string, any>
  site_id?: number
  updated_at?: string
}

export interface ReasonCodeLoadMatch {
  reason_code_id: number

  // Selects a custom action instead of the plain load:
  //   'reason_code_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReasonCodeListMatch {
  page?: number
  per_page?: number
}

export interface ReasonCodeCreateData {
  code?: string
  created_at?: string
  description?: string
  id?: number
  position?: number
  reason_code: Record<string, any>
  site_id?: number
  updated_at?: string
}

export interface ReasonCodeUpdateData {
  reason_code_id: number
  code?: string
  created_at?: string
  description?: string
  id?: number
  position?: number
  reason_code?: Record<string, any>
  site_id?: number
  updated_at?: string

  // Selects a custom action instead of the plain update:
  //   'reason_code_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReasonCodeRemoveMatch {
  reason_code_id: number

  // Selects a custom action instead of the plain remove:
  //   'reason_code_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ReferralCode {
}

export interface ReferralCodeLoadMatch {
  code: string

  // Selects a custom action instead of the plain load:
  //   'validate'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SaleRepSetting {
  customer_name?: string
  sales_rep_id?: number
  sales_rep_name?: string
  site_link?: string
  site_name?: string
  subscription_id?: number
  subscription_mrr?: string
}

export interface SaleRepSettingListMatch {
  seller_id: string
  live_mode?: boolean
  page?: number
  per_page?: number
}

export interface SalesCommission {
  full_name?: string
  id?: number
  subscriptions?: any[]
  subscriptions_count?: number
  test_mode?: boolean
}

export interface SalesCommissionListMatch {
  sales_rep_id: string
  seller_id: string
  live_mode?: boolean
  page?: number
  per_page?: number
}

export interface Segment {
  component_id?: number
  created_at?: string
  event_based_billing_metric_id?: number
  id?: number
  price_point_id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  updated_at?: string
}

export interface SegmentCreateData {
  component_id: string
  price_point_id: string
  created_at?: string
  event_based_billing_metric_id?: number
  id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  updated_at?: string
}

export interface SegmentUpdateData {
  component_id: string
  id: number
  price_point_id: string
  created_at?: string
  event_based_billing_metric_id?: number
  prices?: any[]
  pricing_scheme?: any
  segment_property_1_value?: any
  segment_property_2_value?: any
  segment_property_3_value?: any
  segment_property_4_value?: any
  updated_at?: string

  // Selects a custom action instead of the plain update:
  //   'id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SignupProformaPreview {
}

export interface SignupProformaPreviewCreateData {
  include?: any
}

export interface Site {
  chargify_js_keys?: any[]
  meta?: Record<string, any>
  site: Record<string, any>
}

export interface SiteLoadMatch {
  chargify_js_keys?: any[]
  meta?: Record<string, any>
  site?: Record<string, any>
}

export interface SiteListMatch {
  page?: number
  per_page?: number
}

export interface SiteCreateData {
  cleanup_scope?: any
  chargify_js_keys?: any[]
  meta?: Record<string, any>
  site: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'clear_data'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Subscription {
  activated_at?: string
  automatically_resume_at?: string
  balance_in_cents?: number
  bank_account: Record<string, any>
  cancel_at_end_of_period?: boolean
  canceled_at?: string
  cancellation_message?: string
  cancellation_method?: any
  coupon_code?: string
  coupon_codes?: any[]
  coupon_use_count?: number
  coupon_uses_allowed?: number
  coupons?: any[]
  created_at?: string
  credit_balance_in_cents?: number
  credit_card?: any
  currency?: string
  current_billing_amount_in_cents?: number
  current_period_ends_at?: string
  current_period_started_at?: string
  customer?: Record<string, any>
  delayed_cancel_at?: string
  dunning_communication_delay_enabled?: boolean
  dunning_communication_delay_time_zone?: string
  expires_at?: string
  group?: any
  id?: number
  locale?: string
  net_terms?: number
  next_assessment_at?: string
  next_product_handle?: string
  next_product_id?: number
  next_product_price_point_id?: number
  offer_id?: number
  on_hold_at?: string
  payer_id?: number
  payment_collection_method?: any
  payment_type?: string
  prepaid_configuration?: any
  prepaid_dunning?: boolean
  prepayment_balance_in_cents?: number
  previous_state?: any
  product?: Record<string, any>
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_type?: any
  product_version_number?: number
  reason_code?: string
  receives_invoice_emails?: boolean
  reference?: string
  referral_code?: string
  scheduled_cancellation_at?: string
  self_service_page_token?: string
  signup_payment_id?: number
  signup_revenue?: string
  snap_day?: string
  state?: any
  stored_credential_transaction_id?: number
  subscription?: Record<string, any>
  total_revenue_in_cents?: number
  trial_ended_at?: string
  trial_started_at?: string
  updated_at?: string
}

export interface SubscriptionLoadMatch {
  subscription_id: number
  include?: any[]

  // Selects a custom action instead of the plain load:
  //   'lookup' | 'subscription_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionListMatch {
  branding_theme_id?: number
  collection_method?: any
  coupon?: number
  coupon_code?: string
  currency?: string
  customer_id?: number
  date_field?: any
  direction?: any
  dunning_exemption?: boolean
  end_date?: string
  end_datetime?: string
  group_status?: any
  include?: any[]
  metadata?: Record<string, any>
  page?: number
  payment_gateway?: string
  per_page?: number
  product?: any
  product_price_point_id?: number
  q?: string
  q_scope?: any
  sort?: any
  start_date?: string
  start_datetime?: string
  state?: any

  // Selects a custom action instead of the plain list:
  //   'row'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionCreateData {
  activated_at?: string
  automatically_resume_at?: string
  balance_in_cents?: number
  bank_account: Record<string, any>
  cancel_at_end_of_period?: boolean
  canceled_at?: string
  cancellation_message?: string
  cancellation_method?: any
  coupon_code?: string
  coupon_codes?: any[]
  coupon_use_count?: number
  coupon_uses_allowed?: number
  coupons?: any[]
  created_at?: string
  credit_balance_in_cents?: number
  credit_card?: any
  currency?: string
  current_billing_amount_in_cents?: number
  current_period_ends_at?: string
  current_period_started_at?: string
  customer?: Record<string, any>
  delayed_cancel_at?: string
  dunning_communication_delay_enabled?: boolean
  dunning_communication_delay_time_zone?: string
  expires_at?: string
  group?: any
  id?: number
  locale?: string
  net_terms?: number
  next_assessment_at?: string
  next_product_handle?: string
  next_product_id?: number
  next_product_price_point_id?: number
  offer_id?: number
  on_hold_at?: string
  payer_id?: number
  payment_collection_method?: any
  payment_type?: string
  prepaid_configuration?: any
  prepaid_dunning?: boolean
  prepayment_balance_in_cents?: number
  previous_state?: any
  product?: Record<string, any>
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_type?: any
  product_version_number?: number
  reason_code?: string
  receives_invoice_emails?: boolean
  reference?: string
  referral_code?: string
  scheduled_cancellation_at?: string
  self_service_page_token?: string
  signup_payment_id?: number
  signup_revenue?: string
  snap_day?: string
  state?: any
  stored_credential_transaction_id?: number
  subscription?: Record<string, any>
  total_revenue_in_cents?: number
  trial_ended_at?: string
  trial_started_at?: string
  updated_at?: string

  // Selects a custom action instead of the plain create:
  //   'add_coupon' | 'cancel_dunning' | 'prepaid_configuration' | 'preview' | 'purge'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionUpdateData {
  subscription_id: number
  activated_at?: string
  automatically_resume_at?: string
  balance_in_cents?: number
  bank_account?: Record<string, any>
  cancel_at_end_of_period?: boolean
  canceled_at?: string
  cancellation_message?: string
  cancellation_method?: any
  coupon_code?: string
  coupon_codes?: any[]
  coupon_use_count?: number
  coupon_uses_allowed?: number
  coupons?: any[]
  created_at?: string
  credit_balance_in_cents?: number
  credit_card?: any
  currency?: string
  current_billing_amount_in_cents?: number
  current_period_ends_at?: string
  current_period_started_at?: string
  customer?: Record<string, any>
  delayed_cancel_at?: string
  dunning_communication_delay_enabled?: boolean
  dunning_communication_delay_time_zone?: string
  expires_at?: string
  group?: any
  id?: number
  locale?: string
  net_terms?: number
  next_assessment_at?: string
  next_product_handle?: string
  next_product_id?: number
  next_product_price_point_id?: number
  offer_id?: number
  on_hold_at?: string
  payer_id?: number
  payment_collection_method?: any
  payment_type?: string
  prepaid_configuration?: any
  prepaid_dunning?: boolean
  prepayment_balance_in_cents?: number
  previous_state?: any
  product?: Record<string, any>
  product_price_in_cents?: number
  product_price_point_id?: number
  product_price_point_type?: any
  product_version_number?: number
  reason_code?: string
  receives_invoice_emails?: boolean
  reference?: string
  referral_code?: string
  scheduled_cancellation_at?: string
  self_service_page_token?: string
  signup_payment_id?: number
  signup_revenue?: string
  snap_day?: string
  state?: any
  stored_credential_transaction_id?: number
  subscription?: Record<string, any>
  total_revenue_in_cents?: number
  trial_ended_at?: string
  trial_started_at?: string
  updated_at?: string

  // Selects a custom action instead of the plain update:
  //   'activate' | 'override' | 'subscription_id'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionRemoveMatch {
  id: number
  coupon_code?: string

  // Selects a custom action instead of the plain remove:
  //   'remove_coupon'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionComponent {
  allocated_quantity?: any
  allocation?: Record<string, any>
  allocation_preview?: Record<string, any>
  allow_fractional_quantities?: boolean
  archived_at?: string
  component?: Record<string, any>
  component_handle?: string
  component_id?: number
  created_at?: string
  currency?: string
  description?: string
  display_on_hosted_page?: boolean
  downgrade_credit?: any
  enabled?: boolean
  historic_usages?: any[]
  id?: number
  interval?: number
  interval_unit?: any
  kind?: any
  name?: string
  price_point_handle?: string
  price_point_id?: number
  price_point_name?: string
  price_point_type?: any
  pricing_scheme?: any
  product_family_handle?: string
  product_family_id?: number
  recurring?: boolean
  subscription?: Record<string, any>
  subscription_id?: number
  unit_balance?: any
  unit_name?: string
  updated_at?: string
  upgrade_charge?: any
  usage?: Record<string, any>
  use_site_exchange_rate?: boolean
}

export interface SubscriptionComponentLoadMatch {
  component_id: number
  subscription_id: number
}

export interface SubscriptionComponentListMatch {
  date_field?: any
  direction?: any
  end_date?: string
  end_datetime?: string
  filter?: any
  include?: any
  page?: number
  per_page?: number
  price_point_id?: string
  product_family_id?: any[]
  sort?: any
  start_date?: string
  start_datetime?: string
  subscription_id?: any[]
}

export interface SubscriptionComponentCreateData {
  api_handle: string
  store_uid?: string
  allocated_quantity?: any
  allocation?: Record<string, any>
  allocation_preview?: Record<string, any>
  allow_fractional_quantities?: boolean
  archived_at?: string
  component?: Record<string, any>
  component_handle?: string
  component_id?: number
  created_at?: string
  currency?: string
  description?: string
  display_on_hosted_page?: boolean
  downgrade_credit?: any
  enabled?: boolean
  historic_usages?: any[]
  id?: number
  interval?: number
  interval_unit?: any
  kind?: any
  name?: string
  price_point_handle?: string
  price_point_id?: number
  price_point_name?: string
  price_point_type?: any
  pricing_scheme?: any
  product_family_handle?: string
  product_family_id?: number
  recurring?: boolean
  subscription?: Record<string, any>
  subscription_id?: number
  unit_balance?: any
  unit_name?: string
  updated_at?: string
  upgrade_charge?: any
  usage?: Record<string, any>
  use_site_exchange_rate?: boolean

  // Selects a custom action instead of the plain create:
  //   'price_points.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionComponentUpdateData {
  allocation_id: number
  component_id: number
  subscription_id: number
  allocated_quantity?: any
  allocation?: Record<string, any>
  allocation_preview?: Record<string, any>
  allow_fractional_quantities?: boolean
  archived_at?: string
  component?: Record<string, any>
  component_handle?: string
  created_at?: string
  currency?: string
  description?: string
  display_on_hosted_page?: boolean
  downgrade_credit?: any
  enabled?: boolean
  historic_usages?: any[]
  id?: number
  interval?: number
  interval_unit?: any
  kind?: any
  name?: string
  price_point_handle?: string
  price_point_id?: number
  price_point_name?: string
  price_point_type?: any
  pricing_scheme?: any
  product_family_handle?: string
  product_family_id?: number
  recurring?: boolean
  subscription?: Record<string, any>
  unit_balance?: any
  unit_name?: string
  updated_at?: string
  upgrade_charge?: any
  usage?: Record<string, any>
  use_site_exchange_rate?: boolean
}

export interface SubscriptionComponentRemoveMatch {
  allocation_id: number
  component_id: number
  subscription_id: number
}

export interface SubscriptionGroup {
  id?: string
  meta?: Record<string, any>
  subscription_group?: Record<string, any>
  subscription_groups?: any[]
}

export interface SubscriptionGroupListMatch {
  include?: any[]
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'lookup' | 'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupCreateData {
  id?: string
  meta?: Record<string, any>
  subscription_group?: Record<string, any>
  subscription_groups?: any[]
}

export interface SubscriptionGroupUpdateData {
  uid: string
  id?: string
  meta?: Record<string, any>
  subscription_group?: Record<string, any>
  subscription_groups?: any[]

  // Selects a custom action instead of the plain update:
  //   'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupRemoveMatch {
  id: number

  // Selects a custom action instead of the plain remove:
  //   'uid'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupInvoiceAccount {
  id?: string
}

export interface SubscriptionGroupInvoiceAccountListMatch {
  id: string
  filter?: any
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'prepayments.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupInvoiceAccountCreateData {
  id: string

  // Selects a custom action instead of the plain create:
  //   'prepayments.json' | 'service_credit_deductions.json' | 'service_credits.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupSignup {
}

export interface SubscriptionGroupSignupCreateData {
}

export interface SubscriptionGroupStatus {
  id?: string
}

export interface SubscriptionGroupStatusCreateData {
  id: string

  // Selects a custom action instead of the plain create:
  //   'cancel.json' | 'delayed_cancel.json' | 'reactivate.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionGroupStatusRemoveMatch {
  id: string

  // Selects a custom action instead of the plain remove:
  //   'delayed_cancel.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionInvoiceAccount {
  id?: string
  service_credits?: any[]
}

export interface SubscriptionInvoiceAccountListMatch {
  subscription_id: number
  direction?: any
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'prepayments.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionInvoiceAccountCreateData {
  id: number
  service_credits?: any[]

  // Selects a custom action instead of the plain create:
  //   'prepayments.json' | 'service_credit_deductions.json' | 'service_credits.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionMrr {
  breakouts: Record<string, any>
  mrr_amount_in_cents: number
  subscription_id: number
}

export interface SubscriptionMrrListMatch {
  at_time?: string
  direction?: any
  filter?: any
  page?: number
  per_page?: number
}

export interface SubscriptionNote {
  body?: string
  created_at?: string
  id?: number
  note: Record<string, any>
  sticky?: boolean
  subscription_id?: number
  updated_at?: string
}

export interface SubscriptionNoteLoadMatch {
  note_id: number
  subscription_id: number
}

export interface SubscriptionNoteListMatch {
  id: number
  page?: number
  per_page?: number
}

export interface SubscriptionNoteCreateData {
  id: number
  body?: string
  created_at?: string
  note: Record<string, any>
  sticky?: boolean
  subscription_id?: number
  updated_at?: string
}

export interface SubscriptionNoteUpdateData {
  note_id: number
  subscription_id: number
  body?: string
  created_at?: string
  id?: number
  note?: Record<string, any>
  sticky?: boolean
  updated_at?: string
}

export interface SubscriptionNoteRemoveMatch {
  note_id: number
  subscription_id: number
}

export interface SubscriptionProduct {
  id?: string
  migration: Record<string, any>
}

export interface SubscriptionProductCreateData {
  subscription_id: number
  id?: string
  migration: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'migrations.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionRenewal {
  id?: string
  scheduled_renewal_configuration?: Record<string, any>
  scheduled_renewal_configuration_item?: Record<string, any>
}

export interface SubscriptionRenewalLoadMatch {
  id: number
  subscription_id: number
}

export interface SubscriptionRenewalListMatch {
  id: number
  status?: any

  // Selects a custom action instead of the plain list:
  //   'scheduled_renewals.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionRenewalCreateData {
  scheduled_renewal_id: number
  subscription_id: number
  id?: string
  scheduled_renewal_configuration?: Record<string, any>
  scheduled_renewal_configuration_item?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'scheduled_renewals.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionRenewalUpdateData {
  id?: number
  scheduled_renewal_id?: number
  subscription_id: number
  scheduled_renewal_configuration?: Record<string, any>
  scheduled_renewal_configuration_item?: Record<string, any>
}

export interface SubscriptionRenewalRemoveMatch {
  id: number
  scheduled_renewal_id: number
  subscription_id: number
}

export interface SubscriptionStatus {
  id?: string
  renewal_preview?: Record<string, any>
}

export interface SubscriptionStatusCreateData {
  subscription_id: number
  id?: string
  renewal_preview?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'hold.json' | 'resume.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionStatusUpdateData {
  id: number
  renewal_preview?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'hold.json' | 'reactivate.json' | 'retry.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionStatusRemoveMatch {
  subscription_id: number

  // Selects a custom action instead of the plain remove:
  //   'delayed_cancel.json'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Usage {
  usage: Record<string, any>
}

export interface UsageListMatch {
  component_id: string
  subscription_id_or_reference: any
  max_id?: number
  page?: number
  per_page?: number
  since_date?: string
  since_id?: number
  until_date?: string
}

export interface Webhook {
  endpoint?: Record<string, any>
  webhook?: Record<string, any>
}

export interface WebhookListMatch {
  order?: any
  page?: number
  per_page?: number
  since_date?: string
  status?: any
  subscription?: number
  until_date?: string
}

export interface WebhookCreateData {
  endpoint?: Record<string, any>
  webhook?: Record<string, any>

  // Selects a custom action instead of the plain create:
  //   'replay'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WebhookUpdateData {
  endpoint?: Record<string, any>
  webhook?: Record<string, any>

  // Selects a custom action instead of the plain update:
  //   'setting'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

