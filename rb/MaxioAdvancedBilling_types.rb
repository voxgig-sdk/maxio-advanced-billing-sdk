# frozen_string_literal: true

# Typed models for the MaxioAdvancedBilling SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AccountBalance entity data model.
#
# @!attribute [rw] open_invoices
#   @return [Object, nil]
#
# @!attribute [rw] pending_discounts
#   @return [Object, nil]
#
# @!attribute [rw] pending_invoices
#   @return [Object, nil]
#
# @!attribute [rw] prepayments
#   @return [Object, nil]
#
# @!attribute [rw] service_credits
#   @return [Object, nil]
AccountBalance = Struct.new(
  :open_invoices,
  :pending_discounts,
  :pending_invoices,
  :prepayments,
  :service_credits,
  keyword_init: true
)

# Request payload for AccountBalance#load.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
AccountBalanceLoadMatch = Struct.new(
  :subscription_id,
  keyword_init: true
)

# Allocation entity data model.
#
# @!attribute [rw] allocation
#   @return [Hash, nil]
Allocation = Struct.new(
  :allocation,
  keyword_init: true
)

# Request payload for Allocation#list.
#
# @!attribute [rw] component_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] page
#   @return [Integer, nil]
AllocationListMatch = Struct.new(
  :component_id,
  :subscription_id,
  :page,
  keyword_init: true
)

# Request payload for Allocation#create.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] allocation
#   @return [Hash, nil]
AllocationCreateData = Struct.new(
  :subscription_id,
  :allocation,
  keyword_init: true
)

# BatchJob entity data model.
#
# @!attribute [rw] completed
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] row_count
#   @return [Integer, nil]
BatchJob = Struct.new(
  :completed,
  :created_at,
  :finished_at,
  :id,
  :row_count,
  keyword_init: true
)

# Request payload for BatchJob#load.
#
# @!attribute [rw] batch_id
#   @return [String]
BatchJobLoadMatch = Struct.new(
  :batch_id,
  keyword_init: true
)

# Request payload for BatchJob#create.
#
# @!attribute [rw] completed
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] row_count
#   @return [Integer, nil]
BatchJobCreateData = Struct.new(
  :completed,
  :created_at,
  :finished_at,
  :id,
  :row_count,
  keyword_init: true
)

# BillingPortal entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fetch_count
#   @return [Integer, nil]
#
# @!attribute [rw] last_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] last_invite_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] last_invite_sent_at
#   @return [String, nil]
#
# @!attribute [rw] last_sent_at
#   @return [String, nil]
#
# @!attribute [rw] new_link_available_at
#   @return [String, nil]
#
# @!attribute [rw] send_invite_link_text
#   @return [String, nil]
#
# @!attribute [rw] uninvited_count
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
BillingPortal = Struct.new(
  :created_at,
  :expires_at,
  :fetch_count,
  :last_accepted_at,
  :last_invite_accepted_at,
  :last_invite_sent_at,
  :last_sent_at,
  :new_link_available_at,
  :send_invite_link_text,
  :uninvited_count,
  :url,
  keyword_init: true
)

# Request payload for BillingPortal#load.
#
# @!attribute [rw] customer_id
#   @return [Integer]
BillingPortalLoadMatch = Struct.new(
  :customer_id,
  keyword_init: true
)

# Request payload for BillingPortal#create.
#
# @!attribute [rw] customer_id
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] fetch_count
#   @return [Integer, nil]
#
# @!attribute [rw] last_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] last_invite_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] last_invite_sent_at
#   @return [String, nil]
#
# @!attribute [rw] last_sent_at
#   @return [String, nil]
#
# @!attribute [rw] new_link_available_at
#   @return [String, nil]
#
# @!attribute [rw] send_invite_link_text
#   @return [String, nil]
#
# @!attribute [rw] uninvited_count
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
BillingPortalCreateData = Struct.new(
  :customer_id,
  :created_at,
  :expires_at,
  :fetch_count,
  :last_accepted_at,
  :last_invite_accepted_at,
  :last_invite_sent_at,
  :last_sent_at,
  :new_link_available_at,
  :send_invite_link_text,
  :uninvited_count,
  :url,
  keyword_init: true
)

# Request payload for BillingPortal#remove.
#
# @!attribute [rw] customer_id
#   @return [Integer]
BillingPortalRemoveMatch = Struct.new(
  :customer_id,
  keyword_init: true
)

# Component entity data model.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
Component = Struct.new(
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :component,
  :created_at,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :id,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :price_per_unit_in_cents,
  :price_point_count,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :product_family_name,
  :recurring,
  :tax_code,
  :taxable,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Component#load.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] product_family_id
#   @return [Integer]
#
# @!attribute [rw] include_feature
#   @return [Boolean, nil]
ComponentLoadMatch = Struct.new(
  :component_id,
  :product_family_id,
  :include_feature,
  keyword_init: true
)

# Request payload for Component#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
ComponentListMatch = Struct.new(
  :date_field,
  :end_date,
  :end_datetime,
  :filter,
  :include_archived,
  :page,
  :per_page,
  :start_date,
  :start_datetime,
  keyword_init: true
)

# Request payload for Component#create.
#
# @!attribute [rw] product_family_id
#   @return [String]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentCreateData = Struct.new(
  :product_family_id,
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :component,
  :created_at,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :id,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :price_per_unit_in_cents,
  :price_point_count,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_name,
  :recurring,
  :tax_code,
  :taxable,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Component#update.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentUpdateData = Struct.new(
  :component_id,
  :product_family_id,
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :component,
  :created_at,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :id,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :price_per_unit_in_cents,
  :price_point_count,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_name,
  :recurring,
  :tax_code,
  :taxable,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Component#remove.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] product_family_id
#   @return [Integer]
ComponentRemoveMatch = Struct.new(
  :component_id,
  :product_family_id,
  keyword_init: true
)

# ComponentFeature entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ComponentFeature = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ComponentFeature#remove.
#
# @!attribute [rw] component_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] destroy_entitlement
#   @return [Boolean, nil]
ComponentFeatureRemoveMatch = Struct.new(
  :component_id,
  :id,
  :destroy_entitlement,
  keyword_init: true
)

# ComponentPricePoint entity data model.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] overage_pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] renew_prepaid_allocation
#   @return [Boolean, nil]
#
# @!attribute [rw] rollover_prepaid_remainder
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentPricePoint = Struct.new(
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :component_id,
  :created_at,
  :currency_prices,
  :default,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :id,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :overage_pricing_scheme,
  :price_per_unit_in_cents,
  :price_point,
  :price_point_count,
  :price_points,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :product_family_name,
  :recurring,
  :renew_prepaid_allocation,
  :rollover_prepaid_remainder,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :type,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for ComponentPricePoint#list.
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ComponentPricePointListMatch = Struct.new(
  :direction,
  :filter,
  :include,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for ComponentPricePoint#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] overage_pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] renew_prepaid_allocation
#   @return [Boolean, nil]
#
# @!attribute [rw] rollover_prepaid_remainder
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentPricePointCreateData = Struct.new(
  :id,
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :component_id,
  :created_at,
  :currency_prices,
  :default,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :overage_pricing_scheme,
  :price_per_unit_in_cents,
  :price_point,
  :price_point_count,
  :price_points,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :product_family_name,
  :recurring,
  :renew_prepaid_allocation,
  :rollover_prepaid_remainder,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :type,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for ComponentPricePoint#update.
#
# @!attribute [rw] component_id
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] default_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] hide_date_range_on_invoice
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] overage_pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] price_per_unit_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_point_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] price_points_url
#   @return [String, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] renew_prepaid_allocation
#   @return [Boolean, nil]
#
# @!attribute [rw] rollover_prepaid_remainder
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] unit_price
#   @return [String, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentPricePointUpdateData = Struct.new(
  :component_id,
  :price_point_id,
  :accounting_code,
  :allow_fractional_quantities,
  :archived,
  :archived_at,
  :created_at,
  :currency_prices,
  :default,
  :default_price_point_id,
  :default_price_point_name,
  :description,
  :downgrade_credit,
  :event_based_billing_metric_id,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :hide_date_range_on_invoice,
  :id,
  :interval,
  :interval_unit,
  :item_category,
  :kind,
  :name,
  :overage_prices,
  :overage_pricing_scheme,
  :price_per_unit_in_cents,
  :price_point,
  :price_point_count,
  :price_points,
  :price_points_url,
  :prices,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :product_family_name,
  :recurring,
  :renew_prepaid_allocation,
  :rollover_prepaid_remainder,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :type,
  :unit_name,
  :unit_price,
  :unspsc_code,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for ComponentPricePoint#remove.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
ComponentPricePointRemoveMatch = Struct.new(
  :component_id,
  :price_point_id,
  keyword_init: true
)

# ComponentPricePointCurrencyOverage entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_prices
#   @return [Array, nil]
#
# @!attribute [rw] overage_pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] renew_prepaid_allocation
#   @return [Boolean, nil]
#
# @!attribute [rw] rollover_prepaid_remainder
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
ComponentPricePointCurrencyOverage = Struct.new(
  :archived_at,
  :component_id,
  :created_at,
  :currency_overage_prices,
  :currency_prices,
  :default,
  :expiration_interval,
  :expiration_interval_unit,
  :handle,
  :id,
  :interval,
  :interval_unit,
  :name,
  :overage_prices,
  :overage_pricing_scheme,
  :prices,
  :pricing_scheme,
  :renew_prepaid_allocation,
  :rollover_prepaid_remainder,
  :subscription_id,
  :tax_included,
  :type,
  :updated_at,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for ComponentPricePointCurrencyOverage#load.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] currency_price
#   @return [Boolean, nil]
ComponentPricePointCurrencyOverageLoadMatch = Struct.new(
  :component_id,
  :price_point_id,
  :currency_price,
  keyword_init: true
)

# Coupon entity data model.
#
# @!attribute [rw] allow_negative_balance
#   @return [Boolean, nil]
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] apply_on_cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] apply_on_subscription_expiration
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] compounding_strategy
#   @return [Object, nil]
#
# @!attribute [rw] conversion_limit
#   @return [String, nil]
#
# @!attribute [rw] coupon
#   @return [Hash, nil]
#
# @!attribute [rw] coupon_restrictions
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discount_type
#   @return [String, nil]
#
# @!attribute [rw] duration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] duration_interval_span
#   @return [String, nil]
#
# @!attribute [rw] duration_interval_unit
#   @return [String, nil]
#
# @!attribute [rw] duration_period_count
#   @return [Integer, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] exclude_mid_period_allocations
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] percentage
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] recurring_scheme
#   @return [String, nil]
#
# @!attribute [rw] stackable
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
Coupon = Struct.new(
  :allow_negative_balance,
  :amount,
  :amount_in_cents,
  :apply_on_cancel_at_end_of_period,
  :apply_on_subscription_expiration,
  :archived_at,
  :code,
  :compounding_strategy,
  :conversion_limit,
  :coupon,
  :coupon_restrictions,
  :created_at,
  :currency_prices,
  :description,
  :discount_type,
  :duration_interval,
  :duration_interval_span,
  :duration_interval_unit,
  :duration_period_count,
  :end_date,
  :exclude_mid_period_allocations,
  :id,
  :name,
  :percentage,
  :product_family_id,
  :product_family_name,
  :recurring,
  :recurring_scheme,
  :stackable,
  :start_date,
  :updated_at,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Coupon#load.
#
# @!attribute [rw] coupon_id
#   @return [Integer]
#
# @!attribute [rw] product_family_id
#   @return [Integer]
#
# @!attribute [rw] currency_price
#   @return [Boolean, nil]
CouponLoadMatch = Struct.new(
  :coupon_id,
  :product_family_id,
  :currency_price,
  keyword_init: true
)

# Request payload for Coupon#list.
#
# @!attribute [rw] currency_price
#   @return [Boolean, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
CouponListMatch = Struct.new(
  :currency_price,
  :filter,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Coupon#create.
#
# @!attribute [rw] product_family_id
#   @return [Integer]
#
# @!attribute [rw] allow_negative_balance
#   @return [Boolean, nil]
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] apply_on_cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] apply_on_subscription_expiration
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] compounding_strategy
#   @return [Object, nil]
#
# @!attribute [rw] conversion_limit
#   @return [String, nil]
#
# @!attribute [rw] coupon
#   @return [Hash, nil]
#
# @!attribute [rw] coupon_restrictions
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discount_type
#   @return [String, nil]
#
# @!attribute [rw] duration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] duration_interval_span
#   @return [String, nil]
#
# @!attribute [rw] duration_interval_unit
#   @return [String, nil]
#
# @!attribute [rw] duration_period_count
#   @return [Integer, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] exclude_mid_period_allocations
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] percentage
#   @return [String, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] recurring_scheme
#   @return [String, nil]
#
# @!attribute [rw] stackable
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
CouponCreateData = Struct.new(
  :product_family_id,
  :allow_negative_balance,
  :amount,
  :amount_in_cents,
  :apply_on_cancel_at_end_of_period,
  :apply_on_subscription_expiration,
  :archived_at,
  :code,
  :compounding_strategy,
  :conversion_limit,
  :coupon,
  :coupon_restrictions,
  :created_at,
  :currency_prices,
  :description,
  :discount_type,
  :duration_interval,
  :duration_interval_span,
  :duration_interval_unit,
  :duration_period_count,
  :end_date,
  :exclude_mid_period_allocations,
  :id,
  :name,
  :percentage,
  :product_family_name,
  :recurring,
  :recurring_scheme,
  :stackable,
  :start_date,
  :updated_at,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Coupon#update.
#
# @!attribute [rw] coupon_id
#   @return [Integer]
#
# @!attribute [rw] product_family_id
#   @return [Integer]
#
# @!attribute [rw] allow_negative_balance
#   @return [Boolean, nil]
#
# @!attribute [rw] amount
#   @return [Float, nil]
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] apply_on_cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] apply_on_subscription_expiration
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] compounding_strategy
#   @return [Object, nil]
#
# @!attribute [rw] conversion_limit
#   @return [String, nil]
#
# @!attribute [rw] coupon
#   @return [Hash, nil]
#
# @!attribute [rw] coupon_restrictions
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] discount_type
#   @return [String, nil]
#
# @!attribute [rw] duration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] duration_interval_span
#   @return [String, nil]
#
# @!attribute [rw] duration_interval_unit
#   @return [String, nil]
#
# @!attribute [rw] duration_period_count
#   @return [Integer, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] exclude_mid_period_allocations
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] percentage
#   @return [String, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] recurring_scheme
#   @return [String, nil]
#
# @!attribute [rw] stackable
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
CouponUpdateData = Struct.new(
  :coupon_id,
  :product_family_id,
  :allow_negative_balance,
  :amount,
  :amount_in_cents,
  :apply_on_cancel_at_end_of_period,
  :apply_on_subscription_expiration,
  :archived_at,
  :code,
  :compounding_strategy,
  :conversion_limit,
  :coupon,
  :coupon_restrictions,
  :created_at,
  :currency_prices,
  :description,
  :discount_type,
  :duration_interval,
  :duration_interval_span,
  :duration_interval_unit,
  :duration_period_count,
  :end_date,
  :exclude_mid_period_allocations,
  :id,
  :name,
  :percentage,
  :product_family_name,
  :recurring,
  :recurring_scheme,
  :stackable,
  :start_date,
  :updated_at,
  :use_site_exchange_rate,
  keyword_init: true
)

