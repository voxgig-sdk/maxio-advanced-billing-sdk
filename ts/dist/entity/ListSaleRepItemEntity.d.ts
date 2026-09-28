import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ListSaleRepItem, ListSaleRepItemListMatch } from '../MaxioAdvancedBillingTypes';
declare class ListSaleRepItemEntity extends MaxioAdvancedBillingEntityBase<ListSaleRepItem> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ListSaleRepItemEntity): ListSaleRepItemEntity;
    list(this: any, reqmatch?: ListSaleRepItemListMatch, ctrl?: Control): Promise<ListSaleRepItemEntity[]>;
}
export { ListSaleRepItemEntity };
