import { TilledRequest } from "../Request";
import { TilledConfigProps } from "../Config";
export declare class TilledBase extends TilledRequest {
    private auth;
    constructor(config: TilledConfigProps);
    onLoadToken: () => Promise<void>;
}
