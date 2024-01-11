import * as z from "zod";

// LoginSchema

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  code: z.optional(z.string()),
});

// SignupSchema

export const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(1, {
    message:"Name is required",
  }),
});

// ResetSchema

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

// NewPasswordSchema

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});