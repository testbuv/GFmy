
import React from "react";

import { redirect } from "next/navigation";
import { Metadata } from "next";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { getCurrentUser} from "@/lib/session";
import  StripePricingTable  from "@/components/pricing-table";
import { getUserCredits } from '@/lib/session'
import { getCreationCount } from "@/lib/api-limit";

export const metadata: Metadata = {
  title: "Billing",
  description: "Handle your payment and credits.",
};

export default async function BillingPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="relative h-full">
      <main className="mt-8 p-4">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
          <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      Buy More Tokens for your design work
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="grid grid-cols-1">
                  <StripePricingTable user={user} />
                  </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}