"use client";
import { FunctionComponent, useState } from 'react';
import Link from "next/link";
import { User } from "next-auth";

type LandingNavProps = {
  user?: User;
};

export const LandingNav: FunctionComponent<LandingNavProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-8 md:py-6 text-white font-poppins">
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <div className="flex flex-row items-start justify-start gap-2 text-left font-lokanova">
          <img className="w-8 h-8 md:w-10 md:h-10 relative overflow-hidden shrink-0 object-cover" alt="" src="/logo.png" />
          <div className="text-xl md:text-2xl relative tracking-[0.03em] uppercase inline-block shrink-0 font-lokanova">GrowthFast</div>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
                 <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8 text-lg md:text-xl`}
      >
        <Link href="#benefits" className="hover:text-plum-600">
          Features
        </Link>
        <Link href="#pricing" className="hover:text-plum-600">
          Pricing
        </Link>
        <Link href="#testimonials" className="hover:text-plum-600">
          About
        </Link>
        <Link href="#faq" className="hover:text-plum-600">
          FAQ
        </Link>
      </div>
      <Link href={user ? "/dashboard" : "/sign-in"}>
        <div className="hidden md:flex bg-[#981C82] hover:bg-plum-600 text-white px-6 py-2 rounded-lg text-lg">
          <div className="relative">Generate</div>
          <img className="w-5 h-5 ml-2" alt="" src="/Group 3.svg" />
        </div>
      </Link>
    </div>
  );
};