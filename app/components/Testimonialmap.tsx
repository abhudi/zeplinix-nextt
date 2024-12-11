"use client";
import { useState } from "react";
import Image from "next/image";

interface Popup {
  id: string;
  x: number;
  y: number;
}

export default function TestimonialMap() {
  const popups: Popup[] = [
    { id: "1", x: 10, y: 15 },
    { id: "2", x: 70, y: 15 },
    { id: "3", x: 45, y: 45 },
    { id: "4", x: 16, y: 70 },
    { id: "5", x: 75, y: 70 },
  ];

  const popupContent = [
    {
      name: "John Doe",
      title: "CEO of InnovateX",
      description:
        "The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes.",
    },
    {
      name: "Sara Smith",
      title: "Founder of GreenTech",
      description:
        "The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes.",
    },
    {
      name: "Tom Harris",
      title: "Co-Founder of Healthify",
      description:
        "The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes.",
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
      <div className="flex items-center justify-center bg-black">
        <div className="relative w-[90%] max-w-5xl aspect-video mt-20">
          <Image
            src="/homepage/map.svg"
            alt="World Map"
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />

          {/* Popups for Large and Medium Devices */}
          {popups.map((popup, index) => {
            const { name, title, description } =
              popupContent[index % popupContent.length];

            return (
              <div key={popup.id}>
                {/* Original Popup Design */}
                <div
                  className="absolute flex flex-col items-center justify-center bg-glass text-white p-3 shadow-lg text-xs sm:text-sm border-0.4 border-light-gray hidden sm:flex"
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
                >
                  <p className="text-gray-300">{description}</p>
                  <div className="flex mt-1 items-center gap-3 justify-start">
                    <Image
                      src="/map-client.png"
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-[10px] sm:text-[12px]">{title}</p>
                    </div>
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
                    className="absolute flex w-[200px] h-[160px] flex-col items-center bg-glass text-white p-3 shadow-lg text-xs animate-pop border-0.4 border-light-gray sm:hidden"
                    style={{
                      left: `${popup.x}%`,
                      top: `${popup.y}%`,
                      transform: "translate(-50%, -50%)",
                      backdropFilter: "blur(2px)",
                      WebkitBackdropFilter: "blur(2px)",
                      borderRadius: "10px",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p className="text-gray-300">{description}</p>
                    <div className="flex mt-1 items-center gap-3 justify-start">
                      <Image
                        src="/map-client.png"
                        alt=""
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-[10px] sm:text-[12px]">{title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
