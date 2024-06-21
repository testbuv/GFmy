import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import UserStoreProvider from "@/components/user-store-provider";
import { getCreationCount } from "@/lib/api-limit";
import { getUserCredits } from "@/lib/session";
import { NavigationMenuComponent } from "@/components/navigation-menu";
import { MobileNavigationMenu } from "@/components/mobile-navigation-menu";

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
      <div className="hidden sm:block">
        <NavigationMenuComponent
          creationCount={creationCount || 0}
          userCredits={userCredits || 0}
        />
      </div>
      <div className="sm:hidden">
        <MobileNavigationMenu
          creationCount={creationCount || 0}
          userCredits={userCredits || 0}
        />
      </div>
      <main className="mt-8 p-4">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
}