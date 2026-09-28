import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { CouponUsage, CouponUsageListMatch } from '../MaxioAdvancedBillingTypes';
declare class CouponUsageEntity extends MaxioAdvancedBillingEntityBase<CouponUsage> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CouponUsageEntity): CouponUsageEntity;
    list(this: any, reqmatch?: CouponUsageListMatch, ctrl?: Control): Promise<CouponUsageEntity[]>;
}
export { CouponUsageEntity };
