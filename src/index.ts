import { TilledBase, TilledConfig } from "./Base";
import { TilledPayment } from "./Payment";
export class Tilled extends TilledBase {
    public payment: TilledPayment;

    constructor(config: TilledConfig) {
        super(config);
        this.payment = new TilledPayment(this);
    }
}

export const __Tilled = (config: TilledConfig) => {
    const c = new Tilled(config);
    const { payment } = c;
    return { payment };
};
