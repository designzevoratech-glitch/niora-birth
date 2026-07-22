"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 md:px-8 pointer-events-none"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(12px)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(61,31,61,0.10), 0 1px 0 rgba(255,255,255,0.8)"
            : "0 4px 20px rgba(61,31,61,0.04)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-[1380px] h-[72px] rounded-full flex items-center justify-between px-4 md:px-6 pointer-events-auto border border-white/60"
      >
        {/* Logo — clearly visible on white-backed pill */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center bg-white/95 rounded-2xl shadow-sm border border-cream-bg px-3.5 py-1 h-[52px] min-w-[145px]">
            <div className="relative h-[46px] w-[135px]">
              <Image
                src="/updated_logo_cropped.png"
                alt="Niora Birth"
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14.5px] font-medium text-charcoal-text hover:text-mauve-rose tracking-[0.01em] transition-colors duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-mauve-rose to-blush-pink transition-all duration-400 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+917994892509" className="flex items-center gap-2 text-sm font-medium text-plum-deep/70 hover:text-mauve-rose transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 79948 92509</span>
          </a>
          <Link href="/contact">
            <button className="h-[46px] px-[26px] rounded-full bg-gradient-to-r from-mauve-rose to-plum-deep text-white text-[13.5px] font-semibold shadow-[0_4px_15px_rgba(193,122,138,0.3)] hover:shadow-[0_6px_25px_rgba(193,122,138,0.5)] hover:-translate-y-[2px] transition-all duration-300 relative overflow-hidden group tracking-[0.02em]">
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Consultation</span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2.5 text-plum-deep hover:text-mauve-rose transition-colors relative z-50 rounded-full hover:bg-blush-pink/20"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-plum-deep/30 backdrop-blur-sm z-40 pointer-events-auto lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[88px] left-4 right-4 bg-white/98 backdrop-blur-2xl border border-white/30 rounded-[28px] p-7 shadow-[0_20px_60px_rgba(61,31,61,0.2)] z-50 pointer-events-auto lg:hidden"
            >
              <div className="flex justify-between items-center mb-7">
                <div className="relative h-[46px] w-[135px]">
                  <Image src="/updated_logo_cropped.png" alt="Niora Birth" fill className="object-contain object-left" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-plum-deep hover:bg-blush-pink/20 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 mb-7">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-plum-deep hover:text-mauve-rose transition-colors py-3 px-4 rounded-xl hover:bg-cream-bg"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col gap-3">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-full text-center bg-gradient-to-r from-mauve-rose to-plum-deep text-white py-4 rounded-2xl font-semibold text-[15px] shadow-[0_4px_20px_rgba(193,122,138,0.3)] hover:shadow-lg transition-shadow">
                    Book Consultation
                  </div>
                </Link>
                <a href="tel:+917994892509" className="w-full text-center border-2 border-plum-deep/15 text-plum-deep py-3.5 rounded-2xl font-medium text-[15px] flex items-center justify-center gap-2 hover:bg-cream-bg transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
