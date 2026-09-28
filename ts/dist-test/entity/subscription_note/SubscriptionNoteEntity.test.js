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
(0, node_test_1.describe)('SubscriptionNoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.SubscriptionNote();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription_note.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "r": false, "t": "`$STRING`", "key$": "body", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "note": { "a": true, "h": "Note", "n": "note", "r": true, "t": "`$OBJECT`", "key$": "note", "index$": 3 }, "sticky": { "a": true, "h": "Sticky", "n": "sticky", "r": false, "t": "`$BOOLEAN`", "key$": "sticky", "index$": 4 }, "subscription_id": { "a": true, "fo": "int32", "h": "Subscription Id", "n": "subscription_id", "r": false, "t": "`$INTEGER`", "key$": "subscription_id", "index$": 5 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "subscription_note", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/notes.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/notes.json", "q": { "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "notes.json" }], "t": { "req": "`reqdata`", "res": "`body.note`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /subscriptions/{subscription_id}/notes.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/subscriptions/{subscription_id}/notes.json", "q": { "exist": ["id", "page", "per_page"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "notes.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /subscriptions/{subscription_id}/notes/{note_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "note_id", "or": "note_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/subscriptions/{subscription_id}/notes/{note_id}.json", "q": { "exist": ["note_id", "subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "notes" }, { "lit": "{note_id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /subscriptions/{subscription_id}/notes/{note_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "note_id", "or": "note_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/subscriptions/{subscription_id}/notes/{note_id}.json", "q": { "exist": ["note_id", "subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "notes" }, { "lit": "{note_id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /subscriptions/{subscription_id}/notes/{note_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "note_id", "or": "note_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/subscriptions/{subscription_id}/notes/{note_id}.json", "q": { "exist": ["note_id", "subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "notes" }, { "lit": "{note_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.note`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.subscription"]] }, "key$": "subscription_note", "name__orig": "subscription_note", "Name": "SubscriptionNote", "name_": "subscription_note", "name-": "subscription-note", "NAME": "SUBSCRIPTION_NOTE", "index$": 51 }, { "active": true, "entity": "subscription_note", "key$": "BasicSubscriptionNoteFlow", "kind": "basic", "name": "BasicSubscriptionNoteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "subscription_note_ref01" }, "m": { "note_id": "note01", "subscription_id": "subscription01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "subscription_id": "subscription01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "subscription_note_ref01" } }], "index$": 1 }, { "a": true, "d": { "note_id": "note01" }, "i": { "ref": "subscription_note_ref01", "srcdatavar": "subscription_note_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_note_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "subscription_note_ref01", "srcdatavar": "subscription_note_ref01_data", "suffix": "_dt0" }, "m": { "id": "subscription_note01", "note_id": "note01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_note_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "subscription_note_ref01", "suffix": "_rm0" }, "m": { "id": "subscription_note01", "note_id": "note01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "subscription_id": "subscription01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "subscription_note_ref01" } }], "index$": 5 }] }, 'SubscriptionNote', { "POST /subscriptions/{subscription_id}/notes.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "UpdateSubscriptionNoteRequest", "required": ["note"], "type": "object", "properties": { "note": { "allOf": [{}, {}] } }, "description": "Updatable fields for Subscription Note", "x-ref": "#/components/schemas/UpdateSubscriptionNoteRequest" }, { "example": { "note": { "body": "New test note.", "sticky": true } } }], "index$": 1 }, "examples": { "Example": { "value": { "note": { "body": "New test note.", "sticky": true } } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "GET /subscriptions/{subscription_id}/notes.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 2 }] }, "GET /subscriptions/{subscription_id}/notes/{note_id}.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "note_id", "in": "path", "description": "The Advanced Billing id of the note", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 1 }] }, "DELETE /subscriptions/{subscription_id}/notes/{note_id}.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "note_id", "in": "path", "description": "The Advanced Billing id of the note", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 1 }] }, "PUT /subscriptions/{subscription_id}/notes/{note_id}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "UpdateSubscriptionNoteRequest", "required": ["note"], "type": "object", "properties": { "note": { "allOf": [{}, {}] } }, "description": "Updatable fields for Subscription Note", "x-ref": "#/components/schemas/UpdateSubscriptionNoteRequest" }, { "example": { "note": { "body": "Modified test note.", "sticky": true } } }], "index$": 1 }, "examples": { "Example": { "value": { "note": { "body": "Modified test note.", "sticky": true } } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "note_id", "in": "path", "description": "The Advanced Billing id of the note", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const subscription_note_ref01_ent = client.SubscriptionNote();
        let subscription_note_ref01_data = setup.data.new.subscription_note['subscription_note_ref01'];
        subscription_note_ref01_data['note_id'] = setup.idmap['note01'];
        subscription_note_ref01_data['subscription_id'] = setup.idmap['subscription01'];
        subscription_note_ref01_data = (await subscription_note_ref01_ent.create(subscription_note_ref01_data)).data();
        (0, node_assert_1.default)(null != subscription_note_ref01_data.id);
        // LIST
        const subscription_note_ref01_match = {};
        subscription_note_ref01_match['subscription_id'] = setup.idmap['subscription01'];
        const subscription_note_ref01_list = (await subscription_note_ref01_ent.list(subscription_note_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(subscription_note_ref01_list, { id: subscription_note_ref01_data.id })));
        // UPDATE
        const subscription_note_ref01_data_up0 = {};
        subscription_note_ref01_data_up0.id = subscription_note_ref01_data.id;
        subscription_note_ref01_data_up0['note_id'] = setup.idmap['note_id'];
        const subscription_note_ref01_markdef_up0 = { name: 'body', value: 'Mark01-subscription_note_ref01_' + setup.now };
        subscription_note_ref01_data_up0[subscription_note_ref01_markdef_up0.name] = subscription_note_ref01_markdef_up0.value;
        const subscription_note_ref01_resdata_up0 = (await subscription_note_ref01_ent.update(subscription_note_ref01_data_up0)).data();
        (0, node_assert_1.default)(subscription_note_ref01_resdata_up0.id === subscription_note_ref01_data_up0.id);
        (0, node_assert_1.default)(subscription_note_ref01_resdata_up0[subscription_note_ref01_markdef_up0.name] === subscription_note_ref01_markdef_up0.value);
        // LOAD
        const subscription_note_ref01_match_dt0 = {};
        subscription_note_ref01_match_dt0.id = subscription_note_ref01_data.id;
        const subscription_note_ref01_data_dt0 = (await subscription_note_ref01_ent.load(subscription_note_ref01_match_dt0)).data();
        (0, node_assert_1.default)(subscription_note_ref01_data_dt0.id === subscription_note_ref01_data.id);
        // REMOVE
        const subscription_note_ref01_match_rm0 = { id: subscription_note_ref01_data.id };
        await subscription_note_ref01_ent.remove(subscription_note_ref01_match_rm0);
        // LIST
        const subscription_note_ref01_match_rt0 = {};
        subscription_note_ref01_match_rt0['subscription_id'] = setup.idmap['subscription01'];
        const subscription_note_ref01_list_rt0 = (await subscription_note_ref01_ent.list(subscription_note_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(subscription_note_ref01_list_rt0, { id: subscription_note_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription_note/SubscriptionNoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription_note01', 'subscription_note02', 'subscription_note03', 'subscription01', 'subscription02', 'subscription03', 'note01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID'];
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
//# sourceMappingURL=SubscriptionNoteEntity.test.js.map