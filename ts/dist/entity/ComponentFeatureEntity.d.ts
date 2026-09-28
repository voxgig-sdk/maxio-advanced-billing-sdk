import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ComponentFeature, ComponentFeatureRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ComponentFeatureEntity extends MaxioAdvancedBillingEntityBase<ComponentFeature> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ComponentFeatureEntity): ComponentFeatureEntity;
    remove(this: any, reqmatch?: ComponentFeatureRemoveMatch, ctrl?: Control): Promise<ComponentFeatureEntity>;
}
export { ComponentFeatureEntity };
