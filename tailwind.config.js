/***********************
 * Tailwind Config (CRA)
 ***********************/
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff8ff",
          100: "#dff1ff",
          200: "#bfe3ff",
          300: "#80c7ff",
          400: "#38bdf8",
          500: "#0ea5e9", // primary blue
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        accent: {
          400: "#fbbf24", // soft yellow accent
          500: "#f59e0b",
        },
      },
      boxShadow: {
        glossy: "0 10px 30px rgba(14,165,233,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
