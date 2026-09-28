import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SalesCommission, SalesCommissionListMatch } from '../MaxioAdvancedBillingTypes';
declare class SalesCommissionEntity extends MaxioAdvancedBillingEntityBase<SalesCommission> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SalesCommissionEntity): SalesCommissionEntity;
    list(this: any, reqmatch?: SalesCommissionListMatch, ctrl?: Control): Promise<SalesCommissionEntity[]>;
}
export { SalesCommissionEntity };
