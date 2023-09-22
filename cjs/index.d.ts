import { TilledBase } from "./Base";
import { TilledConfigProps } from "./Config";
import { TilledPayment } from "./Actions/Payment";
import { TilledCustomer } from "./Actions/Customer";
import { TilledSubscription } from "./Actions/Subscription";
export declare class Tilled extends TilledBase {
    payment: TilledPayment;
    customer: TilledCustomer;
    subscription: TilledSubscription;
    constructor(config: TilledConfigProps);
}
export declare const __Tilled: (config: TilledConfigProps) => {
    payment: TilledPayment;
    customer: TilledCustomer;
    subscription: TilledSubscription;
};
