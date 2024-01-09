import React from 'react';
import { User } from 'next-auth'
import Script from "next/script";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': {
        'pricing-table-id'?: string;
        'publishable-key'?: string;
    }
  }
}
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'id' | 'name' | 'email'>
}

export default function StripePricingTable({ user }: Props) {
  return (
    <div>
      <Script src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id="prctbl_1OJh6bH2WewsQNa1kvFilGEn"
        publishable-key="pk_test_51LTpiNH2WewsQNa1yQ9Yde3afFnAPxqovufTUtCbyti0xF0EWj9GuvV1eZJV7jE6xgHScYhjc6R1em09od95xjXg008dDvTmdW"
        customer-email={user.email}
        client-reference-id={user.email}
      ></stripe-pricing-table>
    </div>
  )
}