import Link from "next/link";
import Image from "next/image";
const privacySections = [
  { id: "objective", title: "1. Objective" },
  { id: "scope", title: "2. Scope of this Privacy Statement" },
  {
    id: "personal-info",
    title: "3. Personal Information Collected by Zeplinix",
  },
  {
    id: "auto-info",
    title:
      "4. Personal information that is automatically collected by Zeplinix when you use Zeplinix websites",
  },
  {
    id: "third-party",
    title: "5. Personal information that is collected from third-party sources",
  },
  { id: "use-data", title: "6. How We Use Your Data" },
  {
    id: "sharing-info",
    title: "7. Sharing of Personal Information with Third Parties",
  },
  { id: "preferences", title: "8. Preferences" },
  { id: "cookies", title: "9. Cookies and Other Technologies" },
  { id: "data-protection", title: "10. Data Protection and Confidentiality" },
  { id: "retention", title: "11. Retention of Personal Information" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 lg:px-10 text-fs-64">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-[#8B8B8B] flex items-center justify-center mt-10">
            <Link href="/">
              <span className="text-red-600 font-bold text-lg">
                <svg
                  className="w-5 h-5  "
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
        <h1>Privacy Policy</h1>
      </div>
      <div className="relative overflow-hidden">
        <div>
          <Image
            src="/privacy-policy/wave.svg"
            alt={""}
            width={60}
            height={60}
            className="object-cover rounded-t-lg absolute w-full bottom-0"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] w-[300px] h-[200px] md:w-[1600px] md:h-[600px] lg:w-[1600px] lg:h-[600px] left-0 top-[-50px] md:top-[100px] lg:top-[150px] lg:left-[-100px] md:left-[-100px]  opacity-60"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(150deg)",
          }}
        ></div>
        {/* Main Content */}
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-10">
          {/* Left Content */}
          <main className="lg:w-3/4 p-6 space-y-10">
            {/* Objective */}
            <section id="objective" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Objective</h2>
              <p className="text-[#909090]">
                This Privacy Statement articulates the privacy and data
                protection principles followed by{" "}
                <strong>Zeplinix Technologies Private Limited</strong>{" "}
                ("Zeplinix") for customers, partners, employees, and other data
                subjects. It explains the collection, use, and protection of
                personal information.
              </p>
            </section>

            {/* Scope */}
            <section id="scope" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                2. Scope of this Privacy Statement
              </h2>
              <p className="text-[#909090]">
                This statement applies to Zeplinix’s websites and platforms.
                Links to third-party websites are provided for convenience and
                are not covered under this Privacy Statement.
              </p>
            </section>

            {/* Personal Information Collected */}
            <section id="personal-info" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                3. Personal Information Collected
              </h2>
              <p className="text-[#909090]">
                Zeplinix collects personal information through websites, emails,
                and social media engagement, including:
              </p>
              <ul className="list-disc list-inside text-[#909090]">
                <li>Name, Email, Job Title, Organization</li>
                <li>IP Address and Cookie Data</li>
                <li>Social media profile data (based on user preferences)</li>
              </ul>
            </section>

            {/* How We Use Your Data */}
            <section id="how-we-use" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                4. How We Use Your Data
              </h2>
              <p className="text-[#909090]">
                Zeplinix uses your personal information for:
              </p>
              <ul className="list-disc list-inside text-[#909090]">
                <li>Providing requested information and services</li>
                <li>Conducting marketing and promotional activities</li>
                <li>Performing data analysis and client communication</li>
              </ul>
            </section>

            {/* Sharing of Personal Information */}
            <section id="sharing" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                5. Sharing of Personal Information
              </h2>
              <p className="text-[#909090]">
                Zeplinix shares personal information with trusted entities under
                strict confidentiality for service fulfillment, legal
                compliance, and fraud prevention.
              </p>
            </section>

            {/* Preferences */}
            <section id="preferences" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Preferences</h2>
              <p className="text-[#909090]">
                You can update your personal information, unsubscribe from
                newsletters, or manage preferences via your device settings.
              </p>
            </section>

            {/* Cookies */}
            <section id="cookies" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                7. Cookies and Other Technologies
              </h2>
              <p className="text-[#909090]">
                Zeplinix uses cookies to personalize content, analyze traffic,
                and enhance user experience. Manage preferences through browser
                settings.
              </p>
            </section>

            {/* Data Protection */}
            <section id="data-protection" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                8. Data Protection and Confidentiality
              </h2>
              <p className="text-[#909090]">
                Zeplinix implements security measures to protect personal
                information from unauthorized access, misuse, or loss.
              </p>
            </section>

            {/* Retention */}
            <section id="retention" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                9. Retention of Personal Information
              </h2>
              <p className="text-[#909090]">
                Personal information is retained for as long as required for
                legal compliance, resolving disputes, and providing services.
              </p>
            </section>

            {/* Contact Us */}
            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Contact Us</h2>
              <p className="text-[#909090]">
                For any questions regarding this Privacy Statement, contact us:
              </p>
              <p className="text-[#909090]">
                Zeplinix Technologies Private Limited
                <br />
                Tower 1, Third Floor, 310, World Trade Center, Kharadi, Pune
                411014
                <br />
                Email: <a href="mailto:info@zeplinix.com">info@zeplinix.com</a>
              </p>
            </section>
          </main>

          {/* Right Table of Content */}
          <aside className="lg:w-1/4 hidden lg:block md:block bg-glass p-6 rounded-lg shadow-lg h-fit  top-10 bg-blur-2xl border-0.4 border-lighest-gray backdrop-blur-lg z-10">
            {/* <aside className="lg:w-1/4 bg-glass p-6 rounded-lg shadow-lg h-fit sticky top-10 bg-blur-2xl"> */}
            <h2 className="text-xl font-bold mb-4">Table of Content</h2>
            <ul className="space-y-2 text-gray-300">
              {privacySections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:text-white ">
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
