import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestFuntionResutl<R = any> = Promise<Partial<AxiosResponse<R>>>;

export type RequestFuntion<D = any, R = any> = (
    config: AxiosRequestConfig<D>,
) => RequestFuntionResutl<R>;

export const request = async <D = any, R = any>(
    config: AxiosRequestConfig<D>,
): RequestFuntionResutl<R> => {
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
