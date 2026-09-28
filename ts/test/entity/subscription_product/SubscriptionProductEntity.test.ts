

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


describe('SubscriptionProductEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.SubscriptionProduct()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'subscription_product.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"migration":{"a":true,"h":"Migration","n":"migration","r":true,"t":"`$OBJECT`","key$":"migration","index$":1}},"id":{"field":"id","name":"id"},"name":"subscription_product","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/migrations.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/migrations.json","q":{"$action":"migrations.json","exist":["id"]},"r":{"param":{"subscription_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"id"},{"lit":"migrations.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/migrations/preview.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/migrations/preview.json","q":{"exist":["subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"migrations"},{"lit":"preview.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.subscription"]]},"key$":"subscription_product","name__orig":"subscription_product","Name":"SubscriptionProduct","name_":"subscription_product","name-":"subscription-product","NAME":"SUBSCRIPTION_PRODUCT","index$":52}, {"active":true,"entity":"subscription_product","key$":"BasicSubscriptionProductFlow","kind":"basic","name":"BasicSubscriptionProductFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"subscription_product_ref01"},"m":{"subscription_id":"subscription01"},"o":"create","s":[],"v":[],"index$":0}]}, 'SubscriptionProduct', {"POST /subscriptions/{subscription_id}/migrations.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"SubscriptionProductMigrationRequest","required":["migration"],"type":"object","properties":{"migration":{"title":"SubscriptionProductMigration","type":"object","properties":{"product_id":{},"product_price_point_id":{},"include_trial":{},"include_initial_charge":{},"include_coupons":{},"preserve_period":{},"product_handle":{},"product_price_point_handle":{},"proration":{}},"x-ref":"#/components/schemas/SubscriptionProductMigration"}},"x-ref":"#/components/schemas/SubscriptionProductMigrationRequest"},{"example":{"migration":{"product_id":3801242,"include_trial":false,"include_initial_charge":false,"include_coupons":true,"preserve_period":true}}}]},"examples":{"Example":{"value":{"migration":{"product_id":3801242,"include_trial":false,"include_initial_charge":false,"include_coupons":true,"preserve_period":true}}}}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /subscriptions/{subscription_id}/migrations/preview.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"SubscriptionMigrationPreviewRequest","required":["migration"],"type":"object","properties":{"migration":{"title":"SubscriptionMigrationPreviewOptions","type":"object","properties":{"product_id":{"type":"integer","description":"The ID of the target Product. Either a product_id or product_handle must be present. A Subscription can be migrated to another product for both the current Product Family and another Product Family. Note: Going to another Product Family, components will not be migrated as well.","format":"int32"},"product_price_point_id":{"type":"integer","description":"The ID of the specified product's price point. This can be passed to migrate to a non-default price point.","format":"int32"},"include_trial":{"type":"boolean","description":"Whether to include the trial period configured for the product price point when starting a new billing period. Note that if preserve_period is set, then include_trial will be ignored.","default":false},"include_initial_charge":{"type":"boolean","description":"If `true` is sent initial charges will be assessed.","default":false},"include_coupons":{"type":"boolean","description":"If `true` is sent, any coupons associated with the subscription will be applied to the migration. If `false` is sent, coupons will not be applied. Note: When migrating to a new product family, the coupon cannot migrate.","default":true},"preserve_period":{"type":"boolean","description":"If `false` is sent, the subscription's billing period will be reset to today and the full price of the new product will be charged. If `true` is sent, the billing period will not change and a prorated charge will be issued for the new product.","default":false},"product_handle":{"type":"string","description":"The handle of the target Product. Either a product_id or product_handle must be present. A Subscription can be migrated to another product for both the current Product Family and another Product Family. Note: Going to another Product Family, components will not be migrated as well."},"product_price_point_handle":{"type":"string","description":"The ID or handle of the specified product's price point. This can be passed to migrate to a non-default price point."},"proration":{"title":"Proration","type":"object","properties":{"preserve_period":{}},"x-ref":"#/components/schemas/Proration"},"proration_date":{"type":"string","description":"The date that the proration is calculated from for the preview","format":"date-time"}},"x-ref":"#/components/schemas/SubscriptionMigrationPreviewOptions","key$":"migration"}},"x-ref":"#/components/schemas/SubscriptionMigrationPreviewRequest","index$":1}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const subscription_product_ref01_ent = client.SubscriptionProduct()
    let subscription_product_ref01_data = setup.data.new.subscription_product['subscription_product_ref01']
    subscription_product_ref01_data['subscription_id'] = setup.idmap['subscription01']

    subscription_product_ref01_data = (await subscription_product_ref01_ent.create(subscription_product_ref01_data)).data()
    assert(null != subscription_product_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/subscription_product/SubscriptionProductTestData.json')

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
    ['subscription_product01','subscription_product02','subscription_product03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_PRODUCT_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_PRODUCT_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_PRODUCT_ENTID']
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
  
