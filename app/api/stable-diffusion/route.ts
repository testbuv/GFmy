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

    // Specify the model for Stable Diffusion
    const modelURL = "8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f";

    // Prepare the request options for Stable Diffusion
    const req_options = {
      prompt: prompt,
      num_outputs: num_outputs || 1,
      height: height || 1024,
      width: width || 1024,
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
    console.error("[STABLE_DIFFUSION_BACKEND_ERROR]", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
