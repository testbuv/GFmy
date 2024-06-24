import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

type LandingNavProps = {
  user?: User;
};

export const LandingNav = ({ user }: LandingNavProps) => {
  return (
    <nav className=" flex items-center justify-between rounded-lg bg-white/10 px-4 py-2 shadow-2xl drop-shadow backdrop-blur-3xl lg:mt-2">
      <Link href="/" className="flex items-center">
        <div className="relative mr-2 h-8 w-8">
          <Image fill src="/logo.png" alt="Logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Growth Fast.io
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button
            variant="primary" className="text-slate-950 font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">

            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
