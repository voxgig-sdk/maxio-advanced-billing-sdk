import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionGroupInvoiceAccount, SubscriptionGroupInvoiceAccountListMatch, SubscriptionGroupInvoiceAccountCreateData } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionGroupInvoiceAccountEntity extends MaxioAdvancedBillingEntityBase<SubscriptionGroupInvoiceAccount> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionGroupInvoiceAccountEntity): SubscriptionGroupInvoiceAccountEntity;
    list(this: any, reqmatch?: SubscriptionGroupInvoiceAccountListMatch, ctrl?: Control): Promise<SubscriptionGroupInvoiceAccountEntity[]>;
    create(this: any, reqdata?: SubscriptionGroupInvoiceAccountCreateData, ctrl?: Control): Promise<SubscriptionGroupInvoiceAccountEntity>;
}
export { SubscriptionGroupInvoiceAccountEntity };
