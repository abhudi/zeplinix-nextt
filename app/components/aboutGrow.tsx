import React from "react";

const AboutGrow = () => {
  return (
    <div className="lg:mt-28 lg:mb-28 mb-10 mt-10">
      <div className="relative mx-4 md:mx-8 lg:mx-12">
        <div className="bg-white h-[370px] w-full p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-fs-24 md:text-fs-34 lg:text-fs-54 leading-tight">
              Lets grow together
            </h1>
            <button className="px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-7 bg-primary text-white font-semibold rounded-full shadow-lg transition border border-light-gray">
              Join our team →
            </button>
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
  );
};

export default AboutGrow;
