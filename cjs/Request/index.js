"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const Request = async (config) => {
    try {
        const response = await (0, axios_1.default)({
            ...config,
        });
        return response;
    }
    catch (error) {
        return {
            status: 500,
            statusText: `${error}`,
            data: error,
        };
    }
};
exports.Request = Request;
//# sourceMappingURL=index.js.map