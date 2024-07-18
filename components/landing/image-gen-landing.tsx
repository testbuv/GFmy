import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const ImageGenLanding = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8">
      <div className="max-w-[800px] md:w-1/2">
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
      <div className="grid grid-cols-1 gap-4 md:w-1/2">
        <div className="flex items-start">
          <Image
            src="https://tpstore-media.s3.eu-north-1.amazonaws.com/out-0.png"
            alt="Image Generation"
            width={400}
            height={200}
            className="mt-2 rounded-sm"
          />
        </div>
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-18+at+21.26.58.png"
          alt="Image Generation"
          width={400}
          height={400}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};