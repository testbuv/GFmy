import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const RemoveBgLanding = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8">
      <div className="max-w-[800px] md:w-1/2">
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
      <div className="md:w-1/2">
        <div className="flex flex-col items-start">
          <div className="flex justify-between w-full mb-2">
            <p className="text-sm font-bold">Before:</p>
            <p className="text-sm font-bold">After:</p>
          </div>
          <Image
            src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-16+at+23.19.29.png"
            alt="Remove Bg Before"
            width={600}
            height={300}
            className="mt-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col items-start mt-4">
          <Image
            src="https://tpstore-media.s3.eu-north-1.amazonaws.com/Screenshot+2024-07-16+at+23.17.25.png"
            alt="Remove Bg After"
            width={600}
            height={300}
            className="mt-2 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};