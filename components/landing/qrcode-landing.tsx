import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const font = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

export const QRCodeLanding = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row  md:gap-8">
      <div className="max-w-[350px] text-start">
        <h1 className={cn("text-2xl md:text-4xl lg:text-5xl", font.className)}>
          Generate Stylised QR Codes from your prompts.
        </h1>
      </div>
      <div>
        <Image
          src="https://store-diet.s3.eu-north-1.amazonaws.com/qrlanding2.png"
          alt="QR Code"
          width={800}
          height={500}
          className="mt-2 rounded-sm"
        />
      </div>
    </div>
  );
};
