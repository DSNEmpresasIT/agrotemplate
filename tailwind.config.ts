import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        body: '#F7F7F7',
        navbar: '#181818',
        footer: '#0F1B28',
        colorLight:'#ffb11f',
        buttonHover: '#0F1B28',
        'light': '#ffb11f',
        'inactive-light': '#ffb11f21',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("flowbite/plugin"),
    require('tailwindcss-animated')
  ],
}
export default config
