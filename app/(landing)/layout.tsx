import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-full overflow-auto bg-black">
      <div className="relative z-20 h-full w-full ">{children}</div>
    </main>
  );
};
export default LandingLayout;