import React from "react";
import Image from "next/image";

export const LandingFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start md:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="GrowthFast Logo"
              className="h-12 w-12"
              width="50"
              height="50"
              style={{ aspectRatio: "50/50", objectFit: "cover" }}
            />
            <h1 className="ml-2 text-3xl font-bold">GROWTHFAST</h1>
          </div>

          <p className="text-lg font-bold">
            AI image generation tool where <br />
            <span className="italic">speed</span> meets{" "}
            <span className="italic font-normal">precision</span> and <br />
            <span className="bg-gradient-to-r from-[#981C82] to-[#FFB017] bg-clip-text text-transparent">
              imagination
            </span>{" "}
            knows no limits.
          </p>

          {/* Юридическая информация */}
          <div className="wd-image text-left mt-4">
            <p className="p1">
              GROWTHFAST LTD, a company registered under the laws of the United Kingdom under the company number 15932559 and the registered address 71-75, Shelton Street, Covent Garden, London, WC2H 9JQ
            </p>
          </div>

          {/* Логотипы платёжных систем */}
          <section className="flex justify-start items-center space-x-6 mt-4">
            <Image
              alt="Mastercard"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="78"
              src="/ma_symbol_opt_73_3x.png"
              width="110"
            />
            <Image
              alt="Visa"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="99"
              src="/visa-secure_blk.png"
              width="99"
            />
          </section>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <nav className="space-y-2">
              <a
                href="https://growthfast.io/#pricing"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="https://growthfast.io/#faq"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Legals</h2>
            <nav className="space-y-2">
              <a
                href="/docs/Terms_of_Use.pdf"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                Terms of Use
              </a>
              <a
                href="/docs/Privacy_Policy.pdf"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/docs/Cookies_Policy.pdf"
                className="block hover:text-plum-600 transition-colors duration-200"
              >
                Cookies Policy
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy;2024 GROWTHFAST LTD All Rights Reserved</p>

        {/* Социальные иконки */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <FacebookIcon className="h-6 w-6 text-white" />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon className="h-6 w-6 text-white" />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterIcon className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// Facebook
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Instagram
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Twitter
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
