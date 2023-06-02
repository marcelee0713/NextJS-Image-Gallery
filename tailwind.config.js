/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "800px" },

      sm: { max: "600px" },

      xsm: { max: "400px" },
    },
    extend: {
      spacing: {
        "1px": "1px",
      },
      transitionProperty: {
        height: "max-height",
      },
      maxHeight: {
        navHeight: "280px",
      },
      fontSize: {
        "14px": "14px",
      },
    },
  },
  plugins: [],
};
