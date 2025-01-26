import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F9FAFB',
          primary: '#2563EB',
          secondary: '#3B82F6',
          accent: '#F59E0B',
          text: '#111827',
          card: '#FFFFFF',
          button: '#1D4ED8',
          border: '#E5E7EB',
        },
        dark: {
          background: '#1F2937',
          primary: '#3B82F6',
          secondary: '#2563EB',
          accent: '#FBBF24',
          text: '#F9FAFB',
          card: '#374151',
          button: '#1D4ED8',
          border: '#4B5563',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class"
} satisfies Config;
