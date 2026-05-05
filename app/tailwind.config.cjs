/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,mdx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'background-light': '#f6f7f8',
        'background-dark': '#101c22',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'text-light': '#212121',
        'text-dark': '#f5f5f5',
        'neutral-light': '#F5F5F5',
        'neutral-dark': '#2a2a2a'
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}