import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { EventsBasedBillingSegment, EventsBasedBillingSegmentRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class EventsBasedBillingSegmentEntity extends MaxioAdvancedBillingEntityBase<EventsBasedBillingSegment> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: EventsBasedBillingSegmentEntity): EventsBasedBillingSegmentEntity;
    remove(this: any, reqmatch?: EventsBasedBillingSegmentRemoveMatch, ctrl?: Control): Promise<EventsBasedBillingSegmentEntity>;
}
export { EventsBasedBillingSegmentEntity };
