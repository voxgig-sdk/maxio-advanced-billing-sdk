

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


describe('EventsBasedBillingSegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.EventsBasedBillingSegment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'events_based_billing_segment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"events_based_billing_segment","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /components/{component_id}/price_points/{price_point_id}/segments/{id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$NUMBER`","index$":1},{"a":true,"k":"param","n":"price_point_id","or":"price_point_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/components/{component_id}/price_points/{price_point_id}/segments/{id}.json","q":{"exist":["component_id","id","price_point_id"]},"r":{},"s":[{"lit":"components"},{"var":"component_id"},{"lit":"price_points"},{"var":"price_point_id"},{"lit":"segments"},{"lit":"{id}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.component"]]},"key$":"events_based_billing_segment","name__orig":"events_based_billing_segment","Name":"EventsBasedBillingSegment","name_":"events_based_billing_segment","name-":"events-based-billing-segment","NAME":"EVENTS_BASED_BILLING_SEGMENT","index$":18}, {"active":true,"entity":"events_based_billing_segment","key$":"BasicEventsBasedBillingSegmentFlow","kind":"basic","name":"BasicEventsBasedBillingSegmentFlow","param":{},"step":[]}, 'EventsBasedBillingSegment', {"DELETE /components/{component_id}/price_points/{price_point_id}/segments/{id}.json":{"protocol":"http","parameters":[{"name":"component_id","in":"path","description":"ID or Handle of the Component","required":true,"schema":{"type":"string"},"index$":0},{"name":"price_point_id","in":"path","description":"ID or Handle of the Price Point belonging to the Component","required":true,"schema":{"type":"string"},"index$":1},{"name":"id","in":"path","description":"The ID of the Segment","required":true,"schema":{"type":"number","format":"double"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let events_based_billing_segment_ref01_data = Object.values(setup.data.existing.events_based_billing_segment)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/events_based_billing_segment/EventsBasedBillingSegmentTestData.json')

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
    ['events_based_billing_segment01','events_based_billing_segment02','events_based_billing_segment03','component01','component02','component03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_EVENTS_BASED_BILLING_SEGMENT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_EVENTS_BASED_BILLING_SEGMENT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_EVENTS_BASED_BILLING_SEGMENT_ENTID']
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
  
