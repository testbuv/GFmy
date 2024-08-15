"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { useUserStore } from "@/store/store";

export const UserAccountNav = () => {
  const { user, clearUser } = useUserStore((state) => ({
    user: state.user,
    clearUser: state.clearUser,
  }));

  const handleSignOut = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    await signOut({
      callbackUrl: `${window.location.origin}/`,
    });
    clearUser();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.image ?? undefined} alt={user.name || user.email || "User avatar"} />
          <AvatarFallback>
            <span className="text-sm font-medium uppercase text-white">
              {user.name?.[0] || user.email?.[0] || ""}
            </span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-md bg-black p-2 shadow-lg">
        <DropdownMenuLabel className="truncate text-sm text-white">
          {user.name || user.email || "MysteriousOne"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border-t border-border" />
        <DropdownMenuItem asChild>
          <Link href="/billing" className="block px-3 py-2 text-sm text-white transition-colors hover:bg-muted">
            <span>Buy Credits</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/purchase-history" className="block px-3 py-2 text-sm text-white transition-colors hover:bg-muted">
            <span>Purchase History</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/creations-history" className="block px-3 py-2 text-sm text-white transition-colors hover:bg-muted">
            <span>Creations History</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="block px-3 py-2 text-sm text-white transition-colors hover:bg-muted">
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2 border-t border-border" />
        <DropdownMenuItem className="flex cursor-pointer items-center space-x-2 px-3 py-2 text-sm text-white transition-colors hover:bg-muted" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};