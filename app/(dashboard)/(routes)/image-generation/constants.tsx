import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, "Prompt is required").default("a vision of paradise. unreal engine"),
  height: z.number().default(1024),
  width: z.number().default(1024),
  negative_prompt: z.string().optional(),
  num_outputs: z.number().min(1).max(4).default(1),
  num_inference_steps: z.number().default(50),
  guidance_scale: z.number().default(7.5),
  scheduler: z.enum(['DDIM', 'K_EULER', 'DPMSolverMultistep', 'K_EULER_ANCESTRAL', 'PNDM', 'KLMS']).default('DPMSolverMultistep'),
  seed: z.number().optional()
});

export const amountOptions = [
  { value: "1", label: "1 Image" },
  { value: "2", label: "2 Images" },
  { value: "3", label: "3 Images" },
  { value: "4", label: "4 Images" }
];

