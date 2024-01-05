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
