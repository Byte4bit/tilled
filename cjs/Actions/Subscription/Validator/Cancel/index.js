"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSubscriptionCancel = void 0;
const fenextjs_validator_1 = require("fenextjs-validator");
exports.ValidatorSubscriptionCancel = (0, fenextjs_validator_1.FenextjsValidator)()
    .setName("create-customer")
    .isRequired()
    .isObject({
    id: (0, fenextjs_validator_1.FenextjsValidator)().isString().isRequired(),
});
//# sourceMappingURL=index.js.map