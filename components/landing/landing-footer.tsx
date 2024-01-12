import React from "react";
import Link from "next/link";
import Image from "next/image";

export const LandingFooter = () => {
 
    return (
      <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
          <div>
            <Link href="/" className="text-xl-semi uppercase">
              Printinc AI.
            </Link>
            <section className="flex justify-center items-center space-x-6 hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600">
              <div className="flex items-center">
                <Image
                  alt="MA"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="156"
                  src="/ma_symbol_opt_73_3x.png"
                  width="220"
                />
              </div>
              <div className="flex items-center">
                <Image
                  alt="V"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  height="198"
                  src="/visa-secure_blk.png"
                  width="198"
                />
              </div>
            </section>
          </div>
          <div className="flex justify-righy items-center space-x-6 hover:scale-105 transition-transform duration-200 border-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600">
          <div className="text-small-regular grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-16">
          <div className="flex flex-col gap-y-2 order-none">
              <span className="text-base-semi">Contact</span>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <a
                    href="mailto:support@Printinc AI.shop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2 order-none">
              <span className="text-base-semi">Legals</span>
              <ul className="flex flex-col gap-y-2">
                <li>
                  <Link href={"/tc"}>Terms and Conditions</Link>
                </li>
                <li>
                  <Link href={"/pp"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/cc"}>Cookies Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-4 justify-center items-center sm:flex-row sm:items-end sm:justify-between">
          <span className="text-xsmall-regular text-gray-500">
            © Copyright 2023 Printinc AI.
          </span>
        </div>
      </div>
    )
  }
  
  
