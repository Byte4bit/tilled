"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledSubscription = void 0;
const Validator_1 = require("./Validator");
class TilledSubscription {
    tilled;
    constructor(tilled) {
        this.tilled = tilled;
    }
    onCreateSubscription = async (data) => {
        const valid = Validator_1.Validators.ValidatorSubscriptionCreate.onValidate(data);
        if (valid !== true) {
            return valid;
        }
        const url = "/v1/subscriptions";
        return await this.tilled.onRequest({
            url,
            data,
            method: "post",
        }, {
            validateToken: true,
        });
    };
}
exports.TilledSubscription = TilledSubscription;
//# sourceMappingURL=index.js.map