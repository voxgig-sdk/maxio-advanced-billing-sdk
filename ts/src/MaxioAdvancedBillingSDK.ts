// MaxioAdvancedBilling Ts SDK

import { AccountBalanceEntity } from './entity/AccountBalanceEntity'
import { AllocationEntity } from './entity/AllocationEntity'
import { BatchJobEntity } from './entity/BatchJobEntity'
import { BillingPortalEntity } from './entity/BillingPortalEntity'
import { ComponentEntity } from './entity/ComponentEntity'
import { ComponentFeatureEntity } from './entity/ComponentFeatureEntity'
import { ComponentPricePointEntity } from './entity/ComponentPricePointEntity'
import { ComponentPricePointCurrencyOverageEntity } from './entity/ComponentPricePointCurrencyOverageEntity'
import { CouponEntity } from './entity/CouponEntity'
import { CouponCurrencyEntity } from './entity/CouponCurrencyEntity'
import { CouponSubcodeEntity } from './entity/CouponSubcodeEntity'
import { CouponUsageEntity } from './entity/CouponUsageEntity'
import { CustomFieldEntity } from './entity/CustomFieldEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { DelayedCancelEntity } from './entity/DelayedCancelEntity'
import { EndpointEntity } from './entity/EndpointEntity'
import { EntitlementEntity } from './entity/EntitlementEntity'
import { EventEntity } from './entity/EventEntity'
import { EventsBasedBillingSegmentEntity } from './entity/EventsBasedBillingSegmentEntity'
import { FeatureEntity } from './entity/FeatureEntity'
import { FeatureCatalogItemEntity } from './entity/FeatureCatalogItemEntity'
import { FeatureTemplateEntity } from './entity/FeatureTemplateEntity'
import { InsightEntity } from './entity/InsightEntity'
import { InvoiceEntity } from './entity/InvoiceEntity'
import { ListSaleRepItemEntity } from './entity/ListSaleRepItemEntity'
import { ListSegmentEntity } from './entity/ListSegmentEntity'
import { OfferEntity } from './entity/OfferEntity'
import { OneTimeTokenEntity } from './entity/OneTimeTokenEntity'
import { PaymentProfileEntity } from './entity/PaymentProfileEntity'
import { PrepaymentEntity } from './entity/PrepaymentEntity'
import { ProductEntity } from './entity/ProductEntity'
import { ProductFamilyEntity } from './entity/ProductFamilyEntity'
import { ProductFeatureEntity } from './entity/ProductFeatureEntity'
import { ProductPricePointEntity } from './entity/ProductPricePointEntity'
import { ProformaInvoiceEntity } from './entity/ProformaInvoiceEntity'
import { ReasonCodeEntity } from './entity/ReasonCodeEntity'
import { ReferralCodeEntity } from './entity/ReferralCodeEntity'
import { SaleRepSettingEntity } from './entity/SaleRepSettingEntity'
import { SalesCommissionEntity } from './entity/SalesCommissionEntity'
import { SegmentEntity } from './entity/SegmentEntity'
import { SignupProformaPreviewEntity } from './entity/SignupProformaPreviewEntity'
import { SiteEntity } from './entity/SiteEntity'
import { SubscriptionEntity } from './entity/SubscriptionEntity'
import { SubscriptionComponentEntity } from './entity/SubscriptionComponentEntity'
import { SubscriptionGroupEntity } from './entity/SubscriptionGroupEntity'
import { SubscriptionGroupInvoiceAccountEntity } from './entity/SubscriptionGroupInvoiceAccountEntity'
import { SubscriptionGroupSignupEntity } from './entity/SubscriptionGroupSignupEntity'
import { SubscriptionGroupStatusEntity } from './entity/SubscriptionGroupStatusEntity'
import { SubscriptionInvoiceAccountEntity } from './entity/SubscriptionInvoiceAccountEntity'
import { SubscriptionMrrEntity } from './entity/SubscriptionMrrEntity'
import { SubscriptionNoteEntity } from './entity/SubscriptionNoteEntity'
import { SubscriptionProductEntity } from './entity/SubscriptionProductEntity'
import { SubscriptionRenewalEntity } from './entity/SubscriptionRenewalEntity'
import { SubscriptionStatusEntity } from './entity/SubscriptionStatusEntity'
import { UsageEntity } from './entity/UsageEntity'
import { WebhookEntity } from './entity/WebhookEntity'

export type * from './MaxioAdvancedBillingTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { MaxioAdvancedBillingEntityBase } from './MaxioAdvancedBillingEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class MaxioAdvancedBillingSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('MaxioAdvancedBillingSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('MaxioAdvancedBillingSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('MaxioAdvancedBillingSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AccountBalance().list()` / `client.AccountBalance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountBalance(entopts?: Record<string, any>) {
    const self = this
    return new AccountBalanceEntity(self, entopts)
  }


  // Entity access: `client.Allocation().list()` / `client.Allocation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Allocation(entopts?: Record<string, any>) {
    const self = this
    return new AllocationEntity(self, entopts)
  }


  // Entity access: `client.BatchJob().list()` / `client.BatchJob().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BatchJob(entopts?: Record<string, any>) {
    const self = this
    return new BatchJobEntity(self, entopts)
  }


  // Entity access: `client.BillingPortal().list()` / `client.BillingPortal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillingPortal(entopts?: Record<string, any>) {
    const self = this
    return new BillingPortalEntity(self, entopts)
  }


  // Entity access: `client.Component().list()` / `client.Component().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Component(entopts?: Record<string, any>) {
    const self = this
    return new ComponentEntity(self, entopts)
  }


  // Entity access: `client.ComponentFeature().list()` / `client.ComponentFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ComponentFeature(entopts?: Record<string, any>) {
    const self = this
    return new ComponentFeatureEntity(self, entopts)
  }


  // Entity access: `client.ComponentPricePoint().list()` / `client.ComponentPricePoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ComponentPricePoint(entopts?: Record<string, any>) {
    const self = this
    return new ComponentPricePointEntity(self, entopts)
  }


  // Entity access: `client.ComponentPricePointCurrencyOverage().list()` / `client.ComponentPricePointCurrencyOverage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ComponentPricePointCurrencyOverage(entopts?: Record<string, any>) {
    const self = this
    return new ComponentPricePointCurrencyOverageEntity(self, entopts)
  }


  // Entity access: `client.Coupon().list()` / `client.Coupon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Coupon(entopts?: Record<string, any>) {
    const self = this
    return new CouponEntity(self, entopts)
  }


  // Entity access: `client.CouponCurrency().list()` / `client.CouponCurrency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CouponCurrency(entopts?: Record<string, any>) {
    const self = this
    return new CouponCurrencyEntity(self, entopts)
  }


  // Entity access: `client.CouponSubcode().list()` / `client.CouponSubcode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CouponSubcode(entopts?: Record<string, any>) {
    const self = this
    return new CouponSubcodeEntity(self, entopts)
  }


  // Entity access: `client.CouponUsage().list()` / `client.CouponUsage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CouponUsage(entopts?: Record<string, any>) {
    const self = this
    return new CouponUsageEntity(self, entopts)
  }


  // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomField(entopts?: Record<string, any>) {
    const self = this
    return new CustomFieldEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.DelayedCancel().list()` / `client.DelayedCancel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DelayedCancel(entopts?: Record<string, any>) {
    const self = this
    return new DelayedCancelEntity(self, entopts)
  }


  // Entity access: `client.Endpoint().list()` / `client.Endpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Endpoint(entopts?: Record<string, any>) {
    const self = this
    return new EndpointEntity(self, entopts)
  }


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Entitlement(entopts?: Record<string, any>) {
    const self = this
    return new EntitlementEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.EventsBasedBillingSegment().list()` / `client.EventsBasedBillingSegment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EventsBasedBillingSegment(entopts?: Record<string, any>) {
    const self = this
    return new EventsBasedBillingSegmentEntity(self, entopts)
  }


  // Entity access: `client.Feature().list()` / `client.Feature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feature(entopts?: Record<string, any>) {
    const self = this
    return new FeatureEntity(self, entopts)
  }


  // Entity access: `client.FeatureCatalogItem().list()` / `client.FeatureCatalogItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeatureCatalogItem(entopts?: Record<string, any>) {
    const self = this
    return new FeatureCatalogItemEntity(self, entopts)
  }


  // Entity access: `client.FeatureTemplate().list()` / `client.FeatureTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FeatureTemplate(entopts?: Record<string, any>) {
    const self = this
    return new FeatureTemplateEntity(self, entopts)
  }


  // Entity access: `client.Insight().list()` / `client.Insight().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Insight(entopts?: Record<string, any>) {
    const self = this
    return new InsightEntity(self, entopts)
  }


  // Entity access: `client.Invoice().list()` / `client.Invoice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invoice(entopts?: Record<string, any>) {
    const self = this
    return new InvoiceEntity(self, entopts)
  }


  // Entity access: `client.ListSaleRepItem().list()` / `client.ListSaleRepItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSaleRepItem(entopts?: Record<string, any>) {
    const self = this
    return new ListSaleRepItemEntity(self, entopts)
  }


  // Entity access: `client.ListSegment().list()` / `client.ListSegment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListSegment(entopts?: Record<string, any>) {
    const self = this
    return new ListSegmentEntity(self, entopts)
  }


  // Entity access: `client.Offer().list()` / `client.Offer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Offer(entopts?: Record<string, any>) {
    const self = this
    return new OfferEntity(self, entopts)
  }


  // Entity access: `client.OneTimeToken().list()` / `client.OneTimeToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OneTimeToken(entopts?: Record<string, any>) {
    const self = this
    return new OneTimeTokenEntity(self, entopts)
  }


  // Entity access: `client.PaymentProfile().list()` / `client.PaymentProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PaymentProfile(entopts?: Record<string, any>) {
    const self = this
    return new PaymentProfileEntity(self, entopts)
  }


  // Entity access: `client.Prepayment().list()` / `client.Prepayment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Prepayment(entopts?: Record<string, any>) {
    const self = this
    return new PrepaymentEntity(self, entopts)
  }


  // Entity access: `client.Product().list()` / `client.Product().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Product(entopts?: Record<string, any>) {
    const self = this
    return new ProductEntity(self, entopts)
  }


  // Entity access: `client.ProductFamily().list()` / `client.ProductFamily().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductFamily(entopts?: Record<string, any>) {
    const self = this
    return new ProductFamilyEntity(self, entopts)
  }


  // Entity access: `client.ProductFeature().list()` / `client.ProductFeature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductFeature(entopts?: Record<string, any>) {
    const self = this
    return new ProductFeatureEntity(self, entopts)
  }


  // Entity access: `client.ProductPricePoint().list()` / `client.ProductPricePoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProductPricePoint(entopts?: Record<string, any>) {
    const self = this
    return new ProductPricePointEntity(self, entopts)
  }


  // Entity access: `client.ProformaInvoice().list()` / `client.ProformaInvoice().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProformaInvoice(entopts?: Record<string, any>) {
    const self = this
    return new ProformaInvoiceEntity(self, entopts)
  }


  // Entity access: `client.ReasonCode().list()` / `client.ReasonCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReasonCode(entopts?: Record<string, any>) {
    const self = this
    return new ReasonCodeEntity(self, entopts)
  }


  // Entity access: `client.ReferralCode().list()` / `client.ReferralCode().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReferralCode(entopts?: Record<string, any>) {
    const self = this
    return new ReferralCodeEntity(self, entopts)
  }


  // Entity access: `client.SaleRepSetting().list()` / `client.SaleRepSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SaleRepSetting(entopts?: Record<string, any>) {
    const self = this
    return new SaleRepSettingEntity(self, entopts)
  }


  // Entity access: `client.SalesCommission().list()` / `client.SalesCommission().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SalesCommission(entopts?: Record<string, any>) {
    const self = this
    return new SalesCommissionEntity(self, entopts)
  }


  // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Segment(entopts?: Record<string, any>) {
    const self = this
    return new SegmentEntity(self, entopts)
  }


  // Entity access: `client.SignupProformaPreview().list()` / `client.SignupProformaPreview().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SignupProformaPreview(entopts?: Record<string, any>) {
    const self = this
    return new SignupProformaPreviewEntity(self, entopts)
  }


  // Entity access: `client.Site().list()` / `client.Site().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Site(entopts?: Record<string, any>) {
    const self = this
    return new SiteEntity(self, entopts)
  }


  // Entity access: `client.Subscription().list()` / `client.Subscription().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Subscription(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionComponent().list()` / `client.SubscriptionComponent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionComponent(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionComponentEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionGroup().list()` / `client.SubscriptionGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionGroup(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionGroupEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionGroupInvoiceAccount().list()` / `client.SubscriptionGroupInvoiceAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionGroupInvoiceAccount(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionGroupInvoiceAccountEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionGroupSignup().list()` / `client.SubscriptionGroupSignup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionGroupSignup(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionGroupSignupEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionGroupStatus().list()` / `client.SubscriptionGroupStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionGroupStatus(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionGroupStatusEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionInvoiceAccount().list()` / `client.SubscriptionInvoiceAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionInvoiceAccount(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionInvoiceAccountEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionMrr().list()` / `client.SubscriptionMrr().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionMrr(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionMrrEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionNote().list()` / `client.SubscriptionNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionNote(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionNoteEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionProduct().list()` / `client.SubscriptionProduct().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionProduct(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionProductEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionRenewal().list()` / `client.SubscriptionRenewal().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionRenewal(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionRenewalEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionStatus().list()` / `client.SubscriptionStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionStatus(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionStatusEntity(self, entopts)
  }


  // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usage(entopts?: Record<string, any>) {
    const self = this
    return new UsageEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new MaxioAdvancedBillingSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return MaxioAdvancedBillingSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'MaxioAdvancedBilling' }
  }

  toString() {
    return 'MaxioAdvancedBilling ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = MaxioAdvancedBillingSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  MaxioAdvancedBillingEntityBase,

  MaxioAdvancedBillingSDK,
  SDK,
}


