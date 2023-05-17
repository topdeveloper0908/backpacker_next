/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,jsx,ts,jsx,tsx,mdx}',
    './app/**/*.{js,jsx,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'purple': '#8913ff',
      'purple80': '#ab56ff',
      'purple60': '#cc9aff',
      'purple40': '#eeddff',
      'purple20': '#f7efff',
      'grey': '#0f1012',
      'grey80': '#42454d',
      'grey60': '#676d79',
      'grey40': '#d8dade',
      'grey20': '#ecedef',
      'green': '#00ce9d',
      'green80': '#3dffd0',
      'green60': '#8affe3',
      'green40': '#d8fff6',
      'green20': '#edfffb',
      'white': '#fff',
      'alert': '#ffb23e',
      'error': '#f45050',
      'custom': '#f9fafa'
    },
    fontFamily: {
      primary: ['Work Sans', 'sans-serif'],
    },
    lineHeight: {
      custom: '14.08px'
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
