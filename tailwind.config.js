/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        harmattan: ["Harmattan", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        hammersmith: ["Hammersmith One", "sans-serif"],
        baloo: ["Baloo Bhaijaan", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
