# MaxioAdvancedBilling SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MaxioAdvancedBillingFeatures
  def self.make_feature(name)
    case name
    when "base"
      MaxioAdvancedBillingBaseFeature.new
    when "debug"
      MaxioAdvancedBillingDebugFeature.new
    when "idempotency"
      MaxioAdvancedBillingIdempotencyFeature.new
    when "metrics"
      MaxioAdvancedBillingMetricsFeature.new
    when "paging"
      MaxioAdvancedBillingPagingFeature.new
    when "ratelimit"
      MaxioAdvancedBillingRatelimitFeature.new
    when "retry"
      MaxioAdvancedBillingRetryFeature.new
    when "test"
      MaxioAdvancedBillingTestFeature.new
    when "timeout"
      MaxioAdvancedBillingTimeoutFeature.new
    else
      MaxioAdvancedBillingBaseFeature.new
    end
  end
end
