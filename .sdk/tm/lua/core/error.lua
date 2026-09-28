-- MaxioAdvancedBilling SDK error

local MaxioAdvancedBillingError = {}
MaxioAdvancedBillingError.__index = MaxioAdvancedBillingError


function MaxioAdvancedBillingError.new(code, msg, ctx)
  local self = setmetatable({}, MaxioAdvancedBillingError)
  self.is_sdk_error = true
  self.sdk = "MaxioAdvancedBilling"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MaxioAdvancedBillingError:error()
  return self.msg
end


function MaxioAdvancedBillingError:__tostring()
  return self.msg
end


return MaxioAdvancedBillingError
