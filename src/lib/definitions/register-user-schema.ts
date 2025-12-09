import { z } from "zod";

export const RegisterUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Name is required" })
    .max(100, { error: "Name cannot exceed 100 characters" }),
  email: z
    .email({ error: "Email is required" })
    .trim()
    .toLowerCase()
    .max(255, { error: "Email cannot exceed 100 characters" }),
  password: z
    .string()
    .trim()
    .min(8, { error: "Password must be at least 8 characters" })
    .max(20, { error: "Password cannot exceed 20 characters" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || val.trim() === "" || /^[0-9]{10}$/.test(val), {
      error: "Phone number must be 10 digits",
    }),
});

export type RegisterFormValues = z.infer<typeof RegisterUserSchema>;
