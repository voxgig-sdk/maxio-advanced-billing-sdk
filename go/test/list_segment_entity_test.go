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

func TestListSegmentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ListSegment(nil)
		if ent == nil {
			t.Fatal("expected non-nil ListSegmentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"list_segment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ListSegment(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ListSegment(nil).Stream("list", nil, nil) {
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
		setup := list_segmentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "list_segment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		listSegmentRef01Ent := client.ListSegment(nil)
		listSegmentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "list_segment"}), "list_segment_ref01"))
		listSegmentRef01Data["component_id"] = setup.idmap["component01"]
		listSegmentRef01Data["price_point_id"] = setup.idmap["price_point01"]

		listSegmentRef01DataResult, err := listSegmentRef01Ent.Create(listSegmentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		listSegmentRef01Data = core.ToMapAny(entityData(listSegmentRef01DataResult))
		if listSegmentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if listSegmentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		listSegmentRef01Match := map[string]any{
			"component_id": setup.idmap["component01"],
			"price_point_id": setup.idmap["price_point01"],
		}

		listSegmentRef01ListResult, err := listSegmentRef01Ent.List(listSegmentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		listSegmentRef01List, listSegmentRef01ListOk := listSegmentRef01ListResult.([]any)
		if !listSegmentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", listSegmentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(listSegmentRef01List), map[string]any{"id": listSegmentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		listSegmentRef01DataUp0Up := map[string]any{
			"id": listSegmentRef01Data["id"],
			"component_id": setup.idmap["component_id"],
		}

		listSegmentRef01MarkdefUp0Name := "created_at"
		listSegmentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-list_segment_ref01_%d", setup.now)
		listSegmentRef01DataUp0Up[listSegmentRef01MarkdefUp0Name] = listSegmentRef01MarkdefUp0Value

		listSegmentRef01ResdataUp0Result, err := listSegmentRef01Ent.Update(listSegmentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		listSegmentRef01ResdataUp0 := core.ToMapAny(entityData(listSegmentRef01ResdataUp0Result))
		if listSegmentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if listSegmentRef01ResdataUp0["id"] != listSegmentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if listSegmentRef01ResdataUp0[listSegmentRef01MarkdefUp0Name] != listSegmentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", listSegmentRef01MarkdefUp0Name, listSegmentRef01ResdataUp0[listSegmentRef01MarkdefUp0Name])
		}

	})
}

func list_segmentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "list_segment", "ListSegmentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read list_segment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse list_segment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"list_segment01", "list_segment02", "list_segment03", "component01", "component02", "component03", "price_point01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add component_id alias for update test.
	if idmapResolved["component_id"] == nil {
		idmapResolved["component_id"] = idmapResolved["component01"]
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
