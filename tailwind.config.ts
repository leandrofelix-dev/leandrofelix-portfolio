/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-dim': 'var(--primary-dim)',
        'secondary': 'var(--secondary)',
        'background': 'var(--background)',
        'accent': 'var(--accent)',
      },
      fontFamily: {
        'sans': 'var(--font-sans)',
        'accent': 'var(--font-accent)',
      },
      fontSize: {
        'xx': 'var(--font-xx)',
        'xs': 'var(--font-xs)',
        's': 'var(--font-s)',
        'r-s': 'var(--font-r-s)',
        'r': 'var(--font-r)',
        'm': 'var(--font-m)',
        'l': 'var(--font-l)',
        'xl': 'var(--font-xl)',
        'xl-l': 'var(--font-xl-l)',
      },
      spacing: {
        '4-': 'var(--size-4-)',
        '3-': 'var(--size-3-)',
        '2-': 'var(--size-2-)',
        '1x': 'var(--size-1x)',
        '2x': 'var(--size-2x)',
        '3x': 'var(--size-3x)',
        '4x': 'var(--size-4x)',
        '5x': 'var(--size-5x)',
        '6x': 'var(--size-6x)',
        '7x': 'var(--size-7x)',
      },
      maxWidth: {
        'reading': 'var(--reading-width)',
      },
      screens: {
        'mobile': {'max': 'var(--mobile)'},
      },
    },
  },
  plugins: [],
};
