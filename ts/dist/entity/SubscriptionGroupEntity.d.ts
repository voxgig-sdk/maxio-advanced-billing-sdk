import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionGroup, SubscriptionGroupListMatch, SubscriptionGroupCreateData, SubscriptionGroupUpdateData, SubscriptionGroupRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionGroupEntity extends MaxioAdvancedBillingEntityBase<SubscriptionGroup> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionGroupEntity): SubscriptionGroupEntity;
    list(this: any, reqmatch?: SubscriptionGroupListMatch, ctrl?: Control): Promise<SubscriptionGroupEntity[]>;
    create(this: any, reqdata?: SubscriptionGroupCreateData, ctrl?: Control): Promise<SubscriptionGroupEntity>;
    update(this: any, reqdata?: SubscriptionGroupUpdateData, ctrl?: Control): Promise<SubscriptionGroupEntity>;
    remove(this: any, reqmatch?: SubscriptionGroupRemoveMatch, ctrl?: Control): Promise<SubscriptionGroupEntity>;
}
export { SubscriptionGroupEntity };
