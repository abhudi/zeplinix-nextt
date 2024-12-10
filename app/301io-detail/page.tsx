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
      "AI/ML Features in BohoHR",
      "Benefits of BohoHR",
      "Industries We Cater To",
      "Integrated Modules",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">
          1. Smart Recruitment & Talent Acquisition
        </h2>
        <p className="text-lg mb-2">
          <li>AI-driven candidate screening and shortlisting.</li>
          <li>Automated job postings and candidate communication.</li>
          <li>
            Predictive hiring analytics to identify the best-fit candidates.
          </li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          2. Employee Lifecycle Management
        </h2>
        <p className="text-lg mb-2">
          <li>
            Track and manage the entire employee journey, from onboarding
            tooffboarding.
          </li>
          <li>
            Centralized employee records and streamlined document management.
          </li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          3. AI-Enabled Workforce Insights
        </h2>
        <p className="text-lg mb-2">
          <li>
            Real-time analytics to monitor employee performance, engagement, and
            retention.
          </li>
          <li>Predictive modeling to forecast workforce trends and needs.</li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          4. Automated Payroll & Compliance
        </h2>
        <p className="text-lg mb-2">
          <li>
            Hassle-free payroll processing with integrated tax compliance.
          </li>
          <li>Employee benefits administration and error-free calculations.</li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          5. Customizable Performance Management
        </h2>
        <p className="text-lg mb-2">
          <li>AI-powered performance reviews and goal tracking.</li>
          <li>Tailored feedback mechanisms and 360-degree evaluation.</li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          6. Time & Attendance Tracking
        </h2>
        <p className="text-lg mb-2">
          <li>
            Advanced scheduling and time tracking integrated with biometric
            systems.
          </li>
          <li>
            AI-enabled attendance pattern analysis to enhance workforce
            efficiency.
          </li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          7. Employee Engagement Tools
        </h2>
        <p className="text-lg mb-2">
          <li>
            Interactive employee portals for communication and collaboration.
          </li>
          <li>
            Gamified recognition programs and surveys to boost engagement.
          </li>
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          8. Leave & Expense Management
        </h2>
        <p className="text-lg mb-2">
          <li>
            Simplified leave applications with automated approval workflows.
          </li>
          <li>Integrated expense reporting and reimbursement systems.</li>
        </p>
      </div>,
      <div className="text-white">Content for Tab 2</div>,
      <div className="text-white">Content for Tab 3</div>,
      <div className="text-white">Content for Tab 4</div>,
      <div className="text-white">Content for Tab 5</div>,
    ];

    return (
      <div className="flex flex-col md:flex-row mt-10 md:mt-20">
        {/* Left Side: Tabs */}
        <div className="md:w-1/4 w-full mb-6 md:mb-0">
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-3 cursor-pointer rounded-md ${
                  activeTab === index
                    ? "border-t-0.4 border-[#454545] text-primary text-xl md:text-2xl"
                    : "border-t-0.4 border-[#454545] text-white text-xl md:text-2xl"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tab content */}
        <div className="md:w-3/4 w-full">{tabContent[activeTab]}</div>
      </div>
    );
  };

  const ServiceBox = () => {
    return (
      <div className="mt-10 mb-10 md:mt-28 md:mb-28">
        <div className="relative mx-4 md:mx-8 lg:mx-12">
          <div className="bg-white h-[370px] w-full p-4 flex items-center justify-center flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold leading-tight mb-6">
              Transform Your HR with BohoHR
            </h1>
            <p className="text-lg text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Experience the future of HR management with BohoHR’s seamless,
              intelligent, and scalable platform. Let us help you create a
              thriving workplace culture while simplifying your HR processes.
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-[white] font-semibold rounded-full shadow-lg transition border border-light-gray">
              Contact us today
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

  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-10 2xl:mx-24">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6  mb-5">
          {/* Left Side Content */}
          <div className="md:w-1/2 w-full flex flex-col items-start space-y-6 ">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center">
                <Link href="/portfolio">
                  <span className="text-red-600 font-bold text-lg">&larr;</span>
                </Link>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              <span className="text-primary">Redefining</span> HR Management
            </h1>

            <p className="text-lg text-gray-300 text-center md:text-left">
              Streamline your HR operations and elevate your workforce
              management with BohoHR, a cutting-edge platform designed to handle
              every aspect of human resources. Built with the latest AI and ML
              technologies, BohoHR delivers intelligent solutions that empower
              businesses to attract, manage, and retain top talent.
            </p>

            <a
              href="#"
              className="text-red-500 font-semibold flex items-center justify-center md:justify-start hover:underline"
            >
              Free Consultation &rarr;
            </a>
          </div>
        </div>

        <div className="relative mt-52">
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