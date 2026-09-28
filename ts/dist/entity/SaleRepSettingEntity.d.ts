import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SaleRepSetting, SaleRepSettingListMatch } from '../MaxioAdvancedBillingTypes';
declare class SaleRepSettingEntity extends MaxioAdvancedBillingEntityBase<SaleRepSetting> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SaleRepSettingEntity): SaleRepSettingEntity;
    list(this: any, reqmatch?: SaleRepSettingListMatch, ctrl?: Control): Promise<SaleRepSettingEntity[]>;
}
export { SaleRepSettingEntity };
