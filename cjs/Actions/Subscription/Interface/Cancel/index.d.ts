import { RequestFuntionResult } from "../../../../Request";
import { onCancelProps } from "./props";
import { onCancelResult } from "./result";
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
export interface TilledSubscriptionCancel {
    props: onCancelProps;
    result: onCancelResult;
    function: (data: onCancelProps) => RequestFuntionResult<onCancelResult> | ErrorFenextjs;
}
