# ListSegment entity test

import json
import os
import time

import pytest

from maxioadvancedbilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK
from maxioadvancedbilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestListSegmentEntity:

    def test_should_create_instance(self):
        testsdk = MaxioAdvancedBillingSDK.test(None, None)
        ent = testsdk.ListSegment(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "list_segment": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = MaxioAdvancedBillingSDK.test(seed, None)
        seen = list(base.ListSegment(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from maxioadvancedbilling_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = MaxioAdvancedBillingSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.ListSegment(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _list_segment_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "list_segment." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        list_segment_ref01_ent = client.ListSegment(None)
        list_segment_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.list_segment"), "list_segment_ref01"))
        list_segment_ref01_data["component_id"] = setup["idmap"]["component01"]
        list_segment_ref01_data["price_point_id"] = setup["idmap"]["price_point01"]

        list_segment_ref01_data = helpers.to_map(runner.entity_data(list_segment_ref01_ent.create(list_segment_ref01_data, None)))
        assert list_segment_ref01_data is not None
        assert list_segment_ref01_data["id"] is not None

        # LIST
        list_segment_ref01_match = {
            "component_id": setup["idmap"]["component01"],
            "price_point_id": setup["idmap"]["price_point01"],
        }

        list_segment_ref01_list_result = list_segment_ref01_ent.list(list_segment_ref01_match, None)
        assert isinstance(list_segment_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(list_segment_ref01_list_result),
            {"id": list_segment_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        list_segment_ref01_data_up0_up = {
            "id": list_segment_ref01_data["id"],
            "component_id": setup["idmap"]["component_id"],
        }

        list_segment_ref01_markdef_up0_name = "created_at"
        list_segment_ref01_markdef_up0_value = "Mark01-list_segment_ref01_" + str(setup["now"])
        list_segment_ref01_data_up0_up[list_segment_ref01_markdef_up0_name] = list_segment_ref01_markdef_up0_value

        list_segment_ref01_resdata_up0 = helpers.to_map(runner.entity_data(list_segment_ref01_ent.update(list_segment_ref01_data_up0_up, None)))
        assert list_segment_ref01_resdata_up0 is not None
        assert list_segment_ref01_resdata_up0["id"] == list_segment_ref01_data_up0_up["id"]
        assert list_segment_ref01_resdata_up0[list_segment_ref01_markdef_up0_name] == list_segment_ref01_markdef_up0_value



def _list_segment_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/list_segment/ListSegmentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MaxioAdvancedBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["list_segment01", "list_segment02", "list_segment03", "component01", "component02", "component03", "price_point01"],
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
        "MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID": idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE": "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN": "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY": "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
    })

    idmap_resolved = helpers.to_map(
        env.get("MAXIO_ADVANCED_BILLING_TEST_LIST_SEGMENT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("component_id") is None:
        idmap_resolved["component_id"] = idmap_resolved.get("component01")

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
