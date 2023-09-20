import { TilledPaymentCreateMethod } from "./CreateMethods";
import { TilledPaymentCreateIntent } from "./CreateIntent";
export interface TilledPaymentProps {
    onCreateMethod: TilledPaymentCreateMethod;
    onCreateIntent: TilledPaymentCreateIntent;
}
