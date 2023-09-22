import { TilledSubscriptionCreate } from "./Create";
import { TilledSubscriptionCancel } from "./Cancel";
export interface TilledSubscriptionProps {
    onCreate: TilledSubscriptionCreate;
    onCancel: TilledSubscriptionCancel;
}
