import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#426fbc',
          red: '#b5282e',
        },
        accent: {
          offwhite: '#efefef',
          darkgrey: '#2a2a2a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#efefef',
          muted: '#444444',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-archivo-black)', 'sans-serif'],
      },
      borderRadius: {
        'eight': '8px',
      },
    },
  },
  plugins: [],
};
export default config;