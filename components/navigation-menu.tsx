"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { UserAccountNav } from "@/components/user-account-nav";
import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "@/store/store";

interface NavigationMenuProps {
  creationCount: number;
  userCredits: number;
}

export const NavigationMenuComponent = ({ creationCount, userCredits }: NavigationMenuProps) => {
  const user = useUserStore((state) => state.user);
  const availableCredits = userCredits - creationCount;

  return (
    <NavigationMenu.Root className="relative z-10 flex w-full items-center justify-between bg-background p-4 border-b-2 border-transparent border-b-gradient-to-r from-[#ed6ea0] to-[#ec8c69]">
      <NavigationMenu.List className="flex items-center space-x-8">
        <NavigationMenu.Item>
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold">Growth Fast.io</span>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="text-sm font-medium text-muted-foreground">
            Get Creative
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-full mt-2 w-48 origin-top rounded-md bg-popover p-2 shadow-lg">
            <NavigationMenu.Link asChild>
              <Link href="/stable-diffusion" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
                Create
              </Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link asChild>
              <Link href="/upscale" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
                Upscale
              </Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link asChild>
              <Link href="/bg-remove" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
                Remove Background
              </Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link asChild>
              <Link href="/dashboard" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
                Dashboard
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link href="/billing" className="text-sm font-medium text-muted-foreground">
            Buy Credits
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
        <span className="inline-flex bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-xl text-transparent">
            Available Credits: {availableCredits}
          </span>
        </div>
        <UserAccountNav />
      </div>

      <NavigationMenu.Viewport className="absolute left-0 top-full mt-2 w-full origin-top rounded-md bg-popover p-2 shadow-lg transition-[opacity,transform] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2" />
    </NavigationMenu.Root>
  );
};