# Request payload for Coupon#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] subcode
#   @return [String]
CouponRemoveMatch = Struct.new(
  :id,
  :subcode,
  keyword_init: true
)

# CouponCurrency entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
CouponCurrency = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CouponCurrency#update.
#
# @!attribute [rw] id
#   @return [Integer]
CouponCurrencyUpdateData = Struct.new(
  :id,
  keyword_init: true
)

# CouponSubcode entity data model.
#
# @!attribute [rw] created_codes
#   @return [Array, nil]
#
# @!attribute [rw] duplicate_codes
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] invalid_codes
#   @return [Array, nil]
CouponSubcode = Struct.new(
  :created_codes,
  :duplicate_codes,
  :id,
  :invalid_codes,
  keyword_init: true
)

# Request payload for CouponSubcode#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] created_codes
#   @return [Array, nil]
#
# @!attribute [rw] duplicate_codes
#   @return [Array, nil]
#
# @!attribute [rw] invalid_codes
#   @return [Array, nil]
CouponSubcodeUpdateData = Struct.new(
  :id,
  :created_codes,
  :duplicate_codes,
  :invalid_codes,
  keyword_init: true
)

# CouponUsage entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] revenue
#   @return [Integer, nil]
#
# @!attribute [rw] revenue_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] savings
#   @return [Integer, nil]
#
# @!attribute [rw] savings_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] signups
#   @return [Integer, nil]
CouponUsage = Struct.new(
  :id,
  :name,
  :revenue,
  :revenue_in_cents,
  :savings,
  :savings_in_cents,
  :signups,
  keyword_init: true
)

# Request payload for CouponUsage#list.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] product_family_id
#   @return [Integer]
CouponUsageListMatch = Struct.new(
  :id,
  :product_family_id,
  keyword_init: true
)

# CustomField entity data model.
#
# @!attribute [rw] data_count
#   @return [Integer, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] enum
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] input_type
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] metafield_id
#   @return [Integer, nil]
#
# @!attribute [rw] metafields
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] scope
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CustomField = Struct.new(
  :data_count,
  :deleted_at,
  :enum,
  :id,
  :input_type,
  :metadata,
  :metafield_id,
  :metafields,
  :name,
  :resource_id,
  :scope,
  :value,
  keyword_init: true
)

# Request payload for CustomField#list.
#
# @!attribute [rw] resource_type
#   @return [Object]
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] resource_id
#   @return [Array, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
#
# @!attribute [rw] with_deleted
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
CustomFieldListMatch = Struct.new(
  :resource_type,
  :date_field,
  :direction,
  :end_date,
  :end_datetime,
  :page,
  :per_page,
  :resource_id,
  :start_date,
  :start_datetime,
  :with_deleted,
  :name,
  keyword_init: true
)

# Request payload for CustomField#create.
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [Object]
#
# @!attribute [rw] data_count
#   @return [Integer, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] enum
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] input_type
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] metafield_id
#   @return [Integer, nil]
#
# @!attribute [rw] metafields
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CustomFieldCreateData = Struct.new(
  :resource_id,
  :resource_type,
  :data_count,
  :deleted_at,
  :enum,
  :id,
  :input_type,
  :metadata,
  :metafield_id,
  :metafields,
  :name,
  :scope,
  :value,
  keyword_init: true
)

# Request payload for CustomField#update.
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [Object]
#
# @!attribute [rw] data_count
#   @return [Integer, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] enum
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] input_type
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] metafield_id
#   @return [Integer, nil]
#
# @!attribute [rw] metafields
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CustomFieldUpdateData = Struct.new(
  :resource_id,
  :resource_type,
  :data_count,
  :deleted_at,
  :enum,
  :id,
  :input_type,
  :metadata,
  :metafield_id,
  :metafields,
  :name,
  :scope,
  :value,
  keyword_init: true
)

# Request payload for CustomField#remove.
#
# @!attribute [rw] resource_id
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [Object]
#
# @!attribute [rw] name
#   @return [String, nil]
CustomFieldRemoveMatch = Struct.new(
  :resource_id,
  :resource_type,
  :name,
  keyword_init: true
)

# Customer entity data model.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address_2
#   @return [String, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] cc_emails
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash]
#
# @!attribute [rw] default_auto_renewal_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_subscription_group_uid
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] entity_identifier_kind
#   @return [Object, nil]
#
# @!attribute [rw] entity_identifier_value
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] maxioid
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] portal_customer_created_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_sent_at
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] salesforce_id
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] state_name
#   @return [String, nil]
#
# @!attribute [rw] surcharging
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt_reason
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vat_country
#   @return [String, nil]
#
# @!attribute [rw] vat_number
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
Customer = Struct.new(
  :address,
  :address_2,
  :branding_theme_id,
  :cc_emails,
  :city,
  :country,
  :country_name,
  :created_at,
  :customer,
  :default_auto_renewal_profile_id,
  :default_subscription_group_uid,
  :email,
  :entity_identifier_kind,
  :entity_identifier_value,
  :first_name,
  :id,
  :last_name,
  :locale,
  :maxioid,
  :organization,
  :parent_id,
  :phone,
  :portal_customer_created_at,
  :portal_invite_last_accepted_at,
  :portal_invite_last_sent_at,
  :reference,
  :salesforce_id,
  :state,
  :state_name,
  :surcharging,
  :tax_exempt,
  :tax_exempt_reason,
  :updated_at,
  :vat_country,
  :vat_number,
  :verified,
  :zip,
  keyword_init: true
)

# Request payload for Customer#load.
#
# @!attribute [rw] id
#   @return [Integer]
CustomerLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Customer#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
CustomerListMatch = Struct.new(
  :date_field,
  :direction,
  :end_date,
  :end_datetime,
  :page,
  :per_page,
  :q,
  :start_date,
  :start_datetime,
  keyword_init: true
)

# Request payload for Customer#create.
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address_2
#   @return [String, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] cc_emails
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash]
#
# @!attribute [rw] default_auto_renewal_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_subscription_group_uid
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] entity_identifier_kind
#   @return [Object, nil]
#
# @!attribute [rw] entity_identifier_value
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] maxioid
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] portal_customer_created_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_sent_at
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] salesforce_id
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] state_name
#   @return [String, nil]
#
# @!attribute [rw] surcharging
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt_reason
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vat_country
#   @return [String, nil]
#
# @!attribute [rw] vat_number
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
CustomerCreateData = Struct.new(
  :address,
  :address_2,
  :branding_theme_id,
  :cc_emails,
  :city,
  :country,
  :country_name,
  :created_at,
  :customer,
  :default_auto_renewal_profile_id,
  :default_subscription_group_uid,
  :email,
  :entity_identifier_kind,
  :entity_identifier_value,
  :first_name,
  :id,
  :last_name,
  :locale,
  :maxioid,
  :organization,
  :parent_id,
  :phone,
  :portal_customer_created_at,
  :portal_invite_last_accepted_at,
  :portal_invite_last_sent_at,
  :reference,
  :salesforce_id,
  :state,
  :state_name,
  :surcharging,
  :tax_exempt,
  :tax_exempt_reason,
  :updated_at,
  :vat_country,
  :vat_number,
  :verified,
  :zip,
  keyword_init: true
)

# Request payload for Customer#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] address_2
#   @return [String, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] cc_emails
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_name
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] default_auto_renewal_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] default_subscription_group_uid
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] entity_identifier_kind
#   @return [Object, nil]
#
# @!attribute [rw] entity_identifier_value
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] maxioid
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [Integer, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] portal_customer_created_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] portal_invite_last_sent_at
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] salesforce_id
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] state_name
#   @return [String, nil]
#
# @!attribute [rw] surcharging
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt
#   @return [Boolean, nil]
#
# @!attribute [rw] tax_exempt_reason
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vat_country
#   @return [String, nil]
#
# @!attribute [rw] vat_number
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
CustomerUpdateData = Struct.new(
  :id,
  :address,
  :address_2,
  :branding_theme_id,
  :cc_emails,
  :city,
  :country,
  :country_name,
  :created_at,
  :customer,
  :default_auto_renewal_profile_id,
  :default_subscription_group_uid,
  :email,
  :entity_identifier_kind,
  :entity_identifier_value,
  :first_name,
  :last_name,
  :locale,
  :maxioid,
  :organization,
  :parent_id,
  :phone,
  :portal_customer_created_at,
  :portal_invite_last_accepted_at,
  :portal_invite_last_sent_at,
  :reference,
  :salesforce_id,
  :state,
  :state_name,
  :surcharging,
  :tax_exempt,
  :tax_exempt_reason,
  :updated_at,
  :vat_country,
  :vat_number,
  :verified,
  :zip,
  keyword_init: true
)

# Request payload for Customer#remove.
#
# @!attribute [rw] id
#   @return [Integer]
CustomerRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# DelayedCancel entity data model.
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [Hash]
DelayedCancel = Struct.new(
  :message,
  :subscription,
  keyword_init: true
)

# Request payload for DelayedCancel#create.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [Hash]
DelayedCancelCreateData = Struct.new(
  :subscription_id,
  :message,
  :subscription,
  keyword_init: true
)

# Endpoint entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
Endpoint = Struct.new(
  :id,
  :site_id,
  :status,
  :url,
  :webhook_subscriptions,
  keyword_init: true
)

# Request payload for Endpoint#list.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
EndpointListMatch = Struct.new(
  :id,
  :site_id,
  :status,
  :url,
  :webhook_subscriptions,
  keyword_init: true
)

# Request payload for Endpoint#update.
#
# @!attribute [rw] endpoint_id
#   @return [Integer]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
EndpointUpdateData = Struct.new(
  :endpoint_id,
  :id,
  :site_id,
  :status,
  :url,
  :webhook_subscriptions,
  keyword_init: true
)

# Entitlement entity data model.
#
# @!attribute [rw] customer_id
#   @return [Integer]
#
# @!attribute [rw] entitlements
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
Entitlement = Struct.new(
  :customer_id,
  :entitlements,
  :status,
  :subscription_id,
  keyword_init: true
)

# Request payload for Entitlement#list.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
EntitlementListMatch = Struct.new(
  :subscription_id,
  keyword_init: true
)

# Event entity data model.
#
# @!attribute [rw] event
#   @return [Hash]
Event = Struct.new(
  :event,
  keyword_init: true
)

# Request payload for Event#load.
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] max_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] since_id
#   @return [Integer, nil]
EventLoadMatch = Struct.new(
  :direction,
  :filter,
  :max_id,
  :page,
  :per_page,
  :since_id,
  keyword_init: true
)

# Request payload for Event#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Array, nil]
#
# @!attribute [rw] max_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] since_id
#   @return [Integer, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
EventListMatch = Struct.new(
  :date_field,
  :direction,
  :end_date,
  :end_datetime,
  :filter,
  :max_id,
  :page,
  :per_page,
  :since_id,
  :start_date,
  :start_datetime,
  keyword_init: true
)

# EventsBasedBillingSegment entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
EventsBasedBillingSegment = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EventsBasedBillingSegment#remove.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] price_point_id
#   @return [String]
EventsBasedBillingSegmentRemoveMatch = Struct.new(
  :component_id,
  :id,
  :price_point_id,
  keyword_init: true
)

# Feature entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] default_periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] default_value
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Hash]
#
# @!attribute [rw] feature_key
#   @return [String, nil]
#
# @!attribute [rw] feature_kind
#   @return [Object, nil]
#
# @!attribute [rw] feature_name
#   @return [String, nil]
#
# @!attribute [rw] feature_template_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] plans_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] products_count
#   @return [Integer, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] value_type
#   @return [Object, nil]
Feature = Struct.new(
  :archived_at,
  :created_at,
  :default_periodicity_interval,
  :default_periodicity_unit,
  :default_value,
  :description,
  :feature,
  :feature_key,
  :feature_kind,
  :feature_name,
  :feature_template_id,
  :id,
  :key,
  :kind,
  :name,
  :periodicity_interval,
  :periodicity_unit,
  :plans_count,
  :price_point_id,
  :price_point_type,
  :products_count,
  :unit,
  :updated_at,
  :value,
  :value_type,
  keyword_init: true
)

# Request payload for Feature#list.
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] sort_by
#   @return [Object, nil]
#
# @!attribute [rw] sort_direction
#   @return [Object, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] updated_from
#   @return [String, nil]
#
# @!attribute [rw] updated_to
#   @return [String, nil]
FeatureListMatch = Struct.new(
  :kind,
  :page,
  :per_page,
  :q,
  :sort_by,
  :sort_direction,
  :status,
  :updated_from,
  :updated_to,
  keyword_init: true
)

# Request payload for Feature#create.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] default_periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] default_value
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Hash]
#
# @!attribute [rw] feature_key
#   @return [String, nil]
#
# @!attribute [rw] feature_kind
#   @return [Object, nil]
#
# @!attribute [rw] feature_name
#   @return [String, nil]
#
# @!attribute [rw] feature_template_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] plans_count
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] products_count
#   @return [Integer, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
#
# @!attribute [rw] value_type
#   @return [Object, nil]
FeatureCreateData = Struct.new(
  :archived_at,
  :created_at,
  :default_periodicity_interval,
  :default_periodicity_unit,
  :default_value,
  :description,
  :feature,
  :feature_key,
  :feature_kind,
  :feature_name,
  :feature_template_id,
  :id,
  :key,
  :kind,
  :name,
  :periodicity_interval,
  :periodicity_unit,
  :plans_count,
  :price_point_id,
  :price_point_type,
  :products_count,
  :unit,
  :updated_at,
  :value,
  :value_type,
  keyword_init: true
)

