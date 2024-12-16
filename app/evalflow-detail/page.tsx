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
      "Benefits of Evalflow",
      "Industries We Cater To",
      "Why choose us",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          1. Customizable Scoring Criteria
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Define and configure evaluation parameters to suit your business
            needs.
          </li>
          <li>
            Include metrics such as timeliness, quality, cost efficiency, and
            engagement.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          2. Automated Rating System
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Assign scores automatically based on predefined rules and real-time
            data.
          </li>
          <li>Reduce human errors and ensure unbiased evaluations.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          3. Dynamic Reporting and Dashboards
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Visualize client performance with detailed dashboards and analytics.
          </li>
          <li>
            Generate comprehensive reports for review and strategic planning.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          4. Client Comparison and Benchmarking
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Compare scores across clients to identify top performers and
            improvement areas.
          </li>
          <li>
            Benchmark performance against industry standards or custom
            thresholds.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          5. Multi-Factor Integration
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Aggregate data from various sources, such as CRM, ERP, or financial
            tools.
          </li>
          <li>Synchronize with existing systems for a seamless data flow.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          6. Alerts and Notifications
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Receive alerts for underperforming scores or critical thresholds.
          </li>
          <li>
            Stay updated with timely notifications for periodic evaluations.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          7. Access Control and User Management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Assign roles and permissions to ensure secure access to scorecard
            data.
          </li>
          <li>Maintain data confidentiality and compliance.</li>
        </p>
        <h2 className="text-[18px] font-semibold text-[#E1E1E1]">
          8. AI-Driven Insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Use predictive analytics to forecast trends and potential risks.
          </li>
          <li>
            Leverage anomaly detection to identify outliers and deviations.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Enhanced Decision-Making
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Rely on data-backed insights for better client evaluations.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Improved Client Relationships
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Use ratings to address gaps and improve collaboration.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Efficiency and Accuracy
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Automate evaluations and reduce manual efforts.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Transparency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li> Ensure objective and unbiased scoring across all clients. </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Pharmaceuticals
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Evaluate suppliers on quality, timeliness, and compliance. </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">2. Retail</h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Assess vendor performance based on cost and delivery timelines.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Manufacturing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Rate suppliers on raw material quality and production efficiency.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. IT Services
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Measure client engagement and project success rates.</li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Customizable and Scalable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Tailored to fit businesses of any size or industry.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. User-Friendly Interface
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Easy to adopt with minimal learning curve. </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Actionable Insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Gain deeper understanding with intuitive analytics.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Secure and Reliable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Built on robust security standards to protect your data. </li>
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
            <h1 className="text-xl md:text-3xl lg:text-5xl text-left md:text-center lg:text-center font-bold leading-tight mb-6 mt-2 lg:mt-0 md:mt-0">
              Evaluate Better, Perform Smarter
            </h1>
            <p className="text-lg text-left md:text-center lg:text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Transform how you assess and engage with clients using our
              Scorecard Management Tool. Contact us today to learn how our
              solution can drive growth and build stronger partnerships.
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
                  Evalflow
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

            <h1 className="text-2xl md:text-4xl font-normal text-left md:text-center lg:text-center">
              <span className="text-primary">Evalflow </span>- Evaluate and
              Empower with Precision
            </h1>

            <p className="text-lg text-[#909090] text-left md:text-center lg:text-center">
              Make informed decisions and foster better client relationships
              with our Scorecard Management Tool, a powerful solution designed
              to evaluate and rate clients based on multiple factors. With
              real-time insights and automated scoring, our tool ensures
              transparency, efficiency, and data-driven decision-making.
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
            src="/product-details/evalflow.png"
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
