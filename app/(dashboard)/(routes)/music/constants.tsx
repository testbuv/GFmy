import * as z from "zod";

export const formSchema = z.object({
  prompt_a: z.string().min(1, {
    message: "Music prompt is required"
  }),
});
