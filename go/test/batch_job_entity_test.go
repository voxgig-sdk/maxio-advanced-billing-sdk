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

func TestBatchJobEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BatchJob(nil)
		if ent == nil {
			t.Fatal("expected non-nil BatchJobEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := batch_jobBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "batch_job." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		batchJobRef01Ent := client.BatchJob(nil)
		batchJobRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "batch_job"}), "batch_job_ref01"))
		batchJobRef01Data["batch_id"] = setup.idmap["batch01"]

		batchJobRef01DataResult, err := batchJobRef01Ent.Create(batchJobRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		batchJobRef01Data = core.ToMapAny(entityData(batchJobRef01DataResult))
		if batchJobRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if batchJobRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LOAD
		batchJobRef01MatchDt0 := map[string]any{
			"id": batchJobRef01Data["id"],
		}
		batchJobRef01DataDt0Loaded, err := batchJobRef01Ent.Load(batchJobRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		batchJobRef01DataDt0LoadResult := core.ToMapAny(entityData(batchJobRef01DataDt0Loaded))
		if batchJobRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if batchJobRef01DataDt0LoadResult["id"] != batchJobRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func batch_jobBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "batch_job", "BatchJobTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read batch_job test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse batch_job test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"batch_job01", "batch_job02", "batch_job03", "batch01"},
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
	entidEnvRaw := os.Getenv("MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID": idmap,
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":      "FALSE",
		"MAXIO_ADVANCED_BILLING_TEST_EXPLAIN":   "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":         "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	idmapResolved := core.ToMapAny(env["MAXIO_ADVANCED_BILLING_TEST_BATCH_JOB_ENTID"])
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
