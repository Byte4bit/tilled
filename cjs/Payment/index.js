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
            method: "post"
        }, {
            validateToken: true,
        });
    };
    onCreatePaymentIntent = async (data) => {
        const url = "/v1/payment-intents";
        return await this.tilled.onRequest({
            url,
            data,
            method: "post"
        }, {
            validateToken: true,
        });
    };
}
exports.TilledPayment = TilledPayment;
//# sourceMappingURL=index.js.map