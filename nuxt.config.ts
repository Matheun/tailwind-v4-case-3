export default defineNuxtConfig({
  css: ["./assets/style/tailwind.scss"],
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
})