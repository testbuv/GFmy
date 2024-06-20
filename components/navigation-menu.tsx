"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { UserAccountNav } from "@/components/user-account-nav";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationMenuProps {
  creationCount: number;
  userCredits: number;
}

export const NavigationMenuComponent = ({ creationCount, userCredits }: NavigationMenuProps) => {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-full items-center justify-between bg-background p-4">
      <NavigationMenu.List className="flex items-center space-x-4">
        <NavigationMenu.Item>
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold">Printifai</span>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/dashboard" className="text-sm font-medium text-muted-foreground">
            Dashboard
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/billing" className="text-sm font-medium text-muted-foreground">
            Buy Credits
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/settings" className="text-sm font-medium text-muted-foreground">
            Settings
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-muted-foreground">
            Credits: {userCredits}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Creations: {creationCount}
          </span>
        </div>
        <ModeToggle />
        <UserAccountNav />
      </div>

      <NavigationMenu.Viewport className="absolute left-0 top-full mt-2 w-full origin-top rounded-md bg-popover p-2 shadow-lg transition-[opacity,transform] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"/>
    </NavigationMenu.Root>
  );
};