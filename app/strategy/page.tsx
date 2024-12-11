/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          1. Predictive Analytics
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Leverage data-driven predictions to forecast trends, customer
          behavior, and business outcomes. Optimize decision-making processes
          using statistical models and machine learning algorithms.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Natural Language Processing (NLP)
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Extract value from unstructured text data through sentiment analysis,
          text summarization, and semantic understanding. Build intelligent
          chatbots and virtual assistants for enhanced customer interaction.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Computer Vision
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Develop applications that interpret and analyze visual data such as
          images and videos. Enable facial recognition, object detection, and
          quality inspection for diverse industries.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. AI-Powered Automation
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Streamline repetitive tasks using Robotic Process Automation (RPA)
          integrated with AI. Boost productivity by automating workflows across
          departments.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Recommendation Systems
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Personalize user experiences with advanced recommendation engines.
          Enhance product discovery and customer satisfaction with AI-driven
          suggestions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Custom Machine Learning Models
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Design and deploy tailored machine learning models to solve specific
          business challenges. Improve efficiency, accuracy, and scalability
          with customized AI solutions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          7. Data Engineering & Preprocessing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Ensure clean, structured, and usable datasets for effective AI model
          training. Handle data transformation, feature extraction, and
          real-time data pipelines.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          8. AI Model Deployment & Monitoring
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Seamlessly integrate AI models into your existing systems with
          scalable architecture. Monitor, evaluate, and optimize models in
          real-time to ensure peak performance.
        </p>
      </div>,
      <div className="text-white">Content for Tab 2</div>,
      <div className="text-white">Content for Tab 3</div>,
      <div className="text-white">Content for Tab 4</div>,
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
              Transform Your Business with AI/ML
            </h1>
            <p className="text-lg text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Empower your organization with smarter, faster, and more efficient
              processes. Let us help you lead in the era of AI. Contact us today
              to discuss your AI/ML needs and take the first step towards
              innovation!
            </p>
            <button className="px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-[white] font-semibold rounded-full shadow-lg transition border border-light-gray">
              Contact now
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

  const serviceSliderData = [
    {
      imageSrc: "/service/icons/strategy.png",
      title: "Strategy and consultancy",
      linkHref: "/service-1",
    },
    {
      imageSrc: "/service/icons/flutter.png",
      title: "Application services",
      linkHref: "/service-2",
    },
    {
      imageSrc: "/service/icons/cloud.png",
      title: "Cloud services",
      linkHref: "/service-3",
    },
    {
      imageSrc: "/service/icons/data.png",
      title: "Data analytics",
      linkHref: "/service-1",
    },
    {
      imageSrc: "/service/icons/software.png",
      title: "Software development",
      linkHref: "/service-2",
    },
    {
      imageSrc: "/service/icons/design.png",
      title: "Graphic designing",
      linkHref: "/service-3",
    },
  ];

  const ServiceSliderBox = ({
    imageSrc,
    title,
    linkHref,
  }: {
    imageSrc: string;
    title: string;
    linkHref: string;
  }) => {
    return (
      <div className="w-full lg:w-1/4 md:w-1/2 p-4 bg-[#303030] flex items-center flex-col lg:items-start">
        <Link href={linkHref}>
          <Image
            src={imageSrc}
            alt="service icon"
            className="w-16 h-16 text-primary"
            width={80}
            height={80}
          />
          <h3 className="text-xl lg:text-2xl font-semibold text-white text-center lg:text-left mt-4">
            {title}
          </h3>
        </Link>
      </div>
    );
  };

  const ServiceSlider = () => {
    return (
      <div className="carousel-container overflow-hidden">
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
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6 border-b-2 border-[#7A7878] mb-5">
          {/* Left Side Content */}
          <div className="md:w-1/2 w-full flex flex-col items-start space-y-6 ">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center">
                <Link href="/service">
                  <span className="text-red-600 font-bold text-lg">&larr;</span>
                </Link>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              AI/ML Services
            </h1>

            <p className="text-lg text-gray-300 text-center md:text-left">
              Unlock the potential of your business with cutting-edge AI and
              Machine Learning solutions. At Zeplinix Technologies, we harness
              the power of artificial intelligence to transform data into
              actionable insights, automate workflows, and drive smarter
              decision-making.
            </p>

            <Link
              href="#"
              className="text-red-500 flex gap-2 items-center font-semibold   justify-center md:justify-start hover:underline"
            >
              Free Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
                style={{ rotate: "-35deg" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Side Video */}
          <div className="relative lg:w-1/2 w-full flex justify-center md:justify-end mt-8 lg:mt-0">
            <Image
              src={"/service/head.png"}
              alt={""}
              width={400}
              height={300}
              className="object-cover rounded-t-lg"
            />
            <div
              className="absolute inset-0 z-[1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[900px] lg:h-[400px] left-[-150px] sm:left-[-200px] md:left-[-300px] top-[50px] sm:top-[75px] lg:top-[100px]"
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
