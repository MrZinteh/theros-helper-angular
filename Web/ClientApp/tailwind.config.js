/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    fontFamily: {
      'header': ['Roboto Slab', 'serif']
    },
    extend: {
      backgroundImage: {
        'header-pattern': "url('assets/red_nebula.png')",
        'theros-green': "transparent linear-gradient(261deg, #2B8472 0%, #0F977C 100%) 0% 0% no-repeat padding-box"
      },
      colors: {
        'theros-start': '#2B8472',
        'theros-end': '#0F977C',
        'theros-bg': '#009879',
        'dnd-green': 'rgb(71, 209, 140)',
        'dnd-red': 'rgb(188, 15, 15)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
