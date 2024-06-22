import Image from "next/image";
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
        <ul className="text-left text-lg text-primary-foreground-dark space-y-4 mb-8">
          <li>✓ Cutting-edge AI technology for image generation, upscaling, and background removal</li>
          <li>✓ Intuitive and user-friendly interface, suitable for users of all skill levels</li>
          <li>✓ Significant time and cost savings compared to traditional design methods</li>
          <li>✓ Faster time to market for your designs and campaigns</li>
          <li>✓ Seamless integration with your existing design workflow</li>
        </ul>
        <div className="mt-10 animate-[fade-in-up_1.5s_ease-in-out] space-y-5 text-center ">
      <Link href={user ? "/dashboard" : "/sign-in"}>
       <Button variant="primary" className="text-slate-950 font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
           Save Time and Effort
          </Button>
        </Link>
      </div>
    </div>
    </div>
  );
};