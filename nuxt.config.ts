import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  alias: {
    // Doc: https://nuxt.com/docs/api/configuration/nuxt-config#alias
    '@utils': fileURLToPath(new URL('./src/utils/', import.meta.url)),
  },
})
