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
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      text: "text",
      "not-allowed": "not-allowed",
      grab: "grab",
    },
    extend: {
      colors: {
        hdm: "#0084b0",
        cerastar: "#f8efef",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {},
  plugins: [],
}
