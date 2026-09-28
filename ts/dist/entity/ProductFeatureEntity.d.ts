import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ProductFeature, ProductFeatureRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ProductFeatureEntity extends MaxioAdvancedBillingEntityBase<ProductFeature> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ProductFeatureEntity): ProductFeatureEntity;
    remove(this: any, reqmatch?: ProductFeatureRemoveMatch, ctrl?: Control): Promise<ProductFeatureEntity>;
}
export { ProductFeatureEntity };
