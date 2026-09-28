"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxioAdvancedBillingError = void 0;
class MaxioAdvancedBillingError extends Error {
    isMaxioAdvancedBillingError = true;
    sdk = 'MaxioAdvancedBilling';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MaxioAdvancedBillingError = MaxioAdvancedBillingError;
//# sourceMappingURL=MaxioAdvancedBillingError.js.map