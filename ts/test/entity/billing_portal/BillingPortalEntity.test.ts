

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


describe('BillingPortalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.BillingPortal()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billing_portal.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":1},"fetch_count":{"a":true,"fo":"int32","h":"Fetch Count","n":"fetch_count","r":false,"t":"`$INTEGER`","key$":"fetch_count","index$":2},"last_accepted_at":{"a":true,"de":true,"h":"Last Accepted At","n":"last_accepted_at","r":false,"t":"`$STRING`","key$":"last_accepted_at","index$":3},"last_invite_accepted_at":{"a":true,"fo":"date-time","h":"Last Invite Accepted At","n":"last_invite_accepted_at","r":false,"t":"`$STRING`","key$":"last_invite_accepted_at","index$":4},"last_invite_sent_at":{"a":true,"fo":"date-time","h":"Last Invite Sent At","n":"last_invite_sent_at","r":false,"t":"`$STRING`","key$":"last_invite_sent_at","index$":5},"last_sent_at":{"a":true,"de":true,"h":"Last Sent At","n":"last_sent_at","r":false,"t":"`$STRING`","key$":"last_sent_at","index$":6},"new_link_available_at":{"a":true,"fo":"date-time","h":"New Link Available At","n":"new_link_available_at","r":false,"t":"`$STRING`","key$":"new_link_available_at","index$":7},"send_invite_link_text":{"a":true,"h":"Send Invite Link Text","n":"send_invite_link_text","r":false,"t":"`$STRING`","key$":"send_invite_link_text","index$":8},"uninvited_count":{"a":true,"fo":"int32","h":"Uninvited Count","n":"uninvited_count","r":false,"t":"`$INTEGER`","key$":"uninvited_count","index$":9},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":10}},"name":"billing_portal","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /portal/customers/{customer_id}/invitations/invite.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/portal/customers/{customer_id}/invitations/invite.json","q":{"exist":["customer_id"]},"r":{},"s":[{"lit":"portal"},{"lit":"customers"},{"var":"customer_id"},{"lit":"invitations"},{"lit":"invite.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /portal/customers/{customer_id}/management_link.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/portal/customers/{customer_id}/management_link.json","q":{"exist":["customer_id"]},"r":{},"s":[{"lit":"portal"},{"lit":"customers"},{"var":"customer_id"},{"lit":"management_link.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /portal/customers/{customer_id}/invitations/revoke.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"customer_id","or":"customer_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/portal/customers/{customer_id}/invitations/revoke.json","q":{"exist":["customer_id"]},"r":{},"s":[{"lit":"portal"},{"lit":"customers"},{"var":"customer_id"},{"lit":"invitations"},{"lit":"revoke.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.customer"]]},"key$":"billing_portal","name__orig":"billing_portal","Name":"BillingPortal","name_":"billing_portal","name-":"billing-portal","NAME":"BILLING_PORTAL","index$":3}, {"active":true,"entity":"billing_portal","key$":"BasicBillingPortalFlow","kind":"basic","name":"BasicBillingPortalFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"billing_portal_ref01"},"m":{"customer_id":"customer01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"billing_portal_ref01","srcdatavar":"billing_portal_ref01_data","suffix":"_dt0"},"m":{"id":"billing_portal01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-billing_portal_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"billing_portal_ref01","suffix":"_rm0"},"m":{"id":"billing_portal01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'BillingPortal', {"POST /portal/customers/{customer_id}/invitations/invite.json":{"protocol":"http","parameters":[{"name":"customer_id","in":"path","description":"The Chargify id of the customer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"GET /portal/customers/{customer_id}/management_link.json":{"protocol":"http","parameters":[{"name":"customer_id","in":"path","description":"The Chargify id of the customer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"DELETE /portal/customers/{customer_id}/invitations/revoke.json":{"protocol":"http","parameters":[{"name":"customer_id","in":"path","description":"The Chargify id of the customer","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const billing_portal_ref01_ent = client.BillingPortal()
    let billing_portal_ref01_data = setup.data.new.billing_portal['billing_portal_ref01']
    billing_portal_ref01_data['customer_id'] = setup.idmap['customer01']

    billing_portal_ref01_data = (await billing_portal_ref01_ent.create(billing_portal_ref01_data)).data()
    assert(null != billing_portal_ref01_data)




  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billing_portal/BillingPortalTestData.json')

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
    ['billing_portal01','billing_portal02','billing_portal03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_BILLING_PORTAL_ENTID']
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
  
