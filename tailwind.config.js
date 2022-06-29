/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern-bg.png')",
        // https://www.freepik.com/free-vector/topographic-map-contour-lines-water-colours_8848438.htm#page=3&query=map&position=9&from_view=search
      }),
    },
  },
  plugins: [],
};
