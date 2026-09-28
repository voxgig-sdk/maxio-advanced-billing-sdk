import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionMrr, SubscriptionMrrListMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionMrrEntity extends MaxioAdvancedBillingEntityBase<SubscriptionMrr> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionMrrEntity): SubscriptionMrrEntity;
    list(this: any, reqmatch?: SubscriptionMrrListMatch, ctrl?: Control): Promise<SubscriptionMrrEntity[]>;
}
export { SubscriptionMrrEntity };