# FeatureCatalogItem entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Hash]
#
# @!attribute [rw] feature_key
#   @return [String, nil]
#
# @!attribute [rw] feature_kind
#   @return [Object, nil]
#
# @!attribute [rw] feature_name
#   @return [String, nil]
#
# @!attribute [rw] feature_template_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
FeatureCatalogItem = Struct.new(
  :archived_at,
  :created_at,
  :feature,
  :feature_key,
  :feature_kind,
  :feature_name,
  :feature_template_id,
  :id,
  :periodicity_interval,
  :periodicity_unit,
  :price_point_id,
  :price_point_type,
  :updated_at,
  :value,
  keyword_init: true
)

# Request payload for FeatureCatalogItem#load.
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
FeatureCatalogItemLoadMatch = Struct.new(
  :component_id,
  :id,
  :product_id,
  keyword_init: true
)

# Request payload for FeatureCatalogItem#create.
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Hash]
#
# @!attribute [rw] feature_key
#   @return [String, nil]
#
# @!attribute [rw] feature_kind
#   @return [Object, nil]
#
# @!attribute [rw] feature_name
#   @return [String, nil]
#
# @!attribute [rw] feature_template_id
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
FeatureCatalogItemCreateData = Struct.new(
  :component_id,
  :id,
  :product_id,
  :archived_at,
  :created_at,
  :feature,
  :feature_key,
  :feature_kind,
  :feature_name,
  :feature_template_id,
  :periodicity_interval,
  :periodicity_unit,
  :price_point_id,
  :price_point_type,
  :updated_at,
  :value,
  keyword_init: true
)

# Request payload for FeatureCatalogItem#update.
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Hash, nil]
#
# @!attribute [rw] feature_key
#   @return [String, nil]
#
# @!attribute [rw] feature_kind
#   @return [Object, nil]
#
# @!attribute [rw] feature_name
#   @return [String, nil]
#
# @!attribute [rw] feature_template_id
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
FeatureCatalogItemUpdateData = Struct.new(
  :component_id,
  :id,
  :product_id,
  :archived_at,
  :created_at,
  :feature,
  :feature_key,
  :feature_kind,
  :feature_name,
  :feature_template_id,
  :periodicity_interval,
  :periodicity_unit,
  :price_point_id,
  :price_point_type,
  :updated_at,
  :value,
  keyword_init: true
)

# FeatureTemplate entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] default_periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] default_value
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Object]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] plans_count
#   @return [Integer, nil]
#
# @!attribute [rw] products_count
#   @return [Integer, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value_type
#   @return [Object, nil]
FeatureTemplate = Struct.new(
  :archived_at,
  :created_at,
  :default_periodicity_interval,
  :default_periodicity_unit,
  :default_value,
  :description,
  :feature,
  :id,
  :key,
  :kind,
  :name,
  :plans_count,
  :products_count,
  :unit,
  :updated_at,
  :value_type,
  keyword_init: true
)

# Request payload for FeatureTemplate#load.
#
# @!attribute [rw] id
#   @return [Integer]
FeatureTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for FeatureTemplate#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] default_periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] default_value
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Object]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] plans_count
#   @return [Integer, nil]
#
# @!attribute [rw] products_count
#   @return [Integer, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value_type
#   @return [Object, nil]
FeatureTemplateCreateData = Struct.new(
  :id,
  :archived_at,
  :created_at,
  :default_periodicity_interval,
  :default_periodicity_unit,
  :default_value,
  :description,
  :feature,
  :key,
  :kind,
  :name,
  :plans_count,
  :products_count,
  :unit,
  :updated_at,
  :value_type,
  keyword_init: true
)

# Request payload for FeatureTemplate#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_periodicity_interval
#   @return [Integer, nil]
#
# @!attribute [rw] default_periodicity_unit
#   @return [Object, nil]
#
# @!attribute [rw] default_value
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] feature
#   @return [Object, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] plans_count
#   @return [Integer, nil]
#
# @!attribute [rw] products_count
#   @return [Integer, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] value_type
#   @return [Object, nil]
FeatureTemplateUpdateData = Struct.new(
  :id,
  :archived_at,
  :created_at,
  :default_periodicity_interval,
  :default_periodicity_unit,
  :default_value,
  :description,
  :feature,
  :key,
  :kind,
  :name,
  :plans_count,
  :products_count,
  :unit,
  :updated_at,
  :value_type,
  keyword_init: true
)

# Request payload for FeatureTemplate#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] remove_from_catalog
#   @return [Boolean, nil]
FeatureTemplateRemoveMatch = Struct.new(
  :id,
  :remove_from_catalog,
  keyword_init: true
)

# Insight entity data model.
#
# @!attribute [rw] amount_formatted
#   @return [String, nil]
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] at_time
#   @return [String, nil]
#
# @!attribute [rw] breakouts
#   @return [Hash, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] currency_symbol
#   @return [String, nil]
#
# @!attribute [rw] movements
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] seller_name
#   @return [String, nil]
#
# @!attribute [rw] site_currency
#   @return [String, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] site_name
#   @return [String, nil]
#
# @!attribute [rw] stats
#   @return [Hash, nil]
#
# @!attribute [rw] total_entries
#   @return [Integer, nil]
#
# @!attribute [rw] total_pages
#   @return [Integer, nil]
Insight = Struct.new(
  :amount_formatted,
  :amount_in_cents,
  :at_time,
  :breakouts,
  :currency,
  :currency_symbol,
  :movements,
  :page,
  :per_page,
  :seller_name,
  :site_currency,
  :site_id,
  :site_name,
  :stats,
  :total_entries,
  :total_pages,
  keyword_init: true
)

# Request payload for Insight#load.
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
InsightLoadMatch = Struct.new(
  :direction,
  :page,
  :per_page,
  :subscription_id,
  keyword_init: true
)

# Invoice entity data model.
#
# @!attribute [rw] applications
#   @return [Array, nil]
#
# @!attribute [rw] applied_amount
#   @return [String, nil]
#
# @!attribute [rw] applied_date
#   @return [String, nil]
#
# @!attribute [rw] avatax_details
#   @return [Hash, nil]
#
# @!attribute [rw] billing_address
#   @return [Object, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] consolidation_level
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_amount
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] debit_amount
#   @return [String, nil]
#
# @!attribute [rw] debits
#   @return [Array, nil]
#
# @!attribute [rw] discount_amount
#   @return [String, nil]
#
# @!attribute [rw] discounts
#   @return [Array, nil]
#
# @!attribute [rw] display_settings
#   @return [Hash, nil]
#
# @!attribute [rw] due_amount
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] group_primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] issue_date
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] origin_invoices
#   @return [Array, nil]
#
# @!attribute [rw] paid_amount
#   @return [String, nil]
#
# @!attribute [rw] paid_date
#   @return [String, nil]
#
# @!attribute [rw] paid_invoices
#   @return [Array, nil]
#
# @!attribute [rw] parent_invoice_id
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_number
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_uid
#   @return [String, nil]
#
# @!attribute [rw] payer
#   @return [Hash, nil]
#
# @!attribute [rw] payment_instructions
#   @return [String, nil]
#
# @!attribute [rw] payments
#   @return [Array, nil]
#
# @!attribute [rw] prepayment
#   @return [String, nil]
#
# @!attribute [rw] previous_balance_data
#   @return [Hash, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] public_url
#   @return [String, nil]
#
# @!attribute [rw] public_url_expires_on
#   @return [String, nil]
#
# @!attribute [rw] recipient_emails
#   @return [Array, nil]
#
# @!attribute [rw] refund_amount
#   @return [String, nil]
#
# @!attribute [rw] refunds
#   @return [Array, nil]
#
# @!attribute [rw] remaining_amount
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] seller
#   @return [Object, nil]
#
# @!attribute [rw] sequence_number
#   @return [Integer, nil]
#
# @!attribute [rw] shipping_address
#   @return [Object, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] subscription_group_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_amount
#   @return [String, nil]
#
# @!attribute [rw] tax_amount
#   @return [String, nil]
#
# @!attribute [rw] taxes
#   @return [Array, nil]
#
# @!attribute [rw] total_amount
#   @return [String, nil]
#
# @!attribute [rw] transaction_time
#   @return [String, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] void
#   @return [Hash]
Invoice = Struct.new(
  :applications,
  :applied_amount,
  :applied_date,
  :avatax_details,
  :billing_address,
  :branding_theme_id,
  :collection_method,
  :consolidation_level,
  :created_at,
  :credit_amount,
  :credits,
  :currency,
  :custom_fields,
  :customer,
  :customer_id,
  :debit_amount,
  :debits,
  :discount_amount,
  :discounts,
  :display_settings,
  :due_amount,
  :due_date,
  :group_primary_subscription_id,
  :id,
  :issue_date,
  :line_items,
  :memo,
  :net_terms,
  :number,
  :origin_invoices,
  :paid_amount,
  :paid_date,
  :paid_invoices,
  :parent_invoice_id,
  :parent_invoice_number,
  :parent_invoice_uid,
  :payer,
  :payment_instructions,
  :payments,
  :prepayment,
  :previous_balance_data,
  :product_family_name,
  :product_name,
  :public_url,
  :public_url_expires_on,
  :recipient_emails,
  :refund_amount,
  :refunds,
  :remaining_amount,
  :role,
  :seller,
  :sequence_number,
  :shipping_address,
  :site_id,
  :status,
  :subscription_group_id,
  :subscription_id,
  :subtotal_amount,
  :tax_amount,
  :taxes,
  :total_amount,
  :transaction_time,
  :uid,
  :updated_at,
  :void,
  keyword_init: true
)

# Request payload for Invoice#list.
#
# @!attribute [rw] uid
#   @return [String]
InvoiceListMatch = Struct.new(
  :uid,
  keyword_init: true
)

# Request payload for Invoice#create.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] applications
#   @return [Array, nil]
#
# @!attribute [rw] applied_amount
#   @return [String, nil]
#
# @!attribute [rw] applied_date
#   @return [String, nil]
#
# @!attribute [rw] avatax_details
#   @return [Hash, nil]
#
# @!attribute [rw] billing_address
#   @return [Object, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] consolidation_level
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_amount
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] debit_amount
#   @return [String, nil]
#
# @!attribute [rw] debits
#   @return [Array, nil]
#
# @!attribute [rw] discount_amount
#   @return [String, nil]
#
# @!attribute [rw] discounts
#   @return [Array, nil]
#
# @!attribute [rw] display_settings
#   @return [Hash, nil]
#
# @!attribute [rw] due_amount
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] group_primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] issue_date
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] origin_invoices
#   @return [Array, nil]
#
# @!attribute [rw] paid_amount
#   @return [String, nil]
#
# @!attribute [rw] paid_date
#   @return [String, nil]
#
# @!attribute [rw] paid_invoices
#   @return [Array, nil]
#
# @!attribute [rw] parent_invoice_id
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_number
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_uid
#   @return [String, nil]
#
# @!attribute [rw] payer
#   @return [Hash, nil]
#
# @!attribute [rw] payment_instructions
#   @return [String, nil]
#
# @!attribute [rw] payments
#   @return [Array, nil]
#
# @!attribute [rw] prepayment
#   @return [String, nil]
#
# @!attribute [rw] previous_balance_data
#   @return [Hash, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] public_url
#   @return [String, nil]
#
# @!attribute [rw] public_url_expires_on
#   @return [String, nil]
#
# @!attribute [rw] recipient_emails
#   @return [Array, nil]
#
# @!attribute [rw] refund_amount
#   @return [String, nil]
#
# @!attribute [rw] refunds
#   @return [Array, nil]
#
# @!attribute [rw] remaining_amount
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] seller
#   @return [Object, nil]
#
# @!attribute [rw] sequence_number
#   @return [Integer, nil]
#
# @!attribute [rw] shipping_address
#   @return [Object, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] subscription_group_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_amount
#   @return [String, nil]
#
# @!attribute [rw] tax_amount
#   @return [String, nil]
#
# @!attribute [rw] taxes
#   @return [Array, nil]
#
# @!attribute [rw] total_amount
#   @return [String, nil]
#
# @!attribute [rw] transaction_time
#   @return [String, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] void
#   @return [Hash]
InvoiceCreateData = Struct.new(
  :subscription_id,
  :applications,
  :applied_amount,
  :applied_date,
  :avatax_details,
  :billing_address,
  :branding_theme_id,
  :collection_method,
  :consolidation_level,
  :created_at,
  :credit_amount,
  :credits,
  :currency,
  :custom_fields,
  :customer,
  :customer_id,
  :debit_amount,
  :debits,
  :discount_amount,
  :discounts,
  :display_settings,
  :due_amount,
  :due_date,
  :group_primary_subscription_id,
  :id,
  :issue_date,
  :line_items,
  :memo,
  :net_terms,
  :number,
  :origin_invoices,
  :paid_amount,
  :paid_date,
  :paid_invoices,
  :parent_invoice_id,
  :parent_invoice_number,
  :parent_invoice_uid,
  :payer,
  :payment_instructions,
  :payments,
  :prepayment,
  :previous_balance_data,
  :product_family_name,
  :product_name,
  :public_url,
  :public_url_expires_on,
  :recipient_emails,
  :refund_amount,
  :refunds,
  :remaining_amount,
  :role,
  :seller,
  :sequence_number,
  :shipping_address,
  :site_id,
  :status,
  :subscription_group_id,
  :subtotal_amount,
  :tax_amount,
  :taxes,
  :total_amount,
  :transaction_time,
  :uid,
  :updated_at,
  :void,
  keyword_init: true
)

