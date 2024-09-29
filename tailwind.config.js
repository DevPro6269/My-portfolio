/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,}"],
  theme: {
    extend: {
      screens: {
        'xsm': '500px',  // Adding the custom breakpoint 'xsm'
      },
    },
  },
  plugins: [],
}

