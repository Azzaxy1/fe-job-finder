// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E63AE",
        secondary: "#f97316",
      },
      fontSize: {
        mobile: "14px",
        tablet: "16px",
        desktop: "18px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

