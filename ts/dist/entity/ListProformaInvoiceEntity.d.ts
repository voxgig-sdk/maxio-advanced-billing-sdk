import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ListProformaInvoice, ListProformaInvoiceListMatch } from '../MaxioAdvancedBillingTypes';
declare class ListProformaInvoiceEntity extends MaxioAdvancedBillingEntityBase<ListProformaInvoice> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ListProformaInvoiceEntity): ListProformaInvoiceEntity;
    list(this: any, reqmatch?: ListProformaInvoiceListMatch, ctrl?: Control): Promise<ListProformaInvoiceEntity[]>;
}
export { ListProformaInvoiceEntity };
