"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledPayment = void 0;
class TilledPayment {
    tilled;
    constructor(tilled) {
        this.tilled = tilled;
    }
    onCreate = async (data) => {
        await this.tilled.onLoadToken();
        const url = "/v1/payment-methods";
        return await this.tilled.onRequest({
            url,
            data,
        });
    };
}
exports.TilledPayment = TilledPayment;
//# sourceMappingURL=index.js.map