import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Entitlement, EntitlementListMatch } from '../MaxioAdvancedBillingTypes';
declare class EntitlementEntity extends MaxioAdvancedBillingEntityBase<Entitlement> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: EntitlementEntity): EntitlementEntity;
    list(this: any, reqmatch?: EntitlementListMatch, ctrl?: Control): Promise<EntitlementEntity[]>;
}
export { EntitlementEntity };
