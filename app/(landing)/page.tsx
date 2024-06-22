import { ChevronDown } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingSection } from "@/components/landing/landing-section";
import { LandingSectionFirst } from "@/components/landing/landing-section-first";
import { LandingSectionTwo } from "@/components/landing/landing-section-two";
import { LandingSectionThree } from "@/components/landing/landing-section-three";
import { LandingTestimonials } from "@/components/landing/testimonials-landing";
import { LandingFooter } from "@/components/landing/landing-footer";
import { CookieConsent } from "@/components/landing/cookies-consent";

export default async function Landing() {
  const user = await getCurrentUser();

  return (
    <>
      <main>
        <section className="mx-auto min-h-screen max-w-screen-xl">
          <LandingNav user={user} />
          <LandingHero user={user} />
          <ChevronDown className="m-auto animate-[fade-in_1.5s_ease-out,bounce_1s_infinite_2s] text-white" />
        </section>
        <section className="mx-auto py-20 w-full bg-white">
          <div className="container mx-auto px-4">
            <LandingSection />
          </div>
        </section>
        <section className="mx-auto py-20 w-full bg-gray-100">
          <div className="container mx-auto px-4">
            <LandingTestimonials />
          </div>
        </section>
        <section className="mx-auto py-20 w-full bg-white">
          <div className="container mx-auto px-4">
            <LandingSectionFirst />
          </div>
        </section>
        <section className="mx-auto py-20 w-full bg-gray-100">
          <div className="container mx-auto px-4">
            <LandingSectionTwo />
          </div>
        </section>
        <section className="mx-auto py-20 w-full bg-white">
          <div className="container mx-auto px-4">
            <LandingSectionThree />
          </div>
        </section>
        <CookieConsent />
      </main>
      <footer className="mx-auto mt-6 max-w-screen-xl">
        <LandingFooter />
      </footer>
    </>
  );
}