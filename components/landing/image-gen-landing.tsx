// File: app/dashboard/routes/image-gen/landing.tsx
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
          Unleash Your Creativity with AI-Powered Image Generation
        </h1>
        <p className="mt-4 text-base md:text-lg">
          Bring your wildest ideas to life with our cutting-edge AI image generation technology. Simply enter a prompt, and watch as our advanced algorithms transform your words into breathtaking visual masterpieces. The possibilities are endless – let your imagination run wild!
        </p>
      </div>
      <Image
        src="https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.53+-+Vertical+aspect+ratio+architecture+photos+of+London%2C+featuring+different+sights+and+bridges%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+T.webp"
        alt="Image Generation"
        width={400}
        height={700}
        className="mt-2 rounded-sm"
      />
    </div>
  );
};