import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen overflow-auto bg-black py-6">
      <div className="relative z-20 w-full">{children}</div>
    </main>
  );
};
export default LandingLayout;