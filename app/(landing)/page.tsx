import { ChevronDown } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import  Hero  from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import Gallery from "@/components/ui/landing-gallery";
import  Benefits  from "@/components/landing/ladning-benefits"
import  Testimonials  from "@/components/landing/testimonials-landing";
import { LandingFooter } from "@/components/landing/landing-footer";
import { CookieConsent } from "@/components/landing/cookies-consent";
import FAQ from "@/components/landing/FAQ";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import Pricing from "@/components/landing/pricing";
import Image from "next/image";
export default async function Landing() {
  const user = await getCurrentUser();

  return (
    <>
      <main>
        <section className="mx-auto min-h-screen max-w-screen-xl">
          <LandingNav user={user} />
          <Hero />
          <ChevronDown className="m-auto animate-[fade-in_1.5s_ease-out,bounce_1s_infinite_2s] text-white" />
        </section>
        
        <section className="mx-auto min-h-screen max-w-screen-xl">
        
  
            <Gallery />
        </section>
      <section id="benefits" className="mx-auto py-6 w-full">
  <div className="container mx-auto px-4">
    <Benefits />
  </div>
</section>
<section id="testimonials" className="mx-auto py-6 w-full">
  <div className="container mx-auto px-4">
    <Testimonials />
  </div>
</section>
<section id="faq" className="mx-auto py-6 w-full">
  <div className="container mx-auto px-4">
    <FAQ />
  </div>
</section>
<section id="pricing" className="mx-auto py-6 w-full">
  <div className="container mx-auto px-4">
    <Pricing />
  </div>
</section>
        <section className="mx-auto py-6 w-full">
          <div className="container mx-auto px-4">
            <NewsletterSection />
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