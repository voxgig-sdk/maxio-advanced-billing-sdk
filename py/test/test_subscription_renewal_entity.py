# SubscriptionRenewal entity test

import json
import os
import time

import pytest

from maxioadvancedbilling_sdk.utility.voxgig_struct import voxgig_struct as vs
from maxioadvancedbilling_sdk import MaxioAdvancedBillingSDK
from maxioadvancedbilling_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSubscriptionRenewalEntity:

    def test_should_create_instance(self):
        testsdk = MaxioAdvancedBillingSDK.test(None, None)
        ent = testsdk.SubscriptionRenewal(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "subscription_renewal": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = MaxioAdvancedBillingSDK.test(seed, None)
        seen = list(base.SubscriptionRenewal(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from maxioadvancedbilling_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = MaxioAdvancedBillingSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.SubscriptionRenewal(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _subscription_renewal_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "subscription_renewal." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        subscription_renewal_ref01_ent = client.SubscriptionRenewal(None)
        subscription_renewal_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.subscription_renewal"), "subscription_renewal_ref01"))
        subscription_renewal_ref01_data["subscription_id"] = setup["idmap"]["subscription01"]

        subscription_renewal_ref01_data = helpers.to_map(runner.entity_data(subscription_renewal_ref01_ent.create(subscription_renewal_ref01_data, None)))
        assert subscription_renewal_ref01_data is not None
        assert subscription_renewal_ref01_data["id"] is not None

        # LIST
        subscription_renewal_ref01_match = {
            "subscription_id": setup["idmap"]["subscription01"],
        }

        subscription_renewal_ref01_list_result = subscription_renewal_ref01_ent.list(subscription_renewal_ref01_match, None)
        assert isinstance(subscription_renewal_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(subscription_renewal_ref01_list_result),
            {"id": subscription_renewal_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        subscription_renewal_ref01_data_up0_up = {
            "id": subscription_renewal_ref01_data["id"],
            "subscription_id": setup["idmap"]["subscription_id"],
        }

        subscription_renewal_ref01_markdef_up0_name = "created_at"
        subscription_renewal_ref01_markdef_up0_value = "Mark01-subscription_renewal_ref01_" + str(setup["now"])
        subscription_renewal_ref01_data_up0_up[subscription_renewal_ref01_markdef_up0_name] = subscription_renewal_ref01_markdef_up0_value

        subscription_renewal_ref01_resdata_up0 = helpers.to_map(runner.entity_data(subscription_renewal_ref01_ent.update(subscription_renewal_ref01_data_up0_up, None)))
        assert subscription_renewal_ref01_resdata_up0 is not None
        assert subscription_renewal_ref01_resdata_up0["id"] == subscription_renewal_ref01_data_up0_up["id"]
        assert subscription_renewal_ref01_resdata_up0[subscription_renewal_ref01_markdef_up0_name] == subscription_renewal_ref01_markdef_up0_value

        # LOAD
        subscription_renewal_ref01_match_dt0 = {
            "id": subscription_renewal_ref01_data["id"],
        }
        subscription_renewal_ref01_data_dt0_loaded = subscription_renewal_ref01_ent.load(subscription_renewal_ref01_match_dt0, None)
        subscription_renewal_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(subscription_renewal_ref01_data_dt0_loaded))
        assert subscription_renewal_ref01_data_dt0_load_result is not None
        assert subscription_renewal_ref01_data_dt0_load_result["id"] == subscription_renewal_ref01_data["id"]

        # REMOVE
        subscription_renewal_ref01_match_rm0 = {
            "id": subscription_renewal_ref01_data["id"],
        }
        subscription_renewal_ref01_ent.remove(subscription_renewal_ref01_match_rm0, None)

        # LIST
        subscription_renewal_ref01_match_rt0 = {
            "subscription_id": setup["idmap"]["subscription01"],
        }

        subscription_renewal_ref01_list_rt0_result = subscription_renewal_ref01_ent.list(subscription_renewal_ref01_match_rt0, None)
        assert isinstance(subscription_renewal_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(subscription_renewal_ref01_list_rt0_result),
            {"id": subscription_renewal_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _subscription_renewal_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/subscription_renewal/SubscriptionRenewalTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = MaxioAdvancedBillingSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["subscription_renewal01", "subscription_renewal02", "subscription_renewal03", "subscription01", "subscription02", "subscription03"],
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
        "MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID": idmap,
        "MAXIO_ADVANCED_BILLING_TEST_LIVE": "FALSE",
        "MAXIO_ADVANCED_BILLING_TEST_EXPLAIN": "FALSE",
        "MAXIO_ADVANCED_BILLING_APIKEY": "",
        "MAXIO_ADVANCED_BILLING_SERVER_SITE": "subdomain",
    })

    idmap_resolved = helpers.to_map(
        env.get("MAXIO_ADVANCED_BILLING_TEST_SUBSCRIPTION_RENEWAL_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("subscription_id") is None:
        idmap_resolved["subscription_id"] = idmap_resolved.get("subscription01")

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
