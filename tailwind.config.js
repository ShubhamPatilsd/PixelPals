/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["VT323", "monospace"],
      },

      animation: {
        animatefast: "animatefast 0.2s infinite",
      },

      keyframes: {
        animatefast: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
  safelist: ["bg-yellow-500", "bg-green-500", "bg-red-500"],
};
