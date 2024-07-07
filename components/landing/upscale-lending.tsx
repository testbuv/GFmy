// File: app/dashboard/routes/image-gen/landing.tsx
import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const UpscaleLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Enhance Your Images with AI Upscaling
        </h1>
        <p className="mt-4 text-base md:text-lg font-bold bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-transparent">
          Enlarge your images up to 4x without losing quality!
        </p>
        <p className="mt-4 text-base md:text-lg">
          Our advanced AI technology intelligently upscales your images, delivering crystal-clear results perfect for printing, graphic design, and preserving precious memories.
        </p>
      </div>
      <div className="md:self-start">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.55+-+Vertical+aspect+ratio+architecture+photos+of+London+buildings%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+The+images+should+capture+the+u.webp"
          alt="Upscale"
          width={400}
          height={700}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};