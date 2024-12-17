"use client";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

interface Popup {
  id: string;
  x: number;
  y: number;
}

export default function TestimonialMap() {
  const popups: Popup[] = [
    { id: "1", x: 10, y: 15 },
    { id: "2", x: 85, y: 10 },
    { id: "3", x: 35, y: 30 },
    { id: "4", x: 16, y: 70 },
    { id: "5", x: 62, y: 50 },
    { id: "6", x: 94, y: 65 },
  ];

  const popupContent = [
    {
      name: "Deepak W.",
      title: "CEO of InnovateX",
      description:
        "The team at Zeplinix is professional, passionate, and easy to work with. They understood our needs and provided valuable guidance to improve our website. We look forward to collaborating again in the future.",
    },
    {
      name: "Urwan O.",
      title: "Founder of GreenTech",
      description:
        "We had worked with this company. They are very professional and hard-working. Owners are very enthusiastic and focused. I wish them best luck for their future.",
    },
    {
      name: "Mayur S.",
      title: "Co-Founder of Healthify",
      description:
        "Good service provider in Pune, the field of cloud based software and mobile app is extra ordinary with lowest cost",
    },
    {
      name: "Ganesh P.",
      title: "Co-Founder of Healthify",
      description:
        "Their approach improved productivity and customer experiences. We’ve been very pleased with the results.",
    },
    {
      name: "Paridhi D.",
      title: "Co-Founder of Healthify",
      description:
        "Reliable and innovative, their solutions perfectly aligned with our goals, leading to great improvements.",
    },
    {
      name: "Amit G.",
      title: "Co-Founder of Healthify",
      description:
        "Their digital solutions were a game-changer. We’ve seen significant improvements in efficiency and results.",
    },
  ];

  const [activePopup, setActivePopup] = useState<string | null>(null);

  const handleOutsideClick = () => {
    setActivePopup(null);
  };

  return (
    <div onClick={handleOutsideClick} className="relative">
      <div className="text-center">
        <h1 className="text-fs-54">Over 1000+ people trust us</h1>
        <p className="text-fs-16 mt-1 text-[#909090]">
          Clarity gives you the blocks & components you need to create a truly
          professional <br className="sm:hidden lg:block" /> website, landing
          page, or admin panel for your SaaS.
        </p>
      </div>

      {/* For Small Devices: Show Testimonials Slider */}
      <div className="sm:block lg:hidden mt-10 px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Allows autoplay to continue after user interaction
          }}
          loop={true}
        >
          {popupContent.map((popup, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#303030] text-white p-5 shadow-lg rounded-lg">
                <p className="text-gray-300">{popup.description}</p>
                <div className="flex mt-2">
                  <p className="font-semibold">- {popup.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* For Larger Devices: Show Map with Popups */}
      <div className="flex items-center justify-center bg-black lg:block hidden">
        <div className="relative w-full max-w-[1200px] aspect-video mt-20 mx-auto">
          <Image
            src="/homepage/map.svg"
            alt="World Map"
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />

          {popups.map((popup, index) => {
            const { name, description } =
              popupContent[index % popupContent.length];

            return (
              <React.Fragment key={popup.id}>
                <div className="hidden md:block lg:block">
                  {/* Popup for Larger Devices */}
                  <div
                    className="absolute flex flex-col items-start justify-center bg-glass text-white p-3 shadow-lg text-xs sm:text-sm border-0.4 border-light-gray"
                    style={{
                      left: `${popup.x}%`,
                      top: `${popup.y}%`,
                      transform: "translate(-50%, -50%)",
                      backdropFilter: "blur(2px)",
                      WebkitBackdropFilter: "blur(2px)",
                      borderRadius: "10px",
                      width: "200px",
                      height: "auto",
                    }}
                  >
                    <p className="text-gray-300">{description}</p>
                    <div className="flex mt-2">
                      <p className="font-semibold">- {name}</p>
                    </div>
                  </div>

                  {/* Red Dots for Small Devices */}
                  <div
                    className="absolute w-4 h-4 bg-[#E63946] rounded-full cursor-pointer sm:hidden"
                    style={{
                      left: `${popup.x}%`,
                      top: `${popup.y}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: "10",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePopup(popup.id);
                    }}
                  ></div>

                  {/* Popup for Small Devices */}
                  {activePopup === popup.id && (
                    <div
                      className="absolute flex flex-col items-start bg-glass text-white p-3 shadow-lg text-xs border-0.4 border-light-gray sm:hidden"
                      style={{
                        left: `${popup.x}%`,
                        top: `${popup.y}%`,
                        transform: "translate(-50%, -50%)",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "blur(2px)",
                        borderRadius: "10px",
                        width: "200px",
                        height: "160px",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="text-gray-300">{description}</p>
                      <div className="flex mt-2">
                        <p className="font-semibold">- {name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
