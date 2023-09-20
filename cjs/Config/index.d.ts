import { TilledUrl } from "../Url";
export interface TilledConfigProps {
    mode: "sandbox" | "production";
    merchant_account_id: string;
    email: string;
    password: string;
}
export declare class TilledConfig extends TilledUrl {
    protected config: TilledConfigProps;
    constructor(config: TilledConfigProps);
}
