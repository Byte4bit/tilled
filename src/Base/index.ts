import { TilledAuth } from "../Auth";
import { TilledConfigProps } from "../Config";

export class TilledBase extends TilledAuth {
    constructor(config: TilledConfigProps) {
        super(config);
    }
}
