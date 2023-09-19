interface AchDebit {
    account_holder_name: string;
    account_number: string;
    account_type: "checking" | "savings";
    routing_number: string;
}
interface BillingDetails {
    address: Address;
    email: string;
    name: string;
    phone: string;
}
interface Address {
    city: string;
    country: string;
    state: string;
    street: string;
    street2: string;
    zip: string;
}
interface Card {
    cvc?: string;
    exp_month: number;
    exp_year: number;
    number: string;
}
interface EftDebit {
    account_holder_name: string;
    account_number: string;
    institution_id: string;
    transit_number: string;
}
interface Metadata {
    [id: string]: any;
}
export interface onCreateProps {
    ach_debit?: AchDebit;
    billing_details?: BillingDetails;
    card?: Card;
    eft_debit?: EftDebit;
    metadata?: Metadata;
    nick_name?: string;
    payment_token?: string;
    type: "card" | "ach_debit" | "eft_debit";
}
export {};
