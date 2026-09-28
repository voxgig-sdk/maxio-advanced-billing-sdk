import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Component, ComponentLoadMatch, ComponentListMatch, ComponentCreateData, ComponentUpdateData, ComponentRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class ComponentEntity extends MaxioAdvancedBillingEntityBase<Component> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ComponentEntity): ComponentEntity;
    load(this: any, reqmatch?: ComponentLoadMatch, ctrl?: Control): Promise<ComponentEntity>;
    list(this: any, reqmatch?: ComponentListMatch, ctrl?: Control): Promise<ComponentEntity[]>;
    create(this: any, reqdata?: ComponentCreateData, ctrl?: Control): Promise<ComponentEntity>;
    update(this: any, reqdata?: ComponentUpdateData, ctrl?: Control): Promise<ComponentEntity>;
    remove(this: any, reqmatch?: ComponentRemoveMatch, ctrl?: Control): Promise<ComponentEntity>;
}
export { ComponentEntity };
