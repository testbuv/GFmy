"use client";

import { useState, useEffect } from "react";
import { UserAccountNav } from "@/components/user-account-nav";
import Image from "next/image";
import Link from "next/link";
import { useUserStore } from "@/store/store";
import { Menu, X } from "lucide-react";
import { calculateAvailableCredits } from "@/lib/credits";

interface MobileNavigationMenuProps {
  creationCount: number;
  userCredits: number;
}

export const MobileNavigationMenu = ({ creationCount, userCredits }: MobileNavigationMenuProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const availableCredits = calculateAvailableCredits(userCredits, creationCount);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10 flex w-full items-center justify-between bg-black p-4 border-b-2 border-transparent border-b-gradient-to-r from-[#ed6ea0] to-[#ec8c69]">
      <button
        className="absolute left-4 rounded-md bg-transparent p-1 text-muted-foreground hover:bg-muted"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div className="flex items-center justify-end w-full space-x-4">
        <span className="inline-flex bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-l text-transparent mr-8">
          Available Credits: {availableCredits}
        </span>
        <UserAccountNav />
      </div>
      
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full origin-top rounded-md bg-black border-gray-600 border-b-2 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold">Growth Fast.io</span>
          </div>
          <nav className="flex flex-col space-y-2">
            <Link href="/image-generation" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
              Create
            </Link>
            <Link href="/upscale" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
              Upscale
            </Link>
            <Link href="/bg-remove" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
              Remove Background
            </Link>
            <Link href="/dashboard" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
              Dashboard
            </Link>
            <Link href="/billing" className="block px-3 py-2 text-sm transition-colors hover:bg-muted">
              Buy Credits
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};