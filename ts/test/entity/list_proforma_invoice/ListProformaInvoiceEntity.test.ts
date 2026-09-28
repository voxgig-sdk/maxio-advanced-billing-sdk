

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


describe('ListProformaInvoiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.ListProformaInvoice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_proforma_invoice.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"available_actions":{"a":true,"h":"Available Actions","n":"available_actions","r":false,"t":"`$OBJECT`","key$":"available_actions","index$":0},"billing_address":{"a":true,"h":"Billing Address","n":"billing_address","r":false,"t":"`$OBJECT`","key$":"billing_address","index$":1},"collection_method":{"a":true,"h":"Collection Method","n":"collection_method","r":false,"t":"`$ANY`","key$":"collection_method","index$":2},"consolidation_level":{"a":true,"h":"Consolidation Level","n":"consolidation_level","r":false,"t":"`$ANY`","key$":"consolidation_level","index$":3},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":4},"credit_amount":{"a":true,"h":"Credit Amount","n":"credit_amount","r":false,"t":"`$STRING`","key$":"credit_amount","index$":5},"credits":{"a":true,"h":"Credits","n":"credits","r":false,"t":"`$ARRAY`","key$":"credits","index$":6},"currency":{"a":true,"h":"Currency","n":"currency","r":false,"t":"`$STRING`","key$":"currency","index$":7},"custom_fields":{"a":true,"h":"Custom Fields","n":"custom_fields","r":false,"t":"`$ARRAY`","key$":"custom_fields","index$":8},"customer":{"a":true,"h":"Customer","n":"customer","r":false,"t":"`$ANY`","key$":"customer","index$":9},"customer_id":{"a":true,"fo":"int32","h":"Customer Id","n":"customer_id","r":false,"t":"`$INTEGER`","key$":"customer_id","index$":10},"delivery_date":{"a":true,"fo":"date","h":"Delivery Date","n":"delivery_date","r":false,"t":"`$STRING`","key$":"delivery_date","index$":11},"discount_amount":{"a":true,"h":"Discount Amount","n":"discount_amount","r":false,"t":"`$STRING`","key$":"discount_amount","index$":12},"discounts":{"a":true,"h":"Discounts","n":"discounts","r":false,"t":"`$ARRAY`","key$":"discounts","index$":13},"due_amount":{"a":true,"h":"Due Amount","n":"due_amount","r":false,"t":"`$STRING`","key$":"due_amount","index$":14},"line_items":{"a":true,"h":"Line Items","n":"line_items","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":5},"key$":"line_items","index$":15},"memo":{"a":true,"h":"Memo","n":"memo","r":false,"t":"`$STRING`","key$":"memo","index$":16},"number":{"a":true,"fo":"int32","h":"Number","n":"number","r":false,"t":"`$INTEGER`","key$":"number","index$":17},"paid_amount":{"a":true,"h":"Paid Amount","n":"paid_amount","r":false,"t":"`$STRING`","key$":"paid_amount","index$":18},"payment_instructions":{"a":true,"h":"Payment Instructions","n":"payment_instructions","r":false,"t":"`$STRING`","key$":"payment_instructions","index$":19},"payments":{"a":true,"h":"Payments","n":"payments","r":false,"t":"`$ARRAY`","key$":"payments","index$":20},"product_family_name":{"a":true,"h":"Product Family Name","n":"product_family_name","r":false,"t":"`$STRING`","key$":"product_family_name","index$":21},"product_name":{"a":true,"h":"Product Name","n":"product_name","r":false,"t":"`$STRING`","key$":"product_name","index$":22},"public_url":{"a":true,"h":"Public Url","n":"public_url","r":false,"t":"`$STRING`","key$":"public_url","index$":23},"refund_amount":{"a":true,"h":"Refund Amount","n":"refund_amount","r":false,"t":"`$STRING`","key$":"refund_amount","index$":24},"role":{"a":true,"h":"Role","n":"role","r":false,"t":"`$ANY`","key$":"role","index$":25},"seller":{"a":true,"h":"Seller","n":"seller","r":false,"t":"`$ANY`","key$":"seller","index$":26},"sequence_number":{"a":true,"fo":"int32","h":"Sequence Number","n":"sequence_number","r":false,"t":"`$INTEGER`","key$":"sequence_number","index$":27},"shipping_address":{"a":true,"h":"Shipping Address","n":"shipping_address","r":false,"t":"`$OBJECT`","key$":"shipping_address","index$":28},"site_id":{"a":true,"fo":"int32","h":"Site Id","n":"site_id","r":false,"t":"`$INTEGER`","key$":"site_id","index$":29},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":30},"subscription_id":{"a":true,"fo":"int32","h":"Subscription Id","n":"subscription_id","r":false,"t":"`$INTEGER`","key$":"subscription_id","index$":31},"subtotal_amount":{"a":true,"h":"Subtotal Amount","n":"subtotal_amount","r":false,"t":"`$STRING`","key$":"subtotal_amount","index$":32},"tax_amount":{"a":true,"h":"Tax Amount","n":"tax_amount","r":false,"t":"`$STRING`","key$":"tax_amount","index$":33},"taxes":{"a":true,"h":"Taxes","n":"taxes","r":false,"t":"`$ARRAY`","key$":"taxes","index$":34},"total_amount":{"a":true,"h":"Total Amount","n":"total_amount","r":false,"t":"`$STRING`","key$":"total_amount","index$":35},"uid":{"a":true,"h":"Uid","n":"uid","r":false,"t":"`$STRING`","key$":"uid","index$":36}},"name":"list_proforma_invoice","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /subscriptions/{subscription_id}/proforma_invoices.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"credit","or":"credit","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":false,"k":"query","n":"custom_field","or":"custom_field","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":false,"k":"query","n":"discount","or":"discount","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":false,"k":"query","n":"line_item","or":"line_item","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":false,"k":"query","n":"payment","or":"payment","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":10},{"a":true,"ex":false,"k":"query","n":"taxis","or":"taxis","r":false,"t":"`$BOOLEAN`","index$":11}]},"k":"http","m":"GET","o":"/subscriptions/{subscription_id}/proforma_invoices.json","q":{"exist":["credit","custom_field","direction","discount","end_date","line_item","page","payment","per_page","start_date","status","subscription_id","taxis"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"proforma_invoices.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /subscription_groups/{uid}/proforma_invoices.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_group_id","or":"uid","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"credit","or":"credit","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":false,"k":"query","n":"custom_field","or":"custom_field","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":false,"k":"query","n":"discount","or":"discount","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":false,"k":"query","n":"line_item","or":"line_item","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"ex":false,"k":"query","n":"payment","or":"payment","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":false,"k":"query","n":"taxis","or":"taxis","r":false,"t":"`$BOOLEAN`","index$":5}]},"k":"http","m":"GET","o":"/subscription_groups/{uid}/proforma_invoices.json","q":{"exist":["credit","custom_field","discount","line_item","payment","subscription_group_id","taxis"]},"r":{"param":{"uid":"subscription_group_id"}},"s":[{"lit":"subscription_groups"},{"var":"subscription_group_id"},{"lit":"proforma_invoices.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.subscription_group"],["$.main.kit.entity.subscription"]]},"key$":"list_proforma_invoice","name__orig":"list_proforma_invoice","Name":"ListProformaInvoice","name_":"list_proforma_invoice","name-":"list-proforma-invoice","NAME":"LIST_PROFORMA_INVOICE","index$":24}, {"active":true,"entity":"list_proforma_invoice","key$":"BasicListProformaInvoiceFlow","kind":"basic","name":"BasicListProformaInvoiceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"subscription_group_id":"subscription_group01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_proforma_invoice_ref01"}}],"index$":0}]}, 'ListProformaInvoice', {"GET /subscriptions/{subscription_id}/proforma_invoices.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"start_date","in":"query","description":"The beginning date range for the invoice's Due Date, in the YYYY-MM-DD format.","style":"form","explode":true,"schema":{"type":"string"},"index$":1},{"name":"end_date","in":"query","description":"The ending date range for the invoice's Due Date, in the YYYY-MM-DD format.","style":"form","explode":true,"schema":{"type":"string"},"index$":2},{"name":"status","in":"query","description":"The current status of the invoice.  Allowed Values: draft, open, paid, pending, voided","style":"form","explode":true,"schema":{"allOf":[{"title":"ProformaInvoiceStatus","enum":["draft","voided","archived"],"type":"string","x-ref":"#/components/schemas/ProformaInvoiceStatus"},{"description":"The current status of the invoice.  Allowed Values: draft, open, paid, pending, voided"}]},"index$":3},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":4},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":5},{"name":"direction","in":"query","description":"The sort direction of the returned invoices.","style":"form","explode":true,"schema":{"allOf":[{"title":"direction","enum":["asc","desc"],"type":"string","x-ref":"#/components/schemas/direction"},{"description":"The sort direction of the returned invoices."}]},"index$":6},{"name":"line_items","in":"query","description":"Include line items data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":7},{"name":"discounts","in":"query","description":"Include discounts data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":8},{"name":"taxes","in":"query","description":"Include taxes data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":9},{"name":"credits","in":"query","description":"Include credits data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":10},{"name":"payments","in":"query","description":"Include payments data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":11},{"name":"custom_fields","in":"query","description":"Include custom fields data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":12}]},"GET /subscription_groups/{uid}/proforma_invoices.json":{"protocol":"http","parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0},{"name":"line_items","in":"query","description":"Include line items data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":1},{"name":"discounts","in":"query","description":"Include discounts data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":2},{"name":"taxes","in":"query","description":"Include taxes data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":3},{"name":"credits","in":"query","description":"Include credits data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":4},{"name":"payments","in":"query","description":"Include payments data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":5},{"name":"custom_fields","in":"query","description":"Include custom fields data.","style":"form","explode":true,"schema":{"type":"boolean","default":false},"index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_proforma_invoice_ref01_data = Object.values(setup.data.existing.list_proforma_invoice)[0] as any

    // LIST
    const list_proforma_invoice_ref01_ent = client.ListProformaInvoice()
    const list_proforma_invoice_ref01_match: any = {}
    list_proforma_invoice_ref01_match['subscription_group_id'] = setup.idmap['subscription_group01']

    const list_proforma_invoice_ref01_list = (await list_proforma_invoice_ref01_ent.list(list_proforma_invoice_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_proforma_invoice/ListProformaInvoiceTestData.json')

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
    ['list_proforma_invoice01','list_proforma_invoice02','list_proforma_invoice03','subscription_group01','subscription_group02','subscription_group03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_LIST_PROFORMA_INVOICE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_LIST_PROFORMA_INVOICE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_LIST_PROFORMA_INVOICE_ENTID']
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
  
