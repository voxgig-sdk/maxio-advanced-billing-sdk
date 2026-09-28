

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


describe('AccountBalanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.AccountBalance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'account_balance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"open_invoices":{"a":true,"h":"Open Invoices","n":"open_invoices","r":false,"t":"`$ANY`","key$":"open_invoices","index$":0},"pending_discounts":{"a":true,"h":"Pending Discounts","n":"pending_discounts","r":false,"t":"`$ANY`","key$":"pending_discounts","index$":1},"pending_invoices":{"a":true,"h":"Pending Invoices","n":"pending_invoices","r":false,"t":"`$ANY`","key$":"pending_invoices","index$":2},"prepayments":{"a":true,"h":"Prepayments","n":"prepayments","r":false,"t":"`$ANY`","key$":"prepayments","index$":3},"service_credits":{"a":true,"h":"Service Credits","n":"service_credits","r":false,"t":"`$ANY`","key$":"service_credits","index$":4}},"name":"account_balance","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/account_balances.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/account_balances.json","q":{"exist":["subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"account_balances.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.subscription"]]},"key$":"account_balance","name__orig":"account_balance","Name":"AccountBalance","name_":"account_balance","name-":"account-balance","NAME":"ACCOUNT_BALANCE","index$":0}, {"active":true,"entity":"account_balance","key$":"BasicAccountBalanceFlow","kind":"basic","name":"BasicAccountBalanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"account_balance_ref01","srcdatavar":"account_balance_ref01_data","suffix":"_dt0"},"m":{"id":"account_balance01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-account_balance_ref01"}}],"index$":0}]}, 'AccountBalance', {"GET /subscriptions/{subscription_id}/account_balances.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let account_balance_ref01_data = Object.values(setup.data.existing.account_balance)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const account_balance_ref01_ent = client.AccountBalance()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account_balance/AccountBalanceTestData.json')

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
    ['account_balance01','account_balance02','account_balance03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_ACCOUNT_BALANCE_ENTID']
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
  
