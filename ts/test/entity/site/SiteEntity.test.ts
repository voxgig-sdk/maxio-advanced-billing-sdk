

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allocation_settings":{"a":true,"h":"Allocation Settings","n":"allocation_settings","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":4},"key$":"allocation_settings","index$":0},"auto_renewals_enabled":{"a":true,"h":"Auto Renewals Enabled","n":"auto_renewals_enabled","r":false,"sh":"Whether the auto-renewals feature is enabled for this site.","t":"`$BOOLEAN`","key$":"auto_renewals_enabled","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":2},"currency":{"a":true,"h":"Currency","n":"currency","r":false,"t":"`$STRING`","key$":"currency","index$":3},"customer_hierarchy_enabled":{"a":true,"h":"Customer Hierarchy Enabled","n":"customer_hierarchy_enabled","r":false,"t":"`$BOOLEAN`","key$":"customer_hierarchy_enabled","index$":4},"default_payment_collection_method":{"a":true,"h":"Default Payment Collection Method","n":"default_payment_collection_method","r":false,"t":"`$STRING`","key$":"default_payment_collection_method","index$":5},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":6},"multi_frequency_enabled":{"a":true,"h":"Multi Frequency Enabled","n":"multi_frequency_enabled","r":false,"sh":"Whether the site has the multi-frequency billing feature enabled.","t":"`$BOOLEAN`","key$":"multi_frequency_enabled","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":8},"net_terms":{"a":true,"h":"Net Terms","n":"net_terms","r":false,"t":"`$OBJECT`","key$":"net_terms","index$":9},"non_primary_currencies":{"a":true,"h":"Non Primary Currencies","n":"non_primary_currencies","r":false,"t":"`$ARRAY`","key$":"non_primary_currencies","index$":10},"organization_address":{"a":true,"h":"Organization Address","n":"organization_address","r":false,"t":"`$OBJECT`","key$":"organization_address","index$":11},"portal_enabled":{"a":true,"h":"Portal Enabled","n":"portal_enabled","r":false,"sh":"Whether the Billing Portal is enabled for this site.","t":"`$BOOLEAN`","key$":"portal_enabled","index$":12},"public_key":{"a":true,"h":"Public Key","n":"public_key","r":false,"t":"`$STRING`","key$":"public_key","index$":13},"relationship_invoicing_enabled":{"a":true,"h":"Relationship Invoicing Enabled","n":"relationship_invoicing_enabled","r":false,"t":"`$BOOLEAN`","key$":"relationship_invoicing_enabled","index$":14},"requires_security_token":{"a":true,"h":"Requires Security Token","n":"requires_security_token","r":false,"t":"`$BOOLEAN`","key$":"requires_security_token","index$":15},"schedule_subscription_cancellation_enabled":{"a":true,"h":"Schedule Subscription Cancellation Enabled","n":"schedule_subscription_cancellation_enabled","r":false,"t":"`$BOOLEAN`","key$":"schedule_subscription_cancellation_enabled","index$":16},"seller_id":{"a":true,"fo":"int32","h":"Seller Id","n":"seller_id","r":false,"t":"`$INTEGER`","key$":"seller_id","index$":17},"subdomain":{"a":true,"h":"Subdomain","n":"subdomain","r":false,"t":"`$STRING`","key$":"subdomain","index$":18},"tax_configuration":{"a":true,"h":"Tax Configuration","n":"tax_configuration","r":false,"t":"`$OBJECT`","key$":"tax_configuration","index$":19},"test":{"a":true,"h":"Test","n":"test","r":false,"t":"`$BOOLEAN`","key$":"test","index$":20},"whopays_default_payer":{"a":true,"h":"Whopays Default Payer","n":"whopays_default_payer","r":false,"t":"`$STRING`","key$":"whopays_default_payer","index$":21},"whopays_enabled":{"a":true,"h":"Whopays Enabled","n":"whopays_enabled","r":false,"t":"`$BOOLEAN`","key$":"whopays_enabled","index$":22}},"id":{"field":"id","name":"id"},"name":"site","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /sites/clear_data.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cleanup_scope","or":"cleanup_scope","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/sites/clear_data.json","q":{"$action":"clear_data","exist":["cleanup_scope"]},"r":{},"s":[{"lit":"sites"},{"lit":"clear_data.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /chargify_js_keys.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/chargify_js_keys.json","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"chargify_js_keys.json"}],"t":{"req":"`reqdata`","res":"`body.chargify_js_keys`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /site.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/site.json","q":{},"r":{},"s":[{"lit":"site.json"}],"t":{"req":"`reqdata`","res":"`body.site`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"site","name__orig":"site","Name":"Site","name_":"site","name-":"site","NAME":"SITE","index$":41}, {"active":true,"entity":"site","key$":"BasicSiteFlow","kind":"basic","name":"BasicSiteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"site_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"site_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"site_ref01","srcdatavar":"site_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-site_ref01"}}],"index$":2}]}, 'Site', {"POST /sites/clear_data.json":{"protocol":"http","parameters":[{"name":"cleanup_scope","in":"query","description":"`all`: Will clear all products, customers, and related subscriptions from the site. \n`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site. \nRevenue will also be reset to 0.\nUse in query `cleanup_scope=all`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Cleanupscope","enum":["all","customers"],"type":"string","description":"all: Will clear all products, customers, and related subscriptions from the site. customers: Will clear only customers and related subscriptions (leaving the products untouched) for the site. Revenue will also be reset to 0.","x-ref":"#/components/schemas/Cleanupscope"},{"description":"`all`: Will clear all products, customers, and related subscriptions from the site. \n`customers`: Will clear only customers and related subscriptions (leaving the products untouched) for the site. \nRevenue will also be reset to 0.\nUse in query `cleanup_scope=all`."}]},"index$":0}]},"GET /chargify_js_keys.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":1}]},"GET /site.json":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const site_ref01_ent = client.Site()
    let site_ref01_data = setup.data.new.site['site_ref01']

    site_ref01_data = (await site_ref01_ent.create(site_ref01_data)).data()
    assert(null != site_ref01_data.id)


    // LIST
    const site_ref01_match: any = {}

    const site_ref01_list = (await site_ref01_ent.list(site_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(site_ref01_list, { id: site_ref01_data.id })))


    // LOAD
    const site_ref01_match_dt0: any = {}
    site_ref01_match_dt0.id = site_ref01_data.id
    const site_ref01_data_dt0 = (await site_ref01_ent.load(site_ref01_match_dt0)).data()
    assert(site_ref01_data_dt0.id === site_ref01_data.id)


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
  
