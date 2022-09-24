export default {
  head: {
    title: "frontend",
    htmlAttrs: {
      lang: "pt-BR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/fontawesome"],
  modules: ["@nuxtjs/axios", "nuxt-buefy"],
  axios: {
    baseURL: "https://rickandmortyapi.com/api",
  },
  fontawesome: {
    icons: {
      solid: ["faEllipsis"],
    },
  },
  build: {},
};
