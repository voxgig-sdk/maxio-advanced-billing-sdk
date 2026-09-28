package voxgigmaxioadvancedbillingsdk

import (
	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/core"
	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/entity"
	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/feature"
	_ "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/utility"
)

// Type aliases preserve external API.
type MaxioAdvancedBillingSDK = core.MaxioAdvancedBillingSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MaxioAdvancedBillingEntity = core.MaxioAdvancedBillingEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MaxioAdvancedBillingError = core.MaxioAdvancedBillingError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAccountBalanceEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewAccountBalanceEntity(client, entopts)
	}
	core.NewAllocationEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewAllocationEntity(client, entopts)
	}
	core.NewBatchJobEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewBatchJobEntity(client, entopts)
	}
	core.NewBillingPortalEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewBillingPortalEntity(client, entopts)
	}
	core.NewComponentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewComponentEntity(client, entopts)
	}
	core.NewComponentFeatureEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewComponentFeatureEntity(client, entopts)
	}
	core.NewComponentPricePointEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewComponentPricePointEntity(client, entopts)
	}
	core.NewComponentPricePointCurrencyOverageEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewComponentPricePointCurrencyOverageEntity(client, entopts)
	}
	core.NewCouponEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCouponEntity(client, entopts)
	}
	core.NewCouponCurrencyEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCouponCurrencyEntity(client, entopts)
	}
	core.NewCouponSubcodeEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCouponSubcodeEntity(client, entopts)
	}
	core.NewCouponUsageEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCouponUsageEntity(client, entopts)
	}
	core.NewCustomFieldEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCustomFieldEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewDelayedCancelEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewDelayedCancelEntity(client, entopts)
	}
	core.NewEndpointEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewEndpointEntity(client, entopts)
	}
	core.NewEntitlementEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewEntitlementEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewEventsBasedBillingSegmentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewEventsBasedBillingSegmentEntity(client, entopts)
	}
	core.NewFeatureEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewFeatureEntity(client, entopts)
	}
	core.NewFeatureCatalogItemEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewFeatureCatalogItemEntity(client, entopts)
	}
	core.NewFeatureTemplateEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewFeatureTemplateEntity(client, entopts)
	}
	core.NewInsightEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewInsightEntity(client, entopts)
	}
	core.NewInvoiceEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewInvoiceEntity(client, entopts)
	}
	core.NewListProformaInvoiceEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewListProformaInvoiceEntity(client, entopts)
	}
	core.NewListSaleRepItemEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewListSaleRepItemEntity(client, entopts)
	}
	core.NewListSegmentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewListSegmentEntity(client, entopts)
	}
	core.NewOfferEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewOfferEntity(client, entopts)
	}
	core.NewOneTimeTokenEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewOneTimeTokenEntity(client, entopts)
	}
	core.NewPaymentProfileEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewPaymentProfileEntity(client, entopts)
	}
	core.NewPrepaymentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewPrepaymentEntity(client, entopts)
	}
	core.NewProductEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewProductEntity(client, entopts)
	}
	core.NewProductFamilyEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewProductFamilyEntity(client, entopts)
	}
	core.NewProductFeatureEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewProductFeatureEntity(client, entopts)
	}
	core.NewProductPricePointEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewProductPricePointEntity(client, entopts)
	}
	core.NewProformaInvoiceEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewProformaInvoiceEntity(client, entopts)
	}
	core.NewReasonCodeEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewReasonCodeEntity(client, entopts)
	}
	core.NewReferralCodeEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewReferralCodeEntity(client, entopts)
	}
	core.NewSaleRepSettingEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSaleRepSettingEntity(client, entopts)
	}
	core.NewSalesCommissionEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSalesCommissionEntity(client, entopts)
	}
	core.NewSegmentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSegmentEntity(client, entopts)
	}
	core.NewSignupProformaPreviewEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSignupProformaPreviewEntity(client, entopts)
	}
	core.NewSiteEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSiteEntity(client, entopts)
	}
	core.NewSubscriptionEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionEntity(client, entopts)
	}
	core.NewSubscriptionComponentEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionComponentEntity(client, entopts)
	}
	core.NewSubscriptionGroupEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionGroupEntity(client, entopts)
	}
	core.NewSubscriptionGroupInvoiceAccountEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionGroupInvoiceAccountEntity(client, entopts)
	}
	core.NewSubscriptionGroupSignupEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionGroupSignupEntity(client, entopts)
	}
	core.NewSubscriptionGroupStatusEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionGroupStatusEntity(client, entopts)
	}
	core.NewSubscriptionInvoiceAccountEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionInvoiceAccountEntity(client, entopts)
	}
	core.NewSubscriptionMrrEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionMrrEntity(client, entopts)
	}
	core.NewSubscriptionNoteEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionNoteEntity(client, entopts)
	}
	core.NewSubscriptionProductEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionProductEntity(client, entopts)
	}
	core.NewSubscriptionRenewalEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionRenewalEntity(client, entopts)
	}
	core.NewSubscriptionStatusEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewSubscriptionStatusEntity(client, entopts)
	}
	core.NewUsageEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewUsageEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.MaxioAdvancedBillingSDK, entopts map[string]any) core.MaxioAdvancedBillingEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMaxioAdvancedBillingSDK = core.NewMaxioAdvancedBillingSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMaxioAdvancedBillingSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MaxioAdvancedBillingSDK  { return NewMaxioAdvancedBillingSDK(nil) }
func Test() *MaxioAdvancedBillingSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
