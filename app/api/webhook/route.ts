import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prismadb from "@/lib/db";
import { stripe } from "@/lib/stripe";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new NextResponse("WEBHOOK ERROR:" + err.message, { status: 400 });
  }

  console.log("✅ Success:", event.id);

  if (event.type === "payment_intent.succeeded" || event.type === "checkout.session.completed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const userId = paymentIntent.metadata.userId;
    let creditAmount = calculateCreditAmount(paymentIntent.amount);

    if (userId) {
      await prismadb.user.update({
        where: { id: userId },
        data: { credits: { increment: creditAmount } },
      });

      await prismadb.purchase.create({
        data: {
          creditAmount: creditAmount,
          userId: userId,
        },
      });
    }
  }

  return new NextResponse(null, { status: 200 });
}

function calculateCreditAmount(amount: number): number {
  const amountEuros = amount / 100; // Convert to full EUR units

  switch (amountEuros) {
    case 10:
      return 20;
    case 20:
      return 100;
    case 35:
      return 200;
    default:
      return amountEuros / 0.5; // Custom rate: 0.5 EUR per credit
  }
}
