/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050511',       // Background sangat gelap
          card: '#0c0c1d',     // Warna dasar kartu
          primary: '#00f0ff',  // Cyan Neon (Warna utama)
          secondary: '#ff003c',// Pink/Red Neon (Warna aksen 1)
          accent: '#7000ff',   // Purple Neon (Warna aksen 2)
          text: '#e0e6ed'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Pastikan font bersih
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.4)',
        'neon-pink': '0 0 5px #ff003c, 0 0 20px rgba(255, 0, 60, 0.4)',
        'neon-purple': '0 0 5px #7000ff, 0 0 20px rgba(112, 0, 255, 0.4)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}