/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceSliderBox from "../components/ServiceSliderBox";

const serviceDetails = () => {
  const ServiceData = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    // Define the tab titles
    const tabs = [
      "Our offerings",
      "Industries we serve",
      "Why choose us ?",
      "Technologies we use",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1.Bespoke Application Development
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Create software that fits your business processes like a glove.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Develop scalable and intuitive applications for web, mobile, and
          desktop.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Enterprise Software Solutions
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Build robust, secure, and efficient systems for enterprise needs.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Streamline operations with customized ERP, CRM, and HRMS platforms.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Legacy System Modernization
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Upgrade outdated systems to enhance performance and user experience.
        </p>
        <p className="text-[18px] mb-4  text-[#909090]">
          Integrate new features without disrupting ongoing operations.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4.SaaS Product Development
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Develop multi-tenant SaaS platforms tailored to industry-specific
          needs.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Implement seamless subscription management and cloud-native solutions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. API Development & Integration
        </h2>
        <p className="text-[18px] text-[#909090]">
          Create powerful APIs to integrate existing tools and third-party
          platforms.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Enable smooth data exchange and enhanced system interoperability.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Quality Assurance & Testing
        </h2>
        <p className="text-[18px] text-[#909090]">
          Ensure high-quality deliverables with rigorous testing and validation.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Perform functional, performance, and security testing for reliability.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          7. Maintenance & Support
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Provide ongoing support and updates to keep your software performing
          at its best.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Monitor, troubleshoot, and optimize applications post-deployment.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Tailored Solutions
        </h2>
        <p className="text-[18px] mb-4  text-[#909090]">
          Built specifically for your business needs.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Agility
        </h2>
        <p className="text-[18px] mb-4  text-[#909090]">
          Rapid development using modern methodologies like Agile and DevOps.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Expert Team
        </h2>
        <p className="text-[18px] mb-4  text-[#909090]">
          Experienced professionals delivering quality and innovation.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">1. Retail</h2>
        <p className="text-[18px] mb-4  text-[#909090]">
          Custom POS systems and inventory management solutions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Healthcare
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          Patient portals and appointment management systems.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Finance
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          Secure transaction processing and risk management software.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Real Estate
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          Property listing and customer engagement platforms.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Frontend
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          React, Angular, Vue.js
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Backend
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          Node.js, Python, PHP, Java
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Database
        </h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          MySQL, PostgreSQL, MongoDB
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">3. DevOps</h2>
        <p className="text-[18px]  mb-4  text-[#909090]">
          Docker, Kubernetes, Jenkins
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
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-lg text-left md:text-center lg:text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              From concept to deployment, we turn your vision into fully
              functional software solutions. Contact us today to explore how our
              Custom Software Development services can empower your business.
            </p>
            <Link href="/contact">
              <button className="   px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
                <p className="flex gap-2 items-center">
                  Contact now
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

  const serviceSliderData = [
    {
      imageSrc: "/service/icons/strategy.png",
      title: "Strategy and consultancy",
      linkHref: "/strategy",
    },
    {
      imageSrc: "/service/icons/flutter.png",
      title: "Application services",
      linkHref: "/application",
    },
    {
      imageSrc: "/service/icons/cloud.png",
      title: "Cloud services",
      linkHref: "/cloud",
    },
    {
      imageSrc: "/service/icons/data.png",
      title: "Data analytics",
      linkHref: "/data",
    },
    {
      imageSrc: "/service/icons/software.png",
      title: "Software development",
      linkHref: "/software",
    },
    {
      imageSrc: "/service/icons/design.png",
      title: "Graphic designing",
      linkHref: "/graphic",
    },
  ];

  const ServiceSlider = () => {
    return (
      <div className="carousel-container overflow-hidden mb-10">
        <div className="carousel flex">
          {serviceSliderData.map((card, index) => (
            <ServiceSliderBox
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              linkHref={card.linkHref}
            />
          ))}
          {/* Duplicate the cards to create a seamless loop */}
          {serviceSliderData.map((card, index) => (
            <ServiceSliderBox
              key={`duplicate-${index}`}
              imageSrc={card.imageSrc}
              title={card.title}
              linkHref={card.linkHref}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-10 2xl:mx-24">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6 border-b-0.4 border-[#616161] mb-5 overflow-hidden">
          {/* Left Side Content */}
          <div className="md:w-1/2 w-full flex flex-col items-start space-y-6 ">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-[#8B8B8B] flex items-center justify-center">
                <Link href="/service">
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

            <h1 className="text-2xl md:text-4xl font-normal text-left ">
              Software Development Services
            </h1>

            <p className="text-lg text-[#909090] text-left ">
              Drive innovation and achieve your business goals with tailor-made
              software solutions. At Zeplinix Technologies, we specialize in
              designing, developing, and delivering custom software that aligns
              perfectly with your unique requirements, helping you stay ahead in
              a competitive market.
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

          {/* Right Side Video */}
          <div className="relative lg:w-1/2 w-full flex justify-center md:justify-end mt-8 lg:mt-0">
            <Image
              src={"/service/software-details.svg"}
              alt={""}
              width={400}
              height={300}
              className="object-cover rounded-t-lg"
            />
            <div
              className="absolute inset-0 z-[1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[900px] lg:h-[400px] left-[-150px] sm:left-[-200px] md:left-[-200px] top-[50px] sm:top-[75px] lg:top-[0px]"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
                transform: "rotate(180deg)",
              }}
            ></div>
          </div>
        </div>

        {/* Tab Section */}
        {ServiceData()}

        {/* Call to Action */}
        {ServiceBox()}

        {/* Service Slider */}
        {ServiceSlider()}
      </div>
    </>
  );
};

export default serviceDetails;
