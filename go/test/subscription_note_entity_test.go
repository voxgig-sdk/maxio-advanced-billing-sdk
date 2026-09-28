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

func TestSubscriptionNoteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriptionNote(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriptionNoteEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"subscription_note": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SubscriptionNote(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SubscriptionNote(nil).Stream("list", nil, nil) {
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
		setup := subscription_noteBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscription_note." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		subscriptionNoteRef01Ent := client.SubscriptionNote(nil)
		subscriptionNoteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "subscription_note"}), "subscription_note_ref01"))
		subscriptionNoteRef01Data["note_id"] = setup.idmap["note01"]
		subscriptionNoteRef01Data["subscription_id"] = setup.idmap["subscription01"]

		subscriptionNoteRef01DataResult, err := subscriptionNoteRef01Ent.Create(subscriptionNoteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		subscriptionNoteRef01Data = core.ToMapAny(entityData(subscriptionNoteRef01DataResult))
		if subscriptionNoteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if subscriptionNoteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		subscriptionNoteRef01Match := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionNoteRef01ListResult, err := subscriptionNoteRef01Ent.List(subscriptionNoteRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionNoteRef01List, subscriptionNoteRef01ListOk := subscriptionNoteRef01ListResult.([]any)
		if !subscriptionNoteRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", subscriptionNoteRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(subscriptionNoteRef01List), map[string]any{"id": subscriptionNoteRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		subscriptionNoteRef01DataUp0Up := map[string]any{
			"id": subscriptionNoteRef01Data["id"],
			"note_id": setup.idmap["note_id"],
		}

		subscriptionNoteRef01MarkdefUp0Name := "body"
		subscriptionNoteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-subscription_note_ref01_%d", setup.now)
		subscriptionNoteRef01DataUp0Up[subscriptionNoteRef01MarkdefUp0Name] = subscriptionNoteRef01MarkdefUp0Value

		subscriptionNoteRef01ResdataUp0Result, err := subscriptionNoteRef01Ent.Update(subscriptionNoteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		subscriptionNoteRef01ResdataUp0 := core.ToMapAny(entityData(subscriptionNoteRef01ResdataUp0Result))
		if subscriptionNoteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if subscriptionNoteRef01ResdataUp0["id"] != subscriptionNoteRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if subscriptionNoteRef01ResdataUp0[subscriptionNoteRef01MarkdefUp0Name] != subscriptionNoteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", subscriptionNoteRef01MarkdefUp0Name, subscriptionNoteRef01ResdataUp0[subscriptionNoteRef01MarkdefUp0Name])
		}

		// LOAD
		subscriptionNoteRef01MatchDt0 := map[string]any{
			"id": subscriptionNoteRef01Data["id"],
		}
		subscriptionNoteRef01DataDt0Loaded, err := subscriptionNoteRef01Ent.Load(subscriptionNoteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		subscriptionNoteRef01DataDt0LoadResult := core.ToMapAny(entityData(subscriptionNoteRef01DataDt0Loaded))
		if subscriptionNoteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if subscriptionNoteRef01DataDt0LoadResult["id"] != subscriptionNoteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		subscriptionNoteRef01MatchRm0 := map[string]any{
			"id": subscriptionNoteRef01Data["id"],
		}
		_, err = subscriptionNoteRef01Ent.Remove(subscriptionNoteRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		subscriptionNoteRef01MatchRt0 := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionNoteRef01ListRt0Result, err := subscriptionNoteRef01Ent.List(subscriptionNoteRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionNoteRef01ListRt0, subscriptionNoteRef01ListRt0Ok := subscriptionNoteRef01ListRt0Result.([]any)
		if !subscriptionNoteRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", subscriptionNoteRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(subscriptionNoteRef01ListRt0), map[string]any{"id": subscriptionNoteRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func subscription_noteBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscription_note", "SubscriptionNoteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscription_note test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscription_note test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscription_note01", "subscription_note02", "subscription_note03", "subscription01", "subscription02", "subscription03", "note01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_NOTE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add note_id alias for update test.
	if idmapResolved["note_id"] == nil {
		idmapResolved["note_id"] = idmapResolved["note01"]
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
