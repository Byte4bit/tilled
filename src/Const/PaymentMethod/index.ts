
export const PaymentMethodConst = [
    "card",
    "ach_debit",
    "eft_debit",
] as const 

export const PaymentMethod = [ ...PaymentMethodConst]

export type PaymentMethodType = (typeof PaymentMethodConst)[number];
