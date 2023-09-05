/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary-bg': '#312651',
      },
      width: {
        'box' : 4/7,
      },
      height: {
        'emp' : '12',
        '128': '32rem',
      }
    },
  },
  fontFamily: {
    Sans: 'DM Sans',
    
  },
  plugins: [],
}
