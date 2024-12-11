"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import RenewalCard from "./card";

interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const cardsData: CardData[] = [
  {
    imageSrc: "/homepage/renewal.png",
    title: "Convert IQ",
    description:
      "ConvertIQ empowers businesses to automate lead generation and marketing, improving efficiency and delivering personalized customer experiences. With AI-driven insights, enhance lead conversion rates and maximize customer lifetime value.",
    linkText: "Explore More",
    linkHref: "/convertiq-detail",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Boho HR",
    description:
      "BohoHR is an all-in-one HR management platform designed to simplify and automate your workforce operations. From recruitment and onboarding to performance evaluations, payroll, and employee engagement, BohoHR streamlines every aspect of employee management.",
    linkText: "Explore More",
    linkHref: "/hr-detail",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Evalflow",
    description:
      "Make informed decisions and foster better client relationships with our Scorecard Management Tool, a powerful solution designed to evaluate and rate clients based on multiple factors. With real-time insights and automated scoring, our tool ensures transparency.",
    linkText: "Explore More",
    linkHref: "/evalflow-detail",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "StockIQ",
    description:
      "StockIQ is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
    linkText: "Explore More",
    linkHref: "/stockiq-detail",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "PredictEase",
    description:
      "Simplify warranty management with Predictease, a comprehensive platform designed to handle everything from warranty purchases to claims. With an intuitive interface and robust backend, Predictease ensures a seamless experience for customers and businesses alike.",
    linkText: "Explore More",
    linkHref: "/predictease-detail",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Invoice Management",
    description:
      "Invoice Management is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
    linkText: "Explore More",
    linkHref: "/invoicemanagement-detail",
  },
];

const CardCarousel = () => {
  return (
    <div className="w-full py-10">
      <h1 className="text-center text-white mt-10 pt-6 text-3xl sm:text-5xl">
        Our Standout Products
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={6000}
        allowTouchMove={true}
        breakpoints={{
          // For mobile devices
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: false, // Disable autoplay for mobile
            allowTouchMove: true, // Enable swipe for mobile
          },
          // For larger screens (tablets and desktops)
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            },
            allowTouchMove: false,
          },
        }}
        className="px-1 md:px-0" // Add padding for mobile, remove for larger screens
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="max-w-xs transform -translate-x-2">
              <RenewalCard
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                linkText={card.linkText}
                linkHref={card.linkHref}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
