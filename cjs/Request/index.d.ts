import { AxiosRequestConfig, AxiosResponse } from "axios";
import { TilledConfig, TilledConfigProps } from "../Config";
import { ErrorFenextjs } from "fenextjs-error";
export type RequestFuntionConfig<D = any> = AxiosRequestConfig<D>;
export type RequestFuntionResult<R = any> = Promise<Partial<AxiosResponse<R>> | ErrorFenextjs>;
export type RequestFuntion<D = any, R = any> = (config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
export declare const Request: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
export interface TilledRequestOnRequestOptions {
}
export declare class TilledRequest extends TilledConfig {
    protected token: string | undefined;
    constructor(config: TilledConfigProps);
    onRequest: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
}
