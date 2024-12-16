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
          1. Creative Graphic Design
        </h2>
        <p className="text-[18px] text-[#909090]">
          Eye-catching logos, brochures, banners, and more that reflect your
          brand identity.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Custom illustrations and visuals to captivate and engage your
          audience.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Social Media Marketing (SMM)
        </h2>
        <p className="text-[18px] text-[#909090]">
          Build a strong online presence with targeted campaigns on platforms
          like Facebook, Instagram, LinkedIn, and Twitter.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Boost engagement and reach with paid promotions, organic content
          strategies, and influencer collaborations.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Digital Advertising Campaigns
        </h2>
        <p className="text-[18px] text-[#909090]">
          Develop and manage Google Ads, Facebook Ads, and PPC campaigns to
          maximize ROI.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Run remarketing campaigns to re-engage potential customers.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Branding and Identity Creation
        </h2>
        <p className="text-[18px] text-[#909090]">
          Craft compelling brand strategies that resonate with your audience.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Develop consistent branding across all platforms and materials.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Content Creation
        </h2>
        <p className="text-[18px] text-[#909090]">
          Create high-quality, engaging content tailored to your audience.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Develop blogs, ad copy, and social media posts that drive action.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Video and Motion Graphics
        </h2>
        <p className="text-[18px] text-[#909090]">
          Deliver stunning explainer videos, promotional animations, and product
          showcases.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Use storytelling and dynamic visuals to leave a lasting impression.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          7. Campaign Analytics and Reporting
        </h2>
        <p className="text-[18px] text-[#909090]">
          Monitor performance with detailed insights into reach, engagement, and
          conversions.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Optimize campaigns based on data-driven decisions for maximum impact.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">1. Retail</h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Dynamic product campaigns and seasonal promotions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Healthcare
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Trust-building graphics and educational content.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Real Estate
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          High-impact visuals and geo-targeted ads.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. E-commerce
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Retargeting ads and conversion-focused creatives.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Creative Expertise
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Designs that inspire, content that converts, and campaigns that
          deliver.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Strategic Approach
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Data-driven strategies to amplify your brand’s voice.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. End-to-End Solutions
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          From ideation to execution, we cover it all.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">1. Design</h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Adobe Photoshop, Illustrator, After Effects, Canva
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Advertising
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Google Ads, Facebook Ads Manager, LinkedIn Campaign Manager
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Social Tools
        </h2>

        <p className="text-[18px] mb-4 text-[#909090]">
          Hootsuite, Buffer, Sprout Social
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
          <div className="bg-white h-auto md:h-[370px] lg:h-[370px] w-full p-4 flex items-center justify-center flex-col">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-left md:text-center lg:text-center font-bold leading-tight mb-6 mt-2 lg:mt-0 md:mt-0">
              Amplify Your Brand’s Reach
            </h1>
            <p className="text-lg text-left md:text-center lg:text-center text-[#595959] mb-6 lg:mx-40 mx-4">
              Let us craft impactful designs, engaging content, and winning
              strategies to elevate your business. Contact us today to start
              making waves in the digital space.
            </p>
            <Link href="/contact">
              <button className="px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
                <p className="flex gap-2 items-center">
                  Contact now
                  <svg
                    className="w-5 h-5"
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
        <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-10 px-6 border-b-0.4 border-[#616161] mb-5">
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

            <h1 className="text-2xl md:text-4xl font-normal text-center md:text-left">
              Graphic Services
            </h1>

            <p className="text-lg text-[#909090] text-left md:text-center lg:text-center">
              Elevate your brand presence and connect with your audience like
              never before. At Zeplinix Technologies, we combine creative
              design, strategic advertising, and impactful social media
              campaigns to help businesses stand out in the digital world and
              achieve measurable results.
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
              src={"/service/graphic-detail.png"}
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
