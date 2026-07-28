"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Stethoscope, Send, AlertCircle, Loader2, Zap } from "lucide-react";
import {
  quickEnquirySchema,
  QuickEnquiryFormData,
  TREATMENT_OPTIONS,
  LeadRecord,
} from "@/lib/types/lead-types";
import { trackEvent } from "@/lib/analytics";

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (lead: LeadRecord) => void;
  defaultTreatment?: string;
}

export default function QuickEnquiryModal({
  isOpen,
  onClose,
  onSuccess,
  defaultTreatment,
}: QuickEnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuickEnquiryFormData>({
    resolver: zodResolver(quickEnquirySchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      treatment: (defaultTreatment as any) || "Fertility Consultation",
      honeypot: "",
    },
  });

  useEffect(() => {
    if (defaultTreatment) setValue("treatment", defaultTreatment as any);
  }, [defaultTreatment, setValue]);

  useEffect(() => {
    if (isOpen) {
      trackEvent("form_started", { category: "Quick Enquiry" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (data: QuickEnquiryFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    trackEvent("form_submitted", {
      category: "Quick Enquiry",
      treatment: data.treatment,
    });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setServerError(result.error || "Submission failed. Please check your phone number.");
        trackEvent("submission_failure", {
          category: "Quick Enquiry",
          error: result.error,
        });
        return;
      }

      trackEvent("quick_enquiry_submit", {
        category: "Quick Enquiry",
        leadId: result.leadId,
        treatment: data.treatment,
      });

      reset();
      onSuccess(result.data);
    } catch (err) {
      console.error("Quick Enquiry Exception:", err);
      setServerError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-plum-deep/60 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-8 shadow-[0_25px_70px_rgba(61,31,61,0.25)] border border-white/80 z-10 my-auto"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mauve-rose/10 text-mauve-rose text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <Zap className="w-3.5 h-3.5 fill-mauve-rose" /> 20-Second Callback Request
              </div>
              <h3 className="font-serif text-2xl font-bold text-plum-deep">
                Quick Enquiry
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-cream-bg text-plum-deep/70 hover:text-plum-deep hover:bg-blush-pink/20 transition-all shrink-0"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-charcoal-text/75 mb-5 leading-relaxed">
            Enter your name & phone number below. Our patient care desk will call you back within minutes.
          </p>

          {/* Server Error Alert */}
          {serverError && (
            <div className="mb-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Hidden Honeypot */}
            <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("honeypot")} />

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-mauve-rose" /> Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Priya Nair"
                {...register("fullName")}
                className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                  errors.fullName ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                }`}
              />
              {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-mauve-rose" /> Mobile Phone *
              </label>
              <input
                type="tel"
                placeholder="10-digit phone number"
                {...register("mobileNumber")}
                className={`w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border-2 outline-none transition-all ${
                  errors.mobileNumber ? "border-rose-400 focus:ring-rose-200" : "border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10"
                }`}
              />
              {errors.mobileNumber && <p className="text-xs text-rose-500 mt-1">{errors.mobileNumber.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-plum-deep mb-1 flex items-center gap-1">
                <Stethoscope className="w-3.5 h-3.5 text-mauve-rose" /> Treatment Area *
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
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 rounded-2xl bg-gradient-to-r from-mauve-rose to-plum-deep text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Request Instant Callback</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
