import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const RemoveBgLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Effortlessly Remove Backgrounds from Your Images
        </h1>
        <p className="mt-4 text-base md:text-lg">
          Say goodbye to the hassle of manually removing backgrounds from your images! Our cutting-edge background removal tool, powered by advanced AI technology, makes the process a breeze. With just a few clicks, you can easily isolate the subject of your image and remove the background, leaving you with a pristine, transparent PNG ready for any application.
        </p>
        <p className="mt-4 text-base md:text-lg">
          Whether you're an e-commerce business looking to showcase your products in the best light, a graphic designer in need of clean, isolated elements for your compositions, or simply someone who wants to get creative with their photos, our background removal tool has got you covered. No more tedious manual selection or time-consuming editing – our AI-driven solution does the heavy lifting for you, delivering precise and seamless results every time.
        </p>
      </div>
      <div className="md:self-start">
      <Image
        src="https://tpstore-media.s3.eu-north-1.amazonaws.com/remove-bg.png"
        alt="Remove Bg Source"
        width={400}
        height={700}
        className="mt-2 rounded-sm"
      />
      </div>
    </div>
  );
};