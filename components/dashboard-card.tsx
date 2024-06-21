import React from "react";
import Image from "next/image";

import {
  Card,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface DashboardCardProps {
  img: string;
  heading: string;
  description: string;
}

export const DashboardCard = ({
  img,
  heading,
  description,
}: DashboardCardProps) => {
  return (
    <Card className="max-w-[350px] overflow-hidden">
      <div className="relative h-full w-full">
      <span className="absolute inset-[-1000%] bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69]" />
        <div className="relative z-10 flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-6">
          <Image
            src={img}
            className="w-full rounded-md p-2"
            alt={description}
            width={500}
            height={500}
          />
          <CardFooter className="flex flex-col items-start justify-center space-y-1 p-2">
            <CardTitle className="text-xl">{heading}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};