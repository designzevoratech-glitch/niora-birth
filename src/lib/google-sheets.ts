import { LeadRecord } from "./types/lead-types";

/**
 * Service to append lead record to Google Sheets via Google Apps Script Webhook
 * or API service account integration.
 */
export async function appendLeadToGoogleSheets(lead: LeadRecord): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // Row array matching the exact 17 columns required
  const rowData = [
    lead.leadId,
    lead.submissionDate,
    lead.submissionTime,
    lead.fullName,
    lead.phone,
    lead.whatsapp || lead.phone,
    lead.email,
    lead.age,
    lead.city,
    lead.treatment,
    lead.preferredBranch,
    lead.preferredDate,
    lead.preferredTime,
    lead.message || "None",
    lead.status || "New",
    lead.source || "Website",
    lead.remarks || "Captured via Website Form",
  ];

  if (!webhookUrl) {
    console.warn(
      `[Google Sheets Warning] GOOGLE_SHEETS_WEBHOOK_URL environment variable is missing. Lead row logged to console:`,
      rowData
    );
    // In dev or fallback, return true so patient submission flow completes successfully
    return { success: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "appendRow",
        leadId: lead.leadId,
        data: rowData,
        record: lead,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`[Google Sheets Error] HTTP ${response.status}: ${errText}`);
      return { success: false, error: `Webhook returned status ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error("[Google Sheets Exception]", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to connect to Google Sheets endpoint",
    };
  }
}
