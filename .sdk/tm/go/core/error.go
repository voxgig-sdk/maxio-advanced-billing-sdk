package core

type MaxioAdvancedBillingError struct {
	IsMaxioAdvancedBillingError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMaxioAdvancedBillingError(code string, msg string, ctx *Context) *MaxioAdvancedBillingError {
	return &MaxioAdvancedBillingError{
		IsMaxioAdvancedBillingError: true,
		Sdk:              "MaxioAdvancedBilling",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MaxioAdvancedBillingError) Error() string {
	return e.Msg
}
