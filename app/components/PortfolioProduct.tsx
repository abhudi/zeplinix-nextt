"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for card data
type CardData = {
  id: number;
  title: string;
  image: string;
  description: string;
  buttonLabel: string;
  coreTech: string;
  linkHref: string;
};

const PortfolioProduct: React.FC<{ data: CardData[] }> = ({ data }) => {
  // State to manage the selected tab
  const [selectedTab, setSelectedTab] = useState<string>("All");

  // Group cards into pairs (kept as is)
  const cardRows = data.reduce((rows: CardData[][], card, index) => {
    if (index % 2 === 0) rows.push([]);
    rows[rows.length - 1].push(card);
    return rows;
  }, []);

  // Filter cards based on selected tab
  const filteredCards =
    selectedTab === "All"
      ? data
      : data.filter((card) =>
          card.buttonLabel.toLowerCase().includes(selectedTab.toLowerCase())
        );

  return (
    <div className="space-y-10 lg:mx-9 mx-4">
      {/* Tab Navigation */}
      <div className="flex flex-wrap sm:flex-nowrap space-x-4 sm:space-x-6 mb-6">
        {[
          "All",
          "Web application",
          "AI Tool",
          "CRM Platform",
          "Analytics Platform",
          "Marketing Tool",
          "Dev Tool",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full w-full sm:w-auto mb-2 sm:mb-0 ${
              selectedTab === tab ? "bg-[#E63946] text-white" : "text-[#909090]"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display filtered cards */}
      {cardRows.map((pair, rowIndex) => (
        <div key={rowIndex} className="relative">
          {/* Gradient background */}
          <div
            className="absolute inset-0 md:w-[1000px] md:h-[300px] lg:w-[1200px] lg:h-[300px] w-[200px] h-[100px] -top-[-100px] left-[150px] sm:left-[-150px] z-[-1]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.5) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(65deg)",
            }}
          ></div>

          {/* Grid layout for filtered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pair
              .filter((card) => filteredCards.includes(card)) // Ensure only filtered cards are shown
              .map((card, index) => (
                <div
                  key={card.id}
                  className={`card w-full sm:w-[572px] h-auto p-6 rounded-lg shadow-lg lg:mb-20 md:mb-20 bg-glass ${
                    (index + 1) % 2 === 0 ? "mt-5 md:mt-0 lg:mt-0" : ""
                  }`}
                >
                  <div className="mb-4">
                    <Link href={card.linkHref} passHref>
                      <Image
                        src={card.image}
                        alt={`${card.title} Image`}
                        width={385}
                        height={200}
                        className="object-cover w-full rounded-md"
                      />
                    </Link>
                  </div>
                  <Link href={card.linkHref} passHref>
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-white text-lg font-bold">
                        {card.title}
                      </h1>
                      <button className="px-3 py-1 bg-[#2f2c2c] text-white text-sm font-medium rounded-md">
                        {card.buttonLabel}
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 leading-tight">
                      {card.description}
                    </p>
                    <div>
                      <h2 className="text-white font-semibold">
                        {card.coreTech}
                      </h2>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
const cardData: CardData[] = [
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
    title: "HR ease",
    image: "/products/hrease.png",
    description:
      "HRFusion is an all-in-one HR management platform designed to simplify and automate your workforce operations. From recruitment and onboarding to performance evaluations, payroll, and employee engagement, HRFusion streamlines every aspect of employee management. ",
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
    title: "DataSense",
    image: "/products/stockiq.png",
    description:
      "StockIQ is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
    buttonLabel: "Analytics Platform",
    coreTech: "Core Technology",
    linkHref: "/datasense-detail/",
  },
  {
    id: 5,
    title: "301io",
    image: "/products/301io.png",
    description:
      "301io is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
    buttonLabel: "Marketing Tool",
    coreTech: "Core Technology",
    linkHref: "/301io-detail/",
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

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <PortfolioProduct data={cardData} />
    </div>
  );
};

export default App;
