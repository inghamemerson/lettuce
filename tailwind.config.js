const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Avenir', 'Helvetica', 'Arial', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'mono': ["Operator Mono A", "Operator Mono B", ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [],
}
