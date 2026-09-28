import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { CouponCurrency, CouponCurrencyUpdateData } from '../MaxioAdvancedBillingTypes';
declare class CouponCurrencyEntity extends MaxioAdvancedBillingEntityBase<CouponCurrency> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CouponCurrencyEntity): CouponCurrencyEntity;
    update(this: any, reqdata?: CouponCurrencyUpdateData, ctrl?: Control): Promise<CouponCurrencyEntity>;
}
export { CouponCurrencyEntity };
