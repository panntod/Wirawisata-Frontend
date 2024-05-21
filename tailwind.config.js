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
        "main-darker": "#1279A2",
        secondary: "#3D6CB9",
      },
    },
  },
  plugins: [],
};
