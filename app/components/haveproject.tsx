import React from "react";
import Image from "next/image";
import Link from "next/link";
const HaveProject = () => {
  return (
    <div>
      <div className="lg:mt-36 lg:mb-28 mb-10 mt-10">
        <div className="relative mx-4 md:mx-8 lg:mx-12">
          <div className="bg-white h-auto w-full p-10 lg:p-4 md:p-4 flex flex-col lg:flex-row md:flex-row items-center lg:items-center md:items-start justify-center gap-10 lg:gap-20">
            <div className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]">
              <Image
                src="/have-project.png"
                alt="Have Project"
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>

            <div className="text-center lg:text-left md:text-left flex flex-col justify-center lg:justify-center md:justify-start items-center lg:items-start md:items-start">
              <h1 className="text-fs-24 md:text-fs-34 lg:text-fs-54 leading-tight text-[#2D2D2D]">
                Lets grow together
              </h1>
              <Link href="/contact">
                <button className="px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
                  <p className="flex gap-2 items-center">
                    Contact us
                    <svg
                      className="w-4 h-4"
                      width="28"
                      height="21"
                      viewBox="0 0 28 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ rotate: "-35deg" }}
                    >
                      <path
                        d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </p>
                </button>
              </Link>
            </div>
          </div>

          <div
            className="absolute inset-0 z-[-1] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-0 top-[-50px] md:top-[-100px] lg:top-[-150px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(180deg)",
            }}
          ></div>
          <div
            className="absolute inset-0 z-[-1] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-0 top-[50px] md:top-[75px] lg:top-[100px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(180deg)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HaveProject;
