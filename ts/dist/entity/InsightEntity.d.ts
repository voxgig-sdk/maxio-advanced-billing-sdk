import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Insight, InsightLoadMatch } from '../MaxioAdvancedBillingTypes';
declare class InsightEntity extends MaxioAdvancedBillingEntityBase<Insight> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: InsightEntity): InsightEntity;
    load(this: any, reqmatch?: InsightLoadMatch, ctrl?: Control): Promise<InsightEntity>;
}
export { InsightEntity };
