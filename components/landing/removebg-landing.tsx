import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const RemoveBgLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="max-w-[800px] text-center">
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
      <div className="grid grid-cols-1 gap-4 md:grid-rows-3">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-16+at+23.16.57.png"
          alt="Remove Bg Source"
          width={800}
          height={400}
          className="mt-2 rounded-sm"
        />
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-16+at+23.19.29.png"
          alt="Remove Bg Source"
          width={800}
          height={400}
          className="mt-2 rounded-sm"
        />
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-16+at+23.17.25.png"
          alt="Remove Bg Source"
          width={800}
          height={400}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};