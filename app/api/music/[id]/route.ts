import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { getCurrentUser } from "@/lib/session";

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

  if (prediction?.status !== "succeeded") {
    return NextResponse.json({ status: prediction.status }, { status: 500 });
  }

  const { audio, spectrogram } = prediction.output as { audio: string; spectrogram: string };

  return NextResponse.json({
    audio,
    spectrogram,
  }, { status: 200 });
}
