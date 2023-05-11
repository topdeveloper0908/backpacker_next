/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,jsx,ts,jsx,tsx,mdx}',
    './app/**/*.{js,jsx,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#8913ff',
      'primary80': '#ab56ff',
      'primary60': '#cc9aff',
      'primary40': '#eeddff',
      'primary20': '#f7efff',
      'dark': '#00ce9d',
      'dark100': '#0f0e12',
      'dark80': '#3d4049',
      'dark60': '#60636f',
      'dark40': '#d7dce6',
      'dark20': '#edf0f6',
      'secondary': '#00ce9d',
      'secondary80': '#3dffd0',
      'secondary60': '#8affe3',
      'secondary40': '#d8fff6',
      'secondary20': '#edfffb',
      'third': '#ff1a88',
      'third80': '#ff5baa',
      'third60': '#ff9dcc',
      'third40': '#ffdeee',
      'white': '#fff'
    },
    fontFamily: {
      primary: ['Work Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '12px',
      base: '15px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
