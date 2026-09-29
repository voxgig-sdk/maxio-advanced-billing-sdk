

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


describe('SubscriptionGroupStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SubscriptionGroupStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_group_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"subscription_group_status","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscription_groups/{uid}/cancel.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/subscription_groups/{uid}/cancel.json","q":{"$action":"cancel.json","exist":["id"]},"r":{"param":{"uid":"id"}},"s":[{"lit":"subscription_groups"},{"var":"id"},{"lit":"cancel.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /subscription_groups/{uid}/delayed_cancel.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/subscription_groups/{uid}/delayed_cancel.json","q":{"$action":"delayed_cancel.json","exist":["id"]},"r":{"param":{"uid":"id"}},"s":[{"lit":"subscription_groups"},{"var":"id"},{"lit":"delayed_cancel.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /subscription_groups/{uid}/reactivate.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/subscription_groups/{uid}/reactivate.json","q":{"$action":"reactivate.json","exist":["id"]},"r":{"param":{"uid":"id"}},"s":[{"lit":"subscription_groups"},{"var":"id"},{"lit":"reactivate.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /subscription_groups/{uid}/delayed_cancel.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/subscription_groups/{uid}/delayed_cancel.json","q":{"$action":"delayed_cancel.json","exist":["id"]},"r":{"param":{"uid":"id"}},"s":[{"lit":"subscription_groups"},{"var":"id"},{"lit":"delayed_cancel.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"subscription_group_status","name__orig":"subscription_group_status","Name":"SubscriptionGroupStatus","name_":"subscription_group_status","name-":"subscription-group-status","NAME":"SUBSCRIPTION_GROUP_STATUS","index$":47}, {"active":true,"entity":"subscription_group_status","key$":"BasicSubscriptionGroupStatusFlow","kind":"basic","name":"BasicSubscriptionGroupStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"subscription_group_status_ref01"},"m":{"uid":"uid01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"subscription_group_status_ref01","suffix":"_rm0"},"m":{"id":"subscription_group_status01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'SubscriptionGroupStatus', {"POST /subscription_groups/{uid}/cancel.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CancelGroupedSubscriptionsRequest","type":"object","properties":{"charge_unbilled_usage":{"type":"boolean"}},"x-ref":"#/components/schemas/CancelGroupedSubscriptionsRequest"},{"example":{"charge_unbilled_usage":true}}]},"examples":{"Example":{"value":{"charge_unbilled_usage":true}}}}},"required":false},"parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0}]},"POST /subscription_groups/{uid}/delayed_cancel.json":{"protocol":"http","parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0}]},"POST /subscription_groups/{uid}/reactivate.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"ReactivateSubscriptionGroupRequest","type":"object","properties":{"resume":{"type":"boolean"},"resume_members":{"type":"boolean"}},"x-ref":"#/components/schemas/ReactivateSubscriptionGroupRequest"},{"example":{"resume":true}}]},"examples":{"Example":{"value":{"resume":true}}}}},"required":false},"parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0}]},"DELETE /subscription_groups/{uid}/delayed_cancel.json":{"protocol":"http","parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_group_status_ref01_ent = client.SubscriptionGroupStatus()
    let subscription_group_status_ref01_data = setup.data.new.subscription_group_status['subscription_group_status_ref01']
    subscription_group_status_ref01_data['uid'] = setup.idmap['uid01']

    subscription_group_status_ref01_data = (await subscription_group_status_ref01_ent.create(subscription_group_status_ref01_data)).data()
    assert(null != subscription_group_status_ref01_data.id)


    // REMOVE
    const subscription_group_status_ref01_match_rm0: any = { id: subscription_group_status_ref01_data.id }
    await subscription_group_status_ref01_ent.remove(subscription_group_status_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_group_status/SubscriptionGroupStatusTestData.json')

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
    ['subscription_group_status01','subscription_group_status02','subscription_group_status03','uid01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_STATUS_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_STATUS_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_STATUS_ENTID']
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
  
