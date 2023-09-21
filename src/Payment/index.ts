import { TilledBase } from "../Base";
import { TilledPaymentProps } from "./Interface";
import { Validators } from "./Validator";

export class TilledPayment {
    private tilled: TilledBase;
    constructor(tilled: TilledBase) {
        this.tilled = tilled;
    }

    public onCreatePaymentMethod: TilledPaymentProps["onCreateMethod"]["function"] =
        async (data: TilledPaymentProps["onCreateMethod"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateMethod.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-methods";
            return await this.tilled.onRequest<
                TilledPaymentProps["onCreateMethod"]["props"],
                TilledPaymentProps["onCreateMethod"]["result"]
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

    public onCreatePaymentIntent: TilledPaymentProps["onCreateIntent"]["function"] =
        async (data: TilledPaymentProps["onCreateIntent"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentCreateIntent.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = "/v1/payment-intents";
            return await this.tilled.onRequest<
                TilledPaymentProps["onCreateIntent"]["props"],
                TilledPaymentProps["onCreateIntent"]["result"]
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

    public onAttachCustomerPaymentMethod: TilledPaymentProps["onAttachCustomer"]["function"] =
        async (data: TilledPaymentProps["onAttachCustomer"]["props"]) => {
            const valid =
                Validators.ValidatorPaymentAttachCustomer.onValidate(data);
            if (valid !== true) {
                return valid;
            }
            const url = `/v1/payment-methods/${data.id}/attach`;
            return await this.tilled.onRequest<
                TilledPaymentProps["onAttachCustomer"]["props"],
                TilledPaymentProps["onAttachCustomer"]["result"]
            >(
                {
                    url,
                    data,
                    method: "put",
                },
                {
                    validateToken: true,
                },
            );
        };
}
