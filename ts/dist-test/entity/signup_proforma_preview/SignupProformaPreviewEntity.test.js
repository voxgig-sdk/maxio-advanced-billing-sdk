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
(0, node_test_1.describe)('SignupProformaPreviewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.SignupProformaPreview();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'signup_proforma_preview.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "signup_proforma_preview", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /subscriptions/proforma_invoices/preview.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "include", "or": "include", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/subscriptions/proforma_invoices/preview.json", "q": { "exist": ["include"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "lit": "proforma_invoices" }, { "lit": "preview.json" }], "t": { "req": "`reqdata`", "res": "`body.proforma_invoice_preview`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "signup_proforma_preview", "name__orig": "signup_proforma_preview", "Name": "SignupProformaPreview", "name_": "signup_proforma_preview", "name-": "signup-proforma-preview", "NAME": "SIGNUP_PROFORMA_PREVIEW", "index$": 41 }, { "active": true, "entity": "signup_proforma_preview", "key$": "BasicSignupProformaPreviewFlow", "kind": "basic", "name": "BasicSignupProformaPreviewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "signup_proforma_preview_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'SignupProformaPreview', { "POST /subscriptions/proforma_invoices/preview.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateSubscriptionRequest", "required": ["subscription"], "type": "object", "properties": { "subscription": { "title": "CreateSubscription", "type": "object", "properties": { "product_handle": {}, "product_id": {}, "product_price_point_handle": {}, "product_price_point_id": {}, "custom_price": {}, "coupon_code": {}, "coupon_codes": {}, "payment_collection_method": {}, "receives_invoice_emails": {}, "net_terms": {}, "customer_id": {}, "branding_theme_id": {}, "next_billing_at": {}, "initial_billing_at": {}, "defer_signup": {}, "stored_credential_transaction_id": {}, "sales_rep_id": {}, "payment_profile_id": {}, "reference": {}, "customer_attributes": {}, "payment_profile_attributes": {}, "credit_card_attributes": {}, "bank_account_attributes": {}, "components": {}, "calendar_billing": {}, "metafields": {}, "customer_reference": {}, "group": {}, "ref": {}, "cancellation_message": {}, "cancellation_method": {}, "currency": {}, "expires_at": {}, "expiration_tracks_next_billing_change": {}, "agreement_terms": {}, "authorizer_first_name": {}, "authorizer_last_name": {}, "calendar_billing_first_charge": {}, "reason_code": {}, "product_change_delayed": {}, "offer_id": {}, "prepaid_configuration": {}, "previous_billing_at": {}, "import_mrr": {}, "canceled_at": {}, "activated_at": {}, "agreement_acceptance": {}, "ach_agreement": {}, "dunning_communication_delay_enabled": {}, "dunning_communication_delay_time_zone": {}, "skip_billing_manifest_taxes": {} }, "x-ref": "#/components/schemas/CreateSubscription" } }, "x-ref": "#/components/schemas/CreateSubscriptionRequest" }, { "example": { "subscription": { "product_handle": "gold-plan", "customer_attributes": { "first_name": "first", "last_name": "last", "email": "flast@example.com" } } } }], "index$": 1 }, "examples": { "Minimum example": { "value": { "subscription": { "product_handle": "gold-plan", "customer_attributes": { "first_name": "first", "last_name": "last", "email": "flast@example.com" } } } }, "Minimum example with existing customer": { "value": { "subscription": { "product_handle": "silver-plan", "customer_id": 1234 } } } } } }, "required": false }, "parameters": [{ "name": "include", "in": "query", "description": "Choose to include a proforma invoice preview for the first renewal. Use in query `include=next_proforma_invoice`.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "CreateSignupProformaPreviewInclude", "enum": ["next_proforma_invoice"], "type": "string", "example": "next_proforma_invoice", "x-ref": "#/components/schemas/CreateSignupProformaPreviewInclude" }, { "description": "Choose to include a proforma invoice preview for the first renewal. Use in query `include=next_proforma_invoice`.", "example": "next_proforma_invoice" }] }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const signup_proforma_preview_ref01_ent = client.SignupProformaPreview();
        let signup_proforma_preview_ref01_data = setup.data.new.signup_proforma_preview['signup_proforma_preview_ref01'];
        signup_proforma_preview_ref01_data = (await signup_proforma_preview_ref01_ent.create(signup_proforma_preview_ref01_data)).data();
        (0, node_assert_1.default)(null != signup_proforma_preview_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/signup_proforma_preview/SignupProformaPreviewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['signup_proforma_preview01', 'signup_proforma_preview02', 'signup_proforma_preview03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_SIGNUP_PROFORMA_PREVIEW_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_SIGNUP_PROFORMA_PREVIEW_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_SIGNUP_PROFORMA_PREVIEW_ENTID'];
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
//# sourceMappingURL=SignupProformaPreviewEntity.test.js.map