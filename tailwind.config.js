/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e8edf3',
          200: '#cdd9e8',
          300: '#a3b8d2',
          400: '#6f8db5',
          500: '#4a6a96',
          600: '#36517b',
          700: '#243d63',
          800: '#162c4d',
          900: '#0f2a4a',
          950: '#081a30',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd3',
          200: '#ead8a8',
          300: '#ddbf78',
          400: '#cda856',
          500: '#c9a24b',
          600: '#a8813a',
          700: '#855f2f',
          800: '#5f4424',
          900: '#3d2d18',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'kenburns': 'kenburns 18s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
      },
    },
  },
  plugins: [],
};
