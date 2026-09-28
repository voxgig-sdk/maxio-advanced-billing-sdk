import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Prepayment, PrepaymentCreateData } from '../MaxioAdvancedBillingTypes';
declare class PrepaymentEntity extends MaxioAdvancedBillingEntityBase<Prepayment> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: PrepaymentEntity): PrepaymentEntity;
    create(this: any, reqdata?: PrepaymentCreateData, ctrl?: Control): Promise<PrepaymentEntity>;
}
export { PrepaymentEntity };
