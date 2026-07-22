"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, Sparkles, Send } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import TrustStrip from "@/components/sections/TrustStrip";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    treatment: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      <div className="container mx-auto px-6 max-w-7xl py-12 md:py-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            We are Here to Listen & Guide
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-plum-deep font-bold mb-6 leading-tight">
            Start Your Journey,<br />
            <span className="italic bg-gradient-to-r from-mauve-rose to-blush-pink bg-clip-text text-transparent">
              In Full Confidence.
            </span>
          </h1>
          <p className="text-base md:text-lg text-charcoal-text/80 leading-relaxed">
            Reach out to schedule your personalized consultation. Whether you are located in Kerala, Karnataka, Tamil Nadu, or overseas, we offer both in-clinic and direct video guidance.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Form */}
          <div className="flex-1 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-cream-bg">
            <h2 className="font-serif text-3xl text-plum-deep font-bold mb-3">Send a Direct Inquiry</h2>
            <p className="text-xs sm:text-sm text-charcoal-text/70 mb-8">
              Fill out your details below and our patient care team will respond within 2 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-cream-bg/70 border border-mauve-rose/20 text-center flex flex-col items-center justify-center my-8"
              >
                <div className="w-16 h-16 rounded-full bg-success-sage/20 text-success-sage flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-plum-deep font-bold mb-2">Message Received</h3>
                <p className="text-sm text-charcoal-text/80 mb-6 max-w-md">
                  Thank you, {formData.name || "friend"}. Our clinical coordinator will call or message you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-plum-deep text-white text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50"
                      placeholder="e.g. Anjali Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50"
                      placeholder="anjali@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Location / City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50"
                      placeholder="e.g. Kochi / Bangalore / Dubai"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Treatment Interest</label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 text-charcoal-text"
                  >
                    <option value="">Select a treatment area...</option>
                    <option value="ivf-iui">IVF & IUI (Conception)</option>
                    <option value="icsi">ICSI (Male Fertility)</option>
                    <option value="pregnancy">Pregnancy Care</option>
                    <option value="freezing">Egg / Embryo Freezing</option>
                    <option value="donor">Donor Programs</option>
                    <option value="consultation">1-on-1 Specialist Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-text mb-2">Message / Notes</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-cream-bg focus:border-mauve-rose focus:ring-4 focus:ring-mauve-rose/10 outline-none transition-all text-sm bg-zinc-50 resize-none"
                    placeholder="Briefly tell us how we can best assist you..."
                  ></textarea>
                </div>

                <MagneticButton className="w-full py-4 text-base font-semibold mt-2 flex items-center justify-center gap-2">
                  <span>Submit Inquiry Request</span>
                  <Send className="w-4 h-4" />
                </MagneticButton>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-cream-bg text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-text/70 mb-4">Need Immediate Clinical Assistance?</p>
              <Link href="https://wa.me/917994892509?text=Hi%20Niora%20Clinic,%20I'd%20like%20to%20chat%20directly%20with%20a%20fertility%20specialist." target="_blank">
                <div className="w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp (+91 79948 92509)
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Contact Information & Location */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-cream-bg flex flex-col gap-8">
              <h3 className="font-serif text-2xl font-bold text-plum-deep">Clinic Information</h3>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Niora Birth Clinic & ART Bank</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-sm">
                    MC Road, 379 Building Number,<br />
                    Second Floor, 4 Shop, Near Vishal Mart,<br />
                    Pezhakkappilly, Muvattupuzha,<br />
                    Kerala 686673, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Phone & Emergency Lines</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-sm">
                    WhatsApp: <a href="tel:+917994892509" className="text-mauve-rose font-semibold hover:text-plum-deep transition-colors">+91 7994892509</a><br />
                    Desk: <a href="tel:+919745477622" className="text-mauve-rose font-semibold hover:text-plum-deep transition-colors">+91 9745477622</a><br />
                    24/7 Helpline: +91 7907780017
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-mauve-rose/10 flex items-center justify-center shrink-0 text-mauve-rose">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-plum-deep mb-1 text-base">Working Hours</h4>
                  <p className="text-charcoal-text/75 leading-relaxed text-sm">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sunday: Prior Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-2 rounded-[2.5rem] shadow-sm border border-cream-bg h-[300px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.071853610486!2d76.57467657503138!3d10.010903390095874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e7b3992b498f%3A0xc39213192418a006!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1701103038676!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.8rem" }}
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
