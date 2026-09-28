

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


describe('InsightEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Insight()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'insight.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"mrr":{"a":true,"h":"Mrr","n":"mrr","r":true,"t":"`$OBJECT`","key$":"mrr","index$":0},"seller_name":{"a":true,"h":"Seller Name","n":"seller_name","r":false,"t":"`$STRING`","key$":"seller_name","index$":1},"site_currency":{"a":true,"h":"Site Currency","n":"site_currency","r":false,"t":"`$STRING`","key$":"site_currency","index$":2},"site_id":{"a":true,"fo":"int32","h":"Site Id","n":"site_id","r":false,"t":"`$INTEGER`","key$":"site_id","index$":3},"site_name":{"a":true,"h":"Site Name","n":"site_name","r":false,"t":"`$STRING`","key$":"site_name","index$":4},"stats":{"a":true,"h":"Stats","n":"stats","r":false,"t":"`$OBJECT`","key$":"stats","index$":5}},"name":"insight","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /mrr_movements.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"subscription_id","or":"subscription_id","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/mrr_movements.json","q":{"exist":["direction","page","per_page","subscription_id"]},"r":{},"s":[{"lit":"mrr_movements.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /mrr.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"at_time","or":"at_time","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"subscription_id","or":"subscription_id","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/mrr.json","q":{"exist":["at_time","subscription_id"]},"r":{},"s":[{"lit":"mrr.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /stats.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/stats.json","q":{},"r":{},"s":[{"lit":"stats.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"insight","name__orig":"insight","Name":"Insight","name_":"insight","name-":"insight","NAME":"INSIGHT","index$":22}, {"active":true,"entity":"insight","key$":"BasicInsightFlow","kind":"basic","name":"BasicInsightFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"insight_ref01","srcdatavar":"insight_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-insight_ref01"}}],"index$":0}]}, 'Insight', {"GET /mrr_movements.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"query","description":"(Optional) Filter results by subscription.","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 10. The maximum allowed values is 50; any per_page value over 50 will be changed to 50.\nUse in query `per_page=20`.","style":"form","explode":true,"schema":{"maximum":50,"type":"integer","format":"int32","default":10,"example":20},"index$":2},{"name":"direction","in":"query","description":"Controls the order in which results are returned.\nUse in query `direction=asc`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Sortingdirection","enum":["asc","desc"],"type":"string","description":"Used for sorting results.","x-ref":"#/components/schemas/Sortingdirection"},{"description":"Controls the order in which results are returned.\nUse in query `direction=asc`."}]},"index$":3}]},"GET /mrr.json":{"protocol":"http","parameters":[{"name":"at_time","in":"query","description":"submit a timestamp in ISO8601 format to request MRR for a historic time.","style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":0},{"name":"subscription_id","in":"query","description":"submit the id of a subscription in order to limit results.","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"GET /stats.json":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let insight_ref01_data = Object.values(setup.data.existing.insight)[0] as any

    // LOAD
    const insight_ref01_ent = client.Insight()
    const insight_ref01_match_dt0: any = {}
    const insight_ref01_data_dt0 = (await insight_ref01_ent.load(insight_ref01_match_dt0)).data()
    assert(null != insight_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/insight/InsightTestData.json')

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
    ['insight01','insight02','insight03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_INSIGHT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_INSIGHT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_INSIGHT_ENTID']
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
  
