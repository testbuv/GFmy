'use client';
import React, { useRef, useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "next-auth";

type LandingHeroProps = {
  user?: User;
};

const CardSpotlight = ({ children }: { children: React.ReactNode }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 p-6 shadow-2xl sm:h-48 sm:w-48 sm:p-8"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.2), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

export const AboutSectionLanding = ({ user }: LandingHeroProps) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">Explore Your Creativity</h2>
      <p className="text-xl text-primary-foreground-dark mb-8">
        Make your idea a reality!
      </p>
     
      <div className="mt-10 animate-[fade-in-up_1.5s_ease-in-out] space-y-5 text-center">
        <Link href={user ? "/dashboard" : "/sign-in"}>
          <Button variant="primary" className="text-slate-950 font-medium shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            Generate
          </Button>
        </Link>
      </div>
    </div>
  );
};