

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


describe('CustomFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.CustomField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_field.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data_count":{"a":true,"fo":"int32","h":"Data Count","n":"data_count","r":false,"sh":"The amount of subscriptions this metafield has been applied to in Advanced Billing.","t":"`$INTEGER`","key$":"data_count","index$":0},"deleted_at":{"a":true,"fo":"date-time","h":"Deleted At","n":"deleted_at","r":false,"t":"`$STRING`","key$":"deleted_at","index$":1},"enum":{"a":true,"h":"Enum","n":"enum","r":false,"t":"`$STRING`","key$":"enum","index$":2},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"input_type":{"a":true,"h":"Input Type","n":"input_type","r":false,"t":"`$STRING`","key$":"input_type","index$":4},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"t":"`$OBJECT`","key$":"metadata","index$":5},"metafield_id":{"a":true,"fo":"int32","h":"Metafield Id","n":"metafield_id","r":false,"t":"`$INTEGER`","key$":"metafield_id","index$":6},"metafields":{"a":true,"h":"Metafields","n":"metafields","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"metafields","index$":7},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":8},"resource_id":{"a":true,"fo":"int32","h":"Resource Id","n":"resource_id","r":false,"t":"`$INTEGER`","key$":"resource_id","index$":9},"scope":{"a":true,"h":"Scope","n":"scope","r":false,"t":"`$OBJECT`","key$":"scope","index$":10},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":11}},"id":{"field":"id","name":"id"},"name":"custom_field","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /{resource_type}/{resource_id}/metadata.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_id","or":"resource_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/{resource_type}/{resource_id}/metadata.json","q":{"exist":["resource_id","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"var":"resource_id"},{"lit":"metadata.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /{resource_type}/metafields.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/{resource_type}/metafields.json","q":{"exist":["resource_type"]},"r":{},"s":[{"var":"resource_type"},{"lit":"metafields.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{resource_type}/metadata.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"date_field","or":"date_field","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"end_datetime","or":"end_datetime","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"resource_id","or":"resource_ids","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":7},{"a":true,"k":"query","n":"start_datetime","or":"start_datetime","r":false,"t":"`$STRING`","index$":8},{"a":true,"k":"query","n":"with_deleted","or":"with_deleted","r":false,"t":"`$BOOLEAN`","index$":9}]},"k":"http","m":"GET","o":"/{resource_type}/metadata.json","q":{"exist":["date_field","direction","end_date","end_datetime","page","per_page","resource_id","resource_type","start_date","start_datetime","with_deleted"]},"r":{},"s":[{"var":"resource_type"},{"lit":"metadata.json"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0},{"a":true,"co":{"id":"GET /{resource_type}/metafields.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"direction","or":"direction","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/{resource_type}/metafields.json","q":{"exist":["direction","name","page","per_page","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"lit":"metafields.json"}],"t":{"req":"`reqdata`","res":"`body.metafields`"},"index$":1},{"a":true,"co":{"id":"GET /{resource_type}/{resource_id}/metadata.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_id","or":"resource_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/{resource_type}/{resource_id}/metadata.json","q":{"exist":["page","per_page","resource_id","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"var":"resource_id"},{"lit":"metadata.json"}],"t":{"req":"`reqdata`","res":"`body.metadata`"},"index$":2}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /{resource_type}/{resource_id}/metadata.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_id","or":"resource_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"names","r":false,"t":"`$ARRAY`","index$":1}]},"k":"http","m":"DELETE","o":"/{resource_type}/{resource_id}/metadata.json","q":{"exist":["name","resource_id","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"var":"resource_id"},{"lit":"metadata.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /{resource_type}/metafields.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":0}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/{resource_type}/metafields.json","q":{"exist":["name","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"lit":"metafields.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /{resource_type}/{resource_id}/metadata.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_id","or":"resource_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"PUT","o":"/{resource_type}/{resource_id}/metadata.json","q":{"exist":["resource_id","resource_type"]},"r":{},"s":[{"var":"resource_type"},{"var":"resource_id"},{"lit":"metadata.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /{resource_type}/metafields.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"resource_type","or":"resource_type","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"PUT","o":"/{resource_type}/metafields.json","q":{"exist":["resource_type"]},"r":{},"s":[{"var":"resource_type"},{"lit":"metafields.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_field","name__orig":"custom_field","Name":"CustomField","name_":"custom_field","name-":"custom-field","NAME":"CUSTOM_FIELD","index$":12}, {"active":true,"entity":"custom_field","key$":"BasicCustomFieldFlow","kind":"basic","name":"BasicCustomFieldFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_field_ref01"},"m":{"resource_id":"resource01","resource_type":"resource_type01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"resource_id":"resource01","resource_type":"resource_type01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_field_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_up0","textfield":"deleted_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"custom_field_ref01","suffix":"_rm0"},"m":{"id":"custom_field01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"resource_id":"resource01","resource_type":"resource_type01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"custom_field_ref01"}}],"index$":4}]}, 'CustomField', {"POST /{resource_type}/{resource_id}/metadata.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateMetadataRequest","required":["metadata"],"type":"object","properties":{"metadata":{"type":"array","items":{"title":"CreateMetadata","type":"object","properties":{},"x-ref":"#/components/schemas/CreateMetadata"},"description":""}},"x-ref":"#/components/schemas/CreateMetadataRequest"},{"example":{"metadata":[{"name":"Color","value":"Blue"},{"name":"Something","value":"Useful"}]}}],"index$":1},"examples":{"Example":{"value":{"metadata":[{"name":"Color","value":"Blue"},{"name":"Something","value":"Useful"}]}}}}},"required":false},"parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"resource_id","in":"path","description":"The Advanced Billing id of the customer or the subscription for which the metadata applies","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"POST /{resource_type}/metafields.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CreateMetafieldsRequest","required":["metafields"],"type":"object","properties":{"metafields":{"oneOf":[{},{}]}},"x-ref":"#/components/schemas/CreateMetafieldsRequest"},{"example":{"metafields":{"name":"Dropdown field","input_type":"dropdown","enum":["option 1","option 2"],"scope":{"csv":"0","invoices":"0","statements":"0","portal":"1"}}}}],"index$":1},"examples":{"Single-Metafield":{"value":{"metafields":{"name":"Dropdown field","input_type":"dropdown","enum":["option 1","option 2"],"scope":{"csv":"0","invoices":"0","statements":"0","portal":"1"}}}},"Multiple-Metafields":{"value":{"metafields":[{"name":"Color"},{"name":"Brand"}]}}}}},"required":false},"parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0}]},"GET /{resource_type}/metadata.json":{"protocol":"http","parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":2},{"name":"date_field","in":"query","description":"The type of filter you would like to apply to your search.","style":"form","explode":true,"schema":{"allOf":[{"title":"BasicDateField","enum":["updated_at","created_at"],"type":"string","description":"Allows to filter by `created_at` or `updated_at`.","example":"updated_at","x-ref":"#/components/schemas/BasicDateField"},{"description":"The type of filter you would like to apply to your search.","example":"updated_at"}]},"index$":3},{"name":"start_date","in":"query","description":"The start date (format YYYY-MM-DD) with which to filter the date_field. Returns metadata with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":4},{"name":"end_date","in":"query","description":"The end date (format YYYY-MM-DD) with which to filter the date_field. Returns metadata with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified.","style":"form","explode":true,"schema":{"type":"string","format":"date"},"index$":5},{"name":"start_datetime","in":"query","description":"The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns metadata with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date.","style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":6},{"name":"end_datetime","in":"query","description":"The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns metadata with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date.","style":"form","explode":true,"schema":{"type":"string","format":"date-time"},"index$":7},{"name":"with_deleted","in":"query","description":"Allow to fetch deleted metadata.","style":"form","explode":true,"schema":{"type":"boolean"},"index$":8},{"name":"resource_ids","in":"query","description":"Allow to fetch metadata for multiple records based on provided ids. Use in query: `resource_ids[]=122&resource_ids[]=123&resource_ids[]=124`.","style":"form","explode":true,"schema":{"maxItems":50,"type":"array","items":{"type":"integer","format":"int32"}},"index$":9},{"name":"direction","in":"query","description":"Controls the order in which results are returned.\nUse in query `direction=asc`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Sortingdirection","enum":["asc","desc"],"type":"string","description":"Used for sorting results.","x-ref":"#/components/schemas/Sortingdirection"},{"description":"Controls the order in which results are returned.\nUse in query `direction=asc`."}]},"index$":10}]},"GET /{resource_type}/metafields.json":{"protocol":"http","parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"name","in":"query","description":"Filter by the name of the metafield.","style":"form","explode":true,"schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":2},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":3},{"name":"direction","in":"query","description":"Controls the order in which results are returned.\nUse in query `direction=asc`.","style":"form","explode":true,"schema":{"allOf":[{"title":"Sortingdirection","enum":["asc","desc"],"type":"string","description":"Used for sorting results.","x-ref":"#/components/schemas/Sortingdirection"},{"description":"Controls the order in which results are returned.\nUse in query `direction=asc`."}]},"index$":4}]},"GET /{resource_type}/{resource_id}/metadata.json":{"protocol":"http","parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"resource_id","in":"path","description":"The Advanced Billing id of the customer or the subscription for which the metadata applies","required":true,"schema":{"type":"integer","format":"int32"},"index$":1},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":2},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":3}]},"DELETE /{resource_type}/{resource_id}/metadata.json":{"protocol":"http","parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"resource_id","in":"path","description":"The Advanced Billing id of the customer or the subscription for which the metadata applies","required":true,"schema":{"type":"integer","format":"int32"},"index$":1},{"name":"name","in":"query","description":"Name of field to be removed.","style":"form","explode":true,"schema":{"type":"string"},"index$":2},{"name":"names","in":"query","description":"Names of fields to be removed. Use in query: `names[]=field1&names[]=my-field&names[]=another-field`.","style":"form","explode":true,"schema":{"type":"array","items":{"type":"string"}},"index$":3}]},"DELETE /{resource_type}/metafields.json":{"protocol":"http","parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"name","in":"query","description":"The name of the metafield to be deleted","style":"form","explode":true,"schema":{"type":"string"},"index$":1}]},"PUT /{resource_type}/{resource_id}/metadata.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"UpdateMetadataRequest","type":"object","properties":{"metadata":{"title":"UpdateMetadata","type":"object","properties":{"current_name":{"type":"string"},"name":{"type":"string"},"value":{"type":"string"}},"x-ref":"#/components/schemas/UpdateMetadata","key$":"metadata"}},"x-ref":"#/components/schemas/UpdateMetadataRequest","index$":1}}},"required":false},"parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0},{"name":"resource_id","in":"path","description":"The Advanced Billing id of the customer or the subscription for which the metadata applies","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"PUT /{resource_type}/metafields.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"title":"UpdateMetafieldsRequest","type":"object","properties":{"metafields":{"oneOf":[{"title":"UpdateMetafield","type":"object","properties":{"current_name":{},"name":{},"scope":{},"input_type":{},"enum":{}},"x-ref":"#/components/schemas/UpdateMetafield"},{"type":"array","items":{"title":"UpdateMetafield","type":"object","properties":{},"x-ref":"#/components/schemas/UpdateMetafield"}}],"key$":"metafields"}},"x-ref":"#/components/schemas/UpdateMetafieldsRequest","index$":1}}},"required":false},"parameters":[{"name":"resource_type","in":"path","description":"The resource type to which the metafields belong.","required":true,"schema":{"allOf":[{"title":"ResourceType","enum":["subscriptions","customers"],"type":"string","x-ref":"#/components/schemas/ResourceType"},{"description":"The resource type to which the metafields belong."}]},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_field_ref01_ent = client.CustomField()
    let custom_field_ref01_data = setup.data.new.custom_field['custom_field_ref01']
    custom_field_ref01_data['resource_id'] = setup.idmap['resource01']
    custom_field_ref01_data['resource_type'] = setup.idmap['resource_type01']

    custom_field_ref01_data = (await custom_field_ref01_ent.create(custom_field_ref01_data)).data()
    assert(null != custom_field_ref01_data.id)


    // LIST
    const custom_field_ref01_match: any = {}
    custom_field_ref01_match['resource_id'] = setup.idmap['resource01']
    custom_field_ref01_match['resource_type'] = setup.idmap['resource_type01']

    const custom_field_ref01_list = (await custom_field_ref01_ent.list(custom_field_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(custom_field_ref01_list, { id: custom_field_ref01_data.id })))


    // UPDATE
    const custom_field_ref01_data_up0: any = {}
    custom_field_ref01_data_up0.id = custom_field_ref01_data.id

    const custom_field_ref01_markdef_up0 = { name: 'deleted_at', value: 'Mark01-custom_field_ref01_' + setup.now }
    ;(custom_field_ref01_data_up0 as any)[custom_field_ref01_markdef_up0.name] = custom_field_ref01_markdef_up0.value

    const custom_field_ref01_resdata_up0 = (await custom_field_ref01_ent.update(custom_field_ref01_data_up0)).data()
    assert(custom_field_ref01_resdata_up0.id === custom_field_ref01_data_up0.id)

    assert((custom_field_ref01_resdata_up0 as any)[custom_field_ref01_markdef_up0.name] === custom_field_ref01_markdef_up0.value)


    // REMOVE
    const custom_field_ref01_match_rm0: any = { id: custom_field_ref01_data.id }
    await custom_field_ref01_ent.remove(custom_field_ref01_match_rm0)
  

    // LIST
    const custom_field_ref01_match_rt0: any = {}
    custom_field_ref01_match_rt0['resource_id'] = setup.idmap['resource01']
    custom_field_ref01_match_rt0['resource_type'] = setup.idmap['resource_type01']

    const custom_field_ref01_list_rt0 = (await custom_field_ref01_ent.list(custom_field_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(custom_field_ref01_list_rt0, { id: custom_field_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_field/CustomFieldTestData.json')

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
    ['custom_field01','custom_field02','custom_field03','resource01','resource_type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_CUSTOM_FIELD_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_CUSTOM_FIELD_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_CUSTOM_FIELD_ENTID']
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
  
