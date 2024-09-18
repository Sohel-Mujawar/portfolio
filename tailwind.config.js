/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Specifies the paths to all of your template files
  ],
  theme: {
    extend: {
      colors: {
        colorOne: '#ab49de',    // Custom color 1
        colorTwo: '#5b41f2',    // Custom color 2
        bgcolor: '#201c29',     // Background color
        light: '#fefefe',       // Light color
      },
      animation: {
        vawe: 'vawe 5s linear infinite',  // Custom animation
      },
      keyframes: {
        vawe: {
          '20%': { borderRadius: '45% 55% 62% 38% / 53% 51% 49% 47%' },
          '40%': { borderRadius: '45% 55% 49% 51% / 36% 51% 49% 64%' },
          '60%': { borderRadius: '60% 40% 57% 43% / 47% 62% 38% 53%' },
          '80%': { borderRadius: '60% 40% 32% 68% / 38% 36% 64% 62%' },
        },
      },
    },
  },
  plugins: [],
}
