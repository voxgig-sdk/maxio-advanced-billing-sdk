// Typed models for the MaxioAdvancedBilling SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/core"
)

// AccountBalance is the typed data model for the account_balance entity.
type AccountBalance struct {
}

// AccountBalanceLoadMatch is the typed request payload for AccountBalance.LoadTyped.
type AccountBalanceLoadMatch struct {
	SubscriptionId int `json:"subscription_id"`
}

// Allocation is the typed data model for the allocation entity.
type Allocation struct {
}

// AllocationListMatch is the typed request payload for Allocation.ListTyped.
type AllocationListMatch struct {
	ComponentId int `json:"component_id"`
	SubscriptionId int `json:"subscription_id"`
	Page *int `json:"page,omitempty"`
}

// AllocationCreateData is the typed request payload for Allocation.CreateTyped.
type AllocationCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	Allocation *map[string]any `json:"allocation,omitempty"`
}

// BatchJob is the typed data model for the batch_job entity.
type BatchJob struct {
}

// BatchJobLoadMatch is the typed request payload for BatchJob.LoadTyped.
type BatchJobLoadMatch struct {
	BatchId string `json:"batch_id"`
}

// BatchJobCreateData is the typed request payload for BatchJob.CreateTyped.
type BatchJobCreateData struct {
	Completed *string `json:"completed,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	FinishedAt *string `json:"finished_at,omitempty"`
	Id *int `json:"id,omitempty"`
	RowCount *int `json:"row_count,omitempty"`
}

// BillingPortal is the typed data model for the billing_portal entity.
type BillingPortal struct {
}

// BillingPortalLoadMatch is the typed request payload for BillingPortal.LoadTyped.
type BillingPortalLoadMatch struct {
	CustomerId int `json:"customer_id"`
}

// BillingPortalCreateData is the typed request payload for BillingPortal.CreateTyped.
type BillingPortalCreateData struct {
	CustomerId int `json:"customer_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	FetchCount *int `json:"fetch_count,omitempty"`
	LastAcceptedAt *string `json:"last_accepted_at,omitempty"`
	LastInviteAcceptedAt *string `json:"last_invite_accepted_at,omitempty"`
	LastInviteSentAt *string `json:"last_invite_sent_at,omitempty"`
	LastSentAt *string `json:"last_sent_at,omitempty"`
	NewLinkAvailableAt *string `json:"new_link_available_at,omitempty"`
	SendInviteLinkText *string `json:"send_invite_link_text,omitempty"`
	UninvitedCount *int `json:"uninvited_count,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BillingPortalRemoveMatch is the typed request payload for BillingPortal.RemoveTyped.
type BillingPortalRemoveMatch struct {
	CustomerId int `json:"customer_id"`
}

// Component is the typed data model for the component entity.
type Component struct {
}

// ComponentLoadMatch is the typed request payload for Component.LoadTyped.
type ComponentLoadMatch struct {
	ComponentId string `json:"component_id"`
	ProductFamilyId int `json:"product_family_id"`
	IncludeFeature *bool `json:"include_feature,omitempty"`
}

// ComponentListMatch is the typed request payload for Component.ListTyped.
type ComponentListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Filter *any `json:"filter,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
}

// ComponentCreateData is the typed request payload for Component.CreateTyped.
type ComponentCreateData struct {
	ProductFamilyId string `json:"product_family_id"`
	Component *map[string]any `json:"component,omitempty"`
}

// ComponentUpdateData is the typed request payload for Component.UpdateTyped.
type ComponentUpdateData struct {
	ComponentId string `json:"component_id"`
	ProductFamilyId *int `json:"product_family_id,omitempty"`
	Component *map[string]any `json:"component,omitempty"`
}

// ComponentRemoveMatch is the typed request payload for Component.RemoveTyped.
type ComponentRemoveMatch struct {
	ComponentId string `json:"component_id"`
	ProductFamilyId int `json:"product_family_id"`
}

// ComponentFeature is the typed data model for the component_feature entity.
type ComponentFeature struct {
}

// ComponentFeatureRemoveMatch is the typed request payload for ComponentFeature.RemoveTyped.
type ComponentFeatureRemoveMatch struct {
	ComponentId int `json:"component_id"`
	Id int `json:"id"`
	DestroyEntitlement *bool `json:"destroy_entitlement,omitempty"`
}

// ComponentPricePoint is the typed data model for the component_price_point entity.
type ComponentPricePoint struct {
}

