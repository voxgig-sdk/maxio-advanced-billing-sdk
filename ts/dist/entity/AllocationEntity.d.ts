import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Allocation, AllocationListMatch, AllocationCreateData } from '../MaxioAdvancedBillingTypes';
declare class AllocationEntity extends MaxioAdvancedBillingEntityBase<Allocation> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: AllocationEntity): AllocationEntity;
    list(this: any, reqmatch?: AllocationListMatch, ctrl?: Control): Promise<AllocationEntity[]>;
    create(this: any, reqdata?: AllocationCreateData, ctrl?: Control): Promise<AllocationEntity>;
}
export { AllocationEntity };
