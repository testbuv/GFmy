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
          Our intelligent background removal tool makes it simple to isolate the subject of your image from its background. Whether you need transparent PNGs for product listings, creative designs, or any other purpose, our AI-driven solution delivers precise and seamless results in just a few clicks.
        </p>
      </div>
      <Image
        src="https://tpstore-media.s3.eu-north-1.amazonaws.com/DALL%C2%B7E+2024-06-19+21.38.03+-+Vertical+aspect+ratio+architecture+photos+of+Mexico+City%2C+featuring+different+sights+and+landmarks%2C+taken+with+a+Mamya+650D+camera+using+Cinestill+50+.webp"
        alt="Remove Bg Source"
        width={400}
        height={700}
        className="mt-2 rounded-sm"
      />
    </div>
  );
};