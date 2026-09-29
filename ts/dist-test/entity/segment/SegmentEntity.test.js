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
(0, node_test_1.describe)('SegmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.Segment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'segment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "component_id": { "a": true, "fo": "int32", "h": "Component Id", "n": "component_id", "r": false, "t": "`$INTEGER`", "key$": "component_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "event_based_billing_metric_id": { "a": true, "fo": "int32", "h": "Event Based Billing Metric Id", "n": "event_based_billing_metric_id", "r": false, "t": "`$INTEGER`", "key$": "event_based_billing_metric_id", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "price_point_id": { "a": true, "fo": "int32", "h": "Price Point Id", "n": "price_point_id", "r": false, "t": "`$INTEGER`", "key$": "price_point_id", "index$": 4 }, "prices": { "a": true, "h": "Prices", "n": "prices", "r": false, "t": "`$ARRAY`", "key$": "prices", "index$": 5 }, "pricing_scheme": { "a": true, "h": "Pricing Scheme", "n": "pricing_scheme", "r": false, "t": "`$ANY`", "key$": "pricing_scheme", "index$": 6 }, "segment_property_1_value": { "a": true, "h": "Segment Property 1 Value", "n": "segment_property_1_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_1_value", "index$": 7 }, "segment_property_2_value": { "a": true, "h": "Segment Property 2 Value", "n": "segment_property_2_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_2_value", "index$": 8 }, "segment_property_3_value": { "a": true, "h": "Segment Property 3 Value", "n": "segment_property_3_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_3_value", "index$": 9 }, "segment_property_4_value": { "a": true, "h": "Segment Property 4 Value", "n": "segment_property_4_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_4_value", "index$": 10 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "segment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /components/{component_id}/price_points/{price_point_id}/segments.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/components/{component_id}/price_points/{price_point_id}/segments.json", "q": { "exist": ["component_id", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "var": "price_point_id" }, { "lit": "segments.json" }], "t": { "req": "`reqdata`", "res": "`body.segment`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /components/{component_id}/price_points/{price_point_id}/segments/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json", "q": { "$action": "id", "exist": ["component_id", "id", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "var": "price_point_id" }, { "lit": "segments" }, { "lit": "{id}.json" }], "t": { "req": { "segment": "`reqdata`" }, "res": "`body.segment`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.component"]] }, "key$": "segment", "name__orig": "segment", "Name": "Segment", "name_": "segment", "name-": "segment", "NAME": "SEGMENT", "index$": 39 }, { "active": true, "entity": "segment", "key$": "BasicSegmentFlow", "kind": "basic", "name": "BasicSegmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "segment_ref01" }, "m": { "component_id": "component01", "price_point_id": "price_point01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "component_id": "component01" }, "i": { "ref": "segment_ref01", "srcdatavar": "segment_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-segment_ref01" } }], "v": [], "index$": 1 }] }, 'Segment', { "POST /components/{component_id}/price_points/{price_point_id}/segments.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateSegmentRequest", "required": ["segment"], "type": "object", "properties": { "segment": { "title": "CreateSegment", "required": ["pricing_scheme"], "type": "object", "properties": { "segment_property_1_value": {}, "segment_property_2_value": {}, "segment_property_3_value": {}, "segment_property_4_value": {}, "pricing_scheme": {}, "prices": {} }, "x-ref": "#/components/schemas/CreateSegment" } }, "x-ref": "#/components/schemas/CreateSegmentRequest" }, { "example": { "segment": { "segment_property_1_value": "France", "segment_property_2_value": "Spain", "pricing_scheme": "volume", "prices": [{}, {}] } } }], "index$": 1 }, "examples": { "Create a Single Segment (related Metric has 2 segmented properties)": { "value": { "segment": { "segment_property_1_value": "France", "segment_property_2_value": "Spain", "pricing_scheme": "volume", "prices": [{ "starting_quantity": 1, "ending_quantity": 10000, "unit_price": 0.19 }, { "starting_quantity": 10001, "unit_price": 0.09 }] } } } } } }, "required": false }, "parameters": [{ "name": "component_id", "in": "path", "description": "ID or Handle for the Component", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "ID or Handle for the Price Point belonging to the Component", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "PUT /components/{component_id}/price_points/{price_point_id}/segments/{id}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "UpdateSegmentRequest", "required": ["segment"], "type": "object", "properties": { "segment": { "title": "UpdateSegment", "required": ["pricing_scheme"], "type": "object", "properties": { "pricing_scheme": { "allOf": [{}, {}] }, "prices": { "type": "array", "items": { "title": "CreateorUpdateSegmentPrice", "required": [], "type": "object", "properties": {}, "x-ref": "#/components/schemas/CreateorUpdateSegmentPrice" }, "description": "" } }, "x-ref": "#/components/schemas/UpdateSegment" } }, "x-ref": "#/components/schemas/UpdateSegmentRequest" } } }, "required": false }, "parameters": [{ "name": "component_id", "in": "path", "description": "ID or Handle of the Component", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "ID or Handle of the Price Point belonging to the Component", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "id", "in": "path", "description": "The ID of the Segment", "required": true, "schema": { "type": "number", "format": "double" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const segment_ref01_ent = client.Segment();
        let segment_ref01_data = setup.data.new.segment['segment_ref01'];
        segment_ref01_data['component_id'] = setup.idmap['component01'];
        segment_ref01_data['price_point_id'] = setup.idmap['price_point01'];
        segment_ref01_data = (await segment_ref01_ent.create(segment_ref01_data)).data();
        (0, node_assert_1.default)(null != segment_ref01_data.id);
        // UPDATE
        const segment_ref01_data_up0 = {};
        segment_ref01_data_up0.id = segment_ref01_data.id;
        segment_ref01_data_up0['component_id'] = setup.idmap['component_id'];
        const segment_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-segment_ref01_' + setup.now };
        segment_ref01_data_up0[segment_ref01_markdef_up0.name] = segment_ref01_markdef_up0.value;
        const segment_ref01_resdata_up0 = (await segment_ref01_ent.update(segment_ref01_data_up0)).data();
        (0, node_assert_1.default)(segment_ref01_resdata_up0.id === segment_ref01_data_up0.id);
        (0, node_assert_1.default)(segment_ref01_resdata_up0[segment_ref01_markdef_up0.name] === segment_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/segment/SegmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['segment01', 'segment02', 'segment03', 'component01', 'component02', 'component03', 'price_point01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID'];
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
//# sourceMappingURL=SegmentEntity.test.js.map