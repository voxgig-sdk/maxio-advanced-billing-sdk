

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


describe('CouponSubcodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.CouponSubcode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coupon_subcode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_codes":{"a":true,"h":"Created Codes","n":"created_codes","r":false,"t":"`$ARRAY`","key$":"created_codes","index$":0},"duplicate_codes":{"a":true,"h":"Duplicate Codes","n":"duplicate_codes","r":false,"t":"`$ARRAY`","key$":"duplicate_codes","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"invalid_codes":{"a":true,"h":"Invalid Codes","n":"invalid_codes","r":false,"t":"`$ARRAY`","key$":"invalid_codes","index$":3}},"id":{"field":"id","name":"id"},"name":"coupon_subcode","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /coupons/{coupon_id}/codes.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/coupons/{coupon_id}/codes.json","q":{"exist":["id"]},"r":{"param":{"coupon_id":"id"}},"s":[{"lit":"coupons"},{"var":"id"},{"lit":"codes.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"coupon_subcode","name__orig":"coupon_subcode","Name":"CouponSubcode","name_":"coupon_subcode","name-":"coupon-subcode","NAME":"COUPON_SUBCODE","index$":10}, {"active":true,"entity":"coupon_subcode","key$":"BasicCouponSubcodeFlow","kind":"basic","name":"BasicCouponSubcodeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"coupon_subcode_ref01","srcdatavar":"coupon_subcode_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coupon_subcode_ref01"}}],"v":[],"index$":0}]}, 'CouponSubcode', {"PUT /coupons/{coupon_id}/codes.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CouponSubcodes","type":"object","properties":{"codes":{"description":"","items":{"type":"string"},"key$":"codes","type":"array"}},"x-ref":"#/components/schemas/CouponSubcodes"},{"example":{"codes":["AAAA","BBBB","CCCC"]}}],"index$":1},"examples":{"Example":{"value":{"codes":["AAAA","BBBB","CCCC"]}}}}},"required":false},"parameters":[{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let coupon_subcode_ref01_data = Object.values(setup.data.existing.coupon_subcode)[0] as any

    // UPDATE
    const coupon_subcode_ref01_ent = client.CouponSubcode()
    const coupon_subcode_ref01_data_up0: any = {}
    coupon_subcode_ref01_data_up0.id = coupon_subcode_ref01_data.id

    const coupon_subcode_ref01_resdata_up0 = (await coupon_subcode_ref01_ent.update(coupon_subcode_ref01_data_up0)).data()
    assert(coupon_subcode_ref01_resdata_up0.id === coupon_subcode_ref01_data_up0.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coupon_subcode/CouponSubcodeTestData.json')

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
    ['coupon_subcode01','coupon_subcode02','coupon_subcode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_COUPON_SUBCODE_ENTID']
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
  
