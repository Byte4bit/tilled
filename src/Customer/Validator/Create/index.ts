import {
    onCreateProps,
} from "../../Interface/Create/props";
import { FenextjsValidator } from "fenextjs-validator";

export const ValidatorCustomerCreate = FenextjsValidator<onCreateProps>()
    .setName("create-customer")
    .isRequired()
    .isObject({
        
    });
