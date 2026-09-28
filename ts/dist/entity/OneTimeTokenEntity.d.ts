import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { OneTimeToken, OneTimeTokenLoadMatch } from '../MaxioAdvancedBillingTypes';
declare class OneTimeTokenEntity extends MaxioAdvancedBillingEntityBase<OneTimeToken> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: OneTimeTokenEntity): OneTimeTokenEntity;
    load(this: any, reqmatch?: OneTimeTokenLoadMatch, ctrl?: Control): Promise<OneTimeTokenEntity>;
}
export { OneTimeTokenEntity };
