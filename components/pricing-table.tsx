"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User } from 'next-auth';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'id' | 'email'>
}

const EXCHANGE_RATE_EUR_TO_USD = 1.1; // Assuming 1 EUR = 1.1 USD
const EXCHANGE_RATE_EUR_TO_GBP = 0.9; // Assuming 1 EUR = 0.9 GBP

export default function PricingTable({ user }: Props) {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [selectedPlan, setSelectedPlan] = useState('');

  const calculateCustomPrice = (amount: number) => {
    if (amount <= 1000) {
      return amount *  0.01
    } else if (amount <= 2500) {
      return amount *  0.01
    } else if (amount <= 5000) {
      return amount *  0.01
    } else {
      return amount * 0.009;
    }
  };

  const pricingPlans = [
    {
      name: "Custom Credits",
      price: selectedCurrency === 'USD' 
        ? '$' + (calculateCustomPrice(Number(customAmount)) * EXCHANGE_RATE_EUR_TO_USD).toFixed(2) 
        : selectedCurrency === 'GBP' 
        ? '£' + (calculateCustomPrice(Number(customAmount)) * EXCHANGE_RATE_EUR_TO_GBP).toFixed(2) 
        : '€' + calculateCustomPrice(Number(customAmount)).toFixed(2),
      credits: Number(customAmount),
      creations: "Flexible",
      tokens: "Flexible",
    },
    {
      name: "10 EUR",
      price: selectedCurrency === 'USD' 
        ? '$' + (10 * EXCHANGE_RATE_EUR_TO_USD).toFixed(2) 
        : selectedCurrency === 'GBP' 
        ? '£' + (10 * EXCHANGE_RATE_EUR_TO_GBP).toFixed(2) 
        : '€10',
      credits: 1000,
      creations: "5",
      tokens: "1000",
    },
    {
      name: "25 EUR",
      price: selectedCurrency === 'USD' 
        ? '$' + (25 * EXCHANGE_RATE_EUR_TO_USD).toFixed(2) 
        : selectedCurrency === 'GBP' 
        ? '£' + (25 * EXCHANGE_RATE_EUR_TO_GBP).toFixed(2) 
        : '€25',
      credits: 2500,
      creations: "12",
      tokens: "2500",
      isMostPopular: true,
    },
    {
      name: "50 EUR",
      price: selectedCurrency === 'USD' 
        ? '$' + (50 * EXCHANGE_RATE_EUR_TO_USD).toFixed(2) 
        : selectedCurrency === 'GBP' 
        ? '£' + (50 * EXCHANGE_RATE_EUR_TO_GBP).toFixed(2) 
        : '€50',
      credits: 5000,
      creations: "25",
      tokens: "5000",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Pricing Plans</h2>
      <div className="flex justify-center mb-8">
        <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-8 md:grid-cols-4">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`w-full h-[509px] rounded-[20px] p-8 flex flex-col items-center justify-between bg-glass-gradient border-glass border-[1px] border-solid relative ${
              selectedPlan === plan.name ? "border-oval-shiny" : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <CardHeader className="text-center">
              <div className="text-4xl font-bold">{plan.price}</div>
              {plan.name === "Custom Credits" ? (
                <>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min={1}
                    className="mt-2 text-lg text-center bg-transparent outline-none"
                    placeholder="Enter amount"
                  />
                  <div className="mt-2 text-sm text-gray-400">Flexible credit amount</div>
                  <div className="mt-1 text-sm text-gray-400">Discounted pricing above 5000</div>
                </>
              ) : (
                <div className="text-lg">{plan.credits} Credits</div>
              )}
            </CardHeader>
            <CardContent className="mt-4 flex-grow">
              {plan.isMostPopular && (
                <div className="absolute top-0 left-0 right-0 h-full border-2 border-purple-500 rounded-[20px] pointer-events-none"></div>
              )}
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  {plan.creations} Creations
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                  {plan.tokens} Tokens
                </li>
              </ul>
            </CardContent>
            <Button className="mt-8 w-full bg-plum-800 text-white hover:bg-plum-600">
              Buy Now
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}