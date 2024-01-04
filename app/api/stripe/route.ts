import { NextResponse, NextRequest } from "next/server";
import { getCurrentUser } from "@/lib/session";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const billingUrl = absoluteUrl("/billing");

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    const priceId = req.nextUrl.searchParams.get('priceId');

    if (!user || !user.email || !priceId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: user.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: user.id,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (e) {
    console.log("[STRIPE_API_ERROR]", e);
    return new NextResponse("Payment error", { status: 500 });
  }
}
