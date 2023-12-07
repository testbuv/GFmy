import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const LandingFooter = () => {
  return (
    <>
      <div className="flex flex-col justify-around gap-4 p-4 text-white lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl">TestingAI</h2>
          <h5>
            Made by{" "}
            <Link href="https://github.com/eskoniarek">Esko</Link>
          </h5>
        </div>
        <Separator className="bg-pink-900 lg:hidden" />
        <p>Copyright © {new Date().getFullYear()} TestingAI</p>
      </div>
    </>
  );
};
