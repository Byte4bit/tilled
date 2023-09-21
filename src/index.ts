import { TilledBase } from "./Base";
import { TilledConfigProps } from "./Config";
import { TilledPayment } from "./Payment";
import { TilledCustomer } from "./Customer";
export class Tilled extends TilledBase {
    public payment: TilledPayment;
    public customer: TilledCustomer;

    constructor(config: TilledConfigProps) {
        super(config);
        this.customer = new TilledCustomer(this);
        this.payment = new TilledPayment(this);
    }
}

export const __Tilled = (config: TilledConfigProps) => {
    const c = new Tilled(config);
    const { payment,customer } = c;
    return { payment ,customer};
};
