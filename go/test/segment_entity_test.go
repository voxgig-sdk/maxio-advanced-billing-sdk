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

func TestSegmentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Segment(nil)
		if ent == nil {
			t.Fatal("expected non-nil SegmentEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := segmentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "segment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		segmentRef01Ent := client.Segment(nil)
		segmentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "segment"}), "segment_ref01"))
		segmentRef01Data["component_id"] = setup.idmap["component01"]
		segmentRef01Data["price_point_id"] = setup.idmap["price_point01"]

		segmentRef01DataResult, err := segmentRef01Ent.Create(segmentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		segmentRef01Data = core.ToMapAny(entityData(segmentRef01DataResult))
		if segmentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if segmentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		segmentRef01DataUp0Up := map[string]any{
			"id": segmentRef01Data["id"],
			"component_id": setup.idmap["component_id"],
		}

		segmentRef01MarkdefUp0Name := "created_at"
		segmentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-segment_ref01_%d", setup.now)
		segmentRef01DataUp0Up[segmentRef01MarkdefUp0Name] = segmentRef01MarkdefUp0Value

		segmentRef01ResdataUp0Result, err := segmentRef01Ent.Update(segmentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		segmentRef01ResdataUp0 := core.ToMapAny(entityData(segmentRef01ResdataUp0Result))
		if segmentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if segmentRef01ResdataUp0["id"] != segmentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if segmentRef01ResdataUp0[segmentRef01MarkdefUp0Name] != segmentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", segmentRef01MarkdefUp0Name, segmentRef01ResdataUp0[segmentRef01MarkdefUp0Name])
		}

	})
}

func segmentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "segment", "SegmentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read segment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse segment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"segment01", "segment02", "segment03", "component01", "component02", "component03", "price_point01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_SEGMENT_ENTID"])
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
