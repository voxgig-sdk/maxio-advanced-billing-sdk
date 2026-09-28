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
(0, node_test_1.describe)('CouponUsageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.CouponUsage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'coupon_usage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "sh": "The Chargify id of the product", "t": "`$INTEGER`", "key$": "id", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the product", "t": "`$STRING`", "key$": "name", "index$": 1 }, "revenue": { "a": true, "fo": "int32", "h": "Revenue", "n": "revenue", "r": false, "sh": "Total revenue of all subscriptions that have received a discount from this coupon.", "t": "`$INTEGER`", "key$": "revenue", "index$": 2 }, "revenue_in_cents": { "a": true, "fo": "int64", "h": "Revenue In Cents", "n": "revenue_in_cents", "r": false, "sh": "Total revenue of all subscriptions that have received a discount from this coupon.", "t": "`$INTEGER`", "key$": "revenue_in_cents", "index$": 3 }, "savings": { "a": true, "fo": "int32", "h": "Savings", "n": "savings", "r": false, "sh": "Dollar amount of customer savings as a result of the coupon.", "t": "`$INTEGER`", "key$": "savings", "index$": 4 }, "savings_in_cents": { "a": true, "fo": "int64", "h": "Savings In Cents", "n": "savings_in_cents", "r": false, "sh": "Dollar amount of customer savings as a result of the coupon.", "t": "`$INTEGER`", "key$": "savings_in_cents", "index$": 5 }, "signups": { "a": true, "fo": "int32", "h": "Signups", "n": "signups", "r": false, "sh": "Number of times the coupon has been applied", "t": "`$INTEGER`", "key$": "signups", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "coupon_usage", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /product_families/{product_family_id}/coupons/{coupon_id}/usage.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "coupon_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "product_family_id", "or": "product_family_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/product_families/{product_family_id}/coupons/{coupon_id}/usage.json", "q": { "exist": ["id", "product_family_id"] }, "r": { "param": { "coupon_id": "id" } }, "s": [{ "lit": "product_families" }, { "var": "product_family_id" }, { "lit": "coupons" }, { "var": "id" }, { "lit": "usage.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.product_family"]] }, "key$": "coupon_usage", "name__orig": "coupon_usage", "Name": "CouponUsage", "name_": "coupon_usage", "name-": "coupon-usage", "NAME": "COUPON_USAGE", "index$": 11 }, { "active": true, "entity": "coupon_usage", "key$": "BasicCouponUsageFlow", "kind": "basic", "name": "BasicCouponUsageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "coupon_id": "coupon01", "product_family_id": "product_family01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "coupon_usage_ref01" } }], "index$": 0 }] }, 'CouponUsage', { "GET /product_families/{product_family_id}/coupons/{coupon_id}/usage.json": { "protocol": "http", "parameters": [{ "name": "product_family_id", "in": "path", "description": "The Advanced Billing id of the product family to which the coupon belongs.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "coupon_id", "in": "path", "description": "The Advanced Billing id of the coupon.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let coupon_usage_ref01_data = Object.values(setup.data.existing.coupon_usage)[0];
        // LIST
        const coupon_usage_ref01_ent = client.CouponUsage();
        const coupon_usage_ref01_match = {};
        coupon_usage_ref01_match['coupon_id'] = setup.idmap['coupon01'];
        coupon_usage_ref01_match['product_family_id'] = setup.idmap['product_family01'];
        const coupon_usage_ref01_list = (await coupon_usage_ref01_ent.list(coupon_usage_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/coupon_usage/CouponUsageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['coupon_usage01', 'coupon_usage02', 'coupon_usage03', 'product_family01', 'product_family02', 'product_family03', 'coupon01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_COUPON_USAGE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_COUPON_USAGE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_COUPON_USAGE_ENTID'];
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
//# sourceMappingURL=CouponUsageEntity.test.js.map