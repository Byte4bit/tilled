import { TilledBase } from "../../Base";
import { TilledPaymentProps } from "./Interface";
export declare class TilledPayment {
    private tilled;
    constructor(tilled: TilledBase);
    onCreatePaymentMethod: TilledPaymentProps["onCreateMethod"]["function"];
    onCreatePaymentIntent: TilledPaymentProps["onCreateIntent"]["function"];
    onAttachCustomerPaymentMethod: TilledPaymentProps["onAttachCustomer"]["function"];
}
