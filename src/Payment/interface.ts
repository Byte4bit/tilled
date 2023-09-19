import { RequestFuntionResult } from "../Request";

export interface AchDebit {
    account_holder_name: string;
    account_number: string;
    account_type: string;
    routing_number: string;
}

export interface BillingDetails {
    address: Address;
    email: string;
    name: string;
    phone: string;
}

export interface Address {
    city: string;
    country: string;
    state: string;
    street: string;
    street2: string;
    zip: string;
}

export interface Card {
    cvc: string;
    exp_month: number;
    exp_year: number;
    number: string;
}

export interface EftDebit {
    account_holder_name: string;
    account_number: string;
    institution_id: string;
    transit_number: string;
}

export interface Metadata {
    order_id: string;
    internal_customer_id: string;
}

export interface AchDebit {
    account_type: string;
    bank_name: string;
    last2: string;
    routing_number: string;
}

export interface BillingDetails {
    address: Address;
    email: string;
    name: string;
    phone: string;
}

export interface Address {
    city: string;
    country: string;
    state: string;
    street: string;
    street2: string;
    zip: string;
}

export interface Card {
    apple_pay: boolean;
    brand: string;
    checks: Checks;
    exp_month: number;
    exp_year: number;
    funding: string;
    holder_name: string;
    last4: string;
}

export interface Checks {
    address_line1_check: string;
    address_postal_code_check: string;
    cvc_check: string;
}

export interface EftDebit {
    bank_name: string;
    institution_id: string;
    last2: string;
    transit_number: string;
}

export interface Metadata {
    order_id: string;
    internal_customer_id: string;
}

export interface onCreateResult {
    ach_debit: AchDebit;
    billing_details: BillingDetails;
    card: Card;
    chargeable: boolean;
    created_at: string;
    customer_id: string;
    eft_debit: EftDebit;
    expires_at: string;
    id: string;
    metadata: Metadata;
    nick_name: string;
    type: string;
    updated_at: string;
}

export interface onCreateProps {
    ach_debit: AchDebit;
    billing_details: BillingDetails;
    card: Card;
    eft_debit: EftDebit;
    metadata: Metadata;
    nick_name: string;
    payment_token: string;
    type: string;
}
export interface TilledPaymentProps {
    onCreate: {
        props: onCreateProps;
        result: onCreateResult;
        function: (data: onCreateProps) => RequestFuntionResult<onCreateResult>;
    };
}
