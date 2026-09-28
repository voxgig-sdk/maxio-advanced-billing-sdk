import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { AccountBalance, AccountBalanceLoadMatch } from '../MaxioAdvancedBillingTypes';
declare class AccountBalanceEntity extends MaxioAdvancedBillingEntityBase<AccountBalance> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: AccountBalanceEntity): AccountBalanceEntity;
    load(this: any, reqmatch?: AccountBalanceLoadMatch, ctrl?: Control): Promise<AccountBalanceEntity>;
}
export { AccountBalanceEntity };
