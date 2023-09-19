interface AchDebit {
    account_type: "checking" | "savings";
    bank_name: string;
    last2: string;
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
    apple_pay: boolean;
    brand: "amex" | "diners" | "discover" | "jcb" | "maestro" | "mastercard" | "solo" | "visa" | "visa_debit" | "visa_electron" | "unknown";
    checks: Checks;
    exp_month: number;
    exp_year: number;
    funding: "credit" | "debit" | "prepaid" | "unknown";
    holder_name: string;
    last4: string;
}
interface Checks {
    address_line1_check: "pass" | "fail" | "unavailable" | "unchecked";
    address_postal_code_check: "pass" | "fail" | "unavailable" | "unchecked";
    cvc_check: "pass" | "fail" | "unavailable" | "unchecked";
}
interface EftDebit {
    bank_name: string;
    institution_id: string;
    last2: string;
    transit_number: string;
}
interface Metadata {
    [id: string]: any;
}
export interface onCreateResult {
    chargeable: boolean;
    created_at: string;
    id: string;
    type: "card" | "ach_debit" | "eft_debit";
    updated_at: string;
    ach_debit?: AchDebit;
    billing_details?: BillingDetails;
    card?: Card;
    customer_id: string;
    eft_debit: EftDebit;
    expires_at: string;
    metadata: Metadata;
    nick_name: string;
}
export {};
