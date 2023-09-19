import {
    Request,
    RequestFuntionConfig,
    RequestFuntionResult,
} from "../Request";

export interface TilledConfig {
    mode: "sandbox" | "production";
    merchant_account_id: string;
    email: string;
    password: string;
}

export class TilledBase {
    private config: TilledConfig;
    private url_sandbox = "https://sandbox-api.tilled.com";
    private url_production = "https://api.tilled.com";
    private url = "";
    private token: string | undefined = undefined;

    constructor(config: TilledConfig) {
        this.config = config;
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }

    public onRequest = async <D = any, R = any>(
        config: RequestFuntionConfig<D>,
    ): RequestFuntionResult<R> => {
        return await Request<D, R>({
            ...config,
            url: `${this.url}${config.url}`,
            headers: {
                ...config.headers,
                ["tilled-account"]: this.config.merchant_account_id,
                ...(this.token
                    ? {
                          ["Authorization"]: `Bearer ${this.token}`,
                      }
                    : {}),
            },
        });
    };
    public setToken =  (token : string) => {
        this.token = token
    };
}
