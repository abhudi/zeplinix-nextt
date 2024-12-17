import Link from "next/link";
import Image from "next/image";

const termsSections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "acceptance", title: "2. Acceptance of Terms" },
  { id: "services", title: "3. Services" },
  { id: "user-responsibilities", title: "4. User Responsibilities" },
  { id: "intellectual-property", title: "5. Intellectual Property" },
  { id: "privacy-policy", title: "6. Privacy Policy" },
  { id: "limitation-liability", title: "7. Limitation of Liability" },
  { id: "indemnification", title: "8. Indemnification" },
  { id: "termination", title: "9. Termination" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "payment-terms", title: "11. Payment Terms" },
  { id: "refund-policy", title: "12. Refund Policy" },
  { id: "changes-terms", title: "13. Changes to Terms" },
  { id: "contact-us", title: "14. Contact Us" },
];

export default function TermsOfService() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 lg:px-10 text-fs-64">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-[#8B8B8B] flex items-center justify-center mt-10">
            <Link href="/">
              <span className="text-red-600 font-bold text-lg">
                <svg
                  className="w-5 h-5"
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "-180deg" }}
                >
                  <path
                    d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                    fill="#E63946"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <h1>Terms of Service</h1>
      </div>
      <div className="relative overflow-hidden">
        <div>
          <Image
            src="/terms-service/wave.svg"
            alt={""}
            width={60}
            height={60}
            className="object-cover rounded-t-lg absolute w-full bottom-0"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] w-[300px] h-[200px] md:w-[1600px] md:h-[600px] lg:w-[1600px] lg:h-[600px] left-0 top-[-50px] md:top-[100px] lg:top-[150px] lg:left-[-100px] md:left-[-100px] opacity-60 hidden md:block lg:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(150deg)",
          }}
        ></div>
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-10">
          <main className="lg:w-3/4 p-6 space-y-10">
            {/* Introduction */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Introduction</h2>
              <p className="text-[#909090]">
                Welcome to Zeplinix Technologies Private Limited &quot;Zeplinix
                &quot;,&quot;we&quot;,&quot;our&quot;,or &quot;us&quot;. By
                accessing or using our website www.zeplinix.com and services,
                you agree to be bound by these Terms of Service
                &quot;Terms&quot;. If you do not agree to these Terms, please do
                not use our website or services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section id="acceptance" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-[#909090]">
                By accessing or using our website, you confirm that you are at
                least 18 years of age and have the legal authority to enter into
                these Terms.
              </p>
            </section>

            {/* Services */}
            <section id="services" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Services</h2>
              <p className="text-[#909090]">
                Zeplinix provides software products, graphic, media, and
                services across various domains, including but not limited to
                CRM, warranty management, real estate, and marketing solutions.
              </p>
            </section>

            {/* User Responsibilities */}
            <section id="user-responsibilities" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                3. User Responsibilities
              </h2>
              <ul className="list-disc list-inside text-[#909090]">
                <li>Use our website and services only for lawful purposes.</li>
                <li>
                  Provide accurate and complete information when creating an
                  account or interacting with us.
                </li>
                <li>
                  Refrain from attempting to disrupt or harm our website or
                  services.
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                4. Intellectual Property
              </h2>
              <p className="text-[#909090]">
                All content, designs, trademarks, logos, and software on this
                website are the property of Zeplinix or its licensors and are
                protected under applicable intellectual property laws.
              </p>
            </section>

            {/* Privacy Policy */}
            <section id="privacy-policy" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                5. Privacy Policy
              </h2>
              <p className="text-[#909090]">
                Our Privacy Policy governs the collection, use, and storage of
                your personal data. By using our services, you agree to the
                terms outlined in our Privacy Policy.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section id="limitation-liability" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                6. Limitation of Liability
              </h2>
              <p className="text-[#909090]">
                To the fullest extent permitted by law, Zeplinix shall not be
                liable for any direct, indirect, incidental, special, or
                consequential damages resulting from your use of or inability to
                use our services.
              </p>
            </section>

            {/* Indemnification */}
            <section id="indemnification" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                7. Indemnification
              </h2>
              <p className="text-[#909090]">
                You agree to indemnify and hold Zeplinix, its officers,
                employees, and affiliates harmless from any claims, damages, or
                expenses arising from your use of our services or your violation
                of these Terms.
              </p>
            </section>

            {/* Termination */}
            <section id="termination" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Termination</h2>
              <p className="text-[#909090]">
                We reserve the right to terminate or suspend your access to our
                services without prior notice for violations of these Terms or
                any applicable law.
              </p>
            </section>

            {/* Governing Law */}
            <section id="governing-law" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                9. Governing Law
              </h2>
              <p className="text-[#909090]">
                These Terms are governed by the laws of India. Any disputes
                arising from these Terms shall be resolved exclusively in the
                courts of Pune/Maharashtra, India.
              </p>
            </section>

            {/* Payment Terms */}
            <section id="payment-terms" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                10. Payment Terms
              </h2>
              <ul className="list-disc list-inside text-[#909090]">
                <li>
                  Fees and Charges: You agree to pay all applicable fees and
                  charges as outlined in the relevant service agreement or
                  invoice.
                </li>
                <li>
                  Late Payments: If payments are not received by the due date,
                  we may charge interest on the overdue amount.
                </li>
              </ul>
            </section>

            {/* Refund Policy */}
            <section id="refund-policy" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                11. Refund Policy
              </h2>
              <p className="text-[#909090]">
                Refunds, if any, will be issued in accordance with the terms
                outlined in the relevant service agreement. In general, no
                refunds will be issued for services that have already been
                rendered.
              </p>
            </section>

            {/* Changes to Terms */}
            <section id="changes-terms" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                12. Changes to Terms
              </h2>
              <p className="text-[#909090]">
                We may update these Terms from time to time. Any changes will be
                posted on this page with the revised date. Continued use of our
                services after such changes constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact-us" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. Contact Us</h2>
              <p className="text-[#909090]">
                If you have any questions or concerns regarding these Terms,
                please contact us at:
              </p>
              <p className="text-[#909090]">
                Email:{" "}
                <Link href="mailto:support@zeplinix.com">
                  support@zeplinix.com
                </Link>
              </p>
            </section>
          </main>

          <aside className="lg:w-1/4 hidden lg:block md:block bg-glass p-6 rounded-lg shadow-lg h-fit  top-10 bg-blur-2xl border-0.4 border-lighest-gray backdrop-blur-lg z-10">
            <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-gray-300">
              {termsSections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:text-white">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
