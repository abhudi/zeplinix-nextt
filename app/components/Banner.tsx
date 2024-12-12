"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-auto sm:h-[100%] lg:h-[40rem] xl:h-[48rem] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gray-800 text-white mb-8 lg:px-10">
      {/* Video Background using ::before */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40 before:z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className="absolute w-[100%] inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(230,_57,_70,_0.24)_0%,_rgba(128,_32,_39,_0)_100%)]"
        style={{
          zIndex: "1", // Make sure it’s behind the map
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col w-full sm:w-1/2 mx-auto p-4 text-center lg:text-left">
        <div className="mb-4 lg:mb-10 space-y-6">
          {" "}
          {/* Reduced the margin to decrease space */}
          <button className="px-6 py-3 bg-[#424242A6] text-white font-normal rounded-md shadow-lg transition mb-4 leading-tight">
            {" "}
            {/* Reduced the margin here */}
            Building your Dreams
          </button>
          {/* Main Heading */}
          <h1 className="text-[30px] sm:text-[36px] lg:text-[48px] font-normal sm:leading-20 lg:leading-67 ">
            Zeplinix where <span className="text-red-500">innovation</span>{" "}
            meets digital transformation
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg mt-4 leading-tight text-[#909090]"
            style={{ lineHeight: "32px" }}
          >
            Transform your business with innovative software solutions designed
            to adapt, scale, and thrive.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-center lg:justify-start gap-4">
          <button className="px-4 py-2 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition flex items-center gap-2 sm:px-6 sm:py-3">
            Contact Us
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          </button>

          <button className="px-4 py-2 bg-transparent text-white font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition border border-light-gray flex items-center gap-2 sm:px-6 sm:py-3">
            Explore More
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative z-20 flex flex-col w-full sm:w-1/2 mx-auto p-4 lg:p-6 text-center lg:text-left">
        {" "}
        {/* Adjusted padding here */}
        <div className="relative flex lg:justify-end items-center w-full lg:h-screen">
          <div className="flex gap-5 w-full lg:justify-end justify-center px-4">
            {/* Left Box */}
            <div className="w-1/3 flex justify-center items-center">
              <div className="w-full max-w-[152px] lg:h-[122px] md:h-[122px] h-[135px] sm:h-[135px] bg-glass text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray backdrop-blur-lg flex flex-col justify-between">
                <h2 className="text-sm">Valued projects</h2>
                <p className="font-semibold text-[30px]">60+</p>
              </div>
            </div>

            {/* Right Box (Stacked) */}
            <div className="flex flex-col space-y-4 xl:space-y-12 w-1/3">
              {/* Box 1 */}
              <div className="bg-glass max-w-[152px] h-[135px] sm:h-[135px] text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray backdrop-blur-lg flex flex-col justify-between">
                <h2 className="text-sm">Trusted clients</h2>
                <p className="font-semibold text-[30px]">24+</p>
              </div>

              {/* Box 2 */}
              <div className="bg-glass max-w-[152px] h-[135px] sm:h-[135px] text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray backdrop-blur-lg flex flex-col justify-between">
                <h2 className="text-sm">Team size</h2>
                <p className="font-semibold text-[30px]">45+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
