"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'MaxioAdvancedBilling',
        slug: "maxio-advanced-billing",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://{site}.chargify.com",
        server: {
            "site": "subdomain",
        },
        auth: {
            prefix: 'Basic',
            basic: true,
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            account_balance: {},
            allocation: {},
            batch_job: {},
            billing_portal: {},
            component: {},
            component_feature: {},
            component_price_point: {},
            component_price_point_currency_overage: {},
            coupon: {},
            coupon_currency: {},
            coupon_subcode: {},
            coupon_usage: {},
            custom_field: {},
            customer: {},
            delayed_cancel: {},
            endpoint: {},
            entitlement: {},
            event: {},
            events_based_billing_segment: {},
            feature: {},
            feature_catalog_item: {},
            feature_template: {},
            insight: {},
            invoice: {},
            list_proforma_invoice: {},
            list_sale_rep_item: {},
            list_segment: {},
            offer: {},
            one_time_token: {},
            payment_profile: {},
            prepayment: {},
            product: {},
            product_family: {},
            product_feature: {},
            product_price_point: {},
            proforma_invoice: {},
            reason_code: {},
            referral_code: {},
            sale_rep_setting: {},
            sales_commission: {},
            segment: {},
            signup_proforma_preview: {},
            site: {},
            subscription: {},
            subscription_component: {},
            subscription_group: {},
            subscription_group_invoice_account: {},
            subscription_group_signup: {},
            subscription_group_status: {},
            subscription_invoice_account: {},
            subscription_mrr: {},
            subscription_note: {},
            subscription_product: {},
            subscription_renewal: {},
            subscription_status: {},
            usage: {},
            webhook: {},
        }
    };
    entity = {
        "account_balance": {
            "fields": [
                {
                    "name": "open_invoices",
                    "title": "Open Invoices",
                    "type": "`$ANY`"
                },
                {
                    "name": "pending_discounts",
                    "title": "Pending Discounts",
                    "type": "`$ANY`"
                },
                {
                    "name": "pending_invoices",
                    "title": "Pending Invoices",
                    "type": "`$ANY`"
                },
                {
                    "name": "prepayments",
                    "title": "Prepayments",
                    "type": "`$ANY`"
                },
                {
                    "name": "service_credits",
                    "title": "Service Credits",
                    "type": "`$ANY`"
                }
            ],
            "name": "account_balance",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/account_balances.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "account_balances.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "account_balances.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "allocation": {
            "fields": [
                {
                    "name": "allocation",
                    "title": "Allocation",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "allocation",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/allocations.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "allocations.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "allocations.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "allocations.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "allocations.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "page",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ],
                    [
                        "$.main.kit.entity.subscription",
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "batch_job": {
            "fields": [
                {
                    "name": "completed",
                    "title": "Completed",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "finished_at",
                    "title": "Finished At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "row_count",
                    "title": "Row Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "batch_job",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api_exports/invoices.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "invoices.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api_exports/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "proforma_invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api_exports/subscriptions.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "subscriptions.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "subscriptions.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/invoices/{batch_id}.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "{batch_id}.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "invoices",
                                "{batch_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "batch_id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "batch_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/proforma_invoices/{batch_id}.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "lit": "{batch_id}.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "proforma_invoices",
                                "{batch_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "batch_id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "batch_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/subscriptions/{batch_id}.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "{batch_id}.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "subscriptions",
                                "{batch_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.batchjob`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "batch_id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "batch_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "billing_portal": {
            "fields": [
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "expires_at",
                    "title": "Expires At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "fetch_count",
                    "title": "Fetch Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "last_accepted_at",
                    "title": "Last Accepted At",
                    "type": "`$STRING`",
                    "deprecated": true
                },
                {
                    "name": "last_invite_accepted_at",
                    "title": "Last Invite Accepted At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "last_invite_sent_at",
                    "title": "Last Invite Sent At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "last_sent_at",
                    "title": "Last Sent At",
                    "type": "`$STRING`",
                    "deprecated": true
                },
                {
                    "name": "new_link_available_at",
                    "title": "New Link Available At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "send_invite_link_text",
                    "title": "Send Invite Link Text",
                    "type": "`$STRING`"
                },
                {
                    "name": "uninvited_count",
                    "title": "Uninvited Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`"
                }
            ],
            "name": "billing_portal",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/portal/customers/{customer_id}/invitations/invite.json",
                            "segments": [
                                {
                                    "lit": "portal"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "invitations"
                                },
                                {
                                    "lit": "invite.json"
                                }
                            ],
                            "parts": [
                                "portal",
                                "customers",
                                "{customer_id}",
                                "invitations",
                                "invite.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "customer_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/portal/customers/{customer_id}/management_link.json",
                            "segments": [
                                {
                                    "lit": "portal"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "management_link.json"
                                }
                            ],
                            "parts": [
                                "portal",
                                "customers",
                                "{customer_id}",
                                "management_link.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "customer_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/portal/customers/{customer_id}/invitations/revoke.json",
                            "segments": [
                                {
                                    "lit": "portal"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "invitations"
                                },
                                {
                                    "lit": "revoke.json"
                                }
                            ],
                            "parts": [
                                "portal",
                                "customers",
                                "{customer_id}",
                                "invitations",
                                "revoke.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "customer_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.customer"
                    ]
                ]
            }
        },
        "component": {
            "fields": [
                {
                    "name": "component",
                    "title": "Component",
                    "type": "`$OBJECT`",
                    "op": {
                        "list": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    }
                }
            ],
            "name": "component",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/event_based_components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "event_based_components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "event_based_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/metered_components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "metered_components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "metered_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/on_off_components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "on_off_components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "on_off_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/prepaid_usage_components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "prepaid_usage_components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "prepaid_usage_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/quantity_based_components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "quantity_based_components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "quantity_based_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/components.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "components.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "include_archived",
                                    "page",
                                    "per_page",
                                    "product_family_id",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components.json",
                            "segments": [
                                {
                                    "lit": "components.json"
                                }
                            ],
                            "parts": [
                                "components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "include_archived",
                                    "page",
                                    "per_page",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/components/{component_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "{component_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "components",
                                "{component_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_feature",
                                        "orig": "include_feature",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "$action": "component_id",
                                "exist": [
                                    "component_id",
                                    "include_feature",
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/lookup.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "lookup.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "lookup.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "handle",
                                        "orig": "handle",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "lookup",
                                "exist": [
                                    "handle"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/product_families/{product_family_id}/components/{component_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "{component_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "components",
                                "{component_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "component_id",
                                "exist": [
                                    "component_id",
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/product_families/{product_family_id}/components/{component_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "{component_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "components",
                                "{component_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "component": "`reqdata`"
                                },
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "component_id",
                                "exist": [
                                    "component_id",
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "{component_id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "component": "`reqdata`"
                                },
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "component_id",
                                "exist": [
                                    "component_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product_family"
                    ]
                ]
            }
        },
        "component_feature": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "component_feature",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/components/{component_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "destroy_entitlement",
                                        "orig": "destroy_entitlement",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "destroy_entitlement",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "component_price_point": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "component",
                    "title": "Component",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "component_id",
                    "title": "Component Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "currency_prices",
                    "title": "Currency Prices",
                    "type": "`$ARRAY`",
                    "short": "An array of currency pricing data is available when multiple currencies are defined for the site."
                },
                {
                    "name": "default",
                    "title": "Default",
                    "type": "`$BOOLEAN`",
                    "short": "Note: Refer to type attribute instead.",
                    "deprecated": true
                },
                {
                    "name": "expiration_interval",
                    "title": "Expiration Interval",
                    "type": "`$INTEGER`",
                    "short": "Applicable only to prepaid usage components where rollover_prepaid_remainder is true.",
                    "format": "int32"
                },
                {
                    "name": "expiration_interval_unit",
                    "title": "Expiration Interval Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "handle",
                    "title": "Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "interval",
                    "title": "Interval",
                    "type": "`$INTEGER`",
                    "short": "The numerical interval.",
                    "format": "int32"
                },
                {
                    "name": "interval_unit",
                    "title": "Interval Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overage_prices",
                    "title": "Overage Prices",
                    "type": "`$ARRAY`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "overage_pricing_scheme",
                    "title": "Overage Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "price_point",
                    "title": "Price Point",
                    "type": "`$OBJECT`",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    }
                },
                {
                    "name": "price_points",
                    "title": "Price Points",
                    "type": "`$ARRAY`",
                    "op": {
                        "list": {
                            "req": true,
                            "type": "`$ARRAY`"
                        }
                    }
                },
                {
                    "name": "prices",
                    "title": "Prices",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pricing_scheme",
                    "title": "Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "renew_prepaid_allocation",
                    "title": "Renew Prepaid Allocation",
                    "type": "`$BOOLEAN`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "rollover_prepaid_remainder",
                    "title": "Rollover Prepaid Remainder",
                    "type": "`$BOOLEAN`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "short": "(only used for Custom Pricing - ie.",
                    "format": "int32"
                },
                {
                    "name": "tax_included",
                    "title": "Tax Included",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "use_site_exchange_rate",
                    "title": "Use Site Exchange Rate",
                    "type": "`$BOOLEAN`",
                    "short": "Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "component_price_point",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/clone.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "clone.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "clone.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/price_points/bulk.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "bulk.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "bulk.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/price_points.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "price_points.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{id}",
                                "price_points.json"
                            ],
                            "rename": {
                                "param": {
                                    "component_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.price_point`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/price_points/{price_point_id}/currency_prices.json",
                            "segments": [
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "currency_prices.json"
                                }
                            ],
                            "parts": [
                                "price_points",
                                "{price_point_id}",
                                "currency_prices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/{component_id}/price_points.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "price_points.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{id}",
                                "price_points.json"
                            ],
                            "rename": {
                                "param": {
                                    "component_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter_type",
                                        "orig": "filter_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "catalog",
                                            "default"
                                        ]
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "currency_price",
                                    "filter_type",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components_price_points.json",
                            "segments": [
                                {
                                    "lit": "components_price_points.json"
                                }
                            ],
                            "parts": [
                                "components_price_points.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "filter",
                                    "include",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/components/{component_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.price_point`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/default.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "default.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "default.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/unarchive.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "unarchive.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "unarchive.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/price_points/{price_point_id}/currency_prices.json",
                            "segments": [
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "currency_prices.json"
                                }
                            ],
                            "parts": [
                                "price_points",
                                "{price_point_id}",
                                "currency_prices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ],
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "component_price_point_currency_overage": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "component_id",
                    "title": "Component Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "currency_overage_prices",
                    "title": "Currency Overage Prices",
                    "type": "`$ARRAY`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "currency_prices",
                    "title": "Currency Prices",
                    "type": "`$ARRAY`",
                    "short": "An array of currency pricing data is available when multiple currencies are defined for the site."
                },
                {
                    "name": "default",
                    "title": "Default",
                    "type": "`$BOOLEAN`",
                    "short": "Note: Refer to type attribute instead.",
                    "deprecated": true
                },
                {
                    "name": "expiration_interval",
                    "title": "Expiration Interval",
                    "type": "`$INTEGER`",
                    "short": "Applicable only to prepaid usage components where rollover_prepaid_remainder is true.",
                    "format": "int32"
                },
                {
                    "name": "expiration_interval_unit",
                    "title": "Expiration Interval Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "handle",
                    "title": "Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "interval",
                    "title": "Interval",
                    "type": "`$INTEGER`",
                    "short": "The numerical interval.",
                    "format": "int32"
                },
                {
                    "name": "interval_unit",
                    "title": "Interval Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "overage_prices",
                    "title": "Overage Prices",
                    "type": "`$ARRAY`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "overage_pricing_scheme",
                    "title": "Overage Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "prices",
                    "title": "Prices",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pricing_scheme",
                    "title": "Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "renew_prepaid_allocation",
                    "title": "Renew Prepaid Allocation",
                    "type": "`$BOOLEAN`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "rollover_prepaid_remainder",
                    "title": "Rollover Prepaid Remainder",
                    "type": "`$BOOLEAN`",
                    "short": "Applicable only to prepaid usage components."
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "short": "(only used for Custom Pricing - ie.",
                    "format": "int32"
                },
                {
                    "name": "tax_included",
                    "title": "Tax Included",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "use_site_exchange_rate",
                    "title": "Use Site Exchange Rate",
                    "type": "`$BOOLEAN`",
                    "short": "Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "component_price_point_currency_overage",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/{component_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.price_point`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "currency_price",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "coupon": {
            "fields": [
                {
                    "name": "allow_negative_balance",
                    "title": "Allow Negative Balance",
                    "type": "`$BOOLEAN`",
                    "short": "If set to true, discount is not limited (credits will carry forward to next billing)."
                },
                {
                    "name": "amount",
                    "title": "Amount",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "amount_in_cents",
                    "title": "Amount In Cents",
                    "type": "`$INTEGER`",
                    "format": "int64"
                },
                {
                    "name": "apply_on_cancel_at_end_of_period",
                    "title": "Apply On Cancel At End Of Period",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "apply_on_subscription_expiration",
                    "title": "Apply On Subscription Expiration",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "code",
                    "title": "Code",
                    "type": "`$STRING`"
                },
                {
                    "name": "compounding_strategy",
                    "title": "Compounding Strategy",
                    "type": "`$ANY`"
                },
                {
                    "name": "conversion_limit",
                    "title": "Conversion Limit",
                    "type": "`$STRING`"
                },
                {
                    "name": "coupon",
                    "title": "Coupon",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "coupon_restrictions",
                    "title": "Coupon Restrictions",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "currency_prices",
                    "title": "Currency Prices",
                    "type": "`$ARRAY`",
                    "short": "Returned in read, find, and list endpoints if the query parameter is provided."
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "discount_type",
                    "title": "Discount Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration_interval",
                    "title": "Duration Interval",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "duration_interval_span",
                    "title": "Duration Interval Span",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration_interval_unit",
                    "title": "Duration Interval Unit",
                    "type": "`$STRING`"
                },
                {
                    "name": "duration_period_count",
                    "title": "Duration Period Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "end_date",
                    "title": "End Date",
                    "type": "`$STRING`",
                    "short": "After the given time, this coupon code will be invalid for new signups.",
                    "format": "date-time"
                },
                {
                    "name": "exclude_mid_period_allocations",
                    "title": "Exclude Mid Period Allocations",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "percentage",
                    "title": "Percentage",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_family_id",
                    "title": "Product Family Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "product_family_name",
                    "title": "Product Family Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "recurring",
                    "title": "Recurring",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "recurring_scheme",
                    "title": "Recurring Scheme",
                    "type": "`$STRING`"
                },
                {
                    "name": "stackable",
                    "title": "Stackable",
                    "type": "`$BOOLEAN`",
                    "short": "A stackable coupon can be combined with other coupons on a Subscription."
                },
                {
                    "name": "start_date",
                    "title": "Start Date",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "use_site_exchange_rate",
                    "title": "Use Site Exchange Rate",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "coupon",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/coupons/{coupon_id}/codes.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "codes.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "{id}",
                                "codes.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "code",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/coupons.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.coupon`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/coupons.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "currency_price",
                                    "filter",
                                    "page",
                                    "per_page",
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/coupons.json",
                            "segments": [
                                {
                                    "lit": "coupons.json"
                                }
                            ],
                            "parts": [
                                "coupons.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "currency_price",
                                    "filter",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/coupons/{coupon_id}/codes.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "codes.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "{id}",
                                "codes.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "$action": "code",
                                "exist": [
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "lit": "{coupon_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons",
                                "{coupon_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "coupon_id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "coupon_id",
                                "exist": [
                                    "coupon_id",
                                    "currency_price",
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/coupons/find.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "lit": "find.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "find.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.coupon`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "code",
                                        "orig": "code",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "find",
                                "exist": [
                                    "code",
                                    "currency_price",
                                    "product_family_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/coupons/validate.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "lit": "validate.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "validate.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "code",
                                        "orig": "code",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "validate",
                                "exist": [
                                    "code",
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/coupons/{coupon_id}/codes/{subcode}.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "codes"
                                },
                                {
                                    "lit": "{subcode}.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "{id}",
                                "codes",
                                "{subcode}.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subcode",
                                        "orig": "subcode",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "code_subcode",
                                "exist": [
                                    "id",
                                    "subcode"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "lit": "{coupon_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons",
                                "{coupon_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "coupon_id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "coupon_id",
                                "exist": [
                                    "coupon_id",
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "lit": "{coupon_id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons",
                                "{coupon_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "coupon_id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "coupon_id",
                                "exist": [
                                    "coupon_id",
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product_family"
                    ]
                ]
            }
        },
        "coupon_currency": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "coupon_currency",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/coupons/{coupon_id}/currency_prices.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "currency_prices.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "{id}",
                                "currency_prices.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "currency_prices.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "coupon_subcode": {
            "fields": [
                {
                    "name": "created_codes",
                    "title": "Created Codes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "duplicate_codes",
                    "title": "Duplicate Codes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "invalid_codes",
                    "title": "Invalid Codes",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "coupon_subcode",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/coupons/{coupon_id}/codes.json",
                            "segments": [
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "codes.json"
                                }
                            ],
                            "parts": [
                                "coupons",
                                "{id}",
                                "codes.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "coupon_usage": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "The Chargify id of the product",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Name of the product"
                },
                {
                    "name": "revenue",
                    "title": "Revenue",
                    "type": "`$INTEGER`",
                    "short": "Total revenue of all subscriptions that have received a discount from this coupon.",
                    "format": "int32"
                },
                {
                    "name": "revenue_in_cents",
                    "title": "Revenue In Cents",
                    "type": "`$INTEGER`",
                    "short": "Total revenue of all subscriptions that have received a discount from this coupon.",
                    "format": "int64"
                },
                {
                    "name": "savings",
                    "title": "Savings",
                    "type": "`$INTEGER`",
                    "short": "Dollar amount of customer savings as a result of the coupon.",
                    "format": "int32"
                },
                {
                    "name": "savings_in_cents",
                    "title": "Savings In Cents",
                    "type": "`$INTEGER`",
                    "short": "Dollar amount of customer savings as a result of the coupon.",
                    "format": "int64"
                },
                {
                    "name": "signups",
                    "title": "Signups",
                    "type": "`$INTEGER`",
                    "short": "Number of times the coupon has been applied",
                    "format": "int32"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "coupon_usage",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/coupons/{coupon_id}/usage.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "coupons"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "usage.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "coupons",
                                "{id}",
                                "usage.json"
                            ],
                            "rename": {
                                "param": {
                                    "coupon_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "coupon_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product_family"
                    ]
                ]
            }
        },
        "custom_field": {
            "fields": [
                {
                    "name": "current_page",
                    "title": "Current Page",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "data_count",
                    "title": "Data Count",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deleted_at",
                    "title": "Deleted At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "enum",
                    "title": "Enum",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "input_type",
                    "title": "Input Type",
                    "type": "`$STRING`"
                },
                {
                    "name": "metadata",
                    "title": "Metadata",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metafield_id",
                    "title": "Metafield Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "metafields",
                    "title": "Metafields",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "per_page",
                    "title": "Per Page",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "resource_id",
                    "title": "Resource Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "scope",
                    "title": "Scope",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_count",
                    "title": "Total Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "total_pages",
                    "title": "Total Pages",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "custom_field",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/{resource_type}/{resource_id}/metadata.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "var": "resource_id"
                                },
                                {
                                    "lit": "metadata.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "{resource_id}",
                                "metadata.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "resource_id",
                                    "resource_type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/{resource_type}/metafields.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "lit": "metafields.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "metafields.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "resource_type"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{resource_type}/metadata.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "lit": "metadata.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "metadata.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metadata`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_deleted",
                                        "orig": "with_deleted",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "direction",
                                    "end_date",
                                    "end_datetime",
                                    "page",
                                    "per_page",
                                    "resource_id",
                                    "resource_type",
                                    "start_date",
                                    "start_datetime",
                                    "with_deleted"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{resource_type}/metafields.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "lit": "metafields.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "metafields.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "name",
                                    "page",
                                    "per_page",
                                    "resource_type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{resource_type}/{resource_id}/metadata.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "var": "resource_id"
                                },
                                {
                                    "lit": "metadata.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "{resource_id}",
                                "metadata.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "per_page",
                                    "resource_id",
                                    "resource_type"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/{resource_type}/{resource_id}/metadata.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "var": "resource_id"
                                },
                                {
                                    "lit": "metadata.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "{resource_id}",
                                "metadata.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "name",
                                    "resource_id",
                                    "resource_type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/{resource_type}/metafields.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "lit": "metafields.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "metafields.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "name",
                                    "resource_type"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/{resource_type}/{resource_id}/metadata.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "var": "resource_id"
                                },
                                {
                                    "lit": "metadata.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "{resource_id}",
                                "metadata.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "resource_id",
                                    "resource_type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/{resource_type}/metafields.json",
                            "segments": [
                                {
                                    "var": "resource_type"
                                },
                                {
                                    "lit": "metafields.json"
                                }
                            ],
                            "parts": [
                                "{resource_type}",
                                "metafields.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "resource_type"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "customer": {
            "fields": [
                {
                    "name": "address",
                    "title": "Address",
                    "type": "`$STRING`",
                    "short": "The customer’s shipping street address (e.g., “123 Main St.”)"
                },
                {
                    "name": "address_2",
                    "title": "Address 2",
                    "type": "`$STRING`",
                    "short": "Second line of the customer’s shipping address e.g., “Apt."
                },
                {
                    "name": "branding_theme_id",
                    "title": "Branding Theme Id",
                    "type": "`$INTEGER`",
                    "short": "The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme.",
                    "format": "int32"
                },
                {
                    "name": "cc_emails",
                    "title": "Cc Emails",
                    "type": "`$STRING`",
                    "short": "“A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)”"
                },
                {
                    "name": "city",
                    "title": "City",
                    "type": "`$STRING`",
                    "short": "The customer’s shipping address city (e.g., “Boston”)"
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "short": "The customer shipping address country"
                },
                {
                    "name": "country_name",
                    "title": "Country Name",
                    "type": "`$STRING`",
                    "short": "The customer's full name of country"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "short": "The timestamp in which the customer object was created in Chargify",
                    "format": "date-time"
                },
                {
                    "name": "customer",
                    "title": "Customer",
                    "type": "`$OBJECT`",
                    "op": {
                        "list": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    }
                },
                {
                    "name": "default_auto_renewal_profile_id",
                    "title": "Default Auto Renewal Profile Id",
                    "type": "`$INTEGER`",
                    "short": "The default auto-renewal profile ID for the customer",
                    "format": "int32"
                },
                {
                    "name": "default_subscription_group_uid",
                    "title": "Default Subscription Group Uid",
                    "type": "`$STRING`"
                },
                {
                    "name": "email",
                    "title": "Email",
                    "type": "`$STRING`",
                    "short": "The email address of the customer"
                },
                {
                    "name": "entity_identifier_kind",
                    "title": "Entity Identifier Kind",
                    "type": "`$ANY`"
                },
                {
                    "name": "entity_identifier_value",
                    "title": "Entity Identifier Value",
                    "type": "`$STRING`",
                    "short": "The value of the customer's tax or business identifier."
                },
                {
                    "name": "first_name",
                    "title": "First Name",
                    "type": "`$STRING`",
                    "short": "The first name of the customer"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "The customer ID in Chargify",
                    "format": "int32"
                },
                {
                    "name": "last_name",
                    "title": "Last Name",
                    "type": "`$STRING`",
                    "short": "The last name of the customer"
                },
                {
                    "name": "locale",
                    "title": "Locale",
                    "type": "`$STRING`",
                    "short": "The locale for the customer to identify language-region"
                },
                {
                    "name": "maxioid",
                    "title": "Maxioid",
                    "type": "`$STRING`",
                    "short": "The Maxio-generated unique identifier for the customer."
                },
                {
                    "name": "organization",
                    "title": "Organization",
                    "type": "`$STRING`",
                    "short": "The organization of the customer."
                },
                {
                    "name": "parent_id",
                    "title": "Parent Id",
                    "type": "`$INTEGER`",
                    "short": "The parent ID in Chargify if applicable.",
                    "format": "int32"
                },
                {
                    "name": "phone",
                    "title": "Phone",
                    "type": "`$STRING`",
                    "short": "The phone number of the customer"
                },
                {
                    "name": "portal_customer_created_at",
                    "title": "Portal Customer Created At",
                    "type": "`$STRING`",
                    "short": "The timestamp of when the Billing Portal entry was created at for the customer",
                    "format": "date-time"
                },
                {
                    "name": "portal_invite_last_accepted_at",
                    "title": "Portal Invite Last Accepted At",
                    "type": "`$STRING`",
                    "short": "The timestamp of when the Billing Portal invite was last accepted",
                    "format": "date-time"
                },
                {
                    "name": "portal_invite_last_sent_at",
                    "title": "Portal Invite Last Sent At",
                    "type": "`$STRING`",
                    "short": "The timestamp of when the Billing Portal invite was last sent at",
                    "format": "date-time"
                },
                {
                    "name": "reference",
                    "title": "Reference",
                    "type": "`$STRING`",
                    "short": "The unique identifier used within your own application for this customer"
                },
                {
                    "name": "salesforce_id",
                    "title": "Salesforce Id",
                    "type": "`$STRING`",
                    "short": "The Salesforce ID for the customer"
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "short": "The customer’s shipping address state (e.g., “MA”)"
                },
                {
                    "name": "state_name",
                    "title": "State Name",
                    "type": "`$STRING`",
                    "short": "The customer's full name of state"
                },
                {
                    "name": "surcharging",
                    "title": "Surcharging",
                    "type": "`$BOOLEAN`",
                    "short": "Whether surcharging is enabled for the customer."
                },
                {
                    "name": "tax_exempt",
                    "title": "Tax Exempt",
                    "type": "`$BOOLEAN`",
                    "short": "The tax exempt status for the customer."
                },
                {
                    "name": "tax_exempt_reason",
                    "title": "Tax Exempt Reason",
                    "type": "`$STRING`",
                    "short": "The Tax Exemption Reason Code for the customer"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "short": "The timestamp in which the customer object was last edited",
                    "format": "date-time"
                },
                {
                    "name": "vat_country",
                    "title": "Vat Country",
                    "type": "`$STRING`",
                    "short": "The two-letter ISO 3166-1 country code that qualifies the customer's VAT number."
                },
                {
                    "name": "vat_number",
                    "title": "Vat Number",
                    "type": "`$STRING`",
                    "short": "The VAT business identification number for the customer."
                },
                {
                    "name": "verified",
                    "title": "Verified",
                    "type": "`$BOOLEAN`",
                    "short": "Is the customer verified to use ACH as a payment method."
                },
                {
                    "name": "zip",
                    "title": "Zip",
                    "type": "`$STRING`",
                    "short": "The customer’s shipping address zip code (e.g., “12345”)"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "customer",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/portal/customers/{customer_id}/enable.json",
                            "segments": [
                                {
                                    "lit": "portal"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "enable.json"
                                }
                            ],
                            "parts": [
                                "portal",
                                "customers",
                                "{id}",
                                "enable.json"
                            ],
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.customer`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "auto_invite",
                                        "orig": "auto_invite",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "enable",
                                "exist": [
                                    "auto_invite",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/customers.json",
                            "segments": [
                                {
                                    "lit": "customers.json"
                                }
                            ],
                            "parts": [
                                "customers.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customers.json",
                            "segments": [
                                {
                                    "lit": "customers.json"
                                }
                            ],
                            "parts": [
                                "customers.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 30
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "direction",
                                    "end_date",
                                    "end_datetime",
                                    "page",
                                    "per_page",
                                    "q",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customers/{id}.json",
                            "segments": [
                                {
                                    "lit": "customers"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "customers",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "id",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customers/lookup.json",
                            "segments": [
                                {
                                    "lit": "customers"
                                },
                                {
                                    "lit": "lookup.json"
                                }
                            ],
                            "parts": [
                                "customers",
                                "lookup.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.customer`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "reference",
                                        "orig": "reference",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "lookup",
                                "exist": [
                                    "reference"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/customers/{id}.json",
                            "segments": [
                                {
                                    "lit": "customers"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "customers",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "id",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/customers/{id}.json",
                            "segments": [
                                {
                                    "lit": "customers"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "customers",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "id",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "delayed_cancel": {
            "fields": [
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscription",
                    "title": "Subscription",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "delayed_cancel",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/delayed_cancel.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "delayed_cancel.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "delayed_cancel.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "endpoint": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "webhook_subscriptions",
                    "title": "Webhook Subscriptions",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "endpoint",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/endpoints.json",
                            "segments": [
                                {
                                    "lit": "endpoints.json"
                                }
                            ],
                            "parts": [
                                "endpoints.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/endpoints/{endpoint_id}.json",
                            "segments": [
                                {
                                    "lit": "endpoints"
                                },
                                {
                                    "lit": "{endpoint_id}.json"
                                }
                            ],
                            "parts": [
                                "endpoints",
                                "{endpoint_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.endpoint`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "endpoint_id",
                                        "orig": "endpoint_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "endpoint_id",
                                "exist": [
                                    "endpoint_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "entitlement": {
            "fields": [
                {
                    "name": "customer_id",
                    "title": "Customer Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "format": "int32"
                },
                {
                    "name": "entitlements",
                    "title": "Entitlements",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The subscription's current state, e.g."
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "format": "int32"
                }
            ],
            "name": "entitlement",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/entitlements.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "entitlements.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "entitlements.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "event": {
            "fields": [
                {
                    "name": "event",
                    "title": "Event",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "event",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/events.json",
                            "segments": [
                                {
                                    "lit": "events.json"
                                }
                            ],
                            "parts": [
                                "events.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "custom_field_value_change",
                                            "payment_success"
                                        ]
                                    },
                                    {
                                        "name": "max_id",
                                        "orig": "max_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "since_id",
                                        "orig": "since_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "direction",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "max_id",
                                    "page",
                                    "per_page",
                                    "since_id",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/events.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "events.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "events.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "custom_field_value_change",
                                            "payment_success"
                                        ]
                                    },
                                    {
                                        "name": "max_id",
                                        "orig": "max_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "since_id",
                                        "orig": "since_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "filter",
                                    "max_id",
                                    "page",
                                    "per_page",
                                    "since_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/events/count.json",
                            "segments": [
                                {
                                    "lit": "events"
                                },
                                {
                                    "lit": "count.json"
                                }
                            ],
                            "parts": [
                                "events",
                                "count.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "custom_field_value_change",
                                            "payment_success"
                                        ]
                                    },
                                    {
                                        "name": "max_id",
                                        "orig": "max_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "since_id",
                                        "orig": "since_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "count",
                                "exist": [
                                    "direction",
                                    "filter",
                                    "max_id",
                                    "page",
                                    "per_page",
                                    "since_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "events_based_billing_segment": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "events_based_billing_segment",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$NUMBER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "feature": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "archived_count",
                    "title": "Archived Count",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Number of archived feature templates matching the filters.",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "feature",
                    "title": "Feature",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "create": {
                            "type": "`$OBJECT`"
                        }
                    }
                },
                {
                    "name": "feature_key",
                    "title": "Feature Key",
                    "type": "`$STRING`",
                    "short": "The `key` of the parent feature template."
                },
                {
                    "name": "feature_kind",
                    "title": "Feature Kind",
                    "type": "`$ANY`"
                },
                {
                    "name": "feature_name",
                    "title": "Feature Name",
                    "type": "`$STRING`",
                    "short": "The `name` of the parent feature template."
                },
                {
                    "name": "feature_template_id",
                    "title": "Feature Template Id",
                    "type": "`$INTEGER`",
                    "short": "The id of the feature template this item was created from.",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "items",
                    "title": "Items",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "periodicity_interval",
                    "title": "Periodicity Interval",
                    "type": "`$INTEGER`",
                    "short": "Set when `feature_kind` is `usage_limit`; `null` otherwise.",
                    "format": "int32"
                },
                {
                    "name": "periodicity_unit",
                    "title": "Periodicity Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "price_point_id",
                    "title": "Price Point Id",
                    "type": "`$INTEGER`",
                    "short": "Set together with `price_point_type` for price-point-specific overrides.",
                    "format": "int32"
                },
                {
                    "name": "price_point_type",
                    "title": "Price Point Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "total_count",
                    "title": "Total Count",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Total number of feature templates matching the filters, across all pages.",
                    "format": "int32"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$STRING`",
                    "short": "The value granted by this feature catalog item."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "feature",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/features.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "feature": "`reqdata`"
                                },
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/products/{product_id}/features.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "feature": "`reqdata`"
                                },
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/features.json",
                            "segments": [
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/features.json",
                            "segments": [
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "kind",
                                        "orig": "kind",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort_direction",
                                        "orig": "sort_direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "updated_from",
                                        "orig": "updated_from",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "updated_to",
                                        "orig": "updated_to",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "kind",
                                    "page",
                                    "per_page",
                                    "q",
                                    "sort_by",
                                    "sort_direction",
                                    "status",
                                    "updated_from",
                                    "updated_to"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/{component_id}/features.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.features`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/{product_id}/features.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.features`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ],
                    [
                        "$.main.kit.entity.product"
                    ]
                ]
            }
        },
        "feature_catalog_item": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "feature",
                    "title": "Feature",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "feature_key",
                    "title": "Feature Key",
                    "type": "`$STRING`",
                    "short": "The `key` of the parent feature template."
                },
                {
                    "name": "feature_kind",
                    "title": "Feature Kind",
                    "type": "`$ANY`"
                },
                {
                    "name": "feature_name",
                    "title": "Feature Name",
                    "type": "`$STRING`",
                    "short": "The `name` of the parent feature template."
                },
                {
                    "name": "feature_template_id",
                    "title": "Feature Template Id",
                    "type": "`$INTEGER`",
                    "short": "The id of the feature template this item was created from.",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "periodicity_interval",
                    "title": "Periodicity Interval",
                    "type": "`$INTEGER`",
                    "short": "Set when `feature_kind` is `usage_limit`; `null` otherwise.",
                    "format": "int32"
                },
                {
                    "name": "periodicity_unit",
                    "title": "Periodicity Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "price_point_id",
                    "title": "Price Point Id",
                    "type": "`$INTEGER`",
                    "short": "Set together with `price_point_type` for price-point-specific overrides.",
                    "format": "int32"
                },
                {
                    "name": "price_point_type",
                    "title": "Price Point Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$STRING`",
                    "short": "The value granted by this feature catalog item."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "feature_catalog_item",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/features/{id}/restore.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "restore.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features",
                                "{id}",
                                "restore.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "restore.json",
                                "exist": [
                                    "component_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/products/{product_id}/features/{id}/restore.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "restore.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features",
                                "{id}",
                                "restore.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "restore.json",
                                "exist": [
                                    "id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/{component_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/{product_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/products/{product_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ],
                    [
                        "$.main.kit.entity.product"
                    ]
                ]
            }
        },
        "feature_template": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "short": "The date and time the feature template was archived, or `null` if it is active.",
                    "format": "date-time"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "default_periodicity_interval",
                    "title": "Default Periodicity Interval",
                    "type": "`$INTEGER`",
                    "short": "For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items.",
                    "format": "int32"
                },
                {
                    "name": "default_periodicity_unit",
                    "title": "Default Periodicity Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "default_value",
                    "title": "Default Value",
                    "type": "`$STRING`",
                    "short": "A default value used to pre-populate new feature catalog items created from this template."
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "feature",
                    "title": "Feature",
                    "type": "`$ANY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "The Advanced Billing id of the feature template.",
                    "format": "int32"
                },
                {
                    "name": "key",
                    "title": "Key",
                    "type": "`$STRING`",
                    "short": "A unique, lowercase, underscore-separated identifier for the feature."
                },
                {
                    "name": "kind",
                    "title": "Kind",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "The display name of the feature."
                },
                {
                    "name": "plans_count",
                    "title": "Plans Count",
                    "type": "`$INTEGER`",
                    "short": "The number of **products** this feature template is currently attached to via an active feature catalog item.",
                    "format": "int32"
                },
                {
                    "name": "products_count",
                    "title": "Products Count",
                    "type": "`$INTEGER`",
                    "short": "The number of **components** this feature template is currently attached to via an active feature catalog item.",
                    "format": "int32"
                },
                {
                    "name": "unit",
                    "title": "Unit",
                    "type": "`$STRING`",
                    "short": "The unit the feature is measured in (for example, `requests` or `GB`)."
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "value_type",
                    "title": "Value Type",
                    "type": "`$ANY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "feature_template",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/features/{id}/restore.json",
                            "segments": [
                                {
                                    "lit": "features"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "restore.json"
                                }
                            ],
                            "parts": [
                                "features",
                                "{id}",
                                "restore.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "restore.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "remove_from_catalog",
                                        "orig": "remove_from_catalog",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "remove_from_catalog"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.feature`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "insight": {
            "fields": [
                {
                    "name": "mrr",
                    "title": "Mrr",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "seller_name",
                    "title": "Seller Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "site_currency",
                    "title": "Site Currency",
                    "type": "`$STRING`"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "site_name",
                    "title": "Site Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "stats",
                    "title": "Stats",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "insight",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/mrr_movements.json",
                            "segments": [
                                {
                                    "lit": "mrr_movements.json"
                                }
                            ],
                            "parts": [
                                "mrr_movements.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "page",
                                    "per_page",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/mrr.json",
                            "segments": [
                                {
                                    "lit": "mrr.json"
                                }
                            ],
                            "parts": [
                                "mrr.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "at_time",
                                        "orig": "at_time",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "at_time",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/stats.json",
                            "segments": [
                                {
                                    "lit": "stats.json"
                                }
                            ],
                            "parts": [
                                "stats.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "invoice": {
            "fields": [
                {
                    "name": "applications",
                    "title": "Applications",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "applied_amount",
                    "title": "Applied Amount",
                    "type": "`$STRING`",
                    "short": "The amount of the credit note that has already been applied to invoices."
                },
                {
                    "name": "applied_date",
                    "title": "Applied Date",
                    "type": "`$STRING`",
                    "short": "Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due.",
                    "format": "date"
                },
                {
                    "name": "avatax_details",
                    "title": "Avatax Details",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "billing_address",
                    "title": "Billing Address",
                    "type": "`$ANY`"
                },
                {
                    "name": "branding_theme_id",
                    "title": "Branding Theme Id",
                    "type": "`$INTEGER`",
                    "short": "The ID of the Branding Theme associated with this invoice.",
                    "format": "int32"
                },
                {
                    "name": "collection_method",
                    "title": "Collection Method",
                    "type": "`$ANY`"
                },
                {
                    "name": "consolidation_level",
                    "title": "Consolidation Level",
                    "type": "`$ANY`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "credit_amount",
                    "title": "Credit Amount",
                    "type": "`$STRING`",
                    "short": "The amount of credit (from credit notes) applied to this invoice."
                },
                {
                    "name": "credit_notes",
                    "title": "Credit Notes",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "credits",
                    "title": "Credits",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "currency",
                    "title": "Currency",
                    "type": "`$STRING`",
                    "short": "The ISO 4217 currency code (3 character string) representing the currency of invoice transaction."
                },
                {
                    "name": "custom_fields",
                    "title": "Custom Fields",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "customer",
                    "title": "Customer",
                    "type": "`$ANY`"
                },
                {
                    "name": "customer_id",
                    "title": "Customer Id",
                    "type": "`$INTEGER`",
                    "short": "ID of the customer to which the invoice belongs.",
                    "format": "int32"
                },
                {
                    "name": "debit_amount",
                    "title": "Debit Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "debits",
                    "title": "Debits",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "discount_amount",
                    "title": "Discount Amount",
                    "type": "`$STRING`",
                    "short": "Total discount applied to the invoice."
                },
                {
                    "name": "discounts",
                    "title": "Discounts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "display_settings",
                    "title": "Display Settings",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "due_amount",
                    "title": "Due Amount",
                    "type": "`$STRING`",
                    "short": "Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`."
                },
                {
                    "name": "due_date",
                    "title": "Due Date",
                    "type": "`$STRING`",
                    "short": "Date the invoice is due.",
                    "format": "date"
                },
                {
                    "name": "group_primary_subscription_id",
                    "title": "Group Primary Subscription Id",
                    "type": "`$INTEGER`",
                    "short": "For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice.",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int64"
                },
                {
                    "name": "invoice",
                    "title": "Invoice",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "invoices",
                    "title": "Invoices",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "issue_date",
                    "title": "Issue Date",
                    "type": "`$STRING`",
                    "short": "Date the invoice was issued to the customer.",
                    "format": "date"
                },
                {
                    "name": "line_items",
                    "title": "Line Items",
                    "type": "`$ARRAY`",
                    "short": "Line items on the invoice."
                },
                {
                    "name": "memo",
                    "title": "Memo",
                    "type": "`$STRING`",
                    "short": "The memo printed on invoices of any collection type."
                },
                {
                    "name": "net_terms",
                    "title": "Net Terms",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "number",
                    "title": "Number",
                    "type": "`$STRING`",
                    "short": "A unique, identifying string that appears on the invoice and in places the invoice is referenced."
                },
                {
                    "name": "origin_invoices",
                    "title": "Origin Invoices",
                    "type": "`$ARRAY`",
                    "short": "An array of origin invoices for the credit note."
                },
                {
                    "name": "paid_amount",
                    "title": "Paid Amount",
                    "type": "`$STRING`",
                    "short": "The amount paid on the invoice by the customer."
                },
                {
                    "name": "paid_date",
                    "title": "Paid Date",
                    "type": "`$STRING`",
                    "short": "Date the invoice became fully paid.",
                    "format": "date"
                },
                {
                    "name": "paid_invoices",
                    "title": "Paid Invoices",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "parent_invoice_id",
                    "title": "Parent Invoice Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "parent_invoice_number",
                    "title": "Parent Invoice Number",
                    "type": "`$INTEGER`",
                    "short": "For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice.",
                    "format": "int32"
                },
                {
                    "name": "parent_invoice_uid",
                    "title": "Parent Invoice Uid",
                    "type": "`$STRING`",
                    "short": "For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice."
                },
                {
                    "name": "payer",
                    "title": "Payer",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "payment_instructions",
                    "title": "Payment Instructions",
                    "type": "`$STRING`",
                    "short": "A message that is printed on the invoice when it is marked for remittance collection."
                },
                {
                    "name": "payments",
                    "title": "Payments",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "prepayment",
                    "title": "Prepayment",
                    "type": "`$STRING`"
                },
                {
                    "name": "previous_balance_data",
                    "title": "Previous Balance Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "product_family_name",
                    "title": "Product Family Name",
                    "type": "`$STRING`",
                    "short": "The name of the product family subscribed when the invoice was generated."
                },
                {
                    "name": "product_name",
                    "title": "Product Name",
                    "type": "`$STRING`",
                    "short": "The name of the product subscribed when the invoice was generated."
                },
                {
                    "name": "public_url",
                    "title": "Public Url",
                    "type": "`$STRING`",
                    "short": "The public URL of the invoice"
                },
                {
                    "name": "public_url_expires_on",
                    "title": "Public Url Expires On",
                    "type": "`$STRING`",
                    "short": "The format is `\"YYYY-MM-DD\"`.",
                    "format": "date"
                },
                {
                    "name": "recipient_emails",
                    "title": "Recipient Emails",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "refund_amount",
                    "title": "Refund Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "refunds",
                    "title": "Refunds",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "remaining_amount",
                    "title": "Remaining Amount",
                    "type": "`$STRING`",
                    "short": "The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`."
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$STRING`"
                },
                {
                    "name": "seller",
                    "title": "Seller",
                    "type": "`$ANY`"
                },
                {
                    "name": "sequence_number",
                    "title": "Sequence Number",
                    "type": "`$INTEGER`",
                    "short": "A monotonically increasing number assigned to invoices as they are created.",
                    "format": "int32"
                },
                {
                    "name": "shipping_address",
                    "title": "Shipping Address",
                    "type": "`$ANY`"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "short": "ID of the site to which the invoice belongs.",
                    "format": "int32"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$ANY`"
                },
                {
                    "name": "subscription_group_id",
                    "title": "Subscription Group Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "short": "ID of the subscription that generated the invoice.",
                    "format": "int32"
                },
                {
                    "name": "subtotal_amount",
                    "title": "Subtotal Amount",
                    "type": "`$STRING`",
                    "short": "Subtotal of the invoice, which is the sum of all line items before discounts or taxes."
                },
                {
                    "name": "tax_amount",
                    "title": "Tax Amount",
                    "type": "`$STRING`",
                    "short": "Total tax on the invoice."
                },
                {
                    "name": "taxes",
                    "title": "Taxes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "total_amount",
                    "title": "Total Amount",
                    "type": "`$STRING`",
                    "short": "The invoice total, which is `subtotal_amount - discount_amount + tax_amount`."
                },
                {
                    "name": "transaction_time",
                    "title": "Transaction Time",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "uid",
                    "title": "Uid",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the invoice."
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "void",
                    "title": "Void",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "invoice",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/customer_information/preview.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "customer_information"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "customer_information",
                                "preview.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "customer_information_preview",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/deliveries.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "deliveries.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "deliveries.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "delivery",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/issue.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "issue.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "issue.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "issue",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/payments.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "payments.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "payments.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/refunds.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "refunds.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "refunds.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "refund",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/reopen.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reopen.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "reopen.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reopen",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/{uid}/void.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "void.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "void.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "void",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/advance_invoice/issue.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "advance_invoice"
                                },
                                {
                                    "lit": "issue.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "advance_invoice",
                                "issue.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/advance_invoice/void.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "advance_invoice"
                                },
                                {
                                    "lit": "void.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "advance_invoice",
                                "void.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/invoices.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "invoices.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/payments.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "payments.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "payments.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/invoices/payments.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "payments.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "payments.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "payment"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/invoices.json",
                            "segments": [
                                {
                                    "lit": "invoices.json"
                                }
                            ],
                            "parts": [
                                "invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "consolidation_level",
                                        "orig": "consolidation_level",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "credit",
                                        "orig": "credit",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "custom_field",
                                        "orig": "custom_field",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            1,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "discount",
                                        "orig": "discount",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "line_item",
                                        "orig": "line_item",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "number",
                                        "orig": "number",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "1234",
                                            "1235"
                                        ]
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "payment",
                                        "orig": "payment",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            23,
                                            34
                                        ]
                                    },
                                    {
                                        "name": "refund",
                                        "orig": "refund",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription_group_uid",
                                        "orig": "subscription_group_uid",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "taxis",
                                        "orig": "taxis",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "consolidation_level",
                                    "credit",
                                    "custom_field",
                                    "customer_id",
                                    "date_field",
                                    "direction",
                                    "discount",
                                    "end_date",
                                    "end_datetime",
                                    "line_item",
                                    "number",
                                    "page",
                                    "payment",
                                    "per_page",
                                    "product_id",
                                    "refund",
                                    "sort",
                                    "start_date",
                                    "start_datetime",
                                    "status",
                                    "subscription_group_uid",
                                    "subscription_id",
                                    "taxis"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/credit_notes.json",
                            "segments": [
                                {
                                    "lit": "credit_notes.json"
                                }
                            ],
                            "parts": [
                                "credit_notes.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "application",
                                        "orig": "application",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "discount",
                                        "orig": "discount",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "line_item",
                                        "orig": "line_item",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "refund",
                                        "orig": "refund",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "taxis",
                                        "orig": "taxis",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "application",
                                    "date_field",
                                    "direction",
                                    "discount",
                                    "end_date",
                                    "end_datetime",
                                    "line_item",
                                    "page",
                                    "per_page",
                                    "refund",
                                    "start_date",
                                    "start_datetime",
                                    "subscription_id",
                                    "taxis"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/invoices/events.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "events.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "events.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "event_type",
                                        "orig": "event_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "invoice_uid",
                                        "orig": "invoice_uid",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    },
                                    {
                                        "name": "since_date",
                                        "orig": "since_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "since_id",
                                        "orig": "since_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "with_change_invoice_status",
                                        "orig": "with_change_invoice_status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "event",
                                "exist": [
                                    "event_type",
                                    "invoice_uid",
                                    "page",
                                    "per_page",
                                    "since_date",
                                    "since_id",
                                    "with_change_invoice_status"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/invoices/{invoice_uid}/segments.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "segments.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "segments.json"
                            ],
                            "rename": {
                                "param": {
                                    "invoice_uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "invoice_uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "$action": "segment",
                                "exist": [
                                    "direction",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/invoices/{batch_id}/rows.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rows.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "invoices",
                                "{id}",
                                "rows.json"
                            ],
                            "rename": {
                                "param": {
                                    "batch_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "$action": "row",
                                "exist": [
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/advance_invoice.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "advance_invoice.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "advance_invoice.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/credit_notes/{uid}.json",
                            "segments": [
                                {
                                    "lit": "credit_notes"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "credit_notes",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "uid"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/invoices/{uid}.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "uid"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/invoices/{uid}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "invoices",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "subscription_id",
                                    "uid"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/invoices/{uid}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "invoices",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.invoice`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "subscription_id",
                                    "uid"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/invoices/{uid}/customer_information.json",
                            "segments": [
                                {
                                    "lit": "invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "customer_information.json"
                                }
                            ],
                            "parts": [
                                "invoices",
                                "{id}",
                                "customer_information.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "customer_information",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "list_proforma_invoice": {
            "fields": [
                {
                    "name": "available_actions",
                    "title": "Available Actions",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "billing_address",
                    "title": "Billing Address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "collection_method",
                    "title": "Collection Method",
                    "type": "`$ANY`"
                },
                {
                    "name": "consolidation_level",
                    "title": "Consolidation Level",
                    "type": "`$ANY`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "credit_amount",
                    "title": "Credit Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "credits",
                    "title": "Credits",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "currency",
                    "title": "Currency",
                    "type": "`$STRING`"
                },
                {
                    "name": "custom_fields",
                    "title": "Custom Fields",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "customer",
                    "title": "Customer",
                    "type": "`$ANY`"
                },
                {
                    "name": "customer_id",
                    "title": "Customer Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "delivery_date",
                    "title": "Delivery Date",
                    "type": "`$STRING`",
                    "format": "date"
                },
                {
                    "name": "discount_amount",
                    "title": "Discount Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "discounts",
                    "title": "Discounts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "due_amount",
                    "title": "Due Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "line_items",
                    "title": "Line Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "memo",
                    "title": "Memo",
                    "type": "`$STRING`"
                },
                {
                    "name": "number",
                    "title": "Number",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "paid_amount",
                    "title": "Paid Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "payment_instructions",
                    "title": "Payment Instructions",
                    "type": "`$STRING`"
                },
                {
                    "name": "payments",
                    "title": "Payments",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "product_family_name",
                    "title": "Product Family Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_name",
                    "title": "Product Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "public_url",
                    "title": "Public Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "refund_amount",
                    "title": "Refund Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$ANY`"
                },
                {
                    "name": "seller",
                    "title": "Seller",
                    "type": "`$ANY`"
                },
                {
                    "name": "sequence_number",
                    "title": "Sequence Number",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "shipping_address",
                    "title": "Shipping Address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "subtotal_amount",
                    "title": "Subtotal Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "tax_amount",
                    "title": "Tax Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "taxes",
                    "title": "Taxes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "total_amount",
                    "title": "Total Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "uid",
                    "title": "Uid",
                    "type": "`$STRING`"
                }
            ],
            "name": "list_proforma_invoice",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "proforma_invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "credit",
                                        "orig": "credit",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "custom_field",
                                        "orig": "custom_field",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "discount",
                                        "orig": "discount",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "line_item",
                                        "orig": "line_item",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "payment",
                                        "orig": "payment",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "taxis",
                                        "orig": "taxis",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "credit",
                                    "custom_field",
                                    "direction",
                                    "discount",
                                    "end_date",
                                    "line_item",
                                    "page",
                                    "payment",
                                    "per_page",
                                    "start_date",
                                    "status",
                                    "subscription_id",
                                    "taxis"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_groups/{uid}/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "subscription_group_id"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{subscription_group_id}",
                                "proforma_invoices.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "subscription_group_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_group_id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "credit",
                                        "orig": "credit",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "custom_field",
                                        "orig": "custom_field",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "discount",
                                        "orig": "discount",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "line_item",
                                        "orig": "line_item",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "payment",
                                        "orig": "payment",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "taxis",
                                        "orig": "taxis",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "credit",
                                    "custom_field",
                                    "discount",
                                    "line_item",
                                    "payment",
                                    "subscription_group_id",
                                    "taxis"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription_group"
                    ],
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "list_sale_rep_item": {
            "fields": [
                {
                    "name": "full_name",
                    "title": "Full Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "mrr_data",
                    "title": "Mrr Data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "subscriptions_count",
                    "title": "Subscriptions Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "test_mode",
                    "title": "Test Mode",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "list_sale_rep_item",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/sellers/{seller_id}/sales_reps.json",
                            "segments": [
                                {
                                    "lit": "sellers"
                                },
                                {
                                    "var": "seller_id"
                                },
                                {
                                    "lit": "sales_reps.json"
                                }
                            ],
                            "parts": [
                                "sellers",
                                "{seller_id}",
                                "sales_reps.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "Bearer <<apiKey>>"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "seller_id",
                                        "orig": "seller_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "live_mode",
                                        "orig": "live_mode",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "live_mode",
                                    "page",
                                    "per_page",
                                    "seller_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "list_segment": {
            "fields": [
                {
                    "name": "component_id",
                    "title": "Component Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "event_based_billing_metric_id",
                    "title": "Event Based Billing Metric Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "price_point_id",
                    "title": "Price Point Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "prices",
                    "title": "Prices",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pricing_scheme",
                    "title": "Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_1_value",
                    "title": "Segment Property 1 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_2_value",
                    "title": "Segment Property 2 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_3_value",
                    "title": "Segment Property 3 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_4_value",
                    "title": "Segment Property 4 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segments",
                    "title": "Segments",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "list_segment",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "lit": "bulk.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments",
                                "bulk.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.segments`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "filter",
                                    "page",
                                    "per_page",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "lit": "bulk.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments",
                                "bulk.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "offer": {
            "fields": [
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "handle",
                    "title": "Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "offer",
                    "title": "Offer",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "offer_discounts",
                    "title": "Offer Discounts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "offer_items",
                    "title": "Offer Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "offer_signup_pages",
                    "title": "Offer Signup Pages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "offers",
                    "title": "Offers",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "product_family_id",
                    "title": "Product Family Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "product_family_name",
                    "title": "Product Family Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_id",
                    "title": "Product Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "product_name",
                    "title": "Product Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_price_in_cents",
                    "title": "Product Price In Cents",
                    "type": "`$INTEGER`",
                    "format": "int64"
                },
                {
                    "name": "product_price_point_id",
                    "title": "Product Price Point Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "product_price_point_name",
                    "title": "Product Price Point Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_revisable_number",
                    "title": "Product Revisable Number",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "offer",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/offers.json",
                            "segments": [
                                {
                                    "lit": "offers.json"
                                }
                            ],
                            "parts": [
                                "offers.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/offers.json",
                            "segments": [
                                {
                                    "lit": "offers.json"
                                }
                            ],
                            "parts": [
                                "offers.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "include_archived",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/offers/{offer_id}.json",
                            "segments": [
                                {
                                    "lit": "offers"
                                },
                                {
                                    "lit": "{offer_id}.json"
                                }
                            ],
                            "parts": [
                                "offers",
                                "{offer_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.offer`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "offer_id",
                                        "orig": "offer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "offer_id",
                                "exist": [
                                    "offer_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/offers/{offer_id}/archive.json",
                            "segments": [
                                {
                                    "lit": "offers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "archive.json"
                                }
                            ],
                            "parts": [
                                "offers",
                                "{id}",
                                "archive.json"
                            ],
                            "rename": {
                                "param": {
                                    "offer_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "offer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "archive",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/offers/{offer_id}/unarchive.json",
                            "segments": [
                                {
                                    "lit": "offers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "unarchive.json"
                                }
                            ],
                            "parts": [
                                "offers",
                                "{id}",
                                "unarchive.json"
                            ],
                            "rename": {
                                "param": {
                                    "offer_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "offer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "unarchive",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "one_time_token": {
            "fields": [],
            "name": "one_time_token",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/one_time_tokens/{chargify_token}.json",
                            "segments": [
                                {
                                    "lit": "one_time_tokens"
                                },
                                {
                                    "lit": "{chargify_token}.json"
                                }
                            ],
                            "parts": [
                                "one_time_tokens",
                                "{chargify_token}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.payment_profile`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "chargify_token",
                                        "orig": "chargify_token",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "chargify_token",
                                "exist": [
                                    "chargify_token"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "payment_profile": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "payment_profile",
                    "title": "Payment Profile",
                    "type": "`$OBJECT`",
                    "op": {
                        "list": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    }
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "payment_profile",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "subscription_group_id"
                                },
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "change_payment_profile.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{subscription_group_id}",
                                "payment_profiles",
                                "{id}",
                                "change_payment_profile.json"
                            ],
                            "rename": {
                                "param": {
                                    "payment_profile_id": "id",
                                    "uid": "subscription_group_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_group_id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "change_payment_profile",
                                "exist": [
                                    "id",
                                    "subscription_group_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "change_payment_profile.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "payment_profiles",
                                "{id}",
                                "change_payment_profile.json"
                            ],
                            "rename": {
                                "param": {
                                    "payment_profile_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "change_payment_profile",
                                "exist": [
                                    "id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/request_payment_profiles_update.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "request_payment_profiles_update.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "request_payment_profiles_update.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/payment_profiles.json",
                            "segments": [
                                {
                                    "lit": "payment_profiles.json"
                                }
                            ],
                            "parts": [
                                "payment_profiles.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/payment_profiles.json",
                            "segments": [
                                {
                                    "lit": "payment_profiles.json"
                                }
                            ],
                            "parts": [
                                "payment_profiles.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "customer_id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/payment_profiles/{payment_profile_id}.json",
                            "segments": [
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "lit": "{payment_profile_id}.json"
                                }
                            ],
                            "parts": [
                                "payment_profiles",
                                "{payment_profile_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "payment_profile_id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment_profile_id",
                                "exist": [
                                    "payment_profile_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "subscription_group_id"
                                },
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "lit": "{payment_profile_id}.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{subscription_group_id}",
                                "payment_profiles",
                                "{payment_profile_id}.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "subscription_group_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "payment_profile_id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_group_id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment_profile_id",
                                "exist": [
                                    "payment_profile_id",
                                    "subscription_group_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "lit": "{payment_profile_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "payment_profiles",
                                "{payment_profile_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "payment_profile_id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment_profile_id",
                                "exist": [
                                    "payment_profile_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/payment_profiles/{payment_profile_id}.json",
                            "segments": [
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "lit": "{payment_profile_id}.json"
                                }
                            ],
                            "parts": [
                                "payment_profiles",
                                "{payment_profile_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "payment_profile_id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment_profile_id",
                                "exist": [
                                    "payment_profile_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/bank_accounts/{bank_account_id}/verification.json",
                            "segments": [
                                {
                                    "lit": "bank_accounts"
                                },
                                {
                                    "var": "bank_account_id"
                                },
                                {
                                    "lit": "verification.json"
                                }
                            ],
                            "parts": [
                                "bank_accounts",
                                "{bank_account_id}",
                                "verification.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "bank_account_id",
                                        "orig": "bank_account_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "bank_account_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/payment_profiles/{payment_profile_id}.json",
                            "segments": [
                                {
                                    "lit": "payment_profiles"
                                },
                                {
                                    "lit": "{payment_profile_id}.json"
                                }
                            ],
                            "parts": [
                                "payment_profiles",
                                "{payment_profile_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "payment_profile_id",
                                        "orig": "payment_profile_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "payment_profile_id",
                                "exist": [
                                    "payment_profile_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription_group"
                    ],
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "prepayment": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "prepayment",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "prepayments"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "refunds.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "prepayments",
                                "{id}",
                                "refunds.json"
                            ],
                            "rename": {
                                "param": {
                                    "prepayment_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.prepayment`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "prepayment_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "refund",
                                "exist": [
                                    "id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "product": {
            "fields": [
                {
                    "name": "product",
                    "title": "Product",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "create": {
                            "type": "`$OBJECT`"
                        }
                    }
                }
            ],
            "name": "product",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families/{product_family_id}/products.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "products.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "products.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_family_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products.json",
                            "segments": [
                                {
                                    "lit": "products.json"
                                }
                            ],
                            "parts": [
                                "products.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "include_feature",
                                        "orig": "include_feature",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "include",
                                    "include_archived",
                                    "include_feature",
                                    "page",
                                    "per_page",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{product_family_id}/products.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "var": "product_family_id"
                                },
                                {
                                    "lit": "products.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{product_family_id}",
                                "products.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_archived",
                                        "orig": "include_archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "include",
                                    "include_archived",
                                    "page",
                                    "per_page",
                                    "product_family_id",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/{product_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "lit": "{product_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_feature",
                                        "orig": "include_feature",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "$action": "product_id",
                                "exist": [
                                    "include_feature",
                                    "product_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/handle/{api_handle}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "lit": "handle"
                                },
                                {
                                    "lit": "{api_handle}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "handle",
                                "{api_handle}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "api_handle",
                                        "orig": "api_handle",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "api_handle"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/products/{product_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "lit": "{product_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "product_id",
                                "exist": [
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/products/{product_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "lit": "{product_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "product": "`reqdata`"
                                },
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "product_id",
                                "exist": [
                                    "product_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product_family"
                    ]
                ]
            }
        },
        "product_family": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_family",
                    "title": "Product Family",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "product_family",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_families.json",
                            "segments": [
                                {
                                    "lit": "product_families.json"
                                }
                            ],
                            "parts": [
                                "product_families.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families.json",
                            "segments": [
                                {
                                    "lit": "product_families.json"
                                }
                            ],
                            "parts": [
                                "product_families.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "end_date",
                                    "end_datetime",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/product_families/{id}.json",
                            "segments": [
                                {
                                    "lit": "product_families"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "product_families",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "id",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "product_feature": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "product_feature",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/products/{product_id}/features/{id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "features"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "features",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "destroy_entitlement",
                                        "orig": "destroy_entitlement",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "destroy_entitlement",
                                    "id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product"
                    ]
                ]
            }
        },
        "product_price_point": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "price_point",
                    "title": "Price Point",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "create": {
                            "type": "`$OBJECT`"
                        },
                        "update": {
                            "type": "`$OBJECT`"
                        }
                    }
                },
                {
                    "name": "price_points",
                    "title": "Price Points",
                    "type": "`$ARRAY`",
                    "op": {
                        "list": {
                            "req": true,
                            "type": "`$ARRAY`"
                        }
                    }
                },
                {
                    "name": "product",
                    "title": "Product",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "product_price_point",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/product_price_points/{product_price_point_id}/currency_prices.json",
                            "segments": [
                                {
                                    "lit": "product_price_points"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "currency_prices.json"
                                }
                            ],
                            "parts": [
                                "product_price_points",
                                "{id}",
                                "currency_prices.json"
                            ],
                            "rename": {
                                "param": {
                                    "product_price_point_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "product_price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "currency_price",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/products/{product_id}/price_points.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "price_points.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{id}",
                                "price_points.json"
                            ],
                            "rename": {
                                "param": {
                                    "product_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "product_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/products/{product_id}/price_points/bulk.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "bulk.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "bulk.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/{product_id}/price_points.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "price_points.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{id}",
                                "price_points.json"
                            ],
                            "rename": {
                                "param": {
                                    "product_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "product_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "archived",
                                        "orig": "archived",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter_type",
                                        "orig": "filter_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "catalog",
                                            "default"
                                        ]
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "archived",
                                    "currency_price",
                                    "filter_type",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products_price_points.json",
                            "segments": [
                                {
                                    "lit": "products_price_points.json"
                                }
                            ],
                            "parts": [
                                "products_price_points.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "filter",
                                    "include",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/products/{product_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "currency_price",
                                        "orig": "currency_price",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "currency_price",
                                    "price_point_id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/products/{product_id}/price_points/{price_point_id}/default.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "default.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "{price_point_id}",
                                "default.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id",
                                    "product_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/products/{product_id}/price_points/{price_point_id}/unarchive.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "unarchive.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "{price_point_id}",
                                "unarchive.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/products/{product_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id",
                                    "product_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/products/{product_id}/price_points/{price_point_id}.json",
                            "segments": [
                                {
                                    "lit": "products"
                                },
                                {
                                    "var": "product_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "{price_point_id}.json"
                                }
                            ],
                            "parts": [
                                "products",
                                "{product_id}",
                                "price_points",
                                "{price_point_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "product_id",
                                        "orig": "product_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "price_point_id",
                                    "product_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/product_price_points/{product_price_point_id}/currency_prices.json",
                            "segments": [
                                {
                                    "lit": "product_price_points"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "currency_prices.json"
                                }
                            ],
                            "parts": [
                                "product_price_points",
                                "{id}",
                                "currency_prices.json"
                            ],
                            "rename": {
                                "param": {
                                    "product_price_point_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "product_price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "currency_price",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.product"
                    ],
                    [
                        "$.main.kit.entity.product"
                    ]
                ]
            }
        },
        "proforma_invoice": {
            "fields": [
                {
                    "name": "available_actions",
                    "title": "Available Actions",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "billing_address",
                    "title": "Billing Address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "collection_method",
                    "title": "Collection Method",
                    "type": "`$ANY`"
                },
                {
                    "name": "consolidation_level",
                    "title": "Consolidation Level",
                    "type": "`$ANY`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "credit_amount",
                    "title": "Credit Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "credits",
                    "title": "Credits",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "currency",
                    "title": "Currency",
                    "type": "`$STRING`"
                },
                {
                    "name": "custom_fields",
                    "title": "Custom Fields",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "customer",
                    "title": "Customer",
                    "type": "`$ANY`"
                },
                {
                    "name": "customer_id",
                    "title": "Customer Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "delivery_date",
                    "title": "Delivery Date",
                    "type": "`$STRING`",
                    "format": "date"
                },
                {
                    "name": "discount_amount",
                    "title": "Discount Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "discounts",
                    "title": "Discounts",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "due_amount",
                    "title": "Due Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "line_items",
                    "title": "Line Items",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "memo",
                    "title": "Memo",
                    "type": "`$STRING`"
                },
                {
                    "name": "number",
                    "title": "Number",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "paid_amount",
                    "title": "Paid Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "payment_instructions",
                    "title": "Payment Instructions",
                    "type": "`$STRING`"
                },
                {
                    "name": "payments",
                    "title": "Payments",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "product_family_name",
                    "title": "Product Family Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_name",
                    "title": "Product Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "public_url",
                    "title": "Public Url",
                    "type": "`$STRING`"
                },
                {
                    "name": "refund_amount",
                    "title": "Refund Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "role",
                    "title": "Role",
                    "type": "`$ANY`"
                },
                {
                    "name": "seller",
                    "title": "Seller",
                    "type": "`$ANY`"
                },
                {
                    "name": "sequence_number",
                    "title": "Sequence Number",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "shipping_address",
                    "title": "Shipping Address",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "subtotal_amount",
                    "title": "Subtotal Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "tax_amount",
                    "title": "Tax Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "taxes",
                    "title": "Taxes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "total_amount",
                    "title": "Total Amount",
                    "type": "`$STRING`"
                },
                {
                    "name": "uid",
                    "title": "Uid",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "proforma_invoice",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/proforma_invoices/{proforma_invoice_uid}/deliveries.json",
                            "segments": [
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "deliveries.json"
                                }
                            ],
                            "parts": [
                                "proforma_invoices",
                                "{id}",
                                "deliveries.json"
                            ],
                            "rename": {
                                "param": {
                                    "proforma_invoice_uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "proforma_invoice_uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "delivery",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/proforma_invoices/{proforma_invoice_uid}/void.json",
                            "segments": [
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "void.json"
                                }
                            ],
                            "parts": [
                                "proforma_invoices",
                                "{id}",
                                "void.json"
                            ],
                            "rename": {
                                "param": {
                                    "proforma_invoice_uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "proforma_invoice_uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "void",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "subscription_group_id"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{subscription_group_id}",
                                "proforma_invoices.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "subscription_group_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_group_id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_group_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "proforma_invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/proforma_invoices/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "proforma_invoices",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "preview",
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/proforma_invoices.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "proforma_invoices.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "proforma_invoices.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/proforma_invoices/{batch_id}/rows.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rows.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "proforma_invoices",
                                "{id}",
                                "rows.json"
                            ],
                            "rename": {
                                "param": {
                                    "batch_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "$action": "row",
                                "exist": [
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/proforma_invoices/{proforma_invoice_uid}.json",
                            "segments": [
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "lit": "{proforma_invoice_uid}.json"
                                }
                            ],
                            "parts": [
                                "proforma_invoices",
                                "{proforma_invoice_uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "proforma_invoice_uid",
                                        "orig": "proforma_invoice_uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "proforma_invoice_uid",
                                "exist": [
                                    "proforma_invoice_uid"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription_group"
                    ],
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "reason_code": {
            "fields": [
                {
                    "name": "code",
                    "title": "Code",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "position",
                    "title": "Position",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "reason_code",
                    "title": "Reason Code",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "site_id",
                    "title": "Site Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "reason_code",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/reason_codes.json",
                            "segments": [
                                {
                                    "lit": "reason_codes.json"
                                }
                            ],
                            "parts": [
                                "reason_codes.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.reason_code`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/reason_codes.json",
                            "segments": [
                                {
                                    "lit": "reason_codes.json"
                                }
                            ],
                            "parts": [
                                "reason_codes.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/reason_codes/{reason_code_id}.json",
                            "segments": [
                                {
                                    "lit": "reason_codes"
                                },
                                {
                                    "lit": "{reason_code_id}.json"
                                }
                            ],
                            "parts": [
                                "reason_codes",
                                "{reason_code_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.reason_code`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "reason_code_id",
                                        "orig": "reason_code_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reason_code_id",
                                "exist": [
                                    "reason_code_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/reason_codes/{reason_code_id}.json",
                            "segments": [
                                {
                                    "lit": "reason_codes"
                                },
                                {
                                    "lit": "{reason_code_id}.json"
                                }
                            ],
                            "parts": [
                                "reason_codes",
                                "{reason_code_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "reason_code_id",
                                        "orig": "reason_code_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reason_code_id",
                                "exist": [
                                    "reason_code_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/reason_codes/{reason_code_id}.json",
                            "segments": [
                                {
                                    "lit": "reason_codes"
                                },
                                {
                                    "lit": "{reason_code_id}.json"
                                }
                            ],
                            "parts": [
                                "reason_codes",
                                "{reason_code_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "reason_code": "`reqdata`"
                                },
                                "res": "`body.reason_code`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "reason_code_id",
                                        "orig": "reason_code_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reason_code_id",
                                "exist": [
                                    "reason_code_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "referral_code": {
            "fields": [],
            "name": "referral_code",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/referral_codes/validate.json",
                            "segments": [
                                {
                                    "lit": "referral_codes"
                                },
                                {
                                    "lit": "validate.json"
                                }
                            ],
                            "parts": [
                                "referral_codes",
                                "validate.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "code",
                                        "orig": "code",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "validate",
                                "exist": [
                                    "code"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sale_rep_setting": {
            "fields": [
                {
                    "name": "customer_name",
                    "title": "Customer Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "sales_rep_id",
                    "title": "Sales Rep Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "sales_rep_name",
                    "title": "Sales Rep Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "site_link",
                    "title": "Site Link",
                    "type": "`$STRING`"
                },
                {
                    "name": "site_name",
                    "title": "Site Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "subscription_mrr",
                    "title": "Subscription Mrr",
                    "type": "`$STRING`"
                }
            ],
            "name": "sale_rep_setting",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/sellers/{seller_id}/sales_commission_settings.json",
                            "segments": [
                                {
                                    "lit": "sellers"
                                },
                                {
                                    "var": "seller_id"
                                },
                                {
                                    "lit": "sales_commission_settings.json"
                                }
                            ],
                            "parts": [
                                "sellers",
                                "{seller_id}",
                                "sales_commission_settings.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "Bearer <<apiKey>>"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "seller_id",
                                        "orig": "seller_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "live_mode",
                                        "orig": "live_mode",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "live_mode",
                                    "page",
                                    "per_page",
                                    "seller_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sales_commission": {
            "fields": [
                {
                    "name": "full_name",
                    "title": "Full Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "subscriptions",
                    "title": "Subscriptions",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "subscriptions_count",
                    "title": "Subscriptions Count",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "test_mode",
                    "title": "Test Mode",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sales_commission",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/sellers/{seller_id}/sales_reps/{sales_rep_id}.json",
                            "segments": [
                                {
                                    "lit": "sellers"
                                },
                                {
                                    "var": "seller_id"
                                },
                                {
                                    "lit": "sales_reps"
                                },
                                {
                                    "lit": "{sales_rep_id}.json"
                                }
                            ],
                            "parts": [
                                "sellers",
                                "{seller_id}",
                                "sales_reps",
                                "{sales_rep_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "authorization",
                                        "orig": "authorization",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "example": "Bearer <<apiKey>>"
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "sales_rep_id",
                                        "orig": "sales_rep_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "seller_id",
                                        "orig": "seller_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "live_mode",
                                        "orig": "live_mode",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "authorization",
                                    "live_mode",
                                    "page",
                                    "per_page",
                                    "sales_rep_id",
                                    "seller_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "segment": {
            "fields": [
                {
                    "name": "component_id",
                    "title": "Component Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "event_based_billing_metric_id",
                    "title": "Event Based Billing Metric Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "price_point_id",
                    "title": "Price Point Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "prices",
                    "title": "Prices",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pricing_scheme",
                    "title": "Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_1_value",
                    "title": "Segment Property 1 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_2_value",
                    "title": "Segment Property 2 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_3_value",
                    "title": "Segment Property 3 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "segment_property_4_value",
                    "title": "Segment Property 4 Value",
                    "type": "`$ANY`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "segment",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.segment`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
                            "segments": [
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "var": "price_point_id"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "components",
                                "{component_id}",
                                "price_points",
                                "{price_point_id}",
                                "segments",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": {
                                    "segment": "`reqdata`"
                                },
                                "res": "`body.segment`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$NUMBER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "id",
                                "exist": [
                                    "component_id",
                                    "id",
                                    "price_point_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "signup_proforma_preview": {
            "fields": [],
            "name": "signup_proforma_preview",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/proforma_invoices/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "proforma_invoices"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "proforma_invoices",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.proforma_invoice_preview`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "include"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "site": {
            "fields": [
                {
                    "name": "chargify_js_keys",
                    "title": "Chargify Js Keys",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "site",
                    "title": "Site",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "site",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/sites/clear_data.json",
                            "segments": [
                                {
                                    "lit": "sites"
                                },
                                {
                                    "lit": "clear_data.json"
                                }
                            ],
                            "parts": [
                                "sites",
                                "clear_data.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "cleanup_scope",
                                        "orig": "cleanup_scope",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "clear_data",
                                "exist": [
                                    "cleanup_scope"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/chargify_js_keys.json",
                            "segments": [
                                {
                                    "lit": "chargify_js_keys.json"
                                }
                            ],
                            "parts": [
                                "chargify_js_keys.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/site.json",
                            "segments": [
                                {
                                    "lit": "site.json"
                                }
                            ],
                            "parts": [
                                "site.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription": {
            "fields": [
                {
                    "name": "activated_at",
                    "title": "Activated At",
                    "type": "`$STRING`",
                    "short": "Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial)",
                    "format": "date-time"
                },
                {
                    "name": "automatically_resume_at",
                    "title": "Automatically Resume At",
                    "type": "`$STRING`",
                    "short": "The date the subscription is scheduled to automatically resume from the on_hold state.",
                    "format": "date-time"
                },
                {
                    "name": "balance_in_cents",
                    "title": "Balance In Cents",
                    "type": "`$INTEGER`",
                    "short": "Gives the current outstanding subscription balance in the number of cents.",
                    "format": "int64"
                },
                {
                    "name": "bank_account",
                    "title": "Bank Account",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "cancel_at_end_of_period",
                    "title": "Cancel At End Of Period",
                    "type": "`$BOOLEAN`",
                    "short": "Whether or not the subscription will (or has) canceled at the end of the period."
                },
                {
                    "name": "canceled_at",
                    "title": "Canceled At",
                    "type": "`$STRING`",
                    "short": "The timestamp of the most recent cancellation",
                    "format": "date-time"
                },
                {
                    "name": "cancellation_message",
                    "title": "Cancellation Message",
                    "type": "`$STRING`",
                    "short": "Seller-provided reason for, or note about, the cancellation."
                },
                {
                    "name": "cancellation_method",
                    "title": "Cancellation Method",
                    "type": "`$ANY`"
                },
                {
                    "name": "coupon_code",
                    "title": "Coupon Code",
                    "type": "`$STRING`",
                    "short": "(deprecated) The coupon code of the single coupon currently applied to the subscription.",
                    "deprecated": true
                },
                {
                    "name": "coupon_codes",
                    "title": "Coupon Codes",
                    "type": "`$ARRAY`",
                    "short": "An array for all the coupons attached to the subscription."
                },
                {
                    "name": "coupon_use_count",
                    "title": "Coupon Use Count",
                    "type": "`$INTEGER`",
                    "short": "(deprecated) How many times the subscription's single coupon has been used.",
                    "deprecated": true,
                    "format": "int32"
                },
                {
                    "name": "coupon_uses_allowed",
                    "title": "Coupon Uses Allowed",
                    "type": "`$INTEGER`",
                    "short": "(deprecated) How many times the subscription's single coupon may be used.",
                    "deprecated": true,
                    "format": "int32"
                },
                {
                    "name": "coupons",
                    "title": "Coupons",
                    "type": "`$ARRAY`",
                    "short": "Additional coupon data."
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "short": "The creation date for this subscription",
                    "format": "date-time"
                },
                {
                    "name": "credit_balance_in_cents",
                    "title": "Credit Balance In Cents",
                    "type": "`$INTEGER`",
                    "format": "int64"
                },
                {
                    "name": "credit_card",
                    "title": "Credit Card",
                    "type": "`$ANY`"
                },
                {
                    "name": "currency",
                    "title": "Currency",
                    "type": "`$STRING`"
                },
                {
                    "name": "current_billing_amount_in_cents",
                    "title": "Current Billing Amount In Cents",
                    "type": "`$INTEGER`",
                    "short": "The balance in cents plus the estimated renewal amount in cents.",
                    "format": "int64"
                },
                {
                    "name": "current_period_ends_at",
                    "title": "Current Period Ends At",
                    "type": "`$STRING`",
                    "short": "Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur)",
                    "format": "date-time"
                },
                {
                    "name": "current_period_started_at",
                    "title": "Current Period Started At",
                    "type": "`$STRING`",
                    "short": "Timestamp relating to the start of the current (recurring) period",
                    "format": "date-time"
                },
                {
                    "name": "customer",
                    "title": "Customer",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "delayed_cancel_at",
                    "title": "Delayed Cancel At",
                    "type": "`$STRING`",
                    "short": "Timestamp for when the subscription is currently set to cancel.",
                    "format": "date-time"
                },
                {
                    "name": "dunning_communication_delay_enabled",
                    "title": "Dunning Communication Delay Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute."
                },
                {
                    "name": "dunning_communication_delay_time_zone",
                    "title": "Dunning Communication Delay Time Zone",
                    "type": "`$STRING`",
                    "short": "Time zone for the Dunning Communication Delay feature."
                },
                {
                    "name": "expires_at",
                    "title": "Expires At",
                    "type": "`$STRING`",
                    "short": "Timestamp giving the expiration date of this subscription (if any)",
                    "format": "date-time"
                },
                {
                    "name": "group",
                    "title": "Group",
                    "type": "`$ANY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "The subscription unique id within Chargify.",
                    "format": "int32"
                },
                {
                    "name": "locale",
                    "title": "Locale",
                    "type": "`$STRING`"
                },
                {
                    "name": "net_terms",
                    "title": "Net Terms",
                    "type": "`$INTEGER`",
                    "short": "On Relationship Invoicing, the number of days before a renewal invoice is due.",
                    "format": "int32"
                },
                {
                    "name": "next_assessment_at",
                    "title": "Next Assessment At",
                    "type": "`$STRING`",
                    "short": "Timestamp that indicates when capture of payment will be tried or retried.",
                    "format": "date-time"
                },
                {
                    "name": "next_product_handle",
                    "title": "Next Product Handle",
                    "type": "`$STRING`",
                    "short": "If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal."
                },
                {
                    "name": "next_product_id",
                    "title": "Next Product Id",
                    "type": "`$INTEGER`",
                    "short": "If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal.",
                    "format": "int32"
                },
                {
                    "name": "next_product_price_point_id",
                    "title": "Next Product Price Point Id",
                    "type": "`$INTEGER`",
                    "short": "If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal.",
                    "format": "int32"
                },
                {
                    "name": "offer_id",
                    "title": "Offer Id",
                    "type": "`$INTEGER`",
                    "short": "The ID of the offer associated with the subscription.",
                    "format": "int32"
                },
                {
                    "name": "on_hold_at",
                    "title": "On Hold At",
                    "type": "`$STRING`",
                    "short": "The timestamp of the most recent on hold action.",
                    "format": "date-time"
                },
                {
                    "name": "payer_id",
                    "title": "Payer Id",
                    "type": "`$INTEGER`",
                    "short": "On Relationship Invoicing, the ID of the individual paying for the subscription.",
                    "format": "int32"
                },
                {
                    "name": "payment_collection_method",
                    "title": "Payment Collection Method",
                    "type": "`$ANY`"
                },
                {
                    "name": "payment_type",
                    "title": "Payment Type",
                    "type": "`$STRING`",
                    "short": "The payment profile type for the active profile on file."
                },
                {
                    "name": "prepaid_configuration",
                    "title": "Prepaid Configuration",
                    "type": "`$ANY`"
                },
                {
                    "name": "prepaid_dunning",
                    "title": "Prepaid Dunning",
                    "type": "`$BOOLEAN`",
                    "short": "Boolean representing whether the subscription is prepaid and currently in dunning."
                },
                {
                    "name": "prepayment_balance_in_cents",
                    "title": "Prepayment Balance In Cents",
                    "type": "`$INTEGER`",
                    "format": "int64"
                },
                {
                    "name": "previous_state",
                    "title": "Previous State",
                    "type": "`$ANY`"
                },
                {
                    "name": "product",
                    "title": "Product",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "product_price_in_cents",
                    "title": "Product Price In Cents",
                    "type": "`$INTEGER`",
                    "short": "(Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed.",
                    "format": "int64"
                },
                {
                    "name": "product_price_point_id",
                    "title": "Product Price Point Id",
                    "type": "`$INTEGER`",
                    "short": "The product price point currently subscribed to.",
                    "format": "int32"
                },
                {
                    "name": "product_price_point_type",
                    "title": "Product Price Point Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "product_version_number",
                    "title": "Product Version Number",
                    "type": "`$INTEGER`",
                    "short": "The version of the product for the subscription.",
                    "format": "int32"
                },
                {
                    "name": "reason_code",
                    "title": "Reason Code",
                    "type": "`$STRING`",
                    "short": "The churn reason code associated to a canceled subscription."
                },
                {
                    "name": "receives_invoice_emails",
                    "title": "Receives Invoice Emails",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "reference",
                    "title": "Reference",
                    "type": "`$STRING`",
                    "short": "The reference value (provided by your app) for the subscription itself."
                },
                {
                    "name": "referral_code",
                    "title": "Referral Code",
                    "type": "`$STRING`",
                    "short": "The subscription's unique code that can be given to referrals."
                },
                {
                    "name": "scheduled_cancellation_at",
                    "title": "Scheduled Cancellation At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "self_service_page_token",
                    "title": "Self Service Page Token",
                    "type": "`$STRING`",
                    "short": "Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided."
                },
                {
                    "name": "signup_payment_id",
                    "title": "Signup Payment Id",
                    "type": "`$INTEGER`",
                    "short": "The ID of the transaction that generated the revenue",
                    "format": "int32"
                },
                {
                    "name": "signup_revenue",
                    "title": "Signup Revenue",
                    "type": "`$STRING`",
                    "short": "The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00)"
                },
                {
                    "name": "snap_day",
                    "title": "Snap Day",
                    "type": "`$STRING`",
                    "short": "A day of month that subscription will be processed on."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$ANY`"
                },
                {
                    "name": "stored_credential_transaction_id",
                    "title": "Stored Credential Transaction Id",
                    "type": "`$INTEGER`",
                    "short": "For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer.",
                    "format": "int32"
                },
                {
                    "name": "subscription",
                    "title": "Subscription",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "total_revenue_in_cents",
                    "title": "Total Revenue In Cents",
                    "type": "`$INTEGER`",
                    "short": "Gives the total revenue from the subscription in the number of cents.",
                    "format": "int64"
                },
                {
                    "name": "trial_ended_at",
                    "title": "Trial Ended At",
                    "type": "`$STRING`",
                    "short": "Timestamp for when the trial period (if any) ended",
                    "format": "date-time"
                },
                {
                    "name": "trial_started_at",
                    "title": "Trial Started At",
                    "type": "`$STRING`",
                    "short": "Timestamp for when the trial period (if any) began",
                    "format": "date-time"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "short": "The date of last update for this subscription",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/purge.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "purge.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "purge.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscription`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "ack",
                                        "orig": "ack",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "cascade",
                                        "orig": "cascade",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "customer",
                                            "payment_profile"
                                        ]
                                    }
                                ]
                            },
                            "select": {
                                "$action": "purge",
                                "exist": [
                                    "ack",
                                    "cascade",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/add_coupon.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "add_coupon.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "add_coupon.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "code",
                                        "orig": "code",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "add_coupon",
                                "exist": [
                                    "code",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/cancel_dunning.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "cancel_dunning.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "cancel_dunning.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscription`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "cancel_dunning",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/prepaid_configurations.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prepaid_configurations.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "prepaid_configurations.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prepaid_configuration",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions.json",
                            "segments": [
                                {
                                    "lit": "subscriptions.json"
                                }
                            ],
                            "parts": [
                                "subscriptions.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "preview"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions.json",
                            "segments": [
                                {
                                    "lit": "subscriptions.json"
                                }
                            ],
                            "parts": [
                                "subscriptions.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "branding_theme_id",
                                        "orig": "branding_theme_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "collection_method",
                                        "orig": "collection_method",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "coupon",
                                        "orig": "coupon",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "coupon_code",
                                        "orig": "coupon_code",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "currency",
                                        "orig": "currency",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "dunning_exemption",
                                        "orig": "dunning_exemption",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "group_status",
                                        "orig": "group_status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "self_service_page_token"
                                        ]
                                    },
                                    {
                                        "name": "metadata",
                                        "orig": "metadata",
                                        "type": "`$OBJECT`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "payment_gateway",
                                        "orig": "payment_gateway",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "product",
                                        "orig": "product",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "product_price_point_id",
                                        "orig": "product_price_point_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "q",
                                        "orig": "q",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "q_scope",
                                        "orig": "q_scope",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "branding_theme_id",
                                    "collection_method",
                                    "coupon",
                                    "coupon_code",
                                    "currency",
                                    "customer_id",
                                    "date_field",
                                    "direction",
                                    "dunning_exemption",
                                    "end_date",
                                    "end_datetime",
                                    "group_status",
                                    "include",
                                    "metadata",
                                    "page",
                                    "payment_gateway",
                                    "per_page",
                                    "product",
                                    "product_price_point_id",
                                    "q",
                                    "q_scope",
                                    "sort",
                                    "start_date",
                                    "start_datetime",
                                    "state"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api_exports/subscriptions/{batch_id}/rows.json",
                            "segments": [
                                {
                                    "lit": "api_exports"
                                },
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "rows.json"
                                }
                            ],
                            "parts": [
                                "api_exports",
                                "subscriptions",
                                "{id}",
                                "rows.json"
                            ],
                            "rename": {
                                "param": {
                                    "batch_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "batch_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "$action": "row",
                                "exist": [
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customers/{customer_id}/subscriptions.json",
                            "segments": [
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "subscriptions.json"
                                }
                            ],
                            "parts": [
                                "customers",
                                "{customer_id}",
                                "subscriptions.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "customer_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "{subscription_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "coupons",
                                            "self_service_page_token"
                                        ]
                                    }
                                ]
                            },
                            "select": {
                                "$action": "subscription_id",
                                "exist": [
                                    "include",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/lookup.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "lookup.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "lookup.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscription`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "reference",
                                        "orig": "reference",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "lookup",
                                "exist": [
                                    "reference"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/remove_coupon.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "remove_coupon.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "remove_coupon.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "coupon_code",
                                        "orig": "coupon_code",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "remove_coupon",
                                "exist": [
                                    "coupon_code",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/activate.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "activate.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "activate.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscription`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "activate",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/override.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "override.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "override.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "override",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "{subscription_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "subscription_id",
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.customer"
                    ]
                ]
            }
        },
        "subscription_component": {
            "fields": [
                {
                    "name": "allocated_quantity",
                    "title": "Allocated Quantity",
                    "type": "`$ANY`",
                    "short": "For Quantity-based components: The current allocation for the component on the given subscription."
                },
                {
                    "name": "allocation",
                    "title": "Allocation",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "allocation_preview",
                    "title": "Allocation Preview",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "allow_fractional_quantities",
                    "title": "Allow Fractional Quantities",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "archived_at",
                    "title": "Archived At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "component",
                    "title": "Component",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "component_handle",
                    "title": "Component Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "component_id",
                    "title": "Component Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "currency",
                    "title": "Currency",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`"
                },
                {
                    "name": "display_on_hosted_page",
                    "title": "Display On Hosted Page",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "downgrade_credit",
                    "title": "Downgrade Credit",
                    "type": "`$ANY`"
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "(for on/off components) indicates if the component is enabled for the subscription."
                },
                {
                    "name": "historic_usages",
                    "title": "Historic Usages",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "interval",
                    "title": "Interval",
                    "type": "`$INTEGER`",
                    "short": "The numerical interval.",
                    "format": "int32"
                },
                {
                    "name": "interval_unit",
                    "title": "Interval Unit",
                    "type": "`$ANY`"
                },
                {
                    "name": "kind",
                    "title": "Kind",
                    "type": "`$ANY`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "price_point_handle",
                    "title": "Price Point Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "price_point_id",
                    "title": "Price Point Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "price_point_name",
                    "title": "Price Point Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "price_point_type",
                    "title": "Price Point Type",
                    "type": "`$ANY`"
                },
                {
                    "name": "pricing_scheme",
                    "title": "Pricing Scheme",
                    "type": "`$ANY`"
                },
                {
                    "name": "product_family_handle",
                    "title": "Product Family Handle",
                    "type": "`$STRING`"
                },
                {
                    "name": "product_family_id",
                    "title": "Product Family Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "recurring",
                    "title": "Recurring",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "subscription",
                    "title": "Subscription",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "unit_balance",
                    "title": "Unit Balance",
                    "type": "`$ANY`"
                },
                {
                    "name": "unit_name",
                    "title": "Unit Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "upgrade_charge",
                    "title": "Upgrade Charge",
                    "type": "`$ANY`"
                },
                {
                    "name": "usage",
                    "title": "Usage",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "use_site_exchange_rate",
                    "title": "Use Site Exchange Rate",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_component",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/events/{api_handle}.json",
                            "segments": [
                                {
                                    "lit": "events"
                                },
                                {
                                    "lit": "{api_handle}.json"
                                }
                            ],
                            "parts": [
                                "events",
                                "{api_handle}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "api_handle",
                                        "orig": "api_handle",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "store_uid",
                                        "orig": "store_uid",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "api_handle",
                                    "store_uid"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/events/{api_handle}/bulk.json",
                            "segments": [
                                {
                                    "lit": "events"
                                },
                                {
                                    "var": "api_handle"
                                },
                                {
                                    "lit": "bulk.json"
                                }
                            ],
                            "parts": [
                                "events",
                                "{api_handle}",
                                "bulk.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "api_handle",
                                        "orig": "api_handle",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "store_uid",
                                        "orig": "store_uid",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "api_handle",
                                    "store_uid"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json",
                            "segments": [
                                {
                                    "lit": "event_based_billing"
                                },
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "activate.json"
                                }
                            ],
                            "parts": [
                                "event_based_billing",
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "activate.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json",
                            "segments": [
                                {
                                    "lit": "event_based_billing"
                                },
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "deactivate.json"
                                }
                            ],
                            "parts": [
                                "event_based_billing",
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "deactivate.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "allocations.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "allocations.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id_or_reference"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "usages.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id_or_reference}",
                                "components",
                                "{component_id}",
                                "usages.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id_or_reference",
                                        "orig": "subscription_id_or_reference",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "subscription_id_or_reference"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/price_points.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "price_points.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "price_points.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "price_points.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/allocations/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "allocations"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "allocations",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/price_points/reset.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "price_points"
                                },
                                {
                                    "lit": "reset.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "price_points",
                                "reset.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions_components.json",
                            "segments": [
                                {
                                    "lit": "subscriptions_components.json"
                                }
                            ],
                            "parts": [
                                "subscriptions_components.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscriptions_components`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            1,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            1,
                                            2,
                                            3
                                        ]
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "direction",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "include",
                                    "page",
                                    "per_page",
                                    "price_point_id",
                                    "product_family_id",
                                    "sort",
                                    "start_date",
                                    "start_datetime",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/components.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "components.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "components.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "date_field",
                                        "orig": "date_field",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "end_datetime",
                                        "orig": "end_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "in_use",
                                        "orig": "in_use",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "subscription",
                                            "historic_usages"
                                        ]
                                    },
                                    {
                                        "name": "price_point_id",
                                        "orig": "price_point_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "product_family_id",
                                        "orig": "product_family_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            1,
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "start_datetime",
                                        "orig": "start_datetime",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "date_field",
                                    "direction",
                                    "end_date",
                                    "end_datetime",
                                    "filter",
                                    "id",
                                    "in_use",
                                    "include",
                                    "price_point_id",
                                    "product_family_id",
                                    "sort",
                                    "start_date",
                                    "start_datetime"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/components/{component_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "lit": "{component_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "allocations"
                                },
                                {
                                    "lit": "{allocation_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "allocations",
                                "{allocation_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "content_type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "reqd": true
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "allocation_id",
                                        "orig": "allocation_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "allocation_id",
                                    "component_id",
                                    "content_type",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "allocations"
                                },
                                {
                                    "lit": "{allocation_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "components",
                                "{component_id}",
                                "allocations",
                                "{allocation_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "allocation_id",
                                        "orig": "allocation_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "allocation_id",
                                    "component_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.event"
                    ],
                    [
                        "$.main.kit.entity.subscription"
                    ],
                    [
                        "$.main.kit.entity.subscription",
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "subscription_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "subscription_group",
                    "title": "Subscription Group",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "subscription_groups",
                    "title": "Subscription Groups",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_group",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/group.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "group.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "group.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_groups.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "account_balances"
                                        ]
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "include",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_groups/{uid}.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include",
                                        "orig": "include",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "current_billing_amount_in_cents"
                                        ]
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "include",
                                    "uid"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_groups/lookup.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "lit": "lookup.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "lookup.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "lookup",
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/group.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "group.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "group.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscription_groups/{uid}.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "uid"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscription_groups/{uid}.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "lit": "{uid}.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{uid}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "uid",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "uid",
                                "exist": [
                                    "uid"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_group_invoice_account": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_group_invoice_account",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/prepayments.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prepayments.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "prepayments.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prepayments.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/service_credit_deductions.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "service_credit_deductions.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "service_credit_deductions.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "service_credit_deductions.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/service_credits.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "service_credits.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "service_credits.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "service_credits.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscription_groups/{uid}/prepayments.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prepayments.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "prepayments.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prepayments.json",
                                "exist": [
                                    "filter",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_group_signup": {
            "fields": [],
            "name": "subscription_group_signup",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/signup.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "lit": "signup.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "signup.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_group_status": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_group_status",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/cancel.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "cancel.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "cancel.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "cancel.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/delayed_cancel.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "delayed_cancel.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "delayed_cancel.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "delayed_cancel.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscription_groups/{uid}/reactivate.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reactivate.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "reactivate.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reactivate.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscription_groups/{uid}/delayed_cancel.json",
                            "segments": [
                                {
                                    "lit": "subscription_groups"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "delayed_cancel.json"
                                }
                            ],
                            "parts": [
                                "subscription_groups",
                                "{id}",
                                "delayed_cancel.json"
                            ],
                            "rename": {
                                "param": {
                                    "uid": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "uid",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "delayed_cancel.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_invoice_account": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "service_credits",
                    "title": "Service Credits",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_invoice_account",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/prepayments.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prepayments.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "prepayments.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prepayments.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/service_credit_deductions.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "service_credit_deductions.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "service_credit_deductions.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "service_credit_deductions.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/service_credits.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "service_credits.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "service_credits.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "service_credits.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/service_credits/list.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "service_credits"
                                },
                                {
                                    "lit": "list.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "service_credits",
                                "list.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "page",
                                    "per_page",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/prepayments.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "prepayments.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "prepayments.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "$action": "prepayments.json",
                                "exist": [
                                    "filter",
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "subscription_mrr": {
            "fields": [
                {
                    "name": "breakouts",
                    "title": "Breakouts",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "mrr_amount_in_cents",
                    "title": "Mrr Amount In Cents",
                    "type": "`$INTEGER`",
                    "req": true,
                    "format": "int64"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "req": true,
                    "format": "int32"
                }
            ],
            "name": "subscription_mrr",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions_mrr.json",
                            "segments": [
                                {
                                    "lit": "subscriptions_mrr.json"
                                }
                            ],
                            "parts": [
                                "subscriptions_mrr.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.subscriptions_mrr`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "at_time",
                                        "orig": "at_time",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "at_time=2022-01-10T10:00:00-05:00"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "at_time",
                                    "direction",
                                    "filter",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_note": {
            "fields": [
                {
                    "name": "body",
                    "title": "Body",
                    "type": "`$STRING`"
                },
                {
                    "name": "created_at",
                    "title": "Created At",
                    "type": "`$STRING`",
                    "format": "date-time"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "note",
                    "title": "Note",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "sticky",
                    "title": "Sticky",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "subscription_id",
                    "title": "Subscription Id",
                    "type": "`$INTEGER`",
                    "format": "int32"
                },
                {
                    "name": "updated_at",
                    "title": "Updated At",
                    "type": "`$STRING`",
                    "format": "date-time"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_note",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/notes.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "notes.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "notes.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.note`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/notes.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "notes.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "notes.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "notes"
                                },
                                {
                                    "lit": "{note_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "notes",
                                "{note_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "note_id",
                                        "orig": "note_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "note_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "notes"
                                },
                                {
                                    "lit": "{note_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "notes",
                                "{note_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "note_id",
                                        "orig": "note_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "note_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "notes"
                                },
                                {
                                    "lit": "{note_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "notes",
                                "{note_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.note`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "note_id",
                                        "orig": "note_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "note_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "subscription_product": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "migration",
                    "title": "Migration",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_product",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/migrations.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "migrations.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "migrations.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "migrations.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/migrations/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "migrations"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "migrations",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "subscription_renewal": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "scheduled_renewal_configuration",
                    "title": "Scheduled Renewal Configuration",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "scheduled_renewal_configuration_item",
                    "title": "Scheduled Renewal Configuration Item",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_renewal",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "configuration_items.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "configuration_items.json"
                            ],
                            "rename": {
                                "param": {
                                    "scheduled_renewals_configuration_id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "scheduled_renewals_configuration_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "scheduled_renewals.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "scheduled_renewals.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "scheduled_renewals.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "scheduled_renewals.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "scheduled_renewals.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "scheduled_renewals.json",
                                "exist": [
                                    "id",
                                    "status"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "configuration_items"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "configuration_items",
                                "{id}.json"
                            ],
                            "rename": {
                                "param": {
                                    "scheduled_renewals_configuration_id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "scheduled_renewals_configuration_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "configuration_items"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "configuration_items",
                                "{id}.json"
                            ],
                            "rename": {
                                "param": {
                                    "scheduled_renewals_configuration_id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "scheduled_renewals_configuration_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "lit": "{id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "cancel.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "cancel.json"
                            ],
                            "rename": {
                                "param": {
                                    "id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "immediate_lock_in.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "immediate_lock_in.json"
                            ],
                            "rename": {
                                "param": {
                                    "id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "schedule_lock_in.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "schedule_lock_in.json"
                            ],
                            "rename": {
                                "param": {
                                    "id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "scheduled_renewals"
                                },
                                {
                                    "var": "scheduled_renewal_id"
                                },
                                {
                                    "lit": "unpublish.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "scheduled_renewals",
                                "{scheduled_renewal_id}",
                                "unpublish.json"
                            ],
                            "rename": {
                                "param": {
                                    "id": "scheduled_renewal_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "scheduled_renewal_id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "scheduled_renewal_id",
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ],
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "subscription_status": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "renewal_preview",
                    "title": "Renewal Preview",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_status",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/resume.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "resume.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "resume.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "calendar_billing_'resumption_charge'",
                                        "orig": "calendar_billing_'resumption_charge'",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "resume.json",
                                "exist": [
                                    "calendar_billing_'resumption_charge'",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/hold.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "hold.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "hold.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "hold.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/subscriptions/{subscription_id}/renewals/preview.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id"
                                },
                                {
                                    "lit": "renewals"
                                },
                                {
                                    "lit": "preview.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}",
                                "renewals",
                                "preview.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "subscription_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "lit": "{subscription_id}.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "header": [
                                    {
                                        "name": "content_type",
                                        "orig": "content_type",
                                        "type": "`$STRING`",
                                        "kind": "header",
                                        "reqd": true
                                    }
                                ],
                                "params": [
                                    {
                                        "name": "subscription_id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "content_type",
                                    "subscription_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/subscriptions/{subscription_id}/delayed_cancel.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "delayed_cancel.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "delayed_cancel.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "delayed_cancel.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/hold.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "hold.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "hold.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "hold.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/reactivate.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "reactivate.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "reactivate.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "reactivate.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/subscriptions/{subscription_id}/retry.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "retry.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{id}",
                                "retry.json"
                            ],
                            "rename": {
                                "param": {
                                    "subscription_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "subscription_id",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "retry.json",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription"
                    ]
                ]
            }
        },
        "usage": {
            "fields": [
                {
                    "name": "usage",
                    "title": "Usage",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "usage",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
                            "segments": [
                                {
                                    "lit": "subscriptions"
                                },
                                {
                                    "var": "subscription_id_or_reference"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "component_id"
                                },
                                {
                                    "lit": "usages.json"
                                }
                            ],
                            "parts": [
                                "subscriptions",
                                "{subscription_id_or_reference}",
                                "components",
                                "{component_id}",
                                "usages.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "component_id",
                                        "orig": "component_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "subscription_id_or_reference",
                                        "orig": "subscription_id_or_reference",
                                        "type": "`$ANY`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "max_id",
                                        "orig": "max_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "since_date",
                                        "orig": "since_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "since_id",
                                        "orig": "since_id",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "until_date",
                                        "orig": "until_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "component_id",
                                    "max_id",
                                    "page",
                                    "per_page",
                                    "since_date",
                                    "since_id",
                                    "subscription_id_or_reference",
                                    "until_date"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.subscription",
                        "$.main.kit.entity.component"
                    ]
                ]
            }
        },
        "webhook": {
            "fields": [
                {
                    "name": "endpoint",
                    "title": "Endpoint",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "webhook",
                    "title": "Webhook",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "webhook",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/endpoints.json",
                            "segments": [
                                {
                                    "lit": "endpoints.json"
                                }
                            ],
                            "parts": [
                                "endpoints.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhooks/replay.json",
                            "segments": [
                                {
                                    "lit": "webhooks"
                                },
                                {
                                    "lit": "replay.json"
                                }
                            ],
                            "parts": [
                                "webhooks",
                                "replay.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "replay"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/webhooks.json",
                            "segments": [
                                {
                                    "lit": "webhooks.json"
                                }
                            ],
                            "parts": [
                                "webhooks.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "since_date",
                                        "orig": "since_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ANY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "subscription",
                                        "orig": "subscription",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "until_date",
                                        "orig": "until_date",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "order",
                                    "page",
                                    "per_page",
                                    "since_date",
                                    "status",
                                    "subscription",
                                    "until_date"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/webhooks/settings.json",
                            "segments": [
                                {
                                    "lit": "webhooks"
                                },
                                {
                                    "lit": "settings.json"
                                }
                            ],
                            "parts": [
                                "webhooks",
                                "settings.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "setting"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map