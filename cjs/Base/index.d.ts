import { RequestFuntionConfig, RequestFuntionResult } from "../Request";
export interface TilledConfig {
    mode: "sandbox" | "production";
    merchant_account_id: string;
}
export declare class TilledBase {
    private config;
    private url_sandbox;
    private url_production;
    private url;
    constructor(config: TilledConfig);
    onRequest: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
}
