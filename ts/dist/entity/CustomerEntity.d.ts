import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Customer, CustomerLoadMatch, CustomerListMatch, CustomerCreateData, CustomerUpdateData, CustomerRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class CustomerEntity extends MaxioAdvancedBillingEntityBase<Customer> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    load(this: any, reqmatch?: CustomerLoadMatch, ctrl?: Control): Promise<CustomerEntity>;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
    create(this: any, reqdata?: CustomerCreateData, ctrl?: Control): Promise<CustomerEntity>;
    update(this: any, reqdata?: CustomerUpdateData, ctrl?: Control): Promise<CustomerEntity>;
    remove(this: any, reqmatch?: CustomerRemoveMatch, ctrl?: Control): Promise<CustomerEntity>;
}
export { CustomerEntity };
