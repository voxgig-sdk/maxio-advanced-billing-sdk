import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { CustomField, CustomFieldListMatch, CustomFieldCreateData, CustomFieldUpdateData, CustomFieldRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class CustomFieldEntity extends MaxioAdvancedBillingEntityBase<CustomField> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: CustomFieldEntity): CustomFieldEntity;
    list(this: any, reqmatch?: CustomFieldListMatch, ctrl?: Control): Promise<CustomFieldEntity[]>;
    create(this: any, reqdata?: CustomFieldCreateData, ctrl?: Control): Promise<CustomFieldEntity>;
    update(this: any, reqdata?: CustomFieldUpdateData, ctrl?: Control): Promise<CustomFieldEntity>;
    remove(this: any, reqmatch?: CustomFieldRemoveMatch, ctrl?: Control): Promise<CustomFieldEntity>;
}
export { CustomFieldEntity };
