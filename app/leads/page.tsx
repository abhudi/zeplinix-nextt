"use client";
import { useState } from "react";
import { CgAttachment } from "react-icons/cg"; // Import the CgAttachment icon

export default function ProjectRequirementForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);

  const handleInterestClick = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleBudgetClick = (budget: string) => {
    setSelectedBudgets((prev) =>
      prev.includes(budget)
        ? prev.filter((item) => item !== budget)
        : [...prev, budget]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(file);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-black text-white px-4 md:px-10 py-10 lg:mb-20 mb-10 mt-5">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal  mb-14 leading-tight z-10 ">
        Hey! 👋 Tell us about Project Requirement...
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        <div
          className="absolute w-full h-full top-0 lg:left-[-250px] left-0 opacity-80 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.3) 0%, rgba(128, 32, 39, 0) 100%)",
          }}
        ></div>

        {/* Left Section */}
        <div className="relative p-6 sm:p-10 bg-glass border-[0.4px] border-white rounded-lg shadow-lg space-y-6 z-10">
          <p className="text-lg md:text-xl">Im Interested in...</p>
          <div className="flex flex-wrap gap-4">
            {[
              "Web Development",
              "Product Design",
              "Website",
              "Mobile Application",
              "Graphic Design",
              "UI/UX Design",
              "Branding",
              "Motion Graphic",
              "Product From Scratch",
            ].map((interest) => (
              <button
                key={interest}
                onClick={() => handleInterestClick(interest)}
                className={`px-4 py-2 rounded-full transition-all border text-sm md:text-base ${
                  selectedInterests.includes(interest)
                    ? "bg-[#E63946] border-[#E63946] text-white"
                    : "bg-transparent border-white text-white hover:bg-red-600 hover:border-red-600"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          <p className="font-normal text-lg md:text-xl mt-6">
            Project budget (INR)
          </p>
          <div className="flex flex-wrap gap-3">
            {["10-20k", "30-40k", "40-50k", "40-100k", "100k+"].map(
              (budget) => (
                <button
                  key={budget}
                  onClick={() => handleBudgetClick(budget)}
                  className={`px-4 py-2 rounded-full transition-all border text-sm md:text-base ${
                    selectedBudgets.includes(budget)
                      ? "bg-[#E63946] border-[#E63946] text-white"
                      : "bg-transparent border-white text-white hover:bg-red-500 hover:border-red-500"
                  }`}
                >
                  {budget}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-10 rounded-lg shadow-lg z-10">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-b border-gray-800 focus:border-white transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-b border-gray-800 focus:border-white transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-b border-gray-800 focus:border-white transition-colors"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Tell us about the project"
                className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0 border-b border-gray-800 focus:border-white transition-colors"
              />
            </div>

            <div className="flex items-center py-3 px-4 gap-2 border-b border-gray-800 focus-within:border-white transition-colors">
              <CgAttachment className="text-gray-500" size={20} />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e)}
                />
                <span className="text-gray-500">Add Attachment</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
