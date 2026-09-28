-- MaxioAdvancedBilling SDK exists test

local sdk = require("maxio-advanced-billing_sdk")

describe("MaxioAdvancedBillingSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
