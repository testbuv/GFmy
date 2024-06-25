import { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import prismadb from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Creations",
  description: "View your creations history",
};

interface Creation {
  id: string;
  imageUrl: string | null;
  domain: string;
  createdAt: Date;
  userId: string;
}

export default async function CreationsHistoryPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const creations = await prismadb.creation.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      imageUrl: true,
      domain: true,
      createdAt: true,
    },
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Creations History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creations.map((creation) => (
          <Card key={creation.id}>
            <CardHeader>
              <CardTitle>{creation.domain}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {creation.imageUrl && (
                  <Image
                    src={creation.imageUrl}
                    alt={creation.domain}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-md"
                  />
                )}
                <p>Created At: {creation.createdAt.toISOString()}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/api/download?id=${creation.id}`}>
                <button className="btn hover:hover-gradient-text  transition-colors duration-200 border-b-gradient-to-r" disabled={!creation.imageUrl}>
                  Download
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}