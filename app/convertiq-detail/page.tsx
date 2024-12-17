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
      "AI/ML Features in ConvertIQ",
      "Benefits of ConvertIQ",
      "Industries We Cater To",
      "Why choose ConvertIQ?",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Lead Capture and Management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Centralized database to manage and track leads with complete
            interaction history.
          </li>
          <li>
            Organize leads by source, status, and priority for efficient
            follow-up.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Automated Lead Scoring
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Automatically score leads based on engagement, interest, and
            demographic data.
          </li>
          <li>
            Prioritize high-value leads and allocate resources accordingly.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Lead Nurturing Campaigns
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Set up automated email and messaging workflows for lead engagement.
          </li>
          <li>
            Personalize communication based on lead behavior and interests.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. CRM Integration
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Integrate seamlessly with your existing CRM to streamline data
            synchronization.
          </li>
          <li>
            Sync lead details and activity across all platforms for unified lead
            management.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          5. Landing Page Creation and A/B Testing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Create optimized landing pages to capture leads.</li>
          <li>
            Run A/B tests to measure performance and improve conversion rates.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          6. Lead Analytics and Reporting
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Generate detailed reports on lead acquisition, conversion rates, and
            pipeline performance.
          </li>
          <li>
            Use analytics to identify trends and optimize your lead generation
            strategy.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          7. Team Collaboration Tools
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Share lead information and status updates within your team to
            streamline collaboration.
          </li>
          <li>Assign leads to team members and track follow-ups.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          8. Customizable Workflows
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Design custom workflows to automate lead routing, follow-ups, and
            outreach activities.
          </li>
          <li>Set triggers for actions based on lead actions and behavior.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          9. Integration with Marketing Tools
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Integrate with popular marketing tools like Mailchimp, HubSpot, and
            more to streamline lead generation efforts.
          </li>
          <li>
            Automate lead capture from ads, social media, and content marketing.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          10. Secure Data Management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Protect lead and customer data with advanced encryption and
            compliance with data privacy laws like GDPR.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Lead Capture and Management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Centralized database to manage and track leads with complete
            interaction history.
          </li>
          <li>
            Organize leads by source, status, and priority for efficient
            follow-up.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Increased Lead Conversion
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Automate lead nurturing and prioritize high-value leads to boost
            conversions.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Enhanced Efficiency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Reduce manual tasks with automated workflows and scoring.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Real-Time Access
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Access lead data and campaign performance from anywhere, anytime.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Scalable and Customizable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Perfect for businesses of all sizes, with flexibility to meet unique
            needs.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Marketing Agencies
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Manage leads for multiple clients with ease.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. E-commerce
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Capture and nurture leads from site visitors.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. SaaS Providers
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Automate lead follow-ups and onboarding for trial users.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. B2B Services
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Optimize lead generation and pipeline management for enterprise
            sales teams.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. User-Centric Design
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Intuitive interfaces for marketers, sales teams, and administrators.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Comprehensive Functionality
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Covers all aspects of lead generation, from capture to conversion.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Compliance and Security
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Built with the highest data protection standards to safeguard lead
            information.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. 24/7 Support
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Reliable customer support to ensure smooth operations and maximize
            your lead generation success.
          </li>
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
                    className="w-5 h-5  "
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
          <div className="bg-white h-auto md:h-[370px] ld:h-[370px] w-full p-4 flex items-center justify-center flex-col">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-center  font-bold leading-tight mb-6 mt-2 lg:mt-0 md:mt-0">
              Transform Your Lead Generation Strategy
            </h1>
            <p className="text-lg text-center  text-[#595959] mb-6 lg:mx-40 mx-4">
              Boost your lead generation and conversion efforts with ConvertIQ.
              Contact us today to learn how our solution can revolutionize your
              lead generation process.
            </p>
            <Link href="/contact">
              <button className="   px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
                <p className="flex gap-2 items-center">
                  Contact us
                  <svg
                    className="w-5 h-5  "
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
            </Link>
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
                  ConvertIQ
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
                <Link href="/portfolio">
                  <span className="text-red-600 font-bold text-lg">
                    <svg
                      className="w-5 h-5 "
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

            <h1 className="text-2xl md:text-4xl font-normal text-left ">
              <span className="text-primary">ConvertIQ - </span> Optimize Your
              Lead Generation Process
            </h1>

            <p className="text-lg text-[#909090] text-left ">
              Transform your lead generation strategy with ConvertIQ, an
              intelligent platform designed to maximize your lead capture,
              nurturing, and conversion efforts. From personalized lead tracking
              to automated workflows, ConvertIQ empowers businesses with
              advanced tools to attract and convert leads effectively.
            </p>

            <Link
              href="/contact"
              className="text-red-500 flex gap-2 items-center font-semibold   justify-center md:justify-start hover:underline"
            >
              Free Consultation
              <svg
                className="w-5 h-5  "
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
            src="/product-details/convertiq.png"
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
