/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#ffe7a8',
      },
      boxShadow: {
        'text-custom': '0.08em 0.08em 0.08em rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        alegreya: ['Alegreya', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
      animation: {
        scaleIn: 'scaleIn 0.5s ease-in-out',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'custom': '6px 6px 18px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
