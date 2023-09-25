# Tilled Payment

It is a Payment Methods for use in backend or frontend

### Install

```bash
#npm
npm i tilled-payment fenextjs-error
#yarn
yarn add tilled-payment fenextjs-error
#bun
bun add tilled-payment fenextjs-error
```

### Instance

```ts
import { __Tilled } from "./src";

const tilled = __Tilled({
    mode: "sandbox",
    merchant_account_id: "",
    email: "",
    password: "",
});
```

### Use

<details>
  <summary>Customer</summary>

#### Create Customer

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
const resultCustomer = await tilled.customer.onCreateCustomer({
    email,
    first_name,
    last_name,
    middle_name,
    phone,
});
if (resultCustomer instanceof ErrorFenextjs) {
    console.log("resultCustomer", resultCustomer);
    return;
}
console.log("resultCustomer", resultCustomer?.data);
```

</details>

<details>
  <summary>Payment</summary>

#### Create Payment Method

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

const resultPaymentMethod = await tilled.payment.onCreatePaymentMethod({
    billing_details: {
        address: {
            city,
            country,
            state,
            street,
            street2,
            zip,
        },
        email,
        name,
        phone,
    },
    card: {
        cvc,
        exp_month,
        exp_year,
        number,
    },
    type: "card",
});
if (resultPaymentMethod instanceof ErrorFenextjs) {
    console.log("resultPaymentMethod", resultPaymentMethod);
    return;
}
```

#### Attach a Customer to Payment Method

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

const resultAttachCustomerPaymentMethod =
    await tilled.payment.onAttachCustomerPaymentMethod({
        id,
        customer_id,
    });
if (resultAttachCustomerPaymentMethod instanceof ErrorFenextjs) {
    console.log(
        "resultAttachCustomerPaymentMethod",
        resultAttachCustomerPaymentMethod,
    );
    return;
}
console.log(
    "resultAttachCustomerPaymentMethod",
    resultAttachCustomerPaymentMethod?.data,
);
```

#### Create Payment Intent

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

const resultCreatePaymentIntent = await tilled.payment.onCreatePaymentIntent({
    amount: 1000,
    currency: "usd",
    payment_method_types: ["card"],
    payment_method_id,
});
if (resultCreatePaymentIntent instanceof ErrorFenextjs) {
    console.log("resultCreatePaymentIntent", resultCreatePaymentIntent);
    return;
}
console.log("resultCreatePaymentIntent", resultCreatePaymentIntent?.data);
```

</details>

<details>
  <summary>Subscription</summary>

#### Create Subscription

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";
const resultCreateSubscription = await tilled.subscription.onCreateSubscription(
    {
        billing_cycle_anchor: new Date().toISOString(),
        currency: "usd",
        customer_id,
        payment_method_id,
        interval_unit: "month",
        price: 10000,
    },
);
if (resultCreateSubscription instanceof ErrorFenextjs) {
    console.log("resultCreateSubscription", resultCreateSubscription);
    return;
}
console.log("resultCreateSubscription", resultCreateSubscription?.data);
```

#### Cancel Subscription

```ts
import { ErrorFenextjs } from "fenextjs-error/cjs/Fenextjs";

const resultCancelSubscription = await tilled.subscription.onCancelSubscription(
    {
        id,
    },
);
if (resultCancelSubscription instanceof ErrorFenextjs) {
    console.log("resultCancelSubscription", resultCancelSubscription);
    return;
}
console.log("resultCancelSubscription", resultCancelSubscription?.data);
```

</details>
