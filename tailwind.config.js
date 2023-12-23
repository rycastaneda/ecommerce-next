/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#23A6F0",
      secondary: "#23856D",
      text: "#252B42",
      gray: "#737373",
      light: "#FFF",
      muted: '#BDBDBD'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '45': '11.687rem ',
        '154': '38.5rem',
        '59': '14.875rem'
      },
      fontSize: {
        '3xl': '2.5rem'
      }
    },
  },
  plugins: [],
}

