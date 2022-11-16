/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        dark: '#061224',
        success: '#1064E5',
        'light-blue': '#E2EDFB',
        'light-blue-100': '#EFF6FD',
        'dark-blue-10': 'rgba(6, 18, 36, 0.1)',
        'dark-blue-20': 'rgba(6, 18, 36, 0.2)',
        'dark-blue-30': 'rgba(6, 18, 36, 0.3)',
        'dark-blue-40': 'rgba(6, 18, 36, 0.4)',
        'dark-blue-50': 'rgba(6, 18, 36, 0.5)',
        'dark-blue-60': 'rgba(6, 18, 36, 0.6)',
        'dark-blue-70': 'rgba(6, 18, 36, 0.7)',
        'dark-blue-80': 'rgba(6, 18, 36, 0.8)',
        'dark-blue-90': 'rgba(6, 18, 36, 0.9)',
        'dark-blue-100': '#061224',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        'plex-serif': ['IBM Plex Serif', 'serif'],
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '375px',
      // => @media (min-width: 640px) { ... }

      sm: '500px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
