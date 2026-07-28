"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Stethoscope, User, Phone, Mail, MessageSquare, Send, AlertCircle, Loader2 } from "lucide-react";
import {
  bookConsultationSchema,
  BookConsultationFormData,
  BRANCH_OPTIONS,
  TREATMENT_OPTIONS,
  TIME_SLOTS,
  LeadRecord,
} from "@/lib/types/lead-types";
import { trackEvent } from "@/lib/analytics";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (lead: LeadRecord) => void;
  defaultTreatment?: string;
  defaultBranch?: string;
}

export default function BookConsultationModal({
  isOpen,
  onClose,
  onSuccess,
  defaultTreatment,
  defaultBranch,
}: BookConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Set min date to today, max date to 90 days from today
  const todayStr = new Date().toISOString().split("T")[0];
  const maxDateObj = new Date();
  maxDateObj.setDate(maxDateObj.getDate() + 90);
  const maxDateStr = maxDateObj.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
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
      preferredBranch: (defaultBranch as any) || "Kerala",
      treatment: (defaultTreatment as any) || "Fertility Consultation",
      preferredDate: todayStr,
      preferredTime: TIME_SLOTS[0],
      additionalMessage: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    if (defaultTreatment) setValue("treatment", defaultTreatment as any);
    if (defaultBranch) setValue("preferredBranch", defaultBranch as any);
  }, [defaultTreatment, defaultBranch, setValue]);

  useEffect(() => {
    if (isOpen) {
      trackEvent("form_started", { category: "Book Consultation" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (data: BookConsultationFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    trackEvent("form_submitted", {
      category: "Book Consultation",
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
        setServerError(result.error || "Submission failed. Please check your details.");
        trackEvent("submission_failure", {
          category: "Book Consultation",
          error: result.error,
        });
        return;
      }

      trackEvent("submission_success", {
        category: "Book Consultation",
        leadId: result.leadId,
        treatment: data.treatment,
      });

      reset();
      onSuccess(result.data);
    } catch (err) {
      console.error("Submission Exception:", err);
      setServerError("Network error. Please try submitting again or call us on +91 7994892509.");
      trackEvent("submission_failure", {
        category: "Book Consultation",
        error: "Network exception",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-plum-deep/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 shadow-[0_25px_70px_rgba(61,31,61,0.25)] border border-white/80 z-10 max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6 pb-4 border-b border-cream-bg">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-mauve-rose">
                1-on-1 Specialist Appointment
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum-deep mt-1">
                Book Your Consultation
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-text/75 mt-1">
                Confidential guidance with accredited fertility doctors in Kerala, Bangalore & Tamil Nadu.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-cream-bg text-plum-deep/70 hover:text-plum-deep hover:bg-blush-pink/20 transition-all shrink-0 ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Server Error Alert */}
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

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Hidden Honeypot */}
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

            {/* Row 1: Full Name & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-mauve-rose" /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Anjali Sharma"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.fullName ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-mauve-rose" /> Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number (e.g. 9876543210)"
                  {...register("mobileNumber")}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.mobileNumber ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.mobileNumber && <p className="text-xs text-rose-500 mt-1">{errors.mobileNumber.message}</p>}
              </div>
            </div>

            {/* Row 2: WhatsApp (Optional) & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Leave empty if same as mobile"
                  {...register("whatsappNumber")}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-mauve-rose" /> Email Address *
                </label>
                <input
                  type="email"
                  placeholder="anjali@example.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.email ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Row 3: Age & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5">
                  Patient Age *
                </label>
                <input
                  type="number"
                  min={18}
                  max={99}
                  placeholder="e.g. 30"
                  {...register("age", { valueAsNumber: true })}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.age ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.age && <p className="text-xs text-rose-500 mt-1">{errors.age.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-mauve-rose" /> City / Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kochi / Ernakulam / Dubai"
                  {...register("city")}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.city ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.city && <p className="text-xs text-rose-500 mt-1">{errors.city.message}</p>}
              </div>
            </div>

            {/* Row 4: Preferred Branch & Treatment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5">
                  Preferred Branch / Region *
                </label>
                <select
                  {...register("preferredBranch")}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all font-medium text-plum-deep"
                >
                  {BRANCH_OPTIONS.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.preferredBranch && <p className="text-xs text-rose-500 mt-1">{errors.preferredBranch.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-mauve-rose" /> Treatment Interested *
                </label>
                <select
                  {...register("treatment")}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all font-medium text-plum-deep"
                >
                  {TREATMENT_OPTIONS.map((treat) => (
                    <option key={treat} value={treat}>
                      {treat}
                    </option>
                  ))}
                </select>
                {errors.treatment && <p className="text-xs text-rose-500 mt-1">{errors.treatment.message}</p>}
              </div>
            </div>

            {/* Row 5: Consultation Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-mauve-rose" /> Preferred Date *
                </label>
                <input
                  type="date"
                  min={todayStr}
                  max={maxDateStr}
                  {...register("preferredDate")}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                    errors.preferredDate ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                  }`}
                />
                {errors.preferredDate && <p className="text-xs text-rose-500 mt-1">{errors.preferredDate.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-mauve-rose" /> Preferred Time Slot *
                </label>
                <select
                  {...register("preferredTime")}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all font-medium text-plum-deep"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.preferredTime && <p className="text-xs text-rose-500 mt-1">{errors.preferredTime.message}</p>}
              </div>
            </div>

            {/* Row 6: Additional Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1.5">
                Additional Message / Medical Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your treatment history or specific questions (max 500 characters)..."
                {...register("additionalMessage")}
                className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all resize-none"
              ></textarea>
              {errors.additionalMessage && (
                <p className="text-xs text-rose-500 mt-1">{errors.additionalMessage.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-bold text-base shadow-[0_6px_25px_rgba(193,122,138,0.4)] hover:shadow-[0_8px_30px_rgba(193,122,138,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Confirming Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Book Consultation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-charcoal-text/60">
              🔒 Your privacy is 100% protected. Your details are strictly used for clinical care coordination.
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
