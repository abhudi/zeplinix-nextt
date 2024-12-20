/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceSliderBox from "../components/ServiceSliderBox";

const ServiceDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedContact, setSelectedContact] = useState<
    "email" | "phone" | "both" | ""
  >("");
  const [showEmailOTP, setShowEmailOTP] = useState<boolean>(false);
  // const [showPhoneOTP, setShowPhoneOTP] = useState<boolean>(false);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  // const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (value: "email" | "phone" | "both") => {
    setSelectedContact(value);
    setShowEmailOTP(false);
    // setShowPhoneOTP(false);
    setEmailVerified(false);
    // setPhoneVerified(false);
  };

  const handleVerifyEmail = () => {
    setShowEmailOTP(true);
  };

  // const handleVerifyPhone = () => {
  //   setShowPhoneOTP(true);
  // };

  const handleOTPChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "email" | "phone"
  ) => {
    const otp = e.target.value;
    if (otp.length === 6) {
      if (type === "email") {
        setShowEmailOTP(false);
        setEmailVerified(true);
      }
    }
  };

  const handleBookAppointment = () => {
    // Add validation logic for all fields here if necessary
    const isFormValid = selectedContact && emailVerified; // Example validation

    if (isFormValid) {
      setIsConfirmationOpen(true); // Show the confirmation popup
    } else {
      alert("Please fill all fields and verify your email.");
    }
  };

  const closeConfirmationPopup = () => {
    setIsConfirmationOpen(false);
  };
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
          1. Business Intelligence (BI) Solutions
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Interactive dashboards and visualizations for real-time insights.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Streamline decision-making with powerful BI tools.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Data Integration & Warehousing
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Seamlessly integrate and consolidate data from multiple sources.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Build scalable data warehouses for unified analytics.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Predictive Analytics
        </h2>
        <p className="text-[18px] text-[#909090]">
          Anticipate trends and customer behavior with machine learning models.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Enable proactive business strategies through forecasting.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Data Governance & Quality Management
        </h2>
        <p className="text-[18px] text-[#909090]">
          Ensure data accuracy, consistency, and compliance.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Implement robust governance frameworks to protect your data assets.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Big Data Analytics
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Process and analyze massive datasets with cutting-edge technologies.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Extract valuable insights from structured and unstructured data.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Self-Service Analytics
        </h2>
        <p className="text-[18px]  text-[#909090]">
          Empower teams with easy-to-use tools for independent data exploration.
        </p>
        <p className="text-[18px] mb-4 text-[#909090]">
          Enhance agility and collaboration across departments.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">1. Retail</h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Optimize supply chain, personalize customer experiences.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Finance
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Fraud detection, credit risk analysis.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Healthcare
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Patient data analysis, treatment optimization.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Manufacturing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Predictive maintenance, process optimization.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Expertise
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Proven track record in delivering high-quality analytics solutions.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Customization
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Tailored services to meet unique business needs.
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Scalability
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Analytics solutions designed to grow with your business.
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Platforms
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          Power BI, Tableau, Qlik
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Frameworks
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">Hadoop, Apache Spark</p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Languages
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]"> Python, R, SQL </p>
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
          <div className="bg-white h-auto md:h-[370px] ld:h-[370px] w-full p-4 flex items-center justify-center text-left md:text-center lg:text-center flex-col">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-center  font-bold leading-tight mb-6 mt-2 lg:mt-0 md:mt-0">
              Unlock the Power of Data
            </h1>
            <p className="text-lg text-center  text-[#595959] mb-6 lg:mx-40 mx-4">
              Turn your data into a strategic asset. Contact us today to explore
              how our Data Analytics services can drive your business forward.
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
              Data Analytics Services
            </h1>

            <p className="text-lg text-[#909090] text-left ">
              Transform your data into actionable insights with our advanced
              Data Analytics solutions. At Zeplinix Technologies, we empower
              businesses to make informed decisions, optimize operations, and
              uncover new opportunities through data-driven strategies.
            </p>

            <p
              onClick={handleToggle}
              className="text-red-500 flex gap-2 items-center font-semibold   justify-center md:justify-start hover:underline cursor-pointer"
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
            </p>
            {isOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md ">
                <div
                  className="rounded-lg shadow-lg p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl relative "
                  style={{
                    background:
                      "linear-gradient(360deg, #303030 0%, rgba(150, 150, 150, 0.16) 100%)",
                  }}
                >
                  {/* Modal Header (Close Button) */}
                  <button
                    onClick={handleToggle}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  >
                    &times;
                  </button>

                  {/* Modal Content */}
                  <div className="">
                    <div className="justify-center">
                      <Image
                        src="/consultation.svg" // Replace with the actual image path
                        alt="Consultation"
                        className="w-20 h-20 mb-4 mx-auto"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h2 className="text-fs-30 font-normal text-white text-center">
                      I Need Consultation on data analytics
                    </h2>
                    <p className="text-[#A0A0A0] text-fs-18 mb-4 text-center">
                      Let us know your preferred way to discuss your data
                      analytics <br className="hidden lg:block md:block" />
                      service needs.
                    </p>
                    <div className="text-left text-white">
                      <p>How should we reach you?</p>
                    </div>
                    <div className="flex gap-4 mt-4 mb-7">
                      <label className="flex items-center space-x-2 text-white">
                        <input
                          type="radio"
                          name="contact"
                          value="email"
                          onChange={() => handleRadioChange("email")}
                        />
                        <span className="text-[#A0A0A0]">Email</span>
                      </label>
                      <label className="flex items-center space-x-2 text-white">
                        <input
                          type="radio"
                          name="contact"
                          value="phone"
                          onChange={() => handleRadioChange("phone")}
                        />
                        <span className="text-[#A0A0A0]">Phone Number</span>
                      </label>
                      <label className="flex items-center space-x-2 text-white">
                        <input
                          type="radio"
                          name="contact"
                          value="both"
                          onChange={() => handleRadioChange("both")}
                        />
                        <span className="text-[#A0A0A0]">
                          Both (Email and Phone)
                        </span>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {/* Input Fields with Icons */}
                      <div className="col-span-1 relative">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent placeholder-white"
                        />
                        {selectedContact === "email" ||
                        selectedContact === "both" ? (
                          emailVerified ? (
                            <p className="text-green-500 mt-2">
                              OTP added successfully
                            </p>
                          ) : showEmailOTP ? (
                            <input
                              type="text"
                              maxLength={6}
                              placeholder="Enter OTP"
                              onChange={(e) => handleOTPChange(e, "email")}
                              className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring bg-transparent placeholder-white"
                            />
                          ) : (
                            <button
                              onClick={handleVerifyEmail}
                              className="text-blue-500 underline mt-2"
                            >
                              Verify
                            </button>
                          )
                        ) : null}
                      </div>
                      {/* Phone Input */}
                      <div className="col-span-1 relative">
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent placeholder-white"
                        />
                      </div>
                      <div className="col-span-1 relative">
                        <input
                          type="date"
                          placeholder="Select Date"
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent  text-white appearance-none"
                          style={{
                            colorScheme: "dark", // Ensures white text and icon on supported browsers
                          }}
                        />
                      </div>
                      <div className="col-span-1 relative">
                        <input
                          type="time"
                          placeholder="Select time"
                          className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring bg-transparent text-white"
                          style={{
                            colorScheme: "dark", // Ensures white text and icon on supported browsers
                          }}
                        />
                      </div>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start mt-4">
                      <input
                        type="checkbox"
                        className="mt-1 mr-2 w-5 h-5"
                        id="consent"
                      />
                      <label htmlFor="consent" className="text-sm text-white">
                        <i>
                          {" "}
                          I consent to be contacted by{" "}
                          <b>Zeplinix Technologies</b> via selected methods and
                          agree to the{" "}
                          <Link href="/privacy-policy" target="blank">
                            Privacy Policy
                          </Link>
                          .
                        </i>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleBookAppointment}
                      className="bg-[#E63946] text-white px-6 py-2 mt-4 rounded-md shadow hover:bg-red-600 transition w-full"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {isConfirmationOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
                <div
                  className="rounded-lg shadow-lg p-8 w-full max-w-lg relative"
                  style={{
                    background:
                      "linear-gradient(360deg, #303030 0%, rgba(150, 150, 150, 0.16) 100%)",
                  }}
                >
                  <button
                    onClick={closeConfirmationPopup}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  >
                    &times;
                  </button>
                  <div className="text-center">
                    <Image
                      src="/thanks.svg" // Update with your image path
                      alt="Thank You"
                      className="w-40 h-40 mb-4 mx-auto"
                      width={50}
                      height={50}
                    />
                    <h2 className="text-white text-xl font-semibold mb-2">
                      Thank You for Reaching Out!
                    </h2>
                    <p className="text-[#A0A0A0] text-sm">
                      We have received your request and will contact you shortly
                      to consult your data analytics service needs. Stay tuned!
                    </p>
                    <button
                      onClick={closeConfirmationPopup}
                      className="bg-[#E63946] text-white px-10 py-2 mt-4 rounded-md shadow hover:bg-red-600 transition"
                    >
                      Okay!
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Side Video */}
          <div className="relative lg:w-1/2 w-full flex justify-center md:justify-end mt-8 lg:mt-0 ">
            <Image
              src={"/service/data-analytics.png"}
              alt={""}
              width={400}
              height={300}
              className="object-cover rounded-t-lg"
            />
            <div
              className="absolute inset-0 z-[1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[900px] lg:h-[400px] left-[-150px] sm:left-[-200px] md:left-[-100px] top-[50px] sm:top-[75px] lg:top-[-80px]"
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

export default ServiceDetails;
