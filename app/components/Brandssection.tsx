import React from "react";
import AboutUsCard from "./aboutCard";
import ClientSlider from "./ClientSlider";
// import AutoRotatingSlider from "./client-slider";

const Brandssection = () => {
  return (
    <div className="relative lg:px-10">
      <div
        className="absolute inset-0 z-[-1] w-[300px] h-[150px] sm:w-[600px] sm:h-[200px] md:w-[900px] lg:w-[1200px] lg:h-[250px] left-[-150px] sm:left-[-200px] md:left-[50px] top-[50px] sm:top-[75px] lg:top-[-170px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.34) 0%, rgba(128, 32, 39, 0) 100%)",
        }}
      ></div>
      <div className="pt-12">
        <ClientSlider />
      </div>
      <div>{/* <AutoRotatingSlider /> */}</div>
      <div className="about-card">
        <AboutUsCard />
      </div>
    </div>
  );
};

export default Brandssection;
