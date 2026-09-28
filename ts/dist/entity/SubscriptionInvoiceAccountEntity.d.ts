import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionInvoiceAccount, SubscriptionInvoiceAccountListMatch, SubscriptionInvoiceAccountCreateData } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionInvoiceAccountEntity extends MaxioAdvancedBillingEntityBase<SubscriptionInvoiceAccount> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionInvoiceAccountEntity): SubscriptionInvoiceAccountEntity;
    list(this: any, reqmatch?: SubscriptionInvoiceAccountListMatch, ctrl?: Control): Promise<SubscriptionInvoiceAccountEntity[]>;
    create(this: any, reqdata?: SubscriptionInvoiceAccountCreateData, ctrl?: Control): Promise<SubscriptionInvoiceAccountEntity>;
}
export { SubscriptionInvoiceAccountEntity };
