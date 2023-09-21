"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorCustomerCreate = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorCustomerCreate = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-customer")
    .isRequired()
    .isObject({
    email: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
    first_name: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMaxOrEqual(255),
    last_name: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMaxOrEqual(255),
    middle_name: (0, fenextjs_validator_1.FenextjsValidator)()
        .isString()
        .isRequired()
        .isMaxOrEqual(255),
    phone: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
//# sourceMappingURL=index.js.map