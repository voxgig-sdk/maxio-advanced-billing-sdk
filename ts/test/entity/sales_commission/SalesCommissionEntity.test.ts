

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


describe('SalesCommissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SalesCommission()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sales_commission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"full_name":{"a":true,"h":"Full Name","n":"full_name","r":false,"t":"`$STRING`","key$":"full_name","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"subscriptions":{"a":true,"h":"Subscriptions","n":"subscriptions","r":false,"t":"`$ARRAY`","key$":"subscriptions","index$":2},"subscriptions_count":{"a":true,"fo":"int32","h":"Subscriptions Count","n":"subscriptions_count","r":false,"t":"`$INTEGER`","key$":"subscriptions_count","index$":3},"test_mode":{"a":true,"h":"Test Mode","n":"test_mode","r":false,"t":"`$BOOLEAN`","key$":"test_mode","index$":4}},"id":{"field":"id","name":"id"},"name":"sales_commission","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"Bearer <<apiKey>>","k":"header","n":"authorization","or":"Authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"sales_rep_id","or":"sales_rep_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"seller_id","or":"seller_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"live_mode","or":"live_mode","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/sellers/{seller_id}/sales_reps/{sales_rep_id}.json","q":{"exist":["authorization","live_mode","page","per_page","sales_rep_id","seller_id"]},"r":{},"s":[{"lit":"sellers"},{"var":"seller_id"},{"lit":"sales_reps"},{"lit":"{sales_rep_id}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"sales_commission","name__orig":"sales_commission","Name":"SalesCommission","name_":"sales_commission","name-":"sales-commission","NAME":"SALES_COMMISSION","index$":38}, {"active":true,"entity":"sales_commission","key$":"BasicSalesCommissionFlow","kind":"basic","name":"BasicSalesCommissionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"sales_rep_id":"sales_rep01","seller_id":"seller01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"sales_commission_ref01"}}],"index$":0}]}, 'SalesCommission', {"GET /sellers/{seller_id}/sales_reps/{sales_rep_id}.json":{"protocol":"http","parameters":[{"name":"seller_id","in":"path","description":"The Chargify id of your seller account","required":true,"schema":{"type":"string"},"index$":0},{"name":"sales_rep_id","in":"path","description":"The Advanced Billing id of sales rep.","required":true,"schema":{"type":"string"},"index$":1},{"name":"Authorization","in":"header","description":"For authorization use user API key. See details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).","schema":{"type":"string","default":"Bearer <<apiKey>>"},"index$":2},{"name":"live_mode","in":"query","description":"This parameter indicates if records should be fetched from live mode sites. Default value is true.","style":"form","explode":true,"schema":{"type":"boolean"},"index$":3},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":4},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 100.","style":"form","explode":true,"schema":{"type":"integer","format":"int32","default":100},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sales_commission_ref01_data = Object.values(setup.data.existing.sales_commission)[0] as any

    // LIST
    const sales_commission_ref01_ent = client.SalesCommission()
    const sales_commission_ref01_match: any = {}
    sales_commission_ref01_match['sales_rep_id'] = setup.idmap['sales_rep01']
    sales_commission_ref01_match['seller_id'] = setup.idmap['seller01']

    const sales_commission_ref01_list = (await sales_commission_ref01_ent.list(sales_commission_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sales_commission/SalesCommissionTestData.json')

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
    ['sales_commission01','sales_commission02','sales_commission03','sales_rep01','seller01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SALES_COMMISSION_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SALES_COMMISSION_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SALES_COMMISSION_ENTID']
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
  
