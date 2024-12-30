import Main from "./main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeplinix Technologies Pvt Ltd",
  description:
    "Zeplinix Technologies Pvt Ltd - Offshore Software Development Company | Application Development, Website Design, Ecommerce Solutions, Mobile Apps (Android & iOS - Flutter), ERP & CRM Applications, IT Consulting, Cloud-Based Solutions, SEO, Network Marketing, and More. Serving clients globally including India, USA, New Zealand, UK, Australia, Europe, and the Middle East. Experts in Custom Software Development, School Software, Industrial ERP, Dental Applications, and more.",

  icons: {
    icon: "/favicon.ico", // Path to the favicon file in the public folder
    // You can also add other sizes or formats if needed
    // icon: "/favicon.png", // Uncomment and use if you prefer a PNG
  },

  keywords: [
    "Zeplinix Technologies",
    "Tech Solutions in kharadi",
    "Software Development in kharadi",
    "Innovative Technology in kharadi",
    "Business Empowerment in kharadi",
    "IT Services in kharadi",
  ],
};

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}
