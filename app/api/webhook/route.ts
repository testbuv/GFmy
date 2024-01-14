import { NextRequest, NextResponse } from 'next/server';
import prismadb from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export const runtime = 'nodejs';

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: NextRequest) {
  console.log("Received POST request");

  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    console.log("Webhook event constructed successfully");
  } catch (err: any) {
    console.error("Error constructing webhook event:", err.message);
    return new NextResponse(JSON.stringify({ error: err.message }));
  }

  console.log(`Handling event type: ${event.type}`);

  switch (event.type) {
    case 'checkout.session.completed': 
      console.log("Processing checkout.session.completed");
      await handleCheckoutSessionCompleted(event.data.object);
      break;

    default: 
      console.log(`Unhandled event type: ${event.type}`);
  }

  console.log("Response sent for event type:", event.type);
  return new NextResponse(JSON.stringify({ received: true }));
}
      // @ts-ignore
      async function handleCheckoutSessionCompleted(session) {
  console.log("Handling checkout.session.completed with session data:", session);

  const credits = calculateCredits(session.amount_subtotal);
  console.log(`Calculated credits: ${credits} for amount: ${session.amount_subtotal}`);

  try {
    const userUpdateResponse = await prismadb.user.update({ 
      where: { id: session.client_reference_id },
      data: { credits: { increment: credits } },
    });
    console.log("User credits updated:", userUpdateResponse);

    const purchaseCreateResponse = await prismadb.purchase.create({
      data: {
        creditAmount: credits,
        user: { connect: { id: session.client_reference_id } }
      }
    });
    console.log("Purchase record created:", purchaseCreateResponse);
  } catch (err) {
    console.error("Error updating database:", err);
    // Consider handling the error appropriately, possibly re-throwing or returning a specific response.
  }
}

function calculateCredits(amount: number) {
  const amountEuros = amount / 100;
  console.log(`Calculating credits for amount in Euros: ${amountEuros}`);

  switch (amountEuros) {
    case 10: return 20;
    case 20: return 100;
    case 35: return 200;
    default: return calculateCreditsBasedOnRange(amountEuros);
  }
}

function calculateCreditsBasedOnRange(amountEuros: number) {
  let credits;
  if (amountEuros >= 50) {
    credits = amountEuros / 0.16; // Rate for purchases above 500 euros
  } else if (amountEuros >= 35) {
    credits = amountEuros / 0.18; // Rate for purchases between 100 and 500 euros
  } else {
    credits = amountEuros / 0.2; // Rate for purchases less than 100 euros
  }
  console.log(`Credits calculated based on range: ${credits}`);
  return credits;
}
