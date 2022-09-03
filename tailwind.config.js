/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./blocks/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {},
};
