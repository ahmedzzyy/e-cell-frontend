import { z } from "zod";

export const LoginUserSchema = z.object({
  email: z
    .email()
    .trim()
    .toLowerCase()
    .max(255, { error: "Email cannot exceed 255 characters" }),
  password: z
    .string()
    .trim()
    .min(8, { error: "Password must be at least 8 characters" }),
});

export type LoginFormValues = z.infer<typeof LoginUserSchema>;
