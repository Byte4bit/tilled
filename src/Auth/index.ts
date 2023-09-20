import { TilledAuthProps } from "./Interface";
import {  TilledConfigProps } from "../Config";
import { Request, RequestFuntionConfig, RequestFuntionResult, TilledRequest } from "../Request";


export interface TilledAuthRequestProps {
    validateToken?:boolean
}

export class TilledAuth extends TilledRequest {
    constructor(config: TilledConfigProps) {
        super(config);
    }
    private onLogin: TilledAuthProps["onLogin"]["function"] = async (
        data: TilledAuthProps["onLogin"]["props"],
    ) => {
        const url = "/v1/auth/login";
        const result = await this.onRequest<
            TilledAuthProps["onLogin"]["props"],
            TilledAuthProps["onLogin"]["result"]
        >({
            url,
            method:"post",
            data:{
                email:data.email,
                password:data.password
            },
        });
        return result;
    };
    private onLoadToken = async () => {
        const result = await this.onLogin(this.config);
        this.token = result?.data?.token;
    };
    public onRequest = async <D = any, R = any>(
        config: RequestFuntionConfig<D>,
        options?:TilledAuthRequestProps
    ): RequestFuntionResult<R> => {
        if(options?.validateToken){
            await this?.onLoadToken()
        }
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
}
