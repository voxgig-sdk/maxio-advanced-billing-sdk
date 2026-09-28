import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ProformaInvoice, ProformaInvoiceListMatch, ProformaInvoiceCreateData } from '../MaxioAdvancedBillingTypes';
declare class ProformaInvoiceEntity extends MaxioAdvancedBillingEntityBase<ProformaInvoice> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ProformaInvoiceEntity): ProformaInvoiceEntity;
    list(this: any, reqmatch?: ProformaInvoiceListMatch, ctrl?: Control): Promise<ProformaInvoiceEntity[]>;
    create(this: any, reqdata?: ProformaInvoiceCreateData, ctrl?: Control): Promise<ProformaInvoiceEntity>;
}
export { ProformaInvoiceEntity };
