package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/maxio-advanced-billing-sdk/go"
	"github.com/voxgig-sdk/maxio-advanced-billing-sdk/go/core"
)

func TestEndpointDirect(t *testing.T) {
	t.Run("direct-list-endpoint", func(t *testing.T) {
		setup := endpointDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-endpoint", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client


		result, err := client.Direct(map[string]any{
			"path":   "endpoints.json",
			"method": "GET",
			"params": map[string]any{},
		})
		if setup.live {
			// Live-mode leniency is a model decision
			// (main.kit.test.live.strict): synthetic IDs 4xx constantly
			// against an arbitrary public API, so the default SKIPS here.
			// A project that owns its test server sets strict and FAILS.
			if err != nil {
				t.Fatalf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Fatalf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
		}
	})

}

type endpointDirectSetupResult struct {
	client *sdk.MaxioAdvancedBillingSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func endpointDirectSetup(mockres any) *endpointDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"MAXIO_ADVANCED_BILLING_TEST_ENDPOINT_ENTID": map[string]any{},
		"MAXIO_ADVANCED_BILLING_TEST_LIVE":    "FALSE",
		"MAXIO_ADVANCED_BILLING_APIKEY":       "",
		"MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
	})

	live := env["MAXIO_ADVANCED_BILLING_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
			"apikey": env["MAXIO_ADVANCED_BILLING_APIKEY"],
		"server": map[string]any{
			"site": env["MAXIO_ADVANCED_BILLING_SERVER_SITE"],
		},
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewMaxioAdvancedBillingSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["MAXIO_ADVANCED_BILLING_TEST_ENDPOINT_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &endpointDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewMaxioAdvancedBillingSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &endpointDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
