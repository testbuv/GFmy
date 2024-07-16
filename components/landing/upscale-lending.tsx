// File: app/dashboard/routes/image-gen/landing.tsx
import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const UpscaleLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="max-w-[800px] text-center">
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
      <div className="grid grid-cols-1 gap-4 md:grid-rows-1">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Group+1.png"
          alt="Upscale"
          width={800}
          height={400}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};