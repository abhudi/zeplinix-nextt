import React from "react";
import Image from "next/image";

// Define the type for the logo object
interface Logo {
  src: string;
  alt: string;
}

const ClientSlider: React.FC = () => {
  const logosData: Logo[] = [
    {
      src: "/clients/1st.png",
      alt: "Logo 1",
    },
    {
      src: "/clients/1st.png",
      alt: "Logo 2",
    },
    {
      src: "/clients/1st.png",
      alt: "Logo 3",
    },
    {
      src: "/clients/1st.png",
      alt: "Logo 4",
    },
    {
      src: "/clients/1st.png",
      alt: "Logo 5",
    },
    {
      src: "/clients/1st.png",
      alt: "Logo 6",
    },
  ];

  // Replicate the logo array to simulate infinite scrolling
  const logos = [...logosData, ...logosData]; // Concatenate the logos array

  return (
    <div className="slider ">
      <div className="slide-track">
        {logos.map((logo, index) => (
          <div className="slide " key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={50} // Smaller width
              height={50} // Smaller height
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
