import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { SubscriptionNote, SubscriptionNoteLoadMatch, SubscriptionNoteListMatch, SubscriptionNoteCreateData, SubscriptionNoteUpdateData, SubscriptionNoteRemoveMatch } from '../MaxioAdvancedBillingTypes';
declare class SubscriptionNoteEntity extends MaxioAdvancedBillingEntityBase<SubscriptionNote> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: SubscriptionNoteEntity): SubscriptionNoteEntity;
    load(this: any, reqmatch?: SubscriptionNoteLoadMatch, ctrl?: Control): Promise<SubscriptionNoteEntity>;
    list(this: any, reqmatch?: SubscriptionNoteListMatch, ctrl?: Control): Promise<SubscriptionNoteEntity[]>;
    create(this: any, reqdata?: SubscriptionNoteCreateData, ctrl?: Control): Promise<SubscriptionNoteEntity>;
    update(this: any, reqdata?: SubscriptionNoteUpdateData, ctrl?: Control): Promise<SubscriptionNoteEntity>;
    remove(this: any, reqmatch?: SubscriptionNoteRemoveMatch, ctrl?: Control): Promise<SubscriptionNoteEntity>;
}
export { SubscriptionNoteEntity };
