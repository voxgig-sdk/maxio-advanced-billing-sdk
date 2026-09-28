import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ProductFamily, ProductFamilyLoadMatch, ProductFamilyListMatch, ProductFamilyCreateData } from '../MaxioAdvancedBillingTypes';
declare class ProductFamilyEntity extends MaxioAdvancedBillingEntityBase<ProductFamily> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ProductFamilyEntity): ProductFamilyEntity;
    load(this: any, reqmatch?: ProductFamilyLoadMatch, ctrl?: Control): Promise<ProductFamilyEntity>;
    list(this: any, reqmatch?: ProductFamilyListMatch, ctrl?: Control): Promise<ProductFamilyEntity[]>;
    create(this: any, reqdata?: ProductFamilyCreateData, ctrl?: Control): Promise<ProductFamilyEntity>;
}
export { ProductFamilyEntity };
