import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ReferralCode, ReferralCodeLoadMatch } from '../MaxioAdvancedBillingTypes';
declare class ReferralCodeEntity extends MaxioAdvancedBillingEntityBase<ReferralCode> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ReferralCodeEntity): ReferralCodeEntity;
    load(this: any, reqmatch?: ReferralCodeLoadMatch, ctrl?: Control): Promise<ReferralCodeEntity>;
}
export { ReferralCodeEntity };
