"use client";
import React, { useRef, useState } from "react";

const PortfolioVideo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-10 h-auto lg:h-90 max-w-full bg-white shadow-lg overflow-hidden mb-10 mt-10 lg:mt-20 ">
      {/* Right Section */}
      <div className="relative w-full  h-90 lg:h-auto">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
        >
          <source src="/portfolio.mp4" type="video/mp4" />
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

export default PortfolioVideo;
