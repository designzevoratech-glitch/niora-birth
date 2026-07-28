import nodemailer from "nodemailer";
import path from "path";
import { LeadRecord } from "./types/lead-types";

// Official brand assets and URLs
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";
const ADMIN_PRIMARY_EMAIL = "Niorabirth@gmail.com";
const ADMIN_CC_EMAIL = "nioraartbank@gmail.com";

/**
 * Path to official cropped logo
 */
const LOGO_FILE_PATH = path.join(process.cwd(), "public", "updated_logo_cropped.png");

/**
 * Creates Nodemailer transporter from environment variables or returns null if not configured
 */
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Generates Patient Confirmation HTML Email with Gmail CID Logo & Table Layout
 */
export function generatePatientConfirmationEmail(lead: LeadRecord): string {
  const whatsappUrl = `https://wa.me/917994892509?text=${encodeURIComponent(
    `Hello Niora Birth,\n\nI have submitted my consultation request.\n\nLead ID: ${lead.leadId}\nName: ${lead.fullName}\nTreatment: ${lead.treatment}\n\nPlease contact me.`
  )}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Consultation Request Received | Niora Birth</title>
  <style>
    body { margin: 0; padding: 0; background-color: #F8F5F6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #2D2527; }
    .container { max-width: 600px; margin: 24px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 35px rgba(74, 46, 53, 0.08); border: 1px solid #F0E6E8; }
    .header { background: linear-gradient(135deg, #4A2E35 0%, #3D1F26 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
    .logo-card { display: inline-block; background: #ffffff; padding: 10px 24px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); margin-bottom: 12px; }
    .badge { display: inline-block; background: rgba(193, 122, 138, 0.25); color: #F5C6D0; padding: 6px 16px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 8px; }
    .content { padding: 36px 28px; }
    .greeting { font-size: 22px; font-weight: 700; color: #4A2E35; margin-bottom: 12px; }
    .lead-box { background: #FAF3F5; border-left: 4px solid #C17A8A; border-radius: 14px; padding: 20px 24px; margin: 24px 0; }
    .lead-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #8C787D; font-weight: 700; }
    .lead-id { font-size: 24px; font-weight: 800; color: #4A2E35; letter-spacing: 1px; margin-top: 4px; font-family: monospace; }
    .summary-card { background: #FFFFFF; border: 1px solid #EAE0E3; border-radius: 16px; padding: 20px; margin: 24px 0; }
    .summary-table { width: 100%; border-collapse: collapse; }
    .summary-table td { padding: 10px 0; border-bottom: 1px solid #F5EDED; font-size: 14px; }
    .summary-table tr:last-child td { border-bottom: none; }
    .summary-label { color: #7A696D; font-weight: 600; text-align: left; width: 45%; }
    .summary-val { color: #2D2527; font-weight: 700; text-align: right; width: 55%; }
    .timeline { margin: 28px 0; }
    .timeline-table { width: 100%; border-collapse: collapse; margin-bottom: 14px; }
    .timeline-num { width: 28px; height: 28px; border-radius: 50%; background: #C17A8A; color: #ffffff; font-weight: 700; text-align: center; line-height: 28px; font-size: 13px; }
    .timeline-text { font-size: 14px; color: #554549; line-height: 1.5; padding-left: 12px; }
    .btn-container { text-align: center; margin: 32px 0 16px; }
    .btn-whatsapp { display: inline-block; background: #25D366; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 50px; font-size: 14px; font-weight: 700; margin: 6px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); }
    .footer { background: #FAF5F7; padding: 28px; text-align: center; font-size: 12px; color: #8C787D; border-top: 1px solid #F0E6E8; line-height: 1.6; }
    .footer a { color: #C17A8A; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-card">
        <img src="cid:niora_logo" alt="Niora Birth" style="height: 44px; width: auto; display: block;" />
      </div>
      <br />
      <span class="badge">Request Confirmed & Registered</span>
    </div>
    
    <div class="content">
      <div class="greeting">Dear ${lead.fullName},</div>
      <p style="font-size: 15px; color: #554549; line-height: 1.6;">
        Thank you for choosing <strong>Niora Birth</strong>. Your consultation request has been successfully received, and our patient care team has logged your booking details.
      </p>

      <div class="lead-box">
        <div class="lead-label">Your Official Reference Lead ID</div>
        <div class="lead-id">${lead.leadId}</div>
      </div>

      <div class="summary-card">
        <div style="font-size: 13px; font-weight: 800; color: #4A2E35; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Your Booking Summary</div>
        <table class="summary-table">
          <tr><td class="summary-label">Patient Name</td><td class="summary-val">${lead.fullName}</td></tr>
          <tr><td class="summary-label">Mobile Number</td><td class="summary-val">+91 ${lead.phone}</td></tr>
          <tr><td class="summary-label">Treatment Interest</td><td class="summary-val">${lead.treatment}</td></tr>
          <tr><td class="summary-label">Preferred Branch</td><td class="summary-val">${lead.preferredBranch}</td></tr>
          <tr><td class="summary-label">Requested Date</td><td class="summary-val">${lead.preferredDate}</td></tr>
          <tr><td class="summary-label">Preferred Time Slot</td><td class="summary-val">${lead.preferredTime}</td></tr>
        </table>
      </div>

      <div style="font-size: 16px; font-weight: 700; color: #4A2E35; margin-top: 24px; margin-bottom: 14px;">Next Steps</div>
      
      <div class="timeline">
        <table class="timeline-table">
          <tr>
            <td style="vertical-align: top; width: 32px;"><div class="timeline-num">1</div></td>
            <td class="timeline-text"><strong>Personal Coordinator:</strong> A dedicated clinical care coordinator will call you at <strong>+91 ${lead.phone}</strong> within <strong>2 hours</strong>.</td>
          </tr>
        </table>
        <table class="timeline-table">
          <tr>
            <td style="vertical-align: top; width: 32px;"><div class="timeline-num">2</div></td>
            <td class="timeline-text"><strong>Specialist Slot:</strong> We match your condition with trusted fertility specialists and confirm your appointment time.</td>
          </tr>
        </table>
      </div>

      <div class="btn-container">
        <a href="${whatsappUrl}" class="btn-whatsapp" target="_blank">Chat Directly on WhatsApp</a>
        <a href="tel:+917994892509" class="btn-primary" style="display:inline-block; background:#4A2E35; color:#ffffff !important; text-decoration:none; padding:14px 28px; border-radius:50px; font-size:14px; font-weight:700; margin:6px;">Call Patient Care Desk</a>
      </div>
    </div>

    <div class="footer">
      <p style="margin-bottom: 6px;"><strong>Niora Birth Fertility Consultation & Guidance Platform</strong></p>
      <p style="margin-bottom: 6px;">MC Road, Pezhakkappilly, Muvattupuzha, Kerala 686673</p>
      <p style="margin-bottom: 6px;">Helpline: +91 79948 92509 | Desk: +91 97454 77622</p>
      <p style="margin-bottom: 0;">Email: <a href="mailto:${ADMIN_PRIMARY_EMAIL}">${ADMIN_PRIMARY_EMAIL}</a> | Web: <a href="${SITE_URL}">${SITE_URL}</a></p>
      <p style="margin-top: 14px; font-size: 11px; color: #A8989C;">© ${new Date().getFullYear()} Niora Birth. All rights reserved. Confidential Patient Guidance Receipt.</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generates Admin Notification HTML Email
 */
export function generateAdminNotificationEmail(lead: LeadRecord): string {
  const sheetUrl = process.env.GOOGLE_SHEETS_VIEW_URL || "#";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Lead Booking - ${lead.leadId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F6F8; margin: 0; padding: 20px; }
    .card { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #E1E6EB; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #4A2E35; color: #ffffff; padding: 24px; text-align: left; }
    .logo-img { height: 36px; width: auto; display: block; margin-bottom: 12px; background: #fff; padding: 6px 12px; border-radius: 8px; }
    .lead-badge { display: inline-block; background: #C17A8A; color: #ffffff; font-weight: 800; font-size: 14px; padding: 6px 14px; border-radius: 8px; margin-top: 6px; }
    .table-container { padding: 24px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #F0F3F5; font-size: 14px; }
    th { background: #FAF7F8; color: #4A2E35; font-weight: 700; width: 35%; }
    td { color: #1E293B; font-weight: 500; }
    .btn-group { padding: 20px 24px 28px; background: #FAF7F8; text-align: center; border-top: 1px solid #E1E6EB; }
    .btn { display: inline-block; padding: 12px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 13px; margin: 4px; }
    .btn-call { background: #10B981; color: #ffffff !important; }
    .btn-email { background: #4A2E35; color: #ffffff !important; }
    .btn-sheet { background: #2563EB; color: #ffffff !important; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <img src="cid:niora_logo" alt="Niora Birth" class="logo-img" />
      <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #F5C6D0;">New Consultation Lead Captured</div>
      <div style="font-size: 24px; font-weight: 800; margin-top: 4px;">${lead.fullName} (${lead.city})</div>
      <div class="lead-badge">Lead ID: ${lead.leadId}</div>
    </div>

    <div class="table-container">
      <table>
        <tr><th>Lead ID</th><td><strong>${lead.leadId}</strong></td></tr>
        <tr><th>Submission Date & Time</th><td>${lead.submissionDate} at ${lead.submissionTime}</td></tr>
        <tr><th>Patient Name</th><td><strong>${lead.fullName}</strong></td></tr>
        <tr><th>Phone Number</th><td><a href="tel:+91${lead.phone}" style="color: #C17A8A; font-weight: 700;">+91 ${lead.phone}</a></td></tr>
        <tr><th>WhatsApp Number</th><td><a href="https://wa.me/91${lead.whatsapp || lead.phone}" style="color: #10B981; font-weight: 700;">+91 ${lead.whatsapp || lead.phone}</a></td></tr>
        <tr><th>Email Address</th><td><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
        <tr><th>Age</th><td>${lead.age} years</td></tr>
        <tr><th>City / Location</th><td>${lead.city}</td></tr>
        <tr><th>Treatment Interested</th><td><span style="background: #FAF0F2; color: #4A2E35; padding: 4px 10px; border-radius: 6px; font-weight: 700;">${lead.treatment}</span></td></tr>
        <tr><th>Preferred Branch</th><td>${lead.preferredBranch}</td></tr>
        <tr><th>Requested Date</th><td>${lead.preferredDate}</td></tr>
        <tr><th>Requested Time</th><td>${lead.preferredTime}</td></tr>
        <tr><th>Patient Message</th><td>${lead.message || "No additional message provided."}</td></tr>
        <tr><th>Lead Status</th><td><strong style="color: #E11D48;">${lead.status}</strong></td></tr>
        <tr><th>Source</th><td>${lead.source}</td></tr>
      </table>
    </div>

    <div class="btn-group">
      <a href="tel:+91${lead.phone}" class="btn btn-call">📞 Call Patient Now</a>
      <a href="mailto:${lead.email}?subject=Regarding%20Your%20Niora%20Birth%20Consultation%20(Ref:%20${lead.leadId})" class="btn btn-email">✉️ Reply via Email</a>
      ${sheetUrl !== "#" ? `<a href="${sheetUrl}" class="btn btn-sheet" target="_blank">📊 Open Google Sheet</a>` : ""}
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Sends patient confirmation & admin alert emails using Nodemailer with CID logo attachments
 */
export async function sendLeadEmails(lead: LeadRecord): Promise<{ success: boolean; error?: string }> {
  const transporter = createTransporter();

  const patientHtml = generatePatientConfirmationEmail(lead);
  const adminHtml = generateAdminNotificationEmail(lead);

  const fromEmail = process.env.SMTP_FROM || `"Niora Birth Care Team" <${ADMIN_PRIMARY_EMAIL}>`;

  if (!transporter) {
    console.warn(
      `[Email Service Warning] SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) not configured. Emails logged to console in dev mode.`
    );
    console.log(`--- [PATIENT EMAIL (${lead.email})] ---\nSubject: Your Consultation Request Received | Niora Birth\n${lead.fullName}`);
    console.log(`--- [ADMIN EMAIL (${ADMIN_PRIMARY_EMAIL}, CC: ${ADMIN_CC_EMAIL})] ---\nSubject: New Consultation Booking | ${lead.leadId}`);
    return { success: true };
  }

  try {
    const promises: Promise<unknown>[] = [];

    // Attach official logo via CID attachment so Gmail/Outlook render it natively
    const mailAttachments = [
      {
        filename: "niora-logo.png",
        path: LOGO_FILE_PATH,
        cid: "niora_logo",
      },
    ];

    // Check if patient email is valid & not a dummy fallback
    const isValidPatientEmail =
      lead.email &&
      lead.email.includes("@") &&
      !lead.email.includes("niorabirth.com") &&
      !lead.email.includes("example.com");

    if (isValidPatientEmail) {
      promises.push(
        transporter.sendMail({
          from: fromEmail,
          to: lead.email,
          subject: `Your Consultation Request Received - Niora Birth (Ref: ${lead.leadId})`,
          html: patientHtml,
          attachments: mailAttachments,
        }).catch((err) => {
          console.error(`[Patient Email Error] Failed to send to ${lead.email}:`, err);
        })
      );
    } else {
      console.log(`[Patient Email Skipped] Dummy or test email: ${lead.email}`);
    }

    // Always send Admin Notification Email
    promises.push(
      transporter.sendMail({
        from: fromEmail,
        to: ADMIN_PRIMARY_EMAIL,
        cc: ADMIN_CC_EMAIL,
        subject: `New Consultation Booking - Lead ID: ${lead.leadId} (${lead.fullName})`,
        html: adminHtml,
        attachments: mailAttachments,
      }).catch((err) => {
        console.error(`[Admin Email Error] Failed to send to admin:`, err);
      })
    );

    await Promise.allSettled(promises);

    return { success: true };
  } catch (error) {
    console.error("[Email Dispatch Error]", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email notifications",
    };
  }
}
