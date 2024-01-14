"use client";

import { PanelRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

interface MobileSidebarProps {
  creationCount: number;
  userCredits: number;
}

export const MobileSidebar = ({ creationCount, userCredits }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const sidebarClasses = isOpen 
  ? "animate-slideInFromLeft" 
  : "animate-slideOutToLeft";

  return (
    <Sheet>
      <SheetTrigger onClick={toggleSidebar}>
        <PanelRight className="block md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className={`p-0 text-white w-full fixed inset-y-0 left-0 z-50 transition duration-200 ease-in-out ${sidebarClasses}`}
      >
        <Sidebar creationCount={creationCount} userCredits={userCredits} />
      </SheetContent>
    </Sheet>
  
  );
}