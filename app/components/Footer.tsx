// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// const Footer = () => {
//   const aboutUsData = [
//     { text: "Mission & Vision", link: "/about-us" },
//     { text: "Our Team", link: "/team" },
//     { text: "Careers", link: "/careers" },
//     { text: "Press & Media", link: "/press-media" },
//     { text: "Advertising", link: "/advertising" },
//     { text: "Testimonials", link: "/testimonials" },
//   ];

//   const discoverData = [
//     { text: "Our Blog", link: "/blog" },
//     { text: "Plans & Pricing", link: "/pricing" },
//     { text: "Knowledge Base", link: "/knowledge-base" },
//     { text: "Cookie Policy", link: "/cookie-policy" },
//     { text: "Office Center", link: "/office-center" },
//     { text: "News & Events", link: "/news-events" },
//   ];

//   const usefulLinksData = [
//     { text: "FAQ", link: "/faq" },
//     { text: "Editor Help", link: "/editor-help" },
//     { text: "Community", link: "/community" },
//     { text: "Live Chatting", link: "/live-chat" },
//     { text: "Contact Us", link: "/contact-us" },
//     { text: "Support Center", link: "/support-center" },
//   ];

//   const additionalData = [
//     { text: "Request an Offer", link: "/request-offer" },
//     { text: "How It Works", link: "/how-it-works" },
//     { text: "Pricing", link: "/pricing" },
//     { text: "Reviews", link: "/reviews" },
//     { text: "Stories", link: "/stories" },
//   ];