# Request payload for Invoice#update.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] uid
#   @return [String]
#
# @!attribute [rw] applications
#   @return [Array, nil]
#
# @!attribute [rw] applied_amount
#   @return [String, nil]
#
# @!attribute [rw] applied_date
#   @return [String, nil]
#
# @!attribute [rw] avatax_details
#   @return [Hash, nil]
#
# @!attribute [rw] billing_address
#   @return [Object, nil]
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] consolidation_level
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_amount
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] debit_amount
#   @return [String, nil]
#
# @!attribute [rw] debits
#   @return [Array, nil]
#
# @!attribute [rw] discount_amount
#   @return [String, nil]
#
# @!attribute [rw] discounts
#   @return [Array, nil]
#
# @!attribute [rw] display_settings
#   @return [Hash, nil]
#
# @!attribute [rw] due_amount
#   @return [String, nil]
#
# @!attribute [rw] due_date
#   @return [String, nil]
#
# @!attribute [rw] group_primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] issue_date
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] number
#   @return [String, nil]
#
# @!attribute [rw] origin_invoices
#   @return [Array, nil]
#
# @!attribute [rw] paid_amount
#   @return [String, nil]
#
# @!attribute [rw] paid_date
#   @return [String, nil]
#
# @!attribute [rw] paid_invoices
#   @return [Array, nil]
#
# @!attribute [rw] parent_invoice_id
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_number
#   @return [Integer, nil]
#
# @!attribute [rw] parent_invoice_uid
#   @return [String, nil]
#
# @!attribute [rw] payer
#   @return [Hash, nil]
#
# @!attribute [rw] payment_instructions
#   @return [String, nil]
#
# @!attribute [rw] payments
#   @return [Array, nil]
#
# @!attribute [rw] prepayment
#   @return [String, nil]
#
# @!attribute [rw] previous_balance_data
#   @return [Hash, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] public_url
#   @return [String, nil]
#
# @!attribute [rw] public_url_expires_on
#   @return [String, nil]
#
# @!attribute [rw] recipient_emails
#   @return [Array, nil]
#
# @!attribute [rw] refund_amount
#   @return [String, nil]
#
# @!attribute [rw] refunds
#   @return [Array, nil]
#
# @!attribute [rw] remaining_amount
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] seller
#   @return [Object, nil]
#
# @!attribute [rw] sequence_number
#   @return [Integer, nil]
#
# @!attribute [rw] shipping_address
#   @return [Object, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] subscription_group_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_amount
#   @return [String, nil]
#
# @!attribute [rw] tax_amount
#   @return [String, nil]
#
# @!attribute [rw] taxes
#   @return [Array, nil]
#
# @!attribute [rw] total_amount
#   @return [String, nil]
#
# @!attribute [rw] transaction_time
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] void
#   @return [Hash, nil]
InvoiceUpdateData = Struct.new(
  :subscription_id,
  :uid,
  :applications,
  :applied_amount,
  :applied_date,
  :avatax_details,
  :billing_address,
  :branding_theme_id,
  :collection_method,
  :consolidation_level,
  :created_at,
  :credit_amount,
  :credits,
  :currency,
  :custom_fields,
  :customer,
  :customer_id,
  :debit_amount,
  :debits,
  :discount_amount,
  :discounts,
  :display_settings,
  :due_amount,
  :due_date,
  :group_primary_subscription_id,
  :id,
  :issue_date,
  :line_items,
  :memo,
  :net_terms,
  :number,
  :origin_invoices,
  :paid_amount,
  :paid_date,
  :paid_invoices,
  :parent_invoice_id,
  :parent_invoice_number,
  :parent_invoice_uid,
  :payer,
  :payment_instructions,
  :payments,
  :prepayment,
  :previous_balance_data,
  :product_family_name,
  :product_name,
  :public_url,
  :public_url_expires_on,
  :recipient_emails,
  :refund_amount,
  :refunds,
  :remaining_amount,
  :role,
  :seller,
  :sequence_number,
  :shipping_address,
  :site_id,
  :status,
  :subscription_group_id,
  :subtotal_amount,
  :tax_amount,
  :taxes,
  :total_amount,
  :transaction_time,
  :updated_at,
  :void,
  keyword_init: true
)

# Request payload for Invoice#remove.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] uid
#   @return [String]
InvoiceRemoveMatch = Struct.new(
  :subscription_id,
  :uid,
  keyword_init: true
)

# ListSaleRepItem entity data model.
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] mrr_data
#   @return [Hash, nil]
#
# @!attribute [rw] subscriptions_count
#   @return [Integer, nil]
#
# @!attribute [rw] test_mode
#   @return [Boolean, nil]
ListSaleRepItem = Struct.new(
  :full_name,
  :id,
  :mrr_data,
  :subscriptions_count,
  :test_mode,
  keyword_init: true
)

# Request payload for ListSaleRepItem#list.
#
# @!attribute [rw] seller_id
#   @return [String]
#
# @!attribute [rw] live_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ListSaleRepItemListMatch = Struct.new(
  :seller_id,
  :live_mode,
  :page,
  :per_page,
  keyword_init: true
)

# ListSegment entity data model.
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] segments
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ListSegment = Struct.new(
  :component_id,
  :created_at,
  :event_based_billing_metric_id,
  :id,
  :price_point_id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :segments,
  :updated_at,
  keyword_init: true
)

# Request payload for ListSegment#list.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ListSegmentListMatch = Struct.new(
  :component_id,
  :price_point_id,
  :filter,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for ListSegment#create.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] segments
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ListSegmentCreateData = Struct.new(
  :component_id,
  :price_point_id,
  :created_at,
  :event_based_billing_metric_id,
  :id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :segments,
  :updated_at,
  keyword_init: true
)

# Request payload for ListSegment#update.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] segments
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ListSegmentUpdateData = Struct.new(
  :component_id,
  :price_point_id,
  :created_at,
  :event_based_billing_metric_id,
  :id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :segments,
  :updated_at,
  keyword_init: true
)

# Offer entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offer
#   @return [Hash, nil]
#
# @!attribute [rw] offer_discounts
#   @return [Array, nil]
#
# @!attribute [rw] offer_items
#   @return [Array, nil]
#
# @!attribute [rw] offer_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] product_revisable_number
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
Offer = Struct.new(
  :archived_at,
  :created_at,
  :description,
  :handle,
  :id,
  :name,
  :offer,
  :offer_discounts,
  :offer_items,
  :offer_signup_pages,
  :product_family_id,
  :product_family_name,
  :product_id,
  :product_name,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_name,
  :product_revisable_number,
  :site_id,
  :updated_at,
  keyword_init: true
)

# Request payload for Offer#load.
#
# @!attribute [rw] offer_id
#   @return [Integer]
OfferLoadMatch = Struct.new(
  :offer_id,
  keyword_init: true
)

# Request payload for Offer#list.
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
OfferListMatch = Struct.new(
  :include_archived,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Offer#create.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offer
#   @return [Hash, nil]
#
# @!attribute [rw] offer_discounts
#   @return [Array, nil]
#
# @!attribute [rw] offer_items
#   @return [Array, nil]
#
# @!attribute [rw] offer_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] product_revisable_number
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OfferCreateData = Struct.new(
  :archived_at,
  :created_at,
  :description,
  :handle,
  :id,
  :name,
  :offer,
  :offer_discounts,
  :offer_items,
  :offer_signup_pages,
  :product_family_id,
  :product_family_name,
  :product_id,
  :product_name,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_name,
  :product_revisable_number,
  :site_id,
  :updated_at,
  keyword_init: true
)

# Request payload for Offer#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] offer
#   @return [Hash, nil]
#
# @!attribute [rw] offer_discounts
#   @return [Array, nil]
#
# @!attribute [rw] offer_items
#   @return [Array, nil]
#
# @!attribute [rw] offer_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] product_revisable_number
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OfferUpdateData = Struct.new(
  :id,
  :archived_at,
  :created_at,
  :description,
  :handle,
  :name,
  :offer,
  :offer_discounts,
  :offer_items,
  :offer_signup_pages,
  :product_family_id,
  :product_family_name,
  :product_id,
  :product_name,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_name,
  :product_revisable_number,
  :site_id,
  :updated_at,
  keyword_init: true
)

# OneTimeToken entity data model.
class OneTimeToken
end

# Request payload for OneTimeToken#load.
#
# @!attribute [rw] chargify_token
#   @return [String]
OneTimeTokenLoadMatch = Struct.new(
  :chargify_token,
  keyword_init: true
)

# PaymentProfile entity data model.
#
# @!attribute [rw] bank_account_holder_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_account_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] billing_address
#   @return [String, nil]
#
# @!attribute [rw] billing_address_2
#   @return [String, nil]
#
# @!attribute [rw] billing_city
#   @return [String, nil]
#
# @!attribute [rw] billing_country
#   @return [String, nil]
#
# @!attribute [rw] billing_state
#   @return [String, nil]
#
# @!attribute [rw] billing_zip
#   @return [String, nil]
#
# @!attribute [rw] card_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_vault
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] customer_vault_token
#   @return [String, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration_month
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_year
#   @return [Integer, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] gateway_handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_account_number
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] masked_card_number
#   @return [String, nil]
#
# @!attribute [rw] payment_profile
#   @return [Object]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] site_gateway_setting_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vault_token
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
PaymentProfile = Struct.new(
  :bank_account_holder_type,
  :bank_account_type,
  :bank_name,
  :billing_address,
  :billing_address_2,
  :billing_city,
  :billing_country,
  :billing_state,
  :billing_zip,
  :card_type,
  :created_at,
  :current_vault,
  :customer_id,
  :customer_vault_token,
  :disabled,
  :expiration_month,
  :expiration_year,
  :first_name,
  :gateway_handle,
  :id,
  :last_name,
  :masked_bank_account_number,
  :masked_bank_routing_number,
  :masked_card_number,
  :payment_profile,
  :payment_type,
  :site_gateway_setting_id,
  :updated_at,
  :vault_token,
  :verified,
  keyword_init: true
)

# Request payload for PaymentProfile#load.
#
# @!attribute [rw] payment_profile_id
#   @return [Integer]
PaymentProfileLoadMatch = Struct.new(
  :payment_profile_id,
  keyword_init: true
)

# Request payload for PaymentProfile#list.
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
PaymentProfileListMatch = Struct.new(
  :customer_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for PaymentProfile#create.
#
# @!attribute [rw] bank_account_holder_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_account_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] billing_address
#   @return [String, nil]
#
# @!attribute [rw] billing_address_2
#   @return [String, nil]
#
# @!attribute [rw] billing_city
#   @return [String, nil]
#
# @!attribute [rw] billing_country
#   @return [String, nil]
#
# @!attribute [rw] billing_state
#   @return [String, nil]
#
# @!attribute [rw] billing_zip
#   @return [String, nil]
#
# @!attribute [rw] card_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_vault
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] customer_vault_token
#   @return [String, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration_month
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_year
#   @return [Integer, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] gateway_handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_account_number
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] masked_card_number
#   @return [String, nil]
#
# @!attribute [rw] payment_profile
#   @return [Object]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] site_gateway_setting_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vault_token
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
PaymentProfileCreateData = Struct.new(
  :bank_account_holder_type,
  :bank_account_type,
  :bank_name,
  :billing_address,
  :billing_address_2,
  :billing_city,
  :billing_country,
  :billing_state,
  :billing_zip,
  :card_type,
  :created_at,
  :current_vault,
  :customer_id,
  :customer_vault_token,
  :disabled,
  :expiration_month,
  :expiration_year,
  :first_name,
  :gateway_handle,
  :id,
  :last_name,
  :masked_bank_account_number,
  :masked_bank_routing_number,
  :masked_card_number,
  :payment_profile,
  :payment_type,
  :site_gateway_setting_id,
  :updated_at,
  :vault_token,
  :verified,
  keyword_init: true
)

# Request payload for PaymentProfile#update.
#
# @!attribute [rw] bank_account_id
#   @return [Integer]
#
# @!attribute [rw] bank_account_holder_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_account_type
#   @return [Object, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] billing_address
#   @return [String, nil]
#
# @!attribute [rw] billing_address_2
#   @return [String, nil]
#
# @!attribute [rw] billing_city
#   @return [String, nil]
#
# @!attribute [rw] billing_country
#   @return [String, nil]
#
# @!attribute [rw] billing_state
#   @return [String, nil]
#
# @!attribute [rw] billing_zip
#   @return [String, nil]
#
# @!attribute [rw] card_type
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] current_vault
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] customer_vault_token
#   @return [String, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] expiration_month
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_year
#   @return [Integer, nil]
#
# @!attribute [rw] first_name
#   @return [String, nil]
#
# @!attribute [rw] gateway_handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] last_name
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_account_number
#   @return [String, nil]
#
# @!attribute [rw] masked_bank_routing_number
#   @return [String, nil]
#
# @!attribute [rw] masked_card_number
#   @return [String, nil]
#
# @!attribute [rw] payment_profile
#   @return [Object, nil]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] site_gateway_setting_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] vault_token
#   @return [String, nil]
#
# @!attribute [rw] verified
#   @return [Boolean, nil]
PaymentProfileUpdateData = Struct.new(
  :bank_account_id,
  :bank_account_holder_type,
  :bank_account_type,
  :bank_name,
  :billing_address,
  :billing_address_2,
  :billing_city,
  :billing_country,
  :billing_state,
  :billing_zip,
  :card_type,
  :created_at,
  :current_vault,
  :customer_id,
  :customer_vault_token,
  :disabled,
  :expiration_month,
  :expiration_year,
  :first_name,
  :gateway_handle,
  :id,
  :last_name,
  :masked_bank_account_number,
  :masked_bank_routing_number,
  :masked_card_number,
  :payment_profile,
  :payment_type,
  :site_gateway_setting_id,
  :updated_at,
  :vault_token,
  :verified,
  keyword_init: true
)

# Request payload for PaymentProfile#remove.
#
# @!attribute [rw] payment_profile_id
#   @return [Integer]
#
# @!attribute [rw] subscription_group_id
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
PaymentProfileRemoveMatch = Struct.new(
  :payment_profile_id,
  :subscription_group_id,
  :subscription_id,
  keyword_init: true
)

# Prepayment entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Prepayment = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Prepayment#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
PrepaymentCreateData = Struct.new(
  :id,
  :subscription_id,
  keyword_init: true
)

