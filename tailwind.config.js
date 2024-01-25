/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: { center: true },
      colors: {
        primary: "rgba(var(--color-primary) / <alpha-value>)",
        ["primary-darker"]: "rgba(var(--color-primary-darker) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
