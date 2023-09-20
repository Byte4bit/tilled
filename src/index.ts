import { TilledBase,  } from "./Base";
import { TilledConfigProps} from "./Config";
import { TilledPayment } from "./Payment";
export class Tilled extends TilledBase {
    public payment: TilledPayment;

    constructor(config: TilledConfigProps) {
        super(config);
        this.payment = new TilledPayment(this);
    }
}

export const __Tilled = (config: TilledConfigProps) => {
    const c = new Tilled(config);
    const { payment } = c;
    return { payment };
};
