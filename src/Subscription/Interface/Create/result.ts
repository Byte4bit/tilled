interface Metadata {
    [id: string]: any;
}

export interface onCreateResult {
    account_id: string
    billing_cycle_anchor: string
    cancel_at: string
    canceled_at: string
    created_at: string
    currency: string
    customer_id: string
    id: string
    interval_count: number
    interval_unit: string
    metadata: Metadata
    next_payment_at: string
    pause_at: string
    paused_at: string
    payment_method_id: string
    platform_fee_amount: number
    price: number
    resume_at: string
    status: string
    updated_at: string
}
