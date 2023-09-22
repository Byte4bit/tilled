"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSubscriptionCreate = void 0;
const Currency_1 = require("../../../../Const/Currency");
const fenextjs_validator_1 = require("fenextjs-validator");
const IntervalUnit_1 = require("../../../../Const/IntervalUnit");
exports.ValidatorSubscriptionCreate = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-customer")
    .isRequired()
    .isObject({
    billing_cycle_anchor: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    currency: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(Currency_1.CurrencyConst),
    customer_id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    interval_unit: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isEqual(IntervalUnit_1.IntervalUnitConst),
    payment_method_id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    price: (0, fenextjs_validator_1.FenextjsValidator)()
        .isNumber()
        .isRequired()
        .isMinOrEqual(1)
        .isMaxOrEqual(99999999),
});
//# sourceMappingURL=index.js.map