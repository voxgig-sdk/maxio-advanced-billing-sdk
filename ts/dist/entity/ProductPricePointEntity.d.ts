import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ProductPricePoint, ProductPricePointLoadMatch, ProductPricePointListMatch, ProductPricePointCreateData, ProductPricePointUpdateData, ProductPricePointRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ProductPricePointEntity extends MaxioAdvancedBillingEntityBase<ProductPricePoint> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ProductPricePointEntity): ProductPricePointEntity;
    load(this: any, reqmatch?: ProductPricePointLoadMatch, ctrl?: Control): Promise<ProductPricePointEntity>;
    list(this: any, reqmatch?: ProductPricePointListMatch, ctrl?: Control): Promise<ProductPricePointEntity[]>;
    create(this: any, reqdata?: ProductPricePointCreateData, ctrl?: Control): Promise<ProductPricePointEntity>;
    update(this: any, reqdata?: ProductPricePointUpdateData, ctrl?: Control): Promise<ProductPricePointEntity>;
    remove(this: any, reqmatch?: ProductPricePointRemoveMatch, ctrl?: Control): Promise<ProductPricePointEntity>;
}
export { ProductPricePointEntity };
