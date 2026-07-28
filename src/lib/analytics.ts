"use client";

export type AnalyticsEvent =
  | "book_consultation_click"
  | "quick_enquiry_click"
  | "quick_enquiry_submit"
  | "whatsapp_click"
  | "call_button_click"
  | "form_started"
  | "form_submitted"
  | "submission_success"
  | "submission_failure";

interface EventPayload {
  category?: string;
  label?: string;
  leadId?: string;
  treatment?: string;
  branch?: string;
  source?: string;
  error?: string;
  [key: string]: unknown;
}

/**
 * Universal analytics tracker that emits events to Google Analytics (gtag),
 * Facebook Pixel (fbq), custom dataLayer, and console log for debugging.
 */
export function trackEvent(eventName: AnalyticsEvent, payload: EventPayload = {}): void {
  if (typeof window === "undefined") return;

  const eventData = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // 1. Console logging for development / debugging
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event] ${eventName}:`, eventData);
  }

  // 2. Google Analytics (gtag)
  if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
    (window as unknown as { gtag: Function }).gtag("event", eventName, {
      event_category: payload.category || "Lead Generation",
      event_label: payload.label || eventName,
      lead_id: payload.leadId,
      treatment: payload.treatment,
      branch: payload.branch,
    });
  }

  // 3. Google Tag Manager Data Layer
  if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push(eventData);
  }

  // 4. Meta / Facebook Pixel (fbq)
  if (typeof (window as unknown as { fbq?: Function }).fbq === "function") {
    if (eventName === "submission_success" || eventName === "quick_enquiry_submit") {
      (window as unknown as { fbq: Function }).fbq("track", "Lead", {
        content_name: payload.treatment || "Fertility Consultation",
        lead_id: payload.leadId,
      });
    } else {
      (window as unknown as { fbq: Function }).fbq("trackCustom", eventName, payload);
    }
  }
}
