import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Invoice, InvoiceListMatch, InvoiceCreateData, InvoiceUpdateData, InvoiceRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class InvoiceEntity extends MaxioAdvancedBillingEntityBase<Invoice> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: InvoiceEntity): InvoiceEntity;
    list(this: any, reqmatch?: InvoiceListMatch, ctrl?: Control): Promise<InvoiceEntity[]>;
    create(this: any, reqdata?: InvoiceCreateData, ctrl?: Control): Promise<InvoiceEntity>;
    update(this: any, reqdata?: InvoiceUpdateData, ctrl?: Control): Promise<InvoiceEntity>;
    remove(this: any, reqmatch?: InvoiceRemoveMatch, ctrl?: Control): Promise<InvoiceEntity>;
}
export { InvoiceEntity };
