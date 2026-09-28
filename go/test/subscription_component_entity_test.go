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

func TestSubscriptionComponentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriptionComponent(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriptionComponentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"subscription_component": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SubscriptionComponent(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SubscriptionComponent(nil).Stream("list", nil, nil) {
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
		setup := subscription_componentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscription_component." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_COMPONENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		subscriptionComponentRef01Ent := client.SubscriptionComponent(nil)
		subscriptionComponentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "subscription_component"}), "subscription_component_ref01"))
		subscriptionComponentRef01Data["allocation_id"] = setup.idmap["allocation01"]
		subscriptionComponentRef01Data["component_id"] = setup.idmap["component01"]
		subscriptionComponentRef01Data["subscription_id"] = setup.idmap["subscription01"]

		subscriptionComponentRef01DataResult, err := subscriptionComponentRef01Ent.Create(subscriptionComponentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		subscriptionComponentRef01Data = core.ToMapAny(entityData(subscriptionComponentRef01DataResult))
		if subscriptionComponentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if subscriptionComponentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		subscriptionComponentRef01Match := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionComponentRef01ListResult, err := subscriptionComponentRef01Ent.List(subscriptionComponentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionComponentRef01List, subscriptionComponentRef01ListOk := subscriptionComponentRef01ListResult.([]any)
		if !subscriptionComponentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", subscriptionComponentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(subscriptionComponentRef01List), map[string]any{"id": subscriptionComponentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		subscriptionComponentRef01DataUp0Up := map[string]any{
			"id": subscriptionComponentRef01Data["id"],
			"allocation_id": setup.idmap["allocation_id"],
			"subscription_id": setup.idmap["subscription_id"],
		}

		subscriptionComponentRef01MarkdefUp0Name := "archived_at"
		subscriptionComponentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-subscription_component_ref01_%d", setup.now)
		subscriptionComponentRef01DataUp0Up[subscriptionComponentRef01MarkdefUp0Name] = subscriptionComponentRef01MarkdefUp0Value

		subscriptionComponentRef01ResdataUp0Result, err := subscriptionComponentRef01Ent.Update(subscriptionComponentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		subscriptionComponentRef01ResdataUp0 := core.ToMapAny(entityData(subscriptionComponentRef01ResdataUp0Result))
		if subscriptionComponentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if subscriptionComponentRef01ResdataUp0["id"] != subscriptionComponentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if subscriptionComponentRef01ResdataUp0[subscriptionComponentRef01MarkdefUp0Name] != subscriptionComponentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", subscriptionComponentRef01MarkdefUp0Name, subscriptionComponentRef01ResdataUp0[subscriptionComponentRef01MarkdefUp0Name])
		}

		// LOAD
		subscriptionComponentRef01MatchDt0 := map[string]any{
			"id": subscriptionComponentRef01Data["id"],
		}
		subscriptionComponentRef01DataDt0Loaded, err := subscriptionComponentRef01Ent.Load(subscriptionComponentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		subscriptionComponentRef01DataDt0LoadResult := core.ToMapAny(entityData(subscriptionComponentRef01DataDt0Loaded))
		if subscriptionComponentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if subscriptionComponentRef01DataDt0LoadResult["id"] != subscriptionComponentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		subscriptionComponentRef01MatchRm0 := map[string]any{
			"id": subscriptionComponentRef01Data["id"],
		}
		_, err = subscriptionComponentRef01Ent.Remove(subscriptionComponentRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		subscriptionComponentRef01MatchRt0 := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionComponentRef01ListRt0Result, err := subscriptionComponentRef01Ent.List(subscriptionComponentRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionComponentRef01ListRt0, subscriptionComponentRef01ListRt0Ok := subscriptionComponentRef01ListRt0Result.([]any)
		if !subscriptionComponentRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", subscriptionComponentRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(subscriptionComponentRef01ListRt0), map[string]any{"id": subscriptionComponentRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func subscription_componentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscription_component", "SubscriptionComponentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscription_component test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscription_component test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscription_component01", "subscription_component02", "subscription_component03", "event01", "event02", "event03", "subscription01", "subscription02", "subscription03", "component01", "component02", "component03", "allocation01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_COMPONENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_COMPONENT_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_COMPONENT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add allocation_id alias for update test.
	if idmapResolved["allocation_id"] == nil {
		idmapResolved["allocation_id"] = idmapResolved["allocation01"]
	}
	// Add subscription_id alias for update test.
	if idmapResolved["subscription_id"] == nil {
		idmapResolved["subscription_id"] = idmapResolved["subscription01"]
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
