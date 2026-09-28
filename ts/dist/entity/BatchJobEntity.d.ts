import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { BatchJob, BatchJobLoadMatch, BatchJobCreateData } from '../MaxioAdvancedBillingTypes';
declare class BatchJobEntity extends MaxioAdvancedBillingEntityBase<BatchJob> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: BatchJobEntity): BatchJobEntity;
    load(this: any, reqmatch?: BatchJobLoadMatch, ctrl?: Control): Promise<BatchJobEntity>;
    create(this: any, reqdata?: BatchJobCreateData, ctrl?: Control): Promise<BatchJobEntity>;
}
export { BatchJobEntity };
