# MaxioAdvancedBilling SDK feature factory

from maxioadvancedbilling_sdk.feature.base_feature import MaxioAdvancedBillingBaseFeature
from maxioadvancedbilling_sdk.feature.debug_feature import MaxioAdvancedBillingDebugFeature
from maxioadvancedbilling_sdk.feature.idempotency_feature import MaxioAdvancedBillingIdempotencyFeature
from maxioadvancedbilling_sdk.feature.metrics_feature import MaxioAdvancedBillingMetricsFeature
from maxioadvancedbilling_sdk.feature.paging_feature import MaxioAdvancedBillingPagingFeature
from maxioadvancedbilling_sdk.feature.ratelimit_feature import MaxioAdvancedBillingRatelimitFeature
from maxioadvancedbilling_sdk.feature.retry_feature import MaxioAdvancedBillingRetryFeature
from maxioadvancedbilling_sdk.feature.test_feature import MaxioAdvancedBillingTestFeature
from maxioadvancedbilling_sdk.feature.timeout_feature import MaxioAdvancedBillingTimeoutFeature


_FEATURES = {
    "base": lambda: MaxioAdvancedBillingBaseFeature(),
    "debug": lambda: MaxioAdvancedBillingDebugFeature(),
    "idempotency": lambda: MaxioAdvancedBillingIdempotencyFeature(),
    "metrics": lambda: MaxioAdvancedBillingMetricsFeature(),
    "paging": lambda: MaxioAdvancedBillingPagingFeature(),
    "ratelimit": lambda: MaxioAdvancedBillingRatelimitFeature(),
    "retry": lambda: MaxioAdvancedBillingRetryFeature(),
    "test": lambda: MaxioAdvancedBillingTestFeature(),
    "timeout": lambda: MaxioAdvancedBillingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
