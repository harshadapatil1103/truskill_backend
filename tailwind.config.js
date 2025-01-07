module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths to match your project structure
    "./public/index.html",
    "./admin/**/*.{html,js,jsx,ts,tsx}", // Add paths for Strapi admin panel if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
