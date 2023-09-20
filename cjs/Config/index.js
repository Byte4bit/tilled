"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TilledConfig = void 0;
const Url_1 = require("../Url");
class TilledConfig extends Url_1.TilledUrl {
    config;
    constructor(config) {
        super(config);
        this.config = config;
    }
}
exports.TilledConfig = TilledConfig;
//# sourceMappingURL=index.js.map