import { RequestFuntionResult } from "../../../Request";
import { onCreateProps } from "./props";
import { onCreateResult } from "./result";
export interface TilledPaymentCreateIntent {
    props: onCreateProps;
    result: onCreateResult;
    function: (data: onCreateProps) => RequestFuntionResult<onCreateResult>;
}
