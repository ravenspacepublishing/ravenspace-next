/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rs-purple": "#51416e",
        "rs-light-purple": "#a4a5c4",
        "rs-dark-purple": "#2e2441",
        "rs-gray": "#292931",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "auto",
            },
            video: {
              margin: "auto",
            },
            audio: {
              margin: "auto",
            },
            iframe: {
              margin: "auto",
            },
            ol: {
              padding: "0 2em",
            },
            ul: {
              paddingLeft: "1rem",
              listStyleType: "disc",
              marginBottom: "1.25rem",
              marginLeft: "0.625rem",
            },
            li: {
              marginBottom: "0.75rem",
              fontWeight: "300",
              lineHeight: "1.5rem",
              color: "#292931",
            },
            "li::marker": {
              color: "#292931",
            },
            h1: {
              color: "#51416e",
              fontWeight: "400",
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              marginBottom: "1.25rem",
              letterSpacing: "0.1em",
            },
            h2: {
              color: "#51416e",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              marginBottom: "1.25rem",
              marginTop: "3rem",
              fontWeight: "400",
            },
            h3: {
              marginBottom: "0.75rem",
              marginTop: "1.75rem",
              fontWeight: "400",
              color: "#292931",
            },
            p: {
              color: "#292931",
              fontWeight: "300",
              lineHeight: "1.5rem",
              marginBottom: "1.25rem",
            },
            a: {
              textDecoration: "underline",
              color: "#5050bc",
              fontWeight: "300",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
