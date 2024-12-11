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
    title: "Renewal Tool",
    description:
      "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
    linkText: "Explore More",
    linkHref: "#",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Analytics Tool",
    description:
      "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Project Management",
    description:
      "The Renewal Tool is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
    linkText: "Get Started",
    linkHref: "#",
  },
  {
    imageSrc: "/homepage/renewal.png",
    title: "Customer Support",
    description:
      "The Customer Support tool enhances communication and response times, helping businesses improve customer satisfaction and support processes.",
    linkText: "Contact Us",
    linkHref: "#",
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
