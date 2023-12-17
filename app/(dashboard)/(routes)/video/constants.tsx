import * as z from "zod";

export const formSchema = z.object({
  fps: z.number().min(1).max(60).default(8),
  width: z.number().default(576),
  height: z.number().default(320),
  prompt: z.string().min(1, "Prompt is required").default("A macro video of a bee pollinating a flower"),
  num_frames: z.number().min(1).max(100).default(27),
  guidance_scale: z.number().default(7.5),
  num_inference_steps: z.number().default(50)
});

export const fpsOptions = [
  { value: "8", label: "8 FPS" },
  { value: "15", label: "15 FPS" },
  { value: "24", label: "24 FPS" },
  { value: "30", label: "30 FPS" },
  { value: "60", label: "60 FPS" }
];

export const numFramesOptions = [
  { value: "10", label: "10 Frames" },
  { value: "20", label: "20 Frames" },
  { value: "27", label: "27 Frames" },
  { value: "50", label: "50 Frames" },
  { value: "100", label: "100 Frames" }
];
