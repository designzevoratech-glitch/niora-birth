import Link from "next/link";
import { Sparkles, Home, Stethoscope, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-bg">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 sm:p-12 rounded-[2.5rem] border border-cream-bg shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mauve-rose/10 border border-mauve-rose/20 text-mauve-rose text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            Page Not Found (404)
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum-deep mb-4">
            Looking for Fertility Guidance?
          </h1>

          <p className="text-sm sm:text-base text-charcoal-text/80 leading-relaxed mb-8">
            The page you are looking for might have been moved or updated. Let us help you navigate back to your fertility care path.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-plum-deep text-white font-semibold text-xs sm:text-sm hover:bg-mauve-rose transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>

            <Link
              href="/services/consultations"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream-bg text-plum-deep font-semibold text-xs sm:text-sm hover:bg-mauve-rose/20 transition-colors flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Book Fertility Consultation</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
