package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"account_balance | allocation | batch_job | billing_portal | component | component_feature | component_price_point | component_price_point_currency_overage | coupon | coupon_currency | coupon_subcode | coupon_usage | custom_field | customer | delayed_cancel | endpoint | entitlement | event | events_based_billing_segment | feature | feature_catalog_item | feature_template | insight | invoice | list_proforma_invoice | list_sale_rep_item | list_segment | offer | one_time_token | payment_profile | prepayment | product | product_family | product_feature | product_price_point | proforma_invoice | reason_code | referral_code | sale_rep_setting | sales_commission | segment | signup_proforma_preview | site | subscription | subscription_component | subscription_group | subscription_group_invoice_account | subscription_group_signup | subscription_group_status | subscription_invoice_account | subscription_mrr | subscription_note | subscription_product | subscription_renewal | subscription_status | usage | webhook"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.MaxioAdvancedBillingSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "maxio-advanced-billing_list",
		Description: "List records from MaxioAdvancedBilling. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "maxio-advanced-billing_load",
		Description: "Load a single record from MaxioAdvancedBilling. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.MaxioAdvancedBillingSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.MaxioAdvancedBillingSDK, name string) (sdk.MaxioAdvancedBillingEntity, error) {
	switch strings.ToLower(name) {
	case "account_balance":
		return client.AccountBalance(nil), nil
	case "allocation":
		return client.Allocation(nil), nil
	case "batch_job":
		return client.BatchJob(nil), nil
	case "billing_portal":
		return client.BillingPortal(nil), nil
	case "component":
		return client.Component(nil), nil
	case "component_feature":
		return client.ComponentFeature(nil), nil
	case "component_price_point":
		return client.ComponentPricePoint(nil), nil
	case "component_price_point_currency_overage":
		return client.ComponentPricePointCurrencyOverage(nil), nil
	case "coupon":
		return client.Coupon(nil), nil
	case "coupon_currency":
		return client.CouponCurrency(nil), nil
	case "coupon_subcode":
		return client.CouponSubcode(nil), nil
	case "coupon_usage":
		return client.CouponUsage(nil), nil
	case "custom_field":
		return client.CustomField(nil), nil
	case "customer":
		return client.Customer(nil), nil
	case "delayed_cancel":
		return client.DelayedCancel(nil), nil
	case "endpoint":
		return client.Endpoint(nil), nil
	case "entitlement":
		return client.Entitlement(nil), nil
	case "event":
		return client.Event(nil), nil
	case "events_based_billing_segment":
		return client.EventsBasedBillingSegment(nil), nil
	case "feature":
		return client.Feature(nil), nil
	case "feature_catalog_item":
		return client.FeatureCatalogItem(nil), nil
	case "feature_template":
		return client.FeatureTemplate(nil), nil
	case "insight":
		return client.Insight(nil), nil
	case "invoice":
		return client.Invoice(nil), nil
	case "list_proforma_invoice":
		return client.ListProformaInvoice(nil), nil
	case "list_sale_rep_item":
		return client.ListSaleRepItem(nil), nil
	case "list_segment":
		return client.ListSegment(nil), nil
	case "offer":
		return client.Offer(nil), nil
	case "one_time_token":
		return client.OneTimeToken(nil), nil
	case "payment_profile":
		return client.PaymentProfile(nil), nil
	case "prepayment":
		return client.Prepayment(nil), nil
	case "product":
		return client.Product(nil), nil
	case "product_family":
		return client.ProductFamily(nil), nil
	case "product_feature":
		return client.ProductFeature(nil), nil
	case "product_price_point":
		return client.ProductPricePoint(nil), nil
	case "proforma_invoice":
		return client.ProformaInvoice(nil), nil
	case "reason_code":
		return client.ReasonCode(nil), nil
	case "referral_code":
		return client.ReferralCode(nil), nil
	case "sale_rep_setting":
		return client.SaleRepSetting(nil), nil
	case "sales_commission":
		return client.SalesCommission(nil), nil
	case "segment":
		return client.Segment(nil), nil
	case "signup_proforma_preview":
		return client.SignupProformaPreview(nil), nil
	case "site":
		return client.Site(nil), nil
	case "subscription":
		return client.Subscription(nil), nil
	case "subscription_component":
		return client.SubscriptionComponent(nil), nil
	case "subscription_group":
		return client.SubscriptionGroup(nil), nil
	case "subscription_group_invoice_account":
		return client.SubscriptionGroupInvoiceAccount(nil), nil
	case "subscription_group_signup":
		return client.SubscriptionGroupSignup(nil), nil
	case "subscription_group_status":
		return client.SubscriptionGroupStatus(nil), nil
	case "subscription_invoice_account":
		return client.SubscriptionInvoiceAccount(nil), nil
	case "subscription_mrr":
		return client.SubscriptionMrr(nil), nil
	case "subscription_note":
		return client.SubscriptionNote(nil), nil
	case "subscription_product":
		return client.SubscriptionProduct(nil), nil
	case "subscription_renewal":
		return client.SubscriptionRenewal(nil), nil
	case "subscription_status":
		return client.SubscriptionStatus(nil), nil
	case "usage":
		return client.Usage(nil), nil
	case "webhook":
		return client.Webhook(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
