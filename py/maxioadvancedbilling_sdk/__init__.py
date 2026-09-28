# MaxioAdvancedBilling SDK

from maxioadvancedbilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from maxioadvancedbilling_sdk.core.utility_type import MaxioAdvancedBillingUtility
from maxioadvancedbilling_sdk.core.spec import MaxioAdvancedBillingSpec
from maxioadvancedbilling_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from maxioadvancedbilling_sdk.utility import register

# Load features
from maxioadvancedbilling_sdk.feature.base_feature import MaxioAdvancedBillingBaseFeature
from maxioadvancedbilling_sdk.features import _has_feature, _make_feature


class MaxioAdvancedBillingSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = MaxioAdvancedBillingUtility()
        self._utility = utility

        from maxioadvancedbilling_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return MaxioAdvancedBillingUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = MaxioAdvancedBillingSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "MaxioAdvancedBillingSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("MaxioAdvancedBillingSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccountBalance(self, data=None) -> "AccountBalanceEntity":
        """Entity factory: client.AccountBalance().list() / client.AccountBalance().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.account_balance_entity import AccountBalanceEntity
        return AccountBalanceEntity(self, data)


    def Allocation(self, data=None) -> "AllocationEntity":
        """Entity factory: client.Allocation().list() / client.Allocation().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.allocation_entity import AllocationEntity
        return AllocationEntity(self, data)


    def BatchJob(self, data=None) -> "BatchJobEntity":
        """Entity factory: client.BatchJob().list() / client.BatchJob().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.batch_job_entity import BatchJobEntity
        return BatchJobEntity(self, data)


    def BillingPortal(self, data=None) -> "BillingPortalEntity":
        """Entity factory: client.BillingPortal().list() / client.BillingPortal().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.billing_portal_entity import BillingPortalEntity
        return BillingPortalEntity(self, data)


    def Component(self, data=None) -> "ComponentEntity":
        """Entity factory: client.Component().list() / client.Component().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.component_entity import ComponentEntity
        return ComponentEntity(self, data)


    def ComponentFeature(self, data=None) -> "ComponentFeatureEntity":
        """Entity factory: client.ComponentFeature().list() / client.ComponentFeature().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.component_feature_entity import ComponentFeatureEntity
        return ComponentFeatureEntity(self, data)


    def ComponentPricePoint(self, data=None) -> "ComponentPricePointEntity":
        """Entity factory: client.ComponentPricePoint().list() / client.ComponentPricePoint().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.component_price_point_entity import ComponentPricePointEntity
        return ComponentPricePointEntity(self, data)


    def ComponentPricePointCurrencyOverage(self, data=None) -> "ComponentPricePointCurrencyOverageEntity":
        """Entity factory: client.ComponentPricePointCurrencyOverage().list() / client.ComponentPricePointCurrencyOverage().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.component_price_point_currency_overage_entity import ComponentPricePointCurrencyOverageEntity
        return ComponentPricePointCurrencyOverageEntity(self, data)


    def Coupon(self, data=None) -> "CouponEntity":
        """Entity factory: client.Coupon().list() / client.Coupon().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.coupon_entity import CouponEntity
        return CouponEntity(self, data)


    def CouponCurrency(self, data=None) -> "CouponCurrencyEntity":
        """Entity factory: client.CouponCurrency().list() / client.CouponCurrency().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.coupon_currency_entity import CouponCurrencyEntity
        return CouponCurrencyEntity(self, data)


    def CouponSubcode(self, data=None) -> "CouponSubcodeEntity":
        """Entity factory: client.CouponSubcode().list() / client.CouponSubcode().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.coupon_subcode_entity import CouponSubcodeEntity
        return CouponSubcodeEntity(self, data)


    def CouponUsage(self, data=None) -> "CouponUsageEntity":
        """Entity factory: client.CouponUsage().list() / client.CouponUsage().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.coupon_usage_entity import CouponUsageEntity
        return CouponUsageEntity(self, data)


    def CustomField(self, data=None) -> "CustomFieldEntity":
        """Entity factory: client.CustomField().list() / client.CustomField().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.custom_field_entity import CustomFieldEntity
        return CustomFieldEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def DelayedCancel(self, data=None) -> "DelayedCancelEntity":
        """Entity factory: client.DelayedCancel().list() / client.DelayedCancel().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.delayed_cancel_entity import DelayedCancelEntity
        return DelayedCancelEntity(self, data)


    def Endpoint(self, data=None) -> "EndpointEntity":
        """Entity factory: client.Endpoint().list() / client.Endpoint().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.endpoint_entity import EndpointEntity
        return EndpointEntity(self, data)


    def Entitlement(self, data=None) -> "EntitlementEntity":
        """Entity factory: client.Entitlement().list() / client.Entitlement().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.entitlement_entity import EntitlementEntity
        return EntitlementEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def EventsBasedBillingSegment(self, data=None) -> "EventsBasedBillingSegmentEntity":
        """Entity factory: client.EventsBasedBillingSegment().list() / client.EventsBasedBillingSegment().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.events_based_billing_segment_entity import EventsBasedBillingSegmentEntity
        return EventsBasedBillingSegmentEntity(self, data)


    def Feature(self, data=None) -> "FeatureEntity":
        """Entity factory: client.Feature().list() / client.Feature().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.feature_entity import FeatureEntity
        return FeatureEntity(self, data)


    def FeatureCatalogItem(self, data=None) -> "FeatureCatalogItemEntity":
        """Entity factory: client.FeatureCatalogItem().list() / client.FeatureCatalogItem().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.feature_catalog_item_entity import FeatureCatalogItemEntity
        return FeatureCatalogItemEntity(self, data)


    def FeatureTemplate(self, data=None) -> "FeatureTemplateEntity":
        """Entity factory: client.FeatureTemplate().list() / client.FeatureTemplate().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.feature_template_entity import FeatureTemplateEntity
        return FeatureTemplateEntity(self, data)


    def Insight(self, data=None) -> "InsightEntity":
        """Entity factory: client.Insight().list() / client.Insight().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.insight_entity import InsightEntity
        return InsightEntity(self, data)


    def Invoice(self, data=None) -> "InvoiceEntity":
        """Entity factory: client.Invoice().list() / client.Invoice().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.invoice_entity import InvoiceEntity
        return InvoiceEntity(self, data)


    def ListProformaInvoice(self, data=None) -> "ListProformaInvoiceEntity":
        """Entity factory: client.ListProformaInvoice().list() / client.ListProformaInvoice().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.list_proforma_invoice_entity import ListProformaInvoiceEntity
        return ListProformaInvoiceEntity(self, data)


    def ListSaleRepItem(self, data=None) -> "ListSaleRepItemEntity":
        """Entity factory: client.ListSaleRepItem().list() / client.ListSaleRepItem().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.list_sale_rep_item_entity import ListSaleRepItemEntity
        return ListSaleRepItemEntity(self, data)


    def ListSegment(self, data=None) -> "ListSegmentEntity":
        """Entity factory: client.ListSegment().list() / client.ListSegment().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.list_segment_entity import ListSegmentEntity
        return ListSegmentEntity(self, data)


    def Offer(self, data=None) -> "OfferEntity":
        """Entity factory: client.Offer().list() / client.Offer().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.offer_entity import OfferEntity
        return OfferEntity(self, data)


    def OneTimeToken(self, data=None) -> "OneTimeTokenEntity":
        """Entity factory: client.OneTimeToken().list() / client.OneTimeToken().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.one_time_token_entity import OneTimeTokenEntity
        return OneTimeTokenEntity(self, data)


    def PaymentProfile(self, data=None) -> "PaymentProfileEntity":
        """Entity factory: client.PaymentProfile().list() / client.PaymentProfile().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.payment_profile_entity import PaymentProfileEntity
        return PaymentProfileEntity(self, data)


    def Prepayment(self, data=None) -> "PrepaymentEntity":
        """Entity factory: client.Prepayment().list() / client.Prepayment().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.prepayment_entity import PrepaymentEntity
        return PrepaymentEntity(self, data)


    def Product(self, data=None) -> "ProductEntity":
        """Entity factory: client.Product().list() / client.Product().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.product_entity import ProductEntity
        return ProductEntity(self, data)


    def ProductFamily(self, data=None) -> "ProductFamilyEntity":
        """Entity factory: client.ProductFamily().list() / client.ProductFamily().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.product_family_entity import ProductFamilyEntity
        return ProductFamilyEntity(self, data)


    def ProductFeature(self, data=None) -> "ProductFeatureEntity":
        """Entity factory: client.ProductFeature().list() / client.ProductFeature().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.product_feature_entity import ProductFeatureEntity
        return ProductFeatureEntity(self, data)


    def ProductPricePoint(self, data=None) -> "ProductPricePointEntity":
        """Entity factory: client.ProductPricePoint().list() / client.ProductPricePoint().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.product_price_point_entity import ProductPricePointEntity
        return ProductPricePointEntity(self, data)


    def ProformaInvoice(self, data=None) -> "ProformaInvoiceEntity":
        """Entity factory: client.ProformaInvoice().list() / client.ProformaInvoice().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.proforma_invoice_entity import ProformaInvoiceEntity
        return ProformaInvoiceEntity(self, data)


    def ReasonCode(self, data=None) -> "ReasonCodeEntity":
        """Entity factory: client.ReasonCode().list() / client.ReasonCode().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.reason_code_entity import ReasonCodeEntity
        return ReasonCodeEntity(self, data)


    def ReferralCode(self, data=None) -> "ReferralCodeEntity":
        """Entity factory: client.ReferralCode().list() / client.ReferralCode().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.referral_code_entity import ReferralCodeEntity
        return ReferralCodeEntity(self, data)


    def SaleRepSetting(self, data=None) -> "SaleRepSettingEntity":
        """Entity factory: client.SaleRepSetting().list() / client.SaleRepSetting().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.sale_rep_setting_entity import SaleRepSettingEntity
        return SaleRepSettingEntity(self, data)


    def SalesCommission(self, data=None) -> "SalesCommissionEntity":
        """Entity factory: client.SalesCommission().list() / client.SalesCommission().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.sales_commission_entity import SalesCommissionEntity
        return SalesCommissionEntity(self, data)


    def Segment(self, data=None) -> "SegmentEntity":
        """Entity factory: client.Segment().list() / client.Segment().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.segment_entity import SegmentEntity
        return SegmentEntity(self, data)


    def SignupProformaPreview(self, data=None) -> "SignupProformaPreviewEntity":
        """Entity factory: client.SignupProformaPreview().list() / client.SignupProformaPreview().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.signup_proforma_preview_entity import SignupProformaPreviewEntity
        return SignupProformaPreviewEntity(self, data)


    def Site(self, data=None) -> "SiteEntity":
        """Entity factory: client.Site().list() / client.Site().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.site_entity import SiteEntity
        return SiteEntity(self, data)


    def Subscription(self, data=None) -> "SubscriptionEntity":
        """Entity factory: client.Subscription().list() / client.Subscription().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_entity import SubscriptionEntity
        return SubscriptionEntity(self, data)


    def SubscriptionComponent(self, data=None) -> "SubscriptionComponentEntity":
        """Entity factory: client.SubscriptionComponent().list() / client.SubscriptionComponent().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_component_entity import SubscriptionComponentEntity
        return SubscriptionComponentEntity(self, data)


    def SubscriptionGroup(self, data=None) -> "SubscriptionGroupEntity":
        """Entity factory: client.SubscriptionGroup().list() / client.SubscriptionGroup().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_group_entity import SubscriptionGroupEntity
        return SubscriptionGroupEntity(self, data)


    def SubscriptionGroupInvoiceAccount(self, data=None) -> "SubscriptionGroupInvoiceAccountEntity":
        """Entity factory: client.SubscriptionGroupInvoiceAccount().list() / client.SubscriptionGroupInvoiceAccount().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_group_invoice_account_entity import SubscriptionGroupInvoiceAccountEntity
        return SubscriptionGroupInvoiceAccountEntity(self, data)


    def SubscriptionGroupSignup(self, data=None) -> "SubscriptionGroupSignupEntity":
        """Entity factory: client.SubscriptionGroupSignup().list() / client.SubscriptionGroupSignup().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_group_signup_entity import SubscriptionGroupSignupEntity
        return SubscriptionGroupSignupEntity(self, data)


    def SubscriptionGroupStatus(self, data=None) -> "SubscriptionGroupStatusEntity":
        """Entity factory: client.SubscriptionGroupStatus().list() / client.SubscriptionGroupStatus().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_group_status_entity import SubscriptionGroupStatusEntity
        return SubscriptionGroupStatusEntity(self, data)


    def SubscriptionInvoiceAccount(self, data=None) -> "SubscriptionInvoiceAccountEntity":
        """Entity factory: client.SubscriptionInvoiceAccount().list() / client.SubscriptionInvoiceAccount().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_invoice_account_entity import SubscriptionInvoiceAccountEntity
        return SubscriptionInvoiceAccountEntity(self, data)


    def SubscriptionMrr(self, data=None) -> "SubscriptionMrrEntity":
        """Entity factory: client.SubscriptionMrr().list() / client.SubscriptionMrr().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_mrr_entity import SubscriptionMrrEntity
        return SubscriptionMrrEntity(self, data)


    def SubscriptionNote(self, data=None) -> "SubscriptionNoteEntity":
        """Entity factory: client.SubscriptionNote().list() / client.SubscriptionNote().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_note_entity import SubscriptionNoteEntity
        return SubscriptionNoteEntity(self, data)


    def SubscriptionProduct(self, data=None) -> "SubscriptionProductEntity":
        """Entity factory: client.SubscriptionProduct().list() / client.SubscriptionProduct().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_product_entity import SubscriptionProductEntity
        return SubscriptionProductEntity(self, data)


    def SubscriptionRenewal(self, data=None) -> "SubscriptionRenewalEntity":
        """Entity factory: client.SubscriptionRenewal().list() / client.SubscriptionRenewal().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_renewal_entity import SubscriptionRenewalEntity
        return SubscriptionRenewalEntity(self, data)


    def SubscriptionStatus(self, data=None) -> "SubscriptionStatusEntity":
        """Entity factory: client.SubscriptionStatus().list() / client.SubscriptionStatus().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.subscription_status_entity import SubscriptionStatusEntity
        return SubscriptionStatusEntity(self, data)


    def Usage(self, data=None) -> "UsageEntity":
        """Entity factory: client.Usage().list() / client.Usage().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.usage_entity import UsageEntity
        return UsageEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from maxioadvancedbilling_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "MaxioAdvancedBillingSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from maxioadvancedbilling_sdk.entity.account_balance_entity import AccountBalanceEntity
    from maxioadvancedbilling_sdk.entity.allocation_entity import AllocationEntity
    from maxioadvancedbilling_sdk.entity.batch_job_entity import BatchJobEntity
    from maxioadvancedbilling_sdk.entity.billing_portal_entity import BillingPortalEntity
    from maxioadvancedbilling_sdk.entity.component_entity import ComponentEntity
    from maxioadvancedbilling_sdk.entity.component_feature_entity import ComponentFeatureEntity
    from maxioadvancedbilling_sdk.entity.component_price_point_entity import ComponentPricePointEntity
    from maxioadvancedbilling_sdk.entity.component_price_point_currency_overage_entity import ComponentPricePointCurrencyOverageEntity
    from maxioadvancedbilling_sdk.entity.coupon_entity import CouponEntity
    from maxioadvancedbilling_sdk.entity.coupon_currency_entity import CouponCurrencyEntity
    from maxioadvancedbilling_sdk.entity.coupon_subcode_entity import CouponSubcodeEntity
    from maxioadvancedbilling_sdk.entity.coupon_usage_entity import CouponUsageEntity
    from maxioadvancedbilling_sdk.entity.custom_field_entity import CustomFieldEntity
    from maxioadvancedbilling_sdk.entity.customer_entity import CustomerEntity
    from maxioadvancedbilling_sdk.entity.delayed_cancel_entity import DelayedCancelEntity
    from maxioadvancedbilling_sdk.entity.endpoint_entity import EndpointEntity
    from maxioadvancedbilling_sdk.entity.entitlement_entity import EntitlementEntity
    from maxioadvancedbilling_sdk.entity.event_entity import EventEntity
    from maxioadvancedbilling_sdk.entity.events_based_billing_segment_entity import EventsBasedBillingSegmentEntity
    from maxioadvancedbilling_sdk.entity.feature_entity import FeatureEntity
    from maxioadvancedbilling_sdk.entity.feature_catalog_item_entity import FeatureCatalogItemEntity
    from maxioadvancedbilling_sdk.entity.feature_template_entity import FeatureTemplateEntity
    from maxioadvancedbilling_sdk.entity.insight_entity import InsightEntity
    from maxioadvancedbilling_sdk.entity.invoice_entity import InvoiceEntity
    from maxioadvancedbilling_sdk.entity.list_proforma_invoice_entity import ListProformaInvoiceEntity
    from maxioadvancedbilling_sdk.entity.list_sale_rep_item_entity import ListSaleRepItemEntity
    from maxioadvancedbilling_sdk.entity.list_segment_entity import ListSegmentEntity
    from maxioadvancedbilling_sdk.entity.offer_entity import OfferEntity
    from maxioadvancedbilling_sdk.entity.one_time_token_entity import OneTimeTokenEntity
    from maxioadvancedbilling_sdk.entity.payment_profile_entity import PaymentProfileEntity
    from maxioadvancedbilling_sdk.entity.prepayment_entity import PrepaymentEntity
    from maxioadvancedbilling_sdk.entity.product_entity import ProductEntity
    from maxioadvancedbilling_sdk.entity.product_family_entity import ProductFamilyEntity
    from maxioadvancedbilling_sdk.entity.product_feature_entity import ProductFeatureEntity
    from maxioadvancedbilling_sdk.entity.product_price_point_entity import ProductPricePointEntity
    from maxioadvancedbilling_sdk.entity.proforma_invoice_entity import ProformaInvoiceEntity
    from maxioadvancedbilling_sdk.entity.reason_code_entity import ReasonCodeEntity
    from maxioadvancedbilling_sdk.entity.referral_code_entity import ReferralCodeEntity
    from maxioadvancedbilling_sdk.entity.sale_rep_setting_entity import SaleRepSettingEntity
    from maxioadvancedbilling_sdk.entity.sales_commission_entity import SalesCommissionEntity
    from maxioadvancedbilling_sdk.entity.segment_entity import SegmentEntity
    from maxioadvancedbilling_sdk.entity.signup_proforma_preview_entity import SignupProformaPreviewEntity
    from maxioadvancedbilling_sdk.entity.site_entity import SiteEntity
    from maxioadvancedbilling_sdk.entity.subscription_entity import SubscriptionEntity
    from maxioadvancedbilling_sdk.entity.subscription_component_entity import SubscriptionComponentEntity
    from maxioadvancedbilling_sdk.entity.subscription_group_entity import SubscriptionGroupEntity
    from maxioadvancedbilling_sdk.entity.subscription_group_invoice_account_entity import SubscriptionGroupInvoiceAccountEntity
    from maxioadvancedbilling_sdk.entity.subscription_group_signup_entity import SubscriptionGroupSignupEntity
    from maxioadvancedbilling_sdk.entity.subscription_group_status_entity import SubscriptionGroupStatusEntity
    from maxioadvancedbilling_sdk.entity.subscription_invoice_account_entity import SubscriptionInvoiceAccountEntity
    from maxioadvancedbilling_sdk.entity.subscription_mrr_entity import SubscriptionMrrEntity
    from maxioadvancedbilling_sdk.entity.subscription_note_entity import SubscriptionNoteEntity
    from maxioadvancedbilling_sdk.entity.subscription_product_entity import SubscriptionProductEntity
    from maxioadvancedbilling_sdk.entity.subscription_renewal_entity import SubscriptionRenewalEntity
    from maxioadvancedbilling_sdk.entity.subscription_status_entity import SubscriptionStatusEntity
    from maxioadvancedbilling_sdk.entity.usage_entity import UsageEntity
    from maxioadvancedbilling_sdk.entity.webhook_entity import WebhookEntity
