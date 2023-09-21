import { TilledBase } from "../Base";
import { TilledCustomerProps } from "./Interface";
export declare class TilledCustomer {
    private tilled;
    constructor(tilled: TilledBase);
    onCreateCustomer: TilledCustomerProps["onCreate"]["function"];
}
