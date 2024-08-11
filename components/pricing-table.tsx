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


// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardFooter,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";

// export default function PricingTable() {
//   return (
//     <Card className="max-w-sm mx-auto overflow-hidden">
//       <div className="relative h-full w-full">
//         <span className="absolute inset-[-1000%] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.4)_0.55%,_rgba(255,_255,_255,_0))] border-glass border-[1px]" />
//         <div className="relative z-10 flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-6 text-white">
//           <CardTitle className="mb-6 text-2xl font-bold">
//             Buy More Tokens
//           </CardTitle>
//           <div className="space-y-6">
//             <div className="rounded-lg bg-zinc-900 p-4">
//               <CardTitle className="mb-1 text-lg font-semibold">
//                 Custom Credits
//               </CardTitle>
//               <CardDescription className="mb-4 text-sm">
//                 You choose the volume
//               </CardDescription>
//               <div className="mb-4 text-3xl font-bold">€0.50</div>
//               <Button className="bg-plum-800 hover: bg-plum-600 text-white">Pay</Button>
//             </div>
//             <div className="rounded-lg bg-zinc-900 p-4">
//               <CardTitle className="mb-1 text-lg font-semibold">
//                 20 Credits
//               </CardTitle>
//               <CardDescription className="mb-4 text-sm">
//                 20 credits for image generation and manipulation.
//               </CardDescription>
//               <div className="mb-4 text-3xl font-bold">€10</div>
//               <Button className="bg-plum-800 hover: bg-plum-600 text-white">Pay</Button>
//             </div>
//             <div className="rounded-lg bg-zinc-900 p-4">
//               <CardTitle className="mb-1 text-lg font-semibold">
//                 100 Credits
//               </CardTitle>
//               <CardDescription className="mb-4 text-sm">
//                 100 credits for image generation and manipulation.
//               </CardDescription>
//               <div className="mb-4 text-3xl font-bold">€20</div>
//               <Button className="bg-plum-800 hover: bg-plum-600 text-white">Pay</Button>
//             </div>
//             <div className="rounded-lg bg-zinc-900 p-4">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="inline-block rounded bg-[#64748B] px-2 py-1 text-xs uppercase">
//                   Most popular
//                 </span>
//               </div>
//               <CardTitle className="mb-1 text-lg font-semibold">
//                 200 Credits
//               </CardTitle>
//               <CardDescription className="mb-4 text-sm">
//                 200 credits for image generation and manipulation.
//               </CardDescription>
//               <div className="mb-4 text-3xl font-bold">€35</div>
//               <Button className="bg-plum-800 hover: bg-plum-600 text-white">Pay</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// }
