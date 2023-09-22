export declare const StatusConst: readonly ["active", "canceled", "past_due", "paused", "pending"];
export declare const Status: ("pending" | "canceled" | "active" | "past_due" | "paused")[];
export type StatusType = (typeof StatusConst)[number];
