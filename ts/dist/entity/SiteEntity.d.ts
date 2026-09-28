import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Site, SiteLoadMatch, SiteListMatch, SiteCreateData } from '../MaxioAdvancedBillingTypes';
declare class SiteEntity extends MaxioAdvancedBillingEntityBase<Site> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SiteEntity): SiteEntity;
    load(this: any, reqmatch?: SiteLoadMatch, ctrl?: Control): Promise<SiteEntity>;
    list(this: any, reqmatch?: SiteListMatch, ctrl?: Control): Promise<SiteEntity[]>;
    create(this: any, reqdata?: SiteCreateData, ctrl?: Control): Promise<SiteEntity>;
}
export { SiteEntity };
