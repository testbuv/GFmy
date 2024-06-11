import { ChevronDown } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingSection } from "@/components/landing/landing-section";
import { LandingSectionFirst } from "@/components/landing/landing-section-first";
import { LandingSectionTwo } from "@/components/landing/landing-section-two";
import { LandingSectionThree } from "@/components/landing/landing-section-three";
import {LandingFooter} from "@/components/landing/landing-footer";
import { CookieConsent } from "@/components/landing/cookies-consent";


export default async function Landing() {
  const user = await getCurrentUser();

  return (
    <>
      <main>
        <section className="mx-auto h-screen max-w-screen-xl ">
          <LandingNav user={user} />
          <LandingHero user={user} />
          <ChevronDown className=" m-auto animate-[fade-in_1.5s_ease-out,bounce_1s_infinite_2s] text-white" />
        </section>
        <section className="mx-auto h-screen w-full bg-white">
          <LandingSection />
        </section>
        <section className="mx-auto h-screen w-full bg-white">
        <LandingSectionFirst />
       </section>
       <section className="mx-auto h-screen w-full bg-white">
  <LandingSectionTwo />
 </section>
        <div className="h-60 bg-white lg:hidden"></div>
        <section className="mx-auto h-screen w-full bg-white">
          <LandingSectionThree />
        </section>    
        <CookieConsent />    
      </main>
      <section className="mx-auto mt-6 max-w-screen-xl">
                <LandingFooter />
            </section>
    </>
  );
}
