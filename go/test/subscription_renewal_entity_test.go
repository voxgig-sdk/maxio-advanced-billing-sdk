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

func TestSubscriptionRenewalEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SubscriptionRenewal(nil)
		if ent == nil {
			t.Fatal("expected non-nil SubscriptionRenewalEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"subscription_renewal": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SubscriptionRenewal(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SubscriptionRenewal(nil).Stream("list", nil, nil) {
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
		setup := subscription_renewalBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "subscription_renewal." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		subscriptionRenewalRef01Ent := client.SubscriptionRenewal(nil)
		subscriptionRenewalRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "subscription_renewal"}), "subscription_renewal_ref01"))
		subscriptionRenewalRef01Data["subscription_id"] = setup.idmap["subscription01"]

		subscriptionRenewalRef01DataResult, err := subscriptionRenewalRef01Ent.Create(subscriptionRenewalRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		subscriptionRenewalRef01Data = core.ToMapAny(entityData(subscriptionRenewalRef01DataResult))
		if subscriptionRenewalRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if subscriptionRenewalRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		subscriptionRenewalRef01Match := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionRenewalRef01ListResult, err := subscriptionRenewalRef01Ent.List(subscriptionRenewalRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionRenewalRef01List, subscriptionRenewalRef01ListOk := subscriptionRenewalRef01ListResult.([]any)
		if !subscriptionRenewalRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", subscriptionRenewalRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(subscriptionRenewalRef01List), map[string]any{"id": subscriptionRenewalRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		subscriptionRenewalRef01DataUp0Up := map[string]any{
			"id": subscriptionRenewalRef01Data["id"],
			"subscription_id": setup.idmap["subscription_id"],
		}

		subscriptionRenewalRef01ResdataUp0Result, err := subscriptionRenewalRef01Ent.Update(subscriptionRenewalRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		subscriptionRenewalRef01ResdataUp0 := core.ToMapAny(entityData(subscriptionRenewalRef01ResdataUp0Result))
		if subscriptionRenewalRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if subscriptionRenewalRef01ResdataUp0["id"] != subscriptionRenewalRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		subscriptionRenewalRef01MatchDt0 := map[string]any{
			"id": subscriptionRenewalRef01Data["id"],
		}
		subscriptionRenewalRef01DataDt0Loaded, err := subscriptionRenewalRef01Ent.Load(subscriptionRenewalRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		subscriptionRenewalRef01DataDt0LoadResult := core.ToMapAny(entityData(subscriptionRenewalRef01DataDt0Loaded))
		if subscriptionRenewalRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if subscriptionRenewalRef01DataDt0LoadResult["id"] != subscriptionRenewalRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		subscriptionRenewalRef01MatchRm0 := map[string]any{
			"id": subscriptionRenewalRef01Data["id"],
		}
		_, err = subscriptionRenewalRef01Ent.Remove(subscriptionRenewalRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		subscriptionRenewalRef01MatchRt0 := map[string]any{
			"subscription_id": setup.idmap["subscription01"],
		}

		subscriptionRenewalRef01ListRt0Result, err := subscriptionRenewalRef01Ent.List(subscriptionRenewalRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		subscriptionRenewalRef01ListRt0, subscriptionRenewalRef01ListRt0Ok := subscriptionRenewalRef01ListRt0Result.([]any)
		if !subscriptionRenewalRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", subscriptionRenewalRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(subscriptionRenewalRef01ListRt0), map[string]any{"id": subscriptionRenewalRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func subscription_renewalBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "subscription_renewal", "SubscriptionRenewalTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read subscription_renewal test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse subscription_renewal test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"subscription_renewal01", "subscription_renewal02", "subscription_renewal03", "subscription01", "subscription02", "subscription03"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
