/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946", // This is your custom red color
        secondary: "#303030",
        "bg-card": "#4949494F",
        "banner-button": "#424242A6",
        glass: "#29292961",
        white: "#FFFFFF",
        "light-gray": "#BEBEBE",
        "lighest-gray": "#F0F0F069",
        "home-card": "#29292961",
      },
      fontSize: {
        "fs-16": "16px", // Custom font size of 20px
        "fs-20": "20px", // Custom font size of 20px
        "fs-24": "24px", // Custom font size of 20px
        "fs-25": "25px", // Custom font size of 20px
        "fs-26": "26px", // Custom font size of 20px
        "fs-30": "30px", // Custom font size of 20px
        "fs-44": "44px", // Custom font size of 20px
        "fs-54": "54px", // Custom font size of 20px
        "fs-64": "64px", // Custom font size of 20px
      },
      spacing: {
        "custom-pt": "92px", // Custom padding-top value
      },
      height: {
        80: "22rem", // Custom height for h-80
        90: "33rem", // Custom height for h-80
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.3) 0%, rgba(128, 32, 39, 0) 100%)",
      },

      borderWidth: {
        0.4: "0.4px", // Custom border width
        0.1: "0.1px", // Custom border width
      },
      lineHeight: {
        1.2: "5px",
      },
      animation: {
        "square-1":
          "square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite",
        "square-2":
          "square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s infinite",
        "square-3":
          "square-anim 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.4s infinite",
      },
      keyframes: {
        "square-anim": {
          "0%": { height: "80px", backgroundColor: "rgb(111, 163, 240)" },
          "20%": { height: "80px" },
          "40%": { height: "120px", backgroundColor: "rgb(111, 200, 240)" },
          "80%": { height: "80px" },
          "100%": { height: "80px", backgroundColor: "rgb(111, 163, 240)" },
        },
      },
    },
  },
  plugins: [],
  compilerOptions: {
    typeRoots: ["node_modules/@types", "src/types"],
  },
};
