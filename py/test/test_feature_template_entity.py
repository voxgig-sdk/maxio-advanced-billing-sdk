# FeatureTemplate entity test

import json
import os
import time

import pytest

from maxioadvancedbilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK
from maxioadvancedbilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestFeatureTemplateEntity:

    def test_should_create_instance(self):
        testsdk = MaxioAdvancedBillingSDK.test(None, None)
        ent = testsdk.FeatureTemplate(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _feature_template_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "feature_template." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        feature_template_ref01_ent = client.FeatureTemplate(None)
        feature_template_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.feature_template"), "feature_template_ref01"))

        feature_template_ref01_data = helpers.to_map(runner.entity_data(feature_template_ref01_ent.create(feature_template_ref01_data, None)))
        assert feature_template_ref01_data is not None
        assert feature_template_ref01_data["id"] is not None

        # UPDATE
        feature_template_ref01_data_up0_up = {
            "id": feature_template_ref01_data["id"],
        }

        feature_template_ref01_markdef_up0_name = "archived_at"
        feature_template_ref01_markdef_up0_value = "Mark01-feature_template_ref01_" + str(setup["now"])
        feature_template_ref01_data_up0_up[feature_template_ref01_markdef_up0_name] = feature_template_ref01_markdef_up0_value

        feature_template_ref01_resdata_up0 = helpers.to_map(runner.entity_data(feature_template_ref01_ent.update(feature_template_ref01_data_up0_up, None)))
        assert feature_template_ref01_resdata_up0 is not None
        assert feature_template_ref01_resdata_up0["id"] == feature_template_ref01_data_up0_up["id"]
        assert feature_template_ref01_resdata_up0[feature_template_ref01_markdef_up0_name] == feature_template_ref01_markdef_up0_value

        # LOAD
        feature_template_ref01_match_dt0 = {
            "id": feature_template_ref01_data["id"],
        }
        feature_template_ref01_data_dt0_loaded = feature_template_ref01_ent.load(feature_template_ref01_match_dt0, None)
        feature_template_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(feature_template_ref01_data_dt0_loaded))
        assert feature_template_ref01_data_dt0_load_result is not None
        assert feature_template_ref01_data_dt0_load_result["id"] == feature_template_ref01_data["id"]

        # REMOVE
        feature_template_ref01_match_rm0 = {
            "id": feature_template_ref01_data["id"],
        }
        feature_template_ref01_ent.remove(feature_template_ref01_match_rm0, None)



def _feature_template_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/feature_template/FeatureTemplateTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MaxioAdvancedBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["feature_template01", "feature_template02", "feature_template03"],
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
        "MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID": idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE": "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN": "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY": "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
    })

    idmap_resolved = helpers.to_map(
        env.get("MAXIO_ADVANCED_BILLING_TEST_FEATURE_TEMPLATE_ENTID"))
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
