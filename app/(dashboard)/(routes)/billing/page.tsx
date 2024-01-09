import React from "react";

import { redirect } from "next/navigation";
import { Metadata } from "next";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { getCurrentUser} from "@/lib/session";
import  StripePricingTable  from "@/components/pricing-table";
import { Credits } from "@/components/credits";

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
    <>
     <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900">
    <div className="w-full max-w-xl">
<Card className="mb-8">
<CardHeader>
<CardTitle className="text-center">Your AI Replicate Tokens</CardTitle>
</CardHeader>
<CardContent className="flex flex-col items-center gap-4">
<div className="text-5xl font-bold">2</div>
<p className="text-gray-100">Tokens remaining</p>

</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle className="text-center">Buy More Tokens</CardTitle>
</CardHeader>
<CardContent>
      <div className="grid ">
      <StripePricingTable user={user} />
      </div>
      </CardContent>
</Card>
</div>
</main>
    </>
  );
}