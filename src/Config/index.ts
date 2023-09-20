

import { TilledUrl } from "../Url";
export interface TilledConfigProps {
    mode: "sandbox" | "production";
    merchant_account_id: string;
    email: string;
    password: string;
}
export class TilledConfig extends TilledUrl{
    protected config: TilledConfigProps;

    constructor(config: TilledConfigProps) {
        super(config)
        this.config = config;
    }
}
