import React from "react";
import Image from "next/image";

const GetInTouchForm = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* First Gradient Background */}
      <div
        className="absolute"
        style={{
          width: "1515px",
          height: "568px",
          top: "-30px",
          left: "131px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.5) 0%, rgba(128, 32, 39, 0) 100%)",
          opacity: 1,
          zIndex: 0,
        }}
      ></div>

      {/* Second Gradient Background */}
      <div
        className="absolute"
        style={{
          width: "938px",
          height: "352px",
          top: "551px",
          left: "-151px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.5) 0%, rgba(128, 32, 39, 0) 100%)",
          opacity: 1,
          zIndex: 0,
        }}
      ></div>

      {/* Form Container */}
      <div
        className="relative z-10 p-8 md:p-12 lg:p-16 rounded-lg shadow-xl flex flex-col md:flex-row max-w-5xl w-full mx-4"
        style={{
          marginTop: "103px",
          marginBottom: "163px",
          background: "#29292961",
          border: "0.4px solid #FFFFFF",
          backdropFilter: "blur(62px)",
        }}
      >
        {/* Left Side Form */}
        <form className="w-full md:w-1/2 ">
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
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Go ahead, we are listening"
              className="w-full p-3 rounded bg-[#303030] text-white placeholder-gray-400 h-32"
            ></textarea>
            <button className="bg-red-600 text-white p-3 rounded shadow-lg w-full">
              Submit
            </button>
          </div>
        </form>

        {/* Right Side Contact Details */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 md:ml-12 text-white space-y-8">
          {/* Map Image */}
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

          {/* Address, Email, Phone */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  src="/contact/icons/first.png"
                  alt="Address Icon"
                  width={60}
                  height={60}
                />
              </div>
              <p>
                <span className="font-bold">Address:</span> 99 St. Jomblo Park
                <span> Pekanbaru, 28292, USA</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  src="/contact/icons/second.png"
                  alt="Email Icon"
                  width={60}
                  height={60}
                />
              </div>
              <p>
                <span className="font-bold">Email:</span> info@Zeplinix.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <Image
                  src="/contact/icons/third.png"
                  alt="Phone Icon"
                  width={60}
                  height={60}
                />
              </div>
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
