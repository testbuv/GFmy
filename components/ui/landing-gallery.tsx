import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { User } from "next-auth";

type GalleryProps = {
  user?: User;
};

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

export default function Gallery({ user }: GalleryProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
      
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
          Explore Creativity
        </h1>
        <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-2">
          <SparkleIcon className="w-6 h-6 text-white" />
          <input
            type="text"
            placeholder="Make your idea a reality!"
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
                    <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button className="bg-plum-800 text-white rounded-full px-4 py-2">Generate</Button>
          </Link>
        
        </div>
        <div className="grid grid-cols-3 gap-9 mt-8">
          <div className="relative">
            <Image
              src="/Rectangle22.png"
              alt="Gallery Image 1"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative">
            <Image
              src="/Rectangle23.png"
              alt="Gallery Image 2"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative">
            <Image
              src="/Rectangle24.png"
              alt="Gallery Image 3"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative">
            <Image
              src="/Rectangle25.png"
              alt="Gallery Image 4"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative">
            <Image
              src="/Rectangle26.png"
              alt="Gallery Image 5"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative">
            <Image
              src="/Rectangle27.png"
              alt="Gallery Image 6"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-9 mt-9">
          <div className="relative opacity-60">
            <Image
              src="/Rectangle28.png"
              alt="Gallery Image 7"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative opacity-40">
            <Image
              src="/Rectangle29.png"
              alt="Gallery Image 8"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
          <div className="relative opacity-20">
            <Image
              src="/Rectangle30.png"
              alt="Gallery Image 9"
              className="rounded-lg"
              width={277}
              height={383}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg" />
          </div>
        </div>
        <div className="mt-8">
          <Link href={user ? "/dashboard" : "/sign-in"}>
            <Button className="bg-plum-800 hover:bg-plum-600 text-white rounded-full px-4 py-2">Generate</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}