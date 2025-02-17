/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ireng: {
          200: "#A4A4A4",
          300: "#434343",
          500: "#242424",
          700: "#111111",
        },
        line_border: {
          500: "#3D3D3D",
        },
      },
    },
  },
  plugins: [],
};
