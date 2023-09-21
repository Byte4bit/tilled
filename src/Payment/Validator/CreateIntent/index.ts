import {
    onCreateProps,
    CurrencyConst,
    Payment_method_const,
    Capture_method_const,
} from "../../Interface/CreateIntent/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateIntent = FenextjsValidator<onCreateProps>()
    .setName("create-payment-intent")
    .isObject({
        amount: FenextjsValidator()
            .isNumber()
            .isRequired()
            .isMinOrEqual(1)
            .isMaxOrEqual(99999999),
        currency: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(CurrencyConst),
        payment_method_types: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(Payment_method_const),
        capture_method: FenextjsValidator()
            .isString()
            .isRequired()
            .isEqual(Capture_method_const),
        payment_method_id: FenextjsValidator().isString().isRequired(),
    });
