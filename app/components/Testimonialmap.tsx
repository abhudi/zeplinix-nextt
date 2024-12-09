"use client";
import Image from "next/image";

interface Popup {
  id: string;
  x: number;
  y: number;
}

export default function TestimonialMap() {
  const popups: Popup[] = [
    { id: "1", x: 10, y: 15 }, // Define static positions here
    { id: "2", x: 70, y: 15 },
    { id: "3", x: 45, y: 45 },
    { id: "4", x: 16, y: 70 },
    { id: "5", x: 75, y: 70 },
    // Add more positions as needed
  ];

  const popupContent = [
    {
      name: "John Doe",
      title: "CEO of InnovateX",
      description:
        "InnovateX is revolutionizing tech solutions for businesses.",
    },
    {
      name: "Sara Smith",
      title: "Founder of GreenTech",
      description: "GreenTech leads the way in sustainable energy solutions.",
    },
    {
      name: "Tom Harris",
      title: "Co-Founder of Healthify",
      description: "Healthify empowers people to take control of their health.",
    },
    // Add more content as needed
  ];

  return (
    <>
      <div className="text-center">
        <h1 className="text-fs-54">Over 1000+ people trust us</h1>
        <p className="text-fs-16 mt-1">
          Clarity gives you the blocks & components you need to create a truly
          professional <br className="sm:hidden lg:block" /> website, landing
          page, or admin panel for your SaaS.
        </p>
      </div>
      <div className="flex items-center justify-center bg-black">
        {/* Map Container */}
        <div className="relative w-[90%] max-w-5xl aspect-video mt-20">
          {/* Map Image */}
          <Image
            src="/homepage/map.svg"
            alt="World Map"
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />
          <div
            className="absolute w-[100%] inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(230,_57,_70,_0.24)_0%,_rgba(128,_32,_39,_0)_100%)]"
            style={{
              zIndex: "1", // Make sure it’s behind the map
            }}
          ></div>
          {/* Static Popups */}
          {popups.map((popup, index) => {
            const { name, title, description } =
              popupContent[index % popupContent.length]; // Cycle through the content array

            return (
              <div
                key={popup.id}
                className="absolute flex w-[200px] sm:w-[225px] h-[130px] sm:h-[149px] flex-col items-center bg-glass text-white p-3 shadow-lg text-xs sm:text-sm animate-pop border-0.4 border-light-gray"
                style={{
                  left: `${popup.x}%`,
                  top: `${popup.y}%`,
                  transform: "translate(-50%, -50%)",
                  backdropFilter: "blur(2px)", // Apply background blur
                  WebkitBackdropFilter: "blur(2px)", // Support for Safari
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <p className="font-semibold">{name}</p>
                <p className="text-[10px] sm:text-[12px]">{title}</p>
                <p className="mt-1 text-gray-300">{description}</p>

                {/* Add small circle at the lower-right corner */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "14px", // Adjust size for smaller devices
                    height: "14px", // Adjust size for smaller devices
                    bottom: "0", // Align with the bottom of the popup
                    right: "0", // Align with the right of the popup
                    background: "#E63946",
                    border: "2px solid #FBCACE",
                    zIndex: "-1", // Place it behind the popup
                    transform: "translate(50%, 50%)", // Move half outside the popup
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
