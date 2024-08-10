import React from "react";
import { AboutSectionLanding } from "./about-landing";

export const LandingSection = () => {
  return (
    <main className="p-4 text-center text-white">
      <div className="mt-28">
        <div className="text-5xl font-semibold md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-transparent">
            Bringing Words
          </span>{" "}
          To Life
        </div>
        <p className="mt-4 text-sm lg:text-lg">
          Turn ideas into real photos, vectors, videos and much more...
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] text-white rounded-full">
          Generate
        </button>
      </div>
      <div className="p-8 lg:mt-8 lg:p-16">
        <AboutSectionLanding />
      </div>
    </main>
  );
};