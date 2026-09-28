

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


describe('SaleRepSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SaleRepSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sale_rep_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customer_name":{"a":true,"h":"Customer Name","n":"customer_name","r":false,"t":"`$STRING`","key$":"customer_name","index$":0},"sales_rep_id":{"a":true,"fo":"int32","h":"Sales Rep Id","n":"sales_rep_id","r":false,"t":"`$INTEGER`","key$":"sales_rep_id","index$":1},"sales_rep_name":{"a":true,"h":"Sales Rep Name","n":"sales_rep_name","r":false,"t":"`$STRING`","key$":"sales_rep_name","index$":2},"site_link":{"a":true,"h":"Site Link","n":"site_link","r":false,"t":"`$STRING`","key$":"site_link","index$":3},"site_name":{"a":true,"h":"Site Name","n":"site_name","r":false,"t":"`$STRING`","key$":"site_name","index$":4},"subscription_id":{"a":true,"fo":"int32","h":"Subscription Id","n":"subscription_id","r":false,"t":"`$INTEGER`","key$":"subscription_id","index$":5},"subscription_mrr":{"a":true,"h":"Subscription Mrr","n":"subscription_mrr","r":false,"t":"`$STRING`","key$":"subscription_mrr","index$":6}},"name":"sale_rep_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /sellers/{seller_id}/sales_commission_settings.json","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"Bearer <<apiKey>>","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"seller_id","or":"seller_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"live_mode","or":"live_mode","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":100,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/sellers/{seller_id}/sales_commission_settings.json","q":{"exist":["authorization","live_mode","page","per_page","seller_id"]},"r":{},"s":[{"lit":"sellers"},{"var":"seller_id"},{"lit":"sales_commission_settings.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"sale_rep_setting","name__orig":"sale_rep_setting","Name":"SaleRepSetting","name_":"sale_rep_setting","name-":"sale-rep-setting","NAME":"SALE_REP_SETTING","index$":38}, {"active":true,"entity":"sale_rep_setting","key$":"BasicSaleRepSettingFlow","kind":"basic","name":"BasicSaleRepSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"seller_id":"seller01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"sale_rep_setting_ref01"}}],"index$":0}]}, 'SaleRepSetting', {"GET /sellers/{seller_id}/sales_commission_settings.json":{"protocol":"http","parameters":[{"name":"seller_id","in":"path","description":"The Chargify id of your seller account","required":true,"schema":{"type":"string"},"index$":0},{"name":"Authorization","in":"header","description":"For authorization use user API key. See details [here](https://developers.chargify.com/docs/developer-docs/ZG9jOjMyNzk5NTg0-2020-04-20-new-api-authentication).","schema":{"type":"string","default":"Bearer <<apiKey>>"},"index$":1},{"name":"live_mode","in":"query","description":"This parameter indicates if records should be fetched from live mode sites. Default value is true.","style":"form","explode":true,"schema":{"type":"boolean"},"index$":2},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":3},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 100.","style":"form","explode":true,"schema":{"type":"integer","format":"int32","default":100},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sale_rep_setting_ref01_data = Object.values(setup.data.existing.sale_rep_setting)[0] as any

    // LIST
    const sale_rep_setting_ref01_ent = client.SaleRepSetting()
    const sale_rep_setting_ref01_match: any = {}
    sale_rep_setting_ref01_match['seller_id'] = setup.idmap['seller01']

    const sale_rep_setting_ref01_list = (await sale_rep_setting_ref01_ent.list(sale_rep_setting_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sale_rep_setting/SaleRepSettingTestData.json')

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
    ['sale_rep_setting01','sale_rep_setting02','sale_rep_setting03','seller01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SALE_REP_SETTING_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SALE_REP_SETTING_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SALE_REP_SETTING_ENTID']
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
  
