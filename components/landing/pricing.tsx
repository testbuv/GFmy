"use client"

import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"
export default function Pricing() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const pricingPlans = [
    {
      name: "Custom Credits",
      description: "You choose the volume",
      price: "€0.01",
    },
    {
      name: "1000 Credits",
      description: "Up to 5 creations.",
      price: "€10",
    },
    {
      name: "2500 Credits",
      description: "Up to 12 creations.",
      price: "€25",
    },
    {
      name: "5000 Credits",
      description: "Up to 25 creations.",
      price: "€50",
      isMostPopular: true,
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pricingPlans.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pricingPlans.length - 1 ? 0 : prevIndex + 1))
  }

  const renderPlanFeatures = (plan: typeof pricingPlans[0]) => (
    <>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
        {plan.name === "Custom Credits" 
          ? "Custom pricing with discounts" 
          : `${plan.description}`}
      </li>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
        Remove Image's Background
      </li>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
        Enlarge your Images
      </li>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
        Stable Diffusion
      </li>
      <li className="flex items-center">
        <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
        Text to Image
      </li>
    </>
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="mb-8 text-3xl font-bold">Pricing</h1>
      {/* Desktop view */}
      <div className="hidden md:grid gap-8 md:grid-cols-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full relative rounded-[73px] bg-glass-gradient border-glass border-[1px] border-solid box-border h-[509px] flex flex-col items-center justify-between p-8 md:flex-row"
          >
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-lg">{plan.name}</div>
              </CardHeader>
              <CardContent className="mt-4">
                <ul className="space-y-2">
                  {renderPlanFeatures(plan)}
                </ul>
                <Link href={"/sign-in"}>
                  <Button className="w-full mt-6 bg-plum-800 text-white hover:bg-plum-600">
                    Get Started
                  </Button>
                </Link>
                <div className="mt-2 text-center text-sm text-gray-400">
                  No credit card required
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {/* Mobile view */}
      <div className="md:hidden relative w-full max-w-sm">
        <div className="flex flex-col items-center justify-center">
          <Card className="w-full bg-glass-gradient border-glass border-[1px] border-solid">
            <CardHeader className="text-center">
              <div className="text-4xl font-bold">{pricingPlans[currentIndex].price}</div>
              <div className="text-lg">{pricingPlans[currentIndex].name}</div>
            </CardHeader>
            <CardContent className="mt-4">
              <ul className="space-y-2 mb-4">
                {renderPlanFeatures(pricingPlans[currentIndex])}
              </ul>
              <Link href="/sign-in" className="w-full">
                <Button className="w-full bg-plum-800 text-white hover:bg-plum-600">
                  Get Started
                </Button>
              </Link>
              <div className="mt-2 text-center text-sm text-gray-400">
                No credit card required
              </div>
            </CardContent>
          </Card>
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 rounded-full p-2"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 rounded-full p-2"
          onClick={handleNext}
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {}

function CheckIcon(props: CheckIconProps) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

interface XIconProps extends React.SVGProps<SVGSVGElement> {}

function XIcon(props: XIconProps) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

interface ChevronLeftIconProps extends React.SVGProps<SVGSVGElement> {}

function ChevronLeftIcon(props: ChevronLeftIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  )
}

interface ChevronRightIconProps extends React.SVGProps<SVGSVGElement> {}

function ChevronRightIcon(props: ChevronRightIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )
}