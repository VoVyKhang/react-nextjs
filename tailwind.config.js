/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        grayf4: '#f4f4f4',
        grayfc: '#fcfcfc',
        primary: '#475BE8',
        gray80: '#808191',
        primaryText: '#11142D',
        secondary: '#DADEFA',
      },
      spacing: {
        c10: '10px',
      },
    },
  },
  plugins: [],
}
