import { TilledAuthProps } from "./Interface";
import { TilledConfigProps } from "../Config";
import { TilledRequest } from "../Request";
export declare class TilledAuth extends TilledRequest {
    constructor(config: TilledConfigProps);
    onLogin: TilledAuthProps["onLogin"]["function"];
}
