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
(0, node_test_1.describe)('DelayedCancelEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.DelayedCancel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'delayed_cancel.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 0 }, "subscription": { "a": true, "h": "Subscription", "n": "subscription", "r": true, "t": "`$OBJECT`", "key$": "subscription", "index$": 1 } }, "name": "delayed_cancel", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/delayed_cancel.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/delayed_cancel.json", "q": { "exist": ["subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "delayed_cancel.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.subscription"]] }, "key$": "delayed_cancel", "name__orig": "delayed_cancel", "Name": "DelayedCancel", "name_": "delayed_cancel", "name-": "delayed-cancel", "NAME": "DELAYED_CANCEL", "index$": 14 }, { "active": true, "entity": "delayed_cancel", "key$": "BasicDelayedCancelFlow", "kind": "basic", "name": "BasicDelayedCancelFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "delayed_cancel_ref01" }, "m": { "subscription_id": "subscription01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'DelayedCancel', { "POST /subscriptions/{subscription_id}/delayed_cancel.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "title": "CancellationRequest", "required": ["subscription"], "type": "object", "properties": { "subscription": { "title": "CancellationOptions", "type": "object", "properties": { "cancellation_message": { "type": "string", "description": "An indication as to why the subscription is being canceled. For your internal use." }, "reason_code": { "type": "string", "description": "The reason code associated with the cancellation. Use the [List Reason Codes]($e/Reason%20Codes/listReasonCodes) endpoint to retrieve the reason codes associated with your site." }, "cancel_at_end_of_period": { "type": "boolean", "description": "When true, the subscription is cancelled at the current period end instead of immediately. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site." }, "scheduled_cancellation_at": { "type": "string", "description": "Schedules the cancellation on the provided date. This option is not applicable for prepaid subscriptions. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site.", "format": "date-time", "nullable": true }, "refund_prepayment_account_balance": { "type": "boolean", "description": "Applies to prepaid subscriptions. When true, which is the default, the remaining prepaid balance is refunded as part of cancellation processing. When false, prepaid balance is not refunded as part of cancellation processing. To use this option, the Schedule Subscription Cancellation feature must be enabled on your site." } }, "x-ref": "#/components/schemas/CancellationOptions", "key$": "subscription" } }, "x-ref": "#/components/schemas/CancellationRequest", "index$": 1 } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const delayed_cancel_ref01_ent = client.DelayedCancel();
        let delayed_cancel_ref01_data = setup.data.new.delayed_cancel['delayed_cancel_ref01'];
        delayed_cancel_ref01_data['subscription_id'] = setup.idmap['subscription01'];
        delayed_cancel_ref01_data = (await delayed_cancel_ref01_ent.create(delayed_cancel_ref01_data)).data();
        (0, node_assert_1.default)(null != delayed_cancel_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/delayed_cancel/DelayedCancelTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['delayed_cancel01', 'delayed_cancel02', 'delayed_cancel03', 'subscription01', 'subscription02', 'subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_DELAYED_CANCEL_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_DELAYED_CANCEL_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_DELAYED_CANCEL_ENTID'];
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
//# sourceMappingURL=DelayedCancelEntity.test.js.map