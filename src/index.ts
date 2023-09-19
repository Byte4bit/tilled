import { TilledBase, TilledConfig } from "./Base";
import { TilledPayment } from "./Payment";
import { TilledAuth } from "./Auth";
export class Tilled extends TilledBase {
    public payment: TilledPayment;
    public auth: TilledAuth;

    constructor(config: TilledConfig) {
        super(config);
        this.auth = new TilledAuth(this);
        this.auth.onLogin(config)
        this.payment = new TilledPayment(this);
    }
}

export const __Tilled = (config: TilledConfig) => {
    const c = new Tilled(config);
    const { payment } = c;
    return { payment };
};
