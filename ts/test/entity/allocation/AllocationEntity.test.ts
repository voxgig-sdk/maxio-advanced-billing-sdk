

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


describe('AllocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Allocation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'allocation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allocation":{"a":true,"h":"Allocation","n":"allocation","r":false,"t":"`$OBJECT`","key$":"allocation","index$":0}},"name":"allocation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/allocations.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/allocations.json","q":{"exist":["subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"allocations.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/components/{component_id}/allocations.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/components/{component_id}/allocations.json","q":{"exist":["component_id","page","subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"components"},{"var":"component_id"},{"lit":"allocations.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.subscription"],["$.main.kit.entity.subscription","$.main.kit.entity.component"]]},"key$":"allocation","name__orig":"allocation","Name":"Allocation","name_":"allocation","name-":"allocation","NAME":"ALLOCATION","index$":1}, {"active":true,"entity":"allocation","key$":"BasicAllocationFlow","kind":"basic","name":"BasicAllocationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"allocation_ref01"},"m":{"component_id":"component01","subscription_id":"subscription01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"component_id":"component01","subscription_id":"subscription01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"allocation_ref01"}}],"index$":1}]}, 'Allocation', {"POST /subscriptions/{subscription_id}/allocations.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"AllocateComponents","type":"object","properties":{"proration_upgrade_scheme":{"type":"string","deprecated":true},"proration_downgrade_scheme":{"type":"string","deprecated":true},"allocations":{"type":"array","items":{"title":"CreateAllocation","required":[],"type":"object","properties":{},"x-ref":"#/components/schemas/CreateAllocation"},"description":""},"accrue_charge":{"type":"boolean"},"upgrade_charge":{"allOf":[{},{}]},"downgrade_credit":{"allOf":[{},{}]},"payment_collection_method":{"allOf":[{},{}]},"initiate_dunning":{"type":"boolean","description":"If true, if the immediate component payment fails, initiate dunning for the subscription. \nOtherwise, leave the charges on the subscription to pay for at renewal."}},"x-ref":"#/components/schemas/AllocateComponents"},{"example":{"proration_upgrade_scheme":"prorate-attempt-capture","proration_downgrade_scheme":"no-prorate","allocations":[{"component_id":123,"quantity":10,"memo":"foo"},{"component_id":456,"quantity":5,"memo":"bar"}]}}],"index$":1},"examples":{"Example":{"value":{"proration_upgrade_scheme":"prorate-attempt-capture","proration_downgrade_scheme":"no-prorate","allocations":[{"component_id":123,"quantity":10,"memo":"foo"},{"component_id":456,"quantity":5,"memo":"bar"}]}}}}},"required":false},"parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"GET /subscriptions/{subscription_id}/components/{component_id}/allocations.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"component_id","in":"path","description":"The Advanced Billing id of the component","required":true,"schema":{"type":"integer","format":"int32"},"index$":1},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const allocation_ref01_ent = client.Allocation()
    let allocation_ref01_data = setup.data.new.allocation['allocation_ref01']
    allocation_ref01_data['component_id'] = setup.idmap['component01']
    allocation_ref01_data['subscription_id'] = setup.idmap['subscription01']

    allocation_ref01_data = (await allocation_ref01_ent.create(allocation_ref01_data)).data()
    assert(null != allocation_ref01_data)


    // LIST
    const allocation_ref01_match: any = {}
    allocation_ref01_match['component_id'] = setup.idmap['component01']
    allocation_ref01_match['subscription_id'] = setup.idmap['subscription01']

    const allocation_ref01_list = (await allocation_ref01_ent.list(allocation_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/allocation/AllocationTestData.json')

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
    ['allocation01','allocation02','allocation03','subscription01','subscription02','subscription03','component01','component02','component03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_ALLOCATION_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_ALLOCATION_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_ALLOCATION_ENTID']
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
  
