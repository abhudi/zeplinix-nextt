import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the import path as needed
import ServiceWorkWithUs from "./ServiceWorkWithUs";

const ServicePage = () => {
  // Service data array
  const services = [
    {
      title: "Application Services",
      icon: "/service/icons/flutter.png",
      content:
        "Covers the full lifecycle of software applications, from development and deployment to ongoing maintenance. Our focus is on ensuring optimal performance, security, and user experience, while continuously adapting to meet your needs.",
      link: "/services/web-development",
      image: "/service/flutter.png",
    },
    {
      title: "Strategy and Consultancy",
      icon: "/service/icons/strategy.png",
      content:
        "Expert insights to drive your business forward. We analyze your current operations, identify growth opportunities, and develop tailored strategies to optimize performance, ",
      link: "/services/ui-ux-design",
      image: "/service/strategy.png",
    },
    {
      title: "Cloud Services",
      icon: "/service/icons/cloud.png",
      content:
        "Cloud solutions, including storage, computing power, and applications. Our cloud services enable businesses to access resources on demand and optimize costs, while ensuring data security and seamless integration with existing systems.",
      link: "/services/mobile-app-development",
      image: "/service/cloud.png",
    },
    {
      title: "Data Analytics",
      icon: "/service/icons/data.png",
      content:
        "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.",
      link: "/services/seo-optimization",
      image: "/service/data.png",
    },
    {
      title: "Software Development",
      icon: "/service/icons/software.png",
      content:
        "You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.",
      link: "/services/seo-optimization",
      image: "/service/software.png",
    },
    {
      title: "Graphic Designing",
      icon: "/service/icons/design.png",
      content:
        "Improve your website's ranking and visibility on search engines.",
      link: "/services/seo-optimization",
      image: "/service/design.png",
    },
    // Add more services as needed
  ];

  return (
    <div className="relative grid gap-6  mt-32 mx-4 lg:mx-9 mb-32">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}

      {/* First Absolute */}
      <div
        className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[75px] lg:top-[-100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(180deg)",
        }}
      ></div>
      {/* Second Absolute */}
      <div
        className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[475px] lg:top-[500px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(150deg)",
        }}
      ></div>
      {/* third Absolute */}
      <div
        className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] right-[0px] top-[50px] md:top-[1000px] lg:top-[1000px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(40deg)", // Apply the rotation inside transform
        }}
      ></div>
      {/* fourth Absolute */}
      <div
        className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[1475px] lg:top-[1500px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(180deg)",
        }}
      ></div>

      <ServiceWorkWithUs />
    </div>
  );
};

export default ServicePage;
