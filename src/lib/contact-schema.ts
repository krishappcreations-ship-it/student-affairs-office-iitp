import { z } from "zod";

/** Shared validation for the contact form (client + server). */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Enter a valid email").max(150),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  // Honeypot: bots tend to fill it. Validation allows any string; the server
  // route treats a non-empty value as spam and drops it silently.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const CONTACT_FIELDS = [
  "name",
  "email",
  "organization",
  "subject",
  "message",
] as const;
