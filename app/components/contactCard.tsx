"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const GetInTouchForm: React.FC = () => {
  // State to manage form input with type
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Call your API to send the email
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert("Thank you for contacting us! We'll get back to you soon.");
        // Clear the form after submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Form Container */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 rounded-lg shadow-xl flex flex-col md:flex-row max-w-5xl w-full mx-4">
        {/* Left Side Form */}
        <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
          <h2 className="text-white text-5xl font-bold">
            Get In Touch
            <span className="inline-block bg-red-600 w-3 h-3 rounded-full mx-1"></span>
          </h2>
          <p className="text-gray-300 mt-3 mb-10 mx-1">
            We are here for you! How can we help you?
          </p>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Go ahead, we are listening"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400 h-32"
            ></textarea>
            <button
              className="bg-red-600 text-white p-3 rounded shadow-lg w-full"
              type="submit"
            >
              Submit
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
                width={60}
                height={60}
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
                width={60}
                height={60}
              />
              <p>
                <span className="font-bold">Email:</span> info@Zeplinix.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/contact/icons/third.png"
                alt="Phone Icon"
                width={60}
                height={60}
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
