import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
primary: '#01B78F',
        dark: '#111111',
        'dark-lighter': '#1a1a1a',
        'card': '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-oswald)'],
      },
    },
  },
  plugins: [],
}
export default config