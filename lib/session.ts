import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/db"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export async function getUserCredits() {
  const user = await getCurrentUser();

  if (!user) return;

  const credits = await prismadb.user.findUnique({
    where: { id: user.id },
    select: { credits: true },
  });

  return credits?.credits ?? 0;
}

export async function addUserCredits(credits: number) {
  const user = await getCurrentUser();

  if (!user) return;

  return prismadb.user.update({
    where: { id: user.id },
    data: {
      credits: { increment: credits }
    }
  });
}