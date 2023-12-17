import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { getCurrentUser } from "@/lib/session";

import prismadb from "@/lib/db";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } },
  ) {
    const user = await getCurrentUser();
  
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  
    const prediction = await replicate.predictions.get(params.id);
    
    // Check if the prediction is still processing or has failed
    if (prediction?.status !== "succeeded" && prediction?.status !== "failed") {
      return NextResponse.json({ status: prediction.status, outputURL: [] });
    }
  
    // Handle successful prediction
    if (prediction?.status === "succeeded") {
      const imageUrls = prediction.output as string[];
  
      await prismadb.creation.createMany({
        data: imageUrls.map((imageUrl) => ({
          imageUrl,
          domain: "stable-diffusion",
          userId: user.id,
        })),
      });
  
      return NextResponse.json({
        status: prediction.status,
        outputURL: imageUrls,
      }, { status: 200 });
    } else {
      // Handle failed prediction
      return NextResponse.json({ status: prediction.status, outputURL: [] }, { status: 500 });
    }
  }
  