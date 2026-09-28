import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { FeatureTemplate, FeatureTemplateLoadMatch, FeatureTemplateCreateData, FeatureTemplateUpdateData, FeatureTemplateRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class FeatureTemplateEntity extends MaxioAdvancedBillingEntityBase<FeatureTemplate> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: FeatureTemplateEntity): FeatureTemplateEntity;
    load(this: any, reqmatch?: FeatureTemplateLoadMatch, ctrl?: Control): Promise<FeatureTemplateEntity>;
    create(this: any, reqdata?: FeatureTemplateCreateData, ctrl?: Control): Promise<FeatureTemplateEntity>;
    update(this: any, reqdata?: FeatureTemplateUpdateData, ctrl?: Control): Promise<FeatureTemplateEntity>;
    remove(this: any, reqmatch?: FeatureTemplateRemoveMatch, ctrl?: Control): Promise<FeatureTemplateEntity>;
}
export { FeatureTemplateEntity };
