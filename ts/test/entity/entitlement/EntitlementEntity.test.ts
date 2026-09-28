

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


describe('EntitlementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Entitlement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'entitlement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customer_id":{"a":true,"fo":"int32","h":"Customer Id","n":"customer_id","r":true,"t":"`$INTEGER`","key$":"customer_id","index$":0},"entitlements":{"a":true,"h":"Entitlements","n":"entitlements","r":true,"t":"`$ARRAY`","union":{"branches":3,"count":2,"depth":5},"key$":"entitlements","index$":1},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"The subscription's current state, e.g.","t":"`$STRING`","key$":"status","index$":2},"subscription_id":{"a":true,"fo":"int32","h":"Subscription Id","n":"subscription_id","r":true,"t":"`$INTEGER`","key$":"subscription_id","index$":3}},"name":"entitlement","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/entitlements.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/entitlements.json","q":{"exist":["subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"entitlements.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.subscription"]]},"key$":"entitlement","name__orig":"entitlement","Name":"Entitlement","name_":"entitlement","name-":"entitlement","NAME":"ENTITLEMENT","index$":16}, {"active":true,"entity":"entitlement","key$":"BasicEntitlementFlow","kind":"basic","name":"BasicEntitlementFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"subscription_id":"subscription01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"entitlement_ref01"}}],"index$":0}]}, 'Entitlement', {"GET /subscriptions/{subscription_id}/entitlements.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let entitlement_ref01_data = Object.values(setup.data.existing.entitlement)[0] as any

    // LIST
    const entitlement_ref01_ent = client.Entitlement()
    const entitlement_ref01_match: any = {}
    entitlement_ref01_match['subscription_id'] = setup.idmap['subscription01']

    const entitlement_ref01_list = (await entitlement_ref01_ent.list(entitlement_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/entitlement/EntitlementTestData.json')

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
    ['entitlement01','entitlement02','entitlement03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_ENTITLEMENT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_ENTITLEMENT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_ENTITLEMENT_ENTID']
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
  
