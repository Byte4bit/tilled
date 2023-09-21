import { TilledBase } from "../Base";
import { TilledCustomerProps } from "./Interface";
import { Validators } from "./Validator";

export class TilledCustomer {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onCreateCustomer: TilledCustomerProps["onCreate"]["function"] =
        async (data: TilledCustomerProps["onCreate"]["props"]) => {
            const valid = Validators.ValidatorCustomerCreate.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/customers";
            return await this.tilled.onRequest<
                TilledCustomerProps["onCreate"]["props"],
                TilledCustomerProps["onCreate"]["result"]
            >(
                {
                    url,
                    data,
                    method: "post",
                },
                {
                    validateToken: true,
                },
            );
        };
}
