import { TilledBase } from "../Base";
import { TilledPaymentProps } from "./Interface";
export declare class TilledPayment {
    private tilled;
    constructor(tilled: TilledBase);
    onCreatePaymentMethod: TilledPaymentProps["onCreate"]["function"];
}
