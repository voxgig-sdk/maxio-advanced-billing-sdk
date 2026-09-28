import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { ListSegment, ListSegmentListMatch, ListSegmentCreateData, ListSegmentUpdateData } from '../MaxioAdvancedBillingTypes';
declare class ListSegmentEntity extends MaxioAdvancedBillingEntityBase<ListSegment> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: ListSegmentEntity): ListSegmentEntity;
    list(this: any, reqmatch?: ListSegmentListMatch, ctrl?: Control): Promise<ListSegmentEntity[]>;
    create(this: any, reqdata?: ListSegmentCreateData, ctrl?: Control): Promise<ListSegmentEntity>;
    update(this: any, reqdata?: ListSegmentUpdateData, ctrl?: Control): Promise<ListSegmentEntity>;
}
export { ListSegmentEntity };
