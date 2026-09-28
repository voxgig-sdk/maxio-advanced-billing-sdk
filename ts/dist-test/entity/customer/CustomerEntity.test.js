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
(0, node_test_1.describe)('CustomerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAXIO_ADVANCED_BILLING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAXIO_ADVANCED_BILLING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MaxioAdvancedBillingSDK.test();
        const ent = testsdk.Customer();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'customer.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": false, "sh": "The customer’s shipping street address (e.g., “123 Main St.”)", "t": "`$STRING`", "key$": "address", "index$": 0 }, "address_2": { "a": true, "h": "Address 2", "n": "address_2", "r": false, "sh": "Second line of the customer’s shipping address e.g., “Apt.", "t": "`$STRING`", "key$": "address_2", "index$": 1 }, "branding_theme_id": { "a": true, "fo": "int32", "h": "Branding Theme Id", "n": "branding_theme_id", "r": false, "sh": "The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme.", "t": "`$INTEGER`", "key$": "branding_theme_id", "index$": 2 }, "cc_emails": { "a": true, "h": "Cc Emails", "n": "cc_emails", "r": false, "sh": "“A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)”", "t": "`$STRING`", "key$": "cc_emails", "index$": 3 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "The customer’s shipping address city (e.g., “Boston”)", "t": "`$STRING`", "key$": "city", "index$": 4 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "The customer shipping address country", "t": "`$STRING`", "key$": "country", "index$": 5 }, "country_name": { "a": true, "h": "Country Name", "n": "country_name", "r": false, "sh": "The customer's full name of country", "t": "`$STRING`", "key$": "country_name", "index$": 6 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "The timestamp in which the customer object was created in Chargify", "t": "`$STRING`", "key$": "created_at", "index$": 7 }, "customer": { "a": true, "h": "Customer", "n": "customer", "op": { "list": { "req": true, "type": "`$OBJECT`" } }, "r": false, "t": "`$OBJECT`", "key$": "customer", "index$": 8 }, "default_auto_renewal_profile_id": { "a": true, "fo": "int32", "h": "Default Auto Renewal Profile Id", "n": "default_auto_renewal_profile_id", "r": false, "sh": "The default auto-renewal profile ID for the customer", "t": "`$INTEGER`", "key$": "default_auto_renewal_profile_id", "index$": 9 }, "default_subscription_group_uid": { "a": true, "h": "Default Subscription Group Uid", "n": "default_subscription_group_uid", "r": false, "t": "`$STRING`", "key$": "default_subscription_group_uid", "index$": 10 }, "email": { "a": true, "h": "Email", "n": "email", "r": false, "sh": "The email address of the customer", "t": "`$STRING`", "key$": "email", "index$": 11 }, "entity_identifier_kind": { "a": true, "h": "Entity Identifier Kind", "n": "entity_identifier_kind", "r": false, "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 2 }, "key$": "entity_identifier_kind", "index$": 12 }, "entity_identifier_value": { "a": true, "h": "Entity Identifier Value", "n": "entity_identifier_value", "r": false, "sh": "The value of the customer's tax or business identifier.", "t": "`$STRING`", "key$": "entity_identifier_value", "index$": 13 }, "first_name": { "a": true, "h": "First Name", "n": "first_name", "r": false, "sh": "The first name of the customer", "t": "`$STRING`", "key$": "first_name", "index$": 14 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "sh": "The customer ID in Chargify", "t": "`$INTEGER`", "key$": "id", "index$": 15 }, "last_name": { "a": true, "h": "Last Name", "n": "last_name", "r": false, "sh": "The last name of the customer", "t": "`$STRING`", "key$": "last_name", "index$": 16 }, "locale": { "a": true, "h": "Locale", "n": "locale", "r": false, "sh": "The locale for the customer to identify language-region", "t": "`$STRING`", "key$": "locale", "index$": 17 }, "maxioid": { "a": true, "h": "Maxioid", "n": "maxioid", "r": false, "sh": "The Maxio-generated unique identifier for the customer.", "t": "`$STRING`", "key$": "maxioid", "index$": 18 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "The organization of the customer.", "t": "`$STRING`", "key$": "organization", "index$": 19 }, "parent_id": { "a": true, "fo": "int32", "h": "Parent Id", "n": "parent_id", "r": false, "sh": "The parent ID in Chargify if applicable.", "t": "`$INTEGER`", "key$": "parent_id", "index$": 20 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "The phone number of the customer", "t": "`$STRING`", "key$": "phone", "index$": 21 }, "portal_customer_created_at": { "a": true, "fo": "date-time", "h": "Portal Customer Created At", "n": "portal_customer_created_at", "r": false, "sh": "The timestamp of when the Billing Portal entry was created at for the customer", "t": "`$STRING`", "key$": "portal_customer_created_at", "index$": 22 }, "portal_invite_last_accepted_at": { "a": true, "fo": "date-time", "h": "Portal Invite Last Accepted At", "n": "portal_invite_last_accepted_at", "r": false, "sh": "The timestamp of when the Billing Portal invite was last accepted", "t": "`$STRING`", "key$": "portal_invite_last_accepted_at", "index$": 23 }, "portal_invite_last_sent_at": { "a": true, "fo": "date-time", "h": "Portal Invite Last Sent At", "n": "portal_invite_last_sent_at", "r": false, "sh": "The timestamp of when the Billing Portal invite was last sent at", "t": "`$STRING`", "key$": "portal_invite_last_sent_at", "index$": 24 }, "reference": { "a": true, "h": "Reference", "n": "reference", "r": false, "sh": "The unique identifier used within your own application for this customer", "t": "`$STRING`", "key$": "reference", "index$": 25 }, "salesforce_id": { "a": true, "h": "Salesforce Id", "n": "salesforce_id", "r": false, "sh": "The Salesforce ID for the customer", "t": "`$STRING`", "key$": "salesforce_id", "index$": 26 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "sh": "The customer’s shipping address state (e.g., “MA”)", "t": "`$STRING`", "key$": "state", "index$": 27 }, "state_name": { "a": true, "h": "State Name", "n": "state_name", "r": false, "sh": "The customer's full name of state", "t": "`$STRING`", "key$": "state_name", "index$": 28 }, "surcharging": { "a": true, "h": "Surcharging", "n": "surcharging", "r": false, "sh": "Whether surcharging is enabled for the customer.", "t": "`$BOOLEAN`", "key$": "surcharging", "index$": 29 }, "tax_exempt": { "a": true, "h": "Tax Exempt", "n": "tax_exempt", "r": false, "sh": "The tax exempt status for the customer.", "t": "`$BOOLEAN`", "key$": "tax_exempt", "index$": 30 }, "tax_exempt_reason": { "a": true, "h": "Tax Exempt Reason", "n": "tax_exempt_reason", "r": false, "sh": "The Tax Exemption Reason Code for the customer", "t": "`$STRING`", "key$": "tax_exempt_reason", "index$": 31 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "sh": "The timestamp in which the customer object was last edited", "t": "`$STRING`", "key$": "updated_at", "index$": 32 }, "vat_country": { "a": true, "h": "Vat Country", "n": "vat_country", "r": false, "sh": "The two-letter ISO 3166-1 country code that qualifies the customer's VAT number.", "t": "`$STRING`", "key$": "vat_country", "index$": 33 }, "vat_number": { "a": true, "h": "Vat Number", "n": "vat_number", "r": false, "sh": "The VAT business identification number for the customer.", "t": "`$STRING`", "key$": "vat_number", "index$": 34 }, "verified": { "a": true, "h": "Verified", "n": "verified", "r": false, "sh": "Is the customer verified to use ACH as a payment method.", "t": "`$BOOLEAN`", "key$": "verified", "index$": 35 }, "zip": { "a": true, "h": "Zip", "n": "zip", "r": false, "sh": "The customer’s shipping address zip code (e.g., “12345”)", "t": "`$STRING`", "key$": "zip", "index$": 36 } }, "id": { "field": "id", "name": "id" }, "name": "customer", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /portal/customers/{customer_id}/enable.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "customer_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "auto_invite", "or": "auto_invite", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/portal/customers/{customer_id}/enable.json", "q": { "$action": "enable", "exist": ["auto_invite", "id"] }, "r": { "param": { "customer_id": "id" } }, "s": [{ "lit": "portal" }, { "lit": "customers" }, { "var": "id" }, { "lit": "enable.json" }], "t": { "req": "`reqdata`", "res": "`body.customer`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /customers.json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/customers.json", "q": {}, "r": {}, "s": [{ "lit": "customers.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /customers.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "date_field", "or": "date_field", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "end_date", "or": "end_date", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "end_datetime", "or": "end_datetime", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 30, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "start_datetime", "or": "start_datetime", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/customers.json", "q": { "exist": ["date_field", "direction", "end_date", "end_datetime", "page", "per_page", "q", "start_date", "start_datetime"] }, "r": {}, "s": [{ "lit": "customers.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /customers/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/customers/{id}.json", "q": { "$action": "id", "exist": ["id"] }, "r": {}, "s": [{ "lit": "customers" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /customers/lookup.json", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "reference", "or": "reference", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/customers/lookup.json", "q": { "$action": "lookup", "exist": ["reference"] }, "r": {}, "s": [{ "lit": "customers" }, { "lit": "lookup.json" }], "t": { "req": "`reqdata`", "res": "`body.customer`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /customers/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/customers/{id}.json", "q": { "$action": "id", "exist": ["id"] }, "r": {}, "s": [{ "lit": "customers" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /customers/{id}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/customers/{id}.json", "q": { "$action": "id", "exist": ["id"] }, "r": {}, "s": [{ "lit": "customers" }, { "lit": "{id}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "customer", "name__orig": "customer", "Name": "Customer", "name_": "customer", "name-": "customer", "NAME": "CUSTOMER", "index$": 13 }, { "active": true, "entity": "customer", "key$": "BasicCustomerFlow", "kind": "basic", "name": "BasicCustomerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "customer_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "customer_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "srcdatavar": "customer_ref01_data", "suffix": "_up0", "textfield": "address" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "srcdatavar": "customer_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-customer_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "customer_ref01", "suffix": "_rm0" }, "m": { "id": "customer01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "customer_ref01" } }], "index$": 5 }] }, 'Customer', { "POST /portal/customers/{customer_id}/enable.json": { "protocol": "http", "parameters": [{ "name": "customer_id", "in": "path", "description": "The Chargify id of the customer", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }, { "name": "auto_invite", "in": "query", "description": "When set to 1, an Invitation email will be sent to the Customer.\nWhen set to 0, or not sent, an email will not be sent.\nUse in query: `auto_invite=1`.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "AutoInvite", "enum": [0, 1], "type": "integer", "x-ref": "#/components/schemas/AutoInvite" }, { "description": "When set to 1, an Invitation email will be sent to the Customer.\nWhen set to 0, or not sent, an email will not be sent.\nUse in query: `auto_invite=1`." }] }, "index$": 1 }] }, "POST /customers.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "CreateCustomerRequest", "required": ["customer"], "type": "object", "properties": { "customer": { "title": "CreateCustomer", "required": ["first_name", "last_name", "email"], "type": "object", "properties": { "first_name": {}, "last_name": {}, "email": {}, "cc_emails": {}, "organization": {}, "reference": {}, "address": {}, "address_2": {}, "city": {}, "state": {}, "zip": {}, "country": {}, "phone": {}, "locale": {}, "vat_number": {}, "vat_country": {}, "entity_identifier_kind": {}, "entity_identifier_value": {}, "tax_exempt": {}, "surcharging": {}, "tax_exempt_reason": {}, "parent_id": {}, "salesforce_id": {}, "branding_theme_id": {} }, "x-ref": "#/components/schemas/CreateCustomer" } }, "x-ref": "#/components/schemas/CreateCustomerRequest" }, { "example": { "customer": { "first_name": "Martha", "last_name": "Washington", "email": "martha@example.com", "cc_emails": "george@example.com", "organization": "ABC, Inc.", "reference": "1234567890", "address": "123 Main Street", "address_2": "Unit 10", "city": "Anytown", "state": "MA", "zip": "02120", "country": "US", "phone": "555-555-1212", "locale": "es-MX" } } }], "index$": 1 }, "examples": { "Example": { "value": { "customer": { "first_name": "Martha", "last_name": "Washington", "email": "martha@example.com", "cc_emails": "george@example.com", "organization": "ABC, Inc.", "reference": "1234567890", "address": "123 Main Street", "address_2": "Unit 10", "city": "Anytown", "state": "MA", "zip": "02120", "country": "US", "phone": "555-555-1212", "locale": "es-MX" } } }, "With Entity Identifier": { "value": { "customer": { "first_name": "Amelie", "last_name": "Durand", "email": "amelie@example.fr", "organization": "Durand SARL", "country": "FR", "entity_identifier_kind": "company_reg", "entity_identifier_value": "123456789" } } } } } }, "required": false }, "parameters": [] }, "GET /customers.json": { "protocol": "http", "parameters": [{ "name": "direction", "in": "query", "description": "Direction to sort customers by time of creation", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "Sortingdirection", "enum": ["asc", "desc"], "type": "string", "description": "Used for sorting results.", "x-ref": "#/components/schemas/Sortingdirection" }, { "description": "Direction to sort customers by time of creation" }] }, "index$": 0 }, { "name": "page", "in": "query", "description": "Result records are organized in pages. By default, the first page of results is displayed. The page parameter specifies a page number of results to fetch. You can start navigating through the pages to consume the results. You do this by passing in a page parameter. Retrieve the next page by adding ?page=2 to the query string. If there are no results to return, then an empty result set will be returned.\nUse in query `page=1`.", "style": "form", "explode": true, "schema": { "minimum": 1, "type": "integer", "format": "int32", "default": 1, "example": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "description": "This parameter indicates how many records to fetch in each request. Default value is 50. The maximum allowed values is 200; any per_page value over 200 will be changed to 200.\nUse in query `per_page=200`.", "style": "form", "explode": true, "schema": { "maximum": 200, "type": "integer", "format": "int32", "default": 50, "example": 30 }, "index$": 2 }, { "name": "date_field", "in": "query", "description": "The type of filter you would like to apply to your search.\nUse in query: `date_field=created_at`.", "style": "form", "explode": true, "schema": { "allOf": [{ "title": "BasicDateField", "enum": ["updated_at", "created_at"], "type": "string", "description": "Allows to filter by `created_at` or `updated_at`.", "example": "updated_at", "x-ref": "#/components/schemas/BasicDateField" }, { "description": "The type of filter you would like to apply to your search.\nUse in query: `date_field=created_at`.", "example": "updated_at" }] }, "index$": 3 }, { "name": "start_date", "in": "query", "description": "The start date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp at or after midnight (12:00:00 AM) in your site’s time zone on the date specified.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 4 }, { "name": "end_date", "in": "query", "description": "The end date (format YYYY-MM-DD) with which to filter the date_field. Returns subscriptions with a timestamp up to and including 11:59:59PM in your site’s time zone on the date specified.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 5 }, { "name": "start_datetime", "in": "query", "description": "The start date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or after exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of start_date.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 6 }, { "name": "end_datetime", "in": "query", "description": "The end date and time (format YYYY-MM-DD HH:MM:SS) with which to filter the date_field. Returns subscriptions with a timestamp at or before exact time provided in query. You can specify timezone in query - otherwise your site's time zone will be used. If provided, this parameter will be used instead of end_date.", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 7 }, { "name": "q", "in": "query", "description": "A search query by which to filter customers (can be an email, an ID, a reference, organization)", "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 8 }] }, "GET /customers/{id}.json": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the customer", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "GET /customers/lookup.json": { "protocol": "http", "parameters": [{ "name": "reference", "in": "query", "description": "Customer reference", "required": true, "style": "form", "explode": true, "schema": { "type": "string" }, "index$": 0 }] }, "DELETE /customers/{id}.json": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the customer", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] }, "PUT /customers/{id}.json": { "protocol": "http", "requestBody": { "description": "", "content": { "application/json": { "schema": { "allOf": [{ "title": "UpdateCustomerRequest", "required": ["customer"], "type": "object", "properties": { "customer": { "title": "UpdateCustomer", "type": "object", "properties": { "first_name": {}, "last_name": {}, "email": {}, "cc_emails": {}, "organization": {}, "reference": {}, "address": {}, "address_2": {}, "city": {}, "state": {}, "zip": {}, "country": {}, "phone": {}, "locale": {}, "vat_number": {}, "vat_country": {}, "entity_identifier_kind": {}, "entity_identifier_value": {}, "tax_exempt": {}, "surcharging": {}, "tax_exempt_reason": {}, "parent_id": {}, "verified": {}, "salesforce_id": {}, "branding_theme_id": {} }, "x-ref": "#/components/schemas/UpdateCustomer" } }, "x-ref": "#/components/schemas/UpdateCustomerRequest" }, { "example": { "customer": { "first_name": "Martha", "last_name": "Washington", "email": "martha.washington@example.com" } } }] }, "examples": { "Example": { "value": { "customer": { "first_name": "Martha", "last_name": "Washington", "email": "martha.washington@example.com" } } }, "With Entity Identifier": { "value": { "customer": { "vat_country": "FR", "entity_identifier_kind": "vat_eu", "entity_identifier_value": "FR00123456789" } } }, "Clear Entity Identifier": { "value": { "customer": { "entity_identifier_kind": "vat_eu", "entity_identifier_value": "" } } } } } }, "required": false }, "parameters": [{ "name": "id", "in": "path", "description": "The Advanced Billing id of the customer", "required": true, "schema": { "type": "integer", "format": "int32" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const customer_ref01_ent = client.Customer();
        let customer_ref01_data = setup.data.new.customer['customer_ref01'];
        customer_ref01_data = (await customer_ref01_ent.create(customer_ref01_data)).data();
        (0, node_assert_1.default)(null != customer_ref01_data.id);
        // LIST
        const customer_ref01_match = {};
        const customer_ref01_list = (await customer_ref01_ent.list(customer_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(customer_ref01_list, { id: customer_ref01_data.id })));
        // UPDATE
        const customer_ref01_data_up0 = {};
        customer_ref01_data_up0.id = customer_ref01_data.id;
        const customer_ref01_markdef_up0 = { name: 'address', value: 'Mark01-customer_ref01_' + setup.now };
        customer_ref01_data_up0[customer_ref01_markdef_up0.name] = customer_ref01_markdef_up0.value;
        const customer_ref01_resdata_up0 = (await customer_ref01_ent.update(customer_ref01_data_up0)).data();
        (0, node_assert_1.default)(customer_ref01_resdata_up0.id === customer_ref01_data_up0.id);
        (0, node_assert_1.default)(customer_ref01_resdata_up0[customer_ref01_markdef_up0.name] === customer_ref01_markdef_up0.value);
        // LOAD
        const customer_ref01_match_dt0 = {};
        customer_ref01_match_dt0.id = customer_ref01_data.id;
        const customer_ref01_data_dt0 = (await customer_ref01_ent.load(customer_ref01_match_dt0)).data();
        (0, node_assert_1.default)(customer_ref01_data_dt0.id === customer_ref01_data.id);
        // REMOVE
        const customer_ref01_match_rm0 = { id: customer_ref01_data.id };
        await customer_ref01_ent.remove(customer_ref01_match_rm0);
        // LIST
        const customer_ref01_match_rt0 = {};
        const customer_ref01_list_rt0 = (await customer_ref01_ent.list(customer_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(customer_ref01_list_rt0, { id: customer_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/customer/CustomerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MaxioAdvancedBillingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['customer01', 'customer02', 'customer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAXIO_ADVANCED_BILLING_TEST_CUSTOMER_ENTID': idmap,
        'MAXIO_ADVANCED_BILLING_TEST_LIVE': 'FALSE',
        'MAXIO_ADVANCED_BILLING_TEST_EXPLAIN': 'FALSE',
        'MAXIO_ADVANCED_BILLING_APIKEY': '',
        'MAXIO_ADVANCED_BILLING_SECRET': '',
        'MAXIO_ADVANCED_BILLING_SERVER_SITE': "subdomain",
    });
    idmap = env['MAXIO_ADVANCED_BILLING_TEST_CUSTOMER_ENTID'];
    const live = 'TRUE' === env.MAXIO_ADVANCED_BILLING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAXIO_ADVANCED_BILLING_TEST_CUSTOMER_ENTID'];
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
//# sourceMappingURL=CustomerEntity.test.js.map