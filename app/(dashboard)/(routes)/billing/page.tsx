import React from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";
import StripePricingTable from "@/components/pricing-table";
import { getUserCredits } from "@/lib/session";
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
  const credits = await getUserCredits();
  const creationCount = await getCreationCount();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900">
      <div className="w-full max-w-xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">
              Your Growth Fast.io Credits
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-5xl font-bold">
              {(credits ?? 0) - creationCount}
            </div>
            <p className="text-gray-100">Credits remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="relative h-full">
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
            </div>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}