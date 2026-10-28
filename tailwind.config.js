// Builds functions/tailwind.css from the Tailwind classes used in the PHP pages.
// Run this after adding or changing Tailwind classes:
//   npx tailwindcss@3.4.17 -i functions/tailwind.input.css -o functions/tailwind.css --minify
module.exports = {
  content: ['./*.php'],
};
