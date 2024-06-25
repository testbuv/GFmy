import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/session";
import prismadb from "@/lib/db";

export async function GET(request: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const creationId = searchParams.get("id");

  if (!creationId) {
    return new NextResponse("Missing creation ID", { status: 400 });
  }

  const creation = await prismadb.creation.findUnique({
    where: {
      id: creationId,
    },
    select: {
      imageUrl: true,
      domain: true,
    },
  });

  if (!creation || !creation.imageUrl) {
    return new NextResponse("Creation not found or missing image URL", { status: 404 });
  }

  return NextResponse.redirect(creation.imageUrl, {
    headers: {
      "Content-Disposition": `attachment; filename="${creation.domain}_creation.png"`,
    },
  });
}