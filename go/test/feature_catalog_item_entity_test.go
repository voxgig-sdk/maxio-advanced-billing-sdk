package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestFeatureCatalogItemEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FeatureCatalogItem(nil)
		if ent == nil {
			t.Fatal("expected non-nil FeatureCatalogItemEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := feature_catalog_itemBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "feature_catalog_item." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		featureCatalogItemRef01Ent := client.FeatureCatalogItem(nil)
		featureCatalogItemRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "feature_catalog_item"}), "feature_catalog_item_ref01"))
		featureCatalogItemRef01Data["product_id"] = setup.idmap["product01"]

		featureCatalogItemRef01DataResult, err := featureCatalogItemRef01Ent.Create(featureCatalogItemRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		featureCatalogItemRef01Data = core.ToMapAny(entityData(featureCatalogItemRef01DataResult))
		if featureCatalogItemRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if featureCatalogItemRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		featureCatalogItemRef01DataUp0Up := map[string]any{
			"id": featureCatalogItemRef01Data["id"],
		}

		featureCatalogItemRef01MarkdefUp0Name := "archived_at"
		featureCatalogItemRef01MarkdefUp0Value := fmt.Sprintf("Mark01-feature_catalog_item_ref01_%d", setup.now)
		featureCatalogItemRef01DataUp0Up[featureCatalogItemRef01MarkdefUp0Name] = featureCatalogItemRef01MarkdefUp0Value

		featureCatalogItemRef01ResdataUp0Result, err := featureCatalogItemRef01Ent.Update(featureCatalogItemRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		featureCatalogItemRef01ResdataUp0 := core.ToMapAny(entityData(featureCatalogItemRef01ResdataUp0Result))
		if featureCatalogItemRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if featureCatalogItemRef01ResdataUp0["id"] != featureCatalogItemRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if featureCatalogItemRef01ResdataUp0[featureCatalogItemRef01MarkdefUp0Name] != featureCatalogItemRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", featureCatalogItemRef01MarkdefUp0Name, featureCatalogItemRef01ResdataUp0[featureCatalogItemRef01MarkdefUp0Name])
		}

		// LOAD
		featureCatalogItemRef01MatchDt0 := map[string]any{
			"id": featureCatalogItemRef01Data["id"],
		}
		featureCatalogItemRef01DataDt0Loaded, err := featureCatalogItemRef01Ent.Load(featureCatalogItemRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		featureCatalogItemRef01DataDt0LoadResult := core.ToMapAny(entityData(featureCatalogItemRef01DataDt0Loaded))
		if featureCatalogItemRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if featureCatalogItemRef01DataDt0LoadResult["id"] != featureCatalogItemRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func feature_catalog_itemBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "feature_catalog_item", "FeatureCatalogItemTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read feature_catalog_item test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse feature_catalog_item test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"feature_catalog_item01", "feature_catalog_item02", "feature_catalog_item03", "component01", "component02", "component03", "product01", "product02", "product03"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_FEATURE_CATALOG_ITEM_ENTID"])
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
