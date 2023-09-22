import { onCreateProps, } from "../../Interface/Create/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorSubscriptionCreate = FenextjsValidator<onCreateProps>()
    .setName("create-customer")
    .isRequired()
    .isObject({
        billing_cycle_anchor: FenextjsValidator().isString().isRequired(),
        currency: FenextjsValidator()
            .isString()
            .isRequired().isEqual(CurrencyConst),
            customer_id: FenextjsValidator()
            .isString()
            .isRequired(),
        middle_name: FenextjsValidator()
            .isString()
            .isRequired()
            .isMaxOrEqual(255),
        phone: FenextjsValidator().isString().isRequired(),
    });
