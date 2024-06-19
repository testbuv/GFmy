"use client";

import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";
import { LogOut } from "lucide-react";
import { useUserStore } from "@/store/store";
import { Sidebar } from "@/components/sidebar";
import UserStoreProvider from "@/components/user-store-provider";

interface NavigationMenuProps {
  creationCount: number;
  userCredits: number;
}

export const NavigationMenuComponent = ({ creationCount, userCredits }: NavigationMenuProps) => {
  const { setTheme } = useTheme();
  const { user, clearUser } = useUserStore((state) => ({
    user: state.user,
    clearUser: state.clearUser,
  }));

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  
    await signOut({
      callbackUrl: `${window.location.origin}/`,
    });
    clearUser();
  };
  return (
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
            <UserAvatar
              user={{
                name: user.name || user.email || "MysteriousOne",
                image: user.image || "avatar_fallback.jpg",
              }}
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link asChild>
              <Link href="/dashboard">Dashboard</Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link asChild>
              <Link href="/billing">Buy Credits</Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link asChild>
              <Link href="/settings">Settings</Link>
            </NavigationMenu.Link>
            <NavigationMenu.Link className="cursor-pointer" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Link
              onClick={() => setTheme("light")}
              className="text-foreground dark:text-foreground"
            >
              Light
            </NavigationMenu.Link>
            <NavigationMenu.Link
              onClick={() => setTheme("dark")}
              className="text-foreground dark:text-foreground"
            >
              Dark
            </NavigationMenu.Link>
            <NavigationMenu.Link
              onClick={() => setTheme("system")}
              className="text-foreground dark:text-foreground"
            >
              System
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Menu</NavigationMenu.Trigger>
          <NavigationMenu.Content>
          <NavigationMenu.Content>
  <Sidebar creationCount={creationCount} userCredits={userCredits} />
</NavigationMenu.Content>          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};