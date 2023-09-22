"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledCustomer = void 0;
const Validator_1 = require("./Validator");
class TilledCustomer {
    tilled;
    constructor(tilled) {
        this.tilled = tilled;
    }
    onCreateCustomer = async (data) => {
        const valid = Validator_1.Validators.ValidatorCustomerCreate.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = "/v1/customers";
        return await this.tilled.onRequest({
            url,
            data,
            method: "post",
        }, {
            validateToken: true,
        });
    };
}
exports.TilledCustomer = TilledCustomer;
//# sourceMappingURL=index.js.map