"use client";

import { PanelRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { useState, useEffect } from "react";

interface MobileSidebarProps {
  creationCount: number;
  userCredits: number;
}

export const MobileSidebar = ({ creationCount, userCredits }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <PanelRight className="block md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="p-0 text-white w-full fixed inset-y-0 left-0 transform -translate-x-full md:translate-x-0 md:w-64 transition duration-200 ease-in-out z-50"
      >
        <Sidebar creationCount={creationCount} userCredits={userCredits} />
      </SheetContent>
    </Sheet>
  );
};
