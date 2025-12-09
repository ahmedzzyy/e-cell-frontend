import { z } from "zod";

export const UpdateProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { error: "Name is required" })
    .max(100, { error: "Name cannot exceed 100 characters" }),
  email: z
    .email({ error: "Invalid email address" })
    .trim()
    .toLowerCase()
    .max(255, { error: "Email cannot exceed 255 characters" }),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || val.trim() === "" || /^[0-9]{10}$/.test(val), {
      error: "Phone number must be exactly 10 digits",
    }),
  college: z
    .string()
    .trim()
    .max(200, { error: "College name cannot exceed 200 characters" })
    .optional(),
  expectedGraduationYear: z
    .number()
    .int()
    .min(2020, { error: "Year must be 2020 or later" })
    .max(2040, { error: "Year must be 2040 or earlier" })
    .optional()
    .nullable(),
  studentCollegeID: z
    .string()
    .trim()
    .max(50, { error: "Student ID cannot exceed 50 characters" })
    .optional(),
});

export type UpdateProfileFormValues = z.infer<typeof UpdateProfileSchema>;
