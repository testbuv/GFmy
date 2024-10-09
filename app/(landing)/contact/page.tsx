import React from "react";
import Link from "next/link";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingFooter } from "@/components/landing/landing-footer";
import { Metadata } from 'next';
import { Map } from "@/components/map";
import { GeistSans } from "geist/font/sans";



export const metadata: Metadata = {
    title: 'Cookies Policy',
};
export default function ContactPage() {
    return (
        <>
        <LandingNav />
        <div className={`${GeistSans.className}`}>
          <div className="flex flex-col min-h-[100vh]">
            <main className="flex-1">
                <section className="w-70% py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4">
                            <h2 className="inline-flex bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-3xl text-transparent">Contact Us</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-regular">Address</h3>
                                    <p className="primary-foreground-dark dark:text-primary-foreground-dark ">
                                        GrowthFast.io 
                                        < br />
                                        Company Address: 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                                        < br />
                                        Company number: 15932559
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-regular">Email</h3>
                                    <div className="flex items-center space-x-2">
                                        <Link className="text-foreground-dark hover:hover-gradient-text underline-offset-2" href="mailto:hello@growthfast.io">
                                            hello@growthfast.io
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="mt-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-large shadow-md">
                            < Map />
                            
                        </div>
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
