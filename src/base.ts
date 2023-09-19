import { Request, RequestFuntionConfig, RequestFuntionResult } from "./Request";

export interface TilledConfig {
    mode: "sandbox" | "production";
}

export class TilledBase {
    private config: TilledConfig;
    private url_sandbox = "https://sandbox-api.tilled.com";
    private url_production = "https://api.tilled.com";
    private url = "";

    constructor(config: TilledConfig) {
        this.config = config;
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }

    public getConfig() {
        return this.config;
    }
    public onRequest = async <D = any, R = any>(
        config: RequestFuntionConfig<D>,
    ): RequestFuntionResult<R> => {
        return await Request<D, R>({
            ...config,
            url: `${this.url}${config.url}`,
        });
    };
}
