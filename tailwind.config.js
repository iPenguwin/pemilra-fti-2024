/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        newsweekly: ["Newsweekly", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#022960",

          "secondary": "#ac6c56",

          "accent": "#708573",

          "neutral": "#c37f57",

          "base-100": "#06234c",

          "info": "#994b35",

          "success": "#d2bb9c",

          "warning": "#7ea297",

          "error": "#F87272",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
