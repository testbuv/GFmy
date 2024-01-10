import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prismadb from "@/lib/db";
import { calculateCreditAmount } from "@/lib/api-limit";
import Cors from "micro-cors";

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("Stripe-Signature") as string;

  let event: Stripe.Event;
  const cors = Cors({
    allowMethods: ["POST", "HEAD"],
  });
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,

    );
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new NextResponse("WEBHOOK ERROR:" + err.message, { status: 400 });
  }

  console.log("✅ Success:", event.id);

  if (event.type === "payment_intent.succeeded" || event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log(`💰 session: ${JSON.stringify(session)}`);

    
    const userId = session.client_reference_id
    console.log(`📧 User email: ${userId}`);

    
    let creditAmount = calculateCreditAmount(session.amount_total!);

    await prismadb.user.update({
      where: {
        id: userId!,
      },
      data: {
        credits: {
          increment: creditAmount,
        },
      },
    });

    await prismadb.purchase.create({
      data: {
        creditAmount: creditAmount,
        user: {
          connect: {
            id: userId!,
          },
        },
      },
    });
  } else if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    console.log(
      `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
    );
  } else if (event.type === "charge.succeeded") {
    const charge = event.data.object as Stripe.Charge;
    console.log(`💵 Charge id: ${charge.id}`);
  } else {
    console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
  }


  return new NextResponse(null, { status: 200 });
}

