"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledRequest = exports.Request = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const Config_1 = require("../Config");
const fenextjs_error_1 = require("fenextjs-error");
const Request = async (config) => {
    try {
        const response = await (0, axios_1.default)({
            ...config,
        });
        return response;
    }
    catch (error) {
        return new fenextjs_error_1.ErrorFenextjs({
            data: error?.response?.data ?? error,
            message: `${error?.response?.data?.message ??
                error?.response?.message ??
                error?.message ??
                error}`,
        });
    }
};
exports.Request = Request;
class TilledRequest extends Config_1.TilledConfig {
    token = undefined;
    constructor(config) {
        super(config);
    }
    onRequest = async (config) => {
        return await (0, exports.Request)({
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
exports.TilledRequest = TilledRequest;
//# sourceMappingURL=index.js.map