/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
       keyframes: {
        'neon-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'neon-gradient': 'neon-gradient 5s ease-in-out infinite',
      },
      colors: {
        default: "#101010",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
