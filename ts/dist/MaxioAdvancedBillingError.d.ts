import { Context } from './Context';
declare class MaxioAdvancedBillingError extends Error {
    isMaxioAdvancedBillingError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MaxioAdvancedBillingError };
