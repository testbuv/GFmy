import React from 'react';

export const NewsletterSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <div className="w-full relative rounded-[73px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.4)_0.55%,_rgba(255,_255,_255,_0))] border-glass border-[1px] border-solid box-border h-[509px] flex flex-col items-center justify-between p-8 md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-lg font-semibold text-pink-400">For Daily Updates</h2>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Subscribe to our Newsletter!</h1>
          <div className="flex items-center w-full mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="flex-grow h-12 px-4 text-gray-300 bg-black border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="h-12 px-6 text-white bg-plum-800 rounded-r-lg hover:bg-plum-600">Subscribe</button>
          </div>
        </div>
        <div className="relative flex items-center justify-center mt-8 md:mt-0 md:w-1/2">
          <img src="/placeholder.svg" alt="Newsletter" className="w-64 h-64 rounded-lg shadow-lg" />
          <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden rounded-full shadow-lg">
            <img src="/placeholder.svg" alt="Newsletter" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-full shadow-lg">
            <img src="/placeholder.svg" alt="Newsletter" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};