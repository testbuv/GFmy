"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, ReactElement } from "react";
import { usePromodal } from "@/store/promodal-store";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session"; 
import { getUserTokenBalance, getCreationCount} from "@/lib/api-limit";

export const FreeCounter = (): ReactElement | null => {
  const [creationCount, setCreationCount] = useState<number>(0);
  const [user, setUser] = useState<any>();
  const [credits, setCredits] = useState<number>();
  const promodal = usePromodal();

  useEffect(() => {
    const fetchUserAndCreditsAndCount = async () => {
      const fetchedUser = await getCurrentUser();
      setUser(fetchedUser);
      if(!fetchedUser) return;

      const credits = await getUserTokenBalance(fetchedUser.id);
      const count = await getCreationCount();
      setCredits(credits);
      setCreationCount(count);
    }
    
    fetchUserAndCreditsAndCount();

  }, [])

  if(!credits) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {creationCount}/{credits} Creations Available 
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Progress 
          value={Math.min((creationCount / credits) * 100, 100)} 
        />
        
        <Button onClick={promodal.onOpen}>
          Upgrade 
        </Button>
      </CardContent>

    </Card>
  )

}