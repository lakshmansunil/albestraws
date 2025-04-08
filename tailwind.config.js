/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      height:{

        '128':'36rem',
        '280': '70rem',
        '288': '72rem',      },
      maxWidth:{
        '128':'36rem',
        '280': '70rem',
        '288': '72rem',
      },
      minWidth:{

        '128':'36rem',
        '280': '70rem',
        '288': '72rem',      }
    },
  },
  plugins: [
   
  ],
}

