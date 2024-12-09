import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  icon: string; // You can use an icon from a library like FontAwesome or Material Icons
  content: string;
  link: string;
  image: string; // URL to the image for the card
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  content,
  link,
  image,
}) => {
  return (
    <div>
      <div className="bg-glass w-full flex flex-col lg:flex-row h-auto lg:h-[280px]">
        {/* Left Section (Icon and Title) */}
        <div className="w-full lg:w-[25%] bg-[#303030] p-6 lg:p-14 flex items-center flex-col lg:items-start">
          <Image
            src={icon}
            alt="service icon"
            className="w-12 h-12 text-primary"
            width={200}
            height={200}
          />
          <h3 className="text-fs-20 lg:text-fs-30 font-semibold text-white text-center lg:text-left mb-2 pt-5">
            {title}
          </h3>
        </div>

        {/* Middle Section (Content) */}
        <div className="w-full lg:w-[43%] p-6 lg:p-10 lg:pl-14">
          <p className="text-[#909090] text-center lg:text-left mb-4 text-fs-16 lg:text-fs-20 leading-tight">
            {content}
          </p>
          <Link href={link}>
            <p className="text-primary hover:underline text-center lg:text-left">
              Learn More
            </p>
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-[32%] p-6 lg:p-10 flex justify-center lg:justify-end">
          <Image
            src={image}
            alt={title}
            className="mt-2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
