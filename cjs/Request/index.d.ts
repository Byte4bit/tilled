import { AxiosRequestConfig, AxiosResponse } from "axios";
export type RequestFuntionConfig<D = any> = AxiosRequestConfig<D>;
export type RequestFuntionResult<R = any> = Promise<Partial<AxiosResponse<R>>>;
export type RequestFuntion<D = any, R = any> = (config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
export declare const Request: <D = any, R = any>(config: RequestFuntionConfig<D>) => RequestFuntionResult<R>;
