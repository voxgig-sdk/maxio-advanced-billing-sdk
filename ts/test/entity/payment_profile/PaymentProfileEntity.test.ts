

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


describe('PaymentProfileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
  afterEach(liveDelay('MAXIO_ADVANCED_BILLING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MaxioAdvancedBillingSDK.test()
    const ent = testsdk.PaymentProfile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'payment_profile.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bank_account_holder_type":{"a":true,"h":"Bank Account Holder Type","n":"bank_account_holder_type","r":false,"t":"`$ANY`","key$":"bank_account_holder_type","index$":0},"bank_account_type":{"a":true,"h":"Bank Account Type","n":"bank_account_type","r":false,"t":"`$ANY`","key$":"bank_account_type","index$":1},"bank_name":{"a":true,"h":"Bank Name","n":"bank_name","r":false,"sh":"The bank where the account resides","t":"`$STRING`","key$":"bank_name","index$":2},"billing_address":{"a":true,"h":"Billing Address","n":"billing_address","r":false,"sh":"The current billing street address for the bank account","t":"`$STRING`","key$":"billing_address","index$":3},"billing_address_2":{"a":true,"h":"Billing Address 2","n":"billing_address_2","r":false,"sh":"The current billing street address, second line, for the bank account","t":"`$STRING`","key$":"billing_address_2","index$":4},"billing_city":{"a":true,"h":"Billing City","n":"billing_city","r":false,"sh":"The current billing address city for the bank account","t":"`$STRING`","key$":"billing_city","index$":5},"billing_country":{"a":true,"h":"Billing Country","n":"billing_country","r":false,"sh":"The current billing address country for the bank account","t":"`$STRING`","key$":"billing_country","index$":6},"billing_state":{"a":true,"h":"Billing State","n":"billing_state","r":false,"sh":"The current billing address state for the bank account","t":"`$STRING`","key$":"billing_state","index$":7},"billing_zip":{"a":true,"h":"Billing Zip","n":"billing_zip","r":false,"sh":"The current billing address zip code for the bank account","t":"`$STRING`","key$":"billing_zip","index$":8},"card_type":{"a":true,"h":"Card Type","n":"card_type","r":false,"t":"`$STRING`","key$":"card_type","index$":9},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"A timestamp indicating when this payment profile was created","t":"`$STRING`","key$":"created_at","index$":10},"current_vault":{"a":true,"h":"Current Vault","n":"current_vault","r":false,"t":"`$STRING`","key$":"current_vault","index$":11},"customer_id":{"a":true,"fo":"int32","h":"Customer Id","n":"customer_id","r":false,"sh":"The Chargify-assigned ID for the customer record to which the bank account belongs","t":"`$INTEGER`","key$":"customer_id","index$":12},"customer_vault_token":{"a":true,"h":"Customer Vault Token","n":"customer_vault_token","r":false,"sh":"(only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token.","t":"`$STRING`","key$":"customer_vault_token","index$":13},"disabled":{"a":true,"h":"Disabled","n":"disabled","r":false,"t":"`$BOOLEAN`","key$":"disabled","index$":14},"expiration_month":{"a":true,"h":"Expiration Month","n":"expiration_month","r":false,"t":"`$INTEGER`","key$":"expiration_month","index$":15},"expiration_year":{"a":true,"h":"Expiration Year","n":"expiration_year","r":false,"t":"`$INTEGER`","key$":"expiration_year","index$":16},"first_name":{"a":true,"h":"First Name","n":"first_name","r":false,"sh":"The first name of the bank account holder","t":"`$STRING`","key$":"first_name","index$":17},"gateway_handle":{"a":true,"h":"Gateway Handle","n":"gateway_handle","r":false,"t":"`$STRING`","key$":"gateway_handle","index$":18},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"sh":"The Chargify-assigned ID of the stored bank account.","t":"`$INTEGER`","key$":"id","index$":19},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":false,"sh":"The last name of the bank account holder","t":"`$STRING`","key$":"last_name","index$":20},"masked_bank_account_number":{"a":true,"h":"Masked Bank Account Number","n":"masked_bank_account_number","r":false,"sh":"A string representation of the stored bank account number with all but the last 4 digits marked with X's (i.e.","t":"`$STRING`","key$":"masked_bank_account_number","index$":21},"masked_bank_routing_number":{"a":true,"h":"Masked Bank Routing Number","n":"masked_bank_routing_number","r":false,"sh":"A string representation of the stored bank routing number with all but the last 4 digits marked with X's (i.e.","t":"`$STRING`","key$":"masked_bank_routing_number","index$":22},"masked_card_number":{"a":true,"h":"Masked Card Number","n":"masked_card_number","r":false,"t":"`$STRING`","key$":"masked_card_number","index$":23},"payment_profile":{"a":true,"h":"Payment Profile","n":"payment_profile","r":true,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":10},"key$":"payment_profile","index$":24},"payment_type":{"a":true,"h":"Payment Type","n":"payment_type","op":{"update":{"req":true,"type":"`$ANY`"}},"r":false,"t":"`$STRING`","key$":"payment_type","index$":25},"site_gateway_setting_id":{"a":true,"fo":"int32","h":"Site Gateway Setting Id","n":"site_gateway_setting_id","r":false,"t":"`$INTEGER`","key$":"site_gateway_setting_id","index$":26},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"A timestamp indicating when this payment profile was last updated","t":"`$STRING`","key$":"updated_at","index$":27},"vault_token":{"a":true,"h":"Vault Token","n":"vault_token","r":false,"sh":"The \"token\" provided by your vault storage for an already stored payment profile","t":"`$STRING`","key$":"vault_token","index$":28},"verified":{"a":true,"h":"Verified","n":"verified","r":false,"sh":"Denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account.","t":"`$BOOLEAN`","key$":"verified","index$":29}},"id":{"field":"id","name":"id"},"name":"payment_profile","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subscription_group_id","or":"uid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json","q":{"$action":"change_payment_profile","exist":["id","subscription_group_id"]},"r":{"param":{"payment_profile_id":"id","uid":"subscription_group_id"}},"s":[{"lit":"subscription_groups"},{"var":"subscription_group_id"},{"lit":"payment_profiles"},{"var":"id"},{"lit":"change_payment_profile.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":0},{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json","q":{"$action":"change_payment_profile","exist":["id","subscription_id"]},"r":{"param":{"payment_profile_id":"id"}},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"payment_profiles"},{"var":"id"},{"lit":"change_payment_profile.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":1},{"a":true,"co":{"id":"POST /subscriptions/{subscription_id}/request_payment_profiles_update.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/subscriptions/{subscription_id}/request_payment_profiles_update.json","q":{"exist":["subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"request_payment_profiles_update.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /payment_profiles.json","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/payment_profiles.json","q":{},"r":{},"s":[{"lit":"payment_profiles.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /payment_profiles.json","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"customer_id","or":"customer_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/payment_profiles.json","q":{"exist":["customer_id","page","per_page"]},"r":{},"s":[{"lit":"payment_profiles.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /payment_profiles/{payment_profile_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_profile_id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/payment_profiles/{payment_profile_id}.json","q":{"$action":"payment_profile_id","exist":["payment_profile_id"]},"r":{},"s":[{"lit":"payment_profiles"},{"lit":"{payment_profile_id}.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_profile_id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subscription_group_id","or":"uid","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json","q":{"$action":"payment_profile_id","exist":["payment_profile_id","subscription_group_id"]},"r":{"param":{"uid":"subscription_group_id"}},"s":[{"lit":"subscription_groups"},{"var":"subscription_group_id"},{"lit":"payment_profiles"},{"lit":"{payment_profile_id}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_profile_id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"subscription_id","or":"subscription_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json","q":{"$action":"payment_profile_id","exist":["payment_profile_id","subscription_id"]},"r":{},"s":[{"lit":"subscriptions"},{"var":"subscription_id"},{"lit":"payment_profiles"},{"lit":"{payment_profile_id}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /payment_profiles/{payment_profile_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_profile_id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/payment_profiles/{payment_profile_id}.json","q":{"$action":"payment_profile_id","exist":["payment_profile_id"]},"r":{},"s":[{"lit":"payment_profiles"},{"lit":"{payment_profile_id}.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /bank_accounts/{bank_account_id}/verification.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"bank_account_id","or":"bank_account_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/bank_accounts/{bank_account_id}/verification.json","q":{"exist":["bank_account_id"]},"r":{},"s":[{"lit":"bank_accounts"},{"var":"bank_account_id"},{"lit":"verification.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":0},{"a":true,"co":{"id":"PUT /payment_profiles/{payment_profile_id}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"payment_profile_id","or":"payment_profile_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/payment_profiles/{payment_profile_id}.json","q":{"$action":"payment_profile_id","exist":["payment_profile_id"]},"r":{},"s":[{"lit":"payment_profiles"},{"lit":"{payment_profile_id}.json"}],"t":{"req":"`reqdata`","res":"`body.payment_profile`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.subscription_group"],["$.main.kit.entity.subscription"]]},"key$":"payment_profile","name__orig":"payment_profile","Name":"PaymentProfile","name_":"payment_profile","name-":"payment-profile","NAME":"PAYMENT_PROFILE","index$":28}, {"active":true,"entity":"payment_profile","key$":"BasicPaymentProfileFlow","kind":"basic","name":"BasicPaymentProfileFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"payment_profile_ref01"},"m":{"payment_profile_id":"payment_profile01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"payment_profile_ref01"}}],"index$":1},{"a":true,"d":{"payment_profile_id":"payment_profile01"},"i":{"ref":"payment_profile_ref01","srcdatavar":"payment_profile_ref01_data","suffix":"_up0","textfield":"bank_name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_profile_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"payment_profile_ref01","srcdatavar":"payment_profile_ref01_data","suffix":"_dt0"},"m":{"payment_profile_id":"payment_profile01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-payment_profile_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"payment_profile_ref01","suffix":"_rm0"},"m":{"payment_profile_id":"payment_profile01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"payment_profile_ref01"}}],"index$":5}]}, 'PaymentProfile', {"POST /subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json":{"protocol":"http","parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0},{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"POST /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"POST /subscriptions/{subscription_id}/request_payment_profiles_update.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"POST /payment_profiles.json":{"protocol":"http","requestBody":{"description":"When following the IBAN or the Local Bank details examples, a customer, bank account and mandate will be created in your current vault. If the customer, bank account, and mandate already exist in your vault, follow the Import example to link the payment profile into Advanced Billing.","content":{"application/json":{"schema":{"allOf":[{"title":"CreatePaymentProfileRequest","required":["payment_profile"],"type":"object","properties":{"payment_profile":{"title":"CreatePaymentProfile","type":"object","properties":{"chargify_token":{},"id":{},"payment_type":{},"first_name":{},"last_name":{},"masked_card_number":{},"full_number":{},"card_type":{},"expiration_month":{},"expiration_year":{},"billing_address":{},"billing_address_2":{},"billing_city":{},"billing_state":{},"billing_country":{},"billing_zip":{},"current_vault":{},"vault_token":{},"customer_vault_token":{},"customer_id":{},"paypal_email":{},"payment_method_nonce":{},"gateway_handle":{},"cvv":{},"bank_name":{},"bank_iban":{},"bank_routing_number":{},"bank_account_number":{},"bank_branch_code":{},"bank_account_type":{},"bank_account_holder_type":{},"last_four":{}},"x-ref":"#/components/schemas/CreatePaymentProfile"}},"x-ref":"#/components/schemas/CreatePaymentProfileRequest"},{"description":"When following the IBAN or the Local Bank details examples, a customer, bank account and mandate will be created in your current vault. If the customer, bank account, and mandate already exist in your vault, follow the Import example to link the payment profile into Advanced Billing.","example":{"payment_profile":{"customer_id":1036,"chargify_token":"tok_w68qcpnftyv53jk33jv6wk3w"}}}],"index$":1},"examples":{"Maxio.js":{"value":{"payment_profile":{"customer_id":1036,"chargify_token":"tok_w68qcpnftyv53jk33jv6wk3w"}}},"ACH":{"value":{"payment_profile":{"customer_id":123,"bank_name":"Best Bank","bank_routing_number":"021000089","bank_account_number":"111111111111","bank_account_type":"checking","bank_account_holder_type":"business","payment_type":"bank_account"}}},"Card":{"value":{"payment_profile":{"first_name":"Jessica","last_name":"Test","last_four":"1111","card_type":"visa","expiration_month":10,"expiration_year":2018,"customer_id":19195410,"current_vault":"bogus","vault_token":"1","billing_address":"123 Main St.","billing_city":"Boston","billing_state":"MA","billing_zip":"02120","billing_country":"US","billing_address_2":null,"payment_type":"credit_card"}}},"Local Bank Details":{"value":{"payment_profile":{"customer_id":123,"bank_name":"Royal Bank of France","bank_account_number":"0000000","bank_routing_number":"0003","bank_branch_code":"00006","payment_type":"bank_account","billing_address":"20 Place de la Gare","billing_city":"Colombes","billing_state":"Île-de-France","billing_zip":"92700","billing_country":"FR"}}},"IBAN":{"value":{"payment_profile":{"customer_id":24907598,"bank_name":"French Bank","bank_iban":"FR1420041010050500013M02606","payment_type":"bank_account","billing_address":"20 Place de la Gare","billing_city":"Colombes","billing_state":"Île-de-France","billing_zip":"92700","billing_country":"FR"}}},"Import Payment Profile":{"value":{"payment_profile":{"customer_id":24907598,"customer_vault_token":"[Existing Vault Customer ID]","vault_token":"[Existing Vault Mandate ID]","current_vault":"gocardless","bank_name":"French Bank","payment_type":"bank_account","billing_address":"20 Place de la Gare","billing_city":"Colombes","billing_state":"Île-de-France","billing_zip":"92700","billing_country":"FR"}}}}}},"required":false},"parameters":[]},"GET /payment_profiles.json":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.","style":"form","explode":true,"schema":{"minimum":1,"type":"integer","format":"int32","default":1,"example":1},"index$":0},{"name":"per_page","in":"query","description":"This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.","style":"form","explode":true,"schema":{"maximum":200,"type":"integer","format":"int32","default":20,"example":50},"index$":1},{"name":"customer_id","in":"query","description":"The ID of the customer for which you wish to list payment profiles","style":"form","explode":true,"schema":{"type":"integer","format":"int32"},"index$":2}]},"GET /payment_profiles/{payment_profile_id}.json":{"protocol":"http","parameters":[{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"DELETE /subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json":{"protocol":"http","parameters":[{"name":"uid","in":"path","description":"The uid of the subscription group","required":true,"schema":{"type":"string"},"index$":0},{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"DELETE /subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json":{"protocol":"http","parameters":[{"name":"subscription_id","in":"path","description":"The Chargify id of the subscription.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0},{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":1}]},"DELETE /payment_profiles/{payment_profile_id}.json":{"protocol":"http","parameters":[{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"PUT /bank_accounts/{bank_account_id}/verification.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"BankAccountVerificationRequest","required":["bank_account_verification"],"type":"object","properties":{"bank_account_verification":{"title":"BankAccountVerification","type":"object","properties":{"deposit_1_in_cents":{},"deposit_2_in_cents":{}},"x-ref":"#/components/schemas/BankAccountVerification"}},"x-ref":"#/components/schemas/BankAccountVerificationRequest"},{"example":{"bank_account_verification":{"deposit_1_in_cents":32,"deposit_2_in_cents":45}}}],"index$":1},"examples":{"Example":{"value":{"bank_account_verification":{"deposit_1_in_cents":32,"deposit_2_in_cents":45}}}}}},"required":false},"parameters":[{"name":"bank_account_id","in":"path","description":"Identifier of the bank account in the system.","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]},"PUT /payment_profiles/{payment_profile_id}.json":{"protocol":"http","requestBody":{"description":"","content":{"application/json":{"schema":{"allOf":[{"title":"UpdatePaymentProfileRequest","required":["payment_profile"],"type":"object","properties":{"payment_profile":{"title":"UpdatePaymentProfile","type":"object","properties":{"first_name":{},"last_name":{},"full_number":{},"card_type":{},"expiration_month":{},"expiration_year":{},"current_vault":{},"billing_address":{},"billing_city":{},"billing_state":{},"billing_zip":{},"billing_country":{},"billing_address_2":{}},"x-ref":"#/components/schemas/UpdatePaymentProfile"}},"x-ref":"#/components/schemas/UpdatePaymentProfileRequest"},{"example":{"payment_profile":{"first_name":"Graham","last_name":"Test","billing_address":"456 Juniper Court","billing_city":"Boulder","billing_state":"CO","billing_zip":"80302","billing_country":"US","billing_address_2":null}}}]},"examples":{"Example":{"value":{"payment_profile":{"first_name":"Graham","last_name":"Test","billing_address":"456 Juniper Court","billing_city":"Boulder","billing_state":"CO","billing_zip":"80302","billing_country":"US","billing_address_2":null}}}}}},"required":false},"parameters":[{"name":"payment_profile_id","in":"path","description":"The Chargify id of the payment profile","required":true,"schema":{"type":"integer","format":"int32"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const payment_profile_ref01_ent = client.PaymentProfile()
    let payment_profile_ref01_data = setup.data.new.payment_profile['payment_profile_ref01']
    payment_profile_ref01_data['payment_profile_id'] = setup.idmap['payment_profile01']

    payment_profile_ref01_data = (await payment_profile_ref01_ent.create(payment_profile_ref01_data)).data()
    assert(null != payment_profile_ref01_data.id)


    // LIST
    const payment_profile_ref01_match: any = {}

    const payment_profile_ref01_list = (await payment_profile_ref01_ent.list(payment_profile_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(payment_profile_ref01_list, { id: payment_profile_ref01_data.id })))


    // UPDATE
    const payment_profile_ref01_data_up0: any = {}
    payment_profile_ref01_data_up0.id = payment_profile_ref01_data.id
    payment_profile_ref01_data_up0 ['payment_profile_id'] = setup.idmap['payment_profile_id']

    const payment_profile_ref01_markdef_up0 = { name: 'bank_name', value: 'Mark01-payment_profile_ref01_' + setup.now }
    ;(payment_profile_ref01_data_up0 as any)[payment_profile_ref01_markdef_up0.name] = payment_profile_ref01_markdef_up0.value

    const payment_profile_ref01_resdata_up0 = (await payment_profile_ref01_ent.update(payment_profile_ref01_data_up0)).data()
    assert(payment_profile_ref01_resdata_up0.id === payment_profile_ref01_data_up0.id)

    assert((payment_profile_ref01_resdata_up0 as any)[payment_profile_ref01_markdef_up0.name] === payment_profile_ref01_markdef_up0.value)


    // LOAD
    const payment_profile_ref01_match_dt0: any = {}
    payment_profile_ref01_match_dt0.id = payment_profile_ref01_data.id
    const payment_profile_ref01_data_dt0 = (await payment_profile_ref01_ent.load(payment_profile_ref01_match_dt0)).data()
    assert(payment_profile_ref01_data_dt0.id === payment_profile_ref01_data.id)


    // REMOVE
    const payment_profile_ref01_match_rm0: any = { id: payment_profile_ref01_data.id }
    await payment_profile_ref01_ent.remove(payment_profile_ref01_match_rm0)
  

    // LIST
    const payment_profile_ref01_match_rt0: any = {}

    const payment_profile_ref01_list_rt0 = (await payment_profile_ref01_ent.list(payment_profile_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(payment_profile_ref01_list_rt0, { id: payment_profile_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/payment_profile/PaymentProfileTestData.json')

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
    ['payment_profile01','payment_profile02','payment_profile03','subscription_group01','subscription_group02','subscription_group03','subscription01','subscription02','subscription03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID': idmap,
    'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
    'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
    'MAXIO_ADVANCED_BILLING_APIKEY': '',
    'MAXIO_ADVANCED_BILLING_SECRET': '',
    'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
  })

  idmap = env['MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID']

  const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_PAYMENT_PROFILE_ENTID']
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
  
