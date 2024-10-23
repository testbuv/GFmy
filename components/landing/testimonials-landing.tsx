"use client"

import { useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      text: "GrowthFast is a game-changer for my workflow! As a graphic designer, I'm constantly looking for tools that can bring my ideas to life quickly and accurately. GrowthFast does just that and more. The text-to-image feature is incredibly powerful, and the results are always stunning. The website is easy to navigate, and I appreciate the clear instructions and demos provided. Highly recommended for anyone in the creative field!",
      author: "Jane",
      role: "Graphic Designer",
    },
    {
      text: "I've been using GrowthFast for months now and it has completely transformed my business. The AI-powered features are incredibly accurate and save me so much time. I'm able to generate high-quality images and content in a fraction of the time it would take me manually. Highly recommend GrowthFast to any entrepreneur or marketer looking to streamline their workflow.",
      author: "Michael",
      role: "Digital Marketer",
    },
    {
      text: "As a small business owner, I was hesitant to try an AI-powered tool like GrowthFast. But I'm so glad I did! The platform is user-friendly and the results are amazing. I've been able to create stunning visuals for my social media and website that have really helped my brand stand out. The customer support team is also incredibly helpful and responsive. Highly recommend GrowthFast to any small business owner looking to take their marketing to the next level.",
      author: "Sarah",
      role: "Small Business Owner",
    },
  ]
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-2xl font-bold mb-8">What our users say</h2>
      <div className="relative bg-glass-gradient border-glass border-[1px] border-solid box-border p-8 rounded-lg shadow-lg max-w-4xl">
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
          <ChevronRightIcon className="w-6 h-6" />
        </div>
        <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
        <div className="flex items-center mt-4">
          <div>
            <p className="font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
