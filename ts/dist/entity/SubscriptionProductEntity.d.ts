import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionProduct, SubscriptionProductCreateData } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionProductEntity extends MaxioAdvancedBillingEntityBase<SubscriptionProduct> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionProductEntity): SubscriptionProductEntity;
    create(this: any, reqdata?: SubscriptionProductCreateData, ctrl?: Control): Promise<SubscriptionProductEntity>;
}
export { SubscriptionProductEntity };
