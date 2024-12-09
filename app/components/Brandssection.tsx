import React from "react";
import AboutUsCard from "./aboutCard";
// import AutoRotatingSlider from "./client-slider";

const Brandssection = () => {
  return (
    <div className="image-container lg:px-10">
      <h1 className="text-center text-primary fs-20 mt-90 pt-custom-pt">
        Trusted by Worldwide Brands
      </h1>
      <div>{/* <AutoRotatingSlider /> */}</div>
      <div className="about-card">
        <AboutUsCard />
      </div>
    </div>
  );
};

export default Brandssection;
