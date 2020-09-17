/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.{js,ts,jsx,tsx}", "containers/**/*.{js,ts,jsx,tsx}", "pages/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        hdm: "#007ab0",
        cerastar: "#f8efef",
      },
      height: {
        600: "600px",
      },
      maxWidth: {
        1400: "1400px",
      },
      padding: {
        "16/9": "56.25%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
}
