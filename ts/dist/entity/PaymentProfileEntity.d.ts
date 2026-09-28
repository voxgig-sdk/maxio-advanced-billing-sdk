import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { PaymentProfile, PaymentProfileLoadMatch, PaymentProfileListMatch, PaymentProfileCreateData, PaymentProfileUpdateData, PaymentProfileRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class PaymentProfileEntity extends MaxioAdvancedBillingEntityBase<PaymentProfile> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: PaymentProfileEntity): PaymentProfileEntity;
    load(this: any, reqmatch?: PaymentProfileLoadMatch, ctrl?: Control): Promise<PaymentProfileEntity>;
    list(this: any, reqmatch?: PaymentProfileListMatch, ctrl?: Control): Promise<PaymentProfileEntity[]>;
    create(this: any, reqdata?: PaymentProfileCreateData, ctrl?: Control): Promise<PaymentProfileEntity>;
    update(this: any, reqdata?: PaymentProfileUpdateData, ctrl?: Control): Promise<PaymentProfileEntity>;
    remove(this: any, reqmatch?: PaymentProfileRemoveMatch, ctrl?: Control): Promise<PaymentProfileEntity>;
}
export { PaymentProfileEntity };
