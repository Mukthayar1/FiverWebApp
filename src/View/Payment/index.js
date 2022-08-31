import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./Form"

import './Styles.js'

const PUBLIC_KEY = "pk_test_51Lcm39B9vKeCfYNSXWPk0G9iCGMV6vs5PDnt1PrQMhDgyd0hFyjmMp162mQQunkOReoMXmNwQnNirAfoYcX3dF1W00HHEkP72p"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
