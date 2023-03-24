/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars1' : 'url("/stars.png")', 
        'mount1' : 'url("/mountains_front.png")',
        'mount2' : 'url("/moon.png")',
        'mount3' : 'url("/mount.jpg")'
      },
      
    },
  },
  plugins: [],
}
