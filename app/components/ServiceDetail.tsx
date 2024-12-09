/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ServiceDetail = () => {
  const ServiceData = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    // Define the tab titles
    const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">1. Predictive Analytics</h2>
        <p className="text-lg mb-2 text-[#909090]">
          Leverage data-driven predictions to forecast trends, customer
          behavior, and business outcomes. Optimize decision-making processes
          using statistical models and machine learning algorithms.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          2. Natural Language Processing (NLP)
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Extract value from unstructured text data through sentiment analysis,
          text summarization, and semantic understanding. Build intelligent
          chatbots and virtual assistants for enhanced customer interaction.
        </p>
        <h2 className="text-2xl font-semibold mb-4">3. Computer Vision</h2>
        <p className="text-lg mb-2 text-[#909090]">
          Develop applications that interpret and analyze visual data such as
          images and videos. Enable facial recognition, object detection, and
          quality inspection for diverse industries.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          4. AI-Powered Automation
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Streamline repetitive tasks using Robotic Process Automation (RPA)
          integrated with AI. Boost productivity by automating workflows across
          departments.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          5. Recommendation Systems
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Personalize user experiences with advanced recommendation engines.
          Enhance product discovery and customer satisfaction with AI-driven
          suggestions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          6. Custom Machine Learning Models
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Design and deploy tailored machine learning models to solve specific
          business challenges. Improve efficiency, accuracy, and scalability
          with customized AI solutions.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          7. Data Engineering & Preprocessing
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Ensure clean, structured, and usable datasets for effective AI model
          training. Handle data transformation, feature extraction, and
          real-time data pipelines.
        </p>
        <h2 className="text-2xl font-semibold mb-1">
          8. AI Model Deployment & Monitoring
        </h2>
        <p className="text-lg mb-2 text-[#909090]">
          Seamlessly integrate AI models into your existing systems with
          scalable architecture. Monitor, evaluate, and optimize models in
          real-time to ensure peak performance.
        </p>
      </div>,
      <div>Content for Tab 2</div>,
      <div>Content for Tab 3</div>,
      <div>Content for Tab 4</div>,
    ];

    return (
      <div className="flex">
        {/* Left Side: Tabs */}
        <div className="w-1/4">
          <div className="space-y-2">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-3 cursor-pointer rounded-md ${
                  activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tab content */}
        <div className="w-3/4 ">{tabContent[activeTab]}</div>
      </div>
    );
  };

  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6 border-b-2 border-[#7A7878] mb-5">
          {/* Left Side Content */}
          <div className="md:w-1/2 flex flex-col items-start space-y-6 ">
            {/* Circle with Arrow */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center">
                <Link href="/blog/my-first-post">
                  <span className="text-red-600 font-bold text-lg">&larr;</span>
                </Link>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold">AI/ML Services</h1>

            {/* Description */}
            <p className="text-lg text-gray-300">
              Unlock the potential of your business with cutting-edge AI and
              Machine Learning solutions. At Zeplinix Technologies, we harness
              the power of artificial intelligence to transform data into
              actionable insights, automate workflows, and drive smarter
              decision-making.
            </p>

            {/* Contact Us Link */}
            <a
              href="#"
              className="text-red-500 font-semibold flex items-center hover:underline"
            >
              Free Consultation &rarr;
            </a>
          </div>

          {/* Right Side Video */}
          <div className="relative lg:w-1/2 flex justify-end mt-8 lg:mt-0">
            <Image
              src={"/service/head.png"}
              alt={""}
              width={400}
              height={300}
              className="object-cover rounded-t-lg"
              style={{ height: "auto" }}
            />

            <div
              className="absolute inset-0 z-[1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[900px] lg:h-[400px] left-[-150px] sm:left-[-200px] md:left-[-300px] top-[50px] sm:top-[75px] lg:top-[-80px]"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.3) 0%, rgba(128, 32, 39, 0) 100%)",
                transform: "rotate(180deg)",
              }}
            ></div>
          </div>
        </div>
        <div>{ServiceData()}</div>
      </div>
    </>
  );
};

export default ServiceDetail;
