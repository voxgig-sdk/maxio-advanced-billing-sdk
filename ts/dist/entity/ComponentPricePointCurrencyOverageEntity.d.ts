import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ComponentPricePointCurrencyOverage, ComponentPricePointCurrencyOverageLoadMatch } from '../MaxioAdvancedBillingTypes';
declare class ComponentPricePointCurrencyOverageEntity extends MaxioAdvancedBillingEntityBase<ComponentPricePointCurrencyOverage> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ComponentPricePointCurrencyOverageEntity): ComponentPricePointCurrencyOverageEntity;
    load(this: any, reqmatch?: ComponentPricePointCurrencyOverageLoadMatch, ctrl?: Control): Promise<ComponentPricePointCurrencyOverageEntity>;
}
export { ComponentPricePointCurrencyOverageEntity };
