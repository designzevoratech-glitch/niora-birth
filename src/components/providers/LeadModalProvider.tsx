"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LeadRecord } from "@/lib/types/lead-types";
import { trackEvent } from "@/lib/analytics";
import BookConsultationModal from "@/components/lead/BookConsultationModal";
import QuickEnquiryModal from "@/components/lead/QuickEnquiryModal";
import LeadSuccessScreen from "@/components/lead/LeadSuccessScreen";

interface ModalDefaults {
  treatment?: string;
  preferredBranch?: string;
}

interface LeadModalContextType {
  openBookModal: (defaults?: ModalDefaults) => void;
  closeBookModal: () => void;
  openQuickEnquiry: (defaults?: ModalDefaults) => void;
  closeQuickEnquiry: () => void;
  showSuccessScreen: (lead: LeadRecord) => void;
  closeSuccessScreen: () => void;
  isBookModalOpen: boolean;
  isQuickEnquiryOpen: boolean;
  successLead: LeadRecord | null;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isQuickEnquiryOpen, setIsQuickEnquiryOpen] = useState(false);
  const [successLead, setSuccessLead] = useState<LeadRecord | null>(null);
  const [modalDefaults, setModalDefaults] = useState<ModalDefaults>({});

  const openBookModal = (defaults: ModalDefaults = {}) => {
    trackEvent("book_consultation_click", {
      category: "CTA",
      label: defaults.treatment || "General",
    });
    setModalDefaults(defaults);
    setIsBookModalOpen(true);
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false);
  };

  const openQuickEnquiry = (defaults: ModalDefaults = {}) => {
    trackEvent("quick_enquiry_click", {
      category: "CTA",
      label: defaults.treatment || "General",
    });
    setModalDefaults(defaults);
    setIsQuickEnquiryOpen(true);
  };

  const closeQuickEnquiry = () => {
    setIsQuickEnquiryOpen(false);
  };

  const showSuccessScreen = (lead: LeadRecord) => {
    setSuccessLead(lead);
    setIsBookModalOpen(false);
    setIsQuickEnquiryOpen(false);
  };

  const closeSuccessScreen = () => {
    setSuccessLead(null);
  };

  return (
    <LeadModalContext.Provider
      value={{
        openBookModal,
        closeBookModal,
        openQuickEnquiry,
        closeQuickEnquiry,
        showSuccessScreen,
        closeSuccessScreen,
        isBookModalOpen,
        isQuickEnquiryOpen,
        successLead,
      }}
    >
      {children}

      {/* Modals & Overlays */}
      <BookConsultationModal
        isOpen={isBookModalOpen}
        onClose={closeBookModal}
        onSuccess={showSuccessScreen}
        defaultTreatment={modalDefaults.treatment}
        defaultBranch={modalDefaults.preferredBranch}
      />

      <QuickEnquiryModal
        isOpen={isQuickEnquiryOpen}
        onClose={closeQuickEnquiry}
        onSuccess={showSuccessScreen}
        defaultTreatment={modalDefaults.treatment}
      />

      <LeadSuccessScreen
        lead={successLead}
        onClose={closeSuccessScreen}
      />
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
