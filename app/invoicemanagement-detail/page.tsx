/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
// import "./css/standardproduct.css";

const ProductsDetail = () => {
  const ServiceData = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    // Define the tab titles
    const tabs = [
      "Core features",
      "AI/ML features in invoice management",
      "Benefits of invoice management",
      "Industries We Cater To",
      "Why choose invoice management?",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Automated Invoice Generation
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Create professional invoices instantly with pre-designed templates.
          </li>
          <li>
            Automate recurring invoices for subscription-based businesses.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Multi-Currency Support
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Seamlessly generate and process invoices in multiple currencies.
          </li>
          <li>
            Stay compliant with global tax regulations for cross-border
            transactions.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Real-Time Payment Tracking
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Monitor payment status with automated updates.</li>
          <li>Send reminders for pending payments to reduce delays.</li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Customizable Invoice Templates
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Tailor invoice designs to reflect your brand identity.</li>
          <li>
            Include personalized notes, payment terms, and client details.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          5. Integration with Financial Tools
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Sync seamlessly with your existing accounting software like
            QuickBooks, Xero, or SAP.
          </li>
          <li>
            Connect with payment gateways for effortless payment processing.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          6. Tax Calculation & Compliance
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Automate tax calculations, including GST, VAT, and other
            region-specific requirements.
          </li>
          <li>Generate accurate reports for audits and filings.</li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          7. Comprehensive Reporting & Insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Gain insights into receivables, payment trends, and client behavior.
          </li>
          <li>
            Access real-time dashboards for better financial decision-making.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          8. Secure Data Storage
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Store and access invoices securely with advanced encryption.</li>
          <li>
            Ensure compliance with GDPR and other data protection standards.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Fraud Detection
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Identify anomalies in transactions to prevent fraud.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Smart Payment Predictions
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Forecast payment cycles based on client behavior. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. OCR Integration
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Automatically extract details from scanned documents. </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Efficiency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Save time with automation and reduce manual errors. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Scalability
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Designed to grow with your business, from small startups to large
            enterprises.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Transparency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Gain full visibility into your financial processes.</li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Retail & E-Commerce
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Automated billing for high-volume transactions. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Professional Services
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Streamlined invoicing for recurring and project-based payments.{" "}
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Healthcare
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Easy billing for clinics, hospitals, and pharmacies.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Real Estate
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            {" "}
            Simplified invoice management for property sales and rentals.{" "}
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Custom Solutions
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Tailored to meet your industry-specific needs.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. User-Friendly Design
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Easy to adopt with minimal learning curve. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Secure and Compliant
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Built with security and regulatory standards in mind. </li>
        </p>
      </div>,
    ];

    return (
      <div className="flex flex-col md:flex-row mt-10 md:mt-20">
        {/* Left Side: Tabs */}
        <div className="md:w-2/5 w-full mb-6 md:mb-0">
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-3 pt-5 cursor-pointer rounded-md flex items-center gap-2 ${
                  activeTab === index
                    ? "border-t-0.4 border-[#454545] text-primary text-xl md:text-2xl"
                    : "border-t-0.4 border-[#454545] text-white text-xl md:text-2xl"
                }`}
              >
                {tab}
                {/* Show SVG only if activeTab matches index and on small screens */}
                {activeTab === index && (
                  <svg
                    className="w-5 h-5 sm:inline hidden"
                    width="28"
                    height="21"
                    viewBox="0 0 28 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                      fill="#E63946"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tab content */}
        <div className="md:w-3/5 w-full">{tabContent[activeTab]}</div>
      </div>
    );
  };

  const ServiceBox = () => {
    return (
      <div className="mt-10 mb-10 md:mt-28 md:mb-28">
        <div className="relative mx-4 md:mx-8 lg:mx-12">
          <div className="bg-white h-[370px] w-full p-4 flex items-center justify-center flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold leading-tight mb-6">
              Revolutionize Your Invoice Management
            </h1>
            <p className="text-lg text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Take the hassle out of invoicing with our smart, efficient, and
              reliable solution. Contact us today to explore how our Invoice
              Management Solution can simplify your business operations.
            </p>
            <button className="   px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
              <p className="flex gap-2 items-center">
                Contact us today
                <svg
                  className="w-5 h-5 sm:inline hidden"
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "-35deg" }}
                >
                  <path
                    d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                    fill="#ffffff"
                  />
                </svg>
              </p>
            </button>
          </div>

          {/* Background decoration */}
          <div
            className="absolute inset-0 z-[-1] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1000px] lg:h-[400px] left-0 top-[-50px] md:top-[-100px] lg:top-[-150px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(180deg)",
            }}
          ></div>
          <div
            className="absolute inset-0 z-[-1] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1000px] lg:h-[400px] left-0 top-[50px] md:top-[75px] lg:top-[100px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div>
      </div>
    );
  };

  const Marquee = () => {
    return (
      <div className="relative w-full overflow-hidden cursor-pointer pt-5">
        {/* Marquee container */}
        <div className="marquee-container">
          <div className="marquee bordereffect">
            {/* Marquee Scroll Section */}
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="marquee-scroll flex items-center justify-center"
              >
                {/* First Boho HR text */}
                <span className="bordereffect text-[96px]  lg:ml-20">
                  Invoice management
                </span>

                {/* Single Image between Boho HR texts */}
                <Image
                  src="/product-details/star.png"
                  alt="Star Image"
                  width={100}
                  height={100}
                  className="object-contain mx-4" // Ensures the image fits and adds margin between text and image
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-10 2xl:mx-24">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6  mb-5">
          {/* Left Side Content */}
          <div className="md:w-1/2 w-full flex flex-col items-start space-y-6 ">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#8B8B8B] flex items-center justify-center">
                <Link href="/service">
                  <span className="text-red-600 font-bold text-lg">
                    <svg
                      className="w-5 h-5 sm:inline hidden"
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

            <h1 className="text-2xl md:text-4xl font-normal text-center md:text-left">
              <span className="text-primary">Invoice</span> Management Solution
            </h1>

            <p className="text-lg text-[#909090] text-center md:text-left">
              Simplify billing and improve cash flow with our Invoice Management
              Solution, designed to automate your invoicing process, enhance
              accuracy, and provide real-time insights into your financial
              operations. Perfect for businesses of all sizes, our solution
              ensures you spend less time on paperwork and more time growing
              your business.
            </p>

            <Link
              href="#"
              className="text-red-500 flex gap-2 items-center font-semibold   justify-center md:justify-start hover:underline"
            >
              Free Consultation
              <svg
                className="w-5 h-5 sm:inline hidden"
                width="28"
                height="21"
                viewBox="0 0 28 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ rotate: "-35deg" }}
              >
                <path
                  d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                  fill="#E63946"
                />
              </svg>
            </Link>
          </div>
        </div>

        <Marquee />

        <div className="relative ">
          <Image
            src="/product-details/bohohr.png"
            alt="map"
            layout="responsive"
            width={800}
            height={500}
            className="object-cover rounded-lg"
          />

          <div
            className="absolute inset-0 z-[-1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[1254px] lg:h-[585px] left-[-150px] sm:left-[-200px] md:left-[-100px] top-[50px] sm:top-[75px] lg:top-[-190px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            }}
          ></div>
        </div>

        {/* Tab Section */}
        <ServiceData />

        {/* Call to Action */}
        <ServiceBox />

        <ProductCard />
      </div>
    </>
  );
};

export default ProductsDetail;
