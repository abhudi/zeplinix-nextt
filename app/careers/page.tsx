"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ExploreSection from "../components/whatgoeson";
const features = [
  {
    title: "Company Values",
    description: (
      <>
        Trust, learning, honesty, and co-operation are the pillars that sit at
        the core of what we do.
      </>
    ),
  },
  {
    title: "Friendly atmosphere",
    description: (
      <>
        We hold a positive attitude in order to foster respect and decency for
        our entire team.
      </>
    ),
  },
  {
    title: "Work-life balance",
    description: (
      <>
        For us, a healthy personal life is just as important as the time you
        spend in the office.
      </>
    ),
  },
  {
    title: "Everyday grow",
    description: (
      <>
        We provide the necessary support to ensure your skills never stop
        growing.
      </>
    ),
  },
];

const gratePlace = () => {
  return (
    <div className="mx-4 lg:mx-9 lg:mt-20 ">
      <div className="">
        <h1 className="text-white text-fs-44 text-left ">
          A Foundation Of <span className="text-primary">Integrity</span>
        </h1>
      </div>
      <div className=" mt-10 ">
        <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 p-5 bg-[#343434]">
          {features.map((feature, index) => (
            <div key={index} className="  bg-[#343434]">
              <Image
                src="/careers/leaf.png"
                alt={""}
                width={50}
                height={50}
                className="object-cover rounded-t-lg mb-5"
              />
              <h1 className="text-white text-fs-22">{feature.title}</h1>
              <p className="text-[#909090]  text-fs-18">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Careers: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-auto sm:h-[100%] lg:h-[20rem] xl:h-[28rem] flex flex-col items-center justify-center overflow-hidden bg-[#000000] text-white mb-8 lg:px-10 text-center">
        <div
          className="absolute w-[100%] inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(230,_57,_70,_0.24)_0%,_rgba(128,_32,_39,_0)_100%)]"
          style={{
            zIndex: "1", // Make sure it’s behind the map
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col w-full  p-4 text-center lg:text-left">
          <div className="mb-4 lg:mb-10 space-y-6 text-center">
            {/* Reduced the margin to decrease space */}
            <button className="px-6 py-3 bg-[#424242A6] text-white font-normal rounded-md shadow-lg transition mb-4 leading-tight">
              {/* Reduced the margin here */}
              Join the team
            </button>
            {/* Main Heading */}
            <h1 className="text-[30px] sm:text-[36px] lg:text-[48px] font-normal sm:leading-20 lg:leading-67">
              We are<span className="text-red-500"> hiring </span>
            </h1>
            <p
              className="text-sm sm:text-base lg:text-lg mt-4 leading-tight text-[#909090]"
              style={{ lineHeight: "32px" }}
            >
              <span className="text-red-500"> Zeplinix</span> is an
              employee-centred company that looks after every employee, gives
              autonomy to make choices, supports self-development and career
              growth. Our development team is always in search of talented
              individuals to join our employee-centred culture.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-center lg:justify-center gap-4">
            <Link href="/contact">
              <button className="px-4 py-2 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition flex items-center gap-2 sm:px-6 sm:py-3">
                Open positions
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  width="28"
                  height="21"
                  viewBox="0 0 28 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ rotate: "-35deg" }}
                >
                  <path
                    d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                    fill="#E63946"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {gratePlace()}
      <ExploreSection />
    </div>
  );
};

export default Careers;
