import Image from "next/image";
import { GeistSans } from "geist/font/sans";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    
    <main className="relative h-full overflow-autobg-gradient-to-r from-slate-800 to-slate-900">
      <div className="relative z-20 h-full w-full ">{children}</div>
    </main>
  );
};
export default LandingLayout;
