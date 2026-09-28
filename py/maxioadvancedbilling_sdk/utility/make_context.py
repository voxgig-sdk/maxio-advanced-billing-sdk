# MaxioAdvancedBilling SDK utility: make_context

from maxioadvancedbilling_sdk.core.context import MaxioAdvancedBillingContext


def make_context_util(ctxmap, basectx):
    return MaxioAdvancedBillingContext(ctxmap, basectx)
