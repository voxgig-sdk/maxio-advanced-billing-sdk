import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Product, ProductLoadMatch, ProductListMatch, ProductCreateData, ProductUpdateData, ProductRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ProductEntity extends MaxioAdvancedBillingEntityBase<Product> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    load(this: any, reqmatch?: ProductLoadMatch, ctrl?: Control): Promise<ProductEntity>;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
    create(this: any, reqdata?: ProductCreateData, ctrl?: Control): Promise<ProductEntity>;
    update(this: any, reqdata?: ProductUpdateData, ctrl?: Control): Promise<ProductEntity>;
    remove(this: any, reqmatch?: ProductRemoveMatch, ctrl?: Control): Promise<ProductEntity>;
}
export { ProductEntity };
