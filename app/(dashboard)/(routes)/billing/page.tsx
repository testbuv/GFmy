
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
  const credits = await getUserCredits()
  const creationCount = await getCreationCount();

return (
    <>
     <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-900">
    <div className="w-full max-w-xl">
<Card className="mb-8">
<CardHeader>
<CardTitle className="text-center">Your Printifai Credits</CardTitle>
</CardHeader>
<CardContent className="flex flex-col items-center gap-4">
  
<div className="text-5xl font-bold">{(credits ?? 0) - creationCount}
</div>
<p className="text-gray-100">Credits remaining</p>

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