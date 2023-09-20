export interface TilledUrlConfig {
    mode: "sandbox" | "production";
}
export declare class TilledUrl {
    private url_sandbox;
    private url_production;
    protected url: string;
    constructor(config: TilledUrlConfig);
}
