import { NextRequest, NextResponse } from "next/server";
import {
  quickEnquirySchema,
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
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    // 1. IP Rate Limiting
    const rateLimitRes = checkIpRateLimit(clientIp);
    if (!rateLimitRes.allowed) {
      return NextResponse.json(
        { success: false, error: rateLimitRes.reason },
        { status: 429 }
      );
    }

    const body = await req.json();

    // 2. Honeypot check
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json({
        success: true,
        leadId: generateLeadId(),
        message: "Enquiry received.",
      });
    }

    // 3. Validation
    const validationResult = quickEnquirySchema.safeParse(body);
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
          error: "Please complete all required fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // 4. Phone Deduplication
    const phoneDedupeRes = checkPhoneDeduplication(validData.mobileNumber);
    if (!phoneDedupeRes.allowed) {
      return NextResponse.json(
        { success: false, error: phoneDedupeRes.reason },
        { status: 429 }
      );
    }

    // 5. Captcha Verification
    const captchaRes = await verifyCaptchaToken(validData.turnstileToken, clientIp);
    if (!captchaRes.success) {
      return NextResponse.json(
        { success: false, error: captchaRes.error },
        { status: 400 }
      );
    }

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
      whatsapp: validData.mobileNumber,
      email: "pending@niorabirth.com",
      age: "N/A",
      city: "Kerala / Online",
      treatment: validData.treatment,
      preferredBranch: "Kerala",
      preferredDate: submissionDate,
      preferredTime: "Morning (09:00 AM - 12:00 PM)",
      message: "Quick Enquiry Popup Submission (<20s)",
      status: "New",
      source: "Website (Quick Enquiry)",
      remarks: "Quick Enquiry Modal",
    };

    // 6. Save & Dispatch
    await Promise.all([
      appendLeadToGoogleSheets(leadRecord),
      sendLeadEmails(leadRecord),
    ]);

    return NextResponse.json({
      success: true,
      leadId: leadRecord.leadId,
      data: leadRecord,
      message: "Quick enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("[POST /api/enquiry Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
