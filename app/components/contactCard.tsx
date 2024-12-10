/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const GetInTouchForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [cooldown, setCooldown] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting || cooldown !== null) {
      return; // Exit early if it's already submitting or in cooldown
    }

    setIsSubmitting(true); // Lock the button immediately

    const { name, email, phone, message } = formData;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setResponseMessage(
          "Thank you for contacting us! We'll get back to you soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
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
      {
        icon: "/contact/icons/second.png",
        alt: "Email Icon",
        text: "info@Zeplinix.com",
      },
      {
        icon: "/contact/icons/third.png",
        alt: "Phone Icon",
        text: "(0761) 654-123987",
      },
    ],
    [
      {
        icon: "/contact/icons/first.png",
        alt: "Address Icon",
        text: "99 St. Jomblo Park Pekanbaru, 28292, USA",
      },
      {
        icon: "/contact/icons/second.png",
        alt: "Email Icon",
        text: "info@Zeplinix.com",
      },
      {
        icon: "/contact/icons/third.png",
        alt: "Phone Icon",
        text: "(0761) 654-123987",
      },
    ],
    [
      {
        icon: "/contact/icons/first.png",
        alt: "Address Icon",

        text: "Patwari colony janori road , Shegaon - 444203",
      },
      {
        icon: "/contact/icons/second.png",
        alt: "Email Icon",

        text: "info@Zeplinix.com",
      },
      {
        icon: "/contact/icons/third.png",
        alt: "Phone Icon",

        text: "(0761) 654-123987",
      },
    ],
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
            3
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
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                required
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
                required
              />
              <textarea
                placeholder="Go ahead, we are listening"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400 h-32"
                required
              ></textarea>
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
                src="/contact/map.png"
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
            Our office locations
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
