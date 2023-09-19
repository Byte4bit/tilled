export interface TilledConfig {
    mode:"sandbox"|"production"
}

export class TilledBase {
    private config: TilledConfig;
    private url_sandbox = "https://sandbox-api.tilled.com"
    private url_production = "https://api.tilled.com"
    private url = ""

    constructor(config: TilledConfig) {
        this.config = config;
        this.url = config.mode == "sandbox" ? this.url_sandbox : this.url_production
    }

    public getConfig() {
        return this.config;
    }
}
