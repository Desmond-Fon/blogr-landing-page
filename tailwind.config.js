/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'header' :' hsl(356, 100%, 66%)',
        'headerText': 'hsl(13, 100%, 72%)',
        'darkBlue': 'hsl(237, 17%, 21%)',
        'darkSaturatedBlue': 'hsl(237, 23%, 32%)',
        'footerText': 'hsl(240, 2%, 79%)',
        'bodyCopy': ' hsl(207, 13%, 34%)',
        'footerBackground': 'hsl(240, 10%, 16%)',
        'headings': 'hsl(208, 49%, 24%)',
        'lightRed': 'hsl(353, 100%, 62%)'
      },
      fontFamily: {
        Overpass: [ 'Overpass', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif']
     },
     screens: {
        'little': '435px'
     },
     borderRadius: {
      'mid': '90px'
     },
height: {
'high': '45%'
}
    },
  },
  plugins: [],
}
