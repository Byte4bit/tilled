import { TilledBase, TilledConfig } from "./Base";
import { TilledPayment } from "./Payment";
export class Tilled extends TilledBase {
    public payment: TilledPayment;

    constructor(config: TilledConfig) {
        super(config);
        this.payment = new TilledPayment(this);
    }
}