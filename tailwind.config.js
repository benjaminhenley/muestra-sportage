/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /^win:/, // Esto protege TODAS las clases que comienzan con "win:"
    },
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        win: { raw: "(min-width: 1280px) and (max-height: 700px)" },
      },
      colors: {
        "midnight-black": "#05141F",
        "kia-polar-white": "#FFF",
        "kia-gray": "#697279",
        "kia-red": "#EA0029",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)",
      },
      backdropBlur: {
        12: "blur(12px)",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        normal: 500,
        medium: 600,
        semibold: 700,
        bold: 800,
      },
      fontFamily: {
        kia: ["Kia", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thumb-rounded": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f8f8f8",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "red",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addBase }) {
      addBase({
        // H1 Headline (36px/38px on desktop, 18px/20px on mobile)
        h1: {
          fontSize: "1.5rem", // 24px
          lineHeight: "1.625rem", // 20px
          fontWeight: 400, // Default to regular weight
          "@screen md": {
            fontSize: "2.25rem", // 36px
            lineHeight: "2.375rem", // 38px
          },
        },
        // H2 Title (30px/32px on desktop, 16px/18px on mobile)
        h2: {
          fontSize: "1.25rem", // 20px
          lineHeight: "1.375rem", // 22px
          fontWeight: 400,
          "@screen md": {
            fontSize: "1.875rem", // 30px
            lineHeight: "2rem", // 32px
          },
        },
        // H3 Subtitle (24px/26px on desktop, 14px/16px on mobile)
        h3: {
          fontSize: "1.125rem", // 18px
          lineHeight: "1.25rem", // 20px
          fontWeight: 400,
          "@screen md": {
            fontSize: "1.5rem", // 24px
            lineHeight: "1.625rem", // 26px
          },
        },
        // H4 (T1 Body large) (18px/20px on desktop, 14px/16px on mobile)
        h4: {
          fontSize: "1rem", // 16px
          lineHeight: "1.125rem", // 18px
          fontWeight: 400,
          "@screen md": {
            fontSize: "1.125rem", // 18px
            lineHeight: "1.25rem", // 20px
          },
        },
        // H5 (T2 Body medium) (16px/18px on desktop, 12px/14px on mobile)
        h5: {
          fontSize: "0.875rem", // 14px
          lineHeight: "1rem", // 16px
          fontWeight: 400,
          "@screen md": {
            fontSize: "1rem", // 16px
            lineHeight: "1.125rem", // 18px
          },
        },
        // H6 (T3 Body small) (14px/16px on desktop, 10px/12px on mobile)
        h6: {
          fontSize: "0.75rem", // 12px
          lineHeight: "0.875rem", // 14px
          fontWeight: 400,
          "@screen md": {
            fontSize: "0.875rem", // 14px
            lineHeight: "1rem", // 16px
          },
        },

        // Add utility classes for font weights
        ".font-light": {
          fontWeight: 300,
        },
        ".font-regular": {
          fontWeight: 400,
        },
        ".font-bold": {
          fontWeight: 700,
        },
      });
    },
  ],
};
