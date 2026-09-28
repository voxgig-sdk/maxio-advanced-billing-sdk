# MaxioAdvancedBilling SDK utility: make_context
require_relative '../core/context'
module MaxioAdvancedBillingUtilities
  MakeContext = ->(ctxmap, basectx) {
    MaxioAdvancedBillingContext.new(ctxmap, basectx)
  }
end
