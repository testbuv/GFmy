"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface CreditsProps {
  creationCount: number;
  userCredits: number;
}

export const Credits = ({ creationCount, userCredits }: CreditsProps) => {
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  
    <></>
 (
    <div className=" px-8 py-4 md:px-4">
      <Card className=" border-none bg-slate-900 shadow-lg shadow-primary">
        <CardHeader>
          <CardTitle className="text-md text-center font-semibold text-white ">
            {creationCount}/{userCredits} Available Credits
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <Progress
            className="h-3 outline-none"
            value={Math.min((creationCount / userCredits) * 100, 100)}
          />

        </CardContent>
      </Card>
    </div>
  );
};