# Product entity data model.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
Product = Struct.new(
  :accounting_code,
  :archived_at,
  :created_at,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :id,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :item_category,
  :name,
  :price_in_cents,
  :product,
  :product_family,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :tax_code,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for Product#load.
#
# @!attribute [rw] api_handle
#   @return [String]
ProductLoadMatch = Struct.new(
  :api_handle,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] include_archived
#   @return [Boolean, nil]
#
# @!attribute [rw] include_feature
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
ProductListMatch = Struct.new(
  :date_field,
  :end_date,
  :end_datetime,
  :filter,
  :include,
  :include_archived,
  :include_feature,
  :page,
  :per_page,
  :start_date,
  :start_datetime,
  keyword_init: true
)

# Request payload for Product#create.
#
# @!attribute [rw] product_family_id
#   @return [String]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
ProductCreateData = Struct.new(
  :product_family_id,
  :accounting_code,
  :archived_at,
  :created_at,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :id,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :item_category,
  :name,
  :price_in_cents,
  :product,
  :product_family,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :tax_code,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for Product#update.
#
# @!attribute [rw] product_id
#   @return [Integer]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
ProductUpdateData = Struct.new(
  :product_id,
  :accounting_code,
  :archived_at,
  :created_at,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :id,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :item_category,
  :name,
  :price_in_cents,
  :product,
  :product_family,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :tax_code,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for Product#remove.
#
# @!attribute [rw] product_id
#   @return [Integer]
ProductRemoveMatch = Struct.new(
  :product_id,
  keyword_init: true
)

# ProductFamily entity data model.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] surcharging
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ProductFamily = Struct.new(
  :accounting_code,
  :archived_at,
  :created_at,
  :description,
  :handle,
  :id,
  :name,
  :product_family,
  :surcharging,
  :updated_at,
  keyword_init: true
)

# Request payload for ProductFamily#load.
#
# @!attribute [rw] id
#   @return [Integer]
ProductFamilyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProductFamily#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
ProductFamilyListMatch = Struct.new(
  :date_field,
  :end_date,
  :end_datetime,
  :start_date,
  :start_datetime,
  keyword_init: true
)

# Request payload for ProductFamily#create.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] surcharging
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ProductFamilyCreateData = Struct.new(
  :accounting_code,
  :archived_at,
  :created_at,
  :description,
  :handle,
  :id,
  :name,
  :product_family,
  :surcharging,
  :updated_at,
  keyword_init: true
)

# ProductFeature entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ProductFeature = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ProductFeature#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] product_id
#   @return [Integer]
#
# @!attribute [rw] destroy_entitlement
#   @return [Boolean, nil]
ProductFeatureRemoveMatch = Struct.new(
  :id,
  :product_id,
  :destroy_entitlement,
  keyword_init: true
)

# ProductPricePoint entity data model.
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] introductory_offer
#   @return [Boolean, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_type
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
ProductPricePoint = Struct.new(
  :accounting_code,
  :archived_at,
  :created_at,
  :currency_prices,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :id,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :introductory_offer,
  :item_category,
  :name,
  :price_in_cents,
  :price_point,
  :price_points,
  :product_family,
  :product_id,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :trial_type,
  :type,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for ProductPricePoint#load.
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] currency_price
#   @return [Boolean, nil]
ProductPricePointLoadMatch = Struct.new(
  :price_point_id,
  :product_id,
  :currency_price,
  keyword_init: true
)

# Request payload for ProductPricePoint#list.
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ProductPricePointListMatch = Struct.new(
  :direction,
  :filter,
  :include,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for ProductPricePoint#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] introductory_offer
#   @return [Boolean, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_type
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
ProductPricePointCreateData = Struct.new(
  :id,
  :accounting_code,
  :archived_at,
  :created_at,
  :currency_prices,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :introductory_offer,
  :item_category,
  :name,
  :price_in_cents,
  :price_point,
  :price_points,
  :product_family,
  :product_id,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :trial_type,
  :type,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for ProductPricePoint#update.
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
#
# @!attribute [rw] accounting_code
#   @return [String, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency_prices
#   @return [Array, nil]
#
# @!attribute [rw] default_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expiration_interval
#   @return [Integer, nil]
#
# @!attribute [rw] expiration_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] features
#   @return [Array, nil]
#
# @!attribute [rw] handle
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initial_charge_after_trial
#   @return [Boolean, nil]
#
# @!attribute [rw] initial_charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] introductory_offer
#   @return [Boolean, nil]
#
# @!attribute [rw] item_category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] price_point
#   @return [Hash, nil]
#
# @!attribute [rw] price_points
#   @return [Array, nil]
#
# @!attribute [rw] product_family
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_name
#   @return [String, nil]
#
# @!attribute [rw] public_signup_pages
#   @return [Array, nil]
#
# @!attribute [rw] request_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] request_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_billing_address
#   @return [Boolean, nil]
#
# @!attribute [rw] require_credit_card
#   @return [Boolean, nil]
#
# @!attribute [rw] require_shipping_address
#   @return [Boolean, nil]
#
# @!attribute [rw] return_params
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] tax_code
#   @return [String, nil]
#
# @!attribute [rw] tax_included
#   @return [Boolean, nil]
#
# @!attribute [rw] taxable
#   @return [Boolean, nil]
#
# @!attribute [rw] trial_interval
#   @return [Integer, nil]
#
# @!attribute [rw] trial_interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] trial_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_type
#   @return [Object, nil]
#
# @!attribute [rw] type
#   @return [Object, nil]
#
# @!attribute [rw] unspsc_code
#   @return [String, nil]
#
# @!attribute [rw] update_return_params
#   @return [String, nil]
#
# @!attribute [rw] update_return_url
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] version_number
#   @return [Integer, nil]
ProductPricePointUpdateData = Struct.new(
  :price_point_id,
  :product_id,
  :accounting_code,
  :archived_at,
  :created_at,
  :currency_prices,
  :default_product_price_point_id,
  :description,
  :expiration_interval,
  :expiration_interval_unit,
  :features,
  :handle,
  :id,
  :initial_charge_after_trial,
  :initial_charge_in_cents,
  :interval,
  :interval_unit,
  :introductory_offer,
  :item_category,
  :name,
  :price_in_cents,
  :price_point,
  :price_points,
  :product_family,
  :product_price_point_handle,
  :product_price_point_id,
  :product_price_point_name,
  :public_signup_pages,
  :request_billing_address,
  :request_credit_card,
  :require_billing_address,
  :require_credit_card,
  :require_shipping_address,
  :return_params,
  :subscription_id,
  :tax_code,
  :tax_included,
  :taxable,
  :trial_interval,
  :trial_interval_unit,
  :trial_price_in_cents,
  :trial_type,
  :type,
  :unspsc_code,
  :update_return_params,
  :update_return_url,
  :updated_at,
  :use_site_exchange_rate,
  :version_number,
  keyword_init: true
)

# Request payload for ProductPricePoint#remove.
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] product_id
#   @return [String]
ProductPricePointRemoveMatch = Struct.new(
  :price_point_id,
  :product_id,
  keyword_init: true
)

# ProformaInvoice entity data model.
#
# @!attribute [rw] available_actions
#   @return [Hash, nil]
#
# @!attribute [rw] billing_address
#   @return [Hash, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] consolidation_level
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_amount
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] delivery_date
#   @return [String, nil]
#
# @!attribute [rw] discount_amount
#   @return [String, nil]
#
# @!attribute [rw] discounts
#   @return [Array, nil]
#
# @!attribute [rw] due_amount
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Integer, nil]
#
# @!attribute [rw] paid_amount
#   @return [String, nil]
#
# @!attribute [rw] payment_instructions
#   @return [String, nil]
#
# @!attribute [rw] payments
#   @return [Array, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] public_url
#   @return [String, nil]
#
# @!attribute [rw] refund_amount
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Object, nil]
#
# @!attribute [rw] seller
#   @return [Object, nil]
#
# @!attribute [rw] sequence_number
#   @return [Integer, nil]
#
# @!attribute [rw] shipping_address
#   @return [Hash, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_amount
#   @return [String, nil]
#
# @!attribute [rw] tax_amount
#   @return [String, nil]
#
# @!attribute [rw] taxes
#   @return [Array, nil]
#
# @!attribute [rw] total_amount
#   @return [String, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
ProformaInvoice = Struct.new(
  :available_actions,
  :billing_address,
  :collection_method,
  :consolidation_level,
  :created_at,
  :credit_amount,
  :credits,
  :currency,
  :custom_fields,
  :customer,
  :customer_id,
  :delivery_date,
  :discount_amount,
  :discounts,
  :due_amount,
  :id,
  :line_items,
  :memo,
  :number,
  :paid_amount,
  :payment_instructions,
  :payments,
  :product_family_name,
  :product_name,
  :public_url,
  :refund_amount,
  :role,
  :seller,
  :sequence_number,
  :shipping_address,
  :site_id,
  :status,
  :subscription_id,
  :subtotal_amount,
  :tax_amount,
  :taxes,
  :total_amount,
  :uid,
  keyword_init: true
)

# Request payload for ProformaInvoice#list.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] credit
#   @return [Boolean, nil]
#
# @!attribute [rw] custom_field
#   @return [Boolean, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] discount
#   @return [Boolean, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] line_item
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] payment
#   @return [Boolean, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] taxis
#   @return [Boolean, nil]
ProformaInvoiceListMatch = Struct.new(
  :subscription_id,
  :credit,
  :custom_field,
  :direction,
  :discount,
  :end_date,
  :line_item,
  :page,
  :payment,
  :per_page,
  :start_date,
  :status,
  :taxis,
  keyword_init: true
)

# Request payload for ProformaInvoice#create.
#
# @!attribute [rw] available_actions
#   @return [Hash, nil]
#
# @!attribute [rw] billing_address
#   @return [Hash, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] consolidation_level
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_amount
#   @return [String, nil]
#
# @!attribute [rw] credits
#   @return [Array, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] custom_fields
#   @return [Array, nil]
#
# @!attribute [rw] customer
#   @return [Object, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] delivery_date
#   @return [String, nil]
#
# @!attribute [rw] discount_amount
#   @return [String, nil]
#
# @!attribute [rw] discounts
#   @return [Array, nil]
#
# @!attribute [rw] due_amount
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] number
#   @return [Integer, nil]
#
# @!attribute [rw] paid_amount
#   @return [String, nil]
#
# @!attribute [rw] payment_instructions
#   @return [String, nil]
#
# @!attribute [rw] payments
#   @return [Array, nil]
#
# @!attribute [rw] product_family_name
#   @return [String, nil]
#
# @!attribute [rw] product_name
#   @return [String, nil]
#
# @!attribute [rw] public_url
#   @return [String, nil]
#
# @!attribute [rw] refund_amount
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [Object, nil]
#
# @!attribute [rw] seller
#   @return [Object, nil]
#
# @!attribute [rw] sequence_number
#   @return [Integer, nil]
#
# @!attribute [rw] shipping_address
#   @return [Hash, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_amount
#   @return [String, nil]
#
# @!attribute [rw] tax_amount
#   @return [String, nil]
#
# @!attribute [rw] taxes
#   @return [Array, nil]
#
# @!attribute [rw] total_amount
#   @return [String, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
ProformaInvoiceCreateData = Struct.new(
  :available_actions,
  :billing_address,
  :collection_method,
  :consolidation_level,
  :created_at,
  :credit_amount,
  :credits,
  :currency,
  :custom_fields,
  :customer,
  :customer_id,
  :delivery_date,
  :discount_amount,
  :discounts,
  :due_amount,
  :id,
  :line_items,
  :memo,
  :number,
  :paid_amount,
  :payment_instructions,
  :payments,
  :product_family_name,
  :product_name,
  :public_url,
  :refund_amount,
  :role,
  :seller,
  :sequence_number,
  :shipping_address,
  :site_id,
  :status,
  :subscription_id,
  :subtotal_amount,
  :tax_amount,
  :taxes,
  :total_amount,
  :uid,
  keyword_init: true
)

# ReasonCode entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [Hash]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ReasonCode = Struct.new(
  :code,
  :created_at,
  :description,
  :id,
  :position,
  :reason_code,
  :site_id,
  :updated_at,
  keyword_init: true
)

# Request payload for ReasonCode#load.
#
# @!attribute [rw] reason_code_id
#   @return [Integer]
ReasonCodeLoadMatch = Struct.new(
  :reason_code_id,
  keyword_init: true
)

# Request payload for ReasonCode#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ReasonCodeListMatch = Struct.new(
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for ReasonCode#create.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [Hash]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ReasonCodeCreateData = Struct.new(
  :code,
  :created_at,
  :description,
  :id,
  :position,
  :reason_code,
  :site_id,
  :updated_at,
  keyword_init: true
)

# Request payload for ReasonCode#update.
#
# @!attribute [rw] reason_code_id
#   @return [Integer]
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] position
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [Hash, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
ReasonCodeUpdateData = Struct.new(
  :reason_code_id,
  :code,
  :created_at,
  :description,
  :id,
  :position,
  :reason_code,
  :site_id,
  :updated_at,
  keyword_init: true
)

# Request payload for ReasonCode#remove.
#
# @!attribute [rw] reason_code_id
#   @return [Integer]
ReasonCodeRemoveMatch = Struct.new(
  :reason_code_id,
  keyword_init: true
)

# ReferralCode entity data model.
#
# @!attribute [rw] code
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
ReferralCode = Struct.new(
  :code,
  :id,
  :site_id,
  :subscription_id,
  keyword_init: true
)

# Request payload for ReferralCode#load.
#
# @!attribute [rw] code
#   @return [String]
ReferralCodeLoadMatch = Struct.new(
  :code,
  keyword_init: true
)

# SaleRepSetting entity data model.
#
# @!attribute [rw] customer_name
#   @return [String, nil]
#
# @!attribute [rw] sales_rep_id
#   @return [Integer, nil]
#
# @!attribute [rw] sales_rep_name
#   @return [String, nil]
#
# @!attribute [rw] site_link
#   @return [String, nil]
#
# @!attribute [rw] site_name
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_mrr
#   @return [String, nil]
SaleRepSetting = Struct.new(
  :customer_name,
  :sales_rep_id,
  :sales_rep_name,
  :site_link,
  :site_name,
  :subscription_id,
  :subscription_mrr,
  keyword_init: true
)

# Request payload for SaleRepSetting#list.
#
# @!attribute [rw] seller_id
#   @return [String]
#
# @!attribute [rw] live_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SaleRepSettingListMatch = Struct.new(
  :seller_id,
  :live_mode,
  :page,
  :per_page,
  keyword_init: true
)

# SalesCommission entity data model.
#
# @!attribute [rw] full_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] subscriptions
#   @return [Array, nil]
#
# @!attribute [rw] subscriptions_count
#   @return [Integer, nil]
#
# @!attribute [rw] test_mode
#   @return [Boolean, nil]
SalesCommission = Struct.new(
  :full_name,
  :id,
  :subscriptions,
  :subscriptions_count,
  :test_mode,
  keyword_init: true
)

# Request payload for SalesCommission#list.
#
# @!attribute [rw] sales_rep_id
#   @return [String]
#
# @!attribute [rw] seller_id
#   @return [String]
#
# @!attribute [rw] live_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SalesCommissionListMatch = Struct.new(
  :sales_rep_id,
  :seller_id,
  :live_mode,
  :page,
  :per_page,
  keyword_init: true
)

# Segment entity data model.
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
Segment = Struct.new(
  :component_id,
  :created_at,
  :event_based_billing_metric_id,
  :id,
  :price_point_id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :updated_at,
  keyword_init: true
)

# Request payload for Segment#create.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SegmentCreateData = Struct.new(
  :component_id,
  :price_point_id,
  :created_at,
  :event_based_billing_metric_id,
  :id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :updated_at,
  keyword_init: true
)

