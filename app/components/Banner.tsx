"use client";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-auto sm:h-[100%] lg:h-[37rem] flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gray-800 text-white mb-8 lg:px-10">
      {/* Video Background using ::before */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40 before:z-10">
        <video className="w-full h-full object-cover" autoPlay loop muted>
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
        <div className="mb-4">
          {" "}
          {/* Reduced the margin to decrease space */}
          <button className="px-6 py-3 bg-[#424242A6] text-white font-semibold rounded-md shadow-lg transition mb-4 leading-tight">
            {" "}
            {/* Reduced the margin here */}
            Building your Dreams
          </button>
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Zeplinix where <span className="text-red-500">innovation</span>{" "}
            meets digital transformation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 leading-tight">
            Transform your business with innovative software solutions designed
            to adapt, scale, and thrive.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition">
            Contact Us →
          </button>
          <button className="px-6 py-3 bg-transparent text-white font-semibold rounded-full shadow-lg hover:bg-primary transition border-0.4 border-light-gray">
            Explore More →
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative z-20 flex flex-col w-full sm:w-1/2 mx-auto p-4 lg:p-6 text-center lg:text-left">
        {" "}
        {/* Adjusted padding here */}
        <div className="relative flex lg:justify-end items-center w-full lg:h-screen">
          <div className="flex gap-5 w-full lg:justify-end justify-center  px-4">
            {/* Left Box */}
            <div className="w-1/3 flex justify-center items-center">
              <div className="w-full max-w-[152px] h-[122px] bg-glass text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray">
                <h2 className="text-sm ">Valued projects</h2>
                <p className="font-semibold text-[30px] mt-10">60+</p>
              </div>
            </div>

            {/* Right Box (Stacked) */}
            <div className="flex flex-col space-y-4 w-1/3">
              {/* Box 1 */}
              <div className="bg-glass max-w-[152px] h-[122px] text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray">
                <h2 className="text-sm ">Trusted clients</h2>
                <p className="font-semibold text-[30px] mt-10">24+</p>
              </div>

              {/* Box 2 */}
              <div className="bg-glass max-w-[152px] h-[122px] text-white p-3 rounded-lg shadow-lg border-0.4 border-lighest-gray">
                <h2 className="text-sm ">Team size</h2>
                <p className="font-semibold text-[30px] mt-10">45+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
