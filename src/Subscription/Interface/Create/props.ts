export interface Metadata {
    [id: string]: any;
}

export interface onCreateProps {
    billing_cycle_anchor: string
    cancel_at: string
    currency: string
    customer_id: string
    interval_count: number
    interval_unit: string
    metadata: Metadata
    payment_method_id: string
    platform_fee_amount: number
    price: number
}
