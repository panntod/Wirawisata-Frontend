// Konfigurasi untuk tailwind
export default {
  content: [
    "./src/components/**/*.{jsx,tsx}",
    "./src/views/**/*.{jsx,tsx}",
    "./src/**/*.{jsx,tsx}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors: {
        main: "#00D1FF",
        secondary: "#3D6CB9",
      },
    },
  },
  plugins: [],
};
