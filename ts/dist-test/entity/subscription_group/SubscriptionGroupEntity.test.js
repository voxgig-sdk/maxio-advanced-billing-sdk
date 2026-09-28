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
(0, node_test_1.describe)('SubscriptionGroupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.SubscriptionGroup();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription_group.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": false, "t": "`$OBJECT`", "key$": "meta", "index$": 1 }, "subscription_group": { "a": true, "h": "Subscription Group", "n": "subscription_group", "r": false, "t": "`$OBJECT`", "key$": "subscription_group", "index$": 2 }, "subscription_groups": { "a": true, "h": "Subscription Groups", "n": "subscription_groups", "r": false, "t": "`$ARRAY`", "key$": "subscription_groups", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "subscription_group", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/group.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/group.json", "q": { "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "group.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /subscription_groups.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/subscription_groups.json", "q": {}, "r": {}, "s": [{ "lit": "subscription_groups.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /subscription_groups.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": ["account_balances"], "k": "query", "n": "include", "or": "include", "r": false, "t": "`$ARRAY`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/subscription_groups.json", "q": { "exist": ["include", "page", "per_page"] }, "r": {}, "s": [{ "lit": "subscription_groups.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /subscription_groups/{uid}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": ["current_billing_amount_in_cents"], "k": "query", "n": "include", "or": "include", "r": false, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/subscription_groups/{uid}.json", "q": { "$action": "uid", "exist": ["include", "uid"] }, "r": {}, "s": [{ "lit": "subscription_groups" }, { "lit": "{uid}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /subscription_groups/lookup.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/subscription_groups/lookup.json", "q": { "$action": "lookup", "exist": ["subscription_id"] }, "r": {}, "s": [{ "lit": "subscription_groups" }, { "lit": "lookup.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /subscriptions/{subscription_id}/group.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/subscriptions/{subscription_id}/group.json", "q": { "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "group.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /subscription_groups/{uid}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/subscription_groups/{uid}.json", "q": { "$action": "uid", "exist": ["uid"] }, "r": {}, "s": [{ "lit": "subscription_groups" }, { "lit": "{uid}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /subscription_groups/{uid}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "uid", "or": "uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/subscription_groups/{uid}.json", "q": { "$action": "uid", "exist": ["uid"] }, "r": {}, "s": [{ "lit": "subscription_groups" }, { "lit": "{uid}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "subscription_group", "name__orig": "subscription_group", "Name": "SubscriptionGroup", "name_": "subscription_group", "name-": "subscription-group", "NAME": "SUBSCRIPTION_GROUP", "index$": 45 }, { "active": true, "entity": "subscription_group", "key$": "BasicSubscriptionGroupFlow", "kind": "basic", "name": "BasicSubscriptionGroupFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "subscription_group_ref01" }, "m": { "uid": "uid01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscription_group_ref01" } }], "index$": 1 }, { "a": true, "d": { "uid": "uid01" }, "i": { "ref": "subscription_group_ref01", "srcdatavar": "subscription_group_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_group_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "subscription_group_ref01", "suffix": "_rm0" }, "m": { "uid": "uid01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "subscription_group_ref01" } }], "index$": 4 }] }, 'SubscriptionGroup', { "POST /subscriptions/{subscription_id}/group.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "AddSubscriptiontoaGroup", "type": "object", "properties": { "group": { "title": "GroupSettings", "required": ["target"], "type": "object", "properties": { "target": {}, "billing": {} }, "x-ref": "#/components/schemas/GroupSettings" } }, "x-ref": "#/components/schemas/AddSubscriptiontoaGroup" }, { "example": { "group": { "target": { "type": "subscription", "id": 32987 }, "billing": { "accrue": true, "align_date": true, "prorate": true } } } }], "index$": 1 }, "examples": { "Example": { "value": { "group": { "target": { "type": "subscription", "id": 32987 }, "billing": { "accrue": true, "align_date": true, "prorate": true } } } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "POST /subscription_groups.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateSubscriptionGroupRequest", "required": ["subscription_group"], "type": "object", "properties": { "subscription_group": { "title": "CreateSubscriptionGroup", "required": ["subscription_id"], "type": "object", "properties": { "subscription_id": {}, "member_ids": {} }, "x-ref": "#/components/schemas/CreateSubscriptionGroup" } }, "x-ref": "#/components/schemas/CreateSubscriptionGroupRequest" }, { "example": { "subscription_group": { "subscription_id": 1, "member_ids": [2, 3, 4] } } }], "index$": 1 }, "examples": { "Example": { "value": { "subscription_group": { "subscription_id": 1, "member_ids": [2, 3, 4] } } } } } }, "required": false }, "parameters": [] }, "GET /subscription_groups.json": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 0 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 1 }, { "name": "include", "in": "query", "description": "A list of additional information to include in the response. The following values are supported:\n\n- `account_balances`: Account balance information for the subscription groups. Use in query: `include[]=account_balances`", "style": "form", "explode": true, "schema": { "type": "array", "items": { "title": "SubscriptionGroupsListInclude", "enum": ["account_balances"], "type": "string", "x-ref": "#/components/schemas/SubscriptionGroupsListInclude" }, "example": ["account_balances"] }, "index$": 2 }] }, "GET /subscription_groups/{uid}.json": { "protocol": "http", "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "include", "in": "query", "description": "Allows including additional data in the response. Use in query: `include[]=current_billing_amount_in_cents`.", "style": "form", "explode": true, "schema": { "type": "array", "items": { "title": "SubscriptionGroupInclude", "enum": ["current_billing_amount_in_cents"], "type": "string", "x-ref": "#/components/schemas/SubscriptionGroupInclude" }, "example": ["current_billing_amount_in_cents"] }, "index$": 1 }] }, "GET /subscription_groups/lookup.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "query", "description": "The Advanced Billing id of the subscription associated with the subscription group", "required": true, "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /subscriptions/{subscription_id}/group.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "DELETE /subscription_groups/{uid}.json": { "protocol": "http", "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "PUT /subscription_groups/{uid}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "UpdateSubscriptionGroupRequest", "required": ["subscription_group"], "type": "object", "properties": { "subscription_group": { "title": "UpdateSubscriptionGroup", "type": "object", "properties": { "member_ids": {} }, "x-ref": "#/components/schemas/UpdateSubscriptionGroup" } }, "x-ref": "#/components/schemas/UpdateSubscriptionGroupRequest" }, { "example": { "subscription_group": { "member_ids": [1, 2, 3] } } }] }, "examples": { "Example": { "value": { "subscription_group": { "member_ids": [1, 2, 3] } } } } } }, "required": false }, "parameters": [{ "name": "uid", "in": "path", "description": "The uid of the subscription group", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const subscription_group_ref01_ent = client.SubscriptionGroup();
        let subscription_group_ref01_data = setup.data.new.subscription_group['subscription_group_ref01'];
        subscription_group_ref01_data['uid'] = setup.idmap['uid01'];
        subscription_group_ref01_data = (await subscription_group_ref01_ent.create(subscription_group_ref01_data)).data();
        (0, node_assert_1.default)(null != subscription_group_ref01_data.id);
        // LIST
        const subscription_group_ref01_match = {};
        const subscription_group_ref01_list = (await subscription_group_ref01_ent.list(subscription_group_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(subscription_group_ref01_list, { id: subscription_group_ref01_data.id })));
        // UPDATE
        const subscription_group_ref01_data_up0 = {};
        subscription_group_ref01_data_up0.id = subscription_group_ref01_data.id;
        subscription_group_ref01_data_up0['uid'] = setup.idmap['uid'];
        const subscription_group_ref01_resdata_up0 = (await subscription_group_ref01_ent.update(subscription_group_ref01_data_up0)).data();
        (0, node_assert_1.default)(subscription_group_ref01_resdata_up0.id === subscription_group_ref01_data_up0.id);
        // REMOVE
        const subscription_group_ref01_match_rm0 = { id: subscription_group_ref01_data.id };
        await subscription_group_ref01_ent.remove(subscription_group_ref01_match_rm0);
        // LIST
        const subscription_group_ref01_match_rt0 = {};
        const subscription_group_ref01_list_rt0 = (await subscription_group_ref01_ent.list(subscription_group_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(subscription_group_ref01_list_rt0, { id: subscription_group_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription_group/SubscriptionGroupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription_group01', 'subscription_group02', 'subscription_group03', 'uid01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_GROUP_ENTID'];
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
//# sourceMappingURL=SubscriptionGroupEntity.test.js.map