import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { CouponSubcode, CouponSubcodeUpdateData } from '../MaxioAdvancedBillingTypes';
declare class CouponSubcodeEntity extends MaxioAdvancedBillingEntityBase<CouponSubcode> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CouponSubcodeEntity): CouponSubcodeEntity;
    update(this: any, reqdata?: CouponSubcodeUpdateData, ctrl?: Control): Promise<CouponSubcodeEntity>;
}
export { CouponSubcodeEntity };
