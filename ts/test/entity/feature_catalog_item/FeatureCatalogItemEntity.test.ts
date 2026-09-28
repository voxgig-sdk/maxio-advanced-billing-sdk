

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


describe('FeatureCatalogItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.FeatureCatalogItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'feature_catalog_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"t":"`$STRING`","key$":"archived_at","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"feature":{"a":true,"h":"Feature","n":"feature","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"feature","index$":2},"feature_key":{"a":true,"h":"Feature Key","n":"feature_key","r":false,"sh":"The `key` of the parent feature template.","t":"`$STRING`","key$":"feature_key","index$":3},"feature_kind":{"a":true,"h":"Feature Kind","n":"feature_kind","r":false,"t":"`$ANY`","key$":"feature_kind","index$":4},"feature_name":{"a":true,"h":"Feature Name","n":"feature_name","r":false,"sh":"The `name` of the parent feature template.","t":"`$STRING`","key$":"feature_name","index$":5},"feature_template_id":{"a":true,"fo":"int32","h":"Feature Template Id","n":"feature_template_id","r":false,"sh":"The id of the feature template this item was created from.","t":"`$INTEGER`","key$":"feature_template_id","index$":6},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":7},"periodicity_interval":{"a":true,"fo":"int32","h":"Periodicity Interval","n":"periodicity_interval","r":false,"sh":"Set when `feature_kind` is `usage_limit`; `null` otherwise.","t":"`$INTEGER`","key$":"periodicity_interval","index$":8},"periodicity_unit":{"a":true,"h":"Periodicity Unit","n":"periodicity_unit","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"periodicity_unit","index$":9},"price_point_id":{"a":true,"fo":"int32","h":"Price Point Id","n":"price_point_id","r":false,"sh":"Set together with `price_point_type` for price-point-specific overrides.","t":"`$INTEGER`","key$":"price_point_id","index$":10},"price_point_type":{"a":true,"h":"Price Point Type","n":"price_point_type","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"price_point_type","index$":11},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":12},"value":{"a":true,"h":"Value","n":"value","r":false,"sh":"The value granted by this feature catalog item.","t":"`$STRING`","key$":"value","index$":13}},"id":{"field":"id","name":"id"},"name":"feature_catalog_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /components/{component_id}/features/{id}/restore.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/components/{component_id}/features/{id}/restore.json","q":{"$action":"restore.json","exist":["component_id","id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"features"},{"var":"id"},{"lit":"restore.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":0},{"a":true,"co":{"id":"POST /products/{product_id}/features/{id}/restore.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_id","or":"product_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/products/{product_id}/features/{id}/restore.json","q":{"$action":"restore.json","exist":["id","product_id"]},"r":{},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"features"},{"var":"id"},{"lit":"restore.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /components/{component_id}/features/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/components/{component_id}/features/{id}.json","q":{"exist":["component_id","id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"features"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":0},{"a":true,"co":{"id":"GET /products/{product_id}/features/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_id","or":"product_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/products/{product_id}/features/{id}.json","q":{"exist":["id","product_id"]},"r":{},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"features"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /components/{component_id}/features/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PUT","o":"/components/{component_id}/features/{id}.json","q":{"exist":["component_id","id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"features"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":0},{"a":true,"co":{"id":"PUT /products/{product_id}/features/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_id","or":"product_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PUT","o":"/products/{product_id}/features/{id}.json","q":{"exist":["id","product_id"]},"r":{},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"features"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.component"],["$.main.kit.entity.product"]]},"key$":"feature_catalog_item","name__orig":"feature_catalog_item","Name":"FeatureCatalogItem","name_":"feature_catalog_item","name-":"feature-catalog-item","NAME":"FEATURE_CATALOG_ITEM","index$":20}, {"active":true,"entity":"feature_catalog_item","key$":"BasicFeatureCatalogItemFlow","kind":"basic","name":"BasicFeatureCatalogItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"feature_catalog_item_ref01"},"m":{"product_id":"product01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"feature_catalog_item_ref01","srcdatavar":"feature_catalog_item_ref01_data","suffix":"_up0","textfield":"archived_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-feature_catalog_item_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"feature_catalog_item_ref01","srcdatavar":"feature_catalog_item_ref01_data","suffix":"_dt0"},"m":{"id":"feature_catalog_item01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-feature_catalog_item_ref01"}}],"index$":2}]}, 'FeatureCatalogItem', {"POST /components/{component_id}/features/{id}/restore.json":{"protocol":"http","parameters":[{"name":"component_id","in":"path","description":"The Advanced Billing id of the component.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"POST /products/{product_id}/features/{id}/restore.json":{"protocol":"http","parameters":[{"name":"product_id","in":"path","description":"The Advanced Billing id of the product.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"GET /components/{component_id}/features/{id}.json":{"protocol":"http","parameters":[{"name":"component_id","in":"path","description":"The Advanced Billing id of the component.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"GET /products/{product_id}/features/{id}.json":{"protocol":"http","parameters":[{"name":"product_id","in":"path","description":"The Advanced Billing id of the product.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"PUT /components/{component_id}/features/{id}.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"UpdateFeatureCatalogItemRequest","required":["feature"],"type":"object","properties":{"feature":{"title":"Feature3","type":"object","properties":{"value":{"type":"string"},"periodicity_interval":{"type":"integer","format":"int32","nullable":true},"periodicity_unit":{"allOf":[{},{}]},"propagate_to_subscriptions":{"type":"boolean","description":"When `true`, the new `value`/periodicity is immediately applied to every existing entitlement created from this feature catalog item.","default":false}},"x-ref":"#/components/schemas/Feature3","key$":"feature"}},"x-ref":"#/components/schemas/UpdateFeatureCatalogItemRequest","index$":1}}},"required":false},"parameters":[{"name":"component_id","in":"path","description":"The Advanced Billing id of the component.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"PUT /products/{product_id}/features/{id}.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"UpdateFeatureCatalogItemRequest","required":["feature"],"type":"object","properties":{"feature":{"title":"Feature3","type":"object","properties":{"value":{"type":"string"},"periodicity_interval":{"type":"integer","format":"int32","nullable":true},"periodicity_unit":{"allOf":[{},{}]},"propagate_to_subscriptions":{"type":"boolean","description":"When `true`, the new `value`/periodicity is immediately applied to every existing entitlement created from this feature catalog item.","default":false}},"x-ref":"#/components/schemas/Feature3","key$":"feature"}},"x-ref":"#/components/schemas/UpdateFeatureCatalogItemRequest","index$":1}}},"required":false},"parameters":[{"name":"product_id","in":"path","description":"The Advanced Billing id of the product.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"id","in":"path","description":"The Advanced Billing id of the feature catalog item.","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const feature_catalog_item_ref01_ent = client.FeatureCatalogItem()
    let feature_catalog_item_ref01_data = setup.data.new.feature_catalog_item['feature_catalog_item_ref01']
    feature_catalog_item_ref01_data['product_id'] = setup.idmap['product01']

    feature_catalog_item_ref01_data = (await feature_catalog_item_ref01_ent.create(feature_catalog_item_ref01_data)).data()
    assert(null != feature_catalog_item_ref01_data.id)


    // UPDATE
    const feature_catalog_item_ref01_data_up0: any = {}
    feature_catalog_item_ref01_data_up0.id = feature_catalog_item_ref01_data.id

    const feature_catalog_item_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-feature_catalog_item_ref01_' + setup.now }
    ;(feature_catalog_item_ref01_data_up0 as any)[feature_catalog_item_ref01_markdef_up0.name] = feature_catalog_item_ref01_markdef_up0.value

    const feature_catalog_item_ref01_resdata_up0 = (await feature_catalog_item_ref01_ent.update(feature_catalog_item_ref01_data_up0)).data()
    assert(feature_catalog_item_ref01_resdata_up0.id === feature_catalog_item_ref01_data_up0.id)

    assert((feature_catalog_item_ref01_resdata_up0 as any)[feature_catalog_item_ref01_markdef_up0.name] === feature_catalog_item_ref01_markdef_up0.value)


    // LOAD
    const feature_catalog_item_ref01_match_dt0: any = {}
    feature_catalog_item_ref01_match_dt0.id = feature_catalog_item_ref01_data.id
    const feature_catalog_item_ref01_data_dt0 = (await feature_catalog_item_ref01_ent.load(feature_catalog_item_ref01_match_dt0)).data()
    assert(feature_catalog_item_ref01_data_dt0.id === feature_catalog_item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/feature_catalog_item/FeatureCatalogItemTestData.json')

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
    ['feature_catalog_item01','feature_catalog_item02','feature_catalog_item03','component01','component02','component03','product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID']
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
  
