import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionStatus, SubscriptionStatusCreateData, SubscriptionStatusUpdateData, SubscriptionStatusRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionStatusEntity extends MaxioAdvancedBillingEntityBase<SubscriptionStatus> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionStatusEntity): SubscriptionStatusEntity;
    create(this: any, reqdata?: SubscriptionStatusCreateData, ctrl?: Control): Promise<SubscriptionStatusEntity>;
    update(this: any, reqdata?: SubscriptionStatusUpdateData, ctrl?: Control): Promise<SubscriptionStatusEntity>;
    remove(this: any, reqmatch?: SubscriptionStatusRemoveMatch, ctrl?: Control): Promise<SubscriptionStatusEntity>;
}
export { SubscriptionStatusEntity };
