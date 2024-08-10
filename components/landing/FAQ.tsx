"use client";
import React, { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 fontWeight:300">
          <p className="text-white">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="px-4 py-16 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">FAQs</span>
            </span>
          </h2>
        </div>
        <div className="space-y-4 text-center">
          <Item title="How can I use GrowthFast to enhance my social media presence?">
            GrowthFast offers a variety of tools to create stunning visuals that can make your social media posts stand out. From AI-generated images to background removal and upscaling, you can easily create professional-quality content.
          </Item>
          <Item title="Does GrowthFast offer any advanced editing tools for fine-tuning generated images or videos?">
            Yes, GrowthFast provides advanced editing tools that allow you to fine-tune your generated images and videos. You can adjust colors, add filters, and make other modifications to ensure your content looks perfect.
          </Item>
          <Item title="What sets GrowthFast apart from other image generation tools?">
            GrowthFast combines speed, precision, and flexibility. Our AI-powered tools are designed to deliver high-quality results quickly, and our user-friendly interface makes it easy for anyone to create stunning visuals, regardless of their design skills.
          </Item>
          <Item title="Are there any tutorials or guides available to help me get started?">
            Yes, GrowthFast offers a range of tutorials and guides to help you get started. Whether you're a beginner or an experienced designer, our resources will help you make the most of our tools.
          </Item>
        </div>
      </div>
    </div>
  );
}