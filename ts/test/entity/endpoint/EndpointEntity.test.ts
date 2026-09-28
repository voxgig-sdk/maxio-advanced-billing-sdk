

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


describe('EndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Endpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":0},"site_id":{"a":true,"fo":"int32","h":"Site Id","n":"site_id","r":false,"t":"`$INTEGER`","key$":"site_id","index$":1},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":2},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":3},"webhook_subscriptions":{"a":true,"h":"Webhook Subscriptions","n":"webhook_subscriptions","r":false,"t":"`$ARRAY`","key$":"webhook_subscriptions","index$":4}},"id":{"field":"id","name":"id"},"name":"endpoint","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /endpoints.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/endpoints.json","q":{},"r":{},"s":[{"lit":"endpoints.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /endpoints/{endpoint_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"endpoint_id","or":"endpoint_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/endpoints/{endpoint_id}.json","q":{"$action":"endpoint_id","exist":["endpoint_id"]},"r":{},"s":[{"lit":"endpoints"},{"lit":"{endpoint_id}.json"}],"t":{"req":"`reqdata`","res":"`body.endpoint`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"endpoint","name__orig":"endpoint","Name":"Endpoint","name_":"endpoint","name-":"endpoint","NAME":"ENDPOINT","index$":15}, {"active":true,"entity":"endpoint","key$":"BasicEndpointFlow","kind":"basic","name":"BasicEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"endpoint_ref01"}}],"index$":0},{"a":true,"d":{"endpoint_id":"endpoint01"},"i":{"ref":"endpoint_ref01","srcdatavar":"endpoint_ref01_data","suffix":"_up0","textfield":"status"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-endpoint_ref01"}}],"v":[],"index$":1}]}, 'Endpoint', {"GET /endpoints.json":{"protocol":"http","parameters":[]},"PUT /endpoints/{endpoint_id}.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateorUpdateEndpointRequest","required":["endpoint"],"type":"object","properties":{"endpoint":{"allOf":[{},{}]}},"description":"Used to Create or Update Endpoint.","x-ref":"#/components/schemas/CreateorUpdateEndpointRequest"},{"example":{"endpoint":{"url":"https://your.site/webhooks/1/json.","webhook_subscriptions":["payment_failure","payment_success","refund_failure","invoice_pending"]}}}]},"examples":{"Example":{"value":{"endpoint":{"url":"https://your.site/webhooks/1/json.","webhook_subscriptions":["payment_failure","payment_success","refund_failure","invoice_pending"]}}}}}},"required":false},"parameters":[{"name":"endpoint_id","in":"path","description":"The Advanced Billing id for the endpoint that should be updated","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let endpoint_ref01_data = Object.values(setup.data.existing.endpoint)[0] as any

    // LIST
    const endpoint_ref01_ent = client.Endpoint()
    const endpoint_ref01_match: any = {}

    const endpoint_ref01_list = (await endpoint_ref01_ent.list(endpoint_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const endpoint_ref01_data_up0: any = {}
    endpoint_ref01_data_up0.id = endpoint_ref01_data.id
    endpoint_ref01_data_up0 ['endpoint_id'] = setup.idmap['endpoint_id']

    const endpoint_ref01_markdef_up0 = { name: 'status', value: 'Mark01-endpoint_ref01_' + setup.now }
    ;(endpoint_ref01_data_up0 as any)[endpoint_ref01_markdef_up0.name] = endpoint_ref01_markdef_up0.value

    const endpoint_ref01_resdata_up0 = (await endpoint_ref01_ent.update(endpoint_ref01_data_up0)).data()
    assert(endpoint_ref01_resdata_up0.id === endpoint_ref01_data_up0.id)

    assert((endpoint_ref01_resdata_up0 as any)[endpoint_ref01_markdef_up0.name] === endpoint_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/endpoint/EndpointTestData.json')

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
    ['endpoint01','endpoint02','endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_ENDPOINT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_ENDPOINT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_ENDPOINT_ENTID']
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
  
