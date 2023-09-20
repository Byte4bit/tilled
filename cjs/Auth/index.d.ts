import { TilledConfigProps } from "../Config";
import { RequestFuntionConfig, RequestFuntionResult, TilledRequest } from "../Request";
export interface TilledAuthRequestProps {
    validateToken?: boolean;
}
export declare class TilledAuth extends TilledRequest {
    constructor(config: TilledConfigProps);
    private onLogin;
    private onLoadToken;
    onRequest: <D = any, R = any>(config: RequestFuntionConfig<D>, options?: TilledAuthRequestProps) => RequestFuntionResult<R>;
}
