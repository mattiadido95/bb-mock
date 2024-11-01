/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      soft_green: {
        DEFAULT: "#85C7DC",
        secondary: "#f8f8f8",
      },
      grey: {
        DEFAULT: "#888",
        secondary: "#f8f8f8",
      },
      orange: "#f2994a",
      outline: "#f1f1f1",
      pink: "#f3d1d7",
      body: "#e5e5e5",
    },
    extend: {
/*       colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      }, */
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
    },
    backgroundImage: {
      hero: "url(/hero/bg.png)",
      hero2: "url(/hero/bg-2.png)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