// ComponentPricePointListMatch is the typed request payload for ComponentPricePoint.ListTyped.
type ComponentPricePointListMatch struct {
	Direction *any `json:"direction,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Include *any `json:"include,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ComponentPricePointCreateData is the typed request payload for ComponentPricePoint.CreateTyped.
type ComponentPricePointCreateData struct {
	Id int `json:"id"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Component map[string]any `json:"component"`
	ComponentId *int `json:"component_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrencyPrices *[]any `json:"currency_prices,omitempty"`
	Default *bool `json:"default,omitempty"`
	ExpirationInterval *int `json:"expiration_interval,omitempty"`
	ExpirationIntervalUnit *any `json:"expiration_interval_unit,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Interval *int `json:"interval,omitempty"`
	IntervalUnit *any `json:"interval_unit,omitempty"`
	Name *string `json:"name,omitempty"`
	OveragePrices *[]any `json:"overage_prices,omitempty"`
	OveragePricingScheme *any `json:"overage_pricing_scheme,omitempty"`
	PricePoint *map[string]any `json:"price_point,omitempty"`
	PricePoints *[]any `json:"price_points,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	RenewPrepaidAllocation *bool `json:"renew_prepaid_allocation,omitempty"`
	RolloverPrepaidRemainder *bool `json:"rollover_prepaid_remainder,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
	TaxIncluded *bool `json:"tax_included,omitempty"`
	Type *any `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// ComponentPricePointUpdateData is the typed request payload for ComponentPricePoint.UpdateTyped.
type ComponentPricePointUpdateData struct {
	ComponentId *string `json:"component_id,omitempty"`
	PricePointId string `json:"price_point_id"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Component *map[string]any `json:"component,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrencyPrices *[]any `json:"currency_prices,omitempty"`
	Default *bool `json:"default,omitempty"`
	ExpirationInterval *int `json:"expiration_interval,omitempty"`
	ExpirationIntervalUnit *any `json:"expiration_interval_unit,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Id *int `json:"id,omitempty"`
	Interval *int `json:"interval,omitempty"`
	IntervalUnit *any `json:"interval_unit,omitempty"`
	Name *string `json:"name,omitempty"`
	OveragePrices *[]any `json:"overage_prices,omitempty"`
	OveragePricingScheme *any `json:"overage_pricing_scheme,omitempty"`
	PricePoint *map[string]any `json:"price_point,omitempty"`
	PricePoints *[]any `json:"price_points,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	RenewPrepaidAllocation *bool `json:"renew_prepaid_allocation,omitempty"`
	RolloverPrepaidRemainder *bool `json:"rollover_prepaid_remainder,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
	TaxIncluded *bool `json:"tax_included,omitempty"`
	Type *any `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// ComponentPricePointRemoveMatch is the typed request payload for ComponentPricePoint.RemoveTyped.
type ComponentPricePointRemoveMatch struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
}

// ComponentPricePointCurrencyOverage is the typed data model for the component_price_point_currency_overage entity.
type ComponentPricePointCurrencyOverage struct {
}

// ComponentPricePointCurrencyOverageLoadMatch is the typed request payload for ComponentPricePointCurrencyOverage.LoadTyped.
type ComponentPricePointCurrencyOverageLoadMatch struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
	CurrencyPrice *bool `json:"currency_price,omitempty"`
}

// Coupon is the typed data model for the coupon entity.
type Coupon struct {
}

// CouponLoadMatch is the typed request payload for Coupon.LoadTyped.
type CouponLoadMatch struct {
	CouponId int `json:"coupon_id"`
	ProductFamilyId int `json:"product_family_id"`
	CurrencyPrice *bool `json:"currency_price,omitempty"`
}

// CouponListMatch is the typed request payload for Coupon.ListTyped.
type CouponListMatch struct {
	CurrencyPrice *bool `json:"currency_price,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CouponCreateData is the typed request payload for Coupon.CreateTyped.
type CouponCreateData struct {
	ProductFamilyId int `json:"product_family_id"`
	AllowNegativeBalance *bool `json:"allow_negative_balance,omitempty"`
	Amount *float64 `json:"amount,omitempty"`
	AmountInCents *int `json:"amount_in_cents,omitempty"`
	ApplyOnCancelAtEndOfPeriod *bool `json:"apply_on_cancel_at_end_of_period,omitempty"`
	ApplyOnSubscriptionExpiration *bool `json:"apply_on_subscription_expiration,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Code *string `json:"code,omitempty"`
	CompoundingStrategy *any `json:"compounding_strategy,omitempty"`
	ConversionLimit *string `json:"conversion_limit,omitempty"`
	Coupon *map[string]any `json:"coupon,omitempty"`
	CouponRestrictions *[]any `json:"coupon_restrictions,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrencyPrices *[]any `json:"currency_prices,omitempty"`
	Description *string `json:"description,omitempty"`
	DiscountType *string `json:"discount_type,omitempty"`
	DurationInterval *int `json:"duration_interval,omitempty"`
	DurationIntervalSpan *string `json:"duration_interval_span,omitempty"`
	DurationIntervalUnit *string `json:"duration_interval_unit,omitempty"`
	DurationPeriodCount *int `json:"duration_period_count,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExcludeMidPeriodAllocations *bool `json:"exclude_mid_period_allocations,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Percentage *string `json:"percentage,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	Recurring *bool `json:"recurring,omitempty"`
	RecurringScheme *string `json:"recurring_scheme,omitempty"`
	Stackable *bool `json:"stackable,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// CouponUpdateData is the typed request payload for Coupon.UpdateTyped.
type CouponUpdateData struct {
	CouponId int `json:"coupon_id"`
	ProductFamilyId int `json:"product_family_id"`
	AllowNegativeBalance *bool `json:"allow_negative_balance,omitempty"`
	Amount *float64 `json:"amount,omitempty"`
	AmountInCents *int `json:"amount_in_cents,omitempty"`
	ApplyOnCancelAtEndOfPeriod *bool `json:"apply_on_cancel_at_end_of_period,omitempty"`
	ApplyOnSubscriptionExpiration *bool `json:"apply_on_subscription_expiration,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Code *string `json:"code,omitempty"`
	CompoundingStrategy *any `json:"compounding_strategy,omitempty"`
	ConversionLimit *string `json:"conversion_limit,omitempty"`
	Coupon *map[string]any `json:"coupon,omitempty"`
	CouponRestrictions *[]any `json:"coupon_restrictions,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CurrencyPrices *[]any `json:"currency_prices,omitempty"`
	Description *string `json:"description,omitempty"`
	DiscountType *string `json:"discount_type,omitempty"`
	DurationInterval *int `json:"duration_interval,omitempty"`
	DurationIntervalSpan *string `json:"duration_interval_span,omitempty"`
	DurationIntervalUnit *string `json:"duration_interval_unit,omitempty"`
	DurationPeriodCount *int `json:"duration_period_count,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	ExcludeMidPeriodAllocations *bool `json:"exclude_mid_period_allocations,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Percentage *string `json:"percentage,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	Recurring *bool `json:"recurring,omitempty"`
	RecurringScheme *string `json:"recurring_scheme,omitempty"`
	Stackable *bool `json:"stackable,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// CouponRemoveMatch is the typed request payload for Coupon.RemoveTyped.
type CouponRemoveMatch struct {
	Id int `json:"id"`
	Subcode string `json:"subcode"`
}

// CouponCurrency is the typed data model for the coupon_currency entity.
type CouponCurrency struct {
}

// CouponCurrencyUpdateData is the typed request payload for CouponCurrency.UpdateTyped.
type CouponCurrencyUpdateData struct {
	Id int `json:"id"`
}

// CouponSubcode is the typed data model for the coupon_subcode entity.
type CouponSubcode struct {
}

// CouponSubcodeUpdateData is the typed request payload for CouponSubcode.UpdateTyped.
type CouponSubcodeUpdateData struct {
	Id int `json:"id"`
	CreatedCodes *[]any `json:"created_codes,omitempty"`
	DuplicateCodes *[]any `json:"duplicate_codes,omitempty"`
	InvalidCodes *[]any `json:"invalid_codes,omitempty"`
}

// CouponUsage is the typed data model for the coupon_usage entity.
type CouponUsage struct {
}

// CouponUsageListMatch is the typed request payload for CouponUsage.ListTyped.
type CouponUsageListMatch struct {
	Id int `json:"id"`
	ProductFamilyId int `json:"product_family_id"`
}

// CustomField is the typed data model for the custom_field entity.
type CustomField struct {
}

// CustomFieldListMatch is the typed request payload for CustomField.ListTyped.
type CustomFieldListMatch struct {
	ResourceType any `json:"resource_type"`
	DateField *any `json:"date_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ResourceId *[]any `json:"resource_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
	WithDeleted *bool `json:"with_deleted,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CustomFieldCreateData is the typed request payload for CustomField.CreateTyped.
type CustomFieldCreateData struct {
	ResourceId *int `json:"resource_id,omitempty"`
	ResourceType any `json:"resource_type"`
	CurrentPage *int `json:"current_page,omitempty"`
	DataCount *int `json:"data_count,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Enum *string `json:"enum,omitempty"`
	Id *int `json:"id,omitempty"`
	InputType *string `json:"input_type,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MetafieldId *int `json:"metafield_id,omitempty"`
	Metafields *any `json:"metafields,omitempty"`
	Name *string `json:"name,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Scope *map[string]any `json:"scope,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalPages *int `json:"total_pages,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomFieldUpdateData is the typed request payload for CustomField.UpdateTyped.
type CustomFieldUpdateData struct {
	ResourceId *int `json:"resource_id,omitempty"`
	ResourceType any `json:"resource_type"`
	CurrentPage *int `json:"current_page,omitempty"`
	DataCount *int `json:"data_count,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Enum *string `json:"enum,omitempty"`
	Id *int `json:"id,omitempty"`
	InputType *string `json:"input_type,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	MetafieldId *int `json:"metafield_id,omitempty"`
	Metafields *any `json:"metafields,omitempty"`
	Name *string `json:"name,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Scope *map[string]any `json:"scope,omitempty"`
	TotalCount *int `json:"total_count,omitempty"`
	TotalPages *int `json:"total_pages,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomFieldRemoveMatch is the typed request payload for CustomField.RemoveTyped.
type CustomFieldRemoveMatch struct {
	ResourceId *int `json:"resource_id,omitempty"`
	ResourceType any `json:"resource_type"`
	Name *string `json:"name,omitempty"`
}

// Customer is the typed data model for the customer entity.
type Customer struct {
}

// CustomerLoadMatch is the typed request payload for Customer.LoadTyped.
type CustomerLoadMatch struct {
	Id int `json:"id"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Q *string `json:"q,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address_2,omitempty"`
	BrandingThemeId *int `json:"branding_theme_id,omitempty"`
	CcEmails *string `json:"cc_emails,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	CountryName *string `json:"country_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	DefaultAutoRenewalProfileId *int `json:"default_auto_renewal_profile_id,omitempty"`
	DefaultSubscriptionGroupUid *string `json:"default_subscription_group_uid,omitempty"`
	Email *string `json:"email,omitempty"`
	EntityIdentifierKind *any `json:"entity_identifier_kind,omitempty"`
	EntityIdentifierValue *string `json:"entity_identifier_value,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	Id *int `json:"id,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Maxioid *string `json:"maxioid,omitempty"`
	Organization *string `json:"organization,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	PortalCustomerCreatedAt *string `json:"portal_customer_created_at,omitempty"`
	PortalInviteLastAcceptedAt *string `json:"portal_invite_last_accepted_at,omitempty"`
	PortalInviteLastSentAt *string `json:"portal_invite_last_sent_at,omitempty"`
	Reference *string `json:"reference,omitempty"`
	SalesforceId *string `json:"salesforce_id,omitempty"`
	State *string `json:"state,omitempty"`
	StateName *string `json:"state_name,omitempty"`
	Surcharging *bool `json:"surcharging,omitempty"`
	TaxExempt *bool `json:"tax_exempt,omitempty"`
	TaxExemptReason *string `json:"tax_exempt_reason,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VatCountry *string `json:"vat_country,omitempty"`
	VatNumber *string `json:"vat_number,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// CustomerUpdateData is the typed request payload for Customer.UpdateTyped.
type CustomerUpdateData struct {
	Id int `json:"id"`
	Address *string `json:"address,omitempty"`
	Address2 *string `json:"address_2,omitempty"`
	BrandingThemeId *int `json:"branding_theme_id,omitempty"`
	CcEmails *string `json:"cc_emails,omitempty"`
	City *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	CountryName *string `json:"country_name,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	DefaultAutoRenewalProfileId *int `json:"default_auto_renewal_profile_id,omitempty"`
	DefaultSubscriptionGroupUid *string `json:"default_subscription_group_uid,omitempty"`
	Email *string `json:"email,omitempty"`
	EntityIdentifierKind *any `json:"entity_identifier_kind,omitempty"`
	EntityIdentifierValue *string `json:"entity_identifier_value,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Maxioid *string `json:"maxioid,omitempty"`
	Organization *string `json:"organization,omitempty"`
	ParentId *int `json:"parent_id,omitempty"`
	Phone *string `json:"phone,omitempty"`
	PortalCustomerCreatedAt *string `json:"portal_customer_created_at,omitempty"`
	PortalInviteLastAcceptedAt *string `json:"portal_invite_last_accepted_at,omitempty"`
	PortalInviteLastSentAt *string `json:"portal_invite_last_sent_at,omitempty"`
	Reference *string `json:"reference,omitempty"`
	SalesforceId *string `json:"salesforce_id,omitempty"`
	State *string `json:"state,omitempty"`
	StateName *string `json:"state_name,omitempty"`
	Surcharging *bool `json:"surcharging,omitempty"`
	TaxExempt *bool `json:"tax_exempt,omitempty"`
	TaxExemptReason *string `json:"tax_exempt_reason,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	VatCountry *string `json:"vat_country,omitempty"`
	VatNumber *string `json:"vat_number,omitempty"`
	Verified *bool `json:"verified,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// CustomerRemoveMatch is the typed request payload for Customer.RemoveTyped.
type CustomerRemoveMatch struct {
	Id int `json:"id"`
}

// DelayedCancel is the typed data model for the delayed_cancel entity.
type DelayedCancel struct {
}

// DelayedCancelCreateData is the typed request payload for DelayedCancel.CreateTyped.
type DelayedCancelCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	Message *string `json:"message,omitempty"`
	Subscription map[string]any `json:"subscription"`
}

// Endpoint is the typed data model for the endpoint entity.
type Endpoint struct {
}

// EndpointListMatch is the typed request payload for Endpoint.ListTyped.
type EndpointListMatch struct {
	Id *int `json:"id,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookSubscriptions *[]any `json:"webhook_subscriptions,omitempty"`
}

// EndpointUpdateData is the typed request payload for Endpoint.UpdateTyped.
type EndpointUpdateData struct {
	EndpointId int `json:"endpoint_id"`
	Id *int `json:"id,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Url *string `json:"url,omitempty"`
	WebhookSubscriptions *[]any `json:"webhook_subscriptions,omitempty"`
}

// Entitlement is the typed data model for the entitlement entity.
type Entitlement struct {
}

// EntitlementListMatch is the typed request payload for Entitlement.ListTyped.
type EntitlementListMatch struct {
	SubscriptionId int `json:"subscription_id"`
}

// Event is the typed data model for the event entity.
type Event struct {
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	Direction *any `json:"direction,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	MaxId *int `json:"max_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SinceId *int `json:"since_id,omitempty"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Filter *[]any `json:"filter,omitempty"`
	MaxId *int `json:"max_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SinceId *int `json:"since_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
}

// EventsBasedBillingSegment is the typed data model for the events_based_billing_segment entity.
type EventsBasedBillingSegment struct {
}

// EventsBasedBillingSegmentRemoveMatch is the typed request payload for EventsBasedBillingSegment.RemoveTyped.
type EventsBasedBillingSegmentRemoveMatch struct {
	ComponentId string `json:"component_id"`
	Id float64 `json:"id"`
	PricePointId string `json:"price_point_id"`
}

// Feature is the typed data model for the feature entity.
type Feature struct {
}

// FeatureListMatch is the typed request payload for Feature.ListTyped.
type FeatureListMatch struct {
	Kind *any `json:"kind,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Q *string `json:"q,omitempty"`
	SortBy *any `json:"sort_by,omitempty"`
	SortDirection *any `json:"sort_direction,omitempty"`
	Status *any `json:"status,omitempty"`
	UpdatedFrom *string `json:"updated_from,omitempty"`
	UpdatedTo *string `json:"updated_to,omitempty"`
}

// FeatureCreateData is the typed request payload for Feature.CreateTyped.
type FeatureCreateData struct {
	ArchivedAt *string `json:"archived_at,omitempty"`
	ArchivedCount int `json:"archived_count"`
	CreatedAt *string `json:"created_at,omitempty"`
	Feature map[string]any `json:"feature"`
	FeatureKey *string `json:"feature_key,omitempty"`
	FeatureKind *any `json:"feature_kind,omitempty"`
	FeatureName *string `json:"feature_name,omitempty"`
	FeatureTemplateId *int `json:"feature_template_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Items []any `json:"items"`
	PeriodicityInterval *int `json:"periodicity_interval,omitempty"`
	PeriodicityUnit *any `json:"periodicity_unit,omitempty"`
	PricePointId *int `json:"price_point_id,omitempty"`
	PricePointType *any `json:"price_point_type,omitempty"`
	TotalCount int `json:"total_count"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// FeatureCatalogItem is the typed data model for the feature_catalog_item entity.
type FeatureCatalogItem struct {
}

// FeatureCatalogItemLoadMatch is the typed request payload for FeatureCatalogItem.LoadTyped.
type FeatureCatalogItemLoadMatch struct {
	ComponentId *int `json:"component_id,omitempty"`
	Id int `json:"id"`
	ProductId *int `json:"product_id,omitempty"`
}

// FeatureCatalogItemCreateData is the typed request payload for FeatureCatalogItem.CreateTyped.
type FeatureCatalogItemCreateData struct {
	ComponentId *int `json:"component_id,omitempty"`
	Id int `json:"id"`
	ProductId *int `json:"product_id,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Feature map[string]any `json:"feature"`
	FeatureKey *string `json:"feature_key,omitempty"`
	FeatureKind *any `json:"feature_kind,omitempty"`
	FeatureName *string `json:"feature_name,omitempty"`
	FeatureTemplateId *int `json:"feature_template_id,omitempty"`
	PeriodicityInterval *int `json:"periodicity_interval,omitempty"`
	PeriodicityUnit *any `json:"periodicity_unit,omitempty"`
	PricePointId *int `json:"price_point_id,omitempty"`
	PricePointType *any `json:"price_point_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// FeatureCatalogItemUpdateData is the typed request payload for FeatureCatalogItem.UpdateTyped.
type FeatureCatalogItemUpdateData struct {
	ComponentId *int `json:"component_id,omitempty"`
	Id int `json:"id"`
	ProductId *int `json:"product_id,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Feature *map[string]any `json:"feature,omitempty"`
	FeatureKey *string `json:"feature_key,omitempty"`
	FeatureKind *any `json:"feature_kind,omitempty"`
	FeatureName *string `json:"feature_name,omitempty"`
	FeatureTemplateId *int `json:"feature_template_id,omitempty"`
	PeriodicityInterval *int `json:"periodicity_interval,omitempty"`
	PeriodicityUnit *any `json:"periodicity_unit,omitempty"`
	PricePointId *int `json:"price_point_id,omitempty"`
	PricePointType *any `json:"price_point_type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// FeatureTemplate is the typed data model for the feature_template entity.
type FeatureTemplate struct {
}

// FeatureTemplateLoadMatch is the typed request payload for FeatureTemplate.LoadTyped.
type FeatureTemplateLoadMatch struct {
	Id int `json:"id"`
}

// FeatureTemplateCreateData is the typed request payload for FeatureTemplate.CreateTyped.
type FeatureTemplateCreateData struct {
	Id int `json:"id"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultPeriodicityInterval *int `json:"default_periodicity_interval,omitempty"`
	DefaultPeriodicityUnit *any `json:"default_periodicity_unit,omitempty"`
	DefaultValue *string `json:"default_value,omitempty"`
	Description *string `json:"description,omitempty"`
	Feature any `json:"feature"`
	Key *string `json:"key,omitempty"`
	Kind *any `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	PlansCount *int `json:"plans_count,omitempty"`
	ProductsCount *int `json:"products_count,omitempty"`
	Unit *string `json:"unit,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	ValueType *any `json:"value_type,omitempty"`
}

// FeatureTemplateUpdateData is the typed request payload for FeatureTemplate.UpdateTyped.
type FeatureTemplateUpdateData struct {
	Id int `json:"id"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultPeriodicityInterval *int `json:"default_periodicity_interval,omitempty"`
	DefaultPeriodicityUnit *any `json:"default_periodicity_unit,omitempty"`
	DefaultValue *string `json:"default_value,omitempty"`
	Description *string `json:"description,omitempty"`
	Feature *any `json:"feature,omitempty"`
	Key *string `json:"key,omitempty"`
	Kind *any `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	PlansCount *int `json:"plans_count,omitempty"`
	ProductsCount *int `json:"products_count,omitempty"`
	Unit *string `json:"unit,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	ValueType *any `json:"value_type,omitempty"`
}

// FeatureTemplateRemoveMatch is the typed request payload for FeatureTemplate.RemoveTyped.
type FeatureTemplateRemoveMatch struct {
	Id int `json:"id"`
	RemoveFromCatalog *bool `json:"remove_from_catalog,omitempty"`
}

// Insight is the typed data model for the insight entity.
type Insight struct {
}

// InsightLoadMatch is the typed request payload for Insight.LoadTyped.
type InsightLoadMatch struct {
	Direction *any `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
}

// Invoice is the typed data model for the invoice entity.
type Invoice struct {
}

// InvoiceListMatch is the typed request payload for Invoice.ListTyped.
type InvoiceListMatch struct {
	Uid string `json:"uid"`
}

// InvoiceCreateData is the typed request payload for Invoice.CreateTyped.
type InvoiceCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	Applications *[]any `json:"applications,omitempty"`
	AppliedAmount *string `json:"applied_amount,omitempty"`
	AppliedDate *string `json:"applied_date,omitempty"`
	AvataxDetails *map[string]any `json:"avatax_details,omitempty"`
	BillingAddress *any `json:"billing_address,omitempty"`
	BrandingThemeId *int `json:"branding_theme_id,omitempty"`
	CollectionMethod *any `json:"collection_method,omitempty"`
	ConsolidationLevel *any `json:"consolidation_level,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreditAmount *string `json:"credit_amount,omitempty"`
	CreditNotes []any `json:"credit_notes"`
	Credits *[]any `json:"credits,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *int `json:"customer_id,omitempty"`
	DebitAmount *string `json:"debit_amount,omitempty"`
	Debits *[]any `json:"debits,omitempty"`
	DiscountAmount *string `json:"discount_amount,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	DisplaySettings *map[string]any `json:"display_settings,omitempty"`
	DueAmount *string `json:"due_amount,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	GroupPrimarySubscriptionId *int `json:"group_primary_subscription_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Invoice *map[string]any `json:"invoice,omitempty"`
	Invoices []any `json:"invoices"`
	IssueDate *string `json:"issue_date,omitempty"`
	LineItems *[]any `json:"line_items,omitempty"`
	Memo *string `json:"memo,omitempty"`
	NetTerms *int `json:"net_terms,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginInvoices *[]any `json:"origin_invoices,omitempty"`
	PaidAmount *string `json:"paid_amount,omitempty"`
	PaidDate *string `json:"paid_date,omitempty"`
	PaidInvoices *[]any `json:"paid_invoices,omitempty"`
	ParentInvoiceId *int `json:"parent_invoice_id,omitempty"`
	ParentInvoiceNumber *int `json:"parent_invoice_number,omitempty"`
	ParentInvoiceUid *string `json:"parent_invoice_uid,omitempty"`
	Payer *map[string]any `json:"payer,omitempty"`
	PaymentInstructions *string `json:"payment_instructions,omitempty"`
	Payments *[]any `json:"payments,omitempty"`
	Prepayment *string `json:"prepayment,omitempty"`
	PreviousBalanceData *map[string]any `json:"previous_balance_data,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	PublicUrl *string `json:"public_url,omitempty"`
	PublicUrlExpiresOn *string `json:"public_url_expires_on,omitempty"`
	RecipientEmails *[]any `json:"recipient_emails,omitempty"`
	RefundAmount *string `json:"refund_amount,omitempty"`
	Refunds *[]any `json:"refunds,omitempty"`
	RemainingAmount *string `json:"remaining_amount,omitempty"`
	Role *string `json:"role,omitempty"`
	Seller *any `json:"seller,omitempty"`
	SequenceNumber *int `json:"sequence_number,omitempty"`
	ShippingAddress *any `json:"shipping_address,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	Status *any `json:"status,omitempty"`
	SubscriptionGroupId *int `json:"subscription_group_id,omitempty"`
	SubtotalAmount *string `json:"subtotal_amount,omitempty"`
	TaxAmount *string `json:"tax_amount,omitempty"`
	Taxes *[]any `json:"taxes,omitempty"`
	TotalAmount *string `json:"total_amount,omitempty"`
	TransactionTime *string `json:"transaction_time,omitempty"`
	Uid *string `json:"uid,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Void map[string]any `json:"void"`
}

// InvoiceUpdateData is the typed request payload for Invoice.UpdateTyped.
type InvoiceUpdateData struct {
	SubscriptionId int `json:"subscription_id"`
	Uid string `json:"uid"`
	Applications *[]any `json:"applications,omitempty"`
	AppliedAmount *string `json:"applied_amount,omitempty"`
	AppliedDate *string `json:"applied_date,omitempty"`
	AvataxDetails *map[string]any `json:"avatax_details,omitempty"`
	BillingAddress *any `json:"billing_address,omitempty"`
	BrandingThemeId *int `json:"branding_theme_id,omitempty"`
	CollectionMethod *any `json:"collection_method,omitempty"`
	ConsolidationLevel *any `json:"consolidation_level,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreditAmount *string `json:"credit_amount,omitempty"`
	CreditNotes *[]any `json:"credit_notes,omitempty"`
	Credits *[]any `json:"credits,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *int `json:"customer_id,omitempty"`
	DebitAmount *string `json:"debit_amount,omitempty"`
	Debits *[]any `json:"debits,omitempty"`
	DiscountAmount *string `json:"discount_amount,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	DisplaySettings *map[string]any `json:"display_settings,omitempty"`
	DueAmount *string `json:"due_amount,omitempty"`
	DueDate *string `json:"due_date,omitempty"`
	GroupPrimarySubscriptionId *int `json:"group_primary_subscription_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Invoice *map[string]any `json:"invoice,omitempty"`
	Invoices *[]any `json:"invoices,omitempty"`
	IssueDate *string `json:"issue_date,omitempty"`
	LineItems *[]any `json:"line_items,omitempty"`
	Memo *string `json:"memo,omitempty"`
	NetTerms *int `json:"net_terms,omitempty"`
	Number *string `json:"number,omitempty"`
	OriginInvoices *[]any `json:"origin_invoices,omitempty"`
	PaidAmount *string `json:"paid_amount,omitempty"`
	PaidDate *string `json:"paid_date,omitempty"`
	PaidInvoices *[]any `json:"paid_invoices,omitempty"`
	ParentInvoiceId *int `json:"parent_invoice_id,omitempty"`
	ParentInvoiceNumber *int `json:"parent_invoice_number,omitempty"`
	ParentInvoiceUid *string `json:"parent_invoice_uid,omitempty"`
	Payer *map[string]any `json:"payer,omitempty"`
	PaymentInstructions *string `json:"payment_instructions,omitempty"`
	Payments *[]any `json:"payments,omitempty"`
	Prepayment *string `json:"prepayment,omitempty"`
	PreviousBalanceData *map[string]any `json:"previous_balance_data,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	PublicUrl *string `json:"public_url,omitempty"`
	PublicUrlExpiresOn *string `json:"public_url_expires_on,omitempty"`
	RecipientEmails *[]any `json:"recipient_emails,omitempty"`
	RefundAmount *string `json:"refund_amount,omitempty"`
	Refunds *[]any `json:"refunds,omitempty"`
	RemainingAmount *string `json:"remaining_amount,omitempty"`
	Role *string `json:"role,omitempty"`
	Seller *any `json:"seller,omitempty"`
	SequenceNumber *int `json:"sequence_number,omitempty"`
	ShippingAddress *any `json:"shipping_address,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	Status *any `json:"status,omitempty"`
	SubscriptionGroupId *int `json:"subscription_group_id,omitempty"`
	SubtotalAmount *string `json:"subtotal_amount,omitempty"`
	TaxAmount *string `json:"tax_amount,omitempty"`
	Taxes *[]any `json:"taxes,omitempty"`
	TotalAmount *string `json:"total_amount,omitempty"`
	TransactionTime *string `json:"transaction_time,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Void *map[string]any `json:"void,omitempty"`
}

// InvoiceRemoveMatch is the typed request payload for Invoice.RemoveTyped.
type InvoiceRemoveMatch struct {
	SubscriptionId int `json:"subscription_id"`
	Uid string `json:"uid"`
}

// ListProformaInvoice is the typed data model for the list_proforma_invoice entity.
type ListProformaInvoice struct {
}

// ListProformaInvoiceListMatch is the typed request payload for ListProformaInvoice.ListTyped.
type ListProformaInvoiceListMatch struct {
	SubscriptionId int `json:"subscription_id"`
	Credit *bool `json:"credit,omitempty"`
	CustomField *bool `json:"custom_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	Discount *bool `json:"discount,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	LineItem *bool `json:"line_item,omitempty"`
	Page *int `json:"page,omitempty"`
	Payment *bool `json:"payment,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *any `json:"status,omitempty"`
	Taxis *bool `json:"taxis,omitempty"`
}

// ListSaleRepItem is the typed data model for the list_sale_rep_item entity.
type ListSaleRepItem struct {
}

// ListSaleRepItemListMatch is the typed request payload for ListSaleRepItem.ListTyped.
type ListSaleRepItemListMatch struct {
	SellerId string `json:"seller_id"`
	LiveMode *bool `json:"live_mode,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ListSegment is the typed data model for the list_segment entity.
type ListSegment struct {
}

// ListSegmentListMatch is the typed request payload for ListSegment.ListTyped.
type ListSegmentListMatch struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
	Filter *any `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ListSegmentCreateData is the typed request payload for ListSegment.CreateTyped.
type ListSegmentCreateData struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventBasedBillingMetricId *int `json:"event_based_billing_metric_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	SegmentProperty1Value *any `json:"segment_property_1_value,omitempty"`
	SegmentProperty2Value *any `json:"segment_property_2_value,omitempty"`
	SegmentProperty3Value *any `json:"segment_property_3_value,omitempty"`
	SegmentProperty4Value *any `json:"segment_property_4_value,omitempty"`
	Segments *[]any `json:"segments,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ListSegmentUpdateData is the typed request payload for ListSegment.UpdateTyped.
type ListSegmentUpdateData struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventBasedBillingMetricId *int `json:"event_based_billing_metric_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	SegmentProperty1Value *any `json:"segment_property_1_value,omitempty"`
	SegmentProperty2Value *any `json:"segment_property_2_value,omitempty"`
	SegmentProperty3Value *any `json:"segment_property_3_value,omitempty"`
	SegmentProperty4Value *any `json:"segment_property_4_value,omitempty"`
	Segments *[]any `json:"segments,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Offer is the typed data model for the offer entity.
type Offer struct {
}

// OfferLoadMatch is the typed request payload for Offer.LoadTyped.
type OfferLoadMatch struct {
	OfferId int `json:"offer_id"`
}

// OfferListMatch is the typed request payload for Offer.ListTyped.
type OfferListMatch struct {
	IncludeArchived *bool `json:"include_archived,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// OfferCreateData is the typed request payload for Offer.CreateTyped.
type OfferCreateData struct {
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Offer *map[string]any `json:"offer,omitempty"`
	OfferDiscounts *[]any `json:"offer_discounts,omitempty"`
	OfferItems *[]any `json:"offer_items,omitempty"`
	OfferSignupPages *[]any `json:"offer_signup_pages,omitempty"`
	Offers *[]any `json:"offers,omitempty"`
	ProductFamilyId *int `json:"product_family_id,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProductPriceInCents *int `json:"product_price_in_cents,omitempty"`
	ProductPricePointId *int `json:"product_price_point_id,omitempty"`
	ProductPricePointName *string `json:"product_price_point_name,omitempty"`
	ProductRevisableNumber *int `json:"product_revisable_number,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OfferUpdateData is the typed request payload for Offer.UpdateTyped.
type OfferUpdateData struct {
	Id int `json:"id"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Handle *string `json:"handle,omitempty"`
	Name *string `json:"name,omitempty"`
	Offer *map[string]any `json:"offer,omitempty"`
	OfferDiscounts *[]any `json:"offer_discounts,omitempty"`
	OfferItems *[]any `json:"offer_items,omitempty"`
	OfferSignupPages *[]any `json:"offer_signup_pages,omitempty"`
	Offers *[]any `json:"offers,omitempty"`
	ProductFamilyId *int `json:"product_family_id,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	ProductId *int `json:"product_id,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	ProductPriceInCents *int `json:"product_price_in_cents,omitempty"`
	ProductPricePointId *int `json:"product_price_point_id,omitempty"`
	ProductPricePointName *string `json:"product_price_point_name,omitempty"`
	ProductRevisableNumber *int `json:"product_revisable_number,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OneTimeToken is the typed data model for the one_time_token entity.
type OneTimeToken struct {
}

// OneTimeTokenLoadMatch is the typed request payload for OneTimeToken.LoadTyped.
type OneTimeTokenLoadMatch struct {
	ChargifyToken string `json:"chargify_token"`
}

// PaymentProfile is the typed data model for the payment_profile entity.
type PaymentProfile struct {
}

// PaymentProfileLoadMatch is the typed request payload for PaymentProfile.LoadTyped.
type PaymentProfileLoadMatch struct {
	PaymentProfileId int `json:"payment_profile_id"`
}

// PaymentProfileListMatch is the typed request payload for PaymentProfile.ListTyped.
type PaymentProfileListMatch struct {
	CustomerId *int `json:"customer_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// PaymentProfileCreateData is the typed request payload for PaymentProfile.CreateTyped.
type PaymentProfileCreateData struct {
	Id *string `json:"id,omitempty"`
	PaymentProfile *map[string]any `json:"payment_profile,omitempty"`
}

// PaymentProfileUpdateData is the typed request payload for PaymentProfile.UpdateTyped.
type PaymentProfileUpdateData struct {
	BankAccountId int `json:"bank_account_id"`
	Id *string `json:"id,omitempty"`
	PaymentProfile *map[string]any `json:"payment_profile,omitempty"`
}

// PaymentProfileRemoveMatch is the typed request payload for PaymentProfile.RemoveTyped.
type PaymentProfileRemoveMatch struct {
	PaymentProfileId int `json:"payment_profile_id"`
	SubscriptionGroupId *string `json:"subscription_group_id,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
}

// Prepayment is the typed data model for the prepayment entity.
type Prepayment struct {
}

// PrepaymentCreateData is the typed request payload for Prepayment.CreateTyped.
type PrepaymentCreateData struct {
	Id int `json:"id"`
	SubscriptionId int `json:"subscription_id"`
}

// Product is the typed data model for the product entity.
type Product struct {
}

// ProductLoadMatch is the typed request payload for Product.LoadTyped.
type ProductLoadMatch struct {
	ApiHandle string `json:"api_handle"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Include *any `json:"include,omitempty"`
	IncludeArchived *bool `json:"include_archived,omitempty"`
	IncludeFeature *bool `json:"include_feature,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
}

// ProductCreateData is the typed request payload for Product.CreateTyped.
type ProductCreateData struct {
	ProductFamilyId string `json:"product_family_id"`
	Product map[string]any `json:"product"`
}

// ProductUpdateData is the typed request payload for Product.UpdateTyped.
type ProductUpdateData struct {
	ProductId int `json:"product_id"`
	Product *map[string]any `json:"product,omitempty"`
}

// ProductRemoveMatch is the typed request payload for Product.RemoveTyped.
type ProductRemoveMatch struct {
	ProductId int `json:"product_id"`
}

// ProductFamily is the typed data model for the product_family entity.
type ProductFamily struct {
}

// ProductFamilyLoadMatch is the typed request payload for ProductFamily.LoadTyped.
type ProductFamilyLoadMatch struct {
	Id int `json:"id"`
}

// ProductFamilyListMatch is the typed request payload for ProductFamily.ListTyped.
type ProductFamilyListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
}

// ProductFamilyCreateData is the typed request payload for ProductFamily.CreateTyped.
type ProductFamilyCreateData struct {
	Id *string `json:"id,omitempty"`
	ProductFamily *map[string]any `json:"product_family,omitempty"`
}

// ProductFeature is the typed data model for the product_feature entity.
type ProductFeature struct {
}

// ProductFeatureRemoveMatch is the typed request payload for ProductFeature.RemoveTyped.
type ProductFeatureRemoveMatch struct {
	Id int `json:"id"`
	ProductId int `json:"product_id"`
	DestroyEntitlement *bool `json:"destroy_entitlement,omitempty"`
}

// ProductPricePoint is the typed data model for the product_price_point entity.
type ProductPricePoint struct {
}

// ProductPricePointLoadMatch is the typed request payload for ProductPricePoint.LoadTyped.
type ProductPricePointLoadMatch struct {
	PricePointId string `json:"price_point_id"`
	ProductId string `json:"product_id"`
	CurrencyPrice *bool `json:"currency_price,omitempty"`
}

// ProductPricePointListMatch is the typed request payload for ProductPricePoint.ListTyped.
type ProductPricePointListMatch struct {
	Direction *any `json:"direction,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Include *any `json:"include,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ProductPricePointCreateData is the typed request payload for ProductPricePoint.CreateTyped.
type ProductPricePointCreateData struct {
	Id string `json:"id"`
	PricePoint map[string]any `json:"price_point"`
	PricePoints *[]any `json:"price_points,omitempty"`
	Product map[string]any `json:"product"`
}

// ProductPricePointUpdateData is the typed request payload for ProductPricePoint.UpdateTyped.
type ProductPricePointUpdateData struct {
	PricePointId string `json:"price_point_id"`
	ProductId string `json:"product_id"`
	Id *string `json:"id,omitempty"`
	PricePoint *map[string]any `json:"price_point,omitempty"`
	PricePoints *[]any `json:"price_points,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
}

// ProductPricePointRemoveMatch is the typed request payload for ProductPricePoint.RemoveTyped.
type ProductPricePointRemoveMatch struct {
	PricePointId string `json:"price_point_id"`
	ProductId string `json:"product_id"`
}

// ProformaInvoice is the typed data model for the proforma_invoice entity.
type ProformaInvoice struct {
}

// ProformaInvoiceListMatch is the typed request payload for ProformaInvoice.ListTyped.
type ProformaInvoiceListMatch struct {
	ProformaInvoiceUid string `json:"proforma_invoice_uid"`
}

// ProformaInvoiceCreateData is the typed request payload for ProformaInvoice.CreateTyped.
type ProformaInvoiceCreateData struct {
	AvailableActions *map[string]any `json:"available_actions,omitempty"`
	BillingAddress *map[string]any `json:"billing_address,omitempty"`
	CollectionMethod *any `json:"collection_method,omitempty"`
	ConsolidationLevel *any `json:"consolidation_level,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreditAmount *string `json:"credit_amount,omitempty"`
	Credits *[]any `json:"credits,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CustomFields *[]any `json:"custom_fields,omitempty"`
	Customer *any `json:"customer,omitempty"`
	CustomerId *int `json:"customer_id,omitempty"`
	DeliveryDate *string `json:"delivery_date,omitempty"`
	DiscountAmount *string `json:"discount_amount,omitempty"`
	Discounts *[]any `json:"discounts,omitempty"`
	DueAmount *string `json:"due_amount,omitempty"`
	Id *string `json:"id,omitempty"`
	LineItems *[]any `json:"line_items,omitempty"`
	Memo *string `json:"memo,omitempty"`
	Number *int `json:"number,omitempty"`
	PaidAmount *string `json:"paid_amount,omitempty"`
	PaymentInstructions *string `json:"payment_instructions,omitempty"`
	Payments *[]any `json:"payments,omitempty"`
	ProductFamilyName *string `json:"product_family_name,omitempty"`
	ProductName *string `json:"product_name,omitempty"`
	PublicUrl *string `json:"public_url,omitempty"`
	RefundAmount *string `json:"refund_amount,omitempty"`
	Role *any `json:"role,omitempty"`
	Seller *any `json:"seller,omitempty"`
	SequenceNumber *int `json:"sequence_number,omitempty"`
	ShippingAddress *map[string]any `json:"shipping_address,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	Status *string `json:"status,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
	SubtotalAmount *string `json:"subtotal_amount,omitempty"`
	TaxAmount *string `json:"tax_amount,omitempty"`
	Taxes *[]any `json:"taxes,omitempty"`
	TotalAmount *string `json:"total_amount,omitempty"`
	Uid *string `json:"uid,omitempty"`
}

// ReasonCode is the typed data model for the reason_code entity.
type ReasonCode struct {
}

// ReasonCodeLoadMatch is the typed request payload for ReasonCode.LoadTyped.
type ReasonCodeLoadMatch struct {
	ReasonCodeId int `json:"reason_code_id"`
}

// ReasonCodeListMatch is the typed request payload for ReasonCode.ListTyped.
type ReasonCodeListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ReasonCodeCreateData is the typed request payload for ReasonCode.CreateTyped.
type ReasonCodeCreateData struct {
	Code *string `json:"code,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Position *int `json:"position,omitempty"`
	ReasonCode map[string]any `json:"reason_code"`
	SiteId *int `json:"site_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ReasonCodeUpdateData is the typed request payload for ReasonCode.UpdateTyped.
type ReasonCodeUpdateData struct {
	ReasonCodeId int `json:"reason_code_id"`
	Code *string `json:"code,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Position *int `json:"position,omitempty"`
	ReasonCode *map[string]any `json:"reason_code,omitempty"`
	SiteId *int `json:"site_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ReasonCodeRemoveMatch is the typed request payload for ReasonCode.RemoveTyped.
type ReasonCodeRemoveMatch struct {
	ReasonCodeId int `json:"reason_code_id"`
}

// ReferralCode is the typed data model for the referral_code entity.
type ReferralCode struct {
}

// ReferralCodeLoadMatch is the typed request payload for ReferralCode.LoadTyped.
type ReferralCodeLoadMatch struct {
	Code string `json:"code"`
}

// SaleRepSetting is the typed data model for the sale_rep_setting entity.
type SaleRepSetting struct {
}

// SaleRepSettingListMatch is the typed request payload for SaleRepSetting.ListTyped.
type SaleRepSettingListMatch struct {
	SellerId string `json:"seller_id"`
	LiveMode *bool `json:"live_mode,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SalesCommission is the typed data model for the sales_commission entity.
type SalesCommission struct {
}

// SalesCommissionListMatch is the typed request payload for SalesCommission.ListTyped.
type SalesCommissionListMatch struct {
	SalesRepId string `json:"sales_rep_id"`
	SellerId string `json:"seller_id"`
	LiveMode *bool `json:"live_mode,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// Segment is the typed data model for the segment entity.
type Segment struct {
}

// SegmentCreateData is the typed request payload for Segment.CreateTyped.
type SegmentCreateData struct {
	ComponentId string `json:"component_id"`
	PricePointId string `json:"price_point_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventBasedBillingMetricId *int `json:"event_based_billing_metric_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	SegmentProperty1Value *any `json:"segment_property_1_value,omitempty"`
	SegmentProperty2Value *any `json:"segment_property_2_value,omitempty"`
	SegmentProperty3Value *any `json:"segment_property_3_value,omitempty"`
	SegmentProperty4Value *any `json:"segment_property_4_value,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SegmentUpdateData is the typed request payload for Segment.UpdateTyped.
type SegmentUpdateData struct {
	ComponentId string `json:"component_id"`
	Id float64 `json:"id"`
	PricePointId string `json:"price_point_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventBasedBillingMetricId *int `json:"event_based_billing_metric_id,omitempty"`
	Prices *[]any `json:"prices,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	SegmentProperty1Value *any `json:"segment_property_1_value,omitempty"`
	SegmentProperty2Value *any `json:"segment_property_2_value,omitempty"`
	SegmentProperty3Value *any `json:"segment_property_3_value,omitempty"`
	SegmentProperty4Value *any `json:"segment_property_4_value,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SignupProformaPreview is the typed data model for the signup_proforma_preview entity.
type SignupProformaPreview struct {
}

// SignupProformaPreviewCreateData is the typed request payload for SignupProformaPreview.CreateTyped.
type SignupProformaPreviewCreateData struct {
	Include *any `json:"include,omitempty"`
}

// Site is the typed data model for the site entity.
type Site struct {
}

// SiteLoadMatch is the typed request payload for Site.LoadTyped.
type SiteLoadMatch struct {
	ChargifyJsKeys *[]any `json:"chargify_js_keys,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Site *map[string]any `json:"site,omitempty"`
}

// SiteListMatch is the typed request payload for Site.ListTyped.
type SiteListMatch struct {
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SiteCreateData is the typed request payload for Site.CreateTyped.
type SiteCreateData struct {
	CleanupScope *any `json:"cleanup_scope,omitempty"`
	ChargifyJsKeys *[]any `json:"chargify_js_keys,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Site map[string]any `json:"site"`
}

// Subscription is the typed data model for the subscription entity.
type Subscription struct {
}

// SubscriptionLoadMatch is the typed request payload for Subscription.LoadTyped.
type SubscriptionLoadMatch struct {
	SubscriptionId int `json:"subscription_id"`
	Include *[]any `json:"include,omitempty"`
}

// SubscriptionListMatch is the typed request payload for Subscription.ListTyped.
type SubscriptionListMatch struct {
	BrandingThemeId *int `json:"branding_theme_id,omitempty"`
	CollectionMethod *any `json:"collection_method,omitempty"`
	Coupon *int `json:"coupon,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CustomerId *int `json:"customer_id,omitempty"`
	DateField *any `json:"date_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	DunningExemption *bool `json:"dunning_exemption,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	GroupStatus *any `json:"group_status,omitempty"`
	Include *[]any `json:"include,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Page *int `json:"page,omitempty"`
	PaymentGateway *string `json:"payment_gateway,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Product *any `json:"product,omitempty"`
	ProductPricePointId *int `json:"product_price_point_id,omitempty"`
	Q *string `json:"q,omitempty"`
	QScope *any `json:"q_scope,omitempty"`
	Sort *any `json:"sort,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
	State *any `json:"state,omitempty"`
}

// SubscriptionCreateData is the typed request payload for Subscription.CreateTyped.
type SubscriptionCreateData struct {
	ActivatedAt *string `json:"activated_at,omitempty"`
	AutomaticallyResumeAt *string `json:"automatically_resume_at,omitempty"`
	BalanceInCents *int `json:"balance_in_cents,omitempty"`
	BankAccount map[string]any `json:"bank_account"`
	CancelAtEndOfPeriod *bool `json:"cancel_at_end_of_period,omitempty"`
	CanceledAt *string `json:"canceled_at,omitempty"`
	CancellationMessage *string `json:"cancellation_message,omitempty"`
	CancellationMethod *any `json:"cancellation_method,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	CouponCodes *[]any `json:"coupon_codes,omitempty"`
	CouponUseCount *int `json:"coupon_use_count,omitempty"`
	CouponUsesAllowed *int `json:"coupon_uses_allowed,omitempty"`
	Coupons *[]any `json:"coupons,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreditBalanceInCents *int `json:"credit_balance_in_cents,omitempty"`
	CreditCard *any `json:"credit_card,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentBillingAmountInCents *int `json:"current_billing_amount_in_cents,omitempty"`
	CurrentPeriodEndsAt *string `json:"current_period_ends_at,omitempty"`
	CurrentPeriodStartedAt *string `json:"current_period_started_at,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	DelayedCancelAt *string `json:"delayed_cancel_at,omitempty"`
	DunningCommunicationDelayEnabled *bool `json:"dunning_communication_delay_enabled,omitempty"`
	DunningCommunicationDelayTimeZone *string `json:"dunning_communication_delay_time_zone,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Group *any `json:"group,omitempty"`
	Id *int `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	NetTerms *int `json:"net_terms,omitempty"`
	NextAssessmentAt *string `json:"next_assessment_at,omitempty"`
	NextProductHandle *string `json:"next_product_handle,omitempty"`
	NextProductId *int `json:"next_product_id,omitempty"`
	NextProductPricePointId *int `json:"next_product_price_point_id,omitempty"`
	OfferId *int `json:"offer_id,omitempty"`
	OnHoldAt *string `json:"on_hold_at,omitempty"`
	PayerId *int `json:"payer_id,omitempty"`
	PaymentCollectionMethod *any `json:"payment_collection_method,omitempty"`
	PaymentType *string `json:"payment_type,omitempty"`
	PrepaidConfiguration *any `json:"prepaid_configuration,omitempty"`
	PrepaidDunning *bool `json:"prepaid_dunning,omitempty"`
	PrepaymentBalanceInCents *int `json:"prepayment_balance_in_cents,omitempty"`
	PreviousState *any `json:"previous_state,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
	ProductPriceInCents *int `json:"product_price_in_cents,omitempty"`
	ProductPricePointId *int `json:"product_price_point_id,omitempty"`
	ProductPricePointType *any `json:"product_price_point_type,omitempty"`
	ProductVersionNumber *int `json:"product_version_number,omitempty"`
	ReasonCode *string `json:"reason_code,omitempty"`
	ReceivesInvoiceEmails *bool `json:"receives_invoice_emails,omitempty"`
	Reference *string `json:"reference,omitempty"`
	ReferralCode *string `json:"referral_code,omitempty"`
	ScheduledCancellationAt *string `json:"scheduled_cancellation_at,omitempty"`
	SelfServicePageToken *string `json:"self_service_page_token,omitempty"`
	SignupPaymentId *int `json:"signup_payment_id,omitempty"`
	SignupRevenue *string `json:"signup_revenue,omitempty"`
	SnapDay *string `json:"snap_day,omitempty"`
	State *any `json:"state,omitempty"`
	StoredCredentialTransactionId *int `json:"stored_credential_transaction_id,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	TotalRevenueInCents *int `json:"total_revenue_in_cents,omitempty"`
	TrialEndedAt *string `json:"trial_ended_at,omitempty"`
	TrialStartedAt *string `json:"trial_started_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SubscriptionUpdateData is the typed request payload for Subscription.UpdateTyped.
type SubscriptionUpdateData struct {
	SubscriptionId int `json:"subscription_id"`
	ActivatedAt *string `json:"activated_at,omitempty"`
	AutomaticallyResumeAt *string `json:"automatically_resume_at,omitempty"`
	BalanceInCents *int `json:"balance_in_cents,omitempty"`
	BankAccount *map[string]any `json:"bank_account,omitempty"`
	CancelAtEndOfPeriod *bool `json:"cancel_at_end_of_period,omitempty"`
	CanceledAt *string `json:"canceled_at,omitempty"`
	CancellationMessage *string `json:"cancellation_message,omitempty"`
	CancellationMethod *any `json:"cancellation_method,omitempty"`
	CouponCode *string `json:"coupon_code,omitempty"`
	CouponCodes *[]any `json:"coupon_codes,omitempty"`
	CouponUseCount *int `json:"coupon_use_count,omitempty"`
	CouponUsesAllowed *int `json:"coupon_uses_allowed,omitempty"`
	Coupons *[]any `json:"coupons,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreditBalanceInCents *int `json:"credit_balance_in_cents,omitempty"`
	CreditCard *any `json:"credit_card,omitempty"`
	Currency *string `json:"currency,omitempty"`
	CurrentBillingAmountInCents *int `json:"current_billing_amount_in_cents,omitempty"`
	CurrentPeriodEndsAt *string `json:"current_period_ends_at,omitempty"`
	CurrentPeriodStartedAt *string `json:"current_period_started_at,omitempty"`
	Customer *map[string]any `json:"customer,omitempty"`
	DelayedCancelAt *string `json:"delayed_cancel_at,omitempty"`
	DunningCommunicationDelayEnabled *bool `json:"dunning_communication_delay_enabled,omitempty"`
	DunningCommunicationDelayTimeZone *string `json:"dunning_communication_delay_time_zone,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Group *any `json:"group,omitempty"`
	Id *int `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	NetTerms *int `json:"net_terms,omitempty"`
	NextAssessmentAt *string `json:"next_assessment_at,omitempty"`
	NextProductHandle *string `json:"next_product_handle,omitempty"`
	NextProductId *int `json:"next_product_id,omitempty"`
	NextProductPricePointId *int `json:"next_product_price_point_id,omitempty"`
	OfferId *int `json:"offer_id,omitempty"`
	OnHoldAt *string `json:"on_hold_at,omitempty"`
	PayerId *int `json:"payer_id,omitempty"`
	PaymentCollectionMethod *any `json:"payment_collection_method,omitempty"`
	PaymentType *string `json:"payment_type,omitempty"`
	PrepaidConfiguration *any `json:"prepaid_configuration,omitempty"`
	PrepaidDunning *bool `json:"prepaid_dunning,omitempty"`
	PrepaymentBalanceInCents *int `json:"prepayment_balance_in_cents,omitempty"`
	PreviousState *any `json:"previous_state,omitempty"`
	Product *map[string]any `json:"product,omitempty"`
	ProductPriceInCents *int `json:"product_price_in_cents,omitempty"`
	ProductPricePointId *int `json:"product_price_point_id,omitempty"`
	ProductPricePointType *any `json:"product_price_point_type,omitempty"`
	ProductVersionNumber *int `json:"product_version_number,omitempty"`
	ReasonCode *string `json:"reason_code,omitempty"`
	ReceivesInvoiceEmails *bool `json:"receives_invoice_emails,omitempty"`
	Reference *string `json:"reference,omitempty"`
	ReferralCode *string `json:"referral_code,omitempty"`
	ScheduledCancellationAt *string `json:"scheduled_cancellation_at,omitempty"`
	SelfServicePageToken *string `json:"self_service_page_token,omitempty"`
	SignupPaymentId *int `json:"signup_payment_id,omitempty"`
	SignupRevenue *string `json:"signup_revenue,omitempty"`
	SnapDay *string `json:"snap_day,omitempty"`
	State *any `json:"state,omitempty"`
	StoredCredentialTransactionId *int `json:"stored_credential_transaction_id,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	TotalRevenueInCents *int `json:"total_revenue_in_cents,omitempty"`
	TrialEndedAt *string `json:"trial_ended_at,omitempty"`
	TrialStartedAt *string `json:"trial_started_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SubscriptionRemoveMatch is the typed request payload for Subscription.RemoveTyped.
type SubscriptionRemoveMatch struct {
	Id int `json:"id"`
	CouponCode *string `json:"coupon_code,omitempty"`
}

// SubscriptionComponent is the typed data model for the subscription_component entity.
type SubscriptionComponent struct {
}

// SubscriptionComponentLoadMatch is the typed request payload for SubscriptionComponent.LoadTyped.
type SubscriptionComponentLoadMatch struct {
	ComponentId int `json:"component_id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionComponentListMatch is the typed request payload for SubscriptionComponent.ListTyped.
type SubscriptionComponentListMatch struct {
	DateField *any `json:"date_field,omitempty"`
	Direction *any `json:"direction,omitempty"`
	EndDate *string `json:"end_date,omitempty"`
	EndDatetime *string `json:"end_datetime,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Include *any `json:"include,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	PricePointId *string `json:"price_point_id,omitempty"`
	ProductFamilyId *[]any `json:"product_family_id,omitempty"`
	Sort *any `json:"sort,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	StartDatetime *string `json:"start_datetime,omitempty"`
	SubscriptionId *[]any `json:"subscription_id,omitempty"`
}

// SubscriptionComponentCreateData is the typed request payload for SubscriptionComponent.CreateTyped.
type SubscriptionComponentCreateData struct {
	ApiHandle string `json:"api_handle"`
	StoreUid *string `json:"store_uid,omitempty"`
	AllocatedQuantity *any `json:"allocated_quantity,omitempty"`
	Allocation *map[string]any `json:"allocation,omitempty"`
	AllocationPreview *map[string]any `json:"allocation_preview,omitempty"`
	AllowFractionalQuantities *bool `json:"allow_fractional_quantities,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Component *map[string]any `json:"component,omitempty"`
	ComponentHandle *string `json:"component_handle,omitempty"`
	ComponentId *int `json:"component_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayOnHostedPage *bool `json:"display_on_hosted_page,omitempty"`
	DowngradeCredit *any `json:"downgrade_credit,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	HistoricUsages *[]any `json:"historic_usages,omitempty"`
	Id *int `json:"id,omitempty"`
	Interval *int `json:"interval,omitempty"`
	IntervalUnit *any `json:"interval_unit,omitempty"`
	Kind *any `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	PricePointHandle *string `json:"price_point_handle,omitempty"`
	PricePointId *int `json:"price_point_id,omitempty"`
	PricePointName *string `json:"price_point_name,omitempty"`
	PricePointType *any `json:"price_point_type,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	ProductFamilyHandle *string `json:"product_family_handle,omitempty"`
	ProductFamilyId *int `json:"product_family_id,omitempty"`
	Recurring *bool `json:"recurring,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
	UnitBalance *any `json:"unit_balance,omitempty"`
	UnitName *string `json:"unit_name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpgradeCharge *any `json:"upgrade_charge,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// SubscriptionComponentUpdateData is the typed request payload for SubscriptionComponent.UpdateTyped.
type SubscriptionComponentUpdateData struct {
	AllocationId int `json:"allocation_id"`
	ComponentId int `json:"component_id"`
	SubscriptionId int `json:"subscription_id"`
	AllocatedQuantity *any `json:"allocated_quantity,omitempty"`
	Allocation *map[string]any `json:"allocation,omitempty"`
	AllocationPreview *map[string]any `json:"allocation_preview,omitempty"`
	AllowFractionalQuantities *bool `json:"allow_fractional_quantities,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	Component *map[string]any `json:"component,omitempty"`
	ComponentHandle *string `json:"component_handle,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayOnHostedPage *bool `json:"display_on_hosted_page,omitempty"`
	DowngradeCredit *any `json:"downgrade_credit,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	HistoricUsages *[]any `json:"historic_usages,omitempty"`
	Id *int `json:"id,omitempty"`
	Interval *int `json:"interval,omitempty"`
	IntervalUnit *any `json:"interval_unit,omitempty"`
	Kind *any `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
	PricePointHandle *string `json:"price_point_handle,omitempty"`
	PricePointId *int `json:"price_point_id,omitempty"`
	PricePointName *string `json:"price_point_name,omitempty"`
	PricePointType *any `json:"price_point_type,omitempty"`
	PricingScheme *any `json:"pricing_scheme,omitempty"`
	ProductFamilyHandle *string `json:"product_family_handle,omitempty"`
	ProductFamilyId *int `json:"product_family_id,omitempty"`
	Recurring *bool `json:"recurring,omitempty"`
	Subscription *map[string]any `json:"subscription,omitempty"`
	UnitBalance *any `json:"unit_balance,omitempty"`
	UnitName *string `json:"unit_name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpgradeCharge *any `json:"upgrade_charge,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
	UseSiteExchangeRate *bool `json:"use_site_exchange_rate,omitempty"`
}

// SubscriptionComponentRemoveMatch is the typed request payload for SubscriptionComponent.RemoveTyped.
type SubscriptionComponentRemoveMatch struct {
	AllocationId int `json:"allocation_id"`
	ComponentId int `json:"component_id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionGroup is the typed data model for the subscription_group entity.
type SubscriptionGroup struct {
}

// SubscriptionGroupListMatch is the typed request payload for SubscriptionGroup.ListTyped.
type SubscriptionGroupListMatch struct {
	Include *[]any `json:"include,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SubscriptionGroupCreateData is the typed request payload for SubscriptionGroup.CreateTyped.
type SubscriptionGroupCreateData struct {
	Id *string `json:"id,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	SubscriptionGroup *map[string]any `json:"subscription_group,omitempty"`
	SubscriptionGroups *[]any `json:"subscription_groups,omitempty"`
}

// SubscriptionGroupUpdateData is the typed request payload for SubscriptionGroup.UpdateTyped.
type SubscriptionGroupUpdateData struct {
	Uid string `json:"uid"`
	Id *string `json:"id,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	SubscriptionGroup *map[string]any `json:"subscription_group,omitempty"`
	SubscriptionGroups *[]any `json:"subscription_groups,omitempty"`
}

// SubscriptionGroupRemoveMatch is the typed request payload for SubscriptionGroup.RemoveTyped.
type SubscriptionGroupRemoveMatch struct {
	Id int `json:"id"`
}

// SubscriptionGroupInvoiceAccount is the typed data model for the subscription_group_invoice_account entity.
type SubscriptionGroupInvoiceAccount struct {
}

// SubscriptionGroupInvoiceAccountListMatch is the typed request payload for SubscriptionGroupInvoiceAccount.ListTyped.
type SubscriptionGroupInvoiceAccountListMatch struct {
	Id string `json:"id"`
	Filter *any `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SubscriptionGroupInvoiceAccountCreateData is the typed request payload for SubscriptionGroupInvoiceAccount.CreateTyped.
type SubscriptionGroupInvoiceAccountCreateData struct {
	Id string `json:"id"`
}

// SubscriptionGroupSignup is the typed data model for the subscription_group_signup entity.
type SubscriptionGroupSignup struct {
}

// SubscriptionGroupSignupCreateData is the typed request payload for SubscriptionGroupSignup.CreateTyped.
type SubscriptionGroupSignupCreateData struct {
}

// SubscriptionGroupStatus is the typed data model for the subscription_group_status entity.
type SubscriptionGroupStatus struct {
}

// SubscriptionGroupStatusCreateData is the typed request payload for SubscriptionGroupStatus.CreateTyped.
type SubscriptionGroupStatusCreateData struct {
	Id string `json:"id"`
}

// SubscriptionGroupStatusRemoveMatch is the typed request payload for SubscriptionGroupStatus.RemoveTyped.
type SubscriptionGroupStatusRemoveMatch struct {
	Id string `json:"id"`
}

// SubscriptionInvoiceAccount is the typed data model for the subscription_invoice_account entity.
type SubscriptionInvoiceAccount struct {
}

// SubscriptionInvoiceAccountListMatch is the typed request payload for SubscriptionInvoiceAccount.ListTyped.
type SubscriptionInvoiceAccountListMatch struct {
	SubscriptionId int `json:"subscription_id"`
	Direction *any `json:"direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SubscriptionInvoiceAccountCreateData is the typed request payload for SubscriptionInvoiceAccount.CreateTyped.
type SubscriptionInvoiceAccountCreateData struct {
	Id int `json:"id"`
	ServiceCredits *[]any `json:"service_credits,omitempty"`
}

// SubscriptionMrr is the typed data model for the subscription_mrr entity.
type SubscriptionMrr struct {
}

// SubscriptionMrrListMatch is the typed request payload for SubscriptionMrr.ListTyped.
type SubscriptionMrrListMatch struct {
	AtTime *string `json:"at_time,omitempty"`
	Direction *any `json:"direction,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SubscriptionNote is the typed data model for the subscription_note entity.
type SubscriptionNote struct {
}

// SubscriptionNoteLoadMatch is the typed request payload for SubscriptionNote.LoadTyped.
type SubscriptionNoteLoadMatch struct {
	NoteId int `json:"note_id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionNoteListMatch is the typed request payload for SubscriptionNote.ListTyped.
type SubscriptionNoteListMatch struct {
	Id int `json:"id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// SubscriptionNoteCreateData is the typed request payload for SubscriptionNote.CreateTyped.
type SubscriptionNoteCreateData struct {
	Id int `json:"id"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Note map[string]any `json:"note"`
	Sticky *bool `json:"sticky,omitempty"`
	SubscriptionId *int `json:"subscription_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SubscriptionNoteUpdateData is the typed request payload for SubscriptionNote.UpdateTyped.
type SubscriptionNoteUpdateData struct {
	NoteId int `json:"note_id"`
	SubscriptionId int `json:"subscription_id"`
	Body *string `json:"body,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Note *map[string]any `json:"note,omitempty"`
	Sticky *bool `json:"sticky,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SubscriptionNoteRemoveMatch is the typed request payload for SubscriptionNote.RemoveTyped.
type SubscriptionNoteRemoveMatch struct {
	NoteId int `json:"note_id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionProduct is the typed data model for the subscription_product entity.
type SubscriptionProduct struct {
}

// SubscriptionProductCreateData is the typed request payload for SubscriptionProduct.CreateTyped.
type SubscriptionProductCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	Id *string `json:"id,omitempty"`
	Migration map[string]any `json:"migration"`
}

// SubscriptionRenewal is the typed data model for the subscription_renewal entity.
type SubscriptionRenewal struct {
}

// SubscriptionRenewalLoadMatch is the typed request payload for SubscriptionRenewal.LoadTyped.
type SubscriptionRenewalLoadMatch struct {
	Id int `json:"id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionRenewalListMatch is the typed request payload for SubscriptionRenewal.ListTyped.
type SubscriptionRenewalListMatch struct {
	Id int `json:"id"`
	Status *any `json:"status,omitempty"`
}

// SubscriptionRenewalCreateData is the typed request payload for SubscriptionRenewal.CreateTyped.
type SubscriptionRenewalCreateData struct {
	ScheduledRenewalId int `json:"scheduled_renewal_id"`
	SubscriptionId int `json:"subscription_id"`
	Id *string `json:"id,omitempty"`
	ScheduledRenewalConfiguration *map[string]any `json:"scheduled_renewal_configuration,omitempty"`
	ScheduledRenewalConfigurationItem *map[string]any `json:"scheduled_renewal_configuration_item,omitempty"`
}

// SubscriptionRenewalUpdateData is the typed request payload for SubscriptionRenewal.UpdateTyped.
type SubscriptionRenewalUpdateData struct {
	Id *int `json:"id,omitempty"`
	ScheduledRenewalId *int `json:"scheduled_renewal_id,omitempty"`
	SubscriptionId int `json:"subscription_id"`
	ScheduledRenewalConfiguration *map[string]any `json:"scheduled_renewal_configuration,omitempty"`
	ScheduledRenewalConfigurationItem *map[string]any `json:"scheduled_renewal_configuration_item,omitempty"`
}

// SubscriptionRenewalRemoveMatch is the typed request payload for SubscriptionRenewal.RemoveTyped.
type SubscriptionRenewalRemoveMatch struct {
	Id int `json:"id"`
	ScheduledRenewalId int `json:"scheduled_renewal_id"`
	SubscriptionId int `json:"subscription_id"`
}

// SubscriptionStatus is the typed data model for the subscription_status entity.
type SubscriptionStatus struct {
}

// SubscriptionStatusCreateData is the typed request payload for SubscriptionStatus.CreateTyped.
type SubscriptionStatusCreateData struct {
	SubscriptionId int `json:"subscription_id"`
	Id *string `json:"id,omitempty"`
	RenewalPreview *map[string]any `json:"renewal_preview,omitempty"`
}

// SubscriptionStatusUpdateData is the typed request payload for SubscriptionStatus.UpdateTyped.
type SubscriptionStatusUpdateData struct {
	Id int `json:"id"`
	RenewalPreview *map[string]any `json:"renewal_preview,omitempty"`
}

// SubscriptionStatusRemoveMatch is the typed request payload for SubscriptionStatus.RemoveTyped.
type SubscriptionStatusRemoveMatch struct {
	SubscriptionId int `json:"subscription_id"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
}

// UsageListMatch is the typed request payload for Usage.ListTyped.
type UsageListMatch struct {
	ComponentId string `json:"component_id"`
	SubscriptionIdOrReference any `json:"subscription_id_or_reference"`
	MaxId *int `json:"max_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SinceDate *string `json:"since_date,omitempty"`
	SinceId *int `json:"since_id,omitempty"`
	UntilDate *string `json:"until_date,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	Order *any `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	SinceDate *string `json:"since_date,omitempty"`
	Status *any `json:"status,omitempty"`
	Subscription *int `json:"subscription,omitempty"`
	UntilDate *string `json:"until_date,omitempty"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Endpoint *map[string]any `json:"endpoint,omitempty"`
	Webhook *map[string]any `json:"webhook,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	Endpoint *map[string]any `json:"endpoint,omitempty"`
	Webhook *map[string]any `json:"webhook,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
