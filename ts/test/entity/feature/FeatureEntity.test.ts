

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


describe('FeatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Feature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'feature.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"sh":"The date and time the feature template was archived, or `null` if it is active.","t":"`$STRING`","key$":"archived_at","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"default_periodicity_interval":{"a":true,"fo":"int32","h":"Default Periodicity Interval","n":"default_periodicity_interval","r":false,"sh":"For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items.","t":"`$INTEGER`","key$":"default_periodicity_interval","index$":2},"default_periodicity_unit":{"a":true,"h":"Default Periodicity Unit","n":"default_periodicity_unit","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"default_periodicity_unit","index$":3},"default_value":{"a":true,"h":"Default Value","n":"default_value","r":false,"sh":"A default value used to pre-populate new feature catalog items created from this template.","t":"`$STRING`","key$":"default_value","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":5},"feature":{"a":true,"h":"Feature","n":"feature","op":{"create":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":4},"key$":"feature","index$":6},"feature_key":{"a":true,"h":"Feature Key","n":"feature_key","r":false,"sh":"The `key` of the parent feature template.","t":"`$STRING`","key$":"feature_key","index$":7},"feature_kind":{"a":true,"h":"Feature Kind","n":"feature_kind","r":false,"t":"`$ANY`","key$":"feature_kind","index$":8},"feature_name":{"a":true,"h":"Feature Name","n":"feature_name","r":false,"sh":"The `name` of the parent feature template.","t":"`$STRING`","key$":"feature_name","index$":9},"feature_template_id":{"a":true,"fo":"int32","h":"Feature Template Id","n":"feature_template_id","r":false,"sh":"The id of the feature template this item was created from.","t":"`$INTEGER`","key$":"feature_template_id","index$":10},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"sh":"The Advanced Billing id of the feature template.","t":"`$INTEGER`","key$":"id","index$":11},"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"A unique, lowercase, underscore-separated identifier for the feature.","t":"`$STRING`","key$":"key","index$":12},"kind":{"a":true,"h":"Kind","n":"kind","r":false,"t":"`$ANY`","key$":"kind","index$":13},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The display name of the feature.","t":"`$STRING`","key$":"name","index$":14},"periodicity_interval":{"a":true,"fo":"int32","h":"Periodicity Interval","n":"periodicity_interval","r":false,"sh":"Set when `feature_kind` is `usage_limit`; `null` otherwise.","t":"`$INTEGER`","key$":"periodicity_interval","index$":15},"periodicity_unit":{"a":true,"h":"Periodicity Unit","n":"periodicity_unit","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"periodicity_unit","index$":16},"plans_count":{"a":true,"fo":"int32","h":"Plans Count","n":"plans_count","r":false,"sh":"The number of **products** this feature template is currently attached to via an active feature catalog item.","t":"`$INTEGER`","key$":"plans_count","index$":17},"price_point_id":{"a":true,"fo":"int32","h":"Price Point Id","n":"price_point_id","r":false,"sh":"Set together with `price_point_type` for price-point-specific overrides.","t":"`$INTEGER`","key$":"price_point_id","index$":18},"price_point_type":{"a":true,"h":"Price Point Type","n":"price_point_type","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"price_point_type","index$":19},"products_count":{"a":true,"fo":"int32","h":"Products Count","n":"products_count","r":false,"sh":"The number of **components** this feature template is currently attached to via an active feature catalog item.","t":"`$INTEGER`","key$":"products_count","index$":20},"unit":{"a":true,"h":"Unit","n":"unit","r":false,"sh":"The unit the feature is measured in (for example, `requests` or `GB`).","t":"`$STRING`","key$":"unit","index$":21},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":22},"value":{"a":true,"h":"Value","n":"value","r":false,"sh":"The value granted by this feature catalog item.","t":"`$STRING`","key$":"value","index$":23},"value_type":{"a":true,"h":"Value Type","n":"value_type","r":false,"t":"`$ANY`","key$":"value_type","index$":24}},"id":{"field":"id","name":"id"},"name":"feature","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /components/{component_id}/features.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/components/{component_id}/features.json","q":{"exist":["component_id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"features.json"}],"t":{"req":{"feature":"`reqdata`"},"res":"`body.feature`"},"index$":0},{"a":true,"co":{"id":"POST /products/{product_id}/features.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"product_id","or":"product_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/products/{product_id}/features.json","q":{"exist":["product_id"]},"r":{},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"features.json"}],"t":{"req":{"feature":"`reqdata`"},"res":"`body.feature`"},"index$":1},{"a":true,"co":{"id":"POST /features.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/features.json","q":{},"r":{},"s":[{"lit":"features.json"}],"t":{"req":"`reqdata`","res":"`body.feature`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /features.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"kind","or":"kind","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"sort_direction","or":"sort_direction","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"updated_from","or":"updated_from","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"updated_to","or":"updated_to","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/features.json","q":{"exist":["kind","page","per_page","q","sort_by","sort_direction","status","updated_from","updated_to"]},"r":{},"s":[{"lit":"features.json"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0},{"a":true,"co":{"id":"GET /components/{component_id}/features.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/components/{component_id}/features.json","q":{"exist":["component_id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"features.json"}],"t":{"req":"`reqdata`","res":"`body.features`"},"index$":1},{"a":true,"co":{"id":"GET /products/{product_id}/features.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"product_id","or":"product_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/products/{product_id}/features.json","q":{"exist":["product_id"]},"r":{},"s":[{"lit":"products"},{"var":"product_id"},{"lit":"features.json"}],"t":{"req":"`reqdata`","res":"`body.features`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.component"],["$.main.kit.entity.product"]]},"key$":"feature","name__orig":"feature","Name":"Feature","name_":"feature","name-":"feature","NAME":"FEATURE","index$":19}, {"active":true,"entity":"feature","key$":"BasicFeatureFlow","kind":"basic","name":"BasicFeatureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"feature_ref01"},"m":{"component_id":"component01","product_id":"product01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"product_id":"product01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"feature_ref01"}}],"index$":1}]}, 'Feature', {"POST /components/{component_id}/features.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"CreateFeatureCatalogItemRequest","required":["feature"],"type":"object","properties":{"feature":{"title":"Feature2","required":["feature_template_id","value"],"type":"object","properties":{"feature_template_id":{"type":"integer","description":"The id of the feature template to attach.","format":"int32"},"value":{"type":"string"},"periodicity_interval":{"type":"integer","format":"int32","nullable":true},"periodicity_unit":{"allOf":[{},{}]},"price_point_type":{"allOf":[{},{}]},"price_point_id":{"type":"integer","format":"int32","nullable":true},"propagate_to_subscriptions":{"type":"boolean","description":"When `true`, existing subscriptions on this product/component are immediately granted an entitlement for this feature, instead of waiting for their next subscription change.","default":false}},"x-ref":"#/components/schemas/Feature2","key$":"feature"}},"description":"The owning product or component is taken from the URL and must not be included in the request body.","x-ref":"#/components/schemas/CreateFeatureCatalogItemRequest","index$":1}}},"required":false},"parameters":[{"name":"component_id","in":"path","description":"The Advanced Billing id of the component.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /products/{product_id}/features.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"CreateFeatureCatalogItemRequest","required":["feature"],"type":"object","properties":{"feature":{"title":"Feature2","required":["feature_template_id","value"],"type":"object","properties":{"feature_template_id":{"type":"integer","description":"The id of the feature template to attach.","format":"int32"},"value":{"type":"string"},"periodicity_interval":{"type":"integer","format":"int32","nullable":true},"periodicity_unit":{"allOf":[{},{}]},"price_point_type":{"allOf":[{},{}]},"price_point_id":{"type":"integer","format":"int32","nullable":true},"propagate_to_subscriptions":{"type":"boolean","description":"When `true`, existing subscriptions on this product/component are immediately granted an entitlement for this feature, instead of waiting for their next subscription change.","default":false}},"x-ref":"#/components/schemas/Feature2","key$":"feature"}},"description":"The owning product or component is taken from the URL and must not be included in the request body.","x-ref":"#/components/schemas/CreateFeatureCatalogItemRequest","index$":1}}},"required":false},"parameters":[{"name":"product_id","in":"path","description":"The Advanced Billing id of the product.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /features.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateFeatureTemplateRequest","required":["feature"],"type":"object","properties":{"feature":{"title":"Feature","required":["key","name","kind"],"type":"object","properties":{"key":{},"name":{},"description":{},"kind":{},"unit":{},"value_type":{},"default_value":{},"default_periodicity_interval":{},"default_periodicity_unit":{}},"x-ref":"#/components/schemas/Feature"}},"x-ref":"#/components/schemas/CreateFeatureTemplateRequest"},{"example":{"feature":{"key":"sso","name":"Single Sign-On","kind":"access_right"}}}],"index$":1},"examples":{"Example":{"value":{"feature":{"key":"sso","name":"Single Sign-On","kind":"access_right"}}}}}},"required":false},"parameters":[]},"GET /features.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":1},{"name":"status","in":"query","description":"Filters by archived state. Defaults to `active` (non-archived templates only).","style":"form","explode":true,"schema":{"allOf":[{"title":"status1","enum":["active","archived","all"],"type":"string","x-ref":"#/components/schemas/status1"},{"description":"Filters by archived state. Defaults to `active` (non-archived templates only)."}]},"index$":2},{"name":"q","in":"query","description":"Filters to feature templates whose name contains this substring (case-insensitive).","style":"form","explode":true,"schema":{"type":"string"},"index$":3},{"name":"kind","in":"query","description":"Filters by feature kind.","style":"form","explode":true,"schema":{"allOf":[{"title":"kind","enum":["access_right","usage_limit","service_right","all"],"type":"string","x-ref":"#/components/schemas/kind"},{"description":"Filters by feature kind."}]},"index$":4},{"name":"updated_from","in":"query","description":"Returns feature templates updated on or after this date.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":5},{"name":"updated_to","in":"query","description":"Returns feature templates updated on or before this date.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":6},{"name":"sort_by","in":"query","description":"The field to sort results by.","style":"form","explode":true,"schema":{"allOf":[{"title":"sort_by","enum":["name","updated_at","kind","value_type"],"type":"string","x-ref":"#/components/schemas/sort_by"},{"description":"The field to sort results by."}]},"index$":7},{"name":"sort_direction","in":"query","description":"The sort direction of the returned feature templates.","style":"form","explode":true,"schema":{"allOf":[{"title":"sort_direction","enum":["asc","desc"],"type":"string","x-ref":"#/components/schemas/sort_direction"},{"description":"The sort direction of the returned feature templates."}]},"index$":8}]},"GET /components/{component_id}/features.json":{"protocol":"http","parameters":[{"name":"component_id","in":"path","description":"The Advanced Billing id of the component.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"GET /products/{product_id}/features.json":{"protocol":"http","parameters":[{"name":"product_id","in":"path","description":"The Advanced Billing id of the product.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const feature_ref01_ent = client.Feature()
    let feature_ref01_data = setup.data.new.feature['feature_ref01']
    feature_ref01_data['component_id'] = setup.idmap['component01']
    feature_ref01_data['product_id'] = setup.idmap['product01']

    feature_ref01_data = (await feature_ref01_ent.create(feature_ref01_data)).data()
    assert(null != feature_ref01_data.id)


    // LIST
    const feature_ref01_match: any = {}
    feature_ref01_match['product_id'] = setup.idmap['product01']

    const feature_ref01_list = (await feature_ref01_ent.list(feature_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(feature_ref01_list, { id: feature_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/feature/FeatureTestData.json')

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
    ['feature01','feature02','feature03','component01','component02','component03','product01','product02','product03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_FEATURE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_ENTID']
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
  
