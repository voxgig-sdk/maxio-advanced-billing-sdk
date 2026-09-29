

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


describe('CouponEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.Coupon()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'coupon.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_negative_balance":{"a":true,"h":"Allow Negative Balance","n":"allow_negative_balance","r":false,"sh":"If set to true, discount is not limited (credits will carry forward to next billing).","t":"`$BOOLEAN`","key$":"allow_negative_balance","index$":0},"amount":{"a":true,"h":"Amount","n":"amount","r":false,"t":"`$NUMBER`","key$":"amount","index$":1},"amount_in_cents":{"a":true,"fo":"int64","h":"Amount In Cents","n":"amount_in_cents","r":false,"t":"`$INTEGER`","key$":"amount_in_cents","index$":2},"apply_on_cancel_at_end_of_period":{"a":true,"h":"Apply On Cancel At End Of Period","n":"apply_on_cancel_at_end_of_period","r":false,"t":"`$BOOLEAN`","key$":"apply_on_cancel_at_end_of_period","index$":3},"apply_on_subscription_expiration":{"a":true,"h":"Apply On Subscription Expiration","n":"apply_on_subscription_expiration","r":false,"t":"`$BOOLEAN`","key$":"apply_on_subscription_expiration","index$":4},"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"t":"`$STRING`","key$":"archived_at","index$":5},"code":{"a":true,"h":"Code","n":"code","r":false,"t":"`$STRING`","key$":"code","index$":6},"compounding_strategy":{"a":true,"h":"Compounding Strategy","n":"compounding_strategy","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":2},"key$":"compounding_strategy","index$":7},"conversion_limit":{"a":true,"h":"Conversion Limit","n":"conversion_limit","r":false,"t":"`$STRING`","key$":"conversion_limit","index$":8},"coupon":{"a":true,"h":"Coupon","n":"coupon","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":1,"depth":4},"key$":"coupon","index$":9},"coupon_restrictions":{"a":true,"h":"Coupon Restrictions","n":"coupon_restrictions","r":false,"t":"`$ARRAY`","key$":"coupon_restrictions","index$":10},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":11},"currency_prices":{"a":true,"h":"Currency Prices","n":"currency_prices","r":false,"sh":"Returned in read, find, and list endpoints if the query parameter is provided.","t":"`$ARRAY`","key$":"currency_prices","index$":12},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":13},"discount_type":{"a":true,"h":"Discount Type","n":"discount_type","r":false,"t":"`$STRING`","key$":"discount_type","index$":14},"duration_interval":{"a":true,"fo":"int32","h":"Duration Interval","n":"duration_interval","r":false,"t":"`$INTEGER`","key$":"duration_interval","index$":15},"duration_interval_span":{"a":true,"h":"Duration Interval Span","n":"duration_interval_span","r":false,"t":"`$STRING`","key$":"duration_interval_span","index$":16},"duration_interval_unit":{"a":true,"h":"Duration Interval Unit","n":"duration_interval_unit","r":false,"t":"`$STRING`","key$":"duration_interval_unit","index$":17},"duration_period_count":{"a":true,"fo":"int32","h":"Duration Period Count","n":"duration_period_count","r":false,"t":"`$INTEGER`","key$":"duration_period_count","index$":18},"end_date":{"a":true,"fo":"date-time","h":"End Date","n":"end_date","r":false,"sh":"After the given time, this coupon code will be invalid for new signups.","t":"`$STRING`","key$":"end_date","index$":19},"exclude_mid_period_allocations":{"a":true,"h":"Exclude Mid Period Allocations","n":"exclude_mid_period_allocations","r":false,"t":"`$BOOLEAN`","key$":"exclude_mid_period_allocations","index$":20},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":21},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":22},"percentage":{"a":true,"h":"Percentage","n":"percentage","r":false,"t":"`$STRING`","key$":"percentage","index$":23},"product_family_id":{"a":true,"fo":"int32","h":"Product Family Id","n":"product_family_id","r":false,"t":"`$INTEGER`","key$":"product_family_id","index$":24},"product_family_name":{"a":true,"h":"Product Family Name","n":"product_family_name","r":false,"t":"`$STRING`","key$":"product_family_name","index$":25},"recurring":{"a":true,"h":"Recurring","n":"recurring","r":false,"t":"`$BOOLEAN`","key$":"recurring","index$":26},"recurring_scheme":{"a":true,"h":"Recurring Scheme","n":"recurring_scheme","r":false,"t":"`$STRING`","key$":"recurring_scheme","index$":27},"stackable":{"a":true,"h":"Stackable","n":"stackable","r":false,"sh":"A stackable coupon can be combined with other coupons on a Subscription.","t":"`$BOOLEAN`","key$":"stackable","index$":28},"start_date":{"a":true,"fo":"date-time","h":"Start Date","n":"start_date","r":false,"t":"`$STRING`","key$":"start_date","index$":29},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":30},"use_site_exchange_rate":{"a":true,"h":"Use Site Exchange Rate","n":"use_site_exchange_rate","r":false,"t":"`$BOOLEAN`","key$":"use_site_exchange_rate","index$":31}},"id":{"field":"id","name":"id"},"name":"coupon","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /coupons/{coupon_id}/codes.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/coupons/{coupon_id}/codes.json","q":{"$action":"code","exist":["id"]},"r":{"param":{"coupon_id":"id"}},"s":[{"lit":"coupons"},{"var":"id"},{"lit":"codes.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /product_families/{product_family_id}/coupons.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"product_family_id","or":"product_family_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/product_families/{product_family_id}/coupons.json","q":{"exist":["product_family_id"]},"r":{},"s":[{"lit":"product_families"},{"var":"product_family_id"},{"lit":"coupons.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /product_families/{product_family_id}/coupons.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"product_family_id","or":"product_family_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"currency_price","or":"currency_prices","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/product_families/{product_family_id}/coupons.json","q":{"exist":["currency_price","filter","page","per_page","product_family_id"]},"r":{},"s":[{"lit":"product_families"},{"var":"product_family_id"},{"lit":"coupons.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /coupons.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":true,"k":"query","n":"currency_price","or":"currency_prices","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/coupons.json","q":{"exist":["currency_price","filter","page","per_page"]},"r":{},"s":[{"lit":"coupons.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /coupons/{coupon_id}/codes.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/coupons/{coupon_id}/codes.json","q":{"$action":"code","exist":["id","page","per_page"]},"r":{"param":{"coupon_id":"id"}},"s":[{"lit":"coupons"},{"var":"id"},{"lit":"codes.json"}],"t":{"req":"`reqdata`","res":"`body.codes`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /product_families/{product_family_id}/coupons/{coupon_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"coupon_id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_family_id","or":"product_family_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"ex":true,"k":"query","n":"currency_price","or":"currency_prices","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/product_families/{product_family_id}/coupons/{coupon_id}.json","q":{"$action":"coupon_id","exist":["coupon_id","currency_price","product_family_id"]},"r":{},"s":[{"lit":"product_families"},{"var":"product_family_id"},{"lit":"coupons"},{"lit":"{coupon_id}.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":0},{"a":true,"co":{"id":"GET /coupons/find.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"code","or":"code","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":true,"k":"query","n":"currency_price","or":"currency_prices","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"product_family_id","or":"product_family_id","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/coupons/find.json","q":{"$action":"find","exist":["code","currency_price","product_family_id"]},"r":{},"s":[{"lit":"coupons"},{"lit":"find.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":1},{"a":true,"co":{"id":"GET /coupons/validate.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"code","or":"code","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"product_family_id","or":"product_family_id","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/coupons/validate.json","q":{"$action":"validate","exist":["code","product_family_id"]},"r":{},"s":[{"lit":"coupons"},{"lit":"validate.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /coupons/{coupon_id}/codes/{subcode}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subcode","or":"subcode","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/coupons/{coupon_id}/codes/{subcode}.json","q":{"$action":"code_subcode","exist":["id","subcode"]},"r":{"param":{"coupon_id":"id"}},"s":[{"lit":"coupons"},{"var":"id"},{"lit":"codes"},{"lit":"{subcode}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /product_families/{product_family_id}/coupons/{coupon_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"coupon_id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_family_id","or":"product_family_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/product_families/{product_family_id}/coupons/{coupon_id}.json","q":{"$action":"coupon_id","exist":["coupon_id","product_family_id"]},"r":{},"s":[{"lit":"product_families"},{"var":"product_family_id"},{"lit":"coupons"},{"lit":"{coupon_id}.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /product_families/{product_family_id}/coupons/{coupon_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"coupon_id","or":"coupon_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"product_family_id","or":"product_family_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PUT","o":"/product_families/{product_family_id}/coupons/{coupon_id}.json","q":{"$action":"coupon_id","exist":["coupon_id","product_family_id"]},"r":{},"s":[{"lit":"product_families"},{"var":"product_family_id"},{"lit":"coupons"},{"lit":"{coupon_id}.json"}],"t":{"req":"`reqdata`","res":"`body.coupon`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.product_family"]]},"key$":"coupon","name__orig":"coupon","Name":"Coupon","name_":"coupon","name-":"coupon","NAME":"COUPON","index$":8}, {"active":true,"entity":"coupon","key$":"BasicCouponFlow","kind":"basic","name":"BasicCouponFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"coupon_ref01"},"m":{"coupon_id":"coupon01","product_family_id":"product_family01","subcode":"subcode01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"coupon_id":"coupon01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"coupon_ref01"}}],"index$":1},{"a":true,"d":{"coupon_id":"coupon01"},"i":{"ref":"coupon_ref01","srcdatavar":"coupon_ref01_data","suffix":"_up0","textfield":"archived_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coupon_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"coupon_ref01","srcdatavar":"coupon_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-coupon_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"coupon_ref01","suffix":"_rm0"},"m":{"coupon_id":"coupon01","id":"coupon01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"coupon_id":"coupon01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"coupon_ref01"}}],"index$":5}]}, 'Coupon', {"POST /coupons/{coupon_id}/codes.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CouponSubcodes","type":"object","properties":{"codes":{"description":"","items":{"type":"string"},"key$":"codes","type":"array"}},"x-ref":"#/components/schemas/CouponSubcodes"},{"example":{"codes":["BALTIMOREFALL","ORLANDOFALL","DETROITFALL"]}}]},"examples":{"Example":{"value":{"codes":["BALTIMOREFALL","ORLANDOFALL","DETROITFALL"]}}}}},"required":false},"parameters":[{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /product_families/{product_family_id}/coupons.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CouponRequest","type":"object","properties":{"coupon":{"title":"CouponPayload","type":"object","properties":{"name":{},"code":{},"description":{},"percentage":{},"amount_in_cents":{},"allow_negative_balance":{},"recurring":{},"end_date":{},"product_family_id":{},"stackable":{},"compounding_strategy":{},"exclude_mid_period_allocations":{},"apply_on_cancel_at_end_of_period":{},"apply_on_subscription_expiration":{}},"x-ref":"#/components/schemas/CouponPayload"},"restricted_products":{"type":"object","additionalProperties":{"type":"boolean"},"description":"An object where the keys are product IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the product."},"restricted_components":{"type":"object","additionalProperties":{"type":"boolean"},"description":"An object where the keys are component IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the component."}},"x-ref":"#/components/schemas/CouponRequest"},{"example":{"coupon":{"name":"15% off","code":"15OFF","description":"15% off for life","percentage":15,"allow_negative_balance":false,"recurring":false,"end_date":"2012-08-29","product_family_id":"2","stackable":true,"compounding_strategy":"compound","exclude_mid_period_allocations":true,"apply_on_cancel_at_end_of_period":true},"restricted_products":{"1":true},"restricted_components":{"1":true,"2":false}}}],"index$":1},"examples":{"Percentage Coupon Example":{"value":{"coupon":{"name":"15% off","code":"15OFF","description":"15% off for life","percentage":15,"allow_negative_balance":false,"recurring":false,"end_date":"2012-08-29","product_family_id":"2","stackable":true,"compounding_strategy":"compound","exclude_mid_period_allocations":true,"apply_on_cancel_at_end_of_period":true},"restricted_products":{"1":true},"restricted_components":{"1":true,"2":false}}},"Flat Amount Coupon Example":{"value":{"coupon":{"name":"$10 off","code":"10OFF","description":"$10 off for life","amount_in_cents":1000,"allow_negative_balance":false,"recurring":false,"end_date":"2012-08-29","product_family_id":"2","stackable":true,"compounding_strategy":"compound","exclude_mid_period_allocations":true,"apply_on_cancel_at_end_of_period":true},"restricted_products":{"1":true},"restricted_components":{"1":true,"2":false}}}}}},"required":false},"parameters":[{"name":"product_family_id","in":"path","description":"The Advanced Billing id of the product family to which the coupon belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"GET /product_families/{product_family_id}/coupons.json":{"protocol":"http","parameters":[{"name":"product_family_id","in":"path","description":"The Advanced Billing id of the product family to which the coupon belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":30,"example":50},"index$":2},{"name":"filter","in":"query","description":"Filter to use for List Coupons operations","style":"form","explode":true,"schema":{"allOf":[{"title":"ListCouponsFilter","type":"object","properties":{"date_field":{"allOf":[{"title":"BasicDateField","enum":[],"type":"string","description":"Allows to filter by `created_at` or `updated_at`.","example":"updated_at","x-ref":"#/components/schemas/BasicDateField"},{"description":"The type of filter you would like to apply to your search. Use in query `filter[date_field]=created_at`."}]},"start_date":{"type":"string","description":"The start date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `filter[start_date]=2011-12-17`.","format":"date","example":"2011-12-17"},"end_date":{"type":"string","description":"The end date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `filter[end_date]=2011-12-15`.","format":"date","example":"2011-12-15"},"start_datetime":{"type":"string","description":"The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `filter[start_datetime]=2011-12-19T10:15:30+01:00`.","format":"date-time","example":"2011-12-19T10:15:30+01:00"},"end_datetime":{"type":"string","description":"The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `filter[end_datetime]=2011-12-1T10:15:30+01:00`.","format":"date-time","example":"2019-06-07T17:20:06Z"},"ids":{"minItems":1,"type":"array","items":{"type":"integer","format":"int32"},"description":"Allows fetching coupons with matching id based on provided values. Use in query `filter[ids]=1,2,3`.","example":[1,2,3]},"codes":{"type":"array","items":{"type":"string"},"description":"Allows fetching coupons with matching codes based on provided values. Use in query `filter[codes]=free,free_trial`.","example":["free","free_trial"]},"use_site_exchange_rate":{"type":"boolean","description":"If true, restricts the list to coupons whose pricing is recalculated from the site’s current exchange rates, so their currency_prices array contains on-the-fly conversions rather than stored price records. If false, restricts the list to coupons that have manually defined amounts for each currency, ensuring the response includes the saved currency_prices entries instead of exchange-rate-derived values. Use in query `filter[use_site_exchange_rate]=true`."},"include_archived":{"type":"boolean","description":"Controls returning archived coupons."}},"x-ref":"#/components/schemas/ListCouponsFilter"},{"description":"Filter to use for List Coupons operations"}]},"index$":3},{"name":"currency_prices","in":"query","description":"(Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. Use in query `currency_prices=true`.","style":"form","explode":true,"schema":{"type":"boolean","example":true},"index$":4}]},"GET /coupons.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":30,"example":50},"index$":1},{"name":"filter","in":"query","description":"Filter to use for List Coupons operations","style":"form","explode":true,"schema":{"allOf":[{"title":"ListCouponsFilter","type":"object","properties":{"date_field":{"allOf":[{"title":"BasicDateField","enum":[],"type":"string","description":"Allows to filter by `created_at` or `updated_at`.","example":"updated_at","x-ref":"#/components/schemas/BasicDateField"},{"description":"The type of filter you would like to apply to your search. Use in query `filter[date_field]=created_at`."}]},"start_date":{"type":"string","description":"The start date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified. Use in query `filter[start_date]=2011-12-17`.","format":"date","example":"2011-12-17"},"end_date":{"type":"string","description":"The end date (format YYYY-MM-DD) with which to filter the date_field. Returns coupons with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified. Use in query `filter[end_date]=2011-12-15`.","format":"date","example":"2011-12-15"},"start_datetime":{"type":"string","description":"The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date. Use in query `filter[start_datetime]=2011-12-19T10:15:30+01:00`.","format":"date-time","example":"2011-12-19T10:15:30+01:00"},"end_datetime":{"type":"string","description":"The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns coupons with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date. Use in query `filter[end_datetime]=2011-12-1T10:15:30+01:00`.","format":"date-time","example":"2019-06-07T17:20:06Z"},"ids":{"minItems":1,"type":"array","items":{"type":"integer","format":"int32"},"description":"Allows fetching coupons with matching id based on provided values. Use in query `filter[ids]=1,2,3`.","example":[1,2,3]},"codes":{"type":"array","items":{"type":"string"},"description":"Allows fetching coupons with matching codes based on provided values. Use in query `filter[codes]=free,free_trial`.","example":["free","free_trial"]},"use_site_exchange_rate":{"type":"boolean","description":"If true, restricts the list to coupons whose pricing is recalculated from the site’s current exchange rates, so their currency_prices array contains on-the-fly conversions rather than stored price records. If false, restricts the list to coupons that have manually defined amounts for each currency, ensuring the response includes the saved currency_prices entries instead of exchange-rate-derived values. Use in query `filter[use_site_exchange_rate]=true`."},"include_archived":{"type":"boolean","description":"Controls returning archived coupons."}},"x-ref":"#/components/schemas/ListCouponsFilter"},{"description":"Filter to use for List Coupons operations"}]},"index$":2},{"name":"currency_prices","in":"query","description":"(Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response. Use in query `currency_prices=true`.","style":"form","explode":true,"schema":{"type":"boolean","example":true},"index$":3}]},"GET /coupons/{coupon_id}/codes.json":{"protocol":"http","parameters":[{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":1},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":2}]},"GET /product_families/{product_family_id}/coupons/{coupon_id}.json":{"protocol":"http","parameters":[{"name":"product_family_id","in":"path","description":"The Advanced Billing id of the product family to which the coupon belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":1},{"name":"currency_prices","in":"query","description":"(Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response.","style":"form","explode":true,"schema":{"type":"boolean","example":true},"index$":2}]},"GET /coupons/find.json":{"protocol":"http","parameters":[{"name":"product_family_id","in":"query","description":"The Advanced Billing id of the product family to which the coupon belongs","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"code","in":"query","description":"The code of the coupon","style":"form","explode":true,"schema":{"type":"string"},"index$":1},{"name":"currency_prices","in":"query","description":"(Optional) If you have defined multiple currencies at the site level, you can pass `?currency_prices=true` to include an array of currency price data in the response.","style":"form","explode":true,"schema":{"type":"boolean","example":true},"index$":2}]},"GET /coupons/validate.json":{"protocol":"http","parameters":[{"name":"code","in":"query","description":"The code of the coupon","required":true,"style":"form","explode":true,"schema":{"type":"string"},"index$":0},{"name":"product_family_id","in":"query","description":"The Advanced Billing id of the product family to which the coupon belongs","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"DELETE /coupons/{coupon_id}/codes/{subcode}.json":{"protocol":"http","parameters":[{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon to which the subcode belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"subcode","in":"path","description":"The subcode of the coupon","required":true,"schema":{"type":"string"},"index$":1}]},"DELETE /product_families/{product_family_id}/coupons/{coupon_id}.json":{"protocol":"http","parameters":[{"name":"product_family_id","in":"path","description":"The Advanced Billing id of the product family to which the coupon belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"PUT /product_families/{product_family_id}/coupons/{coupon_id}.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"CouponRequest","type":"object","properties":{"coupon":{"title":"CouponPayload","type":"object","properties":{"name":{},"code":{},"description":{},"percentage":{},"amount_in_cents":{},"allow_negative_balance":{},"recurring":{},"end_date":{},"product_family_id":{},"stackable":{},"compounding_strategy":{},"exclude_mid_period_allocations":{},"apply_on_cancel_at_end_of_period":{},"apply_on_subscription_expiration":{}},"x-ref":"#/components/schemas/CouponPayload"},"restricted_products":{"type":"object","additionalProperties":{"type":"boolean"},"description":"An object where the keys are product IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the product."},"restricted_components":{"type":"object","additionalProperties":{"type":"boolean"},"description":"An object where the keys are component IDs or handles (prefixed with 'handle:'), and the values are booleans indicating if the coupon should be applicable to the component."}},"x-ref":"#/components/schemas/CouponRequest"},{"example":{"coupon":{"name":"15% off","code":"15OFF","description":"15% off for life","percentage":15,"allow_negative_balance":false,"recurring":false,"end_date":"2012-08-29","product_family_id":"2","stackable":true,"compounding_strategy":"compound"},"restricted_products":{"1":true},"restricted_components":{"1":true,"2":false}}}]},"examples":{"Example":{"value":{"coupon":{"name":"15% off","code":"15OFF","description":"15% off for life","percentage":15,"allow_negative_balance":false,"recurring":false,"end_date":"2012-08-29","product_family_id":"2","stackable":true,"compounding_strategy":"compound"},"restricted_products":{"1":true},"restricted_components":{"1":true,"2":false}}}}}},"required":false},"parameters":[{"name":"product_family_id","in":"path","description":"The Advanced Billing id of the product family to which the coupon belongs","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"coupon_id","in":"path","description":"The Advanced Billing id of the coupon","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const coupon_ref01_ent = client.Coupon()
    let coupon_ref01_data = setup.data.new.coupon['coupon_ref01']
    coupon_ref01_data['coupon_id'] = setup.idmap['coupon01']
    coupon_ref01_data['product_family_id'] = setup.idmap['product_family01']
    coupon_ref01_data['subcode'] = setup.idmap['subcode01']

    coupon_ref01_data = (await coupon_ref01_ent.create(coupon_ref01_data)).data()
    assert(null != coupon_ref01_data.id)


    // LIST
    const coupon_ref01_match: any = {}
    coupon_ref01_match['coupon_id'] = setup.idmap['coupon01']

    const coupon_ref01_list = (await coupon_ref01_ent.list(coupon_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(coupon_ref01_list, { id: coupon_ref01_data.id })))


    // UPDATE
    const coupon_ref01_data_up0: any = {}
    coupon_ref01_data_up0.id = coupon_ref01_data.id
    coupon_ref01_data_up0 ['coupon_id'] = setup.idmap['coupon_id']

    const coupon_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-coupon_ref01_' + setup.now }
    ;(coupon_ref01_data_up0 as any)[coupon_ref01_markdef_up0.name] = coupon_ref01_markdef_up0.value

    const coupon_ref01_resdata_up0 = (await coupon_ref01_ent.update(coupon_ref01_data_up0)).data()
    assert(coupon_ref01_resdata_up0.id === coupon_ref01_data_up0.id)

    assert((coupon_ref01_resdata_up0 as any)[coupon_ref01_markdef_up0.name] === coupon_ref01_markdef_up0.value)


    // LOAD
    const coupon_ref01_match_dt0: any = {}
    coupon_ref01_match_dt0.id = coupon_ref01_data.id
    const coupon_ref01_data_dt0 = (await coupon_ref01_ent.load(coupon_ref01_match_dt0)).data()
    assert(coupon_ref01_data_dt0.id === coupon_ref01_data.id)


    // REMOVE
    const coupon_ref01_match_rm0: any = { id: coupon_ref01_data.id }
    await coupon_ref01_ent.remove(coupon_ref01_match_rm0)
  

    // LIST
    const coupon_ref01_match_rt0: any = {}
    coupon_ref01_match_rt0['coupon_id'] = setup.idmap['coupon01']

    const coupon_ref01_list_rt0 = (await coupon_ref01_ent.list(coupon_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(coupon_ref01_list_rt0, { id: coupon_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/coupon/CouponTestData.json')

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
    ['coupon01','coupon02','coupon03','product_family01','product_family02','product_family03','subcode01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_COUPON_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_COUPON_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_COUPON_ENTID']
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
  
