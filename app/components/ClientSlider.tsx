"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module

// Define the type for the logo object
interface Logo {
  src: string;
  alt: string;
}

const ClientSlider: React.FC = () => {
  const logosData: Logo[] = [
    {
      src: "/clients/billefy.svg",
      alt: "Logo 1",
    },
    {
      src: "/clients/dinezy.svg",
      alt: "Logo 2",
    },
    {
      src: "/clients/sportify.svg",
      alt: "Logo 3",
    },
    // {
    //   src: "/clients/reckitt.png",
    //   alt: "Logo 4",
    // },
    {
      src: "/clients/digitalzone.png",
      alt: "Logo 4",
    },
  ];

  // Replicate the logo array to simulate infinite scrolling
  const logos = [...logosData, ...logosData]; // Concatenate the logos array

  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay]} // Add the Autoplay module
        loop={true} // Enables infinite loop sliding
        spaceBetween={20} // Space between slides
        slidesPerView="auto" // Automatically adjusts number of slides visible
        autoplay={{
          delay: 1000, // Set delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay running after manual swipes
        }}
        speed={1500} // Smooth and slower transition speed
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            allowTouchMove: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            allowTouchMove: true,
          },
        }}
        className="px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="slide flex justify-center items-center"
          >
            <div className="w-[120px] h-[100px] flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130} // Adjust width
                height={100} // Fixed height for logos
                objectFit="contain" // Ensures logos retain aspect ratio
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSlider;
