/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#0F172A",
          600: "#475569",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50: "#F8FAFC"
        },
        brand: {
          primary: "#2563EB",
          "primary-light": "#EFF6FF"
        },
        success: "#16A34A",
        danger: "#DC2626"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(15, 23, 42, 0.04)"
      }
    }
  },
  plugins: []
};
