import prismadb from "@/lib/db";
import { UserWithTokenBalance } from "@/types";


export async function getUserSubscription(
  userId: string,
): Promise<UserWithTokenBalance | Error> {
  const user = await prismadb.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
      name: true,
        id: true,
        purchases: true,
        credits: true
    },
  });

  if (!user) {
    return new Error("User not found");
  }

  const isPro = user.purchases && user.purchases.length > 0;

  return {
    ...user,
    isPro: !!isPro,
  };
}
