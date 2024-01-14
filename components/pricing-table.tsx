import React from 'react';
import { User } from 'next-auth';
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
  user: Pick<User, 'id' | 'email'>
}

export default function StripePricingTable({ user }: Props) {
  return (
    <div>
      <Script src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id="prctbl_1OJh6bH2WewsQNa1kvFilGEn"
        publishable-key="pk_test_51LTpiNH2WewsQNa1yQ9Yde3afFnAPxqovufTUtCbyti0xF0EWj9GuvV1eZJV7jE6xgHScYhjc6R1em09od95xjXg008dDvTmdW"
        customer-email={user.email}
        client-reference-id={user.id}
      ></stripe-pricing-table>
    </div>
  )
}

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/kQBP6fYxfk7
//  */
// import { Button } from "@/components/ui/button"

// export default function PricingTable() {
//   return (
//     <div className="bg-slate-900 text-white p-6 max-w-sm mx-auto rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Buy More Tokens</h2>
//       <div className="space-y-6">
//         <div className="bg-slate-900 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-1">Custom Credits</h3>
//           <p className="text-sm mb-4">You choose the volume</p>
//           <div className="text-3xl font-bold mb-4">€0.50</div>
//           <Button className="bg-[#22D3EE] text-black">Pay</Button>
//         </div>
//         <div className="bg-slate-900 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-1">20 Credits</h3>
//           <p className="text-sm mb-4">20 credits for image generation and manipulation.</p>
//           <div className="text-3xl font-bold mb-4">€10</div>
//           <Button className="bg-[#22D3EE] text-black">Pay</Button>
//         </div>
//         <div className="bg-slate-900 p-4 rounded-lg">
//           <h3 className="text-lg font-semibold mb-1">100 Credits</h3>
//           <p className="text-sm mb-4">100 credits for image generation and manipulation.</p>
//           <div className="text-3xl font-bold mb-4">€20</div>
//           <Button className="bg-[#22D3EE] text-black">Pay</Button>
//         </div>
//         <div className="bg-slate-900 p-4 rounded-lg">
//           <div className="flex justify-between items-center mb-2">
//             <span className="bg-[#64748B] text-xs uppercase px-2 py-1 inline-block rounded">Most popular</span>
//           </div>
//           <h3 className="text-lg font-semibold mb-1">200 Credits</h3>
//           <p className="text-sm mb-4">200 credits for image generation and manipulation.</p>
//           <div className="text-3xl font-bold mb-4">€35</div>
//           <Button className="bg-[#22D3EE] text-black">Pay</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

