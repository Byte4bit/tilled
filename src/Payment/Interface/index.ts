import { TilledPaymentCreateMethod } from "./CreateMethods";
import { TilledPaymentCreateIntent } from "./CreateIntent";
import { TilledPaymentAttachCustomer } from "./AttachCustomer";
export interface TilledPaymentProps {
    onCreateMethod: TilledPaymentCreateMethod;
    onCreateIntent: TilledPaymentCreateIntent;
    onAttachCustomer: TilledPaymentAttachCustomer;
}
