import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }},
    colors: {
      background: "#F4F4F4",
      foreground: "#0c0c0c"
    }
  },
  plugins: [],
}
export default config