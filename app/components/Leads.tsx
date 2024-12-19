import { useState } from "react";
import Image from "next/image";
export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleToggle}
        className="bg-red-500 text-white px-6 py-2 rounded-md shadow hover:bg-red-600 transition"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-3xl">
          <div
            className=" rounded-lg shadow-lg p-6 w-full max-w-lg md:max-w-xl lg:max-w-2xl relative"
            style={{
              background:
                "linear-gradient(360deg, #303030 0%, rgba(150, 150, 150, 0.16) 100%)",
            }}
          >
            {/* Modal Header (Close Button) */}
            <button
              onClick={handleToggle}
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
                  <input type="radio" name="contact" value="phone" />
                  <span>Email</span>
                </label>
                <label className="flex items-center space-x-2 text-white">
                  <input type="radio" name="contact" value="phone" />
                  <span>Phone Number</span>
                </label>
                <label className="flex items-center space-x-2 text-white">
                  <input type="radio" name="contact" value="phone" />
                  <span>Both (Email and Phone)</span>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Input Fields */}
                <div className="col-span-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="time"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
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
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to be contacted by <b>Company Name</b> via selected
                  methods and agree to the Privacy Policy.
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleToggle}
                className="bg-red-500 text-white px-6 py-2 mt-4 rounded-md shadow hover:bg-red-600 transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
