import { TilledBase } from "./Base";
import { TilledConfigProps } from "./Config";
import { TilledPayment } from "./Payment";
export declare class Tilled extends TilledBase {
    payment: TilledPayment;
    constructor(config: TilledConfigProps);
}
export declare const __Tilled: (config: TilledConfigProps) => {
    payment: TilledPayment;
};
