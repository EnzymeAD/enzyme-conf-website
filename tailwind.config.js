module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      colors: {
        enzymeblue: '#0094E8'
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};