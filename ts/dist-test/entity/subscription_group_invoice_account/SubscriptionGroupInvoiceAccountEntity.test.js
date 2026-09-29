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
(0, node_test_1.describe)('SubscriptionGroupInvoiceAccountEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.SubscriptionGroupInvoiceAccount();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription_group_invoice_account.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "subscription_group_invoice_account", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscription_groups/{uid}/prepayments.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscription_groups/{uid}/prepayments.json", "q": { "$action": "prepayments.json", "exist": ["id"] }, "r": { "param": { "uid": "id" } }, "s": [{ "lit": "subscription_groups" }, { "var": "id" }, { "lit": "prepayments.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /subscription_groups/{uid}/service_credit_deductions.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscription_groups/{uid}/service_credit_deductions.json", "q": { "$action": "service_credit_deductions.json", "exist": ["id"] }, "r": { "param": { "uid": "id" } }, "s": [{ "lit": "subscription_groups" }, { "var": "id" }, { "lit": "service_credit_deductions.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /subscription_groups/{uid}/service_credits.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscription_groups/{uid}/service_credits.json", "q": { "$action": "service_credits.json", "exist": ["id"] }, "r": { "param": { "uid": "id" } }, "s": [{ "lit": "subscription_groups" }, { "var": "id" }, { "lit": "service_credits.json" }], "t": { "req": "`reqdata`", "res": "`body.service_credit`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /subscription_groups/{uid}/prepayments.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/subscription_groups/{uid}/prepayments.json", "q": { "$action": "prepayments.json", "exist": ["filter", "id", "page", "per_page"] }, "r": { "param": { "uid": "id" } }, "s": [{ "lit": "subscription_groups" }, { "var": "id" }, { "lit": "prepayments.json" }], "t": { "req": "`reqdata`", "res": "`body.prepayments`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "subscription_group_invoice_account", "name__orig": "subscription_group_invoice_account", "Name": "SubscriptionGroupInvoiceAccount", "name_": "subscription_group_invoice_account", "name-": "subscription-group-invoice-account", "NAME": "SUBSCRIPTION_GROUP_INVOICE_ACCOUNT", "index$": 45 }, { "active": true, "entity": "subscription_group_invoice_account", "key$": "BasicSubscriptionGroupInvoiceAccountFlow", "kind": "basic", "name": "BasicSubscriptionGroupInvoiceAccountFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "subscription_group_invoice_account_ref01" }, "m": { "uid": "uid01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "uid": "uid01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscription_group_invoice_account_ref01" } }], "index$": 1 }] }, 'SubscriptionGroupInvoiceAccount', { "POST /subscription_groups/{uid}/prepayments.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "SubscriptionGroupPrepaymentRequest", "required": ["prepayment"], "type": "object", "properties": { "prepayment": { "title": "SubscriptionGroupPrepayment", "required": ["amount", "details", "memo", "method"], "type": "object", "properties": { "amount": { "type": "integer", "format": "int32" }, "details": { "type": "string" }, "memo": { "type": "string" }, "method": { "title": "SubscriptionGroupPrepaymentMethod", "enum": ["check", "cash", "money_order", "ach", "paypal_account", "other"], "type": "string", "x-ref": "#/components/schemas/SubscriptionGroupPrepaymentMethod" } }, "x-ref": "#/components/schemas/SubscriptionGroupPrepayment" } }, "x-ref": "#/components/schemas/SubscriptionGroupPrepaymentRequest" } } }, "required": false }, "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /subscription_groups/{uid}/service_credit_deductions.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "DeductServiceCreditRequest", "required": ["deduction"], "type": "object", "properties": { "deduction": { "title": "DeductServiceCredit", "required": ["amount"], "type": "object", "properties": { "amount": {}, "memo": {} }, "x-ref": "#/components/schemas/DeductServiceCredit" } }, "x-ref": "#/components/schemas/DeductServiceCreditRequest" }, { "example": { "deduction": { "amount": 10, "memo": "Deduct from group account" } } }] }, "examples": { "Example": { "value": { "deduction": { "amount": 10, "memo": "Deduct from group account" } } } } } }, "required": false }, "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "POST /subscription_groups/{uid}/service_credits.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "IssueServiceCreditRequest", "required": ["service_credit"], "type": "object", "properties": { "service_credit": { "title": "IssueServiceCredit", "required": ["amount"], "type": "object", "properties": { "amount": {}, "memo": {} }, "x-ref": "#/components/schemas/IssueServiceCredit" } }, "x-ref": "#/components/schemas/IssueServiceCreditRequest" }, { "example": { "service_credit": { "amount": 10, "memo": "Credit the group account" } } }] }, "examples": { "Example": { "value": { "service_credit": { "amount": 10, "memo": "Credit the group account" } } } } } }, "required": false }, "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /subscription_groups/{uid}/prepayments.json": { "protocol": "http", "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 2 }, { "name": "filter", "in": "query", "description": "Filter to use for List Prepayments operations", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "ListPrepaymentsFilter", "type": "object", "properties": { "date_field": { "allOf": [{ "title": "ListPrepaymentDateField", "enum": [], "type": "string", "example": "created_at", "x-ref": "#/components/schemas/ListPrepaymentDateField" }, { "description": "The type of filter you would like to apply to your search. `created_at` - Time when prepayment was created. `application_at` - Time when prepayment was applied to invoice. Use in query `filter[date_field]=created_at`.", "example": "created_at" }] }, "start_date": { "type": "string", "description": "The start date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp at or after midnight (12:00:00 AM) in your site's time zone on the date specified. Use in query: `filter[start_date]=2011-12-15`.", "format": "date", "example": "2024-01-01" }, "end_date": { "type": "string", "description": "The end date (format YYYY-MM-DD) with which to filter the date_field. Returns prepayments with a timestamp up to and including 11:59:59PM in your site's time zone on the date specified. Use in query: `filter[end_date]=2011-12-15`.", "format": "date", "example": "2024-01-31" } }, "x-ref": "#/components/schemas/ListPrepaymentsFilter" }, { "description": "Filter to use for List Prepayments operations" }] }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const subscription_group_invoice_account_ref01_ent = client.SubscriptionGroupInvoiceAccount();
        let subscription_group_invoice_account_ref01_data = setup.data.new.subscription_group_invoice_account['subscription_group_invoice_account_ref01'];
        subscription_group_invoice_account_ref01_data['uid'] = setup.idmap['uid01'];
        subscription_group_invoice_account_ref01_data = (await subscription_group_invoice_account_ref01_ent.create(subscription_group_invoice_account_ref01_data)).data();
        (0, node_assert_1.default)(null != subscription_group_invoice_account_ref01_data.id);
        // LIST
        const subscription_group_invoice_account_ref01_match = {};
        subscription_group_invoice_account_ref01_match['uid'] = setup.idmap['uid01'];
        const subscription_group_invoice_account_ref01_list = (await subscription_group_invoice_account_ref01_ent.list(subscription_group_invoice_account_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(subscription_group_invoice_account_ref01_list, { id: subscription_group_invoice_account_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription_group_invoice_account/SubscriptionGroupInvoiceAccountTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription_group_invoice_account01', 'subscription_group_invoice_account02', 'subscription_group_invoice_account03', 'uid01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_INVOICE_ACCOUNT_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_INVOICE_ACCOUNT_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_INVOICE_ACCOUNT_ENTID'];
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
//# sourceMappingURL=SubscriptionGroupInvoiceAccountEntity.test.js.map