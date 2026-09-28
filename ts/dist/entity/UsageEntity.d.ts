import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Usage, UsageListMatch } from '../MaxioAdvancedBillingTypes';
declare class UsageEntity extends MaxioAdvancedBillingEntityBase<Usage> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    list(this: any, reqmatch?: UsageListMatch, ctrl?: Control): Promise<UsageEntity[]>;
}
export { UsageEntity };
