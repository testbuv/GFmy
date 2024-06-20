import React from "react";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/sidebar";
import { getCurrentUser } from "@/lib/session";
import { Navbar } from "@/components/navbar";
import UserStoreProvider from "@/components/user-store-provider";
import { getCreationCount } from "@/lib/api-limit";
import { getUserCredits } from "@/lib/session";
import { NavigationMenuComponent } from "@/components/navigation-menu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }
  const creationCount = await getCreationCount();
  const userCredits = await getUserCredits();

  return (
    <div className="relative h-full">
      <UserStoreProvider
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
      />

      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar
          creationCount={creationCount || 0}
          userCredits={userCredits || 0}
        />
      </div>
      <main className="md:pl-72">
        <Navbar />
        <NavigationMenuComponent
          creationCount={creationCount || 0}
          userCredits={userCredits || 0}
        />
        {children}
      </main>
    </div>
  );
}