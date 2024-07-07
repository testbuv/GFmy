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
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="relative h-screen">
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
            <div className="w-full max-w-md p-8 bg-transparent rounded-lg shadow-lg">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="relative z-20 flex items-center text-4xl font-medium">
                  <div className="relative mr-2 h-10 w-10">
                    <Image fill alt="Logo" src="/logo.png" />
                  </div>
                  <span className="inline-flex bg-gradient-to-r from-[#ed6ea0] to-[#ec8c69] bg-clip-text text-4xl text-transparent font-medium">
                  Growth Fast.io
                  </span>
              </div>
             <br />
              </div>
              <UserAuthForm />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="flex-grow p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="relative z-20 flex items-center text-4xl font-medium">
                <div className="relative mr-2 h-10 w-10">
                  <Image fill alt="Logo" src="/logo.png" />
                </div>
                Growth Fast.io
              </div>
             <br />
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  );
}