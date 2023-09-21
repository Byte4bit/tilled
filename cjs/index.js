"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__Tilled = exports.Tilled = void 0;
const Base_1 = require("./Base");
const Payment_1 = require("./Payment");
const Customer_1 = require("./Customer");
class Tilled extends Base_1.TilledBase {
    payment;
    customer;
    constructor(config) {
        super(config);
        this.customer = new Customer_1.TilledCustomer(this);
        this.payment = new Payment_1.TilledPayment(this);
    }
}
exports.Tilled = Tilled;
const __Tilled = (config) => {
    const c = new Tilled(config);
    const { payment, customer } = c;
    return { payment, customer };
};
exports.__Tilled = __Tilled;
//# sourceMappingURL=index.js.map