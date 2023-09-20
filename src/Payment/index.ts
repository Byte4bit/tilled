import { TilledBase } from "../Base";
import { TilledPaymentProps } from "./Interface";

export class TilledPayment {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onCreate: TilledPaymentProps["onCreate"]["function"] = async (
        data: TilledPaymentProps["onCreate"]["props"],
    ) => {
        const url = "/v1/payment-methods";
        return await this.tilled.onRequest<
            TilledPaymentProps["onCreate"]["props"],
            TilledPaymentProps["onCreate"]["result"]
        >(
            {
                url,
                data,
            },
            {
                validateToken: true,
            },
        );
    };
}
