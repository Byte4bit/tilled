import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestFuntionConfig<D = any> = AxiosRequestConfig<D>;
export type RequestFuntionResult<R = any> = Promise<Partial<AxiosResponse<R>>>;

export type RequestFuntion<D = any, R = any> = (
    config: RequestFuntionConfig<D>,
) => RequestFuntionResult<R>;

export const Request = async <D = any, R = any>(
    config: RequestFuntionConfig<D>,
): RequestFuntionResult<R> => {
    try {
        const response = await axios({
            ...config,
        });

        return response;
    } catch (error: any) {
        return {
            status: 500,
            statusText: `${error}`,
            data: error,
        };
    }
};
