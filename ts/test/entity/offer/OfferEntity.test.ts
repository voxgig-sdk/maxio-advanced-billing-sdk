

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


describe('OfferEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Offer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'offer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"t":"`$STRING`","key$":"archived_at","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"handle":{"a":true,"h":"Handle","n":"handle","r":false,"t":"`$STRING`","key$":"handle","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"offer":{"a":true,"h":"Offer","n":"offer","r":false,"t":"`$OBJECT`","key$":"offer","index$":6},"offer_discounts":{"a":true,"h":"Offer Discounts","n":"offer_discounts","r":false,"t":"`$ARRAY`","key$":"offer_discounts","index$":7},"offer_items":{"a":true,"h":"Offer Items","n":"offer_items","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":5},"key$":"offer_items","index$":8},"offer_signup_pages":{"a":true,"h":"Offer Signup Pages","n":"offer_signup_pages","r":false,"t":"`$ARRAY`","key$":"offer_signup_pages","index$":9},"product_family_id":{"a":true,"fo":"int32","h":"Product Family Id","n":"product_family_id","r":false,"t":"`$INTEGER`","key$":"product_family_id","index$":10},"product_family_name":{"a":true,"h":"Product Family Name","n":"product_family_name","r":false,"t":"`$STRING`","key$":"product_family_name","index$":11},"product_id":{"a":true,"fo":"int32","h":"Product Id","n":"product_id","r":false,"t":"`$INTEGER`","key$":"product_id","index$":12},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":false,"t":"`$STRING`","key$":"product_name","index$":13},"product_price_in_cents":{"a":true,"fo":"int64","h":"Product Price In Cents","n":"product_price_in_cents","r":false,"t":"`$INTEGER`","key$":"product_price_in_cents","index$":14},"product_price_point_id":{"a":true,"fo":"int32","h":"Product Price Point Id","n":"product_price_point_id","r":false,"t":"`$INTEGER`","key$":"product_price_point_id","index$":15},"product_price_point_name":{"a":true,"h":"Product Price Point Name","n":"product_price_point_name","r":false,"t":"`$STRING`","key$":"product_price_point_name","index$":16},"product_revisable_number":{"a":true,"fo":"int32","h":"Product Revisable Number","n":"product_revisable_number","r":false,"t":"`$INTEGER`","key$":"product_revisable_number","index$":17},"site_id":{"a":true,"fo":"int32","h":"Site Id","n":"site_id","r":false,"t":"`$INTEGER`","key$":"site_id","index$":18},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":19}},"id":{"field":"id","name":"id"},"name":"offer","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /offers.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/offers.json","q":{},"r":{},"s":[{"lit":"offers.json"}],"t":{"req":"`reqdata`","res":"`body.offer`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /offers.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":true,"k":"query","n":"include_archived","or":"include_archived","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/offers.json","q":{"exist":["include_archived","page","per_page"]},"r":{},"s":[{"lit":"offers.json"}],"t":{"req":"`reqdata`","res":"`body.offers`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /offers/{offer_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"offer_id","or":"offer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/offers/{offer_id}.json","q":{"$action":"offer_id","exist":["offer_id"]},"r":{},"s":[{"lit":"offers"},{"lit":"{offer_id}.json"}],"t":{"req":"`reqdata`","res":"`body.offer`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /offers/{offer_id}/archive.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"offer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/offers/{offer_id}/archive.json","q":{"$action":"archive","exist":["id"]},"r":{"param":{"offer_id":"id"}},"s":[{"lit":"offers"},{"var":"id"},{"lit":"archive.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /offers/{offer_id}/unarchive.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"offer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/offers/{offer_id}/unarchive.json","q":{"$action":"unarchive","exist":["id"]},"r":{"param":{"offer_id":"id"}},"s":[{"lit":"offers"},{"var":"id"},{"lit":"unarchive.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"offer","name__orig":"offer","Name":"Offer","name_":"offer","name-":"offer","NAME":"OFFER","index$":26}, {"active":true,"entity":"offer","key$":"BasicOfferFlow","kind":"basic","name":"BasicOfferFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"offer_ref01"},"m":{"offer_id":"offer01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"offer_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"offer_ref01","srcdatavar":"offer_ref01_data","suffix":"_up0","textfield":"archived_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-offer_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"offer_ref01","srcdatavar":"offer_ref01_data","suffix":"_dt0"},"m":{"offer_id":"offer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-offer_ref01"}}],"index$":3}]}, 'Offer', {"POST /offers.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateOfferRequest","required":["offer"],"type":"object","properties":{"offer":{"title":"CreateOffer","required":["name","handle","product_id"],"type":"object","properties":{"name":{},"handle":{},"description":{},"product_id":{},"product_price_point_id":{},"components":{},"coupons":{}},"x-ref":"#/components/schemas/CreateOffer"}},"x-ref":"#/components/schemas/CreateOfferRequest"},{"example":{"offer":{"name":"Solo","handle":"han_shot_first","description":"A Star Wars Story","product_id":31,"product_price_point_id":102,"components":[{}],"coupons":["DEF456"]}}}],"index$":1},"examples":{"Example":{"value":{"offer":{"name":"Solo","handle":"han_shot_first","description":"A Star Wars Story","product_id":31,"product_price_point_id":102,"components":[{"component_id":24,"starting_quantity":1}],"coupons":["DEF456"]}}}}}},"required":false},"parameters":[]},"GET /offers.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":1},{"name":"include_archived","in":"query","description":"Include archived products. Use in query: `include_archived=true`.","style":"form","explode":true,"schema":{"type":"boolean","example":true},"index$":2}]},"GET /offers/{offer_id}.json":{"protocol":"http","parameters":[{"name":"offer_id","in":"path","description":"The Chargify id of the offer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"PUT /offers/{offer_id}/archive.json":{"protocol":"http","parameters":[{"name":"offer_id","in":"path","description":"The Chargify id of the offer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"PUT /offers/{offer_id}/unarchive.json":{"protocol":"http","parameters":[{"name":"offer_id","in":"path","description":"The Chargify id of the offer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const offer_ref01_ent = client.Offer()
    let offer_ref01_data = setup.data.new.offer['offer_ref01']
    offer_ref01_data['offer_id'] = setup.idmap['offer01']

    offer_ref01_data = (await offer_ref01_ent.create(offer_ref01_data)).data()
    assert(null != offer_ref01_data.id)


    // LIST
    const offer_ref01_match: any = {}

    const offer_ref01_list = (await offer_ref01_ent.list(offer_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(offer_ref01_list, { id: offer_ref01_data.id })))


    // UPDATE
    const offer_ref01_data_up0: any = {}
    offer_ref01_data_up0.id = offer_ref01_data.id

    const offer_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-offer_ref01_' + setup.now }
    ;(offer_ref01_data_up0 as any)[offer_ref01_markdef_up0.name] = offer_ref01_markdef_up0.value

    const offer_ref01_resdata_up0 = (await offer_ref01_ent.update(offer_ref01_data_up0)).data()
    assert(offer_ref01_resdata_up0.id === offer_ref01_data_up0.id)

    assert((offer_ref01_resdata_up0 as any)[offer_ref01_markdef_up0.name] === offer_ref01_markdef_up0.value)


    // LOAD
    const offer_ref01_match_dt0: any = {}
    offer_ref01_match_dt0.id = offer_ref01_data.id
    const offer_ref01_data_dt0 = (await offer_ref01_ent.load(offer_ref01_match_dt0)).data()
    assert(offer_ref01_data_dt0.id === offer_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/offer/OfferTestData.json')

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
    ['offer01','offer02','offer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_OFFER_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_OFFER_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_OFFER_ENTID']
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
  
