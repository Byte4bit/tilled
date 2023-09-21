interface Level3 {
    duty_amount: number;
    line_items: LineItem[];
    shipping_address_country: string;
    shipping_address_zip: string;
    shipping_amount: number;
    shipping_from_zip: string;
}
interface LineItem {
    product_code: string;
    product_description: string;
    quantity: number;
    tax_amount: number;
    unit_amount: number;
}
interface Metadata {
    [id: string]: any;
}
type Currency = "aud" | "cad" | "dkk" | "eur" | "hkd" | "jpy" | "nzd" | "nok" | "gbp" | "zar" | "sek" | "chf" | "usd";
export declare const CurrencyConst: string[];
type Payment_method_types = "card" | "ach_debit" | "eft_debit" | "card_present";
export declare const Payment_method_const: string[];
type Capture_method = "automatic" | "manual";
export declare const Capture_method_const: string[];
type Occurrence_type = "consumer_ad_hoc" | "merchant_ad_hoc" | "merchant_recurring";
export interface onCreateProps {
    amount: number;
    currency: Currency;
    payment_method_types: Payment_method_types[];
    capture_method?: Capture_method;
    confirm?: boolean;
    level3?: Level3;
    metadata?: Metadata;
    occurrence_type?: Occurrence_type;
    payment_method_id?: string;
    platform_fee_amount?: number;
    statement_descriptor_suffix?: string;
}
export {};