# Request payload for Segment#update.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] price_point_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_based_billing_metric_id
#   @return [Integer, nil]
#
# @!attribute [rw] prices
#   @return [Array, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_1_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_2_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_3_value
#   @return [Object, nil]
#
# @!attribute [rw] segment_property_4_value
#   @return [Object, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SegmentUpdateData = Struct.new(
  :component_id,
  :id,
  :price_point_id,
  :created_at,
  :event_based_billing_metric_id,
  :prices,
  :pricing_scheme,
  :segment_property_1_value,
  :segment_property_2_value,
  :segment_property_3_value,
  :segment_property_4_value,
  :updated_at,
  keyword_init: true
)

# SignupProformaPreview entity data model.
class SignupProformaPreview
end

# Request payload for SignupProformaPreview#create.
#
# @!attribute [rw] include
#   @return [Object, nil]
SignupProformaPreviewCreateData = Struct.new(
  :include,
  keyword_init: true
)

# Site entity data model.
#
# @!attribute [rw] allocation_settings
#   @return [Hash, nil]
#
# @!attribute [rw] auto_renewals_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] customer_hierarchy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] default_payment_collection_method
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] multi_frequency_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Hash, nil]
#
# @!attribute [rw] non_primary_currencies
#   @return [Array, nil]
#
# @!attribute [rw] organization_address
#   @return [Hash, nil]
#
# @!attribute [rw] portal_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] relationship_invoicing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] requires_security_token
#   @return [Boolean, nil]
#
# @!attribute [rw] schedule_subscription_cancellation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] seller_id
#   @return [Integer, nil]
#
# @!attribute [rw] subdomain
#   @return [String, nil]
#
# @!attribute [rw] tax_configuration
#   @return [Hash, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] whopays_default_payer
#   @return [String, nil]
#
# @!attribute [rw] whopays_enabled
#   @return [Boolean, nil]
Site = Struct.new(
  :allocation_settings,
  :auto_renewals_enabled,
  :created_at,
  :currency,
  :customer_hierarchy_enabled,
  :default_payment_collection_method,
  :id,
  :multi_frequency_enabled,
  :name,
  :net_terms,
  :non_primary_currencies,
  :organization_address,
  :portal_enabled,
  :public_key,
  :relationship_invoicing_enabled,
  :requires_security_token,
  :schedule_subscription_cancellation_enabled,
  :seller_id,
  :subdomain,
  :tax_configuration,
  :test,
  :whopays_default_payer,
  :whopays_enabled,
  keyword_init: true
)

# Request payload for Site#load.
#
# @!attribute [rw] allocation_settings
#   @return [Hash, nil]
#
# @!attribute [rw] auto_renewals_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] customer_hierarchy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] default_payment_collection_method
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] multi_frequency_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Hash, nil]
#
# @!attribute [rw] non_primary_currencies
#   @return [Array, nil]
#
# @!attribute [rw] organization_address
#   @return [Hash, nil]
#
# @!attribute [rw] portal_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] relationship_invoicing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] requires_security_token
#   @return [Boolean, nil]
#
# @!attribute [rw] schedule_subscription_cancellation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] seller_id
#   @return [Integer, nil]
#
# @!attribute [rw] subdomain
#   @return [String, nil]
#
# @!attribute [rw] tax_configuration
#   @return [Hash, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] whopays_default_payer
#   @return [String, nil]
#
# @!attribute [rw] whopays_enabled
#   @return [Boolean, nil]
SiteLoadMatch = Struct.new(
  :allocation_settings,
  :auto_renewals_enabled,
  :created_at,
  :currency,
  :customer_hierarchy_enabled,
  :default_payment_collection_method,
  :id,
  :multi_frequency_enabled,
  :name,
  :net_terms,
  :non_primary_currencies,
  :organization_address,
  :portal_enabled,
  :public_key,
  :relationship_invoicing_enabled,
  :requires_security_token,
  :schedule_subscription_cancellation_enabled,
  :seller_id,
  :subdomain,
  :tax_configuration,
  :test,
  :whopays_default_payer,
  :whopays_enabled,
  keyword_init: true
)

# Request payload for Site#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SiteListMatch = Struct.new(
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for Site#create.
#
# @!attribute [rw] cleanup_scope
#   @return [Object, nil]
#
# @!attribute [rw] allocation_settings
#   @return [Hash, nil]
#
# @!attribute [rw] auto_renewals_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] customer_hierarchy_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] default_payment_collection_method
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] multi_frequency_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Hash, nil]
#
# @!attribute [rw] non_primary_currencies
#   @return [Array, nil]
#
# @!attribute [rw] organization_address
#   @return [Hash, nil]
#
# @!attribute [rw] portal_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] relationship_invoicing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] requires_security_token
#   @return [Boolean, nil]
#
# @!attribute [rw] schedule_subscription_cancellation_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] seller_id
#   @return [Integer, nil]
#
# @!attribute [rw] subdomain
#   @return [String, nil]
#
# @!attribute [rw] tax_configuration
#   @return [Hash, nil]
#
# @!attribute [rw] test
#   @return [Boolean, nil]
#
# @!attribute [rw] whopays_default_payer
#   @return [String, nil]
#
# @!attribute [rw] whopays_enabled
#   @return [Boolean, nil]
SiteCreateData = Struct.new(
  :cleanup_scope,
  :allocation_settings,
  :auto_renewals_enabled,
  :created_at,
  :currency,
  :customer_hierarchy_enabled,
  :default_payment_collection_method,
  :id,
  :multi_frequency_enabled,
  :name,
  :net_terms,
  :non_primary_currencies,
  :organization_address,
  :portal_enabled,
  :public_key,
  :relationship_invoicing_enabled,
  :requires_security_token,
  :schedule_subscription_cancellation_enabled,
  :seller_id,
  :subdomain,
  :tax_configuration,
  :test,
  :whopays_default_payer,
  :whopays_enabled,
  keyword_init: true
)

# Subscription entity data model.
#
# @!attribute [rw] activated_at
#   @return [String, nil]
#
# @!attribute [rw] automatically_resume_at
#   @return [String, nil]
#
# @!attribute [rw] balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] bank_account
#   @return [Hash]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] canceled_at
#   @return [String, nil]
#
# @!attribute [rw] cancellation_message
#   @return [String, nil]
#
# @!attribute [rw] cancellation_method
#   @return [Object, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] coupon_codes
#   @return [Array, nil]
#
# @!attribute [rw] coupon_use_count
#   @return [Integer, nil]
#
# @!attribute [rw] coupon_uses_allowed
#   @return [Integer, nil]
#
# @!attribute [rw] coupons
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] credit_card
#   @return [Object, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_billing_amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] current_period_ends_at
#   @return [String, nil]
#
# @!attribute [rw] current_period_started_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] delayed_cancel_at
#   @return [String, nil]
#
# @!attribute [rw] dunning_communication_delay_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] dunning_communication_delay_time_zone
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] next_product_handle
#   @return [String, nil]
#
# @!attribute [rw] next_product_id
#   @return [Integer, nil]
#
# @!attribute [rw] next_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] offer_id
#   @return [Integer, nil]
#
# @!attribute [rw] on_hold_at
#   @return [String, nil]
#
# @!attribute [rw] payer_id
#   @return [Integer, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] prepaid_configuration
#   @return [Object, nil]
#
# @!attribute [rw] prepaid_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] prepayment_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] previous_state
#   @return [Object, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] product_version_number
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] receives_invoice_emails
#   @return [Boolean, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] referral_code
#   @return [String, nil]
#
# @!attribute [rw] scheduled_cancellation_at
#   @return [String, nil]
#
# @!attribute [rw] self_service_page_token
#   @return [String, nil]
#
# @!attribute [rw] signup_payment_id
#   @return [Integer, nil]
#
# @!attribute [rw] signup_revenue
#   @return [String, nil]
#
# @!attribute [rw] snap_day
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object, nil]
#
# @!attribute [rw] stored_credential_transaction_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] total_revenue_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_ended_at
#   @return [String, nil]
#
# @!attribute [rw] trial_started_at
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
Subscription = Struct.new(
  :activated_at,
  :automatically_resume_at,
  :balance_in_cents,
  :bank_account,
  :cancel_at_end_of_period,
  :canceled_at,
  :cancellation_message,
  :cancellation_method,
  :coupon_code,
  :coupon_codes,
  :coupon_use_count,
  :coupon_uses_allowed,
  :coupons,
  :created_at,
  :credit_balance_in_cents,
  :credit_card,
  :currency,
  :current_billing_amount_in_cents,
  :current_period_ends_at,
  :current_period_started_at,
  :customer,
  :delayed_cancel_at,
  :dunning_communication_delay_enabled,
  :dunning_communication_delay_time_zone,
  :expires_at,
  :group,
  :id,
  :locale,
  :net_terms,
  :next_assessment_at,
  :next_product_handle,
  :next_product_id,
  :next_product_price_point_id,
  :offer_id,
  :on_hold_at,
  :payer_id,
  :payment_collection_method,
  :payment_type,
  :prepaid_configuration,
  :prepaid_dunning,
  :prepayment_balance_in_cents,
  :previous_state,
  :product,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_type,
  :product_version_number,
  :reason_code,
  :receives_invoice_emails,
  :reference,
  :referral_code,
  :scheduled_cancellation_at,
  :self_service_page_token,
  :signup_payment_id,
  :signup_revenue,
  :snap_day,
  :state,
  :stored_credential_transaction_id,
  :subscription,
  :total_revenue_in_cents,
  :trial_ended_at,
  :trial_started_at,
  :updated_at,
  keyword_init: true
)

# Request payload for Subscription#load.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] include
#   @return [Array, nil]
SubscriptionLoadMatch = Struct.new(
  :subscription_id,
  :include,
  keyword_init: true
)

# Request payload for Subscription#list.
#
# @!attribute [rw] branding_theme_id
#   @return [Integer, nil]
#
# @!attribute [rw] collection_method
#   @return [Object, nil]
#
# @!attribute [rw] coupon
#   @return [Integer, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] dunning_exemption
#   @return [Boolean, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] group_status
#   @return [Object, nil]
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] payment_gateway
#   @return [String, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] product
#   @return [Object, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] q_scope
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object, nil]
SubscriptionListMatch = Struct.new(
  :branding_theme_id,
  :collection_method,
  :coupon,
  :coupon_code,
  :currency,
  :customer_id,
  :date_field,
  :direction,
  :dunning_exemption,
  :end_date,
  :end_datetime,
  :group_status,
  :include,
  :metadata,
  :page,
  :payment_gateway,
  :per_page,
  :product,
  :product_price_point_id,
  :q,
  :q_scope,
  :sort,
  :start_date,
  :start_datetime,
  :state,
  keyword_init: true
)

# Request payload for Subscription#create.
#
# @!attribute [rw] activated_at
#   @return [String, nil]
#
# @!attribute [rw] automatically_resume_at
#   @return [String, nil]
#
# @!attribute [rw] balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] bank_account
#   @return [Hash]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] canceled_at
#   @return [String, nil]
#
# @!attribute [rw] cancellation_message
#   @return [String, nil]
#
# @!attribute [rw] cancellation_method
#   @return [Object, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] coupon_codes
#   @return [Array, nil]
#
# @!attribute [rw] coupon_use_count
#   @return [Integer, nil]
#
# @!attribute [rw] coupon_uses_allowed
#   @return [Integer, nil]
#
# @!attribute [rw] coupons
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] credit_card
#   @return [Object, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_billing_amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] current_period_ends_at
#   @return [String, nil]
#
# @!attribute [rw] current_period_started_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] delayed_cancel_at
#   @return [String, nil]
#
# @!attribute [rw] dunning_communication_delay_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] dunning_communication_delay_time_zone
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] next_product_handle
#   @return [String, nil]
#
# @!attribute [rw] next_product_id
#   @return [Integer, nil]
#
# @!attribute [rw] next_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] offer_id
#   @return [Integer, nil]
#
# @!attribute [rw] on_hold_at
#   @return [String, nil]
#
# @!attribute [rw] payer_id
#   @return [Integer, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] prepaid_configuration
#   @return [Object, nil]
#
# @!attribute [rw] prepaid_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] prepayment_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] previous_state
#   @return [Object, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] product_version_number
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] receives_invoice_emails
#   @return [Boolean, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] referral_code
#   @return [String, nil]
#
# @!attribute [rw] scheduled_cancellation_at
#   @return [String, nil]
#
# @!attribute [rw] self_service_page_token
#   @return [String, nil]
#
# @!attribute [rw] signup_payment_id
#   @return [Integer, nil]
#
# @!attribute [rw] signup_revenue
#   @return [String, nil]
#
# @!attribute [rw] snap_day
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object, nil]
#
# @!attribute [rw] stored_credential_transaction_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] total_revenue_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_ended_at
#   @return [String, nil]
#
# @!attribute [rw] trial_started_at
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SubscriptionCreateData = Struct.new(
  :activated_at,
  :automatically_resume_at,
  :balance_in_cents,
  :bank_account,
  :cancel_at_end_of_period,
  :canceled_at,
  :cancellation_message,
  :cancellation_method,
  :coupon_code,
  :coupon_codes,
  :coupon_use_count,
  :coupon_uses_allowed,
  :coupons,
  :created_at,
  :credit_balance_in_cents,
  :credit_card,
  :currency,
  :current_billing_amount_in_cents,
  :current_period_ends_at,
  :current_period_started_at,
  :customer,
  :delayed_cancel_at,
  :dunning_communication_delay_enabled,
  :dunning_communication_delay_time_zone,
  :expires_at,
  :group,
  :id,
  :locale,
  :net_terms,
  :next_assessment_at,
  :next_product_handle,
  :next_product_id,
  :next_product_price_point_id,
  :offer_id,
  :on_hold_at,
  :payer_id,
  :payment_collection_method,
  :payment_type,
  :prepaid_configuration,
  :prepaid_dunning,
  :prepayment_balance_in_cents,
  :previous_state,
  :product,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_type,
  :product_version_number,
  :reason_code,
  :receives_invoice_emails,
  :reference,
  :referral_code,
  :scheduled_cancellation_at,
  :self_service_page_token,
  :signup_payment_id,
  :signup_revenue,
  :snap_day,
  :state,
  :stored_credential_transaction_id,
  :subscription,
  :total_revenue_in_cents,
  :trial_ended_at,
  :trial_started_at,
  :updated_at,
  keyword_init: true
)

