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
  plugins: ["@/plugins/mask.js"],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/fontawesome"],
  modules: ["@nuxtjs/axios", "nuxt-buefy"],
  axios: {
    baseURL: "http://ec2-54-94-75-93.sa-east-1.compute.amazonaws.com:8080",
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  build: {},
  loading: false,
};
