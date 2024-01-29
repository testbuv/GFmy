
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
        <PanelRight className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar creationCount={creationCount} userCredits={userCredits} />
      </SheetContent>
    </Sheet>
  );
}