# Request payload for Subscription#update.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] activated_at
#   @return [String, nil]
#
# @!attribute [rw] automatically_resume_at
#   @return [String, nil]
#
# @!attribute [rw] balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] bank_account
#   @return [Hash, nil]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] canceled_at
#   @return [String, nil]
#
# @!attribute [rw] cancellation_message
#   @return [String, nil]
#
# @!attribute [rw] cancellation_method
#   @return [Object, nil]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
#
# @!attribute [rw] coupon_codes
#   @return [Array, nil]
#
# @!attribute [rw] coupon_use_count
#   @return [Integer, nil]
#
# @!attribute [rw] coupon_uses_allowed
#   @return [Integer, nil]
#
# @!attribute [rw] coupons
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] credit_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] credit_card
#   @return [Object, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] current_billing_amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] current_period_ends_at
#   @return [String, nil]
#
# @!attribute [rw] current_period_started_at
#   @return [String, nil]
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] delayed_cancel_at
#   @return [String, nil]
#
# @!attribute [rw] dunning_communication_delay_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] dunning_communication_delay_time_zone
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] locale
#   @return [String, nil]
#
# @!attribute [rw] net_terms
#   @return [Integer, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] next_product_handle
#   @return [String, nil]
#
# @!attribute [rw] next_product_id
#   @return [Integer, nil]
#
# @!attribute [rw] next_product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] offer_id
#   @return [Integer, nil]
#
# @!attribute [rw] on_hold_at
#   @return [String, nil]
#
# @!attribute [rw] payer_id
#   @return [Integer, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_type
#   @return [String, nil]
#
# @!attribute [rw] prepaid_configuration
#   @return [Object, nil]
#
# @!attribute [rw] prepaid_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] prepayment_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] previous_state
#   @return [Object, nil]
#
# @!attribute [rw] product
#   @return [Hash, nil]
#
# @!attribute [rw] product_price_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] product_price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] product_version_number
#   @return [Integer, nil]
#
# @!attribute [rw] reason_code
#   @return [String, nil]
#
# @!attribute [rw] receives_invoice_emails
#   @return [Boolean, nil]
#
# @!attribute [rw] reference
#   @return [String, nil]
#
# @!attribute [rw] referral_code
#   @return [String, nil]
#
# @!attribute [rw] scheduled_cancellation_at
#   @return [String, nil]
#
# @!attribute [rw] self_service_page_token
#   @return [String, nil]
#
# @!attribute [rw] signup_payment_id
#   @return [Integer, nil]
#
# @!attribute [rw] signup_revenue
#   @return [String, nil]
#
# @!attribute [rw] snap_day
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Object, nil]
#
# @!attribute [rw] stored_credential_transaction_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription
#   @return [Hash, nil]
#
# @!attribute [rw] total_revenue_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] trial_ended_at
#   @return [String, nil]
#
# @!attribute [rw] trial_started_at
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SubscriptionUpdateData = Struct.new(
  :subscription_id,
  :activated_at,
  :automatically_resume_at,
  :balance_in_cents,
  :bank_account,
  :cancel_at_end_of_period,
  :canceled_at,
  :cancellation_message,
  :cancellation_method,
  :coupon_code,
  :coupon_codes,
  :coupon_use_count,
  :coupon_uses_allowed,
  :coupons,
  :created_at,
  :credit_balance_in_cents,
  :credit_card,
  :currency,
  :current_billing_amount_in_cents,
  :current_period_ends_at,
  :current_period_started_at,
  :customer,
  :delayed_cancel_at,
  :dunning_communication_delay_enabled,
  :dunning_communication_delay_time_zone,
  :expires_at,
  :group,
  :id,
  :locale,
  :net_terms,
  :next_assessment_at,
  :next_product_handle,
  :next_product_id,
  :next_product_price_point_id,
  :offer_id,
  :on_hold_at,
  :payer_id,
  :payment_collection_method,
  :payment_type,
  :prepaid_configuration,
  :prepaid_dunning,
  :prepayment_balance_in_cents,
  :previous_state,
  :product,
  :product_price_in_cents,
  :product_price_point_id,
  :product_price_point_type,
  :product_version_number,
  :reason_code,
  :receives_invoice_emails,
  :reference,
  :referral_code,
  :scheduled_cancellation_at,
  :self_service_page_token,
  :signup_payment_id,
  :signup_revenue,
  :snap_day,
  :state,
  :stored_credential_transaction_id,
  :subscription,
  :total_revenue_in_cents,
  :trial_ended_at,
  :trial_started_at,
  :updated_at,
  keyword_init: true
)

# Request payload for Subscription#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] coupon_code
#   @return [String, nil]
SubscriptionRemoveMatch = Struct.new(
  :id,
  :coupon_code,
  keyword_init: true
)

# SubscriptionComponent entity data model.
#
# @!attribute [rw] accrue_charge
#   @return [Boolean, nil]
#
# @!attribute [rw] allocated_quantity
#   @return [Object, nil]
#
# @!attribute [rw] allocation_id
#   @return [Integer, nil]
#
# @!attribute [rw] allocations
#   @return [Array, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] charge_id
#   @return [Integer, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] component_handle
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] display_on_hosted_page
#   @return [Boolean, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] historic_usages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initiate_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_quantity
#   @return [Integer, nil]
#
# @!attribute [rw] payment
#   @return [Object, nil]
#
# @!attribute [rw] period_type
#   @return [String, nil]
#
# @!attribute [rw] previous_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] previous_quantity
#   @return [Object, nil]
#
# @!attribute [rw] price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_name
#   @return [String, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] proration_downgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_upgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Object, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [Object, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unit_balance
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] used_quantity
#   @return [Integer, nil]
SubscriptionComponent = Struct.new(
  :accrue_charge,
  :allocated_quantity,
  :allocation_id,
  :allocations,
  :allow_fractional_quantities,
  :archived_at,
  :charge_id,
  :component,
  :component_handle,
  :component_id,
  :created_at,
  :currency,
  :description,
  :direction,
  :display_on_hosted_page,
  :downgrade_credit,
  :enabled,
  :end_date,
  :existing_balance_in_cents,
  :expires_at,
  :historic_usages,
  :id,
  :initiate_dunning,
  :interval,
  :interval_unit,
  :kind,
  :line_items,
  :memo,
  :name,
  :overage_quantity,
  :payment,
  :period_type,
  :previous_price_point_id,
  :previous_quantity,
  :price_point_handle,
  :price_point_id,
  :price_point_name,
  :price_point_type,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :proration_downgrade_scheme,
  :proration_scheme,
  :proration_upgrade_scheme,
  :quantity,
  :recurring,
  :start_date,
  :subscription,
  :subscription_id,
  :subtotal_in_cents,
  :timestamp,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :unit_balance,
  :unit_name,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  :used_quantity,
  keyword_init: true
)

# Request payload for SubscriptionComponent#load.
#
# @!attribute [rw] component_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionComponentLoadMatch = Struct.new(
  :component_id,
  :subscription_id,
  keyword_init: true
)

# Request payload for SubscriptionComponent#list.
#
# @!attribute [rw] date_field
#   @return [Object, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] end_datetime
#   @return [String, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] include
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_id
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Array, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] start_datetime
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Array, nil]
SubscriptionComponentListMatch = Struct.new(
  :date_field,
  :direction,
  :end_date,
  :end_datetime,
  :filter,
  :include,
  :page,
  :per_page,
  :price_point_id,
  :product_family_id,
  :sort,
  :start_date,
  :start_datetime,
  :subscription_id,
  keyword_init: true
)

# Request payload for SubscriptionComponent#create.
#
# @!attribute [rw] api_handle
#   @return [String]
#
# @!attribute [rw] store_uid
#   @return [String, nil]
#
# @!attribute [rw] accrue_charge
#   @return [Boolean, nil]
#
# @!attribute [rw] allocated_quantity
#   @return [Object, nil]
#
# @!attribute [rw] allocation_id
#   @return [Integer, nil]
#
# @!attribute [rw] allocations
#   @return [Array, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] charge_id
#   @return [Integer, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] component_handle
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] display_on_hosted_page
#   @return [Boolean, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] historic_usages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initiate_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_quantity
#   @return [Integer, nil]
#
# @!attribute [rw] payment
#   @return [Object, nil]
#
# @!attribute [rw] period_type
#   @return [String, nil]
#
# @!attribute [rw] previous_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] previous_quantity
#   @return [Object, nil]
#
# @!attribute [rw] price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_name
#   @return [String, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] proration_downgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_upgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Object, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [Object, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unit_balance
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] used_quantity
#   @return [Integer, nil]
SubscriptionComponentCreateData = Struct.new(
  :api_handle,
  :store_uid,
  :accrue_charge,
  :allocated_quantity,
  :allocation_id,
  :allocations,
  :allow_fractional_quantities,
  :archived_at,
  :charge_id,
  :component,
  :component_handle,
  :component_id,
  :created_at,
  :currency,
  :description,
  :direction,
  :display_on_hosted_page,
  :downgrade_credit,
  :enabled,
  :end_date,
  :existing_balance_in_cents,
  :expires_at,
  :historic_usages,
  :id,
  :initiate_dunning,
  :interval,
  :interval_unit,
  :kind,
  :line_items,
  :memo,
  :name,
  :overage_quantity,
  :payment,
  :period_type,
  :previous_price_point_id,
  :previous_quantity,
  :price_point_handle,
  :price_point_id,
  :price_point_name,
  :price_point_type,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :proration_downgrade_scheme,
  :proration_scheme,
  :proration_upgrade_scheme,
  :quantity,
  :recurring,
  :start_date,
  :subscription,
  :subscription_id,
  :subtotal_in_cents,
  :timestamp,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :unit_balance,
  :unit_name,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  :used_quantity,
  keyword_init: true
)

# Request payload for SubscriptionComponent#update.
#
# @!attribute [rw] allocation_id
#   @return [Integer]
#
# @!attribute [rw] component_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] accrue_charge
#   @return [Boolean, nil]
#
# @!attribute [rw] allocated_quantity
#   @return [Object, nil]
#
# @!attribute [rw] allocations
#   @return [Array, nil]
#
# @!attribute [rw] allow_fractional_quantities
#   @return [Boolean, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] charge_id
#   @return [Integer, nil]
#
# @!attribute [rw] component
#   @return [Hash, nil]
#
# @!attribute [rw] component_handle
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] display_on_hosted_page
#   @return [Boolean, nil]
#
# @!attribute [rw] downgrade_credit
#   @return [Object, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] historic_usages
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] initiate_dunning
#   @return [Boolean, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] interval_unit
#   @return [Object, nil]
#
# @!attribute [rw] kind
#   @return [Object, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] overage_quantity
#   @return [Integer, nil]
#
# @!attribute [rw] payment
#   @return [Object, nil]
#
# @!attribute [rw] period_type
#   @return [String, nil]
#
# @!attribute [rw] previous_price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] previous_quantity
#   @return [Object, nil]
#
# @!attribute [rw] price_point_handle
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_name
#   @return [String, nil]
#
# @!attribute [rw] price_point_type
#   @return [Object, nil]
#
# @!attribute [rw] pricing_scheme
#   @return [Object, nil]
#
# @!attribute [rw] product_family_handle
#   @return [String, nil]
#
# @!attribute [rw] product_family_id
#   @return [Integer, nil]
#
# @!attribute [rw] proration_downgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_scheme
#   @return [String, nil]
#
# @!attribute [rw] proration_upgrade_scheme
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Object, nil]
#
# @!attribute [rw] recurring
#   @return [Boolean, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
#
# @!attribute [rw] subscription
#   @return [Object, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] unit_balance
#   @return [Object, nil]
#
# @!attribute [rw] unit_name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upgrade_charge
#   @return [Object, nil]
#
# @!attribute [rw] use_site_exchange_rate
#   @return [Boolean, nil]
#
# @!attribute [rw] used_quantity
#   @return [Integer, nil]
SubscriptionComponentUpdateData = Struct.new(
  :allocation_id,
  :component_id,
  :subscription_id,
  :accrue_charge,
  :allocated_quantity,
  :allocations,
  :allow_fractional_quantities,
  :archived_at,
  :charge_id,
  :component,
  :component_handle,
  :created_at,
  :currency,
  :description,
  :direction,
  :display_on_hosted_page,
  :downgrade_credit,
  :enabled,
  :end_date,
  :existing_balance_in_cents,
  :expires_at,
  :historic_usages,
  :id,
  :initiate_dunning,
  :interval,
  :interval_unit,
  :kind,
  :line_items,
  :memo,
  :name,
  :overage_quantity,
  :payment,
  :period_type,
  :previous_price_point_id,
  :previous_quantity,
  :price_point_handle,
  :price_point_id,
  :price_point_name,
  :price_point_type,
  :pricing_scheme,
  :product_family_handle,
  :product_family_id,
  :proration_downgrade_scheme,
  :proration_scheme,
  :proration_upgrade_scheme,
  :quantity,
  :recurring,
  :start_date,
  :subscription,
  :subtotal_in_cents,
  :timestamp,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :unit_balance,
  :unit_name,
  :updated_at,
  :upgrade_charge,
  :use_site_exchange_rate,
  :used_quantity,
  keyword_init: true
)

# Request payload for SubscriptionComponent#remove.
#
# @!attribute [rw] allocation_id
#   @return [Integer]
#
# @!attribute [rw] component_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionComponentRemoveMatch = Struct.new(
  :allocation_id,
  :component_id,
  :subscription_id,
  keyword_init: true
)

# SubscriptionGroup entity data model.
#
# @!attribute [rw] account_balances
#   @return [Hash, nil]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] group_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_profile
#   @return [Hash, nil]
#
# @!attribute [rw] payment_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] scheme
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscription_ids
#   @return [Array, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
SubscriptionGroup = Struct.new(
  :account_balances,
  :cancel_at_end_of_period,
  :created_at,
  :customer_id,
  :group_type,
  :id,
  :next_assessment_at,
  :payment_collection_method,
  :payment_profile,
  :payment_profile_id,
  :primary_subscription_id,
  :scheme,
  :state,
  :subscription_ids,
  :uid,
  keyword_init: true
)

