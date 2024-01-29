import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const RemoveBgLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  lg:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Remove Background from your Image.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4  lg:flex-row ">
        <Image
          src="https://store-diet.s3.eu-north-1.amazonaws.com/removebg-src.png"
          alt="Remove Bg Source"
          width={800}
          height={500}
          className="rounded-sm"
        />

      </div>
    </div>
  );
};
