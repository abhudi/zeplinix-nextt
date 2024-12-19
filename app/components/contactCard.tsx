/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const GetInTouchForm: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isAccepted, setIsAccepted] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [cooldown, setCooldown] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numeric input for phone
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else if (name === "message") {
      // Limit message length to 255 characters
      if (value.length <= 255) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccepted(e.target.checked);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting || cooldown !== null) {
      return; // Exit early if it's already submitting or in cooldown
    }

    setIsSubmitting(true); // Lock the button immediately

    const { name, email, subject, phone, message } = formData;

    try {
      const response = await fetch(
        "https://zeplinix.in/zeplinix-api/send-email-api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "6Lf3o4kqAAAAAOBO5t19TZH345346pxtrjaVUWGw7L5otr",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            phone,
            message,
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setResponseMessage(
          "Thank you for contacting us! We'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setResponseMessage("Something went wrong, please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage("An error occurred while sending your message.");
    }

    // Start the cooldown period
    setCooldown(120); // 2 minutes = 120 seconds
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (cooldown !== null) {
      const timer = setInterval(() => {
        setCooldown((prev) => (prev && prev > 1 ? prev - 1 : null)); // Decrease cooldown by 1 second
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer
    }
  }, [cooldown]);

  const contactSections = [
    [
      {
        icon: "/contact/icons/first.png",
        alt: "Address Icon",
        text: "310, Tower 1, World Trade Centre, Kharadi, Pune - 411014",
      },
    ],
    [
      {
        icon: "/contact/icons/second.png",
        alt: "Email Icon",
        text: (
          <a
            href="mailto:sales@zeplinix.com"
            className="flex items-center gap-1  "
          >
            sales@zeplinix.com
          </a>
        ),
      },
      {
        icon: "/contact/icons/second.png",
        alt: "Email Icon",
        text: (
          <a
            href="mailto:hr@zeplinix.com"
            className="flex items-center gap-1  "
          >
            hr@zeplinix.com
          </a>
        ),
      },
    ],
    [
      {
        icon: "/contact/icons/third.png",
        alt: "Phone Icon",
        text: "+91 9270085057",
      },
      {
        icon: "/contact/icons/third.png",
        alt: "Phone Icon",
        text: "+91 9021348235",
      },
    ],
    // Other sections can go here
  ];

  return (
    <>
      <div className="relative items-center justify-center min-h-screen bg-glass border-0.4 border-[#5b5b5b] rounded-lg lg:m-10 m-5 lg:mt-28 overflow-hidden lg:mb-36">
        {/* Form Container */}
        <div className="relative z-10 p-4 sm:p-6 md:p-12 flex flex-col lg:flex-row max-w-[1200px] w-full mx-auto mt-5 lg:mt-20 mb-5 lg:mb-10">
          {/* Left Side Form */}
          <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center lg:text-left">
              Get In Touch
              <span className="inline-block bg-red-600 w-3 h-3 rounded-full mx-1"></span>
            </h2>
            <p className="text-gray-300 mt-3 mb-6 md:mb-10 mx-1 text-center lg:text-left">
              We are here for you! How can we help you?
            </p>
            {responseMessage && (
              <p
                className={`text-center mb-6 ${
                  isSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {responseMessage}
              </p>
            )}
            <div className="space-y-4 sm:space-y-5 md:space-y-7">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full md:w-1/2 p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                  required
                  maxLength={50}
                />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className=" w-full md:w-1/2 p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                  required
                  maxLength={15}
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                required
                maxLength={50}
              />
              <input
                type="subject"
                placeholder="Enter your subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                required
                maxLength={80}
              />

              <textarea
                placeholder="Go ahead, we are listening"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400 h-32"
                required
                maxLength={255}
              ></textarea>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 cursor-pointer" // Use Tailwind classes to set size
                  checked={isAccepted}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="text-md flex text-gray-50 items-center gap-1 cursor-pointer"
                >
                  I accept{" "}
                  <span className="text-gray-400 " onClick={openPopup}>
                    terms and conditions
                  </span>
                </label>

                {isPopupOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative overflow-y-auto max-h-[80vh] slim-scroll">
                      <h2 className="text-lg font-bold mb-4">
                        Terms and Conditions
                      </h2>
                      <div className="text-sm text-gray-700">
                        {/* Introduction */}
                        <section id="introduction" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            Introduction
                          </h2>
                          <p className="text-[#909090]">
                            Welcome to Zeplinix Technologies Private Limited
                            &quot;Zeplinix
                            &quot;,&quot;we&quot;,&quot;our&quot;,or
                            &quot;us&quot;. By accessing or using our website
                            www.zeplinix.com and services, you agree to be bound
                            by these Terms of Service &quot;Terms&quot;. If you
                            do not agree to these Terms, please do not use our
                            website or services.
                          </p>
                        </section>

                        {/* Acceptance of Terms */}
                        <section id="acceptance" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            1. Acceptance of Terms
                          </h2>
                          <p className="text-[#909090]">
                            By accessing or using our website, you confirm that
                            you are at least 18 years of age and have the legal
                            authority to enter into these Terms.
                          </p>
                        </section>

                        {/* Services */}
                        <section id="services" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            2. Services
                          </h2>
                          <p className="text-[#909090]">
                            Zeplinix provides software products, graphic, media,
                            and services across various domains, including but
                            not limited to CRM, warranty management, real
                            estate, and marketing solutions.
                          </p>
                        </section>

                        {/* User Responsibilities */}
                        <section id="user-responsibilities" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            3. User Responsibilities
                          </h2>
                          <ul className="list-disc list-inside text-[#909090]">
                            <li>
                              Use our website and services only for lawful
                              purposes.
                            </li>
                            <li>
                              Provide accurate and complete information when
                              creating an account or interacting with us.
                            </li>
                            <li>
                              Refrain from attempting to disrupt or harm our
                              website or services.
                            </li>
                          </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section id="intellectual-property" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            4. Intellectual Property
                          </h2>
                          <p className="text-[#909090]">
                            All content, designs, trademarks, logos, and
                            software on this website are the property of
                            Zeplinix or its licensors and are protected under
                            applicable intellectual property laws.
                          </p>
                        </section>

                        {/* Privacy Policy */}
                        <section id="privacy-policy" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            5. Privacy Policy
                          </h2>
                          <p className="text-[#909090]">
                            Our Privacy Policy governs the collection, use, and
                            storage of your personal data. By using our
                            services, you agree to the terms outlined in our
                            Privacy Policy.
                          </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section id="limitation-liability" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            6. Limitation of Liability
                          </h2>
                          <p className="text-[#909090]">
                            To the fullest extent permitted by law, Zeplinix
                            shall not be liable for any direct, indirect,
                            incidental, special, or consequential damages
                            resulting from your use of or inability to use our
                            services.
                          </p>
                        </section>

                        {/* Indemnification */}
                        <section id="indemnification" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            7. Indemnification
                          </h2>
                          <p className="text-[#909090]">
                            You agree to indemnify and hold Zeplinix, its
                            officers, employees, and affiliates harmless from
                            any claims, damages, or expenses arising from your
                            use of our services or your violation of these
                            Terms.
                          </p>
                        </section>

                        {/* Termination */}
                        <section id="termination" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            8. Termination
                          </h2>
                          <p className="text-[#909090]">
                            We reserve the right to terminate or suspend your
                            access to our services without prior notice for
                            violations of these Terms or any applicable law.
                          </p>
                        </section>

                        {/* Governing Law */}
                        <section id="governing-law" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            9. Governing Law
                          </h2>
                          <p className="text-[#909090]">
                            These Terms are governed by the laws of India. Any
                            disputes arising from these Terms shall be resolved
                            exclusively in the courts of Pune/Maharashtra,
                            India.
                          </p>
                        </section>

                        {/* Payment Terms */}
                        <section id="payment-terms" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            10. Payment Terms
                          </h2>
                          <ul className="list-disc list-inside text-[#909090]">
                            <li>
                              Fees and Charges: You agree to pay all applicable
                              fees and charges as outlined in the relevant
                              service agreement or invoice.
                            </li>
                            <li>
                              Late Payments: If payments are not received by the
                              due date, we may charge interest on the overdue
                              amount.
                            </li>
                          </ul>
                        </section>

                        {/* Refund Policy */}
                        <section id="refund-policy" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            11. Refund Policy
                          </h2>
                          <p className="text-[#909090]">
                            Refunds, if any, will be issued in accordance with
                            the terms outlined in the relevant service
                            agreement. In general, no refunds will be issued for
                            services that have already been rendered.
                          </p>
                        </section>

                        {/* Changes to Terms */}
                        <section id="changes-terms" className="mt-2">
                          <h2 className="text-md font-bold text-gray-700">
                            12. Changes to Terms
                          </h2>
                          <p className="text-[#909090]">
                            We may update these Terms from time to time. Any
                            changes will be posted on this page with the revised
                            date. Continued use of our services after such
                            changes constitutes acceptance of the updated Terms.
                          </p>
                        </section>

                        {/* Contact Us */}
                        <section className="mt-2">
                          <h2 className="text-md font-bold text-gray-700 underline">
                            Contact Us
                          </h2>
                          <p className="text-gray-700">
                            If you have any questions or concerns regarding
                            these Terms, please contact us at:
                          </p>
                          <p className="text-gray-700">
                            Email:{" "}
                            <Link href="mailto:support@zeplinix.com">
                              support@zeplinix.com
                            </Link>
                          </p>
                        </section>
                      </div>
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={closePopup}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button
                className="bg-red-600 text-white p-3 rounded shadow-lg w-full hover:bg-red-700"
                type="submit"
                disabled={isSubmitting || cooldown !== null}
              >
                {cooldown !== null
                  ? `Please wait ${cooldown} seconds`
                  : isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </button>
            </div>
          </form>

          {/* Right Side Contact Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-white flex items-center">
            <div className="relative w-full">
              <Image
                src="/contact/map.svg"
                alt="map"
                layout="responsive"
                width={800}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="p-6 md:px-12 lg:pb-16">
          <h1 className="text-fs-26 flex gap-2 items-center text-white mb-6 text-center lg:text-left">
            <IoLocationOutline />
            Our office location
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactSections.map((section, index) => (
              <div
                key={index}
                className="space-y-6 bg-[#303030] rounded-lg p-4"
              >
                {section.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={45}
                      height={45}
                    />
                    <p className="text-[#9F9F9F]">{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchForm;
