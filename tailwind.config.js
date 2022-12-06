/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6CB73A",
        secondary: "#2F3640",
        danger: "#FF4242",
        warning: "#FE7200",
      },
      bg: {
        primary: "#6CB73A",
        secondary: "#2F3640",
        danger: "#FF4242",
        warning: "#FE7200",
      },
    },
  },
  plugins: [],
};
