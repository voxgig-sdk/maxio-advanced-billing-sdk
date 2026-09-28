package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/utility/struct"
)

type MaxioAdvancedBillingSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewMaxioAdvancedBillingSDK(options map[string]any) *MaxioAdvancedBillingSDK {
	sdk := &MaxioAdvancedBillingSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *MaxioAdvancedBillingSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *MaxioAdvancedBillingSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *MaxioAdvancedBillingSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *MaxioAdvancedBillingSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *MaxioAdvancedBillingSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *MaxioAdvancedBillingSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *MaxioAdvancedBillingSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("MaxioAdvancedBillingSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *MaxioAdvancedBillingSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *MaxioAdvancedBillingSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("MaxioAdvancedBillingSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AccountBalance returns a AccountBalance entity bound to this client.
// Idiomatic usage: client.AccountBalance(nil).List(nil, nil) or
// client.AccountBalance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) AccountBalance(data map[string]any) MaxioAdvancedBillingEntity {
	return NewAccountBalanceEntityFunc(sdk, data)
}


// Allocation returns a Allocation entity bound to this client.
// Idiomatic usage: client.Allocation(nil).List(nil, nil) or
// client.Allocation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Allocation(data map[string]any) MaxioAdvancedBillingEntity {
	return NewAllocationEntityFunc(sdk, data)
}


// BatchJob returns a BatchJob entity bound to this client.
// Idiomatic usage: client.BatchJob(nil).List(nil, nil) or
// client.BatchJob(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) BatchJob(data map[string]any) MaxioAdvancedBillingEntity {
	return NewBatchJobEntityFunc(sdk, data)
}


// BillingPortal returns a BillingPortal entity bound to this client.
// Idiomatic usage: client.BillingPortal(nil).List(nil, nil) or
// client.BillingPortal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) BillingPortal(data map[string]any) MaxioAdvancedBillingEntity {
	return NewBillingPortalEntityFunc(sdk, data)
}


// Component returns a Component entity bound to this client.
// Idiomatic usage: client.Component(nil).List(nil, nil) or
// client.Component(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Component(data map[string]any) MaxioAdvancedBillingEntity {
	return NewComponentEntityFunc(sdk, data)
}


// ComponentFeature returns a ComponentFeature entity bound to this client.
// Idiomatic usage: client.ComponentFeature(nil).List(nil, nil) or
// client.ComponentFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ComponentFeature(data map[string]any) MaxioAdvancedBillingEntity {
	return NewComponentFeatureEntityFunc(sdk, data)
}


// ComponentPricePoint returns a ComponentPricePoint entity bound to this client.
// Idiomatic usage: client.ComponentPricePoint(nil).List(nil, nil) or
// client.ComponentPricePoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ComponentPricePoint(data map[string]any) MaxioAdvancedBillingEntity {
	return NewComponentPricePointEntityFunc(sdk, data)
}


// ComponentPricePointCurrencyOverage returns a ComponentPricePointCurrencyOverage entity bound to this client.
// Idiomatic usage: client.ComponentPricePointCurrencyOverage(nil).List(nil, nil) or
// client.ComponentPricePointCurrencyOverage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ComponentPricePointCurrencyOverage(data map[string]any) MaxioAdvancedBillingEntity {
	return NewComponentPricePointCurrencyOverageEntityFunc(sdk, data)
}


// Coupon returns a Coupon entity bound to this client.
// Idiomatic usage: client.Coupon(nil).List(nil, nil) or
// client.Coupon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Coupon(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCouponEntityFunc(sdk, data)
}


// CouponCurrency returns a CouponCurrency entity bound to this client.
// Idiomatic usage: client.CouponCurrency(nil).List(nil, nil) or
// client.CouponCurrency(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) CouponCurrency(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCouponCurrencyEntityFunc(sdk, data)
}


// CouponSubcode returns a CouponSubcode entity bound to this client.
// Idiomatic usage: client.CouponSubcode(nil).List(nil, nil) or
// client.CouponSubcode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) CouponSubcode(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCouponSubcodeEntityFunc(sdk, data)
}


// CouponUsage returns a CouponUsage entity bound to this client.
// Idiomatic usage: client.CouponUsage(nil).List(nil, nil) or
// client.CouponUsage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) CouponUsage(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCouponUsageEntityFunc(sdk, data)
}


