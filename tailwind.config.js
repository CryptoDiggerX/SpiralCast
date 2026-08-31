/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF5",
          100: "#F8F3E8",
          200: "#F1E9D6",
          300: "#E8DCC0",
        },
        ink: "#1A1712",
        gold: {
          400: "#C9A227",
          500: "#B8935A",
          600: "#9C7A3F",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
