import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Feature, FeatureListMatch, FeatureCreateData } from '../MaxioAdvancedBillingTypes';
declare class FeatureEntity extends MaxioAdvancedBillingEntityBase<Feature> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: FeatureEntity): FeatureEntity;
    list(this: any, reqmatch?: FeatureListMatch, ctrl?: Control): Promise<FeatureEntity[]>;
    create(this: any, reqdata?: FeatureCreateData, ctrl?: Control): Promise<FeatureEntity>;
}
export { FeatureEntity };
