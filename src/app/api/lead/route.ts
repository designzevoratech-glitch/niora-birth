import { NextRequest, NextResponse } from "next/server";
import {
  bookConsultationSchema,
  generateLeadId,
  LeadRecord,
  sanitizeInput,
} from "@/lib/types/lead-types";
import { checkIpRateLimit, checkPhoneDeduplication } from "@/lib/rate-limiter";
import { verifyCaptchaToken } from "@/lib/captcha";
import { appendLeadToGoogleSheets } from "@/lib/google-sheets";
import { sendLeadEmails } from "@/lib/email-service";

export async function POST(req: NextRequest) {
  try {
    // 1. Determine client IP for rate limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // 2. IP Rate Limiting Check (Max 5 submissions per 15 minutes)
    const rateLimitRes = checkIpRateLimit(clientIp);
    if (!rateLimitRes.allowed) {
      return NextResponse.json(
        { success: false, error: rateLimitRes.reason },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 3. Honeypot check for automated spambots
    if (body.honeypot && body.honeypot.trim() !== "") {
      // Quietly return success to confuse automated bots
      return NextResponse.json({
        success: true,
        leadId: generateLeadId(),
        message: "Request received.",
      });
    }

    // 4. Server-Side Zod Validation
    const validationResult = bookConsultationSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 5. Phone Deduplication Check (Reject duplicate phone within 10 minutes)
    const phoneDedupeRes = checkPhoneDeduplication(validData.mobileNumber);
    if (!phoneDedupeRes.allowed) {
      return NextResponse.json(
        { success: false, error: phoneDedupeRes.reason },
        { status: 429 }
      );
    }

    // 6. Security Captcha Verification (Cloudflare Turnstile)
    const captchaRes = await verifyCaptchaToken(validData.turnstileToken, clientIp);
    if (!captchaRes.success) {
      return NextResponse.json(
        { success: false, error: captchaRes.error },
        { status: 400 }
      );
    }

    // 7. Input Sanitization & Data Normalization
    const now = new Date();
    const submissionDate = now.toISOString().split("T")[0];
    const submissionTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const leadId = generateLeadId();

    const leadRecord: LeadRecord = {
      leadId,
      submissionDate,
      submissionTime,
      fullName: sanitizeInput(validData.fullName),
      phone: validData.mobileNumber,
      whatsapp: validData.whatsappNumber
        ? validData.whatsappNumber
        : validData.mobileNumber,
      email: validData.email,
      age: validData.age,
      city: sanitizeInput(validData.city),
      treatment: validData.treatment,
      preferredBranch: validData.preferredBranch,
      preferredDate: validData.preferredDate,
      preferredTime: validData.preferredTime,
      message: sanitizeInput(validData.additionalMessage || ""),
      status: "New",
      source: "Website",
      remarks: "Full Consultation Booking Form",
    };

    // 8. Append to Google Sheets & Send Dual Emails asynchronously
    const [sheetsRes, emailRes] = await Promise.all([
      appendLeadToGoogleSheets(leadRecord),
      sendLeadEmails(leadRecord),
    ]);

    if (!sheetsRes.success) {
      console.warn(`[Google Sheets Warning] Could not append lead ${leadId}: ${sheetsRes.error}`);
    }

    if (!emailRes.success) {
      console.warn(`[Email Service Warning] Could not send emails for lead ${leadId}: ${emailRes.error}`);
    }

    return NextResponse.json({
      success: true,
      leadId: leadRecord.leadId,
      data: leadRecord,
      message: "Consultation request booked successfully.",
    });
  } catch (error) {
    console.error("[POST /api/lead Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or contact us directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
