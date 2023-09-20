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
}
exports.TilledAuth = TilledAuth;
//# sourceMappingURL=index.js.map