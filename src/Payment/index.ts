import { TilledBase } from "../Base";
import { TilledPaymentProps } from "./Interface";

export class TilledPayment {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onCreatePaymentMethod: TilledPaymentProps["onCreateMethod"]["function"] = async (
        data: TilledPaymentProps["onCreateMethod"]["props"],
    ) => {
        const url = "/v1/payment-methods";
        return await this.tilled.onRequest<
            TilledPaymentProps["onCreateMethod"]["props"],
            TilledPaymentProps["onCreateMethod"]["result"]
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

    public onCreatePaymentIntent: TilledPaymentProps["onCreateIntent"]["function"] = async (
        data: TilledPaymentProps["onCreateIntent"]["props"],
    ) => {
        const url = "/v1/payment-intents";
        return await this.tilled.onRequest<
            TilledPaymentProps["onCreateIntent"]["props"],
            TilledPaymentProps["onCreateIntent"]["result"]
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
