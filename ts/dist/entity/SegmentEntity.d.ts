import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Segment, SegmentCreateData, SegmentUpdateData } from '../MaxioAdvancedBillingTypes';
declare class SegmentEntity extends MaxioAdvancedBillingEntityBase<Segment> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    create(this: any, reqdata?: SegmentCreateData, ctrl?: Control): Promise<SegmentEntity>;
    update(this: any, reqdata?: SegmentUpdateData, ctrl?: Control): Promise<SegmentEntity>;
}
export { SegmentEntity };
