

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MaxioAdvancedBillingSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SubscriptionInvoiceAccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SubscriptionInvoiceAccount()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_invoice_account.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount_in_cents":{"a":true,"fo":"int64","h":"Amount In Cents","n":"amount_in_cents","r":false,"sh":"The amount in cents of the entry","t":"`$INTEGER`","key$":"amount_in_cents","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"The date and time the entry was created","t":"`$STRING`","key$":"created_at","index$":1},"ending_balance_in_cents":{"a":true,"fo":"int64","h":"Ending Balance In Cents","n":"ending_balance_in_cents","r":false,"sh":"The new balance for the credit account","t":"`$INTEGER`","key$":"ending_balance_in_cents","index$":2},"entry_type":{"a":true,"h":"Entry Type","n":"entry_type","r":false,"t":"`$ANY`","key$":"entry_type","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"invoice_uid":{"a":true,"h":"Invoice Uid","n":"invoice_uid","r":false,"sh":"The invoice uid associated with the entry.","t":"`$STRING`","key$":"invoice_uid","index$":5},"memo":{"a":true,"h":"Memo","n":"memo","r":false,"sh":"The memo attached to the entry","t":"`$STRING`","key$":"memo","index$":6},"remaining_balance_in_cents":{"a":true,"fo":"int64","h":"Remaining Balance In Cents","n":"remaining_balance_in_cents","r":false,"sh":"The remaining balance for the entry","t":"`$INTEGER`","key$":"remaining_balance_in_cents","index$":7}},"id":{"field":"id","name":"id"},"name":"subscription_invoice_account","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/prepayments.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/prepayments.json","q":{"$action":"prepayments.json","exist":["id"]},"r":{"param":{"subscription_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"id"},{"lit":"prepayments.json"}],"t":{"req":"`reqdata`","res":"`body.prepayment`"},"index$":0},{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/service_credit_deductions.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/service_credit_deductions.json","q":{"$action":"service_credit_deductions.json","exist":["id"]},"r":{"param":{"subscription_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"id"},{"lit":"service_credit_deductions.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/service_credits.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/service_credits.json","q":{"$action":"service_credits.json","exist":["id"]},"r":{"param":{"subscription_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"id"},{"lit":"service_credits.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/service_credits/list.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/service_credits/list.json","q":{"exist":["direction","page","per_page","subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"service_credits"},{"lit":"list.json"}],"t":{"req":"`reqdata`","res":"`body.service_credits`"},"index$":0},{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/prepayments.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/prepayments.json","q":{"$action":"prepayments.json","exist":["filter","id","page","per_page"]},"r":{"param":{"subscription_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"id"},{"lit":"prepayments.json"}],"t":{"req":"`reqdata`","res":"`body.prepayments`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.subscription"]]},"key$":"subscription_invoice_account","name__orig":"subscription_invoice_account","Name":"SubscriptionInvoiceAccount","name_":"subscription_invoice_account","name-":"subscription-invoice-account","NAME":"SUBSCRIPTION_INVOICE_ACCOUNT","index$":48}, {"active":true,"entity":"subscription_invoice_account","key$":"BasicSubscriptionInvoiceAccountFlow","kind":"basic","name":"BasicSubscriptionInvoiceAccountFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"subscription_invoice_account_ref01"},"m":{"subscription_id":"subscription01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"subscription_id":"subscription01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subscription_invoice_account_ref01"}}],"index$":1}]}, 'SubscriptionInvoiceAccount', {"POST /subscriptions/{subscription_id}/prepayments.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreatePrepaymentRequest","required":["prepayment"],"type":"object","properties":{"prepayment":{"title":"CreatePrepayment","required":["amount","details","memo","method"],"type":"object","properties":{"amount":{},"details":{},"memo":{},"method":{},"payment_profile_id":{}},"x-ref":"#/components/schemas/CreatePrepayment"}},"x-ref":"#/components/schemas/CreatePrepaymentRequest"},{"example":{"prepayment":{"amount":100,"details":"John Doe signup for $100","memo":"Signup for $100","method":"check"}}}]},"examples":{"Example":{"value":{"prepayment":{"amount":100,"details":"John Doe signup for $100","memo":"Signup for $100","method":"check"}}}}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /subscriptions/{subscription_id}/service_credit_deductions.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"DeductServiceCreditRequest","required":["deduction"],"type":"object","properties":{"deduction":{"title":"DeductServiceCredit","required":["amount"],"type":"object","properties":{"amount":{},"memo":{}},"x-ref":"#/components/schemas/DeductServiceCredit"}},"x-ref":"#/components/schemas/DeductServiceCreditRequest"},{"example":{"deduction":{"amount":"1","memo":"Deduction"}}}]},"examples":{"Example":{"value":{"deduction":{"amount":"1","memo":"Deduction"}}}}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /subscriptions/{subscription_id}/service_credits.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"IssueServiceCreditRequest","required":["service_credit"],"type":"object","properties":{"service_credit":{"title":"IssueServiceCredit","required":["amount"],"type":"object","properties":{"amount":{},"memo":{}},"x-ref":"#/components/schemas/IssueServiceCredit"}},"x-ref":"#/components/schemas/IssueServiceCreditRequest"},{"example":{"service_credit":{"amount":"1"}}}]},"examples":{"Example":{"value":{"service_credit":{"amount":"1"}}}}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"GET /subscriptions/{subscription_id}/service_credits/list.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":2},{"name":"direction","in":"query","description":"Controls the order in which results are returned.\nUse in query `direction=asc`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Sortingdirection","enum":["asc","desc"],"type":"string","description":"Used for sorting results.","x-ref":"#/components/schemas/Sortingdirection"},{"description":"Controls the order in which results are returned.\nUse in query `direction=asc`."}]},"index$":3}]},"GET /subscriptions/{subscription_id}/prepayments.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":2},{"name":"filter","in":"query","description":"Filter to use for List Prepayments operations","style":"form","explode":true,"schema":{"allOf":[{"title":"ListPrepaymentsFilter","type":"object","properties":{"date_field":{"allOf":[{"title":"ListPrepaymentDateField","enum":[],"type":"string","example":"created_at","x-ref":"#/components/schemas/ListPrepaymentDateField"},{"description":"The type of filter you would like to apply to your search. `created_at` - Time when prepayment was created. `application_at` - Time when prepayment was applied to invoice. Use in query `filter[date_field]=created_at`.","example":"created_at"}]},"start_date":{"type":"string","description":"The start date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp at or after midnight (12:00:00 AM) in your site's time zone on the date specified. Use in query: `filter[start_date]=2011-12-15`.","format":"date","example":"2024-01-01"},"end_date":{"type":"string","description":"The end date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp up to and including 11:59:59PM in your site's time zone on the date specified. Use in query: `filter[end_date]=2011-12-15`.","format":"date","example":"2024-01-31"}},"x-ref":"#/components/schemas/ListPrepaymentsFilter"},{"description":"Filter to use for List Prepayments operations"}]},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_invoice_account_ref01_ent = client.SubscriptionInvoiceAccount()
    let subscription_invoice_account_ref01_data = setup.data.new.subscription_invoice_account['subscription_invoice_account_ref01']
    subscription_invoice_account_ref01_data['subscription_id'] = setup.idmap['subscription01']

    subscription_invoice_account_ref01_data = (await subscription_invoice_account_ref01_ent.create(subscription_invoice_account_ref01_data)).data()
    assert(null != subscription_invoice_account_ref01_data.id)


    // LIST
    const subscription_invoice_account_ref01_match: any = {}
    subscription_invoice_account_ref01_match['subscription_id'] = setup.idmap['subscription01']

    const subscription_invoice_account_ref01_list = (await subscription_invoice_account_ref01_ent.list(subscription_invoice_account_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(subscription_invoice_account_ref01_list, { id: subscription_invoice_account_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_invoice_account/SubscriptionInvoiceAccountTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MaxioAdvancedBillingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['subscription_invoice_account01','subscription_invoice_account02','subscription_invoice_account03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_INVOICE_ACCOUNT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_INVOICE_ACCOUNT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_INVOICE_ACCOUNT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MaxioAdvancedBillingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.MAXIO_ADVANCED_BILLING_APIKEY,
        secret: env.MAXIO_ADVANCED_BILLING_SECRET,
        server: {
          site: env.MAXIO_ADVANCED_BILLING_SERVER_SITE,
        },
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
