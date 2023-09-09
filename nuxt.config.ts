export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ramutable App",
    },
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL,
    },
  },
});
