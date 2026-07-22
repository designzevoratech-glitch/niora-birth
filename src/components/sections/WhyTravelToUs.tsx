import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, MapPin } from "lucide-react";

export default function WhyTravelToUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl text-plum-deep mb-6">Traveling for Treatment?</h2>
            <p className="text-charcoal-text/80 text-lg mb-8 leading-relaxed">
              We understand that choosing a fertility clinic outside your home city is a big decision. 
              Patients regularly travel from <span className="font-semibold text-mauve-rose">Tamil Nadu</span> and <span className="font-semibold text-mauve-rose">Bangalore</span> to our clinic in Kerala for our exceptional care, high success rates, and personalized, compassionate care protocols.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cream-bg flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-mauve-rose" />
                </div>
                <span className="text-charcoal-text">Phone and video consultations available before you travel</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cream-bg flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-mauve-rose" />
                </div>
                <span className="text-charcoal-text">Streamlined treatment timelines to minimize travel days</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cream-bg flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-mauve-rose" />
                </div>
                <span className="text-charcoal-text">Assistance with local stay recommendations</span>
              </li>
            </ul>

            <Link href="/contact">
              <MagneticButton className="px-6 py-3">
                Learn About Out-of-State Care <ArrowRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </Link>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
              {/* This would be an image in production, using a placeholder gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cream-bg to-blush-pink/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="glass rounded-2xl p-6 text-center shadow-xl">
                   <MapPin className="w-8 h-8 text-mauve-rose mx-auto mb-2" />
                   <h4 className="font-serif text-xl text-plum-deep">Niora Birth Clinic</h4>
                   <p className="text-sm text-charcoal-text/70">Kerala, India</p>
                 </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cream-bg rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-mauve-rose rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
