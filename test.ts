import {__Tilled} from './src'


const r = __Tilled({
    mode:"sandbox",
    merchant_account_id:"pk_HmYTwnFSKtdECo8r89S6JaOGINiyJqkItR5du3WYqI70835NxsZM05eNmjEIlYkZjEfx287Tb8sEVMcDSnroOXDSDfhGsMfilUoD"
})

const name = "Fran"
const number = ""
const country = "country"
const state = "state"
const city = "city"
const street = "street"
const street2 = "street2"
const zip = "zip"
const email = "email"
const phone = "phone"
const cvc = "cvc"
const exp_month = 1
const exp_year = 2

r.payment.onCreate({
    billing_details:{
        address:{
            city,
            country,
            state,
            street,
            street2,
            zip
        },
        email,
        name,
        phone,
    },
    card:{
        cvc,
        exp_month,
        exp_year,
        number
    },
    type:"ach_debit",

})