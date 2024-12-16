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
      "Benefits of PredictEase",
      "Industries We Cater To",
      "Why choose PredictEase",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Warranty Purchase Made Easy
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Browse and compare warranty plans tailored to your products.</li>
          <li>
            Enjoy a seamless buying experience with secure payment options.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Intelligent Claims Management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>File claims effortlessly with step-by-step guided workflows.</li>
          <li>Track claim statuses in real-time and receive timely updates.</li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Custom Protection Plans
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Create warranty plans that suit individual lifestyles and needs.
          </li>
          <li>
            Bundle product coverage with additional benefits like maintenance
            services.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. User-Friendly Interface (UI)
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Navigate the platform with ease using an intuitive and responsive
            design.
          </li>
          <li>
            Accessible across devices, ensuring convenience for every user.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          5. AI-Driven Recommendations
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Receive personalized warranty suggestions based on product usage and
            history.
          </li>
          <li>Optimize coverage plans with intelligent analytics.</li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          6. Seamless Integrations
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Integrate with retailer systems for automated warranty
            registrations.
          </li>
          <li>
            Connect with third-party service providers for claim approvals and
            repairs.
          </li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          7. Paperless Documentation
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Upload, store, and access warranty documents digitally.</li>
          <li>Retrieve receipts and contracts anytime, anywhere.</li>
        </p>

        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          8. Secure & Compliant
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Safeguard sensitive customer data with advanced encryption.</li>
          <li>
            Stay compliant with regional regulations and industry standards.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">Content for Tab 2</div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Convenience
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Manage warranties and claims anytime, from anywhere.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Transparency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Track claims, expenses, and coverage details in real time. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Customization
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Tailored warranty plans for individuals and businesses. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Efficiency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Automate processes, reducing manual effort and errors. </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Electronics & Appliances
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Extended warranties for gadgets, appliances, and smart devices.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Automotive
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Comprehensive coverage for vehicles and parts.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Furniture
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Protection plans for wear and tear over time. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">4. Retail</h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Partner with retailers to enhance post-purchase customer experience.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. End-to-End Solution
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            From purchasing to claims, everything is handled in one platform.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. User-Centric Design
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Built for seamless navigation and effortless management.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. AI-Enabled Insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Optimize offerings with data-driven recommendations. </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Trusted Platform
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Reliable, secure, and designed to exceed expectations. </li>
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
            <h1 className="text-xl md:text-3xl lg:text-5xl text-center md:text-center lg:text-center font-bold leading-tight mb-6 mt-2 lg:mt-0 md:mt-0">
              Transform Warranty Management with PredictEase
            </h1>
            <p className="text-lg text-center md:text-center lg:text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Whether you’re an individual protecting your purchases or a
              business offering tailored warranty plans, PredictEase is your
              ultimate solution. Contact us today to see how we can redefine
              your warranty experience.
            </p>
            <Link href="/contact">
              <button className="   px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
                <p className="flex gap-2 items-center">
                  Contact us today
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
                  Predictease
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

            <h1 className="text-2xl md:text-4xl font-normal text-left md:text-left lg:text-left">
              <span className="text-primary">Predictease </span>- Your
              End-to-End Warranty Solution
            </h1>

            <p className="text-lg text-[#909090] text-left md:text-left lg:text-left">
              Simplify warranty management with Predictease, a comprehensive
              platform designed to handle everything from warranty purchases to
              claims. With an intuitive interface and robust backend,
              Predictease ensures a seamless experience for customers and
              businesses alike.
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
            src="/product-details/predictease.png"
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
