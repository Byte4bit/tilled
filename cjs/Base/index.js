"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledBase = void 0;
const Request_1 = require("../Request");
class TilledBase {
    config;
    url_sandbox = "https://sandbox-api.tilled.com";
    url_production = "https://api.tilled.com";
    url = "";
    constructor(config) {
        this.config = config;
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
    onRequest = async (config) => {
        return await (0, Request_1.Request)({
            ...config,
            url: `${this.url}${config.url}`,
            headers: {
                ...config.headers,
                // ["tilled-api-key"]:this.config.secret_key,
                ["tilled-account"]: this.config.merchant_account_id,
            }
        });
    };
}
exports.TilledBase = TilledBase;
//# sourceMappingURL=index.js.map