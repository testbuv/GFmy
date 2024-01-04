import React from "react";

import { redirect } from "next/navigation";
import { Metadata } from "next";

import { Heading } from "@/components/heading";
import { HeadingShell } from "@/components/shell";
import { getCurrentUser} from "@/lib/session";
import { getUserSubscription } from "@/lib/subscription";
import { ProModal } from "@/components/pro-modal";

export const metadata: Metadata = {
  title: "Billing",
  description: "Handle your payment and credits.",
};

export default async function BillingPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/sign-in");
  }
  const subscriptionPlan = await getUserSubscription(user.id);

  if (subscriptionPlan instanceof Error) {
    redirect("/sign-in");
  }
 

  return (
    <>
      <HeadingShell>
        <Heading
          heading="Billing"
          subHeading="Handle your payment and subscription details."
        />
      </HeadingShell>
      <div className="grid ">
       <ProModal />
      </div>
    </>
  );
}