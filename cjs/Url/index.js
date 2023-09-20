"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledUrl = void 0;
class TilledUrl {
    url_sandbox = "https://sandbox-api.tilled.com";
    url_production = "https://api.tilled.com";
    url = "";
    constructor(config) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
exports.TilledUrl = TilledUrl;
//# sourceMappingURL=index.js.map