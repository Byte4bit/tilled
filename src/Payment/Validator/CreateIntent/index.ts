import { TilledPaymentProps } from "../../Interface";
import {FenextjsValidator} from 'fenextjs-validator'


export const ValidatorPaymentCreateIntent  = FenextjsValidator<
TilledPaymentProps["onCreateIntent"]["props"]
>().setName("create-payment-intent").isObject({
    
})