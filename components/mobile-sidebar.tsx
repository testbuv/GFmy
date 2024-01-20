// MobileSidebar.tsx
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 390) {
        setIsOpen(false); // Close the sidebar on larger screens
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize immediately to set initial state
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth < 390) {
      setIsOpen(!isOpen);
    }
  };

  const sidebarClasses = isOpen 
    ? "animate-slideInFromLeft" 
    : "animate-slideOutToLeft";

  return (
    <Sheet>
      <SheetTrigger onClick={toggleSidebar}>
        <PanelRight className="block md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className={`text-white w-full fixed inset-y-0 left-0 z-50 transition duration-200 ease-in-out ${sidebarClasses}`}>
          <Sidebar creationCount={creationCount} userCredits={userCredits} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
