package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MaxioAdvancedBilling",
			"slug": "maxio-advanced-billing",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://{site}.chargify.com",
			"server": map[string]any{
				"site": "subdomain",
			},
			"auth": map[string]any{
				"prefix": "Basic",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"account_balance": map[string]any{},
				"allocation": map[string]any{},
				"batch_job": map[string]any{},
				"billing_portal": map[string]any{},
				"component": map[string]any{},
				"component_feature": map[string]any{},
				"component_price_point": map[string]any{},
				"component_price_point_currency_overage": map[string]any{},
				"coupon": map[string]any{},
				"coupon_currency": map[string]any{},
				"coupon_subcode": map[string]any{},
				"coupon_usage": map[string]any{},
				"custom_field": map[string]any{},
				"customer": map[string]any{},
				"delayed_cancel": map[string]any{},
				"endpoint": map[string]any{},
				"entitlement": map[string]any{},
				"event": map[string]any{},
				"events_based_billing_segment": map[string]any{},
				"feature": map[string]any{},
				"feature_catalog_item": map[string]any{},
				"feature_template": map[string]any{},
				"insight": map[string]any{},
				"invoice": map[string]any{},
				"list_proforma_invoice": map[string]any{},
				"list_sale_rep_item": map[string]any{},
				"list_segment": map[string]any{},
				"offer": map[string]any{},
				"one_time_token": map[string]any{},
				"payment_profile": map[string]any{},
				"prepayment": map[string]any{},
				"product": map[string]any{},
				"product_family": map[string]any{},
				"product_feature": map[string]any{},
				"product_price_point": map[string]any{},
				"proforma_invoice": map[string]any{},
				"reason_code": map[string]any{},
				"referral_code": map[string]any{},
				"sale_rep_setting": map[string]any{},
				"sales_commission": map[string]any{},
				"segment": map[string]any{},
				"signup_proforma_preview": map[string]any{},
				"site": map[string]any{},
				"subscription": map[string]any{},
				"subscription_component": map[string]any{},
				"subscription_group": map[string]any{},
				"subscription_group_invoice_account": map[string]any{},
				"subscription_group_signup": map[string]any{},
				"subscription_group_status": map[string]any{},
				"subscription_invoice_account": map[string]any{},
				"subscription_mrr": map[string]any{},
				"subscription_note": map[string]any{},
				"subscription_product": map[string]any{},
				"subscription_renewal": map[string]any{},
				"subscription_status": map[string]any{},
				"usage": map[string]any{},
				"webhook": map[string]any{},
			},
		},
		"entity": map[string]any{
			"account_balance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "open_invoices",
						"title": "Open Invoices",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "pending_discounts",
						"title": "Pending Discounts",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "pending_invoices",
						"title": "Pending Invoices",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "prepayments",
						"title": "Prepayments",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "service_credits",
						"title": "Service Credits",
						"type": "`$ANY`",
					},
				},
				"name": "account_balance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/account_balances.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "account_balances.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"account_balances.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"allocation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allocation",
						"title": "Allocation",
						"type": "`$OBJECT`",
					},
				},
				"name": "allocation",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/allocations.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "allocations.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"allocations.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "allocations.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"allocations.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"page",
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
						[]any{
							"$.main.kit.entity.subscription",
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"batch_job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "completed",
						"title": "Completed",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "finished_at",
						"title": "Finished At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "row_count",
						"title": "Row Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "batch_job",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api_exports/invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "invoices.json",
									},
								},
								"parts": []any{
									"api_exports",
									"invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api_exports/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"api_exports",
									"proforma_invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api_exports/subscriptions.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "subscriptions.json",
									},
								},
								"parts": []any{
									"api_exports",
									"subscriptions.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/invoices/{batch_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "{batch_id}.json",
									},
								},
								"parts": []any{
									"api_exports",
									"invoices",
									"{batch_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "batch_id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/proforma_invoices/{batch_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"lit": "{batch_id}.json",
									},
								},
								"parts": []any{
									"api_exports",
									"proforma_invoices",
									"{batch_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "batch_id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/subscriptions/{batch_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "{batch_id}.json",
									},
								},
								"parts": []any{
									"api_exports",
									"subscriptions",
									"{batch_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.batchjob`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "batch_id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"batch_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"billing_portal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "fetch_count",
						"title": "Fetch Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "last_accepted_at",
						"title": "Last Accepted At",
						"type": "`$STRING`",
						"deprecated": true,
					},
					map[string]any{
						"name": "last_invite_accepted_at",
						"title": "Last Invite Accepted At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_invite_sent_at",
						"title": "Last Invite Sent At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "last_sent_at",
						"title": "Last Sent At",
						"type": "`$STRING`",
						"deprecated": true,
					},
					map[string]any{
						"name": "new_link_available_at",
						"title": "New Link Available At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "send_invite_link_text",
						"title": "Send Invite Link Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uninvited_count",
						"title": "Uninvited Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
					},
				},
				"name": "billing_portal",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/portal/customers/{customer_id}/invitations/invite.json",
								"segments": []any{
									map[string]any{
										"lit": "portal",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "invitations",
									},
									map[string]any{
										"lit": "invite.json",
									},
								},
								"parts": []any{
									"portal",
									"customers",
									"{customer_id}",
									"invitations",
									"invite.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/portal/customers/{customer_id}/management_link.json",
								"segments": []any{
									map[string]any{
										"lit": "portal",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "management_link.json",
									},
								},
								"parts": []any{
									"portal",
									"customers",
									"{customer_id}",
									"management_link.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/portal/customers/{customer_id}/invitations/revoke.json",
								"segments": []any{
									map[string]any{
										"lit": "portal",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "invitations",
									},
									map[string]any{
										"lit": "revoke.json",
									},
								},
								"parts": []any{
									"portal",
									"customers",
									"{customer_id}",
									"invitations",
									"revoke.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
						},
					},
				},
			},
			"component": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "component",
						"title": "Component",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
				},
				"name": "component",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/event_based_components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "event_based_components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"event_based_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/metered_components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "metered_components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"metered_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/on_off_components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "on_off_components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"on_off_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/prepaid_usage_components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "prepaid_usage_components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"prepaid_usage_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/quantity_based_components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "quantity_based_components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"quantity_based_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/components.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "components.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"date_field",
										"end_date",
										"end_datetime",
										"filter",
										"include_archived",
										"page",
										"per_page",
										"product_family_id",
										"start_date",
										"start_datetime",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components.json",
								"segments": []any{
									map[string]any{
										"lit": "components.json",
									},
								},
								"parts": []any{
									"components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"date_field",
										"end_date",
										"end_datetime",
										"filter",
										"include_archived",
										"page",
										"per_page",
										"start_date",
										"start_datetime",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/components/{component_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "{component_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"components",
									"{component_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_feature",
											"orig": "include_feature",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"$action": "component_id",
									"exist": []any{
										"component_id",
										"include_feature",
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/lookup.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "lookup.json",
									},
								},
								"parts": []any{
									"components",
									"lookup.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "handle",
											"orig": "handle",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "lookup",
									"exist": []any{
										"handle",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/product_families/{product_family_id}/components/{component_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "{component_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"components",
									"{component_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "component_id",
									"exist": []any{
										"component_id",
										"product_family_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/product_families/{product_family_id}/components/{component_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "{component_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"components",
									"{component_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"component": "`reqdata`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "component_id",
									"exist": []any{
										"component_id",
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "{component_id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"component": "`reqdata`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "component_id",
									"exist": []any{
										"component_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product_family",
						},
					},
				},
			},
			"component_feature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "component_feature",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/components/{component_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "destroy_entitlement",
											"orig": "destroy_entitlement",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"destroy_entitlement",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"component_price_point": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "component",
						"title": "Component",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "component_id",
						"title": "Component Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "currency_prices",
						"title": "Currency Prices",
						"type": "`$ARRAY`",
						"short": "An array of currency pricing data is available when multiple currencies are defined for the site.",
					},
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"short": "Note: Refer to type attribute instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "expiration_interval",
						"title": "Expiration Interval",
						"type": "`$INTEGER`",
						"short": "Applicable only to prepaid usage components where rollover_prepaid_remainder is true.",
						"format": "int32",
					},
					map[string]any{
						"name": "expiration_interval_unit",
						"title": "Expiration Interval Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$INTEGER`",
						"short": "The numerical interval.",
						"format": "int32",
					},
					map[string]any{
						"name": "interval_unit",
						"title": "Interval Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overage_prices",
						"title": "Overage Prices",
						"type": "`$ARRAY`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "overage_pricing_scheme",
						"title": "Overage Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "price_point",
						"title": "Price Point",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "price_points",
						"title": "Price Points",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "prices",
						"title": "Prices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing_scheme",
						"title": "Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "renew_prepaid_allocation",
						"title": "Renew Prepaid Allocation",
						"type": "`$BOOLEAN`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "rollover_prepaid_remainder",
						"title": "Rollover Prepaid Remainder",
						"type": "`$BOOLEAN`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"short": "(only used for Custom Pricing - ie.",
						"format": "int32",
					},
					map[string]any{
						"name": "tax_included",
						"title": "Tax Included",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "use_site_exchange_rate",
						"title": "Use Site Exchange Rate",
						"type": "`$BOOLEAN`",
						"short": "Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "component_price_point",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/price_points/{price_point_id}/clone.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "clone.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"clone.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/price_points/bulk.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "bulk.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"bulk.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "price_points.json",
									},
								},
								"parts": []any{
									"components",
									"{id}",
									"price_points.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"component_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.price_point`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/price_points/{price_point_id}/currency_prices.json",
								"segments": []any{
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "currency_prices.json",
									},
								},
								"parts": []any{
									"price_points",
									"{price_point_id}",
									"currency_prices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/{component_id}/price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "price_points.json",
									},
								},
								"parts": []any{
									"components",
									"{id}",
									"price_points.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"component_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter_type",
											"orig": "filter_type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"catalog",
												"default",
											},
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"currency_price",
										"filter_type",
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components_price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "components_price_points.json",
									},
								},
								"parts": []any{
									"components_price_points.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"filter",
										"include",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/components/{component_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.price_point`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/price_points/{price_point_id}/default.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "default.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"default.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/price_points/{price_point_id}/unarchive.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "unarchive.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"unarchive.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/price_points/{price_point_id}/currency_prices.json",
								"segments": []any{
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "currency_prices.json",
									},
								},
								"parts": []any{
									"price_points",
									"{price_point_id}",
									"currency_prices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"component_price_point_currency_overage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "component_id",
						"title": "Component Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "currency_overage_prices",
						"title": "Currency Overage Prices",
						"type": "`$ARRAY`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "currency_prices",
						"title": "Currency Prices",
						"type": "`$ARRAY`",
						"short": "An array of currency pricing data is available when multiple currencies are defined for the site.",
					},
					map[string]any{
						"name": "default",
						"title": "Default",
						"type": "`$BOOLEAN`",
						"short": "Note: Refer to type attribute instead.",
						"deprecated": true,
					},
					map[string]any{
						"name": "expiration_interval",
						"title": "Expiration Interval",
						"type": "`$INTEGER`",
						"short": "Applicable only to prepaid usage components where rollover_prepaid_remainder is true.",
						"format": "int32",
					},
					map[string]any{
						"name": "expiration_interval_unit",
						"title": "Expiration Interval Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$INTEGER`",
						"short": "The numerical interval.",
						"format": "int32",
					},
					map[string]any{
						"name": "interval_unit",
						"title": "Interval Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overage_prices",
						"title": "Overage Prices",
						"type": "`$ARRAY`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "overage_pricing_scheme",
						"title": "Overage Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "prices",
						"title": "Prices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing_scheme",
						"title": "Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "renew_prepaid_allocation",
						"title": "Renew Prepaid Allocation",
						"type": "`$BOOLEAN`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "rollover_prepaid_remainder",
						"title": "Rollover Prepaid Remainder",
						"type": "`$BOOLEAN`",
						"short": "Applicable only to prepaid usage components.",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"short": "(only used for Custom Pricing - ie.",
						"format": "int32",
					},
					map[string]any{
						"name": "tax_included",
						"title": "Tax Included",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "use_site_exchange_rate",
						"title": "Use Site Exchange Rate",
						"type": "`$BOOLEAN`",
						"short": "Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "component_price_point_currency_overage",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/{component_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.price_point`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"currency_price",
										"price_point_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"coupon": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allow_negative_balance",
						"title": "Allow Negative Balance",
						"type": "`$BOOLEAN`",
						"short": "If set to true, discount is not limited (credits will carry forward to next billing).",
					},
					map[string]any{
						"name": "amount",
						"title": "Amount",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "amount_in_cents",
						"title": "Amount In Cents",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "apply_on_cancel_at_end_of_period",
						"title": "Apply On Cancel At End Of Period",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "apply_on_subscription_expiration",
						"title": "Apply On Subscription Expiration",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compounding_strategy",
						"title": "Compounding Strategy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "conversion_limit",
						"title": "Conversion Limit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "coupon",
						"title": "Coupon",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "coupon_restrictions",
						"title": "Coupon Restrictions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "currency_prices",
						"title": "Currency Prices",
						"type": "`$ARRAY`",
						"short": "Returned in read, find, and list endpoints if the query parameter is provided.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "discount_type",
						"title": "Discount Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration_interval",
						"title": "Duration Interval",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "duration_interval_span",
						"title": "Duration Interval Span",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration_interval_unit",
						"title": "Duration Interval Unit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "duration_period_count",
						"title": "Duration Period Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"short": "After the given time, this coupon code will be invalid for new signups.",
						"format": "date-time",
					},
					map[string]any{
						"name": "exclude_mid_period_allocations",
						"title": "Exclude Mid Period Allocations",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "percentage",
						"title": "Percentage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_family_id",
						"title": "Product Family Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "product_family_name",
						"title": "Product Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recurring",
						"title": "Recurring",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "recurring_scheme",
						"title": "Recurring Scheme",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stackable",
						"title": "Stackable",
						"type": "`$BOOLEAN`",
						"short": "A stackable coupon can be combined with other coupons on a Subscription.",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "use_site_exchange_rate",
						"title": "Use Site Exchange Rate",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coupon",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/coupons/{coupon_id}/codes.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "codes.json",
									},
								},
								"parts": []any{
									"coupons",
									"{id}",
									"codes.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "code",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/coupons.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.coupon`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/coupons.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"currency_price",
										"filter",
										"page",
										"per_page",
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/coupons.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons.json",
									},
								},
								"parts": []any{
									"coupons.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"currency_price",
										"filter",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/coupons/{coupon_id}/codes.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "codes.json",
									},
								},
								"parts": []any{
									"coupons",
									"{id}",
									"codes.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"$action": "code",
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "{coupon_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons",
									"{coupon_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "coupon_id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "coupon_id",
									"exist": []any{
										"coupon_id",
										"currency_price",
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/coupons/find.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "find.json",
									},
								},
								"parts": []any{
									"coupons",
									"find.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.coupon`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "code",
											"orig": "code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "find",
									"exist": []any{
										"code",
										"currency_price",
										"product_family_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/coupons/validate.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "validate.json",
									},
								},
								"parts": []any{
									"coupons",
									"validate.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "code",
											"orig": "code",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "validate",
									"exist": []any{
										"code",
										"product_family_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/coupons/{coupon_id}/codes/{subcode}.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "codes",
									},
									map[string]any{
										"lit": "{subcode}.json",
									},
								},
								"parts": []any{
									"coupons",
									"{id}",
									"codes",
									"{subcode}.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subcode",
											"orig": "subcode",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "code_subcode",
									"exist": []any{
										"id",
										"subcode",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "{coupon_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons",
									"{coupon_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "coupon_id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "coupon_id",
									"exist": []any{
										"coupon_id",
										"product_family_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/product_families/{product_family_id}/coupons/{coupon_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"lit": "{coupon_id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons",
									"{coupon_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "coupon_id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "coupon_id",
									"exist": []any{
										"coupon_id",
										"product_family_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product_family",
						},
					},
				},
			},
			"coupon_currency": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coupon_currency",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/coupons/{coupon_id}/currency_prices.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "currency_prices.json",
									},
								},
								"parts": []any{
									"coupons",
									"{id}",
									"currency_prices.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "currency_prices.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"coupon_subcode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_codes",
						"title": "Created Codes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "duplicate_codes",
						"title": "Duplicate Codes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "invalid_codes",
						"title": "Invalid Codes",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coupon_subcode",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/coupons/{coupon_id}/codes.json",
								"segments": []any{
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "codes.json",
									},
								},
								"parts": []any{
									"coupons",
									"{id}",
									"codes.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"coupon_usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "The Chargify id of the product",
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Name of the product",
					},
					map[string]any{
						"name": "revenue",
						"title": "Revenue",
						"type": "`$INTEGER`",
						"short": "Total revenue of all subscriptions that have received a discount from this coupon.",
						"format": "int32",
					},
					map[string]any{
						"name": "revenue_in_cents",
						"title": "Revenue In Cents",
						"type": "`$INTEGER`",
						"short": "Total revenue of all subscriptions that have received a discount from this coupon.",
						"format": "int64",
					},
					map[string]any{
						"name": "savings",
						"title": "Savings",
						"type": "`$INTEGER`",
						"short": "Dollar amount of customer savings as a result of the coupon.",
						"format": "int32",
					},
					map[string]any{
						"name": "savings_in_cents",
						"title": "Savings In Cents",
						"type": "`$INTEGER`",
						"short": "Dollar amount of customer savings as a result of the coupon.",
						"format": "int64",
					},
					map[string]any{
						"name": "signups",
						"title": "Signups",
						"type": "`$INTEGER`",
						"short": "Number of times the coupon has been applied",
						"format": "int32",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "coupon_usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/coupons/{coupon_id}/usage.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "coupons",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "usage.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"coupons",
									"{id}",
									"usage.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"coupon_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "coupon_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_family_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product_family",
						},
					},
				},
			},
			"custom_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "current_page",
						"title": "Current Page",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "data_count",
						"title": "Data Count",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deleted_at",
						"title": "Deleted At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "enum",
						"title": "Enum",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "input_type",
						"title": "Input Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metafield_id",
						"title": "Metafield Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "metafields",
						"title": "Metafields",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "per_page",
						"title": "Per Page",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "resource_id",
						"title": "Resource Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_count",
						"title": "Total Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "total_pages",
						"title": "Total Pages",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/{resource_type}/{resource_id}/metadata.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"lit": "metadata.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"{resource_id}",
									"metadata.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"resource_id",
										"resource_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/{resource_type}/metafields.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"lit": "metafields.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"metafields.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"resource_type",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{resource_type}/metadata.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"lit": "metadata.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"metadata.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metadata`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "with_deleted",
											"orig": "with_deleted",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"with_deleted",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{resource_type}/metafields.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"lit": "metafields.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"metafields.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"name",
										"page",
										"per_page",
										"resource_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{resource_type}/{resource_id}/metadata.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"lit": "metadata.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"{resource_id}",
									"metadata.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"resource_id",
										"resource_type",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/{resource_type}/{resource_id}/metadata.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"lit": "metadata.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"{resource_id}",
									"metadata.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$ARRAY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"resource_id",
										"resource_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/{resource_type}/metafields.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"lit": "metafields.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"metafields.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"resource_type",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/{resource_type}/{resource_id}/metadata.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"var": "resource_id",
									},
									map[string]any{
										"lit": "metadata.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"{resource_id}",
									"metadata.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"resource_id",
										"resource_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/{resource_type}/metafields.json",
								"segments": []any{
									map[string]any{
										"var": "resource_type",
									},
									map[string]any{
										"lit": "metafields.json",
									},
								},
								"parts": []any{
									"{resource_type}",
									"metafields.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"resource_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"customer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"short": "The customer’s shipping street address (e.g., “123 Main St.”)",
					},
					map[string]any{
						"name": "address_2",
						"title": "Address 2",
						"type": "`$STRING`",
						"short": "Second line of the customer’s shipping address e.g., “Apt.",
					},
					map[string]any{
						"name": "branding_theme_id",
						"title": "Branding Theme Id",
						"type": "`$INTEGER`",
						"short": "The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme.",
						"format": "int32",
					},
					map[string]any{
						"name": "cc_emails",
						"title": "Cc Emails",
						"type": "`$STRING`",
						"short": "“A comma-separated list of emails that should be cc’d on all customer communications (e.g., “joe@example.com, sue@example.com”)”",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"short": "The customer’s shipping address city (e.g., “Boston”)",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "The customer shipping address country",
					},
					map[string]any{
						"name": "country_name",
						"title": "Country Name",
						"type": "`$STRING`",
						"short": "The customer's full name of country",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The timestamp in which the customer object was created in Chargify",
						"format": "date-time",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "default_auto_renewal_profile_id",
						"title": "Default Auto Renewal Profile Id",
						"type": "`$INTEGER`",
						"short": "The default auto-renewal profile ID for the customer",
						"format": "int32",
					},
					map[string]any{
						"name": "default_subscription_group_uid",
						"title": "Default Subscription Group Uid",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"short": "The email address of the customer",
					},
					map[string]any{
						"name": "entity_identifier_kind",
						"title": "Entity Identifier Kind",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "entity_identifier_value",
						"title": "Entity Identifier Value",
						"type": "`$STRING`",
						"short": "The value of the customer's tax or business identifier.",
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"short": "The first name of the customer",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "The customer ID in Chargify",
						"format": "int32",
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"short": "The last name of the customer",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale for the customer to identify language-region",
					},
					map[string]any{
						"name": "maxioid",
						"title": "Maxioid",
						"type": "`$STRING`",
						"short": "The Maxio-generated unique identifier for the customer.",
					},
					map[string]any{
						"name": "organization",
						"title": "Organization",
						"type": "`$STRING`",
						"short": "The organization of the customer.",
					},
					map[string]any{
						"name": "parent_id",
						"title": "Parent Id",
						"type": "`$INTEGER`",
						"short": "The parent ID in Chargify if applicable.",
						"format": "int32",
					},
					map[string]any{
						"name": "phone",
						"title": "Phone",
						"type": "`$STRING`",
						"short": "The phone number of the customer",
					},
					map[string]any{
						"name": "portal_customer_created_at",
						"title": "Portal Customer Created At",
						"type": "`$STRING`",
						"short": "The timestamp of when the Billing Portal entry was created at for the customer",
						"format": "date-time",
					},
					map[string]any{
						"name": "portal_invite_last_accepted_at",
						"title": "Portal Invite Last Accepted At",
						"type": "`$STRING`",
						"short": "The timestamp of when the Billing Portal invite was last accepted",
						"format": "date-time",
					},
					map[string]any{
						"name": "portal_invite_last_sent_at",
						"title": "Portal Invite Last Sent At",
						"type": "`$STRING`",
						"short": "The timestamp of when the Billing Portal invite was last sent at",
						"format": "date-time",
					},
					map[string]any{
						"name": "reference",
						"title": "Reference",
						"type": "`$STRING`",
						"short": "The unique identifier used within your own application for this customer",
					},
					map[string]any{
						"name": "salesforce_id",
						"title": "Salesforce Id",
						"type": "`$STRING`",
						"short": "The Salesforce ID for the customer",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"short": "The customer’s shipping address state (e.g., “MA”)",
					},
					map[string]any{
						"name": "state_name",
						"title": "State Name",
						"type": "`$STRING`",
						"short": "The customer's full name of state",
					},
					map[string]any{
						"name": "surcharging",
						"title": "Surcharging",
						"type": "`$BOOLEAN`",
						"short": "Whether surcharging is enabled for the customer.",
					},
					map[string]any{
						"name": "tax_exempt",
						"title": "Tax Exempt",
						"type": "`$BOOLEAN`",
						"short": "The tax exempt status for the customer.",
					},
					map[string]any{
						"name": "tax_exempt_reason",
						"title": "Tax Exempt Reason",
						"type": "`$STRING`",
						"short": "The Tax Exemption Reason Code for the customer",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The timestamp in which the customer object was last edited",
						"format": "date-time",
					},
					map[string]any{
						"name": "vat_country",
						"title": "Vat Country",
						"type": "`$STRING`",
						"short": "The two-letter ISO 3166-1 country code that qualifies the customer's VAT number.",
					},
					map[string]any{
						"name": "vat_number",
						"title": "Vat Number",
						"type": "`$STRING`",
						"short": "The VAT business identification number for the customer.",
					},
					map[string]any{
						"name": "verified",
						"title": "Verified",
						"type": "`$BOOLEAN`",
						"short": "Is the customer verified to use ACH as a payment method.",
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": "`$STRING`",
						"short": "The customer’s shipping address zip code (e.g., “12345”)",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "customer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/portal/customers/{customer_id}/enable.json",
								"segments": []any{
									map[string]any{
										"lit": "portal",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "enable.json",
									},
								},
								"parts": []any{
									"portal",
									"customers",
									"{id}",
									"enable.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.customer`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "auto_invite",
											"orig": "auto_invite",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "enable",
									"exist": []any{
										"auto_invite",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/customers.json",
								"segments": []any{
									map[string]any{
										"lit": "customers.json",
									},
								},
								"parts": []any{
									"customers.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers.json",
								"segments": []any{
									map[string]any{
										"lit": "customers.json",
									},
								},
								"parts": []any{
									"customers.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 30,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"date_field",
										"direction",
										"end_date",
										"end_datetime",
										"page",
										"per_page",
										"q",
										"start_date",
										"start_datetime",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"customers",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers/lookup.json",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"lit": "lookup.json",
									},
								},
								"parts": []any{
									"customers",
									"lookup.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.customer`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "reference",
											"orig": "reference",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "lookup",
									"exist": []any{
										"reference",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/customers/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"customers",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/customers/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"customers",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"delayed_cancel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription",
						"title": "Subscription",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "delayed_cancel",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/delayed_cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "delayed_cancel.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"delayed_cancel.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhook_subscriptions",
						"title": "Webhook Subscriptions",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/endpoints.json",
								"segments": []any{
									map[string]any{
										"lit": "endpoints.json",
									},
								},
								"parts": []any{
									"endpoints.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/endpoints/{endpoint_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"lit": "{endpoint_id}.json",
									},
								},
								"parts": []any{
									"endpoints",
									"{endpoint_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.endpoint`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "endpoint_id",
											"orig": "endpoint_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "endpoint_id",
									"exist": []any{
										"endpoint_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"entitlement": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "customer_id",
						"title": "Customer Id",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
					map[string]any{
						"name": "entitlements",
						"title": "Entitlements",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "The subscription's current state, e.g.",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
				},
				"name": "entitlement",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/entitlements.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "entitlements.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"entitlements.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"event": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "event",
						"title": "Event",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "event",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/events.json",
								"segments": []any{
									map[string]any{
										"lit": "events.json",
									},
								},
								"parts": []any{
									"events.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"custom_field_value_change",
												"payment_success",
											},
										},
										map[string]any{
											"name": "max_id",
											"orig": "max_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "since_id",
											"orig": "since_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"start_datetime",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/events.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "events.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"events.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"custom_field_value_change",
												"payment_success",
											},
										},
										map[string]any{
											"name": "max_id",
											"orig": "max_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "since_id",
											"orig": "since_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"filter",
										"max_id",
										"page",
										"per_page",
										"since_id",
										"subscription_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/events/count.json",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "count.json",
									},
								},
								"parts": []any{
									"events",
									"count.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"custom_field_value_change",
												"payment_success",
											},
										},
										map[string]any{
											"name": "max_id",
											"orig": "max_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "since_id",
											"orig": "since_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "count",
									"exist": []any{
										"direction",
										"filter",
										"max_id",
										"page",
										"per_page",
										"since_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"events_based_billing_segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "events_based_billing_segment",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"id",
										"price_point_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"feature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "archived_count",
						"title": "Archived Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of archived feature templates matching the filters.",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "feature",
						"title": "Feature",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "feature_key",
						"title": "Feature Key",
						"type": "`$STRING`",
						"short": "The `key` of the parent feature template.",
					},
					map[string]any{
						"name": "feature_kind",
						"title": "Feature Kind",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "feature_name",
						"title": "Feature Name",
						"type": "`$STRING`",
						"short": "The `name` of the parent feature template.",
					},
					map[string]any{
						"name": "feature_template_id",
						"title": "Feature Template Id",
						"type": "`$INTEGER`",
						"short": "The id of the feature template this item was created from.",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "items",
						"title": "Items",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "periodicity_interval",
						"title": "Periodicity Interval",
						"type": "`$INTEGER`",
						"short": "Set when `feature_kind` is `usage_limit`; `null` otherwise.",
						"format": "int32",
					},
					map[string]any{
						"name": "periodicity_unit",
						"title": "Periodicity Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "price_point_id",
						"title": "Price Point Id",
						"type": "`$INTEGER`",
						"short": "Set together with `price_point_type` for price-point-specific overrides.",
						"format": "int32",
					},
					map[string]any{
						"name": "price_point_type",
						"title": "Price Point Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "total_count",
						"title": "Total Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Total number of feature templates matching the filters, across all pages.",
						"format": "int32",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"short": "The value granted by this feature catalog item.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "feature",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/features.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"feature": "`reqdata`",
									},
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/products/{product_id}/features.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"feature": "`reqdata`",
									},
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/features.json",
								"segments": []any{
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/features.json",
								"segments": []any{
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_direction",
											"orig": "sort_direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_from",
											"orig": "updated_from",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "updated_to",
											"orig": "updated_to",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"kind",
										"page",
										"per_page",
										"q",
										"sort_by",
										"sort_direction",
										"status",
										"updated_from",
										"updated_to",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/{component_id}/features.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.features`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product_id}/features.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.features`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
						[]any{
							"$.main.kit.entity.product",
						},
					},
				},
			},
			"feature_catalog_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "feature",
						"title": "Feature",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "feature_key",
						"title": "Feature Key",
						"type": "`$STRING`",
						"short": "The `key` of the parent feature template.",
					},
					map[string]any{
						"name": "feature_kind",
						"title": "Feature Kind",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "feature_name",
						"title": "Feature Name",
						"type": "`$STRING`",
						"short": "The `name` of the parent feature template.",
					},
					map[string]any{
						"name": "feature_template_id",
						"title": "Feature Template Id",
						"type": "`$INTEGER`",
						"short": "The id of the feature template this item was created from.",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "periodicity_interval",
						"title": "Periodicity Interval",
						"type": "`$INTEGER`",
						"short": "Set when `feature_kind` is `usage_limit`; `null` otherwise.",
						"format": "int32",
					},
					map[string]any{
						"name": "periodicity_unit",
						"title": "Periodicity Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "price_point_id",
						"title": "Price Point Id",
						"type": "`$INTEGER`",
						"short": "Set together with `price_point_type` for price-point-specific overrides.",
						"format": "int32",
					},
					map[string]any{
						"name": "price_point_type",
						"title": "Price Point Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"short": "The value granted by this feature catalog item.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "feature_catalog_item",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/features/{id}/restore.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restore.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features",
									"{id}",
									"restore.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "restore.json",
									"exist": []any{
										"component_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/products/{product_id}/features/{id}/restore.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restore.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features",
									"{id}",
									"restore.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "restore.json",
									"exist": []any{
										"id",
										"product_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/{component_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/products/{product_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"product_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
						[]any{
							"$.main.kit.entity.product",
						},
					},
				},
			},
			"feature_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"short": "The date and time the feature template was archived, or `null` if it is active.",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "default_periodicity_interval",
						"title": "Default Periodicity Interval",
						"type": "`$INTEGER`",
						"short": "For `usage_limit` features, the default periodicity interval used to pre-populate new feature catalog items.",
						"format": "int32",
					},
					map[string]any{
						"name": "default_periodicity_unit",
						"title": "Default Periodicity Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "default_value",
						"title": "Default Value",
						"type": "`$STRING`",
						"short": "A default value used to pre-populate new feature catalog items created from this template.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "feature",
						"title": "Feature",
						"type": "`$ANY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "The Advanced Billing id of the feature template.",
						"format": "int32",
					},
					map[string]any{
						"name": "key",
						"title": "Key",
						"type": "`$STRING`",
						"short": "A unique, lowercase, underscore-separated identifier for the feature.",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The display name of the feature.",
					},
					map[string]any{
						"name": "plans_count",
						"title": "Plans Count",
						"type": "`$INTEGER`",
						"short": "The number of **products** this feature template is currently attached to via an active feature catalog item.",
						"format": "int32",
					},
					map[string]any{
						"name": "products_count",
						"title": "Products Count",
						"type": "`$INTEGER`",
						"short": "The number of **components** this feature template is currently attached to via an active feature catalog item.",
						"format": "int32",
					},
					map[string]any{
						"name": "unit",
						"title": "Unit",
						"type": "`$STRING`",
						"short": "The unit the feature is measured in (for example, `requests` or `GB`).",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "value_type",
						"title": "Value Type",
						"type": "`$ANY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "feature_template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/features/{id}/restore.json",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "restore.json",
									},
								},
								"parts": []any{
									"features",
									"{id}",
									"restore.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "restore.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "remove_from_catalog",
											"orig": "remove_from_catalog",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"remove_from_catalog",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.feature`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"insight": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "mrr",
						"title": "Mrr",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "seller_name",
						"title": "Seller Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "site_currency",
						"title": "Site Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "site_name",
						"title": "Site Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"title": "Stats",
						"type": "`$OBJECT`",
					},
				},
				"name": "insight",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/mrr_movements.json",
								"segments": []any{
									map[string]any{
										"lit": "mrr_movements.json",
									},
								},
								"parts": []any{
									"mrr_movements.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"page",
										"per_page",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/mrr.json",
								"segments": []any{
									map[string]any{
										"lit": "mrr.json",
									},
								},
								"parts": []any{
									"mrr.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "at_time",
											"orig": "at_time",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"at_time",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/stats.json",
								"segments": []any{
									map[string]any{
										"lit": "stats.json",
									},
								},
								"parts": []any{
									"stats.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"invoice": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "applications",
						"title": "Applications",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "applied_amount",
						"title": "Applied Amount",
						"type": "`$STRING`",
						"short": "The amount of the credit note that has already been applied to invoices.",
					},
					map[string]any{
						"name": "applied_date",
						"title": "Applied Date",
						"type": "`$STRING`",
						"short": "Credit notes are applied to invoices to offset invoiced amounts - they reduce the amount due.",
						"format": "date",
					},
					map[string]any{
						"name": "avatax_details",
						"title": "Avatax Details",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billing_address",
						"title": "Billing Address",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "branding_theme_id",
						"title": "Branding Theme Id",
						"type": "`$INTEGER`",
						"short": "The ID of the Branding Theme associated with this invoice.",
						"format": "int32",
					},
					map[string]any{
						"name": "collection_method",
						"title": "Collection Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "consolidation_level",
						"title": "Consolidation Level",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "credit_amount",
						"title": "Credit Amount",
						"type": "`$STRING`",
						"short": "The amount of credit (from credit notes) applied to this invoice.",
					},
					map[string]any{
						"name": "credit_notes",
						"title": "Credit Notes",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "credits",
						"title": "Credits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"short": "The ISO 4217 currency code (3 character string) representing the currency of invoice transaction.",
					},
					map[string]any{
						"name": "custom_fields",
						"title": "Custom Fields",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "customer_id",
						"title": "Customer Id",
						"type": "`$INTEGER`",
						"short": "ID of the customer to which the invoice belongs.",
						"format": "int32",
					},
					map[string]any{
						"name": "debit_amount",
						"title": "Debit Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "debits",
						"title": "Debits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "discount_amount",
						"title": "Discount Amount",
						"type": "`$STRING`",
						"short": "Total discount applied to the invoice.",
					},
					map[string]any{
						"name": "discounts",
						"title": "Discounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_settings",
						"title": "Display Settings",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "due_amount",
						"title": "Due Amount",
						"type": "`$STRING`",
						"short": "Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`.",
					},
					map[string]any{
						"name": "due_date",
						"title": "Due Date",
						"type": "`$STRING`",
						"short": "Date the invoice is due.",
						"format": "date",
					},
					map[string]any{
						"name": "group_primary_subscription_id",
						"title": "Group Primary Subscription Id",
						"type": "`$INTEGER`",
						"short": "For invoices with `consolidation_level` of `parent`, this specifies the ID of the subscription which was the primary subscription of the subscription group that generated the invoice.",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "invoice",
						"title": "Invoice",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "invoices",
						"title": "Invoices",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "issue_date",
						"title": "Issue Date",
						"type": "`$STRING`",
						"short": "Date the invoice was issued to the customer.",
						"format": "date",
					},
					map[string]any{
						"name": "line_items",
						"title": "Line Items",
						"type": "`$ARRAY`",
						"short": "Line items on the invoice.",
					},
					map[string]any{
						"name": "memo",
						"title": "Memo",
						"type": "`$STRING`",
						"short": "The memo printed on invoices of any collection type.",
					},
					map[string]any{
						"name": "net_terms",
						"title": "Net Terms",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$STRING`",
						"short": "A unique, identifying string that appears on the invoice and in places the invoice is referenced.",
					},
					map[string]any{
						"name": "origin_invoices",
						"title": "Origin Invoices",
						"type": "`$ARRAY`",
						"short": "An array of origin invoices for the credit note.",
					},
					map[string]any{
						"name": "paid_amount",
						"title": "Paid Amount",
						"type": "`$STRING`",
						"short": "The amount paid on the invoice by the customer.",
					},
					map[string]any{
						"name": "paid_date",
						"title": "Paid Date",
						"type": "`$STRING`",
						"short": "Date the invoice became fully paid.",
						"format": "date",
					},
					map[string]any{
						"name": "paid_invoices",
						"title": "Paid Invoices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parent_invoice_id",
						"title": "Parent Invoice Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "parent_invoice_number",
						"title": "Parent Invoice Number",
						"type": "`$INTEGER`",
						"short": "For invoices with `consolidation_level` of `child`, this specifies the number of the parent (consolidated) invoice.",
						"format": "int32",
					},
					map[string]any{
						"name": "parent_invoice_uid",
						"title": "Parent Invoice Uid",
						"type": "`$STRING`",
						"short": "For invoices with `consolidation_level` of `child`, this specifies the UID of the parent (consolidated) invoice.",
					},
					map[string]any{
						"name": "payer",
						"title": "Payer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "payment_instructions",
						"title": "Payment Instructions",
						"type": "`$STRING`",
						"short": "A message that is printed on the invoice when it is marked for remittance collection.",
					},
					map[string]any{
						"name": "payments",
						"title": "Payments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prepayment",
						"title": "Prepayment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "previous_balance_data",
						"title": "Previous Balance Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "product_family_name",
						"title": "Product Family Name",
						"type": "`$STRING`",
						"short": "The name of the product family subscribed when the invoice was generated.",
					},
					map[string]any{
						"name": "product_name",
						"title": "Product Name",
						"type": "`$STRING`",
						"short": "The name of the product subscribed when the invoice was generated.",
					},
					map[string]any{
						"name": "public_url",
						"title": "Public Url",
						"type": "`$STRING`",
						"short": "The public URL of the invoice",
					},
					map[string]any{
						"name": "public_url_expires_on",
						"title": "Public Url Expires On",
						"type": "`$STRING`",
						"short": "The format is `\"YYYY-MM-DD\"`.",
						"format": "date",
					},
					map[string]any{
						"name": "recipient_emails",
						"title": "Recipient Emails",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "refund_amount",
						"title": "Refund Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "refunds",
						"title": "Refunds",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "remaining_amount",
						"title": "Remaining Amount",
						"type": "`$STRING`",
						"short": "The amount of the credit note remaining to be applied to invoices, which is `total_amount - applied_amount`.",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "seller",
						"title": "Seller",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sequence_number",
						"title": "Sequence Number",
						"type": "`$INTEGER`",
						"short": "A monotonically increasing number assigned to invoices as they are created.",
						"format": "int32",
					},
					map[string]any{
						"name": "shipping_address",
						"title": "Shipping Address",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"short": "ID of the site to which the invoice belongs.",
						"format": "int32",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "subscription_group_id",
						"title": "Subscription Group Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"short": "ID of the subscription that generated the invoice.",
						"format": "int32",
					},
					map[string]any{
						"name": "subtotal_amount",
						"title": "Subtotal Amount",
						"type": "`$STRING`",
						"short": "Subtotal of the invoice, which is the sum of all line items before discounts or taxes.",
					},
					map[string]any{
						"name": "tax_amount",
						"title": "Tax Amount",
						"type": "`$STRING`",
						"short": "Total tax on the invoice.",
					},
					map[string]any{
						"name": "taxes",
						"title": "Taxes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total_amount",
						"title": "Total Amount",
						"type": "`$STRING`",
						"short": "The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.",
					},
					map[string]any{
						"name": "transaction_time",
						"title": "Transaction Time",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "uid",
						"title": "Uid",
						"type": "`$STRING`",
						"short": "Unique identifier for the invoice.",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "void",
						"title": "Void",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "invoice",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/customer_information/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "customer_information",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"customer_information",
									"preview.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "customer_information_preview",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/deliveries.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deliveries.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"deliveries.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delivery",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/issue.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "issue.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"issue.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "issue",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/payments.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "payments.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"payments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/refunds.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "refunds.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"refunds.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "refund",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/reopen.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reopen.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"reopen.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reopen",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/{uid}/void.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "void.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"void.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "void",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/advance_invoice/issue.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "advance_invoice",
									},
									map[string]any{
										"lit": "issue.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"advance_invoice",
									"issue.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/advance_invoice/void.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "advance_invoice",
									},
									map[string]any{
										"lit": "void.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"advance_invoice",
									"void.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "invoices.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/payments.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "payments.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"payments.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/invoices/payments.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "payments.json",
									},
								},
								"parts": []any{
									"invoices",
									"payments.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "payment",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices.json",
									},
								},
								"parts": []any{
									"invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "consolidation_level",
											"orig": "consolidation_level",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "credit",
											"orig": "credit",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "custom_field",
											"orig": "custom_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												1,
												2,
												3,
											},
										},
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "discount",
											"orig": "discount",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item",
											"orig": "line_item",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "number",
											"orig": "number",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"1234",
												"1235",
											},
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "payment",
											"orig": "payment",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												23,
												34,
											},
										},
										map[string]any{
											"name": "refund",
											"orig": "refund",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_group_uid",
											"orig": "subscription_group_uid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "taxis",
											"orig": "taxis",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"taxis",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/credit_notes.json",
								"segments": []any{
									map[string]any{
										"lit": "credit_notes.json",
									},
								},
								"parts": []any{
									"credit_notes.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "application",
											"orig": "application",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "discount",
											"orig": "discount",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item",
											"orig": "line_item",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "refund",
											"orig": "refund",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "taxis",
											"orig": "taxis",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"taxis",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/invoices/events.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "events.json",
									},
								},
								"parts": []any{
									"invoices",
									"events.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "event_type",
											"orig": "event_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "invoice_uid",
											"orig": "invoice_uid",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
										map[string]any{
											"name": "since_date",
											"orig": "since_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "since_id",
											"orig": "since_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "with_change_invoice_status",
											"orig": "with_change_invoice_status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "event",
									"exist": []any{
										"event_type",
										"invoice_uid",
										"page",
										"per_page",
										"since_date",
										"since_id",
										"with_change_invoice_status",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/invoices/{invoice_uid}/segments.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "segments.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"segments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"invoice_uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "invoice_uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"$action": "segment",
									"exist": []any{
										"direction",
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/invoices/{batch_id}/rows.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "rows.json",
									},
								},
								"parts": []any{
									"api_exports",
									"invoices",
									"{id}",
									"rows.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"batch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"$action": "row",
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/advance_invoice.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "advance_invoice.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"advance_invoice.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/credit_notes/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "credit_notes",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"credit_notes",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"uid",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/invoices/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"invoices",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"uid",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/invoices/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"invoices",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"subscription_id",
										"uid",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/invoices/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"invoices",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.invoice`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"subscription_id",
										"uid",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/invoices/{uid}/customer_information.json",
								"segments": []any{
									map[string]any{
										"lit": "invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "customer_information.json",
									},
								},
								"parts": []any{
									"invoices",
									"{id}",
									"customer_information.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "customer_information",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"list_proforma_invoice": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "available_actions",
						"title": "Available Actions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billing_address",
						"title": "Billing Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "collection_method",
						"title": "Collection Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "consolidation_level",
						"title": "Consolidation Level",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "credit_amount",
						"title": "Credit Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "credits",
						"title": "Credits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_fields",
						"title": "Custom Fields",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "customer_id",
						"title": "Customer Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "delivery_date",
						"title": "Delivery Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "discount_amount",
						"title": "Discount Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "discounts",
						"title": "Discounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "due_amount",
						"title": "Due Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line_items",
						"title": "Line Items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "memo",
						"title": "Memo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "paid_amount",
						"title": "Paid Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payment_instructions",
						"title": "Payment Instructions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payments",
						"title": "Payments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "product_family_name",
						"title": "Product Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_name",
						"title": "Product Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_url",
						"title": "Public Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "refund_amount",
						"title": "Refund Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "seller",
						"title": "Seller",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sequence_number",
						"title": "Sequence Number",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "shipping_address",
						"title": "Shipping Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "subtotal_amount",
						"title": "Subtotal Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tax_amount",
						"title": "Tax Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxes",
						"title": "Taxes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total_amount",
						"title": "Total Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uid",
						"title": "Uid",
						"type": "`$STRING`",
					},
				},
				"name": "list_proforma_invoice",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"proforma_invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "credit",
											"orig": "credit",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "custom_field",
											"orig": "custom_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "discount",
											"orig": "discount",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "line_item",
											"orig": "line_item",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "payment",
											"orig": "payment",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "taxis",
											"orig": "taxis",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"taxis",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_groups/{uid}/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "subscription_group_id",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{subscription_group_id}",
									"proforma_invoices.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "subscription_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_group_id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "credit",
											"orig": "credit",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "custom_field",
											"orig": "custom_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "discount",
											"orig": "discount",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "line_item",
											"orig": "line_item",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "payment",
											"orig": "payment",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "taxis",
											"orig": "taxis",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"credit",
										"custom_field",
										"discount",
										"line_item",
										"payment",
										"subscription_group_id",
										"taxis",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription_group",
						},
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"list_sale_rep_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "full_name",
						"title": "Full Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "mrr_data",
						"title": "Mrr Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subscriptions_count",
						"title": "Subscriptions Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "test_mode",
						"title": "Test Mode",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_sale_rep_item",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/sellers/{seller_id}/sales_reps.json",
								"segments": []any{
									map[string]any{
										"lit": "sellers",
									},
									map[string]any{
										"var": "seller_id",
									},
									map[string]any{
										"lit": "sales_reps.json",
									},
								},
								"parts": []any{
									"sellers",
									"{seller_id}",
									"sales_reps.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "authorization",
											"orig": "authorization",
											"type": "`$STRING`",
											"kind": "header",
											"example": "Bearer <<apiKey>>",
										},
									},
									"params": []any{
										map[string]any{
											"name": "seller_id",
											"orig": "seller_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "live_mode",
											"orig": "live_mode",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"authorization",
										"live_mode",
										"page",
										"per_page",
										"seller_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "component_id",
						"title": "Component Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "event_based_billing_metric_id",
						"title": "Event Based Billing Metric Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "price_point_id",
						"title": "Price Point Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "prices",
						"title": "Prices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing_scheme",
						"title": "Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_1_value",
						"title": "Segment Property 1 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_2_value",
						"title": "Segment Property 2 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_3_value",
						"title": "Segment Property 3 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_4_value",
						"title": "Segment Property 4 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segments",
						"title": "Segments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list_segment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"lit": "bulk.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments",
									"bulk.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.segments`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"filter",
										"page",
										"per_page",
										"price_point_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments/bulk.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"lit": "bulk.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments",
									"bulk.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"offer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "handle",
						"title": "Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offer",
						"title": "Offer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "offer_discounts",
						"title": "Offer Discounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "offer_items",
						"title": "Offer Items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "offer_signup_pages",
						"title": "Offer Signup Pages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "offers",
						"title": "Offers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "product_family_id",
						"title": "Product Family Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "product_family_name",
						"title": "Product Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_id",
						"title": "Product Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "product_name",
						"title": "Product Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_price_in_cents",
						"title": "Product Price In Cents",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "product_price_point_id",
						"title": "Product Price Point Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "product_price_point_name",
						"title": "Product Price Point Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_revisable_number",
						"title": "Product Revisable Number",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "offer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/offers.json",
								"segments": []any{
									map[string]any{
										"lit": "offers.json",
									},
								},
								"parts": []any{
									"offers.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/offers.json",
								"segments": []any{
									map[string]any{
										"lit": "offers.json",
									},
								},
								"parts": []any{
									"offers.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_archived",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/offers/{offer_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "offers",
									},
									map[string]any{
										"lit": "{offer_id}.json",
									},
								},
								"parts": []any{
									"offers",
									"{offer_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.offer`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "offer_id",
											"orig": "offer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "offer_id",
									"exist": []any{
										"offer_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/offers/{offer_id}/archive.json",
								"segments": []any{
									map[string]any{
										"lit": "offers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "archive.json",
									},
								},
								"parts": []any{
									"offers",
									"{id}",
									"archive.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offer_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "offer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "archive",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/offers/{offer_id}/unarchive.json",
								"segments": []any{
									map[string]any{
										"lit": "offers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "unarchive.json",
									},
								},
								"parts": []any{
									"offers",
									"{id}",
									"unarchive.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"offer_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "offer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "unarchive",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"one_time_token": map[string]any{
				"fields": []any{},
				"name": "one_time_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/one_time_tokens/{chargify_token}.json",
								"segments": []any{
									map[string]any{
										"lit": "one_time_tokens",
									},
									map[string]any{
										"lit": "{chargify_token}.json",
									},
								},
								"parts": []any{
									"one_time_tokens",
									"{chargify_token}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.payment_profile`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "chargify_token",
											"orig": "chargify_token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "chargify_token",
									"exist": []any{
										"chargify_token",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"payment_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payment_profile",
						"title": "Payment Profile",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "payment_profile",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "subscription_group_id",
									},
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "change_payment_profile.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{subscription_group_id}",
									"payment_profiles",
									"{id}",
									"change_payment_profile.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"payment_profile_id": "id",
										"uid": "subscription_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_group_id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "change_payment_profile",
									"exist": []any{
										"id",
										"subscription_group_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}/change_payment_profile.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "change_payment_profile.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"payment_profiles",
									"{id}",
									"change_payment_profile.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"payment_profile_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "change_payment_profile",
									"exist": []any{
										"id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/request_payment_profiles_update.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "request_payment_profiles_update.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"request_payment_profiles_update.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/payment_profiles.json",
								"segments": []any{
									map[string]any{
										"lit": "payment_profiles.json",
									},
								},
								"parts": []any{
									"payment_profiles.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/payment_profiles.json",
								"segments": []any{
									map[string]any{
										"lit": "payment_profiles.json",
									},
								},
								"parts": []any{
									"payment_profiles.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/payment_profiles/{payment_profile_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"lit": "{payment_profile_id}.json",
									},
								},
								"parts": []any{
									"payment_profiles",
									"{payment_profile_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_profile_id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment_profile_id",
									"exist": []any{
										"payment_profile_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscription_groups/{uid}/payment_profiles/{payment_profile_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "subscription_group_id",
									},
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"lit": "{payment_profile_id}.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{subscription_group_id}",
									"payment_profiles",
									"{payment_profile_id}.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "subscription_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_profile_id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_group_id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment_profile_id",
									"exist": []any{
										"payment_profile_id",
										"subscription_group_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/payment_profiles/{payment_profile_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"lit": "{payment_profile_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"payment_profiles",
									"{payment_profile_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_profile_id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment_profile_id",
									"exist": []any{
										"payment_profile_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/payment_profiles/{payment_profile_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"lit": "{payment_profile_id}.json",
									},
								},
								"parts": []any{
									"payment_profiles",
									"{payment_profile_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_profile_id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment_profile_id",
									"exist": []any{
										"payment_profile_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/bank_accounts/{bank_account_id}/verification.json",
								"segments": []any{
									map[string]any{
										"lit": "bank_accounts",
									},
									map[string]any{
										"var": "bank_account_id",
									},
									map[string]any{
										"lit": "verification.json",
									},
								},
								"parts": []any{
									"bank_accounts",
									"{bank_account_id}",
									"verification.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "bank_account_id",
											"orig": "bank_account_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bank_account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/payment_profiles/{payment_profile_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "payment_profiles",
									},
									map[string]any{
										"lit": "{payment_profile_id}.json",
									},
								},
								"parts": []any{
									"payment_profiles",
									"{payment_profile_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "payment_profile_id",
											"orig": "payment_profile_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "payment_profile_id",
									"exist": []any{
										"payment_profile_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription_group",
						},
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"prepayment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "prepayment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/prepayments/{prepayment_id}/refunds.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "prepayments",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "refunds.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"prepayments",
									"{id}",
									"refunds.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"prepayment_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.prepayment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "prepayment_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "refund",
									"exist": []any{
										"id",
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "product",
						"title": "Product",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
				},
				"name": "product",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families/{product_family_id}/products.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "products.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"products.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_family_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products.json",
								"segments": []any{
									map[string]any{
										"lit": "products.json",
									},
								},
								"parts": []any{
									"products.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "include_feature",
											"orig": "include_feature",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"start_datetime",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{product_family_id}/products.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"var": "product_family_id",
									},
									map[string]any{
										"lit": "products.json",
									},
								},
								"parts": []any{
									"product_families",
									"{product_family_id}",
									"products.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_archived",
											"orig": "include_archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"start_datetime",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"lit": "{product_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_feature",
											"orig": "include_feature",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"$action": "product_id",
									"exist": []any{
										"include_feature",
										"product_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/handle/{api_handle}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"lit": "handle",
									},
									map[string]any{
										"lit": "{api_handle}.json",
									},
								},
								"parts": []any{
									"products",
									"handle",
									"{api_handle}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "api_handle",
											"orig": "api_handle",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_handle",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/products/{product_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"lit": "{product_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "product_id",
									"exist": []any{
										"product_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/products/{product_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"lit": "{product_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"product": "`reqdata`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "product_id",
									"exist": []any{
										"product_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product_family",
						},
					},
				},
			},
			"product_family": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_family",
						"title": "Product Family",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "product_family",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_families.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families.json",
									},
								},
								"parts": []any{
									"product_families.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families.json",
									},
								},
								"parts": []any{
									"product_families.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"date_field",
										"end_date",
										"end_datetime",
										"start_date",
										"start_datetime",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/product_families/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "product_families",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"product_families",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"product_feature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "product_feature",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/products/{product_id}/features/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "features",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"features",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "destroy_entitlement",
											"orig": "destroy_entitlement",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"destroy_entitlement",
										"id",
										"product_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product",
						},
					},
				},
			},
			"product_price_point": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_point",
						"title": "Price Point",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "price_points",
						"title": "Price Points",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "product",
						"title": "Product",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "product_price_point",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/product_price_points/{product_price_point_id}/currency_prices.json",
								"segments": []any{
									map[string]any{
										"lit": "product_price_points",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "currency_prices.json",
									},
								},
								"parts": []any{
									"product_price_points",
									"{id}",
									"currency_prices.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"product_price_point_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "product_price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "currency_price",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/products/{product_id}/price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "price_points.json",
									},
								},
								"parts": []any{
									"products",
									"{id}",
									"price_points.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"product_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "product_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/products/{product_id}/price_points/bulk.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "bulk.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"bulk.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"product_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product_id}/price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "price_points.json",
									},
								},
								"parts": []any{
									"products",
									"{id}",
									"price_points.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"product_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "product_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter_type",
											"orig": "filter_type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"catalog",
												"default",
											},
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"archived",
										"currency_price",
										"filter_type",
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products_price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "products_price_points.json",
									},
								},
								"parts": []any{
									"products_price_points.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"filter",
										"include",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/products/{product_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "currency_price",
											"orig": "currency_price",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"currency_price",
										"price_point_id",
										"product_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/products/{product_id}/price_points/{price_point_id}/default.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "default.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"{price_point_id}",
									"default.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
										"product_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/products/{product_id}/price_points/{price_point_id}/unarchive.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "unarchive.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"{price_point_id}",
									"unarchive.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
										"product_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/products/{product_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
										"product_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/products/{product_id}/price_points/{price_point_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "products",
									},
									map[string]any{
										"var": "product_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "{price_point_id}.json",
									},
								},
								"parts": []any{
									"products",
									"{product_id}",
									"price_points",
									"{price_point_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "product_id",
											"orig": "product_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"price_point_id",
										"product_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/product_price_points/{product_price_point_id}/currency_prices.json",
								"segments": []any{
									map[string]any{
										"lit": "product_price_points",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "currency_prices.json",
									},
								},
								"parts": []any{
									"product_price_points",
									"{id}",
									"currency_prices.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"product_price_point_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "product_price_point_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "currency_price",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.product",
						},
						[]any{
							"$.main.kit.entity.product",
						},
					},
				},
			},
			"proforma_invoice": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "available_actions",
						"title": "Available Actions",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "billing_address",
						"title": "Billing Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "collection_method",
						"title": "Collection Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "consolidation_level",
						"title": "Consolidation Level",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "credit_amount",
						"title": "Credit Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "credits",
						"title": "Credits",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_fields",
						"title": "Custom Fields",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "customer_id",
						"title": "Customer Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "delivery_date",
						"title": "Delivery Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "discount_amount",
						"title": "Discount Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "discounts",
						"title": "Discounts",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "due_amount",
						"title": "Due Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "line_items",
						"title": "Line Items",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "memo",
						"title": "Memo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "paid_amount",
						"title": "Paid Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payment_instructions",
						"title": "Payment Instructions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "payments",
						"title": "Payments",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "product_family_name",
						"title": "Product Family Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_name",
						"title": "Product Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "public_url",
						"title": "Public Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "refund_amount",
						"title": "Refund Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"title": "Role",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "seller",
						"title": "Seller",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sequence_number",
						"title": "Sequence Number",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "shipping_address",
						"title": "Shipping Address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "subtotal_amount",
						"title": "Subtotal Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tax_amount",
						"title": "Tax Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "taxes",
						"title": "Taxes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "total_amount",
						"title": "Total Amount",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uid",
						"title": "Uid",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "proforma_invoice",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/proforma_invoices/{proforma_invoice_uid}/deliveries.json",
								"segments": []any{
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "deliveries.json",
									},
								},
								"parts": []any{
									"proforma_invoices",
									"{id}",
									"deliveries.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"proforma_invoice_uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "proforma_invoice_uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delivery",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/proforma_invoices/{proforma_invoice_uid}/void.json",
								"segments": []any{
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "void.json",
									},
								},
								"parts": []any{
									"proforma_invoices",
									"{id}",
									"void.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"proforma_invoice_uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "proforma_invoice_uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "void",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "subscription_group_id",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{subscription_group_id}",
									"proforma_invoices.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "subscription_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_group_id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_group_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"proforma_invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/proforma_invoices/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"proforma_invoices",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "preview",
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/proforma_invoices.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "proforma_invoices.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"proforma_invoices.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/proforma_invoices/{batch_id}/rows.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "rows.json",
									},
								},
								"parts": []any{
									"api_exports",
									"proforma_invoices",
									"{id}",
									"rows.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"batch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"$action": "row",
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/proforma_invoices/{proforma_invoice_uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"lit": "{proforma_invoice_uid}.json",
									},
								},
								"parts": []any{
									"proforma_invoices",
									"{proforma_invoice_uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "proforma_invoice_uid",
											"orig": "proforma_invoice_uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "proforma_invoice_uid",
									"exist": []any{
										"proforma_invoice_uid",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription_group",
						},
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"reason_code": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "position",
						"title": "Position",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "reason_code",
						"title": "Reason Code",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "site_id",
						"title": "Site Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reason_code",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/reason_codes.json",
								"segments": []any{
									map[string]any{
										"lit": "reason_codes.json",
									},
								},
								"parts": []any{
									"reason_codes.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reason_code`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reason_codes.json",
								"segments": []any{
									map[string]any{
										"lit": "reason_codes.json",
									},
								},
								"parts": []any{
									"reason_codes.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reason_codes/{reason_code_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "reason_codes",
									},
									map[string]any{
										"lit": "{reason_code_id}.json",
									},
								},
								"parts": []any{
									"reason_codes",
									"{reason_code_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reason_code`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reason_code_id",
											"orig": "reason_code_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reason_code_id",
									"exist": []any{
										"reason_code_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/reason_codes/{reason_code_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "reason_codes",
									},
									map[string]any{
										"lit": "{reason_code_id}.json",
									},
								},
								"parts": []any{
									"reason_codes",
									"{reason_code_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reason_code_id",
											"orig": "reason_code_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reason_code_id",
									"exist": []any{
										"reason_code_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/reason_codes/{reason_code_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "reason_codes",
									},
									map[string]any{
										"lit": "{reason_code_id}.json",
									},
								},
								"parts": []any{
									"reason_codes",
									"{reason_code_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"reason_code": "`reqdata`",
									},
									"res": "`body.reason_code`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "reason_code_id",
											"orig": "reason_code_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reason_code_id",
									"exist": []any{
										"reason_code_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"referral_code": map[string]any{
				"fields": []any{},
				"name": "referral_code",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/referral_codes/validate.json",
								"segments": []any{
									map[string]any{
										"lit": "referral_codes",
									},
									map[string]any{
										"lit": "validate.json",
									},
								},
								"parts": []any{
									"referral_codes",
									"validate.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "code",
											"orig": "code",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "validate",
									"exist": []any{
										"code",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sale_rep_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "customer_name",
						"title": "Customer Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sales_rep_id",
						"title": "Sales Rep Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "sales_rep_name",
						"title": "Sales Rep Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "site_link",
						"title": "Site Link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "site_name",
						"title": "Site Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "subscription_mrr",
						"title": "Subscription Mrr",
						"type": "`$STRING`",
					},
				},
				"name": "sale_rep_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/sellers/{seller_id}/sales_commission_settings.json",
								"segments": []any{
									map[string]any{
										"lit": "sellers",
									},
									map[string]any{
										"var": "seller_id",
									},
									map[string]any{
										"lit": "sales_commission_settings.json",
									},
								},
								"parts": []any{
									"sellers",
									"{seller_id}",
									"sales_commission_settings.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "authorization",
											"orig": "authorization",
											"type": "`$STRING`",
											"kind": "header",
											"example": "Bearer <<apiKey>>",
										},
									},
									"params": []any{
										map[string]any{
											"name": "seller_id",
											"orig": "seller_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "live_mode",
											"orig": "live_mode",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"authorization",
										"live_mode",
										"page",
										"per_page",
										"seller_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sales_commission": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "full_name",
						"title": "Full Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "subscriptions",
						"title": "Subscriptions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subscriptions_count",
						"title": "Subscriptions Count",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "test_mode",
						"title": "Test Mode",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sales_commission",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/sellers/{seller_id}/sales_reps/{sales_rep_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "sellers",
									},
									map[string]any{
										"var": "seller_id",
									},
									map[string]any{
										"lit": "sales_reps",
									},
									map[string]any{
										"lit": "{sales_rep_id}.json",
									},
								},
								"parts": []any{
									"sellers",
									"{seller_id}",
									"sales_reps",
									"{sales_rep_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "authorization",
											"orig": "authorization",
											"type": "`$STRING`",
											"kind": "header",
											"example": "Bearer <<apiKey>>",
										},
									},
									"params": []any{
										map[string]any{
											"name": "sales_rep_id",
											"orig": "sales_rep_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "seller_id",
											"orig": "seller_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "live_mode",
											"orig": "live_mode",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"authorization",
										"live_mode",
										"page",
										"per_page",
										"sales_rep_id",
										"seller_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "component_id",
						"title": "Component Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "event_based_billing_metric_id",
						"title": "Event Based Billing Metric Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "price_point_id",
						"title": "Price Point Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "prices",
						"title": "Prices",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pricing_scheme",
						"title": "Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_1_value",
						"title": "Segment Property 1 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_2_value",
						"title": "Segment Property 2 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_3_value",
						"title": "Segment Property 3 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "segment_property_4_value",
						"title": "Segment Property 4 Value",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "segment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.segment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"price_point_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/components/{component_id}/price_points/{price_point_id}/segments/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"var": "price_point_id",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"components",
									"{component_id}",
									"price_points",
									"{price_point_id}",
									"segments",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"segment": "`reqdata`",
									},
									"res": "`body.segment`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "id",
									"exist": []any{
										"component_id",
										"id",
										"price_point_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"signup_proforma_preview": map[string]any{
				"fields": []any{},
				"name": "signup_proforma_preview",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/proforma_invoices/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "proforma_invoices",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"proforma_invoices",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.proforma_invoice_preview`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"site": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "chargify_js_keys",
						"title": "Chargify Js Keys",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "site",
						"title": "Site",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "site",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/sites/clear_data.json",
								"segments": []any{
									map[string]any{
										"lit": "sites",
									},
									map[string]any{
										"lit": "clear_data.json",
									},
								},
								"parts": []any{
									"sites",
									"clear_data.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "cleanup_scope",
											"orig": "cleanup_scope",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "clear_data",
									"exist": []any{
										"cleanup_scope",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/chargify_js_keys.json",
								"segments": []any{
									map[string]any{
										"lit": "chargify_js_keys.json",
									},
								},
								"parts": []any{
									"chargify_js_keys.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/site.json",
								"segments": []any{
									map[string]any{
										"lit": "site.json",
									},
								},
								"parts": []any{
									"site.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activated_at",
						"title": "Activated At",
						"type": "`$STRING`",
						"short": "Timestamp for when the subscription began (i.e., when it came out of trial, or when it began in the case of no trial)",
						"format": "date-time",
					},
					map[string]any{
						"name": "automatically_resume_at",
						"title": "Automatically Resume At",
						"type": "`$STRING`",
						"short": "The date the subscription is scheduled to automatically resume from the on_hold state.",
						"format": "date-time",
					},
					map[string]any{
						"name": "balance_in_cents",
						"title": "Balance In Cents",
						"type": "`$INTEGER`",
						"short": "Gives the current outstanding subscription balance in the number of cents.",
						"format": "int64",
					},
					map[string]any{
						"name": "bank_account",
						"title": "Bank Account",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "cancel_at_end_of_period",
						"title": "Cancel At End Of Period",
						"type": "`$BOOLEAN`",
						"short": "Whether or not the subscription will (or has) canceled at the end of the period.",
					},
					map[string]any{
						"name": "canceled_at",
						"title": "Canceled At",
						"type": "`$STRING`",
						"short": "The timestamp of the most recent cancellation",
						"format": "date-time",
					},
					map[string]any{
						"name": "cancellation_message",
						"title": "Cancellation Message",
						"type": "`$STRING`",
						"short": "Seller-provided reason for, or note about, the cancellation.",
					},
					map[string]any{
						"name": "cancellation_method",
						"title": "Cancellation Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "coupon_code",
						"title": "Coupon Code",
						"type": "`$STRING`",
						"short": "(deprecated) The coupon code of the single coupon currently applied to the subscription.",
						"deprecated": true,
					},
					map[string]any{
						"name": "coupon_codes",
						"title": "Coupon Codes",
						"type": "`$ARRAY`",
						"short": "An array for all the coupons attached to the subscription.",
					},
					map[string]any{
						"name": "coupon_use_count",
						"title": "Coupon Use Count",
						"type": "`$INTEGER`",
						"short": "(deprecated) How many times the subscription's single coupon has been used.",
						"deprecated": true,
						"format": "int32",
					},
					map[string]any{
						"name": "coupon_uses_allowed",
						"title": "Coupon Uses Allowed",
						"type": "`$INTEGER`",
						"short": "(deprecated) How many times the subscription's single coupon may be used.",
						"deprecated": true,
						"format": "int32",
					},
					map[string]any{
						"name": "coupons",
						"title": "Coupons",
						"type": "`$ARRAY`",
						"short": "Additional coupon data.",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"short": "The creation date for this subscription",
						"format": "date-time",
					},
					map[string]any{
						"name": "credit_balance_in_cents",
						"title": "Credit Balance In Cents",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "credit_card",
						"title": "Credit Card",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "current_billing_amount_in_cents",
						"title": "Current Billing Amount In Cents",
						"type": "`$INTEGER`",
						"short": "The balance in cents plus the estimated renewal amount in cents.",
						"format": "int64",
					},
					map[string]any{
						"name": "current_period_ends_at",
						"title": "Current Period Ends At",
						"type": "`$STRING`",
						"short": "Timestamp relating to the end of the current (recurring) period (i.e., when the next regularly scheduled attempted charge will occur)",
						"format": "date-time",
					},
					map[string]any{
						"name": "current_period_started_at",
						"title": "Current Period Started At",
						"type": "`$STRING`",
						"short": "Timestamp relating to the start of the current (recurring) period",
						"format": "date-time",
					},
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "delayed_cancel_at",
						"title": "Delayed Cancel At",
						"type": "`$STRING`",
						"short": "Timestamp for when the subscription is currently set to cancel.",
						"format": "date-time",
					},
					map[string]any{
						"name": "dunning_communication_delay_enabled",
						"title": "Dunning Communication Delay Enabled",
						"type": "`$BOOLEAN`",
						"short": "Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute.",
					},
					map[string]any{
						"name": "dunning_communication_delay_time_zone",
						"title": "Dunning Communication Delay Time Zone",
						"type": "`$STRING`",
						"short": "Time zone for the Dunning Communication Delay feature.",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"short": "Timestamp giving the expiration date of this subscription (if any)",
						"format": "date-time",
					},
					map[string]any{
						"name": "group",
						"title": "Group",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "The subscription unique id within Chargify.",
						"format": "int32",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "net_terms",
						"title": "Net Terms",
						"type": "`$INTEGER`",
						"short": "On Relationship Invoicing, the number of days before a renewal invoice is due.",
						"format": "int32",
					},
					map[string]any{
						"name": "next_assessment_at",
						"title": "Next Assessment At",
						"type": "`$STRING`",
						"short": "Timestamp that indicates when capture of payment will be tried or retried.",
						"format": "date-time",
					},
					map[string]any{
						"name": "next_product_handle",
						"title": "Next Product Handle",
						"type": "`$STRING`",
						"short": "If a delayed product change is scheduled, the handle of the product that the subscription will be changed to at the next renewal.",
					},
					map[string]any{
						"name": "next_product_id",
						"title": "Next Product Id",
						"type": "`$INTEGER`",
						"short": "If a delayed product change is scheduled, the ID of the product that the subscription will be changed to at the next renewal.",
						"format": "int32",
					},
					map[string]any{
						"name": "next_product_price_point_id",
						"title": "Next Product Price Point Id",
						"type": "`$INTEGER`",
						"short": "If a delayed product change is scheduled, the ID of the product price point that the subscription will be changed to at the next renewal.",
						"format": "int32",
					},
					map[string]any{
						"name": "offer_id",
						"title": "Offer Id",
						"type": "`$INTEGER`",
						"short": "The ID of the offer associated with the subscription.",
						"format": "int32",
					},
					map[string]any{
						"name": "on_hold_at",
						"title": "On Hold At",
						"type": "`$STRING`",
						"short": "The timestamp of the most recent on hold action.",
						"format": "date-time",
					},
					map[string]any{
						"name": "payer_id",
						"title": "Payer Id",
						"type": "`$INTEGER`",
						"short": "On Relationship Invoicing, the ID of the individual paying for the subscription.",
						"format": "int32",
					},
					map[string]any{
						"name": "payment_collection_method",
						"title": "Payment Collection Method",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "payment_type",
						"title": "Payment Type",
						"type": "`$STRING`",
						"short": "The payment profile type for the active profile on file.",
					},
					map[string]any{
						"name": "prepaid_configuration",
						"title": "Prepaid Configuration",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "prepaid_dunning",
						"title": "Prepaid Dunning",
						"type": "`$BOOLEAN`",
						"short": "Boolean representing whether the subscription is prepaid and currently in dunning.",
					},
					map[string]any{
						"name": "prepayment_balance_in_cents",
						"title": "Prepayment Balance In Cents",
						"type": "`$INTEGER`",
						"format": "int64",
					},
					map[string]any{
						"name": "previous_state",
						"title": "Previous State",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "product",
						"title": "Product",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "product_price_in_cents",
						"title": "Product Price In Cents",
						"type": "`$INTEGER`",
						"short": "(Added Nov 5 2013) The recurring amount of the product (and version), currently subscribed.",
						"format": "int64",
					},
					map[string]any{
						"name": "product_price_point_id",
						"title": "Product Price Point Id",
						"type": "`$INTEGER`",
						"short": "The product price point currently subscribed to.",
						"format": "int32",
					},
					map[string]any{
						"name": "product_price_point_type",
						"title": "Product Price Point Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "product_version_number",
						"title": "Product Version Number",
						"type": "`$INTEGER`",
						"short": "The version of the product for the subscription.",
						"format": "int32",
					},
					map[string]any{
						"name": "reason_code",
						"title": "Reason Code",
						"type": "`$STRING`",
						"short": "The churn reason code associated to a canceled subscription.",
					},
					map[string]any{
						"name": "receives_invoice_emails",
						"title": "Receives Invoice Emails",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "reference",
						"title": "Reference",
						"type": "`$STRING`",
						"short": "The reference value (provided by your app) for the subscription itself.",
					},
					map[string]any{
						"name": "referral_code",
						"title": "Referral Code",
						"type": "`$STRING`",
						"short": "The subscription's unique code that can be given to referrals.",
					},
					map[string]any{
						"name": "scheduled_cancellation_at",
						"title": "Scheduled Cancellation At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "self_service_page_token",
						"title": "Self Service Page Token",
						"type": "`$STRING`",
						"short": "Returned only for list/read Subscription operation when `include[]=self_service_page_token` parameter is provided.",
					},
					map[string]any{
						"name": "signup_payment_id",
						"title": "Signup Payment Id",
						"type": "`$INTEGER`",
						"short": "The ID of the transaction that generated the revenue",
						"format": "int32",
					},
					map[string]any{
						"name": "signup_revenue",
						"title": "Signup Revenue",
						"type": "`$STRING`",
						"short": "The revenue, formatted as a string of decimal separated dollars and cents, from the subscription signup ($50.00 would be formatted as 50.00)",
					},
					map[string]any{
						"name": "snap_day",
						"title": "Snap Day",
						"type": "`$STRING`",
						"short": "A day of month that subscription will be processed on.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "stored_credential_transaction_id",
						"title": "Stored Credential Transaction Id",
						"type": "`$INTEGER`",
						"short": "For European sites subject to PSD2 and using 3D Secure, this can be used to reference a previous transaction for the customer.",
						"format": "int32",
					},
					map[string]any{
						"name": "subscription",
						"title": "Subscription",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "total_revenue_in_cents",
						"title": "Total Revenue In Cents",
						"type": "`$INTEGER`",
						"short": "Gives the total revenue from the subscription in the number of cents.",
						"format": "int64",
					},
					map[string]any{
						"name": "trial_ended_at",
						"title": "Trial Ended At",
						"type": "`$STRING`",
						"short": "Timestamp for when the trial period (if any) ended",
						"format": "date-time",
					},
					map[string]any{
						"name": "trial_started_at",
						"title": "Trial Started At",
						"type": "`$STRING`",
						"short": "Timestamp for when the trial period (if any) began",
						"format": "date-time",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"short": "The date of last update for this subscription",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/purge.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "purge.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"purge.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscription`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "ack",
											"orig": "ack",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "cascade",
											"orig": "cascade",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"customer",
												"payment_profile",
											},
										},
									},
								},
								"select": map[string]any{
									"$action": "purge",
									"exist": []any{
										"ack",
										"cascade",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/add_coupon.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "add_coupon.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"add_coupon.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "code",
											"orig": "code",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "add_coupon",
									"exist": []any{
										"code",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/cancel_dunning.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "cancel_dunning.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"cancel_dunning.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscription`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel_dunning",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/prepaid_configurations.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prepaid_configurations.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"prepaid_configurations.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "prepaid_configuration",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions.json",
									},
								},
								"parts": []any{
									"subscriptions.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "preview",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions.json",
									},
								},
								"parts": []any{
									"subscriptions.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "branding_theme_id",
											"orig": "branding_theme_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "collection_method",
											"orig": "collection_method",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "coupon",
											"orig": "coupon",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "coupon_code",
											"orig": "coupon_code",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "currency",
											"orig": "currency",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "dunning_exemption",
											"orig": "dunning_exemption",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "group_status",
											"orig": "group_status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"self_service_page_token",
											},
										},
										map[string]any{
											"name": "metadata",
											"orig": "metadata",
											"type": "`$OBJECT`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "payment_gateway",
											"orig": "payment_gateway",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "product",
											"orig": "product",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "product_price_point_id",
											"orig": "product_price_point_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "q",
											"orig": "q",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "q_scope",
											"orig": "q_scope",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"state",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/api_exports/subscriptions/{batch_id}/rows.json",
								"segments": []any{
									map[string]any{
										"lit": "api_exports",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "rows.json",
									},
								},
								"parts": []any{
									"api_exports",
									"subscriptions",
									"{id}",
									"rows.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"batch_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "batch_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"$action": "row",
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customers/{customer_id}/subscriptions.json",
								"segments": []any{
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "subscriptions.json",
									},
								},
								"parts": []any{
									"customers",
									"{customer_id}",
									"subscriptions.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "{subscription_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"coupons",
												"self_service_page_token",
											},
										},
									},
								},
								"select": map[string]any{
									"$action": "subscription_id",
									"exist": []any{
										"include",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/lookup.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "lookup.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"lookup.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscription`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "reference",
											"orig": "reference",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "lookup",
									"exist": []any{
										"reference",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/remove_coupon.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "remove_coupon.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"remove_coupon.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "coupon_code",
											"orig": "coupon_code",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "remove_coupon",
									"exist": []any{
										"coupon_code",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/activate.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "activate.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"activate.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscription`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "activate",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/override.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "override.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"override.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "override",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "{subscription_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "subscription_id",
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.customer",
						},
					},
				},
			},
			"subscription_component": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "allocated_quantity",
						"title": "Allocated Quantity",
						"type": "`$ANY`",
						"short": "For Quantity-based components: The current allocation for the component on the given subscription.",
					},
					map[string]any{
						"name": "allocation",
						"title": "Allocation",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "allocation_preview",
						"title": "Allocation Preview",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "allow_fractional_quantities",
						"title": "Allow Fractional Quantities",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "archived_at",
						"title": "Archived At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "component",
						"title": "Component",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "component_handle",
						"title": "Component Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "component_id",
						"title": "Component Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_on_hosted_page",
						"title": "Display On Hosted Page",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "downgrade_credit",
						"title": "Downgrade Credit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "(for on/off components) indicates if the component is enabled for the subscription.",
					},
					map[string]any{
						"name": "historic_usages",
						"title": "Historic Usages",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$INTEGER`",
						"short": "The numerical interval.",
						"format": "int32",
					},
					map[string]any{
						"name": "interval_unit",
						"title": "Interval Unit",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_point_handle",
						"title": "Price Point Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_point_id",
						"title": "Price Point Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "price_point_name",
						"title": "Price Point Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price_point_type",
						"title": "Price Point Type",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "pricing_scheme",
						"title": "Pricing Scheme",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "product_family_handle",
						"title": "Product Family Handle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "product_family_id",
						"title": "Product Family Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "recurring",
						"title": "Recurring",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subscription",
						"title": "Subscription",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "unit_balance",
						"title": "Unit Balance",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "unit_name",
						"title": "Unit Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "upgrade_charge",
						"title": "Upgrade Charge",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "use_site_exchange_rate",
						"title": "Use Site Exchange Rate",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_component",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/events/{api_handle}.json",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"lit": "{api_handle}.json",
									},
								},
								"parts": []any{
									"events",
									"{api_handle}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "api_handle",
											"orig": "api_handle",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "store_uid",
											"orig": "store_uid",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_handle",
										"store_uid",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/events/{api_handle}/bulk.json",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"var": "api_handle",
									},
									map[string]any{
										"lit": "bulk.json",
									},
								},
								"parts": []any{
									"events",
									"{api_handle}",
									"bulk.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "api_handle",
											"orig": "api_handle",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "store_uid",
											"orig": "store_uid",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"api_handle",
										"store_uid",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/activate.json",
								"segments": []any{
									map[string]any{
										"lit": "event_based_billing",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "activate.json",
									},
								},
								"parts": []any{
									"event_based_billing",
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"activate.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/event_based_billing/subscriptions/{subscription_id}/components/{component_id}/deactivate.json",
								"segments": []any{
									map[string]any{
										"lit": "event_based_billing",
									},
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "deactivate.json",
									},
								},
								"parts": []any{
									"event_based_billing",
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"deactivate.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "allocations.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"allocations.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id_or_reference",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "usages.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id_or_reference}",
									"components",
									"{component_id}",
									"usages.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id_or_reference",
											"orig": "subscription_id_or_reference",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"subscription_id_or_reference",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/price_points.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "price_points.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"price_points.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "price_points.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/allocations/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "allocations",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"allocations",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/price_points/reset.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "price_points",
									},
									map[string]any{
										"lit": "reset.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"price_points",
									"reset.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions_components.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions_components.json",
									},
								},
								"parts": []any{
									"subscriptions_components.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscriptions_components`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												1,
												2,
												3,
											},
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												1,
												2,
												3,
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/components.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "components.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"components.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "date_field",
											"orig": "date_field",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_date",
											"orig": "end_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "end_datetime",
											"orig": "end_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "in_use",
											"orig": "in_use",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"subscription",
												"historic_usages",
											},
										},
										map[string]any{
											"name": "price_point_id",
											"orig": "price_point_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "product_family_id",
											"orig": "product_family_id",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												1,
												2,
												3,
											},
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_datetime",
											"orig": "start_datetime",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"start_datetime",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/components/{component_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"lit": "{component_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"subscription_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "allocations",
									},
									map[string]any{
										"lit": "{allocation_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"allocations",
									"{allocation_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "content_type",
											"orig": "content_type",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "allocation_id",
											"orig": "allocation_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"allocation_id",
										"component_id",
										"content_type",
										"subscription_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/components/{component_id}/allocations/{allocation_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "allocations",
									},
									map[string]any{
										"lit": "{allocation_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"components",
									"{component_id}",
									"allocations",
									"{allocation_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "allocation_id",
											"orig": "allocation_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"allocation_id",
										"component_id",
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.event",
						},
						[]any{
							"$.main.kit.entity.subscription",
						},
						[]any{
							"$.main.kit.entity.subscription",
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"subscription_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subscription_group",
						"title": "Subscription Group",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "subscription_groups",
						"title": "Subscription Groups",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/group.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "group.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"group.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups.json",
									},
								},
								"parts": []any{
									"subscription_groups.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_groups.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups.json",
									},
								},
								"parts": []any{
									"subscription_groups.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"account_balances",
											},
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_groups/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include",
											"orig": "include",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"current_billing_amount_in_cents",
											},
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"include",
										"uid",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_groups/lookup.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"lit": "lookup.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"lookup.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "lookup",
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/group.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "group.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"group.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscription_groups/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"uid",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscription_groups/{uid}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"lit": "{uid}.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{uid}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "uid",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "uid",
									"exist": []any{
										"uid",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_group_invoice_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_group_invoice_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/prepayments.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prepayments.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"prepayments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "prepayments.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/service_credit_deductions.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "service_credit_deductions.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"service_credit_deductions.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "service_credit_deductions.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/service_credits.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "service_credits.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"service_credits.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "service_credits.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscription_groups/{uid}/prepayments.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prepayments.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"prepayments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"$action": "prepayments.json",
									"exist": []any{
										"filter",
										"id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_group_signup": map[string]any{
				"fields": []any{},
				"name": "subscription_group_signup",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/signup.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"lit": "signup.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"signup.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_group_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_group_status",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "cancel.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"cancel.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/delayed_cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "delayed_cancel.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"delayed_cancel.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delayed_cancel.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscription_groups/{uid}/reactivate.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reactivate.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"reactivate.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reactivate.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscription_groups/{uid}/delayed_cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscription_groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "delayed_cancel.json",
									},
								},
								"parts": []any{
									"subscription_groups",
									"{id}",
									"delayed_cancel.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"uid": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "uid",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delayed_cancel.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_invoice_account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "service_credits",
						"title": "Service Credits",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_invoice_account",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/prepayments.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prepayments.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"prepayments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "prepayments.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/service_credit_deductions.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "service_credit_deductions.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"service_credit_deductions.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "service_credit_deductions.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/service_credits.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "service_credits.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"service_credits.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "service_credits.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/service_credits/list.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "service_credits",
									},
									map[string]any{
										"lit": "list.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"service_credits",
									"list.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"page",
										"per_page",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/prepayments.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "prepayments.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"prepayments.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"$action": "prepayments.json",
									"exist": []any{
										"filter",
										"id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"subscription_mrr": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "breakouts",
						"title": "Breakouts",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "mrr_amount_in_cents",
						"title": "Mrr Amount In Cents",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int64",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"req": true,
						"format": "int32",
					},
				},
				"name": "subscription_mrr",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions_mrr.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions_mrr.json",
									},
								},
								"parts": []any{
									"subscriptions_mrr.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.subscriptions_mrr`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "at_time",
											"orig": "at_time",
											"type": "`$STRING`",
											"kind": "query",
											"example": "at_time=2022-01-10T10:00:00-05:00",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"at_time",
										"direction",
										"filter",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_note": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"title": "Body",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "sticky",
						"title": "Sticky",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subscription_id",
						"title": "Subscription Id",
						"type": "`$INTEGER`",
						"format": "int32",
					},
					map[string]any{
						"name": "updated_at",
						"title": "Updated At",
						"type": "`$STRING`",
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_note",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/notes.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notes.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"notes.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.note`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/notes.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notes.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"notes.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"lit": "{note_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"notes",
									"{note_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "note_id",
											"orig": "note_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"note_id",
										"subscription_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"lit": "{note_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"notes",
									"{note_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "note_id",
											"orig": "note_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"note_id",
										"subscription_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/notes/{note_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "notes",
									},
									map[string]any{
										"lit": "{note_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"notes",
									"{note_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.note`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "note_id",
											"orig": "note_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"note_id",
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"subscription_product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "migration",
						"title": "Migration",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_product",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/migrations.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "migrations.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"migrations.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "migrations.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/migrations/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"migrations",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"subscription_renewal": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scheduled_renewal_configuration",
						"title": "Scheduled Renewal Configuration",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "scheduled_renewal_configuration_item",
						"title": "Scheduled Renewal Configuration Item",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_renewal",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "configuration_items.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"configuration_items.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"scheduled_renewals_configuration_id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "scheduled_renewals_configuration_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "scheduled_renewals.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"scheduled_renewals.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "scheduled_renewals.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "scheduled_renewals.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"scheduled_renewals.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "scheduled_renewals.json",
									"exist": []any{
										"id",
										"status",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"subscription_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "configuration_items",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"configuration_items",
									"{id}.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"scheduled_renewals_configuration_id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "scheduled_renewals_configuration_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{scheduled_renewals_configuration_id}/configuration_items/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "configuration_items",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"configuration_items",
									"{id}.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"scheduled_renewals_configuration_id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "scheduled_renewals_configuration_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"lit": "{id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "cancel.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"cancel.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/immediate_lock_in.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "immediate_lock_in.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"immediate_lock_in.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/schedule_lock_in.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "schedule_lock_in.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"schedule_lock_in.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/scheduled_renewals/{id}/unpublish.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "scheduled_renewals",
									},
									map[string]any{
										"var": "scheduled_renewal_id",
									},
									map[string]any{
										"lit": "unpublish.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"scheduled_renewals",
									"{scheduled_renewal_id}",
									"unpublish.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "scheduled_renewal_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "scheduled_renewal_id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"scheduled_renewal_id",
										"subscription_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"subscription_status": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "renewal_preview",
						"title": "Renewal Preview",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_status",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/resume.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "resume.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"resume.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "calendar_billing_'resumption_charge'",
											"orig": "calendar_billing_'resumption_charge'",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "resume.json",
									"exist": []any{
										"calendar_billing_'resumption_charge'",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/hold.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "hold.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"hold.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "hold.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/subscriptions/{subscription_id}/renewals/preview.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id",
									},
									map[string]any{
										"lit": "renewals",
									},
									map[string]any{
										"lit": "preview.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}",
									"renewals",
									"preview.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"subscription_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"lit": "{subscription_id}.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "content_type",
											"orig": "content_type",
											"type": "`$STRING`",
											"kind": "header",
											"reqd": true,
										},
									},
									"params": []any{
										map[string]any{
											"name": "subscription_id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_type",
										"subscription_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/subscriptions/{subscription_id}/delayed_cancel.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "delayed_cancel.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"delayed_cancel.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "delayed_cancel.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/hold.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "hold.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"hold.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "hold.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/reactivate.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reactivate.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"reactivate.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "reactivate.json",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/subscriptions/{subscription_id}/retry.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "retry.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{id}",
									"retry.json",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"subscription_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "subscription_id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "retry.json",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
						},
					},
				},
			},
			"usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/subscriptions/{subscription_id_or_reference}/components/{component_id}/usages.json",
								"segments": []any{
									map[string]any{
										"lit": "subscriptions",
									},
									map[string]any{
										"var": "subscription_id_or_reference",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "component_id",
									},
									map[string]any{
										"lit": "usages.json",
									},
								},
								"parts": []any{
									"subscriptions",
									"{subscription_id_or_reference}",
									"components",
									"{component_id}",
									"usages.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "component_id",
											"orig": "component_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "subscription_id_or_reference",
											"orig": "subscription_id_or_reference",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "max_id",
											"orig": "max_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "since_date",
											"orig": "since_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "since_id",
											"orig": "since_id",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "until_date",
											"orig": "until_date",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"component_id",
										"max_id",
										"page",
										"per_page",
										"since_date",
										"since_id",
										"subscription_id_or_reference",
										"until_date",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.subscription",
							"$.main.kit.entity.component",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "endpoint",
						"title": "Endpoint",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "webhook",
						"title": "Webhook",
						"type": "`$OBJECT`",
					},
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/endpoints.json",
								"segments": []any{
									map[string]any{
										"lit": "endpoints.json",
									},
								},
								"parts": []any{
									"endpoints.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/replay.json",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "replay.json",
									},
								},
								"parts": []any{
									"webhooks",
									"replay.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "replay",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks.json",
								"segments": []any{
									map[string]any{
										"lit": "webhooks.json",
									},
								},
								"parts": []any{
									"webhooks.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "since_date",
											"orig": "since_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscription",
											"orig": "subscription",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "until_date",
											"orig": "until_date",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"order",
										"page",
										"per_page",
										"since_date",
										"status",
										"subscription",
										"until_date",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/webhooks/settings.json",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "settings.json",
									},
								},
								"parts": []any{
									"webhooks",
									"settings.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "setting",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
