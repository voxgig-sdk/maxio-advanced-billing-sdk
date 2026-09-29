"use strict";
// MaxioAdvancedBilling Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.MaxioAdvancedBillingSDK = exports.MaxioAdvancedBillingEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AccountBalanceEntity_1 = require("./entity/AccountBalanceEntity");
const AllocationEntity_1 = require("./entity/AllocationEntity");
const BatchJobEntity_1 = require("./entity/BatchJobEntity");
const BillingPortalEntity_1 = require("./entity/BillingPortalEntity");
const ComponentEntity_1 = require("./entity/ComponentEntity");
const ComponentFeatureEntity_1 = require("./entity/ComponentFeatureEntity");
const ComponentPricePointEntity_1 = require("./entity/ComponentPricePointEntity");
const ComponentPricePointCurrencyOverageEntity_1 = require("./entity/ComponentPricePointCurrencyOverageEntity");
const CouponEntity_1 = require("./entity/CouponEntity");
const CouponCurrencyEntity_1 = require("./entity/CouponCurrencyEntity");
const CouponSubcodeEntity_1 = require("./entity/CouponSubcodeEntity");
const CouponUsageEntity_1 = require("./entity/CouponUsageEntity");
const CustomFieldEntity_1 = require("./entity/CustomFieldEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const DelayedCancelEntity_1 = require("./entity/DelayedCancelEntity");
const EndpointEntity_1 = require("./entity/EndpointEntity");
const EntitlementEntity_1 = require("./entity/EntitlementEntity");
const EventEntity_1 = require("./entity/EventEntity");
const EventsBasedBillingSegmentEntity_1 = require("./entity/EventsBasedBillingSegmentEntity");
const FeatureEntity_1 = require("./entity/FeatureEntity");
const FeatureCatalogItemEntity_1 = require("./entity/FeatureCatalogItemEntity");
const FeatureTemplateEntity_1 = require("./entity/FeatureTemplateEntity");
const InsightEntity_1 = require("./entity/InsightEntity");
const InvoiceEntity_1 = require("./entity/InvoiceEntity");
const ListSaleRepItemEntity_1 = require("./entity/ListSaleRepItemEntity");
const ListSegmentEntity_1 = require("./entity/ListSegmentEntity");
const OfferEntity_1 = require("./entity/OfferEntity");
const OneTimeTokenEntity_1 = require("./entity/OneTimeTokenEntity");
const PaymentProfileEntity_1 = require("./entity/PaymentProfileEntity");
const PrepaymentEntity_1 = require("./entity/PrepaymentEntity");
const ProductEntity_1 = require("./entity/ProductEntity");
const ProductFamilyEntity_1 = require("./entity/ProductFamilyEntity");
const ProductFeatureEntity_1 = require("./entity/ProductFeatureEntity");
const ProductPricePointEntity_1 = require("./entity/ProductPricePointEntity");
const ProformaInvoiceEntity_1 = require("./entity/ProformaInvoiceEntity");
const ReasonCodeEntity_1 = require("./entity/ReasonCodeEntity");
const ReferralCodeEntity_1 = require("./entity/ReferralCodeEntity");
const SaleRepSettingEntity_1 = require("./entity/SaleRepSettingEntity");
const SalesCommissionEntity_1 = require("./entity/SalesCommissionEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const SignupProformaPreviewEntity_1 = require("./entity/SignupProformaPreviewEntity");
const SiteEntity_1 = require("./entity/SiteEntity");
const SubscriptionEntity_1 = require("./entity/SubscriptionEntity");
const SubscriptionComponentEntity_1 = require("./entity/SubscriptionComponentEntity");
const SubscriptionGroupEntity_1 = require("./entity/SubscriptionGroupEntity");
const SubscriptionGroupInvoiceAccountEntity_1 = require("./entity/SubscriptionGroupInvoiceAccountEntity");
const SubscriptionGroupSignupEntity_1 = require("./entity/SubscriptionGroupSignupEntity");
const SubscriptionGroupStatusEntity_1 = require("./entity/SubscriptionGroupStatusEntity");
const SubscriptionInvoiceAccountEntity_1 = require("./entity/SubscriptionInvoiceAccountEntity");
const SubscriptionMrrEntity_1 = require("./entity/SubscriptionMrrEntity");
const SubscriptionNoteEntity_1 = require("./entity/SubscriptionNoteEntity");
const SubscriptionProductEntity_1 = require("./entity/SubscriptionProductEntity");
const SubscriptionRenewalEntity_1 = require("./entity/SubscriptionRenewalEntity");
const SubscriptionStatusEntity_1 = require("./entity/SubscriptionStatusEntity");
const UsageEntity_1 = require("./entity/UsageEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const MaxioAdvancedBillingEntityBase_1 = require("./MaxioAdvancedBillingEntityBase");
Object.defineProperty(exports, "MaxioAdvancedBillingEntityBase", { enumerable: true, get: function () { return MaxioAdvancedBillingEntityBase_1.MaxioAdvancedBillingEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class MaxioAdvancedBillingSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('MaxioAdvancedBillingSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('MaxioAdvancedBillingSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('MaxioAdvancedBillingSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AccountBalance().list()` / `client.AccountBalance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountBalance(entopts) {
        const self = this;
        return new AccountBalanceEntity_1.AccountBalanceEntity(self, entopts);
    }
    // Entity access: `client.Allocation().list()` / `client.Allocation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Allocation(entopts) {
        const self = this;
        return new AllocationEntity_1.AllocationEntity(self, entopts);
    }
    // Entity access: `client.BatchJob().list()` / `client.BatchJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BatchJob(entopts) {
        const self = this;
        return new BatchJobEntity_1.BatchJobEntity(self, entopts);
    }
    // Entity access: `client.BillingPortal().list()` / `client.BillingPortal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillingPortal(entopts) {
        const self = this;
        return new BillingPortalEntity_1.BillingPortalEntity(self, entopts);
    }
    // Entity access: `client.Component().list()` / `client.Component().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Component(entopts) {
        const self = this;
        return new ComponentEntity_1.ComponentEntity(self, entopts);
    }
    // Entity access: `client.ComponentFeature().list()` / `client.ComponentFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ComponentFeature(entopts) {
        const self = this;
        return new ComponentFeatureEntity_1.ComponentFeatureEntity(self, entopts);
    }
    // Entity access: `client.ComponentPricePoint().list()` / `client.ComponentPricePoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ComponentPricePoint(entopts) {
        const self = this;
        return new ComponentPricePointEntity_1.ComponentPricePointEntity(self, entopts);
    }
    // Entity access: `client.ComponentPricePointCurrencyOverage().list()` / `client.ComponentPricePointCurrencyOverage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ComponentPricePointCurrencyOverage(entopts) {
        const self = this;
        return new ComponentPricePointCurrencyOverageEntity_1.ComponentPricePointCurrencyOverageEntity(self, entopts);
    }
    // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Coupon(entopts) {
        const self = this;
        return new CouponEntity_1.CouponEntity(self, entopts);
    }
    // Entity access: `client.CouponCurrency().list()` / `client.CouponCurrency().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CouponCurrency(entopts) {
        const self = this;
        return new CouponCurrencyEntity_1.CouponCurrencyEntity(self, entopts);
    }
    // Entity access: `client.CouponSubcode().list()` / `client.CouponSubcode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CouponSubcode(entopts) {
        const self = this;
        return new CouponSubcodeEntity_1.CouponSubcodeEntity(self, entopts);
    }
    // Entity access: `client.CouponUsage().list()` / `client.CouponUsage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CouponUsage(entopts) {
        const self = this;
        return new CouponUsageEntity_1.CouponUsageEntity(self, entopts);
    }
    // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomField(entopts) {
        const self = this;
        return new CustomFieldEntity_1.CustomFieldEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.DelayedCancel().list()` / `client.DelayedCancel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DelayedCancel(entopts) {
        const self = this;
        return new DelayedCancelEntity_1.DelayedCancelEntity(self, entopts);
    }
    // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Endpoint(entopts) {
        const self = this;
        return new EndpointEntity_1.EndpointEntity(self, entopts);
    }
    // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Entitlement(entopts) {
        const self = this;
        return new EntitlementEntity_1.EntitlementEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.EventsBasedBillingSegment().list()` / `client.EventsBasedBillingSegment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EventsBasedBillingSegment(entopts) {
        const self = this;
        return new EventsBasedBillingSegmentEntity_1.EventsBasedBillingSegmentEntity(self, entopts);
    }
    // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feature(entopts) {
        const self = this;
        return new FeatureEntity_1.FeatureEntity(self, entopts);
    }
    // Entity access: `client.FeatureCatalogItem().list()` / `client.FeatureCatalogItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeatureCatalogItem(entopts) {
        const self = this;
        return new FeatureCatalogItemEntity_1.FeatureCatalogItemEntity(self, entopts);
    }
    // Entity access: `client.FeatureTemplate().list()` / `client.FeatureTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FeatureTemplate(entopts) {
        const self = this;
        return new FeatureTemplateEntity_1.FeatureTemplateEntity(self, entopts);
    }
    // Entity access: `client.Insight().list()` / `client.Insight().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Insight(entopts) {
        const self = this;
        return new InsightEntity_1.InsightEntity(self, entopts);
    }
    // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invoice(entopts) {
        const self = this;
        return new InvoiceEntity_1.InvoiceEntity(self, entopts);
    }
    // Entity access: `client.ListSaleRepItem().list()` / `client.ListSaleRepItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSaleRepItem(entopts) {
        const self = this;
        return new ListSaleRepItemEntity_1.ListSaleRepItemEntity(self, entopts);
    }
    // Entity access: `client.ListSegment().list()` / `client.ListSegment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListSegment(entopts) {
        const self = this;
        return new ListSegmentEntity_1.ListSegmentEntity(self, entopts);
    }
    // Entity access: `client.Offer().list()` / `client.Offer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Offer(entopts) {
        const self = this;
        return new OfferEntity_1.OfferEntity(self, entopts);
    }
    // Entity access: `client.OneTimeToken().list()` / `client.OneTimeToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OneTimeToken(entopts) {
        const self = this;
        return new OneTimeTokenEntity_1.OneTimeTokenEntity(self, entopts);
    }
    // Entity access: `client.PaymentProfile().list()` / `client.PaymentProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaymentProfile(entopts) {
        const self = this;
        return new PaymentProfileEntity_1.PaymentProfileEntity(self, entopts);
    }
    // Entity access: `client.Prepayment().list()` / `client.Prepayment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Prepayment(entopts) {
        const self = this;
        return new PrepaymentEntity_1.PrepaymentEntity(self, entopts);
    }
    // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Product(entopts) {
        const self = this;
        return new ProductEntity_1.ProductEntity(self, entopts);
    }
    // Entity access: `client.ProductFamily().list()` / `client.ProductFamily().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductFamily(entopts) {
        const self = this;
        return new ProductFamilyEntity_1.ProductFamilyEntity(self, entopts);
    }
    // Entity access: `client.ProductFeature().list()` / `client.ProductFeature().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductFeature(entopts) {
        const self = this;
        return new ProductFeatureEntity_1.ProductFeatureEntity(self, entopts);
    }
    // Entity access: `client.ProductPricePoint().list()` / `client.ProductPricePoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProductPricePoint(entopts) {
        const self = this;
        return new ProductPricePointEntity_1.ProductPricePointEntity(self, entopts);
    }
    // Entity access: `client.ProformaInvoice().list()` / `client.ProformaInvoice().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProformaInvoice(entopts) {
        const self = this;
        return new ProformaInvoiceEntity_1.ProformaInvoiceEntity(self, entopts);
    }
    // Entity access: `client.ReasonCode().list()` / `client.ReasonCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReasonCode(entopts) {
        const self = this;
        return new ReasonCodeEntity_1.ReasonCodeEntity(self, entopts);
    }
    // Entity access: `client.ReferralCode().list()` / `client.ReferralCode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReferralCode(entopts) {
        const self = this;
        return new ReferralCodeEntity_1.ReferralCodeEntity(self, entopts);
    }
    // Entity access: `client.SaleRepSetting().list()` / `client.SaleRepSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SaleRepSetting(entopts) {
        const self = this;
        return new SaleRepSettingEntity_1.SaleRepSettingEntity(self, entopts);
    }
    // Entity access: `client.SalesCommission().list()` / `client.SalesCommission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SalesCommission(entopts) {
        const self = this;
        return new SalesCommissionEntity_1.SalesCommissionEntity(self, entopts);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Segment(entopts) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, entopts);
    }
    // Entity access: `client.SignupProformaPreview().list()` / `client.SignupProformaPreview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SignupProformaPreview(entopts) {
        const self = this;
        return new SignupProformaPreviewEntity_1.SignupProformaPreviewEntity(self, entopts);
    }
    // Entity access: `client.Site().list()` / `client.Site().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Site(entopts) {
        const self = this;
        return new SiteEntity_1.SiteEntity(self, entopts);
    }
    // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Subscription(entopts) {
        const self = this;
        return new SubscriptionEntity_1.SubscriptionEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionComponent().list()` / `client.SubscriptionComponent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionComponent(entopts) {
        const self = this;
        return new SubscriptionComponentEntity_1.SubscriptionComponentEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionGroup().list()` / `client.SubscriptionGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionGroup(entopts) {
        const self = this;
        return new SubscriptionGroupEntity_1.SubscriptionGroupEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionGroupInvoiceAccount().list()` / `client.SubscriptionGroupInvoiceAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionGroupInvoiceAccount(entopts) {
        const self = this;
        return new SubscriptionGroupInvoiceAccountEntity_1.SubscriptionGroupInvoiceAccountEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionGroupSignup().list()` / `client.SubscriptionGroupSignup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionGroupSignup(entopts) {
        const self = this;
        return new SubscriptionGroupSignupEntity_1.SubscriptionGroupSignupEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionGroupStatus().list()` / `client.SubscriptionGroupStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionGroupStatus(entopts) {
        const self = this;
        return new SubscriptionGroupStatusEntity_1.SubscriptionGroupStatusEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionInvoiceAccount().list()` / `client.SubscriptionInvoiceAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionInvoiceAccount(entopts) {
        const self = this;
        return new SubscriptionInvoiceAccountEntity_1.SubscriptionInvoiceAccountEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionMrr().list()` / `client.SubscriptionMrr().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionMrr(entopts) {
        const self = this;
        return new SubscriptionMrrEntity_1.SubscriptionMrrEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionNote().list()` / `client.SubscriptionNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionNote(entopts) {
        const self = this;
        return new SubscriptionNoteEntity_1.SubscriptionNoteEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionProduct().list()` / `client.SubscriptionProduct().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionProduct(entopts) {
        const self = this;
        return new SubscriptionProductEntity_1.SubscriptionProductEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionRenewal().list()` / `client.SubscriptionRenewal().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionRenewal(entopts) {
        const self = this;
        return new SubscriptionRenewalEntity_1.SubscriptionRenewalEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionStatus().list()` / `client.SubscriptionStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionStatus(entopts) {
        const self = this;
        return new SubscriptionStatusEntity_1.SubscriptionStatusEntity(self, entopts);
    }
    // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usage(entopts) {
        const self = this;
        return new UsageEntity_1.UsageEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new MaxioAdvancedBillingSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return MaxioAdvancedBillingSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'MaxioAdvancedBilling' };
    }
    toString() {
        return 'MaxioAdvancedBilling ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.MaxioAdvancedBillingSDK = MaxioAdvancedBillingSDK;
const SDK = MaxioAdvancedBillingSDK;
exports.SDK = SDK;
//# sourceMappingURL=MaxioAdvancedBillingSDK.js.map