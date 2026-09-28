

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


describe('ReferralCodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.ReferralCode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'referral_code.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"referral_code","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /referral_codes/validate.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"code","or":"code","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/referral_codes/validate.json","q":{"$action":"validate","exist":["code"]},"r":{},"s":[{"lit":"referral_codes"},{"lit":"validate.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"referral_code","name__orig":"referral_code","Name":"ReferralCode","name_":"referral_code","name-":"referral-code","NAME":"REFERRAL_CODE","index$":37}, {"active":true,"entity":"referral_code","key$":"BasicReferralCodeFlow","kind":"basic","name":"BasicReferralCodeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"referral_code_ref01","srcdatavar":"referral_code_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-referral_code_ref01"}}],"index$":0}]}, 'ReferralCode', {"GET /referral_codes/validate.json":{"protocol":"http","parameters":[{"name":"code","in":"query","description":"The referral code you are trying to validate","required":true,"style":"form","explode":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let referral_code_ref01_data = Object.values(setup.data.existing.referral_code)[0] as any

    // LOAD
    const referral_code_ref01_ent = client.ReferralCode()
    const referral_code_ref01_match_dt0: any = {}
    const referral_code_ref01_data_dt0 = (await referral_code_ref01_ent.load(referral_code_ref01_match_dt0)).data()
    assert(null != referral_code_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/referral_code/ReferralCodeTestData.json')

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
    ['referral_code01','referral_code02','referral_code03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_REFERRAL_CODE_ENTID']
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
  
