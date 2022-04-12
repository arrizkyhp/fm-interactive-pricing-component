module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-cyan': '#a5f3eb',
        'strong-cyan': '#10d5c2',
        'light-grayish-red': '#feece7',
        'light-red': '#ff8c66',
        'pale-blue': '#bdccff',
        'white': '#ffffff',
        'very-pale-blue': '#fafbff',
        'light-grayish-blue': '#eaeefb',
        'light-grayish-blue-1': '#cdd7ee',
        'grayish-blue': '#858fad',
        'dark-desaturated-blue': '#293356'
      },
      fontSize: {
        'default': '0.938rem',
        'xl': '1.75rem',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
