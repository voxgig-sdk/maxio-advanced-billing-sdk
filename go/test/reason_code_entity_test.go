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

func TestReasonCodeEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ReasonCode(nil)
		if ent == nil {
			t.Fatal("expected non-nil ReasonCodeEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"reason_code": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ReasonCode(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ReasonCode(nil).Stream("list", nil, nil) {
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
		setup := reason_codeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "reason_code." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		reasonCodeRef01Ent := client.ReasonCode(nil)
		reasonCodeRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "reason_code"}), "reason_code_ref01"))
		reasonCodeRef01Data["reason_code_id"] = setup.idmap["reason_code01"]

		reasonCodeRef01DataResult, err := reasonCodeRef01Ent.Create(reasonCodeRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		reasonCodeRef01Data = core.ToMapAny(entityData(reasonCodeRef01DataResult))
		if reasonCodeRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if reasonCodeRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		reasonCodeRef01Match := map[string]any{}

		reasonCodeRef01ListResult, err := reasonCodeRef01Ent.List(reasonCodeRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		reasonCodeRef01List, reasonCodeRef01ListOk := reasonCodeRef01ListResult.([]any)
		if !reasonCodeRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", reasonCodeRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(reasonCodeRef01List), map[string]any{"id": reasonCodeRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		reasonCodeRef01DataUp0Up := map[string]any{
			"id": reasonCodeRef01Data["id"],
			"reason_code_id": setup.idmap["reason_code_id"],
		}

		reasonCodeRef01MarkdefUp0Name := "code"
		reasonCodeRef01MarkdefUp0Value := fmt.Sprintf("Mark01-reason_code_ref01_%d", setup.now)
		reasonCodeRef01DataUp0Up[reasonCodeRef01MarkdefUp0Name] = reasonCodeRef01MarkdefUp0Value

		reasonCodeRef01ResdataUp0Result, err := reasonCodeRef01Ent.Update(reasonCodeRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		reasonCodeRef01ResdataUp0 := core.ToMapAny(entityData(reasonCodeRef01ResdataUp0Result))
		if reasonCodeRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if reasonCodeRef01ResdataUp0["id"] != reasonCodeRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if reasonCodeRef01ResdataUp0[reasonCodeRef01MarkdefUp0Name] != reasonCodeRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", reasonCodeRef01MarkdefUp0Name, reasonCodeRef01ResdataUp0[reasonCodeRef01MarkdefUp0Name])
		}

		// LOAD
		reasonCodeRef01MatchDt0 := map[string]any{
			"id": reasonCodeRef01Data["id"],
		}
		reasonCodeRef01DataDt0Loaded, err := reasonCodeRef01Ent.Load(reasonCodeRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		reasonCodeRef01DataDt0LoadResult := core.ToMapAny(entityData(reasonCodeRef01DataDt0Loaded))
		if reasonCodeRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if reasonCodeRef01DataDt0LoadResult["id"] != reasonCodeRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		reasonCodeRef01MatchRm0 := map[string]any{
			"id": reasonCodeRef01Data["id"],
		}
		_, err = reasonCodeRef01Ent.Remove(reasonCodeRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		reasonCodeRef01MatchRt0 := map[string]any{}

		reasonCodeRef01ListRt0Result, err := reasonCodeRef01Ent.List(reasonCodeRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		reasonCodeRef01ListRt0, reasonCodeRef01ListRt0Ok := reasonCodeRef01ListRt0Result.([]any)
		if !reasonCodeRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", reasonCodeRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(reasonCodeRef01ListRt0), map[string]any{"id": reasonCodeRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func reason_codeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "reason_code", "ReasonCodeTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read reason_code test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse reason_code test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"reason_code01", "reason_code02", "reason_code03"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_REASON_CODE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add reason_code_id alias for update test.
	if idmapResolved["reason_code_id"] == nil {
		idmapResolved["reason_code_id"] = idmapResolved["reason_code01"]
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
