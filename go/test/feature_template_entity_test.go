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

func TestFeatureTemplateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FeatureTemplate(nil)
		if ent == nil {
			t.Fatal("expected non-nil FeatureTemplateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := feature_templateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "feature_template." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		featureTemplateRef01Ent := client.FeatureTemplate(nil)
		featureTemplateRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "feature_template"}), "feature_template_ref01"))

		featureTemplateRef01DataResult, err := featureTemplateRef01Ent.Create(featureTemplateRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		featureTemplateRef01Data = core.ToMapAny(entityData(featureTemplateRef01DataResult))
		if featureTemplateRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if featureTemplateRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		featureTemplateRef01DataUp0Up := map[string]any{
			"id": featureTemplateRef01Data["id"],
		}

		featureTemplateRef01MarkdefUp0Name := "archived_at"
		featureTemplateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-feature_template_ref01_%d", setup.now)
		featureTemplateRef01DataUp0Up[featureTemplateRef01MarkdefUp0Name] = featureTemplateRef01MarkdefUp0Value

		featureTemplateRef01ResdataUp0Result, err := featureTemplateRef01Ent.Update(featureTemplateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		featureTemplateRef01ResdataUp0 := core.ToMapAny(entityData(featureTemplateRef01ResdataUp0Result))
		if featureTemplateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if featureTemplateRef01ResdataUp0["id"] != featureTemplateRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if featureTemplateRef01ResdataUp0[featureTemplateRef01MarkdefUp0Name] != featureTemplateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", featureTemplateRef01MarkdefUp0Name, featureTemplateRef01ResdataUp0[featureTemplateRef01MarkdefUp0Name])
		}

		// LOAD
		featureTemplateRef01MatchDt0 := map[string]any{
			"id": featureTemplateRef01Data["id"],
		}
		featureTemplateRef01DataDt0Loaded, err := featureTemplateRef01Ent.Load(featureTemplateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		featureTemplateRef01DataDt0LoadResult := core.ToMapAny(entityData(featureTemplateRef01DataDt0Loaded))
		if featureTemplateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if featureTemplateRef01DataDt0LoadResult["id"] != featureTemplateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		featureTemplateRef01MatchRm0 := map[string]any{
			"id": featureTemplateRef01Data["id"],
		}
		_, err = featureTemplateRef01Ent.Remove(featureTemplateRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func feature_templateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "feature_template", "FeatureTemplateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read feature_template test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse feature_template test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"feature_template01", "feature_template02", "feature_template03"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID"])
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
