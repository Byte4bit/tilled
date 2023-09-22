import { TilledBase } from "../Base";
import { TilledSubscriptionProps } from "./Interface";
import { Validators } from "./Validator";

export class TilledSubscription {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onCreateSubscription: TilledSubscriptionProps["onCreate"]["function"] =
        async (data: TilledSubscriptionProps["onCreate"]["props"]) => {
            const valid = Validators.ValidatorSubscriptionCreate.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/customers";
            return await this.tilled.onRequest<
                TilledSubscriptionProps["onCreate"]["props"],
                TilledSubscriptionProps["onCreate"]["result"]
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
