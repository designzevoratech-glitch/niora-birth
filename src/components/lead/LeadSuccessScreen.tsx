"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquare, Phone, X, Sparkles, Copy, Check } from "lucide-react";
import Link from "next/link";
import { LeadRecord } from "@/lib/types/lead-types";
import { trackEvent } from "@/lib/analytics";

interface LeadSuccessScreenProps {
  lead: LeadRecord | null;
  onClose: () => void;
}

export default function LeadSuccessScreen({ lead, onClose }: LeadSuccessScreenProps) {
  const [copied, setCopied] = React.useState(false);

  if (!lead) return null;

  const whatsappMessage = `Hello Niora Birth,\n\nI have submitted my consultation request.\n\nLead ID: ${lead.leadId}\nName: ${lead.fullName}\nTreatment: ${lead.treatment}\n\nPlease contact me.`;
  const whatsappUrl = `https://wa.me/917994892509?text=${encodeURIComponent(whatsappMessage)}`;

  const handleCopyLeadId = () => {
    navigator.clipboard.writeText(lead.leadId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      category: "Success Screen",
      leadId: lead.leadId,
    });
  };

  const handleCallClick = () => {
    trackEvent("call_button_click", {
      category: "Success Screen",
      leadId: lead.leadId,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-plum-deep/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 shadow-[0_25px_70px_rgba(61,31,61,0.25)] border border-white/80 z-10 text-center my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-cream-bg text-plum-deep/70 hover:text-plum-deep hover:bg-blush-pink/20 transition-all"
            aria-label="Close success popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Glowing Animated Success Icon */}
          <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2]" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-mauve-rose/10 text-mauve-rose text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Request Received & Logged
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-plum-deep mb-2">
            Thank You, {lead.fullName.split(" ")[0]}!
          </h2>

          <p className="text-sm text-charcoal-text/80 leading-relaxed mb-6 max-w-md mx-auto">
            Your fertility consultation request has been successfully registered. Our clinical care team will contact you within <strong>2 hours</strong>.
          </p>

          {/* Lead ID Box */}
          <div className="bg-cream-bg/80 border border-mauve-rose/25 rounded-2xl p-4 sm:p-5 mb-8 text-left relative group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-mauve-rose">
                Official Lead ID
              </span>
              <button
                onClick={handleCopyLeadId}
                className="text-xs font-semibold text-plum-deep hover:text-mauve-rose flex items-center gap-1 transition-colors bg-white/80 px-2.5 py-1 rounded-lg border border-mauve-rose/15"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy ID</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-xl sm:text-2xl font-extrabold text-plum-deep tracking-wider">
              {lead.leadId}
            </div>

            <div className="mt-3 pt-3 border-t border-mauve-rose/15 grid grid-cols-2 gap-2 text-xs text-charcoal-text/80">
              <div>
                <span className="font-semibold text-charcoal-text/60">Branch:</span> {lead.preferredBranch}
              </div>
              <div>
                <span className="font-semibold text-charcoal-text/60">Treatment:</span> {lead.treatment}
              </div>
            </div>
          </div>

          {/* Direct Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Chat Immediately on WhatsApp</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+917994892509"
                onClick={handleCallClick}
                className="w-full py-3.5 rounded-2xl border-2 border-plum-deep/20 text-plum-deep font-semibold text-sm hover:bg-cream-bg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Care Desk</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-2xl bg-plum-deep text-white font-semibold text-sm hover:bg-plum-deep/90 transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
