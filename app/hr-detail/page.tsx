/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
// import "./css/standardproduct.css";

const ProductsDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedContact, setSelectedContact] = useState<
    "email" | "phone" | "both" | ""
  >("");
  const [showEmailOTP, setShowEmailOTP] = useState<boolean>(false);
  // const [showPhoneOTP, setShowPhoneOTP] = useState<boolean>(false);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  // const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
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
  const ServiceData = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    // Define the tab titles
    const tabs = [
      "Core features",
      "AI/ML features in BohoHR",
      "Benefits of BohoHR",
      "Industries we cater to",
      // "Integrated Modules",
    ];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Smart recruitment & talent acquisition
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>AI-driven candidate screening and shortlisting.</li>
          <li>Automated job postings and candidate communication.</li>
          <li>
            Predictive hiring analytics to identify the best-fit candidates.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Employee lifecycle management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Track and manage the entire employee journey, from onboarding
            tooffboarding.
          </li>
          <li>
            Centralized employee records and streamlined document management.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. AI-Enabled workforce insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Real-time analytics to monitor employee performance, engagement, and
            retention.
          </li>
          <li>Predictive modeling to forecast workforce trends and needs.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Automated payroll & compliance
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Hassle-free payroll processing with integrated tax compliance.
          </li>
          <li>Employee benefits administration and error-free calculations.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Customizable performance management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>AI-powered performance reviews and goal tracking.</li>
          <li>Tailored feedback mechanisms and 360-degree evaluation.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Time & attendance tracking
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Advanced scheduling and time tracking integrated with biometric
            systems.
          </li>
          <li>
            AI-enabled attendance pattern analysis to enhance workforce
            efficiency.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          7. Employee engagement tools
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Interactive employee portals for communication and collaboration.
          </li>
          <li>
            Gamified recognition programs and surveys to boost engagement.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          8. Leave & expense management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Simplified leave applications with automated approval workflows.
          </li>
          <li>Integrated expense reporting and reimbursement systems.</li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Recruitment is very smart
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR uses AI-powered algorithms to streamline recruitment by
            analyzing resumes, skills, and experiences, matching the best
            candidates to your job requirements quickly and efficiently.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Predictive analytics
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Our platform leverages machine learning to predict employee
            performance, retention, and potential, allowing HR teams to make
            data-driven decisions for optimal workforce management.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Employee engagement insights
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR uses AI to analyze employee feedback and engagement levels,
            providing insights on how to improve workplace culture and
            satisfaction.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Automated HR tasks
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            AI-driven automation helps HR teams save time by automating routine
            tasks like employee onboarding, performance reviews, and leave
            management.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Smart learning and development
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            With AI, Boho HR identifies skills gaps and recommends personalized
            learning paths for employees, helping them develop and grow their
            careers within your organization.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Improved efficiency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR reduces manual processes and administrative burdens, freeing
            up time for HR professionals to focus on strategic initiatives.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Data-Driven decision making
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            By utilizing AI and advanced analytics, Boho HR provides valuable
            insights that help HR teams make informed decisions, improving
            employee satisfaction and retention.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Enhanced employee experience
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR enhances the employee experience through seamless
            onboarding, continuous performance feedback, and personalized
            learning opportunities.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Compliance management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR helps businesses stay compliant with local labor laws and
            regulations by keeping track of employee data, contracts, and
            records in a secure and organized manner.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Scalable solutions
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            As your company grows, Boho HR scales with you, offering
            customizable features that fit the evolving needs of your workforce.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        {" "}
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Technology
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR helps tech companies manage talent, foster innovation, and
            retain skilled professionals in a competitive market.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Healthcare
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            In the healthcare industry, Boho HR supports efficient recruitment,
            compliance management, and employee engagement, ensuring better care
            for patients and a thriving workforce.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">3. Retail</h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR assists retail businesses in managing a diverse, hourly
            workforce, optimizing scheduling, performance tracking, and employee
            retention strategies.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Education
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            From teachers to administrative staff, Boho HR helps educational
            institutions streamline HR processes, improving staff satisfaction
            and reducing turnover.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Manufacturing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Boho HR supports manufacturing companies in workforce management,
            compliance, and employee training, ensuring a safe and productive
            work environment.
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
              Transform your HR with BohoHR
            </h1>
            <p className="text-lg text-center  text-[#595959] mb-6 lg:mx-40 mx-4">
              Experience the future of HR management with BohoHR’s seamless,
              intelligent, and scalable platform. Let us help you create a
              thriving workplace culture while simplifying your HR processes.
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
                  Boho HR
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

            <h1 className="text-2xl md:text-4xl font-normal text-left">
              <span className="text-primary">BohoHr </span>- redefining HR
              management
            </h1>

            <p className="text-lg text-[#909090] text-left">
              Streamline your HR operations and elevate your workforce
              management with BohoHR, a cutting-edge platform designed to handle
              every aspect of human resources. Built with the latest AI and ML
              technologies, BohoHR delivers intelligent solutions that empower
              businesses to attract, manage, and retain top talent.
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
                      I need consultation on bohohr
                    </h2>
                    <p className="text-[#A0A0A0] text-fs-18 mb-4 text-center">
                      Let us know your preferred way to discuss your boho{" "}
                      <br className="hidden lg:block md:block" />
                      product needs.
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
                      to consult your bohohr tool service needs. Stay tuned!
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
