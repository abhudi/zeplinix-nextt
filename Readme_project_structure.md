/my-software-website
├── /app
│ ├── /components # Reusable components
│ │ ├── Header.tsx # Example: Header component
│ │ ├── Footer.tsx # Example: Footer component
│ │ └── Button.tsx # Example: Button component
│ ├── /about
│ │ └── page.tsx
│ ├── /blog
│ │ ├── /[slug]
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── /contact
│ │ └── page.tsx
│ ├── /service
│ │ └── page.tsx
│ ├── /layout.tsx
│ ├── /page.tsx
│ └── /global.css
├── /public
│ └── /images
├── .gitignore
├── next.config.js
├── package.json
└── README.md

product bk

import React from "react";
import RenewalCard from "./card";

const StandardProduct = () => {
const cardsData = [
{
imageSrc: "/homepage/renewal.png",
title: "Convert IQ",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Explore More",
linkHref: "#",
},
{
imageSrc: "/homepage/renewal.png",
title: "Analytics Tool",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Learn More",
linkHref: "#",
},
{
imageSrc: "/homepage/renewal.png",
title: "Project Management",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Get Started",
linkHref: "#",
},
{
imageSrc: "/homepage/renewal.png",
title: "Convert IQ",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Explore More",
linkHref: "#",
},
{
imageSrc: "/homepage/renewal.png",
title: "Analytics Tool",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Learn More",
linkHref: "#",
},
{
imageSrc: "/homepage/renewal.png",
title: "Project Management",
description:
"The Convert IQ is a software solution designed to automate the generation of warranty renewal notifications and processes. It streamlines the management of warranty expirations, helping businesses track and communicate.",
linkText: "Get Started",
linkHref: "#",
},
];

  <!-- return ( -->

    <!-- <div className="relative image-container">
      <div
        className="absolute inset-0 z-[-1] w-[300px] h-[150px] sm:w-[600px] sm:h-[200px] md:w-[900px] lg:w-[1200px] lg:h-[250px] left-[-150px] sm:left-[-200px] md:left-[50px] top-[50px] sm:top-[75px] lg:top-[-100px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.34) 0%, rgba(128, 32, 39, 0) 100%)",
        }}
      ></div>
      <h1 className="text-center text-white mt-10 pt-6 text-4xl">
        Our Standout Products
      </h1>
      <div className="carousel-container">
        <div className="carousel">
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
          {/* Duplicate the cards to create a seamless loop */}
          {cardsData.map((card, index) => (
            <RenewalCard
              key={`duplicate-${index}`}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              linkText={card.linkText}
              linkHref={card.linkHref}
            />
          ))}
        </div>
      </div>
    </div>

  <!-- ); -->

}; -->

export default StandardProduct;
