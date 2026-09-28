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
(0, node_test_1.describe)('EventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.Event();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "event": { "a": true, "h": "Event", "n": "event", "r": true, "t": "`$OBJECT`", "union": { "branches": 21, "count": 29, "depth": 23 }, "key$": "event", "index$": 0 } }, "name": "event", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /events.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "date_field", "or": "date_field", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "end_datetime", "or": "end_datetime", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": ["custom_field_value_change", "payment_success"], "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$ARRAY`", "index$": 4 }, { "a": true, "k": "query", "n": "max_id", "or": "max_id", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "since_id", "or": "since_id", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "start_datetime", "or": "start_datetime", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/events.json", "q": { "exist": ["date_field", "direction", "end_date", "end_datetime", "filter", "max_id", "page", "per_page", "since_id", "start_date", "start_datetime"] }, "r": {}, "s": [{ "lit": "events.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /subscriptions/{subscription_id}/events.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "subscription_id", "or": "subscription_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": ["custom_field_value_change", "payment_success"], "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "max_id", "or": "max_id", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "since_id", "or": "since_id", "r": false, "t": "`$INTEGER`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/subscriptions/{subscription_id}/events.json", "q": { "exist": ["direction", "filter", "max_id", "page", "per_page", "since_id", "subscription_id"] }, "r": {}, "s": [{ "lit": "subscriptions" }, { "var": "subscription_id" }, { "lit": "events.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /events/count.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": ["custom_field_value_change", "payment_success"], "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "k": "query", "n": "max_id", "or": "max_id", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 50, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "since_id", "or": "since_id", "r": false, "t": "`$INTEGER`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/events/count.json", "q": { "$action": "count", "exist": ["direction", "filter", "max_id", "page", "per_page", "since_id"] }, "r": {}, "s": [{ "lit": "events" }, { "lit": "count.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.subscription"]] }, "key$": "event", "name__orig": "event", "Name": "Event", "name_": "event", "name-": "event", "NAME": "EVENT", "index$": 17 }, { "active": true, "entity": "event", "key$": "BasicEventFlow", "kind": "basic", "name": "BasicEventFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "subscription_id": "subscription01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "event_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "event_ref01", "srcdatavar": "event_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-event_ref01" } }], "index$": 1 }] }, 'Event', { "GET /events.json": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 0 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 1 }, { "name": "since_id", "in": "query", "description": "Returns events with an id greater than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }, { "name": "max_id", "in": "query", "description": "Returns events with an id less than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 3 }, { "name": "direction", "in": "query", "description": "The sort direction of the returned events.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "direction", "enum": ["asc", "desc"], "type": "string", "x-ref": "#/components/schemas/direction" }, { "description": "The sort direction of the returned events." }] }, "index$": 4 }, { "name": "filter", "in": "query", "description": "You can pass multiple event keys after comma.\nUse in query `filter=signup_success,payment_success`.", "style": "form", "explode": true, "schema": { "type": "array", "items": { "title": "EventKey", "enum": ["payment_success", "payment_failure", "signup_success", "signup_failure", "delayed_signup_creation_success", "delayed_signup_creation_failure", "billing_date_change", "expiration_date_change", "renewal_success", "renewal_failure", "subscription_state_change", "subscription_product_change", "subscription_product_change_scheduled", "pending_cancellation_change", "expiring_card", "customer_update", "customer_create", "customer_delete", "component_allocation_change", "metered_usage", "prepaid_usage", "upgrade_downgrade_success", "upgrade_downgrade_failure", "statement_closed", "statement_settled", "subscription_card_update", "subscription_group_card_update", "subscription_bank_account_update", "refund_success", "refund_failure", "upcoming_renewal_notice", "trial_end_notice", "dunning_step_reached", "invoice_issued", "invoice_pending", "prepaid_subscription_balance_changed", "subscription_group_signup_success", "subscription_group_signup_failure", "direct_debit_payment_paid_out", "direct_debit_payment_rejected", "direct_debit_payment_pending", "pending_payment_created", "pending_payment_failed", "pending_payment_completed", "proforma_invoice_issued", "subscription_prepayment_account_balance_changed", "subscription_service_credit_account_balance_changed", "custom_field_value_change", "item_price_point_changed", "renewal_success_recreated", "renewal_failure_recreated", "payment_success_recreated", "payment_failure_recreated", "subscription_deletion", "subscription_group_bank_account_update", "subscription_paypal_account_update", "subscription_group_paypal_account_update", "subscription_customer_change", "account_transaction_changed", "go_cardless_payment_paid_out", "go_cardless_payment_rejected", "go_cardless_payment_pending", "stripe_direct_debit_payment_paid_out", "stripe_direct_debit_payment_rejected", "stripe_direct_debit_payment_pending", "maxio_payments_direct_debit_payment_paid_out", "maxio_payments_direct_debit_payment_rejected", "maxio_payments_direct_debit_payment_pending", "invoice_in_collections_canceled", "subscription_added_to_group", "subscription_removed_from_group", "chargeback_opened", "chargeback_lost", "chargeback_accepted", "chargeback_closed", "chargeback_won", "payment_collection_method_changed", "component_billing_date_changed", "chjs_tokenization_failure", "chjs_tokenization_success", "subscription_term_renewal_scheduled", "subscription_term_renewal_pending", "subscription_term_renewal_activated", "subscription_term_renewal_removed"], "type": "string", "x-ref": "#/components/schemas/EventKey" }, "example": ["custom_field_value_change", "payment_success"] }, "index$": 5 }, { "name": "date_field", "in": "query", "description": "The type of filter you would like to apply to your search.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "ListEventsDateField", "enum": ["created_at"], "type": "string", "example": "created_at", "x-ref": "#/components/schemas/ListEventsDateField" }, { "description": "The type of filter you would like to apply to your search.", "example": "created_at" }] }, "index$": 6 }, { "name": "start_date", "in": "query", "description": "The start date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 7 }, { "name": "end_date", "in": "query", "description": "The end date (format YYYY-MM-DD) with which to filter the date_field. Returns components with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 8 }, { "name": "start_datetime", "in": "query", "description": "The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 9 }, { "name": "end_datetime", "in": "query", "description": "The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns components with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 10 }] }, "GET /subscriptions/{subscription_id}/events.json": { "protocol": "http", "parameters": [{ "name": "subscription_id", "in": "path", "description": "The Chargify id of the subscription.", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 2 }, { "name": "since_id", "in": "query", "description": "Returns events with an id greater than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 3 }, { "name": "max_id", "in": "query", "description": "Returns events with an id less than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 4 }, { "name": "direction", "in": "query", "description": "The sort direction of the returned events.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "direction", "enum": ["asc", "desc"], "type": "string", "x-ref": "#/components/schemas/direction" }, { "description": "The sort direction of the returned events." }] }, "index$": 5 }, { "name": "filter", "in": "query", "description": "You can pass multiple event keys after comma.\nUse in query `filter=signup_success,payment_success`.", "style": "form", "explode": true, "schema": { "type": "array", "items": { "title": "EventKey", "enum": ["payment_success", "payment_failure", "signup_success", "signup_failure", "delayed_signup_creation_success", "delayed_signup_creation_failure", "billing_date_change", "expiration_date_change", "renewal_success", "renewal_failure", "subscription_state_change", "subscription_product_change", "subscription_product_change_scheduled", "pending_cancellation_change", "expiring_card", "customer_update", "customer_create", "customer_delete", "component_allocation_change", "metered_usage", "prepaid_usage", "upgrade_downgrade_success", "upgrade_downgrade_failure", "statement_closed", "statement_settled", "subscription_card_update", "subscription_group_card_update", "subscription_bank_account_update", "refund_success", "refund_failure", "upcoming_renewal_notice", "trial_end_notice", "dunning_step_reached", "invoice_issued", "invoice_pending", "prepaid_subscription_balance_changed", "subscription_group_signup_success", "subscription_group_signup_failure", "direct_debit_payment_paid_out", "direct_debit_payment_rejected", "direct_debit_payment_pending", "pending_payment_created", "pending_payment_failed", "pending_payment_completed", "proforma_invoice_issued", "subscription_prepayment_account_balance_changed", "subscription_service_credit_account_balance_changed", "custom_field_value_change", "item_price_point_changed", "renewal_success_recreated", "renewal_failure_recreated", "payment_success_recreated", "payment_failure_recreated", "subscription_deletion", "subscription_group_bank_account_update", "subscription_paypal_account_update", "subscription_group_paypal_account_update", "subscription_customer_change", "account_transaction_changed", "go_cardless_payment_paid_out", "go_cardless_payment_rejected", "go_cardless_payment_pending", "stripe_direct_debit_payment_paid_out", "stripe_direct_debit_payment_rejected", "stripe_direct_debit_payment_pending", "maxio_payments_direct_debit_payment_paid_out", "maxio_payments_direct_debit_payment_rejected", "maxio_payments_direct_debit_payment_pending", "invoice_in_collections_canceled", "subscription_added_to_group", "subscription_removed_from_group", "chargeback_opened", "chargeback_lost", "chargeback_accepted", "chargeback_closed", "chargeback_won", "payment_collection_method_changed", "component_billing_date_changed", "chjs_tokenization_failure", "chjs_tokenization_success", "subscription_term_renewal_scheduled", "subscription_term_renewal_pending", "subscription_term_renewal_activated", "subscription_term_renewal_removed"], "type": "string", "x-ref": "#/components/schemas/EventKey" }, "example": ["custom_field_value_change", "payment_success"] }, "index$": 6 }] }, "GET /events/count.json": { "protocol": "http", "parameters": [{ "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 0 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 20. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 20, "example": 50 }, "index$": 1 }, { "name": "since_id", "in": "query", "description": "Returns events with an id greater than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 2 }, { "name": "max_id", "in": "query", "description": "Returns events with an id less than or equal to the one specified.", "style": "form", "explode": true, "schema": { "type": "integer", "format": "int64" }, "index$": 3 }, { "name": "direction", "in": "query", "description": "The sort direction of the returned events.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "direction", "enum": ["asc", "desc"], "type": "string", "x-ref": "#/components/schemas/direction" }, { "description": "The sort direction of the returned events." }] }, "index$": 4 }, { "name": "filter", "in": "query", "description": "You can pass multiple event keys after comma.\nUse in query `filter=signup_success,payment_success`.", "style": "form", "explode": true, "schema": { "type": "array", "items": { "title": "EventKey", "enum": ["payment_success", "payment_failure", "signup_success", "signup_failure", "delayed_signup_creation_success", "delayed_signup_creation_failure", "billing_date_change", "expiration_date_change", "renewal_success", "renewal_failure", "subscription_state_change", "subscription_product_change", "subscription_product_change_scheduled", "pending_cancellation_change", "expiring_card", "customer_update", "customer_create", "customer_delete", "component_allocation_change", "metered_usage", "prepaid_usage", "upgrade_downgrade_success", "upgrade_downgrade_failure", "statement_closed", "statement_settled", "subscription_card_update", "subscription_group_card_update", "subscription_bank_account_update", "refund_success", "refund_failure", "upcoming_renewal_notice", "trial_end_notice", "dunning_step_reached", "invoice_issued", "invoice_pending", "prepaid_subscription_balance_changed", "subscription_group_signup_success", "subscription_group_signup_failure", "direct_debit_payment_paid_out", "direct_debit_payment_rejected", "direct_debit_payment_pending", "pending_payment_created", "pending_payment_failed", "pending_payment_completed", "proforma_invoice_issued", "subscription_prepayment_account_balance_changed", "subscription_service_credit_account_balance_changed", "custom_field_value_change", "item_price_point_changed", "renewal_success_recreated", "renewal_failure_recreated", "payment_success_recreated", "payment_failure_recreated", "subscription_deletion", "subscription_group_bank_account_update", "subscription_paypal_account_update", "subscription_group_paypal_account_update", "subscription_customer_change", "account_transaction_changed", "go_cardless_payment_paid_out", "go_cardless_payment_rejected", "go_cardless_payment_pending", "stripe_direct_debit_payment_paid_out", "stripe_direct_debit_payment_rejected", "stripe_direct_debit_payment_pending", "maxio_payments_direct_debit_payment_paid_out", "maxio_payments_direct_debit_payment_rejected", "maxio_payments_direct_debit_payment_pending", "invoice_in_collections_canceled", "subscription_added_to_group", "subscription_removed_from_group", "chargeback_opened", "chargeback_lost", "chargeback_accepted", "chargeback_closed", "chargeback_won", "payment_collection_method_changed", "component_billing_date_changed", "chjs_tokenization_failure", "chjs_tokenization_success", "subscription_term_renewal_scheduled", "subscription_term_renewal_pending", "subscription_term_renewal_activated", "subscription_term_renewal_removed"], "type": "string", "x-ref": "#/components/schemas/EventKey" }, "example": ["custom_field_value_change", "payment_success"] }, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let event_ref01_data = Object.values(setup.data.existing.event)[0];
        // LIST
        const event_ref01_ent = client.Event();
        const event_ref01_match = {};
        event_ref01_match['subscription_id'] = setup.idmap['subscription01'];
        const event_ref01_list = (await event_ref01_ent.list(event_ref01_match)).map((e) => e.data());
        // LOAD
        const event_ref01_match_dt0 = {};
        const event_ref01_data_dt0 = (await event_ref01_ent.load(event_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != event_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/event/EventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['event01', 'event02', 'event03', 'subscription01', 'subscription02', 'subscription03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_EVENT_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_EVENT_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_EVENT_ENTID'];
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
//# sourceMappingURL=EventEntity.test.js.map