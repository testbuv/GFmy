import React from "react";
import { LandingNav } from "@/../../components/landing/landing-nav";
import { LandingFooter } from "@/../../components/landing/landing-footer";
import { Metadata } from 'next';
import  Pricing  from "@/../../components/landing/pricing";
import { GeistSans } from "geist/font/sans";



export const metadata: Metadata = {
    title: 'Pricing',
};
export default function PricingPage() {
    return (
        <>
        <LandingNav />
        <div className={`${GeistSans.className}`}>
          <div className="flex flex-col min-h-[100vh]">
            <main className="flex-1">
                <section className="w-70% py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                    <Pricing />
                    </div>
                </section>
                <section className="border-t border-t-gradient-to-r mx-auto mt-6 max-w-screen-xl">
                    <LandingFooter />
                </section>
            </main>
            </div>
        </div>
    </>
    );
}