// CustomField returns a CustomField entity bound to this client.
// Idiomatic usage: client.CustomField(nil).List(nil, nil) or
// client.CustomField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) CustomField(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCustomFieldEntityFunc(sdk, data)
}


// Customer returns a Customer entity bound to this client.
// Idiomatic usage: client.Customer(nil).List(nil, nil) or
// client.Customer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Customer(data map[string]any) MaxioAdvancedBillingEntity {
	return NewCustomerEntityFunc(sdk, data)
}


// DelayedCancel returns a DelayedCancel entity bound to this client.
// Idiomatic usage: client.DelayedCancel(nil).List(nil, nil) or
// client.DelayedCancel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) DelayedCancel(data map[string]any) MaxioAdvancedBillingEntity {
	return NewDelayedCancelEntityFunc(sdk, data)
}


// Endpoint returns a Endpoint entity bound to this client.
// Idiomatic usage: client.Endpoint(nil).List(nil, nil) or
// client.Endpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Endpoint(data map[string]any) MaxioAdvancedBillingEntity {
	return NewEndpointEntityFunc(sdk, data)
}


// Entitlement returns a Entitlement entity bound to this client.
// Idiomatic usage: client.Entitlement(nil).List(nil, nil) or
// client.Entitlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Entitlement(data map[string]any) MaxioAdvancedBillingEntity {
	return NewEntitlementEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Event(data map[string]any) MaxioAdvancedBillingEntity {
	return NewEventEntityFunc(sdk, data)
}


// EventsBasedBillingSegment returns a EventsBasedBillingSegment entity bound to this client.
// Idiomatic usage: client.EventsBasedBillingSegment(nil).List(nil, nil) or
// client.EventsBasedBillingSegment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) EventsBasedBillingSegment(data map[string]any) MaxioAdvancedBillingEntity {
	return NewEventsBasedBillingSegmentEntityFunc(sdk, data)
}


// Feature returns a Feature entity bound to this client.
// Idiomatic usage: client.Feature(nil).List(nil, nil) or
// client.Feature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Feature(data map[string]any) MaxioAdvancedBillingEntity {
	return NewFeatureEntityFunc(sdk, data)
}


// FeatureCatalogItem returns a FeatureCatalogItem entity bound to this client.
// Idiomatic usage: client.FeatureCatalogItem(nil).List(nil, nil) or
// client.FeatureCatalogItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) FeatureCatalogItem(data map[string]any) MaxioAdvancedBillingEntity {
	return NewFeatureCatalogItemEntityFunc(sdk, data)
}


// FeatureTemplate returns a FeatureTemplate entity bound to this client.
// Idiomatic usage: client.FeatureTemplate(nil).List(nil, nil) or
// client.FeatureTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) FeatureTemplate(data map[string]any) MaxioAdvancedBillingEntity {
	return NewFeatureTemplateEntityFunc(sdk, data)
}


// Insight returns a Insight entity bound to this client.
// Idiomatic usage: client.Insight(nil).List(nil, nil) or
// client.Insight(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Insight(data map[string]any) MaxioAdvancedBillingEntity {
	return NewInsightEntityFunc(sdk, data)
}


// Invoice returns a Invoice entity bound to this client.
// Idiomatic usage: client.Invoice(nil).List(nil, nil) or
// client.Invoice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Invoice(data map[string]any) MaxioAdvancedBillingEntity {
	return NewInvoiceEntityFunc(sdk, data)
}


// ListProformaInvoice returns a ListProformaInvoice entity bound to this client.
// Idiomatic usage: client.ListProformaInvoice(nil).List(nil, nil) or
// client.ListProformaInvoice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ListProformaInvoice(data map[string]any) MaxioAdvancedBillingEntity {
	return NewListProformaInvoiceEntityFunc(sdk, data)
}


// ListSaleRepItem returns a ListSaleRepItem entity bound to this client.
// Idiomatic usage: client.ListSaleRepItem(nil).List(nil, nil) or
// client.ListSaleRepItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ListSaleRepItem(data map[string]any) MaxioAdvancedBillingEntity {
	return NewListSaleRepItemEntityFunc(sdk, data)
}


// ListSegment returns a ListSegment entity bound to this client.
// Idiomatic usage: client.ListSegment(nil).List(nil, nil) or
// client.ListSegment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ListSegment(data map[string]any) MaxioAdvancedBillingEntity {
	return NewListSegmentEntityFunc(sdk, data)
}


