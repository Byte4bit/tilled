import {
    onAttachCustomerProps
} from "../../Interface/AttachCustomer/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorPaymentAttachCustomer = FenextjsValidator<onAttachCustomerProps>()
    .setName("attach-customer-payment")
    .isRequired()
    .isObject({
        
    });
