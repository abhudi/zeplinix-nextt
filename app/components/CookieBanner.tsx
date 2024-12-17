"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the banner was dismissed earlier
    const isDismissed = localStorage.getItem("cookieBannerDismissed");
    if (!isDismissed) {
      setShowBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cookieBannerDismissed", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-glass backdrop-blur-md text-white p-4 rounded-lg shadow-lg w-[98%]  flex flex-col items-center text-center z-50">
      <p className="mb-4">
        This website uses cookies and similar technologies to enhance your
        browsing experience, provide personalized content, analyze website
        traffic, and improve overall functionality to ensure a seamless and
        user-friendly interaction.
      </p>
      <button
        onClick={handleDismiss}
        className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-[#E63946] hover:text-white transition"
      >
        Got it
      </button>
    </div>
  );
};

export default CookieBanner;
