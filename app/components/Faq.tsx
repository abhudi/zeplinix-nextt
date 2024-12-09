"use client";
import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    // If the clicked FAQ is already active, close it (set to null)
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your company provide?",
      answer:
        "We offer a wide range of services, including custom software development, AI/ML solutions, data analytics, cloud and infrastructure management, ERP solutions, e-commerce development, and industry-specific tools like CRM, school management, hospital management, and more.",
    },
    {
      question: "How do I know which solution is right for my business?",
      answer:
        "Our team will work closely with you to understand your unique needs and challenges. Based on your goals, we provide tailored recommendations to ensure the solution fits perfectly with your business requirements.",
    },
    {
      question: "Can your solutions integrate with my existing systems?",
      answer:
        "Absolutely! Our solutions are designed to integrate seamlessly with your current tools and platforms, ensuring a smooth transition without disrupting your operations.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries, including retail, healthcare, real estate, education, manufacturing, sports, hospitality, and more. Our expertise allows us to deliver industry-specific solutions that address unique challenges.",
    },
    {
      question: "Is customer support available after deployment?",
      answer:
        "Yes, we provide comprehensive post-deployment support, including maintenance, updates, and troubleshooting. Our team is committed to ensuring your solution runs smoothly at all times.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "Simply contact us via our website, email, or phone, and our team will guide you through the process. We’ll schedule a consultation to discuss your needs and develop a plan tailored to your goals.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 mb-10 ">
      <h2 className="text-3xl font-bold text-center mb-2 text-white">
        FAQs – Your Questions Answered
      </h2>
      <p className="text-[#909090] mb-8 text-center ">
        Find quick answers to common queries about our services, solutions, and
        how we can help your business thrive.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer py-3"
              onClick={() => toggleAnswer(index)}
            >
              {/* Question text on the left */}
              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>

              {/* Circle button on the right */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                  activeIndex === index
                    ? " text-primary border-primary"
                    : "border-primary text-primary"
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-[#909090] bg-transparent rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
