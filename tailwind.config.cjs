/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1440px",
      "3xl": "1980px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        base: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#1d1d1d",
        },
        pinky: {
          50: "#fbf5f5",
          100: "#f6eaea",
          200: "#f0d8d8",
          300: "#e5bcbc",
          400: "#d49595",
          500: "#bf6d6d",
          600: "#ab5757",
          700: "#8f4646",
          800: "#773d3d",
          900: "#653737",
          950: "#351a1a",
        },
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out forwards",
      },
    },
    
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};

// ...
	// extend: {
    //   keyframes: {
    //     fadeIn: {
    //       "0%": { opacity: 0 },
    //       "100%": { opacity: 100 },
    //     },
    //   },
    //   animation: {
    //     fadeIn: "fadeIn 0.2s ease-in-out forwards",
    //   },
    // },
    // ...