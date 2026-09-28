import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ComponentPricePoint, ComponentPricePointListMatch, ComponentPricePointCreateData, ComponentPricePointUpdateData, ComponentPricePointRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ComponentPricePointEntity extends MaxioAdvancedBillingEntityBase<ComponentPricePoint> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ComponentPricePointEntity): ComponentPricePointEntity;
    list(this: any, reqmatch?: ComponentPricePointListMatch, ctrl?: Control): Promise<ComponentPricePointEntity[]>;
    create(this: any, reqdata?: ComponentPricePointCreateData, ctrl?: Control): Promise<ComponentPricePointEntity>;
    update(this: any, reqdata?: ComponentPricePointUpdateData, ctrl?: Control): Promise<ComponentPricePointEntity>;
    remove(this: any, reqmatch?: ComponentPricePointRemoveMatch, ctrl?: Control): Promise<ComponentPricePointEntity>;
}
export { ComponentPricePointEntity };
