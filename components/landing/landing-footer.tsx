import React from "react";
import Link from "next/link";
import Image from "next/image";

export const LandingFooter = () => {
  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        {/* Branding and Payment Methods */}
        <div>
          <Link href="/" className="text-xl-semi uppercase hover:text-primary transition-colors duration-200">
            Growth Fast.io.
          </Link>
          <section className="flex justify-center items-center space-x-6 mt-4">
            <Image
              alt="MA"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="78"
              src="/ma_symbol_opt_73_3x.png"
              width="110"
            />
            <Image
              alt="V"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="99"
              src="/visa-secure_blk.png"
              width="99"
            />
          </section>
        </div>

        {/* Footer Links */}
        <div className="text-small-regular grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-xl-semi uppercase">Contact</span>
            <ul className="flex flex-col gap-y-2">
            <li>
                <Link href="mailto:hello@op-app.co" className="hover:text-primary transition-colors duration-200">
                  Support
                </Link>
              </li>
              <br/>
                  <p className="text-xsmall-regular text-gray-200">
                    Demo
                    Company number 
                  </p>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-xl-semi uppercase">Legals</span>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/tc" className="hover:text-primary transition-colors duration-200">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/pp" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cc" className="hover:text-primary transition-colors duration-200">Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col-reverse gap-y-4 justify-center items-center sm:flex-row sm:items-end sm:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          © Copyright 2024 Growth Fast.io.
        </span>
      </div>
    </div>
  );
}
