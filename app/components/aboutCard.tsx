"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

const AboutUsCard: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-10 2xl:mx-24 h-auto lg:h-80   max-w-full bg-white shadow-lg overflow-hidden mb-10 mt-10 lg:mt-24 ">
      {/* Left Section */}
      <div className="w-full lg:w-4/12 bg-secondary p-8 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5 lg:mb-16 pt-5 lg:pt-1">
          About Us<span className="text-primary">.</span>
        </h2>
        <p className="mt-3 sm:mt-5 pb-2 lg:pb-2 text-base sm:text-lg text-[#CDCDCD] text-fs-16">
          Zeplinix deliver innovative, technology-driven solutions to simplify
          operations, boost efficiency, and drive success across industries.
        </p>

        <Link href={"/about"}>
          <button className="text-primary font-semibold rounded-full transition mt-4 flex items-center gap-2">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
              style={{ rotate: "-35deg" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-8/12 h-96 lg:h-auto">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted={isMuted}
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none"
        >
          {isMuted ? (
            <span className="text-xl">🔇</span>
          ) : (
            <span className="text-xl">🔊</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AboutUsCard;
