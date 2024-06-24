import { Metadata } from "next";
import Image from "next/image";

import { UserAuthForm } from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-240 md:h-[500px]">
        <Image
          src="https://tpstore-media.s3.eu-north-1.amazonaws.com/replicate-prediction-fm5r18fcvsrge0cg9adtt2a0gc.gif"
          loading="lazy"
          priority={false}
          quality={80}
          fill
          sizes="100vw"
          alt="Landing"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-20 flex items-center text-4xl font-medium text-white">
            <div className="relative mr-2 h-10 w-10">
              <Image fill alt="Logo" src="/logo.svg" />
            </div>
            Growth Fast.io
          </div>
        </div>
      </div>
      <div className="flex-grow p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to Growth Fast.io
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}