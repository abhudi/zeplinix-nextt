import React from "react";
import AboutUsCard from "./aboutCard";
import ClientSlider from "./ClientSlider";
// import AutoRotatingSlider from "./client-slider";

const Brandssection = () => {
  return (
    <div className="image-container lg:px-10">
      <div>
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
