import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Endpoint, EndpointListMatch, EndpointUpdateData } from '../MaxioAdvancedBillingTypes';
declare class EndpointEntity extends MaxioAdvancedBillingEntityBase<Endpoint> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: EndpointEntity): EndpointEntity;
    list(this: any, reqmatch?: EndpointListMatch, ctrl?: Control): Promise<EndpointEntity[]>;
    update(this: any, reqdata?: EndpointUpdateData, ctrl?: Control): Promise<EndpointEntity>;
}
export { EndpointEntity };
