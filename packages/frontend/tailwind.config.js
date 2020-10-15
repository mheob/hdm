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
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.{js,ts,jsx,tsx}',
      'src/containers/**/*.{js,ts,jsx,tsx}',
      'src/pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        hdm: '#007ab0',
        'hdm-dark': '#006999',
        cerastar: '#f8efef',
      },
      maxWidth: {
        1400: '1400px',
      },
      rotate: {
        '-10': '-10deg',
        10: '10deg',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    rotate: ['hover', 'group-hover'],
  },
  plugins: [],
}
