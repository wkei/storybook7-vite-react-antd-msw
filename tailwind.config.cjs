/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
