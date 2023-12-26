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
        primary: '#FC8C65',
        secondary: '#F7F0EA',
        tertiary: '#FFC7B6',
        text: {
          // gray1: '#A6A6A6',
          // gray2: '#331B3BA8',
          // grayblue: '#0F172A'
          nav: '#A6A6A6',
          body: {
            gray1: '#A6A6A6',
            gray2: '#331B3BA8',
            bluegray: '#0F172A',
            purple: '#331B3B',
          },
          h1: '#191A15',
          h2: {
            purple: '#331B3B',
            black: '#191A15'
          },
          h3: '#191A15',
          h4: {
            purple: '#331B3B',
            bluegray: '#0F172A'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
