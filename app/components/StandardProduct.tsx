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
    imageSrc: "/homepage/products/convertiq.png",
    title: "Convert IQ",
    description:
      "ConvertIQ empowers businesses to automate lead generation and marketing, improving efficiency and delivering personalized customer experiences. With AI-driven insights, enhance lead conversion rates and maximize customer lifetime value.",
    linkText: "Explore More",
    linkHref: "/convertiq-detail",
  },
  {
    imageSrc: "/homepage/products/bohohr.png",
    title: "Boho HR",
    description:
      "BohoHR is an all-in-one HR management platform designed to simplify and automate your workforce operations. From recruitment and onboarding to performance evaluations, payroll, and employee engagement, BohoHR streamlines every aspect of employee management.",
    linkText: "Explore More",
    linkHref: "/hr-detail",
  },
  {
    imageSrc: "/homepage/products/evalflow.png",
    title: "Evalflow",
    description:
      "Make informed decisions and foster better client relationships with our Scorecard Management Tool, a powerful solution designed to evaluate and rate clients based on multiple factors. With real-time insights and automated scoring, our tool ensures transparency.",
    linkText: "Explore More",
    linkHref: "/evalflow-detail",
  },
  {
    imageSrc: "/homepage/products/stockiq.png",
    title: "StockIQ",
    description:
      "StockIQ is the next-generation ERP solution designed to simplify and optimize inventory management, enabling businesses to maintain a streamlined and efficient supply chain with advanced AI/ML technology.",
    linkText: "Explore More",
    linkHref: "/stockiq-detail",
  },
  {
    imageSrc: "/homepage/products/protectease.png",
    title: "PredictEase",
    description:
      "Simplify warranty management with Predictease, a comprehensive platform designed to handle everything from warranty purchases to claims. With an intuitive interface and robust backend, Predictease ensures a seamless experience for customers and businesses alike.",
    linkText: "Explore More",
    linkHref: "/predictease-detail",
  },
  {
    imageSrc: "/homepage/products/invoice.png",
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
      <div className="w-full px-10 md:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 120,
              autoplay: {
                delay: 3000, // Adjust the delay in milliseconds for auto-scroll
                disableOnInteraction: false, // Continue autoplay even after user interaction
              },
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
              autoplay: {
                delay: 3000, // Adjust the delay in milliseconds for auto-scroll
                disableOnInteraction: false,
              },
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
              allowTouchMove: true,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 180,
              allowTouchMove: true,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 180,
              allowTouchMove: true,
            },
            2000: {
              slidesPerView: 5,
              spaceBetween: 60, // Large spacing for ultra-wide screens
            },
          }}
          className="w-full max-w-[1200px] md:max-w-[1600px] lg:max-w-[2000px] px-4"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center gap-14">
              <div className="w-full max-w-sm gap-14">
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
    </div>
  );
};

export default CardCarousel;
