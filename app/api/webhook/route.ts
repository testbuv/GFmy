import { headers } from "next/headers";
import Stripe from "stripe";
import prismadb from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: any) {
    return new NextResponse("WEBHOOK ERROR:" + err.message, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    if (!paymentIntent?.metadata?.userId) {
      return new NextResponse("No user id in payment intent", { status: 400 });
    }

    await prismadb.creation.createMany({
      data: Array(Number(paymentIntent?.metadata?.creationsCount)).fill({
        userId: paymentIntent?.metadata?.userId,
      }),
    });
  }

  return new NextResponse(null, { status: 200 });
}