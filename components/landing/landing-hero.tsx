import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black p-8 relative overflow-hidden">
      <div className="text-center md:text-left md:max-w-lg space-y-4 md:mr-8 z-10">
        <h1 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-500">
            BRINGING WORDS
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-500">TO LIFE</span>
        </h1>
        <p className="text-xl text-white">Turn ideas into real photos, vectors, videos and much more...</p>
        <div>
          <Link href={"/sign-in"}>
            <Button className="bg-plum-800 hover:bg-plum-600 text-white px-6 py-3 rounded-full">
              Generate <SparkleIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 relative z-10">
        <Image
          src="/hero2.png"
          alt="Hero Image"
          className="rounded-lg shadow-lg"
          width={563}
          height={638}
          style={{ aspectRatio: "563/638", objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-10 right-0 w-2/3 h-full z-0">
        <Image
          src="/Group1.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
        />
      </div>
    </section>
  );
}