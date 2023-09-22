import { TilledBase } from "./Base";
import { TilledConfigProps } from "./Config";
import { TilledPayment } from "./Payment";
import { TilledCustomer } from "./Customer";
import { TilledSubscription } from "./Subscription";
export class Tilled extends TilledBase {
    public payment: TilledPayment;
    public customer: TilledCustomer;
    public subscription: TilledSubscription;

    constructor(config: TilledConfigProps) {
        super(config);
        this.customer = new TilledCustomer(this);
        this.payment = new TilledPayment(this);
        this.subscription = new TilledSubscription(this);
    }
}

export const __Tilled = (config: TilledConfigProps) => {
    const c = new Tilled(config);
    const { payment, customer, subscription } = c;
    return { payment, customer, subscription };
};
