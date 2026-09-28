import { MaxioAdvancedBillingEntityBase } from '../MaxioAdvancedBillingEntityBase';
import type { MaxioAdvancedBillingSDK } from '../MaxioAdvancedBillingSDK';
import type { Control } from '../types';
import type { Webhook, WebhookListMatch, WebhookCreateData, WebhookUpdateData } from '../MaxioAdvancedBillingTypes';
declare class WebhookEntity extends MaxioAdvancedBillingEntityBase<Webhook> {
    constructor(client: MaxioAdvancedBillingSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    list(this: any, reqmatch?: WebhookListMatch, ctrl?: Control): Promise<WebhookEntity[]>;
    create(this: any, reqdata?: WebhookCreateData, ctrl?: Control): Promise<WebhookEntity>;
    update(this: any, reqdata?: WebhookUpdateData, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
