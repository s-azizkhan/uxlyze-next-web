import { z } from "zod";

export const feedbackSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