# Request payload for SubscriptionGroup#list.
#
# @!attribute [rw] include
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SubscriptionGroupListMatch = Struct.new(
  :include,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for SubscriptionGroup#create.
#
# @!attribute [rw] account_balances
#   @return [Hash, nil]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] group_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_profile
#   @return [Hash, nil]
#
# @!attribute [rw] payment_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] scheme
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscription_ids
#   @return [Array, nil]
#
# @!attribute [rw] uid
#   @return [String, nil]
SubscriptionGroupCreateData = Struct.new(
  :account_balances,
  :cancel_at_end_of_period,
  :created_at,
  :customer_id,
  :group_type,
  :id,
  :next_assessment_at,
  :payment_collection_method,
  :payment_profile,
  :payment_profile_id,
  :primary_subscription_id,
  :scheme,
  :state,
  :subscription_ids,
  :uid,
  keyword_init: true
)

# Request payload for SubscriptionGroup#update.
#
# @!attribute [rw] uid
#   @return [String]
#
# @!attribute [rw] account_balances
#   @return [Hash, nil]
#
# @!attribute [rw] cancel_at_end_of_period
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] customer_id
#   @return [Integer, nil]
#
# @!attribute [rw] group_type
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] payment_collection_method
#   @return [Object, nil]
#
# @!attribute [rw] payment_profile
#   @return [Hash, nil]
#
# @!attribute [rw] payment_profile_id
#   @return [Integer, nil]
#
# @!attribute [rw] primary_subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] scheme
#   @return [Integer, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] subscription_ids
#   @return [Array, nil]
SubscriptionGroupUpdateData = Struct.new(
  :uid,
  :account_balances,
  :cancel_at_end_of_period,
  :created_at,
  :customer_id,
  :group_type,
  :id,
  :next_assessment_at,
  :payment_collection_method,
  :payment_profile,
  :payment_profile_id,
  :primary_subscription_id,
  :scheme,
  :state,
  :subscription_ids,
  keyword_init: true
)

# Request payload for SubscriptionGroup#remove.
#
# @!attribute [rw] id
#   @return [Integer]
SubscriptionGroupRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SubscriptionGroupInvoiceAccount entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
SubscriptionGroupInvoiceAccount = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SubscriptionGroupInvoiceAccount#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SubscriptionGroupInvoiceAccountListMatch = Struct.new(
  :id,
  :filter,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for SubscriptionGroupInvoiceAccount#create.
#
# @!attribute [rw] id
#   @return [String]
SubscriptionGroupInvoiceAccountCreateData = Struct.new(
  :id,
  keyword_init: true
)

# SubscriptionGroupSignup entity data model.
class SubscriptionGroupSignup
end

# Request payload for SubscriptionGroupSignup#create.
class SubscriptionGroupSignupCreateData
end

# SubscriptionGroupStatus entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
SubscriptionGroupStatus = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SubscriptionGroupStatus#create.
#
# @!attribute [rw] id
#   @return [String]
SubscriptionGroupStatusCreateData = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SubscriptionGroupStatus#remove.
#
# @!attribute [rw] id
#   @return [String]
SubscriptionGroupStatusRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SubscriptionInvoiceAccount entity data model.
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] ending_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] entry_type
#   @return [Object, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] invoice_uid
#   @return [String, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] remaining_balance_in_cents
#   @return [Integer, nil]
SubscriptionInvoiceAccount = Struct.new(
  :amount_in_cents,
  :created_at,
  :ending_balance_in_cents,
  :entry_type,
  :id,
  :invoice_uid,
  :memo,
  :remaining_balance_in_cents,
  keyword_init: true
)

# Request payload for SubscriptionInvoiceAccount#list.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SubscriptionInvoiceAccountListMatch = Struct.new(
  :subscription_id,
  :direction,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for SubscriptionInvoiceAccount#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] amount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] ending_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] entry_type
#   @return [Object, nil]
#
# @!attribute [rw] invoice_uid
#   @return [String, nil]
#
# @!attribute [rw] memo
#   @return [String, nil]
#
# @!attribute [rw] remaining_balance_in_cents
#   @return [Integer, nil]
SubscriptionInvoiceAccountCreateData = Struct.new(
  :id,
  :amount_in_cents,
  :created_at,
  :ending_balance_in_cents,
  :entry_type,
  :invoice_uid,
  :memo,
  :remaining_balance_in_cents,
  keyword_init: true
)

# SubscriptionMrr entity data model.
#
# @!attribute [rw] breakouts
#   @return [Hash]
#
# @!attribute [rw] mrr_amount_in_cents
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionMrr = Struct.new(
  :breakouts,
  :mrr_amount_in_cents,
  :subscription_id,
  keyword_init: true
)

# Request payload for SubscriptionMrr#list.
#
# @!attribute [rw] at_time
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [Object, nil]
#
# @!attribute [rw] filter
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SubscriptionMrrListMatch = Struct.new(
  :at_time,
  :direction,
  :filter,
  :page,
  :per_page,
  keyword_init: true
)

# SubscriptionNote entity data model.
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] note
#   @return [Hash]
#
# @!attribute [rw] sticky
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SubscriptionNote = Struct.new(
  :body,
  :created_at,
  :id,
  :note,
  :sticky,
  :subscription_id,
  :updated_at,
  keyword_init: true
)

# Request payload for SubscriptionNote#load.
#
# @!attribute [rw] note_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionNoteLoadMatch = Struct.new(
  :note_id,
  :subscription_id,
  keyword_init: true
)

# Request payload for SubscriptionNote#list.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
SubscriptionNoteListMatch = Struct.new(
  :id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for SubscriptionNote#create.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] note
#   @return [Hash]
#
# @!attribute [rw] sticky
#   @return [Boolean, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SubscriptionNoteCreateData = Struct.new(
  :id,
  :body,
  :created_at,
  :note,
  :sticky,
  :subscription_id,
  :updated_at,
  keyword_init: true
)

# Request payload for SubscriptionNote#update.
#
# @!attribute [rw] note_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] body
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] note
#   @return [Hash, nil]
#
# @!attribute [rw] sticky
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SubscriptionNoteUpdateData = Struct.new(
  :note_id,
  :subscription_id,
  :body,
  :created_at,
  :id,
  :note,
  :sticky,
  :updated_at,
  keyword_init: true
)

# Request payload for SubscriptionNote#remove.
#
# @!attribute [rw] note_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionNoteRemoveMatch = Struct.new(
  :note_id,
  :subscription_id,
  keyword_init: true
)

# SubscriptionProduct entity data model.
#
# @!attribute [rw] charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] credit_applied_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] migration
#   @return [Hash]
#
# @!attribute [rw] payment_due_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] prorated_adjustment_in_cents
#   @return [Integer, nil]
SubscriptionProduct = Struct.new(
  :charge_in_cents,
  :credit_applied_in_cents,
  :id,
  :migration,
  :payment_due_in_cents,
  :prorated_adjustment_in_cents,
  keyword_init: true
)

# Request payload for SubscriptionProduct#create.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] charge_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] credit_applied_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] migration
#   @return [Hash]
#
# @!attribute [rw] payment_due_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] prorated_adjustment_in_cents
#   @return [Integer, nil]
SubscriptionProductCreateData = Struct.new(
  :subscription_id,
  :charge_in_cents,
  :credit_applied_in_cents,
  :id,
  :migration,
  :payment_due_in_cents,
  :prorated_adjustment_in_cents,
  keyword_init: true
)

# SubscriptionRenewal entity data model.
#
# @!attribute [rw] contract
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] decimal_quantity
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] item_id
#   @return [Integer, nil]
#
# @!attribute [rw] item_subclass
#   @return [String, nil]
#
# @!attribute [rw] item_type
#   @return [String, nil]
#
# @!attribute [rw] lock_in_at
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Integer, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_item
#   @return [Hash, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_items
#   @return [Array, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] starts_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_renewal_configuration_id
#   @return [Integer, nil]
SubscriptionRenewal = Struct.new(
  :contract,
  :created_at,
  :decimal_quantity,
  :ends_at,
  :id,
  :item_id,
  :item_subclass,
  :item_type,
  :lock_in_at,
  :price_point_id,
  :price_point_type,
  :quantity,
  :scheduled_renewal_configuration_item,
  :scheduled_renewal_configuration_items,
  :site_id,
  :starts_at,
  :status,
  :subscription_id,
  :subscription_renewal_configuration_id,
  keyword_init: true
)

# Request payload for SubscriptionRenewal#load.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionRenewalLoadMatch = Struct.new(
  :id,
  :subscription_id,
  keyword_init: true
)

# Request payload for SubscriptionRenewal#list.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] status
#   @return [Object, nil]
SubscriptionRenewalListMatch = Struct.new(
  :id,
  :status,
  keyword_init: true
)

# Request payload for SubscriptionRenewal#create.
#
# @!attribute [rw] scheduled_renewal_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] contract
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] decimal_quantity
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] item_id
#   @return [Integer, nil]
#
# @!attribute [rw] item_subclass
#   @return [String, nil]
#
# @!attribute [rw] item_type
#   @return [String, nil]
#
# @!attribute [rw] lock_in_at
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Integer, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_item
#   @return [Hash, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_items
#   @return [Array, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] starts_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_renewal_configuration_id
#   @return [Integer, nil]
SubscriptionRenewalCreateData = Struct.new(
  :scheduled_renewal_id,
  :subscription_id,
  :contract,
  :created_at,
  :decimal_quantity,
  :ends_at,
  :id,
  :item_id,
  :item_subclass,
  :item_type,
  :lock_in_at,
  :price_point_id,
  :price_point_type,
  :quantity,
  :scheduled_renewal_configuration_item,
  :scheduled_renewal_configuration_items,
  :site_id,
  :starts_at,
  :status,
  :subscription_renewal_configuration_id,
  keyword_init: true
)

# Request payload for SubscriptionRenewal#update.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] scheduled_renewal_id
#   @return [Integer, nil]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] contract
#   @return [Object, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] decimal_quantity
#   @return [String, nil]
#
# @!attribute [rw] ends_at
#   @return [String, nil]
#
# @!attribute [rw] item_id
#   @return [Integer, nil]
#
# @!attribute [rw] item_subclass
#   @return [String, nil]
#
# @!attribute [rw] item_type
#   @return [String, nil]
#
# @!attribute [rw] lock_in_at
#   @return [String, nil]
#
# @!attribute [rw] price_point_id
#   @return [Integer, nil]
#
# @!attribute [rw] price_point_type
#   @return [String, nil]
#
# @!attribute [rw] quantity
#   @return [Integer, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_item
#   @return [Hash, nil]
#
# @!attribute [rw] scheduled_renewal_configuration_items
#   @return [Array, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] starts_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] subscription_renewal_configuration_id
#   @return [Integer, nil]
SubscriptionRenewalUpdateData = Struct.new(
  :id,
  :scheduled_renewal_id,
  :subscription_id,
  :contract,
  :created_at,
  :decimal_quantity,
  :ends_at,
  :item_id,
  :item_subclass,
  :item_type,
  :lock_in_at,
  :price_point_id,
  :price_point_type,
  :quantity,
  :scheduled_renewal_configuration_item,
  :scheduled_renewal_configuration_items,
  :site_id,
  :starts_at,
  :status,
  :subscription_renewal_configuration_id,
  keyword_init: true
)

# Request payload for SubscriptionRenewal#remove.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] scheduled_renewal_id
#   @return [Integer]
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionRenewalRemoveMatch = Struct.new(
  :id,
  :scheduled_renewal_id,
  :subscription_id,
  keyword_init: true
)

# SubscriptionStatus entity data model.
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_amount_due_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] uncalculated_taxes
#   @return [Boolean, nil]
SubscriptionStatus = Struct.new(
  :existing_balance_in_cents,
  :id,
  :line_items,
  :next_assessment_at,
  :subtotal_in_cents,
  :total_amount_due_in_cents,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :uncalculated_taxes,
  keyword_init: true
)

# Request payload for SubscriptionStatus#create.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_amount_due_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] uncalculated_taxes
#   @return [Boolean, nil]
SubscriptionStatusCreateData = Struct.new(
  :subscription_id,
  :existing_balance_in_cents,
  :id,
  :line_items,
  :next_assessment_at,
  :subtotal_in_cents,
  :total_amount_due_in_cents,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :uncalculated_taxes,
  keyword_init: true
)

# Request payload for SubscriptionStatus#update.
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] existing_balance_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] line_items
#   @return [Array, nil]
#
# @!attribute [rw] next_assessment_at
#   @return [String, nil]
#
# @!attribute [rw] subtotal_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_amount_due_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_discount_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] total_tax_in_cents
#   @return [Integer, nil]
#
# @!attribute [rw] uncalculated_taxes
#   @return [Boolean, nil]
SubscriptionStatusUpdateData = Struct.new(
  :id,
  :existing_balance_in_cents,
  :line_items,
  :next_assessment_at,
  :subtotal_in_cents,
  :total_amount_due_in_cents,
  :total_discount_in_cents,
  :total_in_cents,
  :total_tax_in_cents,
  :uncalculated_taxes,
  keyword_init: true
)

# Request payload for SubscriptionStatus#remove.
#
# @!attribute [rw] subscription_id
#   @return [Integer]
SubscriptionStatusRemoveMatch = Struct.new(
  :subscription_id,
  keyword_init: true
)

# Usage entity data model.
#
# @!attribute [rw] usage
#   @return [Hash]
Usage = Struct.new(
  :usage,
  keyword_init: true
)

# Request payload for Usage#list.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] subscription_id_or_reference
#   @return [Object]
#
# @!attribute [rw] max_id
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] since_date
#   @return [String, nil]
#
# @!attribute [rw] since_id
#   @return [Integer, nil]
#
# @!attribute [rw] until_date
#   @return [String, nil]
UsageListMatch = Struct.new(
  :component_id,
  :subscription_id_or_reference,
  :max_id,
  :page,
  :per_page,
  :since_date,
  :since_id,
  :until_date,
  keyword_init: true
)

# Webhook entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook
#   @return [Hash, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
Webhook = Struct.new(
  :id,
  :site_id,
  :status,
  :url,
  :webhook,
  :webhook_subscriptions,
  keyword_init: true
)

# Request payload for Webhook#list.
#
# @!attribute [rw] order
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] since_date
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
#
# @!attribute [rw] subscription
#   @return [Integer, nil]
#
# @!attribute [rw] until_date
#   @return [String, nil]
WebhookListMatch = Struct.new(
  :order,
  :page,
  :per_page,
  :since_date,
  :status,
  :subscription,
  :until_date,
  keyword_init: true
)

# Request payload for Webhook#create.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook
#   @return [Hash, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
WebhookCreateData = Struct.new(
  :id,
  :site_id,
  :status,
  :url,
  :webhook,
  :webhook_subscriptions,
  keyword_init: true
)

# Request payload for Webhook#update.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] site_id
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] webhook
#   @return [Hash, nil]
#
# @!attribute [rw] webhook_subscriptions
#   @return [Array, nil]
WebhookUpdateData = Struct.new(
  :id,
  :site_id,
  :status,
  :url,
  :webhook,
  :webhook_subscriptions,
  keyword_init: true
)

