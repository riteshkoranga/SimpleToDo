/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 5px rgba(0, 0, 0, 0.1)", // Adjust the values as needed
      },
      colors: {
        lightgray: "#D3D3D3", // Define your universal light gray color
      },
    },
  },
  plugins: [],
};
