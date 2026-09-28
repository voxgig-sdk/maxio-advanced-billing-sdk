import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionGroupStatus, SubscriptionGroupStatusCreateData, SubscriptionGroupStatusRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionGroupStatusEntity extends MaxioAdvancedBillingEntityBase<SubscriptionGroupStatus> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionGroupStatusEntity): SubscriptionGroupStatusEntity;
    create(this: any, reqdata?: SubscriptionGroupStatusCreateData, ctrl?: Control): Promise<SubscriptionGroupStatusEntity>;
    remove(this: any, reqmatch?: SubscriptionGroupStatusRemoveMatch, ctrl?: Control): Promise<SubscriptionGroupStatusEntity>;
}
export { SubscriptionGroupStatusEntity };
