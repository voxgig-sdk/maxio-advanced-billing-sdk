import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "account_balance",
    "accessor": "AccountBalance",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/account_balances.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "open_invoices": {
        "automatic_balance_in_cents": 1,
        "balance_in_cents": 1,
        "remittance_balance_in_cents": 1
      },
      "pending_invoices": {
        "automatic_balance_in_cents": 1,
        "balance_in_cents": 1,
        "remittance_balance_in_cents": 1
      },
      "pending_discounts": {
        "automatic_balance_in_cents": 1,
        "balance_in_cents": 1,
        "remittance_balance_in_cents": 1
      },
      "service_credits": {
        "automatic_balance_in_cents": 1,
        "balance_in_cents": 1,
        "remittance_balance_in_cents": 1
      },
      "prepayments": {
        "automatic_balance_in_cents": 1,
        "balance_in_cents": 1,
        "remittance_balance_in_cents": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "allocation",
    "accessor": "Allocation",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/allocations.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "allocation": {
          "component_id": 193159,
          "subscription_id": 15540611,
          "quantity": 10,
          "previous_quantity": 0,
          "memo": "foo",
          "timestamp": "2016-12-08T19:09:15Z",
          "proration_upgrade_scheme": "prorate-attempt-capture",
          "proration_downgrade_scheme": "no-prorate",
          "payment": {
            "amount_in_cents": 1451,
            "success": true,
            "memo": "Payment for: Prorated component allocation changes.",
            "id": 165473487
          }
        }
      },
      {
        "allocation": {
          "component_id": 277221,
          "subscription_id": 15540611,
          "quantity": 5,
          "previous_quantity": 0,
          "memo": "bar",
          "timestamp": "2016-12-08T19:09:15Z",
          "proration_upgrade_scheme": "prorate-attempt-capture",
          "proration_downgrade_scheme": "no-prorate",
          "payment": {
            "amount_in_cents": 1451,
            "success": true,
            "memo": "Payment for: Prorated component allocation changes.",
            "id": 165473487
          }
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "allocation",
    "accessor": "Allocation",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {
      "page": 1
    },
    "headers": [],
    "query": [
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "allocation": {
          "allocation_id": 2370199,
          "component_id": 41028,
          "subscription_id": 352827,
          "quantity": 10,
          "previous_quantity": 0,
          "memo": "Recoding component allocation",
          "timestamp": "2024-02-28T09:31:05Z",
          "proration_upgrade_scheme": "full-price-attempt-capture",
          "proration_downgrade_scheme": "no-prorate",
          "price_point_id": 2957424,
          "price_point_handle": "uuid:03190e20-b84a-013c-ca77-0286551bb34f",
          "price_point_name": "Original",
          "previous_price_point_id": 2957424,
          "component_handle": "test-prepaid-component-4982065948",
          "accrue_charge": false,
          "upgrade_charge": "full",
          "downgrade_credit": "none",
          "created_at": "2024-02-28T04:31:05-05:00",
          "initiate_dunning": false,
          "expires_at": "2024-08-03T20:00:00-04:00",
          "used_quantity": 5,
          "charge_id": 11586076
        }
      },
      {
        "allocation": {
          "memo": null,
          "timestamp": "2012-11-20T21:48:09Z",
          "quantity": 3,
          "previous_quantity": 0,
          "component_id": 11960,
          "subscription_id": 2585595,
          "proration_upgrade_scheme": "no-prorate",
          "proration_downgrade_scheme": "no-prorate"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "billing_portal",
    "accessor": "BillingPortal",
    "op": "create",
    "method": "POST",
    "path": "/portal/customers/{customer_id}/invitations/invite.json",
    "args": [
      {
        "name": "customer_id",
        "wire": "customer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "last_sent_at": "enim Duis esse dolore",
      "last_accepted_at": "adipisicing magna do in irure",
      "send_invite_link_text": "veniam sit",
      "uninvited_count": 66254678
    },
    "idField": "id"
  },
  {
    "entity": "billing_portal",
    "accessor": "BillingPortal",
    "op": "load",
    "method": "GET",
    "path": "/portal/customers/{customer_id}/management_link.json",
    "args": [
      {
        "name": "customer_id",
        "wire": "customer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "url": "https://www.billingportal.com/manage/19804639/1517596469/bd16498719a7d3e6",
      "fetch_count": 1,
      "created_at": "2018-02-02T18:34:29Z",
      "new_link_available_at": "2018-02-17T18:34:29Z",
      "expires_at": "2018-04-08T17:34:29Z",
      "last_invite_sent_at": "2018-02-02T18:34:29Z"
    },
    "idField": "id"
  },
  {
    "entity": "billing_portal",
    "accessor": "BillingPortal",
    "op": "remove",
    "method": "DELETE",
    "path": "/portal/customers/{customer_id}/invitations/revoke.json",
    "args": [
      {
        "name": "customer_id",
        "wire": "customer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "last_sent_at": "Not Invited",
      "last_accepted_at": "Invite Revoked",
      "uninvited_count": 8
    },
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "list",
    "method": "GET",
    "path": "/product_families/{product_family_id}/components.json",
    "args": [
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p1"
      }
    ],
    "select": {
      "date_field": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "include_archived": "v1",
      "page": 1,
      "per_page": 50,
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "include_archived",
      "page",
      "per_page",
      "filter",
      "date_field",
      "end_date",
      "end_datetime",
      "start_date",
      "start_datetime"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "component": {
          "id": 399850,
          "name": "$1.00 component",
          "pricing_scheme": "per_unit",
          "unit_name": "Component",
          "unit_price": "1.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "quantity_based_component",
          "archived": false,
          "taxable": false,
          "description": "Component",
          "default_price_point_id": 121000,
          "prices": [
            {
              "id": 630687,
              "component_id": 399850,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "1.0",
              "price_point_id": 121000,
              "formatted_unit_price": "$1.00"
            }
          ],
          "price_point_count": 2,
          "price_points_url": "https://general-goods.chargify.com/components/399850/price_points",
          "tax_code": null,
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:38-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "use_site_exchange_rate": true
        }
      },
      {
        "component": {
          "id": 399853,
          "name": "Annual Support Services",
          "pricing_scheme": null,
          "unit_name": "on/off",
          "unit_price": "100.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "on_off_component",
          "archived": false,
          "taxable": true,
          "description": "Prepay for support services",
          "default_price_point_id": 121003,
          "price_point_count": 4,
          "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
          "tax_code": "D0000000",
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:37-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "use_site_exchange_rate": true
        }
      },
      {
        "component": {
          "id": 386937,
          "name": "Cancellation fee",
          "pricing_scheme": null,
          "unit_name": "on/off",
          "unit_price": "35.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "on_off_component",
          "archived": false,
          "taxable": false,
          "description": "",
          "default_price_point_id": 108307,
          "price_point_count": 1,
          "price_points_url": "https://general-goods.chargify.com/components/386937/price_points",
          "tax_code": null,
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:38-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "use_site_exchange_rate": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "list",
    "method": "GET",
    "path": "/components.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "include_archived": "v1",
      "page": 1,
      "per_page": 50,
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "include_archived",
      "page",
      "per_page",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "component": {
          "id": 399850,
          "name": "$1.00 component",
          "pricing_scheme": "per_unit",
          "unit_name": "Component",
          "unit_price": "1.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "quantity_based_component",
          "archived": false,
          "taxable": false,
          "description": "Component",
          "default_price_point_id": 121000,
          "prices": [
            {
              "id": 630687,
              "component_id": 399850,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "1.0",
              "price_point_id": 121000,
              "formatted_unit_price": "$1.00"
            }
          ],
          "price_point_count": 2,
          "price_points_url": "https://general-goods.chargify.com/components/399850/price_points",
          "tax_code": null,
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:38-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "product_family_handle": "chargify",
          "use_site_exchange_rate": true
        }
      },
      {
        "component": {
          "id": 399853,
          "name": "Annual Support Services",
          "pricing_scheme": null,
          "unit_name": "on/off",
          "unit_price": "100.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "on_off_component",
          "archived": false,
          "taxable": true,
          "description": "Prepay for support services",
          "default_price_point_id": 121003,
          "price_point_count": 4,
          "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
          "tax_code": "D0000000",
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:37-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "product_family_handle": "chargify",
          "use_site_exchange_rate": true
        }
      },
      {
        "component": {
          "id": 386937,
          "name": "Cancellation fee",
          "pricing_scheme": null,
          "unit_name": "on/off",
          "unit_price": "35.0",
          "product_family_id": 997233,
          "price_per_unit_in_cents": null,
          "kind": "on_off_component",
          "archived": false,
          "taxable": false,
          "description": "",
          "default_price_point_id": 108307,
          "price_point_count": 1,
          "price_points_url": "https://general-goods.chargify.com/components/386937/price_points",
          "tax_code": null,
          "recurring": true,
          "upgrade_charge": null,
          "downgrade_credit": null,
          "created_at": "2019-08-01T09:35:38-04:00",
          "default_price_point_name": "Original",
          "product_family_name": "Chargify",
          "product_family_handle": "chargify",
          "use_site_exchange_rate": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "load",
    "method": "GET",
    "path": "/product_families/{product_family_id}/components/{component_id}.json",
    "action": "component_id",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {
      "include_feature": "v1"
    },
    "headers": [],
    "query": [
      "include_features"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "component": {
        "id": 399853,
        "name": "Annual Support Services",
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "100.0",
        "product_family_id": 997233,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": true,
        "description": "Prepay for support services",
        "default_price_point_id": 121003,
        "price_point_count": 4,
        "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
        "tax_code": "D0000000",
        "recurring": true,
        "upgrade_charge": null,
        "downgrade_credit": null,
        "created_at": "2019-08-02T05:54:53-04:00",
        "default_price_point_name": "Original",
        "product_family_name": "Chargify",
        "product_family_handle": "chargify"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "load",
    "method": "GET",
    "path": "/components/lookup.json",
    "action": "lookup",
    "args": [],
    "select": {
      "handle": "v1"
    },
    "headers": [],
    "query": [
      "handle"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "component": {
        "id": 399853,
        "name": "Annual Support Services",
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "100.0",
        "product_family_id": 997233,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": true,
        "description": "Prepay for support services",
        "default_price_point_id": 121003,
        "price_point_count": 4,
        "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
        "tax_code": "D0000000",
        "recurring": true,
        "upgrade_charge": null,
        "downgrade_credit": null,
        "created_at": "2019-08-02T05:54:53-04:00",
        "default_price_point_name": "Original",
        "product_family_name": "Chargify"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "remove",
    "method": "DELETE",
    "path": "/product_families/{product_family_id}/components/{component_id}.json",
    "action": "component_id",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 25407138,
      "name": "cillum aute",
      "pricing_scheme": "stairstep",
      "unit_name": "nulla in",
      "unit_price": "Excepteur veniam",
      "product_family_id": -56705047,
      "kind": "prepaid_usage_component",
      "archived": true,
      "taxable": false,
      "description": "reprehenderit laborum qui fugiat",
      "default_price_point_id": -64328176,
      "price_point_count": 15252407,
      "price_points_url": "dolor mollit consequat",
      "tax_code": "ea nisi",
      "recurring": false,
      "created_at": "2016-11-08T16:22:26-05:00",
      "default_price_point_name": "cupidatat Lorem non aliqua",
      "product_family_name": "do elit",
      "hide_date_range_on_invoice": false
    },
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "update",
    "method": "PUT",
    "path": "/product_families/{product_family_id}/components/{component_id}.json",
    "action": "component_id",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "component": {
        "id": 399853,
        "name": "Annual Support Services",
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "100.0",
        "product_family_id": 997233,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": true,
        "description": "Prepay for support services",
        "default_price_point_id": 121003,
        "price_point_count": 4,
        "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
        "tax_code": "D0000000",
        "recurring": true,
        "upgrade_charge": null,
        "downgrade_credit": null,
        "created_at": "2019-08-02T05:54:53-04:00",
        "default_price_point_name": "Original",
        "product_family_name": "Chargify"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component",
    "accessor": "Component",
    "op": "update",
    "method": "PUT",
    "path": "/components/{component_id}.json",
    "action": "component_id",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "component": {
        "id": 399853,
        "name": "Annual Support Services",
        "pricing_scheme": null,
        "unit_name": "on/off",
        "unit_price": "100.0",
        "product_family_id": 997233,
        "price_per_unit_in_cents": null,
        "kind": "on_off_component",
        "archived": false,
        "taxable": true,
        "description": "Prepay for support services",
        "default_price_point_id": 121003,
        "price_point_count": 4,
        "price_points_url": "https://general-goods.chargify.com/components/399853/price_points",
        "tax_code": "D0000000",
        "recurring": true,
        "upgrade_charge": null,
        "downgrade_credit": null,
        "created_at": "2019-08-02T05:54:53-04:00",
        "default_price_point_name": "Original",
        "product_family_name": "Chargify"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_feature",
    "accessor": "ComponentFeature",
    "op": "remove",
    "method": "DELETE",
    "path": "/components/{component_id}/features/{id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      }
    ],
    "select": {
      "destroy_entitlement": "v1"
    },
    "headers": [],
    "query": [
      "destroy_entitlements"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/price_points/{price_point_id}/clone.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "price_point": {
        "id": 9012,
        "name": "Pro Usage Tiered Clone",
        "type": "catalog",
        "pricing_scheme": "tiered",
        "component_id": 1234,
        "handle": "pro-usage-tiered-clone",
        "archived_at": null,
        "created_at": "2024-05-01T12:34:56-04:00",
        "updated_at": "2024-05-01T12:34:56-04:00",
        "use_site_exchange_rate": false,
        "currency_prices": [
          {
            "id": 3001,
            "currency": "EUR",
            "price": "9.99",
            "formatted_price": "€9.99",
            "price_id": 4001,
            "price_point_id": 9012
          }
        ],
        "currency_overage_prices": [
          {
            "id": 3002,
            "currency": "EUR",
            "price": "2.50",
            "formatted_price": "€2.50",
            "price_id": 4002,
            "price_point_id": 9012
          }
        ],
        "renew_prepaid_allocation": true,
        "rollover_prepaid_remainder": false,
        "expiration_interval": 1,
        "expiration_interval_unit": "month",
        "overage_pricing_scheme": "tiered",
        "subscription_id": 4321,
        "prices": [
          {
            "id": 4001,
            "component_id": 1234,
            "starting_quantity": 1,
            "ending_quantity": 100,
            "unit_price": "9.99",
            "price_point_id": 9012,
            "formatted_unit_price": "$9.99",
            "segment_id": null
          }
        ],
        "overage_prices": [
          {
            "id": 4002,
            "component_id": 1234,
            "starting_quantity": 101,
            "ending_quantity": null,
            "unit_price": "2.50",
            "price_point_id": 9012,
            "formatted_unit_price": "$2.50",
            "segment_id": null
          }
        ],
        "tax_included": false,
        "interval": 1,
        "interval_unit": "month"
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/price_points/bulk.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_points": [
        {
          "id": 80,
          "default": false,
          "name": "Wholesale Two",
          "pricing_scheme": "per_unit",
          "component_id": 74,
          "handle": "wholesale-two",
          "archived_at": null,
          "created_at": "2017-07-05T13:55:40-04:00",
          "updated_at": "2017-07-05T13:55:40-04:00",
          "prices": [
            {
              "id": 121,
              "component_id": 74,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "5.0"
            }
          ]
        },
        {
          "id": 81,
          "default": false,
          "name": "MSRP",
          "pricing_scheme": "per_unit",
          "component_id": 74,
          "handle": "msrp",
          "archived_at": null,
          "created_at": "2017-07-05T13:55:40-04:00",
          "updated_at": "2017-07-05T13:55:40-04:00",
          "prices": [
            {
              "id": 122,
              "component_id": 74,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "4.0"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/price_points.json",
    "args": [
      {
        "name": "id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "id": 1,
        "type": {},
        "default": true,
        "name": "x",
        "pricing_scheme": {},
        "component_id": 1,
        "handle": "x",
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ],
        "use_site_exchange_rate": true,
        "subscription_id": 1,
        "tax_included": true,
        "interval": 1,
        "interval_unit": {},
        "currency_prices": [
          {
            "currency": "x",
            "formatted_price": "x",
            "id": 1,
            "price": "x",
            "price_id": 1,
            "price_point_id": 1
          }
        ],
        "overage_prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ],
        "overage_pricing_scheme": {},
        "renew_prepaid_allocation": true,
        "rollover_prepaid_remainder": true,
        "expiration_interval": 1,
        "expiration_interval_unit": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/price_points/{price_point_id}/currency_prices.json",
    "args": [
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "currency_prices": [
        {
          "id": 100,
          "currency": "EUR",
          "price": "123",
          "formatted_price": "€123,00",
          "price_id": 32669,
          "price_point_id": 25554
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "list",
    "method": "GET",
    "path": "/components/{component_id}/price_points.json",
    "args": [
      {
        "name": "id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {
      "currency_price": "v1",
      "filter_type": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "currency_prices",
      "page",
      "per_page",
      "filter[type]"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "price_points": [
        {
          "id": 80,
          "default": false,
          "name": "Wholesale Two",
          "pricing_scheme": "per_unit",
          "component_id": 74,
          "handle": "wholesale-two",
          "archived_at": null,
          "created_at": "2017-07-05T13:55:40-04:00",
          "updated_at": "2017-07-05T13:55:40-04:00",
          "prices": [
            {
              "id": 121,
              "component_id": 74,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "5.0"
            }
          ]
        },
        {
          "id": 81,
          "default": false,
          "name": "MSRP",
          "pricing_scheme": "per_unit",
          "component_id": 74,
          "handle": "msrp",
          "archived_at": null,
          "created_at": "2017-07-05T13:55:40-04:00",
          "updated_at": "2017-07-05T13:55:40-04:00",
          "prices": [
            {
              "id": 122,
              "component_id": 74,
              "starting_quantity": 1,
              "ending_quantity": null,
              "unit_price": "4.0"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "list",
    "method": "GET",
    "path": "/components_price_points.json",
    "args": [],
    "select": {
      "direction": "v1",
      "filter": "v1",
      "include": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "include",
      "page",
      "per_page",
      "direction",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_points": [
        {
          "id": 1,
          "name": "Auto-created",
          "type": "default",
          "pricing_scheme": "per_unit",
          "component_id": 2,
          "handle": "auto-created",
          "archived_at": null,
          "created_at": "2021-02-21T11:05:57-05:00",
          "updated_at": "2021-02-21T11:05:57-05:00",
          "prices": [
            {
              "id": 3,
              "component_id": 2,
              "starting_quantity": 0,
              "ending_quantity": null,
              "unit_price": "1.0",
              "price_point_id": 1,
              "formatted_unit_price": "$1.00",
              "segment_id": null
            }
          ],
          "tax_included": false
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "remove",
    "method": "DELETE",
    "path": "/components/{component_id}/price_points/{price_point_id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "id": 79,
        "default": false,
        "name": "Wholesale",
        "pricing_scheme": "stairstep",
        "component_id": 74,
        "handle": "wholesale-handle",
        "archived_at": "2017-07-06T15:04:00-04:00",
        "created_at": "2017-07-05T13:44:30-04:00",
        "updated_at": "2017-07-05T13:44:30-04:00",
        "prices": [
          {
            "id": 119,
            "component_id": 74,
            "starting_quantity": 1,
            "ending_quantity": 100,
            "unit_price": "5.0"
          },
          {
            "id": 120,
            "component_id": 74,
            "starting_quantity": 101,
            "ending_quantity": null,
            "unit_price": "4.0"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point",
    "accessor": "ComponentPricePoint",
    "op": "update",
    "method": "PUT",
    "path": "/price_points/{price_point_id}/currency_prices.json",
    "args": [
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "currency_prices": [
        {
          "id": 100,
          "currency": "EUR",
          "price": "123",
          "formatted_price": "€123,00",
          "price_id": 32669,
          "price_point_id": 25554
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "component_price_point_currency_overage",
    "accessor": "ComponentPricePointCurrencyOverage",
    "op": "load",
    "method": "GET",
    "path": "/components/{component_id}/price_points/{price_point_id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {
      "currency_price": "v1"
    },
    "headers": [],
    "query": [
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "archived_at": "2026-01-01T00:00:00Z",
        "component_id": 1,
        "created_at": "2026-01-01T00:00:00Z",
        "currency_overage_prices": [
          {
            "currency": "x",
            "formatted_price": "x",
            "id": 1,
            "price": "x",
            "price_id": 1,
            "price_point_id": 1
          }
        ],
        "currency_prices": [
          {
            "currency": "x",
            "formatted_price": "x",
            "id": 1,
            "price": "x",
            "price_id": 1,
            "price_point_id": 1
          }
        ],
        "default": true,
        "expiration_interval": 1,
        "expiration_interval_unit": {},
        "handle": "x",
        "id": 1,
        "interval": 1,
        "interval_unit": {},
        "name": "x",
        "overage_prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ],
        "overage_pricing_scheme": {},
        "prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ],
        "pricing_scheme": {},
        "renew_prepaid_allocation": true,
        "rollover_prepaid_remainder": true,
        "subscription_id": 1,
        "tax_included": true,
        "type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "use_site_exchange_rate": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "create",
    "method": "POST",
    "path": "/coupons/{coupon_id}/codes.json",
    "action": "code",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "created_codes": [
        "BALTIMOREFALL",
        "ORLANDOFALL",
        "DETROITFALL"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "create",
    "method": "POST",
    "path": "/product_families/{product_family_id}/coupons.json",
    "args": [
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "coupon": {
        "allow_negative_balance": true,
        "amount": 1,
        "amount_in_cents": 1,
        "apply_on_cancel_at_end_of_period": true,
        "apply_on_subscription_expiration": true,
        "archived_at": "2026-01-01T00:00:00Z",
        "code": "x",
        "compounding_strategy": {},
        "conversion_limit": "x",
        "coupon_restrictions": [
          {
            "handle": "x",
            "id": 1,
            "item_id": 1,
            "item_type": "Component",
            "name": "x"
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "currency_prices": [
          {
            "coupon_id": 1,
            "currency": "x",
            "id": 1,
            "price": 1
          }
        ],
        "description": "x",
        "discount_type": "amount",
        "duration_interval": 1,
        "duration_interval_span": "x",
        "duration_interval_unit": "x",
        "duration_period_count": 1,
        "end_date": "2026-01-01T00:00:00Z",
        "exclude_mid_period_allocations": true,
        "id": 1,
        "name": "x",
        "percentage": "x",
        "product_family_id": 1,
        "product_family_name": "x",
        "recurring": true,
        "recurring_scheme": "do_not_recur",
        "stackable": true,
        "start_date": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "use_site_exchange_rate": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "list",
    "method": "GET",
    "path": "/product_families/{product_family_id}/coupons.json",
    "args": [
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p1"
      }
    ],
    "select": {
      "currency_price": "v1",
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "filter",
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "coupon": {
          "id": 999999,
          "name": "50% coupon",
          "code": "50PERCENT",
          "description": "50 PERCENT OFF",
          "amount_in_cents": null,
          "product_family_id": 527890,
          "created_at": "2016-10-21T17:02:08-04:00",
          "updated_at": "2016-10-21T17:06:11-04:00",
          "start_date": "2016-10-21T17:02:08-04:00",
          "end_date": null,
          "percentage": "50",
          "recurring": true,
          "duration_period_count": null,
          "duration_interval": 1,
          "duration_interval_unit": "day",
          "allow_negative_balance": true,
          "archived_at": null,
          "conversion_limit": "100",
          "stackable": false,
          "compounding_strategy": "compound",
          "use_site_exchange_rate": true
        }
      },
      {
        "coupon": {
          "id": 123456,
          "name": "100% coupon",
          "code": "100PERCENT",
          "description": "100 PERCENT OFF",
          "amount_in_cents": null,
          "product_family_id": 527890,
          "created_at": "2016-10-21T17:02:08-04:00",
          "updated_at": "2016-10-21T17:06:11-04:00",
          "start_date": "2016-10-21T17:02:08-04:00",
          "end_date": null,
          "percentage": "50",
          "recurring": true,
          "duration_period_count": null,
          "duration_interval": 1,
          "duration_interval_unit": "day",
          "allow_negative_balance": true,
          "archived_at": null,
          "conversion_limit": "100",
          "stackable": false,
          "compounding_strategy": "compound",
          "use_site_exchange_rate": true
        }
      },
      {
        "coupon": {
          "id": 888888,
          "name": "25% coupon",
          "code": "25PERCENT",
          "description": "25 PERCENT OFF",
          "amount_in_cents": null,
          "product_family_id": 527890,
          "created_at": "2016-10-21T17:02:08-04:00",
          "updated_at": "2016-10-21T17:06:11-04:00",
          "start_date": "2016-10-21T17:02:08-04:00",
          "end_date": null,
          "percentage": "25",
          "recurring": true,
          "duration_period_count": null,
          "duration_interval": 1,
          "duration_interval_unit": "day",
          "allow_negative_balance": true,
          "archived_at": null,
          "conversion_limit": "100",
          "stackable": false,
          "compounding_strategy": "compound",
          "coupon_restrictions": [
            {
              "id": 37,
              "item_type": "Component",
              "item_id": 519,
              "name": "test",
              "handle": null
            }
          ],
          "use_site_exchange_rate": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "list",
    "method": "GET",
    "path": "/coupons.json",
    "args": [],
    "select": {
      "currency_price": "v1",
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "filter",
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "coupon": {
          "id": 0,
          "name": "string",
          "code": "string",
          "description": "string",
          "amount": 0,
          "amount_in_cents": 0,
          "product_family_id": 0,
          "product_family_name": "string",
          "start_date": "2021-05-03T16:00:21-04:00",
          "end_date": "2023-05-05T16:00:21-04:00",
          "percentage": "10",
          "recurring": true,
          "recurring_scheme": "do_not_recur",
          "duration_period_count": 0,
          "duration_interval": 0,
          "duration_interval_unit": "string",
          "duration_interval_span": "string",
          "allow_negative_balance": true,
          "archived_at": null,
          "conversion_limit": "string",
          "stackable": true,
          "compounding_strategy": "compound",
          "use_site_exchange_rate": true,
          "created_at": "2021-05-05T16:00:21-04:00",
          "updated_at": "2021-05-05T16:00:21-04:00",
          "discount_type": "amount",
          "exclude_mid_period_allocations": true,
          "apply_on_cancel_at_end_of_period": true,
          "coupon_restrictions": [
            {
              "id": 0,
              "item_type": "Component",
              "item_id": 0,
              "name": "string",
              "handle": "string"
            }
          ]
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "list",
    "method": "GET",
    "path": "/coupons/{coupon_id}/codes.json",
    "action": "code",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "codes": [
        "3JU6PR",
        "9RO6MP",
        "8OG1VV"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "load",
    "method": "GET",
    "path": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
    "action": "coupon_id",
    "args": [
      {
        "name": "coupon_id",
        "wire": "coupon_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {
      "currency_price": "v1"
    },
    "headers": [],
    "query": [
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "coupon": {
        "id": 67,
        "name": "Foo Bar",
        "code": "YEPPER99934",
        "description": "my cool coupon",
        "amount_in_cents": null,
        "product_family_id": 4,
        "product_family_name": "Billing Plans",
        "created_at": "2017-11-08T10:01:15-05:00",
        "updated_at": "2017-11-08T10:01:15-05:00",
        "start_date": "2017-11-08T10:01:15-05:00",
        "end_date": null,
        "percentage": "33.3333",
        "duration_period_count": null,
        "duration_interval": null,
        "duration_interval_unit": null,
        "allow_negative_balance": false,
        "archived_at": null,
        "conversion_limit": null,
        "stackable": true,
        "compounding_strategy": "compound"
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "load",
    "method": "GET",
    "path": "/coupons/find.json",
    "action": "find",
    "args": [],
    "select": {
      "code": "v1",
      "currency_price": "v1",
      "product_family_id": "v1"
    },
    "headers": [],
    "query": [
      "product_family_id",
      "code",
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "coupon": {
        "allow_negative_balance": true,
        "amount": 1,
        "amount_in_cents": 1,
        "apply_on_cancel_at_end_of_period": true,
        "apply_on_subscription_expiration": true,
        "archived_at": "2026-01-01T00:00:00Z",
        "code": "x",
        "compounding_strategy": {},
        "conversion_limit": "x",
        "coupon_restrictions": [
          {
            "handle": "x",
            "id": 1,
            "item_id": 1,
            "item_type": "Component",
            "name": "x"
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "currency_prices": [
          {
            "coupon_id": 1,
            "currency": "x",
            "id": 1,
            "price": 1
          }
        ],
        "description": "x",
        "discount_type": "amount",
        "duration_interval": 1,
        "duration_interval_span": "x",
        "duration_interval_unit": "x",
        "duration_period_count": 1,
        "end_date": "2026-01-01T00:00:00Z",
        "exclude_mid_period_allocations": true,
        "id": 1,
        "name": "x",
        "percentage": "x",
        "product_family_id": 1,
        "product_family_name": "x",
        "recurring": true,
        "recurring_scheme": "do_not_recur",
        "stackable": true,
        "start_date": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "use_site_exchange_rate": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "load",
    "method": "GET",
    "path": "/coupons/validate.json",
    "action": "validate",
    "args": [],
    "select": {
      "code": "v1",
      "product_family_id": "v1"
    },
    "headers": [],
    "query": [
      "code",
      "product_family_id"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "coupon": {
        "id": 66,
        "name": "Foo Bar",
        "code": "YEPPER9993",
        "description": "my cool coupon",
        "amount_in_cents": 10000,
        "product_family_id": 4,
        "created_at": "2017-11-07T14:51:52-05:00",
        "updated_at": "2017-11-07T15:14:24-05:00",
        "start_date": "2017-11-07T14:51:52-05:00",
        "end_date": null,
        "percentage": null,
        "recurring": false,
        "duration_period_count": null,
        "duration_interval": null,
        "duration_interval_unit": null,
        "allow_negative_balance": false,
        "archived_at": null,
        "conversion_limit": null,
        "stackable": true,
        "compounding_strategy": "full-price"
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "remove",
    "method": "DELETE",
    "path": "/coupons/{coupon_id}/codes/{subcode}.json",
    "action": "code_subcode",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      },
      {
        "name": "subcode",
        "wire": "subcode",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "remove",
    "method": "DELETE",
    "path": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
    "action": "coupon_id",
    "args": [
      {
        "name": "coupon_id",
        "wire": "coupon_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "coupon": {
        "id": 67,
        "name": "Foo Bar",
        "code": "YEPPER99934",
        "description": "my cool coupon",
        "amount_in_cents": 10000,
        "product_family_id": 4,
        "created_at": "2017-11-08T10:01:15-05:00",
        "updated_at": "2017-11-08T10:01:15-05:00",
        "start_date": "2017-11-08T10:01:15-05:00",
        "end_date": null,
        "percentage": null,
        "recurring": false,
        "duration_period_count": null,
        "duration_interval": null,
        "duration_interval_unit": null,
        "allow_negative_balance": false,
        "archived_at": "2016-12-02T13:09:33-05:00",
        "conversion_limit": null,
        "stackable": true,
        "compounding_strategy": "compound"
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon",
    "accessor": "Coupon",
    "op": "update",
    "method": "PUT",
    "path": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
    "action": "coupon_id",
    "args": [
      {
        "name": "coupon_id",
        "wire": "coupon_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "coupon": {
        "id": 67,
        "name": "Foo Bar",
        "code": "YEPPER99934",
        "description": "my cool coupon",
        "amount_in_cents": 10000,
        "product_family_id": 4,
        "created_at": "2017-11-08T10:01:15-05:00",
        "updated_at": "2017-11-08T10:01:15-05:00",
        "start_date": "2017-11-08T10:01:15-05:00",
        "end_date": null,
        "percentage": null,
        "recurring": false,
        "duration_period_count": null,
        "duration_interval": null,
        "duration_interval_unit": null,
        "allow_negative_balance": false,
        "archived_at": null,
        "conversion_limit": null,
        "stackable": true,
        "compounding_strategy": "compound"
      }
    },
    "idField": "id"
  },
  {
    "entity": "coupon_currency",
    "accessor": "CouponCurrency",
    "op": "update",
    "method": "PUT",
    "path": "/coupons/{coupon_id}/currency_prices.json",
    "action": "currency_prices.json",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "currency_prices": [
        {
          "id": 1,
          "currency": "x",
          "price": 1,
          "coupon_id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "coupon_subcode",
    "accessor": "CouponSubcode",
    "op": "update",
    "method": "PUT",
    "path": "/coupons/{coupon_id}/codes.json",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "created_codes": [
        "x"
      ],
      "duplicate_codes": [
        "x"
      ],
      "invalid_codes": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "coupon_usage",
    "accessor": "CouponUsage",
    "op": "list",
    "method": "GET",
    "path": "/product_families/{product_family_id}/coupons/{coupon_id}/usage.json",
    "args": [
      {
        "name": "id",
        "wire": "coupon_id",
        "value": "p1"
      },
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "name": "No cost product",
        "id": 3903594,
        "signups": 0,
        "savings": 0,
        "savings_in_cents": 0,
        "revenue": 0,
        "revenue_in_cents": 0
      },
      {
        "name": "Product that expires",
        "id": 3853680,
        "signups": 0,
        "savings": 0,
        "savings_in_cents": 0,
        "revenue": 0,
        "revenue_in_cents": 0
      },
      {
        "name": "Trial Product",
        "id": 3861800,
        "signups": 1,
        "savings": 30,
        "savings_in_cents": 3000,
        "revenue": 20,
        "revenue_in_cents": 2000
      }
    ],
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "create",
    "method": "POST",
    "path": "/{resource_type}/{resource_id}/metadata.json",
    "args": [
      {
        "name": "resource_id",
        "wire": "resource_id",
        "value": "p1"
      },
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "value": "x",
        "resource_id": 1,
        "name": "x",
        "deleted_at": "2026-01-01T00:00:00Z",
        "metafield_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "create",
    "method": "POST",
    "path": "/{resource_type}/metafields.json",
    "args": [
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "name": "Color",
        "scope": {
          "csv": "0",
          "statements": "0",
          "invoices": "0",
          "portal": "0"
        },
        "data_count": 0,
        "input_type": "text",
        "enum": null
      },
      {
        "name": "Brand",
        "scope": {
          "csv": "0",
          "statements": "0",
          "invoices": "0",
          "portal": "0"
        },
        "data_count": 0,
        "input_type": "text",
        "enum": null
      }
    ],
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "list",
    "method": "GET",
    "path": "/{resource_type}/metadata.json",
    "args": [
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p1"
      }
    ],
    "select": {
      "date_field": "v1",
      "direction": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "page": 1,
      "per_page": 50,
      "resource_id": "v1",
      "start_date": "v1",
      "start_datetime": "v1",
      "with_deleted": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "with_deleted",
      "resource_ids",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_count": 1,
      "current_page": 1,
      "total_pages": 1,
      "per_page": 1,
      "metadata": [
        {
          "deleted_at": "2026-01-01T00:00:00Z",
          "id": 1,
          "metafield_id": 1,
          "name": "x",
          "resource_id": 1,
          "value": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "list",
    "method": "GET",
    "path": "/{resource_type}/metafields.json",
    "args": [
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p1"
      }
    ],
    "select": {
      "direction": "v1",
      "name": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "name",
      "page",
      "per_page",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_count": 1,
      "current_page": 1,
      "total_pages": 0,
      "per_page": 50,
      "metafields": [
        {
          "id": 0,
          "name": "string",
          "scope": {
            "csv": "0",
            "statements": "0",
            "invoices": "0",
            "portal": "0",
            "public_show": "0",
            "public_edit": "0"
          },
          "data_count": 0,
          "input_type": "text",
          "enum": null
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "list",
    "method": "GET",
    "path": "/{resource_type}/{resource_id}/metadata.json",
    "args": [
      {
        "name": "resource_id",
        "wire": "resource_id",
        "value": "p1"
      },
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p2"
      }
    ],
    "select": {
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "total_count": 1,
      "current_page": 1,
      "total_pages": 1,
      "per_page": 50,
      "metadata": [
        {
          "id": 77889911,
          "value": "green",
          "resource_id": 1234567,
          "metafield_id": 112233,
          "deleted_at": null,
          "name": "Color"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "remove",
    "method": "DELETE",
    "path": "/{resource_type}/{resource_id}/metadata.json",
    "args": [
      {
        "name": "resource_id",
        "wire": "resource_id",
        "value": "p1"
      },
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p2"
      }
    ],
    "select": {
      "name": "v1"
    },
    "headers": [],
    "query": [
      "name",
      "names"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "remove",
    "method": "DELETE",
    "path": "/{resource_type}/metafields.json",
    "args": [
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p1"
      }
    ],
    "select": {
      "name": "v1"
    },
    "headers": [],
    "query": [
      "name"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "update",
    "method": "PUT",
    "path": "/{resource_type}/{resource_id}/metadata.json",
    "args": [
      {
        "name": "resource_id",
        "wire": "resource_id",
        "value": "p1"
      },
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "value": "x",
        "resource_id": 1,
        "name": "x",
        "deleted_at": "2026-01-01T00:00:00Z",
        "metafield_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "custom_field",
    "accessor": "CustomField",
    "op": "update",
    "method": "PUT",
    "path": "/{resource_type}/metafields.json",
    "args": [
      {
        "name": "resource_type",
        "wire": "resource_type",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "scope": {
          "csv": {},
          "hosted": [
            "x"
          ],
          "invoices": {},
          "portal": {},
          "public_edit": {},
          "public_show": {},
          "statements": {}
        },
        "data_count": 1,
        "input_type": {},
        "enum": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "create",
    "method": "POST",
    "path": "/portal/customers/{customer_id}/enable.json",
    "action": "enable",
    "args": [
      {
        "name": "id",
        "wire": "customer_id",
        "value": "p1"
      }
    ],
    "select": {
      "auto_invite": "v1"
    },
    "headers": [],
    "query": [
      "auto_invite"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customer": {
        "address": "x",
        "address_2": "x",
        "branding_theme_id": 1,
        "cc_emails": "x",
        "city": "x",
        "country": "x",
        "country_name": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "default_auto_renewal_profile_id": 1,
        "default_subscription_group_uid": "x",
        "email": "x",
        "entity_identifier_kind": {},
        "entity_identifier_value": "x",
        "first_name": "x",
        "id": 1,
        "last_name": "x",
        "locale": "x",
        "maxioid": "x",
        "organization": "x",
        "parent_id": 1,
        "phone": "x",
        "portal_customer_created_at": "2026-01-01T00:00:00Z",
        "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
        "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
        "reference": "x",
        "salesforce_id": "x",
        "state": "x",
        "state_name": "x",
        "surcharging": true,
        "tax_exempt": true,
        "tax_exempt_reason": "x",
        "updated_at": "2026-01-01T00:00:00Z",
        "vat_country": "x",
        "vat_number": "x",
        "verified": true,
        "zip": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "create",
    "method": "POST",
    "path": "/customers.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customer": {
        "first_name": "Cathryn",
        "last_name": "Parisian",
        "email": "Stella.McLaughlin6@example.net",
        "cc_emails": null,
        "organization": "Greenholt - Oberbrunner",
        "reference": null,
        "id": 76,
        "created_at": "2021-03-29T07:47:00-04:00",
        "updated_at": "2021-03-29T07:47:00-04:00",
        "address": "739 Stephon Bypass",
        "address_2": "Apt. 386",
        "city": "Sedrickchester",
        "state": "KY",
        "state_name": "Kentucky",
        "zip": "46979-7719",
        "country": "US",
        "country_name": "United States",
        "phone": "230-934-3685",
        "verified": false,
        "portal_customer_created_at": null,
        "portal_invite_last_sent_at": null,
        "portal_invite_last_accepted_at": null,
        "tax_exempt": false,
        "surcharging": false,
        "vat_number": null,
        "vat_country": null,
        "entity_identifier_kind": null,
        "entity_identifier_value": null,
        "parent_id": null,
        "locale": "en-US"
      }
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "list",
    "method": "GET",
    "path": "/customers.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "direction": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "page": 1,
      "per_page": 30,
      "q": "v1",
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "direction",
      "page",
      "per_page",
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "q"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "customer": {
          "first_name": "Kayla",
          "last_name": "Test",
          "email": "kayla@example.com",
          "cc_emails": "john@example.com, sue@example.com",
          "organization": "",
          "reference": null,
          "id": 14126091,
          "created_at": "2016-10-04T15:22:27-04:00",
          "updated_at": "2016-10-04T15:22:30-04:00",
          "address": "",
          "address_2": "",
          "city": "",
          "state": "",
          "zip": "",
          "country": "",
          "phone": "",
          "verified": null,
          "portal_customer_created_at": "2016-10-04T15:22:29-04:00",
          "portal_invite_last_sent_at": "2016-10-04T15:22:30-04:00",
          "portal_invite_last_accepted_at": null,
          "tax_exempt": false,
          "surcharging": false
        }
      },
      {
        "customer": {
          "first_name": "Nick ",
          "last_name": "Test",
          "email": "nick@example.com",
          "cc_emails": "john@example.com, sue@example.com",
          "organization": "",
          "reference": null,
          "id": 14254093,
          "created_at": "2016-10-13T16:52:51-04:00",
          "updated_at": "2016-10-13T16:52:54-04:00",
          "address": "",
          "address_2": "",
          "city": "",
          "state": "",
          "zip": "",
          "country": "",
          "phone": "",
          "verified": null,
          "portal_customer_created_at": "2016-10-13T16:52:54-04:00",
          "portal_invite_last_sent_at": "2016-10-13T16:52:54-04:00",
          "portal_invite_last_accepted_at": null,
          "tax_exempt": false,
          "surcharging": true,
          "parent_id": 123
        }
      },
      {
        "customer": {
          "first_name": "Don",
          "last_name": "Test",
          "email": "don@example.com",
          "cc_emails": "john@example.com, sue@example.com",
          "organization": "",
          "reference": null,
          "id": 14332342,
          "created_at": "2016-10-19T10:49:13-04:00",
          "updated_at": "2016-10-19T10:49:19-04:00",
          "address": "1737 15th St",
          "address_2": "",
          "city": "Boulder",
          "state": "CO",
          "zip": "80302",
          "country": "US",
          "phone": "",
          "verified": null,
          "portal_customer_created_at": "2016-10-19T10:49:19-04:00",
          "portal_invite_last_sent_at": "2016-10-19T10:49:19-04:00",
          "portal_invite_last_accepted_at": null,
          "tax_exempt": false,
          "surcharging": false,
          "parent_id": null
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "load",
    "method": "GET",
    "path": "/customers/{id}.json",
    "action": "id",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customer": {
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane@example.com",
        "cc_emails": "joe@example.com",
        "organization": "ABC, Inc.",
        "reference": "1234567890",
        "id": 88833369,
        "created_at": "2025-05-08T11:39:18-04:00",
        "updated_at": "2025-05-08T11:39:18-04:00",
        "address": "123 Main Street",
        "address_2": "Unit 10",
        "city": "Anytown",
        "state": "MA",
        "state_name": "Massachusetts",
        "zip": "02120",
        "country": "US",
        "country_name": "United States",
        "phone": "555-555-1212",
        "verified": false,
        "portal_customer_created_at": null,
        "portal_invite_last_sent_at": null,
        "portal_invite_last_accepted_at": null,
        "tax_exempt": false,
        "surcharging": false,
        "vat_number": null,
        "parent_id": null,
        "locale": "es-MX",
        "salesforce_id": null,
        "default_auto_renewal_profile_id": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "load",
    "method": "GET",
    "path": "/customers/lookup.json",
    "action": "lookup",
    "args": [],
    "select": {
      "reference": "v1"
    },
    "headers": [],
    "query": [
      "reference"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customer": {
        "address": "x",
        "address_2": "x",
        "branding_theme_id": 1,
        "cc_emails": "x",
        "city": "x",
        "country": "x",
        "country_name": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "default_auto_renewal_profile_id": 1,
        "default_subscription_group_uid": "x",
        "email": "x",
        "entity_identifier_kind": {},
        "entity_identifier_value": "x",
        "first_name": "x",
        "id": 1,
        "last_name": "x",
        "locale": "x",
        "maxioid": "x",
        "organization": "x",
        "parent_id": 1,
        "phone": "x",
        "portal_customer_created_at": "2026-01-01T00:00:00Z",
        "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
        "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
        "reference": "x",
        "salesforce_id": "x",
        "state": "x",
        "state_name": "x",
        "surcharging": true,
        "tax_exempt": true,
        "tax_exempt_reason": "x",
        "updated_at": "2026-01-01T00:00:00Z",
        "vat_country": "x",
        "vat_number": "x",
        "verified": true,
        "zip": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "remove",
    "method": "DELETE",
    "path": "/customers/{id}.json",
    "action": "id",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "customer",
    "accessor": "Customer",
    "op": "update",
    "method": "PUT",
    "path": "/customers/{id}.json",
    "action": "id",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "customer": {
        "first_name": "Martha",
        "last_name": "Washington",
        "email": "martha.washington@example.com",
        "cc_emails": "george.washington@example.com",
        "organization": null,
        "reference": null,
        "id": 14967442,
        "created_at": "2016-12-05T10:33:07-05:00",
        "updated_at": "2016-12-05T10:38:00-05:00",
        "address": null,
        "address_2": null,
        "city": null,
        "state": null,
        "zip": null,
        "country": null,
        "phone": null,
        "verified": false,
        "portal_customer_created_at": null,
        "portal_invite_last_sent_at": null,
        "portal_invite_last_accepted_at": null,
        "tax_exempt": false,
        "surcharging": false,
        "vat_number": "012345678",
        "vat_country": null,
        "entity_identifier_kind": null,
        "entity_identifier_value": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "delayed_cancel",
    "accessor": "DelayedCancel",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/delayed_cancel.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "message": "x"
    },
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "list",
    "method": "GET",
    "path": "/endpoints.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 11,
        "url": "https://foobar.com/webhooks",
        "site_id": 1,
        "status": "enabled",
        "webhook_subscriptions": [
          "payment_success",
          "payment_failure",
          "invoice_pending"
        ]
      },
      {
        "id": 12,
        "url": "https:/example.com/webhooks",
        "site_id": 1,
        "status": "enabled",
        "webhook_subscriptions": [
          "payment_success",
          "payment_failure",
          "refund_failure"
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "endpoint",
    "accessor": "Endpoint",
    "op": "update",
    "method": "PUT",
    "path": "/endpoints/{endpoint_id}.json",
    "action": "endpoint_id",
    "args": [
      {
        "name": "endpoint_id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "endpoint": {
        "id": 1,
        "url": "x",
        "site_id": 1,
        "status": "x",
        "webhook_subscriptions": [
          "x"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "entitlement",
    "accessor": "Entitlement",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/entitlements.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_id": 12345,
      "customer_id": 678,
      "status": "active",
      "entitlements": [
        {
          "feature_key": "feature.sso",
          "periodicity_key": "feature.sso",
          "name": "SSO",
          "type": "access_right",
          "value": true,
          "enabled": true,
          "periodicity": null,
          "source_products": [
            "Gold Plan"
          ]
        },
        {
          "feature_key": "usage.api_calls",
          "periodicity_key": "usage.api_calls:1:month",
          "name": "API Calls",
          "type": "usage_limit",
          "value": 50000,
          "enabled": true,
          "periodicity": {
            "interval": 1,
            "unit": "month"
          },
          "source_products": [
            "Gold Plan"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "list",
    "method": "GET",
    "path": "/events.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "direction": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "max_id": "v1",
      "page": 1,
      "per_page": 50,
      "since_id": "v1",
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "since_id",
      "max_id",
      "direction",
      "filter",
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "event": {
          "id": 343087780,
          "key": "subscription_state_change",
          "message": "State changed on Test subscription to Monthly Product from active to past_due",
          "subscription_id": 14950962,
          "customer_id": 12345678,
          "created_at": "2016-10-27T16:42:22-04:00",
          "event_specific_data": {
            "previous_subscription_state": "active",
            "new_subscription_state": "past_due"
          }
        }
      },
      {
        "event": {
          "id": 343087742,
          "key": "billing_date_change",
          "message": "Billing date changed on Test's subscription to Monthly Product from 11/27/2016 to 10/27/2016",
          "subscription_id": 14950962,
          "customer_id": 12345678,
          "created_at": "2016-10-27T16:42:19-04:00",
          "event_specific_data": null
        }
      },
      {
        "event": {
          "id": 343085267,
          "key": "statement_closed",
          "message": "Statement 79401838 closed (but not settled) for Test's subscription to ANNUAL product",
          "subscription_id": 14950975,
          "customer_id": 87654321,
          "created_at": "2016-10-27T16:40:40-04:00",
          "event_specific_data": null
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/events.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "direction": "v1",
      "filter": "v1",
      "max_id": "v1",
      "page": 1,
      "per_page": 50,
      "since_id": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "since_id",
      "max_id",
      "direction",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "event": {
          "id": 344799837,
          "key": "statement_settled",
          "message": "Statement 79702531 settled successfully for Amelia Example's subscription to Basic Plan",
          "subscription_id": 14900541,
          "customer_id": 77223344,
          "created_at": "2016-11-01T12:41:29-04:00",
          "event_specific_data": null
        }
      },
      {
        "event": {
          "id": 344799815,
          "key": "renewal_success",
          "message": "Successful renewal for Amelia Example's subscription to Basic Plan",
          "subscription_id": 14900541,
          "customer_id": 77223344,
          "created_at": "2016-11-01T12:41:28-04:00",
          "event_specific_data": {
            "product_id": 3792003,
            "account_transaction_id": 7590246
          }
        }
      },
      {
        "event": {
          "id": 344799705,
          "key": "billing_date_change",
          "message": "Billing date changed on Amelia Example's subscription to Basic Plan from 11/26/2016 to 11/01/2016",
          "subscription_id": 14900541,
          "customer_id": 77223344,
          "created_at": "2016-11-01T12:41:25-04:00",
          "event_specific_data": null
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "event",
    "accessor": "Event",
    "op": "load",
    "method": "GET",
    "path": "/events/count.json",
    "action": "count",
    "args": [],
    "select": {
      "direction": "v1",
      "filter": "v1",
      "max_id": "v1",
      "page": 1,
      "per_page": 50,
      "since_id": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "since_id",
      "max_id",
      "direction",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "count": 144
    },
    "idField": "id"
  },
  {
    "entity": "events_based_billing_segment",
    "accessor": "EventsBasedBillingSegment",
    "op": "remove",
    "method": "DELETE",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/features.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "create",
    "method": "POST",
    "path": "/products/{product_id}/features.json",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "create",
    "method": "POST",
    "path": "/features.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "feature": {
        "id": 1001,
        "key": "sso",
        "name": "Single Sign-On",
        "description": null,
        "kind": "access_right",
        "unit": null,
        "value_type": "boolean",
        "default_value": "true",
        "default_periodicity_interval": null,
        "default_periodicity_unit": null,
        "archived_at": null,
        "created_at": "2024-01-15T10:00:00-05:00",
        "updated_at": "2024-01-15T10:00:00-05:00",
        "products_count": 0,
        "plans_count": 0
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "list",
    "method": "GET",
    "path": "/features.json",
    "args": [],
    "select": {
      "kind": "v1",
      "page": 1,
      "per_page": 50,
      "q": "v1",
      "sort_by": "v1",
      "sort_direction": "v1",
      "status": "v1",
      "updated_from": "v1",
      "updated_to": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "status",
      "q",
      "kind",
      "updated_from",
      "updated_to",
      "sort_by",
      "sort_direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "items": [
        {
          "id": 1001,
          "key": "sso",
          "name": "Single Sign-On",
          "description": null,
          "kind": "access_right",
          "unit": null,
          "value_type": "boolean",
          "default_value": "true",
          "default_periodicity_interval": null,
          "default_periodicity_unit": null,
          "archived_at": null,
          "created_at": "2024-01-15T10:00:00-05:00",
          "updated_at": "2024-01-15T10:00:00-05:00",
          "products_count": 2,
          "plans_count": 5
        }
      ],
      "total_count": 1,
      "archived_count": 0
    },
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "list",
    "method": "GET",
    "path": "/components/{component_id}/features.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "features": [
        {
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "feature_key": "x",
          "feature_kind": {},
          "feature_name": "x",
          "feature_template_id": 1,
          "id": 1,
          "periodicity_interval": 1,
          "periodicity_unit": {},
          "price_point_id": 1,
          "price_point_type": {},
          "updated_at": "2026-01-01T00:00:00Z",
          "value": "x"
        }
      ],
      "subscriptions_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "feature",
    "accessor": "Feature",
    "op": "list",
    "method": "GET",
    "path": "/products/{product_id}/features.json",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "features": [
        {
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "feature_key": "x",
          "feature_kind": {},
          "feature_name": "x",
          "feature_template_id": 1,
          "id": 1,
          "periodicity_interval": 1,
          "periodicity_unit": {},
          "price_point_id": 1,
          "price_point_type": {},
          "updated_at": "2026-01-01T00:00:00Z",
          "value": "x"
        }
      ],
      "subscriptions_count": 1
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/features/{id}/restore.json",
    "action": "restore.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "create",
    "method": "POST",
    "path": "/products/{product_id}/features/{id}/restore.json",
    "action": "restore.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "load",
    "method": "GET",
    "path": "/components/{component_id}/features/{id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "load",
    "method": "GET",
    "path": "/products/{product_id}/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "update",
    "method": "PUT",
    "path": "/components/{component_id}/features/{id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_catalog_item",
    "accessor": "FeatureCatalogItem",
    "op": "update",
    "method": "PUT",
    "path": "/products/{product_id}/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "feature_key": "x",
        "feature_kind": {},
        "feature_name": "x",
        "feature_template_id": 1,
        "id": 1,
        "periodicity_interval": 1,
        "periodicity_unit": {},
        "price_point_id": 1,
        "price_point_type": {},
        "updated_at": "2026-01-01T00:00:00Z",
        "value": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_template",
    "accessor": "FeatureTemplate",
    "op": "create",
    "method": "POST",
    "path": "/features/{id}/restore.json",
    "action": "restore.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "default_periodicity_interval": 1,
        "default_periodicity_unit": {},
        "default_value": "x",
        "description": "x",
        "id": 1,
        "key": "sso",
        "kind": {},
        "name": "Single Sign-On",
        "plans_count": 1,
        "products_count": 1,
        "unit": "x",
        "updated_at": "2026-01-01T00:00:00Z",
        "value_type": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_template",
    "accessor": "FeatureTemplate",
    "op": "load",
    "method": "GET",
    "path": "/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "default_periodicity_interval": 1,
        "default_periodicity_unit": {},
        "default_value": "x",
        "description": "x",
        "id": 1,
        "key": "sso",
        "kind": {},
        "name": "Single Sign-On",
        "plans_count": 1,
        "products_count": 1,
        "unit": "x",
        "updated_at": "2026-01-01T00:00:00Z",
        "value_type": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "feature_template",
    "accessor": "FeatureTemplate",
    "op": "remove",
    "method": "DELETE",
    "path": "/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "remove_from_catalog": "v1"
    },
    "headers": [],
    "query": [
      "remove_from_catalog"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "feature_template",
    "accessor": "FeatureTemplate",
    "op": "update",
    "method": "PUT",
    "path": "/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "feature": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "default_periodicity_interval": 1,
        "default_periodicity_unit": {},
        "default_value": "x",
        "description": "x",
        "id": 1,
        "key": "sso",
        "kind": {},
        "name": "Single Sign-On",
        "plans_count": 1,
        "products_count": 1,
        "unit": "x",
        "updated_at": "2026-01-01T00:00:00Z",
        "value_type": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "insight",
    "accessor": "Insight",
    "op": "load",
    "method": "GET",
    "path": "/mrr_movements.json",
    "args": [],
    "select": {
      "direction": "v1",
      "page": 1,
      "per_page": 20,
      "subscription_id": "v1"
    },
    "headers": [],
    "query": [
      "subscription_id",
      "page",
      "per_page",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "mrr": {
        "page": 0,
        "per_page": 10,
        "total_pages": 80,
        "total_entries": 791,
        "currency": "USD",
        "currency_symbol": "$",
        "movements": [
          {
            "timestamp": "2014-12-03T13:59:46-05:00",
            "amount_in_cents": 2173,
            "amount_formatted": "$21.73",
            "description": "Awesome Company signed up for Super Product ($21.73/mo)",
            "category": "new_business",
            "breakouts": {
              "plan_amount_in_cents": 2173,
              "plan_amount_formatted": "$21.73",
              "usage_amount_in_cents": 0,
              "usage_amount_formatted": "$0.00"
            },
            "line_items": [
              {
                "product_id": 306386,
                "component_id": 0,
                "price_point_id": 3856987,
                "name": "Cached Queries",
                "mrr": 2173,
                "mrr_movements": [
                  {
                    "amount": 2173,
                    "category": "new_business",
                    "subscriber_delta": 0,
                    "lead_delta": 0
                  }
                ],
                "quantity": 1,
                "prev_quantity": 0,
                "recurring": true
              }
            ],
            "subscription_id": 12355,
            "subscriber_name": "Amy Smith"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "insight",
    "accessor": "Insight",
    "op": "load",
    "method": "GET",
    "path": "/mrr.json",
    "args": [],
    "select": {
      "at_time": "v1",
      "subscription_id": "v1"
    },
    "headers": [],
    "query": [
      "at_time",
      "subscription_id"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "mrr": {
        "amount_in_cents": 9915593,
        "amount_formatted": "$99,155.93",
        "currency": "USD",
        "currency_symbol": "$",
        "at_time": "2021-02-03T14:23:17-05:00",
        "breakouts": {
          "plan_amount_in_cents": 9913593,
          "plan_amount_formatted": "$99,135.93",
          "usage_amount_in_cents": 2000,
          "usage_amount_formatted": "$20.00"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "insight",
    "accessor": "Insight",
    "op": "load",
    "method": "GET",
    "path": "/stats.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "seller_name": "Acme, Inc.",
      "site_name": "Production",
      "site_id": 12345,
      "site_currency": "USD",
      "stats": {
        "total_subscriptions": 120,
        "subscriptions_today": 4,
        "total_revenue": "$45,978.81",
        "revenue_today": "$1,405.12",
        "revenue_this_month": "$10,000.00",
        "revenue_this_year": "$27,935.24"
      }
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/customer_information/preview.json",
    "action": "customer_information_preview",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "changes": {
        "payer": {
          "before": {
            "last_name": "Beatty"
          },
          "after": {
            "last_name": "Doe"
          }
        },
        "shipping_address": {
          "before": {
            "line2": "Suite 703"
          },
          "after": {
            "line2": "Suite 702"
          }
        },
        "billing_address": {
          "before": {
            "line2": "Suite 703"
          },
          "after": {
            "line2": "Suite 702"
          }
        },
        "custom_fields": {
          "before": [
            {
              "owner_id": 1002,
              "owner_type": "Customer",
              "name": "Color",
              "value": "blue",
              "metadatum_id": 20
            }
          ],
          "after": [
            {
              "owner_id": 1002,
              "owner_type": "Customer",
              "name": "Color",
              "value": "green",
              "metadatum_id": 20
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/deliveries.json",
    "action": "delivery",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/issue.json",
    "action": "issue",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/payments.json",
    "action": "payment",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/refunds.json",
    "action": "refund",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/reopen.json",
    "action": "reopen",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/{uid}/void.json",
    "action": "void",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "create",
    "method": "POST",
    "path": "/invoices/payments.json",
    "action": "payment",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment": {
        "transaction_id": 1,
        "total_amount": "100.00",
        "currency_code": "USD",
        "applications": [
          {
            "invoice_uid": "inv_8gk5bwkct3gqt",
            "application_uid": "pmt_1tr0hgsct3ybx",
            "applied_amount": "50.00"
          },
          {
            "invoice_uid": "inv_7bc6bwkct3lyt",
            "application_uid": "pmt_2",
            "applied_amount": "50.00"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/invoices.json",
    "args": [],
    "select": {
      "consolidation_level": "v1",
      "credit": "v1",
      "custom_field": "v1",
      "customer_id": "v1",
      "date_field": "v1",
      "direction": "v1",
      "discount": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "line_item": "v1",
      "number": "v1",
      "page": 1,
      "payment": "v1",
      "per_page": 50,
      "product_id": "v1",
      "refund": "v1",
      "sort": "v1",
      "start_date": "v1",
      "start_datetime": "v1",
      "status": "v1",
      "subscription_group_uid": "v1",
      "subscription_id": "v1",
      "taxis": "v1"
    },
    "headers": [],
    "query": [
      "start_date",
      "end_date",
      "status",
      "subscription_id",
      "subscription_group_uid",
      "consolidation_level",
      "page",
      "per_page",
      "direction",
      "line_items",
      "discounts",
      "taxes",
      "credits",
      "payments",
      "custom_fields",
      "refunds",
      "date_field",
      "start_datetime",
      "end_datetime",
      "customer_ids",
      "number",
      "product_ids",
      "sort"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "invoices": [
        {
          "uid": "inv_8htcd29wcq3q6",
          "site_id": 51288,
          "customer_id": 20153415,
          "subscription_id": 23277588,
          "number": "125",
          "sequence_number": 125,
          "issue_date": "2018-09-20",
          "due_date": "2018-09-20",
          "paid_date": "2018-09-20",
          "status": "paid",
          "collection_method": "automatic",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "parent",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": 23277588,
          "product_name": "Trial and setup fee",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 20153415,
            "first_name": "Meg",
            "last_name": "Example",
            "organization": "",
            "email": "meg@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "123 I Love Cats Way",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "90210",
            "country": "US"
          },
          "shipping_address": {
            "street": "123 I Love Cats Way",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "90210",
            "country": "US"
          },
          "subtotal_amount": "100.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "100.0",
          "credit_amount": "0.0",
          "paid_amount": "100.0",
          "refund_amount": "0.0",
          "due_amount": "0.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8htcd29wcq3q6?token=n9fr5fxff5v74c7h9srg3cwd"
        },
        {
          "uid": "inv_8hr3546xp4h8n",
          "site_id": 51288,
          "customer_id": 21687686,
          "subscription_id": 22007644,
          "number": "124",
          "sequence_number": 124,
          "issue_date": "2018-09-18",
          "due_date": "2018-09-18",
          "paid_date": null,
          "status": "open",
          "collection_method": "remittance",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "none",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": null,
          "product_name": "Trial and setup fee",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 21687686,
            "first_name": "Charlene",
            "last_name": "Tester",
            "organization": "",
            "email": "food@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "",
            "line2": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": ""
          },
          "shipping_address": {
            "street": "",
            "line2": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": ""
          },
          "subtotal_amount": "100.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "100.0",
          "credit_amount": "0.0",
          "paid_amount": "0.0",
          "refund_amount": "0.0",
          "due_amount": "100.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8hr3546xp4h8n?token=n9fr5fxff5v74c7h9srg3cwd"
        },
        {
          "uid": "inv_8hr3546wdwxkr",
          "site_id": 51288,
          "customer_id": 21687670,
          "subscription_id": 22007627,
          "number": "123",
          "sequence_number": 123,
          "issue_date": "2018-09-18",
          "due_date": "2018-09-18",
          "paid_date": "2018-09-18",
          "status": "paid",
          "collection_method": "automatic",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "none",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": null,
          "product_name": "Trial End - Free",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 21687670,
            "first_name": "Hello",
            "last_name": "World",
            "organization": "123",
            "email": "example@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "123 Anywhere Street",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "02120",
            "country": "US"
          },
          "shipping_address": {
            "street": "",
            "line2": "",
            "city": "Boston",
            "state": "AL",
            "zip": "02120",
            "country": "US"
          },
          "subtotal_amount": "0.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "0.0",
          "credit_amount": "0.0",
          "paid_amount": "0.0",
          "refund_amount": "0.0",
          "due_amount": "0.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8hr3546wdwxkr?token=n9fr5fxff5v74c7h9srg3cwd"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/credit_notes.json",
    "args": [],
    "select": {
      "application": "v1",
      "date_field": "v1",
      "direction": "v1",
      "discount": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "line_item": "v1",
      "page": 1,
      "per_page": 50,
      "refund": "v1",
      "start_date": "v1",
      "start_datetime": "v1",
      "subscription_id": "v1",
      "taxis": "v1"
    },
    "headers": [],
    "query": [
      "subscription_id",
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "page",
      "per_page",
      "direction",
      "line_items",
      "discounts",
      "taxes",
      "refunds",
      "applications"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "credit_notes": [
        {
          "uid": "cn_8m9vbd5kkv7kr",
          "site_id": 20,
          "customer_id": 3,
          "subscription_id": 2,
          "number": "77",
          "sequence_number": 78,
          "issue_date": "2018-12-31",
          "applied_date": "2018-12-31",
          "status": "applied",
          "currency": "USD",
          "memo": "Refund for overpayment",
          "seller": {
            "name": "Acme, Inc.",
            "address": {
              "street": "122 E Houston St",
              "line2": "Suite 105",
              "city": "San Antonio",
              "state": "TX",
              "zip": "78205",
              "country": "US"
            },
            "phone": "555-555-1234 x137"
          },
          "customer": {
            "chargify_id": 3,
            "first_name": "Marty",
            "last_name": "McFly",
            "organization": "Time Travellers, Inc.",
            "email": "timetraveller1985@example.com",
            "reference": null
          },
          "billing_address": {
            "street": "200 Billing Rd.",
            "line2": "Suite 100",
            "city": "Needham",
            "state": "MA",
            "zip": "02494",
            "country": "US"
          },
          "shipping_address": {
            "street": "100 Shipping St.",
            "line2": "Apt 200",
            "city": "Pleasantville",
            "state": "NC",
            "zip": "12345",
            "country": "US"
          },
          "subtotal_amount": "208.69341779",
          "discount_amount": "20.87125167",
          "tax_amount": "12.67783387",
          "total_amount": "200.5",
          "applied_amount": "200.5",
          "remaining_amount": "0.0",
          "line_items": [
            {
              "uid": "cnli_8k5jvdzct4h9x",
              "title": "IP Addresses: 5 to 10 addresses",
              "description": "38.2% credit",
              "quantity": "0.9855",
              "unit_price": "2.0",
              "subtotal_amount": "1.971004",
              "discount_amount": "0.19862831",
              "tax_amount": "0.11963536",
              "tax_included": false,
              "total_amount": "1.89201105",
              "tiered_unit_price": false,
              "period_range_start": "2018-11-30",
              "period_range_end": "2018-11-30",
              "product_id": 85,
              "product_version": 1,
              "component_id": 81,
              "price_point_id": 165
            },
            {
              "uid": "cnli_8kjttvjcjx8b4",
              "title": "Professional Plan",
              "description": "38.2% credit",
              "quantity": "0.382",
              "unit_price": "299.0",
              "subtotal_amount": "114.21127834",
              "discount_amount": "11.42112783",
              "tax_amount": "6.93833516",
              "tax_included": false,
              "total_amount": "109.72848567",
              "tiered_unit_price": false,
              "period_range_start": "2018-12-30",
              "period_range_end": "2018-12-30",
              "product_id": 85,
              "product_version": 1,
              "component_id": null,
              "price_point_id": null
            },
            {
              "uid": "cnli_8kjttvjknzhx7",
              "title": "Small Instance (Hourly)",
              "description": "38.2% credit",
              "quantity": "74.8676",
              "unit_price": "0.12244898",
              "subtotal_amount": "9.16746047",
              "discount_amount": "0.91674605",
              "tax_amount": "0.55692322",
              "tax_included": false,
              "total_amount": "8.80763764",
              "tiered_unit_price": true,
              "period_range_start": "2018-11-30",
              "period_range_end": "2018-11-30",
              "product_id": 85,
              "product_version": 1,
              "component_id": 78,
              "price_point_id": null
            }
          ],
          "discounts": [
            {
              "uid": "cndli_8k5jvdzct4h9y",
              "title": "Multi-service discount (10%)",
              "code": "MULTI3",
              "source_type": "Coupon",
              "source_id": 40,
              "discount_type": "percentage",
              "percentage": "10.0",
              "eligible_amount": "208.69341779",
              "discount_amount": "20.87125167",
              "line_item_breakouts": [
                {
                  "uid": "cnli_8k5jvdzct4h9x",
                  "eligible_amount": "1.971004",
                  "discount_amount": "0.19862831"
                },
                {
                  "uid": "cnli_8kjttvjcjx8b4",
                  "eligible_amount": "114.21127834",
                  "discount_amount": "11.42112783"
                },
                {
                  "uid": "cnli_8kjttvjknzhx7",
                  "eligible_amount": "9.16746047",
                  "discount_amount": "0.91674605"
                }
              ]
            }
          ],
          "taxes": [
            {
              "uid": "cntli_8k5jvdzct4h9z",
              "title": "NC Sales Tax",
              "source_type": "Tax",
              "source_id": 1,
              "percentage": "6.75",
              "taxable_amount": "187.82216613",
              "tax_amount": "12.67783387",
              "line_item_breakouts": [
                {
                  "uid": "cnli_8k5jvdzct4h9x",
                  "taxable_amount": "1.77237569",
                  "tax_amount": "0.11963536"
                },
                {
                  "uid": "cnli_8kjttvjcjx8b4",
                  "taxable_amount": "102.7901505",
                  "tax_amount": "6.93833516"
                },
                {
                  "uid": "cnli_8kjttvjknzhx7",
                  "taxable_amount": "8.25071442",
                  "tax_amount": "0.55692322"
                }
              ],
              "tax_component_breakouts": [
                {
                  "tax_rule_id": 1,
                  "percentage": "6.75",
                  "country_code": "US",
                  "subdivision_code": "NC",
                  "tax_amount": "10.66",
                  "taxable_amount": "157.95",
                  "tax_exempt_amount": "0.0",
                  "non_taxable_amount": "0.0",
                  "tax_name": "NC STATE TAX",
                  "tax_type": "Sales",
                  "rate_type": "General",
                  "tax_authority_type": 45,
                  "state_assigned_no": "",
                  "tax_sub_type": "S"
                }
              ],
              "eu_vat": false,
              "type": "Sales",
              "tax_exempt_amount": "0.0"
            }
          ],
          "applications": [
            {
              "uid": "cdt_8m9vbdbdwd28n",
              "transaction_time": "2018-12-31T21:19:28Z",
              "invoice_uid": "inv_8k5jvdzct4hb2",
              "memo": "Refund for overpayment",
              "applied_amount": "200.5"
            }
          ],
          "refunds": [
            {
              "transaction_id": 329,
              "payment_id": 39,
              "memo": "Refund for overpayment",
              "original_amount": "524.9",
              "applied_amount": "200.5"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/invoices/events.json",
    "action": "event",
    "args": [],
    "select": {
      "event_type": "v1",
      "invoice_uid": "v1",
      "page": 1,
      "per_page": "v1",
      "since_date": "v1",
      "since_id": "v1",
      "with_change_invoice_status": "v1"
    },
    "headers": [],
    "query": [
      "since_date",
      "since_id",
      "page",
      "per_page",
      "invoice_uid",
      "with_change_invoice_status",
      "event_types"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "events": [
        {
          "id": 83,
          "event_type": "apply_payment",
          "event_data": {
            "memo": "Non-Resumable Canceled On Purpose - Standard Plan: Renewal payment",
            "original_amount": "168.61",
            "applied_amount": "168.61",
            "transaction_time": "2018-08-01T16:00:00Z",
            "payment_method": {
              "card_brand": "visa",
              "card_expiration": "12/2022",
              "last_four": null,
              "masked_card_number": "XXXX-XXXX-XXXX-1111",
              "type": "credit_card"
            },
            "consolidation_level": "none"
          },
          "timestamp": "2018-08-01T16:00:00Z",
          "invoice": {
            "id": 614942008934401500,
            "uid": "inv_8gk5bwkct3gqt",
            "site_id": 20,
            "customer_id": 6,
            "subscription_id": 10,
            "number": "25",
            "sequence_number": 25,
            "transaction_time": "2018-08-01T16:00:00Z",
            "created_at": "2018-08-01T16:00:00Z",
            "updated_at": "2018-08-01T16:00:00Z",
            "issue_date": "2018-08-01",
            "due_date": "2018-08-01",
            "paid_date": "2018-08-01",
            "status": "paid",
            "role": "renewal",
            "collection_method": "automatic",
            "payment_instructions": "Please make checks payable to \"Acme, Inc.\"",
            "currency": "USD",
            "consolidation_level": "none",
            "parent_invoice_id": null,
            "subscription_group_id": null,
            "parent_invoice_number": null,
            "product_name": "Standard Plan",
            "product_family_name": "Cloud Compute Servers",
            "seller": {
              "name": "Acme, Inc.",
              "address": {
                "street": null,
                "line2": null,
                "city": null,
                "state": null,
                "zip": null,
                "country": null
              },
              "phone": "555-555-1234 x137",
              "logo_url": null
            },
            "customer": {
              "chargify_id": 6,
              "first_name": "Non-Resumable",
              "last_name": "Canceled On Purpose",
              "organization": null,
              "email": "evan4@example.com"
            },
            "payer": {
              "chargify_id": 6,
              "first_name": "Non-Resumable",
              "last_name": "Canceled On Purpose",
              "organization": null,
              "email": "evan4@example.com"
            },
            "net_terms": 0,
            "memo": "Thanks for your business! If you have any questions, please contact your account manager.",
            "billing_address": {
              "street": "200 Billing Rd.",
              "line2": "Suite 100",
              "city": "Needham",
              "state": "MA",
              "zip": "02494",
              "country": "US"
            },
            "shipping_address": {
              "street": "100 Shipping St.",
              "line2": "Apt 200",
              "city": "Pleasantville",
              "state": "NC",
              "zip": "12345",
              "country": "US"
            },
            "line_items": [
              {
                "uid": "li_8gk5bwkct3gqk",
                "title": "Standard Plan",
                "description": "08/01/2018 - 09/01/2018",
                "quantity": "1.0",
                "unit_price": "99.0",
                "subtotal_amount": "99.0",
                "discount_amount": "9.9",
                "tax_amount": "6.01425",
                "tax_included": false,
                "total_amount": "95.11425",
                "tiered_unit_price": false,
                "period_range_start": "2018-08-01",
                "period_range_end": "2018-09-01",
                "transaction_id": 120,
                "product_id": 84,
                "product_version": 1,
                "component_id": null,
                "price_point_id": null,
                "hide": false
              },
              {
                "uid": "li_8gk5bwkct3gqm",
                "title": "Small Instance (Hourly)",
                "description": "07/22/2018 - 08/01/2018",
                "quantity": "162.0",
                "unit_price": "0.09567901",
                "subtotal_amount": "15.5",
                "discount_amount": "1.55",
                "tax_amount": "0.941625",
                "tax_included": false,
                "total_amount": "14.891625",
                "tiered_unit_price": true,
                "period_range_start": "2018-07-22",
                "period_range_end": "2018-08-01",
                "transaction_id": 121,
                "product_id": 84,
                "product_version": 1,
                "component_id": 76,
                "price_point_id": null,
                "hide": false,
                "component_cost_data": {
                  "rates": [
                    {
                      "component_code_id": null,
                      "price_point_id": 160,
                      "product_id": 84,
                      "quantity": "162.0",
                      "amount": "15.5",
                      "pricing_scheme": "tiered",
                      "tiers": null
                    }
                  ]
                }
              },
              {
                "uid": "li_8gk5bwkct3gqn",
                "title": "Large Instance (Hourly)",
                "description": "07/22/2018 - 08/01/2018",
                "quantity": "194.0",
                "unit_price": "0.24226804",
                "subtotal_amount": "47.0",
                "discount_amount": "4.7",
                "tax_amount": "2.85525",
                "tax_included": false,
                "total_amount": "45.15525",
                "tiered_unit_price": true,
                "period_range_start": "2018-07-22",
                "period_range_end": "2018-08-01",
                "transaction_id": 122,
                "product_id": 84,
                "product_version": 1,
                "component_id": 77,
                "price_point_id": null,
                "hide": false,
                "component_cost_data": {
                  "rates": [
                    {
                      "component_code_id": null,
                      "price_point_id": 161,
                      "product_id": 84,
                      "quantity": "194.0",
                      "amount": "47.0",
                      "pricing_scheme": "tiered",
                      "tiers": null
                    }
                  ]
                }
              }
            ],
            "subtotal_amount": "175.5",
            "discount_amount": "17.55",
            "discounts": [
              {
                "uid": "dli_8gk5bwkct3gqq",
                "title": "Multi-service discount (10%)",
                "description": null,
                "code": "MULTI3",
                "source_type": "Coupon",
                "source_id": 40,
                "discount_type": "percentage",
                "percentage": "10.0",
                "eligible_amount": "175.5",
                "discount_amount": "17.55",
                "transaction_id": 124,
                "line_item_breakouts": [
                  {
                    "uid": "li_8gk5bwkct3gqk",
                    "eligible_amount": "99.0",
                    "discount_amount": "9.9"
                  },
                  {
                    "uid": "li_8gk5bwkct3gqm",
                    "eligible_amount": "15.5",
                    "discount_amount": "1.55"
                  },
                  {
                    "uid": "li_8gk5bwkct3gqn",
                    "eligible_amount": "47.0",
                    "discount_amount": "4.7"
                  }
                ]
              }
            ],
            "tax_amount": "10.66",
            "taxes": [
              {
                "uid": "tli_8gk5bwkct3gqr",
                "title": "NC Sales Tax",
                "description": null,
                "source_type": "Tax",
                "source_id": 1,
                "percentage": "6.75",
                "taxable_amount": "157.95",
                "tax_amount": "10.66",
                "transaction_id": 125,
                "line_item_breakouts": [
                  {
                    "uid": "li_8gk5bwkct3gqk",
                    "taxable_amount": "89.1",
                    "tax_amount": "6.01425"
                  },
                  {
                    "uid": "li_8gk5bwkct3gqm",
                    "taxable_amount": "13.95",
                    "tax_amount": "0.941625"
                  },
                  {
                    "uid": "li_8gk5bwkct3gqn",
                    "taxable_amount": "42.3",
                    "tax_amount": "2.85525"
                  }
                ],
                "tax_component_breakouts": [
                  {
                    "tax_rule_id": 1,
                    "percentage": "6.75",
                    "country_code": "US",
                    "subdivision_code": "NC",
                    "tax_amount": "10.66",
                    "taxable_amount": "157.95",
                    "tax_exempt_amount": "0.0",
                    "non_taxable_amount": "0.0",
                    "tax_name": "NC STATE TAX",
                    "tax_type": "Sales",
                    "rate_type": "General",
                    "tax_authority_type": 45,
                    "state_assigned_no": "",
                    "tax_sub_type": "S"
                  }
                ],
                "eu_vat": false,
                "type": "Sales",
                "tax_exempt_amount": "0.0"
              }
            ],
            "credit_amount": "0.0",
            "refund_amount": "0.0",
            "total_amount": "168.61",
            "paid_amount": "168.61",
            "due_amount": "0.0",
            "payments": [
              {
                "memo": "Non-Resumable Canceled On Purpose - Standard Plan: Renewal payment",
                "original_amount": "168.61",
                "applied_amount": "168.61",
                "transaction_time": "2018-08-01T16:00:00Z",
                "payment_method": {
                  "card_brand": "visa",
                  "card_expiration": "12/2022",
                  "last_four": null,
                  "masked_card_number": "XXXX-XXXX-XXXX-1111",
                  "type": "credit_card"
                },
                "transaction_id": 126,
                "prepayment": false
              }
            ],
            "display_settings": {
              "hide_zero_subtotal_lines": false,
              "include_discounts_on_lines": false
            }
          }
        }
      ],
      "page": 48,
      "per_page": 1,
      "total_pages": 102
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/invoices/{invoice_uid}/segments.json",
    "action": "segment",
    "args": [
      {
        "name": "id",
        "wire": "invoice_uid",
        "value": "p1"
      }
    ],
    "select": {
      "direction": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "invoices": [
        {
          "uid": "inv_8htcd29wcq3q6",
          "site_id": 51288,
          "customer_id": 20153415,
          "subscription_id": 23277588,
          "number": "125",
          "sequence_number": 125,
          "issue_date": "2018-09-20",
          "due_date": "2018-09-20",
          "paid_date": "2018-09-20",
          "status": "paid",
          "collection_method": "automatic",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "parent",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": 23277588,
          "product_name": "Trial and setup fee",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 20153415,
            "first_name": "Meg",
            "last_name": "Example",
            "organization": "",
            "email": "meg@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "123 I Love Cats Way",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "90210",
            "country": "US"
          },
          "shipping_address": {
            "street": "123 I Love Cats Way",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "90210",
            "country": "US"
          },
          "subtotal_amount": "100.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "100.0",
          "credit_amount": "0.0",
          "paid_amount": "100.0",
          "refund_amount": "0.0",
          "due_amount": "0.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8htcd29wcq3q6?token=fb6kpjz5rcr2vttyjs4rcv6y"
        },
        {
          "uid": "inv_8hr3546xp4h8n",
          "site_id": 51288,
          "customer_id": 21687686,
          "subscription_id": 22007644,
          "number": "124",
          "sequence_number": 124,
          "issue_date": "2018-09-18",
          "due_date": "2018-09-18",
          "paid_date": null,
          "status": "open",
          "collection_method": "remittance",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "none",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": null,
          "product_name": "Trial and setup fee",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 21687686,
            "first_name": "Charlene",
            "last_name": "Tester",
            "organization": "",
            "email": "food@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "",
            "line2": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": ""
          },
          "shipping_address": {
            "street": "",
            "line2": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": ""
          },
          "subtotal_amount": "100.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "100.0",
          "credit_amount": "0.0",
          "paid_amount": "0.0",
          "refund_amount": "0.0",
          "due_amount": "100.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8hr3546xp4h8n?token=fb6kpjz5rcr2vttyjs4rcv6y"
        },
        {
          "uid": "inv_8hr3546wdwxkr",
          "site_id": 51288,
          "customer_id": 21687670,
          "subscription_id": 22007627,
          "number": "123",
          "sequence_number": 123,
          "issue_date": "2018-09-18",
          "due_date": "2018-09-18",
          "paid_date": "2018-09-18",
          "status": "paid",
          "collection_method": "automatic",
          "payment_instructions": "Make checks payable to Acme, Inc.",
          "currency": "USD",
          "consolidation_level": "none",
          "parent_invoice_uid": null,
          "parent_invoice_number": null,
          "group_primary_subscription_id": null,
          "product_name": "Trial End - Free",
          "product_family_name": "Billing Plans",
          "seller": {
            "name": "General Goods",
            "address": {
              "street": "123 General Goods Way",
              "line2": "Apt. 10",
              "city": "Boston",
              "state": "MA",
              "zip": "02120",
              "country": "US"
            },
            "phone": "555-555-1212"
          },
          "customer": {
            "chargify_id": 21687670,
            "first_name": "Hello",
            "last_name": "World",
            "organization": "123",
            "email": "example@example.com"
          },
          "memo": "Payment due within 15 days of receipt.",
          "billing_address": {
            "street": "123 Anywhere Street",
            "line2": "",
            "city": "Boston",
            "state": "MA",
            "zip": "02120",
            "country": "US"
          },
          "shipping_address": {
            "street": "",
            "line2": "",
            "city": "Boston",
            "state": "AL",
            "zip": "02120",
            "country": "US"
          },
          "subtotal_amount": "0.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "total_amount": "0.0",
          "credit_amount": "0.0",
          "paid_amount": "0.0",
          "refund_amount": "0.0",
          "due_amount": "0.0",
          "public_url": "https://www.chargifypay.com/invoice/inv_8hr3546wdwxkr?token=fb6kpjz5rcr2vttyjs4rcv6y"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/api_exports/invoices/{batch_id}/rows.json",
    "action": "row",
    "args": [
      {
        "name": "id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "per_page",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "uid": "x",
        "site_id": 1,
        "customer_id": 1,
        "subscription_id": 1,
        "number": "x",
        "sequence_number": 1,
        "transaction_time": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "issue_date": "2024-01-01",
        "due_date": "2024-01-01",
        "paid_date": "2024-01-01",
        "status": {},
        "role": "unset",
        "parent_invoice_id": 1,
        "collection_method": {},
        "payment_instructions": "x",
        "currency": "x",
        "consolidation_level": {},
        "parent_invoice_uid": "x",
        "subscription_group_id": 1,
        "parent_invoice_number": 1,
        "group_primary_subscription_id": 1,
        "product_name": "x",
        "product_family_name": "x",
        "seller": {
          "address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "logo_url": "x",
          "name": "x",
          "phone": "x"
        },
        "customer": {
          "chargify_id": 1,
          "email": "x",
          "first_name": "x",
          "last_name": "x",
          "organization": "x",
          "reference": "x",
          "vat_number": "x"
        },
        "payer": {
          "chargify_id": 1,
          "email": "x",
          "first_name": "x",
          "last_name": "x",
          "organization": "x",
          "vat_number": "x"
        },
        "recipient_emails": [
          "x"
        ],
        "net_terms": 1,
        "memo": "x",
        "billing_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "shipping_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "subtotal_amount": "x",
        "discount_amount": "x",
        "tax_amount": "x",
        "total_amount": "x",
        "credit_amount": "x",
        "debit_amount": "x",
        "refund_amount": "x",
        "paid_amount": "x",
        "due_amount": "x",
        "line_items": [
          {
            "billing_schedule_item_id": 1,
            "component_cost_data": {},
            "component_id": 1,
            "custom_item": true,
            "description": "x",
            "discount_amount": "x",
            "hide": true,
            "kind": "x",
            "period_range_end": "2026-01-01",
            "period_range_start": "2026-01-01",
            "prepaid_allocation_expires_at": "2026-01-01",
            "price_point_id": 1,
            "product_id": 1,
            "product_price_point_id": 1,
            "product_version": 1,
            "quantity": "x",
            "subtotal_amount": "x",
            "tax_amount": "x",
            "tax_included": true,
            "tiered_unit_price": true,
            "title": "x",
            "total_amount": "x",
            "transaction_id": 1,
            "uid": "x",
            "unit_price": "x"
          }
        ],
        "discounts": [
          {
            "code": "x",
            "description": "x",
            "discount_amount": "x",
            "discount_type": "percentage",
            "eligible_amount": "x",
            "line_item_breakouts": [
              {
                "discount_amount": "x",
                "eligible_amount": "x",
                "uid": "x"
              }
            ],
            "percentage": "x",
            "source_id": 1,
            "source_type": "Coupon",
            "title": "x",
            "transaction_id": 1,
            "uid": "x"
          }
        ],
        "taxes": [
          {
            "description": "x",
            "eu_vat": true,
            "line_item_breakouts": [
              {
                "tax_amount": "x",
                "tax_exempt_amount": "x",
                "taxable_amount": "x",
                "uid": "x"
              }
            ],
            "percentage": "x",
            "source_id": 1,
            "source_type": "Tax",
            "tax_amount": "x",
            "tax_component_breakouts": [
              {
                "country_code": "x",
                "non_taxable_amount": "x",
                "percentage": "x",
                "rate_type": "x",
                "state_assigned_no": "x",
                "subdivision_code": "x",
                "tax_amount": "x",
                "tax_authority_type": 1,
                "tax_exempt_amount": "x",
                "tax_name": "x",
                "tax_rule_id": 1,
                "tax_sub_type": "x",
                "tax_type": "x",
                "taxable_amount": "x"
              }
            ],
            "tax_exempt_amount": "x",
            "taxable_amount": "x",
            "title": "x",
            "transaction_id": 1,
            "type": "x",
            "uid": "x"
          }
        ],
        "credits": [
          {
            "applied_amount": "x",
            "credit_note_number": "x",
            "credit_note_uid": "x",
            "memo": "x",
            "original_amount": "x",
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "debits": [
          {
            "applied_amount": "x",
            "debit_note_number": "x",
            "debit_note_uid": "x",
            "memo": "x",
            "original_amount": "x",
            "role": {},
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "refunds": [
          {
            "ach_late_reject": true,
            "applied_amount": "x",
            "gateway_handle": "x",
            "gateway_transaction_id": "x",
            "gateway_used": "x",
            "memo": "x",
            "original_amount": "x",
            "payment_id": 1,
            "transaction_id": 1
          }
        ],
        "payments": [
          {
            "applied_amount": "x",
            "gateway_handle": "x",
            "gateway_transaction_id": "x",
            "gateway_used": "x",
            "memo": "x",
            "original_amount": "x",
            "payment_method": {
              "card_brand": "x",
              "card_expiration": "x",
              "details": "x",
              "kind": "x",
              "last_four": "x",
              "masked_card_number": "x",
              "memo": "x",
              "type": "x"
            },
            "prepayment": true,
            "received_on": "2026-01-01",
            "transaction_id": 1,
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "custom_fields": [
          {
            "metadatum_id": 1,
            "name": "x",
            "owner_id": 1,
            "owner_type": "Customer",
            "value": "x"
          }
        ],
        "display_settings": {
          "hide_zero_subtotal_lines": true,
          "include_discounts_on_lines": true
        },
        "avatax_details": {
          "commit_date": "2026-01-01T00:00:00Z",
          "document_code": "x",
          "id": 1,
          "modify_date": "2026-01-01T00:00:00Z",
          "status": "x"
        },
        "public_url": "x",
        "previous_balance_data": {
          "captured_at": "2026-01-01T00:00:00Z",
          "invoices": [
            {
              "number": "x",
              "outstanding_amount": "x",
              "uid": "x"
            }
          ]
        },
        "public_url_expires_on": "2024-01-21",
        "branding_theme_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/advance_invoice.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": "x",
      "sequence_number": 1,
      "transaction_time": "2026-01-01T00:00:00Z",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z",
      "issue_date": "2024-01-01",
      "due_date": "2024-01-01",
      "paid_date": "2024-01-01",
      "status": {},
      "role": "unset",
      "parent_invoice_id": 1,
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "parent_invoice_uid": "x",
      "subscription_group_id": 1,
      "parent_invoice_number": 1,
      "group_primary_subscription_id": 1,
      "product_name": "x",
      "product_family_name": "x",
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "payer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "vat_number": "x"
      },
      "recipient_emails": [
        "x"
      ],
      "net_terms": 1,
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "debit_amount": "x",
      "refund_amount": "x",
      "paid_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "description": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Coupon",
          "title": "x",
          "transaction_id": 1,
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "description": "x",
          "eu_vat": true,
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_id": 1,
          "source_type": "Tax",
          "tax_amount": "x",
          "tax_component_breakouts": [
            {
              "country_code": "x",
              "non_taxable_amount": "x",
              "percentage": "x",
              "rate_type": "x",
              "state_assigned_no": "x",
              "subdivision_code": "x",
              "tax_amount": "x",
              "tax_authority_type": 1,
              "tax_exempt_amount": "x",
              "tax_name": "x",
              "tax_rule_id": 1,
              "tax_sub_type": "x",
              "tax_type": "x",
              "taxable_amount": "x"
            }
          ],
          "tax_exempt_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "transaction_id": 1,
          "type": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "credit_note_number": "x",
          "credit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "debits": [
        {
          "applied_amount": "x",
          "debit_note_number": "x",
          "debit_note_uid": "x",
          "memo": "x",
          "original_amount": "x",
          "role": {},
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "refunds": [
        {
          "ach_late_reject": true,
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_id": 1,
          "transaction_id": 1
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "gateway_handle": "x",
          "gateway_transaction_id": "x",
          "gateway_used": "x",
          "memo": "x",
          "original_amount": "x",
          "payment_method": {
            "card_brand": "x",
            "card_expiration": "x",
            "details": "x",
            "kind": "x",
            "last_four": "x",
            "masked_card_number": "x",
            "memo": "x",
            "type": "x"
          },
          "prepayment": true,
          "received_on": "2026-01-01",
          "transaction_id": 1,
          "transaction_time": "2026-01-01T00:00:00Z",
          "uid": "x"
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "display_settings": {
        "hide_zero_subtotal_lines": true,
        "include_discounts_on_lines": true
      },
      "avatax_details": {
        "commit_date": "2026-01-01T00:00:00Z",
        "document_code": "x",
        "id": 1,
        "modify_date": "2026-01-01T00:00:00Z",
        "status": "x"
      },
      "public_url": "x",
      "previous_balance_data": {
        "captured_at": "2026-01-01T00:00:00Z",
        "invoices": [
          {
            "number": "x",
            "outstanding_amount": "x",
            "uid": "x"
          }
        ]
      },
      "public_url_expires_on": "2024-01-21",
      "branding_theme_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/credit_notes/{uid}.json",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "cn_8m9vbd5kkv7kr",
      "site_id": 20,
      "customer_id": 3,
      "subscription_id": 2,
      "number": "77",
      "sequence_number": 78,
      "issue_date": "2018-12-31",
      "applied_date": "2018-12-31",
      "status": "applied",
      "currency": "USD",
      "memo": "Refund for overpayment",
      "seller": {
        "name": "Acme, Inc.",
        "address": {
          "street": "122 E Houston St",
          "line2": "Suite 105",
          "city": "San Antonio",
          "state": "TX",
          "zip": "78205",
          "country": "US"
        },
        "phone": "555-555-1234 x137"
      },
      "customer": {
        "chargify_id": 3,
        "first_name": "Marty",
        "last_name": "McFly",
        "organization": "Time Travellers, Inc.",
        "email": "timetraveller1985@example.com",
        "reference": null
      },
      "billing_address": {
        "street": "200 Billing Rd.",
        "line2": "Suite 100",
        "city": "Needham",
        "state": "MA",
        "zip": "02494",
        "country": "US"
      },
      "shipping_address": {
        "street": "100 Shipping St.",
        "line2": "Apt 200",
        "city": "Pleasantville",
        "state": "NC",
        "zip": "12345",
        "country": "US"
      },
      "subtotal_amount": "208.69341779",
      "discount_amount": "20.87125167",
      "tax_amount": "12.67783387",
      "total_amount": "200.5",
      "applied_amount": "200.5",
      "remaining_amount": "0.0",
      "line_items": [
        {
          "uid": "cnli_8k5jvdzct4h9x",
          "title": "IP Addresses: 5 to 10 addresses",
          "description": "38.2% credit",
          "quantity": "0.9855",
          "unit_price": "2.0",
          "subtotal_amount": "1.971004",
          "discount_amount": "0.19862831",
          "tax_amount": "0.11963536",
          "tax_included": false,
          "total_amount": "1.89201105",
          "tiered_unit_price": false,
          "period_range_start": "2018-11-30",
          "period_range_end": "2018-11-30",
          "product_id": 85,
          "product_version": 1,
          "component_id": 81,
          "price_point_id": 165,
          "billing_schedule_item_id": null,
          "custom_item": false
        },
        {
          "uid": "cnli_8kjttvjcjx8b4",
          "title": "Professional Plan",
          "description": "38.2% credit",
          "quantity": "0.382",
          "unit_price": "299.0",
          "subtotal_amount": "114.21127834",
          "discount_amount": "11.42112783",
          "tax_amount": "6.93833516",
          "tax_included": false,
          "total_amount": "109.72848567",
          "tiered_unit_price": false,
          "period_range_start": "2018-12-30",
          "period_range_end": "2018-12-30",
          "product_id": 85,
          "product_version": 1,
          "component_id": null,
          "price_point_id": null,
          "billing_schedule_item_id": null,
          "custom_item": false
        },
        {
          "uid": "cnli_8kjttvjknzhx7",
          "title": "Small Instance (Hourly)",
          "description": "38.2% credit",
          "quantity": "74.8676",
          "unit_price": "0.12244898",
          "subtotal_amount": "9.16746047",
          "discount_amount": "0.91674605",
          "tax_amount": "0.55692322",
          "tax_included": false,
          "total_amount": "8.80763764",
          "tiered_unit_price": true,
          "period_range_start": "2018-11-30",
          "period_range_end": "2018-11-30",
          "product_id": 85,
          "product_version": 1,
          "component_id": 78,
          "price_point_id": null,
          "billing_schedule_item_id": null,
          "custom_item": false
        }
      ],
      "discounts": [
        {
          "uid": "cndli_8k5jvdzct4h9y",
          "title": "Multi-service discount (10%)",
          "code": "MULTI3",
          "source_type": "Coupon",
          "source_id": 40,
          "discount_type": "percentage",
          "percentage": "10.0",
          "eligible_amount": "208.69341779",
          "discount_amount": "20.87125167",
          "line_item_breakouts": [
            {
              "uid": "cnli_8k5jvdzct4h9x",
              "eligible_amount": "1.971004",
              "discount_amount": "0.19862831"
            },
            {
              "uid": "cnli_8kjttvjcjx8b4",
              "eligible_amount": "114.21127834",
              "discount_amount": "11.42112783"
            },
            {
              "uid": "cnli_8kjttvjknzhx7",
              "eligible_amount": "9.16746047",
              "discount_amount": "0.91674605"
            }
          ]
        }
      ],
      "taxes": [
        {
          "uid": "cntli_8k5jvdzct4h9z",
          "title": "NC Sales Tax",
          "source_type": "Tax",
          "source_id": 1,
          "percentage": "6.75",
          "taxable_amount": "187.82216613",
          "tax_amount": "12.67783387",
          "line_item_breakouts": [
            {
              "uid": "cnli_8k5jvdzct4h9x",
              "taxable_amount": "1.77237569",
              "tax_amount": "0.11963536"
            },
            {
              "uid": "cnli_8kjttvjcjx8b4",
              "taxable_amount": "102.7901505",
              "tax_amount": "6.93833516"
            },
            {
              "uid": "cnli_8kjttvjknzhx7",
              "taxable_amount": "8.25071442",
              "tax_amount": "0.55692322"
            }
          ],
          "tax_component_breakouts": [
            {
              "tax_rule_id": 1,
              "percentage": "6.75",
              "country_code": "US",
              "subdivision_code": "NC",
              "tax_amount": "10.66",
              "taxable_amount": "157.95",
              "tax_exempt_amount": "0.0",
              "non_taxable_amount": "0.0",
              "tax_name": "NC STATE TAX",
              "tax_type": "Sales",
              "rate_type": "General",
              "tax_authority_type": 45,
              "state_assigned_no": "",
              "tax_sub_type": "S"
            }
          ],
          "eu_vat": false,
          "type": "Sales",
          "tax_exempt_amount": "0.0"
        }
      ],
      "applications": [
        {
          "uid": "cdt_8m9vbdbdwd28n",
          "transaction_time": "2018-12-31T21:19:28Z",
          "invoice_uid": "inv_8k5jvdzct4hb2",
          "memo": "Refund for overpayment",
          "applied_amount": "200.5"
        }
      ],
      "refunds": [
        {
          "transaction_id": 329,
          "payment_id": 39,
          "memo": "Refund for overpayment",
          "original_amount": "524.9",
          "applied_amount": "200.5"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "list",
    "method": "GET",
    "path": "/invoices/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "inv_8gd8tdhtd3hgr",
      "site_id": 51288,
      "customer_id": 20194505,
      "subscription_id": 20597774,
      "number": "117",
      "sequence_number": 117,
      "issue_date": "2018-07-26",
      "due_date": "2018-07-26",
      "paid_date": "2018-07-26",
      "status": "paid",
      "collection_method": "automatic",
      "payment_instructions": "Make checks payable to Acme, Inc.",
      "currency": "USD",
      "consolidation_level": "none",
      "parent_invoice_uid": null,
      "parent_invoice_number": null,
      "group_primary_subscription_id": null,
      "product_name": "Monthly Product",
      "product_family_name": "Billing Plans",
      "seller": {
        "name": "General Goods",
        "address": {
          "street": "123 General Goods Way",
          "line2": "Apt. 10",
          "city": "Boston",
          "state": "MA",
          "zip": "02120",
          "country": "US"
        },
        "phone": "555-555-1212"
      },
      "customer": {
        "chargify_id": 20194505,
        "first_name": "Joe",
        "last_name": "Example",
        "organization": null,
        "email": "joe@example.com"
      },
      "memo": "Payment due within 15 days of receipt.",
      "billing_address": {
        "street": null,
        "line2": null,
        "city": null,
        "state": null,
        "zip": null,
        "country": null
      },
      "shipping_address": {
        "street": null,
        "line2": null,
        "city": null,
        "state": null,
        "zip": null,
        "country": null
      },
      "subtotal_amount": "100.0",
      "discount_amount": "0.0",
      "tax_amount": "0.0",
      "total_amount": "100.0",
      "credit_amount": "0.0",
      "paid_amount": "100.0",
      "refund_amount": "0.0",
      "due_amount": "0.0",
      "line_items": [
        {
          "uid": "li_8gd8tdhhgk55k",
          "title": "Monthly Product",
          "description": "Jul 26, 2018 - Aug 26, 2018",
          "quantity": "1.0",
          "unit_price": "100.0",
          "subtotal_amount": "100.0",
          "discount_amount": "0.0",
          "tax_amount": "0.0",
          "tax_included": false,
          "total_amount": "100.0",
          "tiered_unit_price": false,
          "period_range_start": "2018-07-26",
          "period_range_end": "2018-08-26",
          "product_id": 4607632,
          "product_version": 1,
          "component_id": null,
          "price_point_id": null
        }
      ],
      "payments": [
        {
          "transaction_time": "2018-07-26T15:22:02Z",
          "memo": "Joe Example - Monthly Product: Renewal payment",
          "original_amount": "100.0",
          "applied_amount": "100.0",
          "payment_method": {
            "card_brand": "bogus",
            "card_expiration": "10/2020",
            "last_four": null,
            "masked_card_number": "XXXX-XXXX-XXXX-1",
            "type": "credit_card"
          },
          "transaction_id": 253028955,
          "prepayment": false,
          "received_on": "2018-07-26"
        }
      ],
      "public_url": "https://www.chargifypay.com/invoice/inv_8jzrw74xq8kxr?token=fb6kpjz5rcr2vttyjs4rcv6y"
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/invoices/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/invoices/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      },
      {
        "name": "uid",
        "wire": "uid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "invoice": {
        "id": 1,
        "uid": "x",
        "site_id": 1,
        "customer_id": 1,
        "subscription_id": 1,
        "number": "x",
        "sequence_number": 1,
        "transaction_time": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "issue_date": "2024-01-01",
        "due_date": "2024-01-01",
        "paid_date": "2024-01-01",
        "status": {},
        "role": "unset",
        "parent_invoice_id": 1,
        "collection_method": {},
        "payment_instructions": "x",
        "currency": "x",
        "consolidation_level": {},
        "parent_invoice_uid": "x",
        "subscription_group_id": 1,
        "parent_invoice_number": 1,
        "group_primary_subscription_id": 1,
        "product_name": "x",
        "product_family_name": "x",
        "seller": {
          "address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "logo_url": "x",
          "name": "x",
          "phone": "x"
        },
        "customer": {
          "chargify_id": 1,
          "email": "x",
          "first_name": "x",
          "last_name": "x",
          "organization": "x",
          "reference": "x",
          "vat_number": "x"
        },
        "payer": {
          "chargify_id": 1,
          "email": "x",
          "first_name": "x",
          "last_name": "x",
          "organization": "x",
          "vat_number": "x"
        },
        "recipient_emails": [
          "x"
        ],
        "net_terms": 1,
        "memo": "x",
        "billing_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "shipping_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "subtotal_amount": "x",
        "discount_amount": "x",
        "tax_amount": "x",
        "total_amount": "x",
        "credit_amount": "x",
        "debit_amount": "x",
        "refund_amount": "x",
        "paid_amount": "x",
        "due_amount": "x",
        "line_items": [
          {
            "billing_schedule_item_id": 1,
            "component_cost_data": {},
            "component_id": 1,
            "custom_item": true,
            "description": "x",
            "discount_amount": "x",
            "hide": true,
            "kind": "x",
            "period_range_end": "2026-01-01",
            "period_range_start": "2026-01-01",
            "prepaid_allocation_expires_at": "2026-01-01",
            "price_point_id": 1,
            "product_id": 1,
            "product_price_point_id": 1,
            "product_version": 1,
            "quantity": "x",
            "subtotal_amount": "x",
            "tax_amount": "x",
            "tax_included": true,
            "tiered_unit_price": true,
            "title": "x",
            "total_amount": "x",
            "transaction_id": 1,
            "uid": "x",
            "unit_price": "x"
          }
        ],
        "discounts": [
          {
            "code": "x",
            "description": "x",
            "discount_amount": "x",
            "discount_type": "percentage",
            "eligible_amount": "x",
            "line_item_breakouts": [
              {
                "discount_amount": "x",
                "eligible_amount": "x",
                "uid": "x"
              }
            ],
            "percentage": "x",
            "source_id": 1,
            "source_type": "Coupon",
            "title": "x",
            "transaction_id": 1,
            "uid": "x"
          }
        ],
        "taxes": [
          {
            "description": "x",
            "eu_vat": true,
            "line_item_breakouts": [
              {
                "tax_amount": "x",
                "tax_exempt_amount": "x",
                "taxable_amount": "x",
                "uid": "x"
              }
            ],
            "percentage": "x",
            "source_id": 1,
            "source_type": "Tax",
            "tax_amount": "x",
            "tax_component_breakouts": [
              {
                "country_code": "x",
                "non_taxable_amount": "x",
                "percentage": "x",
                "rate_type": "x",
                "state_assigned_no": "x",
                "subdivision_code": "x",
                "tax_amount": "x",
                "tax_authority_type": 1,
                "tax_exempt_amount": "x",
                "tax_name": "x",
                "tax_rule_id": 1,
                "tax_sub_type": "x",
                "tax_type": "x",
                "taxable_amount": "x"
              }
            ],
            "tax_exempt_amount": "x",
            "taxable_amount": "x",
            "title": "x",
            "transaction_id": 1,
            "type": "x",
            "uid": "x"
          }
        ],
        "credits": [
          {
            "applied_amount": "x",
            "credit_note_number": "x",
            "credit_note_uid": "x",
            "memo": "x",
            "original_amount": "x",
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "debits": [
          {
            "applied_amount": "x",
            "debit_note_number": "x",
            "debit_note_uid": "x",
            "memo": "x",
            "original_amount": "x",
            "role": {},
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "refunds": [
          {
            "ach_late_reject": true,
            "applied_amount": "x",
            "gateway_handle": "x",
            "gateway_transaction_id": "x",
            "gateway_used": "x",
            "memo": "x",
            "original_amount": "x",
            "payment_id": 1,
            "transaction_id": 1
          }
        ],
        "payments": [
          {
            "applied_amount": "x",
            "gateway_handle": "x",
            "gateway_transaction_id": "x",
            "gateway_used": "x",
            "memo": "x",
            "original_amount": "x",
            "payment_method": {
              "card_brand": "x",
              "card_expiration": "x",
              "details": "x",
              "kind": "x",
              "last_four": "x",
              "masked_card_number": "x",
              "memo": "x",
              "type": "x"
            },
            "prepayment": true,
            "received_on": "2026-01-01",
            "transaction_id": 1,
            "transaction_time": "2026-01-01T00:00:00Z",
            "uid": "x"
          }
        ],
        "custom_fields": [
          {
            "metadatum_id": 1,
            "name": "x",
            "owner_id": 1,
            "owner_type": "Customer",
            "value": "x"
          }
        ],
        "display_settings": {
          "hide_zero_subtotal_lines": true,
          "include_discounts_on_lines": true
        },
        "avatax_details": {
          "commit_date": "2026-01-01T00:00:00Z",
          "document_code": "x",
          "id": 1,
          "modify_date": "2026-01-01T00:00:00Z",
          "status": "x"
        },
        "public_url": "x",
        "previous_balance_data": {
          "captured_at": "2026-01-01T00:00:00Z",
          "invoices": [
            {
              "number": "x",
              "outstanding_amount": "x",
              "uid": "x"
            }
          ]
        },
        "public_url_expires_on": "2024-01-21",
        "branding_theme_id": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "invoice",
    "accessor": "Invoice",
    "op": "update",
    "method": "PUT",
    "path": "/invoices/{uid}/customer_information.json",
    "action": "customer_information",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "elit Ut",
      "site_id": 46283786,
      "customer_id": -62349460,
      "subscription_id": 12801726,
      "number": "dolore et ut",
      "sequence_number": -84210096,
      "issue_date": "2017-01-01",
      "due_date": "2017-01-30",
      "paid_date": "2017-01-28",
      "status": "open",
      "collection_method": "automatic",
      "payment_instructions": "enim officia",
      "currency": "dolore",
      "consolidation_level": "none",
      "product_name": "occaecat veniam culpa",
      "product_family_name": "qui commodo ea dolore cillum",
      "seller": {
        "name": "co",
        "phone": "ullamco in officia"
      },
      "customer": {
        "chargify_id": -55826334,
        "first_name": "deserunt",
        "last_name": "velit dolore",
        "email": "aliquip sed velit Lorem"
      },
      "memo": "ea cupidatat deserunt",
      "billing_address": {
        "street": "qui commodo cupidatat sunt",
        "line2": "ut officia enim",
        "city": "velit minim dolore sint nulla",
        "state": "velit",
        "zip": "ullamco",
        "country": "irure est laborum deserun"
      },
      "shipping_address": {
        "street": "do fugiat dolore deserunt officia",
        "line2": "ipsum cillum",
        "city": "aliqua laboris incididunt ut",
        "state": "et fugiat sit",
        "zip": "dolore do",
        "country": "Excepteur consequat cillum"
      },
      "subtotal_amount": "dolore mollit",
      "discount_amount": "aute",
      "tax_amount": "eu aliqua est velit ea",
      "total_amount": "ut non",
      "credit_amount": "sit",
      "refund_amount": "et eiusmod qui sed",
      "paid_amount": "amet nulla s",
      "due_amount": "non esse ullamco",
      "line_items": [
        {
          "description": "qui",
          "price_point_id": 123,
          "tax_amount": "occaecat deserunt veniam",
          "subtotal_amount": "commodo consequat tempor et Duis"
        },
        {
          "uid": "",
          "subtotal_amount": "ven"
        },
        {
          "price_point_id": 94750853,
          "product_id": 79058036,
          "tax_amount": "1.0",
          "subtotal_amount": "128.5"
        }
      ],
      "discounts": [
        {
          "title": "nostrud"
        }
      ],
      "taxes": [
        {
          "source_type": "Tax",
          "line_item_breakouts": [
            {
              "uid": "in ipsum",
              "tax_amount": "velit",
              "taxable_amount": "quis sint"
            },
            {
              "uid": "co"
            }
          ]
        },
        {
          "uid": "enim irure in",
          "title": "incididunt est mollit irure"
        }
      ],
      "credits": [
        {
          "uid": "exercitation eiusmod",
          "transaction_time": "2024-01-23T13:51:27Z",
          "credit_note_number": "qui fugiat labore laborum",
          "credit_note_uid": "ipsum sunt"
        },
        {
          "memo": "dolor"
        }
      ],
      "refunds": [
        {
          "memo": "deserunt elit"
        },
        {
          "original_amount": "Duis nulla"
        }
      ],
      "payments": [
        {
          "prepayment": false,
          "memo": "enim Excepteur Lorem magna sit"
        },
        {
          "transaction_time": "2024-01-23T13:51:27Z",
          "prepayment": false,
          "payment_method": {
            "details": "labore ut et",
            "kind": "dolor qui",
            "memo": "ea commodo",
            "type": "fugiat veniam",
            "card_brand": "consequat",
            "card_expiration": "aliqua a",
            "last_four": "ut in consectetur sed",
            "masked_card_number": "minim ea ullamco nostrud tempor"
          }
        },
        {
          "prepayment": true,
          "transaction_id": 67527234
        }
      ],
      "custom_fields": [
        {
          "name": "CustomerStatus",
          "value": "Gold",
          "owner_type": "Customer",
          "owner_id": 18482224,
          "metadatum_id": 13924
        },
        {
          "name": "SubscriptionTag",
          "value": "Special Subscriber",
          "owner_type": "Subscription",
          "owner_id": 21344,
          "metadatum_id": 139245
        }
      ],
      "public_url": "dolo",
      "previous_balance_data": {
        "captured_at": "2024-01-09T11:22:23-05:00",
        "invoices": [
          {
            "number": "veniam dolore labore ipsum cupidatat",
            "uid": "tempor",
            "outstanding_amount": "Excepteur nostrud irur"
          },
          {
            "outstanding_amount": "id"
          }
        ]
      },
      "public_url_expires_on": "2024-11-21"
    },
    "idField": "id"
  },
  {
    "entity": "list_sale_rep_item",
    "accessor": "ListSaleRepItem",
    "op": "list",
    "method": "GET",
    "path": "/sellers/{seller_id}/sales_reps.json",
    "args": [
      {
        "name": "seller_id",
        "wire": "seller_id",
        "value": "p1"
      }
    ],
    "select": {
      "authorization": "v1",
      "live_mode": "v1",
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "live_mode",
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 48,
        "full_name": "John Candy",
        "subscriptions_count": 2,
        "mrr_data": {
          "november_2019": {
            "mrr": "$0.00",
            "usage": "$0.00",
            "recurring": "$0.00"
          },
          "december_2019": {
            "mrr": "$0.00",
            "usage": "$0.00",
            "recurring": "$0.00"
          },
          "january_2020": {
            "mrr": "$400.00",
            "usage": "$0.00",
            "recurring": "$400.00"
          },
          "february_2020": {
            "mrr": "$400.00",
            "usage": "$0.00",
            "recurring": "$400.00"
          },
          "march_2020": {
            "mrr": "$400.00",
            "usage": "$0.00",
            "recurring": "$400.00"
          },
          "april_2020": {
            "mrr": "$400.00",
            "usage": "$0.00",
            "recurring": "$400.00"
          }
        },
        "test_mode": true
      },
      {
        "id": 49,
        "full_name": "Josh Acme",
        "subscriptions_count": 1,
        "mrr_data": {
          "november_2019": {
            "mrr": "$0.00",
            "usage": "$0.00",
            "recurring": "$0.00"
          },
          "december_2019": {
            "mrr": "$0.00",
            "usage": "$0.00",
            "recurring": "$0.00"
          },
          "january_2020": {
            "mrr": "$200.00",
            "usage": "$0.00",
            "recurring": "$200.00"
          },
          "february_2020": {
            "mrr": "$200.00",
            "usage": "$0.00",
            "recurring": "$200.00"
          },
          "march_2020": {
            "mrr": "$200.00",
            "usage": "$0.00",
            "recurring": "$200.00"
          },
          "april_2020": {
            "mrr": "$200.00",
            "usage": "$0.00",
            "recurring": "$200.00"
          }
        },
        "test_mode": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "list_segment",
    "accessor": "ListSegment",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "segments": [
        {
          "component_id": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "event_based_billing_metric_id": 1,
          "id": 1,
          "price_point_id": 1,
          "prices": [
            {
              "component_id": 1,
              "ending_quantity": 1,
              "formatted_unit_price": "x",
              "id": 1,
              "price_point_id": 1,
              "segment_id": 1,
              "starting_quantity": 1,
              "unit_price": "x"
            }
          ],
          "pricing_scheme": {},
          "segment_property_1_value": "x",
          "segment_property_2_value": "x",
          "segment_property_3_value": "x",
          "segment_property_4_value": "x",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_segment",
    "accessor": "ListSegment",
    "op": "list",
    "method": "GET",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "segments": [
        {
          "component_id": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "event_based_billing_metric_id": 1,
          "id": 1,
          "price_point_id": 1,
          "prices": [
            {
              "component_id": 1,
              "ending_quantity": 1,
              "formatted_unit_price": "x",
              "id": 1,
              "price_point_id": 1,
              "segment_id": 1,
              "starting_quantity": 1,
              "unit_price": "x"
            }
          ],
          "pricing_scheme": {},
          "segment_property_1_value": "x",
          "segment_property_2_value": "x",
          "segment_property_3_value": "x",
          "segment_property_4_value": "x",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_segment",
    "accessor": "ListSegment",
    "op": "update",
    "method": "PUT",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "segments": [
        {
          "component_id": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "event_based_billing_metric_id": 1,
          "id": 1,
          "price_point_id": 1,
          "prices": [
            {
              "component_id": 1,
              "ending_quantity": 1,
              "formatted_unit_price": "x",
              "id": 1,
              "price_point_id": 1,
              "segment_id": 1,
              "starting_quantity": 1,
              "unit_price": "x"
            }
          ],
          "pricing_scheme": {},
          "segment_property_1_value": "x",
          "segment_property_2_value": "x",
          "segment_property_3_value": "x",
          "segment_property_4_value": "x",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "offer",
    "accessor": "Offer",
    "op": "create",
    "method": "POST",
    "path": "/offers.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "offer": {
        "id": 3,
        "site_id": 2,
        "product_family_id": 4,
        "product_family_name": "Chargify",
        "product_id": 31,
        "product_name": "30-Day Square Trial",
        "product_price_in_cents": 2000,
        "product_revisable_number": 0,
        "name": "Solo",
        "handle": "han_shot_first",
        "description": "A Star Wars Story",
        "created_at": "2018-06-08T14:51:52-04:00",
        "updated_at": "2018-06-08T14:51:52-04:00",
        "archived_at": null,
        "product_price_point_name": "Default",
        "offer_items": [
          {
            "component_id": 24,
            "component_name": "Invoices",
            "component_unit_price": "3.0",
            "price_point_id": 104,
            "price_point_name": "Original",
            "starting_quantity": "1.0",
            "editable": false
          }
        ],
        "offer_discounts": [
          {
            "coupon_id": 3,
            "coupon_code": "DEF456",
            "coupon_name": "IB Loyalty"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "offer",
    "accessor": "Offer",
    "op": "list",
    "method": "GET",
    "path": "/offers.json",
    "args": [],
    "select": {
      "include_archived": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "include_archived"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "offers": [
        {
          "id": 239,
          "site_id": 48110,
          "product_family_id": 1025627,
          "product_family_name": "Gold",
          "product_id": 110,
          "product_name": "Pro",
          "product_price_in_cents": 1000,
          "product_revisable_number": 0,
          "product_price_point_id": 138,
          "product_price_point_name": "Default",
          "name": "Third Offer",
          "handle": "third",
          "description": "",
          "created_at": "2018-08-03T09:56:11-05:00",
          "updated_at": "2018-08-03T09:56:11-05:00",
          "archived_at": null,
          "offer_items": [
            {
              "component_id": 426665,
              "component_name": "Database Size (GB)",
              "component_unit_price": "1.0",
              "price_point_id": 149438,
              "price_point_name": "Auto-created",
              "starting_quantity": "0.0",
              "editable": false
            }
          ],
          "offer_discounts": [
            {
              "coupon_id": 234,
              "coupon_code": "GR8_CUSTOMER",
              "coupon_name": "Multi-service Discount"
            }
          ],
          "offer_signup_pages": [
            {
              "id": 356482,
              "nickname": "ggoods",
              "enabled": true,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargifypay.com/subscribe/hjpvhnw63tzy"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "offer",
    "accessor": "Offer",
    "op": "load",
    "method": "GET",
    "path": "/offers/{offer_id}.json",
    "action": "offer_id",
    "args": [
      {
        "name": "offer_id",
        "wire": "offer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "offer": {
        "archived_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "description": "x",
        "handle": "x",
        "id": 1,
        "name": "x",
        "offer_discounts": [
          {
            "coupon_code": "x",
            "coupon_id": 1,
            "coupon_name": "x"
          }
        ],
        "offer_items": [
          {
            "component_id": 1,
            "component_name": "x",
            "component_unit_price": "x",
            "currency_prices": [
              {
                "currency": "x",
                "formatted_price": "x",
                "id": 1,
                "price": 1,
                "price_id": 1,
                "price_point_id": 1,
                "product_price_point_id": 1,
                "role": {}
              }
            ],
            "editable": true,
            "interval": 1,
            "interval_unit": {},
            "price_point_id": 1,
            "price_point_name": "x",
            "starting_quantity": "x"
          }
        ],
        "offer_signup_pages": [
          {
            "enabled": true,
            "id": 1,
            "nickname": "x",
            "return_params": "x",
            "return_url": "x",
            "url": "x"
          }
        ],
        "product_family_id": 1,
        "product_family_name": "x",
        "product_id": 1,
        "product_name": "x",
        "product_price_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_name": "x",
        "product_revisable_number": 1,
        "site_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "offer",
    "accessor": "Offer",
    "op": "update",
    "method": "PUT",
    "path": "/offers/{offer_id}/archive.json",
    "action": "archive",
    "args": [
      {
        "name": "id",
        "wire": "offer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "offer",
    "accessor": "Offer",
    "op": "update",
    "method": "PUT",
    "path": "/offers/{offer_id}/unarchive.json",
    "action": "unarchive",
    "args": [
      {
        "name": "id",
        "wire": "offer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "one_time_token",
    "accessor": "OneTimeToken",
    "op": "load",
    "method": "GET",
    "path": "/one_time_tokens/{chargify_token}.json",
    "action": "chargify_token",
    "args": [
      {
        "name": "chargify_token",
        "wire": "chargify_token",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment_profile": {
        "billing_address": "x",
        "billing_address_2": "x",
        "billing_city": "x",
        "billing_country": "x",
        "billing_state": "x",
        "billing_zip": "x",
        "card_type": {},
        "current_vault": {},
        "customer_id": "x",
        "customer_vault_token": "x",
        "disabled": true,
        "expiration_month": 1,
        "expiration_year": 1,
        "first_name": "x",
        "gateway_handle": "x",
        "id": "x",
        "last_name": "x",
        "masked_card_number": "x",
        "payment_type": "x",
        "site_gateway_setting_id": 1,
        "vault_token": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
    "action": "change_payment_profile",
    "args": [
      {
        "name": "id",
        "wire": "payment_profile_id",
        "value": "p1"
      },
      {
        "name": "subscription_group_id",
        "wire": "uid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "payment_profile": {
        "id": 10211899,
        "first_name": "Amelia",
        "last_name": "Example",
        "masked_card_number": "XXXX-XXXX-XXXX-1",
        "card_type": "bogus",
        "expiration_month": 2,
        "expiration_year": 2018,
        "customer_id": 14399371,
        "current_vault": "bogus",
        "vault_token": "1",
        "billing_address": "",
        "billing_city": "",
        "billing_state": "",
        "billing_zip": "",
        "billing_country": "",
        "customer_vault_token": null,
        "billing_address_2": "",
        "payment_type": "credit_card",
        "site_gateway_setting_id": 1,
        "gateway_handle": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
    "action": "change_payment_profile",
    "args": [
      {
        "name": "id",
        "wire": "payment_profile_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "payment_profile": {
        "id": 10211899,
        "first_name": "Amelia",
        "last_name": "Example",
        "masked_card_number": "XXXX-XXXX-XXXX-1",
        "card_type": "bogus",
        "expiration_month": 2,
        "expiration_year": 2018,
        "customer_id": 14399371,
        "current_vault": "bogus",
        "vault_token": "1",
        "billing_address": "",
        "billing_city": "",
        "billing_state": "",
        "billing_zip": "",
        "billing_country": "",
        "customer_vault_token": null,
        "billing_address_2": "",
        "payment_type": "credit_card",
        "site_gateway_setting_id": 1,
        "gateway_handle": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/request_payment_profiles_update.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "create",
    "method": "POST",
    "path": "/payment_profiles.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment_profile": {
        "first_name": "Jessica",
        "last_name": "Test",
        "card_type": "visa",
        "masked_card_number": "XXXX-XXXX-XXXX-1111",
        "expiration_month": 10,
        "expiration_year": 2018,
        "customer_id": 19195410,
        "current_vault": "bogus",
        "vault_token": "1",
        "billing_address": "123 Main St.",
        "billing_city": "Boston",
        "billing_state": "MA",
        "billing_zip": "02120",
        "billing_country": "US",
        "customer_vault_token": null,
        "billing_address_2": null,
        "payment_type": "credit_card",
        "site_gateway_setting_id": 1,
        "gateway_handle": "handle",
        "disabled": false
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "list",
    "method": "GET",
    "path": "/payment_profiles.json",
    "args": [],
    "select": {
      "customer_id": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "customer_id"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "payment_profile": {
          "id": 10089892,
          "first_name": "Chester",
          "last_name": "Tester",
          "created_at": "2025-01-01T00:00:00-05:00",
          "updated_at": "2025-01-01T00:00:00-05:00",
          "customer_id": 14543792,
          "current_vault": "bogus",
          "vault_token": "0011223344",
          "billing_address": "456 Juniper Court",
          "billing_city": "Boulder",
          "billing_state": "CO",
          "billing_zip": "80302",
          "billing_country": "US",
          "customer_vault_token": null,
          "billing_address_2": "",
          "bank_name": "Bank of Kansas City",
          "masked_bank_routing_number": "XXXX6789",
          "masked_bank_account_number": "XXXX3344",
          "bank_account_type": "checking",
          "bank_account_holder_type": "personal",
          "payment_type": "bank_account",
          "verified": true,
          "site_gateway_setting_id": 1,
          "gateway_handle": "handle"
        }
      },
      {
        "payment_profile": {
          "id": 10188522,
          "first_name": "Frankie",
          "last_name": "Tester",
          "created_at": "2025-01-01T00:00:00-05:00",
          "updated_at": "2025-01-01T00:00:00-05:00",
          "customer_id": 14543712,
          "current_vault": "bogus",
          "vault_token": "123456789",
          "billing_address": "123 Montana Way",
          "billing_city": "Los Angeles",
          "billing_state": "CA",
          "billing_zip": "90210",
          "billing_country": "US",
          "customer_vault_token": null,
          "billing_address_2": "",
          "bank_name": "Bank of Kansas City",
          "masked_bank_routing_number": "XXXX6789",
          "masked_bank_account_number": "XXXX6789",
          "bank_account_type": "checking",
          "bank_account_holder_type": "personal",
          "payment_type": "bank_account",
          "verified": true,
          "site_gateway_setting_id": 1,
          "gateway_handle": "handle"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "load",
    "method": "GET",
    "path": "/payment_profiles/{payment_profile_id}.json",
    "action": "payment_profile_id",
    "args": [
      {
        "name": "payment_profile_id",
        "wire": "payment_profile_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment_profile": {
        "id": 10088716,
        "first_name": "Test",
        "last_name": "Subscription",
        "masked_card_number": "XXXX-XXXX-XXXX-1",
        "card_type": "bogus",
        "expiration_month": 1,
        "expiration_year": 2022,
        "created_at": "2025-01-01T00:00:00-05:00",
        "updated_at": "2025-01-01T00:00:00-05:00",
        "customer_id": 14543792,
        "current_vault": "bogus",
        "vault_token": "1",
        "billing_address": "123 Montana Way",
        "billing_city": "Billings",
        "billing_state": "MT",
        "billing_zip": "59101",
        "billing_country": "US",
        "customer_vault_token": null,
        "billing_address_2": "",
        "payment_type": "credit_card",
        "site_gateway_setting_id": 1,
        "gateway_handle": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json",
    "action": "payment_profile_id",
    "args": [
      {
        "name": "payment_profile_id",
        "wire": "payment_profile_id",
        "value": "p1"
      },
      {
        "name": "subscription_group_id",
        "wire": "uid",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json",
    "action": "payment_profile_id",
    "args": [
      {
        "name": "payment_profile_id",
        "wire": "payment_profile_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "remove",
    "method": "DELETE",
    "path": "/payment_profiles/{payment_profile_id}.json",
    "action": "payment_profile_id",
    "args": [
      {
        "name": "payment_profile_id",
        "wire": "payment_profile_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "update",
    "method": "PUT",
    "path": "/bank_accounts/{bank_account_id}/verification.json",
    "args": [
      {
        "name": "bank_account_id",
        "wire": "bank_account_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment_profile": {
        "id": 10089892,
        "first_name": "John",
        "last_name": "Doe",
        "customer_id": 14543792,
        "current_vault": "stripe_connect",
        "vault_token": "cus_0123abc456def",
        "billing_address": "456 Juniper Court",
        "billing_city": "Boulder",
        "billing_state": "CO",
        "billing_zip": "80302",
        "billing_country": "US",
        "customer_vault_token": null,
        "billing_address_2": "",
        "bank_name": "Bank of Kansas City",
        "masked_bank_routing_number": "XXXX6789",
        "masked_bank_account_number": "XXXX3344",
        "bank_account_type": "checking",
        "bank_account_holder_type": "personal",
        "payment_type": "bank_account"
      }
    },
    "idField": "id"
  },
  {
    "entity": "payment_profile",
    "accessor": "PaymentProfile",
    "op": "update",
    "method": "PUT",
    "path": "/payment_profiles/{payment_profile_id}.json",
    "action": "payment_profile_id",
    "args": [
      {
        "name": "payment_profile_id",
        "wire": "payment_profile_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "payment_profile": {
        "id": 10088716,
        "first_name": "Test",
        "last_name": "Subscription",
        "billing_address": "123 Montana Way",
        "billing_city": "Billings",
        "billing_state": "MT",
        "billing_zip": "59101",
        "billing_country": "US",
        "billing_address_2": "",
        "payment_type": "bank_account"
      }
    },
    "idField": "id"
  },
  {
    "entity": "prepayment",
    "accessor": "Prepayment",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json",
    "action": "refund",
    "args": [
      {
        "name": "id",
        "wire": "prepayment_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "prepayment": {
        "id": 1,
        "subscription_id": 1,
        "amount_in_cents": 1,
        "remaining_amount_in_cents": 1,
        "refunded_amount_in_cents": 1,
        "details": "x",
        "external": true,
        "memo": "x",
        "payment_type": {},
        "created_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "create",
    "method": "POST",
    "path": "/product_families/{product_family_id}/products.json",
    "args": [
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "product": {
        "id": 4364984,
        "name": "Gold Plan",
        "handle": "gold",
        "description": "This is our gold plan.",
        "accounting_code": "123",
        "request_credit_card": true,
        "created_at": "2016-11-04T16:31:15-04:00",
        "updated_at": "2016-11-04T16:31:15-04:00",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "expiration_interval_unit": null,
        "initial_charge_in_cents": null,
        "trial_price_in_cents": null,
        "trial_interval": null,
        "trial_interval_unit": null,
        "archived_at": null,
        "require_credit_card": true,
        "return_params": null,
        "taxable": false,
        "update_return_url": null,
        "initial_charge_after_trial": false,
        "version_number": 1,
        "update_return_params": null,
        "product_family": {
          "id": 527890,
          "name": "Acme Projects",
          "description": "",
          "handle": "billing-plans",
          "accounting_code": null
        },
        "public_signup_pages": [
          {
            "id": 301078,
            "return_url": null,
            "return_params": null,
            "url": "https://general-goods.chargify.com/subscribe/ftgbpq7f5qpr/gold"
          }
        ],
        "product_price_point_name": "Default"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/products.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "include": "v1",
      "include_archived": "v1",
      "include_feature": "v1",
      "page": 1,
      "per_page": 50,
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "date_field",
      "filter",
      "end_date",
      "end_datetime",
      "start_date",
      "start_datetime",
      "page",
      "per_page",
      "include_archived",
      "include",
      "include_features"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "product": {
          "id": 0,
          "name": "string",
          "handle": "string",
          "description": "string",
          "accounting_code": "string",
          "request_credit_card": true,
          "expiration_interval": 0,
          "expiration_interval_unit": "month",
          "created_at": "2023-11-23T10:28:34-05:00",
          "updated_at": "2023-11-23T10:28:34-05:00",
          "price_in_cents": 0,
          "interval": 0,
          "interval_unit": "month",
          "initial_charge_in_cents": 0,
          "trial_price_in_cents": 0,
          "trial_interval": 0,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "string",
          "taxable": true,
          "update_return_url": "string",
          "initial_charge_after_trial": true,
          "version_number": 0,
          "update_return_params": "string",
          "product_family": {
            "id": 0,
            "name": "string",
            "handle": "string",
            "accounting_code": null,
            "description": "string",
            "created_at": "2021-05-05T16:00:21-04:00",
            "updated_at": "2021-05-05T16:00:21-04:00"
          },
          "public_signup_pages": [
            {
              "id": 0,
              "return_url": "string",
              "return_params": "string",
              "url": "string"
            }
          ],
          "product_price_point_name": "string",
          "request_billing_address": true,
          "require_billing_address": true,
          "require_shipping_address": true,
          "use_site_exchange_rate": true,
          "tax_code": "string",
          "default_product_price_point_id": 0
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "list",
    "method": "GET",
    "path": "/product_families/{product_family_id}/products.json",
    "args": [
      {
        "name": "product_family_id",
        "wire": "product_family_id",
        "value": "p1"
      }
    ],
    "select": {
      "date_field": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "include": "v1",
      "include_archived": "v1",
      "page": 1,
      "per_page": 50,
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "date_field",
      "filter",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "include_archived",
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "product": {
          "id": 3801242,
          "name": "Free product",
          "handle": "zero-dollar-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2016-04-21T16:08:39-04:00",
          "updated_at": "2016-08-03T11:27:53-04:00",
          "price_in_cents": 10000,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": 0,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "initial_charge_after_trial": false,
          "version_number": 4,
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "description": "",
            "handle": "billing-plans",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 283460,
              "return_url": null,
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/smcc4j3d2w6h/zero-dollar-product"
            }
          ],
          "product_price_point_name": "Default",
          "use_site_exchange_rate": true
        }
      },
      {
        "product": {
          "id": 3858146,
          "name": "Calendar Billing Product",
          "handle": "calendar-billing-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2016-07-05T13:07:38-04:00",
          "updated_at": "2016-07-05T13:07:38-04:00",
          "price_in_cents": 10000,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "description": "",
            "handle": "billing-plans",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 289193,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/gxdbfxzxhcjq/calendar-billing-product"
            }
          ],
          "product_price_point_name": "Default",
          "use_site_exchange_rate": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "load",
    "method": "GET",
    "path": "/products/{product_id}.json",
    "action": "product_id",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {
      "include_feature": "v1"
    },
    "headers": [],
    "query": [
      "include_features"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "product": {
        "id": 4535635,
        "name": "Paid Annual Seats",
        "handle": "paid-annual-seats",
        "description": "Paid annual seats for our commercial enterprise product",
        "accounting_code": "paid-annual-seats",
        "request_credit_card": true,
        "expiration_interval": 1,
        "expiration_interval_unit": "day",
        "created_at": "2017-08-25T10:25:31-05:00",
        "updated_at": "2018-01-16T12:58:04-06:00",
        "price_in_cents": 10000,
        "interval": 12,
        "interval_unit": "month",
        "initial_charge_in_cents": 4900,
        "trial_price_in_cents": 1000,
        "trial_interval": 14,
        "trial_interval_unit": "day",
        "archived_at": null,
        "require_credit_card": true,
        "return_params": "id={subscription_id}&ref={customer_reference}",
        "taxable": true,
        "update_return_url": "http://www.example.com",
        "tax_code": "D0000000",
        "initial_charge_after_trial": false,
        "version_number": 4,
        "update_return_params": "id={subscription_id}&ref={customer_reference}",
        "product_family": {
          "id": 1025627,
          "name": "Acme Products",
          "description": "",
          "handle": "acme-products",
          "accounting_code": null
        },
        "product_price_point_name": "Default"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "load",
    "method": "GET",
    "path": "/products/handle/{api_handle}.json",
    "args": [
      {
        "name": "api_handle",
        "wire": "api_handle",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "product": {
        "id": 3903594,
        "name": "No cost product",
        "handle": "no-cost-product",
        "description": "",
        "accounting_code": "",
        "request_credit_card": true,
        "expiration_interval": null,
        "expiration_interval_unit": "never",
        "created_at": "2016-09-02T17:11:29-04:00",
        "updated_at": "2016-11-30T11:46:13-05:00",
        "price_in_cents": 0,
        "interval": 1,
        "interval_unit": "month",
        "initial_charge_in_cents": null,
        "trial_price_in_cents": 5,
        "trial_interval": 1,
        "trial_interval_unit": "month",
        "archived_at": null,
        "require_credit_card": false,
        "return_params": "reference=5678",
        "taxable": false,
        "update_return_url": "",
        "initial_charge_after_trial": false,
        "version_number": 1,
        "update_return_params": "reference=5678",
        "product_family": {
          "id": 527890,
          "name": "Acme Projects",
          "description": "",
          "handle": "billing-plans",
          "accounting_code": null
        },
        "public_signup_pages": [
          {
            "id": 281174,
            "return_url": "",
            "return_params": "",
            "url": "https://general-goods.chargify.com/subscribe/xgdxtk4vhtbz/no-cost-product"
          },
          {
            "id": 282270,
            "return_url": "",
            "return_params": "",
            "url": "https://general-goods.chargify.com/subscribe/xxqmrgtsbd9k/no-cost-product"
          },
          {
            "id": 291587,
            "return_url": "",
            "return_params": "",
            "url": "https://general-goods.chargify.com/subscribe/pvhwss7zjjnh/no-cost-product"
          }
        ],
        "product_price_point_name": "Default"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "remove",
    "method": "DELETE",
    "path": "/products/{product_id}.json",
    "action": "product_id",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "product": {
        "id": 4535638,
        "name": "Business Monthly",
        "handle": null,
        "description": "Business Monthly",
        "accounting_code": "",
        "request_credit_card": true,
        "expiration_interval": null,
        "expiration_interval_unit": "never",
        "created_at": "2017-08-25T10:25:31-05:00",
        "updated_at": "2018-01-16T13:02:44-06:00",
        "price_in_cents": 4900,
        "interval": 1,
        "interval_unit": "month",
        "initial_charge_in_cents": null,
        "trial_price_in_cents": 0,
        "trial_interval": 1,
        "trial_interval_unit": "day",
        "archived_at": "2018-01-16T13:02:44-06:00",
        "require_credit_card": false,
        "return_params": "",
        "taxable": false,
        "update_return_url": "",
        "tax_code": "",
        "initial_charge_after_trial": false,
        "version_number": 1,
        "update_return_params": "",
        "product_family": {
          "id": 1025627,
          "name": "Acme Products",
          "description": "",
          "handle": "acme-products",
          "accounting_code": null
        },
        "product_price_point_name": "Default"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product",
    "accessor": "Product",
    "op": "update",
    "method": "PUT",
    "path": "/products/{product_id}.json",
    "action": "product_id",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "product": {
        "id": 4365034,
        "name": "Platinum Plan",
        "handle": "platinum",
        "description": "This is our platinum plan.",
        "accounting_code": "123",
        "request_credit_card": true,
        "created_at": "2016-11-04T16:34:29-04:00",
        "updated_at": "2016-11-04T16:37:11-04:00",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "initial_charge_in_cents": null,
        "trial_price_in_cents": null,
        "trial_interval": null,
        "trial_interval_unit": null,
        "archived_at": null,
        "require_credit_card": true,
        "return_params": null,
        "taxable": false,
        "update_return_url": null,
        "initial_charge_after_trial": false,
        "version_number": 1,
        "update_return_params": null,
        "product_family": {
          "id": 527890,
          "name": "Acme Projects",
          "description": "",
          "handle": "billing-plans",
          "accounting_code": null
        },
        "public_signup_pages": [
          {
            "id": 301079,
            "return_url": null,
            "return_params": null,
            "url": "https://general-goods.chargify.com/subscribe/wgyd96tb5pj9/platinum"
          }
        ],
        "product_price_point_name": "Original"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_family",
    "accessor": "ProductFamily",
    "op": "create",
    "method": "POST",
    "path": "/product_families.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "product_family": {
        "id": 933860,
        "name": "Acme Projects",
        "description": "Amazing project management tool",
        "handle": "acme-projects",
        "accounting_code": null,
        "surcharging": false
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_family",
    "accessor": "ProductFamily",
    "op": "list",
    "method": "GET",
    "path": "/product_families.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "product_family": {
          "id": 37,
          "name": "Acme Projects",
          "description": null,
          "handle": "acme-projects",
          "accounting_code": null,
          "surcharging": false,
          "created_at": "2013-02-20T15:05:51-07:00",
          "updated_at": "2013-02-20T15:05:51-07:00",
          "archived_at": null
        }
      },
      {
        "product_family": {
          "id": 155,
          "name": "Bat Family",
          "description": "Another family.",
          "handle": "bat-family",
          "accounting_code": null,
          "surcharging": true,
          "created_at": "2014-04-16T12:41:13-06:00",
          "updated_at": "2014-04-16T12:41:13-06:00",
          "archived_at": "2024-11-05T09:30:00-07:00"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "product_family",
    "accessor": "ProductFamily",
    "op": "load",
    "method": "GET",
    "path": "/product_families/{id}.json",
    "action": "id",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "product_family": {
        "id": 527890,
        "name": "Acme Projects",
        "description": "",
        "handle": "billing-plans",
        "accounting_code": null,
        "surcharging": false,
        "archived_at": null
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_feature",
    "accessor": "ProductFeature",
    "op": "remove",
    "method": "DELETE",
    "path": "/products/{product_id}/features/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {
      "destroy_entitlement": "v1"
    },
    "headers": [],
    "query": [
      "destroy_entitlements"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/product_price_points/{product_price_point_id}/currency_prices.json",
    "action": "currency_price",
    "args": [
      {
        "name": "id",
        "wire": "product_price_point_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "currency_prices": [
        {
          "id": 100,
          "currency": "EUR",
          "price": 123,
          "formatted_price": "€123,00",
          "product_price_point_id": 32669,
          "role": "baseline"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/products/{product_id}/price_points.json",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "price_point": {
        "id": 283,
        "name": "Educational",
        "handle": "educational",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "trial_price_in_cents": 4900,
        "trial_interval": 1,
        "trial_interval_unit": "month",
        "trial_type": "payment_expected",
        "initial_charge_in_cents": 120000,
        "initial_charge_after_trial": false,
        "expiration_interval": 12,
        "expiration_interval_unit": "month",
        "product_id": 901,
        "archived_at": "2023-11-30T06:37:20-05:00",
        "created_at": "2023-11-27T06:37:20-05:00",
        "updated_at": "2023-11-27T06:37:20-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "create",
    "method": "POST",
    "path": "/products/{product_id}/price_points/bulk.json",
    "args": [
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "price_points": [
        {
          "id": 283,
          "name": "Educational",
          "handle": "educational",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "month",
          "trial_price_in_cents": 4900,
          "trial_interval": 1,
          "trial_interval_unit": "month",
          "trial_type": "payment_expected",
          "initial_charge_in_cents": 120000,
          "initial_charge_after_trial": false,
          "expiration_interval": 12,
          "expiration_interval_unit": "month",
          "product_id": 901,
          "archived_at": "2023-11-30T06:37:20-05:00",
          "created_at": "2023-11-27T06:37:20-05:00",
          "updated_at": "2023-11-27T06:37:20-05:00"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "list",
    "method": "GET",
    "path": "/products/{product_id}/price_points.json",
    "args": [
      {
        "name": "id",
        "wire": "product_id",
        "value": "p1"
      }
    ],
    "select": {
      "archived": "v1",
      "currency_price": "v1",
      "filter_type": "v1",
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "currency_prices",
      "filter[type]",
      "archived"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_points": [
        {
          "id": 283,
          "name": "Educational",
          "handle": "educational",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "month",
          "trial_price_in_cents": 4900,
          "trial_interval": 1,
          "trial_interval_unit": "month",
          "trial_type": "payment_expected",
          "initial_charge_in_cents": 120000,
          "initial_charge_after_trial": false,
          "expiration_interval": 12,
          "expiration_interval_unit": "month",
          "product_id": 901,
          "archived_at": "2023-11-30T06:37:20-05:00",
          "created_at": "2023-11-27T06:37:20-05:00",
          "updated_at": "2023-11-27T06:37:20-05:00"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "list",
    "method": "GET",
    "path": "/products_price_points.json",
    "args": [],
    "select": {
      "direction": "v1",
      "filter": "v1",
      "include": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "direction",
      "filter",
      "include",
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_points": [
        {
          "id": 0,
          "name": "My pricepoint",
          "handle": "handle",
          "price_in_cents": 10,
          "interval": 5,
          "interval_unit": "month",
          "trial_price_in_cents": 10,
          "trial_interval": 1,
          "trial_interval_unit": "month",
          "trial_type": "payment_expected",
          "introductory_offer": true,
          "initial_charge_in_cents": 0,
          "initial_charge_after_trial": true,
          "expiration_interval": 0,
          "expiration_interval_unit": "month",
          "product_id": 1230,
          "created_at": "2021-04-02T17:52:09-04:00",
          "updated_at": "2021-04-02T17:52:09-04:00",
          "use_site_exchange_rate": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "load",
    "method": "GET",
    "path": "/products/{product_id}/price_points/{price_point_id}.json",
    "args": [
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {
      "currency_price": "v1"
    },
    "headers": [],
    "query": [
      "currency_prices"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "id": 283,
        "name": "Educational",
        "handle": "educational",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "trial_price_in_cents": 4900,
        "trial_interval": 1,
        "trial_interval_unit": "month",
        "trial_type": "payment_expected",
        "initial_charge_in_cents": 120000,
        "initial_charge_after_trial": false,
        "expiration_interval": 12,
        "expiration_interval_unit": "month",
        "product_id": 901,
        "archived_at": "2023-11-30T06:37:20-05:00",
        "created_at": "2023-11-27T06:37:20-05:00",
        "updated_at": "2023-11-27T06:37:20-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "remove",
    "method": "DELETE",
    "path": "/products/{product_id}/price_points/{price_point_id}.json",
    "args": [
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "id": 283,
        "name": "Educational",
        "handle": "educational",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "trial_price_in_cents": 4900,
        "trial_interval": 1,
        "trial_interval_unit": "month",
        "trial_type": "payment_expected",
        "initial_charge_in_cents": 120000,
        "initial_charge_after_trial": false,
        "expiration_interval": 12,
        "expiration_interval_unit": "month",
        "product_id": 901,
        "archived_at": "2023-11-30T06:37:20-05:00",
        "created_at": "2023-11-27T06:37:20-05:00",
        "updated_at": "2023-11-27T06:37:20-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "update",
    "method": "PUT",
    "path": "/products/{product_id}/price_points/{price_point_id}.json",
    "args": [
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p1"
      },
      {
        "name": "product_id",
        "wire": "product_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "price_point": {
        "id": 283,
        "name": "Educational",
        "handle": "educational",
        "price_in_cents": 1000,
        "interval": 1,
        "interval_unit": "month",
        "trial_price_in_cents": 4900,
        "trial_interval": 1,
        "trial_interval_unit": "month",
        "trial_type": "payment_expected",
        "initial_charge_in_cents": 120000,
        "initial_charge_after_trial": false,
        "expiration_interval": 12,
        "expiration_interval_unit": "month",
        "product_id": 901,
        "archived_at": "2023-11-30T06:37:20-05:00",
        "created_at": "2023-11-27T06:37:20-05:00",
        "updated_at": "2023-11-27T06:37:20-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "product_price_point",
    "accessor": "ProductPricePoint",
    "op": "update",
    "method": "PUT",
    "path": "/product_price_points/{product_price_point_id}/currency_prices.json",
    "action": "currency_price",
    "args": [
      {
        "name": "id",
        "wire": "product_price_point_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "currency_prices": [
        {
          "id": 123,
          "currency": "EUR",
          "price": 100,
          "formatted_price": "€123,00",
          "product_price_point_id": 32669,
          "role": "baseline"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/proforma_invoices/{proforma_invoice_uid}/deliveries.json",
    "action": "delivery",
    "args": [
      {
        "name": "id",
        "wire": "proforma_invoice_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/proforma_invoices/{proforma_invoice_uid}/void.json",
    "action": "void",
    "args": [
      {
        "name": "id",
        "wire": "proforma_invoice_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/proforma_invoices.json",
    "args": [
      {
        "name": "subscription_group_id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/proforma_invoices.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/proforma_invoices/preview.json",
    "action": "preview",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/proforma_invoices.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/proforma_invoices.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "credit": "v1",
      "custom_field": "v1",
      "direction": "v1",
      "discount": "v1",
      "end_date": "v1",
      "line_item": "v1",
      "page": 1,
      "payment": "v1",
      "per_page": 50,
      "start_date": "v1",
      "status": "v1",
      "taxis": "v1"
    },
    "headers": [],
    "query": [
      "start_date",
      "end_date",
      "status",
      "page",
      "per_page",
      "direction",
      "line_items",
      "discounts",
      "taxes",
      "credits",
      "payments",
      "custom_fields"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "proforma_invoices": [
        {
          "available_actions": {
            "send_email": {
              "can_execute": true,
              "url": "x"
            }
          },
          "billing_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "collection_method": {},
          "consolidation_level": {},
          "created_at": "2026-01-01T00:00:00Z",
          "credit_amount": "x",
          "credits": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "uid": "x"
            }
          ],
          "currency": "x",
          "custom_fields": [
            {
              "metadatum_id": 1,
              "name": "x",
              "owner_id": 1,
              "owner_type": "Customer",
              "value": "x"
            }
          ],
          "customer": {
            "chargify_id": 1,
            "email": "x",
            "first_name": "x",
            "last_name": "x",
            "organization": "x",
            "reference": "x",
            "vat_number": "x"
          },
          "customer_id": 1,
          "delivery_date": "2026-01-01",
          "discount_amount": "x",
          "discounts": [
            {
              "code": "x",
              "discount_amount": "x",
              "discount_type": "percentage",
              "eligible_amount": "x",
              "line_item_breakouts": [
                {}
              ],
              "source_type": "Coupon",
              "title": "x",
              "uid": "x"
            }
          ],
          "due_amount": "x",
          "line_items": [
            {
              "billing_schedule_item_id": 1,
              "component_cost_data": {},
              "component_id": 1,
              "custom_item": true,
              "description": "x",
              "discount_amount": "x",
              "hide": true,
              "kind": "x",
              "period_range_end": "2026-01-01",
              "period_range_start": "2026-01-01",
              "prepaid_allocation_expires_at": "2026-01-01",
              "price_point_id": 1,
              "product_id": 1,
              "product_price_point_id": 1,
              "product_version": 1,
              "quantity": "x",
              "subtotal_amount": "x",
              "tax_amount": "x",
              "tax_included": true,
              "tiered_unit_price": true,
              "title": "x",
              "total_amount": "x",
              "transaction_id": 1,
              "uid": "x",
              "unit_price": "x"
            }
          ],
          "memo": "x",
          "number": 1,
          "paid_amount": "x",
          "payment_instructions": "x",
          "payments": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "prepayment": true
            }
          ],
          "product_family_name": "x",
          "product_name": "x",
          "public_url": "x",
          "refund_amount": "x",
          "role": {},
          "seller": {
            "address": {
              "city": "x",
              "country": "x",
              "line2": "x",
              "state": "x",
              "street": "x",
              "zip": "x"
            },
            "logo_url": "x",
            "name": "x",
            "phone": "x"
          },
          "sequence_number": 1,
          "shipping_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "site_id": 1,
          "status": "draft",
          "subscription_id": 1,
          "subtotal_amount": "x",
          "tax_amount": "x",
          "taxes": [
            {
              "line_item_breakouts": [
                {}
              ],
              "percentage": "x",
              "source_type": "Tax",
              "tax_amount": "x",
              "taxable_amount": "x",
              "title": "x",
              "uid": "x"
            }
          ],
          "total_amount": "x",
          "uid": "x"
        }
      ],
      "meta": {
        "current_page": 1,
        "status_code": 1,
        "total_count": 1,
        "total_pages": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "list",
    "method": "GET",
    "path": "/subscription_groups/{uid}/proforma_invoices.json",
    "args": [
      {
        "name": "subscription_group_id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {
      "credit": "v1",
      "custom_field": "v1",
      "discount": "v1",
      "line_item": "v1",
      "payment": "v1",
      "taxis": "v1"
    },
    "headers": [],
    "query": [
      "line_items",
      "discounts",
      "taxes",
      "credits",
      "payments",
      "custom_fields"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "proforma_invoices": [
        {
          "available_actions": {
            "send_email": {
              "can_execute": true,
              "url": "x"
            }
          },
          "billing_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "collection_method": {},
          "consolidation_level": {},
          "created_at": "2026-01-01T00:00:00Z",
          "credit_amount": "x",
          "credits": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "uid": "x"
            }
          ],
          "currency": "x",
          "custom_fields": [
            {
              "metadatum_id": 1,
              "name": "x",
              "owner_id": 1,
              "owner_type": "Customer",
              "value": "x"
            }
          ],
          "customer": {
            "chargify_id": 1,
            "email": "x",
            "first_name": "x",
            "last_name": "x",
            "organization": "x",
            "reference": "x",
            "vat_number": "x"
          },
          "customer_id": 1,
          "delivery_date": "2026-01-01",
          "discount_amount": "x",
          "discounts": [
            {
              "code": "x",
              "discount_amount": "x",
              "discount_type": "percentage",
              "eligible_amount": "x",
              "line_item_breakouts": [
                {}
              ],
              "source_type": "Coupon",
              "title": "x",
              "uid": "x"
            }
          ],
          "due_amount": "x",
          "line_items": [
            {
              "billing_schedule_item_id": 1,
              "component_cost_data": {},
              "component_id": 1,
              "custom_item": true,
              "description": "x",
              "discount_amount": "x",
              "hide": true,
              "kind": "x",
              "period_range_end": "2026-01-01",
              "period_range_start": "2026-01-01",
              "prepaid_allocation_expires_at": "2026-01-01",
              "price_point_id": 1,
              "product_id": 1,
              "product_price_point_id": 1,
              "product_version": 1,
              "quantity": "x",
              "subtotal_amount": "x",
              "tax_amount": "x",
              "tax_included": true,
              "tiered_unit_price": true,
              "title": "x",
              "total_amount": "x",
              "transaction_id": 1,
              "uid": "x",
              "unit_price": "x"
            }
          ],
          "memo": "x",
          "number": 1,
          "paid_amount": "x",
          "payment_instructions": "x",
          "payments": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "prepayment": true
            }
          ],
          "product_family_name": "x",
          "product_name": "x",
          "public_url": "x",
          "refund_amount": "x",
          "role": {},
          "seller": {
            "address": {
              "city": "x",
              "country": "x",
              "line2": "x",
              "state": "x",
              "street": "x",
              "zip": "x"
            },
            "logo_url": "x",
            "name": "x",
            "phone": "x"
          },
          "sequence_number": 1,
          "shipping_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "site_id": 1,
          "status": "draft",
          "subscription_id": 1,
          "subtotal_amount": "x",
          "tax_amount": "x",
          "taxes": [
            {
              "line_item_breakouts": [
                {}
              ],
              "percentage": "x",
              "source_type": "Tax",
              "tax_amount": "x",
              "taxable_amount": "x",
              "title": "x",
              "uid": "x"
            }
          ],
          "total_amount": "x",
          "uid": "x"
        }
      ],
      "meta": {
        "current_page": 1,
        "status_code": 1,
        "total_count": 1,
        "total_pages": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "list",
    "method": "GET",
    "path": "/api_exports/proforma_invoices/{batch_id}/rows.json",
    "action": "row",
    "args": [
      {
        "name": "id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "per_page",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "uid": "x",
        "site_id": 1,
        "customer_id": 1,
        "subscription_id": 1,
        "number": 1,
        "sequence_number": 1,
        "created_at": "2026-01-01T00:00:00Z",
        "delivery_date": "2026-01-01",
        "status": "draft",
        "collection_method": {},
        "payment_instructions": "x",
        "currency": "x",
        "consolidation_level": {},
        "product_name": "x",
        "product_family_name": "x",
        "role": {},
        "seller": {
          "address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "logo_url": "x",
          "name": "x",
          "phone": "x"
        },
        "customer": {
          "chargify_id": 1,
          "email": "x",
          "first_name": "x",
          "last_name": "x",
          "organization": "x",
          "reference": "x",
          "vat_number": "x"
        },
        "memo": "x",
        "billing_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "shipping_address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "subtotal_amount": "x",
        "discount_amount": "x",
        "tax_amount": "x",
        "total_amount": "x",
        "credit_amount": "x",
        "paid_amount": "x",
        "refund_amount": "x",
        "due_amount": "x",
        "line_items": [
          {
            "billing_schedule_item_id": 1,
            "component_cost_data": {},
            "component_id": 1,
            "custom_item": true,
            "description": "x",
            "discount_amount": "x",
            "hide": true,
            "kind": "x",
            "period_range_end": "2026-01-01",
            "period_range_start": "2026-01-01",
            "prepaid_allocation_expires_at": "2026-01-01",
            "price_point_id": 1,
            "product_id": 1,
            "product_price_point_id": 1,
            "product_version": 1,
            "quantity": "x",
            "subtotal_amount": "x",
            "tax_amount": "x",
            "tax_included": true,
            "tiered_unit_price": true,
            "title": "x",
            "total_amount": "x",
            "transaction_id": 1,
            "uid": "x",
            "unit_price": "x"
          }
        ],
        "discounts": [
          {
            "code": "x",
            "discount_amount": "x",
            "discount_type": "percentage",
            "eligible_amount": "x",
            "line_item_breakouts": [
              {
                "discount_amount": "x",
                "eligible_amount": "x",
                "uid": "x"
              }
            ],
            "source_type": "Coupon",
            "title": "x",
            "uid": "x"
          }
        ],
        "taxes": [
          {
            "line_item_breakouts": [
              {
                "tax_amount": "x",
                "tax_exempt_amount": "x",
                "taxable_amount": "x",
                "uid": "x"
              }
            ],
            "percentage": "x",
            "source_type": "Tax",
            "tax_amount": "x",
            "taxable_amount": "x",
            "title": "x",
            "uid": "x"
          }
        ],
        "credits": [
          {
            "applied_amount": "x",
            "memo": "x",
            "original_amount": "x",
            "uid": "x"
          }
        ],
        "payments": [
          {
            "applied_amount": "x",
            "memo": "x",
            "original_amount": "x",
            "prepayment": true
          }
        ],
        "custom_fields": [
          {
            "metadatum_id": 1,
            "name": "x",
            "owner_id": 1,
            "owner_type": "Customer",
            "value": "x"
          }
        ],
        "public_url": "x",
        "available_actions": {
          "send_email": {
            "can_execute": true,
            "url": "x"
          }
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "proforma_invoice",
    "accessor": "ProformaInvoice",
    "op": "list",
    "method": "GET",
    "path": "/proforma_invoices/{proforma_invoice_uid}.json",
    "action": "proforma_invoice_uid",
    "args": [
      {
        "name": "proforma_invoice_uid",
        "wire": "proforma_invoice_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "x",
      "site_id": 1,
      "customer_id": 1,
      "subscription_id": 1,
      "number": 1,
      "sequence_number": 1,
      "created_at": "2026-01-01T00:00:00Z",
      "delivery_date": "2026-01-01",
      "status": "draft",
      "collection_method": {},
      "payment_instructions": "x",
      "currency": "x",
      "consolidation_level": {},
      "product_name": "x",
      "product_family_name": "x",
      "role": {},
      "seller": {
        "address": {
          "city": "x",
          "country": "x",
          "line2": "x",
          "state": "x",
          "street": "x",
          "zip": "x"
        },
        "logo_url": "x",
        "name": "x",
        "phone": "x"
      },
      "customer": {
        "chargify_id": 1,
        "email": "x",
        "first_name": "x",
        "last_name": "x",
        "organization": "x",
        "reference": "x",
        "vat_number": "x"
      },
      "memo": "x",
      "billing_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "shipping_address": {
        "city": "x",
        "country": "x",
        "line2": "x",
        "state": "x",
        "street": "x",
        "zip": "x"
      },
      "subtotal_amount": "x",
      "discount_amount": "x",
      "tax_amount": "x",
      "total_amount": "x",
      "credit_amount": "x",
      "paid_amount": "x",
      "refund_amount": "x",
      "due_amount": "x",
      "line_items": [
        {
          "billing_schedule_item_id": 1,
          "component_cost_data": {},
          "component_id": 1,
          "custom_item": true,
          "description": "x",
          "discount_amount": "x",
          "hide": true,
          "kind": "x",
          "period_range_end": "2026-01-01",
          "period_range_start": "2026-01-01",
          "prepaid_allocation_expires_at": "2026-01-01",
          "price_point_id": 1,
          "product_id": 1,
          "product_price_point_id": 1,
          "product_version": 1,
          "quantity": "x",
          "subtotal_amount": "x",
          "tax_amount": "x",
          "tax_included": true,
          "tiered_unit_price": true,
          "title": "x",
          "total_amount": "x",
          "transaction_id": 1,
          "uid": "x",
          "unit_price": "x"
        }
      ],
      "discounts": [
        {
          "code": "x",
          "discount_amount": "x",
          "discount_type": "percentage",
          "eligible_amount": "x",
          "line_item_breakouts": [
            {
              "discount_amount": "x",
              "eligible_amount": "x",
              "uid": "x"
            }
          ],
          "source_type": "Coupon",
          "title": "x",
          "uid": "x"
        }
      ],
      "taxes": [
        {
          "line_item_breakouts": [
            {
              "tax_amount": "x",
              "tax_exempt_amount": "x",
              "taxable_amount": "x",
              "uid": "x"
            }
          ],
          "percentage": "x",
          "source_type": "Tax",
          "tax_amount": "x",
          "taxable_amount": "x",
          "title": "x",
          "uid": "x"
        }
      ],
      "credits": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "uid": "x"
        }
      ],
      "payments": [
        {
          "applied_amount": "x",
          "memo": "x",
          "original_amount": "x",
          "prepayment": true
        }
      ],
      "custom_fields": [
        {
          "metadatum_id": 1,
          "name": "x",
          "owner_id": 1,
          "owner_type": "Customer",
          "value": "x"
        }
      ],
      "public_url": "x",
      "available_actions": {
        "send_email": {
          "can_execute": true,
          "url": "x"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "reason_code",
    "accessor": "ReasonCode",
    "op": "create",
    "method": "POST",
    "path": "/reason_codes.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "reason_code": {
        "code": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "description": "x",
        "id": 1,
        "position": 1,
        "site_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "reason_code",
    "accessor": "ReasonCode",
    "op": "list",
    "method": "GET",
    "path": "/reason_codes.json",
    "args": [],
    "select": {
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "reason_code": {
          "id": 2,
          "site_id": 2,
          "code": "LARGE",
          "description": "This is too complicated",
          "position": 1,
          "created_at": "2017-02-16T16:49:07-05:00",
          "updated_at": "2017-02-17T16:29:51-05:00"
        }
      },
      {
        "reason_code": {
          "id": 1,
          "site_id": 2,
          "code": "CH1",
          "description": "This does not meet my needs",
          "position": 2,
          "created_at": "2017-02-16T16:48:45-05:00",
          "updated_at": "2017-02-17T16:29:59-05:00"
        }
      },
      {
        "reason_code": {
          "id": 5,
          "site_id": 2,
          "code": "HAN99",
          "description": "Hard to setup",
          "position": 3,
          "created_at": "2017-02-17T16:29:42-05:00",
          "updated_at": "2017-02-17T16:29:59-05:00"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "reason_code",
    "accessor": "ReasonCode",
    "op": "load",
    "method": "GET",
    "path": "/reason_codes/{reason_code_id}.json",
    "action": "reason_code_id",
    "args": [
      {
        "name": "reason_code_id",
        "wire": "reason_code_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "reason_code": {
        "code": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "description": "x",
        "id": 1,
        "position": 1,
        "site_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "reason_code",
    "accessor": "ReasonCode",
    "op": "remove",
    "method": "DELETE",
    "path": "/reason_codes/{reason_code_id}.json",
    "action": "reason_code_id",
    "args": [
      {
        "name": "reason_code_id",
        "wire": "reason_code_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ok": "ok"
    },
    "idField": "id"
  },
  {
    "entity": "reason_code",
    "accessor": "ReasonCode",
    "op": "update",
    "method": "PUT",
    "path": "/reason_codes/{reason_code_id}.json",
    "action": "reason_code_id",
    "args": [
      {
        "name": "reason_code_id",
        "wire": "reason_code_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "reason_code": {
        "code": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "description": "x",
        "id": 1,
        "position": 1,
        "site_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "referral_code",
    "accessor": "ReferralCode",
    "op": "load",
    "method": "GET",
    "path": "/referral_codes/validate.json",
    "action": "validate",
    "args": [],
    "select": {
      "code": "v1"
    },
    "headers": [],
    "query": [
      "code"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "referral_code": {
        "id": 1032514,
        "site_id": 31615,
        "subscription_id": 16254270,
        "code": "9b6cdw"
      }
    },
    "idField": "id"
  },
  {
    "entity": "sale_rep_setting",
    "accessor": "SaleRepSetting",
    "op": "list",
    "method": "GET",
    "path": "/sellers/{seller_id}/sales_commission_settings.json",
    "args": [
      {
        "name": "seller_id",
        "wire": "seller_id",
        "value": "p1"
      }
    ],
    "select": {
      "authorization": "v1",
      "live_mode": "v1",
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "live_mode",
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "customer_name": "Ziomek Ziomeczek",
        "subscription_id": 81746,
        "site_link": "https://chargify9.staging-chargify.com/dashboard",
        "site_name": "Chargify",
        "subscription_mrr": "$200.00",
        "sales_rep_id": 48,
        "sales_rep_name": "John Candy"
      },
      {
        "customer_name": "Ziom Kom",
        "subscription_id": 83758,
        "site_link": "https://chargify9.staging-chargify.com/dashboard",
        "site_name": "Chargify",
        "subscription_mrr": "$200.00",
        "sales_rep_id": 49,
        "sales_rep_name": "Josh Acme"
      },
      {
        "customer_name": "George Bush",
        "subscription_id": 83790,
        "site_link": "https://chargify9.staging-chargify.com/dashboard",
        "site_name": "Chargify",
        "subscription_mrr": "$200.00",
        "sales_rep_id": 48,
        "sales_rep_name": "John Candy"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "sales_commission",
    "accessor": "SalesCommission",
    "op": "list",
    "method": "GET",
    "path": "/sellers/{seller_id}/sales_reps/{sales_rep_id}.json",
    "args": [
      {
        "name": "sales_rep_id",
        "wire": "sales_rep_id",
        "value": "p1"
      },
      {
        "name": "seller_id",
        "wire": "seller_id",
        "value": "p2"
      }
    ],
    "select": {
      "authorization": "v1",
      "live_mode": "v1",
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "live_mode",
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 48,
      "full_name": "John Candy",
      "subscriptions_count": 2,
      "test_mode": true,
      "subscriptions": [
        {
          "id": 81746,
          "site_name": "Chargify",
          "subscription_url": "https://chargify9.staging-chargify.com/subscriptions/81746",
          "customer_name": "Ziomek Ziomeczek",
          "created_at": "2020-01-03T02:36:27-05:00",
          "mrr": "$200.00",
          "usage": "$0.00",
          "recurring": "$200.00",
          "last_payment": "2020-04-03T03:40:27-04:00",
          "churn_date": null
        },
        {
          "id": 83790,
          "site_name": "Chargify",
          "subscription_url": "https://chargify9.staging-chargify.com/subscriptions/83790",
          "customer_name": "George Bush",
          "created_at": "2020-01-17T07:34:32-05:00",
          "mrr": "$200.00",
          "usage": "$0.00",
          "recurring": "$200.00",
          "last_payment": "2020-04-17T08:41:03-04:00",
          "churn_date": null
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "segment",
    "accessor": "Segment",
    "op": "create",
    "method": "POST",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "segment": {
        "id": 1,
        "component_id": 1,
        "price_point_id": 1,
        "event_based_billing_metric_id": 1,
        "pricing_scheme": {},
        "segment_property_1_value": "x",
        "segment_property_2_value": "x",
        "segment_property_3_value": "x",
        "segment_property_4_value": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "segment",
    "accessor": "Segment",
    "op": "update",
    "method": "PUT",
    "path": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
    "action": "id",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "p2"
      },
      {
        "name": "price_point_id",
        "wire": "price_point_id",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "segment": {
        "id": 1,
        "component_id": 1,
        "price_point_id": 1,
        "event_based_billing_metric_id": 1,
        "pricing_scheme": {},
        "segment_property_1_value": "x",
        "segment_property_2_value": "x",
        "segment_property_3_value": "x",
        "segment_property_4_value": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "prices": [
          {
            "component_id": 1,
            "ending_quantity": 1,
            "formatted_unit_price": "x",
            "id": 1,
            "price_point_id": 1,
            "segment_id": 1,
            "starting_quantity": 1,
            "unit_price": "x"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "signup_proforma_preview",
    "accessor": "SignupProformaPreview",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/proforma_invoices/preview.json",
    "args": [],
    "select": {
      "include": "v1"
    },
    "headers": [],
    "query": [
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "proforma_invoice_preview": {
        "current_proforma_invoice": {
          "uid": "x",
          "site_id": 1,
          "customer_id": 1,
          "subscription_id": 1,
          "number": 1,
          "sequence_number": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "delivery_date": "2026-01-01",
          "status": "draft",
          "collection_method": {},
          "payment_instructions": "x",
          "currency": "x",
          "consolidation_level": {},
          "product_name": "x",
          "product_family_name": "x",
          "role": {},
          "seller": {
            "address": {},
            "logo_url": "x",
            "name": "x",
            "phone": "x"
          },
          "customer": {
            "chargify_id": 1,
            "email": "x",
            "first_name": "x",
            "last_name": "x",
            "organization": "x",
            "reference": "x",
            "vat_number": "x"
          },
          "memo": "x",
          "billing_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "shipping_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "subtotal_amount": "x",
          "discount_amount": "x",
          "tax_amount": "x",
          "total_amount": "x",
          "credit_amount": "x",
          "paid_amount": "x",
          "refund_amount": "x",
          "due_amount": "x",
          "line_items": [
            {
              "billing_schedule_item_id": 1,
              "component_cost_data": {},
              "component_id": 1,
              "custom_item": true,
              "description": "x",
              "discount_amount": "x",
              "hide": true,
              "kind": "x",
              "period_range_end": "2026-01-01",
              "period_range_start": "2026-01-01",
              "prepaid_allocation_expires_at": "2026-01-01",
              "price_point_id": 1,
              "product_id": 1,
              "product_price_point_id": 1,
              "product_version": 1,
              "quantity": "x",
              "subtotal_amount": "x",
              "tax_amount": "x",
              "tax_included": true,
              "tiered_unit_price": true,
              "title": "x",
              "total_amount": "x",
              "transaction_id": 1,
              "uid": "x",
              "unit_price": "x"
            }
          ],
          "discounts": [
            {
              "code": "x",
              "discount_amount": "x",
              "discount_type": "percentage",
              "eligible_amount": "x",
              "line_item_breakouts": [],
              "source_type": "Coupon",
              "title": "x",
              "uid": "x"
            }
          ],
          "taxes": [
            {
              "line_item_breakouts": [],
              "percentage": "x",
              "source_type": "Tax",
              "tax_amount": "x",
              "taxable_amount": "x",
              "title": "x",
              "uid": "x"
            }
          ],
          "credits": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "uid": "x"
            }
          ],
          "payments": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "prepayment": true
            }
          ],
          "custom_fields": [
            {
              "metadatum_id": 1,
              "name": "x",
              "owner_id": 1,
              "owner_type": "Customer",
              "value": "x"
            }
          ],
          "public_url": "x",
          "available_actions": {
            "send_email": {
              "can_execute": true,
              "url": "x"
            }
          }
        },
        "next_proforma_invoice": {
          "uid": "x",
          "site_id": 1,
          "customer_id": 1,
          "subscription_id": 1,
          "number": 1,
          "sequence_number": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "delivery_date": "2026-01-01",
          "status": "draft",
          "collection_method": {},
          "payment_instructions": "x",
          "currency": "x",
          "consolidation_level": {},
          "product_name": "x",
          "product_family_name": "x",
          "role": {},
          "seller": {
            "address": {},
            "logo_url": "x",
            "name": "x",
            "phone": "x"
          },
          "customer": {
            "chargify_id": 1,
            "email": "x",
            "first_name": "x",
            "last_name": "x",
            "organization": "x",
            "reference": "x",
            "vat_number": "x"
          },
          "memo": "x",
          "billing_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "shipping_address": {
            "city": "x",
            "country": "x",
            "line2": "x",
            "state": "x",
            "street": "x",
            "zip": "x"
          },
          "subtotal_amount": "x",
          "discount_amount": "x",
          "tax_amount": "x",
          "total_amount": "x",
          "credit_amount": "x",
          "paid_amount": "x",
          "refund_amount": "x",
          "due_amount": "x",
          "line_items": [
            {
              "billing_schedule_item_id": 1,
              "component_cost_data": {},
              "component_id": 1,
              "custom_item": true,
              "description": "x",
              "discount_amount": "x",
              "hide": true,
              "kind": "x",
              "period_range_end": "2026-01-01",
              "period_range_start": "2026-01-01",
              "prepaid_allocation_expires_at": "2026-01-01",
              "price_point_id": 1,
              "product_id": 1,
              "product_price_point_id": 1,
              "product_version": 1,
              "quantity": "x",
              "subtotal_amount": "x",
              "tax_amount": "x",
              "tax_included": true,
              "tiered_unit_price": true,
              "title": "x",
              "total_amount": "x",
              "transaction_id": 1,
              "uid": "x",
              "unit_price": "x"
            }
          ],
          "discounts": [
            {
              "code": "x",
              "discount_amount": "x",
              "discount_type": "percentage",
              "eligible_amount": "x",
              "line_item_breakouts": [],
              "source_type": "Coupon",
              "title": "x",
              "uid": "x"
            }
          ],
          "taxes": [
            {
              "line_item_breakouts": [],
              "percentage": "x",
              "source_type": "Tax",
              "tax_amount": "x",
              "taxable_amount": "x",
              "title": "x",
              "uid": "x"
            }
          ],
          "credits": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "uid": "x"
            }
          ],
          "payments": [
            {
              "applied_amount": "x",
              "memo": "x",
              "original_amount": "x",
              "prepayment": true
            }
          ],
          "custom_fields": [
            {
              "metadatum_id": 1,
              "name": "x",
              "owner_id": 1,
              "owner_type": "Customer",
              "value": "x"
            }
          ],
          "public_url": "x",
          "available_actions": {
            "send_email": {
              "can_execute": true,
              "url": "x"
            }
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "site",
    "accessor": "Site",
    "op": "create",
    "method": "POST",
    "path": "/sites/clear_data.json",
    "action": "clear_data",
    "args": [],
    "select": {
      "cleanup_scope": "v1"
    },
    "headers": [],
    "query": [
      "cleanup_scope"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "site",
    "accessor": "Site",
    "op": "list",
    "method": "GET",
    "path": "/chargify_js_keys.json",
    "args": [],
    "select": {
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "chargify_js_keys": [
        {
          "public_key": "chjs_ftrxt7c4fv6f74wchjs_5zyn7gnwv",
          "requires_security_token": false,
          "created_at": "2021-01-01T05:00:00-04:00"
        }
      ],
      "meta": {
        "total_count": 1,
        "current_page": 1,
        "total_pages": 1,
        "per_page": 10
      }
    },
    "idField": "id"
  },
  {
    "entity": "site",
    "accessor": "Site",
    "op": "load",
    "method": "GET",
    "path": "/site.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "site": {
        "id": 0,
        "name": "string",
        "subdomain": "string",
        "currency": "string",
        "seller_id": 0,
        "non_primary_currencies": [
          "string"
        ],
        "relationship_invoicing_enabled": true,
        "schedule_subscription_cancellation_enabled": true,
        "customer_hierarchy_enabled": true,
        "whopays_enabled": true,
        "whopays_default_payer": "string",
        "default_payment_collection_method": "string",
        "organization_address": {
          "street": null,
          "line2": null,
          "city": null,
          "state": null,
          "zip": null,
          "country": null,
          "name": "string",
          "phone": "string"
        },
        "tax_configuration": {
          "kind": "custom",
          "fully_configured": true,
          "destination_address": "shipping_then_billing"
        },
        "net_terms": {
          "default_net_terms": 0,
          "automatic_net_terms": 0,
          "remittance_net_terms": 0,
          "net_terms_on_remittance_signups_enabled": false,
          "custom_net_terms_enabled": false
        },
        "test": true,
        "allocation_settings": {
          "upgrade_charge": "prorated",
          "downgrade_credit": "none",
          "accrue_charge": "true"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/purge.json",
    "action": "purge",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "ack": "v1",
      "cascade": "v1"
    },
    "headers": [],
    "query": [
      "ack",
      "cascade"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "activated_at": "2026-01-01T00:00:00Z",
        "automatically_resume_at": "2026-01-01T00:00:00Z",
        "balance_in_cents": 1,
        "bank_account": {
          "bank_account_holder_type": {},
          "bank_account_type": {},
          "bank_name": "x",
          "billing_address": "x",
          "billing_address_2": "x",
          "billing_city": "x",
          "billing_country": "x",
          "billing_state": "x",
          "billing_zip": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "current_vault": {},
          "customer_id": 1,
          "customer_vault_token": "x",
          "first_name": "x",
          "gateway_handle": "x",
          "id": 1,
          "last_name": "x",
          "masked_bank_account_number": "x",
          "masked_bank_routing_number": "x",
          "payment_type": {},
          "site_gateway_setting_id": 1,
          "updated_at": "2026-01-01T00:00:00Z",
          "vault_token": "x",
          "verified": true
        },
        "cancel_at_end_of_period": true,
        "canceled_at": "2026-01-01T00:00:00Z",
        "cancellation_message": "x",
        "cancellation_method": {},
        "coupon_code": "x",
        "coupon_codes": [
          "x"
        ],
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "coupons": [
          {
            "amount_in_cents": 1000,
            "code": "\"ABCD_10\"",
            "expires_at": "\"2023-07-13T05:18:58-04:00\"",
            "percentage": "\"15.0\"",
            "recurring": true,
            "use_count": 2,
            "uses_allowed": 10
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "credit_balance_in_cents": 1,
        "credit_card": {
          "billing_address": "123 Montana Way",
          "billing_address_2": "",
          "billing_city": "Billings",
          "billing_country": "US",
          "billing_state": "MT",
          "billing_zip": "59101",
          "card_type": "bogus",
          "current_vault": "bogus",
          "customer_id": 14543792,
          "customer_vault_token": null,
          "expiration_month": 1,
          "expiration_year": 2022,
          "first_name": "Test",
          "gateway_handle": null,
          "id": 10088716,
          "last_name": "Subscription",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "payment_type": "credit_card",
          "site_gateway_setting_id": 1,
          "vault_token": "1"
        },
        "currency": "x",
        "current_billing_amount_in_cents": 1,
        "current_period_ends_at": "2026-01-01T00:00:00Z",
        "current_period_started_at": "2026-01-01T00:00:00Z",
        "customer": {
          "address": "x",
          "address_2": "x",
          "branding_theme_id": 1,
          "cc_emails": "x",
          "city": "x",
          "country": "x",
          "country_name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "default_auto_renewal_profile_id": 1,
          "default_subscription_group_uid": "x",
          "email": "x",
          "entity_identifier_kind": {},
          "entity_identifier_value": "x",
          "first_name": "x",
          "id": 1,
          "last_name": "x",
          "locale": "x",
          "maxioid": "x",
          "organization": "x",
          "parent_id": 1,
          "phone": "x",
          "portal_customer_created_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
          "reference": "x",
          "salesforce_id": "x",
          "state": "x",
          "state_name": "x",
          "surcharging": true,
          "tax_exempt": true,
          "tax_exempt_reason": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "vat_country": "x",
          "vat_number": "x",
          "verified": true,
          "zip": "x"
        },
        "delayed_cancel_at": "2026-01-01T00:00:00Z",
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
        "expires_at": "2026-01-01T00:00:00Z",
        "group": {},
        "id": 1,
        "locale": "x",
        "net_terms": 1,
        "next_assessment_at": "2026-01-01T00:00:00Z",
        "next_product_handle": "x",
        "next_product_id": 1,
        "next_product_price_point_id": 1,
        "offer_id": 1,
        "on_hold_at": "2026-01-01T00:00:00Z",
        "payer_id": 1,
        "payment_collection_method": {},
        "payment_type": "x",
        "prepaid_configuration": {},
        "prepaid_dunning": true,
        "prepayment_balance_in_cents": 1,
        "previous_state": {},
        "product": {
          "accounting_code": "x",
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "default_product_price_point_id": 1,
          "description": "x",
          "expiration_interval": 1,
          "expiration_interval_unit": {},
          "features": [
            {
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "feature_key": "x",
              "feature_kind": {},
              "feature_name": "x",
              "feature_template_id": 1,
              "id": 1,
              "periodicity_interval": 1,
              "periodicity_unit": {},
              "price_point_id": 1,
              "price_point_type": {},
              "updated_at": "2026-01-01T00:00:00Z",
              "value": "x"
            }
          ],
          "handle": "x",
          "id": 1,
          "initial_charge_after_trial": true,
          "initial_charge_in_cents": 1,
          "interval": 1,
          "interval_unit": {},
          "item_category": "x",
          "name": "x",
          "price_in_cents": 1,
          "product_family": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "description": "x",
            "handle": "x",
            "id": 1,
            "name": "x",
            "surcharging": true,
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "product_price_point_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_name": "x",
          "public_signup_pages": [
            {
              "id": 1,
              "return_params": "x",
              "return_url": "x",
              "url": "x"
            }
          ],
          "request_billing_address": true,
          "request_credit_card": true,
          "require_billing_address": true,
          "require_credit_card": true,
          "require_shipping_address": true,
          "return_params": "x",
          "tax_code": "x",
          "taxable": true,
          "trial_interval": 1,
          "trial_interval_unit": {},
          "trial_price_in_cents": 1,
          "unspsc_code": "x",
          "update_return_params": "x",
          "update_return_url": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "use_site_exchange_rate": true,
          "version_number": 1
        },
        "product_price_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_type": {},
        "product_version_number": 1,
        "reason_code": "x",
        "receives_invoice_emails": true,
        "reference": "x",
        "referral_code": "x",
        "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
        "self_service_page_token": "x",
        "signup_payment_id": 1,
        "signup_revenue": "x",
        "snap_day": "x",
        "state": {},
        "stored_credential_transaction_id": 1,
        "total_revenue_in_cents": 1,
        "trial_ended_at": "2026-01-01T00:00:00Z",
        "trial_started_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/add_coupon.json",
    "action": "add_coupon",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "code": "v1"
    },
    "headers": [],
    "query": [
      "code"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 21607180,
        "state": "active",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2018-04-20T14:20:57-05:00",
        "created_at": "2018-04-20T14:20:57-05:00",
        "updated_at": "2018-05-11T13:53:44-05:00",
        "expires_at": null,
        "balance_in_cents": 49000,
        "current_period_ends_at": "2018-05-12T11:33:03-05:00",
        "next_assessment_at": "2018-05-12T11:33:03-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "remittance",
        "snap_day": null,
        "cancellation_method": null,
        "current_period_started_at": "2018-05-11T11:33:03-05:00",
        "previous_state": "active",
        "signup_payment_id": 237154761,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": "COUPONA",
        "total_revenue_in_cents": 52762,
        "product_price_in_cents": 100000,
        "product_version_number": 2,
        "payment_type": "credit_card",
        "referral_code": "x45nc8",
        "coupon_use_count": 0,
        "coupon_uses_allowed": 1,
        "reason_code": null,
        "automatically_resume_at": null,
        "coupon_codes": [
          "COUPONA",
          "COUPONB"
        ],
        "customer": {
          "id": 21259051,
          "first_name": "K",
          "last_name": "C",
          "organization": "",
          "email": "example@chargify.com",
          "created_at": "2018-04-20T14:20:57-05:00",
          "updated_at": "2018-04-23T15:29:28-05:00",
          "reference": null,
          "address": "",
          "address_2": "",
          "city": "",
          "state": "",
          "zip": "",
          "country": "",
          "phone": "",
          "portal_invite_last_sent_at": "2018-04-20T14:20:59-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": false,
          "portal_customer_created_at": "2018-04-20T14:20:59-05:00",
          "cc_emails": "",
          "tax_exempt": false
        },
        "product": {
          "id": 4581816,
          "name": "Basic",
          "handle": "basic",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-11-02T15:00:11-05:00",
          "updated_at": "2018-04-10T09:02:59-05:00",
          "price_in_cents": 100000,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": 100000,
          "trial_price_in_cents": 1000,
          "trial_interval": 10,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 2,
          "update_return_params": "",
          "product_family": {
            "id": 1025627,
            "name": "My Product Family",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 333589,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargifypay.com/subscribe/hbwtd98j3hk2/basic"
            },
            {
              "id": 335926,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargifypay.com/subscribe/g366zy67c7rm/basic"
            },
            {
              "id": 345555,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargifypay.com/subscribe/txqyyqk7d8rz/basic"
            }
          ]
        },
        "credit_card": {
          "id": 14839830,
          "first_name": "John",
          "last_name": "Doe",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "card_type": "bogus",
          "expiration_month": 1,
          "expiration_year": 2028,
          "customer_id": 21259051,
          "current_vault": "bogus",
          "vault_token": "1",
          "billing_address": null,
          "billing_city": null,
          "billing_state": null,
          "billing_zip": "99999",
          "billing_country": null,
          "customer_vault_token": null,
          "billing_address_2": null,
          "payment_type": "credit_card"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/cancel_dunning.json",
    "action": "cancel_dunning",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "activated_at": "2026-01-01T00:00:00Z",
        "automatically_resume_at": "2026-01-01T00:00:00Z",
        "balance_in_cents": 1,
        "bank_account": {
          "bank_account_holder_type": {},
          "bank_account_type": {},
          "bank_name": "x",
          "billing_address": "x",
          "billing_address_2": "x",
          "billing_city": "x",
          "billing_country": "x",
          "billing_state": "x",
          "billing_zip": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "current_vault": {},
          "customer_id": 1,
          "customer_vault_token": "x",
          "first_name": "x",
          "gateway_handle": "x",
          "id": 1,
          "last_name": "x",
          "masked_bank_account_number": "x",
          "masked_bank_routing_number": "x",
          "payment_type": {},
          "site_gateway_setting_id": 1,
          "updated_at": "2026-01-01T00:00:00Z",
          "vault_token": "x",
          "verified": true
        },
        "cancel_at_end_of_period": true,
        "canceled_at": "2026-01-01T00:00:00Z",
        "cancellation_message": "x",
        "cancellation_method": {},
        "coupon_code": "x",
        "coupon_codes": [
          "x"
        ],
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "coupons": [
          {
            "amount_in_cents": 1000,
            "code": "\"ABCD_10\"",
            "expires_at": "\"2023-07-13T05:18:58-04:00\"",
            "percentage": "\"15.0\"",
            "recurring": true,
            "use_count": 2,
            "uses_allowed": 10
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "credit_balance_in_cents": 1,
        "credit_card": {
          "billing_address": "123 Montana Way",
          "billing_address_2": "",
          "billing_city": "Billings",
          "billing_country": "US",
          "billing_state": "MT",
          "billing_zip": "59101",
          "card_type": "bogus",
          "current_vault": "bogus",
          "customer_id": 14543792,
          "customer_vault_token": null,
          "expiration_month": 1,
          "expiration_year": 2022,
          "first_name": "Test",
          "gateway_handle": null,
          "id": 10088716,
          "last_name": "Subscription",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "payment_type": "credit_card",
          "site_gateway_setting_id": 1,
          "vault_token": "1"
        },
        "currency": "x",
        "current_billing_amount_in_cents": 1,
        "current_period_ends_at": "2026-01-01T00:00:00Z",
        "current_period_started_at": "2026-01-01T00:00:00Z",
        "customer": {
          "address": "x",
          "address_2": "x",
          "branding_theme_id": 1,
          "cc_emails": "x",
          "city": "x",
          "country": "x",
          "country_name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "default_auto_renewal_profile_id": 1,
          "default_subscription_group_uid": "x",
          "email": "x",
          "entity_identifier_kind": {},
          "entity_identifier_value": "x",
          "first_name": "x",
          "id": 1,
          "last_name": "x",
          "locale": "x",
          "maxioid": "x",
          "organization": "x",
          "parent_id": 1,
          "phone": "x",
          "portal_customer_created_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
          "reference": "x",
          "salesforce_id": "x",
          "state": "x",
          "state_name": "x",
          "surcharging": true,
          "tax_exempt": true,
          "tax_exempt_reason": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "vat_country": "x",
          "vat_number": "x",
          "verified": true,
          "zip": "x"
        },
        "delayed_cancel_at": "2026-01-01T00:00:00Z",
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
        "expires_at": "2026-01-01T00:00:00Z",
        "group": {},
        "id": 1,
        "locale": "x",
        "net_terms": 1,
        "next_assessment_at": "2026-01-01T00:00:00Z",
        "next_product_handle": "x",
        "next_product_id": 1,
        "next_product_price_point_id": 1,
        "offer_id": 1,
        "on_hold_at": "2026-01-01T00:00:00Z",
        "payer_id": 1,
        "payment_collection_method": {},
        "payment_type": "x",
        "prepaid_configuration": {},
        "prepaid_dunning": true,
        "prepayment_balance_in_cents": 1,
        "previous_state": {},
        "product": {
          "accounting_code": "x",
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "default_product_price_point_id": 1,
          "description": "x",
          "expiration_interval": 1,
          "expiration_interval_unit": {},
          "features": [
            {
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "feature_key": "x",
              "feature_kind": {},
              "feature_name": "x",
              "feature_template_id": 1,
              "id": 1,
              "periodicity_interval": 1,
              "periodicity_unit": {},
              "price_point_id": 1,
              "price_point_type": {},
              "updated_at": "2026-01-01T00:00:00Z",
              "value": "x"
            }
          ],
          "handle": "x",
          "id": 1,
          "initial_charge_after_trial": true,
          "initial_charge_in_cents": 1,
          "interval": 1,
          "interval_unit": {},
          "item_category": "x",
          "name": "x",
          "price_in_cents": 1,
          "product_family": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "description": "x",
            "handle": "x",
            "id": 1,
            "name": "x",
            "surcharging": true,
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "product_price_point_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_name": "x",
          "public_signup_pages": [
            {
              "id": 1,
              "return_params": "x",
              "return_url": "x",
              "url": "x"
            }
          ],
          "request_billing_address": true,
          "request_credit_card": true,
          "require_billing_address": true,
          "require_credit_card": true,
          "require_shipping_address": true,
          "return_params": "x",
          "tax_code": "x",
          "taxable": true,
          "trial_interval": 1,
          "trial_interval_unit": {},
          "trial_price_in_cents": 1,
          "unspsc_code": "x",
          "update_return_params": "x",
          "update_return_url": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "use_site_exchange_rate": true,
          "version_number": 1
        },
        "product_price_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_type": {},
        "product_version_number": 1,
        "reason_code": "x",
        "receives_invoice_emails": true,
        "reference": "x",
        "referral_code": "x",
        "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
        "self_service_page_token": "x",
        "signup_payment_id": 1,
        "signup_revenue": "x",
        "snap_day": "x",
        "state": {},
        "stored_credential_transaction_id": 1,
        "total_revenue_in_cents": 1,
        "trial_ended_at": "2026-01-01T00:00:00Z",
        "trial_started_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/prepaid_configurations.json",
    "action": "prepaid_configuration",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prepaid_configuration": {
        "id": 55,
        "initial_funding_amount_in_cents": 2500,
        "auto_replenish": true,
        "replenish_to_amount_in_cents": 50000,
        "replenish_threshold_amount_in_cents": 10000
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "subscription": {
        "id": 15236915,
        "state": "active",
        "balance_in_cents": 0,
        "total_revenue_in_cents": 14000,
        "product_price_in_cents": 1000,
        "product_version_number": 7,
        "current_period_ends_at": "2016-11-15T14:48:10-05:00",
        "next_assessment_at": "2016-11-15T14:48:10-05:00",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2016-11-14T14:48:12-05:00",
        "expires_at": null,
        "created_at": "2016-11-14T14:48:10-05:00",
        "updated_at": "2016-11-14T15:24:41-05:00",
        "cancellation_message": null,
        "cancellation_method": "merchant_api",
        "cancel_at_end_of_period": null,
        "canceled_at": null,
        "current_period_started_at": "2016-11-14T14:48:10-05:00",
        "previous_state": "active",
        "signup_payment_id": 162269766,
        "signup_revenue": "260.00",
        "delayed_cancel_at": null,
        "coupon_code": "5SNN6HFK3GBH",
        "payment_collection_method": "automatic",
        "snap_day": null,
        "reason_code": null,
        "receives_invoice_emails": false,
        "customer": {
          "first_name": "Curtis",
          "last_name": "Test",
          "email": "curtis@example.com",
          "cc_emails": "jeff@example.com",
          "organization": "",
          "reference": null,
          "id": 14714298,
          "created_at": "2016-11-14T14:48:10-05:00",
          "updated_at": "2016-11-14T14:48:13-05:00",
          "address": "123 Anywhere Street",
          "address_2": "",
          "city": "Boulder",
          "state": "CO",
          "zip": "80302",
          "country": "US",
          "phone": "",
          "verified": false,
          "portal_customer_created_at": "2016-11-14T14:48:13-05:00",
          "portal_invite_last_sent_at": "2016-11-14T14:48:13-05:00",
          "portal_invite_last_accepted_at": null,
          "tax_exempt": false,
          "vat_number": "012345678"
        },
        "product": {
          "id": 3792003,
          "name": "$10 Basic Plan",
          "handle": "basic",
          "description": "lorem ipsum",
          "accounting_code": "basic",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "day",
          "initial_charge_in_cents": null,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "initial_charge_after_trial": false,
          "return_params": "",
          "request_credit_card": false,
          "require_credit_card": false,
          "created_at": "2016-03-24T13:38:39-04:00",
          "updated_at": "2016-11-03T13:03:05-04:00",
          "archived_at": null,
          "update_return_url": "",
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "handle": "billing-plans",
            "accounting_code": null,
            "description": ""
          },
          "public_signup_pages": [
            {
              "id": 281054,
              "url": "https://general-goods.chargify.com/subscribe/kqvmfrbgd89q/basic"
            },
            {
              "id": 281240,
              "url": "https://general-goods.chargify.com/subscribe/dkffht5dxfd8/basic"
            },
            {
              "id": 282694,
              "url": "https://general-goods.chargify.com/subscribe/jwffwgdd95s8/basic"
            }
          ],
          "taxable": false,
          "version_number": 7,
          "product_price_point_name": "Default"
        },
        "credit_card": {
          "id": 10191713,
          "payment_type": "credit_card",
          "first_name": "Curtis",
          "last_name": "Test",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "card_type": "bogus",
          "expiration_month": 1,
          "expiration_year": 2026,
          "billing_address": "123 Anywhere Street",
          "billing_address_2": "",
          "billing_city": "Boulder",
          "billing_state": null,
          "billing_country": "",
          "billing_zip": "80302",
          "current_vault": "bogus",
          "vault_token": "1",
          "customer_vault_token": null,
          "customer_id": 14714298
        },
        "payment_type": "credit_card",
        "referral_code": "w7kjc9",
        "next_product_id": null,
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "next_product_handle": null,
        "stored_credential_transaction_id": 125566112256688,
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "Eastern Time (US & Canada)"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/preview.json",
    "action": "preview",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_preview": {
        "current_billing_manifest": {
          "line_items": [
            {
              "transaction_type": "charge",
              "kind": "baseline",
              "amount_in_cents": 5000,
              "memo": "Gold Product (08/21/2018 - 09/21/2018)",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "product_id": 1,
              "product_handle": "gold-product",
              "product_name": "Gold Product",
              "period_range_start": "13 Oct 2023",
              "period_range_end": "13 Nov 2023"
            },
            {
              "transaction_type": "charge",
              "kind": "component",
              "amount_in_cents": 28000,
              "memo": "Component name: 14 Unit names",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "component_id": 462149,
              "component_handle": "handle",
              "component_name": "Component name"
            },
            {
              "transaction_type": "charge",
              "kind": "component",
              "amount_in_cents": 2000,
              "memo": "Fractional Metered Components: 20.0 Fractional Metereds",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "component_id": 426665,
              "component_handle": "handle",
              "component_name": "Fractional Metered Components"
            }
          ],
          "total_in_cents": 35000,
          "total_discount_in_cents": 0,
          "total_tax_in_cents": 0,
          "subtotal_in_cents": 35000,
          "start_date": "2018-08-21T21:25:21Z",
          "end_date": "2018-09-21T21:25:21Z",
          "period_type": "recurring",
          "existing_balance_in_cents": 0
        },
        "next_billing_manifest": {
          "line_items": [
            {
              "transaction_type": "charge",
              "kind": "baseline",
              "amount_in_cents": 5000,
              "memo": "Gold Product (09/21/2018 - 10/21/2018)",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "product_id": 1,
              "product_handle": "gold-product",
              "product_name": "Gold Product"
            },
            {
              "transaction_type": "charge",
              "kind": "component",
              "amount_in_cents": 28000,
              "memo": "Component name: 14 Unit names",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "component_id": 462149,
              "component_handle": "handle",
              "component_name": "Component name"
            },
            {
              "transaction_type": "charge",
              "kind": "component",
              "amount_in_cents": 0,
              "memo": "On/Off Component",
              "discount_amount_in_cents": 0,
              "taxable_amount_in_cents": 0,
              "component_id": 426670,
              "component_handle": "handle",
              "component_name": "On/Off Component"
            }
          ],
          "total_in_cents": 33000,
          "total_discount_in_cents": 0,
          "total_tax_in_cents": 0,
          "subtotal_in_cents": 33000,
          "start_date": "2018-09-21T21:25:21Z",
          "end_date": "2018-10-21T21:25:21Z",
          "period_type": "recurring",
          "existing_balance_in_cents": 0
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions.json",
    "args": [],
    "select": {
      "branding_theme_id": "v1",
      "collection_method": "v1",
      "coupon": "v1",
      "coupon_code": "v1",
      "currency": "v1",
      "customer_id": "v1",
      "date_field": "v1",
      "direction": "v1",
      "dunning_exemption": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "group_status": "v1",
      "include": "v1",
      "metadata": "v1",
      "page": 1,
      "payment_gateway": "v1",
      "per_page": 50,
      "product": "v1",
      "product_price_point_id": "v1",
      "q": "v1",
      "q_scope": "v1",
      "sort": "v1",
      "start_date": "v1",
      "start_datetime": "v1",
      "state": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "sort",
      "direction",
      "state",
      "product",
      "q",
      "q_scope",
      "customer_id",
      "product_price_point_id",
      "coupon",
      "coupon_code",
      "collection_method",
      "branding_theme_id",
      "date_field",
      "start_date",
      "end_date",
      "start_datetime",
      "end_datetime",
      "metadata",
      "group_status",
      "dunning_exemption",
      "payment_gateways",
      "currencies",
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "subscription": {
          "activated_at": "2026-01-01T00:00:00Z",
          "automatically_resume_at": "2026-01-01T00:00:00Z",
          "balance_in_cents": 1,
          "bank_account": {
            "bank_account_holder_type": {},
            "bank_account_type": {},
            "bank_name": "x",
            "billing_address": "x",
            "billing_address_2": "x",
            "billing_city": "x",
            "billing_country": "x",
            "billing_state": "x",
            "billing_zip": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "current_vault": {},
            "customer_id": 1,
            "customer_vault_token": "x",
            "first_name": "x",
            "gateway_handle": "x",
            "id": 1,
            "last_name": "x",
            "masked_bank_account_number": "x",
            "masked_bank_routing_number": "x",
            "payment_type": {},
            "site_gateway_setting_id": 1,
            "updated_at": "2026-01-01T00:00:00Z",
            "vault_token": "x",
            "verified": true
          },
          "cancel_at_end_of_period": true,
          "canceled_at": "2026-01-01T00:00:00Z",
          "cancellation_message": "x",
          "cancellation_method": {},
          "coupon_code": "x",
          "coupon_codes": [
            "x"
          ],
          "coupon_use_count": 1,
          "coupon_uses_allowed": 1,
          "coupons": [
            {
              "amount_in_cents": 1000,
              "code": "\"ABCD_10\"",
              "expires_at": "\"2023-07-13T05:18:58-04:00\"",
              "percentage": "\"15.0\"",
              "recurring": true,
              "use_count": 2,
              "uses_allowed": 10
            }
          ],
          "created_at": "2026-01-01T00:00:00Z",
          "credit_balance_in_cents": 1,
          "credit_card": {
            "billing_address": "123 Montana Way",
            "billing_address_2": "",
            "billing_city": "Billings",
            "billing_country": "US",
            "billing_state": "MT",
            "billing_zip": "59101",
            "card_type": "bogus",
            "current_vault": "bogus",
            "customer_id": 14543792,
            "customer_vault_token": null,
            "expiration_month": 1,
            "expiration_year": 2022,
            "first_name": "Test",
            "gateway_handle": null,
            "id": 10088716,
            "last_name": "Subscription",
            "masked_card_number": "XXXX-XXXX-XXXX-1",
            "payment_type": "credit_card",
            "site_gateway_setting_id": 1,
            "vault_token": "1"
          },
          "currency": "x",
          "current_billing_amount_in_cents": 1,
          "current_period_ends_at": "2026-01-01T00:00:00Z",
          "current_period_started_at": "2026-01-01T00:00:00Z",
          "customer": {
            "address": "x",
            "address_2": "x",
            "branding_theme_id": 1,
            "cc_emails": "x",
            "city": "x",
            "country": "x",
            "country_name": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "default_auto_renewal_profile_id": 1,
            "default_subscription_group_uid": "x",
            "email": "x",
            "entity_identifier_kind": {},
            "entity_identifier_value": "x",
            "first_name": "x",
            "id": 1,
            "last_name": "x",
            "locale": "x",
            "maxioid": "x",
            "organization": "x",
            "parent_id": 1,
            "phone": "x",
            "portal_customer_created_at": "2026-01-01T00:00:00Z",
            "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
            "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
            "reference": "x",
            "salesforce_id": "x",
            "state": "x",
            "state_name": "x",
            "surcharging": true,
            "tax_exempt": true,
            "tax_exempt_reason": "x",
            "updated_at": "2026-01-01T00:00:00Z",
            "vat_country": "x",
            "vat_number": "x",
            "verified": true,
            "zip": "x"
          },
          "delayed_cancel_at": "2026-01-01T00:00:00Z",
          "dunning_communication_delay_enabled": true,
          "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
          "expires_at": "2026-01-01T00:00:00Z",
          "group": {},
          "id": 1,
          "locale": "x",
          "net_terms": 1,
          "next_assessment_at": "2026-01-01T00:00:00Z",
          "next_product_handle": "x",
          "next_product_id": 1,
          "next_product_price_point_id": 1,
          "offer_id": 1,
          "on_hold_at": "2026-01-01T00:00:00Z",
          "payer_id": 1,
          "payment_collection_method": {},
          "payment_type": "x",
          "prepaid_configuration": {},
          "prepaid_dunning": true,
          "prepayment_balance_in_cents": 1,
          "previous_state": {},
          "product": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "default_product_price_point_id": 1,
            "description": "x",
            "expiration_interval": 1,
            "expiration_interval_unit": {},
            "features": [
              {
                "archived_at": "2026-01-01T00:00:00Z",
                "created_at": "2026-01-01T00:00:00Z",
                "feature_key": "x",
                "feature_kind": {},
                "feature_name": "x",
                "feature_template_id": 1,
                "id": 1,
                "periodicity_interval": 1,
                "periodicity_unit": {},
                "price_point_id": 1,
                "price_point_type": {},
                "updated_at": "2026-01-01T00:00:00Z",
                "value": "x"
              }
            ],
            "handle": "x",
            "id": 1,
            "initial_charge_after_trial": true,
            "initial_charge_in_cents": 1,
            "interval": 1,
            "interval_unit": {},
            "item_category": "x",
            "name": "x",
            "price_in_cents": 1,
            "product_family": {
              "accounting_code": "x",
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "description": "x",
              "handle": "x",
              "id": 1,
              "name": "x",
              "surcharging": true,
              "updated_at": "2026-01-01T00:00:00Z"
            },
            "product_price_point_handle": "x",
            "product_price_point_id": 1,
            "product_price_point_name": "x",
            "public_signup_pages": [
              {
                "id": 1,
                "return_params": "x",
                "return_url": "x",
                "url": "x"
              }
            ],
            "request_billing_address": true,
            "request_credit_card": true,
            "require_billing_address": true,
            "require_credit_card": true,
            "require_shipping_address": true,
            "return_params": "x",
            "tax_code": "x",
            "taxable": true,
            "trial_interval": 1,
            "trial_interval_unit": {},
            "trial_price_in_cents": 1,
            "unspsc_code": "x",
            "update_return_params": "x",
            "update_return_url": "x",
            "updated_at": "2026-01-01T00:00:00Z",
            "use_site_exchange_rate": true,
            "version_number": 1
          },
          "product_price_in_cents": 1,
          "product_price_point_id": 1,
          "product_price_point_type": {},
          "product_version_number": 1,
          "reason_code": "x",
          "receives_invoice_emails": true,
          "reference": "x",
          "referral_code": "x",
          "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
          "self_service_page_token": "x",
          "signup_payment_id": 1,
          "signup_revenue": "x",
          "snap_day": "x",
          "state": {},
          "stored_credential_transaction_id": 1,
          "total_revenue_in_cents": 1,
          "trial_ended_at": "2026-01-01T00:00:00Z",
          "trial_started_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "list",
    "method": "GET",
    "path": "/api_exports/subscriptions/{batch_id}/rows.json",
    "action": "row",
    "args": [
      {
        "name": "id",
        "wire": "batch_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": 1,
      "per_page": "v1"
    },
    "headers": [],
    "query": [
      "per_page",
      "page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "state": {},
        "balance_in_cents": 1,
        "total_revenue_in_cents": 1,
        "product_price_in_cents": 1,
        "product_version_number": 1,
        "current_period_ends_at": "2026-01-01T00:00:00Z",
        "next_assessment_at": "2026-01-01T00:00:00Z",
        "trial_started_at": "2026-01-01T00:00:00Z",
        "trial_ended_at": "2026-01-01T00:00:00Z",
        "activated_at": "2026-01-01T00:00:00Z",
        "expires_at": "2026-01-01T00:00:00Z",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "cancellation_message": "x",
        "cancellation_method": {},
        "cancel_at_end_of_period": true,
        "canceled_at": "2026-01-01T00:00:00Z",
        "current_period_started_at": "2026-01-01T00:00:00Z",
        "previous_state": {},
        "signup_payment_id": 1,
        "signup_revenue": "x",
        "delayed_cancel_at": "2026-01-01T00:00:00Z",
        "coupon_code": "x",
        "snap_day": "x",
        "payment_collection_method": {},
        "customer": {
          "address": "x",
          "address_2": "x",
          "branding_theme_id": 1,
          "cc_emails": "x",
          "city": "x",
          "country": "x",
          "country_name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "default_auto_renewal_profile_id": 1,
          "default_subscription_group_uid": "x",
          "email": "x",
          "entity_identifier_kind": {},
          "entity_identifier_value": "x",
          "first_name": "x",
          "id": 1,
          "last_name": "x",
          "locale": "x",
          "maxioid": "x",
          "organization": "x",
          "parent_id": 1,
          "phone": "x",
          "portal_customer_created_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
          "reference": "x",
          "salesforce_id": "x",
          "state": "x",
          "state_name": "x",
          "surcharging": true,
          "tax_exempt": true,
          "tax_exempt_reason": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "vat_country": "x",
          "vat_number": "x",
          "verified": true,
          "zip": "x"
        },
        "product": {
          "accounting_code": "x",
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "default_product_price_point_id": 1,
          "description": "x",
          "expiration_interval": 1,
          "expiration_interval_unit": {},
          "features": [
            {
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "feature_key": "x",
              "feature_kind": {},
              "feature_name": "x",
              "feature_template_id": 1,
              "id": 1,
              "periodicity_interval": 1,
              "periodicity_unit": {},
              "price_point_id": 1,
              "price_point_type": {},
              "updated_at": "2026-01-01T00:00:00Z",
              "value": "x"
            }
          ],
          "handle": "x",
          "id": 1,
          "initial_charge_after_trial": true,
          "initial_charge_in_cents": 1,
          "interval": 1,
          "interval_unit": {},
          "item_category": "x",
          "name": "x",
          "price_in_cents": 1,
          "product_family": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "description": "x",
            "handle": "x",
            "id": 1,
            "name": "x",
            "surcharging": true,
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "product_price_point_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_name": "x",
          "public_signup_pages": [
            {
              "id": 1,
              "return_params": "x",
              "return_url": "x",
              "url": "x"
            }
          ],
          "request_billing_address": true,
          "request_credit_card": true,
          "require_billing_address": true,
          "require_credit_card": true,
          "require_shipping_address": true,
          "return_params": "x",
          "tax_code": "x",
          "taxable": true,
          "trial_interval": 1,
          "trial_interval_unit": {},
          "trial_price_in_cents": 1,
          "unspsc_code": "x",
          "update_return_params": "x",
          "update_return_url": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "use_site_exchange_rate": true,
          "version_number": 1
        },
        "credit_card": {
          "billing_address": "123 Montana Way",
          "billing_address_2": "",
          "billing_city": "Billings",
          "billing_country": "US",
          "billing_state": "MT",
          "billing_zip": "59101",
          "card_type": "bogus",
          "current_vault": "bogus",
          "customer_id": 14543792,
          "customer_vault_token": null,
          "expiration_month": 1,
          "expiration_year": 2022,
          "first_name": "Test",
          "gateway_handle": null,
          "id": 10088716,
          "last_name": "Subscription",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "payment_type": "credit_card",
          "site_gateway_setting_id": 1,
          "vault_token": "1"
        },
        "group": {},
        "bank_account": {
          "bank_account_holder_type": {},
          "bank_account_type": {},
          "bank_name": "x",
          "billing_address": "x",
          "billing_address_2": "x",
          "billing_city": "x",
          "billing_country": "x",
          "billing_state": "x",
          "billing_zip": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "current_vault": {},
          "customer_id": 1,
          "customer_vault_token": "x",
          "first_name": "x",
          "gateway_handle": "x",
          "id": 1,
          "last_name": "x",
          "masked_bank_account_number": "x",
          "masked_bank_routing_number": "x",
          "payment_type": {},
          "site_gateway_setting_id": 1,
          "updated_at": "2026-01-01T00:00:00Z",
          "vault_token": "x",
          "verified": true
        },
        "payment_type": "x",
        "referral_code": "x",
        "next_product_id": 1,
        "next_product_handle": "x",
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "reason_code": "x",
        "automatically_resume_at": "2026-01-01T00:00:00Z",
        "coupon_codes": [
          "x"
        ],
        "offer_id": 1,
        "payer_id": 1,
        "current_billing_amount_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_type": {},
        "next_product_price_point_id": 1,
        "net_terms": 1,
        "stored_credential_transaction_id": 1,
        "reference": "x",
        "on_hold_at": "2026-01-01T00:00:00Z",
        "prepaid_dunning": true,
        "coupons": [
          {
            "amount_in_cents": 1000,
            "code": "\"ABCD_10\"",
            "expires_at": "\"2023-07-13T05:18:58-04:00\"",
            "percentage": "\"15.0\"",
            "recurring": true,
            "use_count": 2,
            "uses_allowed": 10
          }
        ],
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
        "receives_invoice_emails": true,
        "locale": "x",
        "currency": "x",
        "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
        "credit_balance_in_cents": 1,
        "prepayment_balance_in_cents": 1,
        "prepaid_configuration": {},
        "self_service_page_token": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "list",
    "method": "GET",
    "path": "/customers/{customer_id}/subscriptions.json",
    "args": [
      {
        "name": "customer_id",
        "wire": "customer_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "subscription": {
          "activated_at": "2026-01-01T00:00:00Z",
          "automatically_resume_at": "2026-01-01T00:00:00Z",
          "balance_in_cents": 1,
          "bank_account": {
            "bank_account_holder_type": {},
            "bank_account_type": {},
            "bank_name": "x",
            "billing_address": "x",
            "billing_address_2": "x",
            "billing_city": "x",
            "billing_country": "x",
            "billing_state": "x",
            "billing_zip": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "current_vault": {},
            "customer_id": 1,
            "customer_vault_token": "x",
            "first_name": "x",
            "gateway_handle": "x",
            "id": 1,
            "last_name": "x",
            "masked_bank_account_number": "x",
            "masked_bank_routing_number": "x",
            "payment_type": {},
            "site_gateway_setting_id": 1,
            "updated_at": "2026-01-01T00:00:00Z",
            "vault_token": "x",
            "verified": true
          },
          "cancel_at_end_of_period": true,
          "canceled_at": "2026-01-01T00:00:00Z",
          "cancellation_message": "x",
          "cancellation_method": {},
          "coupon_code": "x",
          "coupon_codes": [
            "x"
          ],
          "coupon_use_count": 1,
          "coupon_uses_allowed": 1,
          "coupons": [
            {
              "amount_in_cents": 1000,
              "code": "\"ABCD_10\"",
              "expires_at": "\"2023-07-13T05:18:58-04:00\"",
              "percentage": "\"15.0\"",
              "recurring": true,
              "use_count": 2,
              "uses_allowed": 10
            }
          ],
          "created_at": "2026-01-01T00:00:00Z",
          "credit_balance_in_cents": 1,
          "credit_card": {
            "billing_address": "123 Montana Way",
            "billing_address_2": "",
            "billing_city": "Billings",
            "billing_country": "US",
            "billing_state": "MT",
            "billing_zip": "59101",
            "card_type": "bogus",
            "current_vault": "bogus",
            "customer_id": 14543792,
            "customer_vault_token": null,
            "expiration_month": 1,
            "expiration_year": 2022,
            "first_name": "Test",
            "gateway_handle": null,
            "id": 10088716,
            "last_name": "Subscription",
            "masked_card_number": "XXXX-XXXX-XXXX-1",
            "payment_type": "credit_card",
            "site_gateway_setting_id": 1,
            "vault_token": "1"
          },
          "currency": "x",
          "current_billing_amount_in_cents": 1,
          "current_period_ends_at": "2026-01-01T00:00:00Z",
          "current_period_started_at": "2026-01-01T00:00:00Z",
          "customer": {
            "address": "x",
            "address_2": "x",
            "branding_theme_id": 1,
            "cc_emails": "x",
            "city": "x",
            "country": "x",
            "country_name": "x",
            "created_at": "2026-01-01T00:00:00Z",
            "default_auto_renewal_profile_id": 1,
            "default_subscription_group_uid": "x",
            "email": "x",
            "entity_identifier_kind": {},
            "entity_identifier_value": "x",
            "first_name": "x",
            "id": 1,
            "last_name": "x",
            "locale": "x",
            "maxioid": "x",
            "organization": "x",
            "parent_id": 1,
            "phone": "x",
            "portal_customer_created_at": "2026-01-01T00:00:00Z",
            "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
            "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
            "reference": "x",
            "salesforce_id": "x",
            "state": "x",
            "state_name": "x",
            "surcharging": true,
            "tax_exempt": true,
            "tax_exempt_reason": "x",
            "updated_at": "2026-01-01T00:00:00Z",
            "vat_country": "x",
            "vat_number": "x",
            "verified": true,
            "zip": "x"
          },
          "delayed_cancel_at": "2026-01-01T00:00:00Z",
          "dunning_communication_delay_enabled": true,
          "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
          "expires_at": "2026-01-01T00:00:00Z",
          "group": {},
          "id": 1,
          "locale": "x",
          "net_terms": 1,
          "next_assessment_at": "2026-01-01T00:00:00Z",
          "next_product_handle": "x",
          "next_product_id": 1,
          "next_product_price_point_id": 1,
          "offer_id": 1,
          "on_hold_at": "2026-01-01T00:00:00Z",
          "payer_id": 1,
          "payment_collection_method": {},
          "payment_type": "x",
          "prepaid_configuration": {},
          "prepaid_dunning": true,
          "prepayment_balance_in_cents": 1,
          "previous_state": {},
          "product": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "default_product_price_point_id": 1,
            "description": "x",
            "expiration_interval": 1,
            "expiration_interval_unit": {},
            "features": [
              {
                "archived_at": "2026-01-01T00:00:00Z",
                "created_at": "2026-01-01T00:00:00Z",
                "feature_key": "x",
                "feature_kind": {},
                "feature_name": "x",
                "feature_template_id": 1,
                "id": 1,
                "periodicity_interval": 1,
                "periodicity_unit": {},
                "price_point_id": 1,
                "price_point_type": {},
                "updated_at": "2026-01-01T00:00:00Z",
                "value": "x"
              }
            ],
            "handle": "x",
            "id": 1,
            "initial_charge_after_trial": true,
            "initial_charge_in_cents": 1,
            "interval": 1,
            "interval_unit": {},
            "item_category": "x",
            "name": "x",
            "price_in_cents": 1,
            "product_family": {
              "accounting_code": "x",
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "description": "x",
              "handle": "x",
              "id": 1,
              "name": "x",
              "surcharging": true,
              "updated_at": "2026-01-01T00:00:00Z"
            },
            "product_price_point_handle": "x",
            "product_price_point_id": 1,
            "product_price_point_name": "x",
            "public_signup_pages": [
              {
                "id": 1,
                "return_params": "x",
                "return_url": "x",
                "url": "x"
              }
            ],
            "request_billing_address": true,
            "request_credit_card": true,
            "require_billing_address": true,
            "require_credit_card": true,
            "require_shipping_address": true,
            "return_params": "x",
            "tax_code": "x",
            "taxable": true,
            "trial_interval": 1,
            "trial_interval_unit": {},
            "trial_price_in_cents": 1,
            "unspsc_code": "x",
            "update_return_params": "x",
            "update_return_url": "x",
            "updated_at": "2026-01-01T00:00:00Z",
            "use_site_exchange_rate": true,
            "version_number": 1
          },
          "product_price_in_cents": 1,
          "product_price_point_id": 1,
          "product_price_point_type": {},
          "product_version_number": 1,
          "reason_code": "x",
          "receives_invoice_emails": true,
          "reference": "x",
          "referral_code": "x",
          "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
          "self_service_page_token": "x",
          "signup_payment_id": 1,
          "signup_revenue": "x",
          "snap_day": "x",
          "state": {},
          "stored_credential_transaction_id": 1,
          "total_revenue_in_cents": 1,
          "trial_ended_at": "2026-01-01T00:00:00Z",
          "trial_started_at": "2026-01-01T00:00:00Z",
          "updated_at": "2026-01-01T00:00:00Z"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}.json",
    "action": "subscription_id",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1"
    },
    "headers": [],
    "query": [
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 15236915,
        "state": "active",
        "balance_in_cents": 0,
        "total_revenue_in_cents": 14000,
        "product_price_in_cents": 1000,
        "product_version_number": 7,
        "current_period_ends_at": "2016-11-15T14:48:10-05:00",
        "next_assessment_at": "2016-11-15T14:48:10-05:00",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2016-11-14T14:48:12-05:00",
        "expires_at": null,
        "created_at": "2016-11-14T14:48:10-05:00",
        "updated_at": "2016-11-14T15:24:41-05:00",
        "cancellation_message": null,
        "cancellation_method": null,
        "cancel_at_end_of_period": null,
        "canceled_at": null,
        "current_period_started_at": "2016-11-14T14:48:10-05:00",
        "previous_state": "active",
        "signup_payment_id": 162269766,
        "signup_revenue": "260.00",
        "delayed_cancel_at": null,
        "coupon_code": "5SNN6HFK3GBH",
        "payment_collection_method": "automatic",
        "snap_day": null,
        "reason_code": null,
        "receives_invoice_emails": false,
        "net_terms": 0,
        "customer": {
          "first_name": "Curtis",
          "last_name": "Test",
          "email": "curtis@example.com",
          "cc_emails": "jeff@example.com",
          "organization": "",
          "reference": null,
          "id": 14714298,
          "created_at": "2016-11-14T14:48:10-05:00",
          "updated_at": "2016-11-14T14:48:13-05:00",
          "address": "123 Anywhere Street",
          "address_2": "",
          "city": "Boulder",
          "state": "CO",
          "zip": "80302",
          "country": "US",
          "phone": "",
          "verified": false,
          "portal_customer_created_at": "2016-11-14T14:48:13-05:00",
          "portal_invite_last_sent_at": "2016-11-14T14:48:13-05:00",
          "portal_invite_last_accepted_at": null,
          "tax_exempt": false,
          "vat_number": "012345678"
        },
        "product": {
          "id": 3792003,
          "name": "$10 Basic Plan",
          "handle": "basic",
          "description": "lorem ipsum",
          "accounting_code": "basic",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "day",
          "initial_charge_in_cents": null,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "initial_charge_after_trial": false,
          "return_params": "",
          "request_credit_card": false,
          "require_credit_card": false,
          "created_at": "2016-03-24T13:38:39-04:00",
          "updated_at": "2016-11-03T13:03:05-04:00",
          "archived_at": null,
          "update_return_url": "",
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "handle": "billing-plans",
            "accounting_code": null,
            "description": ""
          },
          "public_signup_pages": [
            {
              "id": 281054,
              "url": "https://general-goods.chargify.com/subscribe/kqvmfrbgd89q/basic"
            },
            {
              "id": 281240,
              "url": "https://general-goods.chargify.com/subscribe/dkffht5dxfd8/basic"
            },
            {
              "id": 282694,
              "url": "https://general-goods.chargify.com/subscribe/jwffwgdd95s8/basic"
            }
          ],
          "taxable": false,
          "version_number": 7,
          "product_price_point_name": "Default"
        },
        "credit_card": {
          "id": 10191713,
          "payment_type": "credit_card",
          "first_name": "Curtis",
          "last_name": "Test",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "card_type": "bogus",
          "expiration_month": 1,
          "expiration_year": 2026,
          "billing_address": "123 Anywhere Street",
          "billing_address_2": "",
          "billing_city": "Boulder",
          "billing_state": null,
          "billing_country": "",
          "billing_zip": "80302",
          "current_vault": "bogus",
          "vault_token": "1",
          "customer_vault_token": null,
          "customer_id": 14714298
        },
        "payment_type": "credit_card",
        "referral_code": "w7kjc9",
        "next_product_id": null,
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "stored_credential_transaction_id": 166411599220288,
        "on_hold_at": null,
        "scheduled_cancellation_at": "2016-11-14T14:48:13-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/lookup.json",
    "action": "lookup",
    "args": [],
    "select": {
      "reference": "v1"
    },
    "headers": [],
    "query": [
      "reference"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "activated_at": "2026-01-01T00:00:00Z",
        "automatically_resume_at": "2026-01-01T00:00:00Z",
        "balance_in_cents": 1,
        "bank_account": {
          "bank_account_holder_type": {},
          "bank_account_type": {},
          "bank_name": "x",
          "billing_address": "x",
          "billing_address_2": "x",
          "billing_city": "x",
          "billing_country": "x",
          "billing_state": "x",
          "billing_zip": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "current_vault": {},
          "customer_id": 1,
          "customer_vault_token": "x",
          "first_name": "x",
          "gateway_handle": "x",
          "id": 1,
          "last_name": "x",
          "masked_bank_account_number": "x",
          "masked_bank_routing_number": "x",
          "payment_type": {},
          "site_gateway_setting_id": 1,
          "updated_at": "2026-01-01T00:00:00Z",
          "vault_token": "x",
          "verified": true
        },
        "cancel_at_end_of_period": true,
        "canceled_at": "2026-01-01T00:00:00Z",
        "cancellation_message": "x",
        "cancellation_method": {},
        "coupon_code": "x",
        "coupon_codes": [
          "x"
        ],
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "coupons": [
          {
            "amount_in_cents": 1000,
            "code": "\"ABCD_10\"",
            "expires_at": "\"2023-07-13T05:18:58-04:00\"",
            "percentage": "\"15.0\"",
            "recurring": true,
            "use_count": 2,
            "uses_allowed": 10
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "credit_balance_in_cents": 1,
        "credit_card": {
          "billing_address": "123 Montana Way",
          "billing_address_2": "",
          "billing_city": "Billings",
          "billing_country": "US",
          "billing_state": "MT",
          "billing_zip": "59101",
          "card_type": "bogus",
          "current_vault": "bogus",
          "customer_id": 14543792,
          "customer_vault_token": null,
          "expiration_month": 1,
          "expiration_year": 2022,
          "first_name": "Test",
          "gateway_handle": null,
          "id": 10088716,
          "last_name": "Subscription",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "payment_type": "credit_card",
          "site_gateway_setting_id": 1,
          "vault_token": "1"
        },
        "currency": "x",
        "current_billing_amount_in_cents": 1,
        "current_period_ends_at": "2026-01-01T00:00:00Z",
        "current_period_started_at": "2026-01-01T00:00:00Z",
        "customer": {
          "address": "x",
          "address_2": "x",
          "branding_theme_id": 1,
          "cc_emails": "x",
          "city": "x",
          "country": "x",
          "country_name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "default_auto_renewal_profile_id": 1,
          "default_subscription_group_uid": "x",
          "email": "x",
          "entity_identifier_kind": {},
          "entity_identifier_value": "x",
          "first_name": "x",
          "id": 1,
          "last_name": "x",
          "locale": "x",
          "maxioid": "x",
          "organization": "x",
          "parent_id": 1,
          "phone": "x",
          "portal_customer_created_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
          "reference": "x",
          "salesforce_id": "x",
          "state": "x",
          "state_name": "x",
          "surcharging": true,
          "tax_exempt": true,
          "tax_exempt_reason": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "vat_country": "x",
          "vat_number": "x",
          "verified": true,
          "zip": "x"
        },
        "delayed_cancel_at": "2026-01-01T00:00:00Z",
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
        "expires_at": "2026-01-01T00:00:00Z",
        "group": {},
        "id": 1,
        "locale": "x",
        "net_terms": 1,
        "next_assessment_at": "2026-01-01T00:00:00Z",
        "next_product_handle": "x",
        "next_product_id": 1,
        "next_product_price_point_id": 1,
        "offer_id": 1,
        "on_hold_at": "2026-01-01T00:00:00Z",
        "payer_id": 1,
        "payment_collection_method": {},
        "payment_type": "x",
        "prepaid_configuration": {},
        "prepaid_dunning": true,
        "prepayment_balance_in_cents": 1,
        "previous_state": {},
        "product": {
          "accounting_code": "x",
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "default_product_price_point_id": 1,
          "description": "x",
          "expiration_interval": 1,
          "expiration_interval_unit": {},
          "features": [
            {
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "feature_key": "x",
              "feature_kind": {},
              "feature_name": "x",
              "feature_template_id": 1,
              "id": 1,
              "periodicity_interval": 1,
              "periodicity_unit": {},
              "price_point_id": 1,
              "price_point_type": {},
              "updated_at": "2026-01-01T00:00:00Z",
              "value": "x"
            }
          ],
          "handle": "x",
          "id": 1,
          "initial_charge_after_trial": true,
          "initial_charge_in_cents": 1,
          "interval": 1,
          "interval_unit": {},
          "item_category": "x",
          "name": "x",
          "price_in_cents": 1,
          "product_family": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "description": "x",
            "handle": "x",
            "id": 1,
            "name": "x",
            "surcharging": true,
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "product_price_point_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_name": "x",
          "public_signup_pages": [
            {
              "id": 1,
              "return_params": "x",
              "return_url": "x",
              "url": "x"
            }
          ],
          "request_billing_address": true,
          "request_credit_card": true,
          "require_billing_address": true,
          "require_credit_card": true,
          "require_shipping_address": true,
          "return_params": "x",
          "tax_code": "x",
          "taxable": true,
          "trial_interval": 1,
          "trial_interval_unit": {},
          "trial_price_in_cents": 1,
          "unspsc_code": "x",
          "update_return_params": "x",
          "update_return_url": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "use_site_exchange_rate": true,
          "version_number": 1
        },
        "product_price_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_type": {},
        "product_version_number": 1,
        "reason_code": "x",
        "receives_invoice_emails": true,
        "reference": "x",
        "referral_code": "x",
        "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
        "self_service_page_token": "x",
        "signup_payment_id": 1,
        "signup_revenue": "x",
        "snap_day": "x",
        "state": {},
        "stored_credential_transaction_id": 1,
        "total_revenue_in_cents": 1,
        "trial_ended_at": "2026-01-01T00:00:00Z",
        "trial_started_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/remove_coupon.json",
    "action": "remove_coupon",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "coupon_code": "v1"
    },
    "headers": [],
    "query": [
      "coupon_code"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": "Coupon successfully removed",
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/activate.json",
    "action": "activate",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "activated_at": "2026-01-01T00:00:00Z",
        "automatically_resume_at": "2026-01-01T00:00:00Z",
        "balance_in_cents": 1,
        "bank_account": {
          "bank_account_holder_type": {},
          "bank_account_type": {},
          "bank_name": "x",
          "billing_address": "x",
          "billing_address_2": "x",
          "billing_city": "x",
          "billing_country": "x",
          "billing_state": "x",
          "billing_zip": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "current_vault": {},
          "customer_id": 1,
          "customer_vault_token": "x",
          "first_name": "x",
          "gateway_handle": "x",
          "id": 1,
          "last_name": "x",
          "masked_bank_account_number": "x",
          "masked_bank_routing_number": "x",
          "payment_type": {},
          "site_gateway_setting_id": 1,
          "updated_at": "2026-01-01T00:00:00Z",
          "vault_token": "x",
          "verified": true
        },
        "cancel_at_end_of_period": true,
        "canceled_at": "2026-01-01T00:00:00Z",
        "cancellation_message": "x",
        "cancellation_method": {},
        "coupon_code": "x",
        "coupon_codes": [
          "x"
        ],
        "coupon_use_count": 1,
        "coupon_uses_allowed": 1,
        "coupons": [
          {
            "amount_in_cents": 1000,
            "code": "\"ABCD_10\"",
            "expires_at": "\"2023-07-13T05:18:58-04:00\"",
            "percentage": "\"15.0\"",
            "recurring": true,
            "use_count": 2,
            "uses_allowed": 10
          }
        ],
        "created_at": "2026-01-01T00:00:00Z",
        "credit_balance_in_cents": 1,
        "credit_card": {
          "billing_address": "123 Montana Way",
          "billing_address_2": "",
          "billing_city": "Billings",
          "billing_country": "US",
          "billing_state": "MT",
          "billing_zip": "59101",
          "card_type": "bogus",
          "current_vault": "bogus",
          "customer_id": 14543792,
          "customer_vault_token": null,
          "expiration_month": 1,
          "expiration_year": 2022,
          "first_name": "Test",
          "gateway_handle": null,
          "id": 10088716,
          "last_name": "Subscription",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "payment_type": "credit_card",
          "site_gateway_setting_id": 1,
          "vault_token": "1"
        },
        "currency": "x",
        "current_billing_amount_in_cents": 1,
        "current_period_ends_at": "2026-01-01T00:00:00Z",
        "current_period_started_at": "2026-01-01T00:00:00Z",
        "customer": {
          "address": "x",
          "address_2": "x",
          "branding_theme_id": 1,
          "cc_emails": "x",
          "city": "x",
          "country": "x",
          "country_name": "x",
          "created_at": "2026-01-01T00:00:00Z",
          "default_auto_renewal_profile_id": 1,
          "default_subscription_group_uid": "x",
          "email": "x",
          "entity_identifier_kind": {},
          "entity_identifier_value": "x",
          "first_name": "x",
          "id": 1,
          "last_name": "x",
          "locale": "x",
          "maxioid": "x",
          "organization": "x",
          "parent_id": 1,
          "phone": "x",
          "portal_customer_created_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_accepted_at": "2026-01-01T00:00:00Z",
          "portal_invite_last_sent_at": "2026-01-01T00:00:00Z",
          "reference": "x",
          "salesforce_id": "x",
          "state": "x",
          "state_name": "x",
          "surcharging": true,
          "tax_exempt": true,
          "tax_exempt_reason": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "vat_country": "x",
          "vat_number": "x",
          "verified": true,
          "zip": "x"
        },
        "delayed_cancel_at": "2026-01-01T00:00:00Z",
        "dunning_communication_delay_enabled": true,
        "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
        "expires_at": "2026-01-01T00:00:00Z",
        "group": {},
        "id": 1,
        "locale": "x",
        "net_terms": 1,
        "next_assessment_at": "2026-01-01T00:00:00Z",
        "next_product_handle": "x",
        "next_product_id": 1,
        "next_product_price_point_id": 1,
        "offer_id": 1,
        "on_hold_at": "2026-01-01T00:00:00Z",
        "payer_id": 1,
        "payment_collection_method": {},
        "payment_type": "x",
        "prepaid_configuration": {},
        "prepaid_dunning": true,
        "prepayment_balance_in_cents": 1,
        "previous_state": {},
        "product": {
          "accounting_code": "x",
          "archived_at": "2026-01-01T00:00:00Z",
          "created_at": "2026-01-01T00:00:00Z",
          "default_product_price_point_id": 1,
          "description": "x",
          "expiration_interval": 1,
          "expiration_interval_unit": {},
          "features": [
            {
              "archived_at": "2026-01-01T00:00:00Z",
              "created_at": "2026-01-01T00:00:00Z",
              "feature_key": "x",
              "feature_kind": {},
              "feature_name": "x",
              "feature_template_id": 1,
              "id": 1,
              "periodicity_interval": 1,
              "periodicity_unit": {},
              "price_point_id": 1,
              "price_point_type": {},
              "updated_at": "2026-01-01T00:00:00Z",
              "value": "x"
            }
          ],
          "handle": "x",
          "id": 1,
          "initial_charge_after_trial": true,
          "initial_charge_in_cents": 1,
          "interval": 1,
          "interval_unit": {},
          "item_category": "x",
          "name": "x",
          "price_in_cents": 1,
          "product_family": {
            "accounting_code": "x",
            "archived_at": "2026-01-01T00:00:00Z",
            "created_at": "2026-01-01T00:00:00Z",
            "description": "x",
            "handle": "x",
            "id": 1,
            "name": "x",
            "surcharging": true,
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "product_price_point_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_name": "x",
          "public_signup_pages": [
            {
              "id": 1,
              "return_params": "x",
              "return_url": "x",
              "url": "x"
            }
          ],
          "request_billing_address": true,
          "request_credit_card": true,
          "require_billing_address": true,
          "require_credit_card": true,
          "require_shipping_address": true,
          "return_params": "x",
          "tax_code": "x",
          "taxable": true,
          "trial_interval": 1,
          "trial_interval_unit": {},
          "trial_price_in_cents": 1,
          "unspsc_code": "x",
          "update_return_params": "x",
          "update_return_url": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "use_site_exchange_rate": true,
          "version_number": 1
        },
        "product_price_in_cents": 1,
        "product_price_point_id": 1,
        "product_price_point_type": {},
        "product_version_number": 1,
        "reason_code": "x",
        "receives_invoice_emails": true,
        "reference": "x",
        "referral_code": "x",
        "scheduled_cancellation_at": "2026-01-01T00:00:00Z",
        "self_service_page_token": "x",
        "signup_payment_id": 1,
        "signup_revenue": "x",
        "snap_day": "x",
        "state": {},
        "stored_credential_transaction_id": 1,
        "total_revenue_in_cents": 1,
        "trial_ended_at": "2026-01-01T00:00:00Z",
        "trial_started_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/override.json",
    "action": "override",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription",
    "accessor": "Subscription",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}.json",
    "action": "subscription_id",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 18220670,
        "state": "active",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2017-06-27T13:45:15-05:00",
        "created_at": "2017-06-27T13:45:13-05:00",
        "updated_at": "2017-06-30T09:26:50-05:00",
        "expires_at": null,
        "balance_in_cents": 10000,
        "current_period_ends_at": "2017-06-30T12:00:00-05:00",
        "next_assessment_at": "2017-06-30T12:00:00-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": "end",
        "cancellation_method": null,
        "current_period_started_at": "2017-06-27T13:45:13-05:00",
        "previous_state": "active",
        "signup_payment_id": 191819284,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 0,
        "product_price_in_cents": 0,
        "product_version_number": 1,
        "payment_type": null,
        "referral_code": "d3pw7f",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": null,
        "current_billing_amount_in_cents": 10000,
        "receives_invoice_emails": false,
        "customer": {
          "id": 17780587,
          "first_name": "Catie",
          "last_name": "Test",
          "organization": "Acme, Inc.",
          "email": "catie@example.com",
          "created_at": "2017-06-27T13:01:05-05:00",
          "updated_at": "2017-06-30T09:23:10-05:00",
          "reference": "123ABC",
          "address": "123 Anywhere Street",
          "address_2": "Apartment #10",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90210",
          "country": "US",
          "phone": "555-555-5555",
          "portal_invite_last_sent_at": "2017-06-27T13:45:16-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": true,
          "portal_customer_created_at": "2017-06-27T13:01:08-05:00",
          "cc_emails": "support@example.com",
          "tax_exempt": true
        },
        "product": {
          "id": 4470347,
          "name": "Zero Dollar Product",
          "handle": "zero-dollar-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-03-23T10:54:12-05:00",
          "updated_at": "2017-04-20T15:18:46-05:00",
          "price_in_cents": 0,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 997233,
            "name": "Acme Products",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 316810,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/69x825m78v3d/zero-dollar-product"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "subscription_id_or_reference",
        "wire": "subscription_id_or_reference",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "usage": {
        "id": 138522957,
        "memo": "My memo",
        "created_at": "2017-11-13T10:05:32-06:00",
        "price_point_id": 149416,
        "quantity": 1000,
        "component_id": 500093,
        "component_handle": "handle",
        "subscription_id": 22824464
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/price_points.json",
    "action": "price_points.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "components": [
        {
          "component_id": 123,
          "price_point": 456
        },
        {
          "component_id": 789,
          "price_point": 987
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions_components.json",
    "args": [],
    "select": {
      "date_field": "v1",
      "direction": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "include": "v1",
      "page": 1,
      "per_page": 50,
      "price_point_id": "v1",
      "product_family_id": "v1",
      "sort": "v1",
      "start_date": "v1",
      "start_datetime": "v1",
      "subscription_id": "v1"
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "sort",
      "direction",
      "filter",
      "date_field",
      "start_date",
      "start_datetime",
      "end_date",
      "end_datetime",
      "subscription_ids",
      "price_point_ids",
      "product_family_ids",
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscriptions_components": [
        {
          "allocated_quantity": 1,
          "allow_fractional_quantities": true,
          "archived_at": "2026-01-01T00:00:00Z",
          "component_handle": "x",
          "component_id": 1,
          "created_at": "2026-01-01T00:00:00Z",
          "currency": "x",
          "description": "x",
          "display_on_hosted_page": true,
          "downgrade_credit": {},
          "enabled": true,
          "historic_usages": [
            {
              "billing_period_ends_at": "2026-01-01T00:00:00Z",
              "billing_period_starts_at": "2026-01-01T00:00:00Z",
              "total_usage_quantity": 1
            }
          ],
          "id": 1,
          "interval": 1,
          "interval_unit": {},
          "kind": {},
          "name": "x",
          "price_point_handle": "x",
          "price_point_id": 1,
          "price_point_name": "x",
          "price_point_type": {},
          "pricing_scheme": {},
          "product_family_handle": "x",
          "product_family_id": 1,
          "recurring": true,
          "subscription": {
            "state": {},
            "updated_at": "2026-01-01T00:00:00Z"
          },
          "subscription_id": 1,
          "unit_balance": 1,
          "unit_name": "x",
          "updated_at": "2026-01-01T00:00:00Z",
          "upgrade_charge": {},
          "use_site_exchange_rate": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/components.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "date_field": "v1",
      "direction": "v1",
      "end_date": "v1",
      "end_datetime": "v1",
      "filter": "v1",
      "in_use": "v1",
      "include": "v1",
      "price_point_id": "v1",
      "product_family_id": "v1",
      "sort": "v1",
      "start_date": "v1",
      "start_datetime": "v1"
    },
    "headers": [],
    "query": [
      "date_field",
      "direction",
      "filter",
      "end_date",
      "end_datetime",
      "price_point_ids",
      "product_family_ids",
      "sort",
      "start_date",
      "start_datetime",
      "include",
      "in_use"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "component": {
          "component_id": 0,
          "subscription_id": 0,
          "allocated_quantity": 0,
          "pricing_scheme": "per_unit",
          "name": "string",
          "kind": "quantity_based_component",
          "unit_name": "string",
          "price_point_id": 0,
          "price_point_handle": "string",
          "price_point_type": "default",
          "price_point_name": "string",
          "enabled": true,
          "unit_balance": 0,
          "id": 0,
          "created_at": "2022-02-22T14:07:00-05:00",
          "updated_at": "2022-02-22T14:07:00-05:00",
          "component_handle": "string",
          "archived_at": null
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/components/{component_id}.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "component": {
        "component_id": 193028,
        "subscription_id": 14593192,
        "allocated_quantity": 1,
        "pricing_scheme": "per_unit",
        "name": "Users",
        "kind": "quantity_based_component",
        "unit_name": "Users",
        "price_point_id": 1,
        "price_point_handle": "top-tier",
        "enabled": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
    "args": [
      {
        "name": "allocation_id",
        "wire": "allocation_id",
        "value": "p1"
      },
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p2"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p3"
      }
    ],
    "select": {
      "content_type": "v1"
    },
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_component",
    "accessor": "SubscriptionComponent",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
    "args": [
      {
        "name": "allocation_id",
        "wire": "allocation_id",
        "value": "p1"
      },
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p2"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/group.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_group": {
        "customer_id": 130690,
        "payment_profile": {
          "id": 32055,
          "first_name": "Marty",
          "last_name": "McFly",
          "masked_card_number": "XXXX-XXXX-XXXX-1111"
        },
        "subscription_ids": [
          32988,
          33060,
          32986
        ],
        "created_at": "2018-08-30T17:14:30-04:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_group": {
        "uid": "grp_952mvqcnk53wq",
        "customer_id": 1,
        "payment_profile": {
          "id": 1,
          "first_name": "t",
          "last_name": "t",
          "masked_card_number": "XXXX-XXXX-XXXX-1"
        },
        "payment_collection_method": "automatic",
        "subscription_ids": [
          1,
          2
        ],
        "created_at": "2021-01-21T05:47:38-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "list",
    "method": "GET",
    "path": "/subscription_groups.json",
    "args": [],
    "select": {
      "include": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_groups": [
        {
          "uid": "grp_952mvqcnk53wq",
          "scheme": 1,
          "customer_id": 88498000,
          "payment_profile_id": 93063018,
          "subscription_ids": [
            42768907,
            82370782
          ],
          "primary_subscription_id": 69844395,
          "next_assessment_at": "2021-05-05T16:00:21-04:00",
          "state": "active",
          "cancel_at_end_of_period": false,
          "account_balances": {
            "prepayments": {
              "balance_in_cents": 0
            },
            "service_credits": {
              "balance_in_cents": 0
            },
            "pending_discounts": {
              "balance_in_cents": 0
            }
          }
        }
      ],
      "meta": {
        "current_page": 1,
        "total_count": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "list",
    "method": "GET",
    "path": "/subscription_groups/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1"
    },
    "headers": [],
    "query": [
      "include"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "grp_939ktzq8v4477",
      "scheme": 1,
      "customer_id": 400,
      "payment_profile_id": 567,
      "subscription_ids": [
        101,
        102,
        103
      ],
      "primary_subscription_id": 101,
      "next_assessment_at": "2020-08-01T14:00:00-05:00",
      "state": "active",
      "cancel_at_end_of_period": false,
      "current_billing_amount_in_cents": 11500,
      "customer": {
        "first_name": "Mark",
        "last_name": "Smith",
        "organization": "Acme Inc.",
        "email": "smith@example.com",
        "reference": "4c92223b-bc16-4d0d-87ff-b177a89a2655"
      },
      "account_balances": {
        "prepayments": {
          "balance_in_cents": 0
        },
        "service_credits": {
          "balance_in_cents": 0
        },
        "open_invoices": {
          "balance_in_cents": 4400
        },
        "pending_discounts": {
          "balance_in_cents": 0
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "list",
    "method": "GET",
    "path": "/subscription_groups/lookup.json",
    "action": "lookup",
    "args": [],
    "select": {
      "subscription_id": "v1"
    },
    "headers": [],
    "query": [
      "subscription_id"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "grp_939ktzq8v4477",
      "scheme": 1,
      "customer_id": 400,
      "payment_profile_id": 567,
      "subscription_ids": [
        101,
        102,
        103
      ],
      "primary_subscription_id": 101,
      "next_assessment_at": "2020-08-01T14:00:00-05:00",
      "state": "active",
      "cancel_at_end_of_period": false,
      "customer": {
        "first_name": "Mark",
        "last_name": "Smith",
        "organization": "Acme Inc.",
        "email": "smith@example.com",
        "reference": "4c92223b-bc16-4d0d-87ff-b177a89a2655"
      },
      "account_balances": {
        "prepayments": {
          "balance_in_cents": 0
        },
        "service_credits": {
          "balance_in_cents": 0
        },
        "open_invoices": {
          "balance_in_cents": 4400
        },
        "pending_discounts": {
          "balance_in_cents": 0
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/group.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscription_groups/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "grp_99w5xp9y5xycy",
      "deleted": true
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group",
    "accessor": "SubscriptionGroup",
    "op": "update",
    "method": "PUT",
    "path": "/subscription_groups/{uid}.json",
    "action": "uid",
    "args": [
      {
        "name": "uid",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription_group": {
        "customer_id": 1,
        "payment_profile": {
          "id": 1,
          "first_name": "t",
          "last_name": "t",
          "masked_card_number": "XXXX-XXXX-XXXX-1"
        },
        "payment_collection_method": "automatic",
        "subscription_ids": [
          1
        ],
        "created_at": "2021-01-21T05:47:38-05:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_invoice_account",
    "accessor": "SubscriptionGroupInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/prepayments.json",
    "action": "prepayments.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 6049554,
      "amount_in_cents": 10000,
      "ending_balance_in_cents": 5000,
      "entry_type": "Debit",
      "memo": "Debit from invoice account."
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_invoice_account",
    "accessor": "SubscriptionGroupInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/service_credit_deductions.json",
    "action": "service_credit_deductions.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": 100,
      "amount_in_cents": 1000,
      "ending_balance_in_cents": 0,
      "entry_type": "Debit",
      "memo": "Debit from group account"
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_invoice_account",
    "accessor": "SubscriptionGroupInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/service_credits.json",
    "action": "service_credits.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "service_credit": {
        "id": 101,
        "amount_in_cents": 1000,
        "ending_balance_in_cents": 2000,
        "entry_type": "Credit",
        "memo": "Credit to group account"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_invoice_account",
    "accessor": "SubscriptionGroupInvoiceAccount",
    "op": "list",
    "method": "GET",
    "path": "/subscription_groups/{uid}/prepayments.json",
    "action": "prepayments.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prepayments": [
        {
          "prepayment": {
            "id": 142,
            "subscription_group_uid": "grp_b4qhx3bvx72t8",
            "amount_in_cents": 10000,
            "remaining_amount_in_cents": 10000,
            "details": "test",
            "external": true,
            "memo": "test",
            "payment_type": "cash",
            "created_at": "2023-06-21T04:37:02-04:00"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_signup",
    "accessor": "SubscriptionGroupSignup",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/signup.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "uid": "x",
      "scheme": 1,
      "customer_id": 1,
      "payment_profile_id": 1,
      "subscription_ids": [
        1
      ],
      "primary_subscription_id": 1,
      "next_assessment_at": "2026-01-01T00:00:00Z",
      "state": {},
      "cancel_at_end_of_period": true,
      "subscriptions": [
        {
          "id": 1,
          "reference": "x",
          "product_id": 1,
          "product_handle": "x",
          "product_price_point_id": 1,
          "product_price_point_handle": "x",
          "currency": "x",
          "coupon_code": "x",
          "total_revenue_in_cents": 1,
          "balance_in_cents": 1
        }
      ],
      "payment_collection_method": {}
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_status",
    "accessor": "SubscriptionGroupStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/cancel.json",
    "action": "cancel.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_group_status",
    "accessor": "SubscriptionGroupStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/delayed_cancel.json",
    "action": "delayed_cancel.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_group_status",
    "accessor": "SubscriptionGroupStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscription_groups/{uid}/reactivate.json",
    "action": "reactivate.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "uid": "grp_93wgm89cbjkw6",
      "scheme": 1,
      "customer_id": 1,
      "payment_profile_id": 1,
      "subscription_ids": [
        1,
        2
      ],
      "primary_subscription_id": 1,
      "next_assessment_at": "2020-06-18T12:00:00-04:00",
      "state": "active",
      "cancel_at_end_of_period": false
    },
    "idField": "id"
  },
  {
    "entity": "subscription_group_status",
    "accessor": "SubscriptionGroupStatus",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscription_groups/{uid}/delayed_cancel.json",
    "action": "delayed_cancel.json",
    "args": [
      {
        "name": "id",
        "wire": "uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_invoice_account",
    "accessor": "SubscriptionInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/prepayments.json",
    "action": "prepayments.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "prepayment": {
        "id": 1,
        "subscription_id": 1,
        "amount_in_cents": 10000,
        "memo": "John Doe - Prepayment",
        "created_at": "2020-07-31T05:52:32-04:00",
        "starting_balance_in_cents": 0,
        "ending_balance_in_cents": -10000
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_invoice_account",
    "accessor": "SubscriptionInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/service_credit_deductions.json",
    "action": "service_credit_deductions.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_invoice_account",
    "accessor": "SubscriptionInvoiceAccount",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/service_credits.json",
    "action": "service_credits.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "id": 101,
      "amount_in_cents": 1000,
      "ending_balance_in_cents": 2000,
      "entry_type": "Credit",
      "memo": "Credit to group account"
    },
    "idField": "id"
  },
  {
    "entity": "subscription_invoice_account",
    "accessor": "SubscriptionInvoiceAccount",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/service_credits/list.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "direction": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "service_credits": [
        {
          "id": 68,
          "amount_in_cents": 2200,
          "ending_balance_in_cents": 1100,
          "entry_type": "Debit",
          "memo": "Service credit memo",
          "invoice_uid": "inv_brntdvmmqxc3j",
          "remaining_balance_in_cents": 1100,
          "created_at": "2025-04-01T09:54:49-04:00"
        },
        {
          "id": 67,
          "amount_in_cents": 3300,
          "ending_balance_in_cents": 3300,
          "entry_type": "Credit",
          "memo": "Service credit memo",
          "invoice_uid": null,
          "remaining_balance_in_cents": 1100,
          "created_at": "2025-03-05T16:06:08-05:00"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_invoice_account",
    "accessor": "SubscriptionInvoiceAccount",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/prepayments.json",
    "action": "prepayments.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page",
      "filter"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "prepayments": [
        {
          "id": 17,
          "subscription_id": 3558750,
          "amount_in_cents": 2000,
          "remaining_amount_in_cents": 1100,
          "refunded_amount_in_cents": 0,
          "external": true,
          "memo": "test",
          "details": "test details",
          "payment_type": "cash",
          "created_at": "2022-01-18T22:45:41+11:00"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_mrr",
    "accessor": "SubscriptionMrr",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions_mrr.json",
    "args": [],
    "select": {
      "at_time": "at_time=2022-01-10T10:00:00-05:00",
      "direction": "v1",
      "filter": "v1",
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "filter",
      "at_time",
      "page",
      "per_page",
      "direction"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscriptions_mrr": [
        {
          "subscription_id": 0,
          "mrr_amount_in_cents": 0,
          "breakouts": {
            "plan_amount_in_cents": 0,
            "usage_amount_in_cents": 0
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_note",
    "accessor": "SubscriptionNote",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/notes.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "note": {
        "body": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "id": 1,
        "sticky": true,
        "subscription_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_note",
    "accessor": "SubscriptionNote",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/notes.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": 1,
      "per_page": 50
    },
    "headers": [],
    "query": [
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "note": {
          "body": "Test note.",
          "created_at": "2015-06-15T13:26:47-04:00",
          "id": 5,
          "sticky": false,
          "subscription_id": 100046,
          "updated_at": "2015-06-15T13:28:12-04:00"
        }
      },
      {
        "note": {
          "body": "Another test note.",
          "created_at": "2015-06-15T12:04:46-04:00",
          "id": 4,
          "sticky": false,
          "subscription_id": 100046,
          "updated_at": "2015-06-15T13:26:33-04:00"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "subscription_note",
    "accessor": "SubscriptionNote",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/notes/{note_id}.json",
    "args": [
      {
        "name": "note_id",
        "wire": "note_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "note": {
        "body": "Test note.",
        "created_at": "2015-06-15T13:26:47-04:00",
        "id": 5,
        "sticky": false,
        "subscription_id": 100046,
        "updated_at": "2015-06-15T13:28:12-04:00"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_note",
    "accessor": "SubscriptionNote",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/notes/{note_id}.json",
    "args": [
      {
        "name": "note_id",
        "wire": "note_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_note",
    "accessor": "SubscriptionNote",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/notes/{note_id}.json",
    "args": [
      {
        "name": "note_id",
        "wire": "note_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "note": {
        "body": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "id": 1,
        "sticky": true,
        "subscription_id": 1,
        "updated_at": "2026-01-01T00:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_product",
    "accessor": "SubscriptionProduct",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/migrations.json",
    "action": "migrations.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 15054201,
        "state": "trialing",
        "trial_started_at": "2016-11-03T13:43:36-04:00",
        "trial_ended_at": "2016-11-10T12:43:36-05:00",
        "activated_at": "2016-11-02T10:20:57-04:00",
        "created_at": "2016-11-02T10:20:55-04:00",
        "updated_at": "2016-11-03T13:43:36-04:00",
        "expires_at": null,
        "balance_in_cents": -13989,
        "current_period_ends_at": "2016-11-10T12:43:36-05:00",
        "next_assessment_at": "2016-11-10T12:43:36-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": null,
        "cancellation_method": null,
        "current_period_started_at": "2016-11-03T13:43:35-04:00",
        "previous_state": "active",
        "signup_payment_id": 160680121,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 14000,
        "product_price_in_cents": 1000,
        "product_version_number": 6,
        "payment_type": "credit_card",
        "referral_code": "ghnhvy",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "customer": {
          "id": 14543792,
          "first_name": "Frankie",
          "last_name": "Test",
          "organization": null,
          "email": "testfrankie111@test.com",
          "created_at": "2016-11-02T10:20:55-04:00",
          "updated_at": "2016-11-02T10:20:58-04:00",
          "reference": null,
          "address": null,
          "address_2": null,
          "city": null,
          "state": null,
          "zip": null,
          "country": null,
          "phone": "5555551212",
          "portal_invite_last_sent_at": "2016-11-02T10:20:58-04:00",
          "portal_invite_last_accepted_at": null,
          "verified": false,
          "portal_customer_created_at": "2016-11-02T10:20:58-04:00",
          "cc_emails": null
        },
        "product": {
          "id": 3861800,
          "name": "Trial Product",
          "handle": "trial-product",
          "description": "Trial period with payment expected at end of trial.",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2016-07-08T09:53:55-04:00",
          "updated_at": "2016-09-05T13:00:36-04:00",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": 0,
          "trial_interval": 7,
          "trial_interval_unit": "day",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "initial_charge_after_trial": false,
          "version_number": 6,
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "description": "",
            "handle": "billing-plans",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 294791,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/xv52yrcc3byx/trial-product"
            }
          ]
        },
        "credit_card": {
          "id": 10088716,
          "first_name": "F",
          "last_name": "NB",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "card_type": "bogus",
          "expiration_month": 1,
          "expiration_year": 2017,
          "customer_id": 14543792,
          "current_vault": "bogus",
          "vault_token": "1",
          "billing_address": "123 Montana Way",
          "billing_city": "Billings",
          "billing_state": "MT",
          "billing_zip": "59101",
          "billing_country": "US",
          "customer_vault_token": null,
          "billing_address_2": "Apt. 10",
          "payment_type": "credit_card"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_product",
    "accessor": "SubscriptionProduct",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/migrations/preview.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "migration": {
        "prorated_adjustment_in_cents": 0,
        "charge_in_cents": 5000,
        "payment_due_in_cents": 0,
        "credit_applied_in_cents": 0
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json",
    "args": [
      {
        "name": "scheduled_renewal_id",
        "wire": "scheduled_renewals_configuration_id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "scheduled_renewal_configuration_item": {
        "id": 555,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 987,
        "item_id": 42,
        "item_type": "Product",
        "item_subclass": "SubscriptionProduct",
        "price_point_id": 73,
        "price_point_type": "ProductPricePoint",
        "quantity": 1,
        "decimal_quantity": "1.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals.json",
    "action": "scheduled_renewals.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "scheduled_renewal_configuration": {
        "id": 123,
        "site_id": 456,
        "subscription_id": 12345,
        "starts_at": "2024-12-01T00:00:00Z",
        "ends_at": "2025-12-01T00:00:00Z",
        "lock_in_at": "2024-11-15T00:00:00Z",
        "created_at": "2024-09-01T12:00:00Z",
        "status": "scheduled",
        "scheduled_renewal_configuration_items": [
          {
            "id": 789,
            "subscription_id": 12345,
            "subscription_renewal_configuration_id": 123,
            "item_id": 4,
            "item_type": "Product",
            "item_subclass": "Product",
            "price_point_id": 7,
            "price_point_type": "ProductPricePoint",
            "quantity": 1,
            "decimal_quantity": "1.0",
            "created_at": "2024-09-01T12:00:00Z"
          }
        ],
        "contract": {
          "id": 107,
          "maxio_id": "maxio-id",
          "number": null,
          "register": {
            "id": 12,
            "maxio_id": "maxio_id-id",
            "name": "Register",
            "currency_code": "USD"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals.json",
    "action": "scheduled_renewals.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "status": "v1"
    },
    "headers": [],
    "query": [
      "status"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "scheduled_renewal_configurations": [
        {
          "id": 123,
          "site_id": 456,
          "subscription_id": 12345,
          "starts_at": "2024-12-01T00:00:00Z",
          "ends_at": "2025-12-01T00:00:00Z",
          "lock_in_at": "2024-11-15T00:00:00Z",
          "created_at": "2024-09-01T12:00:00Z",
          "status": "scheduled",
          "scheduled_renewal_configuration_items": [
            {
              "id": 789,
              "subscription_id": 12345,
              "subscription_renewal_configuration_id": 123,
              "item_id": 4,
              "item_type": "Product",
              "item_subclass": "Product",
              "price_point_id": 7,
              "price_point_type": "ProductPricePoint",
              "quantity": 1,
              "decimal_quantity": "1.0",
              "created_at": "2024-09-01T12:00:00Z"
            }
          ],
          "contract": {
            "id": 107,
            "maxio_id": "maxio-id",
            "number": null,
            "register": {
              "id": 12,
              "maxio_id": "maxio-id",
              "name": "Register",
              "currency_code": "USD"
            }
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "load",
    "method": "GET",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "scheduled_renewal_configuration": {
        "id": 123,
        "site_id": 456,
        "subscription_id": 12345,
        "starts_at": "2024-12-01T00:00:00Z",
        "ends_at": "2025-12-01T00:00:00Z",
        "lock_in_at": "2024-11-15T00:00:00Z",
        "created_at": "2024-09-01T12:00:00Z",
        "status": "scheduled",
        "scheduled_renewal_configuration_items": [
          {
            "id": 789,
            "subscription_id": 12345,
            "subscription_renewal_configuration_id": 123,
            "item_id": 4,
            "item_type": "Product",
            "item_subclass": "Product",
            "price_point_id": 7,
            "price_point_type": "ProductPricePoint",
            "quantity": 1,
            "decimal_quantity": "1.0",
            "created_at": "2024-09-01T12:00:00Z"
          }
        ],
        "contract": {
          "id": 107,
          "maxio_id": "maxio-id",
          "number": null,
          "register": {
            "id": 12,
            "maxio_id": "maxio-id",
            "name": "Register",
            "currency_code": "USD"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "scheduled_renewal_id",
        "wire": "scheduled_renewals_configuration_id",
        "value": "p2"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "scheduled_renewal_id",
        "wire": "scheduled_renewals_configuration_id",
        "value": "p2"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p3"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "scheduled_renewal_configuration_item": {
        "id": 555,
        "subscription_id": 12345,
        "subscription_renewal_configuration_id": 987,
        "item_id": 42,
        "item_type": "Component",
        "item_subclass": "SubscriptionComponent",
        "price_point_id": 73,
        "price_point_type": "ComponentPricePoint",
        "quantity": 3,
        "decimal_quantity": "3.0",
        "created_at": "2025-09-01T12:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_renewal",
    "accessor": "SubscriptionRenewal",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "scheduled_renewal_configuration": {
        "id": 123,
        "site_id": 456,
        "subscription_id": 12345,
        "starts_at": "2025-12-01T00:00:00Z",
        "ends_at": "2026-12-01T00:00:00Z",
        "lock_in_at": "2025-11-15T00:00:00Z",
        "created_at": "2025-09-01T12:00:00Z",
        "status": "scheduled",
        "scheduled_renewal_configuration_items": [
          {
            "id": 789,
            "subscription_id": 12345,
            "subscription_renewal_configuration_id": 123,
            "item_id": 4,
            "item_type": "Product",
            "item_subclass": "Product",
            "price_point_id": 7,
            "price_point_type": "ProductPricePoint",
            "quantity": 1,
            "decimal_quantity": "1.0",
            "created_at": "2025-09-01T12:00:00Z"
          }
        ],
        "contract": {
          "id": 107,
          "maxio_id": "maxio-id",
          "number": null,
          "register": {
            "id": 12,
            "maxio_id": "maxio-id",
            "name": "Register",
            "currency_code": "USD"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/resume.json",
    "action": "resume.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "calendar_billing_'resumption_charge'": "v1"
    },
    "headers": [],
    "query": [
      "calendar_billing['resumption_charge']"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 18220670,
        "state": "active",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2017-06-27T13:45:15-05:00",
        "created_at": "2017-06-27T13:45:13-05:00",
        "updated_at": "2017-06-30T09:26:50-05:00",
        "expires_at": null,
        "balance_in_cents": 10000,
        "current_period_ends_at": "2017-06-30T12:00:00-05:00",
        "next_assessment_at": "2017-06-30T12:00:00-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": "end",
        "cancellation_method": null,
        "current_period_started_at": "2017-06-27T13:45:13-05:00",
        "previous_state": "active",
        "signup_payment_id": 191819284,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 0,
        "product_price_in_cents": 0,
        "product_version_number": 1,
        "payment_type": null,
        "referral_code": "d3pw7f",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": null,
        "current_billing_amount_in_cents": 10000,
        "customer": {
          "id": 17780587,
          "first_name": "Catie",
          "last_name": "Test",
          "organization": "Acme, Inc.",
          "email": "catie@example.com",
          "created_at": "2017-06-27T13:01:05-05:00",
          "updated_at": "2017-06-30T09:23:10-05:00",
          "reference": "123ABC",
          "address": "123 Anywhere Street",
          "address_2": "Apartment #10",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90210",
          "country": "US",
          "phone": "555-555-5555",
          "portal_invite_last_sent_at": "2017-06-27T13:45:16-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": true,
          "portal_customer_created_at": "2017-06-27T13:01:08-05:00",
          "cc_emails": "support@example.com",
          "tax_exempt": true
        },
        "product": {
          "id": 4470347,
          "name": "Zero Dollar Product",
          "handle": "zero-dollar-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-03-23T10:54:12-05:00",
          "updated_at": "2017-04-20T15:18:46-05:00",
          "price_in_cents": 0,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 997233,
            "name": "Acme Products",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 316810,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/69x825m78v3d/zero-dollar-product"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/hold.json",
    "action": "hold.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 18220670,
        "state": "on_hold",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2017-06-27T13:45:15-05:00",
        "created_at": "2017-06-27T13:45:13-05:00",
        "updated_at": "2017-06-30T09:26:50-05:00",
        "expires_at": null,
        "balance_in_cents": 10000,
        "current_period_ends_at": "2017-06-30T12:00:00-05:00",
        "next_assessment_at": "2017-06-30T12:00:00-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": "end",
        "cancellation_method": null,
        "current_period_started_at": "2017-06-27T13:45:13-05:00",
        "previous_state": "active",
        "signup_payment_id": 191819284,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 0,
        "product_price_in_cents": 0,
        "product_version_number": 1,
        "payment_type": null,
        "referral_code": "d3pw7f",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": null,
        "current_billing_amount_in_cents": 10000,
        "customer": {
          "id": 17780587,
          "first_name": "Catie",
          "last_name": "Test",
          "organization": "Acme, Inc.",
          "email": "catie@example.com",
          "created_at": "2017-06-27T13:01:05-05:00",
          "updated_at": "2017-06-30T09:23:10-05:00",
          "reference": "123ABC",
          "address": "123 Anywhere Street",
          "address_2": "Apartment #10",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90210",
          "country": "US",
          "phone": "555-555-5555",
          "portal_invite_last_sent_at": "2017-06-27T13:45:16-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": true,
          "portal_customer_created_at": "2017-06-27T13:01:08-05:00",
          "cc_emails": "support@example.com",
          "tax_exempt": true
        },
        "product": {
          "id": 4470347,
          "name": "Zero Dollar Product",
          "handle": "zero-dollar-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-03-23T10:54:12-05:00",
          "updated_at": "2017-04-20T15:18:46-05:00",
          "price_in_cents": 0,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 997233,
            "name": "Acme Products",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 316810,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/69x825m78v3d/zero-dollar-product"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "create",
    "method": "POST",
    "path": "/subscriptions/{subscription_id}/renewals/preview.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "renewal_preview": {
        "next_assessment_at": "2017-03-13T12:50:55-04:00",
        "subtotal_in_cents": 6000,
        "total_tax_in_cents": 0,
        "total_discount_in_cents": 0,
        "total_in_cents": 6000,
        "existing_balance_in_cents": 0,
        "total_amount_due_in_cents": 6000,
        "uncalculated_taxes": false,
        "line_items": [
          {
            "transaction_type": "charge",
            "kind": "baseline",
            "amount_in_cents": 5000,
            "memo": "Gold Product (03/13/2017 - 04/13/2017)",
            "discount_amount_in_cents": 0,
            "taxable_amount_in_cents": 0,
            "product_id": 1,
            "product_handle": "gold-product",
            "product_name": "Gold Product",
            "period_range_start": "01/10/2024",
            "period_range_end": "02/10/2024"
          },
          {
            "transaction_type": "charge",
            "kind": "quantity_based_component",
            "amount_in_cents": 1000,
            "memo": "Quantity Component: 10 Quantity Components",
            "discount_amount_in_cents": 0,
            "taxable_amount_in_cents": 0,
            "component_id": 104,
            "component_handle": "quantity-component",
            "component_name": "Quantity Component",
            "period_range_start": "01/10/2024",
            "period_range_end": "02/10/2024"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}.json",
    "args": [
      {
        "name": "subscription_id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {
      "content_type": "v1"
    },
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 15254809,
        "state": "canceled",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2016-11-15T15:33:44-05:00",
        "created_at": "2016-11-15T15:33:44-05:00",
        "updated_at": "2016-11-15T17:13:06-05:00",
        "expires_at": null,
        "balance_in_cents": 0,
        "current_period_ends_at": "2017-08-29T12:00:00-04:00",
        "next_assessment_at": "2017-08-29T12:00:00-04:00",
        "canceled_at": "2016-11-15T17:13:06-05:00",
        "cancellation_message": "Canceling the subscription via the API",
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": null,
        "cancellation_method": "merchant_api",
        "current_period_started_at": "2016-11-15T15:33:44-05:00",
        "previous_state": "active",
        "signup_payment_id": 0,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 0,
        "product_price_in_cents": 1000,
        "product_version_number": 7,
        "payment_type": "credit_card",
        "referral_code": "tg8qbq",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "customer": {
          "id": 14731081,
          "first_name": "John",
          "last_name": "Doe",
          "organization": "Acme Widgets",
          "email": "john.doe@example.com",
          "created_at": "2016-11-15T15:33:44-05:00",
          "updated_at": "2016-11-15T15:33:45-05:00",
          "reference": "123",
          "address": null,
          "address_2": null,
          "city": null,
          "state": null,
          "zip": null,
          "country": null,
          "phone": null,
          "portal_invite_last_sent_at": "2016-11-15T15:33:45-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": false,
          "portal_customer_created_at": "2016-11-15T15:33:45-05:00",
          "cc_emails": null
        },
        "product": {
          "id": 3792003,
          "name": "$10 Basic Plan",
          "handle": "basic",
          "description": "lorem ipsum",
          "accounting_code": "basic",
          "request_credit_card": false,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2016-03-24T13:38:39-04:00",
          "updated_at": "2016-11-03T13:03:05-04:00",
          "price_in_cents": 1000,
          "interval": 1,
          "interval_unit": "day",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "initial_charge_after_trial": false,
          "version_number": 7,
          "update_return_params": "",
          "product_family": {
            "id": 527890,
            "name": "Acme Projects",
            "description": "",
            "handle": "billing-plans",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 281054,
              "return_url": "http://www.example.com?successfulsignup",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/kqvmfrbgd89q/basic"
            },
            {
              "id": 281240,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/dkffht5dxfd8/basic"
            },
            {
              "id": 282694,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/jwffwgdd95s8/basic"
            }
          ]
        },
        "credit_card": {
          "id": 10202898,
          "first_name": "John",
          "last_name": "Doe",
          "masked_card_number": "XXXX-XXXX-XXXX-1111",
          "card_type": "visa",
          "expiration_month": 12,
          "expiration_year": 2020,
          "customer_id": 14731081,
          "current_vault": "authorizenet",
          "vault_token": "12345",
          "billing_address": null,
          "billing_city": null,
          "billing_state": null,
          "billing_zip": null,
          "billing_country": null,
          "customer_vault_token": "67890",
          "billing_address_2": null,
          "payment_type": "credit_card"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "remove",
    "method": "DELETE",
    "path": "/subscriptions/{subscription_id}/delayed_cancel.json",
    "action": "delayed_cancel.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "message": "This subscription will no longer be canceled"
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/hold.json",
    "action": "hold.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 20359140,
        "state": "on_hold",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2018-01-05T17:15:50-06:00",
        "created_at": "2018-01-05T17:15:49-06:00",
        "updated_at": "2018-01-09T10:26:14-06:00",
        "expires_at": null,
        "balance_in_cents": 0,
        "current_period_ends_at": "2023-01-05T17:15:00-06:00",
        "next_assessment_at": "2023-01-05T17:15:00-06:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": null,
        "cancellation_method": null,
        "current_period_started_at": "2018-01-05T17:15:49-06:00",
        "previous_state": "active",
        "signup_payment_id": 219829722,
        "signup_revenue": "100.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 10009991,
        "product_price_in_cents": 10000,
        "product_version_number": 1,
        "payment_type": "credit_card",
        "referral_code": "8y7jqr",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": "2019-01-20T00:00:00-06:00",
        "customer": {
          "id": 19948683,
          "first_name": "Vanessa",
          "last_name": "Test",
          "organization": "",
          "email": "vanessa@example.com",
          "created_at": "2018-01-05T17:15:49-06:00",
          "updated_at": "2018-01-05T17:15:51-06:00",
          "reference": null,
          "address": "123 Anywhere Ln",
          "address_2": "",
          "city": "Boston",
          "state": "MA",
          "zip": "02120",
          "country": "US",
          "phone": "555-555-1212",
          "portal_invite_last_sent_at": "2018-01-05T17:15:51-06:00",
          "portal_invite_last_accepted_at": null,
          "verified": null,
          "portal_customer_created_at": "2018-01-05T17:15:51-06:00",
          "cc_emails": null,
          "tax_exempt": false
        },
        "product": {
          "id": 4535643,
          "name": "Annual Product",
          "handle": "annual-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-08-25T10:25:31-05:00",
          "updated_at": "2017-08-25T10:25:31-05:00",
          "price_in_cents": 10000,
          "interval": 12,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 1025627,
            "name": "Acme Products",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          }
        },
        "credit_card": {
          "id": 13826563,
          "first_name": "Bomb 3",
          "last_name": "Test",
          "masked_card_number": "XXXX-XXXX-XXXX-1",
          "card_type": "bogus",
          "expiration_month": 1,
          "expiration_year": 2028,
          "customer_id": 19948683,
          "current_vault": "bogus",
          "vault_token": "1",
          "billing_address": "123 Anywhere Lane",
          "billing_city": "Boston",
          "billing_state": "Ma",
          "billing_zip": "02120",
          "billing_country": "US",
          "customer_vault_token": null,
          "billing_address_2": "",
          "payment_type": "credit_card"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/reactivate.json",
    "action": "reactivate.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 18220670,
        "state": "active",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2017-06-27T13:45:15-05:00",
        "created_at": "2017-06-27T13:45:13-05:00",
        "updated_at": "2017-06-30T09:26:50-05:00",
        "expires_at": null,
        "balance_in_cents": 10000,
        "current_period_ends_at": "2017-06-30T12:00:00-05:00",
        "next_assessment_at": "2017-06-30T12:00:00-05:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": false,
        "payment_collection_method": "automatic",
        "snap_day": "end",
        "cancellation_method": null,
        "current_period_started_at": "2017-06-27T13:45:13-05:00",
        "previous_state": "active",
        "signup_payment_id": 191819284,
        "signup_revenue": "0.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 0,
        "product_price_in_cents": 0,
        "product_version_number": 1,
        "payment_type": null,
        "referral_code": "d3pw7f",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": null,
        "current_billing_amount_in_cents": 10000,
        "customer": {
          "id": 17780587,
          "first_name": "Catie",
          "last_name": "Test",
          "organization": "Acme, Inc.",
          "email": "catie@example.com",
          "created_at": "2017-06-27T13:01:05-05:00",
          "updated_at": "2017-06-30T09:23:10-05:00",
          "reference": "123ABC",
          "address": "123 Anywhere Street",
          "address_2": "Apartment #10",
          "city": "Los Angeles",
          "state": "CA",
          "zip": "90210",
          "country": "US",
          "phone": "555-555-5555",
          "portal_invite_last_sent_at": "2017-06-27T13:45:16-05:00",
          "portal_invite_last_accepted_at": null,
          "verified": true,
          "portal_customer_created_at": "2017-06-27T13:01:08-05:00",
          "cc_emails": "support@example.com",
          "tax_exempt": true,
          "vat_number": "012345678"
        },
        "product": {
          "id": 4470347,
          "name": "Zero Dollar Product",
          "handle": "zero-dollar-product",
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "never",
          "created_at": "2017-03-23T10:54:12-05:00",
          "updated_at": "2017-04-20T15:18:46-05:00",
          "price_in_cents": 0,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": false,
          "return_params": "",
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "version_number": 1,
          "update_return_params": "",
          "product_family": {
            "id": 997233,
            "name": "Acme Products",
            "description": "",
            "handle": "acme-products",
            "accounting_code": null
          },
          "public_signup_pages": [
            {
              "id": 316810,
              "return_url": "",
              "return_params": "",
              "url": "https://general-goods.chargify.com/subscribe/69x825m78v3d/zero-dollar-product"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "subscription_status",
    "accessor": "SubscriptionStatus",
    "op": "update",
    "method": "PUT",
    "path": "/subscriptions/{subscription_id}/retry.json",
    "action": "retry.json",
    "args": [
      {
        "name": "id",
        "wire": "subscription_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "subscription": {
        "id": 46330,
        "state": "active",
        "trial_started_at": null,
        "trial_ended_at": null,
        "activated_at": "2018-10-22T13:10:46-06:00",
        "created_at": "2018-10-22T13:10:46-06:00",
        "updated_at": "2021-06-10T09:23:43-06:00",
        "expires_at": null,
        "balance_in_cents": 18600,
        "current_period_ends_at": "2021-06-22T13:10:46-06:00",
        "next_assessment_at": "2021-06-22T13:10:46-06:00",
        "canceled_at": null,
        "cancellation_message": null,
        "next_product_id": null,
        "cancel_at_end_of_period": null,
        "payment_collection_method": "automatic",
        "snap_day": null,
        "cancellation_method": null,
        "product_price_point_id": 3464,
        "next_product_price_point_id": null,
        "receives_invoice_emails": null,
        "net_terms": null,
        "locale": null,
        "currency": "USD",
        "reference": null,
        "scheduled_cancellation_at": null,
        "current_period_started_at": "2021-05-22T13:10:46-06:00",
        "previous_state": "past_due",
        "signup_payment_id": 651268,
        "signup_revenue": "6.00",
        "delayed_cancel_at": null,
        "coupon_code": null,
        "total_revenue_in_cents": 600,
        "product_price_in_cents": 600,
        "product_version_number": 501,
        "payment_type": null,
        "referral_code": "rzqvrx",
        "coupon_use_count": null,
        "coupon_uses_allowed": null,
        "reason_code": null,
        "automatically_resume_at": null,
        "offer_id": null,
        "credit_balance_in_cents": 0,
        "prepayment_balance_in_cents": 0,
        "payer_id": 142365,
        "stored_credential_transaction_id": null,
        "next_product_handle": null,
        "on_hold_at": null,
        "prepaid_dunning": false,
        "customer": {
          "id": 142365,
          "first_name": "Lavern",
          "last_name": "Fahey",
          "organization": null,
          "email": "millie2@example.com",
          "created_at": "2018-10-22T13:10:46-06:00",
          "updated_at": "2018-10-22T13:10:46-06:00",
          "reference": null,
          "address": null,
          "address_2": null,
          "city": null,
          "state": null,
          "zip": null,
          "country": null,
          "phone": null,
          "portal_invite_last_sent_at": null,
          "portal_invite_last_accepted_at": null,
          "verified": false,
          "portal_customer_created_at": "2018-10-22T13:10:46-06:00",
          "vat_number": null,
          "cc_emails": "john@example.com, sue@example.com",
          "tax_exempt": false,
          "parent_id": null,
          "locale": null
        },
        "product": {
          "id": 8080,
          "name": "Pro Versions",
          "handle": null,
          "description": "",
          "accounting_code": "",
          "request_credit_card": true,
          "expiration_interval": null,
          "expiration_interval_unit": "month",
          "created_at": "2019-02-15T10:15:00-07:00",
          "updated_at": "2019-02-15T10:30:34-07:00",
          "price_in_cents": 600,
          "interval": 1,
          "interval_unit": "month",
          "initial_charge_in_cents": null,
          "trial_price_in_cents": null,
          "trial_interval": null,
          "trial_interval_unit": "month",
          "archived_at": null,
          "require_credit_card": true,
          "return_params": "",
          "require_shipping_address": false,
          "request_billing_address": false,
          "require_billing_address": false,
          "taxable": false,
          "update_return_url": "",
          "tax_code": "",
          "initial_charge_after_trial": false,
          "default_product_price_point_id": 3464,
          "version_number": 501,
          "update_return_params": "",
          "product_price_point_id": 3464,
          "product_price_point_name": "Default",
          "product_price_point_handle": "uuid:5305c3f0-1375-0137-5619-065dfbfdc636",
          "product_family": {
            "id": 37,
            "name": "Acme Projects",
            "description": null,
            "handle": "acme-projects",
            "accounting_code": null,
            "created_at": "2013-02-20T15:05:51-07:00",
            "updated_at": "2013-02-20T15:05:51-07:00"
          },
          "public_signup_pages": [
            {
              "id": 1540,
              "return_url": null,
              "return_params": "",
              "url": "https://acme-test.staging-chargifypay.com/subscribe/2f6y53rrqgsf"
            }
          ]
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "usage",
    "accessor": "Usage",
    "op": "list",
    "method": "GET",
    "path": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "p1"
      },
      {
        "name": "subscription_id_or_reference",
        "wire": "subscription_id_or_reference",
        "value": "p2"
      }
    ],
    "select": {
      "max_id": "v1",
      "page": 1,
      "per_page": 50,
      "since_date": "v1",
      "since_id": "v1",
      "until_date": "v1"
    },
    "headers": [],
    "query": [
      "since_id",
      "max_id",
      "since_date",
      "until_date",
      "page",
      "per_page"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "usage": {
          "id": 178534642,
          "memo": "20",
          "created_at": "2018-08-03T11:58:42-05:00",
          "price_point_id": 242632,
          "quantity": "20.0",
          "component_id": 500093,
          "component_handle": "handle",
          "subscription_id": 22824464
        }
      },
      {
        "usage": {
          "id": 178534591,
          "memo": "10",
          "created_at": "2018-08-03T11:58:29-05:00",
          "price_point_id": 242632,
          "quantity": "10.0",
          "component_id": 500093,
          "component_handle": "handle",
          "subscription_id": 22824464
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "create",
    "method": "POST",
    "path": "/endpoints.json",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "endpoint": {
        "id": 1,
        "url": "https://your.site/webhooks",
        "site_id": 1,
        "status": "enabled",
        "webhook_subscriptions": [
          "payment_success",
          "payment_failure",
          "invoice_pending"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "create",
    "method": "POST",
    "path": "/webhooks/replay.json",
    "action": "replay",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status": "ok"
    },
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "list",
    "method": "GET",
    "path": "/webhooks.json",
    "args": [],
    "select": {
      "order": "v1",
      "page": 1,
      "per_page": 50,
      "since_date": "v1",
      "status": "v1",
      "subscription": "v1",
      "until_date": "v1"
    },
    "headers": [],
    "query": [
      "status",
      "since_date",
      "until_date",
      "page",
      "per_page",
      "order",
      "subscription"
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 201,
    "sample": [
      {
        "webhook": {
          "event": "statement_settled",
          "id": 141765032,
          "created_at": "2016-11-08T16:22:26-05:00",
          "last_error": "404 Resource Not Found (retry 5 of 5)",
          "last_error_at": "2016-11-08T16:43:54-05:00",
          "accepted_at": null,
          "last_sent_at": "2016-11-08T16:43:54-05:00",
          "last_sent_url": "http://requestb.in/11u45x71",
          "successful": false,
          "body": "id=141765032&event=statement_settled&payload[site][id]=31615&payload[site][subdomain]=general-goods&payload[subscription][id]=15100141&payload[subscription][state]=active&payload[subscription][balance_in_cents]=0&payload[customer][id]=14585695&payload[customer][first_name]=Alan&payload[customer][last_name]=Test&payload[customer][reference]=&payload[customer][organization]=&payload[customer][address]=&payload[customer][address_2]=&payload[customer][city]=&payload[customer][state]=&payload[customer][zip]=&payload[customer][country]=&payload[customer][email]=alan999%40example.com&payload[customer][phone]=&payload[statement][closed_at]=2016-11-08%2016%3A22%3A20%20-0500&payload[statement][created_at]=2016-11-08%2016%3A22%3A18%20-0500&payload[statement][id]=80168049&payload[statement][opened_at]=2016-11-07%2016%3A22%3A15%20-0500&payload[statement][settled_at]=2016-11-08%2016%3A22%3A20%20-0500&payload[statement][subscription_id]=15100141&payload[statement][updated_at]=2016-11-08%2016%3A22%3A20%20-0500&payload[statement][starting_balance_in_cents]=0&payload[statement][ending_balance_in_cents]=0&payload[statement][total_in_cents]=6400&payload[statement][memo]=We%20thank%20you%20for%20your%20continued%20business!&payload[statement][events][0][id]=346956565&payload[statement][events][0][key]=renewal_success&payload[statement][events][0][message]=Successful%20renewal%20for%20Alan%20Test's%20subscription%20to%20%2410%20Basic%20Plan&payload[statement][events][1][id]=346956579&payload[statement][events][1][key]=payment_success&payload[statement][events][1][message]=Successful%20payment%20of%20%2464.00%20for%20Alan%20Test's%20subscription%20to%20%2410%20Basic%20Plan&payload[statement][events][2][id]=347299359&payload[statement][events][2][key]=renewal_success&payload[statement][events][2][message]=Successful%20renewal%20for%20Alan%20Test's%20subscription%20to%20%2410%20Basic%20Plan&payload[statement][transactions][0][id]=161537343&payload[statement][transactions][0][subscription_id]=15100141&payload[statement][transactions][0][type]=Charge&payload[statement][transactions][0][kind]=baseline&payload[statement][transactions][0][transaction_type]=charge&payload[statement][transactions][0][success]=true&payload[statement][transactions][0][amount_in_cents]=1000&payload[statement][transactions][0][memo]=%2410%20Basic%20Plan%20(11%2F08%2F2016%20-%2011%2F09%2F2016)&payload[statement][transactions][0][created_at]=2016-11-08%2016%3A22%3A18%20-0500&payload[statement][transactions][0][starting_balance_in_cents]=0&payload[statement][transactions][0][ending_balance_in_cents]=1000&payload[statement][transactions][0][gateway_used]=&payload[statement][transactions][0][gateway_transaction_id]=&payload[statement][transactions][0][gateway_order_id]=&payload[statement][transactions][0][payment_id]=161537369&payload[statement][transactions][0][product_id]=3792003&payload[statement][transactions][0][tax_id]=&payload[statement][transactions][0][component_id]=&payload[statement][transactions][0][statement_id]=80168049&payload[statement][transactions][0][customer_id]=14585695&payload[statement][transactions][0][original_amount_in_cents]=&payload[statement][transactions][0][discount_amount_in_cents]=&payload[statement][transactions][0][taxable_amount_in_cents]=&payload[statement][transactions][1][id]=161537344&payload[statement][transactions][1][subscription_id]=15100141&payload[statement][transactions][1][type]=Charge&payload[statement][transactions][1][kind]=quantity_based_component&payload[statement][transactions][1][transaction_type]=charge&payload[statement][transactions][1][success]=true&payload[statement][transactions][1][amount_in_cents]=5400&payload[statement][transactions][1][memo]=Timesheet%20Users%3A%2018%20Timesheet%20Users&payload[statement][transactions][1][created_at]=2016-11-08%2016%3A22%3A18%20-0500&payload[statement][transactions][1][starting_balance_in_cents]=1000&payload[statement][transactions][1][ending_balance_in_cents]=6400&payload[statement][transactions][1][gateway_used]=&payload[statement][transactions][1][gateway_transaction_id]=&payload[statement][transactions][1][gateway_order_id]=&payload[statement][transactions][1][payment_id]=161537369&payload[statement][transactions][1][product_id]=3792003&payload[statement][transactions][1][tax_id]=&payload[statement][transactions][1][component_id]=277221&payload[statement][transactions][1][statement_id]=80168049&payload[statement][transactions][1][customer_id]=14585695&payload[statement][transactions][1][original_amount_in_cents]=&payload[statement][transactions][1][discount_amount_in_cents]=&payload[statement][transactions][1][taxable_amount_in_cents]=&payload[statement][transactions][2][id]=161537369&payload[statement][transactions][2][subscription_id]=15100141&payload[statement][transactions][2][type]=Payment&payload[statement][transactions][2][kind]=&payload[statement][transactions][2][transaction_type]=payment&payload[statement][transactions][2][success]=true&payload[statement][transactions][2][amount_in_cents]=6400&payload[statement][transactions][2][memo]=Alan%20Test%20-%20%2410%20Basic%20Plan%3A%20Renewal%20payment&payload[statement][transactions][2][created_at]=2016-11-08%2016%3A22%3A20%20-0500&payload[statement][transactions][2][starting_balance_in_cents]=6400&payload[statement][transactions][2][ending_balance_in_cents]=0&payload[statement][transactions][2][gateway_used]=bogus&payload[statement][transactions][2][gateway_transaction_id]=53433&payload[statement][transactions][2][gateway_order_id]=&payload[statement][transactions][2][payment_id]=&payload[statement][transactions][2][product_id]=3792003&payload[statement][transactions][2][tax_id]=&payload[statement][transactions][2][component_id]=&payload[statement][transactions][2][statement_id]=80168049&payload[statement][transactions][2][customer_id]=14585695&payload[statement][transactions][2][card_number]=XXXX-XXXX-XXXX-1&payload[statement][transactions][2][card_expiration]=10%2F2020&payload[statement][transactions][2][card_type]=bogus&payload[statement][transactions][2][refunded_amount_in_cents]=0&payload[product][id]=3792003&payload[product][name]=%2410%20Basic%20Plan&payload[product_family][id]=527890&payload[product_family][name]=Acme%20Projects&payload[payment_profile][id]=10102821&payload[payment_profile][first_name]=Alan&payload[payment_profile][last_name]=Test&payload[payment_profile][billing_address]=&payload[payment_profile][billing_address_2]=&payload[payment_profile][billing_city]=&payload[payment_profile][billing_country]=&payload[payment_profile][billing_state]=&payload[payment_profile][billing_zip]=&payload[event_id]=347299384",
          "signature": "7c606ec4628ce75ec46e284097ce163a",
          "signature_hmac_sha_256": "40f25e83dd324508bb2149e3e525821922fb210535ebfbfa81e7ab951996b41d"
        }
      },
      {
        "webhook": {
          "event": "payment_success",
          "id": 141765008,
          "created_at": "2016-11-08T16:22:25-05:00",
          "last_error": "404 Resource Not Found (retry 5 of 5)",
          "last_error_at": "2016-11-08T16:43:54-05:00",
          "accepted_at": null,
          "last_sent_at": "2016-11-08T16:43:54-05:00",
          "last_sent_url": "http://requestb.in/11u45x71",
          "successful": false,
          "body": "id=141765008&event=payment_success&payload[site][id]=31615&payload[site][subdomain]=general-goods&payload[subscription][id]=15100141&payload[subscription][state]=active&payload[subscription][trial_started_at]=&payload[subscription][trial_ended_at]=&payload[subscription][activated_at]=2016-11-04%2017%3A06%3A43%20-0400&payload[subscription][created_at]=2016-11-04%2017%3A06%3A42%20-0400&payload[subscription][updated_at]=2016-11-08%2016%3A22%3A22%20-0500&payload[subscription][expires_at]=&payload[subscription][balance_in_cents]=0&payload[subscription][current_period_ends_at]=2016-11-09%2016%3A06%3A42%20-0500&payload[subscription][next_assessment_at]=2016-11-09%2016%3A06%3A42%20-0500&payload[subscription][canceled_at]=&payload[subscription][cancellation_message]=&payload[subscription][next_product_id]=&payload[subscription][cancel_at_end_of_period]=false&payload[subscription][payment_collection_method]=automatic&payload[subscription][snap_day]=&payload[subscription][cancellation_method]=&payload[subscription][current_period_started_at]=2016-11-08%2016%3A06%3A42%20-0500&payload[subscription][previous_state]=active&payload[subscription][signup_payment_id]=161034048&payload[subscription][signup_revenue]=64.00&payload[subscription][delayed_cancel_at]=&payload[subscription][coupon_code]=&payload[subscription][total_revenue_in_cents]=32000&payload[subscription][product_price_in_cents]=1000&payload[subscription][product_version_number]=7&payload[subscription][payment_type]=credit_card&payload[subscription][referral_code]=pggn84&payload[subscription][coupon_use_count]=&payload[subscription][coupon_uses_allowed]=&payload[subscription][customer][id]=14585695&payload[subscription][customer][first_name]=Test&payload[subscription][customer][last_name]=Test&payload[subscription][customer][organization]=&payload[subscription][customer][email]=alan999%40example.com&payload[subscription][customer][created_at]=2016-11-04%2017%3A06%3A42%20-0400&payload[subscription][customer][updated_at]=2016-11-04%2017%3A06%3A45%20-0400&payload[subscription][customer][reference]=&payload[subscription][customer][address]=&payload[subscription][customer][address_2]=&payload[subscription][customer][city]=&payload[subscription][customer][state]=&payload[subscription][customer][zip]=&payload[subscription][customer][country]=&payload[subscription][customer][phone]=&payload[subscription][customer][portal_invite_last_sent_at]=2016-11-04%2017%3A06%3A45%20-0400&payload[subscription][customer][portal_invite_last_accepted_at]=&payload[subscription][customer][verified]=false&payload[subscription][customer][portal_customer_created_at]=2016-11-04%2017%3A06%3A45%20-0400&payload[subscription][customer][cc_emails]=&payload[subscription][product][id]=3792003&payload[subscription][product][name]=%2410%20Basic%20Plan&payload[subscription][product][handle]=basic&payload[subscription][product][description]=lorem%20ipsum&payload[subscription][product][accounting_code]=basic&payload[subscription][product][request_credit_card]=false&payload[subscription][product][expiration_interval]=&payload[subscription][product][expiration_interval_unit]=never&payload[subscription][product][created_at]=2016-03-24%2013%3A38%3A39%20-0400&payload[subscription][product][updated_at]=2016-11-03%2013%3A03%3A05%20-0400&payload[subscription][product][price_in_cents]=1000&payload[subscription][product][interval]=1&payload[subscription][product][interval_unit]=day&payload[subscription][product][initial_charge_in_cents]=&payload[subscription][product][trial_price_in_cents]=&payload[subscription][product][trial_interval]=&payload[subscription][product][trial_interval_unit]=month&payload[subscription][product][archived_at]=&payload[subscription][product][require_credit_card]=false&payload[subscription][product][return_params]=&payload[subscription][product][taxable]=false&payload[subscription][product][update_return_url]=&payload[subscription][product][initial_charge_after_trial]=false&payload[subscription][product][version_number]=7&payload[subscription][product][update_return_params]=&payload[subscription][product][product_family][id]=527890&payload[subscription][product][product_family][name]=Acme%20Projects&payload[subscription][product][product_family][description]=&payload[subscription][product][product_family][handle]=billing-plans&payload[subscription][product][product_family][accounting_code]=&payload[subscription][product][public_signup_pages][id]=281054&payload[subscription][product][public_signup_pages][return_url]=http%3A%2F%2Fwww.example.com%3Fsuccessfulsignup&payload[subscription][product][public_signup_pages][return_params]=&payload[subscription][product][public_signup_pages][url]=https%3A%2F%2Fgeneral-goods.chargify.com%2Fsubscribe%2Fkqvmfrbgd89q%2Fbasic&payload[subscription][product][public_signup_pages][id]=281240&payload[subscription][product][public_signup_pages][return_url]=&payload[subscription][product][public_signup_pages][return_params]=&payload[subscription][product][public_signup_pages][url]=https%3A%2F%2Fgeneral-goods.chargify.com%2Fsubscribe%2Fdkffht5dxfd8%2Fbasic&payload[subscription][product][public_signup_pages][id]=282694&payload[subscription][product][public_signup_pages][return_url]=&payload[subscription][product][public_signup_pages][return_params]=&payload[subscription][product][public_signup_pages][url]=https%3A%2F%2Fgeneral-goods.chargify.com%2Fsubscribe%2Fjwffwgdd95s8%2Fbasic&payload[subscription][credit_card][id]=10102821&payload[subscription][credit_card][first_name]=Alan&payload[subscription][credit_card][last_name]=Test&payload[subscription][credit_card][masked_card_number]=XXXX-XXXX-XXXX-1&payload[subscription][credit_card][card_type]=bogus&payload[subscription][credit_card][expiration_month]=10&payload[subscription][credit_card][expiration_year]=2020&payload[subscription][credit_card][customer_id]=14585695&payload[subscription][credit_card][current_vault]=bogus&payload[subscription][credit_card][vault_token]=1&payload[subscription][credit_card][billing_address]=&payload[subscription][credit_card][billing_city]=&payload[subscription][credit_card][billing_state]=&payload[subscription][credit_card][billing_zip]=&payload[subscription][credit_card][billing_country]=&payload[subscription][credit_card][customer_vault_token]=&payload[subscription][credit_card][billing_address_2]=&payload[subscription][credit_card][payment_type]=credit_card&payload[subscription][credit_card][site_gateway_setting_id]=&payload[subscription][credit_card][gateway_handle]=&payload[transaction][id]=161537369&payload[transaction][subscription_id]=15100141&payload[transaction][type]=Payment&payload[transaction][kind]=&payload[transaction][transaction_type]=payment&payload[transaction][success]=true&payload[transaction][amount_in_cents]=6400&payload[transaction][memo]=Alan%20Test%20-%20%2410%20Basic%20Plan%3A%20Renewal%20payment&payload[transaction][created_at]=2016-11-08%2016%3A22%3A20%20-0500&payload[transaction][starting_balance_in_cents]=6400&payload[transaction][ending_balance_in_cents]=0&payload[transaction][gateway_used]=bogus&payload[transaction][gateway_transaction_id]=53433&payload[transaction][gateway_response_code]=&payload[transaction][gateway_order_id]=&payload[transaction][payment_id]=&payload[transaction][product_id]=3792003&payload[transaction][tax_id]=&payload[transaction][component_id]=&payload[transaction][statement_id]=80168049&payload[transaction][customer_id]=14585695&payload[transaction][card_number]=XXXX-XXXX-XXXX-1&payload[transaction][card_expiration]=10%2F2020&payload[transaction][card_type]=bogus&payload[transaction][refunded_amount_in_cents]=0&payload[transaction][invoice_id]=&payload[event_id]=347299364",
          "signature": "fbcf2f6be579f9658cff90c4373e0ca2",
          "signature_hmac_sha_256": "db96654f5456c5460062feb944ac8bb1418f9d181ae04a8ed982fe9ffdca8de1"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "webhook",
    "accessor": "Webhook",
    "op": "update",
    "method": "PUT",
    "path": "/webhooks/settings.json",
    "action": "setting",
    "args": [],
    "select": {},
    "headers": [],
    "query": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "webhooks_enabled": true
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
