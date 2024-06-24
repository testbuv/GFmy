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
          Unleash the Full Potential of Your Images
        </h1>
        <p className="mt-4 text-base md:text-lg">
          Discover the power of AI-driven image upscaling and take your visuals to new heights! Our cutting-edge technology allows you to effortlessly enlarge and enhance your images, transforming them into stunning, high-resolution masterpieces that will leave your audience in awe.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Say goodbye to the limitations of low-resolution images and hello to a world of crystal-clear clarity. Whether you're a professional photographer looking to print your work in large formats, a graphic designer in need of high-quality assets, or simply someone who wants to preserve precious memories in the best possible quality, our image upscaling tool is here to make it happen.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Our advanced AI algorithms work tirelessly behind the scenes, analyzing every pixel of your image and intelligently filling in the missing details. The result? Breathtakingly sharp and detailed images that maintain their integrity even when scaled up to much larger sizes. No more pixelation, no more blurriness – just pure, unadulterated visual perfection.
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