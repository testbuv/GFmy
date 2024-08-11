import Image from 'next/image';
import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 bg-black">
      <div className="w-full max-w-5xl relative rounded-[40px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.4)_0.55%,_rgba(255,_255,_255,_0))] border-glass border-[1px] border-solid box-border p-6 md:p-12 flex flex-col items-center justify-between md:flex-row">
        <div className="md:hidden relative flex items-center justify-center mb-8">
          <Image src="/image8.png" alt="Newsletter" width={256} height={382} className="rounded-lg" />
          <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden rounded-full shadow-lg md:w-28 md:h-28">
            <Image src="/Ellipse48.png" alt="Newsletter" width={256} height={256} className="rounded-lg" />
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden rounded-full shadow-lg md:w-14 md:h-14">
            <Image src="/Ellipse49.png" alt="Newsletter" width={131} height={131} className="rounded-lg" />
          </div>
        </div>
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-base font-semibold text-pink-400 md:text-lg">For Daily Updates</h2>
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">Subscribe to our Newsletter!</h1>
          <div className="flex flex-col md:flex-row items-center w-full mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow h-12 px-4 text-gray-300 bg-black border border-gray-700 rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-400 mb-2 md:mb-0"
            />
            <button className="h-12 px-6 text-white bg-plum-800 rounded-lg md:rounded-l-none md:rounded-r-lg hover:bg-plum-600 w-full md:w-auto">Subscribe</button>
          </div>
        </div>
        <div className="hidden md:block relative flex items-center justify-center mt-8 md:mt-0 md:w-1/2">
          <Image src="/image8.png" alt="Newsletter" width={256} height={382} className="rounded-lg" />
          <div className="absolute top-0 left-0 overflow-hidden rounded-full shadow-lg md:w-14 md:h-14 transform -translate-x-1/3 -translate-y-1/3">
            <Image src="/Ellipse48.png" alt="Newsletter" width={256} height={256} className="rounded-lg" />
          </div>
          <div className="absolute bottom-0 right-40 overflow-hidden rounded-full shadow-lg md:w-14 md:h-14 transform translate-x-1/3 translate-y-1/3">
            <Image src="/Ellipse49.png" alt="Newsletter" width={131} height={131} className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};