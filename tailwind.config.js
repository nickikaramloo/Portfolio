/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'holiday': ['Holiday', 'cursive'],
          'sf-pro': ['SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }