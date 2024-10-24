import React from "react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { getCurrentUser } from "@/lib/session";
import PricingTable from "@/components/pricing-table";
import { getUserCredits } from "@/lib/session";
import { getCreationCount } from "@/lib/api-limit";
import { calculateAvailableCredits } from "@/lib/credits";

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
  const availableCredits = calculateAvailableCredits(credits ?? 0, creationCount);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <div className="w-full max-w-xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">
              Your Growth Fast.io Credits
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-5xl font-bold">
              {availableCredits}
            </div>
            <p className="text-gray-100">Credits remaining</p>
          </CardContent>
        </Card>
      </div>
      <section id="pricing" className="mx-auto py-6 w-full">
  <div className="container mx-auto px-4">
    <PricingTable user={user} />
  </div>
</section>
    </main>
  );
}