"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Aboutheader = () => {
  const pathname = usePathname(); // Get the current pathname using usePathname hook

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
  }, []);

  // Define dynamic text content based on the current route
  let mainText = "";
  let subText = "";

  if (pathname === "/about") {
    mainText = "A passionate team committed to crafting stunning creations";
    subText = "passionate"; // The word to be styled with text-primary
  } else if (pathname === "/service") {
    mainText = "Our services, empowering your vision with our expertise.";
    subText = "services";
  } else if (pathname === "/portfolio") {
    mainText = "Our product development & design resources";
    subText = "product";
  }

  // Clean the word (strip punctuation and convert to lowercase)
  const cleanWord = (word: string) =>
    word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();

  return (
    <div>
      <div className="relative lg:mx-9 mx-4">
        {/* Main heading with dynamic text */}
        <h1 className="p-4 lg:text-fs-54 text-fs-30 lg:text-left text-justify-center text-white">
          {mainText.split(" ").map((word, index) => {
            // Define where to insert <br /> based on screen size and target words
            let wordWithBreak: React.ReactNode = word; // Set type to React.ReactNode

            if (
              isLargeScreen &&
              (word.toLowerCase() === "crafting" ||
                word.toLowerCase() === "vision" ||
                word.toLowerCase() === "design")
            ) {
              wordWithBreak = (
                <>
                  {word} <br />
                </>
              );
            }

            return (
              <span
                key={index}
                className={
                  cleanWord(word) === cleanWord(subText) ? "text-primary" : ""
                }
              >
                {wordWithBreak}{" "}
              </span>
            );
          })}
        </h1>

        {/* Video */}
        <div className="absolute lg:top-[15px] top-[100px] z-[-1] lg:right-[20%] right-[5%]">
          <video
            className="lg:w-[371px] lg:h-[209px] w-[100px] h-[80px] object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/icon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Aboutheader;
