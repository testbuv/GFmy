import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

import { getCurrentUser } from "@/lib/session";
import { checkApiLimit } from "@/lib/api-limit";
import { getUserSubscription } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { prompt, num_outputs, height, width, guidance_scale } = body;

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const subscriptionPlan = await getUserSubscription(user.id);
    if (subscriptionPlan instanceof Error) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!freeTrial && !subscriptionPlan.isPro) {
      return new NextResponse("Free Tier Ended", { status: 403 });
    }

    // Specify the model for video generation
    const modelURL = "71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f"; // Replace with the actual model ID for video generation

    // Prepare the request options for video generation
    const req_options = {
      prompt: prompt,
      num_outputs: num_outputs || 1,
      num_frames: 27,
      fps: 8,
      height: height || 576,
      width: width || 320,
      guidance_scale: guidance_scale || 7.5,
    };

    const output = await replicate.predictions.create({
      version: modelURL,
      input: req_options,
    });

    if (output?.error) {
      return NextResponse.json({ detail: output.error }, { status: 500 });
    }

    return NextResponse.json({
      generation_id: output.id,
      status: output.status,
    }, { status: 200 });
  } catch (err: any) {
    console.error("[VIDEO_GENERATION_BACKEND_ERROR]", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
