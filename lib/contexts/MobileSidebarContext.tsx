// MobileSidebarContext.tsx
import { createContext, useContext, useCallback, useEffect } from "react";
import useDebounce from "@/lib/hooks/use-debounce"
import useCurrentWidth from "@/lib/hooks/use-current-width"
import useToggleState from "@/lib/hooks/use-toggle-state"

interface MobileSidebarContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const MobileSidebarContext = createContext<MobileSidebarContextType | null>(null);

export const useMobileSidebar = () => {
  const context = useContext(MobileSidebarContext);
  if (context === null) {
    throw new Error("useMobileSidebar must be used within a MobileSidebarProvider");
  }
  return context;
};

export const MobileSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const { state: isOpen, close, open, toggle } = useToggleState();
  const windowWidth = useCurrentWidth();
  const debouncedWidth = useDebounce(windowWidth, 200);

  // Close the sidebar if the window is resized to a width >= 390px
  const closeSidebar = useCallback(() => {
    if (isOpen && debouncedWidth >= 390) {
      close();
    }
  }, [isOpen, debouncedWidth, close]);

  useEffect(() => {
    window.addEventListener('resize', closeSidebar);
    return () => window.removeEventListener('resize', closeSidebar);
  }, [closeSidebar]);

  return (
    <MobileSidebarContext.Provider value={{ isOpen, close, open, toggle }}>
      {children}
    </MobileSidebarContext.Provider>
  );
};