import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://niorabirth.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Niora Birth",
  description:
    "Read Niora Birth's privacy policy. Learn how we collect, use, and protect your personal and medical information during fertility consultations and care coordination.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-cream-bg">
      <div className="container mx-auto px-6 max-w-4xl py-12 md:py-20">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-cream-bg">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mauve-rose mb-3 block">
              Legal
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plum-deep font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-charcoal-text/60">
              Last updated: July 2025
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-charcoal-text/80 leading-relaxed space-y-6">
            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                1. Introduction
              </h2>
              <p className="text-sm leading-relaxed">
                Niora Birth (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a fertility consultation, patient guidance, and care coordination platform based in Muvattupuzha, Kerala, India. We are committed to protecting the privacy and confidentiality of all individuals who interact with our website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Personal Information:</strong> Name, phone number, email address, city/location when you fill out our consultation inquiry form.</li>
                <li><strong>Medical Context:</strong> Treatment interest area and general notes you voluntarily provide to help us connect you with relevant specialists.</li>
                <li><strong>Communication Data:</strong> Messages sent via WhatsApp, email, or phone calls for the purpose of consultation coordination.</li>
                <li><strong>Technical Data:</strong> Browser type, device information, IP address, and cookies for website analytics and performance improvement.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>To respond to your consultation inquiries and connect you with qualified fertility specialists.</li>
                <li>To coordinate appointments and care logistics with our accredited partner hospitals.</li>
                <li>To provide relevant fertility education content and guidance.</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To comply with legal obligations and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                4. Data Sharing
              </h2>
              <p className="text-sm leading-relaxed">
                We do not sell, rent, or trade your personal information. We may share relevant information with our accredited partner hospitals and qualified fertility specialists solely for the purpose of providing you with clinical consultation and care coordination services, and only with your consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                5. Data Security
              </h2>
              <p className="text-sm leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                6. Cookies
              </h2>
              <p className="text-sm leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                7. Your Rights
              </h2>
              <p className="text-sm leading-relaxed">
                You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at{" "}
                <a href="mailto:nioraartbank@gmail.com" className="text-mauve-rose hover:text-plum-deep transition-colors font-semibold">
                  nioraartbank@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-plum-deep font-bold mb-3">
                8. Contact Us
              </h2>
              <p className="text-sm leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-cream-bg border border-mauve-rose/15 text-sm">
                <p className="font-semibold text-plum-deep">Niora Birth</p>
                <p>MC Road, 379 Building, 2nd Floor, Near Vishal Mart, Pezhakkappilly</p>
                <p>Muvattupuzha, Kerala 686673, India</p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:nioraartbank@gmail.com" className="text-mauve-rose font-semibold">
                    nioraartbank@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+919745477622" className="text-mauve-rose font-semibold">
                    +91 97454 77622
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
