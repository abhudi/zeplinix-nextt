import { useState } from "react";
import Image from "next/image";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false); // Closes the modal
  };
  return (
    <>
      <div className=" inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-3xl top-0">
        <div
          className="rounded-lg shadow-lg p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl relative"
          style={{
            background:
              "linear-gradient(360deg, #303030 0%, rgba(150, 150, 150, 0.16) 100%)",
          }}
        >
          {/* Modal Header (Close Button) */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>

          {/* Modal Content */}
          <div className="">
            <div className="justify-center">
              <Image
                src="/consultation.svg" // Replace with the actual image path
                alt="Consultation"
                className="w-20 h-20 mb-4 mx-auto"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-fs-30 font-normal text-white text-center">
              I Need Consultation on Cloud Services
            </h2>
            <p className="text-[#A0A0A0] text-fs-18 mb-4 text-center">
              Let us know your preferred way to discuss your cloud{" "}
              <br className="hidden lg:block md:block" />
              service needs.
            </p>
            <div className="text-left text-white">
              <p>How should we reach you?</p>
            </div>
            <div className="flex gap-4 mt-2 mb-9">
              <label className="flex items-center space-x-2 text-white">
                <input type="radio" name="contact" value="email" />
                <span>Email</span>
              </label>
              <label className="flex items-center space-x-2 text-white">
                <input type="radio" name="contact" value="phone" />
                <span>Phone Number</span>
              </label>
              <label className="flex items-center space-x-2 text-white">
                <input type="radio" name="contact" value="both" />
                <span>Both (Email and Phone)</span>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {/* Input Fields with Icons */}
              <div className="col-span-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent placeholder-white"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#E8EAED]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 10.118l7.997-4.234A2 2 0 0016.92 4H3.08a2 2 0 00-1.077.884z" />
                    <path d="M18 8.118l-8 4.235-8-4.235V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="col-span-1 relative">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent placeholder-white"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-[#E8EAED]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                        stroke="#E8EAED"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className="col-span-1 relative">
                <input
                  type="date"
                  placeholder="Select Date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring bg-transparent  text-white appearance-none"
                  style={{
                    colorScheme: "dark", // Ensures white text and icon on supported browsers
                  }}
                />
              </div>
              <div className="col-span-1 relative">
                <input
                  type="time"
                  placeholder="Select time"
                  className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring bg-transparent text-white"
                  style={{
                    colorScheme: "dark", // Ensures white text and icon on supported browsers
                  }}
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                className="mt-1 mr-2 w-5 h-5"
                id="consent"
              />
              <label htmlFor="consent" className="text-sm text-white">
                <i>
                  {" "}
                  I consent to be contacted by <b>Zeplinix Technologies</b> via
                  selected methods and agree to the Privacy Policy.
                </i>
              </label>
            </div>

            {/* Submit Button */}
            <button className="bg-[#E63946] text-white px-6 py-2 mt-4 rounded-md shadow hover:bg-red-600 transition w-full">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
