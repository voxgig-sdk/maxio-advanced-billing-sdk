

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


describe('UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"usage":{"a":true,"h":"Usage","n":"usage","r":true,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":2},"key$":"usage","index$":0}},"name":"usage","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"component_id","or":"component_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"subscription_id_or_reference","or":"subscription_id_or_reference","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"max_id","or":"max_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"since_date","or":"since_date","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"since_id","or":"since_id","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"until_date","or":"until_date","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json","q":{"exist":["component_id","max_id","page","per_page","since_date","since_id","subscription_id_or_reference","until_date"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id_or_reference"},{"lit":"components"},{"var":"component_id"},{"lit":"usages.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.subscription","$.main.kit.entity.component"]]},"key$":"usage","name__orig":"usage","Name":"Usage","name_":"usage","name-":"usage","NAME":"USAGE","index$":55}, {"active":true,"entity":"usage","key$":"BasicUsageFlow","kind":"basic","name":"BasicUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"component_id":"component01","subscription_id_or_reference":"subscription_or_reference01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"usage_ref01"}}],"index$":0}]}, 'Usage', {"GET /subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json":{"protocol":"http","parameters":[{"name":"subscription_id_or_reference","in":"path","description":"Either the Advanced Billing subscription ID (integer) or the subscription reference (string). Important: In cases where a numeric string value matches both an existing subscription ID and an existing subscription reference, the system will prioritize the subscription ID lookup. For example, if both subscription ID 123 and subscription reference \"123\" exist, passing \"123\" will return the subscription with ID 123.","required":true,"schema":{"oneOf":[{"type":"integer","format":"int32"},{"type":"string"}]},"index$":0},{"name":"component_id","in":"path","description":"Either the Advanced Billing id for the component or the component's handle prefixed by `handle:`","required":true,"schema":{"oneOf":[{"type":"integer","format":"int32"},{"type":"string"}]},"index$":1},{"name":"since_id","in":"query","description":"Returns usages with an id greater than or equal to the one specified.","style":"form","explode":true,"schema":{"type":"integer","format":"int64"},"index$":2},{"name":"max_id","in":"query","description":"Returns usages with an id less than or equal to the one specified.","style":"form","explode":true,"schema":{"type":"integer","format":"int64"},"index$":3},{"name":"since_date","in":"query","description":"Returns usages with a created_at date greater than or equal to midnight (12:00 AM) on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":4},{"name":"until_date","in":"query","description":"Returns usages with a created_at date less than or equal to midnight (12:00 AM) on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":5},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":6},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_ref01_data = Object.values(setup.data.existing.usage)[0] as any

    // LIST
    const usage_ref01_ent = client.Usage()
    const usage_ref01_match: any = {}
    usage_ref01_match['component_id'] = setup.idmap['component01']
    usage_ref01_match['subscription_id_or_reference'] = setup.idmap['subscription_or_reference01']

    const usage_ref01_list = (await usage_ref01_ent.list(usage_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage/UsageTestData.json')

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
    ['usage01','usage02','usage03','subscription01','subscription02','subscription03','component01','component02','component03','subscription_or_reference01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_USAGE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_USAGE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_USAGE_ENTID']
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
  
