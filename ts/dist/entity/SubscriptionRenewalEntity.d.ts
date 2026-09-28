import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionRenewal, SubscriptionRenewalLoadMatch, SubscriptionRenewalListMatch, SubscriptionRenewalCreateData, SubscriptionRenewalUpdateData, SubscriptionRenewalRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionRenewalEntity extends MaxioAdvancedBillingEntityBase<SubscriptionRenewal> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionRenewalEntity): SubscriptionRenewalEntity;
    load(this: any, reqmatch?: SubscriptionRenewalLoadMatch, ctrl?: Control): Promise<SubscriptionRenewalEntity>;
    list(this: any, reqmatch?: SubscriptionRenewalListMatch, ctrl?: Control): Promise<SubscriptionRenewalEntity[]>;
    create(this: any, reqdata?: SubscriptionRenewalCreateData, ctrl?: Control): Promise<SubscriptionRenewalEntity>;
    update(this: any, reqdata?: SubscriptionRenewalUpdateData, ctrl?: Control): Promise<SubscriptionRenewalEntity>;
    remove(this: any, reqmatch?: SubscriptionRenewalRemoveMatch, ctrl?: Control): Promise<SubscriptionRenewalEntity>;
}
export { SubscriptionRenewalEntity };
