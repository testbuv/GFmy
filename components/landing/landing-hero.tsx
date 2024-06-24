import Link from "next/link";

import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { TypewriterLandingComponent } from "./typewrite-landing";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

type LandingHeroProps = {
  user?: User;
};

export const LandingHero = ({ user }: LandingHeroProps) => {
  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div
        className={cn(
          "animate-fade-in-up space-y-5 p-1 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl",
          GeistSans.className,
        )}
      >
        <h1>Revolutionize Your Visual Content Creation with</h1>
        <div
          className={cn(
            "h-16 bg-gradient-to-r from-gray-100 to-gray-900 bg-clip-text text-6xl text-transparent md:h-24 md:text-8xl",
            GeistSans.className,
          )}
        >
          <TypewriterLandingComponent />
        </div>
      </div>
      <div className="mt-10 animate-[fade-in-up_1.5s_ease-in-out] space-y-5 text-center">
        <Link href={user ? "/dashboard" : "/sign-in"}>
          <Button
            variant="primary"
            className="text-slate-950 font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Unlock Your Creative Potential Now
          </Button>
        </Link>
        <div className="text-xs font-normal text-zinc-400 md:text-sm">
          Start Creating Stunning Visuals in Minutes
        </div>
      </div>
    </div>
  );
};