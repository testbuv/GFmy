import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { getCurrentUser } from "@/lib/session";
import prismadb from "@/lib/db";
import { uploadMultipleImages } from "@/lib/cloudinary";

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

  try {
    const prediction = await replicate.predictions.get(params.id);

    if (prediction?.status === "succeeded") {
      const imageUrls = prediction.output as string[];

      const cloudinary_resp = await uploadMultipleImages(imageUrls);

      await prismadb.creation.createMany({
        data: cloudinary_resp.map((imageUrl) => ({
          imageUrl,
          domain: "stable-diffusion",
          userId: user.id,
          prompt: "", // Add the missing 'prompt' property
          model_latency: 0, // Add the missing 'model_latency'
        })),
      });

      return NextResponse.json({
        status: prediction.status,
        outputURL: cloudinary_resp,
      }, { status: 200 });
    } else if (prediction?.status === "failed") {
      // Handle failed prediction
      console.error("[STABLE_DIFFUSION_PREDICTION_FAILED]", prediction.error);
      return NextResponse.json(
        {
          status: prediction.status,
          error: prediction.error,
        },
        { status: 500 }
      );
    } else {
      // Handle other prediction statuses (e.g., processing)
      return NextResponse.json({ status: prediction.status, outputURL: [] });
    }
  } catch (error) {
    console.error("[STABLE_DIFFUSION_API_ERROR]", error);
    return NextResponse.json(
      {
        status: "error",
        error: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}