"use client";
import React from "react";
import Image from "next/image";
const ClientSlider = () => {
  const imageData = [
    { imageSrc: "/images/image1.jpg", alt: "Image 1" },
    { imageSrc: "/images/image2.jpg", alt: "Image 2" },
    { imageSrc: "/images/image3.jpg", alt: "Image 3" },
    { imageSrc: "/images/image4.jpg", alt: "Image 4" },
    // Add more images as needed
  ];

  return (
    <div className="carousel-container overflow-hidden">
      <div className="carousel flex transition-all duration-500 ease-in-out">
        {imageData.map((image, index) => (
          <div key={index} className="carousel-background w-full flex-shrink-0">
            <Image
              src={image.imageSrc}
              alt={image.alt}
              width={800}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
        {/* Duplicate images for seamless loop */}
        {imageData.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            className="carousel-background w-full flex-shrink-0"
          >
            <Image
              src={image.imageSrc}
              alt={image.alt}
              width={800}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
