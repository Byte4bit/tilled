import { TilledBase } from "../../Base";
import { TilledSubscriptionProps } from "./Interface";
export declare class TilledSubscription {
    private tilled;
    constructor(tilled: TilledBase);
    onCreateSubscription: TilledSubscriptionProps["onCreate"]["function"];
}
