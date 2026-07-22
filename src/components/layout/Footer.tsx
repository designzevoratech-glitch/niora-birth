import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2A1A2A] text-white/85 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-mauve-rose to-transparent" />

      {/* Ambient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-mauve-rose/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-14">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex">
              <div className="relative bg-white rounded-xl px-3 py-2 h-[52px] w-[145px]">
                <Image
                  src="/updated_logo_cropped.png"
                  alt="Niora Birth"
                  fill
                  className="object-contain object-center p-1"
                />
              </div>
            </Link>

            <p className="text-[14px] leading-relaxed text-white/60 max-w-[240px]">
              Where hope begins. Guiding families through fertility education, 1-on-1 consultations, and connections to qualified fertility specialists and partner hospitals.
            </p>

            <div className="inline-flex flex-col gap-1.5 p-4 rounded-xl bg-white/5 border border-white/8">
              <span className="text-[10px] uppercase tracking-[0.18em] text-mauve-rose font-bold">Our Reach</span>
              <p className="text-[13px] text-white/65">Kerala · Tamil Nadu · Bangalore</p>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nioraeggdonar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-gradient-to-br hover:from-mauve-rose hover:to-plum-deep flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com/nioraeggbank"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-gradient-to-br hover:from-mauve-rose hover:to-plum-deep flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5 lg:pl-6">
            <h4 className="font-serif text-[15px] font-semibold text-white/90 uppercase tracking-[0.12em]">Quick Links</h4>
            <nav className="flex flex-col gap-3.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Treatments & Services", href: "/services" },
                { name: "Patient Guides & Stories", href: "/blog" },
                { name: "Book Consultation", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-white/55 hover:text-blush-pink transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-mauve-rose/40 group-hover:bg-mauve-rose transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h4 className="font-serif text-[15px] font-semibold text-white/90 uppercase tracking-[0.12em]">Our Services</h4>
            <nav className="flex flex-col gap-3.5">
              {[
                { name: "IVF & IUI", href: "/services#ivf" },
                { name: "ICSI", href: "/services#icsi" },
                { name: "Donor Programs", href: "/services#donor" },
                { name: "Egg & Embryo Freezing", href: "/services#freezing" },
                { name: "Pregnancy Care", href: "/services#pregnancy" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-white/55 hover:text-blush-pink transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-mauve-rose/40 group-hover:bg-mauve-rose transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="font-serif text-[15px] font-semibold text-white/90 uppercase tracking-[0.12em]">Contact Us</h4>

            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-mauve-rose flex-shrink-0 mt-0.5" />
              <div className="text-[13.5px] text-white/55 leading-relaxed">
                <span className="font-semibold text-white/75 block mb-1">Niora Birth Clinic</span>
                MC Road, 379 Building, 2nd Floor,<br />
                Near Vishal Mart, Pezhakkappilly,<br />
                Muvattupuzha, Kerala 686673
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Phone className="w-4 h-4 text-mauve-rose flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5 text-[13.5px]">
                <a href="tel:+917994892509" className="text-white/55 hover:text-blush-pink transition-colors">
                  +91 79948 92509 (WhatsApp)
                </a>
                <a href="tel:+919745477622" className="text-white/40 hover:text-blush-pink transition-colors">
                  +91 97454 77622 (Office)
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-mauve-rose flex-shrink-0" />
              <a
                href="mailto:nioraartbank@gmail.com"
                className="text-[13.5px] text-white/55 hover:text-blush-pink transition-colors"
              >
                nioraartbank@gmail.com
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917994892509?text=Hi,%20I'd%20like%20to%20know%20more%20about%20fertility%20treatment%20options"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 h-[44px] px-5 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[13.5px] font-semibold hover:bg-[#25D366]/25 hover:-translate-y-[2px] transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-7 flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-white/35">
          <p>&copy; {new Date().getFullYear()} Niora Birth. Fertility Consultation & Care Coordination Platform. Medical diagnoses and procedures are performed exclusively by qualified fertility specialists at accredited partner hospitals.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
