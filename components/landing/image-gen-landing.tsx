import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const ImageGenLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Unleash Your Imagination with AI Image Generation
        </h1>
        <p className="mt-4 text-base md:text-lg font-bold bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-transparent">
          Transform your text prompts into stunning, unique images in seconds!
        </p>
        <p className="mt-4 text-base md:text-lg">
          Our AI technology understands your words and creates breathtaking visuals that bring your ideas to life. Perfect for artists, designers, and anyone who loves to explore the power of visual creation.
        </p>
      </div>
      <div className="md:self-start">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-07-10+16.26.08+-+An+octopus+skateboarding+through+a+surreal+cityscape+with+a+Salvador+Dali+vibe.+The+octopus+has+vibrant%2C+swirling+tentacles+and+a+whimsical+expression.webp"
          alt="Image Generation"
          width={400}
          height={700}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};