"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface FreeCounterProps {
  creationCount: number;
  userCredits: number;
}

export const FreeCounter = ({ creationCount, userCredits }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const redirectToPricingTable = () => {
    router.push('/billing'); 
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className=" px-8 py-4 md:px-4">
      <Card className=" border-none bg-slate-900 shadow-lg shadow-primary">
        <CardHeader>
          <CardTitle className="text-md text-center font-semibold text-white ">
            {creationCount}/{userCredits} Credits consumed
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Progress
            className="h-3 outline-none"
            value={Math.min((creationCount / userCredits) * 100, 100)}
          />
          <Button
            onClick={redirectToPricingTable}
            className="mt-2 w-full rounded-md border-2 border-primary text-[12px] font-bold uppercase tracking-wider transition-colors hover:bg-primary hover:text-white"
            variant="outline"
          >
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};