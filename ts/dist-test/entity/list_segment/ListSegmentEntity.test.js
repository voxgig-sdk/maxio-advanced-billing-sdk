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
(0, node_test_1.describe)('ListSegmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.ListSegment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_segment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "component_id": { "a": true, "fo": "int32", "h": "Component Id", "n": "component_id", "r": false, "t": "`$INTEGER`", "key$": "component_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "event_based_billing_metric_id": { "a": true, "fo": "int32", "h": "Event Based Billing Metric Id", "n": "event_based_billing_metric_id", "r": false, "t": "`$INTEGER`", "key$": "event_based_billing_metric_id", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "price_point_id": { "a": true, "fo": "int32", "h": "Price Point Id", "n": "price_point_id", "r": false, "t": "`$INTEGER`", "key$": "price_point_id", "index$": 4 }, "prices": { "a": true, "h": "Prices", "n": "prices", "r": false, "t": "`$ARRAY`", "key$": "prices", "index$": 5 }, "pricing_scheme": { "a": true, "h": "Pricing Scheme", "n": "pricing_scheme", "r": false, "t": "`$ANY`", "key$": "pricing_scheme", "index$": 6 }, "segment_property_1_value": { "a": true, "h": "Segment Property 1 Value", "n": "segment_property_1_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_1_value", "index$": 7 }, "segment_property_2_value": { "a": true, "h": "Segment Property 2 Value", "n": "segment_property_2_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_2_value", "index$": 8 }, "segment_property_3_value": { "a": true, "h": "Segment Property 3 Value", "n": "segment_property_3_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_3_value", "index$": 9 }, "segment_property_4_value": { "a": true, "h": "Segment Property 4 Value", "n": "segment_property_4_value", "r": false, "t": "`$ANY`", "union": { "branches": 4, "count": 1, "depth": 0 }, "key$": "segment_property_4_value", "index$": 10 }, "segments": { "a": true, "h": "Segments", "n": "segments", "r": false, "t": "`$ARRAY`", "union": { "branches": 4, "count": 5, "depth": 6 }, "key$": "segments", "index$": 11 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "list_segment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /components/{component_id}/price_points/{price_point_id}/segments/bulk.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json", "q": { "exist": ["component_id", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "var": "price_point_id" }, { "lit": "segments" }, { "lit": "bulk.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /components/{component_id}/price_points/{price_point_id}/segments.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/components/{component_id}/price_points/{price_point_id}/segments.json", "q": { "exist": ["component_id", "filter", "page", "per_page", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "var": "price_point_id" }, { "lit": "segments.json" }], "t": { "req": "`reqdata`", "res": "`body.segments`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /components/{component_id}/price_points/{price_point_id}/segments/bulk.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json", "q": { "exist": ["component_id", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "var": "price_point_id" }, { "lit": "segments" }, { "lit": "bulk.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.component"]] }, "key$": "list_segment", "name__orig": "list_segment", "Name": "ListSegment", "name_": "list_segment", "name-": "list-segment", "NAME": "LIST_SEGMENT", "index$": 26 }, { "active": true, "entity": "list_segment", "key$": "BasicListSegmentFlow", "kind": "basic", "name": "BasicListSegmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "list_segment_ref01" }, "m": { "component_id": "component01", "price_point_id": "price_point01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "component_id": "component01", "price_point_id": "price_point01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_segment_ref01" } }], "index$": 1 }, { "a": true, "d": { "component_id": "component01" }, "i": { "ref": "list_segment_ref01", "srcdatavar": "list_segment_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-list_segment_ref01" } }], "v": [], "index$": 2 }] }, 'ListSegment', { "POST /components/{component_id}/price_points/{price_point_id}/segments/bulk.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "BulkCreateSegments", "type": "object", "properties": { "segments": { "maxItems": 2000, "type": "array", "items": { "title": "CreateSegment", "required": ["pricing_scheme"], "type": "object", "properties": { "segment_property_1_value": { "oneOf": [], "description": "A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric." }, "segment_property_2_value": { "oneOf": [], "description": "A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric." }, "segment_property_3_value": { "oneOf": [], "description": "A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric." }, "segment_property_4_value": { "oneOf": [], "description": "A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric." }, "pricing_scheme": { "allOf": [] }, "prices": { "type": "array", "items": {}, "description": "" } }, "x-ref": "#/components/schemas/CreateSegment" }, "description": "", "key$": "segments" } }, "x-ref": "#/components/schemas/BulkCreateSegments", "index$": 1 } } }, "required": false }, "parameters": [{ "name": "component_id", "in": "path", "description": "ID or Handle for the Component", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "ID or Handle for the Price Point belonging to the Component", "required": true, "schema": { "type": "string" }, "index$": 1 }] }, "GET /components/{component_id}/price_points/{price_point_id}/segments.json": { "protocol": "http", "parameters": [{ "name": "component_id", "in": "path", "description": "ID or Handle for the Component", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "ID or Handle for the Price Point belonging to the Component", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 2 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 30. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 30, "example": 50 }, "index$": 3 }, { "name": "filter", "in": "query", "description": "Filter to use for List Segments for a Price Point operation", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "ListSegmentsFilter", "type": "object", "properties": { "segment_property_1_value": { "type": "string", "description": "The value passed here would be used to filter segments. Pass a value related to `segment_property_1` on attached Metric. If empty string is passed, this filter would be rejected. Use in query `filter[segment_property_1_value]=EU`.", "example": "EU" }, "segment_property_2_value": { "type": "string", "description": "The value passed here would be used to filter segments. Pass a value related to `segment_property_2` on attached Metric. If empty string is passed, this filter would be rejected." }, "segment_property_3_value": { "type": "string", "description": "The value passed here would be used to filter segments. Pass a value related to `segment_property_3` on attached Metric. If empty string is passed, this filter would be rejected." }, "segment_property_4_value": { "type": "string", "description": "The value passed here would be used to filter segments. Pass a value related to `segment_property_4` on attached Metric. If empty string is passed, this filter would be rejected." } }, "x-ref": "#/components/schemas/ListSegmentsFilter" }, { "description": "Filter to use for List Segments for a Price Point operation" }] }, "index$": 4 }] }, "PUT /components/{component_id}/price_points/{price_point_id}/segments/bulk.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "BulkUpdateSegments", "type": "object", "properties": { "segments": { "maxItems": 1000, "type": "array", "items": { "title": "BulkUpdateSegmentsItem", "required": ["id", "pricing_scheme", "prices"], "type": "object", "properties": { "id": { "type": "integer", "description": "The ID of the segment you want to update.", "format": "int32" }, "pricing_scheme": { "allOf": [] }, "prices": { "type": "array", "items": {}, "description": "" } }, "x-ref": "#/components/schemas/BulkUpdateSegmentsItem" }, "description": "", "key$": "segments" } }, "x-ref": "#/components/schemas/BulkUpdateSegments", "index$": 1 } } }, "required": false }, "parameters": [{ "name": "component_id", "in": "path", "description": "ID or Handle for the Component", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "ID or Handle for the Price Point belonging to the Component", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const list_segment_ref01_ent = client.ListSegment();
        let list_segment_ref01_data = setup.data.new.list_segment['list_segment_ref01'];
        list_segment_ref01_data['component_id'] = setup.idmap['component01'];
        list_segment_ref01_data['price_point_id'] = setup.idmap['price_point01'];
        list_segment_ref01_data = (await list_segment_ref01_ent.create(list_segment_ref01_data)).data();
        (0, node_assert_1.default)(null != list_segment_ref01_data.id);
        // LIST
        const list_segment_ref01_match = {};
        list_segment_ref01_match['component_id'] = setup.idmap['component01'];
        list_segment_ref01_match['price_point_id'] = setup.idmap['price_point01'];
        const list_segment_ref01_list = (await list_segment_ref01_ent.list(list_segment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(list_segment_ref01_list, { id: list_segment_ref01_data.id })));
        // UPDATE
        const list_segment_ref01_data_up0 = {};
        list_segment_ref01_data_up0.id = list_segment_ref01_data.id;
        list_segment_ref01_data_up0['component_id'] = setup.idmap['component_id'];
        const list_segment_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-list_segment_ref01_' + setup.now };
        list_segment_ref01_data_up0[list_segment_ref01_markdef_up0.name] = list_segment_ref01_markdef_up0.value;
        const list_segment_ref01_resdata_up0 = (await list_segment_ref01_ent.update(list_segment_ref01_data_up0)).data();
        (0, node_assert_1.default)(list_segment_ref01_resdata_up0.id === list_segment_ref01_data_up0.id);
        (0, node_assert_1.default)(list_segment_ref01_resdata_up0[list_segment_ref01_markdef_up0.name] === list_segment_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_segment/ListSegmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_segment01', 'list_segment02', 'list_segment03', 'component01', 'component02', 'component03', 'price_point01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID'];
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
//# sourceMappingURL=ListSegmentEntity.test.js.map