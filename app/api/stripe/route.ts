import { NextResponse, NextRequest } from "next/server";
import { getCurrentUser } from "@/lib/session";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const billingUrl = absoluteUrl("/billing");

// Function to get creations count based on price ID
function getCreationsCount(priceId: string) {
  switch (priceId) {
    case 'price_1OJehRH2WewsQNa1nd7H4VQF':
      return 200;
    case 'price_1OJegYH2WewsQNa1ItBozLW8':
      return 100;
    case 'price_1OJef9H2WewsQNa1YEw3wqXS':
      return 30;
    default:
      return 0;
  }
}
 export async function GET(req: NextRequest) {
    try {
      const user = await getCurrentUser();
      const priceId = (req as any).query.priceId as string; // Get the price ID from the request query
  
      if (!user || !user.email || !priceId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
      // Create checkout session
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
          creationsCount: getCreationsCount(priceId),
        },
      });
      return new Response(JSON.stringify({ url: stripeSession.url }));
    } catch (e) {
      console.log("[STRIPE_API_ERROR]", e);
      return new NextResponse("Payment error", { status: 500 });
    }
  }

  