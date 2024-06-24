import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'

export const LandingFooter = () => {
  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        {/* Branding and Payment Methods */}
        <div className="flex flex-col items-start">
          <Link href="/" className="text-xl-semi uppercase hover:text-primary transition-colors duration-200">
            Growth Fast.io.
          </Link>
          <section className="flex justify-start items-center space-x-6 mt-4">
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

        <div className="flex justify-between w-full">
          {/* Contact Section */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl-semi uppercase">Contact</span>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/contact" className="hover:hover-gradient-text  transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@op-app.co" className="hover:hover-gradient-text transition-colors duration-200">
                  Email Support
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="w-6 h-6 text-white hover:hover-gradient-text transition-colors duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="w-6 h-6 text-white hover:hover-gradient-text transition-colors duration-200" />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <TwitterLogoIcon className="w-6 h-6 text-white hover:hover-gradient-text transition-colors duration-200" />
              </Link>
            </div>
          </div>

          {/* Legals Section */}
          <div className="flex flex-col gap-y-2">
            <span className="text-xl-semi uppercase">Legals</span>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/tc" className="hover:hover-gradient-text transition-colors duration-200">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/pp" className="hover:hover-gradient-text transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cc" className="hover:hover-gradient-text transition-colors duration-200">Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex justify-center items-center">
        <span className="text-xsmall-regular text-muted-foreground">
          © Copyright 2024 Growth Fast.io.
        </span>
      </div>
    </div>
  );
}