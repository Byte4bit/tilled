import { RequestFuntionResult } from "../../../Request";
import { onCreateProps } from "./props";
import { onCreateResult } from "./result";
export interface TilledPaymentCreateMethod {
    props: onCreateProps;
    result: onCreateResult;
    function: (data: onCreateProps) => RequestFuntionResult<onCreateResult>;
}
