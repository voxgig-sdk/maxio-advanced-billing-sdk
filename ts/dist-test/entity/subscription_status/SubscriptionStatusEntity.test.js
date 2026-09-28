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
(0, node_test_1.describe)('SubscriptionStatusEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.SubscriptionStatus();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'subscription_status.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "renewal_preview": { "a": true, "h": "Renewal Preview", "n": "renewal_preview", "r": false, "t": "`$OBJECT`", "key$": "renewal_preview", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "subscription_status", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/resume.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "calendar_billing_'resumption_charge'", "or": "calendar_billing_'resumption_charge'", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/resume.json", "q": { "$action": "resume.json", "exist": ["calendar_billing_'resumption_charge'", "id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "resume.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/hold.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/hold.json", "q": { "$action": "hold.json", "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "hold.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /subscriptions/{subscription_id}/renewals/preview.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/{subscription_id}/renewals/preview.json", "q": { "exist": ["subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "renewals" }, { "lit": "preview.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /subscriptions/{subscription_id}.json", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "content_type", "or": "content_type", "r": true, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/subscriptions/{subscription_id}.json", "q": { "exist": ["content_type", "subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "lit": "{subscription_id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /subscriptions/{subscription_id}/delayed_cancel.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/subscriptions/{subscription_id}/delayed_cancel.json", "q": { "$action": "delayed_cancel.json", "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "delayed_cancel.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /subscriptions/{subscription_id}/hold.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/subscriptions/{subscription_id}/hold.json", "q": { "$action": "hold.json", "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "hold.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /subscriptions/{subscription_id}/reactivate.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/subscriptions/{subscription_id}/reactivate.json", "q": { "$action": "reactivate.json", "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "reactivate.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "PUT /subscriptions/{subscription_id}/retry.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/subscriptions/{subscription_id}/retry.json", "q": { "$action": "retry.json", "exist": ["id"] }, "r": { "param": { "subscription_id": "id" } }, "s": [{ "lit": "subscriptions" }, { "var": "id" }, { "lit": "retry.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.subscription"]] }, "key$": "subscription_status", "name__orig": "subscription_status", "Name": "SubscriptionStatus", "name_": "subscription_status", "name-": "subscription-status", "NAME": "SUBSCRIPTION_STATUS", "index$": 54 }, { "active": true, "entity": "subscription_status", "key$": "BasicSubscriptionStatusFlow", "kind": "basic", "name": "BasicSubscriptionStatusFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "subscription_status_ref01" }, "m": { "subscription_id": "subscription01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "subscription_status_ref01", "srcdatavar": "subscription_status_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-subscription_status_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "subscription_status_ref01", "suffix": "_rm0" }, "m": { "id": "subscription_status01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'SubscriptionStatus', { "POST /subscriptions/{subscription_id}/resume.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "calendar_billing['resumption_charge']", "in": "query", "description": "(For calendar billing subscriptions only) The way that the resumed subscription's charge should be handled.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "ResumptionCharge", "enum": ["prorated", "immediate", "delayed"], "type": "string", "description": "(For calendar billing subscriptions only) The way that the resumed subscription's charge should be handled", "x-ref": "#/components/schemas/ResumptionCharge" }, { "description": "(For calendar billing subscriptions only) The way that the resumed subscription's charge should be handled." }] }, "index$": 1 }] }, "POST /subscriptions/{subscription_id}/hold.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "PauseRequest", "type": "object", "properties": { "hold": { "title": "AutoResume", "type": "object", "properties": { "automatically_resume_at": {} }, "x-ref": "#/components/schemas/AutoResume" } }, "description": "Allows you to pause a Subscription.", "x-ref": "#/components/schemas/PauseRequest" }, { "example": { "hold": { "automatically_resume_at": "2017-05-25T11:25:00Z" } } }] }, "examples": { "Example": { "value": { "hold": { "automatically_resume_at": "2017-05-25T11:25:00Z" } } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "POST /subscriptions/{subscription_id}/renewals/preview.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "RenewalPreviewRequest", "type": "object", "properties": { "components": { "type": "array", "items": { "title": "RenewalPreviewComponent", "type": "object", "properties": {}, "x-ref": "#/components/schemas/RenewalPreviewComponent" }, "description": "(Optional) Array of component definitions to preview. Providing any component definitions here will override the actual components on the subscription (and their quantities), and the billing preview will contain only these components (in addition to any product base fees)." } }, "x-ref": "#/components/schemas/RenewalPreviewRequest" }, { "example": { "components": [{ "component_id": 10708, "quantity": 10000 }, { "component_id": "handle:small-instance-hours", "quantity": 10000, "price_point_id": 8712 }, { "component_id": "handle:large-instance-hours", "quantity": 100, "price_point_id": "handle:startup-pricing" }] } }], "index$": 1 }, "examples": { "Example": { "value": { "components": [{ "component_id": 10708, "quantity": 10000 }, { "component_id": "handle:small-instance-hours", "quantity": 10000, "price_point_id": 8712 }, { "component_id": "handle:large-instance-hours", "quantity": 100, "price_point_id": "handle:startup-pricing" }] } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "DELETE /subscriptions/{subscription_id}.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "Content-Type", "in": "header", "description": "", "required": true, "schema": { "enum": ["application/json"], "type": "string" }, "index$": 1 }] }, "DELETE /subscriptions/{subscription_id}/delayed_cancel.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "PUT /subscriptions/{subscription_id}/hold.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "PauseRequest", "type": "object", "properties": { "hold": { "title": "AutoResume", "type": "object", "properties": { "automatically_resume_at": {} }, "x-ref": "#/components/schemas/AutoResume" } }, "description": "Allows you to pause a Subscription.", "x-ref": "#/components/schemas/PauseRequest" }, { "example": { "hold": { "automatically_resume_at": "2019-01-20T00:00:00" } } }] }, "examples": { "Example": { "value": { "hold": { "automatically_resume_at": "2019-01-20T00:00:00" } } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "PUT /subscriptions/{subscription_id}/reactivate.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "ReactivateSubscriptionRequest", "type": "object", "properties": { "calendar_billing": { "allOf": [{}, {}] }, "include_trial": { "type": "boolean", "description": "If `true` is sent, the reactivated Subscription will include a trial if one is available. If `false` is sent, the trial period will be ignored." }, "preserve_balance": { "type": "boolean", "description": "If `true` is passed, the existing subscription balance will NOT be cleared/reset before adding the additional reactivation charges." }, "coupon_code": { "type": "string", "description": "The coupon code to be applied during reactivation." }, "use_credits_and_prepayments": { "type": "boolean", "description": "If true is sent, Advanced Billing will use service credits and prepayments upon reactivation. If false is sent, the service credits and prepayments will be ignored." }, "resume": { "oneOf": [{}, {}], "description": "If `true`, Advanced Billing will attempt to resume the subscription's billing period. If not resumable, the subscription will be reactivated with a new billing period. If `false` or omitted, Advanced Billing will only attempt to reactivate the subscription with a new billing period, regardless of whether or not the subscription is resumable." } }, "x-ref": "#/components/schemas/ReactivateSubscriptionRequest" }, { "example": { "calendar_billing": { "reactivation_charge": "prorated" }, "include_trial": true, "preserve_balance": true, "coupon_code": "10OFF", "use_credits_and_prepayments": true, "resume": true } }] }, "examples": { "Example": { "value": { "calendar_billing": { "reactivation_charge": "prorated" }, "include_trial": true, "preserve_balance": true, "coupon_code": "10OFF", "use_credits_and_prepayments": true, "resume": true } } } } }, "required": false }, "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "PUT /subscriptions/{subscription_id}/retry.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const subscription_status_ref01_ent = client.SubscriptionStatus();
        let subscription_status_ref01_data = setup.data.new.subscription_status['subscription_status_ref01'];
        subscription_status_ref01_data['subscription_id'] = setup.idmap['subscription01'];
        subscription_status_ref01_data = (await subscription_status_ref01_ent.create(subscription_status_ref01_data)).data();
        (0, node_assert_1.default)(null != subscription_status_ref01_data.id);
        // UPDATE
        const subscription_status_ref01_data_up0 = {};
        subscription_status_ref01_data_up0.id = subscription_status_ref01_data.id;
        const subscription_status_ref01_resdata_up0 = (await subscription_status_ref01_ent.update(subscription_status_ref01_data_up0)).data();
        (0, node_assert_1.default)(subscription_status_ref01_resdata_up0.id === subscription_status_ref01_data_up0.id);
        // REMOVE
        const subscription_status_ref01_match_rm0 = { id: subscription_status_ref01_data.id };
        await subscription_status_ref01_ent.remove(subscription_status_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/subscription_status/SubscriptionStatusTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['subscription_status01', 'subscription_status02', 'subscription_status03', 'subscription01', 'subscription02', 'subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_STATUS_ENTID'];
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
//# sourceMappingURL=SubscriptionStatusEntity.test.js.map