import Hero from "@/components/sections/Hero";
import IsThisForYou from "@/components/sections/IsThisForYou";
import Scene2Understanding from "@/components/sections/Scene2Understanding";
import Scene3Guide from "@/components/sections/Scene3Guide";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TrustStrip from "@/components/sections/TrustStrip";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero — First impression: Who we are + what we do */}
      <Hero />

      {/* 2. Is This For You? — User sees themselves immediately, no guessing */}
      <IsThisForYou />

      {/* 3. Understanding — Emotional connection: you're not alone */}
      <Scene2Understanding />

      {/* 4. Our Philosophy — Science + empathy, no doctor mention */}
      <Scene3Guide />

      {/* 5. Why Choose Us — Stats + feature proof points */}
      <WhyChooseUs />

      {/* 6. Services — What we actually offer */}
      <ServicesOverview />

      {/* 7. How It Works — 4-step process, demystifies the journey */}
      <Process />

      {/* 8. Real Stories — Social proof through real family testimonials */}
      <Testimonials />

      {/* 9. Trust Strip — Dark contrast section, marquee of trust signals */}
      <TrustStrip />

      {/* 10. FAQ — Answers the top questions, reduces friction */}
      <Faq />

      {/* 11. CTA Banner — Final push to book */}
      <CtaBanner />
    </div>
  );
}
