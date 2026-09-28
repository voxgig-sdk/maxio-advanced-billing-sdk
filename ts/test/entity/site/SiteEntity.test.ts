

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


describe('SiteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Site()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'site.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"chargify_js_keys":{"a":true,"h":"Chargify Js Keys","n":"chargify_js_keys","r":false,"t":"`$ARRAY`","key$":"chargify_js_keys","index$":0},"meta":{"a":true,"h":"Meta","n":"meta","r":false,"t":"`$OBJECT`","key$":"meta","index$":1},"site":{"a":true,"h":"Site","n":"site","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":6},"key$":"site","index$":2}},"name":"site","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /sites/clear_data.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cleanup_scope","or":"cleanup_scope","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/sites/clear_data.json","q":{"$action":"clear_data","exist":["cleanup_scope"]},"r":{},"s":[{"lit":"sites"},{"lit":"clear_data.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /chargify_js_keys.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/chargify_js_keys.json","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"chargify_js_keys.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /site.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/site.json","q":{},"r":{},"s":[{"lit":"site.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"site","name__orig":"site","Name":"Site","name_":"site","name-":"site","NAME":"SITE","index$":42}, {"active":true,"entity":"site","key$":"BasicSiteFlow","kind":"basic","name":"BasicSiteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"site_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"site_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"site_ref01","srcdatavar":"site_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-site_ref01"}}],"index$":2}]}, 'Site', {"POST /sites/clear_data.json":{"protocol":"http","parameters":[{"name":"cleanup_scope","in":"query","description":"`all`: Will clear all products, customers, and related subscriptions from the site. \n`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site. \nRevenue will also be reset to 0.\nUse in query `cleanup_scope=all`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Cleanupscope","enum":["all","customers"],"type":"string","description":"all: Will clear all products, customers, and related subscriptions from the site. customers: Will clear only customers and related subscriptions (leaving the products untouched) for the site. Revenue will also be reset to 0.","x-ref":"#/components/schemas/Cleanupscope"},{"description":"`all`: Will clear all products, customers, and related subscriptions from the site. \n`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site. \nRevenue will also be reset to 0.\nUse in query `cleanup_scope=all`."}]},"index$":0}]},"GET /chargify_js_keys.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":1}]},"GET /site.json":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const site_ref01_ent = client.Site()
    let site_ref01_data = setup.data.new.site['site_ref01']

    site_ref01_data = (await site_ref01_ent.create(site_ref01_data)).data()
    assert(null != site_ref01_data)


    // LIST
    const site_ref01_match: any = {}

    const site_ref01_list = (await site_ref01_ent.list(site_ref01_match)).map((e: any) => e.data())


    // LOAD
    const site_ref01_match_dt0: any = {}
    const site_ref01_data_dt0 = (await site_ref01_ent.load(site_ref01_match_dt0)).data()
    assert(null != site_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/site/SiteTestData.json')

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
    ['site01','site02','site03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SITE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SITE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SITE_ENTID']
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
  
