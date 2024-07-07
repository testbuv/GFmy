import Link from "next/link";
import { Button } from "@/components/ui/button"
import { User } from "next-auth";

type LandingHeroProps = {
  user?: User;
};

export const AboutSectionLanding = ({ user }: LandingHeroProps) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Why Growth Fast.io?</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-primary-foreground-dark mb-8">
          Growth Fast.io is the ultimate solution for designers and businesses looking to leverage the power of AI for their creative needs. Our platform offers:
        </p>

      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
      <div className="relative p-4 bg-zinc-500 shadow-md">
        <div className="absolute inset-0 transform -rotate-6 bg-gray-200" />
        <div className="relative z-10">
          <p className="mt-2">✓ Cutting-edge AI technology for image generation, upscaling, and background removal</p>
        </div>
      </div>
      <div className="relative p-4 bg-zinc-500 shadow-md">
        <div className="absolute inset-0 transform rotate-6 bg-gray-200" />
        <div className="relative z-10">
          <p className="mt-2">✓ Significant time and cost savings compared to traditional design methods</p>
        </div>
      </div>
      <div className="relative p-4 bg-zinc-500 shadow-md">
        <div className="absolute inset-0 transform rotate-6 bg-gray-200" />
        <div className="relative z-10">
          <p className="mt-2">✓ Faster time to market for your designs and campaigns</p>
        </div>
      </div>
      <div className="relative p-4 bg-zinc-500 shadow-md">
        <div className="absolute inset-0 transform -rotate-6 bg-gray-200" />
        <div className="relative z-10">
          <p className="mt-2">✓ Seamless integration with your existing design workflow</p>
        </div>
      </div>
    </div>
        <div className="mt-10 animate-[fade-in-up_1.5s_ease-in-out] space-y-5 text-center ">
      <Link href={user ? "/dashboard" : "/sign-in"}>
       <Button variant="primary" className="text-slate-950 font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
           Try Now
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};