/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '88': '89rem',
        'cy': '40rem',
        'cx' : '45rem',
        'gx' : '37rem',
        'gh' : '35rem',
        'ry' : '22rem',
       }
    },
  },
  plugins: [],
}

