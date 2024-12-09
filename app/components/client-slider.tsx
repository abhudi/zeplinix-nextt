"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const logos = [
  "/clients/1st.png",
  "/clients/2nd.png",
  "/clients/1st.png",
  "/clients/2nd.png",
  "/clients/1st.png",
  "/clients/2nd.png",
  "/clients/1st.png",
  "/clients/2nd.png",
];

const AutoRotatingSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 2; // Adjust scroll speed as necessary
        // Reset scroll position to loop back once it reaches the end
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 10); // Adjust the interval time for smooth scrolling
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full mt-5">
      <div
        ref={sliderRef}
        className="flex"
        style={{ whiteSpace: "nowrap", scrollBehavior: "smooth" }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="inline-block px-4 flex items-center justify-center"
            style={{ width: "120px" }} // Control the width of each logo
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoRotatingSlider;
