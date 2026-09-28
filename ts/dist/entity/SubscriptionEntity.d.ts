import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Subscription, SubscriptionLoadMatch, SubscriptionListMatch, SubscriptionCreateData, SubscriptionUpdateData, SubscriptionRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionEntity extends MaxioAdvancedBillingEntityBase<Subscription> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionEntity): SubscriptionEntity;
    load(this: any, reqmatch?: SubscriptionLoadMatch, ctrl?: Control): Promise<SubscriptionEntity>;
    list(this: any, reqmatch?: SubscriptionListMatch, ctrl?: Control): Promise<SubscriptionEntity[]>;
    create(this: any, reqdata?: SubscriptionCreateData, ctrl?: Control): Promise<SubscriptionEntity>;
    update(this: any, reqdata?: SubscriptionUpdateData, ctrl?: Control): Promise<SubscriptionEntity>;
    remove(this: any, reqmatch?: SubscriptionRemoveMatch, ctrl?: Control): Promise<SubscriptionEntity>;
}
export { SubscriptionEntity };
