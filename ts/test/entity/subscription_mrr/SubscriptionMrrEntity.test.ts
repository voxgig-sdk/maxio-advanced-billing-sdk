

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


describe('SubscriptionMrrEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SubscriptionMrr()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_mrr.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"breakouts":{"a":true,"h":"Breakouts","n":"breakouts","r":true,"t":"`$OBJECT`","key$":"breakouts","index$":0},"mrr_amount_in_cents":{"a":true,"fo":"int64","h":"Mrr Amount In Cents","n":"mrr_amount_in_cents","r":true,"t":"`$INTEGER`","key$":"mrr_amount_in_cents","index$":1},"subscription_id":{"a":true,"fo":"int32","h":"Subscription Id","n":"subscription_id","r":true,"t":"`$INTEGER`","key$":"subscription_id","index$":2}},"name":"subscription_mrr","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions_mrr.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"at_time=2022-01-10T10:00:00-05:00","k":"query","n":"at_time","or":"at_time","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/subscriptions_mrr.json","q":{"exist":["at_time","direction","filter","page","per_page"]},"r":{},"s":[{"lit":"subscriptions_mrr.json"}],"t":{"req":"`reqdata`","res":"`body.subscriptions_mrr`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"subscription_mrr","name__orig":"subscription_mrr","Name":"SubscriptionMrr","name_":"subscription_mrr","name-":"subscription-mrr","NAME":"SUBSCRIPTION_MRR","index$":50}, {"active":true,"entity":"subscription_mrr","key$":"BasicSubscriptionMrrFlow","kind":"basic","name":"BasicSubscriptionMrrFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"subscription_mrr_ref01"}}],"index$":0}]}, 'SubscriptionMrr', {"GET /subscriptions_mrr.json":{"protocol":"http","parameters":[{"name":"filter","in":"query","description":"Filter to use for List MRR per subscription operation","style":"form","explode":true,"schema":{"allOf":[{"title":"ListMrrFilter","type":"object","properties":{"subscription_ids":{"minItems":1,"type":"array","items":{"type":"integer","format":"int32"},"description":"Submit ids in order to limit results. Use in query: `filter[subscription_ids]=1,2,3`.","example":[1,2,3]}},"x-ref":"#/components/schemas/ListMrrFilter"},{"description":"Filter to use for List MRR per subscription operation"}]},"index$":0},{"name":"at_time","in":"query","description":"Submit a timestamp in ISO8601 format to request MRR for a historic time. Use in query: `at_time=2022-01-10T10:00:00-05:00`.","style":"form","explode":true,"schema":{"type":"string","example":"at_time=2022-01-10T10:00:00-05:00"},"index$":1},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":2},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":3},{"name":"direction","in":"query","description":"Controls the order in which results are returned. Records are ordered by subscription_id in ascending order by default. Use in query `direction=desc`.","style":"form","explode":true,"schema":{"allOf":[{"title":"direction","enum":["asc","desc"],"type":"string","x-ref":"#/components/schemas/direction"},{"description":"Controls the order in which results are returned. Records are ordered by subscription_id in ascending order by default. Use in query `direction=desc`.","example":"desc"}]},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscription_mrr_ref01_data = Object.values(setup.data.existing.subscription_mrr)[0] as any

    // LIST
    const subscription_mrr_ref01_ent = client.SubscriptionMrr()
    const subscription_mrr_ref01_match: any = {}

    const subscription_mrr_ref01_list = (await subscription_mrr_ref01_ent.list(subscription_mrr_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_mrr/SubscriptionMrrTestData.json')

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
    ['subscription_mrr01','subscription_mrr02','subscription_mrr03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_MRR_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_MRR_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_MRR_ENTID']
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
  
