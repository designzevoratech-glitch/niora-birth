import { z } from "zod";

export const BRANCH_OPTIONS = ["Kerala", "Bangalore", "Tamil Nadu"] as const;

export const TREATMENT_OPTIONS = [
  "IVF",
  "IUI",
  "ICSI",
  "Fertility Consultation",
  "Male Infertility",
  "Female Infertility",
  "Egg Freezing",
  "Embryo Freezing",
  "Egg Donation",
  "Sperm Donation",
  "Surrogacy",
  "Pregnancy Care",
] as const;

export const TIME_SLOTS = [
  "Morning (09:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 04:00 PM)",
  "Evening (04:00 PM - 07:00 PM)",
] as const;

/**
 * Sanitizes input string to prevent XSS / HTML / JS injection
 */
export function sanitizeInput(input: string | null | undefined): string {
  if (!input) return "";
  return input
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Strips phone numbers down to clean digit strings
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Formats date object or string into YYYYMMDD string
 */
export function getFormattedDateString(date: Date = new Date()): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

/**
 * Generates Lead ID in format NB-YYYYMMDD-XXX
 */
export function generateLeadId(): string {
  const dateStr = getFormattedDateString();
  const randomNum = Math.floor(100 + Math.random() * 900); // 3-digit random number
  return `NB-${dateStr}-${randomNum}`;
}

/**
 * Zod validation schema for Full Consultation Form
 */
export const bookConsultationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be between 3 and 60 characters")
    .max(60, "Full Name must be between 3 and 60 characters")
    .refine((val) => /^[a-zA-Z\s'.]+$/.test(val.trim()), {
      message: "Full Name can only contain alphabets and spaces",
    }),

  mobileNumber: z
    .string()
    .refine((val) => normalizePhoneNumber(val).length === 10, {
      message: "Mobile number must be exactly 10 digits",
    })
    .refine((val) => /^[6789]\d{9}$/.test(normalizePhoneNumber(val)), {
      message: "Mobile number must start with 6, 7, 8, or 9",
    }),

  whatsappNumber: z.string().optional(),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  age: z
    .number({ message: "Please enter a valid age" })
    .min(18, "Age must be between 18 and 99")
    .max(99, "Age must be between 18 and 99"),

  city: z
    .string()
    .min(2, "City must be between 2 and 60 characters")
    .max(60, "City must be between 2 and 60 characters"),

  preferredBranch: z.enum(BRANCH_OPTIONS, {
    message: "Please select a valid branch",
  }),

  treatment: z.enum(TREATMENT_OPTIONS, {
    message: "Please select a valid treatment",
  }),

  preferredDate: z
    .string()
    .refine(
      (val) => {
        if (!val) return false;
        const selected = new Date(val);
        selected.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 90);
        maxDate.setHours(23, 59, 59, 999);

        return selected >= today && selected <= maxDate;
      },
      { message: "Date must be between today and 90 days in the future" }
    ),

  preferredTime: z.enum(TIME_SLOTS, {
    message: "Please select a valid consultation time slot",
  }),

  additionalMessage: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .optional(),

  honeypot: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export type BookConsultationFormData = z.infer<typeof bookConsultationSchema>;

/**
 * Zod validation schema for Quick Enquiry Popup
 */
export const quickEnquirySchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be between 3 and 60 characters")
    .max(60, "Name must be between 3 and 60 characters")
    .refine((val) => /^[a-zA-Z\s'.]+$/.test(val.trim()), {
      message: "Name can only contain alphabets and spaces",
    }),

  mobileNumber: z
    .string()
    .refine((val) => normalizePhoneNumber(val).length === 10, {
      message: "Mobile number must be exactly 10 digits",
    })
    .refine((val) => /^[6789]\d{9}$/.test(normalizePhoneNumber(val)), {
      message: "Mobile number must start with 6, 7, 8, or 9",
    }),

  treatment: z.enum(TREATMENT_OPTIONS, {
    message: "Please select a valid treatment",
  }),

  honeypot: z.string().optional(),
  turnstileToken: z.string().optional(),
});

export type QuickEnquiryFormData = z.infer<typeof quickEnquirySchema>;

/**
 * Full Lead Record object stored to Google Sheets and sent via email
 */
export interface LeadRecord {
  leadId: string;
  submissionDate: string;
  submissionTime: string;
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  age: number | string;
  city: string;
  treatment: string;
  preferredBranch: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  status: string;
  source: string;
  remarks: string;
}
