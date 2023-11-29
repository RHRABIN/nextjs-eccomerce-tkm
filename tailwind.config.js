/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#727272'
      }
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        xxl: '1200px',
      }
    }
  },
  plugins: [],
}