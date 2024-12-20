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
    const tabs = ["Core features", "Industries We Cater To", "Why choose us"];

    // Define the content for each tab
    const tabContent = [
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. Integrated point of sale (POS)
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Simplify transactions with fast, user-friendly POS systems. </li>
          <li>
            Manage sales across multiple locations with real-time updates.{" "}
          </li>
          <li>
            Support for online and offline transactions for uninterrupted
            operations.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Advanced inventory management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Track inventory levels, stock movements, and reorder points
            effortlessly.
          </li>
          <li>
            Automate stock replenishment to avoid overstocking or stockouts.
          </li>
          <li>
            Monitor warehouse operations and multi-location inventory with ease.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Order and procurement management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Streamline purchase orders, vendor management, and order tracking.
          </li>
          <li>Optimize procurement processes with automated workflows. </li>
          <li>Maintain complete visibility into supply chain operations. </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Comprehensive financial management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Manage accounts, billing, and financial reporting in one platform.
          </li>
          <li>
            Automate tax calculations and ensure compliance with regulations.
          </li>
          <li>Generate real-time insights into financial performance.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          5. Customizable reporting and analytics
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Access dashboards with actionable insights into sales, inventory,
            and performance.
          </li>
          <li>Generate custom reports for better decision-making. </li>
          <li>
            Predict trends and optimize strategies with AI-driven analytics.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          6. Employee and workforce management
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Track employee shifts, attendance, and payroll.</li>
          <li>
            Enable seamless collaboration with integrated team management tools.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          7. Customer relationship management (CRM)
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Enhance customer engagement with loyalty programs and personalized
            offers.
          </li>
          <li>
            Manage customer data, purchase history, and feedback in one place.
          </li>
          <li>Drive repeat business with targeted promotions.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          8. Cloud-Based and scalable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Access your ERP anytime, anywhere with a secure cloud-based
            platform.
          </li>
          <li>
            Scale effortlessly as your business grows, adding new locations and
            features.
          </li>
        </p>
      </div>,

      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">1. Retail</h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>POS systems integrated with real-time inventory tracking.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Hospitality
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Manage restaurant or hotel operations with advanced POS features.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. Manufacturing
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Streamline production with automated inventory control.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. E-commerce
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Sync online and offline sales with unified inventory and order
            management.
          </li>
        </p>
      </div>,
      <div className="bg-[#303030] text-white p-6">
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          1. All-in-One platform
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Manage operations, sales, inventory, and finances in one system.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          2. Customizable and scalable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Tailored solutions to fit your business needs.</li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          3. AI-Driven efficiency
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>
            Enhance productivity with intelligent insights and automation.
          </li>
        </p>
        <h2 className="text-[18px] font-semibold  text-[#E1E1E1]">
          4. Secure and reliable
        </h2>
        <p className="text-[18px] mb-4 text-[#909090]">
          <li>Built with the latest security protocols for peace of mind.</li>
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
              Empower your business with our ERP solution
            </h1>
            <p className="text-lg text-center  text-[#595959] mb-6 lg:mx-40 mx-4">
              Simplify operations, enhance productivity, and scale effortlessly
              with our ERP solution. Contact us today to learn how we can
              revolutionize your business operations.
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
                  StockIQ
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

            <h1 className="text-2xl md:text-4xl font-normal text-left ">
              <span className="text-primary">StockIQ </span>- inventory
              management (ERP)
            </h1>

            <p className="text-lg text-[#909090] text-left ">
              Streamline your business operations with our robust ERP solution,
              integrated with advanced POS and inventory management features.
              Designed to optimize efficiency and enhance productivity, our
              solution offers a one-stop platform to manage your entire business
              seamlessly.
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
                      I Need Consultation on stockiq
                    </h2>
                    <p className="text-[#A0A0A0] text-fs-18 mb-4 text-center">
                      Let us know your preferred way to discuss your stockiq{" "}
                      product <br className="hidden lg:block md:block" />
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
                      to consult your stockiq tool service needs. Stay tuned!
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
            src="/product-details/stockiq.png"
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
