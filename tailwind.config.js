/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',
        secondary: '#007BFF',
        accent: '#FF3D00',
        dark: '#212121',
      },
      animation: {
        scroll: 'scroll 1.5s infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};