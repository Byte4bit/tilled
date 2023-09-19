export interface TilledConfig {}

export class Tilled {
    private config: TilledConfig;
    constructor(config: TilledConfig) {
        this.config = config;
    }

    public getConfig() {
        return this.config;
    }
}
