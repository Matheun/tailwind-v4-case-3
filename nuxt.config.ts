export default defineNuxtConfig({
  css: ["./assets/style/tailwind.scss"],
  postcss: {
    parser: 'postcss-scss',
      plugins: {
          "@tailwindcss/postcss": {},
      },
  },
})