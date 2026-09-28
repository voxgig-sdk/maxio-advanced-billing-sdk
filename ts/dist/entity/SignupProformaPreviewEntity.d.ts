import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SignupProformaPreview, SignupProformaPreviewCreateData } from '../MaxioAdvancedBillingTypes';
declare class SignupProformaPreviewEntity extends MaxioAdvancedBillingEntityBase<SignupProformaPreview> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SignupProformaPreviewEntity): SignupProformaPreviewEntity;
    create(this: any, reqdata?: SignupProformaPreviewCreateData, ctrl?: Control): Promise<SignupProformaPreviewEntity>;
}
export { SignupProformaPreviewEntity };
