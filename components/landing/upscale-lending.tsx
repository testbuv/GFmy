// File: app/dashboard/routes/image-gen/landing.tsx
import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";


const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const UpscaleLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  lg:gap-8">
    <div className="max-w-[350px] text-start">
      <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
        Enlarge and upscale your images.
      </h1>
    </div>
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  md:gap-8">
      <div>
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.37.55+-+Vertical+aspect+ratio+architecture+photos+of+London+buildings%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+film.+The+images+should+capture+the+u.webp"
          alt="Upscale"
          width={400}
          height={700}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
    </div>
  );
};
