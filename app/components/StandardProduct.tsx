import React from "react";
import RenewalCard from "./card";

const StandardProduct = () => {
  const cardsData = [
    {
      imageSrc: "/homepage/renewal.png",
      title: "Renewal Tool",
      description:
        "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate ",
      linkText: "Explore More",
      linkHref: "#",
    },
    {
      imageSrc: "/homepage/renewal.png",
      title: "Analytics Tool",
      description:
        "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate ",
      linkText: "Learn More",
      linkHref: "#",
    },
    {
      imageSrc: "/homepage/renewal.png",
      title: "Project Management",
      description:
        "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate ",
      linkText: "Get Started",
      linkHref: "#",
    },
  ];
  return (
    <div className="image-container">
      <h1 className="text-center text-white mt-90 pt-custom-pt text-fs-54 ">
        Our Standout Products
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {cardsData.map((card, index) => (
          <RenewalCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            linkHref={card.linkHref}
          />
        ))}
      </div>
    </div>
  );
};

export default StandardProduct;
