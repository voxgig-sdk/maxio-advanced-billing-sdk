import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionGroupSignup, SubscriptionGroupSignupCreateData } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionGroupSignupEntity extends MaxioAdvancedBillingEntityBase<SubscriptionGroupSignup> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionGroupSignupEntity): SubscriptionGroupSignupEntity;
    create(this: any, reqdata?: SubscriptionGroupSignupCreateData, ctrl?: Control): Promise<SubscriptionGroupSignupEntity>;
}
export { SubscriptionGroupSignupEntity };
