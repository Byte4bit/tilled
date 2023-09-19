import { TilledBase } from "../Base";
import { TilledAuthProps } from "./Interface";

export class TilledAuth {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onLogin: TilledAuthProps["onLogin"]["function"] = async (
        data: TilledAuthProps["onLogin"]["props"],
    ) => {
        const url = "/v1/auth/login";
        const result = await this.tilled.onRequest<
            TilledAuthProps["onLogin"]["props"],
            TilledAuthProps["onLogin"]["result"]
        >({
            url,
            data,
        });
        if(result?.data?.token){
            this.tilled.setToken(result?.data?.token)
        }
        return result
    };
}
