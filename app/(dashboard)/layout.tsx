startLine: 1
endLine: 50
import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import UserStoreProvider from "@/components/user-store-provider";
import { getCreationCount } from "@/lib/api-limit";
import { getUserCredits } from "@/lib/session";
import { NavigationMenuComponent } from "@/components/navigation-menu";
import { MobileNavigationMenu } from "@/components/mobile-navigation-menu";
import { LandingFooter } from "@/components/landing/landing-footer";

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
    <div className="flex flex-col min-h-screen">
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
      <main className="flex-grow mt-8 p-4">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="mt-6 border-t-2 border-t-gradient-to-r border-t-fixed">
        <div className="container mx-auto">
          <LandingFooter />
        </div>
      </footer>
    </div>
  );
}