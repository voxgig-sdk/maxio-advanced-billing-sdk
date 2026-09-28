package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go"
	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/core"

	vs "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/utility/struct"
)

func TestProductPricePointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProductPricePoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProductPricePointEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"product_price_point": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ProductPricePoint(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ProductPricePoint(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := product_price_pointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "product_price_point." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_PRODUCT_PRICE_POINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		productPricePointRef01Ent := client.ProductPricePoint(nil)
		productPricePointRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "product_price_point"}), "product_price_point_ref01"))
		productPricePointRef01Data["price_point_id"] = setup.idmap["price_point01"]
		productPricePointRef01Data["product_id"] = setup.idmap["product01"]

		productPricePointRef01DataResult, err := productPricePointRef01Ent.Create(productPricePointRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		productPricePointRef01Data = core.ToMapAny(entityData(productPricePointRef01DataResult))
		if productPricePointRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if productPricePointRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		productPricePointRef01Match := map[string]any{}

		productPricePointRef01ListResult, err := productPricePointRef01Ent.List(productPricePointRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		productPricePointRef01List, productPricePointRef01ListOk := productPricePointRef01ListResult.([]any)
		if !productPricePointRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", productPricePointRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(productPricePointRef01List), map[string]any{"id": productPricePointRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		productPricePointRef01DataUp0Up := map[string]any{
			"id": productPricePointRef01Data["id"],
		}

		productPricePointRef01ResdataUp0Result, err := productPricePointRef01Ent.Update(productPricePointRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		productPricePointRef01ResdataUp0 := core.ToMapAny(entityData(productPricePointRef01ResdataUp0Result))
		if productPricePointRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if productPricePointRef01ResdataUp0["id"] != productPricePointRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		productPricePointRef01MatchDt0 := map[string]any{
			"id": productPricePointRef01Data["id"],
		}
		productPricePointRef01DataDt0Loaded, err := productPricePointRef01Ent.Load(productPricePointRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		productPricePointRef01DataDt0LoadResult := core.ToMapAny(entityData(productPricePointRef01DataDt0Loaded))
		if productPricePointRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if productPricePointRef01DataDt0LoadResult["id"] != productPricePointRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		productPricePointRef01MatchRm0 := map[string]any{
			"id": productPricePointRef01Data["id"],
		}
		_, err = productPricePointRef01Ent.Remove(productPricePointRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		productPricePointRef01MatchRt0 := map[string]any{}

		productPricePointRef01ListRt0Result, err := productPricePointRef01Ent.List(productPricePointRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		productPricePointRef01ListRt0, productPricePointRef01ListRt0Ok := productPricePointRef01ListRt0Result.([]any)
		if !productPricePointRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", productPricePointRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(productPricePointRef01ListRt0), map[string]any{"id": productPricePointRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func product_price_pointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "product_price_point", "ProductPricePointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read product_price_point test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse product_price_point test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"product_price_point01", "product_price_point02", "product_price_point03", "product01", "product02", "product03", "price_point01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_PRODUCT_PRICE_POINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_PRODUCT_PRICE_POINT_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_PRODUCT_PRICE_POINT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["MAXIO_ADVANCED_BILLING_APIKEY"],
				"server": map[string]any{
					"site": env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
				},
			},
			extraOpts,
		})
		client = sdk.NewMaxioAdvancedBillingSDK(core.ToMapAny(mergedOpts))
	}

	live := env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["MAXIO_ADVANCED_BILLING_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
