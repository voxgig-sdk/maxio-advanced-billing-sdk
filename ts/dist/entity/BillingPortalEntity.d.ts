import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { BillingPortal, BillingPortalLoadMatch, BillingPortalCreateData, BillingPortalRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class BillingPortalEntity extends MaxioAdvancedBillingEntityBase<BillingPortal> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: BillingPortalEntity): BillingPortalEntity;
    load(this: any, reqmatch?: BillingPortalLoadMatch, ctrl?: Control): Promise<BillingPortalEntity>;
    create(this: any, reqdata?: BillingPortalCreateData, ctrl?: Control): Promise<BillingPortalEntity>;
    remove(this: any, reqmatch?: BillingPortalRemoveMatch, ctrl?: Control): Promise<BillingPortalEntity>;
}
export { BillingPortalEntity };
