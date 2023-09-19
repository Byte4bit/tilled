import { RequestFuntionResult } from "../Request";

export interface Level3 {
    duty_amount: number;
    line_items: LineItem[];
    shipping_address_country: string;
    shipping_address_zip: string;
    shipping_amount: number;
    shipping_from_zip: string;
}

export interface LineItem {
    product_code: string;
    product_description: string;
    quantity: number;
    tax_amount: number;
    unit_amount: number;
}

export interface Metadata {
    order_id: string;
    internal_customer_id: string;
}
export interface onCreateResult {
    amount: number;
    capture_method: string;
    confirm: boolean;
    currency: string;
    level3: Level3;
    metadata: Metadata;
    occurrence_type: string;
    payment_method_id: string;
    payment_method_types: string[];
    platform_fee_amount: number;
    statement_descriptor_suffix: string;
}
export interface onCreateProps {
    a: string;
}
export interface TilledPaymentProps {
    onCreate:{
        props:onCreateProps,
        result:onCreateResult
        function:(data:onCreateProps)=>RequestFuntionResult<onCreateResult>;
    }
}
