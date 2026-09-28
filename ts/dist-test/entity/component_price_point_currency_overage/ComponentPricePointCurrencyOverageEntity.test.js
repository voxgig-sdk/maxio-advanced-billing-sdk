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
(0, node_test_1.describe)('ComponentPricePointCurrencyOverageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.ComponentPricePointCurrencyOverage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'component_price_point_currency_overage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "archived_at": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archived_at", "r": false, "t": "`$STRING`", "key$": "archived_at", "index$": 0 }, "component_id": { "a": true, "fo": "int32", "h": "Component Id", "n": "component_id", "r": false, "t": "`$INTEGER`", "key$": "component_id", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "currency_overage_prices": { "a": true, "h": "Currency Overage Prices", "n": "currency_overage_prices", "r": false, "sh": "Applicable only to prepaid usage components.", "t": "`$ARRAY`", "key$": "currency_overage_prices", "index$": 3 }, "currency_prices": { "a": true, "h": "Currency Prices", "n": "currency_prices", "r": false, "sh": "An array of currency pricing data is available when multiple currencies are defined for the site.", "t": "`$ARRAY`", "key$": "currency_prices", "index$": 4 }, "default": { "a": true, "de": true, "h": "Default", "n": "default", "r": false, "sh": "Note: Refer to type attribute instead.", "t": "`$BOOLEAN`", "key$": "default", "index$": 5 }, "expiration_interval": { "a": true, "fo": "int32", "h": "Expiration Interval", "n": "expiration_interval", "r": false, "sh": "Applicable only to prepaid usage components where rollover_prepaid_remainder is true.", "t": "`$INTEGER`", "key$": "expiration_interval", "index$": 6 }, "expiration_interval_unit": { "a": true, "h": "Expiration Interval Unit", "n": "expiration_interval_unit", "r": false, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "expiration_interval_unit", "index$": 7 }, "handle": { "a": true, "h": "Handle", "n": "handle", "r": false, "t": "`$STRING`", "key$": "handle", "index$": 8 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 9 }, "interval": { "a": true, "fo": "int32", "h": "Interval", "n": "interval", "r": false, "sh": "The numerical interval.", "t": "`$INTEGER`", "key$": "interval", "index$": 10 }, "interval_unit": { "a": true, "h": "Interval Unit", "n": "interval_unit", "r": false, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "interval_unit", "index$": 11 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 12 }, "overage_prices": { "a": true, "h": "Overage Prices", "n": "overage_prices", "r": false, "sh": "Applicable only to prepaid usage components.", "t": "`$ARRAY`", "key$": "overage_prices", "index$": 13 }, "overage_pricing_scheme": { "a": true, "h": "Overage Pricing Scheme", "n": "overage_pricing_scheme", "r": false, "t": "`$ANY`", "key$": "overage_pricing_scheme", "index$": 14 }, "prices": { "a": true, "h": "Prices", "n": "prices", "r": false, "t": "`$ARRAY`", "key$": "prices", "index$": 15 }, "pricing_scheme": { "a": true, "h": "Pricing Scheme", "n": "pricing_scheme", "r": false, "t": "`$ANY`", "key$": "pricing_scheme", "index$": 16 }, "renew_prepaid_allocation": { "a": true, "h": "Renew Prepaid Allocation", "n": "renew_prepaid_allocation", "r": false, "sh": "Applicable only to prepaid usage components.", "t": "`$BOOLEAN`", "key$": "renew_prepaid_allocation", "index$": 17 }, "rollover_prepaid_remainder": { "a": true, "h": "Rollover Prepaid Remainder", "n": "rollover_prepaid_remainder", "r": false, "sh": "Applicable only to prepaid usage components.", "t": "`$BOOLEAN`", "key$": "rollover_prepaid_remainder", "index$": 18 }, "subscription_id": { "a": true, "fo": "int32", "h": "Subscription Id", "n": "subscription_id", "r": false, "sh": "(only used for Custom Pricing - ie.", "t": "`$INTEGER`", "key$": "subscription_id", "index$": 19 }, "tax_included": { "a": true, "h": "Tax Included", "n": "tax_included", "r": false, "t": "`$BOOLEAN`", "key$": "tax_included", "index$": 20 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "t": "`$ANY`", "key$": "type", "index$": 21 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 22 }, "use_site_exchange_rate": { "a": true, "h": "Use Site Exchange Rate", "n": "use_site_exchange_rate", "r": false, "sh": "Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.", "t": "`$BOOLEAN`", "key$": "use_site_exchange_rate", "index$": 23 } }, "id": { "field": "id", "name": "id" }, "name": "component_price_point_currency_overage", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /components/{component_id}/price_points/{price_point_id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "component_id", "or": "component_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "price_point_id", "or": "price_point_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "currency_price", "or": "currency_price", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/components/{component_id}/price_points/{price_point_id}.json", "q": { "exist": ["component_id", "currency_price", "price_point_id"] }, "r": {}, "s": [{ "lit": "components" }, { "var": "component_id" }, { "lit": "price_points" }, { "lit": "{price_point_id}.json" }], "t": { "req": "`reqdata`", "res": "`body.price_point`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.component"]] }, "key$": "component_price_point_currency_overage", "name__orig": "component_price_point_currency_overage", "Name": "ComponentPricePointCurrencyOverage", "name_": "component_price_point_currency_overage", "name-": "component-price-point-currency-overage", "NAME": "COMPONENT_PRICE_POINT_CURRENCY_OVERAGE", "index$": 7 }, { "active": true, "entity": "component_price_point_currency_overage", "key$": "BasicComponentPricePointCurrencyOverageFlow", "kind": "basic", "name": "BasicComponentPricePointCurrencyOverageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "component_price_point_currency_overage_ref01", "srcdatavar": "component_price_point_currency_overage_ref01_data", "suffix": "_dt0" }, "m": { "id": "component_price_point_currency_overage01", "price_point_id": "price_point01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-component_price_point_currency_overage_ref01" } }], "index$": 0 }] }, 'ComponentPricePointCurrencyOverage', { "GET /components/{component_id}/price_points/{price_point_id}.json": { "protocol": "http", "parameters": [{ "name": "component_id", "in": "path", "description": "The id or handle of the component. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-product-handle` for a string handle.", "required": true, "schema": { "oneOf": [{ "type": "integer", "format": "int32" }, { "type": "string" }] }, "index$": 0 }, { "name": "price_point_id", "in": "path", "description": "The id or handle of the price point. When using the handle, it must be prefixed with `handle:`. Example: `123` for an integer ID, or `handle:example-price_point-handle` for a string handle.", "required": true, "schema": { "oneOf": [{ "type": "integer", "format": "int32" }, { "type": "string" }] }, "index$": 1 }, { "name": "currency_prices", "in": "query", "description": "Include an array of currency price data.", "style": "form", "explode": true, "schema": { "type": "boolean" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let component_price_point_currency_overage_ref01_data = Object.values(setup.data.existing.component_price_point_currency_overage)[0];
        // LOAD
        const component_price_point_currency_overage_ref01_ent = client.ComponentPricePointCurrencyOverage();
        const component_price_point_currency_overage_ref01_match_dt0 = {};
        component_price_point_currency_overage_ref01_match_dt0.id = component_price_point_currency_overage_ref01_data.id;
        const component_price_point_currency_overage_ref01_data_dt0 = (await component_price_point_currency_overage_ref01_ent.load(component_price_point_currency_overage_ref01_match_dt0)).data();
        (0, node_assert_1.default)(component_price_point_currency_overage_ref01_data_dt0.id === component_price_point_currency_overage_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/component_price_point_currency_overage/ComponentPricePointCurrencyOverageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['component_price_point_currency_overage01', 'component_price_point_currency_overage02', 'component_price_point_currency_overage03', 'component01', 'component02', 'component03', 'price_point01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_CURRENCY_OVERAGE_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_CURRENCY_OVERAGE_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_CURRENCY_OVERAGE_ENTID'];
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
//# sourceMappingURL=ComponentPricePointCurrencyOverageEntity.test.js.map