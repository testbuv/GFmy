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
    const { prompt_a } = body;

    if (!prompt_a) {
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

    const modelURL = "8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05";

    const req_options = {
      prompt_a: prompt_a,
      // Add other parameters as per your application's need
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
    console.error("[MUSIC_GENERATION_BACKEND_ERROR]", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
