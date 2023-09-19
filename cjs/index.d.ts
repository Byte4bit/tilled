import { TilledBase, TilledConfig } from "./Base";
import { TilledPayment } from "./Payment";
export declare class Tilled extends TilledBase {
    payment: TilledPayment;
    constructor(config: TilledConfig);
}
export declare const __Tilled: (config: TilledConfig) => {
    payment: TilledPayment;
};
