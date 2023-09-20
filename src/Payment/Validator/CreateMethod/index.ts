import { TilledPaymentProps } from "../../Interface";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentCreateMethod = FenextjsValidator<
    TilledPaymentProps["onCreateMethod"]["props"]
>()
    .setName("create-payment-method")
    .isObject({});
