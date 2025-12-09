import { z } from "zod";

export const RegisterIPCSchema = z.object({
  nameOrg: z
    .string()
    .trim()
    .min(1, { error: "Name of organization is required" }),
  emailOrg: z
    .email({ error: "Email of organization is required" })
    .trim()
    .toLowerCase()
    .max(255, { error: "Email of organization cannot exceed 255 characters" }),
  phoneOrg: z
    .string()
    .trim()
    .refine((val) => !!val && /^[0-9]{10}$/.test(val), {
      error: "Phone number must be exactly 10 digits",
    }),
});

export type RegisterIPCFormValues = z.infer<typeof RegisterIPCSchema>;
