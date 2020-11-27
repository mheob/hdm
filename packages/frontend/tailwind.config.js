/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.{js,ts,jsx,tsx}', 'containers/**/*.{js,ts,jsx,tsx}', 'pages/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
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
