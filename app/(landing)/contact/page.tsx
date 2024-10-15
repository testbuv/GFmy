import React from "react";
import Link from "next/link";
import { LandingNav } from "@/components/landing/landing-nav";
import { LandingFooter } from "@/components/landing/landing-footer";
import { Map } from "@/components/map";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: 'Contact Us',
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
                    {/* Address */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-regular">Address</h3>
                      <p className="primary-foreground-dark dark:text-primary-foreground-dark">
                        GROWTHFAST LTD
                        <br />
                        Company Address: 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
                        <br />
                        Company number: 15932559
                      </p>
                    </div>

                    {/* Contact Info: Email & Phone */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-regular">Contact Info</h3>
                      <div className="flex flex-col space-y-1">
                        <Link className="text-foreground-dark hover:hover-gradient-text underline-offset-2" href="mailto:hello@growthfast.io">
                          hello@growthfast.io
                        </Link>
                        <Link className="text-foreground-dark hover:hover-gradient-text underline-offset-2" href="tel:+447456312571">
                          +447456312571
                        </Link>
                      </div>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-regular">Follow Us</h3>
                      <div className="flex items-center space-x-4">
                        <Link href="https://instagram.com" aria-label="Instagram">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-foreground-dark hover:text-plum-600 transition-colors duration-200"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </Link>
                        <Link href="https://x.com/thegrowthfast" aria-label="Twitter">
                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="24"
                              height="24"
                              fill="currentColor"
                            >
                              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                            </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-large shadow-md">
                  <Map />
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
