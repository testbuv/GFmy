import { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import prismadb from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { Gallery } from "@/components/ui/image-gallery";
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
const images = [
  { src: 'https://tpstore-media.s3.eu-north-1.amazonaws.com/La%20Boca%20Buenos%20Aires%20copy%20Large.png', aspect_ratio: 16 / 9 },
  { src: 'https://tpstore-media.s3.eu-north-1.amazonaws.com/Huntington%20Park%20in%20San%20Francisco%20Main-1718561387554.png', aspect_ratio: 16 / 9 },
  { src: 'https://tpstore-media.s3.eu-north-1.amazonaws.com/Recoleta+Buenos+Aires%2C+styled+as+if+shot+on+Cinestill+50+film.+The+scene+should+highlight+the+historical+architectur.webp', aspect_ratio: 16 / 9 },
  { src: 'https://tpstore-media.s3.eu-north-1.amazonaws.com/Palace+of+Finearts+SF+Main+Large.png', aspect_ratio: 16 / 9 }
]
const widths = [500, 1000, 1600]
const ratios = [2.2, 4, 6, 8]

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
      <h1 className="text-3xl font-semibold mb-4">Creations History - WIP</h1>
      <div className="flex flex-col gap-10">
        <Gallery {...{ widths, ratios, images }} lastRowBehavior="match-previous" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {creations.map((creation) => (
          <Card key={creation.id}>
            <CardHeader>
              <CardTitle>{creation.domain}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {creation.imageUrl && (
                  <img src={creation.imageUrl} alt={creation.domain} className="w-full h-auto rounded-md" />
                )}
                <p>Created At: {creation.createdAt.toISOString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}