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
(0, node_test_1.describe)('BatchJobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.BatchJob();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'batch_job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed": { "a": true, "h": "Completed", "n": "completed", "r": false, "t": "`$STRING`", "key$": "completed", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "finished_at": { "a": true, "fo": "date-time", "h": "Finished At", "n": "finished_at", "r": false, "t": "`$STRING`", "key$": "finished_at", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "row_count": { "a": true, "fo": "int32", "h": "Row Count", "n": "row_count", "r": false, "t": "`$INTEGER`", "key$": "row_count", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "batch_job", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api_exports/invoices.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api_exports/invoices.json", "q": {}, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "invoices.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api_exports/proforma_invoices.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api_exports/proforma_invoices.json", "q": {}, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "proforma_invoices.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api_exports/subscriptions.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api_exports/subscriptions.json", "q": {}, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "subscriptions.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api_exports/invoices/{batch_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "batch_id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api_exports/invoices/{batch_id}.json", "q": { "exist": ["batch_id"] }, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "invoices" }, { "lit": "{batch_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api_exports/proforma_invoices/{batch_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "batch_id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api_exports/proforma_invoices/{batch_id}.json", "q": { "exist": ["batch_id"] }, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "proforma_invoices" }, { "lit": "{batch_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api_exports/subscriptions/{batch_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "batch_id", "or": "batch_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api_exports/subscriptions/{batch_id}.json", "q": { "exist": ["batch_id"] }, "r": {}, "s": [{ "lit": "api_exports" }, { "lit": "subscriptions" }, { "lit": "{batch_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.batchjob`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "batch_job", "name__orig": "batch_job", "Name": "BatchJob", "name_": "batch_job", "name-": "batch-job", "NAME": "BATCH_JOB", "index$": 2 }, { "active": true, "entity": "batch_job", "key$": "BasicBatchJobFlow", "kind": "basic", "name": "BasicBatchJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "batch_job_ref01" }, "m": { "batch_id": "batch01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "batch_job_ref01", "srcdatavar": "batch_job_ref01_data", "suffix": "_dt0" }, "m": { "batch_id": "batch01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-batch_job_ref01" } }], "index$": 1 }] }, 'BatchJob', { "POST /api_exports/invoices.json": { "protocol": "http", "parameters": [] }, "POST /api_exports/proforma_invoices.json": { "protocol": "http", "parameters": [] }, "POST /api_exports/subscriptions.json": { "protocol": "http", "parameters": [] }, "GET /api_exports/invoices/{batch_id}.json": { "protocol": "http", "parameters": [{ "name": "batch_id", "in": "path", "description": "Id of a Batch Job.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /api_exports/proforma_invoices/{batch_id}.json": { "protocol": "http", "parameters": [{ "name": "batch_id", "in": "path", "description": "Id of a Batch Job.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /api_exports/subscriptions/{batch_id}.json": { "protocol": "http", "parameters": [{ "name": "batch_id", "in": "path", "description": "Id of a Batch Job.", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const batch_job_ref01_ent = client.BatchJob();
        let batch_job_ref01_data = setup.data.new.batch_job['batch_job_ref01'];
        batch_job_ref01_data['batch_id'] = setup.idmap['batch01'];
        batch_job_ref01_data = (await batch_job_ref01_ent.create(batch_job_ref01_data)).data();
        (0, node_assert_1.default)(null != batch_job_ref01_data.id);
        // LOAD
        const batch_job_ref01_match_dt0 = {};
        batch_job_ref01_match_dt0.id = batch_job_ref01_data.id;
        const batch_job_ref01_data_dt0 = (await batch_job_ref01_ent.load(batch_job_ref01_match_dt0)).data();
        (0, node_assert_1.default)(batch_job_ref01_data_dt0.id === batch_job_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/batch_job/BatchJobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['batch_job01', 'batch_job02', 'batch_job03', 'batch01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID'];
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
//# sourceMappingURL=BatchJobEntity.test.js.map