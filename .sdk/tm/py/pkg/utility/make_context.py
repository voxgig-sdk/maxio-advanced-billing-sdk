# MaxioAdvancedBilling SDK utility: make_context

from projectname_sdk.core.context import MaxioAdvancedBillingContext


def make_context_util(ctxmap, basectx):
    return MaxioAdvancedBillingContext(ctxmap, basectx)
