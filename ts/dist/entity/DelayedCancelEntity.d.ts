import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { DelayedCancel, DelayedCancelCreateData } from '../MaxioAdvancedBillingTypes';
declare class DelayedCancelEntity extends MaxioAdvancedBillingEntityBase<DelayedCancel> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: DelayedCancelEntity): DelayedCancelEntity;
    create(this: any, reqdata?: DelayedCancelCreateData, ctrl?: Control): Promise<DelayedCancelEntity>;
}
export { DelayedCancelEntity };
