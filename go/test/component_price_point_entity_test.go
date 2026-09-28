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

func TestComponentPricePointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ComponentPricePoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil ComponentPricePointEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"component_price_point": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ComponentPricePoint(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ComponentPricePoint(nil).Stream("list", nil, nil) {
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
		setup := component_price_pointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "component_price_point." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		componentPricePointRef01Ent := client.ComponentPricePoint(nil)
		componentPricePointRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "component_price_point"}), "component_price_point_ref01"))
		componentPricePointRef01Data["component_id"] = setup.idmap["component01"]
		componentPricePointRef01Data["price_point_id"] = setup.idmap["price_point01"]

		componentPricePointRef01DataResult, err := componentPricePointRef01Ent.Create(componentPricePointRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		componentPricePointRef01Data = core.ToMapAny(entityData(componentPricePointRef01DataResult))
		if componentPricePointRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if componentPricePointRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		componentPricePointRef01Match := map[string]any{}

		componentPricePointRef01ListResult, err := componentPricePointRef01Ent.List(componentPricePointRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		componentPricePointRef01List, componentPricePointRef01ListOk := componentPricePointRef01ListResult.([]any)
		if !componentPricePointRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", componentPricePointRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(componentPricePointRef01List), map[string]any{"id": componentPricePointRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		componentPricePointRef01DataUp0Up := map[string]any{
			"id": componentPricePointRef01Data["id"],
		}

		componentPricePointRef01MarkdefUp0Name := "archived_at"
		componentPricePointRef01MarkdefUp0Value := fmt.Sprintf("Mark01-component_price_point_ref01_%d", setup.now)
		componentPricePointRef01DataUp0Up[componentPricePointRef01MarkdefUp0Name] = componentPricePointRef01MarkdefUp0Value

		componentPricePointRef01ResdataUp0Result, err := componentPricePointRef01Ent.Update(componentPricePointRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		componentPricePointRef01ResdataUp0 := core.ToMapAny(entityData(componentPricePointRef01ResdataUp0Result))
		if componentPricePointRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if componentPricePointRef01ResdataUp0["id"] != componentPricePointRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if componentPricePointRef01ResdataUp0[componentPricePointRef01MarkdefUp0Name] != componentPricePointRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", componentPricePointRef01MarkdefUp0Name, componentPricePointRef01ResdataUp0[componentPricePointRef01MarkdefUp0Name])
		}

		// REMOVE
		componentPricePointRef01MatchRm0 := map[string]any{
			"id": componentPricePointRef01Data["id"],
		}
		_, err = componentPricePointRef01Ent.Remove(componentPricePointRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		componentPricePointRef01MatchRt0 := map[string]any{}

		componentPricePointRef01ListRt0Result, err := componentPricePointRef01Ent.List(componentPricePointRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		componentPricePointRef01ListRt0, componentPricePointRef01ListRt0Ok := componentPricePointRef01ListRt0Result.([]any)
		if !componentPricePointRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", componentPricePointRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(componentPricePointRef01ListRt0), map[string]any{"id": componentPricePointRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func component_price_pointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "component_price_point", "ComponentPricePointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read component_price_point test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse component_price_point test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"component_price_point01", "component_price_point02", "component_price_point03", "component01", "component02", "component03", "price_point01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_COMPONENT_PRICE_POINT_ENTID"])
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
