import { NextRequest, NextResponse } from 'next/server'
import prismadb from "@/lib/db";
import Stripe from "stripe";



const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export const runtime = 'edge' 

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;


let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ error: err.message }))
  }


switch (event.type) {
  case 'checkout.session.completed': 
    await handleCheckoutSessionCompleted(event.data.object)
    break

  default: 
    console.log(`Unhandled event type ${event.type}`)
}

return new NextResponse(JSON.stringify({ received: true }))

      // @ts-ignore

async function handleCheckoutSessionCompleted(session) {

const credits = calculateCredits(session.amount_subtotal)

await prismadb.user.update({ 
  where: {
    id: session.client_reference_id,
  },
  data: {
    credits: {
      increment: credits,  
    },
  },
})

await prismadb.purchase.create({
  data: {
    creditAmount: credits,
    user: {
      connect: {
        id: session.client_reference_id,
      }
    }
  }
}) 
}
function calculateCredits(amount: number) {
  const amountEuros = amount / 100

  switch(amountEuros) {
    case 10:
      return 20
    
    case 20:  
      return 100

    case 35:
      return 200
    
    default:
      return amountEuros / 0.5 
  }
}
}