//   return (
//     <div
//       className="footer-structure"
//       style={{
//         background: "linear-gradient(180deg, #E63946 0%, #9F0914 100%)",
//       }}
//     >
//       {/* Upper Section */}
//       <div className="footer-upper-section flex flex-wrap justify-between items-center p-8 sm:p-8 md:p-8 border-b-2 border-white">
//         <div>
//           <Image
//             src="/logo-white.png" // Replace with the path to your logo image
//             alt="Logo"
//             width={200} // Adjust the width as needed
//             height={100} // Adjust the height as needed
//             className="object-contain"
//           />
//         </div>
//         <div className="flex flex-wrap gap-4 items-center text-white">
//           <h6 className="text-lg">Ready To Get Started?</h6>
//           <Link href="/contact">
//             <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
//               Contact us
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Lower Section */}
//       <div className="footer-lower-section px-8 sm:px-12 md:px-16 py-10 text-white">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           <div>
//             <h6 className="font-bold text-lg mb-3">Contact</h6>
//             <ul className="space-y-2">
//               <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
//               <li>(239) 555-0108</li>
//               <li>contact@agon.com</li>
//             </ul>
//           </div>
//           <div>
//             <h6 className="font-bold text-lg mb-3">About Us</h6>
//             <ul className="space-y-2">
//               {aboutUsData.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.link} className="hover:underline">
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h6 className="font-bold text-lg mb-3">Discover</h6>
//             <ul className="space-y-2">
//               {discoverData.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.link} className="hover:underline">
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h6 className="font-bold text-lg mb-3">Support</h6>
//             <ul className="space-y-2">
//               {usefulLinksData.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.link} className="hover:underline">
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h6 className="font-bold text-lg mb-3">Useful Links</h6>
//             <ul className="space-y-2">
//               {additionalData.map((item, index) => (
//                 <li key={index}>
//                   <a href={item.link} className="hover:underline">
//                     {item.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="px-8 sm:px-12 md:px-16 py-6 text-white">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="flex flex-wrap gap-4">
//             <p>© Zeplinix Technologies Pvt Ltd</p>
//             <a href="#" className="hover:underline">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:underline">
//               Cookies
//             </a>
//             <a href="#" className="hover:underline">
//               Terms of Service
//             </a>
//           </div>
//           <div className="flex gap-4 mt-4 md:mt-0 lg:mt-0">
//             <FaFacebook size={20} />
//             <FaInstagram size={20} />
//             <FaTwitter size={20} />
//             <FaLinkedin size={20} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const aboutUsData = [
    { text: "Cloud Services", link: "/cloud" },
    { text: "Data Analytics", link: "/data" },
    { text: "Software Development", link: "/software" },
    { text: "Graphic Designing", link: "/graphic" },
  ];

  const discoverData = [
    // { text: "ConverIQ", link: "/convertiq-detail" },
    { text: "BohoHR", link: "/hr-detail" },
    // { text: "EvalFlow", link: "/evalflow-detail" },
    // { text: "StockIQ", link: "/stockiq-detail" },
    // { text: "Predictease", link: "/predictease-detail" },
    { text: "Invoice Management", link: "/invoicemanagement-detail" },
  ];

  const usefulLinksData = [
    // { text: "FAQ", link: "/faq" },
    // { text: "Community", link: "/community" },
    // { text: "Live Chatting", link: "/live-chat" },
    { text: "FAQ", link: "/faq" },
    { text: "Contact us", link: "/contact" },
    // { text: "", link: "#" },
    // { text: "Support Center", link: "/support-center" },
  ];

  return (
    <div
      className="footer-structure"
      style={{
        background: "linear-gradient(180deg, #E63946 0%, #9F0914 100%)",
      }}
    >
      {/* Upper Section */}
      <div className="footer-upper-section flex flex-wrap justify-between items-center p-8 sm:p-8 md:p-8 border-b-2 border-white">
        <div>
          <Link href="/">
            <Image
              src="/logo-white.png" // Replace with the path to your logo image
              alt="Logo"
              width={200} // Adjust the width as needed
              height={100} // Adjust the height as needed
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex lg:flex-wrap md:flex-wrap flex-row  gap-4 items-center text-white">
          <h6 className="text-lg">Ready To Get Started?</h6>
          <Link href="/contact">
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      {/* Lower Section */}
      <div className="footer-lower-section px-8 sm:px-12 md:px-16 py-10 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          <div>
            <h6 className="font-bold text-lg mb-3">Contact</h6>
            <ul className="space-y-2">
              <div>
                <li>
                  310, Tower 1, World Trade Center, Kharadi, Pune - 411014
                </li>
              </div>
              <div>
                <li>+91 9021348235</li>
                <li>+91 9270085057</li>
              </div>
              <div>
                <a href="mailto:info@zeplinix.com">
                  <li>info@zeplinix.com</li>
                </a>
                {/* <li>hr@zeplinix.com</li>
                <li>sales@zeplinix.com</li> */}
              </div>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-3">Services</h6>
            <ul className="space-y-2">
              {aboutUsData.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-3">Portfolio</h6>
            <ul className="space-y-2">
              {discoverData.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-lg mb-3">Support</h6>
            <ul className="space-y-2">
              {usefulLinksData.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-8 sm:px-12 md:px-16 py-6 text-white">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap gap-4">
            <p>© Zeplinix Technologies Pvt Ltd</p>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            {/* <a href="#" className="hover:underline">
              Cookies
            </a> */}
            <Link href="/terms-service" className="hover:underline">
              Terms of Service
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 lg:mt-0">
            <Link
              href="https://www.facebook.com/people/ZeplinixDigital/61569439216331/"
              target="blank"
            >
              <FaFacebook size={20} style={{ cursor: "pointer" }} />
            </Link>
            <Link
              href="https://www.instagram.com/zeplinix.digital/"
              target="blank"
            >
              <FaInstagram size={20} style={{ cursor: "pointer" }} />
            </Link>
            <Link href="https://x.com/zeplinixworld?s=21" target="blank">
              <FaTwitter size={20} style={{ cursor: "pointer" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/zeplinix-technologies-private-limited/"
              target="blank"
            >
              <FaLinkedin size={20} style={{ cursor: "pointer" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
