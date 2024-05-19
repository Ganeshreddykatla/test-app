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
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
    colors: {
      white: "#ffffff",
      whites: {
        smoke: "#F3F3F3",
        fade: "#ecf4fc",
        light: "#f5f6f9",
      },
      red:{
      500:'#ef4444'
      },

      blue: {
        main: "#0b40c9",
        cool: "#00448C",
      },
      gray: {
        main: "#808080",
        strom: "#7e8290",
      },
      black: {
        main: "#000000",
        charcoal: "#333333",
        eerie: "#202020",
      },
      distemper: {
        main: "#09a2b3",
        light: "#d3f8fb",
      },
    },
  },
  plugins: [],
};
