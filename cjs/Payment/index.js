"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledPayment = void 0;
class TilledPayment {
    tilled;
    constructor(tilled) {
        this.tilled = tilled;
    }
    onCreatePaymentMethod = async (data) => {
        const url = "/v1/payment-methods";
        return await this.tilled.onRequest({
            url,
            data,
        }, {
            validateToken: true,
        });
    };
}
exports.TilledPayment = TilledPayment;
//# sourceMappingURL=index.js.map