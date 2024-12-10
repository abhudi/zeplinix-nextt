/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";

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

    if (cooldown !== null) {
      return; // Prevent submission during cooldown
    }

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
  };

  useEffect(() => {
    if (cooldown !== null) {
      const timer = setInterval(() => {
        setCooldown((prev) => (prev && prev > 1 ? prev - 1 : null));
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer
    }
  }, [cooldown]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Form Container */}
      <div className="relative z-10 p-8 md:p-12 lg:p-0 rounded-lg shadow-xl flex flex-col md:flex-row max-w-[1200px] w-full mx-4 lg:mt-20 mt-5 lg:mb-20 mb-5 bg-opacity-80">
        {/* Left Side Form */}
        <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
          <h2 className="text-white text-5xl font-bold">
            Get In Touch
            <span className="inline-block bg-red-600 w-3 h-3 rounded-full mx-1"></span>
          </h2>
          <p className="text-gray-300 mt-3 mb-10 mx-1">
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

          <div className="space-y-5 md:space-y-7">
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
              disabled={cooldown !== null}
            >
              {cooldown !== null ? `Please wait ${cooldown} seconds` : "Submit"}
            </button>
          </div>
        </form>

        {/* Right Side Contact Details */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 md:ml-12 text-white space-y-8">
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
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/contact/icons/first.png"
                alt="Address Icon"
                width={45}
                height={45}
              />
              <p>
                <span className="font-bold">Address:</span> 99 St. Jomblo Park
                <span> Pekanbaru, 28292, USA</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/contact/icons/second.png"
                alt="Email Icon"
                width={45}
                height={45}
              />
              <p>
                <span className="font-bold">Email:</span> info@Zeplinix.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/contact/icons/third.png"
                alt="Phone Icon"
                width={45}
                height={45}
              />
              <p>
                <span className="font-bold">Phone:</span> (0761) 654-123987
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
