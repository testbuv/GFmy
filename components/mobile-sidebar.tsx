"use client";

import { PanelRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { useState, useEffect } from "react";
import { usePromodal } from "@/store/promodal-store";


interface MobileSidebarProps {
  creationCount: number;
  isPro: boolean;
  userCredits: number; // Assuming userCredits is a number. Change the type as needed.
}

export const MobileSidebar = ({ creationCount, isPro, userCredits }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { onOpen } = usePromodal(); // Moved this line up here

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <PanelRight className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar creationCount={creationCount} isPro={isPro} userCredits={userCredits} />
      </SheetContent>
    </Sheet>
  );
};
