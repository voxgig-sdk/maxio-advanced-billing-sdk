import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Offer, OfferLoadMatch, OfferListMatch, OfferCreateData, OfferUpdateData } from '../MaxioAdvancedBillingTypes';
declare class OfferEntity extends MaxioAdvancedBillingEntityBase<Offer> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: OfferEntity): OfferEntity;
    load(this: any, reqmatch?: OfferLoadMatch, ctrl?: Control): Promise<OfferEntity>;
    list(this: any, reqmatch?: OfferListMatch, ctrl?: Control): Promise<OfferEntity[]>;
    create(this: any, reqdata?: OfferCreateData, ctrl?: Control): Promise<OfferEntity>;
    update(this: any, reqdata?: OfferUpdateData, ctrl?: Control): Promise<OfferEntity>;
}
export { OfferEntity };
