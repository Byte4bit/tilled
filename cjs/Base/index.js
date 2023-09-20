"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledBase = void 0;
const Request_1 = require("../Request");
const Auth_1 = require("../Auth");
class TilledBase extends Request_1.TilledRequest {
    auth;
    constructor(config) {
        super(config);
        this.auth = new Auth_1.TilledAuth(config);
        this.onLoadToken();
    }
    onLoadToken = async () => {
        const result = await this.auth.onLogin(this.config);
        this.token = result?.data?.token;
    };
}
exports.TilledBase = TilledBase;
//# sourceMappingURL=index.js.map