"use client";

import React from "react";
import { Phone, Calendar, Zap } from "lucide-react";
import { useLeadModal } from "@/components/providers/LeadModalProvider";
import { trackEvent } from "@/lib/analytics";

export default function MobileActionBar() {
  const { openBookModal, openQuickEnquiry } = useLeadModal();

  const handleCallClick = () => {
    trackEvent("call_button_click", {
      category: "Mobile Action Bar",
      label: "+91 7994892509",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden bg-white/90 backdrop-blur-xl border-t border-white/60 p-2.5 px-3 shadow-[0_-10px_30px_rgba(61,31,61,0.12)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href="tel:+917994892509"
          onClick={handleCallClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-cream-bg text-plum-deep hover:bg-blush-pink/20 transition-colors border border-plum-deep/10 text-center"
        >
          <Phone className="w-4 h-4 mb-0.5 text-mauve-rose" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* Quick Enquiry */}
        <button
          onClick={() => openQuickEnquiry()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-mauve-rose/10 text-mauve-rose hover:bg-mauve-rose/20 transition-colors border border-mauve-rose/20 text-center"
        >
          <Zap className="w-4 h-4 mb-0.5 fill-mauve-rose" />
          <span className="text-[11px] font-bold tracking-tight">Quick Enquiry</span>
        </button>

        {/* Book Consultation */}
        <button
          onClick={() => openBookModal()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-mauve-rose to-plum-deep text-white shadow-md hover:opacity-95 transition-opacity text-center"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Slot</span>
        </button>
      </div>
    </div>
  );
}
