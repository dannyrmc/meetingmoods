/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ["var(--font-gilroy-bold)", "var(--font-poppins)"],
      'poppins': ["var(--font-poppins)"]
    },

    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translate(0, 0)', boxShadow: '8px 8px 0px #111827' },
          '50%': { transform: 'translate(4px, 4px)', boxShadow: '0px 0px 0px #111827' },

        },
      },
      animation: {
        'moving': 'move 0.3s ease-[cubic-bezier(0.45,1.45,0.8,1)]',
      },
    },
  },
  plugins: [],
};
