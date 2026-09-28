"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ProformaInvoiceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.ProformaInvoice();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'proforma_invoice.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "available_actions": { "a": true, "h": "Available Actions", "n": "available_actions", "r": false, "t": "`$OBJECT`", "key$": "available_actions", "index$": 0 }, "billing_address": { "a": true, "h": "Billing Address", "n": "billing_address", "r": false, "t": "`$OBJECT`", "key$": "billing_address", "index$": 1 }, "collection_method": { "a": true, "h": "Collection Method", "n": "collection_method", "r": false, "t": "`$ANY`", "key$": "collection_method", "index$": 2 }, "consolidation_level": { "a": true, "h": "Consolidation Level", "n": "consolidation_level", "r": false, "t": "`$ANY`", "key$": "consolidation_level", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "credit_amount": { "a": true, "h": "Credit Amount", "n": "credit_amount", "r": false, "t": "`$STRING`", "key$": "credit_amount", "index$": 5 }, "credits": { "a": true, "h": "Credits", "n": "credits", "r": false, "t": "`$ARRAY`", "key$": "credits", "index$": 6 }, "currency": { "a": true, "h": "Currency", "n": "currency", "r": false, "t": "`$STRING`", "key$": "currency", "index$": 7 }, "custom_fields": { "a": true, "h": "Custom Fields", "n": "custom_fields", "r": false, "t": "`$ARRAY`", "key$": "custom_fields", "index$": 8 }, "customer": { "a": true, "h": "Customer", "n": "customer", "r": false, "t": "`$ANY`", "key$": "customer", "index$": 9 }, "customer_id": { "a": true, "fo": "int32", "h": "Customer Id", "n": "customer_id", "r": false, "t": "`$INTEGER`", "key$": "customer_id", "index$": 10 }, "delivery_date": { "a": true, "fo": "date", "h": "Delivery Date", "n": "delivery_date", "r": false, "t": "`$STRING`", "key$": "delivery_date", "index$": 11 }, "discount_amount": { "a": true, "h": "Discount Amount", "n": "discount_amount", "r": false, "t": "`$STRING`", "key$": "discount_amount", "index$": 12 }, "discounts": { "a": true, "h": "Discounts", "n": "discounts", "r": false, "t": "`$ARRAY`", "key$": "discounts", "index$": 13 }, "due_amount": { "a": true, "h": "Due Amount", "n": "due_amount", "r": false, "t": "`$STRING`", "key$": "due_amount", "index$": 14 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 15 }, "line_items": { "a": true, "h": "Line Items", "n": "line_items", "r": false, "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 5 }, "key$": "line_items", "index$": 16 }, "memo": { "a": true, "h": "Memo", "n": "memo", "r": false, "t": "`$STRING`", "key$": "memo", "index$": 17 }, "number": { "a": true, "fo": "int32", "h": "Number", "n": "number", "r": false, "t": "`$INTEGER`", "key$": "number", "index$": 18 }, "paid_amount": { "a": true, "h": "Paid Amount", "n": "paid_amount", "r": false, "t": "`$STRING`", "key$": "paid_amount", "index$": 19 }, "payment_instructions": { "a": true, "h": "Payment Instructions", "n": "payment_instructions", "r": false, "t": "`$STRING`", "key$": "payment_instructions", "index$": 20 }, "payments": { "a": true, "h": "Payments", "n": "payments", "r": false, "t": "`$ARRAY`", "key$": "payments", "index$": 21 }, "product_family_name": { "a": true, "h": "Product Family Name", "n": "product_family_name", "r": false, "t": "`$STRING`", "key$": "product_family_name", "index$": 22 }, "product_name": { "a": true, "h": "Product Name", "n": "product_name", "r": false, "t": "`$STRING`", "key$": "product_name", "index$": 23 }, "public_url": { "a": true, "h": "Public Url", "n": "public_url", "r": false, "t": "`$STRING`", "key$": "public_url", "index$": 24 }, "refund_amount": { "a": true, "h": "Refund Amount", "n": "refund_amount", "r": false, "t": "`$STRING`", "key$": "refund_amount", "index$": 25 }, "role": { "a": true, "h": "Role", "n": "role", "r": false, "t": "`$ANY`", "key$": "role", "index$": 26 }, "seller": { "a": true, "h": "Seller", "n": "seller", "r": false, "t": "`$ANY`", "key$": "seller", "index$": 27 }, "sequence_number": { "a": true, "fo": "int32", "h": "Sequence Number", "n": "sequence_number", "r": false, "t": "`$INTEGER`", "key$": "sequence_number", "index$": 28 }, "shipping_address": { "a": true, "h": "Shipping Address", "n": "shipping_address", "r": false, "t": "`$OBJECT`", "key$": "shipping_address", "index$": 29 }, "site_id": { "a": true, "fo": "int32", "h": "Site Id", "n": "site_id", "r": false, "t": "`$INTEGER`", "key$": "site_id", "index$": 30 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 31 }, "subscription_id": { "a": true, "fo": "int32", "h": "Subscription Id", "n": "subscription_id", "r": false, "t": "`$INTEGER`", "key$": "subscription_id", "index$": 32 }, "subtotal_amount": { "a": true, "h": "Subtotal Amount", "n": "subtotal_amount", "r": false, "t": "`$STRING`", "key$": "subtotal_amount", "index$": 33 }, "tax_amount": { "a": true, "h": "Tax Amount", "n": "tax_amount", "r": false, "t": "`$STRING`", "key$": "tax_amount", "index$": 34 }, "taxes": { "a": true, "h": "Taxes", "n": "taxes", "r": false, "t": "`$ARRAY`", "key$": "taxes", "index$": 35 }, "total_amount": { "a": true, "h": "Total Amount", "n": "total_amount", "r": false, "t": "`$STRING`", "key$": "total_amount", "index$": 36 }, "uid": { "a": true, "h": "Uid", "n": "uid", "r": false, "t": "`$STRING`", "key$": "uid", "index$": 37 } }, "id": { "field": "id", "name": "id" }, "name": "proforma_invoice", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /proforma_invoices/{proforma_invoice_uid}/deliveries.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "proforma_invoice_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/proforma_invoices/{proforma_invoice_uid}/deliveries.json", "q": { "$action": "delivery", "exist": ["id"] }, "r": { "param": { "proforma_invoice_uid": "id" } }, "s": [{ "lit": "proforma_invoices" }, { "var": "id" }, { "lit": "deliveries.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /proforma_invoices/{proforma_invoice_uid}/void.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "proforma_invoice_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/proforma_invoices/{proforma_invoice_uid}/void.json", "q": { "$action": "void", "exist": ["id"] }, "r": { "param": { "proforma_invoice_uid": "id" } }, "s": [{ "lit": "proforma_invoices" }, { "var": "id" }, { "lit": "void.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /subscription_groups/{uid}/proforma_invoices.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_group_id", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscription_groups/{uid}/proforma_invoices.json", "q": { "exist": ["subscription_group_id"] }, "r": { "param": { "uid": "subscription_group_id" } }, "s": [{ "lit": "subscription_groups" }, { "var": "subscription_group_id" }, { "lit": "proforma_invoices.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/proforma_invoices.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/proforma_invoices.json", "q": { "exist": ["subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "proforma_invoices.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/proforma_invoices/preview.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/proforma_invoices/preview.json", "q": { "$action": "preview", "exist": ["subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "proforma_invoices" }, { "lit": "preview.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "co": { "id": "POST /subscriptions/proforma_invoices.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/subscriptions/proforma_invoices.json", "q": {}, "r": {}, "s": [{ "lit": "subscriptions" }, { "lit": "proforma_invoices.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api_exports/proforma_invoices/{batch_id}/rows.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 100, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api_exports/proforma_invoices/{batch_id}/rows.json", "q": { "$action": "row", "exist": ["id", "page", "per_page"] }, "r": { "param": { "batch_id": "id" } }, "s": [{ "lit": "api_exports" }, { "lit": "proforma_invoices" }, { "var": "id" }, { "lit": "rows.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /proforma_invoices/{proforma_invoice_uid}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "proforma_invoice_uid", "or": "proforma_invoice_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/proforma_invoices/{proforma_invoice_uid}.json", "q": { "$action": "proforma_invoice_uid", "exist": ["proforma_invoice_uid"] }, "r": {}, "s": [{ "lit": "proforma_invoices" }, { "lit": "{proforma_invoice_uid}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.subscription_group"], ["$.main.kit.entity.subscription"]] }, "key$": "proforma_invoice", "name__orig": "proforma_invoice", "Name": "ProformaInvoice", "name_": "proforma_invoice", "name-": "proforma-invoice", "NAME": "PROFORMA_INVOICE", "index$": 35 }, { "active": true, "entity": "proforma_invoice", "key$": "BasicProformaInvoiceFlow", "kind": "basic", "name": "BasicProformaInvoiceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "proforma_invoice_ref01" }, "m": { "proforma_invoice_uid": "proforma_invoice_uid01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "proforma_invoice_uid": "proforma_invoice_uid01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "proforma_invoice_ref01" } }], "index$": 1 }] }, 'ProformaInvoice', { "POST /proforma_invoices/{proforma_invoice_uid}/deliveries.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "DeliverProformaInvoiceRequest", "type": "object", "properties": { "recipient_emails": { "type": "array", "items": { "type": "string" }, "description": "" }, "cc_recipient_emails": { "type": "array", "items": { "type": "string" }, "description": "" }, "bcc_recipient_emails": { "type": "array", "items": { "type": "string" }, "description": "" } }, "x-ref": "#/components/schemas/DeliverProformaInvoiceRequest" }, { "example": { "recipient_emails": ["user0@example.com"], "cc_recipient_emails": ["user1@example.com"], "bcc_recipient_emails": ["user2@example.com"] } }] }, "examples": { "Example": { "value": { "recipient_emails": ["user0@example.com"], "cc_recipient_emails": ["user1@example.com"], "bcc_recipient_emails": ["user2@example.com"] } } } } }, "required": false }, "parameters": [{ "name": "proforma_invoice_uid", "in": "path", "description": "The uid of the proforma invoice", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /proforma_invoices/{proforma_invoice_uid}/void.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "VoidInvoiceRequest", "required": ["void"], "type": "object", "properties": { "void": { "title": "VoidInvoice", "required": ["reason"], "type": "object", "properties": { "reason": { "minLength": 1, "type": "string" } }, "x-ref": "#/components/schemas/VoidInvoice", "key$": "void" } }, "x-ref": "#/components/schemas/VoidInvoiceRequest" } } }, "required": false }, "parameters": [{ "name": "proforma_invoice_uid", "in": "path", "description": "The uid of the proforma invoice", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /subscription_groups/{uid}/proforma_invoices.json": { "protocol": "http", "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /subscriptions/{subscription_id}/proforma_invoices.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "POST /subscriptions/{subscription_id}/proforma_invoices/preview.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "POST /subscriptions/proforma_invoices.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateSubscriptionRequest", "required": ["subscription"], "type": "object", "properties": { "subscription": { "title": "CreateSubscription", "type": "object", "properties": { "product_handle": {}, "product_id": {}, "product_price_point_handle": {}, "product_price_point_id": {}, "custom_price": {}, "coupon_code": {}, "coupon_codes": {}, "payment_collection_method": {}, "receives_invoice_emails": {}, "net_terms": {}, "customer_id": {}, "branding_theme_id": {}, "next_billing_at": {}, "initial_billing_at": {}, "defer_signup": {}, "stored_credential_transaction_id": {}, "sales_rep_id": {}, "payment_profile_id": {}, "reference": {}, "customer_attributes": {}, "payment_profile_attributes": {}, "credit_card_attributes": {}, "bank_account_attributes": {}, "components": {}, "calendar_billing": {}, "metafields": {}, "customer_reference": {}, "group": {}, "ref": {}, "cancellation_message": {}, "cancellation_method": {}, "currency": {}, "expires_at": {}, "expiration_tracks_next_billing_change": {}, "agreement_terms": {}, "authorizer_first_name": {}, "authorizer_last_name": {}, "calendar_billing_first_charge": {}, "reason_code": {}, "product_change_delayed": {}, "offer_id": {}, "prepaid_configuration": {}, "previous_billing_at": {}, "import_mrr": {}, "canceled_at": {}, "activated_at": {}, "agreement_acceptance": {}, "ach_agreement": {}, "dunning_communication_delay_enabled": {}, "dunning_communication_delay_time_zone": {}, "skip_billing_manifest_taxes": {} }, "x-ref": "#/components/schemas/CreateSubscription" } }, "x-ref": "#/components/schemas/CreateSubscriptionRequest" }, { "example": { "subscription": { "product_handle": "gold-product", "customer_attributes": { "first_name": "Myra", "last_name": "Maisel", "email": "mmaisel@example.com" } } } }], "index$": 1 }, "examples": { "Minimum payload": { "value": { "subscription": { "product_handle": "gold-product", "customer_attributes": { "first_name": "Myra", "last_name": "Maisel", "email": "mmaisel@example.com" } } } }, "Minimum payload with referenced customer": { "value": { "subscription": { "product_handle": "gold-product", "customer_id": 12345 } } } } } }, "required": false }, "parameters": [] }, "GET /api_exports/proforma_invoices/{batch_id}/rows.json": { "protocol": "http", "parameters": [{ "name": "batch_id", "in": "path", "description": "Id of a Batch Job.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. \nDefault value is 100. \nThe maximum allowed values is 10000; any per_page value over 10000 will be changed to 10000.", "style": "form", "explode": true, "schema": { "maximum": 10000, "minimum": 1, "type": "integer", "format": "int32", "default": 100 }, "index$": 1 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 2 }] }, "GET /proforma_invoices/{proforma_invoice_uid}.json": { "protocol": "http", "parameters": [{ "name": "proforma_invoice_uid", "in": "path", "description": "The uid of the proforma invoice", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const proforma_invoice_ref01_ent = client.ProformaInvoice();
        let proforma_invoice_ref01_data = setup.data.new.proforma_invoice['proforma_invoice_ref01'];
        proforma_invoice_ref01_data['proforma_invoice_uid'] = setup.idmap['proforma_invoice_uid01'];
        proforma_invoice_ref01_data = (await proforma_invoice_ref01_ent.create(proforma_invoice_ref01_data)).data();
        (0, node_assert_1.default)(null != proforma_invoice_ref01_data.id);
        // LIST
        const proforma_invoice_ref01_match = {};
        proforma_invoice_ref01_match['proforma_invoice_uid'] = setup.idmap['proforma_invoice_uid01'];
        const proforma_invoice_ref01_list = (await proforma_invoice_ref01_ent.list(proforma_invoice_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(proforma_invoice_ref01_list, { id: proforma_invoice_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/proforma_invoice/ProformaInvoiceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['proforma_invoice01', 'proforma_invoice02', 'proforma_invoice03', 'subscription_group01', 'subscription_group02', 'subscription_group03', 'subscription01', 'subscription02', 'subscription03', 'proforma_invoice_uid01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_PROFORMA_INVOICE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MaxioAdvancedBillingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ProformaInvoiceEntity.test.js.map