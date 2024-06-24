import { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import  prismadb  from "@/lib/db";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Purchase History",
  description: "View your purchase history",
};

interface Purchase {
  id: string;
  userId: string;
  creditAmount: number;
  eurAmount: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export default async function PurchaseHistoryPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const purchases: Purchase[] = await prismadb.purchase.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Purchase History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {purchases.map((purchase: Purchase) => (
          <Card key={purchase.id}>
            <CardHeader>
              <CardTitle>Purchase ID: {purchase.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>User ID: {purchase.userId}</p>
                <p>Credit Amount: {purchase.creditAmount}</p>
                <p>EUR Amount: {purchase.eurAmount ?? 'N/A'}</p>
                <p>Created At: {purchase.createdAt.toString()}</p>
                <p>Updated At: {purchase.updatedAt.toString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}