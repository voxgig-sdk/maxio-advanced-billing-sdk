import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { FeatureCatalogItem, FeatureCatalogItemLoadMatch, FeatureCatalogItemCreateData, FeatureCatalogItemUpdateData } from '../MaxioAdvancedBillingTypes';
declare class FeatureCatalogItemEntity extends MaxioAdvancedBillingEntityBase<FeatureCatalogItem> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: FeatureCatalogItemEntity): FeatureCatalogItemEntity;
    load(this: any, reqmatch?: FeatureCatalogItemLoadMatch, ctrl?: Control): Promise<FeatureCatalogItemEntity>;
    create(this: any, reqdata?: FeatureCatalogItemCreateData, ctrl?: Control): Promise<FeatureCatalogItemEntity>;
    update(this: any, reqdata?: FeatureCatalogItemUpdateData, ctrl?: Control): Promise<FeatureCatalogItemEntity>;
}
export { FeatureCatalogItemEntity };
