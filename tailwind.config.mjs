/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#0a364f",
        primaryDark:"#072537",
        primaryLight:"#3a5e72",
        grayBg:"#fbfbfb"
      },
      fontSize:{
        'xxs':"8px"
      }
    },
  },
  plugins: [],
};
