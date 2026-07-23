"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showCallout, setShowCallout] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Dismissible Glass Callout (Desktop / Tablet only so it never blocks mobile CTAs) */}
      <AnimatePresence>
        {showCallout && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block relative glass rounded-2xl p-3.5 shadow-[0_10px_30px_rgba(61,31,61,0.18)] max-w-[240px] border border-white/80"
          >
            <button
              onClick={() => setShowCallout(false)}
              className="absolute top-2 right-2 p-1 text-charcoal-text/40 hover:text-plum-deep transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              </span>
              <span className="text-[10.5px] font-bold tracking-wider uppercase text-mauve-rose">
                Care Team Online
              </span>
            </div>
            <p className="text-[12.5px] text-charcoal-text/80 leading-snug font-medium">
              Have questions? Chat directly with our patient care team on WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Pulsing Button */}
      <Link
        href="https://wa.me/917994892509?text=Hi%20Niora%20Birth,%20I'd%20like%20to%20know%20more%20about%20fertility%20consultation%20options."
        target="_blank"
        aria-label="Chat with Niora Birth Clinic on WhatsApp"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.8,
          }}
          className="relative group cursor-pointer"
        >
          {/* Pulsing background rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          <div className="relative bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transform transition-transform group-hover:scale-110 group-active:scale-95 border-2 border-white/20">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

