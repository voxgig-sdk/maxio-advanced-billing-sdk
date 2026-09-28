import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ReasonCode, ReasonCodeLoadMatch, ReasonCodeListMatch, ReasonCodeCreateData, ReasonCodeUpdateData, ReasonCodeRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ReasonCodeEntity extends MaxioAdvancedBillingEntityBase<ReasonCode> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ReasonCodeEntity): ReasonCodeEntity;
    load(this: any, reqmatch?: ReasonCodeLoadMatch, ctrl?: Control): Promise<ReasonCodeEntity>;
    list(this: any, reqmatch?: ReasonCodeListMatch, ctrl?: Control): Promise<ReasonCodeEntity[]>;
    create(this: any, reqdata?: ReasonCodeCreateData, ctrl?: Control): Promise<ReasonCodeEntity>;
    update(this: any, reqdata?: ReasonCodeUpdateData, ctrl?: Control): Promise<ReasonCodeEntity>;
    remove(this: any, reqmatch?: ReasonCodeRemoveMatch, ctrl?: Control): Promise<ReasonCodeEntity>;
}
export { ReasonCodeEntity };
