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
      <div className="bg-glass w-full flex flex-col lg:flex-row h-auto lg:h-[280px] border-0.4 border-[#919191]">
        {/* Left Section (Icon and Title) */}
        <div className="w-full lg:w-[25%] bg-[#303030] p-6 lg:p-14 flex items-center flex-col lg:items-start">
          <Image
            src={icon}
            alt="service icon"
            className="w-16 h-16 text-primary"
            width={200}
            height={200}
          />
          <h3 className="text-fs-20 lg:text-fs-30 font-medium text-white text-center lg:text-left mb-2 pt-5 leading-tight">
            {title}
          </h3>
        </div>

        {/* Middle Section (Content) */}
        <div className="w-full lg:w-[43%] p-6 lg:p-10 lg:pl-14">
          <p className="text-[#909090] text-center lg:text-left mb-6 text-fs-16 lg:text-fs-20 leading-tight">
            {content}
          </p>
          <Link href={link}>
            <p className="flex items-center text-left text-red-500 hover:underline font-bold gap-1">
              Learn more
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
