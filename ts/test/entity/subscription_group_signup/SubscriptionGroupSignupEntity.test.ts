

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


describe('SubscriptionGroupSignupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SubscriptionGroupSignup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_group_signup.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"subscription_group_signup","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscription_groups/signup.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/subscription_groups/signup.json","q":{},"r":{},"s":[{"lit":"subscription_groups"},{"lit":"signup.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"subscription_group_signup","name__orig":"subscription_group_signup","Name":"SubscriptionGroupSignup","name_":"subscription_group_signup","name-":"subscription-group-signup","NAME":"SUBSCRIPTION_GROUP_SIGNUP","index$":47}, {"active":true,"entity":"subscription_group_signup","key$":"BasicSubscriptionGroupSignupFlow","kind":"basic","name":"BasicSubscriptionGroupSignupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"subscription_group_signup_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SubscriptionGroupSignup', {"POST /subscription_groups/signup.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"SubscriptionGroupSignupRequest","required":["subscription_group"],"type":"object","properties":{"subscription_group":{"title":"SubscriptionGroupSignup","required":["subscriptions"],"type":"object","properties":{"payment_profile_id":{},"payer_id":{},"payer_reference":{},"payment_collection_method":{},"payer_attributes":{},"credit_card_attributes":{},"bank_account_attributes":{},"subscriptions":{}},"x-ref":"#/components/schemas/SubscriptionGroupSignup"}},"x-ref":"#/components/schemas/SubscriptionGroupSignupRequest"},{"example":{"subscription_group":{"payment_profile_id":123,"payer_id":123,"subscriptions":[{},{},{}]}}}],"index$":1},"examples":{"Basic request":{"value":{"subscription_group":{"payment_profile_id":123,"payer_id":123,"subscriptions":[{"product_id":11,"primary":true},{"product_id":12},{"product_id":13}]}}},"Create credit card using Maxio.js token":{"value":{"subscription_group":{"payer_id":123,"credit_card_attributes":{"chargify_token":"tok_19gnjsa9433u9b22","last_four":"1111","card_type":"visa"},"subscriptions":[{"product_id":11,"primary":true},{"product_id":12},{"product_id":13}]}}},"Create bank account using Maxio.js token":{"value":{"subscription_group":{"payer_id":234,"bank_account_attributes":{"chargify_token":"tok_19gnjsa9433u9b22"},"subscriptions":[{"product_id":11,"primary":true},{"product_id":12},{"product_id":13}]}}},"Create group with subscription and customer metafields":{"value":{"subscription_group":{"payer_attributes":{"first_name":"John","last_name":"Doe","email":"john@example.com","organization":"Acme, Inc","metafields":{"win-over":"ABCompany"}},"payment_collection_method":"remittance","subscriptions":[{"product_id":123,"primary":true,"metafields":{}},{"product_handle":"silver-plan","metafields":{}},{"product_id":124}]}}},"Create subscription with components":{"value":{"subscription_group":{"payment_profile_id":123,"payer_id":123,"subscriptions":[{"product_id":11,"primary":true,"components":[]},{"product_id":12},{"product_id":13}]}}},"Create subscription with Custom Pricing":{"value":{"subscription_group":{"payment_profile_id":123,"payer_id":123,"subscriptions":[{"product_id":19,"custom_price":{},"primary":true},{"product_id":12,"components":[]},{"product_id":13}]}}}}}},"required":false},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_group_signup_ref01_ent = client.SubscriptionGroupSignup()
    let subscription_group_signup_ref01_data = setup.data.new.subscription_group_signup['subscription_group_signup_ref01']

    subscription_group_signup_ref01_data = (await subscription_group_signup_ref01_ent.create(subscription_group_signup_ref01_data)).data()
    assert(null != subscription_group_signup_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_group_signup/SubscriptionGroupSignupTestData.json')

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
    ['subscription_group_signup01','subscription_group_signup02','subscription_group_signup03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_SIGNUP_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_SIGNUP_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_SIGNUP_ENTID']
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
  
