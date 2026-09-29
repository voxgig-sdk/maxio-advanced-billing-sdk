

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


describe('ProductFamilyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.ProductFamily()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'product_family.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accounting_code":{"a":true,"h":"Accounting Code","n":"accounting_code","r":false,"t":"`$STRING`","key$":"accounting_code","index$":0},"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"sh":"Timestamp indicating when this product family was archived.","t":"`$STRING`","key$":"archived_at","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":3},"handle":{"a":true,"h":"Handle","n":"handle","r":false,"t":"`$STRING`","key$":"handle","index$":4},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":6},"product_family":{"a":true,"h":"Product Family","n":"product_family","r":false,"t":"`$OBJECT`","key$":"product_family","index$":7},"surcharging":{"a":true,"h":"Surcharging","n":"surcharging","r":false,"sh":"Whether surcharging applies to this product family.","t":"`$BOOLEAN`","key$":"surcharging","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"product_family","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /product_families.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/product_families.json","q":{},"r":{},"s":[{"lit":"product_families.json"}],"t":{"req":"`reqdata`","res":"`body.product_family`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /product_families.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"date_field","or":"date_field","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"end_datetime","or":"end_datetime","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"start_datetime","or":"start_datetime","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/product_families.json","q":{"exist":["date_field","end_date","end_datetime","start_date","start_datetime"]},"r":{},"s":[{"lit":"product_families.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /product_families/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/product_families/{id}.json","q":{"$action":"id","exist":["id"]},"r":{},"s":[{"lit":"product_families"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body.product_family`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"product_family","name__orig":"product_family","Name":"ProductFamily","name_":"product_family","name-":"product-family","NAME":"PRODUCT_FAMILY","index$":31}, {"active":true,"entity":"product_family","key$":"BasicProductFamilyFlow","kind":"basic","name":"BasicProductFamilyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"product_family_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"product_family_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"product_family_ref01","srcdatavar":"product_family_ref01_data","suffix":"_dt0"},"m":{"id":"product_family01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-product_family_ref01"}}],"index$":2}]}, 'ProductFamily', {"POST /product_families.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateProductFamilyRequest","required":["product_family"],"type":"object","properties":{"product_family":{"title":"CreateProductFamily","required":["name"],"type":"object","properties":{"name":{},"handle":{},"description":{},"surcharging":{}},"x-ref":"#/components/schemas/CreateProductFamily"}},"x-ref":"#/components/schemas/CreateProductFamilyRequest"},{"example":{"product_family":{"name":"Acme Projects","description":"Amazing project management tool","surcharging":false}}}],"index$":1},"examples":{"Example":{"value":{"product_family":{"name":"Acme Projects","description":"Amazing project management tool","surcharging":false}}}}}},"required":false},"parameters":[]},"GET /product_families.json":{"protocol":"http","parameters":[{"name":"date_field","in":"query","description":"The type of filter you would like to apply to your search.\nUse in query: `date_field=created_at`.","style":"form","explode":true,"schema":{"allOf":[{"title":"BasicDateField","enum":["updated_at","created_at"],"type":"string","description":"Allows to filter by `created_at` or `updated_at`.","example":"updated_at","x-ref":"#/components/schemas/BasicDateField"},{"description":"The type of filter you would like to apply to your search.\nUse in query: `date_field=created_at`.","example":"updated_at"}]},"index$":0},{"name":"start_date","in":"query","description":"The start date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":1},{"name":"end_date","in":"query","description":"The end date (format YYYY-MM-DD) with which to filter the date_field. Returns products with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":2},{"name":"start_datetime","in":"query","description":"The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date.","style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":3},{"name":"end_datetime","in":"query","description":"The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns products with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date.","style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":4}]},"GET /product_families/{id}.json":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The Advanced Billing id of the product family","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const product_family_ref01_ent = client.ProductFamily()
    let product_family_ref01_data = setup.data.new.product_family['product_family_ref01']

    product_family_ref01_data = (await product_family_ref01_ent.create(product_family_ref01_data)).data()
    assert(null != product_family_ref01_data.id)


    // LIST
    const product_family_ref01_match: any = {}

    const product_family_ref01_list = (await product_family_ref01_ent.list(product_family_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(product_family_ref01_list, { id: product_family_ref01_data.id })))


    // LOAD
    const product_family_ref01_match_dt0: any = {}
    product_family_ref01_match_dt0.id = product_family_ref01_data.id
    const product_family_ref01_data_dt0 = (await product_family_ref01_ent.load(product_family_ref01_match_dt0)).data()
    assert(product_family_ref01_data_dt0.id === product_family_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/product_family/ProductFamilyTestData.json')

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
    ['product_family01','product_family02','product_family03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_PRODUCT_FAMILY_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_PRODUCT_FAMILY_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_PRODUCT_FAMILY_ENTID']
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
  
