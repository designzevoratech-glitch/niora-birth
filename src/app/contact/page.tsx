"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles, Send, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import TrustStrip from "@/components/sections/TrustStrip";
import {
  bookConsultationSchema,
  BookConsultationFormData,
  BRANCH_OPTIONS,
  TREATMENT_OPTIONS,
  TIME_SLOTS,
} from "@/lib/types/lead-types";
import { useLeadModal } from "@/components/providers/LeadModalProvider";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { showSuccessScreen } = useLeadModal();

  const todayStr = new Date().toISOString().split("T")[0];
  const maxDateObj = new Date();
  maxDateObj.setDate(maxDateObj.getDate() + 90);
  const maxDateStr = maxDateObj.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookConsultationFormData>({
    resolver: zodResolver(bookConsultationSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      whatsappNumber: "",
      email: "",
      age: 28,
      city: "",
      preferredBranch: "Kerala",
      treatment: "Fertility Consultation",
      preferredDate: todayStr,
      preferredTime: TIME_SLOTS[0],
      additionalMessage: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: BookConsultationFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    trackEvent("form_submitted", {
      category: "Contact Page Form",
      treatment: data.treatment,
      branch: data.preferredBranch,
    });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Submission failed. Please verify your entries.");
        trackEvent("submission_failure", {
          category: "Contact Page Form",
          error: result.error,
        });
        return;
      }

      trackEvent("submission_success", {
        category: "Contact Page Form",
        leadId: result.leadId,
        treatment: data.treatment,
      });

      reset();
      showSuccessScreen(result.data);
    } catch (err) {
      console.error("Contact Form Submission Error:", err);
      setServerError("Network error. Please try again or reach us directly on WhatsApp.");
      trackEvent("submission_failure", {
        category: "Contact Page Form",
        error: "Network exception",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      category: "Contact Page Direct Link",
      label: "+91 7994892509",
    });
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-8 sm:py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            We are Here to Listen & Guide
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-plum-deep font-bold mb-6 leading-tight">
            Start Your Journey,<br />
            <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
              In Full Confidence.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-charcoal-text/80 leading-relaxed px-2">
            Reach out to schedule your personalized consultation. Whether you are located in Kerala, Karnataka, Tamil Nadu, or overseas, we offer both in-clinic and direct video guidance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Form Card */}
          <div className="flex-1 bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-cream-bg">
            <h2 className="font-serif text-2xl sm:text-3xl text-plum-deep font-bold mb-2 sm:mb-3">Send a Direct Inquiry</h2>
            <p className="text-xs sm:text-sm text-charcoal-text/70 mb-6 sm:mb-8">
              Fill out your details below and our patient care team will respond within 2 hours.
            </p>

            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                <span>{serverError}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {/* Hidden Honeypot */}
              <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Anjali Sharma"
                    {...register("fullName")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.fullName ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                    }`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    {...register("mobileNumber")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.mobileNumber ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                    }`}
                  />
                  {errors.mobileNumber && <p className="text-xs text-rose-500 mt-1">{errors.mobileNumber.message}</p>}
                </div>
              </div>

              {/* Row 2: Email & Age */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    placeholder="anjali@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.email ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Patient Age *</label>
                  <input
                    type="number"
                    placeholder="e.g. 28"
                    min={18}
                    max={99}
                    {...register("age", { valueAsNumber: true })}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.age ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                    }`}
                  />
                  {errors.age && <p className="text-xs text-rose-500 mt-1">{errors.age.message}</p>}
                </div>
              </div>

              {/* Row 3: City & Branch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Location / City *</label>
                  <input
                    type="text"
                    placeholder="e.g. Kochi / Dubai"
                    {...register("city")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.city ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                    }`}
                  />
                  {errors.city && <p className="text-xs text-rose-500 mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Preferred Branch *</label>
                  <select
                    {...register("preferredBranch")}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 text-plum-deep font-medium"
                  >
                    {BRANCH_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Treatment & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Treatment Interested *</label>
                  <select
                    {...register("treatment")}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 text-plum-deep font-medium"
                  >
                    {TREATMENT_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Preferred Date *</label>
                  <input
                    type="date"
                    min={todayStr}
                    max={maxDateStr}
                    {...register("preferredDate")}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all text-sm bg-zinc-50 outline-none ${
                      errors.preferredDate ? "border-rose-400" : "border-cream-bg focus:border-mauve-rose"
                    }`}
                  />
                </div>
              </div>

              {/* Row 5: Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Preferred Time Slot *</label>
                <select
                  {...register("preferredTime")}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 text-plum-deep font-medium"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 6: Additional Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-1.5">Message / Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Briefly tell us how we can best assist you (max 500 characters)..."
                  {...register("additionalMessage")}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 resize-none"
                ></textarea>
                {errors.additionalMessage && (
                  <p className="text-xs text-rose-500 mt-1">{errors.additionalMessage.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-bold text-base shadow-[0_4px_20px_rgba(193,122,138,0.3)] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Inquiry Request...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-cream-bg text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-4">Need Immediate Clinical Assistance?</p>
              <Link
                href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20speak%20with%20a%20patient%20care%20coordinator."
                target="_blank"
                onClick={handleWhatsAppClick}
              >
                <div className="w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp (+91 79948 92509)
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Contact Information & Location */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-cream-bg flex flex-col gap-6 sm:gap-8">
              <h3 className="font-serif text-2xl font-bold text-plum-deep">Clinic Information</h3>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Niora Birth</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-xs sm:text-sm">
                    MC Road, 379 Building Number,<br />
                    Second Floor, 4 Shop, Near Vishal Mart,<br />
                    Pezhakkappilly, Muvattupuzha,<br />
                    Kerala 686673, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Phone & Emergency Lines</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-xs sm:text-sm">
                    WhatsApp: <a href="tel:+917994892509" className="text-mauve-rose font-semibold hover:text-plum-deep transition-colors">+91 7994892509</a><br />
                    Desk: <a href="tel:+919745477622" className="text-mauve-rose font-semibold hover:text-plum-deep transition-colors">+91 9745477622</a><br />
                    24/7 Helpline: +91 7907780017
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Working Hours</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-xs sm:text-sm">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Prior Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-cream-bg h-[280px] sm:h-[300px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.071853610486!2d76.57467657503138!3d10.010903390095874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e7b3992b498f%3A0xc39213192418a006!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1701103038676!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.6rem" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />
    </div>
  );
}
