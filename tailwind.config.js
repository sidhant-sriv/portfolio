// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'media', // Enables dark mode based on user's system preference
  theme: {
    extend: {
      colors: {
        lilac: '#C8A2DF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}