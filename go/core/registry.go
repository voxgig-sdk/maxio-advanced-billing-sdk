package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAccountBalanceEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewAllocationEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewBatchJobEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewBillingPortalEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewComponentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewComponentFeatureEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewComponentPricePointEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewComponentPricePointCurrencyOverageEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCouponEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCouponCurrencyEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCouponSubcodeEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCouponUsageEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCustomFieldEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewCustomerEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewDelayedCancelEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewEndpointEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewEntitlementEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewEventEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewEventsBasedBillingSegmentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewFeatureEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewFeatureCatalogItemEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewFeatureTemplateEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewInsightEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewInvoiceEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewListSaleRepItemEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewListSegmentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewOfferEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewOneTimeTokenEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewPaymentProfileEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewPrepaymentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewProductEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewProductFamilyEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewProductFeatureEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewProductPricePointEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewProformaInvoiceEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewReasonCodeEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewReferralCodeEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSaleRepSettingEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSalesCommissionEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSegmentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSignupProformaPreviewEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSiteEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionComponentEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionGroupEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionGroupInvoiceAccountEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionGroupSignupEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionGroupStatusEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionInvoiceAccountEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionMrrEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionNoteEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionProductEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionRenewalEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewSubscriptionStatusEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewUsageEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

var NewWebhookEntityFunc func(client *MaxioAdvancedBillingSDK, entopts map[string]any) MaxioAdvancedBillingEntity

