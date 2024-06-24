"use client"

import React, { useState, MouseEvent, useCallback } from "react";
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

const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
};

export const DashboardCard = ({
  img,
  heading,
  description,
}: DashboardCardProps) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 8; // Adjust the divisor for a gentler tilt
      const rotateY = (centerX - x) / 8; // Adjust the divisor for a gentler tilt

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Card
      className="max-w-[350px] overflow-hidden transition-[all_600ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 600ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
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