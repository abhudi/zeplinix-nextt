"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeServiceCard: React.FC = () => {
  return (
    <>
      <div className="text-fs-44 text-left mx-11 lg:mx-32">Our services</div>
      <div className="relative w-full mx-auto mt-12 mb-24 h-auto flex flex-col gap-6 items-center">
        {/* Fixed Element */}

        {/* Card 1 */}
        <div className="card one sticky top-[50px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-md bg-opacity-50 border-0.1 border-[#ffffff] ">
          <div className="flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-12 overflow-hidden w-full p-10 ">
            <div className="w-full sm:w-[50%] px-4 sm:px-0">
              <Image
                src={"/service/icons/strategy.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Strategy and Consultancy
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Expert insights to drive your business forward. We analyze your
                current operations, identify growth opportunities, and develop
                tailored strategies to optimize performance.
              </p>
              <Link href="/" className="text-primary text-fs-16">
                Learn more
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/strategy-card.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className="absolute inset-0 z-[-1] w-[200px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[700px] lg:w-[357px] lg:h-[357px] left-[160px] sm:left-[300px] md:left-[720px] top-[-50px] sm:top-[-75px] lg:top-[-150px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.63) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(165deg)",
            }}
          ></div>
        </div>

        {/* Card 2 */}
        <div className="card two sticky top-[80px] ml-[20px] lg:ml-[50px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-md bg-opacity-50 border-0.1 border-[#ffffff]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/strategy.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Strategy and Consultancy
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Expert insights to drive your business forward. We analyze your
                current operations, identify growth opportunities, and develop
                tailored strategies to optimize performance.
              </p>
              <Link href="/" className="text-primary text-fs-16">
                Learn more
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/strategy-card.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card three sticky top-[110px] ml-[40px] lg:ml-[80px]  w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-md bg-opacity-50 border-0.1 border-[#ffffff]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/strategy.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Strategy and Consultancy
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Expert insights to drive your business forward. We analyze your
                current operations, identify growth opportunities, and develop
                tailored strategies to optimize performance.
              </p>
              <Link href="/" className="text-primary text-fs-16">
                Learn more
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/strategy-card.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card four sticky top-[140px] ml-[60px] lg:ml-[110px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-md bg-opacity-50 border-0.1 border-[#ffffff]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/strategy.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Strategy and Consultancy
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Expert insights to drive your business forward. We analyze your
                current operations, identify growth opportunities, and develop
                tailored strategies to optimize performance.
              </p>
              <Link href="/" className="text-primary text-fs-16">
                Learn more
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/strategy-card.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServiceCard;