// Offer returns a Offer entity bound to this client.
// Idiomatic usage: client.Offer(nil).List(nil, nil) or
// client.Offer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Offer(data map[string]any) MaxioAdvancedBillingEntity {
	return NewOfferEntityFunc(sdk, data)
}


// OneTimeToken returns a OneTimeToken entity bound to this client.
// Idiomatic usage: client.OneTimeToken(nil).List(nil, nil) or
// client.OneTimeToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) OneTimeToken(data map[string]any) MaxioAdvancedBillingEntity {
	return NewOneTimeTokenEntityFunc(sdk, data)
}


// PaymentProfile returns a PaymentProfile entity bound to this client.
// Idiomatic usage: client.PaymentProfile(nil).List(nil, nil) or
// client.PaymentProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) PaymentProfile(data map[string]any) MaxioAdvancedBillingEntity {
	return NewPaymentProfileEntityFunc(sdk, data)
}


// Prepayment returns a Prepayment entity bound to this client.
// Idiomatic usage: client.Prepayment(nil).List(nil, nil) or
// client.Prepayment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Prepayment(data map[string]any) MaxioAdvancedBillingEntity {
	return NewPrepaymentEntityFunc(sdk, data)
}


// Product returns a Product entity bound to this client.
// Idiomatic usage: client.Product(nil).List(nil, nil) or
// client.Product(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Product(data map[string]any) MaxioAdvancedBillingEntity {
	return NewProductEntityFunc(sdk, data)
}


// ProductFamily returns a ProductFamily entity bound to this client.
// Idiomatic usage: client.ProductFamily(nil).List(nil, nil) or
// client.ProductFamily(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ProductFamily(data map[string]any) MaxioAdvancedBillingEntity {
	return NewProductFamilyEntityFunc(sdk, data)
}


// ProductFeature returns a ProductFeature entity bound to this client.
// Idiomatic usage: client.ProductFeature(nil).List(nil, nil) or
// client.ProductFeature(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ProductFeature(data map[string]any) MaxioAdvancedBillingEntity {
	return NewProductFeatureEntityFunc(sdk, data)
}


// ProductPricePoint returns a ProductPricePoint entity bound to this client.
// Idiomatic usage: client.ProductPricePoint(nil).List(nil, nil) or
// client.ProductPricePoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ProductPricePoint(data map[string]any) MaxioAdvancedBillingEntity {
	return NewProductPricePointEntityFunc(sdk, data)
}


// ProformaInvoice returns a ProformaInvoice entity bound to this client.
// Idiomatic usage: client.ProformaInvoice(nil).List(nil, nil) or
// client.ProformaInvoice(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ProformaInvoice(data map[string]any) MaxioAdvancedBillingEntity {
	return NewProformaInvoiceEntityFunc(sdk, data)
}


// ReasonCode returns a ReasonCode entity bound to this client.
// Idiomatic usage: client.ReasonCode(nil).List(nil, nil) or
// client.ReasonCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ReasonCode(data map[string]any) MaxioAdvancedBillingEntity {
	return NewReasonCodeEntityFunc(sdk, data)
}


// ReferralCode returns a ReferralCode entity bound to this client.
// Idiomatic usage: client.ReferralCode(nil).List(nil, nil) or
// client.ReferralCode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) ReferralCode(data map[string]any) MaxioAdvancedBillingEntity {
	return NewReferralCodeEntityFunc(sdk, data)
}


// SaleRepSetting returns a SaleRepSetting entity bound to this client.
// Idiomatic usage: client.SaleRepSetting(nil).List(nil, nil) or
// client.SaleRepSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SaleRepSetting(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSaleRepSettingEntityFunc(sdk, data)
}


// SalesCommission returns a SalesCommission entity bound to this client.
// Idiomatic usage: client.SalesCommission(nil).List(nil, nil) or
// client.SalesCommission(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SalesCommission(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSalesCommissionEntityFunc(sdk, data)
}


// Segment returns a Segment entity bound to this client.
// Idiomatic usage: client.Segment(nil).List(nil, nil) or
// client.Segment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Segment(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSegmentEntityFunc(sdk, data)
}


