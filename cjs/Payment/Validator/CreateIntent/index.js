"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorPaymentCreateIntent = void 0;
const props_1 = require("../../Interface/CreateIntent/props");
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorPaymentCreateIntent = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-payment-intent")
    .isObject({
    amount: (0, fenextjs_validator_1.FenextjsValidator)()
        .isNumber()
        .isRequired()
        .isMinOrEqual(1)
        .isMaxOrEqual(99999999),
    currency: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(props_1.CurrencyConst),
    payment_method_types: (0, fenextjs_validator_1.FenextjsValidator)()
        .isArray()
        .isMaxOrEqual(1)
        .isRequired(),
    // .isEqual(Payment_method_const),
    payment_method_id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
//# sourceMappingURL=index.js.map