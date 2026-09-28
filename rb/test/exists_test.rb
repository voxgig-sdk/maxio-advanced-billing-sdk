# MaxioAdvancedBilling SDK exists test

require "minitest/autorun"
require_relative "../MaxioAdvancedBilling_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MaxioAdvancedBillingSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
