module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/templates/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1502FF',
        'pink': '#F83098',
        'yellow': '#FEE52A',
        'light': '#FBF7EE'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Orelega One"', 'serif']
      },
    },
    
  },
  plugins: [],
}