// SignupProformaPreview returns a SignupProformaPreview entity bound to this client.
// Idiomatic usage: client.SignupProformaPreview(nil).List(nil, nil) or
// client.SignupProformaPreview(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SignupProformaPreview(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSignupProformaPreviewEntityFunc(sdk, data)
}


// Site returns a Site entity bound to this client.
// Idiomatic usage: client.Site(nil).List(nil, nil) or
// client.Site(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Site(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSiteEntityFunc(sdk, data)
}


// Subscription returns a Subscription entity bound to this client.
// Idiomatic usage: client.Subscription(nil).List(nil, nil) or
// client.Subscription(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Subscription(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionEntityFunc(sdk, data)
}


// SubscriptionComponent returns a SubscriptionComponent entity bound to this client.
// Idiomatic usage: client.SubscriptionComponent(nil).List(nil, nil) or
// client.SubscriptionComponent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionComponent(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionComponentEntityFunc(sdk, data)
}


// SubscriptionGroup returns a SubscriptionGroup entity bound to this client.
// Idiomatic usage: client.SubscriptionGroup(nil).List(nil, nil) or
// client.SubscriptionGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionGroup(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionGroupEntityFunc(sdk, data)
}


// SubscriptionGroupInvoiceAccount returns a SubscriptionGroupInvoiceAccount entity bound to this client.
// Idiomatic usage: client.SubscriptionGroupInvoiceAccount(nil).List(nil, nil) or
// client.SubscriptionGroupInvoiceAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionGroupInvoiceAccount(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionGroupInvoiceAccountEntityFunc(sdk, data)
}


// SubscriptionGroupSignup returns a SubscriptionGroupSignup entity bound to this client.
// Idiomatic usage: client.SubscriptionGroupSignup(nil).List(nil, nil) or
// client.SubscriptionGroupSignup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionGroupSignup(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionGroupSignupEntityFunc(sdk, data)
}


// SubscriptionGroupStatus returns a SubscriptionGroupStatus entity bound to this client.
// Idiomatic usage: client.SubscriptionGroupStatus(nil).List(nil, nil) or
// client.SubscriptionGroupStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionGroupStatus(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionGroupStatusEntityFunc(sdk, data)
}


// SubscriptionInvoiceAccount returns a SubscriptionInvoiceAccount entity bound to this client.
// Idiomatic usage: client.SubscriptionInvoiceAccount(nil).List(nil, nil) or
// client.SubscriptionInvoiceAccount(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionInvoiceAccount(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionInvoiceAccountEntityFunc(sdk, data)
}


// SubscriptionMrr returns a SubscriptionMrr entity bound to this client.
// Idiomatic usage: client.SubscriptionMrr(nil).List(nil, nil) or
// client.SubscriptionMrr(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionMrr(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionMrrEntityFunc(sdk, data)
}


// SubscriptionNote returns a SubscriptionNote entity bound to this client.
// Idiomatic usage: client.SubscriptionNote(nil).List(nil, nil) or
// client.SubscriptionNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionNote(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionNoteEntityFunc(sdk, data)
}


// SubscriptionProduct returns a SubscriptionProduct entity bound to this client.
// Idiomatic usage: client.SubscriptionProduct(nil).List(nil, nil) or
// client.SubscriptionProduct(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionProduct(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionProductEntityFunc(sdk, data)
}


// SubscriptionRenewal returns a SubscriptionRenewal entity bound to this client.
// Idiomatic usage: client.SubscriptionRenewal(nil).List(nil, nil) or
// client.SubscriptionRenewal(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionRenewal(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionRenewalEntityFunc(sdk, data)
}


// SubscriptionStatus returns a SubscriptionStatus entity bound to this client.
// Idiomatic usage: client.SubscriptionStatus(nil).List(nil, nil) or
// client.SubscriptionStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) SubscriptionStatus(data map[string]any) MaxioAdvancedBillingEntity {
	return NewSubscriptionStatusEntityFunc(sdk, data)
}


// Usage returns a Usage entity bound to this client.
// Idiomatic usage: client.Usage(nil).List(nil, nil) or
// client.Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Usage(data map[string]any) MaxioAdvancedBillingEntity {
	return NewUsageEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *MaxioAdvancedBillingSDK) Webhook(data map[string]any) MaxioAdvancedBillingEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *MaxioAdvancedBillingSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewMaxioAdvancedBillingSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
