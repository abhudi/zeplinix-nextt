import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Convert IQ",
      image: "/products/convertiq.png",
      description:
        "ConvertIQ empowers businesses to automate lead generation and marketing, improving efficiency and delivering personalized customer experiences. With AI-driven insights, enhance lead conversion rates and maximize customer lifetime value.",
      buttonLabel: "Web application",
      coreTech: "Core Technology",
      linkHref: "/convertiq-detail/",
    },
    {
      id: 2,
      title: "BohoHR",
      image: "/products/hrease.png",
      description:
        "BohoHR is an all-in-one HR management platform designed to simplify and automate your workforce operations. From recruitment and onboarding to performance evaluations, payroll, and employee engagement, BohoHR streamlines every aspect of employee management. ",
      buttonLabel: "AI Tool",
      coreTech: "Core Technology",
      linkHref: "/hr-detail/",
    },
    {
      id: 3,
      title: "Evalflow",
      image: "/products/evalflow.png",
      description:
        "ConvertIQ empowers businesses to automate lead generation and marketing, improving efficiency and delivering personalized customer experiences. With AI-driven insights, enhance lead conversion rates and maximize customer lifetime value.",
      buttonLabel: "CRM Platform",
      coreTech: "Core Technology",
      linkHref: "/evalflow-detail/",
    },
    {
      id: 4,
      title: "StockIQ",
      image: "/products/stockiq.png",
      description:
        "StockIQ is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
      buttonLabel: "Analytics Platform",
      coreTech: "Core Technology",
      linkHref: "/datasense-detail/",
    },
    {
      id: 5,
      title: "Predictease",
      image: "/products/301io.png",
      description:
        "Simplify warranty management with Predictease, a comprehensive platform designed to handle everything from warranty purchases to claims. With an intuitive interface and robust backend, Predictease ensures a seamless experience for customers and businesses alike.",
      buttonLabel: "Marketing Tool",
      coreTech: "Core Technology",
      linkHref: "/predictease-detail/",
    },
    {
      id: 6,
      title: "Invoice Management",
      image: "/products/invoicemanager.png",
      description:
        "Invoice Management is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
      buttonLabel: "Dev Tool",
      coreTech: "Core Technology",
      linkHref: "/invoicemanagement-detail/",
    },
  ];

  // State for the carousel to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the slide every 3 seconds (auto slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [cardData.length]);

  return (
    <div className="carousel-container relative mb-10 overflow-hidden">
      <div
        className="carousel flex transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {/* Map through cardData and display the cards */}
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card w-full sm:w-[572px] h-[532px] p-6 rounded-lg shadow-lg mb-20"
          >
            <div className="mb-4">
              <Link href={card.linkHref} passHref>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={385}
                  height={200}
                  className="object-cover w-full rounded-md"
                />
              </Link>
            </div>
            <Link href={card.linkHref} passHref>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-white text-lg font-bold">{card.title}</h1>
                <button className="px-3 py-1 bg-gray-700 text-white text-sm font-medium rounded-md">
                  {card.buttonLabel}
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">{card.description}</p>
              <div>
                <h2 className="text-white font-semibold">{card.coreTech}</h2>
              </div>
            </Link>
          </div>
        ))}
        {/* Duplicate the cards to create a seamless loop */}
        {cardData.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="card w-full sm:w-[572px] h-[532px] p-6 rounded-lg shadow-lg mb-20"
          >
            <div className="mb-4">
              <Link href={card.linkHref} passHref>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={385}
                  height={200}
                  className="object-cover w-full rounded-md"
                />
              </Link>
            </div>
            <Link href={card.linkHref} passHref>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-white text-lg font-bold">{card.title}</h1>
                <button className="px-3 py-1 bg-gray-700 text-white text-sm font-medium rounded-md">
                  {card.buttonLabel}
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">{card.description}</p>
              <div>
                <h2 className="text-white font-semibold">{card.coreTech}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
