import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Coupon, CouponLoadMatch, CouponListMatch, CouponCreateData, CouponUpdateData, CouponRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class CouponEntity extends MaxioAdvancedBillingEntityBase<Coupon> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CouponEntity): CouponEntity;
    load(this: any, reqmatch?: CouponLoadMatch, ctrl?: Control): Promise<CouponEntity>;
    list(this: any, reqmatch?: CouponListMatch, ctrl?: Control): Promise<CouponEntity[]>;
    create(this: any, reqdata?: CouponCreateData, ctrl?: Control): Promise<CouponEntity>;
    update(this: any, reqdata?: CouponUpdateData, ctrl?: Control): Promise<CouponEntity>;
    remove(this: any, reqmatch?: CouponRemoveMatch, ctrl?: Control): Promise<CouponEntity>;
}
export { CouponEntity };
