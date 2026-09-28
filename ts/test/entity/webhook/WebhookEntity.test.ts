

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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"endpoint":{"a":true,"h":"Endpoint","n":"endpoint","r":false,"t":"`$OBJECT`","key$":"endpoint","index$":0},"webhook":{"a":true,"h":"Webhook","n":"webhook","r":false,"t":"`$OBJECT`","key$":"webhook","index$":1}},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /endpoints.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/endpoints.json","q":{},"r":{},"s":[{"lit":"endpoints.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /webhooks/replay.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/webhooks/replay.json","q":{"$action":"replay"},"r":{},"s":[{"lit":"webhooks"},{"lit":"replay.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"since_date","or":"since_date","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"subscription","or":"subscription","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"until_date","or":"until_date","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/webhooks.json","q":{"exist":["order","page","per_page","since_date","status","subscription","until_date"]},"r":{},"s":[{"lit":"webhooks.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /webhooks/settings.json","source":"openapi3","version":2},"g":{},"k":"http","m":"PUT","o":"/webhooks/settings.json","q":{"$action":"setting"},"r":{},"s":[{"lit":"webhooks"},{"lit":"settings.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":56}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhook_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"v":[],"index$":2}]}, 'Webhook', {"POST /endpoints.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateorUpdateEndpointRequest","required":["endpoint"],"type":"object","properties":{"endpoint":{"allOf":[{},{}]}},"description":"Used to Create or Update Endpoint.","x-ref":"#/components/schemas/CreateorUpdateEndpointRequest"},{"example":{"endpoint":{"url":"https://your.site/webhooks","webhook_subscriptions":["payment_success","payment_failure","invoice_pending"]}}}],"index$":1},"examples":{"Example":{"value":{"endpoint":{"url":"https://your.site/webhooks","webhook_subscriptions":["payment_success","payment_failure","invoice_pending"]}}}}}},"required":false},"parameters":[]},"POST /webhooks/replay.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"ReplayWebhooksRequest","required":["ids"],"type":"object","properties":{"ids":{"type":"array","items":{"type":"integer","format":"int64"},"description":""}},"x-ref":"#/components/schemas/ReplayWebhooksRequest"},{"example":{"ids":[123456789,123456788]}}]},"examples":{"Example":{"value":{"ids":[123456789,123456788]}}}}},"required":false},"parameters":[]},"GET /webhooks.json":{"protocol":"http","parameters":[{"name":"status","in":"query","description":"Webhooks with matching status would be returned.","style":"form","explode":true,"schema":{"allOf":[{"title":"WebhookStatus","enum":["successful","failed","pending","paused"],"type":"string","x-ref":"#/components/schemas/WebhookStatus"},{"description":"Webhooks with matching status would be returned."}]},"index$":0},{"name":"since_date","in":"query","description":"Format YYYY-MM-DD. Returns Webhooks with the created_at date greater than or equal to the one specified.","style":"form","explode":true,"schema":{"type":"string"},"index$":1},{"name":"until_date","in":"query","description":"Format YYYY-MM-DD. Returns Webhooks with the created_at date less than or equal to the one specified.","style":"form","explode":true,"schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":3},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":4},{"name":"order","in":"query","description":"The order in which the Webhooks are returned.","style":"form","explode":true,"schema":{"allOf":[{"title":"WebhookOrder","enum":["newest_first","oldest_first"],"type":"string","x-ref":"#/components/schemas/WebhookOrder"},{"description":"The order in which the Webhooks are returned."}]},"index$":5},{"name":"subscription","in":"query","description":"The Advanced Billing id of a subscription you'd like to filter for","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":6}]},"PUT /webhooks/settings.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"EnableWebhooksRequest","required":["webhooks_enabled"],"type":"object","properties":{"webhooks_enabled":{"type":"boolean"}},"x-ref":"#/components/schemas/EnableWebhooksRequest"},{"example":{"webhooks_enabled":true}}]},"examples":{"Example":{"value":{"webhooks_enabled":true}}}}},"required":false},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data)


    // LIST
    const webhook_ref01_match: any = {}

    const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const webhook_ref01_data_up0: any = {}

    const webhook_ref01_resdata_up0 = (await webhook_ref01_ent.update(webhook_ref01_data_up0)).data()
    assert(null != webhook_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_WEBHOOK_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_WEBHOOK_ENTID']
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
  
