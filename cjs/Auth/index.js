"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledAuth = void 0;
const Request_1 = require("../Request");
class TilledAuth extends Request_1.TilledRequest {
    constructor(config) {
        super(config);
    }
    onLogin = async (data) => {
        const url = "/v1/auth/login";
        const result = await this.onRequest({
            url,
            method: "post",
            data: {
                email: data.email,
                password: data.password
            },
        });
        return result;
    };
    onLoadToken = async () => {
        const result = await this.onLogin(this.config);
        this.token = result?.data?.token;
    };
    onRequest = async (config, options) => {
        if (options?.validateToken) {
            await this?.onLoadToken();
        }
        return await (0, Request_1.Request)({
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
exports.TilledAuth = TilledAuth;
//# sourceMappingURL=index.js.map