import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionComponent, SubscriptionComponentLoadMatch, SubscriptionComponentListMatch, SubscriptionComponentCreateData, SubscriptionComponentUpdateData, SubscriptionComponentRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionComponentEntity extends MaxioAdvancedBillingEntityBase<SubscriptionComponent> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionComponentEntity): SubscriptionComponentEntity;
    load(this: any, reqmatch?: SubscriptionComponentLoadMatch, ctrl?: Control): Promise<SubscriptionComponentEntity>;
    list(this: any, reqmatch?: SubscriptionComponentListMatch, ctrl?: Control): Promise<SubscriptionComponentEntity[]>;
    create(this: any, reqdata?: SubscriptionComponentCreateData, ctrl?: Control): Promise<SubscriptionComponentEntity>;
    update(this: any, reqdata?: SubscriptionComponentUpdateData, ctrl?: Control): Promise<SubscriptionComponentEntity>;
    remove(this: any, reqmatch?: SubscriptionComponentRemoveMatch, ctrl?: Control): Promise<SubscriptionComponentEntity>;
}
export { SubscriptionComponentEntity };
