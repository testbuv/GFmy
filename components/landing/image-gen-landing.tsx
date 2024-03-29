// File: app/dashboard/routes/image-gen/landing.tsx
import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const ImageGenLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  md:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Create Stunning Images with AI.
        </h1>
        <p className="mt-4 text-base md:text-lg">
          Enter a prompt and let AI transform it into a visual masterpiece.
        </p>
      </div>
        <Image
          src="https://store-diet.s3.eu-north-1.amazonaws.com/imagegen-landing2.png" // Replace with an actual sample image URL
          alt="Image Generation"
          width={600}
          height={300}
          className="mt-2 rounded-sm"
        />
      </div>
  );
};
