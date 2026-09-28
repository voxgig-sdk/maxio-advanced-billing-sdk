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
(0, node_test_1.describe)('FeatureTemplateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.FeatureTemplate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'feature_template.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived_at": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archived_at", "r": false, "sh": "The date and time the feature template was archived, or `null` if it is active.", "t": "`$STRING`", "key$": "archived_at", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "default_periodicity_interval": { "a": true, "fo": "int32", "h": "Default Periodicity Interval", "n": "default_periodicity_interval", "r": false, "sh": "For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items.", "t": "`$INTEGER`", "key$": "default_periodicity_interval", "index$": 2 }, "default_periodicity_unit": { "a": true, "h": "Default Periodicity Unit", "n": "default_periodicity_unit", "r": false, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "default_periodicity_unit", "index$": 3 }, "default_value": { "a": true, "h": "Default Value", "n": "default_value", "r": false, "sh": "A default value used to pre-populate new feature catalog items created from this template.", "t": "`$STRING`", "key$": "default_value", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 5 }, "feature": { "a": true, "h": "Feature", "n": "feature", "r": true, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 6 }, "key$": "feature", "index$": 6 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "sh": "The Advanced Billing id of the feature template.", "t": "`$INTEGER`", "key$": "id", "index$": 7 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "sh": "A unique, lowercase, underscore-separated identifier for the feature.", "t": "`$STRING`", "key$": "key", "index$": 8 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": false, "t": "`$ANY`", "key$": "kind", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The display name of the feature.", "t": "`$STRING`", "key$": "name", "index$": 10 }, "plans_count": { "a": true, "fo": "int32", "h": "Plans Count", "n": "plans_count", "r": false, "sh": "The number of **products** this feature template is currently attached to via an active feature catalog item.", "t": "`$INTEGER`", "key$": "plans_count", "index$": 11 }, "products_count": { "a": true, "fo": "int32", "h": "Products Count", "n": "products_count", "r": false, "sh": "The number of **components** this feature template is currently attached to via an active feature catalog item.", "t": "`$INTEGER`", "key$": "products_count", "index$": 12 }, "unit": { "a": true, "h": "Unit", "n": "unit", "r": false, "sh": "The unit the feature is measured in (for example, `requests` or `GB`).", "t": "`$STRING`", "key$": "unit", "index$": 13 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 14 }, "value_type": { "a": true, "h": "Value Type", "n": "value_type", "r": false, "t": "`$ANY`", "key$": "value_type", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "feature_template", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /features/{id}/restore.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/features/{id}/restore.json", "q": { "$action": "restore.json", "exist": ["id"] }, "r": {}, "s": [{ "lit": "features" }, { "var": "id" }, { "lit": "restore.json" }], "t": { "req": "`reqdata`", "res": "`body.feature`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /features/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/features/{id}.json", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "features" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body.feature`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /features/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "ex": false, "k": "query", "n": "remove_from_catalog", "or": "remove_from_catalog", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/features/{id}.json", "q": { "exist": ["id", "remove_from_catalog"] }, "r": {}, "s": [{ "lit": "features" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /features/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/features/{id}.json", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "features" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body.feature`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "feature_template", "name__orig": "feature_template", "Name": "FeatureTemplate", "name_": "feature_template", "name-": "feature-template", "NAME": "FEATURE_TEMPLATE", "index$": 21 }, { "active": true, "entity": "feature_template", "key$": "BasicFeatureTemplateFlow", "kind": "basic", "name": "BasicFeatureTemplateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "feature_template_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "feature_template_ref01", "srcdatavar": "feature_template_ref01_data", "suffix": "_up0", "textfield": "archived_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-feature_template_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "feature_template_ref01", "srcdatavar": "feature_template_ref01_data", "suffix": "_dt0" }, "m": { "id": "feature_template01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-feature_template_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "feature_template_ref01", "suffix": "_rm0" }, "m": { "id": "feature_template01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'FeatureTemplate', { "POST /features/{id}/restore.json": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the feature template.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "GET /features/{id}.json": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the feature template.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "DELETE /features/{id}.json": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the feature template.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "remove_from_catalog", "in": "query", "description": "When `true`, also destroys every feature catalog item created from this template and cascades to their entitlements, revoking subscriber access immediately. When `false` (default), the feature template and its feature catalog items are archived, and existing entitlements are preserved.", "style": "form", "explode": true, "schema": { "type": "boolean", "default": false }, "index$": 1 }] }, "PUT /features/{id}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "UpdateFeatureTemplateRequest", "required": ["feature"], "type": "object", "properties": { "feature": { "allOf": [{ "title": "Feature1", "type": "object", "properties": { "name": {}, "description": {}, "unit": {}, "value_type": {}, "default_value": {}, "default_periodicity_interval": {}, "default_periodicity_unit": {} }, "description": "`key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template.", "x-ref": "#/components/schemas/Feature1" }, { "description": "`key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template." }], "key$": "feature" } }, "x-ref": "#/components/schemas/UpdateFeatureTemplateRequest", "index$": 1 } } }, "required": false }, "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the feature template.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const feature_template_ref01_ent = client.FeatureTemplate();
        let feature_template_ref01_data = setup.data.new.feature_template['feature_template_ref01'];
        feature_template_ref01_data = (await feature_template_ref01_ent.create(feature_template_ref01_data)).data();
        (0, node_assert_1.default)(null != feature_template_ref01_data.id);
        // UPDATE
        const feature_template_ref01_data_up0 = {};
        feature_template_ref01_data_up0.id = feature_template_ref01_data.id;
        const feature_template_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-feature_template_ref01_' + setup.now };
        feature_template_ref01_data_up0[feature_template_ref01_markdef_up0.name] = feature_template_ref01_markdef_up0.value;
        const feature_template_ref01_resdata_up0 = (await feature_template_ref01_ent.update(feature_template_ref01_data_up0)).data();
        (0, node_assert_1.default)(feature_template_ref01_resdata_up0.id === feature_template_ref01_data_up0.id);
        (0, node_assert_1.default)(feature_template_ref01_resdata_up0[feature_template_ref01_markdef_up0.name] === feature_template_ref01_markdef_up0.value);
        // LOAD
        const feature_template_ref01_match_dt0 = {};
        feature_template_ref01_match_dt0.id = feature_template_ref01_data.id;
        const feature_template_ref01_data_dt0 = (await feature_template_ref01_ent.load(feature_template_ref01_match_dt0)).data();
        (0, node_assert_1.default)(feature_template_ref01_data_dt0.id === feature_template_ref01_data.id);
        // REMOVE
        const feature_template_ref01_match_rm0 = { id: feature_template_ref01_data.id };
        await feature_template_ref01_ent.remove(feature_template_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/feature_template/FeatureTemplateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['feature_template01', 'feature_template02', 'feature_template03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID'];
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
//# sourceMappingURL=FeatureTemplateEntity.test.js.map