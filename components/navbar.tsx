import React from "react";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { UserAccountNav } from "@/components/user-account-nav";
import { getCreationCount } from "@/lib/api-limit";
import { ModeToggle } from "@/components/theme-toggle";
import { getUserCredits } from "@/lib/session";

export const Navbar = async ({ isPro }: { isPro: boolean }) => {
  
  const creationCount = (await getCreationCount()) || 0;
  const userCredits = (await getUserCredits()) || 0;

  return (
    <div className="flex items-center p-4">
      <MobileSidebar creationCount={creationCount} isPro={isPro} userCredits={userCredits} />
      <div className="flex w-full justify-end gap-4">
        <ModeToggle />
        <UserAccountNav />
      </div>
    </div>
  );
};
