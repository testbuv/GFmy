import { getCurrentUser } from "@/lib/session";
import prismadb from "@/lib/db"; 

export const checkApiLimit = async (
  ) => {

  const user = await getCurrentUser();

  if(!user) {
    throw new Error("Not authenticated");
  }

  const tokenBalance = await prismadb.user.findUnique({
    where: {
      id: user.id

    },
    select: {
      credits: true    
    }   
  });
  
  const creationCount = await getCreationCount();

  if (tokenBalance && tokenBalance.credits && creationCount >= tokenBalance.credits) {
    throw new Error("Out of credits");
  } else {  
    return true;
  }

};

export const getCreationCount = async () => {
  const user = await getCurrentUser();

  if (!user) return 0;

  const count = await prismadb.creation.count({
    where: {
      userId: user.id,
    },
  });

  if (count) return count;
  else return 0;
};

export function calculateCreditAmount(amount: number): number {
  const amountEuros = amount / 100; // Convert to full EUR units

  switch (amountEuros) {
    case 10:
      return 20;
    case 20:
      return 100;
    case 35:
      return 200;
    default:
      return amountEuros / 0.5; // Custom rate: 0.5 EUR per credit
  }
}