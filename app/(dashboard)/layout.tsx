import React from "react";
import { redirect } from "next/navigation";

import { Sidebar } from "@/components/sidebar";
import { getCurrentUser } from "@/lib/session";
import { Navbar } from "@/components/navbar";
import UserStoreProvider from "@/components/user-store-provider";
import { getCreationCount } from "@/lib/api-limit";
import { getUserSubscription } from "@/lib/subscription";
import { getUserCredits } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }
  const creationCount =await getCreationCount();
  const subscriptionPlan = await getUserSubscription(user.id);
  const userCredits = await getUserCredits();

  if (subscriptionPlan instanceof Error) {
    redirect("/sign-in");
  }

  return (
    <div className="relative h-full">
      <UserStoreProvider
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
      />

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col ">
      <Sidebar 
        creationCount={creationCount || 0} 
        isPro={subscriptionPlan?.isPro || false} 
        userCredits={userCredits || 0} 
      />
      </div>
      <main className="md:pl-72">
        <Navbar isPro={subscriptionPlan.isPro} />
        {children}
      </main>
    </div>
  );
}
