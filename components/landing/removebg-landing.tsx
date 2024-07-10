import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const RemoveBgLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Remove Backgrounds Effortlessly
        </h1>
        <p className="mt-4 text-base md:text-lg font-bold bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-transparent">
          Save time and effort with our AI-powered background removal tool!
        </p>
        <p className="mt-4 text-base md:text-lg">
          Instantly remove backgrounds from your images with just a few clicks. Perfect for e-commerce, graphic design, and creative projects. Our AI technology delivers precise and seamless results every time.
        </p>
      </div>
      <div className="md:self-start">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Group+3.png"
          alt="Remove Bg Source"
          width={800}
          height={1400}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};