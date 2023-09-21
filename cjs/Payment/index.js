"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledPayment = void 0;
const Validator_1 = require("./Validator");
class TilledPayment {
    tilled;
    constructor(tilled) {
        this.tilled = tilled;
    }
    onCreatePaymentMethod = async (data) => {
        const valid = Validator_1.Validators.ValidatorPaymentCreateMethod.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = "/v1/payment-methods";
        return await this.tilled.onRequest({
            url,
            data,
            method: "post",
        }, {
            validateToken: true,
        });
    };
    onCreatePaymentIntent = async (data) => {
        const valid = Validator_1.Validators.ValidatorPaymentCreateIntent.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = "/v1/payment-intents";
        return await this.tilled.onRequest({
            url,
            data,
            method: "post",
        }, {
            validateToken: true,
        });
    };
    onAttachCustomerPaymentMethod = async (data) => {
        const valid = Validator_1.Validators.ValidatorPaymentAttachCustomer.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = `/v1/payment-methods/${data.id}/attach`;
        return await this.tilled.onRequest({
            url,
            data,
            method: "put",
        }, {
            validateToken: true,
        });
    };
}
exports.TilledPayment = TilledPayment;
//# sourceMappingURL=index.js.map