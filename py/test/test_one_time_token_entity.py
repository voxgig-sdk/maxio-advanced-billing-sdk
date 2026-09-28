# OneTimeToken entity test

import json
import os
import time

import pytest

from maxioadvancedbilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK
from maxioadvancedbilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestOneTimeTokenEntity:

    def test_should_create_instance(self):
        testsdk = MaxioAdvancedBillingSDK.test(None, None)
        ent = testsdk.OneTimeToken(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _one_time_token_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "one_time_token." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MAXIO_ADVANCED_BILLING_TEST_ONE_TIME_TOKEN_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        one_time_token_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.one_time_token")))
        one_time_token_ref01_data = None
        if len(one_time_token_ref01_data_raw) > 0:
            one_time_token_ref01_data = helpers.to_map(one_time_token_ref01_data_raw[0][1])

        # LOAD
        one_time_token_ref01_ent = client.OneTimeToken(None)
        one_time_token_ref01_match_dt0 = {}
        one_time_token_ref01_data_dt0_loaded = one_time_token_ref01_ent.load(one_time_token_ref01_match_dt0, None)
        assert one_time_token_ref01_data_dt0_loaded is not None



def _one_time_token_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/one_time_token/OneTimeTokenTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MaxioAdvancedBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["one_time_token01", "one_time_token02", "one_time_token03", "chargify_token01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "MAXIO_ADVANCED_BILLING_TEST_ONE_TIME_TOKEN_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MAXIO_ADVANCED_BILLING_TEST_ONE_TIME_TOKEN_ENTID": idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE": "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN": "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY": "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
    })

    idmap_resolved = helpers.to_map(
        env.get("MAXIO_ADVANCED_BILLING_TEST_ONE_TIME_TOKEN_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("MAXIO_ADVANCED_BILLING_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("MAXIO_ADVANCED_BILLING_APIKEY"),
                "server": {
                    "site": env.get("MAXIO_ADVANCED_BILLING_SERVER_SITE"),
                },
            },
            extra or {},
        ])
        client = MaxioAdvancedBillingSDK(helpers.to_map(merged_opts))

    _live = env.get("MAXIO_ADVANCED_BILLING_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("MAXIO_ADVANCED_BILLING_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
