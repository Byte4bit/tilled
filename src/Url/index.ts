export interface TilledUrlConfig {
    mode: "sandbox" | "production";
}

export class TilledUrl {
    private url_sandbox = "https://sandbox-api.tilled.com";
    private url_production = "https://api.tilled.com";
    protected url = "";

    constructor(config: TilledUrlConfig) {
        this.url =
            config.mode == "sandbox" ? this.url_sandbox : this.url_production;
    }
}
