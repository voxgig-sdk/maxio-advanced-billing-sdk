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
(0, node_test_1.describe)('ReasonCodeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.ReasonCode();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reason_code.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "code": { "a": true, "h": "Code", "n": "code", "r": false, "t": "`$STRING`", "key$": "code", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "position": { "a": true, "fo": "int32", "h": "Position", "n": "position", "r": false, "t": "`$INTEGER`", "key$": "position", "index$": 4 }, "reason_code": { "a": true, "h": "Reason Code", "n": "reason_code", "r": true, "t": "`$OBJECT`", "key$": "reason_code", "index$": 5 }, "site_id": { "a": true, "fo": "int32", "h": "Site Id", "n": "site_id", "r": false, "t": "`$INTEGER`", "key$": "site_id", "index$": 6 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "reason_code", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /reason_codes.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/reason_codes.json", "q": {}, "r": {}, "s": [{ "lit": "reason_codes.json" }], "t": { "req": "`reqdata`", "res": "`body.reason_code`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /reason_codes.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/reason_codes.json", "q": { "exist": ["page", "per_page"] }, "r": {}, "s": [{ "lit": "reason_codes.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /reason_codes/{reason_code_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "reason_code_id", "or": "reason_code_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/reason_codes/{reason_code_id}.json", "q": { "$action": "reason_code_id", "exist": ["reason_code_id"] }, "r": {}, "s": [{ "lit": "reason_codes" }, { "lit": "{reason_code_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.reason_code`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /reason_codes/{reason_code_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "reason_code_id", "or": "reason_code_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/reason_codes/{reason_code_id}.json", "q": { "$action": "reason_code_id", "exist": ["reason_code_id"] }, "r": {}, "s": [{ "lit": "reason_codes" }, { "lit": "{reason_code_id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /reason_codes/{reason_code_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "reason_code_id", "or": "reason_code_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/reason_codes/{reason_code_id}.json", "q": { "$action": "reason_code_id", "exist": ["reason_code_id"] }, "r": {}, "s": [{ "lit": "reason_codes" }, { "lit": "{reason_code_id}.json" }], "t": { "req": { "reason_code": "`reqdata`" }, "res": "`body.reason_code`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "reason_code", "name__orig": "reason_code", "Name": "ReasonCode", "name_": "reason_code", "name-": "reason-code", "NAME": "REASON_CODE", "index$": 36 }, { "active": true, "entity": "reason_code", "key$": "BasicReasonCodeFlow", "kind": "basic", "name": "BasicReasonCodeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "reason_code_ref01" }, "m": { "reason_code_id": "reason_code01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "reason_code_ref01" } }], "index$": 1 }, { "a": true, "d": { "reason_code_id": "reason_code01" }, "i": { "ref": "reason_code_ref01", "srcdatavar": "reason_code_ref01_data", "suffix": "_up0", "textfield": "code" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reason_code_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "reason_code_ref01", "srcdatavar": "reason_code_ref01_data", "suffix": "_dt0" }, "m": { "reason_code_id": "reason_code01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reason_code_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "reason_code_ref01", "suffix": "_rm0" }, "m": { "reason_code_id": "reason_code01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "reason_code_ref01" } }], "index$": 5 }] }, 'ReasonCode', { "POST /reason_codes.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateReasonCodeRequest", "required": ["reason_code"], "type": "object", "properties": { "reason_code": { "title": "CreateReasonCode", "required": ["code", "description"], "type": "object", "properties": { "code": {}, "description": {}, "position": {} }, "x-ref": "#/components/schemas/CreateReasonCode" } }, "x-ref": "#/components/schemas/CreateReasonCodeRequest" }, { "example": { "reason_code": { "code": "NOTHANKYOU", "description": "No thank you!", "position": 5 } } }], "index$": 1 }, "examples": { "Example": { "value": { "reason_code": { "code": "NOTHANKYOU", "description": "No thank you!", "position": 5 } } } } } }, "required": false }, "parameters": [] }, "GET /reason_codes.json": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 0 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 1 }] }, "GET /reason_codes/{reason_code_id}.json": { "protocol": "http", "parameters": [{ "name": "reason_code_id", "in": "path", "description": "The Advanced Billing id of the reason code", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "DELETE /reason_codes/{reason_code_id}.json": { "protocol": "http", "parameters": [{ "name": "reason_code_id", "in": "path", "description": "The Advanced Billing id of the reason code", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "PUT /reason_codes/{reason_code_id}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "UpdateReasonCodeRequest", "required": ["reason_code"], "type": "object", "properties": { "reason_code": { "title": "UpdateReasonCode", "type": "object", "properties": { "code": { "type": "string", "description": "The unique identifier for the ReasonCode" }, "description": { "type": "string", "description": "The friendly summary of what the code signifies" }, "position": { "type": "integer", "description": "The order that code appears in lists", "format": "int32" } }, "x-ref": "#/components/schemas/UpdateReasonCode" } }, "x-ref": "#/components/schemas/UpdateReasonCodeRequest" } } }, "required": false }, "parameters": [{ "name": "reason_code_id", "in": "path", "description": "The Advanced Billing id of the reason code", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const reason_code_ref01_ent = client.ReasonCode();
        let reason_code_ref01_data = setup.data.new.reason_code['reason_code_ref01'];
        reason_code_ref01_data['reason_code_id'] = setup.idmap['reason_code01'];
        reason_code_ref01_data = (await reason_code_ref01_ent.create(reason_code_ref01_data)).data();
        (0, node_assert_1.default)(null != reason_code_ref01_data.id);
        // LIST
        const reason_code_ref01_match = {};
        const reason_code_ref01_list = (await reason_code_ref01_ent.list(reason_code_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(reason_code_ref01_list, { id: reason_code_ref01_data.id })));
        // UPDATE
        const reason_code_ref01_data_up0 = {};
        reason_code_ref01_data_up0.id = reason_code_ref01_data.id;
        reason_code_ref01_data_up0['reason_code_id'] = setup.idmap['reason_code_id'];
        const reason_code_ref01_markdef_up0 = { name: 'code', value: 'Mark01-reason_code_ref01_' + setup.now };
        reason_code_ref01_data_up0[reason_code_ref01_markdef_up0.name] = reason_code_ref01_markdef_up0.value;
        const reason_code_ref01_resdata_up0 = (await reason_code_ref01_ent.update(reason_code_ref01_data_up0)).data();
        (0, node_assert_1.default)(reason_code_ref01_resdata_up0.id === reason_code_ref01_data_up0.id);
        (0, node_assert_1.default)(reason_code_ref01_resdata_up0[reason_code_ref01_markdef_up0.name] === reason_code_ref01_markdef_up0.value);
        // LOAD
        const reason_code_ref01_match_dt0 = {};
        reason_code_ref01_match_dt0.id = reason_code_ref01_data.id;
        const reason_code_ref01_data_dt0 = (await reason_code_ref01_ent.load(reason_code_ref01_match_dt0)).data();
        (0, node_assert_1.default)(reason_code_ref01_data_dt0.id === reason_code_ref01_data.id);
        // REMOVE
        const reason_code_ref01_match_rm0 = { id: reason_code_ref01_data.id };
        await reason_code_ref01_ent.remove(reason_code_ref01_match_rm0);
        // LIST
        const reason_code_ref01_match_rt0 = {};
        const reason_code_ref01_list_rt0 = (await reason_code_ref01_ent.list(reason_code_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(reason_code_ref01_list_rt0, { id: reason_code_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reason_code/ReasonCodeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reason_code01', 'reason_code02', 'reason_code03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID'];
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
//# sourceMappingURL=ReasonCodeEntity.test.js.map